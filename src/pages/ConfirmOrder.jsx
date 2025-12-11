import { useState, useEffect } from 'react'
import { HeaderHome } from '../components/home/Header'
import { MapConfirmMonitoring } from '../components/monitoring/MapConfirm'
import '../styles/ConfirmOrder.css'

export const ConfirmOrder = () => {
    const [firstView, setFirstView] = useState(true)
    const [count, setCount] = useState(2)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setOrders(data.data))
    }, [])

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(countInterval);
                    setFirstView(false);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(countInterval);
    }, [])

    const order = orders[0] 
    return (
        <>
            <HeaderHome />
            {
                firstView ? (
                    <div className='card confirm-order'>
                        <img src="./public/icon_check.svg" alt="" />
                        <span>Pedido confirmado...!</span>
                    </div>
                ) : (
                    order && <MapConfirmMonitoring order={order} />
                )
            }
        </>
    )
}
