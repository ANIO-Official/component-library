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

To handle the optional function for AlertBox I set it's value to the onClick event for the button IN ADDITION to setting it's hidden attribute to a conditional check for when onClose is undefined (was not specified for the component). When it is undefined, hidden is true and the button will not appear. Otherwise, it will appear.

To handle the optional function for Product Display, I first checked if it returned as undefined. Then when it is defined, I invoke the onAddToCart function, otherwise I return it as false.

```JSX
//Optional Boolean type Props=========================

// Show the email when showEmail is true. Say Unavailable when false.
<b>Email:</b> {showEmail ? user.email : "Unavailable. ( ˘︹˘ )"}

/*
  Use the false state of showStockStatus to determine if to show the stock. When true, hidden attribute is false. When false, hidden attribute is true.
  Additionally, when product's inStock boolean is true, show "In Stock". When out of stock show "Out of stock"
*/
<p hidden={!showStockStatus}>
  {product.inStock ? <p className="text-success">In Stock!</p> : <p className="text-danger">Out of stock</p>}
</p>

//Optional Function type Props=========================

/*
 On click invoke a function to check if the optional onAddToCart function exist for this
 component. When it does exist, invoke it. If it does not, then return false.
*/
onClick={() =>
  onAddToCart !== undefined ? onAddToCart(product.id, product.name) : false
}

//hides the button when undefined. Sets the onClick event to the onClose function defined with creating the component.
<button className="close-button" onClick={onClose} hidden={onClose===undefined}>Close X</button>
```

**Considerations made when designing the component interfaces**

I followed the provided interfaces but I updated them to fit the needs of the component's interactions. For example, in Product Display's props interface, I changed onAddToCart to accept two strings (one for product ID and one for product name). 

I wanted to ensure all Product Displays onAddToCart click events would use both these aspects of the product. TypeScript will remind devs using the component to include these in the function when creating this component and the parameter names are descriptive enough to infer what is needed. It does not take away from the modularity of the function. The function can still perform differently per component but, as a base, it should include these two string values somewhere in the actions. I did a similar thing with the onEdit function property of the User Profile Card's props interface.

Another example would be the addition of an imageAlt property to Product. I felt product images will need alternative text. So I added this property to make it easier to add custom alt text per product image via the JSX. It is optional due to imageURL being optional. (Some products can have no Image.)

Ensuring type safety across components

I deconstructed the props when creating components and assigned the deconstructed props to their appropriate types by interface (such as UserProfileProps). This adds better clarity and readability when editing or reading the JSX code. It becomes much easier to cross reference the types of each prop by referencing their values in the index.ts file. TypeScript will also alert the user of areas of conflict based on the deconstructed prop values. In VSCode as well, when you hover each prop, you can view specifically what type is expected to return per prop.

**Challenges faced implementing component composition**

I wanted to make the User Profile Card's Edit profile button show the Alert Box component on click. However, we had not yet covered how to accomplish this as of assignment of the lab. As a work around I grouped them in a div togther to simulate an after effect of an alert appear upon initial click of Edit Profile.

The other challenge was ensuring the components did not run into each other visually. When a component is made in a fragment instead of a div, they will in fact overlap. To remedy this, I placed them into divs within the App. I could have placed them into a div in the original component but I decided not to because it could be useful in other contexts to not have components separated. Such as a component with children that has a section made of 2 or more components styled in a specific way. 

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)
