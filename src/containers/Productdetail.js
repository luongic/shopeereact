import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Rating from '@mui/material/Rating';

import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';


function Productdetail(){

    const {productId} = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)
    
    const fetchDataProduct = async (id) => {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`)
        .catch((err)=>{
            console.log("Fetch Data Err",err)
        })
        dispatch(selectedProduct(response.data))
        setIsLoading(false)
        setThumnail(response.data.thumbnail)
    }
    
    const discount = Math.floor(product.discountPercentage)
    const oldPriceVND = product.price * 23000
    const newPriceVND = (product.price - ((product.price*product.discountPercentage)/100)) *23000
    const rate = product.rating
    const [thumbnail, setThumnail] = useState(product.thumbnail)
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() => {
        if (productId && productId !== ''){
            fetchDataProduct()
        }
        setThumnail(product.thumbnail)

        return ()=>{
            dispatch(removeSelectedProduct())
        }
        
    },
    // eslint-disable-next-line
    [productId])

    const handleChangeThumnail =(item)=>{
        setThumnail(item)
    }

    const handleAdd = (product) => {
        const { id, title, price, discountPercentage } = product
        const quantity = 1
        console.log(id, title, price, quantity, discountPercentage)
    }

    return (
        <div className="product-detail">
            <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        {/* Left image */}
                        <div className="col l-5 m-12 c-12">

                            <div className="product-detail__image">

                                <img className="product-detail__thumbnail" alt="pic" src={thumbnail} />

                                <div className="product-detail__img-list">

                                    <ul className='product-detail__img-list-menu'>

                                        {isLoading ? <></> : product.images.map((item, index) => {
                                            return (
                                                <li className={thumbnail===item ? 'product-detail__img-list-item product-detail__img-list-item-active' : 'product-detail__img-list-item '}  key={index} onClick={() => handleChangeThumnail(item)}>
                                                    <img src={item} alt='pic' className='product-detail__img-list-item-img' />
                                                </li>
                                            )
                                        })}


                                    </ul>
                                    
                                </div>
                            </div>


                        </div>


                        {/* Right Info */}
                        <div className="col l-7 m-12 c-12">
                            <div className="product-detail__info">
                                <header className="product-detail__info-name">{product.title}</header>

                                <div className="product-detail__info-rating">
                                    <div className='product-detail__info-rating-star'>
                                        <div className='product-detail__info-rating-num'>
                                            {product.rating}
                                        </div>
                                        <Rating name="read-only"  value={rate ?? 2.5} precision={0.1} readOnly size="large"/>
                                    </div>
                                    
                                    <div className='product-detail__info-stock'>| {product.stock} còn lại </div>
                                </div>

                                <div className="product-detail__info-price">
                                    <div className='product-detail__info-oldprice'>
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(oldPriceVND)}
                                    </div>
                                    <div className='product-detail__info-newprice'>
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPriceVND)}
                                    </div>
                                    <div className='product-detail__info-discount'>
                                        {discount}% GIẢM
                                    </div>
                                </div>

                                <div className="product-detail__info-desc">
                                    {product.description}
                                </div>
                                <div className='product-detail__info-bottom'>
                                    <div className='product-detail__info-bottom-wrapper'>

                                        <div className="product-detail__info-add__btn " onClick={()=> handleAdd(product)}>
                                            <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                                        </div>

                                        <div className="product-detail__info-add__btn-buy">
                                            <i className="fa-solid fa-cart-plus"></i> Mua ngay
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdetail;