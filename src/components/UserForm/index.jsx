import { Form, Link } from "react-router-dom"
import "./styles.css"

export default function UserForm({ btnText, handleForm }) {

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
          defaultValue="john@gmail.com"
          />
      </div>
      <div className="c-form__input">
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue="123456"
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