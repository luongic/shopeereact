import ProductList from "./ProductList"
import Category from "./Category"


function Appbody(){
    return (
        <div className="app__container">
        <div className="grid wide">
            <div className="row sm-gutter app__content">
                <div className="col l-2 m-0 c-0">

                    <Category />

                </div>

                <div className="col l-10 m-12 c-12">

                    

                    <ProductList />

                </div>

            </div>
        </div>
    </div>
    )
}

export default Appbody