import UserForm from "../../components/UserForm"

export default function Login() {
  return (
    <div className="c-login">
      <h1>Página de login</h1>

      <UserForm action="login" btnText="Entrar" handleForm={() => { }} />
    </div>
  )
}