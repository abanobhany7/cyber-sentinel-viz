import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS with public key
  emailjs.init('feCaTsVbpyaLh7dsn');

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 155 357 5776',
      href: 'tel:+201553575776',
      color: 'text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'abanobhany522@gmail.com',
      href: 'mailto:abanobhany522@gmail.com',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '10th of Ramadan City, Sharqia, Egypt',
      href: '#',
      color: 'text-secondary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/abanobhany7',
      color: 'text-foreground hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abanob-hany-314132312/',
      color: 'text-foreground hover:text-accent'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Abanob Hany'
      };

      const result = await emailjs.send(
        'service_u4251cb',
        'template_fkpzq2k',
        templateParams,
        'feCaTsVbpyaLh7dsn'
      );

      console.log('EmailJS result:', result);

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      toast({
        title: "Message sent successfully! ✅",
        description: "I will get back to you soon. Thank you for reaching out!",
        duration: 5000,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to send message ❌",
        description: "Please try again or contact me directly via email or LinkedIn.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-cyber">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your cybersecurity needs? Let's work together to strengthen your security posture.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you need immediate incident response, ongoing security monitoring, 
                  or want to discuss how to improve your organization's security posture, 
                  I'm here to help. Every conversation starts with understanding your unique challenges.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center p-4 glass-card hover:bg-primary/5 transition-colors group"
                    >
                      <div className={`${info.color} mr-4`}>
                        <info.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Follow My Work
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 glass-card hover-lift ${social.color} transition-colors`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glass-card border-primary/30 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glass-card border-primary/30 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass-card border-primary/30 focus:border-primary"
                      placeholder="How can I help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-card border-primary/30 focus:border-primary resize-none"
                      placeholder="Tell me about your cybersecurity challenges or how I can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-glow bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                {/* Response Time Notice */}
                <div className="mt-6 p-4 glass-card">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="text-accent font-medium">Quick Response:</span> I typically respond within 24 hours for security-related inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;