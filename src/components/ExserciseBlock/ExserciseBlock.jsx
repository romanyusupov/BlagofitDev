import '../ExserciseBlock/ExserciseBlock.css'
import ExBlockNav from "../../UI/UI/componentsUI/ExBlockNav/ExBlockNav.jsx";
import stul from '../../assets/5d9c3ba601723456e9079a7799462342 1.png'
import kovrik from '../../assets/kurma_yoga_mat_grip-black_anthracite_rolled 1.png'
import espander from '../../assets/3707441876_w640_h640_espander-trubchatyj-livepro 1.png'
import lenta from '../../assets/lenta-espander-dlya-fitnesa-iz-kauchuka-4-kg-8-funtov-s-silnym-soprotivl-chernaya 1.png'

// eslint-disable-next-line react/prop-types
function ExserciseBlock({data}) {
    const text = {
        first: 'Выполните зарядку',
        second: 'Выполните аскезу'
    }
    return (
        <>
            <div className="exercise__block">
                <ExBlockNav data={data} text={text}/>
                <div className="exercise__content">
                    <div className="exercise__wrapper">
                        <h2 className="exercise__title"><span>Название:</span> Утренняя
                            растяжка(ягодичная,боковая,поверхность бедра,женщины)</h2>
                    </div>
                    <button className="exercise__button">Начать тренировку</button>
                    <div className="exercise__card">
                        <h2 className="card__title">Вам нужно:</h2>
                        <div className="card__wrapper">
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={stul} alt="" className="card__wrapper-img"/>
                                </div>

                                <h2 className="card__title">Стул</h2>
                            </div>
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={kovrik} alt="" className="card__wrapper-img"/>
                                </div>

                                <h2 className="card__title">Коврик</h2>
                            </div>
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={lenta} alt="" className="card__wrapper-img"/>
                                </div>
                                <h2 className="card__title">Лента</h2>
                            </div>
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={espander} alt="" className="card__wrapper-img"/>
                                </div>

                                <h2 className="card__title">Эспандер</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <ExBlockNav data={data} text={text}/>
                <div className="exercise__content">
                    <div className="exercise__wrapper">
                        <h2 className="exercise__title"><span>Название:</span> Утренняя
                            растяжка(ягодичная,боковая,поверхность бедра,женщины)</h2>
                    </div>
                    <button className="exercise__button">Начать тренировку</button>
                    <div className="exercise__card">
                        <h2 className="card__title">Вам нужно:</h2>
                        <div className="card__wrapper">
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={stul} alt="" className="card__wrapper-img"/>
                                </div>

                                <h2 className="card__title">Стул</h2>
                            </div>
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={kovrik} alt="" className="card__wrapper-img"/>
                                </div>

                                <h2 className="card__title">Коврик</h2>
                            </div>
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={lenta} alt="" className="card__wrapper-img"/>
                                </div>
                                <h2 className="card__title">Лента</h2>
                            </div>
                            <div className="card">
                                <div className="card__item-wrapper">
                                    <img src={espander} alt="" className="card__wrapper-img"/>
                                </div>

                                <h2 className="card__title">Эспандер</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ExserciseBlock;