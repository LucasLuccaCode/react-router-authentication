import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { api } from "../services/api"
import { signInRequest } from "../services/auth";

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadCacheData()
  }, [])

  const loadCacheData = useCallback(() => {
    const tokenCookie = Cookies.get("router-auth-token")
    const userCookie = Cookies.get("router-auth-user")

    if (tokenCookie && userCookie) {
      const userData = JSON.parse(userCookie)

      api.defaults.headers['Authorization'] = `Bearer ${tokenCookie}`

      setUser(userData)
    }
    setIsLoading(false)
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const { user, token } = await signInRequest({ email, password })

      setUser(user)

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      // creating user cache and token
      Cookies.set("router-auth-token", token, { expires: 7 }) // Espira em 7 dias
      Cookies.set("router-auth-user", JSON.stringify(user), { expires: 7 }) // Espira em 7 dias
    } catch (error) {
      console.log(error)
    }
  }, [])

  const logout = useCallback(async () => {
    Cookies.remove("router-auth-token")
    Cookies.remove("router-auth-user")

    setUser(null)
  }, [])

  const value = {
    user,
    signed: !!user,
    signIn,
    isLoading,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}