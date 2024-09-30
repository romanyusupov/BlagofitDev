import '../Admin/Admin.css'
import MainTitleIcon from '../../assets/workout (1).png'
import AduioIcon from '../../assets/add-mic.png'
import PauseIcon from '../../assets/pause.png'
import PlayIcon from '../../assets/play-button.png'
import BasketIcon from '../../assets/basket.png'
import MenuIcon from '../../assets/menu.png'
import AudioIcon from '../../assets/audio.png'
import PlusIcon from '../../assets/plus.png'
import AdminCard from "../../UI/UI/componentsUI/AdminCard/AdminCard.jsx";
import AdminSelect from "../../UI/UI/componentsUI/AdminSelect/AdminSelect.jsx";
function Admin() {
    return (
        <>
            <div className="admin__container">
                {/* statics start */}
                <div className="admin__statics-panel">
                    <div className="admin__statics-wrapper">
                        <div className="admin__statics-row">
                            <h2 className="admin__statics-heading">Статодинамика мужчины (грудь, спина, пресс)</h2>
                            <div className="vertical__stripe"></div>
                        </div>
                        <div className="admin__statics-row">
                            <h2 className="admin__statics-subtitle">Базис здоровья</h2>
                            <div className="vertical__stripe"></div>
                        </div>
                        <div className="admin__statics-row">
                            <select name="admin" className="admin__statics-select">
                                <option value="1">День 1</option>
                                <option value="2">День 2</option>
                                <option value="3">День 3</option>
                                <option value="4">День 4</option>
                                <option value="5">День 5</option>
                            </select>
                            <div className="vertical__stripe"></div>
                        </div>
                        <div className="admin__statics-row">
                            <select name="admin" className="admin__statics-select">
                                <option value="1">Тренировка</option>
                                <option value="2">Тренировка</option>
                                <option value="3">Тренировка</option>
                                <option value="4">Тренировка</option>
                                <option value="5">Тренировка</option>
                            </select>
                            <div className="vertical__stripe"></div>
                        </div>
                        <div className="admin__statics-row">
                            <select name="admin" className="admin__statics-select">
                                <option value="1">Мужчина</option>
                                <option value="2">Женщина</option>
                            </select>
                            <div className="vertical__stripe"></div>
                        </div>
                        <div className="admin__statics-row">
                            <div className="admin__statics-date">23:57</div>
                            <div className="vertical__stripe"></div>
                        </div>
                        <div className="admin__statics-row">
                            <button className="admin__statics-save">Сохранить</button>
                        </div>
                    </div>
                </div>
                {/* statics end */}
                {/* main card start */}
                <div className="admin__main-card">
                    <div className="admin__main-wrapper">
                        <h2 className="admin__main-heading">Параметры всей тренировки</h2>
                        <div className="admin__main-items">
                            <div className="main__items-heading">
                                <img src={MainTitleIcon} alt="Icon" className="main__items-icon"/>
                                <h2 className="main__items-title">Оборудование</h2>
                            </div>
                            <div className="admin__main-item">
                                <label htmlFor="blueCheckbox" className="main__item-label">
                                    <input type="checkbox" id='blueCheckbox' className='custom-checkbox'/>
                                    Эспандер тр.
                                </label>
                                <label htmlFor="blueCheckbox" className="main__item-label">
                                    <input type="checkbox" id='blueCheckbox'  className='custom-checkbox'/>
                                    Резинка
                                </label>
                                <label htmlFor="blueCheckbox" className="main__item-label">
                                    <input type="checkbox" id='blueCheckbox'  className='custom-checkbox'/>
                                   Коврик
                                </label>
                                <label htmlFor="blueCheckbox" className="main__item-label">
                                    <input type="checkbox" id='blueCheckbox'  className='custom-checkbox'/>
                                    Стул
                                </label>
                                <label htmlFor="blueCheckbox" className="main__item-label">
                                    <input type="checkbox"  id='blueCheckbox'  className='custom-checkbox'/>
                                    Скамья
                                </label>
                                <label htmlFor="blueCheckbox" className="main__item-label">
                                    <input type="checkbox" id='blueCheckbox'  className='custom-checkbox'/>
                                    Гантели
                                </label>
                                <label htmlFor="blueCheckbox" className="main__item-label">
                                    <input type="checkbox" id='blueCheckbox'  className='custom-checkbox'/>
                                   Штанга
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="admin__main-settings">
                        <div className="admin__mainsettings-heading">
                            <img src={AudioIcon} alt="" className="main__settings-heading--img"/>
                            <h2 className="main__settings-heading">Аудио</h2>
                        </div>
                        <div className="main__settings-card">
                            <div className="main__settings-buttons">
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
                            <div className="main__settings-stripe"></div>
                            <div className="main__settings-content">
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
                                <div className="main__settings-cardbox">
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
                            <div className="main__settings-stripe"></div>

                            <div className="main__volume__settings">
                                <h2 className="main__volume-title">Громкость</h2>
                                <div className="main__volume-box">
                                    <div className="main__volume-setbox">
                                        <div className="main__volume-buton">1</div>
                                        <h2 className="volume__setbox-title">Диктор</h2>
                                    </div>
                                    <div className="main__volume-setbox">
                                        <div className="main__volume-buton">1</div>
                                        <h2 className="volume__setbox-title">Музыка</h2>
                                    </div>
                                </div>
                                <div className="main__volume-checkwrapper">
                                    <label htmlFor="volume__main" className="main__volume-label">
                                        <input type="checkbox" id="volume__main" className='main__volume-checkbox'/>
                                        Зациклить
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* main card end */}
                <div className="admin__settings-card">
                    <div className="admin__settings-exercises">
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">WARMUP</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">STRETCH</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">CIRCLE</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">SPLIT</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">ASCET</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">GREATINGS</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">PHRASE</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">TESTING</h2>
                        </div>
                        <div className="admin__settings-exsettings">
                            <img src={PlusIcon} alt="Plus" className="admin__settings-eximg"/>
                            <h2 className="admin__settings-extitle">DONE</h2>
                        </div>
                    </div>
                    <div className="admin__tech-settings">
                        <AdminCard/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Admin
