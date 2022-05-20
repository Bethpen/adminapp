import React from 'react';
import Products from './Products'
import {useGlobalContext} from '../../context/darkModeContext'
import './productList.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const ProductList = () => {
    const { products } = useGlobalContext();
    if (products.length < 1) {
        return (
            <div className="list">
            <Sidebar/>
            <div className="listContainer">
              <Navbar/>
              <h2 className='section-title'>no products found</h2>
            </div>
          </div>
        )
      }
      return (
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
        <section className='section'>
          <h2 className='section-title'>
            products
          </h2>
          <div className="products-center">
            {products.map((item) => {
              return <Products key={item.id} {...item} />
            })}
          </div>
        </section>
        </div>
      </div>
    )

}

export default ProductList