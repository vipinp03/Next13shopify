"use client";
import { useContext, useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./Cart/MiniCart";
import Menu from "./Nav/Menu";
import Search from "./Search/search";
import Language from "./Search/Language";
import Link from "next/link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <>
      <nav className="bg-[#4b148b]">
        <div className="w-full mx-auto flex items-center justify-between h-16 px-2 border-b border-solid border-slate-600">
          <div className="flex-shrink-0 font-bold tracking-wider text-white text-2xl">
            HeadLess <span className="text-orange-500">Project</span>
          </div>
          {/* MIDDEL SECTION */}
          <div className="hidden md:block">
            <Menu />
          </div>
          {/* RIGHT SECTION */}
          <div className="flex items-center">
            <div className="hidden md:block ">
              <Search />
            </div>
            <div>
              <Language />
            </div>
            <div className="hidden md:block mx-6 md:mx-2">
              <button
                className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-orange-500"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 text-orange-500 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                ({cartQuantity})
              </button>
              <MiniCart cart={cart} />
            </div>
            <Link href={"/profile"} className="hidden md:block">
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className="md:hidden">
          {showMobileMenu && <Menu />}
          {showMobileMenu && (
            <div className="flex items-center">
              <div className="md:hidden">
                <Search />
              </div>
              <div className="md:hidden">
                <button
                  className="inline-flex items-center bg-white border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mx-2 md:mt-0 text-orange-500"
                  onClick={() => setCartOpen(!cartOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 text-orange-500 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  ({cartQuantity})
                </button>
                <MiniCart cart={cart} />
              </div>
              <Link href={"/profile"} className="md:hidden">
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Link>
            </div>
          )}
        </div>
      </nav>

      {/* <header className="body-font bg-[#4b148b] text-white">
        
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-3xl text-white">
              Headless <span className="text-orange-500">Project</span>
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Products</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex space-x-3">
            <button className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-orange-500"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 text-orange-500 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              ({cartQuantity})
            </button>
            <MiniCart cart={cart} />
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Navbar;
