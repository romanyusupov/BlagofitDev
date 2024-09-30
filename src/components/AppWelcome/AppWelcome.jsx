import '../AppWelcome/AppWelcome.css'
import ArrowStandart from "../../UI/UI/componentsUI/ArrowStandart/ArrowStandart.jsx";
import Woman from '../../assets/woman.png'

function AppWelcome() {
    return (
        <>
            <div className="body__container">
                <div className="box">
                  <div className="box__welcome-wrapper">
                      <ArrowStandart/>
                      <h2 className="welcome__title">
                          Добро пожаловать!
                      </h2>
                  </div>
                    <div className="welcome__img-wrapper">
                        <img src={Woman} alt="Woman" className="welcome__img"/>
                    </div>
                </div>
                <div className="welcome__footer">
                    <h2 className="welcome__text">
                        🔥 Приветствуем Вас на сегодняшней тренировке!
                    </h2>
                </div>
            </div>
        </>
    )
}

export default AppWelcome;