import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import swal from "sweetalert";
import { userAuth } from "../../Provider/AuthProvider";


const CreateDonationRequest = () => {
    const { user } = useContext(userAuth); // Assuming user information is available from context
    const [error, setError] = useState('');

    // Fetch district data
    const { data: districtData, isError, isLoading } = useQuery({
        queryKey: ["districtData"],
        queryFn: async () => {
            const response = await fetch('https://life-flow-server-ten.vercel.app/district');
            const data = await response.json();
            return data; // Adjust this based on your actual response structure
        }
    });

    // Fetch Upazila data
    const { data: upazilaData, isError: upazilaError, isLoading: upazilaLoading } = useQuery({
        queryKey: ["upazilaData"],
        queryFn: async () => {
            const response = await fetch('https://life-flow-server-ten.vercel.app/upazila');
            const data = await response.json();
            return data; // Adjust this based on your actual response structure
        }
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        setError('');

        const recipientName = e.target.recipientName.value;
        const recipientDistrict = e.target.recipientDistrict.value;
        const recipientUpazila = e.target.recipientUpazila.value;
        const hospitalName = e.target.hospitalName.value;
        const fullAddress = e.target.fullAddress.value;
        const donationDate = e.target.donationDate.value;
        const donationTime = e.target.donationTime.value;
        const requestMessage = e.target.requestMessage.value;

        // Construct donation request data
        const donationRequestData = {
            requesterName: user.name, // Assuming user information is available
            requesterEmail: user.email, // Assuming user information is available
            recipientName,
            recipientDistrict,
            recipientUpazila,
            hospitalName,
            fullAddress,
            donationDate,
            donationTime,
            requestMessage,
            donationStatus: 'pending', // Default status
        };

        // Send donation request data to the server
        const serverResponse = await fetch('https://life-flow-server-ten.vercel.app/donation-requests', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donationRequestData),
        });

        // Check if server response is successful
        if (!serverResponse.ok) {
            const errorData = await serverResponse.json();
            throw new Error(errorData.message || "Error creating donation request");
        }

        // Handle success (you might want to redirect or show a success message)
        swal("Success!", "Donation request created successfully!", "success");
    };

    return (
        <section className="px-8 py-16 md:p-24 bg-slate-100  items-center justify-center gap-8">
            <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="font-DM text-4xl">
                    Join <span className="text-red-600">LifeFlow Connect </span>
                </h2>
                <p className="py-6 font-Josefin">
                    Start your journey with LifeFlow Connect by creating a donation request.
                    Fill in the details below to make a positive impact in our blood donation community.
                </p>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <div className=" bg-slate-300 p-16 rounded-lg ">
                    <form onSubmit={handleRegister} className="grid md:grid-cols-2 gap-6">
                        <input className="w-full py-2 px-6 rounded-lg" type="text" name="recipientName" placeholder="Recipient Name" required />
                        <select className="w-full py-2 px-6 rounded-lg" name="recipientDistrict" required>
                            <option value="">Select District</option>
                            {isLoading && <option disabled>Loading...</option>}
                            {isError && <option disabled>Error loading districts</option>}
                            {districtData?.map((district) => (
                                <option key={district.id} value={district.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>

                        <select className="w-full py-2 px-6 rounded-lg" name="recipientUpazila" required>
                            <option value="">Select Upazila</option>
                            {upazilaLoading && <option disabled>Loading...</option>}
                            {upazilaError && <option disabled>Error loading Upazila data</option>}
                            {upazilaData?.map((upazila) => (
                                <option key={upazila.id} value={upazila.name}>
                                    {upazila.name}
                                </option>
                            ))}
                        </select>

                        <input className="w-full py-2 px-6 rounded-lg" type="text" name="hospitalName" placeholder="Hospital Name" required />
                        <input className="w-full py-2 px-6 rounded-lg" type="text" name="fullAddress" placeholder="Full Address" required />
                        <input className="w-full py-2 px-6 rounded-lg" type="date" name="donationDate" required />
                        <input className="w-full py-2 px-6 rounded-lg" type="time" name="donationTime" required />
                        <textarea className="w-full py-2 px-6 rounded-lg" name="requestMessage" placeholder="Request Message" required />
                        <button className="w-full py-2 px-6 rounded-lg bg-red-600 text-white">Create Donation Request</button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateDonationRequest;
