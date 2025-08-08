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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    assetTypes: "",
    numberOfAssets: "",
    usesIotSystem: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! A member of the ROQIT team will contact you shortly.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        industry: "",
        companySize: "",
        assetTypes: "",
        numberOfAssets: "",
        usesIotSystem: ""
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

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="text-contact-title">
            Get Early Access to ROQIT
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12" data-testid="text-contact-description">
            We're opening limited slots for visionary partners to co-create the future of asset and sustainability management through customized Proof of Concept (POC) engagements.
          </p>
          <div className="bg-gradient-to-r from-primary/10 via-blue-50 dark:via-blue-900/20 to-primary/10 border border-primary/20 dark:border-primary/30 rounded-xl p-4 max-w-2xl mx-auto mb-8">
            <p className="text-lg font-semibold text-primary mb-2">🚀 Apply Now</p>
            <p className="text-slate-700 dark:text-slate-300">If you are looking to solve real operational challenges with AI powered insight and scalable tech, apply now. <span className="font-medium text-primary">Spots are limited</span> and selection is at ROQIT's discretion to ensure the right fit and impact.</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/60 dark:border-slate-600/60 rounded-2xl p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Phone</div>
                  <div className="text-slate-600 dark:text-slate-300">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-info-email">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-secondary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                  <div className="text-slate-600 dark:text-slate-300">info@roqit.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="contact-info-office">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Office</div>
                  <div className="text-slate-600 dark:text-slate-300 leading-relaxed">6th floor, Thub, Raidurgam, Knowledge City rd, Panmaktha, Hyderabad, Serilingampalle (M), Telangana 500081</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/60 dark:border-slate-600/60 rounded-2xl shadow-xl p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
          data-testid="contact-form-container">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6" data-testid="text-contact-form-title">Contact Information</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info Section */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600 pb-2">Contact Info</h4>
                
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company Name
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
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Official Email
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
                    <Label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
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
                </div>
                
                <div>
                  <Label htmlFor="website" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Website
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    placeholder="https://company.com"
                    data-testid="input-website"
                  />
                </div>
              </div>
              
              {/* Company Info Section */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600 pb-2">Company Info</h4>
                
                <div>
                  <Label htmlFor="industry" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Industry
                  </Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger data-testid="select-industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Logistics">Logistics</SelectItem>
                      <SelectItem value="Railways">Railways</SelectItem>
                      <SelectItem value="Utilities">Utilities</SelectItem>
                      <SelectItem value="Construction">Construction</SelectItem>
                      <SelectItem value="Mining">Mining</SelectItem>
                      <SelectItem value="Agriculture">Agriculture</SelectItem>
                      <SelectItem value="Oil & Gas">Oil & Gas</SelectItem>
                      <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="Transportation">Transportation</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Company Size
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2" data-testid="radio-group-company-size">
                    {[
                      { value: "Startup (1-50 employees)", label: "Startup\n(1-50)" },
                      { value: "SME (51-250)", label: "SME\n(51-250)" },
                      { value: "Mid-market (251-1000)", label: "Mid-market\n(251-1000)" },
                      { value: "Enterprise (1000+)", label: "Enterprise\n(1000+)" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleInputChange("companySize", option.value)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 whitespace-pre-line text-center ${
                          formData.companySize === option.value
                            ? 'border-primary bg-primary text-white shadow-md'
                            : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary hover:bg-primary/5'
                        }`}
                        data-testid={`button-company-size-${option.value.split(' ')[0].toLowerCase()}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Type of Assets
                  </Label>
                  <div className="flex flex-wrap gap-2" data-testid="radio-group-asset-types">
                    {[
                      { value: "Vehicles", icon: "🚛" },
                      { value: "Machinery", icon: "⚙️" },
                      { value: "Ships", icon: "🚢" },
                      { value: "Immoveable assets", icon: "🏢" },
                      { value: "Mixed assets", icon: "📦" },
                      { value: "Others", icon: "📋" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleInputChange("assetTypes", option.value)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                          formData.assetTypes === option.value
                            ? 'border-primary bg-primary text-white shadow-md'
                            : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary hover:bg-primary/5'
                        }`}
                        data-testid={`button-asset-type-${option.value.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <span>{option.icon}</span>
                        <span>{option.value}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Number of Assets
                  </Label>
                  <div className="flex gap-3" data-testid="radio-group-number-of-assets">
                    {[
                      { value: "1-100", label: "1-100" },
                      { value: "100-1000", label: "100-1000" },
                      { value: "1000+", label: "1000+" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleInputChange("numberOfAssets", option.value)}
                        className={`flex-1 p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                          formData.numberOfAssets === option.value
                            ? 'border-primary bg-primary text-white shadow-md'
                            : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary hover:bg-primary/5'
                        }`}
                        data-testid={`button-number-of-assets-${option.value.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
                      >
                        <span className="text-sm">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="usesIotSystem" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Do you use any IoT or fleet management system?
                  </Label>
                  <Select value={formData.usesIotSystem} onValueChange={(value) => handleInputChange("usesIotSystem", value)}>
                    <SelectTrigger data-testid="select-uses-iot-system">
                      <SelectValue placeholder="Select yes or no" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
