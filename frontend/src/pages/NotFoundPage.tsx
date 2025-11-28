import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <h1>Not Found Page</h1>
            <Link to={"/"}>
                <button>Go Back Home</button>
            </Link>
        </>
    );
}

export default NotFoundPage;
