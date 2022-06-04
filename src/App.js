import { HashRouter, Route, Routes }from "react-router-dom";
import {  Home,Purchases , Login, ProductDetail }from "./pages";
import{LoadingScreen}from "./components";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import './App.css';
function App() {

const isLoading=useSelector(state=>state.isLoading)


  return (
    <div>
      <HashRouter>
        <Container>
          {isLoading && <LoadingScreen/>}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/Purchases" element={<Purchases />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </HashRouter>
    </div>
     );
    }
    
    export default App;
    