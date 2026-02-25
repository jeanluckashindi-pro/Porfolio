'use client';

import { useState } from 'react';
import Header from "../components/Header";
import PDFDownloadButton from "../components/PDFDownloadButton";
import PDFViewerDialog from "../components/PDFViewerDialog";
import { FileText, Eye, Briefcase, Code, Award, Mail, Phone, MapPin } from "lucide-react";
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';

export default function CVPage() {
  const [showPDFDialog, setShowPDFDialog] = useState(false);

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,180,248,0.1),transparent_50%)]"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-primary/40 rounded-[5px] mb-6">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Curriculum Vitae</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Mon CV</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                Téléchargez ou visualisez mon curriculum vitae complet
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setShowPDFDialog(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                <Eye className="w-5 h-5" />
                Visualiser le PDF
              </button>
              
              <PDFDownloadButton />
            </div>
          </div>
        </section>

        {/* CV Preview Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card-2 border border-white/10 rounded-xl p-8 sm:p-12">
              {/* Header */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Jean-Luc Kashindi Nestor</h2>
                <p className="text-xl text-primary mb-4">Ingénieur Fullstack Senior</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Jeanluckashindi812@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+257 64 39 72 62</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bujumbura, Burundi</span>
                  </div>
                </div>
              </div>

              {/* Profil */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Profil Professionnel
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Ingénieur Fullstack Senior avec 3+ ans d'expérience dans la conception et le déploiement 
                  de solutions numériques à fort impact. Spécialisé dans l'architecture microservices et 
                  le développement de systèmes utilisés à l'échelle nationale par des institutions 
                  gouvernementales et organisations internationales.
                </p>
              </div>

              {/* Expérience Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  Points Forts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-white/60">Ans d'expérience</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                    <div className="text-sm text-white/60">Projets livrés</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-tertiary mb-1">12+</div>
                    <div className="text-sm text-white/60">Technologies</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-sm text-white/60">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Compétences Clés */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-tertiary" />
                  Compétences Clés
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-[5px] border border-primary/30">Spring Boot</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-[5px] border border-primary/30">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-[5px] border border-primary/30">Node.js</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">Angular</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">TypeScript</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">Python</span>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-sm rounded-[5px] border border-tertiary/30">Docker</span>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-sm rounded-[5px] border border-tertiary/30">Kubernetes</span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-[5px] border border-white/20">PostgreSQL</span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-[5px] border border-white/20">MongoDB</span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-[5px] border border-white/20">Microservices</span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-[5px] border border-white/20">REST APIs</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">
                  Pour plus de détails sur mon parcours, mes projets et mes compétences, téléchargez la version complète de mon CV.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowPDFDialog(true)}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                  >
                    <Eye className="w-5 h-5" />
                    Visualiser le PDF complet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Viewer Dialog */}
        <PDFViewerDialog 
          visible={showPDFDialog} 
          onHide={() => setShowPDFDialog(false)} 
        />
      </main>
    </>
  );
}
