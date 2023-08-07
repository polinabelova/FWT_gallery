import { useState, useEffect } from 'react';

import { Pagination } from 'fwt-internship-uikit';
import './Pagination.css'

export default function PaginationComp({getCurrentPage, theme}) {
    const [currentPage, setCurrentPage] = useState(1);

    const onChange = (inputValue) => {
        setCurrentPage(inputValue);
      };

    const isDarkTheme = (theme === "light" ? false  : true )

    getCurrentPage(currentPage)
      return(
    <Pagination  currentPage={currentPage} pagesAmount={4} onChange={onChange}  isDarkTheme={isDarkTheme}/>)
    
}