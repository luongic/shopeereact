import { useSelector } from "react-redux"


function Cartmini() {


    const cartItem = useSelector((state)=>state.cart.item)
    

    return (
        <div className="header__cart">
            <div className="header__cart-wrap">
                <i className="header__cart-icon fa-solid fa-cart-shopping"></i>

                <span className="header__cart-quantity">{cartItem.length}</span>

                {/* <!-- header__cart-list-no-item: className no item in cart --> */}

                <div className="header__cart-list ">

                    {cartItem.length > 0 ? <>
                    
                    <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                    <ul className="header__cart-list-item">

                        {cartItem.map((item, index)=>{
                            const newprice = (item.price - ((item.price*item.discountPercentage)/100)) *23000
                            return <li className="header__cart-item" key={index}>
                                        <img src={item.thumbnail} alt="" className="header__cart-item-img" />
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">{item.title}</h5>

                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-item-price">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newprice)}</span>
                                                    <span className="header__cart-item-multi">x</span>
                                                    <span className="header__cart-item-quantity">{item.quantity}</span>
                                                </div>                                                
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">Giảm giá: {Math.floor(item.discountPercentage)} %</span>
                                                <span className="header__cart-item-del">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                        })}

                        

                    </ul>

                    </> : <img src="https://luongic.github.io/shopeeClone/assets/img/no-item.png" alt="" className="header__cart-list-no-item-img" /> }

                    
                
                    

                    <button className="header__cart-view-cart btn btn-primary">Xem giỏ hàng</button>

                </div>

                

            </div>

            
        </div>
    )
}

export default Cartmini