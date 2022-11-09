import { memo, useState } from 'react'
import { Search } from 'react-bootstrap-icons';
const SearchBar = () => {
    const style = {
        boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, .4)",
        border: "none",
    }

    const [search, setSearch] = useState("");

    return (
        <form className="col-8 d-flex" role="search">
            <input className="form-control me-2" style={style} value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-secondary" style={style} type="submit"><Search /></button>
        </form>
    )
}

export default memo(SearchBar)