import { RiMenu2Line, } from "react-icons/ri";
import Link from "../link/Link";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/login", name: "Login" }
    ];

    return (
        <nav className="bg-red-950 text-white">
            <div className="text-xl md:hidden"
                onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <MdClose></MdClose>
                        : <RiMenu2Line />
                }
            </div>
            <ul className={`md:flex ml-2 duration-1000 absolute md:static
                ${open ? "top-6" : "-top-60"} p-2`}>
                {
                    routes.map(route => <Link key={route.id}
                        route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;