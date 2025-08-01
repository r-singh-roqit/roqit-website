import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send, Bot, User, X, Mail } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { ChatMessage } from "@shared/chatbot-schema";
import { PREDEFINED_QUESTIONS } from "@shared/chatbot-schema";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    question: ""
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      return await apiRequest("POST", "/api/chatbot", {
        message,
        conversationHistory: messages
      });
    },
    onSuccess: (response: any) => {
      const assistantMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "assistant",
        content: response.message,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      
      if (response.showContactForm) {
        setShowContactForm(true);
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof contactForm) => {
      return await apiRequest("POST", "/api/chatbot/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your question. Our team will get back to you personally.",
      });
      setContactForm({ name: "", email: "", company: "", question: "" });
      setShowContactForm(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(inputValue.trim());
    setInputValue("");
  };

  const handlePredefinedQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  const resetChat = () => {
    setMessages([]);
    setShowContactForm(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
            data-testid="chatbot-trigger"
          >
            <MessageCircle size={24} />
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-md h-[600px] p-0 flex flex-col" data-testid="chatbot-dialog">
          <DialogHeader className="p-4 pb-2 border-b">
            <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
              <Bot className="text-primary" size={20} />
              ROQIT Assistant
              <Button
                variant="ghost"
                size="sm"
                onClick={resetChat}
                className="ml-auto text-xs"
                data-testid="reset-chat"
              >
                Reset
              </Button>
            </DialogTitle>
          </DialogHeader>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-900" data-testid="chat-messages">
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="text-center text-slate-600 dark:text-slate-300 text-sm">
                  👋 Hi! I'm here to help you learn about ROQIT's fleet management platform. Choose a question below or ask me anything!
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Popular Questions:</div>
                  {PREDEFINED_QUESTIONS.slice(0, 4).map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-white transition-colors p-2 text-xs block w-full text-left"
                      onClick={() => handlePredefinedQuestion(question)}
                      data-testid={`predefined-question-${index}`}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                data-testid={`message-${message.role}-${message.id}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={16} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User size={16} className="text-slate-600 dark:text-slate-300" />
                  </div>
                )}
              </div>
            ))}

            {chatMutation.isPending && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-lg text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}

            {showContactForm && (
              <Card className="border-primary/20" data-testid="contact-form-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Mail size={16} />
                    Need Personal Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="name" className="text-xs">Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        className="h-8 text-xs"
                        required
                        data-testid="contact-form-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        className="h-8 text-xs"
                        required
                        data-testid="contact-form-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-xs">Company</Label>
                      <Input
                        id="company"
                        value={contactForm.company}
                        onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                        className="h-8 text-xs"
                        required
                        data-testid="contact-form-company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="question" className="text-xs">Your Question</Label>
                      <Textarea
                        id="question"
                        value={contactForm.question}
                        onChange={(e) => setContactForm(prev => ({ ...prev, question: e.target.value }))}
                        className="text-xs min-h-[60px]"
                        placeholder="Tell us more about your specific needs..."
                        required
                        data-testid="contact-form-question"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        size="sm"
                        className="flex-1 text-xs"
                        disabled={contactMutation.isPending}
                        data-testid="contact-form-submit"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send to Team"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setShowContactForm(false)}
                        data-testid="contact-form-cancel"
                      >
                        <X size={14} />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white dark:bg-slate-800">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about ROQIT..."
                className="flex-1"
                disabled={chatMutation.isPending}
                data-testid="chat-input"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || chatMutation.isPending}
                size="sm"
                data-testid="send-message"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}