import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts,filterProducts } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';
import {ListGroup,Card, Col,  Row } from 'react-bootstrap';
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const[ categories,setCategories]=([]);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
    .then(res=>setCategories(res.data.data.categories))
  }, []);

  
  const filterTitle = () => {
    alert(search);
    dispatch(filterProducts(search));
  };
  const selectCategory=(id)=>{
    alert(id)
  }
  return (
    <div>

<Col lg={3} className="mb-4">
                    <h4>Categories</h4>
                    <ListGroup>
                        {
                            categories.map((category )=> (
                                <ListGroup.Item key={category.id} onClick={() => selectCategory(category.id)}>
                                    {category.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>

      <div className="input-group mb-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={filterTitle}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
      <div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col>
              <Card
                key={product.id}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <Card.Img variant="top" src={product.productImgs} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {product.price}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;