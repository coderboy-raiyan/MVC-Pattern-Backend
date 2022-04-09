import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

interface IForm {
  email: string
  password: string
}

function Register() {
  const { register, handleSubmit } = useForm<IForm>()
  const router = useRouter()

  const handelRegister = async (data: IForm) => {
    try {
      const user = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      const userData = await user.json()
      if (userData.email) {
        router.push('/verify')
      }
    } catch (e) {
      console.log('from catch', e)
    }
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit(handelRegister)}
        className="flex h-screen items-center justify-center"
      >
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-3xl">Register</h1>
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
