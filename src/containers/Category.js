import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCategories, selectedCategory } from '../redux/actions/categoryActions'
import axios from 'axios'
import { removeSelectedCategory } from "../redux/actions/categoryActions";
import { setProducts } from "../redux/actions/productActions";


import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function CateSkeleton(){
    return (
        <Box sx={{ width: 150 }}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </Box>
    )
}

function Category(){

    const dispatch = useDispatch()
    const category = useSelector((state) => state.allCategories.category)
    // const selectedcate = useSelector((state) => state.category)
    const [currentCate, setCurrenCate] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchDataCategory = async () =>{
        const response = await axios.get('https://dummyjson.com/products/categories')
        .catch((err)=>{
            console.log("Fetch Data Err",err)
        })
        // console.log(response.data)
        dispatch(setCategories(response.data))
        setLoading(false)
    }

    const fetchData = async (item) =>{
        const response = await axios.get(`https://dummyjson.com/products/category/${item}`)
        .catch((err)=>{
            console.log("Fetch Data Err",err)
        })
        // dispatch(setProducts(response.data.products))

        const {products, total} = response.data
        const payload = {
            products, 
            total
        }

        dispatch(setProducts(payload))
        
        // setLoading(false)
    }

    useEffect(()=>{
        fetchDataCategory()
    },
    // eslint-disable-next-line
    [])

    const handleCategoriesclick = (item) => {
        dispatch(selectedCategory(item))
        setCurrenCate(item)
        fetchData(item)
    }
    const handleAllclick = () =>{
        dispatch(removeSelectedCategory())
        setCurrenCate('')
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
        }
        fetchData()
    }

    return (
        <nav className="category">

                        <h3 className="category-heading">
                            <i className="category-heading-icon fas fa-list-ul"></i>Danh mục
                        </h3>
        
                        <ul className="category-list">
                        
                            <li className={currentCate === '' ? "category-item category-item--active" : "category-item category-item" } 
                            onClick={()=> handleAllclick()}>
                                <div className="category-item__link">Tất cả sản phẩm</div>
                            </li>
    

                            {loading ? <>
                                <CateSkeleton />
                            </>  : <>
                                    {category.map((item, index) => {
                                        return (
                                            <li className={item === currentCate ? "category-item category-item--active" : "category-item category-item" }  key={index} onClick={()=>handleCategoriesclick(item)}>
                                                <div className="category-item__link">{item}</div>
                                            </li>
                                        )
                                    })}
                            </> }

                            

                            
                        </ul>
        </nav>
    )
}


export default Category;