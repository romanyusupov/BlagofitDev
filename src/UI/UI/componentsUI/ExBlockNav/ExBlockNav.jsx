import '../ExBlockNav/ExBlockNav.css'
import svg from '../../../../assets/info.svg'

function ExBlockNav({data, text}) {
    return (
        <>
            <div className="nav__block">
                <div className="nav__block-wrapper">
                    <div className="nav__block-icon">
                        <img src={data.workout} alt="Workout" className="nav__block-img"/>
                        <div className="nav__block-text">
                            <h2 className="nav__block-title">{text.first}</h2>
                            <h2 className="nav__block-subtitle">До 600 баллов</h2>
                        </div>
                    </div>
                    <img src={svg} alt="Info" className="nav__block-svg"/>
                </div>
            </div>
        </>
    )
}

export default ExBlockNav;