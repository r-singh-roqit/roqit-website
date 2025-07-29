import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    fleetSize: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will contact you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        fleetSize: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit contact form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-6">
            💬 Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight" data-testid="text-contact-title">
            Ready to improve your business?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12" data-testid="text-contact-description">
            Join thousands of businesses already using ROQIT to communicate with moving assets and optimize their operations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-dark">Phone</div>
                  <div className="text-gray-600">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-info-email">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-secondary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-dark">Email</div>
                  <div className="text-gray-600">contact@roqit.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-info-office">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-dark">Office</div>
                  <div className="text-gray-600">Bangalore, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-xl p-8" data-testid="contact-form-container">
            <h3 className="text-2xl font-bold text-slate-900 mb-6" data-testid="text-contact-form-title">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company"
                  required
                  data-testid="input-company"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@company.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="fleetSize" className="block text-sm font-medium text-gray-700 mb-2">
                  Fleet Size
                </Label>
                <Select value={formData.fleetSize} onValueChange={(value) => handleInputChange("fleetSize", value)}>
                  <SelectTrigger data-testid="select-fleet-size">
                    <SelectValue placeholder="Select fleet size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10 vehicles">1-10 vehicles</SelectItem>
                    <SelectItem value="11-50 vehicles">11-50 vehicles</SelectItem>
                    <SelectItem value="51-100 vehicles">51-100 vehicles</SelectItem>
                    <SelectItem value="100+ vehicles">100+ vehicles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your fleet management needs..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl py-3 font-medium"
                disabled={contactMutation.isPending}
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
