import Header from "../components/Header";
import { Trophy, Award, Star, Medal, Target, Users } from "lucide-react";

export default function RecompensesPage() {
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
                <Trophy className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-semibold">Distinctions & Reconnaissances</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Récompenses & Distinctions</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Reconnaissances professionnelles et distinctions obtenues pour l'excellence technique et l'impact des projets
              </p>
            </div>
          </div>
        </section>

        {/* Major Awards */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Distinctions Majeures</h2>
            
            <div className="space-y-8">
              {/* Prix Innovation Nationale */}
              <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Trophy className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Prix de l'Innovation Numérique</h3>
                        <div className="text-sm text-white/60 mb-2">Ministère des Technologies - Burundi</div>
                        <div className="text-sm text-white/60">Décembre 2023</div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-semibold">1ère Place</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Récompense nationale pour le développement du projet ODECA, première plateforme de 
                      cartographie géospatiale de la filière café au Burundi. Reconnu pour son impact sur 
                      la digitalisation du secteur agricole et l'amélioration de la traçabilité.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="bg-card-2 border border-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary mb-1">15K+</div>
                        <div className="text-xs text-white/60">Caféiculteurs cartographiés</div>
                      </div>
                      <div className="bg-card-2 border border-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary mb-1">100%</div>
                        <div className="text-xs text-white/60">Provinces couvertes</div>
                      </div>
                      <div className="bg-card-2 border border-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary mb-1">National</div>
                        <div className="text-xs text-white/60">Impact</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Excellence Technique */}
              <div className="bg-gradient-to-br from-secondary/10 to-card-2 border border-secondary/30 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Award className="w-12 h-12 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Prix d'Excellence Technique</h3>
                        <div className="text-sm text-white/60 mb-2">Mediabox Burundi</div>
                        <div className="text-sm text-white/60">Juin 2024</div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                        <Medal className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-secondary font-semibold">Excellence</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Distinction interne pour l'excellence technique et l'innovation dans le développement 
                      de solutions. Reconnu pour la qualité du code, l'architecture des systèmes et le 
                      mentorat des développeurs juniors.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Architecture</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Code Quality</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Mentorat</span>
                      <span className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Innovation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hackathon Winner */}
              <div className="bg-gradient-to-br from-tertiary/10 to-card-2 border border-tertiary/30 rounded-xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-tertiary/20 rounded-xl flex items-center justify-center">
                      <Star className="w-12 h-12 text-tertiary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Hackathon Fintech Africa</h3>
                        <div className="text-sm text-white/60 mb-2">African Development Bank</div>
                        <div className="text-sm text-white/60">Mars 2023</div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-tertiary/40 rounded-[5px]">
                        <Trophy className="w-4 h-4 text-tertiary" />
                        <span className="text-xs text-tertiary font-semibold">2ème Place</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed mb-4">
                      Deuxième place au hackathon régional Fintech Africa avec le prototype Ufaranga, 
                      solution de paiement NFC pour les transports urbains. Projet sélectionné parmi 
                      150+ équipes de 15 pays africains.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-card-2 border border-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-tertiary mb-1">150+</div>
                        <div className="text-xs text-white/60">Équipes participantes</div>
                      </div>
                      <div className="bg-card-2 border border-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-tertiary mb-1">15</div>
                        <div className="text-xs text-white/60">Pays représentés</div>
                      </div>
                      <div className="bg-card-2 border border-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-tertiary mb-1">48h</div>
                        <div className="text-xs text-white/60">Durée du hackathon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Recognitions */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Autres Reconnaissances</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Meilleur Projet de l'Année</h3>
                <p className="text-sm text-white/60 mb-3">Mediabox - 2024</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Projet ISP Starlink reconnu comme le meilleur projet de l'année pour son impact 
                  sur la connectivité internet au Burundi.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mentor de l'Année</h3>
                <p className="text-sm text-white/60 mb-3">Tech Community Burundi - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Reconnu pour l'accompagnement et le mentorat de jeunes développeurs dans 
                  la communauté tech burundaise.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Top Contributor</h3>
                <p className="text-sm text-white/60 mb-3">Open Source Africa - 2024</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Parmi les 50 meilleurs contributeurs open source d'Afrique de l'Est pour 
                  l'année 2024.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Innovation Award</h3>
                <p className="text-sm text-white/60 mb-3">UNICEF Innovation Lab - 2022</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Prix d'innovation pour le développement de solutions digitales au service 
                  de l'éducation.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Medal className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Best Architecture Design</h3>
                <p className="text-sm text-white/60 mb-3">DevFest Burundi - 2023</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Meilleure architecture système pour une application scalable lors du 
                  DevFest Burundi 2023.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Rising Star Developer</h3>
                <p className="text-sm text-white/60 mb-3">East Africa Tech Summit - 2022</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Reconnu comme développeur émergent prometteur lors du sommet tech 
                  d'Afrique de l'Est.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Impact Global</h2>
            
            <div className="bg-card-2 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-white/60">Prix nationaux</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">3</div>
                  <div className="text-sm text-white/60">Prix régionaux</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-tertiary mb-2">10+</div>
                  <div className="text-sm text-white/60">Reconnaissances</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">50K+</div>
                  <div className="text-sm text-white/60">Utilisateurs impactés</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
