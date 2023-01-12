import { v4 as uuid } from "uuid"

const sleep = (time) => new Promise(res => setTimeout(res, time))

export const requestSignIn = async ({ email, password }) => {
  await sleep(600)

  return {
    user: {
      id: 1,
      name: "Jhon Doe",
      email,
      image_url: "https://github.com/LucasLuccaCode.png"
    },
    token: uuid()
  }
}