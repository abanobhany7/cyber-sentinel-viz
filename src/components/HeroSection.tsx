import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.avif';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'See the threat before it sees you';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix background */}
      <div className="matrix-bg"></div>
      

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <img 
                src={profilePhoto} 
                alt="Abanob Hany - Information Security Analyst"
                className="w-full h-full object-cover rounded-full border-2 border-primary"
              />
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="text-gradient-cyber">Abanob Hany</span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl mb-8 text-muted-foreground">
            <span className="text-gradient-accent font-semibold">Information Security Analyst</span>
            <br />
            <span>Specializing in SOC Operations & Cybersecurity Defense</span>
          </div>

          {/* Typewriter Effect */}
          <div className="mb-12 h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-primary font-mono border-r-2 border-primary pr-1">
              {displayText}
              <span className="animate-blink-cursor">|</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-16">
            <Button 
              size="lg"
              className="cyber-glow hover-lift bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/25 border border-blue-400/30"
              onClick={() => window.open('https://www.linkedin.com/in/abanob-hany-314132312/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Add me on LinkedIn
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;