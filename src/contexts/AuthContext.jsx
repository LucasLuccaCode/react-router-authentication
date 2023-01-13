import { createContext, useContext, useEffect, useState } from "react";
import { requestSignIn } from "../services/auth";
import Cookies from "js-cookie";

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadDataCache = () => {
      const tokenCache = Cookies.get("router-auth-token")
      const userCache = Cookies.get("router-auth-user")

      if (tokenCache && userCache) {
        setUser(JSON.parse(userCache))
      }
    }
    loadDataCache()
  }, [])

  const isAuthenticated = !!user

  const signIn = async ({ email, password }) => {
    try {
      const { user, token } = await requestSignIn({ email, password })

      // creating user cache and token
      Cookies.set("router-auth-token", token, { expires: 7 }) // Espira em 7 dias
      Cookies.set("router-auth-user", JSON.stringify(user), { expires: 7 }) // Espira em 7 dias

      setUser(user)

      return true
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    Cookies.remove("router-auth-token")
    Cookies.remove("router-auth-user")
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated,
    signIn,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}