'use client';

import { useState } from 'react';
import Header from "../components/Header";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,180,248,0.1),transparent_50%)]"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-primary/40 rounded-[5px] mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Restons en contact</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Contactez-moi</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à le concrétiser
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Informations de Contact</h2>
                  
                  <div className="space-y-4">
                    <a href="mailto:Jeanluckashindi812@gmail.com" className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white mb-1">Email</div>
                        <div className="text-sm text-white/60 break-all">Jeanluckashindi812@gmail.com</div>
                      </div>
                    </a>

                    <a href="tel:+25764397262" className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white mb-1">Téléphone</div>
                        <div className="text-sm text-white/60">+257 64 39 72 62</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                      <div className="w-10 h-10 bg-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-tertiary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white mb-1">Localisation</div>
                        <div className="text-sm text-white/60">Gihosha, Bujumbura, Burundi</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Réseaux Sociaux</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://github.com/jeanluckashindi-pro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                    >
                      <Github className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors">GitHub</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/jeanluckashindi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                    >
                      <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-secondary text-sm font-semibold">Disponible</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Je suis actuellement disponible pour de nouveaux projets et collaborations. 
                    N'hésitez pas à me contacter !
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h2>
                  
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                      <p className="text-white/60 text-center">
                        Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                            Nom complet <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                            placeholder="Votre nom"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            Email <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                          Sujet <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="Sujet de votre message"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                          placeholder="Décrivez votre projet ou votre demande..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Envoyer le message
                          </>
                        )}
                      </button>

                      <p className="text-xs text-white/50">
                        <span className="text-primary">*</span> Champs obligatoires
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
