import '../Speaker/Speaker.css'
import SpeakerPic from '../../../../assets/speakerSVG.svg'

function Speaker() {
    return (
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper circle__speaker">
                    <div  className="circle__border-wrapper">
                        <img src={SpeakerPic} alt="Man" className="circle__icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speaker;