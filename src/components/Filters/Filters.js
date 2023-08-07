import React, { useState } from 'react'
import Select from './Select';
import Range from './Range/Range';
import Search from './Search/Search';
import './Filters.css'
import { useAllFilters } from '../../hooks/allFilters';

import { useAuthorsLocations } from '../../hooks/getAuthorsLocations';



export default function Filters({ filter, page, theme }) {

    const { list: authors } = useAuthorsLocations("authors")
    const { list: locations } = useAuthorsLocations("locations")
    const [enteredSearchValue, setEnteredSearchValue] = useState(String);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [createdFrom, setCreatedFrom] = useState(String);
    const [createdBefore, setCreatedBefore] = useState(String);
    const { fullFiltred } = useAllFilters({
        name: enteredSearchValue, author: selectedAuthor,
        location: selectedLocation, from: createdFrom, before: createdBefore, page: page
    });
    filter(fullFiltred)

    
    return (
        <div>
            <div className='filter-container'>
                <div className="filter-flexbox">
                    <Search searchValue={setEnteredSearchValue} theme={theme}/>
                </div>
                <div className="filter-flexbox">
                    <Select
                        options={authors}
                        defaultValue={selectedAuthor}
                        onChange={setSelectedAuthor}
                        placeholder={"Author"}
                        theme={theme} />
                </div>
                <div className="filter-flexbox">
                    <Select
                        options={locations}
                        defaultValue={selectedLocation}
                        onChange={setSelectedLocation}
                        placeholder={"Location"}
                        theme={theme} />
                </div>
                <div className="filter-flexbox">
                    <Range from={setCreatedFrom} before={setCreatedBefore} theme={theme}/>
                </div>
            </div>
        </div>
    )
}
