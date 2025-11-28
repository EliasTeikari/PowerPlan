import { useState } from "react";
import "../App.css";
import Dither from "../components/Dither";
import bayesianCurl from "../assets/images/arms-images/Bayesiancurl.png";
import reverseGripCableCurl from "../assets/images/arms-images/ReversegripCablecurl.png";
import tricepPressdown from "../assets/images/arms-images/TricepPressdown.png";
import skullcrushers from "../assets/images/arms-images/skullcrushers.png";
import romanLegRaise from "../assets/images/arms-images/RomanLegraise.png";

interface Exercise {
    name: string;
    image: string;
    warmUpSets: string[];
    workingSets: string[];
}

const exercises: Exercise[] = [
    {
        name: "Bayesian Curl",
        image: bayesianCurl,
        warmUpSets: ["Set 1: 50% weight - 12 reps", "Set 2: 70% weight - 8 reps"],
        workingSets: ["Set 1: 8-12 reps", "Set 2: 8-12 reps", "Set 3: 8-12 reps"]
    },
    {
        name: "Reverse Grip Cable Curl",
        image: reverseGripCableCurl,
        warmUpSets: ["Set 1: 50% weight - 12 reps", "Set 2: 70% weight - 8 reps"],
        workingSets: ["Set 1: 8-12 reps", "Set 2: 8-12 reps", "Set 3: 8-12 reps"]
    },
    {
        name: "Tricep Pressdown",
        image: tricepPressdown,
        warmUpSets: ["Set 1: 50% weight - 12 reps", "Set 2: 70% weight - 8 reps"],
        workingSets: ["Set 1: 8-12 reps", "Set 2: 8-12 reps", "Set 3: 8-12 reps"]
    },
    {
        name: "Skullcrushers",
        image: skullcrushers,
        warmUpSets: ["Set 1: 50% weight - 12 reps", "Set 2: 70% weight - 8 reps"],
        workingSets: ["Set 1: 8-12 reps", "Set 2: 8-12 reps", "Set 3: 8-12 reps"]
    },
    {
        name: "Roman Leg Raise",
        image: romanLegRaise,
        warmUpSets: ["Set 1: 50% weight - 12 reps", "Set 2: 70% weight - 8 reps"],
        workingSets: ["Set 1: 8-12 reps", "Set 2: 8-12 reps", "Set 3: 8-12 reps"]
    }
];

