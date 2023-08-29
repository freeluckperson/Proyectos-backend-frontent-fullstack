import { useState, useId } from 'react';
import './Filters.css'
import { useFilters } from '../hooks/useFilters';


const Filters = () => {
    const { filters: { minPrice, sortOder }, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const priceSort = useId()

    const HandleChangeMinPrice = e => {
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

    const handleChangeSort = (e) => {
        setFilters(prevState => ({
            ...prevState,
            sortOrder: e.target.value
        }))
    }






    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input value={minPrice} type="range" onChange={HandleChangeMinPrice} id={minPriceFilterId} min='0' max='1000' />
                <span>{minPrice}</span>
            </div>

            <div>
                <label htmlFor={priceSort}>Precio</label>
                <select id={priceSort} onChange={handleChangeSort}  >
                    <option value="asc">Menor</option>
                    <option value="desc">Mayor</option>
                </select>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categorias</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}  >
                    <option value="all">Todos</option>
                    <option value="mens-shirts">Franelas</option>
                    <option value="mens-watches">Relojes</option>
                    <option value="laptops">Pc portatil</option>
                    <option value="smartphones">Celulares</option>
                    <option value="fragrances">Perfumes</option>
                    <option value="skincare">Crema</option>
                    <option value="home-decoration">Decoracion</option>
                    <option value="furniture">Mobiliario</option>
                    <option value="tops">tops</option>
                </select>
            </div>

        </section>
    );
}

export default Filters;