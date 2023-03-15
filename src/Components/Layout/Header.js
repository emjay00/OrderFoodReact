import mealsImage from '../../Assets/istock.jpg'
import classes from './Header.module.css'
import HeaderCart from './HeaderCart'

const Header = props => {
    return <>
    <header className={classes.header}>
        <h1>Indian Fusion</h1>
        <HeaderCart onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="tasty food"/>
    </div>
    </>
}

export default Header;