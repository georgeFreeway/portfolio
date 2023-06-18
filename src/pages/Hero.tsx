import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div
            data-name="home"
            className="py-32 w-full bg-gradient-to-b from-black via-black to-gray-800"
            id="home"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white ">
                        Cyber-Security Expert
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a passionate and detail-oriented professional seeking a challenging position in the field of IT Cyber Security. Leveraging my strong technical skills, experience with Wireshark, C programming for file manipulation, and expertise in identifying vulnerabilities, I am dedicated to safeguarding digital assets and ensuring the integrity and confidentiality of sensitive information. With a solid understanding of Router Rules, VPNs, and switches, I aim to contribute to organizations by implementing robust security measures and mitigating cyber threats.
                    </p>

                    <div className="mb-5">
                        <Link
                            to="experience"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            My Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src='/images/obi2.jpg'
                        alt="fix-later"
                        className="rounded-2xl mx-auto w2/3 md:w-96"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
