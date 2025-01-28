import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Logo from '/logo.png';
import UserOutlineIcon from '/icons/userOutlineIcon.png';
import UserFilledIcon from '/icons/userFilledIcon.png';
import MenuIcon from '/icons/menuIcon.png';
import CloseIcon from '/icons/closeIcon.png';
import ProfileNavPanel from '../../profileNavPanel/profilePanel';

function Header() {
    const [userIcon, setUserIcon] = useState(UserOutlineIcon);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [profile, setProfile] = useState(false);

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleScroll = () => {
        if (window.scrollY > 5) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const handleMenuClick = () => setIsMenuOpen(true);
    const handleLinkClick = () => setIsMenuOpen(false);
    
    const handleProfileClick = () => {
        if(isAuthenticated){
            setProfile(true);
        } else {
            loginWithRedirect();
        }
    }
    
    const isHome = location.pathname === '/';
    const headerBackground = isHome && !scroll ? 'bg-transparent' : 'bg-white';
    const headerShadow = scroll ? 'shadow-xl' : '';
    
    const handleHomeClick = () => {
        setIsMenuOpen(false);
        const element = document.getElementById("home");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    
    const handleProductClick = () => {
        setIsMenuOpen(false);
        navigate('/');
        const element = document.getElementById("products");
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
        }
    };
    
    const handleAboutClick = () => {
        setIsMenuOpen(false);
        navigate('/');
        const element = document.getElementById("about");
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
        }
    };

    const NavigationPanel = () => {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-6">
                <NavLink to="/" onClick={handleLinkClick} className="text-2xl font-megante text-black" >
                    Home
                </NavLink>

                <NavLink NavLink to="/" onClick={handleProductClick} className="text-2xl font-megante text-black" >
                    Products
                </NavLink>

                <NavLink to="/" onClick={handleAboutClick} className="text-2xl font-megante text-black" >
                    About Us
                </NavLink>

                <NavLink to="/contact" onClick={handleLinkClick} className="text-2xl font-megante text-black" >
                    Contact Us
                </NavLink>
    
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4">
                    <img src={CloseIcon} alt="Close Menu" className="w-[30px] h-[30px]" />
                </button>
            </div>
        );
    };

    return (
        <>
            <div className={`fixed w-full h-[80px] z-10 flex flex-row justify-between items-center py-1 px-5 sm:px-14 transition-all ease-in-out ${headerBackground} ${headerShadow}`}>
                <button className="scale-50 lg:hidden" onClick={handleMenuClick}>
                    <img src={MenuIcon} alt="Navigation Menu Icon" className={`w-[50px] h-[50px] ${scroll || !isHome ? '' : 'invert'}`} />
                </button>

                <section className="w-fit flex flex-row justify-center items-center gap-7">
                    <img src={Logo} alt="SilverLeaf Indus Logo" className="hidden lg:block w-[50px] h-[50px]" />
                    <Link to="/" className="flex flex-col justify-evenly items-start">
                        <h1 className={`font-bugetaDream text-2xl mt-2 ${scroll || !isHome ? 'text-black' : 'text-white'}`}>
                            Silver Leaf <br className="hidden lg:block" /> Indus
                        </h1>
                    </Link>
                </section>

                <section className="hidden lg:flex flex-row justify-center items-center gap-10">
                    <NavLink to="/" onClick={handleHomeClick} className={`font-megante relative group ${scroll || !isHome ? "text-black" : "text-white"}`} >
                        <span>Home</span>
                        <span className={`absolute left-0 bottom-0 w-0 h-[1px] ${scroll ? "bg-black" : "bg-white"} transition-all duration-300 group-hover:w-full`}></span>
                    </NavLink>

                    <NavLink to="/" onClick={handleProductClick} className={`font-megante relative group ${scroll || !isHome ? "text-black" : "text-white"}`} >
                        <span>Products</span>
                        <span className={`absolute left-0 bottom-0 w-0 h-[1px] ${scroll ? "bg-black" : "bg-white"} transition-all duration-300 group-hover:w-full`}></span>
                    </NavLink>

                    <NavLink to="/" onClick={handleAboutClick} className={`font-megante relative group ${scroll || !isHome ? "text-black" : "text-white"}`} >
                        <span>About Us</span>
                        <span className={`absolute left-0 bottom-0 w-0 h-[1px] ${scroll ? "bg-black" : "bg-white"} transition-all duration-300 group-hover:w-full`}></span>
                    </NavLink>

                    <NavLink to="/contact" onClick={handleLinkClick} className={`font-megante relative group ${scroll || !isHome ? "text-black" : "text-white"}`}>
                        <span>Contact Us</span>
                        <span className={`absolute left-0 bottom-0 w-0 h-[1px] ${scroll ? "bg-black" : "bg-white"} transition-all duration-300 group-hover:w-full`}></span>
                    </NavLink>
                </section>

                <section className="w-[50px] lg:w-[196px] flex flex-row justify-center lg:justify-end items-center gap-7">
                    <button onClick={handleProfileClick} className="hover:cursor-pointer" >
                        <img src={userIcon} alt="User Profile Icon" className={`w-[25px] h-[25px] ${scroll || !isHome ? "" : "invert"}`} onMouseEnter={() => setUserIcon(UserFilledIcon)} onMouseLeave={() => setUserIcon(UserOutlineIcon)} />
                    </button>

                    <div className="hidden lg:block">
                        {!isAuthenticated && 
                            <button onClick={() => loginWithRedirect()} className={`font-megante relative group hover:text-yellow-500 transition-all ease-in-out hover:cursor-pointer ${scroll || !isHome ? "text-[#131313]" : "text-white"}`}>
                                Sign In
                                <span className={`absolute left-0 bottom-0 w-0 h-[1px] bg-yellow-500 transition-all duration-600 group-hover:w-full`}></span>
                            </button>
                        }

                        {isAuthenticated && 
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={`font-megante relative group hover:cursor-pointer hover:text-red-400 transition-all ease-in-out ${scroll || !isHome ? "text-rose-400 hover:text-rose-700" : "text-white"}`}>
                                Log Out
                                <span className={`absolute left-0 bottom-0 w-0 h-[1px] ${scroll ? "bg-red-700" : "bg-rose-400"} transition-all duration-600 group-hover:w-full`}></span>
                            </button>
                        }
                    </div>
                </section>
            </div>

            {profile && <ProfileNavPanel profile={profile} setProfile={setProfile} />}

            {isMenuOpen && <NavigationPanel />}
        </>
    );
}

export default Header;
