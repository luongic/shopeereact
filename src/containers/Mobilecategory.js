import { useDispatch, useSelector } from "react-redux";
import { selectedCategory } from '../redux/actions/categoryActions'
import axios from 'axios'
import { removeSelectedCategory } from "../redux/actions/categoryActions";
import { setProducts } from "../redux/actions/productActions";


function Mobilecategory(){
    const dispatch = useDispatch()
    const category = useSelector((state) => state.allCategories.category)
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

    const handleCategoriesclick = (item) => {
        dispatch(selectedCategory(item))
        // setCurrenCate(item)
        fetchData(item)
    }

    const handleAllclick = () =>{
        dispatch(removeSelectedCategory())
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
        <nav className="mobile-category">
            <ul className="mobile-category__list">

                <li className="mobile-category__item"  onClick={()=>handleAllclick()}>
                    <div className="mobile-category__link">All</div>
                </li>

                {category.map((item, index) => {
                    return (
                        <li className="mobile-category__item"  key={index} onClick={()=>handleCategoriesclick(item)}>
                            <div className="mobile-category__link">{item}</div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Mobilecategory