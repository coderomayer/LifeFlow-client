import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const UpdateUser = () => {
    const [error, setError] = useState("");
    const [updateMessage, setUpdateMessage] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();

    // Use tanstack/react-query's useQuery to fetch user data
    const { data: userData } = useQuery({
        queryKey: ["userData", id],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/users`);
            const data = await response.json();
            return data;
        },
    });

    // Find the current user based on the user ID
    const currentUser = userData?.find((user) => user?._id === id);


    // Fetch district data
    const { data: districtData, isError, isLoading } = useQuery({
        queryKey: ["districtData"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/district");
            const data = await response.json();
            return data; // Adjust this based on your actual response structure
        },
    });

    // Fetch Upazila data
    const { data: upazilaData, isError: upazilaError, isLoading: upazilaLoading } = useQuery({
        queryKey: ["upazilaData"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/upazila");
            const data = await response.json();
            return data; // Adjust this based on your actual response structure
        },
    });

    const handleUpdateInfo = async (e) => {
        e.preventDefault();

        setError("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const bloodGroup = e.target.bloodGroup.value;
        const district = e.target.district.value;
        const upazila = e.target.upazila.value;
        const fileInput = e.target.file;

        // Password validation
        if (password.length < 6) {
            setError("Password should be at least 6 characters.");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError("Password must include at least one uppercase letter.");
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError("Password must include at least one special character.");
            return;
        }

        // Check if a file is selected
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append("image", file);

            try {
                // Upload image to ImgBB
                const imgBbResponse = await fetch(
                    "https://api.imgbb.com/1/upload?key=e1f54557917787c8f713e52f269624d6",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const imgBbData = await imgBbResponse.json();

                // Assuming ImgBB response contains a "url" field
                const imageUrl = imgBbData.data.url;

                // Construct user data
                const userData = {
                    name,
                    email,
                    password,
                    bloodGroup,
                    district,
                    upazila,
                    file: imageUrl,
                };

                // Update user data on the server
                const serverResponse = await fetch(`http://localhost:3000/users/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });

                // Check if server response is successful
                if (!serverResponse.ok) {
                    const errorData = await serverResponse.json();
                    throw new Error(errorData.message || "Error updating user data on the server");
                }

                // Continue with the rest of the update logic
                console.log("Image uploaded successfully:", imageUrl);
                setUpdateMessage("User Updated Successfully");
            } catch (error) {
                console.error("Error during update:", error);
                setError("Error during update. Please try again.");
                return;
            }
        }
    };

    return (
        <section className="px-8 py-16 md:p-24 bg-slate-100 md:flex items-center justify-center gap-8">
            <div className="flex-1 flex flex-col items-center justify-center ">
                <h2 className="font-DM text-4xl ">
                    Update Your <span className="text-red-600"> LifeFlow Connect</span> Profile
                </h2>
                <p className="py-6 font-Josefin ">
                    Modify your details below to keep your LifeFlow Connect profile up-to-date.
                </p>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <div className=" bg-slate-300 p-16 rounded-lg ">
                    <form onSubmit={handleUpdateInfo} className="flex flex-col gap-6">
                        <input
                            className="w-full py-2 px-6 rounded-lg"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            defaultValue={currentUser?.name}
                            required
                        />
                        <input
                            className="w-full py-2 px-6 rounded-lg"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            disabled
                            defaultValue={currentUser?.email}
                            required
                        />
                        <input
                            className="w-full block py-2 px-6 rounded-lg border bg-white "
                            type="file"
                            name="file"

                            required
                        />
                        <select
                            className="w-full py-2 px-6 rounded-lg"
                            name="bloodGroup"

                            required
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <select
                            className="w-full py-2 px-6 rounded-lg"
                            name="district"

                            required
                        >
                            <option value="">Select District</option>
                            {isLoading && <option disabled>Loading...</option>}
                            {isError && <option disabled>Error loading districts</option>}
                            {districtData?.map((district) => (
                                <option key={district.id} value={district.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                        <select
                            className="w-full py-2 px-6 rounded-lg"
                            name="upazila"

                            required
                        >
                            <option value="">Select Upazila</option>
                            {upazilaLoading && <option disabled>Loading...</option>}
                            {upazilaError && <option disabled>Error loading Upazila data</option>}
                            {upazilaData?.map((upazila) => (
                                <option key={upazila.id} value={upazila.name}>
                                    {upazila.name} {/* Corrected property */}
                                </option>
                            ))}
                        </select>
                        <input
                            className="w-full py-2 px-6 rounded-lg"
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            defaultValue={currentUser?.password}
                            required
                        />
                        <button className="w-full py-2 px-6 rounded-lg bg-red-600 text-white">
                            Update your Info
                        </button>
                        <div>
                            {error && <p className="px-4 py-2 rounded-lg bg-red-700 text-white">{error}</p>}
                            {updateMessage && (
                                <p className="px-4 py-2 rounded-lg bg-lime-700 text-white">{updateMessage}</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateUser;
