import '../StarAward/StarAward.css'

import Award from '../../../../assets/star-award 1.png'
function StarAward() {
    return (
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper">
                    <div  className="circle__border-wrapper">
                        <img src={Award} alt="Man" className="circle__icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarAward;