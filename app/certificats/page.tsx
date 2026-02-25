import Header from "../components/Header";
import { Award, CheckCircle, ExternalLink, Calendar, Building } from "lucide-react";

export default function CertificatsPage() {
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
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Certifications Professionnelles</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Certificats & Formations</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Certifications techniques et formations continues pour rester à la pointe des technologies
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-white/60">Certificats</div>
              </div>
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-white/60">Formations</div>
              </div>
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-tertiary mb-1">500+</div>
                <div className="text-sm text-white/60">Heures</div>
              </div>
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">2024</div>
                <div className="text-sm text-white/60">Dernière</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications Techniques</h2>
            
            <div className="space-y-6">
              {/* AWS Certified Solutions Architect */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Award className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">AWS Certified Solutions Architect - Associate</h3>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <Building className="w-4 h-4" />
                          <span>Amazon Web Services</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>Obtenu en Septembre 2023</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                        <span className="text-xs text-primary font-semibold">Cloud Architecture</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Certification validant l'expertise en conception et déploiement de systèmes évolutifs, 
                      hautement disponibles et tolérants aux pannes sur AWS.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">EC2</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">S3</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">RDS</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Lambda</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">VPC</span>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                    >
                      Voir le certificat <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Cloud Professional */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-secondary/30 transition-all">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Award className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Google Cloud Professional Cloud Architect</h3>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <Building className="w-4 h-4" />
                          <span>Google Cloud</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>Obtenu en Janvier 2024</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                        <span className="text-xs text-secondary font-semibold">GCP</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Certification professionnelle démontrant la capacité à concevoir, développer et gérer 
                      des solutions robustes, sécurisées et évolutives sur Google Cloud Platform.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Compute Engine</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Cloud Storage</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">BigQuery</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Kubernetes</span>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold"
                    >
                      Voir le certificat <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Kubernetes Administrator */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-tertiary/30 transition-all">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-tertiary/20 rounded-xl flex items-center justify-center">
                      <Award className="w-10 h-10 text-tertiary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Certified Kubernetes Administrator (CKA)</h3>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <Building className="w-4 h-4" />
                          <span>Cloud Native Computing Foundation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>Obtenu en Mars 2024</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-tertiary/40 rounded-[5px]">
                        <span className="text-xs text-tertiary font-semibold">DevOps</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Certification pratique validant les compétences en administration, déploiement et 
                      maintenance de clusters Kubernetes en production.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Pods</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Services</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Deployments</span>
                      <span className="px-3 py-1 bg-card-1 text-white/70 text-xs rounded-[5px]">Helm</span>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-tertiary hover:text-tertiary/80 transition-colors text-sm font-semibold"
                    >
                      Voir le certificat <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations Continues */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Formations Continues</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">React Advanced Patterns</h3>
                <p className="text-sm text-white/60 mb-3">Frontend Masters - 2024</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Patterns avancés React incluant hooks personnalisés, context API, et optimisations de performance.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Microservices Architecture</h3>
                <p className="text-sm text-white/60 mb-3">Udemy - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Conception et implémentation d'architectures microservices avec Docker et Kubernetes.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">PostgreSQL Performance Tuning</h3>
                <p className="text-sm text-white/60 mb-3">Pluralsight - 2024</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Optimisation avancée des performances PostgreSQL pour applications à grande échelle.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">GraphQL API Design</h3>
                <p className="text-sm text-white/60 mb-3">Apollo - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Conception d'APIs GraphQL performantes et scalables avec Apollo Server.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Security Best Practices</h3>
                <p className="text-sm text-white/60 mb-3">OWASP - 2024</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Sécurité des applications web et protection contre les vulnérabilités courantes.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">CI/CD with GitHub Actions</h3>
                <p className="text-sm text-white/60 mb-3">GitHub Learning Lab - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Automatisation des pipelines de déploiement avec GitHub Actions et workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
