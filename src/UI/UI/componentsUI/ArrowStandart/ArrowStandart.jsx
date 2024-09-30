import '../ArrowStandart/ArrowStandart.css'
import Arrow from "../../../../assets/arrowStandart.png";

function ArrowStandart() {
    return (
        <>
            <div className="arrow__wrapper">
                <div className="arrow__box">
                    <button className="btn">
                        <img src={Arrow} alt="Arrow" className="arrow__box-img"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ArrowStandart;