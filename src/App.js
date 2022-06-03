import { HashRouter, Route, Routes } from "react-router-dom";
import { Product, Favorites, Login, ProductDetail } from "./pages";
import{LoadingScreen}from "./components"
import { Container } from "react-bootstrap";

import "./App.css";
import { useSelector } from "react-redux";

function App() {

const isLoading=useSelector(state=>state.isLoading)


  return (
    <div className="App">
      <HashRouter>
        <Container>
          {isLoading && <LoadingScreen/>}
          <Routes>
            <Route path="/" element={<Product/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </HashRouter>
    </div>
     );
    }
    
    export default App;
    