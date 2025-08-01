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
    return "I'm experiencing some technical difficulties. For immediate assistance, please contact our team at info@roqit.com and we'll get back to you personally.";
  }
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
    return false;
  }
}