import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="w-full flex flex-row justify-between">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/product">PRODUCTS</NavLink>
                <NavLink to="">ABOUT US</NavLink>
                <NavLink to="">CONTACT US</NavLink>
            </div>
        </>
    )
}

export default Header;