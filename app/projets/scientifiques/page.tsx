import Header from "../../components/Header";
import { Microscope, FileText, Users, TrendingUp, CheckCircle, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export default function ProjetsScientifiquesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(129,201,149,0.1),transparent_50%)]"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-secondary/40 rounded-[5px] mb-6">
                <Microscope className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-semibold">Recherche & Innovation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Projets Scientifiques</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Travaux de recherche, publications académiques et contributions à l'avancement des connaissances en informatique
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-white/60">Projets</div>
              </div>
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">5</div>
                <div className="text-sm text-white/60">Publications</div>
              </div>
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-tertiary mb-1">2</div>
                <div className="text-sm text-white/60">En cours</div>
              </div>
              <div className="bg-card-2 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-white/60">Collaborateurs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Research Projects */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets de Recherche Actifs</h2>
            
            <div className="space-y-8">
              {/* AI for Agriculture */}
              <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Microscope className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Intelligence Artificielle pour l'Agriculture</h3>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>2024 - En cours</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Users className="w-4 h-4" />
                          <span>Collaboration avec l'Université du Burundi</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-semibold">En cours</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Développement d'un système d'intelligence artificielle pour la détection précoce des 
                      maladies du café au Burundi. Utilisation de Computer Vision et Machine Learning pour 
                      analyser les images de plants et identifier les pathologies.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Objectifs de recherche :</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Détection automatique des maladies du café</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Prédiction des rendements agricoles</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Application mobile pour agriculteurs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Dataset de 10K+ images annotées</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">TensorFlow</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Computer Vision</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Python</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">React Native</span>
                    </div>

                    <div className="bg-card-2 border border-white/10 rounded-lg p-4">
                      <div className="text-sm font-semibold text-white mb-2">Avancement : 60%</div>
                      <div className="w-full bg-card-1 rounded-full h-2 mb-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <div className="text-xs text-white/60">Publication prévue : Q4 2024</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blockchain for Supply Chain */}
              <div className="bg-gradient-to-br from-secondary/10 to-card-2 border border-secondary/30 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Microscope className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Blockchain pour la Traçabilité Agricole</h3>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>2023 - 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Users className="w-4 h-4" />
                          <span>Partenariat ODECA & Université</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-secondary font-semibold">Complété</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Recherche sur l'utilisation de la blockchain pour améliorer la traçabilité de la filière 
                      café au Burundi. Développement d'un prototype de système décentralisé pour enregistrer 
                      toutes les transactions de la chaîne d'approvisionnement.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Résultats obtenus :</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Prototype fonctionnel sur Ethereum</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Smart contracts pour transactions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Interface web pour stakeholders</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/70">Publication dans journal académique</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Ethereum</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Solidity</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Web3.js</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">React</span>
                    </div>

                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold"
                    >
                      Lire la publication <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Publications Scientifiques</h2>
            
            <div className="space-y-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      Blockchain-Based Traceability System for Coffee Supply Chain in Burundi
                    </h3>
                    <p className="text-sm text-white/60 mb-3">
                      Journal of Agricultural Technology • Décembre 2023
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                      Article sur l'implémentation d'un système de traçabilité basé sur la blockchain 
                      pour améliorer la transparence de la filière café.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                    >
                      Lire l'article <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      Optimizing Database Performance for Large-Scale Government Systems
                    </h3>
                    <p className="text-sm text-white/60 mb-3">
                      International Conference on Software Engineering • Juin 2023
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                      Présentation des techniques d'optimisation utilisées dans le projet ODECA pour 
                      gérer des millions d'enregistrements.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold"
                    >
                      Voir la présentation <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-tertiary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-tertiary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      Mobile Payment Solutions for Urban Transportation in Africa
                    </h3>
                    <p className="text-sm text-white/60 mb-3">
                      African Fintech Journal • Mars 2024
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                      Étude sur l'adoption des solutions de paiement mobile dans les transports urbains 
                      africains, basée sur le projet Ufaranga.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-tertiary hover:text-tertiary/80 transition-colors text-sm font-semibold"
                    >
                      Lire l'étude <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Domaines de Recherche</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Intelligence Artificielle</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Machine Learning, Computer Vision et NLP appliqués aux problématiques africaines, 
                  notamment l'agriculture et la santé.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Blockchain & Web3</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Applications de la blockchain pour la traçabilité, les smart contracts et 
                  l'inclusion financière en Afrique.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Systèmes Distribués</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Architecture de systèmes scalables et résilients pour applications à grande 
                  échelle dans des environnements à connectivité limitée.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Fintech & Inclusion</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Solutions de paiement mobile et technologies financières adaptées au contexte 
                  africain pour l'inclusion financière.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">E-Government</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Digitalisation des services publics et optimisation des processus 
                  gouvernementaux pour plus d'efficacité.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">IoT & Agriculture</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Internet des objets appliqué à l'agriculture intelligente pour optimiser 
                  les rendements et la gestion des ressources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-secondary/10 to-card-2 border border-secondary/30 rounded-xl p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Collaboration Scientifique</h3>
              <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                Intéressé par une collaboration de recherche ou souhaitez discuter d'un projet scientifique ? 
                Contactez-moi pour explorer les opportunités.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                Proposer une collaboration
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
