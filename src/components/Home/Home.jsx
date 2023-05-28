import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Navegacion } from '../Navbar/Navbar';
import { Product } from '../product/Product';
// import { Products } from '../Products/Products';
import { List } from '../List/List';

export const Home = () => {

  const [user, setUser] = useState([])


  const fetchData = () =>{
    return axios.get("https://schema.getpostman.com/json/collection/v2.1.0/collection.json")
    .then((response) =>setUser(response.data));
  }

  





  return (
    <>
      <Navegacion /> 
      <hr/>
      <Product />
      <hr/>
      {/* <Products /> */}
      <List />
    
    </>
  )
}
