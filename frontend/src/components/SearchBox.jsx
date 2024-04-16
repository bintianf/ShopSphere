import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/SearchBox.css';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  const categories = [
    { value: 'All', label: 'All' },
    { value: 'Books', label: 'Books' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Clothing', label: 'Clothing' },
  ];
  const [selectedOption, setSelectedOption] = useState('all'); // Initial state is 'All'

  const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
  };

  return (
      <Form onSubmit={submitHandler} className='d-flex align-items-center' style={{ width: '70%'}}>
        <Form.Control
          as="select"
          value={selectedOption}
          className="custom-select flex-shrink-1"
          style={{ width: '150px' }}
          onChange={handleSelectChange}
        >
          {
          categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </Form.Control>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder='Search'
          className='flex-grow-1'
        ></Form.Control>
        <Button type='submit' variant='primary' className='flex-shrink-1'>
          <FaSearch />
        </Button>
      </Form>
  );
};

export default SearchBox;
