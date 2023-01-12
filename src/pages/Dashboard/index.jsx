import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="c-dashboard">
      <h1>Dashboard</h1>
      <div className="c-dashboard__menu">
        <ul>
          <li>
            <Link to="posts">Publicações</Link>
          </li>
          <li>
            <Link to="recent">Recentes</Link>
          </li>
          <li>
            <Link to="favorites">Favoritas</Link>
          </li>
        </ul>
      </div>

      <div className="c-dashboard__detail">
        <Outlet />
      </div>
    </div>
  )
}