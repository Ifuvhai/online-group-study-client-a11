import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import FAQSection from './FAQSection';
import HowItWorks from './HowItWorks';
import AssignmentCard from './AssignmentCard';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    loadedData.map(data => <AssignmentCard key={data._id} data={data}></AssignmentCard>)
                }

            </div>
            <div className="mt-12 text-center">
                <Link to={"/assignments"}>
                <button

className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all"
>
                    Explore More
                </button>
                    </Link>
            </div>
            {/* <AssignmentCard></AssignmentCard> */}
            <HowItWorks></HowItWorks>
            <Feature></Feature>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;