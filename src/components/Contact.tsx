"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactDetails = [
  { icon: Mail, label: "Email", value: "hi@dayanandgawade.in", href: "mailto:hi@dayanandgawade.in" },
  // { icon: Phone, label: "WhatsApp", value: "+91 (available on request)", href: "https://miniurl.dayanandgawade.in/WhatsApp" },
  { icon: MapPin, label: "Location", value: "Maharashtra, India", href: null },
  { icon: Clock, label: "Availability", value: "Mon–Sat, 9am–8pm IST", href: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Daya3611" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/dayanandgawade" },
  { icon: Mail, label: "Email", href: "mailto:hi@dayanandgawade.in" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.subject.trim() || data.subject.trim().length < 4)
    errors.subject = "Subject must be at least 4 characters.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

export default function Contact() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  const handleReset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" ref={ref} className="py-32 bg-[#020202]">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Get in touch
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-xl mx-auto">
            Ready to start your next project? Drop me a message and let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Details</h3>
              <div className="space-y-6">
                {contactDetails.map((detail, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <detail.icon className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-base text-zinc-200 hover:text-white transition-colors"
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-base text-zinc-200">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-6">
              <h3 className="text-xl font-semibold text-white">Socials</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Message Sent
                    </h3>
                    <p className="text-zinc-400 max-w-sm mx-auto">
                      Thanks for reaching out! I'll review your message and get back to you within 24 hours.
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleReset} className="mt-4">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-400">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-transparent border-white/10 focus-visible:ring-slate-500"
                        autoComplete="name"
                      />
                      {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-400">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-transparent border-white/10 focus-visible:ring-slate-500"
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-zinc-400">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="bg-transparent border-white/10 focus-visible:ring-slate-500"
                    />
                    {errors.subject && <p className="text-red-400 text-xs">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-zinc-400">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="flex w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto px-8 bg-white text-black hover:bg-slate-200"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" /> Send Message</>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
