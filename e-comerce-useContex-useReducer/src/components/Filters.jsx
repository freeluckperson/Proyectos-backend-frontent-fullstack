import { useState, useId } from 'react';
import './Filters.css'

const Filters = ({ setFilters }) => {
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const HandleChangeMinPrice = e => {
        setMinPrice(e.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }




    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input type="range" onChange={HandleChangeMinPrice} id={minPriceFilterId} min='0' max='1000' />
                <span>{minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categorias</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">todos</option>
                    <option value="mens-shirts">Franelas</option>
                    <option value="mens-watches">Relojes</option>
                    <option value="laptops">Pc portatil</option>
                </select>
            </div>
        </section>
    );
}

export default Filters;