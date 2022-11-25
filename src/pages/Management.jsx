import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useState } from 'react'
import { DivManagerWindow, MainManagement } from '../components/style/managementStyle'
import fetchOrders from '../api/orders/fetchOrders'
import { H2 } from '../components/style/H2'
import Spinner from '../components/spinner/Spinner'
import OrderInfo from '../components/manager/OrderInfo'
import Orders from '../components/manager/Orders'
import FilterOrders from '../components/manager/FilterOrders'
const Management = () => {
    const [filterOrders, setFilterOrders] = useState('all')
    const [selectedOrder, setSelectedOrder] = useState({
        id: 'Select an order to display its info below'
    })
    const selectOrder = order => {
        setSelectedOrder(prev => prev = order)
    }
    const [window, setWindow] = useState({
        orders: true,
        restock: false,
        products: false,
    })
    const activeOrders = () => {
        setWindow(prev => prev = {
            orders: true,
            restock: false,
            products: false,
        })
    }
    const activeRestock = () => {
        setWindow(prev => prev = {
            orders: false,
            restock: true,
            products: false,
        })
    }
    const activeProducts = () => {
        setWindow(prev => prev = {
            orders: false,
            restock: false,
            products: true,
        })
    }
    const { data : orders, status : ordersStatus } = useQuery({ queryKey: ['orders'], queryFn: fetchOrders });

    return (
        <MainManagement>
            <div className='d-flex flex-column gap-5'>
                <button className='btn btn-secondary btn-lg' onClick={activeOrders}>Orders</button>
                <button className='btn btn-secondary btn-lg' onClick={activeRestock}>Restock</button>
                <button className='btn btn-secondary btn-lg' onClick={activeProducts}>Products List</button>
            </div>
            <DivManagerWindow>
                {window.orders
                    ? ordersStatus === 'loading' 
                        ? <Spinner/>
                        : ordersStatus === 'error'
                        ? <H2>There has been a problem accessing the database. Please, try refreshing the page.</H2>
                        :
                        <>
                            <FilterOrders
                                setFilterOrders = {setFilterOrders}
                            />
                            <Orders 
                                orders       = {orders}
                                selectOrder  = {selectOrder}
                                filterOrders = {filterOrders}
                            />
                            <OrderInfo 
                                selectedOrder = {selectedOrder}
                            />
                        </>
                    : window.restock
                    ? 
                    <p>RESTOCK</p>
                    : window.products && <p>PRODUCTS</p>
                }
                
            </DivManagerWindow>       
        </MainManagement>
    )
}

export default Management