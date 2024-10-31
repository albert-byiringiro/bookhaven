
export default function Navigation() {
  return (
    <nav className="flex justify-between my-4">
        <div className="">
            <ul className="flex gap-6 text-gray-900 font-semibold">
                    <li className="">Neth BookPoint</li>
                    <li className="">Home</li>
                    <li className="">Shop</li>
                    <li className="">About Us</li>
                    <li className="">Contact Us Team</li>
            </ul>
        </div>
        <div className="">
        <ul className="flex gap-6 text-gray-900 font-semibold">
                <li className="">Like</li>
                <li className="">Cart</li>
                <li className="">Get In Touch</li>
            </ul>
        </div>
    </nav>
  )
}
