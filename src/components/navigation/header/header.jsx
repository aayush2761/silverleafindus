import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '/logo.png';
import UserOutlineIcon from '/icons/userOutlineIcon.png';
import UserFilledIcon from '/icons/userFilledIcon.png';
import MenuIcon from '/icons/menuIcon.png';

function Header() {
    const [userIcon, setUserIcon] = useState(UserOutlineIcon);

    return (
        <>
            <div className="w-full flex flex-row justify-between items-center py-1 px-5 sm:px-14">
                <button className="scale-50 lg:hidden">
                    <img src={MenuIcon} alt="Navigation Menu Icon" className="w-[50px] h-[50px]"/>
                </button>

                <section className="w-fit flex flex-row justify-center items-center gap-7">
                    <img src={Logo} alt="SilverLeaf Indus Logo" className="hidden lg:block w-[50px] h-[50px]" />
                    <Link to="/" className="flex flex-col justify-evenly items-start">
                        <h1 className="font-bugetaDream text-2xl mt-2"> SilverLeaf <br className="hidden lg:block" /> Indus </h1>
                    </Link>
                </section>

                <section className="hidden  lg:flex flex-row justify-center items-center gap-10">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-megante relative group ${
                                isActive ? "text-black" : "text-gray-400"
                            }`
                        }
                    >
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `font-megante relative group ${
                                isActive ? "text-black" : "text-gray-400"
                            }`
                        }
                    >
                        Products
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-megante relative group ${
                                isActive ? "text-black" : "text-gray-400"
                            }`
                        }
                    >
                        About Us
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `font-megante relative group ${
                                isActive ? "text-black" : "text-gray-400"
                            }`
                        }
                    >
                        Contact Us
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </section>

                <section className="w-[50px] lg:w-[196px] flex flex-row justify-center lg:justify-end items-center">
                    <img 
                        src={userIcon} 
                        alt="User Profile Icon" 
                        className="w-[25px] h-[25px]"
                        onMouseEnter={() => setUserIcon(UserFilledIcon)}
                        onMouseLeave={() => setUserIcon(UserOutlineIcon)}
                    />
                </section>
            </div>
        </>
    );
}

export default Header;