import React, { useState } from 'react'
import Header from '../components/Header'
import FoodList from '../components/FoodList'

const Home = () => {
  const [category, setCategory] = useState('all');

  return (
    <div className='Home'>
      <Header />
      <FoodList />
    </div>
  )
}

export default Home
 