import React from 'react'

const Experience = () => {
    const experiences = [
        {
            id: 1,
            name: 'Deep Blue Energy Service Limited',
            position: 'Business Development Executive',
            date: '6th Nov 2021 - 21st August 2022',
            duties: [
                { id: 1, duty: 'Identified and pursued new business opportunities by collaborating with the team to package tender documents effectively.' },
                { id: 2, duty: "Conducted follow-ups on tenders to determine the company's position on specific projects." },
                { id: 3, duty: "Conducted market research and established relationships with prospective clients who expressed interest in our services." },
                { id: 4, duty: "Developed compelling proposals and presentations to secure new business, ensuring alignment with client specifications and addressing their specific requirements." },
                { id: 5, duty: "Collaborated with other departments to ensure the use of original documents in bid packaging and the timely renewal of outdated documents and business portals." },
                { id: 6, duty: "Negotiated business deals on behalf of the company, effectively promoting its business opportunities at various events." },
                { id: 7, duty: "Stayed updated on industry developments, networking with key individuals and accessing relevant industry documents to remain well-informed about the industry in which the company operates." }
            ]
        },
        {
            id: 2,
            name: 'Deep Blue Energy Service Limited',
            position: 'Content Creator',
            date: '5th April 2020 - 2nd August 2020',
            duties: [
                { id: 1, duty: 'Conducted thorough research and brainstorming to develop engaging content for social media platforms and public-facing fliers.' },
                { id: 2, duty: "Wrote, edited, and proofread various articles and content for social media publications, ensuring accuracy and consistency." },
                { id: 3, duty: "Managed the company's Twitter account, promptly responding to customer inquiries and providing feedback on services. Directed technical issues to the appropriate personnel for resolution." },
                { id: 4, duty: "Collaborated with other departments to gather information, enabling the team to create compelling content for the monthly newsletter." },
                { id: 5, duty: "Made a significant impact on DBESL's online presence, increasing it from 14% to 44.5% statistically." },
            ]
        },
        {
            id: 3,
            name: 'Deep Blue Energy Service Limited',
            position: 'Admin and HR',
            date: '14th Dec 2019 - 2nd April 2020',
            duties: [
                { id: 1, duty: 'Maintained accurate physical and digital personnel records for all staff members and clients.' },
                { id: 2, duty: "Demonstrated strong management skills by regularly updating the internal database with new hire information." },
                { id: 3, duty: "Facilitated the onboarding process for new employees, providing them with important information about the company." },
                { id: 4, duty: "Fostered positive employee relations, enhancing understanding of company policies among staff members." },
                { id: 5, duty: "Managed employee payroll and timing to ensure timely and accurate rewards and compensation." },
                { id: 6, duty: "Ensured compliance with relevant laws and regulations, particularly regarding safety and health." },
                { id: 7, duty: "Planned and organized employee events, including workshops, fun events, and work-related support activities, with the aim of motivating staff." },
                { id: 8, duty: "As a front desk attendant, developed self-confidence and maintained a high level of professionalism when engaging with clients." },
            ]
        },
        {
            id: 4,
            name: 'Ayolisa Company Limited',
            position: 'Finance Trainee',
            date: 'May - September 2018',
            duties: [
                { id: 1, duty: 'Assisted in the preparation and analysis of financial statements, including income statements, balance sheets, and cash flow statements.' },
                { id: 2, duty: "Conducted financial data entry and reconciliation tasks, ensuring accuracy and adherence to accounting principles and company policies." },
                { id: 3, duty: "Contributed to the budgeting and forecasting process by collecting and analyzing financial data, identifying trends, and providing insights to support the development of accurate and realistic financial plans." },
                { id: 4, duty: "Provided support in the accounts payable and accounts receivable functions by verifying invoices, processing payments, and monitoring outstanding balances to ensure timely and accurate payment." },
                { id: 5, duty: "Collaborated with the finance team to perform financial analysis, variance analysis, and cost control activities, contributing to the identification of opportunities for process improvements and cost-saving measures." },
            ]
        },
        {
            id: 5,
            name: 'Fair Money Apps',
            position: 'Marketer',
            date: 'May - September 2019',
            duties: [
                { id: 1, duty: 'Developed and executed comprehensive marketing strategies to drive user acquisition, retention, and engagement, resulting in consistent growth in the user base and revenue generation. Implemented the use of incentives to attract and retain users.' },
                { id: 2, duty: "Conducted market research and competitor analysis to identify emerging trends, user needs, and market opportunities. Utilized data-driven insights to inform marketing campaigns and optimize product positioning. Utilized point-of-sale (POS) systems for data gathering." },
                { id: 3, duty: "Collaborated effectively with the entire team to reach the target audience and achieve marketing objectives." },
                { id: 4, duty: "Analyzed and monitored user behavior through questionnaires and other methods to optimize marketing spend and maximize return on investment." },
                { id: 5, duty: "Stayed up to date with industry best practices, new marketing technologies, and emerging digital trends. Leveraged mobile apps for carrying out transactions and incorporating them into marketing strategies. " },
            ]
        }
    ]
    return (
        <div
            data-name="experience"
            className="w-full py-18 bg-gradient-to-b from-gray-800 to-black text-white"
            id="experience"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Experience
                    </p>
                    <p className="py-6 text-gray-500">Here is my Work Experience</p>
                </div>

                <div className="w-full">
                    {experiences.map((xp) => (
                        <div
                            key={xp.id}
                            className="shadow-md hover:scale-105 duration-500 py-2 shadow-gray-600 rounded-lg p-4 mb-5"
                        >

                            <h1 className='text-3xl mb-3'>Company Name - {xp.name}</h1>
                            <p className='mb-3'>Position - {xp.position}</p>
                            <p className='mb-3'>Date - {xp.date}</p>
                            {xp.duties.map((duty, index) => (
                                <div>
                                    <p className='mb-3'>{index} - {duty.duty}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
