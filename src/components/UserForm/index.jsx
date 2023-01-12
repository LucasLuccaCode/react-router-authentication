import { Form, Link } from "react-router-dom"
import "./styles.css"

export default function UserForm({ action, btnText }) {

  const handleForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <Form method="POST" onSubmit={handleForm} className="c-form max-width">
      <div className="c-form__input">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoFocus
        />
      </div>
      <div className="c-form__input">
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
      <input className="btn"
        type="submit"
        value={btnText}
      />
      <p>Não tem uma conta? <Link to={`/register`}>Clique aqui</Link></p>
    </Form>
  )
}