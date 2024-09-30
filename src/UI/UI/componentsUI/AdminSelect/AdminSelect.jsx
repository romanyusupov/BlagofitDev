import '../AdminSelect/AdminSelect.css'

function AdminSelect() {
    return (
        <>
            <select name="exercises" id="exercises" multiple>
                <option name="exercises" value="ppb">ППБ</option>
                <option name="exercises" value="zpb">ЗПБ</option>
                <option name="exercises" value="zpg">ЗПГ</option>
                <option name="exercises" value="yg">ЯГ</option>
                <option name="exercises" value="ppm">ППМ</option>
                <option name="exercises" value="mtd">МТД</option>
                <option name="exercises" value="vnutpb">ВНУТПБ</option>
                <option name="exercises" value="vneshpb">ВНЕШПБ</option>
                <option name="exercises" value="pmj">ПМЖ</option>
                <option name="exercises" value="kmj">КМЖ</option>
                <option name="exercises" value="ms">МС</option>
                <option name="exercises" value="mrp">МРП</option>
                <option name="exercises" value="pde">ПДЕ</option>
                <option name="exercises" value="sde">СДЕ</option>
                <option name="exercises" value="zde">ЗДЕ</option>
                <option name="exercises" value="ppp">ППП</option>
                <option name="exercises" value="zpp">ЗПП</option>
                <option name="exercises" value="pppr">ПППР</option>
                <option name="exercises" value="zpppr">ЗППР</option>
                <option name="exercises" value="trap">ТРАП</option>
                <option name="exercises" value="zpsh">ЗПШ</option>
            </select>
        </>
    )
}

export default AdminSelect
