import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout
