'use client';

import { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { createRoot } from 'react-dom/client';

export default function SpineSpokeAnimation() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Vérifier si c'est un bouton ou un lien
      const button = target.closest('button, a[href]');
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Créer le conteneur d'animation
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
      `;

      // Ajouter le spinner React
      button.appendChild(spinnerContainer);
      const root = createRoot(spinnerContainer);
      root.render(<LoadingSpinner size="xs" color="black" />);

      // Nettoyer après l'animation
      setTimeout(() => {
        root.unmount();
        spinnerContainer.remove();
      }, 800);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
