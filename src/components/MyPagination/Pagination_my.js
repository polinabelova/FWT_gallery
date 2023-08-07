import React, { useState } from 'react'
import './Pagination.css'
export default function Pagination({ getCurrentPage }) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageAmount = [1, 2, 3, 4]
  // let currentPage = 0

  getCurrentPage(currentPage)

  function incPage() {
    if (currentPage + 1 <= pageAmount.length) {
      setCurrentPage(currentPage + 1)
    }

  };

  function decPage() {
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1)
    }

  };

  function setPage(page) {
    setCurrentPage(page)
  };
  return (
    <div className='pagination-block'>
      <button className='pagBtn' id='start-button' onClick={() => setPage(1)} >{"<<"}</button>
      <button className='pagBtn' onClick={decPage}>{"<"}</button>

      {pageAmount.map((page) =>
        <button className='pagBtn' key={page} onClick={() => setPage(page)}>{page}</button>)}

      <button className='pagBtn' onClick={incPage}>{">"}</button>
      <button className='pagBtn' id='end-button' onClick={() => setPage(pageAmount.length)}>{">>"}</button>

    </div>
  )
}

