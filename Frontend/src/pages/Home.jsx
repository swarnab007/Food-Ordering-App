import React, { useState } from 'react'
import Header from '../components/Header'
import FoodList from '../components/FoodList'
import FoodItems from '../components/FoodItems';
import Footer from '../components/Footer';

const Home = () => {
  const [category, setCategory] = useState('all');

  return (
    <div className='Home'>
      <Header />
      <FoodList category={category} setCategory={setCategory} />
      <FoodItems category={category} />
      <Footer />
    </div>
  )
}

export default Home
