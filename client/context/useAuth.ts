import { createContext, useState } from 'react'

export const AuthContext = createContext({})

interface IAuthUser {
  email: string
  token: string
}

function useAuth() {
  const [user, setUser] = useState<IAuthUser>({} as IAuthUser)
  const [loading, seLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)

  // register
  const register = async () => {}

  return {}
}

export default useAuth
