import React from 'react';

const Education = () => {
    const education = [
        {
            id: 1,
            course: 'Information System Security',
            certification: 'Masters in System Security',
            school: 'Southern Alberter Institute of Technology, Canada',
            year: '2022 - DATE',
            status: 'Ongoing'
        },
        {
            id: 2,
            course: 'Business Management',
            certification: 'Bachelor of Sciences (B.Sc.)',
            school: 'Bells University of Technology, Ogun State, Nigeria',
            year: '2019',
            status: 'Completed'
        },
        {
            id: 3,
            course: '',
            certification: 'CFP - Certified Financial Planner',
            school: '',
            year: '2019',
            status: 'Completed'
        },
        {
            id: 4,
            course: '',
            certification: 'Certificate of Commitment to Purpose for Emerging Entrepreneur',
            school: 'Flow Startup, Nigeria',
            year: '2019',
            status: 'Completed'
        },
        {
            id: 5,
            course: '',
            certification: 'Certification in New Horizon CRM (Customer Relationship Management)',
            school: 'Bells University of Technology, Ogun State, Nigeria',
            year: '2018',
            status: 'Completed'
        },
        {
            id: 6,
            course: '',
            certification: 'Certification on New Horizon (CompTIA + Project Management)',
            school: 'Bells University of Technology, Ogun State, Nigeria',
            year: '2018',
            status: 'Completed'
        },
        {
            id: 7,
            course: '',
            certification: 'Diploma certification in Latin',
            school: 'Saint Augustine Seminary Ezzamgbo, Ebonyi State, Nigeria',
            year: '2014',
            status: 'Completed'
        },
        {
            id: 8,
            course: '',
            certification: 'Certification in Computer Appreciation',
            school: 'AFRIHUB, Nigeria',
            year: '2014',
            status: 'Completed'
        },
    ]
    return (
        <div
            data-name="education"
            className="w-full py-32 md:h-screen bg-gradient-to-b from-black to-gray-800 text-white"
            id="education"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Education
                    </p>
                    <p className="py-6 text-gray-500">Here is my Educational Background and Qualifications</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {education.map((items) => (
                        <div key={items.id} className="shadow-md shadow-gray-600 rounded-lg p-4">
                            <div className="">
                                <p>{items.course}</p>
                                <p>{items.school}</p>
                                <p>{items.certification}</p>
                                <p>{items.year}</p>
                                <p>{items.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education;
