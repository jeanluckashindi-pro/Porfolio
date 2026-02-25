import Header from "../components/Header";
import { Lightbulb, Rocket, Zap, TrendingUp, Globe, Code, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function InnovationPage() {
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
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Créativité & Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Innovation & Créativité</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Comment j'aborde l'innovation technologique et développe des solutions créatives pour résoudre des problèmes complexes
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Approach */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Ma Vision de l'Innovation</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  L'innovation n'est pas seulement l'utilisation des dernières technologies à la mode. 
                  C'est trouver des <span className="text-primary font-semibold">solutions créatives</span> à des 
                  problèmes réels, en combinant <span className="text-secondary font-semibold">technologie</span>, 
                  <span className="text-tertiary font-semibold"> contexte local</span> et 
                  <span className="text-white font-semibold"> besoins utilisateurs</span>.
                </p>
                <p className="text-white/70 leading-relaxed">
                  En Afrique, l'innovation signifie souvent adapter des technologies existantes aux réalités 
                  locales : connectivité limitée, contraintes budgétaires, diversité linguistique et culturelle.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Mes Domaines d'Innovation</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Fintech & Paiements</h4>
                      <p className="text-sm text-white/60">Solutions de paiement mobile adaptées au contexte africain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">E-Government</h4>
                      <p className="text-sm text-white/60">Digitalisation des services publics pour plus d'efficacité</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-tertiary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Architecture Cloud</h4>
                      <p className="text-sm text-white/60">Solutions scalables et résilientes pour l'Afrique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Mon Processus d'Innovation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card-2 border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Identifier</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Observer et comprendre les problèmes réels des utilisateurs sur le terrain
                  </p>
                </div>

                <div className="bg-card-2 border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Imaginer</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Brainstormer des solutions créatives en combinant tech et contexte local
                  </p>
                </div>

                <div className="bg-card-2 border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-tertiary">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Prototyper</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Développer rapidement un MVP pour tester l'idée avec de vrais utilisateurs
                  </p>
                </div>

                <div className="bg-card-2 border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Itérer</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Améliorer continuellement basé sur les retours et les données d'usage
                  </p>
                </div>
              </div>
            </div>

            {/* Innovative Projects */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets Innovants</h2>
              
              <div className="space-y-8">
                {/* Ufaranga */}
                <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-white">Ufaranga - Paiement NFC Transport</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                          <span className="text-xs text-primary font-semibold">Innovation Fintech</span>
                        </div>
                      </div>
                      <p className="text-white/70 leading-relaxed mb-4">
                        Solution de paiement sans contact pour moderniser les transports urbains en Afrique. 
                        Combine technologie NFC, architecture microservices et adaptation au contexte local.
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-3">Aspects innovants :</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Fonctionne offline avec synchronisation différée</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Interface multilingue (Français, Kirundi, Swahili)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Tarification dynamique basée sur la distance</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Intégration avec Mobile Money local</span>
                          </div>
                        </div>
                      </div>

                      <Link 
                        href="/projets/personnels" 
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                      >
                        En savoir plus →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ODECA Innovation */}
                <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-secondary/30 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-white">ODECA - Cartographie Géospatiale</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                          <span className="text-xs text-secondary font-semibold">Innovation GovTech</span>
                        </div>
                      </div>
                      <p className="text-white/70 leading-relaxed mb-4">
                        Première plateforme nationale de cartographie de la filière café au Burundi. 
                        Innovation dans la digitalisation des processus gouvernementaux agricoles.
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-3">Innovations techniques :</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Cartographie GIS intégrée pour localisation précise</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Collecte de données terrain via mobile</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Synchronisation temps réel avec serveurs centraux</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/70">Dashboard analytics pour décideurs</span>
                          </div>
                        </div>
                      </div>

                      <Link 
                        href="/projets/professionnels" 
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold"
                      >
                        Voir le projet →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Mindset */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">État d'Esprit Innovant</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Curiosité Constante</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Toujours explorer de nouvelles technologies, frameworks et approches. 
                  La curiosité est le moteur de l'innovation.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Pensée Critique</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Remettre en question les solutions existantes et chercher des moyens 
                  d'améliorer les processus et les produits.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Expérimentation</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Ne pas avoir peur d'essayer de nouvelles approches, même si elles peuvent échouer. 
                  L'échec est une opportunité d'apprentissage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies to Watch */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technologies que je Surveille</h2>
            
            <div className="bg-card-2 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Intelligence Artificielle</h3>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Machine Learning pour analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>NLP pour interfaces conversationnelles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Computer Vision pour agriculture</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Blockchain & Web3</h3>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Smart contracts pour fintech</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>DeFi pour inclusion financière</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Traçabilité supply chain</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Edge Computing</h3>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                      <span>Processing local pour offline-first</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                      <span>IoT pour agriculture intelligente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                      <span>5G et connectivité rurale</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Progressive Web Apps</h3>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Apps offline-first pour Afrique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Installation sans app store</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Performance sur low-end devices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Innovons Ensemble</h3>
              <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                Vous avez une idée innovante ou un problème complexe à résoudre ? 
                Collaborons pour créer des solutions qui font la différence.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                Discutons de votre idée
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
