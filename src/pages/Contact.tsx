import React from 'react'

const Contact = () => {
    return (
        <div
            data-name="contact"
            className="w-full py-28 md:h-screen bg-gradient-to-b from-black to-gray-800 text-white"
            id="contact"
        >
            <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6 text-gray-500">Let us get in touch</p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        className="flex flex-col w-full md:w1/2"
                        action="https://getform.io/f/9d0481ad-1360-4d6e-b968-c0669af99217"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your Email Address"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows={10}
                            className="p-2 bg-transparent border-2 rounded-md text-white 
              focus:outline-none"
                            placeholder="Enter Message..."
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Get In Touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
