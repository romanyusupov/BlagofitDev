import '../Warmup/Warmup.css'
import Circle from "../../../../assets/warming-up.png"


function Warmup() {
    return (
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper">
                    <div  className="circle__border-wrapper">
                        <img src={Circle} alt="Man" className="circle__icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Warmup