import '../Kettlbelle/Kettlbelle.css'
import KettlbellePic from '../../../../assets/kettlebell.png';

function Kettlbelle() {
    return (
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper">
                    <div  className="circle__border-wrapper">
                        <img src={KettlbellePic} alt="Man" className="circle__icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kettlbelle;