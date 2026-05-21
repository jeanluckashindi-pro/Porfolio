import Header from "../components/Header";
import { Lightbulb, Heart, Code, Users, TrendingUp, Zap } from "lucide-react";

export default function PhilosophiePage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(24,31,39,0.1),transparent_50%)]"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-primary/40 rounded-[5px] mb-6">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Ma vision du développement</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">Ma Philosophie</h1>
              <p className="text-lg sm:text-xl text-text/70 leading-relaxed">
                Les principes et convictions qui guident mon approche du développement logiciel
              </p>
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-card-2 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6 text-center">
                La Technologie au Service de l'Humain
              </h2>
              <p className="text-lg text-text/80 leading-relaxed text-center max-w-3xl mx-auto">
                Je crois fermement que <span className="text-primary font-semibold">la technologie n'est pas une fin en soi</span>, 
                mais un <span className="text-secondary font-semibold">moyen puissant</span> pour résoudre des problèmes réels 
                et améliorer la vie des gens. Chaque ligne de code que j'écris doit avoir un 
                <span className="text-secondary font-semibold"> but et un impact</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text mb-12 text-center">Mes Principes de Développement</h2>
            
            <div className="space-y-8">
              {/* Principle 1 */}
              <div className="bg-card-2 border border-darkGray rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-darkBlue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">1. La Simplicité avant la Complexité</h3>
                    <p className="text-text/70 leading-relaxed mb-4">
                      Un code simple est un code maintenable. Je privilégie toujours les solutions élégantes et 
                      compréhensibles plutôt que les architectures trop complexes. La complexité doit être justifiée 
                      par un besoin réel, pas par le désir de montrer ses compétences techniques.
                    </p>
                    <div className="bg-darkBlue rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm text-text/60 italic">
                        "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, 
                        mais lorsqu'il n'y a plus rien à retirer." - Antoine de Saint-Exupéry
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="bg-card-2 border border-darkGray rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-darkBlue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">2. L'Utilisateur au Centre</h3>
                    <p className="text-text/70 leading-relaxed mb-4">
                      Chaque fonctionnalité, chaque interface, chaque décision technique doit être pensée en fonction 
                      de l'utilisateur final. Une solution techniquement brillante mais difficile à utiliser est un échec. 
                      L'expérience utilisateur n'est pas un luxe, c'est une nécessité.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-darkBlue rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-secondary mb-1">UX First</div>
                        <div className="text-xs text-text/60">Priorité utilisateur</div>
                      </div>
                      <div className="bg-darkBlue rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-secondary mb-1">Accessible</div>
                        <div className="text-xs text-text/60">Pour tous</div>
                      </div>
                      <div className="bg-darkBlue rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-secondary mb-1">Intuitif</div>
                        <div className="text-xs text-text/60">Sans formation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="bg-card-2 border border-darkGray rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-darkBlue rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">3. L'Amélioration Continue</h3>
                    <p className="text-text/70 leading-relaxed mb-4">
                      Le code parfait n'existe pas, mais le code peut toujours être amélioré. Je crois en l'itération, 
                      au refactoring régulier et à l'apprentissage constant. Chaque projet est une opportunité d'apprendre 
                      et de faire mieux que la fois précédente.
                    </p>
                    <div className="bg-darkBlue rounded-lg p-4">
                      <ul className="space-y-2 text-sm text-text/70">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span>Refactoring régulier du code existant</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span>Veille technologique active</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span>Feedback et itération rapide</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span>Tests et mesures de performance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principle 4 */}
              <div className="bg-card-2 border border-darkGray rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-darkBlue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">4. La Collaboration et le Partage</h3>
                    <p className="text-text/70 leading-relaxed mb-4">
                      Le développement logiciel est un sport d'équipe. Les meilleures solutions naissent de la collaboration, 
                      du partage de connaissances et de la diversité des perspectives. Je crois au code review, au pair programming 
                      et au mentorat comme moyens d'élever le niveau de toute l'équipe.
                    </p>
                    <div className="bg-darkBlue rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm text-text/60">
                        <span className="font-semibold text-text">Ma conviction :</span> Un développeur qui partage ses 
                        connaissances ne perd rien, il gagne une communauté plus forte et des collègues plus compétents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principle 5 */}
              <div className="bg-card-2 border border-darkGray rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-darkBlue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text mb-4">5. L'Impact avant la Perfection</h3>
                    <p className="text-text/70 leading-relaxed mb-4">
                      Mieux vaut une solution imparfaite qui fonctionne et aide les utilisateurs aujourd'hui, qu'une solution 
                      parfaite qui n'arrive jamais. Je crois en l'approche MVP (Minimum Viable Product), au déploiement rapide 
                      et à l'amélioration continue basée sur les retours réels des utilisateurs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-darkBlue rounded-lg p-4">
                        <div className="text-lg font-bold text-secondary mb-2">✓ Faire</div>
                        <ul className="space-y-1 text-xs text-text/60">
                          <li>• Livrer rapidement</li>
                          <li>• Itérer basé sur feedback</li>
                          <li>• Mesurer l'impact réel</li>
                        </ul>
                      </div>
                      <div className="bg-darkBlue rounded-lg p-4">
                        <div className="text-lg font-bold text-text/40 mb-2">✗ Éviter</div>
                        <ul className="space-y-1 text-xs text-text/40">
                          <li>• Sur-ingénierie</li>
                          <li>• Perfectionnisme paralysant</li>
                          <li>• Features inutilisées</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach to Work */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text mb-12 text-center">Mon Approche du Travail</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card-2 border border-darkGray rounded-xl p-6">
                <h3 className="text-lg font-bold text-text mb-3">🎯 Orienté Résultats</h3>
                <p className="text-sm text-text/60 leading-relaxed">
                  Je me concentre sur la livraison de valeur concrète plutôt que sur le nombre d'heures travaillées. 
                  Ce qui compte, c'est l'impact et la qualité du résultat final.
                </p>
              </div>

              <div className="bg-card-2 border border-darkGray rounded-xl p-6">
                <h3 className="text-lg font-bold text-text mb-3">🔍 Attention aux Détails</h3>
                <p className="text-sm text-text/60 leading-relaxed">
                  Les petits détails font la différence entre une solution correcte et une solution excellente. 
                  Je porte une attention particulière à la qualité du code et à l'expérience utilisateur.
                </p>
              </div>

              <div className="bg-card-2 border border-darkGray rounded-xl p-6">
                <h3 className="text-lg font-bold text-text mb-3">💬 Communication Transparente</h3>
                <p className="text-sm text-text/60 leading-relaxed">
                  Je crois en une communication claire et honnête. Les problèmes doivent être signalés tôt, 
                  les progrès partagés régulièrement, et les décisions expliquées.
                </p>
              </div>

              <div className="bg-card-2 border border-darkGray rounded-xl p-6">
                <h3 className="text-lg font-bold text-text mb-3">🚀 Proactivité</h3>
                <p className="text-sm text-text/60 leading-relaxed">
                  Je n'attends pas qu'on me dise quoi faire. J'identifie les problèmes, propose des solutions 
                  et prends des initiatives pour améliorer les processus et les produits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-card-2 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12 text-center">
              <div className="text-6xl text-primary/20 mb-4">"</div>
              <p className="text-xl sm:text-2xl text-text font-medium leading-relaxed mb-6">
                Le meilleur code est celui qui résout un problème réel, 
                est compréhensible par l'équipe, et peut évoluer avec les besoins.
              </p>
              <p className="text-text/60">— Ma philosophie en une phrase</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
