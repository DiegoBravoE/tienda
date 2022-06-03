import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import{filterCategory}from '../store/slices/product.slice'
import {Card,Row, Col} from "react-bootstrap";



const ProductDetail = () => {
const[categories,setCtegories]=useState({})

const{id}=useParams()
const dispatch=useDispatch()

const ProductList=useSelector(state=>state.product)
useEffect(()=>{
  
    axios.get(`  https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
    .then(res=>{
        setProducts(res.data.products);
      dispatch(filterCategory(res.data.products.id))
   
    })
},[])
    return (
      <div>
        <h1>{products.title}</h1>
        <img src={products.image} alt="" className="fluid-img" />
        <div>
          <h2>Sugerencias</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
          {newsList.map((newsItem) => (
            <Col>
              <Card style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src={newsItem.image} />
                <Card.Body>
                  <Card.Title>{newsItem.headline}</Card.Title>
                  <Card.Text>{newsItem.lead}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {newsItem.date}
                </Card.Footer>
              </Card>
            </Col>
          ))}
          </Row>
        </div>
      </div>
    );
};

export default ProductDetail;