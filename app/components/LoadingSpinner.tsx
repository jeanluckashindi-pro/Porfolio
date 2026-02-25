'use client';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

const sizeConfig = {
  xs: { container: 20, spoke: { width: 1.5, height: 7, radius: 1.25 } },
  sm: { container: 40, spoke: { width: 2.7, height: 14, radius: 2.5 } },
  md: { container: 60, spoke: { width: 7.5, height: 21, radius: 3.75 } },
  lg: { container: 100, spoke: { width: 12.5, height: 35, radius: 6.25 } },
  xl: { container: 120, spoke: { width: 15, height: 42, radius: 7.5 } },
};

export default function LoadingSpinner({ 
  size = 'xl', 
  color = 'white',
  className = '' 
}: LoadingSpinnerProps) {
  const spokeCount = 12;
  const spokes = Array.from({ length: spokeCount }, (_, i) => i);
  const config = sizeConfig[size];

  return (
    <div 
      className={`spinner-container ${className}`}
      style={{
        width: `${config.container}px`,
        height: `${config.container}px`,
      }}
    >
      {spokes.map((i) => {
        const angle = (i * 360) / spokeCount;
        const delay = -(i / spokeCount);
        
        return (
          <div
            key={i}
            className="spinner-spoke"
            style={{
              width: `${config.spoke.width}px`,
              height: `${config.spoke.height}px`,
              marginLeft: `-${config.spoke.width / 2}px`,
              borderRadius: `${config.spoke.radius}px`,
              background: color,
              backgroundColor: color,
              transform: `rotate(${angle}deg)`,
              transformOrigin: `${config.spoke.width / 2}px ${config.container / 2}px`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
