import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../style/chart.css';


const BarrasInteracciones = () => {
    const barChartRef = useRef(null);
  
  
    useEffect(() => {
      let barChart = null;
  
  
      // Generar datos aleatorios de interacciones con el chatbot
      const interactionsData = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 100)
      );
  
  
      const barChartData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Interacciones',
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            data: interactionsData,
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
          <canvas ref={barChartRef}  className="canvasBarra" height="300" width="400"  id="barChart"></canvas>
        </div>
      );
    };


export default BarrasInteracciones;