import { useQuery } from "@tanstack/react-query";

const Profile = () => {

    const {data: userData} = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const respons = await fetch('http://localhost:3000/users');
            const data = await respons.json();
            return data;
        }
    })

    console.log(userData);

    return (
        <div className="bg-slate-100 w-full p-8 md:p-24">
           <h2 className="text-4xl text-black "> Welcome To Your Profile</h2>
        </div>
    )
}

export default Profile;