import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/aptitude", label: "Aptitude" },
  { to: "/dsa", label: "DSA" },
  { to: "/mock-test", label: "Mock" },
  { to: "/companies", label: "Companies" },
  { to: "/resume", label: "Resume" },
  { to: "/progress", label: "Progress" },
  { to: "/profile", label: "Profile" }
];

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-2">
        <span className="font-bold text-lg text-blue-400 mr-4">
          PrepHub
        </span>

        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md text-sm transition
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
