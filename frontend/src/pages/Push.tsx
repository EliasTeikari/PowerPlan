import "../App.css";

function Push() {
    return (
        <>
            <h1 className="text-center title-workout">PUSH WORKOUT</h1>
            <div className="card" style={{ marginRight: "width: 18rem;" }}>
                <img
                    src="../assets/images/push-images/Low-Incline-DB-Press.png"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card’s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </>
    );
}

export default Push;
