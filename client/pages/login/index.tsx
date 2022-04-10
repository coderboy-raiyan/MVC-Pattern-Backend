import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

interface IForm {
  email: string
  password: string
}

function Login() {
  const { register, handleSubmit } = useForm<IForm>()
  const router = useRouter()

  const handelLogin = async (data: IForm) => {
    try {
      const user = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      const userData = await user.json()

      console.log(userData)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit(handelLogin)}
        className="flex h-screen items-center justify-center"
      >
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-3xl">Login</h1>
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
