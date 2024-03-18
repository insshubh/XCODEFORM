import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleBulb = () => {
        setIsOn(!isOn);
    };
    return (
        <div className="navbar">
            <div className="logo">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">XCODEBOX</h2>


            </div>
            <div className="right-section ">
                <button className={isOn ? "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" : "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"} onClick={toggleBulb}>
                    {isOn ? 'Dark' : 'Light'}
                </button>


                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-md border border-white hover:bg-gray-600 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-white dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700">{"Render->"}</button>


            </div>
        </div>
    );
};

export default Navbar;
