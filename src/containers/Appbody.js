import ProductList from "./ProductList"
import Category from "./Category"


function Homefilter(){
    return (
        <div className="home-filter hide-on-mobile-tablet">
                        <span className="home-filter__label">Săp xếp theo</span>
                        <button className="home-filter__btn btn">Phổ biến</button>
                        <button className="home-filter__btn btn btn-primary">Mới nhất</button>
                        <button className="home-filter__btn btn">Bán chạy</button>

                        <div className="select-input">
                            <span className="select-input__label">Giá</span>
                            <i className="select-input__label-icon fa-solid fa-chevron-down"></i>

                            <ul className="select-input__list">
                                <li className="select-input__item">
                                    <a href="gg.com" className="select-input__item-link">Giá: Thấp đến Cao
                                    <i className="select-input__item-icon fa-solid fa-arrow-up-1-9"></i>

                                    </a>

                                    
                                </li>
                                <li className="select-input__item">
                                    <a href="gg.com" className="select-input__item-link">Giá: Cao đến Thấp
                                    <i className="select-input__item-icon fa-solid fa-arrow-down-9-1"></i>

                                    </a>

                                </li>
                            </ul>
                        </div>

                        <div className="home-filter__page">
                            <span className="home-filter__page-num">
                                <span className="home-filter__page-current">1</span>
                                /
                                <span className="home-filter__page-total">14</span>
                            </span>

                            <div className="home-filter__page-control">
                                <a href="gg.com" className="home-filter__page-btn home-filter__page-btn-disable">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>
                                </a>
                                <a href="gg.com" className="home-filter__page-btn">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
        </div>
    )
}



function Mobilecategory(){
    return (
        <nav className="mobile-category">
                        <ul className="mobile-category__list">
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">iPhone</a>
                            </li>
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">iPad</a>
                            </li>
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">MacBook Air</a>
                            </li>
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">MacBook Pro</a>
                            </li>
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">iMac</a>
                            </li>
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">Airpods 3</a>
                            </li>
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">Airpods Pro</a>
                            </li>
                            <li className="mobile-category__item">
                                <a href="gg.com" className="mobile-category__link">Apple Watch </a>
                            </li>
                        </ul>
                    </nav>
    )
}

function Appbody(){
    return (
        <div className="app__container">
        <div className="grid wide">
            <div className="row sm-gutter app__content">
                <div className="col l-2 m-0 c-0">

                    <Category />

                </div>

                <div className="col l-10 m-12 c-12">

                    <Homefilter />

                    <Mobilecategory />

                    <ProductList />

                </div>

            </div>
        </div>
    </div>
    )
}

export default Appbody