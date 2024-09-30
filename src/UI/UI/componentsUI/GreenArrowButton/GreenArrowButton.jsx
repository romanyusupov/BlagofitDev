import '../GreenArrowButton/GreenArrowButton.css'
import GreenArrow from "../../../../assets/arrow__green.svg";

function GreenArrowButton() {
    return (
        <>
            <button className="exercise__reg">
                Первое упражнение
                <img src={GreenArrow} alt="Arrow" className="exercise__reg-img"/>
            </button>
        </>
    )
}

export default GreenArrowButton;