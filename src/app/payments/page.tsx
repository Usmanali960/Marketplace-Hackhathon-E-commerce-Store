import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="min-h-screen p-6">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-3xl font-medium text-center">GET HELP</h1>
                <div className="mt-4 flex justify-center">
                    <input
                        type="text"
                        placeholder="What can we help you with?"
                        className="border border-gray-300 rounded-full py-2 px-4 w-80"
                    />
                </div>
            </header>

            {/* Main Section */}
            <div className="lg:flex lg:flex-row flex-col">
                <div className="lg:w-3/5">
                    <h2 className="text-xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                    <p className="mb-4">
                        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                    </p>
                    <ul className="pl-6 text-sm mb-4">
                        <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                        <li>If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.</li>
                        <li>Apple Pay</li>
                    </ul>
                    <p className="mb-4">
                        Nike Members can store multiple debit or credit cards for faster checkout. If not a Member, <a href="#" className="text-blue-500 underline">join us today</a>.
                    </p>
                    <div className="my-4">
                        <button className="bg-black text-white py-2 px-6 rounded-full mr-2">JOIN US</button>
                        <button className="bg-black text-white py-2 px-6 rounded-full">SHOP NIKE</button>
                    </div>

                    {/* FAQs */}
                    <section className="mt-8">
                        <h3 className="text-lg font-bold mb-2">FAQs</h3>
                        <details className="mb-4" aria-label="Does my card need international purchases enabled?">
                            <summary className="cursor-pointer font-medium">Does my card need international purchases enabled?</summary>
                            <p className="mt-2 text-gray-600">
                                Yes, some banks may require this. A small transaction fee may apply for international orders.
                            </p>
                        </details>
                        <details className="mb-4" aria-label="Can I pay for my order with multiple methods?">
                            <summary className="cursor-pointer font-medium">Can I pay for my order with multiple methods?</summary>
                            <p className="mt-2 text-gray-600">
                                No, payments cant be split between methods.
                            </p>
                        </details>
                        <details className="mb-4" aria-label="What payment method is accepted for SNKRS orders?">
                            <summary className="cursor-pointer font-medium">What payment method is accepted for SNKRS orders?</summary>
                            <p className="mt-2 text-gray-600">
                                Any accepted credit card.
                            </p>
                        </details>
                    </section>
                </div>

                {/* Contact Section */}
                <div className="lg:w-2/5 mt-8 lg:mt-0">
                    <aside className="bg-white border-gray-300 border-l pl-2">
                        <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
                        <ul>
                            <li className="flex lg:items-center justify-center lg:text-center flex-col mb-4">
                                <i className="bx bx-mobile-alt text-5xl mb-3 mr-4"></i>
                                <span>000 800 919 0566</span>
                                <span>Products & Orders: 24 hours a day, 7 days a week</span>
                                <span>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</span>
                            </li>
                            <li className="flex lg:items-center lg:justify-center lg:text-center flex-col mb-4">
                                <i className="bx bx-comment-dots text-5xl mb-3 mr-4"></i>
                                <span>24 hours a day</span>
                                <span>7 days a week</span>
                            </li>
                            <li className="flex lg:items-center lg:justify-center lg:text-center flex-col mb-4">
                                <i className="bx bx-envelope text-5xl mb-3 mr-4"></i>
                                <span>Well reply within</span>
                                <span>five business days</span>
                            </li>
                            <li className="flex lg:items-center lg:justify-center lg:text-center flex-col mb-4">
                                <i className="bx bxs-location-plus text-5xl mb-3 mr-4"></i>
                                <span>STORE LOCATOR</span>
                                <span>Find Nike retail stores near you</span>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Page;
