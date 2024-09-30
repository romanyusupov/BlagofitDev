import '../PlayerFooter/PlayerFooter.css'
import Repeat from '../../../../assets/repeat.svg'
import ArrowPrev from '../../../../assets/playerArrowLeft.svg'
import ArrowNext from '../../../../assets/playerArrowRight.svg'
import Pause from '../../../../assets/pause.svg'

function PlayerFooter() {
    return (
        <>
            <div className="player__nav">
                <div className="player__nav-box">
                    <div className="repeat">
                        <button className="repeat__btn">
                            <img src={Repeat} alt="Repeat" className="img__repeat"/>
                        </button>
                    </div>
                    <div className="player__box">
                        <button className="arrow__prev">
                            <img src={ArrowPrev} alt="ArrowPrev" className="arrow__prev-img"/>
                        </button>
                        <button className="pause">
                            <img src={Pause} alt="Pause" className="pause__img"/>
                        </button>
                        <button className="arrow__next">
                            <img src={ArrowNext} alt="ArrowNext" className="arrow__next-img"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerFooter;