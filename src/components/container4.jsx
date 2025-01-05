import aldaxVideo from "../videos/aldax-distribuidora-video.mp4";
import milliarkVideo from "../videos/milliark-video.mp4";
import bellaVideo from "../videos/bella-video.mp4";

const Container4 = () =>{
    return (
        <div className="mw-50">
            <h1 className="work-title">My Work</h1>
            <div className="my-work-wrapper">
                <div className="work-box">
                    <video className="work-video" src={aldaxVideo} autoPlay muted loop></video>
                </div>
                <div className="work-box">
                    <video className="work-video" src={milliarkVideo} autoPlay muted loop></video>
                </div>
                <div className="work-box">
                    <video className="work-video" src={bellaVideo} autoPlay muted loop></video>
                </div>
            </div>
        </div>
    )
};

export default Container4;