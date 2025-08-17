import { GraduationCap, Award, Users, Calendar } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '2+', color: 'text-primary' },
    { icon: Award, label: 'SOC Projects', value: '10+', color: 'text-accent' },
    { icon: Users, label: 'Incidents Handled', value: '100+', color: 'text-secondary' },
    { icon: GraduationCap, label: 'Certifications', value: '5+', color: 'text-warning-orange' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-cyber">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designing Solutions, Not Just Visuals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-bold text-gradient-accent mb-4">
                  The Story Behind the Shield
                </h3>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Every alert tells a story — and I've built my career on uncovering it. 
                    From the first suspicious log entry to the final incident report, I transform 
                    raw data into actionable security intelligence.
                  </p>
                  <p>
                    Currently pursuing my Bachelor's degree in <span className="text-primary font-semibold">Cybersecurity</span> 
                    at Arab Open University (GPA 3.4, graduating 2026), I've combined academic 
                    excellence with practical experience as a SOC trainee at the 
                    <span className="text-accent font-semibold"> Digital Egypt Pioneers Initiative (DEPI)</span>.
                  </p>
                  <p>
                    My hands-on experience includes working with SIEM platforms, incident response, 
                    vulnerability management, and real-world SOC scenarios. I believe in proactive 
                    defense — because the best security professionals don't just respond to threats, 
                    <span className="text-gradient-cyber font-semibold"> they anticipate them</span>.
                  </p>
                </div>
              </div>

              {/* Education & Experience */}
              <div className="glass-card p-8 hover-lift">
                <h4 className="text-xl font-bold text-primary mb-4">Education & Experience</h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold text-foreground">Bachelor in Cybersecurity</h5>
                    <p className="text-muted-foreground">Arab Open University • GPA 3.4 • 2022-2026</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h5 className="font-semibold text-foreground">SOC Operations Trainee</h5>
                    <p className="text-muted-foreground">Digital Egypt Pioneers Initiative (DEPI) • 2025-Present</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card p-6 text-center hover-lift group"
                  >
                    <div className={`${stat.color} mb-4 flex justify-center`}>
                      <stat.icon className="h-12 w-12 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-3xl font-bold text-gradient-cyber mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="glass-card p-8 mt-6 hover-lift">
                <h4 className="text-xl font-bold text-center mb-4">
                  <span className="text-gradient-accent">Mission Statement</span>
                </h4>
                <p className="text-center text-foreground italic">
                  "To create a secure digital environment where threats are detected, 
                  analyzed, and neutralized before they can cause harm. My commitment 
                  is to continuous learning, proactive defense, and turning complex 
                  security challenges into clear, actionable solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;