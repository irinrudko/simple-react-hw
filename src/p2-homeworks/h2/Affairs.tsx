import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import style from './Affairs.module.css';


type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { return props.setFilter('all') }
    const setHigh = () => { return props.setFilter('high') }
    const setMiddle = () => { return props.setFilter('middle') }
    const setLow = () => { return props.setFilter('low') }

    return (
        <div className={style.container}>

            {mappedAffairs}

            <div className={style.buttonContainer}>
                <button onClick={setAll} className={style.button}>All</button>
                <button onClick={setHigh} className={`${style.button}`}>High</button>
                <button onClick={setMiddle} className={`${style.button}`}>Middle</button>
                <button onClick={setLow} className={`${style.button}`}>Low</button>
            </div>
        </div >
    )
}

export default Affairs
