import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import AuthHttpReq from '../services/Auth.services'

export const AuthContext = createContext<ContextType>({} as ContextType)

export interface ContextType {
  user: IAuthUser
  error: null
  authLoading: boolean
  register: (payload: IPayLoad) => Promise<void>
  login: (payload: IPayLoad) => Promise<void>
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IAuthUser>({} as IAuthUser)
  const [loading, setLoading] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  // register
  const register = async (payload: IPayLoad) => {
    setAuthLoading(true)
    try {
      const user = await AuthHttpReq.register(payload)
      console.log(user)
      router.push('/login')
      setAuthLoading(false)
    } catch (error: any) {
      const { message } = error.response.data
      setError(message)
      setAuthLoading(false)
    }
  }

  // login
  const login = async (payload: IPayLoad) => {
    setAuthLoading(true)
    try {
      const user = await AuthHttpReq.login(payload)
      cookie.set('jwtToken', user.token, { expires: 7 })
      console.log(user)

      localStorage.setItem('user', JSON.stringify(user.user))

      router.push('/profile')
      setAuthLoading(false)
    } catch (error: any) {
      const { message } = error.response.data
      setError(message)
      setAuthLoading(false)
    }
  }

  // logout

  // getUser Value
  useEffect(() => {
    const getUser: any = localStorage.getItem('user')
    const user = JSON.parse(getUser)
    setUser(user)
    console.log(user)
    setLoading(false)
  }, [])

  const returnObj: ContextType = {
    user,
    error,
    authLoading,
    login,
    register,
  }

  return (
    <AuthContext.Provider value={returnObj}>
      {loading ? 'loading...' : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
