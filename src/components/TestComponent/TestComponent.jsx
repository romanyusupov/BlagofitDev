import '../TestComponent/TestComponent.css'
import ArrowStandart from "../../UI/UI/componentsUI/ArrowStandart/ArrowStandart.jsx";
import TestCircle from "../../UI/UI/Circles/TestCircle/TestCircle.jsx";
import TestFooter from "../../UI/UI/componentsUI/TestFooter/TestFooter.jsx";

function TestComponent() {
    return (
        <>
            <div className="test__container">
                <div className="test__box">
                    <div className="wrapper__quiz">
                        <ArrowStandart/>
                        <h2 className="quiz__title">Пройдите тест</h2>
                    </div>
                    <TestCircle/>
                </div>
                <div className="quiz__content">
                    <h2 className="quiz__text">Какое позитивное утверждение прозвучало в тренировке?</h2>
                    <div className="quiz__wrapper-box">
                        <label htmlFor="quiz__radio" className="quiz__label">
                            <input type="radio" className="quiz__radio"/>
                            Чистая вода - это мой самый любимый напиток
                        </label>
                        <label htmlFor="quiz__radio" className="quiz__label">
                            <input type="radio" className="quiz__radio"/>
                            С каждой тренировкой я становлюсь все красивее
                        </label>
                        <label htmlFor="quiz__radio" className="quiz__label">
                            <input type="radio" className="quiz__radio"/>
                            Тренируясь,я оздоравливаю весь свой организм
                        </label>
                    </div>
                </div>
                <TestFooter/>
            </div>
        </>
    )
}

export default TestComponent;