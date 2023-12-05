/**
 * navbar adapted from https://github.com/fireclint/portfolio-app-react/blob/main
 * https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar2
 */
import React, { useState } from 'react';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="navbar-background">

            {/* menu */}
            <ul className='ulnav'>
                <li className='li-nav'>
                    <a href='/'>Home</a>
                </li>
                <li className='li-nav'>
                    <a className='navbar-font' href='/basicsCourse'>Basics Course</a>
                </li>
                <li className='li-nav'>
                    <a className='navbar-font' href='/mealPlanner'>Meal Planner Tool</a>
                </li>

                <li className='dropdown'>
                    <a className="dropbtn">Recipes</a>
                    <ul className="dropdown-content">
                        <a className='dropdown-item' href='/recipe/breaded_chicken'>Breaded Chicken</a>
                        <a className='dropdown-item' href='/recipe/grilled_cheese'>Grilled Cheese</a>
                        <a className='dropdown-item' href='/recipe/hamburger'>Hamburger</a>
                    </ul>
                </li>

            </ul>
        </div>
    );
};

export default Navbar;