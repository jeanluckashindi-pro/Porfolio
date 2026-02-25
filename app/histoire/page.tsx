import Header from "../components/Header";
import { BookOpen, Code, Rocket, Award, TrendingUp, Heart, Lightbulb, Target } from "lucide-react";
import Link from "next/link";

export default function HistoirePage() {
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
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Mon parcours</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Mon Histoire</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                De la passion pour la technologie à l'ingénierie de solutions à impact national
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Les Débuts */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] ring-4 ring-card-1"></div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px] mb-2">
                    <Heart className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-semibold">Les débuts</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">La Passion pour la Technologie</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Dès mon jeune âge, j'ai été fasciné par la capacité de la technologie à transformer des idées en solutions concrètes. 
                  Cette passion m'a naturellement conduit vers les études en génie informatique, où j'ai découvert le pouvoir du code 
                  pour résoudre des problèmes réels.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Chaque ligne de code était une opportunité d'apprendre, chaque bug une leçon, et chaque projet réussi 
                  renforçait ma conviction que la technologie pouvait avoir un impact significatif sur la société.
                </p>
              </div>

              {/* Formation */}
              <div className="relative pl-8 border-l-2 border-secondary/30">
                <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full -translate-x-[9px] ring-4 ring-card-1"></div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px] mb-2">
                    <Code className="w-3 h-3 text-secondary" />
                    <span className="text-xs text-secondary font-semibold">2020 - 2022</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Formation Académique & Premiers Projets</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Durant ma formation en génie informatique, j'ai acquis des bases solides en programmation, architecture logicielle 
                  et gestion de bases de données. Mais c'est surtout à travers les projets pratiques que j'ai vraiment appris.
                </p>
                <div className="bg-card-2 border border-white/10 rounded-lg p-4 mb-4">
                  <h3 className="text-white font-semibold mb-2">Compétences développées :</h3>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                      <span>Maîtrise de Java, JavaScript et Python</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                      <span>Développement web fullstack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                      <span>Conception de bases de données relationnelles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                      <span>Participation à des hackathons et projets collaboratifs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Premières Expériences */}
              <div className="relative pl-8 border-l-2 border-tertiary/30">
                <div className="absolute left-0 top-0 w-4 h-4 bg-tertiary rounded-full -translate-x-[9px] ring-4 ring-card-1"></div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-tertiary/40 rounded-[5px] mb-2">
                    <Rocket className="w-3 h-3 text-tertiary" />
                    <span className="text-xs text-tertiary font-semibold">Premières missions</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Entrée dans le Monde Professionnel</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Mes premières expériences professionnelles chez HOGI et AFRISURGE m'ont permis de comprendre les exigences 
                  du développement en entreprise : qualité du code, respect des délais, travail en équipe et communication efficace.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Travailler en remote pour AFRISURGE m'a également appris l'autonomie et la discipline nécessaires pour 
                  livrer des résultats de qualité dans un environnement distribué.
                </p>
              </div>

              {/* Mediabox & Projets Majeurs */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] ring-4 ring-card-1"></div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px] mb-2">
                    <Award className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-semibold">2022 - Présent</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Mediabox Burundi : L'Impact à Grande Échelle</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Rejoindre Mediabox Burundi a été un tournant décisif dans ma carrière. Pour la première fois, je travaillais 
                  sur des projets qui impactaient directement des milliers de personnes et des institutions nationales.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-card-2 border border-white/10 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      Projet ODECA
                    </h3>
                    <p className="text-sm text-white/60">
                      Digitalisation de toute la filière café du Burundi avec cartographie géospatiale et gestion des producteurs.
                    </p>
                  </div>
                  <div className="bg-card-2 border border-white/10 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-secondary" />
                      ISP Starlink
                    </h3>
                    <p className="text-sm text-white/60">
                      Système complet de gestion et revente des kits Starlink avec intégration API et dashboard temps réel.
                    </p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Ces projets m'ont permis de développer une expertise en architecture microservices, intégration d'APIs complexes, 
                  et gestion de systèmes à grande échelle. Plus important encore, j'ai appris à concevoir des solutions qui répondent 
                  aux besoins réels des utilisateurs et des institutions.
                </p>
              </div>

              {/* UNICEF */}
              <div className="relative pl-8 border-l-2 border-secondary/30">
                <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full -translate-x-[9px] ring-4 ring-card-1"></div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px] mb-2">
                    <TrendingUp className="w-3 h-3 text-secondary" />
                    <span className="text-xs text-secondary font-semibold">Expérience internationale</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">UNICEF : Standards Internationaux</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Mon passage à l'UNICEF Burundi m'a exposé aux standards rigoureux des Nations Unies et à la collaboration 
                  avec des équipes multiculturelles. J'ai appris l'importance de la documentation, de la conformité et de 
                  la qualité dans le développement de solutions à impact humanitaire.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Cette expérience a renforcé ma conviction que la technologie doit être au service de l'humain et que 
                  chaque ligne de code peut contribuer à améliorer des vies.
                </p>
              </div>

              {/* Aujourd'hui */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full -translate-x-[9px] ring-4 ring-card-1"></div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-white/40 rounded-[5px] mb-2">
                    <Rocket className="w-3 h-3 text-white" />
                    <span className="text-xs text-white font-semibold">Aujourd'hui</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Continuer à Innover</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Aujourd'hui, je continue à développer des solutions innovantes chez Mediabox tout en travaillant sur 
                  Ufaranga, mon projet personnel de paiement sans contact pour le transport urbain. Mon objectif reste 
                  le même : utiliser la technologie pour créer un impact positif et durable.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Chaque projet est une opportunité d'apprendre, de grandir et de contribuer à la transformation numérique 
                  de l'Afrique. L'aventure ne fait que commencer.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/projets/professionnels" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all text-sm"
                  >
                    Voir mes projets
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/5 transition-all text-sm"
                  >
                    Me contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
