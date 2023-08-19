import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'


const DetailPage = ({ addComma, cart, setCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

    const numberChange = (type) => {
        if (type === "plus") {
            setCount(count + 1)
        } else {
            if (count < 2)
                return;
            setCount(count - 1)
        }
    }

    //중복
    const overlapCart = (id, quantity) => {
        const found = cart.filter((el) => el.id === id)[0]
        const idx = cart.indexOf(found)
        const cartItem = {
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            provider: product.provider,
            quantity: quantity
        }
        setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)])

    }
    const addCart = () => {
        const cartItem = {
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            provider: product.provider,
            quantity: count
        }
        const found = cart.find((el) => el.id === cartItem.id)
        if (found) overlapCart(product.id, found.quantity + count)
        else {
            setCart([...cart, cartItem])
        }
    }
    // console.log(cart + "카트")
    // console.log(count + '카운트')

    useEffect(() => {
        axios.get("/products.json").then((data) => {
            setProduct(data.data.products.find((product) => product.id === parseInt(id)))
            //스트링으로 떠서 정수로 바꿔줌
        })
    }, [])
    console.log(cart)
    return (
        //제품이 있어야 리턴되도록
        product && (
            <DetailDiv>
                <div className='all-group'>
                    <img className='img' src={product.image} alt='상품 이미지' />
                    <div className='right-group'>
                        <div>
                            <div className='text-1'>
                                <p>{product.provider}</p>
                                <p>{product.name}</p>
                            </div>
                            <div className='text-2'>
                                <p>{addComma(product.price + "")}</p>
                                <span>원</span>
                            </div>
                        </div>
                        <div>
                            <div className='btn'>
                                <svg onClick={() => numberChange("minus")}
                                    height="22px" id="Layer_1" style={{ enableBackground: 'new 0 0 512 512' }} fill='#ddd' version="1.1" viewBox="0 0 512 512" width="512px"><path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" /></svg>
                                {count}
                                <svg onClick={() => numberChange("plus")}
                                    height="22px" id="Layer_1" style={{ enableBackground: 'new 0 0 512 512' }} fill='#ddd' version="1.1" viewBox="0 0 512 512" width="512px"><path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256  c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" /></svg>
                            </div>
                            <div className='text-4'>
                                <p>총 상품 금액</p>
                                <div className='text-5'>
                                    <p>총 수량</p>
                                    <p>{count}</p>
                                    <span>개</span>
                                    <span>|</span>
                                    <p>{addComma(count * product.price + "")}</p>
                                    {/* toString오류나서 스트링으로 바꿔줌 */}
                                    <span>원</span>
                                </div>
                                <div className='btn2'>
                                    <button>바로 구매</button>
                                    <button onClick={() => addCart()}>장바구니</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DetailDiv>
        ))
}

const DetailDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    
    .all-group{
        display: flex;
        margin-bottom: 40px;
    }
    .right-group{
        margin-left: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 30vw;
        min-width: 20vw;
    }
    .img{
        width:500px;
        border-radius: 30px;
    }
    .text-1{
        p{
            margin: 10px 0px;
        }
        :nth-child(1){
            font-size: 16px;
        }
        :nth-child(2){
            font-size: 30px;
        }
    }
    .text-2{
        display: flex;
        align-items: center;
        :nth-child(1){
            font-size: 25px;
        }
    }
    .btn{
        border: 1px solid #ddd;
        border-radius: 20px;
        display: flex;
        width: 200px;
        padding: 7px 0px;
        margin-bottom: 20px;
    }
    .text-5{
        margin-top: 10px;
        display: flex;
        align-items: center;
        :nth-child(1){
            margin-right: 10px;
        }
        :nth-child(4){
            margin: 0px 10px;
        }
        :nth-child(5){
            font-size: 20px;
        }
    }
    .btn2 button, .btn svg:hover{
        cursor: pointer;
    }
    .btn2{
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 10px;
        :nth-child(1){
            width: 100%;
            height: 50px;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
        :nth-child(2){
            width: 100%;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
    }
`;


export default DetailPage;