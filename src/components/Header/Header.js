import React, { useState } from 'react'
import './Header.css';
export default function Header({ theme }) {

    const [currTheme, setCurrTheme] = useState("light")
    const toggleTheme = () => {
        setCurrTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
    };

    theme(currTheme);
    return (
        <header id={currTheme}>
            <div>
                <img className='header-logo'
                    src='FWT_logo.svg' 
                /></div>
            <div>
                <button className='btn-change-theme' onClick={toggleTheme}><img className='header-change-theme'
                    src='sun.svg' alt=''
                /></button>
            </div>
        </header>

    )
}
