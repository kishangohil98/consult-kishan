import React from "react";

export function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#214462] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="tracking-wider text-md font-bold leading-8 inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="#"
            >
              Consult Kishan
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {
                navbarOpen ? 'Close' : 'Menu'
              }
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 mx-3 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  <span className="">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 mx-3 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  <span className="">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 mx-3 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  <span className="">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 mx-3 flex rounded-lg items-center text-xs font-bold leading-snug text-[#02CFAA] border border-[#02CFAA] hover:opacity-75"
                  href="#"
                >
                  <span className="">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}