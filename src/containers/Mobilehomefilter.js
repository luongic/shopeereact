import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterbyID, filterbyRATE, filterbySTOCK, filterbyPRICEUP } from '../redux/actions/productActions';

function Mobilehomefilter(){
    const dispatch = useDispatch()
    const filterType = [
        {
            fillterName : 'Phổ Biến',
            disAction: () =>{
                dispatch(filterbyID())
            }
        },
        {
            fillterName : 'Đánh Giá',
            disAction: () =>{
                dispatch(filterbyRATE())
            }
        },
        {
            fillterName : 'Bán chạy',
            disAction: () =>{
                dispatch(filterbySTOCK())
            }
        },
        {
            fillterName : 'Giá',
            disAction: () =>{
                dispatch(filterbyPRICEUP())
            }
        },
    ]
    const [fillterSelected, setFilterSelected] = useState(0)
    const handleFilterClick = (index, disAct) => {
        setFilterSelected(index)
        disAct()
    }
    return (
        <ul className="header__sort-bar">
            {filterType.map((item, index)=>{
                return <li key={index} className={fillterSelected === index ? "header__sort-item header__sort-item-active" : "header__sort-item"} onClick={()=>handleFilterClick(index, item.disAction)}>
                    
                    <div className="header__sort-link">{item.fillterName}</div>
                </li>
            })}
        </ul>
    )
}

export default Mobilehomefilter