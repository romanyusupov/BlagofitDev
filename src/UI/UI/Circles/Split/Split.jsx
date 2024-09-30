import '../Split/Split.css'
import Circle from "../../../../assets/split.png";

function Split() {
    return (
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

export default Split