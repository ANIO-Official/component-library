//import { useState } from 'react'
import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import type { Product, User } from "./types";
import Headphones from "./assets/products/headphones-kyra-starr-pixabay.jpg";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";

//Fake Products
const product1: Product = {
  id: "94TUY65",
  name: "Alienware Headgear 2057X9PRO",
  price: 79.99,
  description: `
  NEW lastest edition headphones from Alienware with a brand new twist in style! 
  LED lit, water cooling, jet stream system with a thick headband!
  AND Clippable accessories for the headband: UFO, Alien Cats, and more!
  WHAT'S YOUR COMBO?`,
  imageUrl: Headphones,
  imageAlt:
    "A blue and pink hair girl with galaxy headphones and a starry background.",
  inStock: true,
};

const user1: User = {
  id: "user9945623",
  name: "Calli Fornia",
  email: "calli.fornia@hotmail.com",
  role: "Admin",
};

function App() {
  return (
    <>
      <div className="row row-cols-2">
        <div className="col-md-12">
          <h2>Initial Testing</h2>
        </div>
        <br />
        <br />
        <div className="col-md-6">
          <UserProfileCard
            user={user1}
            showEmail={true}
            showRole={false}
            onEdit={(userId, userName) =>
              alert(`Editing ${userName} | ${userId}`)
            }
          />
          <br/>
          <div className="col-md">
            <AlertBox
              type="success"
              message="You've successfully added item to the cart!"
              onClose={() => alert('"Closed" the alert. :)')}
            >
              <p>
                <i>You can't actually close this but let's be imaginative.</i>
              </p>
            </AlertBox>
          </div>
        </div>
        <div className="col-md-6">
          <ProductDisplay
            product={product1}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={(productId, productName) =>
              alert(`Added ${productName} | ${productId} x 1`)
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
