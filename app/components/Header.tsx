'use client';

import { useState, useEffect } from 'react';
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
  Globe,
  Settings
} from 'lucide-react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const pathname = usePathname();

  // Sauvegarder le menu actif dans localStorage
  useEffect(() => {
    if (pathname) {
      localStorage.setItem('activeMenuPath', pathname);
      setLoadingButton(null); // Arrêter le spinner une fois la page chargée
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const handleMenuClick = (href: string) => {
    localStorage.setItem('activeMenuPath', href);
    setLoadingButton(href); // Activer le spinner pour ce bouton
    setMobileMenuOpen(false);
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-card-2/95 backdrop-blur-sm border-b border-darkGray">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-14 px-4 sm:px-8">
          {/* Logo */}
          <Link href="/" className="text-lg font-medium text-text tracking-tight">
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
                      ? 'text-text border-darkGray bg-darkBlue' 
                      : 'text-text/70 hover:text-text border-transparent hover:border-darkGray hover:bg-darkBlue'
                  }`}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </button>
                ) : (
                  <Link 
                    href={item.href!}
                    onClick={() => handleMenuClick(item.href!)}
                    className={`flex items-center gap-2 text-sm transition-colors py-2 px-3 rounded-md border cursor-pointer ${
                      isActive(item.href)
                        ? 'text-text border-darkGray bg-darkBlue'
                        : 'text-text/70 hover:text-text border-transparent hover:border-darkGray hover:bg-darkBlue'
                    }`}
                  >
                    {loadingButton === item.href ? (
                      <div className="spinner-container relative" style={{ width: '16px', height: '16px' }}>
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="spinner-spoke"
                            style={{
                              position: 'absolute',
                              left: '50%',
                              top: '0',
                              width: '1.5px',
                              height: '6px',
                              marginLeft: '-0.75px',
                              borderRadius: '0.75px',
                              background: 'currentColor',
                              transform: `rotate(${i * 45}deg)`,
                              transformOrigin: '0.75px 8px',
                              animationDelay: `${-(i / 8)}s`,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <>
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </>
                    )}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.items && activeMenu === item.title && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2">
                    <div className="bg-card-2 border border-darkGray rounded-lg shadow-2xl overflow-hidden min-w-[380px]">
                      {/* Menu Header */}
                      <div className="px-6 py-4 bg-darkBlue border-b border-darkGray">
                        <div className="flex items-center gap-2.5 text-text mb-1.5">
                          <item.icon className="w-5 h-5" />
                          <span className="font-semibold text-base">{item.title}</span>
                        </div>
                        <p className="text-xs text-text/50 leading-relaxed">{item.description}</p>
                      </div>
                      
                      {/* Menu Items Grid */}
                      <div className="p-3 grid grid-cols-1 gap-1">
                        {item.items.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => handleMenuClick(subItem.href)}
                              className="flex items-start gap-3.5 px-3 py-3 rounded-md text-text/60 hover:text-text hover:bg-darkBlue transition-all group"
                            >
                              {loadingButton === subItem.href ? (
                                <div className="mt-0.5 p-2 rounded-md bg-darkBlue">
                                  <div className="spinner-container relative" style={{ width: '16px', height: '16px' }}>
                                    {[...Array(8)].map((_, i) => (
                                      <div
                                        key={i}
                                        className="spinner-spoke"
                                        style={{
                                          position: 'absolute',
                                          left: '50%',
                                          top: '0',
                                          width: '1.5px',
                                          height: '6px',
                                          marginLeft: '-0.75px',
                                          borderRadius: '0.75px',
                                          background: 'currentColor',
                                          transform: `rotate(${i * 45}deg)`,
                                          transformOrigin: '0.75px 8px',
                                          animationDelay: `${-(i / 8)}s`,
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="mt-0.5 p-2 rounded-md bg-darkBlue group-hover:bg-darkBlue transition-colors">
                                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium mb-0.5">{subItem.title}</div>
                                <div className="text-xs text-text/40 leading-relaxed">{subItem.description}</div>
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
            href="/backoffice"
            className="hidden lg:flex items-center gap-2 bg-primary text-background px-5 py-1.5 text-sm rounded-sm hover:bg-darkBlue transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Backoffice</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden text-text z-50 w-10 h-10 inline-flex items-center justify-center rounded-lg border border-darkGray bg-darkBlue"
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
        <div className="lg:hidden fixed inset-x-0 top-14 bottom-0 z-40 bg-background border-t border-darkGray overflow-y-auto">
          <div className="px-4 py-4">
            <div className="mb-4">
              <div className="text-xs font-semibold text-text/50 uppercase tracking-wide mb-2">Navigation</div>
              <div className="divide-y divide-darkGray border-y border-darkGray">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = item.href ? isActive(item.href) : item.items?.some((subItem) => isActive(subItem.href));

                  if (!item.items) {
                    return (
                      <Link
                        key={item.title}
                        href={item.href!}
                        onClick={() => handleMenuClick(item.href!)}
                        className={`flex items-center gap-3 px-1 py-4 text-sm font-medium transition-colors ${
                          active ? 'text-primary' : 'text-text/75'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={item.title}
                      onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.title ? null : item.title)}
                      className={`flex w-full items-center justify-between gap-3 px-1 py-4 text-left text-sm font-medium transition-colors ${
                        active || mobileSubmenuOpen === item.title ? 'text-primary' : 'text-text/75'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </span>
                      <svg
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${mobileSubmenuOpen === item.title ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  );
                })}
                <Link
                  href="/backoffice"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-1 py-4 text-sm font-medium transition-colors ${
                    isActive('/backoffice') ? 'text-primary' : 'text-text/75'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>Backoffice</span>
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-darkGray bg-card-2 p-3">
              {menuItems
                .filter((item) => item.items && item.title === mobileSubmenuOpen)
                .map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-2 px-2 pb-3 text-text">
                      <item.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="text-xs text-text/50">{item.description}</div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      {item.items!.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => handleMenuClick(subItem.href)}
                            className={`flex items-center gap-3 rounded-lg border px-3 py-3 transition-colors ${
                              isActive(subItem.href)
                                ? 'bg-darkBlue border-primary/40 text-text'
                                : 'bg-background border-darkGray text-text/70'
                            }`}
                          >
                            <div className="w-9 h-9 rounded-md bg-darkBlue flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-medium">{subItem.title}</div>
                              <div className="text-xs text-text/40 truncate">{subItem.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

              {!mobileSubmenuOpen && (
                <div className="px-2 py-6 text-center">
                  <div className="text-sm font-semibold text-text mb-1">Choisissez une rubrique</div>
                  <p className="text-xs text-text/50">Les pages du menu apparaissent ici.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {false && mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-background/80 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-card-1 z-50 overflow-y-auto shadow-2xl">
            <div className="px-6 py-6 space-y-2">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {menuItems.map((item) => (
                <div key={item.title} className="border-b border-darkGray pb-2">
                  {item.items ? (
                    <>
                      <button
                        onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.title ? null : item.title)}
                        className="flex items-center justify-between w-full py-3 text-text hover:text-text/80 transition-colors"
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
                        <div className="pl-8 pr-4 py-2 space-y-1 bg-darkBlue rounded-lg mt-2">
                          {item.items.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => handleMenuClick(subItem.href)}
                                className="flex items-start gap-3 py-3 text-text/60 hover:text-text transition-colors group"
                              >
                                {loadingButton === subItem.href ? (
                                  <div className="mt-0.5 p-1.5 rounded-md bg-darkBlue">
                                    <div className="spinner-container relative" style={{ width: '16px', height: '16px' }}>
                                      {[...Array(8)].map((_, i) => (
                                        <div
                                          key={i}
                                          className="spinner-spoke"
                                          style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '0',
                                            width: '1.5px',
                                            height: '6px',
                                            marginLeft: '-0.75px',
                                            borderRadius: '0.75px',
                                            background: 'currentColor',
                                            transform: `rotate(${i * 45}deg)`,
                                            transformOrigin: '0.75px 8px',
                                            animationDelay: `${-(i / 8)}s`,
                                          }}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="mt-0.5 p-1.5 rounded-md bg-darkBlue group-hover:bg-darkBlue transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="flex-1">
                                  <div className="text-sm font-medium mb-0.5">{subItem.title}</div>
                                  <div className="text-xs text-text/40">{subItem.description}</div>
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
                      onClick={() => handleMenuClick(item.href!)}
                      className={`flex items-center gap-3 py-3 transition-colors ${
                        isActive(item.href) ? 'text-text' : 'text-text/70 hover:text-text'
                      }`}
                    >
                      {loadingButton === item.href ? (
                        <div className="spinner-container relative" style={{ width: '20px', height: '20px' }}>
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="spinner-spoke"
                              style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                width: '2px',
                                height: '8px',
                                marginLeft: '-1px',
                                borderRadius: '1px',
                                background: 'currentColor',
                                transform: `rotate(${i * 45}deg)`,
                                transformOrigin: '1px 10px',
                                animationDelay: `${-(i / 8)}s`,
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        <>
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </>
                      )}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Mobile */}
              <Link
                href="/backoffice"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 mt-6 bg-primary text-background px-6 py-3 text-sm font-medium rounded-lg hover:bg-darkBlue transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Backoffice</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
