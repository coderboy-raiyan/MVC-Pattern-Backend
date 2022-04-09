import React from 'react'

function Login() {
  return (
    <section>
      <form className="flex h-screen items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-center text-3xl">Login</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="rounded-lg bg-indigo-500 py-3 text-white">
            login
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login
