import { memo, useState } from 'react'
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { ButtonSearch, InputSearch } from '../style/headerStyle';
const SearchBar = () => {
    const [search, setSearch] = useState("");
    const searchOk = search ?? "";

    return (
        <form className="col-5 d-flex" role="search">
            <InputSearch className="form-control me-2" value={searchOk} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search in web..." aria-label="Search" />
            <Link to="search" 
                state = {{
                    search
                }}  
            >
                <ButtonSearch className="btn btn-secondary" type="submit"><Search /></ButtonSearch>
            </Link>
        </form>
    )
}

export default memo(SearchBar)