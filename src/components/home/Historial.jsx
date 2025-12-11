import { Order } from "./oders/Order";
import { useEffect, useState } from "react";

export const HistorialHome = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/historial.json");
        if (!response.ok) {
          alert("no se encontr el archivo");
        }
        const { data } = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="card order-home">
      <div className="order-home-title">
        <span>HISTORIAL DE PEDIDOS</span>
      </div>
      {orders.map((order) => (
        <Order
          key={order.id}
          {...order}
        />
      ))}
    </section>
  );
};
