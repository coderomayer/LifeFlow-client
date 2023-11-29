import { Link } from "react-router-dom";
import Blood from "../assets/blood.svg"
import flat from "../assets/flat.svg"
import user from "../assets/user.svg"
import donation from "../assets/donation.svg"
import how from "../assets/how.svg"
import contact from "../assets/contact.svg"

const Home = () => {
    return (
        <div>

            {/* Banner */}
            <section className="lg:flex gap-10 p-8 md:p-24">
                <div className="flex-1">

                    <h2 className="font-DM text-4xl  md:text-6xl">Empower Lives Through <span className="text-red-600">Blood</span> Donation</h2>

                    <p className="py-6 font-Josefin ">At LifeFlow Connect, we believe in the power of connection and compassion. Join us in making a difference by becoming a donor or finding the support you need. Every drop counts, and together, we can create a life-changing impact through the gift of blood.</p>

                    <Link to='/search-donors' className="bg-red-600 text-white text-xs py-2 px-6 rounded font-DM">Search Donors</Link>
                </div>

                <div className="flex-1">
                    <img src={Blood} alt="" />
                </div>

            </section>

            {/* Featured */}

            <section className="px-8 py-16 md:p-24 bg-red-600 flex flex-col items-center justify-center text-center">

                <h2 className="font-DM text-4xl md:text-6xl  text-white">Why Choose <br /> <span className="font-semibold">LifeFlow</span> Connect?</h2>

                <p className="text-slate-50 py-4">Discover the Features That Make a Difference</p>

                {/* Card */}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">

                    <div className="bg-white p-6 rounded-lg max-w-xs hover:shadow-md ">

                        <div className="bg-slate-200 rounded-lg p-6 flex items-center justify-center">
                            <img className="max-w-[150px]" src={flat} alt="" />
                        </div>

                        <div className="p-6">
                            <h2 className="font-Josefin  text-3xl">Connect with Donors and Recipients</h2>

                            <p className="-50 py-4">Our platform seamlessly connects donors with those in need. Whether you're looking to give or receive, LifeFlow Connect ensures a direct and efficient connection, making the blood donation process easier than ever.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg max-w-xs hover:shadow-md ">

                        <div className="bg-slate-200 rounded-lg p-6 flex items-center justify-center">
                            <img className="" src={donation} alt="" />
                        </div>

                        <div className="p-6">
                            <h2 className="font-Josefin  text-3xl">Real-time Donation Requests</h2>

                            <p className="-50 py-4">Experience the power of real-time donation requests. Donors can view and respond to requests instantly, ensuring timely assistance to those in urgent need. Stay informed, stay connected.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg max-w-xs hover:shadow-md ">

                        <div className="bg-slate-200 rounded-lg p-6 flex items-center justify-center">
                            <img className="max-w-[150px]" src={user} alt="" />
                        </div>

                        <div className="p-6">
                            <h2 className="font-Josefin  text-3xl">User-Friendly Dashboard</h2>

                            <p className="-50 py-4">Navigate effortlessly with our user-friendly dashboard. Manage your profile, view donation history, and access essential features with ease. Your journey with LifeFlow Connect is designed for simplicity.</p>
                        </div>
                    </div>

                </div>


            </section>

            {/* How it work */}

            <section className="px-8 py-16 md:p-24 md:flex gap-10  items-center justify-center ">

                <div className="flex-1">
                    <h2 className="font-DM text-4xl  md:text-6xl">How It <span className="text-red-600">Works:</span></h2>

                    <p className="py-6">LifeFlow Connect operates on a seamless three-step process. First, register by providing your email, name, and blood group. Next, explore real-time donation requests and connect directly with donors or recipients. Finally, coordinate details and make a meaningful impact through secure and straightforward donation processes. Join LifeFlow Connect today to effortlessly contribute to the world of blood donation and empower lives.</p>

                    <p className=" font-semibold">
                        ✓ Register <br />
                        ✓ Explore Requests <br />
                        ✓ Connect and Donate <br />
                    </p>

                    <p className="py-4">
                        Join LifeFlow Connect in three simple steps. Your contribution matters!
                    </p>

                </div>

                <div className="flex-1">
                    <img src={how} alt="" />
                </div>

            </section>

            {/* Contact Us */}

            <section className="px-8 py-16 md:p-24 bg-slate-200 md:flex gap-12 items-center justify-center">

                <div className="flex-1">
                    <img src={contact} alt="" />
                </div>

                <div className="flex-1">

                    <h2 className="font-DM text-4xl md:text-6xl">Reach Out to  <br /> <span className="font-semibold text-red-600">LifeFlow Connect</span></h2>

                    <p className="py-4">We're here to assist you. Feel free to contact us for any inquiries or assistance.</p>

                    <form className="flex flex-col gap-4">
                        <input className=" w-full p-2 border border-red-600 rounded-lg" type="text" placeholder="Your Name" />
                        <input className=" w-full p-2 border border-red-600 rounded-lg" type="email" placeholder="Your Email" />
                        <textarea className=" w-full p-2 border border-red-600 rounded-lg"></textarea>
                        <button className=" w-full p-2 bg-red-600 text-white rounded-lg">Send Message</button>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default Home;