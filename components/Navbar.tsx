import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className='logo'>
                    <Image src="/icons/logo.png" alt="Logo" width={50} height={50} />
                    <p>DevEvents</p>
                </Link>
                <ol className='flex-center space-x-5'>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ol>
            </nav>
        </header>
    )
}

export default Navbar