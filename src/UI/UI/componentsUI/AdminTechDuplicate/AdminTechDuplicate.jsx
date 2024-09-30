import '../AdminTechDuplicate/AdminTechDuplicate.css'
import LinkIcon from "../../../../assets/duplicate.png";
import BasketIcon from "../../../../assets/basket.png";
import PlayIcon from "../../../../assets/play-button.png";
import VideoIcon from "../../../../assets/video.png";
import AddVideoIcon from "../../../../assets/add-video.png";
import WomanIcon from "../../../../assets/woman.png";
import ArrowIcon from '../../../../assets/switch_access_shortcut_33dp_RED_FILL0_wght400_GRAD0_opsz40.png'
import AdminSelect from "../AdminSelect/AdminSelect.jsx";



function AdminTechDuplicate() {
    return (
        <>
            <div className="admin__main-settings position-card bg-gray bg-white padding-class">
                <div className="exercise__box-round">
                    <div className="exercise__round-left">
                        <div className=" tech__duplicate-wrapper">
                            <img src={VideoIcon} alt="" className="tech__duplicate-img"/>
                            <h2 className="tech__duplicate-title">Видео</h2>
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
                        <button className="set__audio tech__duplicate-btn">
                            <img src={AddVideoIcon} alt="icon" className="main__settings-img"/>
                            Добавить видео
                        </button>
                        <label htmlFor="tech__duplicate-id" className="tech__duplicate-label">
                            <input type="checkbox" id='tech__duplicate-id' className='tech__duplicate-checkbox'/>
                            Зациклить
                        </label>
                        <div className="tech__duplicate-videobox">
                            <img src={WomanIcon} alt="" className="tech__duplicate-videoimg"/>
                            <img src={ArrowIcon} alt="" className="tech__duplicate-videoimg"/>
                            <img src={WomanIcon} alt="" className="tech__duplicate-videoimg"/>
                        </div>
                        <AdminSelect/>
                    </div>
                    <div className="excard__Stripe"></div>
                    <div className="main__settings-content">
                        <div className="main__settings-header">
                            <button className="set__audio">
                                <img src={PlayIcon} alt="icon" className="main__settings-img"/>
                                Воспроизвести видео
                            </button>
                            <div className="main__settings-timebox">
                                <h2 className="setting__timebox-title">Длительность видео <span
                                    className=" tech__duplicate-span">42</span> сек </h2>
                            </div>
                        </div>
                        <div className="main__settings-cardbox tech__duplicate-margin">
                            <div className="main__settings-smallcard tech__duplicate-card">
                                <h3 className="settings__smallcard-title tech__duplicate-techtitle">FRONTO190</h3>
                                <div className="tech__duplicate-vertical"></div>
                                <h3 className="settings__smallcard-title tech__duplicate-techtitle">Присед-подьем в
                                    сторону</h3>
                                <div className="tech__duplicate-vertical"></div>
                                <h3 className="settings__smallcard-title tech__duplicate-techtitle">Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Maiores, molestiae?</h3>
                                <div className="tech__duplicate-vertical"></div>
                                <button className="settings__smallcard-smallbtn">
                                    <img src={BasketIcon} alt="" className="smallcard__smallbtn-img"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminTechDuplicate