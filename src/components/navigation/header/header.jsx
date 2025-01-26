import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="w-full flex flex-row justify-between">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/product">PRODUCT</NavLink>
                <NavLink to="/user">USER</NavLink>
            </div>
        </>
    )
}

export default Header;