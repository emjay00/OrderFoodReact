import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCart.module.css'
import CartContext from "../../store/Cart-context";

const HeaderCart = props => {
    const [btnHighlight, setBtnHighlight] = useState(false)
    const cartctx = useContext(CartContext);

    const cartItemsLength = cartctx.items.reduce((number, item) => {
        return number + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`
    const { items } = cartctx;

    useEffect(() => {
        if (cartctx.items.length === 0) {
            return;
        }
        setBtnHighlight(true)
        const timer = setTimeout(() => {
            setBtnHighlight(false)
        }, 300)
        return()=>{
            clearTimeout(timer);
        }
    }, [items])

    return <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.icon}>
            <CartIcon /></span>
        <span >Your Cart</span>
        <span className={classes.badge}>
            {cartItemsLength}
        </span>
    </button>
}

export default HeaderCart;