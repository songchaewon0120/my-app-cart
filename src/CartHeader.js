import styled from 'styled-components'

const CartHeader = ({ handleAllCheck, isAllChecked }) => {

    return (
        <CartStyle>
            <p className='text-1'>장바구니</p>

            <div className='box-1'>
                <input type='checkbox' onChange={(e) => { handleAllCheck(e.currentTarget.checked) }}
                checked={isAllChecked}/>
                <p>상품 정보</p>
                <p>수량</p>
                <p>상품 금액</p>
            </div>
        </CartStyle>
    )
}
const CartStyle = styled.div`
    .text-1{
        font-size: 30px;
        display: flex;
        justify-content: center;
    }

    .box-1{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 50px 20px 0px 20px;
        background-color: #eee;
        padding: 20px 0;
        border-radius: 20px;
        justify-items: center;
    }

`;

export default CartHeader;