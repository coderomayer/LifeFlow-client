import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { userAuth } from "./AuthProvider";



const PrivetRout = ({children}) => {

    const {user, loading} = useContext(userAuth);
    const location = useLocation()

    if (loading) {
        return <span>Loading....</span>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivetRout;