import Header from "../components/Header";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function ParcoursPage() {
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
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Formation Académique</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Parcours Académique</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Mon cheminement éducatif et les formations qui ont façonné mes compétences techniques
              </p>
            </div>
          </div>
        </section>

        {/* Academic Timeline */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Formation Universitaire</h2>
            
            <div className="space-y-8">
              {/* Master */}
              <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Master en Génie Logiciel</h3>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>Université du Burundi - Bujumbura</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>2019 - 2021</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-semibold">Distinction</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Spécialisation en architecture logicielle, systèmes distribués et développement d'applications 
                      d'entreprise. Mémoire sur l'optimisation des systèmes de gestion pour le secteur public.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Modules principaux :</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/70">Architecture des Systèmes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/70">Bases de Données Avancées</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/70">Systèmes Distribués</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/70">Génie Logiciel Avancé</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/70">Cloud Computing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/70">Sécurité Informatique</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card-2 border border-white/10 rounded-lg p-4">
                      <div className="text-sm font-semibold text-white mb-2">Mémoire de Master</div>
                      <div className="text-sm text-white/70 mb-2">
                        "Conception d'un système de gestion intégré pour l'administration publique burundaise"
                      </div>
                      <div className="text-xs text-white/60">Note : 18/20 - Mention Très Bien</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Licence */}
              <div className="bg-gradient-to-br from-secondary/10 to-card-2 border border-secondary/30 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Licence en Informatique</h3>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>Université du Burundi - Bujumbura</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>2016 - 2019</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-secondary font-semibold">Grande Distinction</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Formation fondamentale en informatique couvrant la programmation, les algorithmes, 
                      les structures de données et le développement web. Projet de fin d'études sur 
                      une application de gestion scolaire.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Compétences acquises :</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-white/70">Programmation Orientée Objet</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-white/70">Structures de Données</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-white/70">Développement Web</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-white/70">Bases de Données</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-white/70">Réseaux Informatiques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-white/70">Systèmes d'Exploitation</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card-2 border border-white/10 rounded-lg p-4">
                      <div className="text-sm font-semibold text-white mb-2">Projet de Fin d'Études</div>
                      <div className="text-sm text-white/70 mb-2">
                        "Application web de gestion scolaire avec système de suivi des élèves"
                      </div>
                      <div className="text-xs text-white/60">Note : 17/20 - Mention Bien</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Training */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Formations Complémentaires</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Formation DevOps</h3>
                <p className="text-sm text-white/60 mb-3">Linux Foundation - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  CI/CD, containerisation avec Docker, orchestration Kubernetes et automatisation.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Architecture Microservices</h3>
                <p className="text-sm text-white/60 mb-3">Udemy - 2022</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Conception et implémentation d'architectures microservices scalables.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">React & Next.js Avancé</h3>
                <p className="text-sm text-white/60 mb-3">Frontend Masters - 2024</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Patterns avancés React, optimisations et développement avec Next.js.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">PostgreSQL Performance</h3>
                <p className="text-sm text-white/60 mb-3">Pluralsight - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Optimisation des performances et tuning avancé de PostgreSQL.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Sécurité des Applications</h3>
                <p className="text-sm text-white/60 mb-3">OWASP - 2024</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Sécurité web, protection contre les vulnérabilités et best practices.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">GraphQL & Apollo</h3>
                <p className="text-sm text-white/60 mb-3">Apollo GraphQL - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Conception d'APIs GraphQL performantes avec Apollo Server et Client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Stats */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card-2 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Bilan Académique</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-white/60">Années d'études</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">2</div>
                  <div className="text-sm text-white/60">Diplômes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-tertiary mb-2">15+</div>
                  <div className="text-sm text-white/60">Formations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">8+</div>
                  <div className="text-sm text-white/60">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
