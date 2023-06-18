import React from 'react';

const Hero = () => {
    return (
        <div className='h-screen md:flex justify-center'>
            {/* first box */}
            <div>
                <img src='/images/obi1.jpg' />
            </div>
            {/* second box */}
            <div className='p-3'>
                <h1 className='text-3xl'>Hi There, I'm a Cyber-Security Expert</h1>
                <p className=''>I am a passionate and detail-oriented professional seeking a challenging position in the field of IT Cyber Security. Leveraging my strong technical skills, experience with Wireshark, C programming for file manipulation, and expertise in identifying vulnerabilities, I am dedicated to safeguarding digital assets and ensuring the integrity and confidentiality of sensitive information. With a solid understanding of Router Rules, VPNs, and switches, I aim to contribute to organizations by implementing robust security measures and mitigating cyber threats.</p>
            </div>
        </div>
    )
}

export default Hero;