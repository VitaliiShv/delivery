import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ShopPage = lazy(() => import("./pages/shopPage/ShopPage"));
const OrderPage = lazy(() => import("./pages/orderPage/OrderPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/cart" element={<OrderPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
