import Link from 'next/link'
import React from 'react'
import useAuth from '../../hooks/useAuth'

function Header() {
  const { user } = useAuth()
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav>
          <ul className="flex flex-wrap items-center justify-center space-x-8">
            {user.email ? (
              <>
                <li>
                  <Link href="/profile">
                    <a className="text-lg">
                      Welcome,{' '}
                      <span className="font-bold">
                        {user.email.slice(0, 5)}
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <button>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
