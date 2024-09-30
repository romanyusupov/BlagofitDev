import '../Succes/Succes.css'
import ArrowStandart from "../../UI/UI/componentsUI/ArrowStandart/ArrowStandart.jsx";
import ExerciseFooter from "../../UI/UI/componentsUI/ExercicesFooter/ExerciseFooter.jsx";


import Speaker from "../../UI/UI/Circles/Speaker/Speaker.jsx";
import StarAward from "../../UI/UI/Circles/StarAward/StarAward.jsx";

function Succes() {
    return(
        <>
            <div className="body__container">
                <div className="box">
                    <div className="content__box">
                        <ArrowStandart/>
                        <h2 className="text">Поздравляем!</h2>
                        <StarAward/>
                    </div>
                </div>
                <div className="blocks__box">
                    <div className="first__res-block">
                        <h2 className="first__res-text">0</h2>
                        <h3 className="score__res-text">Вы заработали</h3>
                    </div>
                    <div className="sec__res-block">
                        <h2 className="sec__res-text">7</h2>
                        <h3 className="score__res-text">Ваше место</h3>
                    </div>
                </div>

                <ExerciseFooter/>
            </div>
        </>
    )
}

export default Succes;