import React, { createContext } from "react";
import { useState, } from "react";
import { useEffect } from "react";
import client from "socket.io-client";



export const Context = createContext({});

export const ContextSocketProvider = ({children}) => {
  const [Socket, setSocket] = useState(null);
  useEffect(() => {
    const SOCKET_URI = "ws://localhost:5000";
    const socket = client(SOCKET_URI);
    setSocket(socket);

    return () => {
     
    }
  }, [])

    return <Context.Provider
     value={{Socket}}>
      {children}
      </Context.Provider>
}
export default Context;


