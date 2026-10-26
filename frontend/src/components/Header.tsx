import { NavLink, type NavLinkProps } from "react-router";

export default function Header() {
  const navLinkClasses: NavLinkProps["className"] = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm transition-colors 
    ${isActive
      ? "bg-blue-50 hover:bg-blue-100 font-semibold text-blue-600 hover:text-blue-700"
      : "hover:bg-gray-100 font-medium text-gray-600 hover:text-gray-900"
    }`;

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <nav className="flex items-center justify-between mx-auto py-4 w-11/12">
        <h1 className="text-xl font-semibold text-gray-800">
          Django learning project store
        </h1>

        <ul className="flex items-center gap-4">
          <li>
            <NavLink to="/products" className={navLinkClasses}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClasses}>
              About (to be implemented)
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}