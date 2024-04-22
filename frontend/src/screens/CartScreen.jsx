import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { IoHomeOutline } from "react-icons/io5";
import { FaTrash } from 'react-icons/fa';
import { FaChevronRight } from "react-icons/fa";
import '../assets/styles/cart.css';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // NOTE: no need for an async function here as we are not awaiting the
  // resolution of a Promise
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <Row>
      <Row className="cart-headline align-items-center">
        <Col lg={6} md={6}>
          <div className="cart-title">
            <h1>Cart</h1>
          </div>
        </Col>
        <Col lg={6} md={6}>
          <ul className="cart-nav">
            <li>
              <Link to="/" className="homelink">
                <IoHomeOutline className="homeicon" />
                Home
              </Link>
            </li>
            <li><FaChevronRight /></li>
            <li>Cart</li>
          </ul>
        </Col>
      </Row>
      <Col md={8} className="cart-list" >
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <>
          {/* Title Row */}
          <Row className="cart-list-title mb-3">
            <Col md={1}> {/* Empty for alignment */}</Col>
            <Col md={4}><p>Product Name</p></Col>
            <Col md={2}><p>Quantity</p></Col>
            <Col md={2}><p>Subtotal</p></Col>
            <Col md={2}><p>Remove</p></Col>
          </Row>
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      className="custom-select"
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>${Number((item.qty * item.price).toFixed(2))}</Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FaTrash style={{ color: 'red' }} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          </>
        )}
      </Col>
      <Col md={4} className='total-amount'>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h3>
              <ul>
                <li>Cart Subtotal
                  <span>
                      {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                  </span>
                </li>
                <li>Shipping<span>Free</span></li>
                <li>You Save<span>$0.00</span></li>
                <li>You Pay                  
                  <span>
                      {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                  </span>
                </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    
  );
};

export default CartScreen;
