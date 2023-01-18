import "./style.css"
import { useAuth } from "../../contexts/AuthContext"

export default function Dashboard() {
  const { user } = useAuth()
  return (
    <div className="c-dashboard">
      <h1>Bem vindo {user.name}</h1>
    </div>
  )
}