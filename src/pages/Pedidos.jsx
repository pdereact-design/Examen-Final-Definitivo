import { HeaderHome } from "../components/home/Header";
import { ProfitHome } from "../components/home/Profit";
import { RecordHome } from "../components/home/Record";
import { OdersHome } from "../components/home/Oders";
import { HistorialHome } from "../components/home/Historial";
import { OrdersAvailableHome } from "../components/home/OrdersAvailable";

import "../styles/Pedidos.css";
import { useState, useEffect } from "react";

export const Pedidos = () => {
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalRecordsToday, setTotalRecordsToday] = useState(0);
  const [totalOderAvailable, setTotalOderAvailable] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isVisibleHistorial, setIsVisibleHistorial] = useState(false);

  const handlerViewHistorial = () => {
    setIsVisibleHistorial(true);
  };

  const handlerViewOrdersAvailable = () => {
    setIsVisibleHistorial(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/home.json");
        if (!response.ok) {
          alert("no se encontr el archivo");
        }
        const { record, total, totalHistorial, totalAmount } =
          await response.json();
        setTotalRecords(totalHistorial);
        setTotalRecordsToday(total);
        setTotalOderAvailable(record);
        setTotalAmount(totalAmount);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderHome />
      <ProfitHome totalAmount={totalAmount} />

      {isVisibleHistorial ? (
        <OrdersAvailableHome
          total={totalOderAvailable}
          onViewOrdersAvailable={handlerViewOrdersAvailable}
        />
      ) : (
        <RecordHome
          record={totalRecords}
          total={totalRecordsToday}
          onViewHistorial={handlerViewHistorial}
        />
      )}

      {isVisibleHistorial ? <HistorialHome /> : <OdersHome />}
    </div>
  );
};
