import '../TestFooter/TestFooter.css'
import Arrow from "../../../../assets/whiteArrow.png";

function TestFooter() {
    return (
        <>
            <h2 className="nav__warning">Внимание дается только одна попытка</h2>
            <div className="nav__box">
                <div className="nav__box-wrapper">
                    <button className="nav__box-btn">
                        <img src={Arrow} alt="WhiteArrow" className="nav__box-arrow"/>
                    </button>
                    <button className="nav__box-button">Подтвердить</button>
                    <button className="nav__box-btn">
                        <img src={Arrow} alt="WhiteArrow" className="nav__box-arrow right "/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default TestFooter;