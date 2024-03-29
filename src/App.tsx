import { Routes, Route, Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Navbar } from "./components";
import {
  HomePage,
  SeeAllPage,
  ProductPage,
  LoginPage,
  RegisterPage,
  PageNotFound,
  CartPage,
  StorePage,
} from "./pages";
import SearchPage from "./pages/SearchPage";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StorePage />} />
            <Route
              path="/all-products"
              element={<HomePage text="equipment" />}
            />
            <Route path="/gaming-mice" element={<HomePage text="mice" />} />
            <Route path="/gaming-audio" element={<HomePage text="audio" />} />
            <Route
              path="/gaming-keyboards"
              element={<HomePage text="keyboards" />}
            />
            <Route path="/gaming-chairs" element={<HomePage text="chairs" />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/mice" element={<SeeAllPage type={"mice"} />} />
            <Route path="/audio" element={<SeeAllPage type={"audio"} />} />
            <Route path="/chairs" element={<SeeAllPage type={"chairs"} />} />
            <Route
              path="/keyboards"
              element={<SeeAllPage type={"keyboards"} />}
            />
            <Route
              path="/accessories"
              element={<SeeAllPage type={"accessories"} />}
            />
            <Route path={`/mice/:id`} element={<ProductPage />} />
            <Route path={`/audio/:id`} element={<ProductPage />} />
            <Route path={`/keyboards/:id`} element={<ProductPage />} />
            <Route path={`/accessories/:id`} element={<ProductPage />} />
            <Route path={`/chairs/:id`} element={<ProductPage />} />
            <Route path={`/search`} element={<SearchPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
