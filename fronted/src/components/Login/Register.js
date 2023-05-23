import React from "react";
import "../../style/Login.css";
import Flecha from '../../assets/icon-next 1.png'; 

function Register() {
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
                Registrate para entrar a nuestra web
            </p>
          </div>
          <input type="text" placeholder="Usuario"></input>
          <input type="number" placeholder="Dni"></input>
          <input type="text" placeholder="Dirección"></input>
          <input type="email" placeholder="Correo electronico"></input>
          <input type="password" placeholder="Contraseña"></input>

          <div className="login-btn">Continuar</div>

          <div className="content_foot">
            <p> ¿Ya tienes cuenta?</p>
            <button src="#" className="text">Inicia Sesión aquí </button>
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
