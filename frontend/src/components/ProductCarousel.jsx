import { Link } from 'react-router-dom';
import { Carousel, Image, Button } from 'react-bootstrap';
import { FaChevronLeft } from "react-icons/fa";
import React, { useRef } from 'react';
import { FaChevronRight } from "react-icons/fa";
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import '../assets/styles/ProductCarousel.css';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  const carouselRef = useRef(null);
  function handleNavigation(direction) {
    if (direction === 'prev') {
        carouselRef.current.prev();
    } else {
        carouselRef.current.next();
    }
    // Force blur after action to reset button state
    document.activeElement.blur();
  }
  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <div className="carousel-container">
      <Carousel ref={carouselRef} pause='hover' className='mb-4'  indicators={true}>
        {products.map((product) => (
          <Carousel.Item key={product._id}>
            <div className="carousel-flex-container">
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid className="carousel-image"/>
              </Link>
              <div className="carousel-info">
                <span className='title'>Big Sale Offer</span>
                <span className='product-name'>{product.name}</span>
                <p>{product.description}</p>
                <Button href={`/product/${product._id}`} variant="primary" className="shop-now-button">
                  Shop Now
                </Button>
              </div>
            </div>
            <Carousel.Caption>
              <h2 className='text-white'>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Button variant="primary" className="carousel-control-prev"  onClick={() => handleNavigation('prev')}>
        <FaChevronLeft />
      </Button>
      <Button variant="primary" className="carousel-control-next" onClick={() => handleNavigation('next')}>
        <FaChevronRight />
      </Button>
    </div>
  );
};

export default ProductCarousel;
