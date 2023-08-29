import Filters from './Filters.jsx'

const Header = ({ setFilters }) => {
    return (
        <header>
            <h1>React shop </h1>
            <Filters setFilters={setFilters} />
        </header>
    );
}

export default Header;