import { useQuery } from "@tanstack/react-query";
import { userAuth } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {

    const {user} = useContext(userAuth)
    const {id} = useParams()

    const {data: userData} = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const respons = await fetch(`https://life-flow-server-ten.vercel.app/users`);
            const data = await respons.json();
            return data;
        }
    })

    
    // const currentUser = userData.find(user => user?_id ==  id)
    const currentUser = userData?.find(user => user?._id === id);
    
    console.log(currentUser);

    return (
        <div className="bg-slate-100 w-full p-8 md:p-24">
           <h2 className="text-4xl text-black "> Welcome To Your Profile</h2>
        </div>
    )
}

export default Profile;