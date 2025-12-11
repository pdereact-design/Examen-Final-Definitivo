export const OrdersAvailableHome = ({ total, onViewOrdersAvailable }) => {
  return (
    <section className="card record-home">
      <div className="record-view-orders" onClick={onViewOrdersAvailable}>
        <span><b style={{fontSize:"24px", }}>←</b> Pedidos Diponibles: </span>
        <span>{total}</span>
      </div>
    </section>
  );
};
