import Header from "../components/Header";
import { Code, Database, Cloud, Layers, GitBranch, Shield, Zap, CheckCircle } from "lucide-react";

export default function CompetencesPage() {
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
                <Code className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Expertise technique</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Mes Compétences</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Une expertise complète en développement fullstack, architecture microservices et technologies modernes
              </p>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Backend Development */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Backend Development</h2>
                    <p className="text-sm text-white/60">Serveurs & APIs robustes</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">Spring Boot (Java)</span>
                      <span className="text-sm text-primary font-semibold">Expert</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">Node.js / Express</span>
                      <span className="text-sm text-primary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">Django REST (Python)</span>
                      <span className="text-sm text-primary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-3">Compétences associées :</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">REST APIs</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">GraphQL</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Microservices</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">API Gateway</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frontend Development */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-secondary/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Frontend Development</h2>
                    <p className="text-sm text-white/60">Interfaces modernes & réactives</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">React / Next.js</span>
                      <span className="text-sm text-secondary font-semibold">Expert</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">Angular</span>
                      <span className="text-sm text-secondary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">TypeScript</span>
                      <span className="text-sm text-secondary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-3">Compétences associées :</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Redux</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Responsive Design</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">PWA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database & Storage */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-tertiary/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-tertiary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Bases de Données</h2>
                    <p className="text-sm text-white/60">SQL & NoSQL</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">PostgreSQL / MySQL</span>
                      <span className="text-sm text-tertiary font-semibold">Expert</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-tertiary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">MongoDB</span>
                      <span className="text-sm text-tertiary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-tertiary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">Redis</span>
                      <span className="text-sm text-tertiary font-semibold">Intermédiaire</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-tertiary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-3">Compétences associées :</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Optimisation</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Indexation</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Migrations</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Backup</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DevOps & Cloud */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">DevOps & Cloud</h2>
                    <p className="text-sm text-white/60">Déploiement & Infrastructure</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">Docker / Kubernetes</span>
                      <span className="text-sm text-primary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">CI/CD (GitHub Actions)</span>
                      <span className="text-sm text-primary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">Linux / Bash</span>
                      <span className="text-sm text-primary font-semibold">Avancé</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-3">Compétences associées :</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Nginx</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Monitoring</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">Logging</span>
                      <span className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-[5px]">AWS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Skills */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Gestion de Version</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Git / GitHub / GitLab
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Git Flow & Branching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Code Review
                  </li>
                </ul>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Sécurité</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    JWT / OAuth 2.0
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    HTTPS / SSL/TLS
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    OWASP Best Practices
                  </li>
                </ul>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Méthodologies</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Agile / Scrum
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    TDD / Unit Testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Clean Code
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
