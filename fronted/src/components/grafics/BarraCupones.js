import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../style/chart.css'

const BarraCupones = () => {
  const barChartRef = useRef(null);

  useEffect(() => {
    let barChart = null;

    // Generar datos aleatorios de cupones de descuento enviados en octubre
    const octoberData = Array.from({ length: 31 }, (_, index) =>
      index === 0 ? 0 : Math.floor(Math.random() * 10)
    );

    const barChartData = {
      labels: Array.from({ length: 31 }, (_, index) => index + 1),
      datasets: [
        {
          label: 'Cupones de Descuento',
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: octoberData,
          borderWidth: 1,
        },
      ],
    };

    const barChartConfig = {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: 'Días de Octubre',
            },
          },
          y: {
            grid: {
              borderDash: [2],
              color: '#ddd',
              zeroLineColor: '#ddd',
            },
            ticks: {
              beginAtZero: true,
            },
            title: {
              display: true,
              text: 'Cupones de Descuento',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
          },
        },
      },
    };

    if (barChartRef.current) {
      if (barChart) {
        barChart.destroy(); // Destruir gráfico anterior si existe
      }
      barChart = new Chart(barChartRef.current, barChartConfig);
    }

    return () => {
      if (barChart) {
        barChart.destroy(); // Destruir gráfico al desmontar el componente
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas className="canvasBarra" height="300" width="400" ref={barChartRef} id="barChart"></canvas>
    </div>
  );
};

export default BarraCupones;
