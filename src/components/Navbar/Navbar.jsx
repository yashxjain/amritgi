import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/AmGLogo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const location = useLocation(); // Get the current route

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') { // Only apply sticky if on home page
                setSticky(window.scrollY > 50);
            } else {
                setSticky(false); // Remove sticky if not on home page
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    // Determine if `dark-nav` should be applied
    const isHomePage = location.pathname === '/';

    return (
        <nav className={`container ${isHomePage ? (sticky ? 'dark-nav' : '') : 'sticky'}`}>
            <Link to="/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                <img src={logo} alt="" className='logo' />
                <div>
                    <h4>Amrit Group of Institutions</h4>
                    <h5>Village & Post Office: Dhanauri, Roorkee, Haridwar (U.K)</h5>
                </div>
            </Link>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='/about'>About us</Link></li>
                <li>
                    <Link to='/courses'>Courses</Link>
                    <ul className='dropdown'>
                        <li><Link to='/courses'>Amrit Law College</Link></li>
                        <li><Link to='/courses'>Roorkee Degree College</Link></li>
                        <li><Link to='/courses'>Amrit College of Education</Link></li>
                    </ul>
                </li>
                <li><Link to='/gallery'>Campus</Link></li>
                <li><Link to='/departments'>Departments</Link>
                 <ul className='dropdown'>
                        <li><Link to='/education-department'>Department of Education</Link></li>

                        <li><Link to='/law-department'>Department of Law</Link></li>

                        <li><Link to='/ayurveda-department'>Department of Ayurveda</Link></li>

                        <li><Link to='/agriculture-department'>Department of Agriculture</Link></li>

                        <li><Link to='/yoga-department'>Department of Yoga</Link></li>

                        <li><Link to='/computer-science-department'>Department of Computer Science</Link></li>

                        <li><Link to='/library-department'>Department of Library</Link></li>

                        <li><Link to='/home-science-department'>Department of Home science</Link></li>

                    </ul></li>

                <li><Link to='/testimonials'>Student's Corner</Link>
                <ul className='dropdown'>
                        <li><Link to='/syllabus'>Syllabus</Link></li>
                        <li><Link to='/result'>Result</Link></li>
                        <li><Link to='/resources'>Central Library</Link></li>
                    </ul></li>
                <li><Link to='/contact' className='btn'>Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
