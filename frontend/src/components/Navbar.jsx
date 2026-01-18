import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex flex-wrap gap-4 items-center">
      <span className="font-bold text-lg mr-4">PrepHub</span>

      <Link className="hover:text-blue-400" to="/">Home</Link>
      <Link className="hover:text-blue-400" to="/roadmaps">Roadmaps</Link>
      <Link className="hover:text-blue-400" to="/aptitude">Aptitude</Link>
      <Link className="hover:text-blue-400" to="/dsa">DSA</Link>
      <Link className="hover:text-blue-400" to="/mock-test">Mock Test</Link>
      <Link className="hover:text-blue-400" to="/companies">Companies</Link>
      <Link className="hover:text-blue-400" to="/interview-experiences">Experiences</Link>
      <Link className="hover:text-blue-400" to="/resume">Resume</Link>
      <Link className="hover:text-blue-400" to="/progress">Progress</Link>
      <Link className="hover:text-blue-400" to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
