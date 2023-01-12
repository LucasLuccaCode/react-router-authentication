import { Link } from "react-router-dom";
import "./styles.css"

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/dashboard`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contato</Link>
          </li>
          <li>
            <Link to={`/about`}>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header >
  )
}