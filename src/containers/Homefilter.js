import { useState } from "react"
import { useDispatch } from "react-redux"

import { filterbyID, filterbyRATE, filterbySTOCK, filterbyPRICEDOWN, filterbyPRICEUP } from '../redux/actions/productActions';

function Homefilter({current, total}){

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
    ]

    const [fillterSelected, setFilterSelected] = useState(0)


    const handleFilterClick = (index, disAct) => {
        setFilterSelected(index)
        disAct()
    }


    return (
        <div className="home-filter hide-on-mobile-tablet">
                        <span className="home-filter__label">Săp xếp theo</span>

                        {filterType.map((item, index)=>{
                            return <button key={index} className={fillterSelected === index ? "home-filter__btn btn btn-primary" : "home-filter__btn btn "} onClick={()=>handleFilterClick(index, item.disAction)}>{item.fillterName}</button>
                        })}

                        {/* <button className="home-filter__btn btn btn-primary">Phổ biến</button>
                        <button className="home-filter__btn btn ">Đánh giá</button>
                        <button className="home-filter__btn btn ">Bán chạy</button> */}

                        <div className="select-input">
                            <span className="select-input__label">Giá</span>
                            <i className="select-input__label-icon fa-solid fa-chevron-down"></i>

                            <ul className="select-input__list">
                                <li className="select-input__item" onClick={()=>dispatch(filterbyPRICEUP())}>
                                    <div className="select-input__item-link">Giá: Thấp đến Cao
                                    <i className="select-input__item-icon fa-solid fa-arrow-up-1-9"></i>

                                    </div>

                                    
                                </li>
                                <li className="select-input__item" onClick={()=>dispatch(filterbyPRICEDOWN())} >
                                    <div className="select-input__item-link">Giá: Cao đến Thấp
                                    <i className="select-input__item-icon fa-solid fa-arrow-down-9-1"></i>

                                    </div>

                                </li>
                            </ul>
                        </div>

                        <div className="home-filter__page">
                            <div className="home-filter__page-text">
                            Trang:
                            </div>
                             
                            <span className="home-filter__page-num">
                                <span className="home-filter__page-current">{current}</span>
                                /
                                <span className="home-filter__page-total">{total}</span>
                            </span>
                        </div>
        </div>
    )
}

export default Homefilter