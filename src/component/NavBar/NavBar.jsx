import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuBurger } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/products", name: "Products", id: 3 },
    { path: "/products/:id", name: "ProductDetails", id: 4 },
    { path: "/contact", name: "Contact", id: 5 },
  ];

  return (
    <nav>
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <CiMenuBurger></CiMenuBurger>
        ) : (
          <FaWindowClose></FaWindowClose>
        )}
      </div>
      <ul className="md:flex gap-5">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
