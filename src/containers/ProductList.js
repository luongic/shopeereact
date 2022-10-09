import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Mobilecategory from './Mobilecategory'
import Product from './Product'
import Productskeleton from './Productskeleton'
import PaginationComponent from "./PaginationComponent"
import {setProducts} from '../redux/actions/productActions'

function Homefilter({current, total}){
    return (
        <div className="home-filter hide-on-mobile-tablet">
                        <span className="home-filter__label">Săp xếp theo</span>
                        <button className="home-filter__btn btn btn-primary">Phổ biến</button>
                        <button className="home-filter__btn btn ">Mới nhất</button>
                        <button className="home-filter__btn btn ">Bán chạy</button>

                        <div className="select-input">
                            <span className="select-input__label">Giá</span>
                            <i className="select-input__label-icon fa-solid fa-chevron-down"></i>

                            <ul className="select-input__list">
                                <li className="select-input__item">
                                    <div className="select-input__item-link">Giá: Thấp đến Cao
                                    <i className="select-input__item-icon fa-solid fa-arrow-up-1-9"></i>

                                    </div>

                                    
                                </li>
                                <li className="select-input__item">
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

                            {/* <div className="home-filter__page-control">
                                <div className="home-filter__page-btn home-filter__page-btn-disable">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="home-filter__page-btn">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-right"></i>
                                </div>
                            </div> */}
                        </div>
        </div>
    )
}


function ProductList(){

    const products = useSelector((state) => state.allProducts.product)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const [countPage, setCountpage] = useState()

    const fetchData = async () =>{
        const response = await axios.get('https://dummyjson.com/products')
        .catch((err)=>{
            console.log("Fetch Data Err",err)
        })
        dispatch(setProducts(response.data.products))
        setCountpage(Math.ceil((response.data.total)/30))
        setLoading(false)
    }

    
    useEffect(()=>{
        fetchData()
    },
    // eslint-disable-next-line
    [])

    const [currentPage, setCurrentpage] = useState(1)
    const pagiRef = useRef()

    useEffect(()=>{
        
        if (pagiRef.current) {
            const currentPage = pagiRef.current.getCurrent()
            setCurrentpage(currentPage)
        }

    })


    return (
        <>

        <Homefilter current={currentPage} total={countPage} />

        <Mobilecategory />

        <div className="home-product">
            <div className="row ">

                {loading ? <Productskeleton />  : <>
                    {products.map((product, index) => {
                        return <Product props={product} key={index}/>
                    })}
                </> }

            </div>
        </div>

        <ul className="pagination home-product__pagination">
            {loading ? '' : <PaginationComponent count={countPage} ref={pagiRef} /> }
        </ul>

        </>
    )
}

export default ProductList;