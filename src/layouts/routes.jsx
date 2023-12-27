import Layout from "./Layout.jsx";
import Register from "../components/web/register/Register.jsx";
import Login from "../components/web/login/Login.jsx";
import Home from "../components/web/home/Home.jsx";
import Categories from "../components/web/categories/Categories.jsx";
import Dashboardlayout from "./Dashboardlayout.jsx";
import HomeDashboard from '../components/dashboard/home/Home.jsx';
import CategoriesDashboard from '../components/dashboard/categories/Categories.jsx'
import { createBrowserRouter } from "react-router-dom";
import CategoriesDetails from "../components/web/categories/CategoriesDetails.jsx";
import Product from "../components/web/products/Product.jsx";
import Cart from "../components/web/cart/Cart.jsx";
import ProtectedRoute from "../components/web/protectedRoute/ProtectedRoute.jsx";
 export const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout  />,
      children:[
          {
            path:'register',
            element:<Register />
          },
          {
            path:'login',
            element:<Login />
          },
          {
            // path:'/',
            index:true,
            element:<Home />
          },
          {
            path:'cart',
            element:
            <ProtectedRoute>
                <Cart />
            </ProtectedRoute>
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
            path:'products/category/:categoryId',
            element:<CategoriesDetails/>
          },
          {
            path:'product/:productId',
            element:<Product/>
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboardlayout />,
        children:[{
        path:'home',
        element:<HomeDashboard />
      }
      ,{
        path:'categories',
        element:<CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
 
    }
  ]);