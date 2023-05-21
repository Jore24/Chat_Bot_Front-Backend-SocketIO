import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import "../../style/form.css";
import Borrar from '../../assets/IconBorrar.svg';
import Enviar from '../../assets/Enviar.svg';

const socket = io('http://localhost:5000');

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    socket.on('message', handleIncomingMessage);

    return () => {
      socket.off('message', handleIncomingMessage);
    };
  }, []);

  const handleIncomingMessage = (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const userMessage = {
        socket_id: socket.id,
        message: inputValue
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      socket.emit('message', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className='contetChat'>
      <ul className='content_text_main' style={{ listStyle: 'none', padding: 0 }}>
        {messages.map((message, index) => (
          <div>
            <li className='content_text' key={index}>
              {/* <p style={{ margin: 0 }}>ID del Socket: {message.socket_id}</p>
              <p style={{ margin: 0 }}>Mensaje: {message.message}</p> */}
              <p style={{ margin: 0 }}>{message.message}</p>
            </li>
          </div>
        ))}
      </ul>
      <div className='contentInput'>
        <form onSubmit={handleSubmit} className='form'>
          <button className='btnBorrar'><img src={Borrar}></img></button>
          <div className='input_main'>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btnEnviar' type='submit'><img src={Enviar}></img></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
