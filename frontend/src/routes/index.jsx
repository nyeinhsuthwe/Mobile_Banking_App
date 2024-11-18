import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

import Home from '../pages/Home'
import Message from '../pages/Message'
import MySetting from '../pages/MySetting'
import Transfer from '../pages/Transfer'
import InputAmount from "../pages/InputAmount";
import App from '../App'
import InputPassword from "../pages/InputPassword";
import RegisterForm from "../pages/RegisterForm";
import Topup from "../pages/Topup";
import CreateData from "../pages/CreateData";
import LoginForm from "../pages/LoginForm";
// import { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext.jsx';


export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // let { user } = useContext(AuthContext);
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App/> ,

          children :[
            {
              path: "/",
              element: <Home/> 
            },
            {
              path: "/message",
              element: <Message/>
            },
            {
              path:'/mysetting',
              element: <MySetting/>
            },
            {
              path:'/transfer',
              element:  <Transfer/>
            },
            {
              path:'/enter-amount',
              element: <InputAmount/>
            },
            {
              path:'/enter-password',
              element: <InputPassword/>
            },
            {
              path:'/register',
              element: <RegisterForm/> 
            },
            {
              path:'/login',
              element:  <LoginForm/> 
            },
            {
              path:'/top-up',
              element: <Topup/>
            },
            {
              path:'/createdata',
              element: <CreateData/> 
            },
            {
              path:'/editdata/:id',
              element: <CreateData/>
            }
          ]
        },
        
      ]);
  return (
    <div><RouterProvider router={router}/></div>
  )
}
