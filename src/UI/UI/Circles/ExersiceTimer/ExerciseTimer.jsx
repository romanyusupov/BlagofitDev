import '../ExersiceTimer/ExerciseTimer.css'


function ExerciseTimer() {
    return (
        <>
            <div className="image__circle-box">
                <div className="circle__wrapper">
                    <div  className="circle__border-wrapper">
                        <h2 className="circle__text-wrapper">Длительность тренировки:</h2>
                        <div className="circle__timer">
                            <div className="circle__minutes">23 м:</div>
                            <div className="circle__seconds">58 сек</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExerciseTimer;