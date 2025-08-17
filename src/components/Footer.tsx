import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary cyber-glow" />
                <span className="text-xl font-bold text-gradient-cyber">
                  Abanob Hany
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Information Security Analyst dedicated to creating secure digital environments 
                through proactive threat detection and rapid incident response.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors cyber-border"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+20 155 357 5776</p>
                <p>abanobhany522@gmail.com</p>
                <p>10th of Ramadan City<br />Sharqia, Egypt</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Abanob Hany. All rights reserved.
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 mx-1 text-accent animate-pulse-glow" />
              <span>and cybersecurity in mind</span>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-8 glass-card p-4 text-center">
            <p className="text-xs text-muted-foreground">
              <span className="text-primary font-medium">Security Notice:</span> This website follows security best practices. 
              All communications are monitored for quality assurance and security purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;