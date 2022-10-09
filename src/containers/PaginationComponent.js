import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
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

function PaginationComponent (props, ref) {

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
        const {products, total} = response.data
        const payload = {
            products, 
            total
        }

        dispatch(setProducts(payload))
    }

    useEffect(()=>{
        fetchData()
    },
    // eslint-disable-next-line
    [page])

    useImperativeHandle(ref, ()=>({
        getCurrent: () =>{
            return page;
        },
    }))

    return (
        <ThemeProvider theme={theme}>
            <Pagination count={props.count} color="primary" page={page} onChange={handleChange} size="large" shape="rounded"/>
        </ThemeProvider>
    )
}
// eslint-disable-next-line
PaginationComponent = forwardRef(PaginationComponent)

export default PaginationComponent;