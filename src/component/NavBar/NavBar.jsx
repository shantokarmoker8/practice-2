import Link from "../Link/Link";

const NavBar = () => {
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/products", name: "Products", id: 3 },
    { path: "/products/:id", name: "ProductDetails", id: 4 },
    { path: "/contact", name: "Contact", id: 5 },
  ];

  return (
    <nav>
      <ul className="md:flex gap-5">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;