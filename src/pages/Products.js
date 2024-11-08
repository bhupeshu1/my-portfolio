// Products.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <h1 className='font-extrabold text-blue-50'>Welcome to Products</h1>
      <input type='search' placeholder='Search the products' />
      <div className='flex gap-6'>
          <Link to='new'>New Features</Link>
          <Link to='feature'>Features</Link>
      </div>
      <Outlet /> {/* Child route content will render here */}
    </>
  );
};

export default Products;
