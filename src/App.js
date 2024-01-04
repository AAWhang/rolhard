import { Route, Routes, Link }  from "react-router-dom"
import { Aboutus } from "./views/aboutus"
import { BGVideo } from "./views/video"
import { Contactus } from "./views/Contactus"
import { Products } from "./views/product"
import { SalesAndInstallation } from "./views/salesAndInstallation"
import { Navbar, NavItem, DropdownMenu, DropdownItem } from "./views/header"
import './views/css/header.css';


function App() {
  return ( 
    <>
      <Navbar>
        <NavItem icon="😊" >
          <DropdownMenu>
           <Link to="/"><DropdownItem> Home</DropdownItem> </Link> 
           <Link to="/About"><DropdownItem>About us</DropdownItem></Link> 
           <Link to="/sales"><DropdownItem>Sales and Installation</DropdownItem></Link> 
           <Link to="/contact"><DropdownItem>Contact us</DropdownItem></Link> 
           <Link to="/products"><DropdownItem>Products</DropdownItem></Link>
          </DropdownMenu>
        </NavItem>
      </Navbar>
      
      <Routes>
        <Route path="/" element = {<BGVideo />}/>
        <Route path="/About" element = {<Aboutus />}/>
        <Route path="/sales" element = {<SalesAndInstallation />}/>
        <Route path="/contact" element = {<Contactus />}/>
        <Route path="/products" element = {<Products />}/>
      </Routes>
    </>
  );
}

export default App;
