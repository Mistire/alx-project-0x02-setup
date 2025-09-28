import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header