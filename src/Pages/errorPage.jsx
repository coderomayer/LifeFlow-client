import { Link } from "react-router-dom";
import errorImage from "../assets/error-page.svg";

const ErrorPage = () => {
    return (
        <main className="flex flex-col items-center justify-center p-8 md:p-24">
            <img className="w-2/4" src={errorImage} alt="Error Illustration" />
            <p>
                Oops! It seems like something went wrong. <br /> Please go back home and try again. <br /> We apologize for any inconvenience. <br />
            </p>

            <h3 className="py-4">
                Please Back to <Link className=" text-orange-800 border  text-xs px-4 py-2 rounded" to="/">  Home </Link>
            </h3>

        </main>
    );
};

export default ErrorPage;
