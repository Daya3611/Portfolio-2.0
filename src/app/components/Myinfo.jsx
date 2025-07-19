import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Instagram, 
  Mail, 
  MailPlus, 
  MessageCircle, 
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";

function ContactDialog() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hi@dayanandgawade.in');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      subtitle: 'hi@dayanandgawade.in',
      description: 'Perfect for detailed project discussions',
      icon: Mail,
      href: 'mailto:hi@dayanandgawade.in',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'hover:bg-blue-50',
      iconBg: 'bg-blue-100 text-blue-600',
      hasExternalLink: true,
      hasCopy: true
    },
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: '@_daya3611',
      description: 'Quick messages and behind-the-scenes',
      icon: Instagram,
      href: 'https://instagram.com/_daya3611',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'hover:bg-pink-50',
      iconBg: 'bg-gradient-to-r from-pink-500 to-purple-500 text-white',
      hasExternalLink: true,
      hasCopy: false
    }
  ];

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="relative group">
            <Button 
              className="relative flex items-center gap-3 rounded-full px-6 py-3 text-sm md:px-8 md:py-6 md:text-base bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 font-medium">Get in touch</span>
              <MessageCircle className="relative z-10 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              
             
            </Button>
          </div>
        </DialogTrigger>
        
        <DialogContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-3xl border-0 shadow-2xl max-w-md mx-auto p-0 overflow-hidden">
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 text-white">
            <div className="absolute inset-0 bg-black/10"></div>
            <DialogHeader className="relative z-10">
              <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
                Let's connect
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
              </DialogTitle>
              <DialogDescription className="text-blue-100 text-base mt-2">
                Ready to bring your vision to life? Choose your preferred way to reach out.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={method.id}
                  className={`group relative p-4 rounded-2xl border border-gray-200 dark:border-gray-700 ${method.bgColor} dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${method.iconBg} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {method.title}
                        </h3>
                        {method.hasExternalLink && (
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                        {method.subtitle}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {method.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a
                        href={method.href}
                        target={method.hasExternalLink ? "_blank" : undefined}
                        rel={method.hasExternalLink ? "noopener noreferrer" : undefined}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </a>
                      
                      {method.hasCopy && (
                        <button
                          onClick={handleCopyEmail}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {copiedEmail ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-6 pb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                ⚡ Usually respond within 24 hours
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                  Available now
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactDialog;