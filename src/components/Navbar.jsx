import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Menutup menu jika user klik di luar area navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav ref={navRef}>
      <div className="w-full bg-green-800 text-white fixed top-0 z-[99999]">
        <div className="flex justify-between px-4 sm:px-12 lg:px-24 xl:px-48 items-center gap-4">
          <p className="text-lg font-bold py-3 lg:py-5">
            <Link to="/" onClick={closeMenu}>
              Evriwanken
            </Link>
          </p>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-[36px] xl:gap-[50px] text-sm">
            <li className="py-5 hover:cursor-pointer hover:underline underline-offset-[24px] decoration-2 decoration-white">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-[24px] decoration-2 decoration-white font-semibold"
                    : ""
                }
              >
                Beranda
              </NavLink>
            </li>
            <li className="py-5 hover:cursor-pointer hover:underline underline-offset-[24px] decoration-2 decoration-white">
              <NavLink
                to="/program"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-[24px] decoration-2 decoration-white font-semibold"
                    : ""
                }
              >
                Program
              </NavLink>
            </li>
            <li className="py-5 hover:cursor-pointer hover:underline underline-offset-[24px] decoration-2 decoration-white">
              <NavLink
                to="/tentang"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-[24px] decoration-2 decoration-white font-semibold"
                    : ""
                }
              >
                Tentang
              </NavLink>
            </li>
            <li className="py-5 hover:cursor-pointer hover:underline underline-offset-[24px] decoration-2 decoration-white">
              <NavLink
                to="/kontak"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-[24px] decoration-2 decoration-white font-semibold"
                    : ""
                }
              >
                Kontak
              </NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="items-center flex focus:outline-none"
              type="button"
              id="hamburgerbutton"
              aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-controls="menumobile"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              {isOpen ? (
                /* Close Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="block size-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="block size-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            id="menumobile"
            className="lg:hidden transition-all duration-300 ease-in-out"
          >
            <div className="absolute flex flex-col w-full top-[51px] bg-green-700 text-lg z-[99998]">
              <ul className="flex flex-col items-center text-sm">
                <li className="w-full">
                  <NavLink
                    to="/"
                    end
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex w-full py-4 justify-center items-center hover:bg-green-800 ${
                        isActive ? "bg-green-800 font-semibold" : ""
                      }`
                    }
                  >
                    Beranda
                  </NavLink>
                </li>
                <li className="w-full">
                  <NavLink
                    to="/program"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex w-full py-4 justify-center items-center hover:bg-green-800 ${
                        isActive ? "bg-green-800 font-semibold" : ""
                      }`
                    }
                  >
                    Program
                  </NavLink>
                </li>
                <li className="w-full">
                  <NavLink
                    to="/tentang"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex w-full py-4 justify-center items-center hover:bg-green-800 ${
                        isActive ? "bg-green-800 font-semibold" : ""
                      }`
                    }
                  >
                    Tentang
                  </NavLink>
                </li>
                <li className="w-full">
                  <NavLink
                    to="/kontak"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex w-full py-4 justify-center items-center hover:bg-green-800 ${
                        isActive ? "bg-green-800 font-semibold" : ""
                      }`
                    }
                  >
                    Kontak
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
