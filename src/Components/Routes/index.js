import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category";
//import Home from "../../Pages/Home";
import Mission from "../../Pages/About Us/Mission";
import WhatWeOffer from "../../Pages/About Us/WhatWeOffer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
      <Route path="/mission-statement" element={<Mission />} />
      <Route path="/what-we-offer" element={<WhatWeOffer />} />
    </Routes>
  );
}
export default AppRoutes;
