import ArmsButton from "../components/landing-page/ArmsButton";
import LegsButton from "../components/landing-page/LegsButton";
import PullButton from "../components/landing-page/PullButton";
import PushButton from "../components/landing-page/PushButton";

function LandingPage() {
    return (
        <>
            <div>
                <ArmsButton />
                <LegsButton />
                <PullButton />
                <PushButton />
            </div>
        </>
    );
}

export default LandingPage;
