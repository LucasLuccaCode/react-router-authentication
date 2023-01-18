import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { signInRequest, getUserRequest } from "../services/auth";
import Cookies from "js-cookie";

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const persistUserAndToken = (user, token) => {
    // creating user cache and token
    Cookies.set("router-auth-token", token, { expires: 7 }) // Espira em 7 dias
    Cookies.set("router-auth-user", JSON.stringify(user), { expires: 7 }) // Espira em 7 dias
  }

  const loadDataCache = () => {
    const tokenCache = Cookies.get("router-auth-token")
    const userCache = JSON.parse(Cookies.get("router-auth-user"))

    if (!!tokenCache && !!userCache) {
      setUser(userCache)

      const refreshUserData = async () => {
        try {
          const { user, token } = await getUserRequest(userCache.id)

          persistUserAndToken(user, token)
          setUser(user)
        } catch (error) {
          console.log(error)
        }
      }
      refreshUserData()
    }
  }

  useEffect(() => {
    loadDataCache()
  }, [])

  const isAuthenticated = !!user

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const { user, token } = await signInRequest({ email, password })

      persistUserAndToken(user, token)
      setUser(user)
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