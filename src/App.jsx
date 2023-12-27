import { RouterProvider} from "react-router-dom";
import { CartContextProvider } from "./components/web/context/Cart.jsx";
import UserContextProvider, { UserContext } from "./components/web/context/User.jsx";
import {router} from "./layouts/routes.jsx"
import { useContext, useEffect } from "react";
export default function App() {

  let {setUserToken} =useContext(UserContext);
useEffect(() =>{
if(localStorage.getItem("userToken")!=null){
  setUserToken(localStorage.getItem("userToken"));
}
},[]);
 
  return (
   
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
     
  )
}
