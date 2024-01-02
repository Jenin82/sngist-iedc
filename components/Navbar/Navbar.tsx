import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";


const Navbar = () => {
    return (
      <div className="navbar bg-base-100 fixed top-0 z-50 shadow">
        <div className="navbar-start">
          <button className="btn btn-ghost">
            <Link className="flex items-center text-xl font-bold" href={"/"}>
              {/* <Image src="/logo.svg" width={150} height={50} alt="logo" /> */}
              <span className="inline-grid">
                <span
                  className="pointer-events-none col-start-1 row-start-1 
								bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] 
								bg-clip-text blur-xl [transform:translate3d(0,0,0)] 
								[-webkit-text-fill-color:transparent] 
								before:content-[attr(data-text)] 
								[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                  aria-hidden="true"
                  data-text="SNGIST IEDC"
                ></span>
                <span
                  className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 
								bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] 
								bg-clip-text [-webkit-text-fill-color:transparent] 
								[&amp;::selection]:bg-blue-700/20 
								[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                >
                  SNGIST IEDC
                </span>
              </span>
            </Link>
          </button>
        </div>

        <div className="navbar-center">
          <div className="hidden md:flex">
            <Link className="btn btn-ghost text-[1rem]" href={"/about"}>
              About
            </Link>
            <Link className="btn btn-ghost text-[1rem]" href={"/execom"}>
              Execom
            </Link>
            <Link className="btn btn-ghost text-[1rem]" href={"/governance"}>
              Governance
            </Link>
            <Link className="btn btn-ghost text-[1rem]" href={"/news"}>
              News
            </Link>
            <Link className="btn btn-ghost text-[1rem]" href={"/events"}>
              Events
            </Link>
            <Link className="btn btn-ghost text-[1rem]" href={"/achievements"}>
              Achievements
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </button>
          <div className="hidden md:flex">
          <button className="btn btn-ghost btn-circle">
          <Link href="https://www.instagram.com/iedc_sngist/" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 448 512"
                            className="fill-current"
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </Link>
          </button>
          <button className="btn btn-ghost btn-circle">
          <Link href="https://www.facebook.com/iedcsngist?mibextid=ZbWKwL" target="_blank">
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </Link>
          </button>
          <button className="btn btn-ghost btn-circle">
          <Link href="https://www.youtube.com/@iedcsngist" target="_blank" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </Link>
          </button>
          </div>
          <button className="flex items-center md:mr-4 ml-1">
            <div className="bg-accent text-accent-content px-3 py-2 rounded-lg hover:bg-accent-content hover:text-accent">
              Join us
            </div>
          </button>

          <button className="md:hidden">
            <div className="drawer">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content font-bold">
                  {/* Sidebar content here */}
                  <h1 className="text-xl py-3">SNGIST IEDC</h1>
                  <Image
                    className="mx-auto pb-4"
                    src={"/logo.svg"}
                    alt={"SNGIST IEDC logo"}
                    width={120}
                    height={50}
                  ></Image>
                  <hr className="pb-3" />
                  <div className="flex flex-col justify-center items-center">
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link href={"/execom"}>Execom</Link>
                    </li>
                    <li>
                      <Link href={"/governance"}>Governance</Link>
                    </li>
                    <li>
                      <Link href={"/news"}>News</Link>
                    </li>
                    <li>
                      <Link href={"/events"}>Events</Link>
                    </li>
                    <li>
                      <Link href={"/achievements"}>Achievements</Link>
                    </li>
                    
                    <li className="flex flex-row">
                     <Link href="https://www.instagram.com/sngist_iedc" target="_blank">
                        <Image src="/insta.svg" width={27} height={27} alt="YouTube" className=" w-5 h-5 m-2"/>
                     </Link>
                     <Link href="https://www.facebook.com/iedcsngist?mibextid=ZbWKwL" target="_blank">
                        <Image src="/facebook.svg" width={27} height={27} alt="Facebook" className=" w-5 h-5 m-2"/>
                     </Link>
                     <Link href="https://www.youtube.com/@iedcsngist" target="_blank">
                        <Image src="/youtube.svg" width={27} height={27} alt="YouTube" className=" w-5 h-5 m-2"/>
                     </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
};

export default Navbar;
