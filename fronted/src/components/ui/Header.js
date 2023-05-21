import "../../style/header.css";
import io from 'socket.io-client';
import fondo  from "../../assets/HeadOlva.png";

const socket = io('http://localhost:5000');

const App = () => {
  return (
    <div className="bodyHeader_main">
        <div className="bodyHeader1"></div>

        <div className="content_2">
            <div className="bodyHeader2"></div>
            <ul className="contain_Opciones">
                <button className="btn_opcion">CLIENTES</button>
                <p>/</p>
                <button className="btn_opcion">UBICANOS</button>
                <p>/</p>
                <button className="btn_opcion">NOTICIAS</button>
                <p>/</p>
                <button className="btn_opcion">CONTÁCTANOS</button>
                <p>/</p>
                <button className="btn_opcion activate">CHATBOT</button>
            </ul>
        </div>
    </div>
  );
};

export default App;