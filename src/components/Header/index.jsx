import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import "./styles.css"

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <header>
      <nav>
        <ul className="menu">
          {
            user ? (
              <>
                <li>
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/dashboard`}>Dashboard</NavLink>
                </li>
                <li title="Sair">
                  <button onClick={handleLogout}>{user?.name}</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={`/login`}>Login</NavLink>
                </li>
              </>
            )
          }
        </ul>
      </nav>
    </header >
  )
}