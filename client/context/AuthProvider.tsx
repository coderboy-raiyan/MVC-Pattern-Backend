import { useRouter } from 'next/router'
import { createContext, useState } from 'react'
import AuthHttpReq from '../services/Auth.services'

export const AuthContext = createContext<ContextType>({} as ContextType)

export interface ContextType {
  user: IAuthUser
  error: null
  register: (payload: IPayLoad) => Promise<void>
  login: (payload: IPayLoad) => Promise<void>
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IAuthUser>({} as IAuthUser)
  const [loading, seLoading] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  // register
  const register = async (payload: IPayLoad) => {
    try {
      const user = await AuthHttpReq.register(payload)
      console.log(user)
      router.push('/login')
    } catch (error: any) {
      const { message } = error.response.data
      setError(message)
    }
  }

  // login
  const login = async (payload: IPayLoad) => {
    try {
      const user = await AuthHttpReq.login(payload)
      console.log(user)
    } catch (error: any) {
      const { message } = error.response.data
      setError(message)
    }
  }

  const returnObj: ContextType = {
    user,
    error,
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
