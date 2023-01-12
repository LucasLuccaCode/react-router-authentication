import { NavLink, Outlet } from "react-router-dom";
import "./style.css"

export default function Dashboard() {
  return (
    <div className="c-dashboard">
      <h1>Dashboard</h1>
      <div className="c-dashboard__menu">
        <ul className="menu">
          <li>
            <NavLink to="posts">Publicações</NavLink>
          </li>
          <li>
            <NavLink to="recent">Recentes</NavLink>
          </li>
          <li>
            <NavLink to="favorites">Favoritas</NavLink>
          </li>
        </ul>
      </div>

      <div className="c-dashboard__detail">
        <Outlet />
      </div>
    </div>
  )
}