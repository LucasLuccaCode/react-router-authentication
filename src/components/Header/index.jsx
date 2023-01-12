import { NavLink } from "react-router-dom";
import "./styles.css"

export default function Header() {
  const handleLogout = () => {
    console.log("Sair")
  }
  return (
    <header>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={`/login`}>Login</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Sair</button>
          </li>
        </ul>
      </nav>
    </header >
  )
}