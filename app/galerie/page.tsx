import Header from "../components/Header";
import { Image, Video, Calendar, MapPin, Tag } from "lucide-react";

export default function GaleriePage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(253,214,99,0.1),transparent_50%)]"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-tertiary/40 rounded-[5px] mb-6">
                <Image className="w-4 h-4 text-tertiary" />
                <span className="text-tertiary text-sm font-semibold">Photos & Vidéos</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Galerie Multimédia</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Moments marquants, événements professionnels et projets en images
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <button className="px-4 py-2 bg-primary text-white rounded-[5px] text-sm font-semibold">
                Tous
              </button>
              <button className="px-4 py-2 bg-card-2 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-[5px] text-sm font-semibold transition-all">
                Projets
              </button>
              <button className="px-4 py-2 bg-card-2 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-[5px] text-sm font-semibold transition-all">
                Événements
              </button>
              <button className="px-4 py-2 bg-card-2 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-[5px] text-sm font-semibold transition-all">
                Équipe
              </button>
              <button className="px-4 py-2 bg-card-2 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-[5px] text-sm font-semibold transition-all">
                Conférences
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project ODECA */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Image className="w-16 h-16 text-primary/40" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Voir plus</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-semibold">Projet</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Lancement ODECA</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Déc 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DevFest Conference */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Image className="w-16 h-16 text-secondary/40" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Voir plus</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-secondary" />
                      <span className="text-xs text-secondary font-semibold">Conférence</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">DevFest Burundi 2023</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Nov 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Workshop */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-tertiary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-tertiary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Image className="w-16 h-16 text-tertiary/40" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Voir plus</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-tertiary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-tertiary" />
                      <span className="text-xs text-tertiary font-semibold">Équipe</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Workshop Mediabox</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Juin 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hackathon */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Video className="w-16 h-16 text-primary/40" />
                  <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-[5px] text-xs text-white">
                    Vidéo
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Lire la vidéo</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-semibold">Événement</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Hackathon Fintech Africa</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Mars 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Nairobi</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ISP Starlink */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Image className="w-16 h-16 text-secondary/40" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Voir plus</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-secondary" />
                      <span className="text-xs text-secondary font-semibold">Projet</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Dashboard ISP Starlink</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Fév 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Meetup */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-tertiary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-tertiary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Image className="w-16 h-16 text-tertiary/40" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Voir plus</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-tertiary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-tertiary" />
                      <span className="text-xs text-tertiary font-semibold">Conférence</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Tech Meetup Burundi</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Avr 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ufaranga Demo */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Video className="w-16 h-16 text-primary/40" />
                  <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-[5px] text-xs text-white">
                    Vidéo
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Lire la vidéo</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-semibold">Projet</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Démo Ufaranga</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Jan 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Award Ceremony */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Image className="w-16 h-16 text-secondary/40" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Voir plus</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-secondary" />
                      <span className="text-xs text-secondary font-semibold">Événement</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Cérémonie Prix Innovation</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Déc 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Review Session */}
              <div className="group bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-tertiary/30 transition-all cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-tertiary/20 to-card-1 flex items-center justify-center relative overflow-hidden">
                  <Image className="w-16 h-16 text-tertiary/40" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Voir plus</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-card-2 border border-tertiary/40 rounded-[5px]">
                      <Tag className="w-3 h-3 text-tertiary" />
                      <span className="text-xs text-tertiary font-semibold">Équipe</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Session Code Review</h3>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Mai 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bujumbura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card-2 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-white/60">Photos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">25+</div>
                  <div className="text-sm text-white/60">Vidéos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-tertiary mb-2">15+</div>
                  <div className="text-sm text-white/60">Événements</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">10+</div>
                  <div className="text-sm text-white/60">Projets</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
