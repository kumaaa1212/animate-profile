import React from 'react'

const Layout = ({children,clasName=''}:any) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${clasName}`}>
      {children}
    </div>
  )
}

export default Layout