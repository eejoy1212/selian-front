import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DashboardLayout } from './Layout/DashboardLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPg } from './Page/LoginPg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(

  [
    {
      path:"/",
      element:<LoginPg/>,
    },
{
  element:<DashboardLayout/>,
  //내부 화면만 교체
  children:[
{
      
  path: "/main",
  element: <></>
},

]
}

],

);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
