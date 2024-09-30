import '../TestCircle/TestCircle.css'
import Test from '../../../../assets/test.svg'

function TestCircle() {
    return (
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper">
                    <div  className="circle__border-wrapper">
                        <img src={Test} alt="Man" className="circle__icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestCircle