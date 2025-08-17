import { Shield, Monitor, Search, Code, Network, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: 'SOC & Monitoring Tools',
      color: 'text-primary',
      skills: ['SIEM (Splunk, QRadar, Elastic)', 'SOAR Basics', 'Log Analysis', 'Real-time Monitoring']
    },
    {
      icon: Network,
      title: 'Network Security',
      color: 'text-secondary',
      skills: ['IDS/IPS (Snort, Suricata)', 'Packet Analysis', 'Firewall Rules', 'VPN Configuration']
    },
    {
      icon: Search,
      title: 'Threat Detection & Response',
      color: 'text-accent',
      skills: ['IOC Analysis', 'Incident Response', 'Threat Hunting', 'Forensic Analysis']
    },
    {
      icon: Shield,
      title: 'Security Tools',
      color: 'text-warning-orange',
      skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'OpenVAS', 'Nessus']
    },
    {
      icon: Code,
      title: 'Technical Skills',
      color: 'text-glow-secondary',
      skills: ['Python/Bash Scripting', 'Regex Parsing', 'SQL Queries', 'PowerShell']
    },
    {
      icon: AlertTriangle,
      title: 'Frameworks & Standards',
      color: 'text-matrix-green',
      skills: ['MITRE ATT&CK', 'NIST IR Process', 'Kill Chain Model', 'ISO 27001']
    }
  ];

  const certifications = [
    'Security+ (In Progress)',
    'CCNA Network Security',
    'SOC Analyst Fundamentals',
    'SIEM Operations',
    'Incident Response'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-cyber">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity skillset focused on proactive threat detection and rapid incident response
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`${category.color} mr-3`}>
                    <category.icon className="h-8 w-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="mr-2 mb-2 glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Additional Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="glass-card p-8 hover-lift animate-slide-in-left">
              <h3 className="text-2xl font-bold text-gradient-accent mb-6 flex items-center">
                <Shield className="mr-3 h-6 w-6" />
                Certifications & Training
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center p-3 glass-card hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow"></div>
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div className="glass-card p-8 hover-lift animate-slide-in-right">
              <h3 className="text-2xl font-bold text-gradient-accent mb-6 flex items-center">
                <Search className="mr-3 h-6 w-6" />
                Core Competencies
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Vulnerability Management</h4>
                  <p className="text-muted-foreground text-sm">Identifying, assessing, and mitigating security vulnerabilities</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Incident Response</h4>
                  <p className="text-muted-foreground text-sm">Rapid detection, containment, and remediation of security incidents</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground">Reporting & Communication</h4>
                  <p className="text-muted-foreground text-sm">ServiceNow, incident documentation, and stakeholder communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;