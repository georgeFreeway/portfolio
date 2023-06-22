import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Socials = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} color='black' />
                </>
            ),
            href: 'https://www.linkedin.com/in/george-okafor-1b5006189/',
            style: 'rounded-r-md',
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} color='black' />
                </>
            ),
            href: 'https://github.com/georgeFreeway',
        },
        {
            id: 3,
            child: (
                <>
                    Download Resume <BsFillPersonLinesFill size={30} color='black' />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map((link) => (
                    <li
                        key={link.id}
                        className={
                            'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
                            link.style
                        }
                    >
                        <a
                            href={link.href}
                            className="flex justify-between items-center w-full text-black"
                            download={link.download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Socials
