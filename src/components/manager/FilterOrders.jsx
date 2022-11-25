import React from 'react'
import { DivOrdersFilter } from '../style/managementStyle'

const FilterOrders = ({ setFilterOrders }) => {
    return (
        <DivOrdersFilter className='d-flex justify-content-center gap-3 mb-3'>
            <button className='btn btn-secondary btn-sm' onClick={() => setFilterOrders(prev => prev = 'all')}>All</button>
            <button className='btn btn-danger btn-sm' onClick={() => setFilterOrders(prev => prev = 'Pending...')}>Pending...</button>
            <button className='btn btn-warning btn-sm' onClick={() => setFilterOrders(prev => prev = 'Processing...')}>Processing...</button>
            <button className='btn btn-primary btn-sm' onClick={() => setFilterOrders(prev => prev = 'Shipped')}>Shipped</button>
            <button className='btn btn-success btn-sm' onClick={() => setFilterOrders(prev => prev = 'Closed')}>Closed</button>
        </DivOrdersFilter> 
    )
}

export default FilterOrders