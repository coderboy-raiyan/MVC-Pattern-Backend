import { parseCookies } from 'nookies'
import React from 'react'
import Layout from '../../components/Layouts/Layout'
import useAuth from '../../hooks/useAuth'

function index() {
  const { user } = useAuth()
  const { jwtToken } = parseCookies()
  console.log(jwtToken)
  return (
    <Layout>
      <h1 className="center py-12 text-center text-4xl">Profile</h1>
    </Layout>
  )
}

export default index
