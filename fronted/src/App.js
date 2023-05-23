import Header from "./components/ui/Header";
import Descuento from "../src/assets/imgDescuento.png";
import "../src/style/App.css"
import { ContextSocketProvider } from "./conntext/contexsocketio";

function App() {
  return (
    <ContextSocketProvider>
      <div>
        <Header />
        <div className="content_title">
          <h2>SI LLEGA A TUS MANOS,</h2>
          <div>
            <h2>ES</h2>
            <h2 className="active"> OLVA</h2>
          </div>
        </div>
        <div className="content_main">
            <img src={Descuento} alt="logo"></img>
        </div>

      </div>
    </ContextSocketProvider>
  );
}

export default App;
