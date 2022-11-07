import React, { memo } from 'react'

const SearchBar = () => {
    const style = {
        boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, .4)",
        border: "none",
    }
    const searchIcon = 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>

    return (
        <form className="col-8 d-flex" role="search">
            <input className="form-control me-2" style={style} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-secondary" style={style} type="submit">{searchIcon}</button>
        </form>
    )
}

export default memo(SearchBar)