import { Shield, Search, AlertCircle, Bug } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Threat Detection & Monitoring',
      description: 'Continuous monitoring and analysis of security events using advanced SIEM platforms and threat intelligence.',
      features: [
        'Real-time security monitoring',
        'Advanced log analysis',
        'IOC identification',
        'Threat intelligence correlation'
      ],
      color: 'primary'
    },
    {
      icon: AlertCircle,
      title: 'Incident Response & Management',
      description: 'Rapid response to security incidents with comprehensive investigation and remediation strategies.',
      features: [
        'Incident triage and classification',
        'Forensic investigation',
        'Containment strategies',
        'Recovery planning'
      ],
      color: 'accent'
    },
    {
      icon: Shield,
      title: 'Vulnerability Management',
      description: 'Systematic identification, assessment, and remediation of security vulnerabilities across your infrastructure.',
      features: [
        'Vulnerability assessments',
        'Risk prioritization',
        'Patch management',
        'Compliance reporting'
      ],
      color: 'secondary'
    },
    {
      icon: Bug,
      title: 'Penetration Testing',
      description: 'Ethical hacking and security testing to identify vulnerabilities before malicious actors do.',
      features: [
        'Network penetration testing',
        'Web application testing',
        'Social engineering assessments',
        'Detailed remediation reports'
      ],
      color: 'warning-orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary border-primary/30 hover:border-primary',
      accent: 'text-accent border-accent/30 hover:border-accent',
      secondary: 'text-secondary border-secondary/30 hover:border-secondary',
      'warning-orange': 'text-warning-orange border-warning-orange/30 hover:border-warning-orange'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-cyber">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect, detect, and respond to evolving threats
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`glass-card p-8 hover-lift group border-2 transition-all duration-300 ${getColorClasses(service.color)}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Header */}
                <div className="flex items-start mb-6">
                  <div className={`${getColorClasses(service.color).split(' ')[0]} mr-4 mt-1`}>
                    <service.icon className="h-10 w-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${getColorClasses(service.color).split(' ')[0].replace('text-', 'bg-')}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`h-1 w-full bg-gradient-to-r from-transparent via-${service.color}/50 to-transparent rounded`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="glass-card p-8 max-w-2xl mx-auto hover-lift">
              <h3 className="text-2xl font-bold text-gradient-accent mb-4">
                Ready to Strengthen Your Security Posture?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help protect your organization from evolving cyber threats.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cyber-glow bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;