import '../CircleEx/CircleEx.css'
import Circle from "../../../../assets/circle.png";

function CircleEx() {
    return(
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper">
                    <div className="circle__sec-border">
                        <div className="circle__border-wrapper">
                            <img src={Circle} alt="Man" className="circle__icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CircleEx;