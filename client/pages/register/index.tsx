import React, { useRef } from 'react'

function Register() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)

  const handelRegister = async (e: any) => {
    e.preventDefault()
    const data = {
      email: emailRef.current?.value,
      pass: passRef.current?.value,
    }
    try {
      const user = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      const userData = await user.json()
      console.log(userData)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section>
      <form
        onSubmit={handelRegister}
        className="flex h-screen items-center justify-center"
      >
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-3xl">Register</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passRef} type="password" placeholder="Password" />
          <button className="rounded-lg bg-indigo-500 py-3 text-white">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  )
}

export default Register
