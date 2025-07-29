export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-6">
            ⭐ Customer Success
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight" data-testid="text-testimonials-title">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600" data-testid="text-testimonials-description">
            See how ROQIT is transforming fleet operations across industries
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 text-center max-w-4xl mx-auto border border-slate-200/60 backdrop-blur-sm" data-testid="testimonial-card">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
              alt="Jonathan Barkl, CEO of Olectra Greentech" 
              className="w-20 h-20 rounded-full mx-auto object-cover shadow-lg" 
              data-testid="img-testimonial-avatar"
            />
          </div>
          <blockquote className="text-2xl lg:text-3xl font-medium text-dark mb-8 leading-relaxed" data-testid="text-testimonial-quote">
            "With ROQIT, we finally have visibility on everything - driver behavior, route efficiency, even carbon data. It's like mission control for our logistics."
          </blockquote>
          <div>
            <div className="font-semibold text-dark text-lg" data-testid="text-testimonial-name">Jonathan Barkl</div>
            <div className="text-gray-600" data-testid="text-testimonial-title">Co-founder and CEO, Olectra Greentech</div>
          </div>
        </div>
      </div>
    </section>
  );
}
