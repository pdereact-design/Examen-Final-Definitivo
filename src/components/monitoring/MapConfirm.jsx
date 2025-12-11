import { Order } from "../home/oders/Order";
import { Map } from "../shared/Map";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MapConfirmMonitoring = ({ order }) => {
    const navigate = useNavigate();
    const [showDeliveredMessage, setShowDeliveredMessage] = useState(false);

    const handleOrderDelivered = () => {
        setShowDeliveredMessage(true);
        const historial = JSON.parse(localStorage.getItem("historial")) || [];
        historial.push(order);
        localStorage.setItem("historial", JSON.stringify(historial));
        const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
        const nuevosPedidos = pedidos.filter((p) => p.id !== order.id);
        localStorage.setItem("pedidos", JSON.stringify(nuevosPedidos));
        setTimeout(() => {
            navigate("/Pedidos");
        }, 2000);
    };

    if (!order) return null;

    return (
        <section className="card monitoring">
            {showDeliveredMessage ? (
                <div className="confirm-order">
                    <img src="./public/icon_check.svg" alt="" />
                    <span>Pedido entregado...!</span>
                </div>
            ) : (
                <>
                    <div className="btns-map-confirm">
                        <button
                            className="btn-accept"
                            style={{ minWidth: "250px" }}
                            onClick={handleOrderDelivered}
                        >
                            Pedido entregado
                        </button>

                        <img src="./public/call.svg" alt="llamar" />
                    </div>

                    <Order
                        id={order.id}
                        client={order.client}
                        amount={order.amount}
                        address={order.address}
                        km={order.km}
                    />

                    <div className="map">
                        <Map
                            mOrigin={order.origin}
                            mDestination={order.destination}
                        />
                    </div>
                </>
            )}
        </section>
    );
};
