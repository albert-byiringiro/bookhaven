import { NavLink } from "react-router-dom";
import CartIcon from "../assets/CartIcon";
import ProfileIcon from "../assets/ProfileIcon";

export default function Navigation() {
  return (
    <nav className="flex justify-between my-8">
      <div className="">
        <NavLink to="/" className="font-bold text-2xl">BookHaven</NavLink>
      </div>
        <div className="">
            <ul className="flex gap-10 text-gray-900 font-semibold justify-center content-center">
                    <NavLink to="/" className="">Home</NavLink>
                    <NavLink to="/shop" className="">Shop</NavLink>
                    <NavLink to="/about" className="">About Us</NavLink>
                    <NavLink to="/contact" className="">Contact Us</NavLink>
            </ul>
        </div>
        <div className="">
        <ul className="flex gap-12 text-gray-900 font-semibold justify-center content-center">
                <NavLink to="/cart" className=""><CartIcon/></NavLink>
                <NavLink to="/profile" className=""><ProfileIcon/></NavLink>
            </ul>
        </div>
    </nav>
  )
}
