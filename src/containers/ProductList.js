import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Product from './Product'
import Productskeleton from './Productskeleton'
import PaginationComponent from "./PaginationComponent"
import {setProducts} from '../redux/actions/productActions'


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




    return (
        <>
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
            {loading ? '' : <PaginationComponent count={countPage} /> }
            
        </ul>

        </>
    )
}

export default ProductList;