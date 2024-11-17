"use client"

import { useState, useEffect } from "react"

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.querySelector("nav")?.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
            document.querySelector("nav")?.classList.remove("dark-mode");
        }
    }, [darkMode])

    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        // <div className="toggle-container">
        //     <div className="toggle">
        //         <div className="knob">
        //             <i className="icon fa fa-sun"></i>
        //         </div>
        //     </div>
        // </div>
    )
    

}

export default DarkModeToggle