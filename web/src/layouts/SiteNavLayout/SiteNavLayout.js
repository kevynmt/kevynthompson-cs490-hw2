import {useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const SiteNavLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>CS490 Homework #2</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About Us</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    <main>{children}</main>
    </>
  )
}

export default SiteNavLayout
