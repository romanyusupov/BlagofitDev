import '../../componentsUI/AdminCard/AdminCard.css'
import PlayIcon from "../../../../assets/play-button.png";
import BasketIcon from "../../../../assets/basket.png";
import MenuIcon from "../../../../assets/menu.png";
import PauseIcon from "../../../../assets/pause.png";
import PlusIcon from "../../../../assets/plus.png";
import AduioIcon from "../../../../assets/add-mic.png";
import LinkIcon from "../../../../assets/duplicate.png";
import AdminTechCard from "../AdminTechCard/AdminTechCard.jsx";
import AdminSelect from "../AdminSelect/AdminSelect.jsx";
import AudioIcon from "../../../../assets/audio.png";

function AdminCard() {
    return (
        <>
            <div className="admin__main-settings bg-white">
                <div className="exercise__box-round">
                    <div className="exercise__round-left">
                        <div className="admin__mainsettings-heading exercise__round-wrapper">
                            <h2 className="main__settings-heading fz-18">Circle</h2>
                        </div>
                        <h2 className="exercise__round-title">
                            Кругов <span className="exercise__round-span">3</span>
                        </h2>
                        <h2 className="exercise__round-title">
                            Упражнений <span className="exercise__round-span">3</span>
                        </h2>
                        <div className="exercise__round-boxdiv">
                            <img src={PlusIcon} alt="" className="exercise__round-img"/>
                            <h2 className="exercise__round-title">Круг</h2>
                        </div>
                    </div>
                    <div className="exercise__round-right">
                        <button className="exercise__round-rightbtn">
                            <img src={LinkIcon} alt='' className="exercise__round-rightimg"/>
                        </button>
                        <button className="exercise__round-rightbtn">
                            <img src={BasketIcon} alt='' className="exercise__round-rightimg"/>
                        </button>
                    </div>
                </div>
                <div className="main__settings-card">
                    <div className="main__settings-buttons admincard__wrapper">
                        <div className="admin__mainsettings-heading">
                            <img src={AudioIcon} alt="" className="main__settings-heading--img"/>
                            <h2 className="main__settings-heading">Аудио</h2>
                        </div>
                        <button className="set__audio">
                            <img src={AduioIcon} alt="icon" className="main__settings-img"/>
                            Добавить аудио
                        </button>
                        <button className="set__audio">
                            <img src={PauseIcon} alt="icon" className="main__settings-img"/>
                            Добавить паузу
                        </button>
                        <AdminSelect/>
                    </div>
                    <div className="admin__card-stripe"></div>
                    <div className="main__settings-content admin__card-position">
                        <div className="main__settings-header">
                            <button className="set__audio">
                            <img src={PlayIcon} alt="icon" className="main__settings-img"/>
                                Воспроизвести полностью
                            </button>
                            <div className="main__settings-timebox">
                                <h2 className="setting__timebox-title">Суммарное время <span
                                    className="settings__timebox-span">1200</span> сек </h2>
                            </div>
                        </div>
                        <div className="main__settings-cardbox ">
                            <div className="main__settings-smallcard">
                                <h3 className="settings__smallcard-title">Iraining must</h3>
                                <button className="settings__smalcard-button">
                                    <img src={PlayIcon} alt="icon" className="main__settings-img"/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, harum?
                                </button>
                                <button className="settings__smallcard-smallbtn">
                                    <img src={BasketIcon} alt="" className="smallcard__smallbtn-img"/>
                                </button>
                                <button className="settings__smallcard-smallbtn">
                                    <img src={MenuIcon} alt="" className="smallcard__smallbtn-img"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminTechCard/>
            </div>
        </>
    )
}

export default AdminCard;