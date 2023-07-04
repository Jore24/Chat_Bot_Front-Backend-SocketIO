import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BarrasInteracciones from '../grafics/BarrasInteracciones'
import BarraCupones from '../grafics/BarraCupones'
import CircularComparacion from '../grafics/CircularComparacion'

import IconDash from '../../assets/dash.png';
import Chart from 'chart.js/auto';
import '../../style/chart.css';

const Dashboard = () => {
  const lineChartRef = useRef(null);


  useEffect(() => {
    let lineChart = null;


    const lineChartData = {
      labels: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7', 'Jun 8'],
      datasets: [
        {
          label: '',
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220, 53, 69, 0.5)',
          data: [5, 8, 7, 10, 12, 9, 8, 7], // Valores en dólares
          fill: true,
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
            ticks: {
              fontColor: 'black',
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              stepSize: 3, // Incremento entre los valores del eje Y
              max: 20, // Máximo valor en el eje Y (dólares)
              fontColor: 'black',
              callback: function (value) {
                return value.toFixed(1); // Mostrar un decimal en los valores del eje Y
              },
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
        lineChart.destroy();
      }
      lineChart = new Chart(lineChartRef.current, lineChartConfig);
    }


    return () => {
      if (lineChart) {
        lineChart.destroy();
      }
    };
  }, []);
  
  const generateConnectedAgents = () => {
    return Math.floor(Math.random() * 90) + 11; // Genera un número aleatorio entre 11 y 100
  };
  
  
  const generateRegisteredUsers = () => {
    return Math.floor(Math.random() * 50) + 51; // Genera un número aleatorio entre 51 y 100
  };
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
            <p className="number_grafic1">{generateRegisteredUsers()}</p>
            <div className="line_dash"></div>
          </div>
          <div className="content_1_dash">
            <p className="title_dash">Cantidad de usuarios conectados</p>
            <p className="number_grafic1">{generateConnectedAgents()}</p>
            <div className="line_dash"></div>
          </div>
        </div>

        <div className="grafico_fila_2">
          <div className="content_2_dash">
            <p className="title_dash">Interacción con el ChatBot entre los meses de Junio y Julio</p>
            <div className="graficos_dash">
              <CircularComparacion />
            </div>
            <div className="line_dash"></div>
          </div>
          <div className="content_2_dash">
            <p className="title_dash">Cupones enviados en el mes de octubre</p>
            <div className="graficos_dash">
              <BarraCupones />
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
              <BarrasInteracciones />
            </div>
            <div className="line_dash"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
