'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card-2 border-b border-on-surface-variant/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-on-surface">
              Logo
            </h1>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Accueil
            </a>
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Services
            </a>
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              À propos
            </a>
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white text-black px-6 py-2 rounded-md hover:scale-105 transition-all">
              Connexion
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-on-surface">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
