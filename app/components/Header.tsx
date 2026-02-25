'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Home,
  User,
  FolderOpen,
  Compass,
  BookOpen as BookOpenIcon,
  Database,
  Mail,
  GraduationCap, 
  Zap, 
  Trophy, 
  Lightbulb, 
  Briefcase, 
  Microscope,
  Target,
  MessageCircle,
  Rocket,
  FileText,
  Sparkles,
  Pin,
  FileDown,
  Palette,
  Link2,
  Globe
} from 'lucide-react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const menuItems = [
    { 
      title: 'Accueil', 
      icon: Home,
      href: '/' 
    },
    {
      title: 'Profil',
      icon: User,
      description: 'Mon parcours et mes compétences',
      items: [
        { title: 'Histoire', description: 'Mon parcours personnel', icon: BookOpenIcon, href: '/histoire' },
        { title: 'Parcours académique', description: 'Formation et diplômes', icon: GraduationCap, href: '/parcours' },
        { title: 'Compétences', description: 'Expertise technique', icon: Zap, href: '/competences' },
        { title: 'Récompenses', description: 'Distinctions obtenues', icon: Trophy, href: '/recompenses' },
      ],
    },
    {
      title: 'Projets',
      icon: FolderOpen,
      description: 'Mes réalisations et travaux',
      items: [
        { title: 'Personnels', description: 'Projets créatifs', icon: Lightbulb, href: '/projets/personnels' },
        { title: 'Professionnels', description: 'Missions clients', icon: Briefcase, href: '/projets/professionnels' },
        { title: 'Scientifiques', description: 'Recherche & innovation', icon: Microscope, href: '/projets/scientifiques' },
      ],
    },
    {
      title: 'Vision',
      icon: Compass,
      description: 'Ma philosophie et mes objectifs',
      items: [
        { title: 'Objectifs', description: 'Ambitions futures', icon: Target, href: '/objectifs' },
        { title: 'Philosophie', description: 'Valeurs et méthodes', icon: MessageCircle, href: '/philosophie' },
        { title: 'Innovation', description: 'Recherche & développement', icon: Rocket, href: '/innovation' },
      ],
    },
    {
      title: 'Publications',
      icon: BookOpenIcon,
      description: 'Articles et réalisations',
      items: [
        { title: 'Articles', description: 'Écrits et publications', icon: FileText, href: '/publications' },
        { title: 'Réalisations', description: 'Projets aboutis', icon: Sparkles, href: '/realisations' },
        { title: 'Certificats', description: 'Certifications obtenues', icon: Trophy, href: '/certificats' },
      ],
    },
    {
      title: 'Ressources',
      icon: Database,
      description: 'Documents et médias',
      items: [
        { title: 'CV', description: 'Curriculum vitae', icon: FileDown, href: '/cv' },
        { title: 'Galerie', description: 'Photos et vidéos', icon: Palette, href: '/galerie' },
        { title: 'Liens', description: 'Ressources externes', icon: Link2, href: '/liens' },
      ],
    },
    {
      title: 'Contact',
      icon: Mail,
      description: 'Me joindre',
      items: [
        { title: 'Formulaire', description: 'Envoyez un message', icon: Mail, href: '/contact' },
        { title: 'Réseaux', description: 'Profils professionnels', icon: Globe, href: '/reseaux' },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card-2/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-14 px-8">
          {/* Logo */}
          <Link href="/" className="text-lg font-medium text-white tracking-tight">
            Portfolio
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.items && setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.items ? (
                  <button className={`flex items-center gap-2 text-sm transition-colors py-2 px-3 rounded-md border cursor-pointer ${
                    activeMenu === item.title 
                      ? 'text-white border-white/20 bg-white/10' 
                      : 'text-white/70 hover:text-white border-transparent hover:border-white/10 hover:bg-white/5'
                  }`}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </button>
                ) : (
                  <Link 
                    href={item.href!} 
                    className={`flex items-center gap-2 text-sm transition-colors py-2 px-3 rounded-md border cursor-pointer ${
                      isActive(item.href)
                        ? 'text-white border-white/20 bg-white/10'
                        : 'text-white/70 hover:text-white border-transparent hover:border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                )}

                {/* Mega Menu */}
                {item.items && activeMenu === item.title && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2">
                    <div className="bg-card-2 border border-white/10 rounded-lg shadow-2xl overflow-hidden min-w-[380px]">
                      {/* Menu Header */}
                      <div className="px-6 py-4 bg-white/5 border-b border-white/5">
                        <div className="flex items-center gap-2.5 text-white mb-1.5">
                          <item.icon className="w-5 h-5" />
                          <span className="font-semibold text-base">{item.title}</span>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
                      </div>
                      
                      {/* Menu Items Grid */}
                      <div className="p-3 grid grid-cols-1 gap-1">
                        {item.items.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="flex items-start gap-3.5 px-3 py-3 rounded-md text-white/60 hover:text-white hover:bg-white/5 transition-all group"
                            >
                              <div className="mt-0.5 p-2 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors">
                                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium mb-0.5">{subItem.title}</div>
                                <div className="text-xs text-white/40 leading-relaxed">{subItem.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 bg-white text-black px-5 py-1.5 text-sm rounded-sm hover:bg-white/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              console.log('Menu clicked:', !mobileMenuOpen);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden text-white z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-card-1 z-50 overflow-y-auto shadow-2xl">
            <div className="px-6 py-6 space-y-2">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {menuItems.map((item) => (
                <div key={item.title} className="border-b border-white/5 pb-2">
                  {item.items ? (
                    <>
                      <button
                        onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.title ? null : item.title)}
                        className="flex items-center justify-between w-full py-3 text-white hover:text-white/80 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                        <svg
                          className={`w-5 h-5 transition-transform ${mobileSubmenuOpen === item.title ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Submenu avec animation */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileSubmenuOpen === item.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-8 pr-4 py-2 space-y-1 bg-white/5 rounded-lg mt-2">
                          {item.items.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-start gap-3 py-3 text-white/60 hover:text-white transition-colors group"
                              >
                                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium mb-0.5">{subItem.title}</div>
                                  <div className="text-xs text-white/40">{subItem.description}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 py-3 transition-colors ${
                        isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Mobile */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 mt-6 bg-white text-black px-6 py-3 text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Me contacter</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
