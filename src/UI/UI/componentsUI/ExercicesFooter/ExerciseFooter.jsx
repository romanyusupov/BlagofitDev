import './ExcerciseFooter.css'
import Arrow from '../../../../assets/whiteArrow.png'

function ExerciseFooter() {
    return(
        <>
            <div className="nav__box">
                <div className="nav__box-wrapper">
                    <button className="nav__box-btn">
                        <img src={Arrow} alt="WhiteArrow" className="nav__box-arrow"/>
                    </button>
                    <button className="nav__box-button">Далее</button>
                </div>
            </div>
        </>
    )
}

export default ExerciseFooter;