import { ExternalLink, Github, Network, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'CCNA Network Infrastructure Simulation',
      description: 'Comprehensive multi-floor branch office network design with advanced security implementations using Cisco Packet Tracer.',
      image: '/placeholder-network.jpg',
      technologies: ['Cisco Packet Tracer', 'OSPF', 'HSRP', 'ACLs', 'DHCP', 'DNS', 'Syslog'],
      features: [
        'Secure, redundant network architecture',
        'OSPF dynamic routing configuration',
        'HSRP for high availability',
        'Comprehensive ACL security policies',
        'Centralized DHCP and DNS services',
        'Network monitoring with Syslog'
      ],
      icon: Network,
      color: 'primary'
    },
    {
      title: 'SOC Security Monitoring Dashboard',
      description: 'Real-time security operations center dashboard for threat detection and incident response management.',
      image: '/placeholder-dashboard.jpg',
      technologies: ['SIEM', 'Splunk', 'Python', 'REST APIs', 'JSON'],
      features: [
        'Real-time threat monitoring',
        'Custom alerting mechanisms',
        'Incident tracking workflow',
        'Automated report generation',
        'Integration with multiple data sources',
        'Interactive threat visualization'
      ],
      icon: Shield,
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary border-primary/30 hover:border-primary bg-primary/5',
      accent: 'text-accent border-accent/30 hover:border-accent bg-accent/5',
      secondary: 'text-secondary border-secondary/30 hover:border-secondary bg-secondary/5'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-cyber">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing practical implementations of cybersecurity solutions and network infrastructure projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card overflow-hidden hover-lift ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <project.icon className={`h-24 w-24 ${getColorClasses(project.color).split(' ')[0]} opacity-50`} />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex space-x-3">
                        <Button size="sm" variant="outline" className="glass-card">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" variant="outline" className="glass-card">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <project.icon className={`h-8 w-8 mr-3 ${getColorClasses(project.color).split(' ')[0]}`} />
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${getColorClasses(project.color).split(' ')[0].replace('text-', 'bg-')}`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getColorClasses(project.color)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Actions */}
                    <div className="flex space-x-3">
                      <Button variant="outline" className="glass-card hover:bg-primary/10">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                      <Button variant="outline" className="glass-card hover:bg-accent/10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="glass-card p-8 max-w-2xl mx-auto hover-lift">
              <h3 className="text-2xl font-bold text-gradient-accent mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                Currently working on additional cybersecurity projects including malware analysis labs 
                and advanced threat hunting implementations.
              </p>
              <Button 
                variant="outline" 
                className="glass-card cyber-glow border-primary text-primary hover:bg-primary/10"
              >
                <Github className="h-4 w-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;