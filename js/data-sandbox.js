/**
 * MUSTHAQUE ALI PORTFOLIO — DATA VISUALIZATIONS & ML BENCHMARKS
 * Interactive Chart.js visualizers for ML models, retail intelligence and engineering simulation
 */

class DataVisualizer {
  constructor() {
    this.initCharts();
  }

  initCharts() {
    // Chart 1: Retail Revenue by Category (Nesto Retail Case Study)
    const retailCtx = document.getElementById('retail-sales-chart');
    if (retailCtx && window.Chart) {
      new Chart(retailCtx, {
        type: 'bar',
        data: {
          labels: ['Groceries', 'Produce', 'Dairy', 'Beverages', 'Personal Care', 'Household'],
          datasets: [
            {
              label: 'Gross Sales ($K)',
              data: [341.7, 284.5, 192.4, 143.6, 112.8, 88.2],
              backgroundColor: '#1d1d1b',
              borderColor: '#000000',
              borderWidth: 1
            },
            {
              label: 'Net Margin ($K)',
              data: [61.5, 91.0, 53.8, 48.8, 42.8, 24.7],
              backgroundColor: '#c03f13',
              borderColor: '#a3340e',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                font: { family: 'JetBrains Mono', size: 10 },
                color: '#1d1d1b'
              }
            }
          },
          scales: {
            x: {
              ticks: { font: { family: 'JetBrains Mono', size: 9 }, color: '#69645f' },
              grid: { color: 'rgba(29, 29, 27, 0.08)' }
            },
            y: {
              ticks: { font: { family: 'JetBrains Mono', size: 9 }, color: '#69645f' },
              grid: { color: 'rgba(29, 29, 27, 0.08)' }
            }
          }
        }
      });
    }

    // Chart 2: ML Model Benchmark (ROC-AUC & F1-Score)
    const mlCtx = document.getElementById('ml-benchmark-chart');
    if (mlCtx && window.Chart) {
      new Chart(mlCtx, {
        type: 'bar',
        data: {
          labels: ['Logistic Reg', 'Decision Tree', 'AdaBoost', 'Random Forest', 'XGBoost Tuned'],
          datasets: [
            {
              label: 'ROC-AUC Score',
              data: [0.78, 0.81, 0.86, 0.90, 0.924],
              backgroundColor: '#c03f13',
              borderColor: '#a3340e',
              borderWidth: 1
            },
            {
              label: 'F1-Score',
              data: [0.72, 0.76, 0.82, 0.85, 0.88],
              backgroundColor: '#1d1d1b',
              borderColor: '#000000',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                font: { family: 'JetBrains Mono', size: 10 },
                color: '#1d1d1b'
              }
            }
          },
          scales: {
            x: {
              ticks: { font: { family: 'JetBrains Mono', size: 9 }, color: '#69645f' },
              grid: { color: 'rgba(29, 29, 27, 0.08)' }
            },
            y: {
              min: 0.6,
              max: 1.0,
              ticks: { font: { family: 'JetBrains Mono', size: 9 }, color: '#69645f' },
              grid: { color: 'rgba(29, 29, 27, 0.08)' }
            }
          }
        }
      });
    }

    // Chart 3: MOSFET Thermal Dissipation Curve (PCM vs Standard Heat Sink)
    const thermalCtx = document.getElementById('thermal-sim-chart');
    if (thermalCtx && window.Chart) {
      new Chart(thermalCtx, {
        type: 'line',
        data: {
          labels: ['0s', '30s', '60s', '90s', '120s', '150s', '180s', '210s', '240s'],
          datasets: [
            {
              label: 'Standard Aluminum Heat Sink (°C)',
              data: [25, 48, 66, 78, 87, 92, 95, 96, 96.5],
              borderColor: '#69645f',
              borderDash: [5, 5],
              backgroundColor: 'transparent',
              borderWidth: 2,
              tension: 0.3
            },
            {
              label: 'Hybrid PCM Embedded Matrix (°C)',
              data: [25, 42, 54, 61, 67, 72, 77, 80, 81.9],
              borderColor: '#c03f13',
              backgroundColor: 'rgba(192, 63, 19, 0.1)',
              fill: true,
              borderWidth: 2.5,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                font: { family: 'JetBrains Mono', size: 10 },
                color: '#1d1d1b'
              }
            }
          },
          scales: {
            x: {
              title: { display: false },
              ticks: { font: { family: 'JetBrains Mono', size: 9 }, color: '#69645f' },
              grid: { color: 'rgba(29, 29, 27, 0.08)' }
            },
            y: {
              title: { display: false },
              ticks: { font: { family: 'JetBrains Mono', size: 9 }, color: '#69645f' },
              grid: { color: 'rgba(29, 29, 27, 0.08)' }
            }
          }
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.dataVisualizer = new DataVisualizer();
});
