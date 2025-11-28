import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <div className="full-page bg-black text-white">
                <h1 className="text-white p-3 d-flex justify-content-center">
                    {" "}
                    WORKOUTS
                </h1>
                <div className="d-flex flex-column m-4">
                    <Link
                        to="/push"
                        type="button"
                        className="btn btn-light btn-lg p-5 mb-3"
                    >
                        PUSH
                    </Link>
                    <Link
                        to="/pull"
                        type="button"
                        className="btn btn-light btn-lg p-5 mb-3"
                    >
                        PULL
                    </Link>
                    <Link
                        to="/legs"
                        type="button"
                        className="btn btn-light btn-lg p-5 mb-3"
                    >
                        LEGS
                    </Link>
                    <Link
                        to="/arms"
                        type="button"
                        className="btn btn-light btn-lg p-5 mb-3"
                    >
                        ARMS
                    </Link>
                </div>
            </div>
        </>
    );
}

export default App;
