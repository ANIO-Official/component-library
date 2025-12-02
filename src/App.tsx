//import { useState } from 'react'
import './App.css'
import AlertBox from './components/AlertBox/AlertBox'
import ProductDisplay from './components/ProductDisplay/ProductDisplay'
import type { Product } from './types'
import Headphones from './assets/headphones-kyra-starr-pixabay.jpg'

//Fake Products
const product1:Product = {
  id: '94TUY65',
  name: 'Alienware Headgear 2057X9PRO',
  price: 79.99,
  description: `
  NEW lastest edition headphones from Alienware with a brand new twist in style! 
  LED lit, water cooling, jet stream system with a thick headband!
  AND Clippable accessories for the headband: UFO, Alien Cats, and more!
  WHAT'S YOUR COMBO?`,
  imageUrl: Headphones,
  imageAlt: "A blue and pink hair girl with galaxy headphones and a starry background.",
  inStock: true
}


function App() {

  return (
    <>
      <AlertBox
      type='success'
      message="You've successfully added item to the cart!"
      onClose={()=>alert('"Closed" the alert. :)')}>
        <p><i>You can't actually close this but let's be imaginative.</i></p>
      </AlertBox>

      <ProductDisplay
        product={product1}
        showDescription = {true}
        showStockStatus = {true}
        onAddToCart={(productId)=>alert(`Added ${product1.name} | ${productId} x 1`)}
      />
    </>
  )
}

export default App
