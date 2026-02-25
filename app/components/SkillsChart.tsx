'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function ExperienceChart() {
  const data = {
    labels: ['2022', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        label: 'Projets complétés',
        data: [2, 5, 8, 12, 15],
        borderColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgba(255, 255, 255, 0.9)',
        pointBorderColor: '#131313',
        pointBorderWidth: 2,
      },
      {
        label: 'Technologies maîtrisées',
        data: [3, 5, 7, 10, 12],
        borderColor: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgba(255, 255, 255, 0.7)',
        pointBorderColor: '#131313',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#e8eaed',
          font: {
            size: 12,
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: '#1c1c1c',
        titleColor: '#e8eaed',
        bodyColor: '#9aa0a6',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#9aa0a6',
          font: {
            size: 11,
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#9aa0a6',
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export function TechStackChart() {
  const data = {
    labels: ['Spring Boot', 'React', 'Node.js', 'Angular', 'Python', 'Docker'],
    datasets: [
      {
        label: 'Niveau de maîtrise (%)',
        data: [95, 90, 85, 80, 75, 88],
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1c1c1c',
        titleColor: '#e8eaed',
        bodyColor: '#9aa0a6',
        borderColor: 'rgba(138, 180, 248, 0.3)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context: any) {
            return context.parsed.y + '%';
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#9aa0a6',
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return value + '%';
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#e8eaed',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function ProjectsTimelineChart() {
  const data = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Activité mensuelle',
        data: [12, 15, 18, 22, 25, 28, 30, 32, 35, 38, 40, 42],
        borderColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgba(255, 255, 255, 0.9)',
        pointBorderColor: '#131313',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1c1c1c',
        titleColor: '#e8eaed',
        bodyColor: '#9aa0a6',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context: any) {
            return 'Commits: ' + context.parsed.y;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#9aa0a6',
          font: {
            size: 11,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9aa0a6',
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export function SkillsDonutChart() {
  const data = {
    labels: ['Backend', 'Frontend', 'DevOps', 'Architecture', 'Database', 'API Design'],
    datasets: [
      {
        label: 'Répartition des compétences',
        data: [30, 25, 15, 15, 10, 5],
        backgroundColor: [
          'rgba(255, 255, 255, 0.25)',
          'rgba(255, 255, 255, 0.20)',
          'rgba(255, 255, 255, 0.15)',
          'rgba(255, 255, 255, 0.12)',
          'rgba(255, 255, 255, 0.10)',
          'rgba(255, 255, 255, 0.08)',
        ],
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const,
        labels: {
          color: '#e8eaed',
          font: {
            size: 12,
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: '#1c1c1c',
        titleColor: '#e8eaed',
        bodyColor: '#9aa0a6',
        borderColor: 'rgba(138, 180, 248, 0.3)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return label + ': ' + value + '%';
          }
        }
      },
    },
    cutout: '65%',
  };

  return <Doughnut data={data} options={options} />;
}

