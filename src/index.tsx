import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dashboard } from './Layout/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPg } from './Page/LoginPg';
import { Main } from './content/Main';
import { GiftCheck } from './content/GiftCheck';
import { GiftRegister } from './content/GiftRegister';
import { CollectCheck } from './content/CollectCheck';
import { MarketRegister } from './content/MarketRegister';
import { AllGift } from './content/AllGift';
import { BanManage } from './content/BanManage';
import { BanBrandManage } from './content/BanBrandManage';
import { SubstitutionWordManage } from './content/SubstitutionWord';
import { BanCodeManage } from './content/BanCodeManage';
import { SiteApi } from './content/SiteApi';
import { Coupang } from './content/Coupang';
import { Eleven } from './content/Eleven';
import { GMarket } from './content/GMarket';
import { Auction } from './content/Auction';
import { Interpark } from './content/Interpark';
import { LotteOn } from './content/LotteOn';
import { EtcSetting } from './content/EtcSetting';
import { Template } from './content/Template';
import { MarketTemplate } from './content/MarketTemplate';
import { ImgTemplate } from './content/ImgTemplate';
import { MarginTemplate } from './content/MarginTemplate';
import { TagTemplate } from './content/TagTemplate';

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
{
      
  path: "/gift-check",
  element: <GiftCheck/>
},
{
      
  path: "/gift-register",
  element: <GiftRegister/>
},
{
      
  path: "/collect-check",
  element: <CollectCheck/>
},
{
      
  path: "/market-register",
  element: <MarketRegister/>
},
{
      
  path: "/all-gift",
  element: <AllGift/>
},
{
      
  path: "/ban-manage",
  element: <BanManage/>
},
{
      
  path: "/ban-brand-manage",
  element: <BanBrandManage/>
},
{
      
  path: "/substitution-word-manage",
  element: <SubstitutionWordManage/>

},
{
      
  path: "/ban-code-manage",
  element: <BanCodeManage/>

},
{
      
  path: "/smart-store",
  element: <SiteApi/>

},{
      
  path: "/coupang",
  element: <Coupang/>

},
{
      
  path: "/eleven",
  element: <Eleven/>

},
{
      
  path: "/gmarket",
  element: <GMarket/>

},{
      
  path: "/auction",
  element: <Auction/>

},
{
      
  path: "/interpark",
  element: <Interpark/>

},
{
      
  path: "/lotte-on",
  element: <LotteOn/>

},
{
      
  path: "/etc-setting",
  element: <EtcSetting/>

},
{
      
  path: "/delivery-template",
  element: <Template/>

},
{
      
  path: "/market-template",
  element: <MarketTemplate/>

},
{
      
  path: "/img-template",
  element: <ImgTemplate/>

},
{
      
  path: "/margin-template",
  element: <MarginTemplate/>

},{
      
  path: "/tag-template",
  element: <TagTemplate/>

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
