# Component Library

_A React + TypeScript + Vite project focused on implementing interfaces into created components and using components for Apps._

## Overview

The purpose of this project is to practice and build REACT components for the reusability in REACT Applications.
My focus is to:

- Component creation
- TypeScript interfaces
- Prop handling
- Component composition

### Built with

- REACT
- JSX
- Vue
- TypeScript
- Bootstrap
- CSS

## Resources

[Bootstap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - A refresher for styling the App quickly for readability sake.

Per Scholas Module 9 | Lessons 1-3 - Initial interfaces, references, and resources provided by Per Scholas. I did edit parts among the base interfaces out of personal preference such as adding alt text for the product images. Otherwise all other code aside from interfaces were built by me.

## How to Use

Required: Have Node and NPM installed.

1.  Clone the repository or Download the ZIP file and extract the files.
2.  Open the file in Visual Studio Code.
3.  Open the Terminal using Ctrl + ~
4.  cd into the directory component-library in the terminal.
5.  Run the project using "npm run dev" in the terminal.
6.  You should see 3 options appear. Follow the link for the Local option. Such as "http://localhost:5173/"

A web app in your default browser will appear with information and tests of the components made:

1.  A User Profile Card
2.  An Alert Box
3.  A Product Display

## Reflection

**Handling optional props in components**

To handle optional props in components, I used their values to toggle outputs.
For optional props related to showing information I either used their value to toggle the element's
hidden value by using their false state or I replaced the text as appropriate.

```


// Show the email when showEmail is true. Say Unavailable when false.
<b>Email:</b> {showEmail ? user.email : "Unavailable. ( ˘︹˘ )"}

// Use the false state of showStockStatus to determine if to show the stock. When true, hidden attribute is false. When false, hidden attribute is true.

// Additionally, when product's inStock boolean is true, show "In Stock". When out of stock show "Out of stock"

<p hidden={!showStockStatus}>
  {product.inStock ? <p className="text-success">In Stock!</p> : <p className="text-danger">Out of stock</p>}
</p>

```

What considerations did you make when designing the component interfaces?

How did you ensure type safety across your components?

What challenges did you face when implementing component composition?

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)
