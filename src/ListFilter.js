import styled from 'styled-components';


const ListFilter = ({ priceList }) => {
    return (
        <ListFilterStyle>
            <div className='filter-text'>
                <p onClick={() => priceList('row')}>낮은 가격</p>
                <p onClick={() => priceList('high')}>높은 가격</p>
            </div>
        </ListFilterStyle>
    )
}

const ListFilterStyle = styled.div`
    margin: 13px 10vw;
    .filter-text{
        display: flex;
        justify-content: flex-end;

        P{ 
            margin:10px;
        }    
        p:hover{
            cursor: pointer;
        }
        p:last-of-type{
            margin: 10px 0px 10px 10px;
        }
    }

`;

export default ListFilter;