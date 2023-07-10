import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../style/chart.css';

const Dashboard = () => {
  const doughnutChartRef = useRef(null);

  useEffect(() => {
    let doughnutChart = null;

    // Datos ficticios de interacción del usuario con el chatbot en Junio y Julio
    const juneData = 75; // Porcentaje de interacción en Junio
    const julyData = 85; // Porcentaje de interacción en Julio

    const totalInteractions = juneData + julyData;

    const doughnutChartData = {
      labels: ['Junio', 'Julio'],
      datasets: [
        {
          label: 'Interacción',
          data: [juneData, julyData],
          backgroundColor: ['#007bff', '#dc3545'],
        },
      ],
    };

    const doughnutChartConfig = {
      type: 'doughnut',
      data: doughnutChartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom', // Posición de la leyenda
            labels: {
              // Personalizar las etiquetas de la leyenda
              generateLabels: function (chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  return data.labels.map(function (label, i) {
                    const meta = chart.getDatasetMeta(0);
                    const style = meta.controller.getStyle(i);

                    // Obtener el porcentaje correspondiente a cada mes
                    const percentage = data.datasets[0].data[i];
                    const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                    const percentageValue = ((percentage / total) * 100).toFixed(2) + '%';

                    return {
                      text: `${label} - ${percentageValue}`,
                      fillStyle: style.backgroundColor,
                      hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                      index: i,
                    };
                  });
                }
                return [];
              },
              // Agregar el total de interacciones en la leyenda
              footer: {
                text: `Total: ${totalInteractions}`,
                textAlign: 'center',
              },
            },
          },
          title: {
            display: true,
            text: 'Indicadores de Interacción - Junio y Julio',
          },
        },
      },
    };

    if (doughnutChartRef.current) {
      if (doughnutChart) {
        doughnutChart.destroy(); // Destruir gráfico anterior si existe
      }
      doughnutChart = new Chart(doughnutChartRef.current, doughnutChartConfig);
    }

    return () => {
      if (doughnutChart) {
        doughnutChart.destroy(); // Destruir gráfico al desmontar el componente
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={doughnutChartRef} id="doughnutChart"></canvas>
    </div>
  );
};

export default Dashboard;
