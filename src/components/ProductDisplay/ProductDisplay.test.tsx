import type { Product } from "../../types";
//Images
import Headphones from "../../assets/products/headphones-kyra-starr-pixabay.jpg"
import Mic from "../../assets/products/microphone-2469295_640.jpg"
import Laptop from "../../assets/products/laptop-593673_640.jpg"
//Fake Products
export const product1: Product = {
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

export const product2: Product = {
  id: "55TOP88",
  name: "HyperX Solo Cast Mic",
  price: 79.99,
  description: `The clearest mic you'll ever need. Always on sale!`,
  imageUrl: Mic,
  imageAlt:
    "A silver microphone.",
  inStock: true,
};

export const product3: Product = {
  id: "55OLT21",
  name: "GGX952 Supreme Hyperdrive Power Computer",
  price: 956.78,
  description: `Faster than Apple? Yes. Better than your current setup? Absolutely.
  Welcome the newest edition to the windows family! "GGX952 Supreme Hyperdrive Power
  Computer"!`,
  imageUrl: Laptop,
  imageAlt:
    "A white windows laptop sitting on a wooden table with office supplies and a phone scattered around it.",
  inStock: false,
};