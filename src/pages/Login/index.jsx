import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import UserForm from "../../components/UserForm"

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSigInForm = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData)

    const success = await  signIn({ email, password })
    if(success) navigate("/dashboard")
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