import React from "react";
import { Route, Routes } from "react-router";

const MainLayout = React.lazy(() => import("../layouts/MainLayout"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
const NotFound = React.lazy(() => import("../pages/NotFoundPage"));
const SubLayout = React.lazy(() => import("../layouts/SubLayout"));
const SignInPage = React.lazy(() => import("../pages/SignInPage"));
const SignUpPage = React.lazy(() => import("../pages/SignUpPage"));
const ForgotPasswordPage = React.lazy(() =>
  import("../pages/ForgotPasswordPage")
);
const CartPage = React.lazy(() => import("../pages/CartPage"));
const ProductPage = React.lazy(() => import("../pages/ProductPage"));
const ProductDetailPage = React.lazy(() =>
  import("../pages/ProductDetailPage")
);
const AccountPage = React.lazy(() => import("../pages/AccountPage"));
const DetailOrderpage = React.lazy(() => import("../pages/DetailOrderPage"));

const Router = () => (
  <React.Suspense>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/product-detail/:name/:id"
          element={<ProductDetailPage />}
        />
        <Route path="/account/account-infomation" element={<AccountPage />} />
        <Route path="/account/business-information" element={<AccountPage />} />
        <Route path="/account/address" element={<AccountPage />} />
        <Route path="/account/order-management" element={<AccountPage />} />
        <Route path="/account/favourite" element={<AccountPage />} />
        <Route path="/account/voucher" element={<AccountPage />} />
        <Route path="/account/Ranking" element={<AccountPage />} />
        <Route path="/account/Wallet" element={<AccountPage />} />


        <Route
          path="/account/order-management/detail/:name"
          element={<DetailOrderpage />}
        />
      </Route>
      <Route path="/" element={<SubLayout />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </React.Suspense>
);

export default Router;
