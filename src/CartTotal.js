import { useEffect } from 'react'
import styled from 'styled-components'

const CartToal = ({ cart, total, setTotal, found, addComma }) => {

    useEffect(() => {
        if (found) {
            const temp = found.filter((item) => item.length !== 0)
            const sum = temp.map((item) => item[0].price * item[0].quantity)
            const reducer = (acc, cur) => acc + cur
            if (sum.length === 0) {
                setTotal(0)
                return
            }
            const itemTotal = sum.reduce(reducer)
            setTotal(itemTotal)
        } else {
            setTotal(0)
        }
    }, [cart, total, setTotal, found])
    return (
        <CartStyle>
            <div className='box-3'>
                <div>
                    <p>총 상품금액</p>
                    <p>{addComma(total)}</p>
                </div>
                <div>
                    <p>배송비</p>
                    <p>무료</p>
                </div>
                <div>
                    <p>결제 예정 금액</p>
                    <p>{addComma(total)}</p>
                </div>
            </div>
        </CartStyle>
    )
}

const CartStyle = styled.div`
    .box-3{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: #eee;
        margin: 40px 20px 20px 20px;
        padding: 20px 0;
        border-radius: 20px;
        justify-items: center;
    }

`;
export default CartToal;