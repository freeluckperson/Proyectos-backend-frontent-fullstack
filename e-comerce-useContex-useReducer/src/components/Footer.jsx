import { useFilters } from '../hooks/useFilters'
import './Footer.css'


const Footer = () => {
    const { filters } = useFilters()

    return (
        <footer className='footer'>
            {JSON.stringify(filters, null, 3)}
            {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}

export default Footer 