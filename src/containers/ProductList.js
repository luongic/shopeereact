import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Mobilecategory from './Mobilecategory'
import Homefilter from './Homefilter'
import Product from './Product'
import Productskeleton from './Productskeleton'
import PaginationComponent from "./PaginationComponent"
import {setProducts} from '../redux/actions/productActions'




function ProductList(){

    const products = useSelector((state) => state.allProducts.products)
    const total = useSelector((state) => state.allProducts.total)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const [countPage, setCountpage] = useState()

    const fetchData = async () =>{
        const response = await axios.get('https://dummyjson.com/products')
        .catch((err)=>{
            console.log("Fetch Data Err",err)
        })
        const {products, total} = response.data
        const payload = {
            products, 
            total
        }

        dispatch(setProducts(payload))
        
        setCountpage(Math.ceil((total/response.data.products.length)))
        setLoading(false)
    }

    useLayoutEffect(()=>{
        fetchData()   
    },
    // eslint-disable-next-line
    [])



    const [currentPage, setCurrentpage] = useState(1)
    const pagiRef = useRef()

    // eslint-disable-next-line
    useEffect(()=>{
        
        if (pagiRef.current) {
            const currentPage = pagiRef.current.getCurrent()
            setCurrentpage(currentPage)
        }

        setLoading(true)
        setCountpage((Math.ceil(total/30)))
        setLoading(false)
    })


    return (
        <>

        <Homefilter current={currentPage > countPage ? countPage : currentPage } total={countPage} />

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
            {loading ? '' : countPage <= 1 ? <></> : <PaginationComponent count={countPage} ref={pagiRef} /> }
        </ul>

        </>
    )
}

export default ProductList;