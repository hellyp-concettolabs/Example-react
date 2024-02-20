import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Color from './Color.jsx'
import Car from './Car.jsx'
import Props from './Props'
import Test from './test.jsx'
import Useeffect from './Useeffect.jsx'
import Useref from './Useref.jsx'
import Usememo from './Usememo';
//import Usecallback from './Usecallback'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <Color/>
    <Car/> 
    <Props />
    <Test/> 
    <Useeffect />
    <Useref/>
    <Usememo/> 
    {/* <Usecallback/> */}
    </>
  </React.StrictMode>,
)
