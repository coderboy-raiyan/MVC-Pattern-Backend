import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

interface IForm {
  email: string
  password: string
}

function Login() {
  const { register, handleSubmit } = useForm<IForm>()
  const router = useRouter()
  const { login, error } = useAuth()

  const handelLogin = async (data: IForm) => {
    await login(data)
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit(handelLogin)}
        className="flex h-screen items-center justify-center"
      >
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-3xl">Login</h1>
          {error && (
            <p className="center rounded bg-red-400 py-3 text-center text-white">
              {error}
            </p>
          )}
          <input {...register('email')} type="email" placeholder="Email" />
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
          />
          <button className="rounded-lg bg-indigo-500 py-3 text-white">
            Login
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login
