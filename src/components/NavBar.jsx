// import { useState } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <img className="h-8 w-8" src="/logo.png" alt="Logo" />
//             </div>

//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <Link
//                   to="/"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/about"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   About
//                 </Link>

//                 {/* <Menu as="div" className="relative text-left">
//                   {({ open }) => (
//                     <>
//                       <div>
//                         <Menu.Button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                           Dropdown 1
//                           <ChevronDownIcon
//                             className="-mr-1 ml-2 h-5 w-5"
//                             aria-hidden="true"
//                           />
//                         </Menu.Button>
//                       </div>

//                       <Transition
//                         show={open}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items
//                           static
//                           className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                         >
//                           <div className="py-1">
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href="#"
//                                   className={`
//                                   ${
//                                     active
//                                       ? "bg-gray-100 text-gray-900"
//                                       : "text-gray-700"
//                                   }
//                                   block px-4 py-2 text-sm`}
//                                 >
//                                   Option 1
//                                 </a>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href="#"
//                                   className={`
//                                   ${
//                                     active
//                                       ? "bg-gray-100 text-gray-900"
//                                       : "text-gray-700"
//                                   }
//                                   block px-4 py-2 text-sm`}
//                                 >
//                                   Option 2
//                                 </a>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <a
//                                   href="#"
//                                   className={`
//                                   ${
//                                     active
//                                       ? "bg-gray-100 text-gray-900"
//                                       : "text-gray-700"
//                                   }
//                                   block px-4 py-2 text-sm`}
//                                 >
//                                   Option 3
//                                 </a>
//                               )}
//                             </Menu.Item>
//                           </div>
//                         </Menu.Items>
//                       </Transition>
//                     </>
//                   )}
//                 </Menu> */}

//                 <Link
//                   to="/investment"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Investment Page
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={isMobileMenuOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMobileMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 8h16M4 16h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </Link>

//           <div className="relative">
//             <button
//               type="button"
//               className={`
//                     w-full bg-gray-900 text-left text-white px-3 py-2 rounded-md text-base font-medium focus:outline-none
//                     focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
//               aria-expanded="false"
//               aria-haspopup="true"
//             >
//               Dropdown 1
//               <ChevronDownIcon
//                 className="-mr-1 ml-2 h-5 w-5"
//                 aria-hidden="true"
//               />
//             </button>
//             {/*
//             <Transition
//               enter="transition ease-out duration-100"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-75"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items
//                 className="
//                     origin-top-right
//                     absolute right-0 mt-2 w-56 rounded-md shadow-lg
//                     bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//               >
//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href="#"
//                         className={`
//                               ${
//                                 active
//                                   ? "bg-gray-100 text-gray-900"
//                                   : "text-gray-700"
//                               }
//                               block px-4 py-2 text-sm`}
//                       >
//                         Option 1
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href="#"
//                         className={`
//                               ${
//                                 active
//                                   ? "bg-gray-100 text-gray-900"
//                                   : "text-gray-700"
//                               }
//                               block px-4 py-2 text-sm`}
//                       >
//                         Option 2
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href="#"
//                         className={`
//                               ${
//                                 active
//                                   ? "bg-gray-100 text-gray-900"
//                                   : "text-gray-700"
//                               }
//                               block px-4 py-2 text-sm`}
//                       >
//                         Option 3
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition> */}
//           </div>

//           <a
//             href="/investment"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Investment Page
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/tongstonlogo.png";

const NavList = [
  {
    name: "Direct Investing",
    route: "/investment",
  },
  // {
  //   name: "Solutions",
  //   route: "#",
  // },
  {
    name: "Business Development",
    route: "/business",
  },
];

const NavBar = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrollPos > 0 ? "bg-white shadow" : "";

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="sticky top-0  w-full text-black bg-white flex justify-between py-5 items-center z-40">
      {/* <div className="relative flex items-center justify-between mx-auto w-[90%]"> */}
      <Link
        to="/"
        onClick={() => {
          setMobileNavOpen(false);
        }}
      >
        <img
          src={logo}
          className="w-[7 h-auto object-cover"
          alt="tongston-logo"
        />
      </Link>

      <div className="lg:flex hidden items-center">
        <ul className="space-x-12 text-lg md:text-xl font-bold">
          {NavList.map((option, index) => (
            <li
              key={index}
              className="float-left hover:text-red focus:text-red active:text-red  hover:bg-gray-100 hover:p-2 hover:rounded-md"
            >
              {/* {option.name === "Solutions" ? (
                <Menu as="div" className="relative inline-block text-left">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex items-center space-x-2">
                          <span>{option.name}</span>
                          <ChevronDownIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5`}
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-t-2 border-gray-300"
                        >
                          <div className="py-2 space-y-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/investment"
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-lg`}
                                >
                                  Direct Investing
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/business"
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-lg`}
                                >
                                  Business Development
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={option.route}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-lg`}
                                >
                                  Grant Management
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              ) : ( */}
              <Link
                to={option.route}
                className="block text-lg md:text-xl font-bold"
              >
                {option.name}
              </Link>
              {/* )} */}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[9rem] lg:block hidden duration-150">
        <Link to="/contact">
          {" "}
          <button
            onClick={() => {
              setMobileNavOpen(false);
            }}
            className="bg-red text-white font-semibold py-[15px] px-[24px] gap-2"
          >
            Contact Us
          </button>
        </Link>
      </div>

      <button
        onClick={() => {
          setMobileNavOpen(!mobileNavOpen);
        }}
        className="p-2 lg:hidden block"
      >
        {" "}
        <FaBars size={25} />
      </button>

      <div
        className={`${
          mobileNavOpen ? "block" : "hidden"
        } lg:hidden z-50 duration-300 w-full absolute top-0 left-0 py-4 px-4 rounded-md bg-white font-bold mobile-menu`}
      >
        <div className="flex justify-between items-center text-center">
          <Link
            to="/"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <img src={logo} className="w-full h-auto" alt="tongston-logo" />
          </Link>
          <button
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            {" "}
            <FaTimes size={25} />
          </button>
        </div>
        <br />

        <ul>
          {NavList.map((option, index) => (
            <li key={index} className="my-5">
              {option.name === "Solutions" ? (
                <Menu as="div" className="relative inline-block text-left">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex items-center space-x-2">
                          <span>{option.name}</span>
                          <ChevronDownIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5`}
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-center relative right-0 mt-2 w-full bg-white focus:outline-none transition ease-in-out duration-5000 opacity-2"
                        >
                          <div className="py-2 space-y-1 font-medium">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/investment"
                                  onClick={() => {
                                    setMobileNavOpen(false);
                                  }}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-sm`}
                                >
                                  Direct Investing
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={option.route}
                                  onClick={() => {
                                    setMobileNavOpen(false);
                                  }}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-sm`}
                                >
                                  Business Development{" "}
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  onClick={() => {
                                    setMobileNavOpen(false);
                                  }}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-sm`}
                                >
                                  Grant Management{" "}
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              ) : (
                <Link
                  to={option.route}
                  onClick={() => {
                    setMobileNavOpen(false);
                  }}
                  className="block text-sm"
                >
                  {option.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <br />

        <div className="w-[10rem]">
          <Link to="/contact">
            <button
              onClick={() => {
                setMobileNavOpen(false);
              }}
              className="bg-red text-white font-semibold py-[20px] px-[24px] gap-2"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <br />
        <br />
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
