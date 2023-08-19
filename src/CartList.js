import styled from 'styled-components'

const CartList = ({ addComma, cart, setCart, handleNum, handleRemove, handleCheck, checkInput, setCheckInput }) => {

    return (
        <CartStyle>
            <div className='box-2'>
                <input type='checkbox' onChange={(e) => { handleCheck(e.currentTarget.checked, cart.id) }}
                    checked={checkInput.includes(cart.id) ? true : false} />
                <div className='detail-box'>
                    <img src={cart.image} alt='상품 이미지' />
                    <div className='detail-box-text'>
                        <p>{cart.provider}</p>
                        <p>{cart.name}</p>
                        <p>{addComma(cart.price)}</p>
                        <div className='text-1'>
                            <div>택배배송/</div>
                            <div>무료배송</div>
                        </div>
                    </div>
                </div>
                <div className='btn'>
                    <svg className='btn-1' onClick={() => handleNum('minus', cart.id, cart.quantity - 1)}
                        height="22px" id="Layer_1" style={{ enableBackground: 'new 0 0 512 512' }} fill='#ddd' version="1.1" viewBox="0 0 512 512" width="512px"><path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" /></svg>
                    {cart.quantity}
                    <svg className='btn-1' onClick={() => handleNum('plus', cart.id, cart.quantity + 1)}
                        height="22px" id="Layer_1" style={{ enableBackground: 'new 0 0 512 512' }} fill='#ddd' version="1.1" viewBox="0 0 512 512" width="512px"><path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256  c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" /></svg>
                </div>
                <div className='btn-2'>주문하기</div>
                <div className='x-btn' onClick={() => handleRemove(cart.id)}>
                    <svg class="feather feather-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
                </div>
            </div>
        </CartStyle>

    )

}
const CartStyle = styled.div`
    .btn-2{
        width: 120px;
        background-color: #8DD6C6;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 30px;
        padding: 10px;
    }
    .btn-2, .btn, .x-btn :hover{
        cursor: pointer;
    }
    .btn{
        display: flex;
        border: 1px solid #ddd;
        border-radius: 20px;
        width: 120px;
        height: 40px;
        justify-content: center;
        align-items: center; 
    }
    .box-2{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 30px 20px 0px 20px;
        border: 1px solid #eee;
        padding: 20px 0;
        border-radius: 20px;
        position: relative;
        justify-items: center;
        align-items: center;
        }

        .detail-box{
            img{
                width: 150px;
            }
            display: flex;
            .detail-box-text{
                margin-left: 5px;
                p{
                    white-space: nowrap;
                    margin-top: 7px;
                }
                p:nth-child(1){
                    font-size: 15px;
                }
                :nth-child(2){
                    
                }
                :nth-child(3){
                    font-size: 17px;
                }
                .text-1{
                    white-space: nowrap;
                    font-size: 13px;
                    display:flex;
                }
            }
        }

        .x-btn{
            position: absolute;
            top: 10px;
            right: 15px;
            /* transform: translate(0%, -50%); */
        }


`;


export default CartList;