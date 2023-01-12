import UserForm from "../../components/UserForm"
import { useAuth } from "../../contexts/AuthContext"

export default function Login() {
  const { user } = useAuth()

  console.log(user)

  const handleSigInForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <div className="c-login">
      <h1>Página de login</h1>

      <UserForm action="login" btnText="Entrar" handleForm={handleSigInForm} />
    </div>
  )
}