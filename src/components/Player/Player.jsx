import '../Player/Player.css'
import ArrowStandart from "../../UI/UI/componentsUI/ArrowStandart/ArrowStandart.jsx";
import Pic from '../../assets/exercisePic.png'
import PlayerFooter from "../../UI/UI/componentsUI/PlayerFooter/PlayerFooter.jsx";
import GreenArrowButton from "../../UI/UI/componentsUI/GreenArrowButton/GreenArrowButton.jsx";
import Timer from "../../UI/UI/componentsUI/Timer/Timer.jsx";
import StopHandGreen from "../../UI/UI/componentsUI/StopHandGreen/StopHandGreen.jsx";
import Music from "../../assets/volumeBlack.png";


function Player() {
    return (
        <div className="player__container">
            <div className="player__container-box">
                <div className="text__box">
                    <div className="text__wrapper">
                        <ArrowStandart/>
                        <h2 className="player__text">Техника</h2>
                    </div>
                    <div className="wrapper__right">
                        <h3 className="player__subtext">Круг 1/3</h3>
                        <h3 className="player__subtext">Упражнение 2/4 </h3>
                    </div>
                </div>
                <div className="subtext__emoji">
                    <h3 className="subtext__emoji-pl">Название упражнения 🔥</h3>
                </div>
            </div>
            <div className="video__box">
                <div className="player">
                    <img src={Pic} alt="Video" className="video"/>
                </div>
            </div>
            <div className="player__stripe-box">
              `  <GreenArrowButton/>`

                <div className="espander__box">
                    <div className="espander">
                        <div className="yellow"></div>
                        <div className="red"></div>
                        <div className="orange"></div>
                        <div className="green"></div>
                        <div className="blue"></div>
                        <div className="black"></div>
                    </div>
                    <h3 className="espander__text">Эспандер</h3>
                </div>
            </div>
            <div className="timer__box">
                <Timer/>
                <StopHandGreen/>
            </div>
            <div className="volume__box">
                    <button className="sound__bar-btn">
                        <img src={Music} alt="" className="soundbar__img-svg"/>
                    </button>
            </div>
            <PlayerFooter/>
        </div>
    )
}

export default Player