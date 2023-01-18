import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Loading from "../components/Loading"

export default function PrivateRoute() {
  const { signed, isLoading } = useAuth()

  if(isLoading){
    return <Loading />
  }

  return signed ? <Outlet /> : <Navigate to="/login" />
}