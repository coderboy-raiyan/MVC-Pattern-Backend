import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

interface IForm {
  email: string
  password: string
}

function Register() {
  const { register, handleSubmit } = useForm<IForm>()
  const router = useRouter()
  const { user, register: signUp, error } = useAuth()

  const handelRegister = async (data: IForm) => {
    await signUp(data)
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit(handelRegister)}
        className="flex h-screen items-center justify-center"
      >
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-3xl">Register</h1>
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
            Sign Up
          </button>
        </div>
      </form>
    </section>
  )
}

export default Register
