'use client';

import LoadingSpinner from './LoadingSpinner';

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-card-1 px-4">
      {/* Spinner - responsive */}
      <div className="block sm:hidden">
        <LoadingSpinner size="sm" color="white" />
      </div>
      <div className="hidden sm:block lg:hidden">
        <LoadingSpinner size="sm" color="white" />
      </div>
      <div className="hidden lg:block">
        <LoadingSpinner size="sm" color="white" />
      </div>

      {/* Loading Text - responsive */}
      <p className="mt-8 sm:mt-12 text-on-surface-variant text-base sm:text-lg text-center">
        Chargement...
      </p>
    </div>
  );
}
