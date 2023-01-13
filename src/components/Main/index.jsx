import { Outlet, useNavigation } from "react-router-dom";

export default function Main() {
  const navigation = useNavigation()

  const isLoading = navigation.state !== 'idle' ? 'loading' : ''

  return (
    <main className={isLoading}>
      <Outlet />
    </main>
  )
}