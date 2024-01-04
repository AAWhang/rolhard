import videoBg from "../assets/placeholder.mp4";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Logo from '../assets/rolhard-logo-alpha.png'
import './css/video.css';

export function BGVideo() {
    return (
        <div className="video-container">
            <video src={videoBg} autoPlay muted loop id="myVideo" />
            <img src={Logo} alt="rolhard logo" className="logo"/>
        </div>
    )
}

