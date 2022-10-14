import { useDispatch } from 'react-redux'
import axios from 'axios'

import {setProducts} from '../redux/actions/productActions'
import { useEffect, useState } from 'react'

function Search(){

    const dispatch = useDispatch()
    const [searchHistory,setSearchHis] = useState(JSON.parse(localStorage.getItem('searchHis')) ?? [])
    const [searchQuerry, setSearchQuerry] = useState('')

    

    const fetchData = async (querry) =>{
        const response = await axios.get(`https://dummyjson.com/products/search?q=${querry}`)
        .catch((err)=>{
            console.log("Fetch Data Err",err)
        })
        const {products, total} = response.data
        let payload = {
            products, 
            total
        }

        const nullRes = {
                id: 0,
                title: "Khong tim thay san pham",
                description: "San pham tim kiem khong ton tai",
                price: 0,
                discountPercentage: 0.0,
                rating: 0.0,
                stock: 0,
                brand: "Null",
                category: "Null",
                thumbnail: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
                images: ['https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg']
        }

        if(products.length !== 0){
            dispatch(setProducts(payload))
        }
        else{
            payload.products = [nullRes]
            dispatch(setProducts(payload))
        } 
    }

    const addTohistory = (querry) => {
        let historySearch = (JSON.parse(localStorage.getItem('searchHis')) ?? [])

        const bill = historySearch.find(bill => bill === querry);

        if (bill){
            
        }
        else {
            
            if (querry !== ''){
                historySearch.unshift(querry)
                if(historySearch.length > 5){
                    historySearch.pop()
                }
            }
            localStorage.setItem('searchHis', JSON.stringify(historySearch))
        }
    }

    const [reset, setReset] = useState(false)
    useEffect(() => {
        setSearchHis(JSON.parse(localStorage.getItem('searchHis')) ?? [])
    }, [reset])

    function delHistory(e,index){
        e.stopPropagation()
        let historySearch = ((JSON.parse(localStorage.getItem('searchHis'))) ?? [])
        historySearch.splice(index, 1)
        localStorage.setItem('searchHis', JSON.stringify(historySearch))
        setReset(!reset)
    }

    const handleSearchClick = (querry) => {
        setSearchQuerry(querry)
        addTohistory(querry)
        setReset(!reset)
        fetchData(querry)
    }

    return (
        <div className="header__search">
                        <div className="header__search-input-wrap">

                            <input type="text" className="header__search-input"
                                value={searchQuerry}
                                onChange={e => setSearchQuerry(e.target.value)}
                            placeholder="Nhập để tìm kiếm" />

                            <div className="header__search-history">
                                <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                                <ul className="header__search-history-list">

                                    {/* Get search history from localstorage and display here */}
                                    {searchHistory.length === 0 ? <li className="header__search-history-item">
                                                    <div> <i>Let search something for you </i></div>
                                                    
                                                </li> : 
                                    searchHistory.map((item, index)=>{
                                        return <li className="header__search-history-item" key={index} onClick={()=> handleSearchClick(item)}>
                                                    <div >{item}</div>
                                                    <div className="header__search-history-item__clear" 
                                                        onClick={(e)=> delHistory(e,index)}
                                                    > x </div>
                                                </li>
                                    })
                                     }
                                    
                                    
                                </ul>
                            </div>

                        </div>

                        {/* <div className="header__search-select">
                            <span className="header__search-select-label">Trong shop</span>
                            <i className="header__search-select-icon fa-solid fa-chevron-down"></i>

                            <ul className="header__search-option">
                                <li className="header__search-option-item header__search-option-item--active">
                                    <span>Trong shop</span>
                                    <i className="fa-solid fa-check"></i>
                                </li>
                                <li className="header__search-option-item">
                                    <span>Ngoài shop</span>
                                    <i className="fa-solid fa-check"></i>
                                </li>
                            </ul>
                        </div> */}

                        <button className="header__search-btn" onClick={()=>handleSearchClick(searchQuerry)} >
                            <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>

                    </div>
    )

}

export default Search