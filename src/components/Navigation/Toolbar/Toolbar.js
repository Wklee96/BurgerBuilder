import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Drawertoggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
    <header className={classes.Toolbar}>
        <Drawertoggle clicked={props.menuClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;