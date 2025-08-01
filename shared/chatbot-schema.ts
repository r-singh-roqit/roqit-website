import { z } from "zod";

export const chatMessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  timestamp: z.string().optional(),
});

export const chatbotQuerySchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
  conversationHistory: z.array(chatMessageSchema).optional().default([]),
});

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company is required"),
  question: z.string().min(10, "Question must be at least 10 characters"),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type ChatbotQuery = z.infer<typeof chatbotQuerySchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;

export const PREDEFINED_QUESTIONS = [
  "What is ROQIT and how does it work?",
  "How can ROQIT help reduce my fleet costs?",
  "What kind of sustainability features does ROQIT offer?",
  "How does the AI-powered analytics work?",
  "What fleet sizes does ROQIT support?",
  "How do I get started with ROQIT?",
  "What integrations does ROQIT support?",
  "How does ROQIT handle data security?",
];