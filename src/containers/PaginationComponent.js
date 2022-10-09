import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {setProducts} from '../redux/actions/productActions'

import Pagination from '@mui/material/Pagination';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#ee4d2d',
    },
    secondary: {
        main: '#ee4d2d',
    },
  },
  typography: {
    fontSize: 28,
  },
});

function PaginationComponent (count) {

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    // const products = useSelector((state) => state.allProducts.product)
    const dispatch = useDispatch()

    const fetchData = async () =>{
        const response = await axios.get(`https://dummyjson.com/products?limit=30&skip=${(page-1)*30}`)
        .catch((err)=>{
            console.log("Fetch Data Err",err)
        })
        dispatch(setProducts(response.data.products))
    }

    useEffect(()=>{
        fetchData()
    },
    // eslint-disable-next-line
    [page])


    return (
        <ThemeProvider theme={theme}>
            <Pagination count={count.count} color="primary" page={page} onChange={handleChange} size="large" shape="rounded"/>
        </ThemeProvider>
    )
}

export default PaginationComponent;