import React, { useState, useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Current Location",
      details: "560066 , Whitefield, Bangalore, Karnataka",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 7409512633",
    },
    {
      icon: Mail,
      title: "Email",
      details: "gyash1104@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yash-1104github",

    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yash-gupta-1a137b223/",
    },
    {
      icon: Twitter,
      href: "https://x.com/yash_542728",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-6 md:mt-0">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass border-glass-border/30 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient flex items-center gap-3">
                    <Mail className="text-primary" />
                    Let's Connect
                  </CardTitle>
                  <CardDescription className="text-base">
                    I'm always excited to discuss new opportunities, innovative
                    projects, or just chat about technology and development.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        className="flex items-start gap-4 md:mt-8"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex  items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">{info.details}</p>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Social Links */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className="grid grid-cols-2 md:px-6 md:grid-cols-3 pt-8 gap-2 -ml-3"
                  >
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                            asChild
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Icon size={20} />
                            </a>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-glass-border/30 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">
                  Send Message
                </CardTitle>
                <CardDescription>
                  Drop me a message and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:-mt-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="border-glass-border/30 focus:border-primary bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="border-glass-border/30 focus:border-primary bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="border-glass-border/30 focus:border-primary bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="border-glass-border/30 focus:border-primary bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
