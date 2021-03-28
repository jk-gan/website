import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="container mx-auto mt-12 text-lg font-bold mb-4 w-11/12 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12">
        <ul className="flex flex-wrap">
          <li className="inline mr-9 mb-2 sm:mb-0">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="inline mr-9 mb-2 sm:mb-0">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="inline mr-9 mb-2 sm-mb-0">
            <Link to="/blog" className="link">
              Writings
            </Link>
          </li>
          <li className="inline mr-9 mb-2 sm:mb-0">
            <Link to="/tags" className="link">
              Tags
            </Link>
          </li>
          <li className="inline mb-2 sm:mb-0">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer className="mx-auto mt-24 text-center bottom-0 h-20 w-11/12 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Gan Jun Kai. All rights
          reserved.
        </p>
        <p className="text-sm">
          This site uses no cookies and does not track you.
        </p>
      </footer>
    </div>
  )
}

export default Layout
