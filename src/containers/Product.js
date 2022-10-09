import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

function Product(props){

    const navigate = useNavigate()
    const product = props.props
    product.discountPercentage = Math.floor(product.discountPercentage)
    const oldPriceVND = product.price * 23000
    const newPriceVND = (product.price - ((product.price*product.discountPercentage)/100)) *23000
    const rate = product.rating

    return (
       

            <div className="col l-2-4 m-4 c-6" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="home-product-item">
                    <div className="home-product-item__img" style={{ backgroundImage: `url("${product.images[2] ?? product.thumbnail}")` }} ></div>
                    <h4 className="home-product-item__name">{product.title}</h4>
                    <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                            {/* {oldPriceVND.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} */}
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(oldPriceVND)}
                            
                        </span>
                        <span className="home-product-item__price-new">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPriceVND)}
                            {/* {newPriceVND.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} */}
                        </span>
                    </div>

                    <div className="home-product-item__action">

                        <div className="home-product-item__rating">

                            <Rating name="read-only" value={rate} precision={0.1} readOnly size="small"/> 
                            <span className='home-product-item__rate-count'>{rate}</span>

                        </div>
                        <span className="home-product-item__sold">Còn lại: {product.stock}</span>

                    </div>

                    <div className="home-product-item__origin">
                        <span className="home-product-item__brand">{product.brand}</span>
                        <span className="home-product-item__from">TP Hồ Chí Minh</span>
                    </div>

                    <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        Giảm giá
                    </div>

                    <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-percent">{product.discountPercentage}%</span>
                        <span className="home-product-item__sale-lable">GIẢM</span>
                    </div>

                </div>                                                            
            </div>


    )
}

export default Product;