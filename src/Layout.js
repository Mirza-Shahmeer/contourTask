import React from 'react'
import { Outlet, Link } from "react-router-dom";
export const Layout = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/Signup">SignUp</Link>
        </li>
        <li>
          <Link to="/Dashborad">Dashboard</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}
