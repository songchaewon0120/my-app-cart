import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import ListFilter from './ListFilter.js';
import Product from './Product.js';

const Home = ({ products, setProducts, addComma }) => {
    useEffect(() => {
        axios.get("/products.json").then((data) => {
            setProducts(data.data.products)
        })
    }, [setProducts])

    const priceList = (type) => {
        const newProduct = [...products]
        if (type === 'row') {
            newProduct.sort((a, b) => a.price - b.price)
            setProducts(newProduct)
        } else if (type === 'high') {
            newProduct.sort((a, b) => b.price - a.price)
            setProducts(newProduct)
        }
    }

    return (
        <>
            <ListFilter priceList={priceList} />
            <ProductsDiv>
                {products.map((product) => {
                    return <Product key={`key-${product.id}`} product={product} addComma={addComma} />
                })}
            </ProductsDiv>
        </>
    )
}

const ProductsDiv = styled.div`
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:50px;

`;

export default Home;