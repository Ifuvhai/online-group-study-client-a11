import React from 'react';

const Feature = () => {
    return (
        <div>
            <section className="light:bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    {/* Section Title */}
                    <h2 className="text-4xl font-bold light:text-gray-800 mb-4">Why Choose Us?</h2>
                    <p className="text-lg light:text-gray-600 mb-12">
                        Explore the amazing features that make our platform perfect for online group studies and collaboration.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="light:bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                            <div className="w-16 h-16 mx-auto mb-4">
                                <img src="https://i.ibb.co.com/L55bDs8/rectangle-2-6.png" alt="Collaboration Icon" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold  mb-2">Collaborative Assignments</h3>
                            <p className="">
                                Create, share, and work on assignments together with your group seamlessly.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="light:bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                            <div className="w-16 h-16 mx-auto mb-4">
                                <img src="https://i.ibb.co.com/5sC2qms/Copy-of-Hand-held-Standard-Landscape-closed-Kenya.jpg" alt="Feedback Icon" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold  mb-2">Peer Review</h3>
                            <p className="">
                                Get constructive feedback and grades from your peers for constant improvement.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="light:bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                            <div className="w-16 h-16 mx-auto mb-4">
                                <img src="https://i.ibb.co.com/28ndfMZ/Speakers-NEW-4-e1631918280236.jpg" alt="User-friendly Icon" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold  mb-2">User-Friendly Design</h3>
                            <p className="">
                                Navigate through the platform effortlessly with our clean and simple interface.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="light:bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                            <div className="w-16 h-16 mx-auto mb-4">
                                <img src="https://i.ibb.co.com/5s2YMzX/rectangle-2-4.png" alt="Cloud Access Icon" className="w-full h-full  rounded-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold  mb-2">Cloud Integration</h3>
                            <p className="">
                                Easily submit assignments using Google Docs or other cloud platforms.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12">
                        <a href="/features" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                            Explore More Features
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;
