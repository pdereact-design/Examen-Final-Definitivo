import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Order } from "../home/oders/Order";
import { Map } from "../shared/Map";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;


export const MapMonitoring = ({ id }) => {
  const [isLoagin, setIsLoagin] = useState(false);
  const [count, setCount] = useState(5);

  const [order, setOrder] = useState({
    id: 0,
    client: "",
    amount: "",
    address: {
      origin: "",
      destination: "",
    },
    origin: [-77.029842, -12.04574],
    destination: [-77.029842, -12.04574],
    km: "",
  });

  useEffect(() => {
    const fetchHistorial = async () => {
      try {
        const response = await fetch("/historial.json");
        if (!response.ok) {
          alert("no se encontr el archivo");
        }
        const { data } = await response.json();
        const findOrder = data.find((e) => e.id == id);
        setOrder(findOrder);
      } catch (error) {
        console.error(error);
      }
    }
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          alert("no se encontr el archivo");
        }
        const { data } = await response.json();
        const findOrder = data.find((e) => e.id == id);
        if (!findOrder) {
          fetchHistorial();
          return
        }
        setOrder(findOrder);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, {});

  const navigate = useNavigate();

  const handlerCancel = () => {
    navigate("/Pedidos");
  };

  const handlerAccept = () => {
    setIsLoagin(true);
    setCount(5);
    const countInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(countInterval);
          setIsLoagin(false);
          navigate("/confirm-order");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      setCount(5);
      setIsLoagin(false);
      clearInterval(countInterval);
    };
  };
  return (
    <section className="card monitoring">
      <Order
        id={order.id}
        address={order.address}
        amount={order.amount}
        client={order.client}
        km={order.km}
      />

      <div
        className="loagin-accept"
        style={{ display: isLoagin ? "flex" : "none" }}
      >
        <img src="/cargando.svg" alt="" />
        <span>Aceptando carrera...!</span>
        <span>{count}s</span>
      </div>

      {order.id ? (
        <div className="map" style={{ display: isLoagin ? "none" : "block" }}>
          <Map mOrigin={order.origin} mDestination={order.destination} />
        </div>
      ) : (
        <div></div>
      )}

      <div className="btns-monitoring">
        <button
          className="btn-cancel"
          style={isLoagin ? { width: "100%" } : {}}
          onClick={handlerCancel}
        >
          Cancelar
        </button>
        <button
          className="btn-accept"
          style={isLoagin ? { display: "none" } : {}}
          onClick={handlerAccept}
        >
          Aceptar
        </button>
      </div>
    </section>
  );
};
