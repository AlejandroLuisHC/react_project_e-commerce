import { useQueryClient } from '@tanstack/react-query';
import accounting from 'accounting';
import React from 'react'
import fetchCLOSE_ORDER from '../../api/orders/fetchCloseOrder';
import fetchPendingOrder from '../../api/orders/fetchPendingOrder';
import fetchPROCESS_ORDER from '../../api/orders/fetchProcessOrder';
import fetchSHIP_ORDER from '../../api/orders/fetchShipOrder';
import { H2 } from '../style/H2';
import { DivBtnState, DivTitleOrder, SectionOrderInfo } from '../style/managementStyle';

const OrderInfo = ({ selectedOrder }) => {
    const queryClient = useQueryClient();

    return (
        <SectionOrderInfo>
            <DivTitleOrder>
                <H2>{selectedOrder.id}</H2>
                <hr />
            </DivTitleOrder>
            <div className='d-flex flex-column'>
                <h3>Order info:</h3>
                {selectedOrder.products?.map(e => <span>{e.quantity} x {e.name} - {e.price} €/ud</span>)}
                {selectedOrder.total && 
                    <h5 className='mt-3'>Total: {selectedOrder.total && accounting.formatMoney(selectedOrder.total, {symbol:"€", format:"%v %s"})}</h5>
                }
            </div>
            <div>
                <h3>Shipping info:</h3>
                <div className='d-flex flex-column'>
                    <h5>{selectedOrder.shippingMethod}</h5>
                    <span>{selectedOrder.fullName}</span>
                    <span>{selectedOrder.address}</span>
                    <span>{selectedOrder.postalCode}</span>
                    <span>{selectedOrder.country}</span>
                    <span>{selectedOrder.phone}</span>
                    <span>{selectedOrder.email}</span>
                </div>
            </div>
        
            <DivBtnState>
                <button className='btn btn-danger btn-lg' onClick={async () => {await fetchPendingOrder(selectedOrder, selectedOrder.id); queryClient.invalidateQueries({ queryKey: ["orders"] });}}>Pending...</button>
                <button className='btn btn-warning btn-lg' onClick={async () => {await fetchPROCESS_ORDER(selectedOrder, selectedOrder.id); queryClient.invalidateQueries({ queryKey: ["orders"] })}}>Processing...</button>
                <button className='btn btn-primary btn-lg' onClick={async () => {await fetchSHIP_ORDER(selectedOrder, selectedOrder.id); queryClient.invalidateQueries({ queryKey: ["orders"] })}}>Shipped</button>
                <button className='btn btn-success btn-lg' onClick={async () => {await fetchCLOSE_ORDER(selectedOrder, selectedOrder.id); queryClient.invalidateQueries({ queryKey: ["orders"] })}}>Closed</button>
            </DivBtnState>

        </SectionOrderInfo>
    )
}

export default OrderInfo