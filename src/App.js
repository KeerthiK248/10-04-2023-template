import { BrowserRouter, Routes } from 'react-router-dom'
import {Route} from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'

function App() {
    return (
     <div >
        <BrowserRouter >
          <Navigation / >
            <Routes >
                
            <Route path = "/" element = { < Home / > } /> 
            <Route path = "/login" element = { < Login / > }/>
            <Route path = "/products" element = { < Products / > }/>
            </Routes>
        </BrowserRouter>  
        </div>
    )
}
export default App
//Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your
// component from the file it's defined in, or you might have mixed up default and named imports.