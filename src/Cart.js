import CartHeader from './CartHeader'
import CartList from './CartList'
import CartToal from './CartTotal'
import NoCart from './NoCart'
import { useState } from 'react'

const Cart = ({ cart, setCart, checkInput, setCheckInput, addComma }) => {

    const [total, setTotal] = useState(0)

    const handleCheck = (checked, id) => {
        if (checked) {
            setCheckInput([...checkInput, id])
        } else {
            setCheckInput(checkInput.filter((check) => check !== id))
        }
    }

    const handleAllCheck = (checked) => {
        if (checked) {
            const checkItems = []
            cart.filter((cart) => checkItems.push(cart.id))
            setCheckInput(checkItems)
        } else {
            setCheckInput([])
        }
    }
    
    const isAllChecked = cart.length === checkInput.length && checkInput.length !== 0
    const found = checkInput.map((checkList) => {
        return (
            cart.filter((el) => el.id === checkList)
        )
    })

    const handleNum = (type, id, quantity) => {
        const found = cart.filter((el) => el.id === id)[0];
        const idx = cart.indexOf(found)

        const cartItem = {
            id: found.id,
            image: found.image,
            name: found.name,
            price: found.price,
            quantity: quantity,
            provider: found.provider,
        }
        if (type === 'plus') {
            setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)])
        } else {
            if (quantity === 0) {
                return;
            } else {
                setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)])
            }
        }
    }

    const handleRemove = (id) => {
        setCart(cart.filter((el) => el.id !== id))
        setCheckInput(checkInput.filter((check) => check !== id))
    }


    return (
        <>
            <CartHeader handleAllCheck={handleAllCheck} isAllChecked={isAllChecked} />
            {cart.length == 0 ? (
                <NoCart />
            ) :
                cart.map((cart) => {
                    return (
                        <CartList addComma={addComma} checkInput={checkInput} setCheckInput={setCheckInput} cart={cart} handleNum={handleNum} handleRemove={handleRemove} handleCheck={handleCheck} />
                    )
                })
            }
            {cart.length == 0 ? null :
                <CartToal addComma={addComma} cart={cart} total={total} setTotal={setTotal} found={found} />}
        </>
    )

}



export default Cart;