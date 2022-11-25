import { OlOrders } from '../style/managementStyle'

const Orders = ({ orders, selectOrder, filterOrders }) => {  
    return (
        <OlOrders className='d-flex flex-wrap gap-3'>{
            orders.map(e => {
                const status = e.state === 'Pending...' 
                                ? 'btn btn-outline-danger d-flex flex-column text-black' 
                                : e.state === 'Processing...'
                                ? 'btn btn-outline-warning d-flex flex-column text-black' 
                                : e.state === 'Shipped'
                                ? 'btn btn-outline-primary d-flex flex-column text-black' 
                                : e.state === 'Closed'
                                && 'btn btn-outline-success d-flex flex-column text-black'; 
                if (filterOrders === 'Pending...') {
                    if (e.state === filterOrders) {
                        return (
                            <li key={e.id}>
                                <button className={status} onClick={() => selectOrder(e)} type="button" data-toggle="modal" data-target="#exampleModal">
                                    <span><b>Status:</b> {e.state}</span>
                                    <span><b>ID:</b> {e.id}</span>
                                    <span><b>Date:</b> {e.date}</span>
                                </button>
                            </li>)
                    }
                } else if (filterOrders === 'Processing...'){
                    if (e.state === filterOrders) {
                        return (
                            <li key={e.id}>
                                <button className={status} onClick={() => selectOrder(e)} type="button" data-toggle="modal" data-target="#exampleModal">
                                    <span><b>Status:</b> {e.state}</span>
                                    <span><b>ID:</b> {e.id}</span>
                                    <span><b>Date:</b> {e.date}</span>
                                </button>
                            </li>)
                    }
                } else if (filterOrders === 'Shipped'){
                    if (e.state === filterOrders) {
                        return (
                            <li key={e.id}>
                                <button className={status} onClick={() => selectOrder(e)} type="button" data-toggle="modal" data-target="#exampleModal">
                                    <span><b>Status:</b> {e.state}</span>
                                    <span><b>ID:</b> {e.id}</span>
                                    <span><b>Date:</b> {e.date}</span>
                                </button>
                            </li>)
                    }
                } else if (filterOrders === 'Closed'){
                    if (e.state === filterOrders) {
                        return (
                            <li key={e.id}>
                                <button className={status} onClick={() => selectOrder(e)} type="button" data-toggle="modal" data-target="#exampleModal">
                                    <span><b>Status:</b> {e.state}</span>
                                    <span><b>ID:</b> {e.id}</span>
                                    <span><b>Date:</b> {e.date}</span>
                                </button>
                            </li>)
                    }
                } else {
                    return (
                        <li key={e.id}>
                            <button className={status} onClick={() => selectOrder(e)} type="button" data-toggle="modal" data-target="#exampleModal">
                                <span><b>Status:</b> {e.state}</span>
                                <span><b>ID:</b> {e.id}</span>
                                <span><b>Date:</b> {e.date}</span>
                            </button>
                        </li>)
                }
                return null;   
            })
        }
        </OlOrders>
    )
}

export default Orders