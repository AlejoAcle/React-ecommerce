import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export const Home = () => {

  const [user, setUser] = useState([])


  const fetchData = () =>{
    return axios.get("https://schema.getpostman.com/json/collection/v2.1.0/collection.json")
    .then((response) =>setUser(response.data));
  }

  





  return (
    <>
      
    
    
    </>
  )
}
