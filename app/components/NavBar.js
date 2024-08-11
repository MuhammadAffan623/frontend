import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
    <header className="text-black body-font">
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  <img src="/job.svg" />
    <span className="ml-3 text-xl">Tailblocks</span>
  </a>
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    {/* <Link legacyBehavior href="/signin"><a className="inline-flex items-center mr-2 bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">Sign In</a></Link> */}
    <Link legacyBehavior href="./signup"><a className="inline-flex items-center mr-2 bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">Sign Up</a></Link>
  </nav>
</div>
</header>
  </div>
  )
}

export default NavBar