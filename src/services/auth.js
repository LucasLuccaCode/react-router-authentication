import { v4 as uuid } from "uuid"

const sleep = (time) => new Promise(res => setTimeout(res, time))

// Simular login de usuário na api
export const signInRequest = async ({ email, password }) => {
  await sleep(600)

  return {
    user: {
      id: 1,
      name: "John Doe",
      email,
      image_url: "https://github.com/LucasLuccaCode.png"
    },
    token: uuid()
  }
}

// Simular consulta de dados do usuário na api
export const getUserRequest = async (userId) => {
  await sleep(600)

  return {
    user: {
      id: userId,
      name: "John Doe",
      email: "John@gmail.com",
      image_url: "https://github.com/LucasLuccaCode.png"
    },
    token: uuid()
  }
}