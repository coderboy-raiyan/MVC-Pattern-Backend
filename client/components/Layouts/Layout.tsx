import React from 'react'
import Header from '../common/Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
