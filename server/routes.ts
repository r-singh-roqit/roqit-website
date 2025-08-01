import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactFormEmail } from "./emailService";
import { getChatbotResponse, shouldShowContactForm } from "./chatbotService";
import { chatbotQuerySchema, contactFormSchema } from "../shared/chatbot-schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store in database
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification to info@roqit.com
      const emailSent = await sendContactFormEmail(validatedData);
      
      if (!emailSent) {
        console.warn('Failed to send email notification, but form submission was saved');
      }
      
      res.json({ 
        success: true, 
        id: submission.id,
        emailSent: emailSent 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error('Contact form submission error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get contact submissions (for admin)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  // Chatbot endpoint
  app.post("/api/chatbot", async (req, res) => {
    try {
      const validatedData = chatbotQuerySchema.parse(req.body);
      
      const message = await getChatbotResponse(
        validatedData.message, 
        validatedData.conversationHistory
      );
      
      const showContactForm = await shouldShowContactForm(validatedData.message);
      
      res.json({ 
        message,
        showContactForm
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid chatbot query",
          errors: error.errors 
        });
      } else {
        console.error('Chatbot error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process chatbot query" 
        });
      }
    }
  });

  // Chatbot contact form
  app.post("/api/chatbot/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create email content for chatbot contact
      const emailData = {
        firstName: validatedData.name.split(' ')[0] || validatedData.name,
        lastName: validatedData.name.split(' ').slice(1).join(' ') || '',
        company: validatedData.company,
        email: validatedData.email,
        phone: '', // Not collected in chatbot form
        fleetSize: 'Not specified',
        message: `Chatbot Contact Form Submission:\n\n${validatedData.question}`
      };
      
      const emailSent = await sendContactFormEmail(emailData);
      
      res.json({ 
        success: true,
        emailSent: emailSent 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid contact form data",
          errors: error.errors 
        });
      } else {
        console.error('Chatbot contact form error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
