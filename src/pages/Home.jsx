import { HeaderHome } from "../components/home/Header";
import zapatillaIcon from "../assets/icons/zapatilla.png";
import entregaIcon from "../assets/icons/entrega.png";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="home1-container">
      <HeaderHome />
      
      <div className='card'>
        <h3>Metros Recorridos</h3>
        <div className='card_logo'>
          <img src={zapatillaIcon} className="icon" />

          <div className='card-text'>
            <span className='number'>72/2000km</span>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "40%" }}></div>
            </div>

            <small>recorridos</small>
          </div>
        </div>
      </div>

      <div className='card'>
        <h3>Cantidad de Pedidos Realizados</h3>
        <div className='card_row'>
          <img src={entregaIcon} className="icon2" />
          <span className='big_numer'>2</span>
        </div>
      </div>
    </div>
  );
};
