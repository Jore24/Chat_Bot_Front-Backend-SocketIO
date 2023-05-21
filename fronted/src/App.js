import Form from "./components/form/form";
import { ContextSocketProvider } from "./conntext/contexsocketio";

function App() {
  return (
    <ContextSocketProvider>
      <div>
        <Form />
         
    
      </div>
    </ContextSocketProvider>
  );
}

export default App;
