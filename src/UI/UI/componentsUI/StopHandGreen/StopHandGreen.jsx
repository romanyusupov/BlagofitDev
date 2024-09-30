import '../StopHandGreen/StopHandGreen.css'
import Hand from '../../../../assets/stopHandGreen.svg'
function StopHandGreen() {
    return (
        <>
            <button className="stop__hand-btn">
                <img src={Hand} alt="Hand" className="stop__hand-img"/>
                Отдых
            </button>
        </>
    )
}

export default StopHandGreen;