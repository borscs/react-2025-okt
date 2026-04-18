import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from "./pages/Products";
import {RouteLayout} from "./pages/RouteLayout";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";


// const routeDefinitions = createRoutesFromElements(
//   <Routes>
//     <Route path="/" element={<HomePage />} children={() => <Route/>} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Routes>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage/>}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
