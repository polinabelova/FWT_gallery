import React, { useState } from 'react'
import './Gallery.css';
import Filters from '../Filters/Filters';
import ImageCard from '../ImageCard/ImageCard';
import PaginationComp from '../Pagination/Pagination';


export default function Gallery({ theme }) {

    // const { list } = usePaintings(1, 12)
    const [availableItems, filterItems] = useState(Array)
    const [currentPage, setCurrentPage] = useState(Number)

    return (
        <div className='container'>

            <Filters filter={filterItems} page={currentPage} theme={theme} />
            <p></p>
            <div className="flexbox">
                {
                    availableItems.map(item =>
                        <ImageCard key={item.id} image={item} />
                    )
                }
            </div>
            <PaginationComp getCurrentPage={setCurrentPage} theme={theme} />
        </div>

    )
}








