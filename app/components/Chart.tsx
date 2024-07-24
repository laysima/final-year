import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeekChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
              label: 'Sample Data',
              data: [15, 25, 4, 80, 45, 30, 75], // Sample data for each day
              borderColor: '#1C76FD',
              borderWidth: 2,
              fill: {
                target: 'origin',
                above: 'rgba(143, 0, 255, 0.2)' // Fill color with opacity 20%
              }
            }]
          },
          options: {
            aspectRatio: 0.8, // Adjust the aspect ratio to 2
            scales: {
              x: {
                grid: {
                  display: false, // Hide x-axis gridlines
                },
                ticks: {
                  display: true, // Show x-axis ticks
                },
              },
              y: {
                grid: {
                  display: false, // Hide y-axis gridlines
                },
                ticks: {
                  display: true, // Show y-axis ticks
                },
              },
            },
            plugins: {
              filler: {
                propagate: false // Prevent the fill from propagating
              }
            },
            layout: {
              padding: {
                top: 20 // Adjust top padding to make room for labels
              }
            },
            elements: {
              line: {
                tension: 0.4 // Adjust the curve tension
              }
            },
            interaction: {
              mode: 'index',
              intersect: false
            },
            maintainAspectRatio: false,
          }
        });

        return () => {
          chart.destroy(); // Clean up the chart when component unmounts
        };
      }
    }
  }, []);

  return (
    <div className=''>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default WeekChart;