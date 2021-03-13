import React from "react";
import cssmod from "./Layout.module.css";

function Layout(props) {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={cssmod.Content}> {props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
