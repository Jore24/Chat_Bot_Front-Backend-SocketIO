import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Chat</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {messages.map((message, index) => (
          <li key={index} style={{ marginBottom: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', width: '300px' }}>
            <p style={{ margin: 0 }}>ID del Socket: {message.socket_id}</p>
            <p style={{ margin: 0 }}>Mensaje: {message.message}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Enviar</button>
      </form>
    </div>
  );
};

export default App;
