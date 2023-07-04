import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import IconDash from '../../assets/dash.png';
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
    <div className="divmain_dash">
      <div className="header_dash">
        <div className="logo_dash">
        </div>
        <div className="content_btn_dash">
          <button className="btn_dash">
            <img src={IconDash} alt=""></img>
            Dashboard
          </button>

          <Link to="/login">
            <button className="btn_dash">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="48"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z" /></svg>              Cerrar Sesión
            </button>
          </Link>
        </div>
      </div>
      <div className="content_main_dash">
        <div className="header_second_dash">
          <div>
            <p className="title_main">Dashboard</p>
          </div>
        </div>
        <div className="grafico_fila_1">
          <div className="content_1_dash">
            <p className="title_dash">Total usuarios registrados</p>
            <p className="number_grafic1">140</p>
            <div className="line_dash"></div>
          </div>
          <div className="content_1_dash">
            <p className="title_dash">Cantidad de usuarios conectados</p>
            <p className="number_grafic1">40</p>
            <div className="line_dash"></div>
          </div>
        </div>

        <div className="grafico_fila_2">
          <div className="content_2_dash">
            <p className="title_dash">Interacción con el ChatBot entre los meses de Junio y Julio</p>
            <div className="graficos_dash">
              <h1>AQUI</h1>
            </div>
            <div className="line_dash"></div>
          </div>
          <div className="content_2_dash">
            <p className="title_dash">Cupones enviados en el mes de octubre</p>
            <div className="graficos_dash">
              <h1>AQUI</h1>
            </div>
            <div className="line_dash"></div>
          </div>
        </div>

        <div className="grafico_fila_2">
          <div className="content_2_dash">
            <p className="title_dash">Consumo del Api Key ChatGPT</p>
            <div className="graficos_dash">
              <canvas ref={lineChartRef} id="lineChart"></canvas>
            </div>
            <div className="line_dash"></div>
          </div>
          <div className="content_2_dash">
            <p className="title_dash">Gráfica de las interacciones de usuarios con el chatbot</p>
            <div className="graficos_dash">
              <h1>AQUI</h1>
            </div>
            <div className="line_dash"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
