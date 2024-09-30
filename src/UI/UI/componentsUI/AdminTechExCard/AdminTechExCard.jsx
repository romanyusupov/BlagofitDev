import '../AdminTechExCard/AdminTechExCard.css'
import LinkIcon from '../../../../assets/duplicate.png'
import BasketIcon from '../../../../assets/basket.png'
import AdminTechDuplicate from "../AdminTechDuplicate/AdminTechDuplicate.jsx";
import AdminSecDuplicate from "../AdminSecDuplicate/AdminSecDuplicate.jsx";



function AdminTechExCard() {
    return(
        <>
            <div className="tech__ex-card">
                <div className="tech__ex-heading">
                    <div className="ex__heading-left">
                        <h2 className="exheading__left-title">Restfirst</h2>
                    </div>
                    <div className="ex__heading-right">
                        <h2 className="exheading__right-title">Длительность слайда <span
                            className="heading__right-span">42</span> сек</h2>
                        <img src={LinkIcon} alt="" className="exheading__right-img"/>
                        <img src={BasketIcon} alt="" className="exheading__right-img"/>
                    </div>
                </div>
                <AdminTechDuplicate/>
                <AdminSecDuplicate/>
            </div>
        </>
    )
}
export default AdminTechExCard;