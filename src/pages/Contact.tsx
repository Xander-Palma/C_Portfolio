import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "frank.cagadas@hcdc.edu.ph", href: "mailto:frank.cagadas@hcdc.edu.ph" },
  { icon: Phone, label: "Phone", value: "+63 998 228 2974", href: "tel:+639982282974" },
  { icon: MapPin, label: "Location", value: "Davao City, Philippines", href: null },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/cagadas.frank" },
];

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="page-title animate-fade-in">My Contacts</h1>
        
        <div>
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex gap-4 mb-8 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-secondary/50 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;