function Arms() {
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    const [exerciseStates, setExerciseStates] = useState<Record<number, {
        warmUpChecked: boolean[];
        workingChecked: boolean[];
        completed: boolean;
    }>>(() => {
        const initialState: Record<number, {
            warmUpChecked: boolean[];
            workingChecked: boolean[];
            completed: boolean;
        }> = {};
        exercises.forEach((exercise, index) => {
            initialState[index] = {
                warmUpChecked: new Array(exercise.warmUpSets.length).fill(false),
                workingChecked: new Array(exercise.workingSets.length).fill(false),
                completed: false
            };
        });
        return initialState;
    });

    const handleWarmUpCheck = (exerciseIndex: number, setIndex: number) => {
        setExerciseStates(prev => ({
            ...prev,
            [exerciseIndex]: {
                ...prev[exerciseIndex],
                warmUpChecked: prev[exerciseIndex].warmUpChecked.map((checked, i) =>
                    i === setIndex ? !checked : checked
                )
            }
        }));
    };

    const handleWorkingCheck = (exerciseIndex: number, setIndex: number) => {
        setExerciseStates(prev => ({
            ...prev,
            [exerciseIndex]: {
                ...prev[exerciseIndex],
                workingChecked: prev[exerciseIndex].workingChecked.map((checked, i) =>
                    i === setIndex ? !checked : checked
                )
            }
        }));
    };

    const handleComplete = (exerciseIndex: number) => {
        setExerciseStates(prev => ({
            ...prev,
            [exerciseIndex]: {
                ...prev[exerciseIndex],
                completed: !prev[exerciseIndex].completed
            }
        }));
    };

    const handlePrevious = () => {
        setCurrentExerciseIndex(prev => (prev > 0 ? prev - 1 : exercises.length - 1));
    };

    const handleNext = () => {
        setCurrentExerciseIndex(prev => (prev < exercises.length - 1 ? prev + 1 : 0));
    };

    const glassmorphismStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '12px'
    };

    const currentExercise = exercises[currentExerciseIndex];

    return (
        <>
            <div style={{ width: '100%', position: 'relative', minHeight: '100vh' }}>
                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    minHeight: '100vh',
                    zIndex: 0 
                }}>
                    <Dither
                        waveColor={[0.5, 0.5, 0.5]}
                        disableAnimation={false}
                        enableMouseInteraction={false}
                        mouseRadius={0.3}
                        colorNum={4}
                        waveAmplitude={0.3}
                        waveFrequency={3}
                        waveSpeed={0.03}
                    />
                </div>
                <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    minHeight: '100vh',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '2rem'
                }}> 
                    <h1 className="text-white p-3 mt-3 fw-bold d-flex justify-content-center display-1">ARMS WORKOUT</h1>
                    
                    <div className="container mt-4 d-flex flex-column align-items-center" style={{ flex: 1 }}>
                        <div className="p-4 text-white w-100" style={{ maxWidth: '800px', ...glassmorphismStyle }}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <button
                                    onClick={handlePrevious}
                                    className="btn text-white fw-bold"
                                    style={{
                                        ...glassmorphismStyle,
                                        padding: '0.5rem 1.5rem',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    ← Previous
                                </button>
                                <span className="text-white fw-bold" style={{ fontSize: '1.1rem' }}>
                                    {currentExerciseIndex + 1} of {exercises.length}
                                </span>
                                <button
                                    onClick={handleNext}
                                    className="btn text-white fw-bold"
                                    style={{
                                        ...glassmorphismStyle,
                                        padding: '0.5rem 1.5rem',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    Next →
                                </button>
                            </div>

                            <h2 className="fw-bold mb-3 text-center">{currentExercise.name}</h2>
                            
                            <div className="mb-3 d-flex justify-content-center">
                                <img
                                    src={currentExercise.image}
                                    alt={currentExercise.name}
                                    style={{
                                        width: '100%',
                                        maxWidth: '600px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <h5 className="fw-bold mb-2">Warm-up Sets:</h5>
                                {currentExercise.warmUpSets.map((set, setIndex) => (
                                    <div key={setIndex} className="mb-2">
                                        <input
                                            type="checkbox"
                                            checked={exerciseStates[currentExerciseIndex]?.warmUpChecked[setIndex] || false}
                                            onChange={() => handleWarmUpCheck(currentExerciseIndex, setIndex)}
                                            className="me-2"
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        <label>{set}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-3">
                                <h5 className="fw-bold mb-2">Working Sets:</h5>
                                {currentExercise.workingSets.map((set, setIndex) => (
                                    <div key={setIndex} className="mb-2">
                                        <input
                                            type="checkbox"
                                            checked={exerciseStates[currentExerciseIndex]?.workingChecked[setIndex] || false}
                                            onChange={() => handleWorkingCheck(currentExerciseIndex, setIndex)}
                                            className="me-2"
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        <label>{set}</label>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleComplete(currentExerciseIndex)}
                                className="btn btn-lg w-100 text-white fw-bold"
                                style={{
                                    ...glassmorphismStyle,
                                    backgroundColor: exerciseStates[currentExerciseIndex]?.completed 
                                        ? 'rgba(40, 167, 69, 0.5)' 
                                        : 'rgba(0, 0, 0, 0.3)',
                                    border: exerciseStates[currentExerciseIndex]?.completed
                                        ? '1px solid rgba(40, 167, 69, 0.5)'
                                        : '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                {exerciseStates[currentExerciseIndex]?.completed 
                                    ? 'Exercise Completed' 
                                    : 'Mark Exercise Complete'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
    
export default Arms;
