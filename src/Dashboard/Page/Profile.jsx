import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { userAuth } from '../../Provider/AuthProvider';

const Profile = () => {

    const {user} = useContext(userAuth)

    // Use tanstack/react-query's useQuery to fetch user data
    const { data: userData } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: async () => {
            const response = await fetch(`https://life-flow-server-ten.vercel.app/users/${user?.email}`);
            const data = await response.json();
            return data;
        }
    });




    return (
        <div className='w-full'>

            <div className="bg-red-600 w-full p-8 md:p-24">
            <h2 className="text-4xl text-white font-DM">Welcome <br /> <span className="font-semibold">{userData?.name}</span> </h2>
            </div>

            {/* Profile Information Section */}
            <div className="bg-slate-100 w-full p-8 md:p-24">
               <div className='bg-slate-400 p-8 rounded-lg max-w-sm'>
                    <div className='flex items-center justify-center'>
                        <img className='w-16 h-16 rounded-full object-cover' src={userData?.file} alt="" />
                    </div>

                    <div className='p-6 flex flex-col gap-4'>
                        <h2 className='px-4 py-2 bg-slate-200 rounded font-semibold'>{userData?.name}</h2>
                        <h2 className='px-4 py-2 bg-slate-200 rounded '>{userData?.email}</h2>
                        <h2 className='px-4 py-2 bg-slate-200 rounded font-semibold'>{userData?.bloodGroup}</h2>
                        <h2 className='px-4 py-2 bg-slate-200 rounded font-semibold'>{userData?.upazila}</h2>
                        <h2 className='px-4 py-2 bg-slate-200 rounded font-semibold'>{userData?.district}</h2>

                        <Link className='px-4 py-2 bg-lime-800 rounded font-mono text-xs text-center text-white '  to={`/dashboard/update-user/${userData?._id}`}>Update Profile Information</Link>

                    </div>
               </div>
            </div>

           
            
        </div>
    );
}

export default Profile;
