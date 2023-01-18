import { v4 as uuid } from "uuid"

const sleep = (time) => new Promise(res => setTimeout(res, time))

const userData = {
  token: uuid(),
  user: {
    id: 1,
    name: "John Doe",
    email: "John@gmail.com",
    image_url: "https://github.com/LucasLuccaCode.png"
  }
}

// Simular login de usuário na api e retornar usuário criado
export const signInRequest = async ({ email, password }) => {
  await sleep(600)

  return userData
}

// Simular consulta de do usuário na api e retornar dados do usuário
export const getUserRequest = async (userId) => {
  await sleep(600)

  return userData
}