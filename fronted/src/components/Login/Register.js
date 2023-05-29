import React from "react";
import "../../style/Login.css";
import Flecha from '../../assets/icon-next 1.png';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="divmain">
      <div className="mancha1">
        <div className="logo">

        </div>
        <div className="mancha_bajito">
          <Link to="/App">
            <img classname='flecha' src={Flecha} alt=""></img>
            <button className="back">Ir a Olva</button>
          </Link>
        </div>
      </div>
      <div className="content_cover">
        <p className="title_main">ZONA DE CLIENTES</p>

        <div className="cover">
          <div className="line"></div>
          <div className="content_title_login">
            <p className="title">Bienvenido a Olva </p>
            <p className="description">
              Registrate para entrar a nuestra web
            </p>
          </div>
          <input type="text" placeholder="Usuario"></input>
          <input type="number" placeholder="Dni"></input>
          <input type="text" placeholder="Dirección"></input>
          <input type="email" placeholder="Correo electronico"></input>
          <input type="password" placeholder="Contraseña"></input>

          <Link to="/auth/login" className="login-btn">
            <div className="">Continuar</div>
          </Link>

          <div className="content_foot">
            <p> ¿Ya tienes cuenta?</p>

            <Link to="/auth/login">
              <button src="#" className="text">Inicia Sesión aquí </button>
            </Link>
          </div>

        </div>
      </div>
      <div className="mancha2">
        <div>

        </div>
      </div>
    </div>
  );
}

export default Register;
