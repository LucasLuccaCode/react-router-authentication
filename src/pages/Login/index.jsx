import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import UserForm from "../../components/UserForm"

export default function Login() {
  const { signIn } = useAuth()
  const { user } = useAuth()

  const handleSigInForm = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData)

    await signIn({ email, password })
  }

  if (user) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className="c-login">
      <h1>Página de login</h1>

      <UserForm
        action="login"
        btnText="Entrar"
        handleForm={handleSigInForm}
      />
    </div>
  )
}