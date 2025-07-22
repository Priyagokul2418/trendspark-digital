import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      info: "hello@digitalcraft.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      info: "123 Digital Street, Tech City",
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      info: "Mon-Fri: 8am-5pm",
      description: "Weekend support available"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something 
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 border-0 bg-card/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="transition-all focus:shadow-glow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="transition-all focus:shadow-glow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className="transition-all focus:shadow-glow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="transition-all focus:shadow-glow"
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Quick response guaranteed!</strong> We typically respond to all inquiries within 2 hours during business hours.
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We'd love to hear from you. Choose the most convenient way to reach out, and our team will get back to you promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:shadow-elegant group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="font-medium text-foreground mb-1">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="p-8 bg-gradient-primary text-white border-0">
              <h4 className="text-2xl font-bold mb-4">Ready to get started?</h4>
              <p className="mb-6 opacity-90">
                Schedule a free consultation to discuss your project and discover how we can help you achieve your digital marketing goals.
              </p>
              <Button variant="glass" size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;