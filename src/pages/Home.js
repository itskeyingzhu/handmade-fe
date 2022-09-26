import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <nav className="nav-bar bg-black text-white text-center d-flex justify-content-around">
        <h1 className="text-center">歡迎來到首首</h1>
        <ul className="d-flex list-unstyled gap-3 align-items-center justify-content-center gap-2">
          <li>
            <Link className="text-white btn btn-warning " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white btn btn-warning " to="blog">
              GO TO BLOG
            </Link>
          </li>
          <li>
            <Link className="text-white btn btn-warning" to="login">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Home
