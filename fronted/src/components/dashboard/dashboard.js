import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../style/chart.css';

const Dashboard = () => {
  const lineChartRef = useRef(null);

  useEffect(() => {
    let lineChart = null;

    const lineChartData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: '',
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220, 53, 69, 0.5)', // Color de fondo con transparencia
          data: [50, 75, 80, 65, 90],
          fill: true, // Rellenar área debajo de la línea
          borderWidth: 2,
          pointRadius: 0,
          tension: 0,
        },
      ],
    };

    const lineChartConfig = {
      type: 'line',
      data: lineChartData,
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: '',
          },
        },
      },
    };

    if (lineChartRef.current) {
      if (lineChart) {
        lineChart.destroy(); // Destruir gráfico anterior si existe
      }
      lineChart = new Chart(lineChartRef.current, lineChartConfig);
    }

    return () => {
      if (lineChart) {
        lineChart.destroy(); // Destruir gráfico al desmontar el componente
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={lineChartRef} id="lineChart"></canvas>
    </div>
  );
};

export default Dashboard;
