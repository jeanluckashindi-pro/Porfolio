'use client';

import { useState } from 'react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  spinnerColor?: string;
}

export default function Button({ 
  children, 
  loading = false, 
  spinnerColor = 'currentColor',
  className = '',
  onClick,
  ...props 
}: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      setIsLoading(true);
      await onClick(e);
      // Le loading s'arrête automatiquement après l'action
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  const showSpinner = loading || isLoading;

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={showSpinner || props.disabled}
      {...props}
    >
      {showSpinner ? (
        <div className="flex items-center justify-center">
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
                  background: spinnerColor,
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: '1px 10px',
                  animationDelay: `${-(i / 8)}s`,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
