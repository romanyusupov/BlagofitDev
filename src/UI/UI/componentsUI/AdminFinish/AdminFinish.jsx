
import AduioIcon from "../../../../assets/add-mic.png";
import PauseIcon from "../../../../assets/pause.png";
import PlayIcon from "../../../../assets/play-button.png";
import BasketIcon from "../../../../assets/basket.png";
import MenuIcon from "../../../../assets/menu.png";
import '../AdminFinish/AdminFinish.css'
import AdminSelect from "../AdminSelect/AdminSelect.jsx";

function AdminFinish() {
    return (
        <>
            <div className="admin__main-settings padding-class  bg-gray">
                <div className="admin__mainsettings-heading  ">
                    <h2 className="main__settings-heading">Концовка</h2>
                </div>
                <div className="main__settings-card position-right ">
                    <div className="main__settings-buttons">
                        <button className="set__audio">
                            <img src={AduioIcon} alt="icon" className="main__settings-img"/>
                            Добавить аудио
                        </button>
                        <button className="set__audio">
                            <img src={PauseIcon} alt="icon" className="main__settings-img"/>
                            Добавить паузу
                        </button>
                        <h2 className="setting__timebox-title">Начать за<span
                            className="sec__duplicate-span">6</span> сек </h2>
                        <AdminSelect/>
                    </div>
                    <div className="admin__finish-stripe"></div>
                    <div className="main__settings-content">
                    <div className="main__settings-header position-left-content">
                            <button className="set__audio">
                                <img src={PlayIcon} alt="icon" className="main__settings-img"/>
                                Воспроизвести полностью
                            </button>
                            <div className="main__settings-timebox">
                                <h2 className="setting__timebox-title">Суммарное время <span
                                    className="sec__duplicate-span">5</span> сек </h2>
                            </div>
                        </div>
                        <div className="main__settings-cardbox position__list">
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
                            <div className="main__settings-smallcard">
                                <div className="settings__smallcard-titlebox">
                                    <img src={PauseIcon} alt="icon" className="main__settings-pause"/>
                                    <h3 className="settings__smallcard-pausetitle">Pause 700</h3>
                                </div>
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
            </div>
        </>
    )
}

export default AdminFinish;