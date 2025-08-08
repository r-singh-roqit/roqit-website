import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import missionTarget from "@/assets/mission-success-target.jpg";
import pavanChavali from "@/assets/pavan-chavali.jpeg";
import bhanutejMallangi from "@/assets/bhanutej-mallangi.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6" data-testid="text-about-title">
              About ROQIT
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto" data-testid="text-about-description">
              We're revolutionizing how businesses manage and optimize their physical assets through intelligent data insights and sustainable operational practices.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6" data-testid="text-mission-title">Our Mission</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6" data-testid="text-mission-description">
                At ROQIT, we believe that the future of business operations lies in intelligent, sustainable asset management. Our mission is to provide businesses with the tools they need to optimize their operations while making a positive environmental impact.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300" data-testid="text-mission-vision">
                We envision a world where every moving asset is connected, intelligent, and contributing to a more sustainable future.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={missionTarget}
                alt="Success target with dart representing ROQIT's focused mission and goals" 
                className="w-80 h-80 object-contain" 
                data-testid="img-mission"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card data-testid="card-innovation">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Innovation</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We're constantly pushing the boundaries of what's possible with AI and fleet management technology.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-sustainability">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Sustainability</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Environmental responsibility is at the core of everything we do, from carbon tracking to credit trading.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-efficiency">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-secondary text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Efficiency</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We help businesses achieve 30-40% cost reductions while improving operational performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4" data-testid="text-team-title">Leadership Team</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300" data-testid="text-team-description">
              Meet the visionaries driving ROQIT's mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card data-testid="card-team-member-1">
              <CardContent className="p-8 text-center">
                <img 
                  src={pavanChavali} 
                  alt="Pavan Chavali"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Pavan Chavali</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">CEO & Founder</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Visionary leader in fleet technology</p>
              </CardContent>
            </Card>

            <Card data-testid="card-team-member-2">
              <CardContent className="p-8 text-center">
                <img 
                  src={bhanutejMallangi} 
                  alt="Bhanutej Mallangi"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Bhanutej Mallangi</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">CTO</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Technology expert and innovator</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
