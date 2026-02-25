'use client';

import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import Button from '../components/Button';

export default function BackofficeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler une connexion
    setTimeout(() => {
      setLoading(false);
      console.log('Login:', { email, password });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-card-1 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Backoffice</h1>
        </div>

        {/* Login Form */}
        <div className="bg-card-2 border border-white/10 rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white/40" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base bg-card-1 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-9 sm:w-10 flex items-center justify-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-white/40" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-9 sm:pl-10 pr-10 sm:pr-11 py-2.5 sm:py-3 text-sm sm:text-base bg-card-1 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-2.5 sm:pr-3 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                >
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a href="#" className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors">
                Mot de passe oublié ?
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              loading={loading}
              spinnerColor="black"
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-2.5 sm:py-3 px-4 rounded-md text-sm sm:text-base font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-card-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Se connecter
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-white/40 mt-4 sm:mt-6 px-4">
          Projet personnel conçu et développé par <span className="text-white/60 font-medium">Jean-Luc Kahsindi Nestor</span>
        </p>
      </div>
    </div>
  );
}
