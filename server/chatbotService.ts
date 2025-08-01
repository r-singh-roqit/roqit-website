import OpenAI from "openai";
import type { ChatMessage } from "../shared/chatbot-schema";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY environment variable must be set");
}

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

const ROQIT_CONTEXT = `
You are ROQIT's intelligent assistant, helping users understand our AI-powered fleet management and asset intelligence platform.

ROQIT PLATFORM OVERVIEW:
- AI-powered fleet management and asset intelligence platform
- Provides real-time visibility into fleet operations, driver behavior, and asset performance
- Offers 30-40% cost reductions while improving operational efficiency
- Focuses on sustainable operations with carbon tracking and ESG reporting

KEY FEATURES:
1. Real-time Fleet Monitoring: Live tracking of vehicles, assets, and driver behavior
2. AI-Powered Analytics: Predictive maintenance, route optimization, fuel efficiency analysis
3. Sustainability Metrics: CO2 emissions tracking, carbon credit management, ESG reporting
4. Driver Management: Behavior monitoring, safety scoring, training recommendations
5. Route Optimization: AI-driven route planning for maximum efficiency
6. Predictive Maintenance: Early warning systems to prevent breakdowns
7. Cost Analytics: Detailed cost breakdowns and optimization recommendations
8. Mobile Access: Full platform access on mobile devices

BENEFITS:
- 30-40% reduction in operational costs
- Improved driver safety and behavior
- Real-time visibility across entire fleet
- Automated compliance and reporting
- Carbon footprint reduction
- Enhanced asset utilization

TARGET CUSTOMERS:
- Logistics and transportation companies
- Delivery services
- Construction companies
- Service fleets
- Government fleets
- Any business with moving assets

PRICING: Custom pricing based on fleet size and requirements

GETTING STARTED:
- Contact our team at info@roqit.com
- Free demo and consultation available
- Implementation support included

INSTRUCTIONS:
1. Answer questions about ROQIT's features, benefits, and capabilities
2. Be helpful, professional, and knowledgeable
3. If asked about specific pricing, technical implementation details, or custom requirements that require detailed consultation, suggest they contact our team
4. If asked about topics completely unrelated to fleet management, business operations, or ROQIT, politely redirect them to contact our team for personalized assistance
5. Keep responses concise but informative
6. Always maintain a professional, helpful tone

If a user asks something that requires personalized consultation or is outside your knowledge base, respond with: "For detailed information about this topic, I'd recommend speaking with our team directly. Please use the contact form below and we'll get back to you personally."
`;

export async function getChatbotResponse(
  userMessage: string,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  try {
    // Build conversation context
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: ROQIT_CONTEXT
      }
    ];

    // Add conversation history
    conversationHistory.forEach(msg => {
      messages.push({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content
      });
    });

    // Add current user message
    messages.push({
      role: "user",
      content: userMessage
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "I apologize, but I'm having trouble responding right now. Please try again or contact our team directly.";
  } catch (error) {
    console.error('Chatbot service error:', error);
    // Fallback to predefined responses when OpenAI is unavailable
    return getFallbackResponse(userMessage);
  }
}

