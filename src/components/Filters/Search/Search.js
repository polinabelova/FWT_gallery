import React, { useState } from 'react'
import './Search.css'

export default function Search({ searchValue, theme }) {
    const [enteredSearchValue, setEnteredSearchValue] = useState(String);
    searchValue(enteredSearchValue)
    return (
        <div id={theme}>
            <input
            className='search'
            type="search"
            value={enteredSearchValue}
            onChange={(e) => setEnteredSearchValue(e.target.value)}
            placeholder="Name"
        /></div>
    )
}
