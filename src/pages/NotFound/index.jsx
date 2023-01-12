import { Link, useNavigate, useRouteError } from "react-router-dom"

export default function Root() {
  const error = useRouteError()
  const navigate = useNavigate()

  const handleButton = () => navigate(-1)

  return (
    <div className="c-not_found">
      <h1>{error.status}</h1>
      <h2>{error.statusText}</h2>
      <button className="btn" onClick={handleButton}>Voltar</button>
    </div>
  )
}