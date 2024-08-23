import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dashboard } from './Layout/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPg } from './Page/LoginPg';
import { Main } from './content/Main';

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
  element:<Dashboard/>,
  //내부 화면만 교체
  children:[
{
      
  path: "/main",
  element: <Main/>
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
