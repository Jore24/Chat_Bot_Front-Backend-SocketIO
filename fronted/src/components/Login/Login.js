import React from "react";
import "../../style/Login.css";
import Flecha from '../../assets/icon-next 1.png'; 

function Login() {
  return (
    <div className="divmain">
      <div className="mancha1">
        <div className="logo">

        </div>
        <div className="mancha_bajito"> 
        <img classname='flecha'src={Flecha}></img>
        <button className="back">Ir a Olva</button>
        </div>
      </div>
      <div className="content_cover">
        <p className="title_main">ZONA DE CLIENTES</p>

        <div className="cover">
          <div className="line"></div>
          <div className="content_title">
            <p className="title">Bienvenido a Olva </p>
            <p className="description">
              Inicia sesión para entrar a nuestra web
            </p>
          </div>
          <input type="text" placeholder="Usuario"></input>
          <input type="password" placeholder="Contraseña"></input>

          <div className="login-btn">Entrar</div>

          <div className="content_foot">
            <p> ¿No tienes cuenta?</p>
            <button src="#" className="text">Registrate aquí </button>
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

export default Login;
