import styled from 'styled-components';
import logo1 from './logo_1.png';
import { Link } from 'react-router-dom'

function TopNav({ cart }) {

    return (
        <TOPMENU>
            <div className='top-menu-group'>
                <Link to="/" >
                    <img src={logo1} alt="logo1.png" width="200px" />
                </Link>
                <div>
                    <div className='top-menu'>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="40px"><title /><circle cx="12" cy="8" fill="#000" r="4" /><path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" fill="#000" /></svg>
                        <p>로그인</p>
                    </div>
                    <Link to="/Cart">
                        <div className='top-menu'>
                            <div className='cart-relative'>
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="40px"><path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" /><path d="M0 0h48v48H0z" fill="none" />
                                </svg>{cart.length > 0 ? (
                                    <CARTNUMBER>{cart.length}</CARTNUMBER>
                                ) : null}
                            </div>
                            <p>장바구니</p>
                        </div>
                    </Link>
                </div>
            </div>
        </TOPMENU>
    )
}

const CARTNUMBER = styled.div`
    position: absolute;
    top: -5px;
    right: -7px;
    width: 20px;
    text-align: center;
    background-color: #17BFBF;
    border-radius: 100%;
`

const TOPMENU = styled.div`
    border-bottom: 1px solid black;
    .cart-relative{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .top-menu-group{
        margin: 10px 10vw;    
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .top-menu {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        
    }
    .top-menu:first-of-type{
        margin-right: 20px;
    }

             `;

export default TopNav;