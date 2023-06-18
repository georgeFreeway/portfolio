import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false)
    const links = [
        { id: 1, link: 'home', href: '#home' },
        { id: 2, link: 'about', href: '#about' },
        { id: 3, link: 'education', href: '#education' },
        { id: 4, link: 'experience', href: '#experience' },
        { id: 5, link: 'contact', href: '#contact' },
    ]
    return (
        <nav className="flex justify-between items-center w-full h-20 text-white px-4 fixed bg-gray-900">
            <div>
                <h1 className="text-3xl font-signature ml-2">PASCHAL ENECHUKWU</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map((link) => (
                    <li
                        key={link.id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        <Link to={link.link} smooth duration={500}>
                            {link.link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                onClick={() => setNav(!nav)}
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                        >
                            <Link
                                to={link.link}
                                smooth
                                duration={500}
                                onClick={() => setNav(!nav)}
                            >
                                {link.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar;
