import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="py-20 bg-gradient-to-br from-gray-50 to-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-dark mb-6" data-testid="text-contact-page-title">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-contact-page-description">
            Ready to transform your fleet operations? Contact our team to learn how ROQIT can help your business achieve greater efficiency and sustainability.
          </p>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}
