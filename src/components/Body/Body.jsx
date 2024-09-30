import '../Body/Body.css'


import ArrowStandart from "../../UI/UI/componentsUI/ArrowStandart/ArrowStandart.jsx";

import ExerciseFooter from "../../UI/UI/componentsUI/ExercicesFooter/ExerciseFooter.jsx";
import ExerciseTimer from "../../UI/UI/Circles/ExersiceTimer/ExerciseTimer.jsx";













function Body() {
    return (
        <>
            <div className="body__container">
                <div className="box">
                    <ArrowStandart/>
                    <div className="content">
                        <h2 className="text">Разминка!</h2>
                        <h3 className="subtext"><span className='accent'>3</span> Упражнения</h3>
                    </div>
                <ExerciseTimer/>
                </div>
               <ExerciseFooter/>
            </div>
        </>

    )
}

export default Body