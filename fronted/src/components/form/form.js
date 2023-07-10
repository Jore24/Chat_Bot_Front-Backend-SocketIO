import React, { useEffect, useState, useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

//import { UserContext } from '../..//conntext/contexsocketio';

import io from 'socket.io-client';
import "../../style/form.css";
import Borrar from '../../assets/IconBorrar.svg';
import Enviar from '../../assets/Enviar.svg';


const socket = io('https://backend-chatbot-4qg6.onrender.com');

const App = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messageListRef = useRef(null);
  //const { User } = useContext(UserContext);

  const usernameFromLocalStorage = localStorage.getItem('username');
  const [User, setUser1] = useState(usernameFromLocalStorage || '');
  console.log(User,"a")


  useEffect(() => {
    const socket = io('https://backend-chatbot-4qg6.onrender.com');
  
    socket.on('connect', () => {
      const initialMessage = '¡Hola! '+User+ '. Soy un asistente virtual. ¿En qué puedo ayudarte hoy?';
      const options = ['Soporte', 'Sucursales y servicios', 'Reclamos', 'Envíos', 'Cupones y descuentos', 'Agente en línea']
      
      const initialBotMessage = {
        message: initialMessage,
        options: options,
        socket_id: 'bot',
      };
  
      handleIncomingMessage(initialBotMessage);
    });
    
  
    socket.on('message', handleIncomingMessage);
  
    return () => {
      socket.off('message', handleIncomingMessage);
    };
  }, []);
  
  

  const handleIncomingMessage = (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
    scrollToBottom();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = inputValue.trim() !== '' ? inputValue : null;
    handleSubmitMessage(message);
  };

  const handleOptionClick = (option) => {
    handleSubmitMessage(option);
  };

  const handleSubmitMessage = (message) => {
    if (message !== null) {
      const userMessage = {
        socket_id: 'socket.id',
        message: message,
        user: User,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      socket.emit('message', userMessage);
      setInputValue('');
      scrollToBottom();
      localStorage.setItem('username', User);

    }
  };

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };
  const handleLogout = () => {
    // Eliminar datos del localStorage
    localStorage.removeItem('username');

    // Actualizar el estado del usuario en el contexto
    setUser1(null);
    navigate("/auth/login");
    
    console.log('usuario removido')
  };

  const btnBorrar = () => {
    socket.emit('borrarMensaje', { message: 'borrar', user: 'username' });

  };
  
  return (
    <div className='contetChat'>
      <ul className='content_text_main' ref={messageListRef}>
      <div className="contenedor-botones">
      <button className="btn-cerrar-sesion" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.socket_id === 'bot' ? (
              <div className='content_bot'>
                <li className='content_text bot'>
                  <p>{message.message}</p>
                  {message.options && message.options.length > 0 ? (
                  <div className='options'>
                    <div>
                    </div>
                    {message.options.map((option, index) => (
                      <button key={index} onClick={() => handleOptionClick(option)}>
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
                </li>
              </div>
            ) : null}
            {message.socket_id !== 'bot' ? (
              <div className='content_user'>
                <li className='content_text user'>
                  <p>{message.message}</p>
                </li>
              </div>
            ) : null}
          </div>
        ))}
      </ul>
      <div className='contentInput'>
        <form onSubmit={handleSubmit} className='form'>
          <button className='btnBorrar'  onClick={btnBorrar} ><img src={Borrar} alt="Borrar"/></button>
          <div className='input_main'>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btnEnviar' type='submit'><img src={Enviar} alt="Enviar" /></button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default App;