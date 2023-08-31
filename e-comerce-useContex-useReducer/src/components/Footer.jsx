import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'


const Footer = () => {
    const { filters } = useFilters()
    const { cart } = useCart()


    return (
        <footer className='footer'>
            {/* {JSON.stringify(cart, null, 3)} */}
            {/* {JSON.stringify(filters, null, 3)} */}
            {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4> */}
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}

export default Footer 