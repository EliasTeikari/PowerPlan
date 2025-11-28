import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <h1 className="text-bg-secondary p-3 d-flex justify-content-center">
                {" "}
                WORKOUTS
            </h1>
            <div className="d-flex">
                <Link
                    to="/push"
                    type="button"
                    className="btn btn-light btn-lg p-2 flex-fill"
                >
                    PUSH
                </Link>
                <Link
                    to="/pull"
                    type="button"
                    className="btn btn-light btn-lg p-2 flex-fill"
                >
                    PULL
                </Link>
                <Link
                    to="/legs"
                    type="button"
                    className="btn btn-light btn-lg p-2 flex-fill"
                >
                    LEGS
                </Link>
                <Link
                    to="/arms"
                    type="button"
                    className="btn btn-light btn-lg p-2 flex-fill"
                >
                    ARMS
                </Link>
            </div>
        </>
    );
}

export default App;
