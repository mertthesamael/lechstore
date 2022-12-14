import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LechContext } from "../../store/context";
import styles from "./menu.module.scss"



const Menu = () => {
   
    const ctx = useContext(LechContext)
    const stateHandler = () => {
        return(ctx.onMenuState(false))
    }
    return(
        <div className={styles.menu} style={ctx.menuState?{left:'0rem'}:{left:'-50rem'}}>
            <div className={styles.menu__items}>
            <NavLink onClick={stateHandler} to='/products'>Products</NavLink>
            <NavLink onClick={stateHandler} to='/about'>About</NavLink>
            {ctx.user.loggedIn&&<NavLink onClick={stateHandler} to='/profile'>Profile</NavLink>}
            </div>
        </div>
    )

}

export default Menu;