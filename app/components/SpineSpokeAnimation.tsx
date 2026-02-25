'use client';

import { useEffect } from 'react';

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
      const spokeContainer = document.createElement('div');
      spokeContainer.className = 'spine-spoke-container';
      spokeContainer.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 9999;
      `;

      // Créer 12 rayons
      const spokeCount = 12;
      for (let i = 0; i < spokeCount; i++) {
        const spoke = document.createElement('div');
        spoke.className = 'spine-spoke';
        const angle = (360 / spokeCount) * i;
        spoke.style.cssText = `
          position: absolute;
          width: 3px;
          height: 40px;
          background: linear-gradient(to bottom, var(--color-primary), transparent);
          transform-origin: top center;
          transform: rotate(${angle}deg);
          animation: spokeExpand 0.6s ease-out forwards;
        `;
        spokeContainer.appendChild(spoke);
      }

      button.appendChild(spokeContainer);

      // Nettoyer après l'animation
      setTimeout(() => {
        spokeContainer.remove();
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
