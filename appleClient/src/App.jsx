import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Iphone from "./components/pages/Iphone";
import Accessories from "./components/pages/Accessories";
import Store from "./components/pages/Store";
import Mac from "./components/pages/Mac";
import Card from "./components/pages/Card";
import Watch from "./components/pages/Watch";
import Vision from "./components/pages/Vision";
import AirPods from "./components/pages/Airpods";
import TV from "./components/pages/TV";
import Entertainment from "./components/pages/Entertainment";
import Support from "./components/pages/Support";
import Cart from "./components/pages/Cart";
import PageNotFound from "./components/pages/PageNotFound";
import SharedComponent from "./components/pages/SharedComponent";
import IphonePage from "./components/singlePage/IphonePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route path="/" element={<Main />} />
          <Route path="Store" element={<Store />} />
          <Route path="Mac" element={<Mac />} />
          <Route path="Card" element={<Card />} />
          <Route path="iPhone" element={<Iphone />} />
          <Route path="iPhone/:id" element={<IphonePage />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="Vision" element={<Vision />} />
          <Route path="AirPods" element={<AirPods />} />
          <Route path="TV&Home" element={<TV />} />
          <Route path="Entertainment" element={<Entertainment />} />
          <Route path="Support" element={<Support />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
