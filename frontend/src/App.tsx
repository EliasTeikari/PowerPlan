import { Link } from "react-router-dom";
import Dither from "./components/Dither";

function App() {
    return (
        <>
            <div
                style={{ width: "100%", height: "100vh", position: "relative" }}
            >
                <Dither
                    waveColor={[0.5, 0.5, 0.5]}
                    disableAnimation={false}
                    enableMouseInteraction={false}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.02}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <h1 className="text-white p-5 fw-bold d-flex justify-content-center display-1">
                        {" "}
                        WORKOUTS
                    </h1>
                    <div className="d-flex flex-column m-4">
                        <Link
                            to="/push"
                            type="button"
                            className="btn btn-lg p-5 mb-3 fs-2 fw-bold text-white"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "12px",
                            }}
                        >
                            PUSH
                        </Link>
                        <Link
                            to="/pull"
                            type="button"
                            className="btn btn-lg p-5 mb-3 fs-2 fw-bold text-white"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "12px",
                            }}
                        >
                            PULL
                        </Link>
                        <Link
                            to="/legs"
                            type="button"
                            className="btn btn-lg p-5 mb-3 fs-2 fw-bold text-white"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "12px",
                            }}
                        >
                            LEGS
                        </Link>
                        <Link
                            to="/arms"
                            type="button"
                            className="btn btn-lg p-5 mb-3 fs-2 fw-bold text-white"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "12px",
                            }}
                        >
                            ARMS something different
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
