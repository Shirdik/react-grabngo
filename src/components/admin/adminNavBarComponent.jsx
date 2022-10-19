import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
const AdminNavBar = () => {
  return (
    <React.Fragment>
      <div className="antialiased bg-gray-200">
        <div className="bg-gray-200 pb-5"></div>
        <nav className=" px-6 flex flex-wrap items-center py-2 nm-flat-gray-300 rounded-full mx-10 my-2">
          <div className="flex flex-1 justify-between items-center">
            <div className="flex items-center justify-end ">
              <Link to="/admin" className="nm-flat-gray-300 rounded-3xl">
                <svg
                  id="Layer_1"
                  enable-background="new 0 0 128 128"
                  height="512"
                  viewBox="0 0 128 128"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  alt="Deals!"
                >
                  <g>
                    <path
                      d="m120.72 45.346h-.808v-16.808c0-3.414-2.778-6.192-6.192-6.192h-102.44c-3.415 0-6.192 2.778-6.192 6.192v51.924c0 3.414 2.778 6.192 6.192 6.192h.808v16.808c0 3.414 2.778 6.192 6.192 6.192h102.44c3.415 0 6.192-2.778 6.192-6.192v-51.924c.001-3.414-2.777-6.192-6.192-6.192z"
                      fill="#e6e7e8"
                    />
                    <g>
                      <g>
                        <path
                          d="m116.72 42.345h-1.808v34.117c0 2.868-2.325 5.192-5.192 5.192h-100.632v17.808c0 2.868 2.325 5.192 5.192 5.192h102.44c2.868 0 5.192-2.325 5.192-5.192v-51.924c0-2.868-2.324-5.193-5.192-5.193z"
                          fill="#ffd7e5"
                        />
                        <path
                          d="m116.72 42.345h-1.808v34.117c0 2.868-2.325 5.192-5.192 5.192h-31.616v23h38.616c2.868 0 5.192-2.325 5.192-5.192v-51.924c0-2.868-2.324-5.193-5.192-5.193z"
                          fill="#fa759e"
                        />
                      </g>
                      <g>
                        <path
                          d="m109.72 81.655h-102.44c-2.868 0-5.192-2.325-5.192-5.192v-51.925c0-2.868 2.325-5.192 5.192-5.192h102.44c2.868 0 5.192 2.325 5.192 5.192v51.924c0 2.868-2.324 5.193-5.192 5.193z"
                          fill="#d4fbff"
                        />
                        <path
                          d="m5.088 76.462v-51.924c0-2.868 2.325-5.193 5.192-5.193h-3c-2.868 0-5.192 2.325-5.192 5.193v51.924c0 2.868 2.325 5.192 5.192 5.192h3c-2.868.001-5.192-2.324-5.192-5.192z"
                          fill="#fff"
                        />
                        <path
                          d="m109.72 81.655h-38.616v-62.31h38.616c2.868 0 5.192 2.325 5.192 5.192v51.924c0 2.869-2.324 5.194-5.192 5.194z"
                          fill="#6dc9f7"
                        />
                        <g>
                          <path
                            d="m36.254 31.62 3.86-3.555c.918-.846 2.407-.409 2.722.799l1.325 5.078c.217.833 1.038 1.36 1.886 1.212l5.169-.904c1.23-.215 2.246.957 1.858 2.144l-1.63 4.988c-.268.819.137 1.705.931 2.039l4.837 2.034c1.151.484 1.372 2.019.404 2.808l-4.068 3.315c-.668.544-.806 1.509-.319 2.219l2.97 4.327c.706 1.029.062 2.44-1.178 2.58l-5.214.589c-.856.097-1.494.834-1.468 1.694l.159 5.245c.038 1.248-1.267 2.086-2.386 1.534l-4.705-2.324c-.772-.381-1.708-.107-2.151.632l-2.702 4.499c-.643 1.07-2.194 1.07-2.837 0l-2.702-4.499c-.443-.738-1.379-1.013-2.151-.632l-4.705 2.324c-1.119.553-2.424-.286-2.386-1.534l.159-5.245c.026-.861-.612-1.598-1.468-1.694l-5.214-.589c-1.241-.14-1.885-1.551-1.178-2.58l2.97-4.327c.487-.71.349-1.675-.319-2.219l-4.068-3.315c-.968-.789-.747-2.324.404-2.808l4.837-2.034c.794-.334 1.199-1.221.931-2.039l-1.63-4.988c-.388-1.187.628-2.359 1.858-2.144l5.169.904c.848.148 1.669-.379 1.886-1.212l1.325-5.078c.315-1.208 1.804-1.645 2.722-.799l3.86 3.555c.629.583 1.604.583 2.237 0z"
                            fill="#fa759e"
                          />
                          <g>
                            <g fill="#3a2c60">
                              <path d="m78.104 97.945c.552 0 1-.447 1-1v-5.21c0-.553-.448-1-1-1s-1 .447-1 1v5.21c0 .553.447 1 1 1z" />
                              <path d="m39.5 103.655h-7.5c-.552 0-1 .447-1 1s.448 1 1 1h7.5c.552 0 1-.447 1-1s-.448-1-1-1z" />
                              <path d="m116.72 41.346h-.807v-16.808c0-3.414-2.778-6.192-6.193-6.192h-102.44c-3.415 0-6.192 2.778-6.192 6.192v51.924c0 3.415 2.778 6.193 6.192 6.193h.808v16.807c0 3.415 2.778 6.193 6.192 6.193h13.446c.552 0 1-.447 1-1s-.448-1-1-1h-13.446c-2.312 0-4.192-1.881-4.192-4.193v-16.807h67.016v3.87c0 .553.448 1 1 1s1-.447 1-1v-3.87h30.616c3.415 0 6.193-2.778 6.193-6.193v-33.116h.807c2.312 0 4.193 1.881 4.193 4.192v51.924c0 2.313-1.881 4.193-4.193 4.193h-37.616v-1.501c0-.553-.448-1-1-1s-1 .447-1 1v1.501h-33.401c-.552 0-1 .447-1 1s.448 1 1 1h73.017c3.415 0 6.193-2.778 6.193-6.193v-51.924c0-3.414-2.779-6.192-6.193-6.192zm-2.807 35.116c0 2.313-1.881 4.193-4.193 4.193h-37.616v-1.501c0-.553-.448-1-1-1s-1 .447-1 1v1.501h-62.824c-2.312 0-4.192-1.881-4.192-4.193v-51.924c0-2.312 1.881-4.192 4.192-4.192h62.824v1.5c0 .553.448 1 1 1s1-.447 1-1v-1.5h37.616c2.312 0 4.193 1.881 4.193 4.192z" />
                              <path d="m85.813 69.914h17.686v3.897h-17.686z" />
                              <path d="m85.813 66.574h17.686v1.948h-17.686z" />
                              <path d="m85.813 39.019h17.686v3.479h-17.686z" />
                              <path d="m85.813 58.502h17.686v1.948h-17.686z" />
                              <path d="m85.813 37.279h17.686v.504h-17.686z" />
                              <path d="m85.813 32.791h17.686v.504h-17.686z" />
                              <path d="m85.813 31.538h17.686v.504h-17.686z" />
                              <path d="m85.813 30.286h17.686v.504h-17.686z" />
                              <path d="m85.813 55.023h17.686v1.948h-17.686z" />
                              <path d="m85.813 51.544h17.686v1.948h-17.686z" />
                              <path d="m85.813 43.89h17.686v1.948h-17.686z" />
                              <path d="m85.813 27.19h17.686v1.948h-17.686z" />
                              <path d="m85.813 34.287h17.686v1.948h-17.686z" />
                              <path d="m85.813 61.842h17.686v3.34h-17.686z" />
                              <path d="m85.813 47.369h17.686v2.783h-17.686z" />
                              <path d="m71.104 33.266c.552 0 1-.447 1-1v-5.21c0-.553-.448-1-1-1s-1 .447-1 1v5.21c0 .552.447 1 1 1z" />
                              <path d="m71.104 54.105c.552 0 1-.447 1-1v-5.21c0-.553-.448-1-1-1s-1 .447-1 1v5.21c0 .553.447 1 1 1z" />
                              <path d="m71.104 43.685c.552 0 1-.447 1-1v-5.21c0-.553-.448-1-1-1s-1 .447-1 1v5.21c0 .553.447 1 1 1z" />
                              <path d="m71.104 67.735c-.552 0-1 .447-1 1v5.21c0 .553.448 1 1 1s1-.447 1-1v-5.21c0-.552-.448-1-1-1z" />
                              <path d="m73.903 66.959-1.765-2.17 2.308-2.862c1.53-2.292.878-3.82.878-3.82l-3.221 4.079v-3.871c0-.553-.448-1-1-1s-1 .447-1 1v3.887l-3.22-4.095s-.652 1.528.878 3.82l2.298 2.849-1.754 2.183c-1.051-.798-2.545-.605-3.359.426-.84 1.063-.594 2.642.485 3.462.716.544 1.737.404 2.28-.312l3.393-4.464 3.393 4.464c.544.716 1.565.855 2.28.312 1.079-.82 1.325-2.399.485-3.462-.815-1.031-2.308-1.224-3.359-.426zm-6.44 1.104-.04.051.003.001-.769 1.012c-.407.535-1.274.166-1.15-.494.038-.201.121-.396.253-.57.371-.488 1.008-.655 1.554-.452.187.069.259.291.149.452zm8.087 1.064-.797-1.049c-.123-.163-.052-.396.14-.467.546-.203 1.183-.036 1.554.452.132.174.216.369.253.57.124.66-.744 1.029-1.15.494z" />
                            </g>
                            <circle
                              cx="71.104"
                              cy="64.643"
                              fill="#d4fbff"
                              r=".5"
                            />
                            <path
                              d="m57.6 44.533-4.837-2.034c-.317-.133-.476-.48-.369-.808l1.63-4.987c.292-.894.1-1.852-.517-2.563-.616-.71-1.537-1.039-2.463-.877l-5.169.904c-.333.063-.661-.152-.746-.479l-1.325-5.076c-.237-.911-.918-1.612-1.821-1.878-.905-.266-1.855-.042-2.546.595l-3.86 3.556c-.248.229-.638.229-.886 0l-3.86-3.556c-.692-.638-1.645-.858-2.546-.595-.903.266-1.583.967-1.821 1.877l-1.324 5.077c-.086.328-.416.542-.747.479l-5.169-.904c-.924-.162-1.847.167-2.463.877-.616.711-.81 1.669-.518 2.563l1.63 4.987c.107.327-.051.675-.368.808l-4.837 2.034c-.867.364-1.465 1.137-1.599 2.067-.134.932.221 1.843.95 2.438l4.069 3.314c.262.214.317.599.126.878l-2.969 4.326c-.533.776-.617 1.75-.226 2.605s1.182 1.43 2.116 1.535l5.214.589c.336.037.591.332.581.67l-.159 5.245c-.028.94.427 1.806 1.219 2.314s1.768.563 2.61.146l4.705-2.324c.305-.147.678-.039.851.25l2.702 4.498c.485.807 1.336 1.288 2.276 1.288.941 0 1.791-.481 2.275-1.288l2.702-4.498c.173-.29.548-.398.851-.25l4.705 2.324c.844.418 1.82.362 2.61-.147.792-.508 1.247-1.373 1.218-2.313l-.159-5.245c-.01-.338.245-.633.581-.67l5.214-.589c.935-.105 1.727-.68 2.117-1.535.391-.855.307-1.829-.226-2.604l-2.97-4.327c-.191-.279-.136-.665.126-.878l4.068-3.314c.729-.595 1.084-1.506.95-2.438-.132-.93-.73-1.703-1.596-2.067zm-.616 2.954-4.068 3.314c-1.063.866-1.287 2.43-.512 3.56l2.97 4.328c.189.275.102.54.056.642s-.19.341-.522.378l-5.214.589c-1.362.154-2.396 1.349-2.355 2.719l.159 5.245c.01.335-.207.511-.3.571-.094.06-.344.183-.644.036l-4.706-2.324c-1.229-.607-2.745-.162-3.451 1.014l-2.702 4.498c-.172.286-.449.317-.561.317s-.39-.031-.562-.317l-2.702-4.498c-.492-.82-1.379-1.284-2.288-1.284-.394 0-.792.087-1.164.271l-4.705 2.324c-.299.147-.55.023-.644-.036-.094-.061-.311-.237-.301-.571l.159-5.245c.042-1.37-.993-2.564-2.355-2.719l-5.215-.589c-.332-.037-.475-.276-.521-.378-.046-.101-.133-.366.056-.643l2.97-4.327c.776-1.13.551-2.693-.512-3.56l-4.068-3.314c-.259-.211-.25-.49-.234-.601.016-.11.086-.381.394-.51l4.837-2.034c1.264-.531 1.92-1.969 1.494-3.272l-1.63-4.987c-.104-.318.055-.548.127-.633.073-.084.278-.276.607-.216l5.169.904c1.345.234 2.679-.618 3.026-1.944l1.325-5.077c.084-.324.342-.433.449-.464.107-.029.381-.081.627.146l3.86 3.556c1.008.931 2.589.93 3.596 0l3.86-3.556c.245-.227.521-.177.627-.146.107.031.365.14.449.464l1.325 5.076c.346 1.327 1.667 2.18 3.026 1.945l5.169-.904c.329-.06.534.132.607.216.073.085.231.314.127.633l-1.63 4.987c-.426 1.304.231 2.741 1.495 3.272l4.837 2.034c.308.129.378.399.394.51.019.11.028.389-.231.6z"
                              fill="#3a2c60"
                            />
                          </g>
                        </g>
                        <g>
                          <path
                            d="m24.522 50.825c-.875-1.001-1.311-2.456-1.311-4.366 0-1.857.441-3.285 1.324-4.286.883-1 2.09-1.5 3.622-1.5 1.55 0 2.762.501 3.637 1.5.873 1.001 1.311 2.438 1.311 4.312 0 1.911-.438 3.362-1.311 4.353-.875.991-2.087 1.487-3.637 1.487s-2.761-.5-3.635-1.5zm4.853-1.799c.252-.504.378-1.351.378-2.541 0-1.135-.131-1.96-.392-2.474-.262-.513-.662-.77-1.203-.77-.54 0-.937.253-1.189.757-.253.505-.378 1.334-.378 2.487 0 1.172.125 2.014.378 2.528.252.514.649.77 1.189.77.559 0 .964-.252 1.217-.757zm.757 11.517c-.378 0-.707-.14-.987-.419s-.419-.626-.419-1.041c0-.342.109-.703.325-1.081l9.57-16.518c.378-.685.883-1.027 1.514-1.027.397 0 .735.14 1.014.419s.419.626.419 1.041c0 .342-.108.703-.325 1.081l-9.57 16.518c-.415.684-.929 1.027-1.541 1.027zm8.34-1.824c-.875-1-1.311-2.455-1.311-4.366 0-1.874.437-3.308 1.311-4.299.873-.991 2.086-1.486 3.636-1.486 1.532 0 2.74.499 3.624 1.499.882 1.001 1.324 2.439 1.324 4.312 0 1.893-.438 3.34-1.311 4.34-.875 1-2.087 1.5-3.637 1.5s-2.762-.501-3.636-1.5zm4.852-1.798c.253-.505.378-1.352.378-2.542 0-1.153-.131-1.987-.392-2.5-.262-.514-.662-.77-1.203-.77-.54 0-.942.256-1.202.77-.262.514-.393 1.348-.393 2.5 0 1.19.127 2.037.378 2.542.253.504.658.757 1.217.757.56 0 .966-.253 1.217-.757z"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="hidden sm:flex  items-center justify-between space-x-4 lg:pl-32">
              <NavLink
                className="nm-flat-gray-300 rounded-3xl px-3 py-2 focus:nm-inset-gray-200"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nm-flat-gray-300 rounded-3xl px-3 py-2 focus:nm-inset-gray-200"
                to="/DealsEditor"
              >
                Deals
              </NavLink>
              <NavLink
                className="nm-flat-gray-300 rounded-3xl px-3 py-2 focus:nm-inset-gray-200"
                to="/CouponsEditor"
              >
                Coupons
              </NavLink>
              <NavLink
                className="nm-flat-gray-300 rounded-3xl px-3 py-2 focus:nm-inset-gray-200 pattern-2"
                to="/Logout"
              >
                Logout
              </NavLink>
            </div>
            <Popover className=" relative sm:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                text-gray-900 group bg-orange-700 px-3 py-2 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 nm-inset-gray-200 rounded-3xl`}
                  >
                    <span>Menu</span>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      static
                      className="absolute z-10 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl"
                    >
                      <div className="nm-flat-gray-300 rounded-lg w-24 m-1">
                        <div>
                          <div className="grid grid-cols-2 py-1 hover:text-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <NavLink
                              className="flex items-center p-2 -m-7 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 "
                              to="/admin"
                            >
                              Home
                            </NavLink>
                          </div>
                          <div className="grid grid-cols-2 py-1 hover:text-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <NavLink
                              className="flex items-center p-2 -m-7 transition duration-150 ease-in-out rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              to="/admin/Deals"
                            >
                              Deals
                            </NavLink>
                          </div>
                          <div className="grid grid-cols-2 py-1 hover:text-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <NavLink
                              className="flex items-center p-2 -m-7 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              to="/admin/Coupons"
                            >
                              Coupons
                            </NavLink>
                          </div>
                          <div className="grid grid-cols-2 py-1 hover:text-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <NavLink
                              className="flex items-center p-2 -m-7 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              to="/LogIn"
                            >
                              Logout
                            </NavLink>
                          </div>
                          {/*          <div className="grid grid-cols-2 py-1 hover:text-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                            <NavLink
                              className="flex items-center p-2 -m-7 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              to="/SignUp"
                            >
                              SignUp
                            </NavLink>
                          </div>
              */}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </nav>
        <div className="bg-gray-200 p-2"></div>
      </div>
    </React.Fragment>
  );
};

export default AdminNavBar;
