import React from "react";
import Header from "../Header/Header";
import FooterParent from "../Footer/FooterParent";

import { Outlet } from "react-router-dom";

function SharedComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterParent />
    </>
  );
}

export default SharedComponent;
