import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between my-4">
        <div className="">
            <ul className="flex gap-6 text-gray-900 font-semibold">
                    <NavLink to="/" className="">Neth BookPoint</NavLink>
                    <NavLink to="/" className="">Home</NavLink>
                    <NavLink to="/shop" className="">Shop</NavLink>
                    <NavLink to="/about" className="">About Us</NavLink>
                    <NavLink to="/contact" className="">Contact Us Team</NavLink>
            </ul>
        </div>
        <div className="">
        <ul className="flex gap-6 text-gray-900 font-semibold">
                <NavLink to="/like" className="">Like</NavLink>
                <NavLink to="/cart" className="">Cart</NavLink>
                <NavLink to="/intouch" className="">Get In Touch</NavLink>
            </ul>
        </div>
    </nav>
  )
}
