import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNews, filterProducts ,filterCategory} from "../store/slices/product.slice";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  Row,
  ListGroup,
  
} from "react-bootstrap";

import axios from "axios";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const products = useSelector((state) => state.products);
const[categories,setCategories]=useState({})


  useEffect(() => {
    dispatch(getNews());

    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
    .then(res=>setCategories(res.data.products))

  }, []);
console.log(categories)
  const filterProducts = () => {
    dispatch(filterProducts(search));
    
  };
  const selectCategory =(id)=>{
    dispatch(filterCategory(id));
  };

  return (
    <div>
      <h1>Home</h1>
      
      <Row className="g-4">
                <Col lg={3} className="mb-4">
                    <h4>Categories</h4>
                    <ListGroup>
                        {
                            categories.map(category => (
                                <ListGroup.Item key={category.id} onClick={() => selectCategory(category.id)}>
                                    {category.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>


                <Col>
                
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search news"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={filterNews}>
                            Button
                        </Button>
                    </InputGroup>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            products.map(productsItem => (
                                <Col>
                                    <Card style={{ cursor: "pointer" }} onClick={() => navigate(`/products/${productsItem .id}`)}>
                                        <Card.Img variant="top" src={productsItem.productImgs} />
                                        <Card.Body>
                                            <Card.Title>{productsItem.products.title}</Card.Title>
                                            <Card.Text>
                                                {productsItem.products.price}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">{productsItem.products.status}</Card.Footer>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>

            </div>

  );
};

export default Product;
