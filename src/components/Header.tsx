import { useState } from "react";
import logo from "../assets/images/site-logo.svg";
import { Link } from "react-router-dom";
import { pagesRouting } from "../data/pagesRouting";
import { mainData } from "../data/mainData";
export default function Header() {
  const [isNavBarOpen, setIsNavBarOpen]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);
  return (
    <header className="sticky py-6 top-0 bg-[#FFFFFF] w-full px-6">
      <nav className="flex justify-between items-center">
        <Link className="" to="/">
          <img
            loading="lazy"
            alt={`${mainData.companyName} Logo Header`}
            width="80px"
            height="80px"
            className="logo-icon me-2 "
            src={logo}
          />
        </Link>
        <div
          className="flex justify-center cursor-pointer sm:hidden relative"
          onClick={() => {
            setIsNavBarOpen(!isNavBarOpen);
          }}
        >
          <div>
            <div className="dropdown relative">
              <a
                className="
          dropdown-toggle
          px-4
          py-2.5
          bg-greenColor
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-greenColor hover:shadow-lg
          focus:bg-greenColor focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-greenColor active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  onClick={() => {
                    setIsNavBarOpen(!isNavBarOpen);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </a>
              <ul
                className={`
                ${isNavBarOpen ? "block" : "hidden"} dropdown-menu
          min-w-max
          absolute 
          right-0
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
          `}
                aria-labelledby="dropdownMenuButton2"
              >
                {pagesRouting.map((route) => {
                  return (
                    <li
                      key={route.destination}
                      className="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                "
                    >
                      <Link to={route.url}>
                        <p>{route.destination}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* <section >
          <svg
            onClick={() => {
              setIsNavBarOpen(!isNavBarOpen);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={`${isNavBarOpen ? "#FFFFFF" : "currentColor"}`}
            className={`${isNavBarOpen ? "bg-greenColor" : ""}`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>

          <ul
            className={`absolute ${
              isNavBarOpen ? "block" : "hidden"
            } right-0 bg-[#FFFFFF]`}
          >
            {pagesRouting.map((route) => {
              return (
                <li
                  key={route.destination}
                  className="px-4 py-2 hover:bg-greenColor "
                >
                  <Link to={route.url}>
                    <p className=" hover:text-white font-medium">
                      {route.destination}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section> */}
        <ul className={`sm:flex justify-between lg:w-[40%] w-[60%] hidden`}>
          {pagesRouting.map((route) => {
            return (
              <li key={`route-${route.destination}`}>
                <Link to={route.url}>
                  <p className="hover:text-greenColor font-bold">
                    {route.destination}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
