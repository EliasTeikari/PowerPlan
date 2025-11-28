import { Link } from "react-router-dom";
import Dither from "./components/Dither";

function App() {
    return (
        <>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <Dither
                    waveColor={[0.5, 0.5, 0.5]}
                    disableAnimation={false}
                    enableMouseInteraction={false}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.05}
                />
                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
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
            </div>
        </>
    );
}

export default App;
