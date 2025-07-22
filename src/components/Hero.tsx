import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital Marketing Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              We craft stunning digital experiences that drive results. From social media marketing to complete digital transformations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Button variant="hero" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "98%", label: "Success Rate" },
              { number: "50M+", label: "Reach Generated" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Hero;