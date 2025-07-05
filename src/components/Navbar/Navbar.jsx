import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import revLogo from '../../assets/revolut-logo.svg'

const Navbar = () => {
  return (
    <nav className="relative z-50 bg-transparent">
      <div className="container mx-auto py-4 w-full flex items-center justify-between px-4">
        
        {/* Left: Logo + Nav Links */}
        <div className="flex gap-12 items-center">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={revLogo}
                alt="Revolut Logo"
                className="w-auto h-6"
                style={{ filter: 'invert(1)' }}
              />
            </Link>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-white">
            {[
              { id: 1, name: 'Personal' },
              { id: 2, name: 'Business' },
              { id: 3, name: 'Revolut <18' },
              { id: 4, name: 'Company' },
            ].map(link => (
              <li key={link.id}>
                <NavLink
                  to="#"
                  className="transition-colors hover:bg-white/20 px-4 py-2 rounded-full"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="#">
            <button className="px-6 py-2 rounded-full text-white hover:bg-white/20 transition">
              Log in
            </button>
          </Link>
          <Link to="#">
            <button className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
