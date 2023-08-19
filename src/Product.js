import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Product = ({ product, addComma }) => {
    return (
        <ProductStyle>
            <Link to={`/Product/${product.id}`} >
                <div className='group'>
                    <img src={product.image} alt='상품이미지' />
                    <p>{product.provider}</p>
                    <p>{product.name}</p>
                    <div className='Price'>
                        <p>{addComma(product.price)}</p><span>원</span>
                    </div>
                </div>
            </Link>
        </ProductStyle >
    )
}

const ProductStyle = styled.div`

    p{
        margin:5px 0px;
    }

    img{
        width:350px;
        border-radius: 25px;
    }
    .group{
        :not(:first-child){
            /* margin-left: 20px; */
        }
    }
    .Price{
        display: flex;
        align-items: center;
        :last-child{
            margin-left: 10px;
        }
        :first-child{
            font-weight: 600;
            font-size: 17px; 
        }
    }
`;

export default Product;