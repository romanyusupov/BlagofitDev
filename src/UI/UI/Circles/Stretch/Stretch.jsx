import '../Stretch/Stretch.css'
import CircleImg from '../../../../assets/stretching (1).png';

function Stretch() {
    return (
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper">
                    <div className="circle__sec-border">
                        <div className="circle__border-wrapper">
                            <img src={CircleImg} alt="Man" className="circle__icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stretch