// Predefined responses for common questions when OpenAI is unavailable
const FALLBACK_RESPONSES: Record<string, string> = {
  "what is roqit": "ROQIT is an AI-powered fleet management and asset intelligence platform that helps businesses optimize their operations while achieving sustainability goals. We provide real-time visibility into fleet operations, driver behavior, and asset performance, typically delivering 30-40% cost reductions.",
  
  "roqit help reduce costs": "ROQIT helps reduce fleet costs through: 1) AI-powered route optimization that cuts fuel consumption by 15-25%, 2) Predictive maintenance that prevents costly breakdowns, 3) Driver behavior monitoring that reduces accidents and insurance costs, 4) Real-time analytics that identify inefficiencies, and 5) Automated reporting that saves administrative time.",
  
  "sustainability features": "ROQIT offers comprehensive sustainability features including: Real-time CO2 emissions tracking across your entire fleet, Carbon credit management to generate and trade credits from sustainability initiatives, ESG reporting for stakeholders, and AI-powered optimization to reduce environmental impact while maintaining operational efficiency.",
  
  "ai analytics work": "Our AI-powered analytics use machine learning to analyze real-time data from your fleet including GPS tracking, engine diagnostics, driver behavior, and environmental conditions. The system provides predictive maintenance alerts, route optimization recommendations, fuel efficiency insights, and performance benchmarking to help you make data-driven decisions.",
  
  "fleet sizes support": "ROQIT supports fleets of all sizes, from small businesses with 5-10 vehicles to large enterprises with thousands of assets. Our platform scales automatically to meet your needs, with custom pricing based on fleet size and requirements. Whether you're managing delivery vans, construction equipment, or service vehicles, ROQIT adapts to your industry.",
  
  "get started": "Getting started with ROQIT is simple: 1) Contact our team for a free consultation and demo, 2) We'll assess your specific fleet needs and challenges, 3) Our implementation team will set up the platform and integrate with your existing systems, 4) We provide training and ongoing support. The entire process typically takes 2-4 weeks.",
  
  "integrations support": "ROQIT integrates with popular fleet management tools, ERP systems, accounting software, and telematics providers. We support APIs for real-time data exchange and offer custom integration services for specialized requirements. Our platform is designed to work alongside your existing technology stack.",
  
  "data security": "ROQIT takes data security seriously with enterprise-grade encryption, secure cloud infrastructure, compliance with industry standards, role-based access controls, and regular security audits. Your fleet data is protected with the same security measures used by Fortune 500 companies."
};

function getFallbackResponse(userMessage: string): string {
  const normalizedMessage = userMessage.toLowerCase();
  
  // Define keyword patterns for better matching
  const keywordPatterns = [
    { keywords: ['what is roqit', 'about roqit', 'roqit platform'], response: FALLBACK_RESPONSES["what is roqit"] },
    { keywords: ['reduce costs', 'save money', 'cost reduction', 'lower costs'], response: FALLBACK_RESPONSES["roqit help reduce costs"] },
    { keywords: ['sustainability', 'green', 'carbon', 'emissions', 'environmental'], response: FALLBACK_RESPONSES["sustainability features"] },
    { keywords: ['ai analytics', 'artificial intelligence', 'machine learning', 'data analytics'], response: FALLBACK_RESPONSES["ai analytics work"] },
    { keywords: ['fleet size', 'how many vehicles', 'small fleet', 'large fleet'], response: FALLBACK_RESPONSES["fleet sizes support"] },
    { keywords: ['get started', 'how to start', 'begin', 'implementation'], response: FALLBACK_RESPONSES["get started"] },
    { keywords: ['integration', 'integrate', 'connect', 'api'], response: FALLBACK_RESPONSES["integrations support"] },
    { keywords: ['security', 'data protection', 'privacy', 'secure'], response: FALLBACK_RESPONSES["data security"] }
  ];
  
  // Check for keyword pattern matches
  for (const pattern of keywordPatterns) {
    if (pattern.keywords.some(keyword => normalizedMessage.includes(keyword))) {
      return pattern.response;
    }
  }
  
  // Default response for unmatched questions
  return "Thank you for your question about ROQIT! I'd be happy to help you learn more about our AI-powered fleet management platform. For detailed information about this topic, I'd recommend speaking with our team directly. Please use the contact form below and we'll get back to you personally with comprehensive answers tailored to your specific needs.";
}

export async function shouldShowContactForm(userMessage: string): Promise<boolean> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      messages: [
        {
          role: "system",
          content: `Determine if this user question requires personalized consultation or is outside the scope of general ROQIT fleet management information. 
          
          Return "true" if the question involves:
          - Specific pricing requests
          - Custom integration requirements
          - Detailed technical implementation
          - Account-specific issues
          - Complex business requirements
          - Topics completely unrelated to fleet management
          
          Return "false" if it's a general question about ROQIT features, benefits, or capabilities.
          
          Respond with only "true" or "false".`
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      max_tokens: 10,
      temperature: 0.1,
    });

    return response.choices[0].message.content?.trim().toLowerCase() === "true";
  } catch (error) {
    console.error('Contact form check error:', error);
    // Fallback logic when OpenAI is unavailable
    const normalizedMessage = userMessage.toLowerCase();
    const contactTriggers = ['pricing', 'price', 'cost', 'quote', 'custom', 'integration', 'implementation', 'demo', 'trial', 'enterprise', 'business'];
    return contactTriggers.some(trigger => normalizedMessage.includes(trigger));
  }
}