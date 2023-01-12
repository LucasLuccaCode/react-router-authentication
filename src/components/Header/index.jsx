import { NavLink } from "react-router-dom";
import "./styles.css"

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={`/contact`}>Contato</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>Sobre</NavLink>
          </li>
        </ul>
      </nav>
    </header >
  )
}