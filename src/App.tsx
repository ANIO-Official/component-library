import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ExplainationBox from "./components/ExplainationBox/ExplainationBox";

//Example Images for Explaination
import ExampleUser from "./assets/examples/fake-user-data-for-testing.png";
import ExampleProduct from "./assets/examples/fake-product-data-for-testing.png";
import UserProfileCardSetup from "./assets/examples/user-profile-card-requirements.png";
import ProductDisplaySetup from "./assets/examples/product-display-requirements.png";
import AlertBoxSetup from "./assets/examples/alert-box-requirements.png";
import ProductDisplayExample from "./assets/examples/product-display-example.png";
import UserProfileCardExample from "./assets/examples/user-profile-card-example.png";
import AlertBoxExample from "./assets/examples/alert-box-component-example.png";

//Fake Products
import * as Products from "./components/ProductDisplay/ProductDisplay.test";
//Fake Users
import * as Users from "./components/UserProfileCard/UserProfileCard.test";

function App() {
  return (
    <>
      <div id="initial-components" className="row row-cols-2">
        <div className="col-md-12">
          <h2 className="text-start">Initial Component Testing</h2>
        </div>
        <br />
        <br />
        <br />
        <div className="col-md  bg-danger-subtle d-flex flex-row justify-content-center align-items-center rounded-start">
          <UserProfileCard
            user={Users.user1}
            showEmail={true}
            showRole={false}
            onEdit={(userId, userName) =>
              alert(`Editing ${userName} | ${userId}`)
            }
          />
        </div>
        <br />
        <div className="col-md bg-warning-subtle d-flex flex-row justify-content-center align-items-center">
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

        <div className="col-md bg-primary-subtle rounded-end">
          <ProductDisplay
            product={Products.product1}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={(productId, productName) =>
              alert(`Added ${productName} | ${productId} x 1`)
            }
          />
        </div>
      </div>
      <br />
      <div id="component-compositions">
        <div className="text-start">
          <h2>Component Compositions</h2>
          <p>
            <i>
              Combining Components to make different layouts for different
              purposes.
            </i>
          </p>
        </div>
        <section className="bg-primary-subtle border border-primary border-2 rounded-3 px-5 py-3 my-5 d-flex flex-row align-items-center">
          <div className="d-flex flex-column border-end border-black me-5 pe-3">
            <h3>Update Profile</h3>
            <p>
              <i>Combining the UserProfileCard & AlertBox Components</i>
            </p>
          </div>

          <br />
          <div>
            <UserProfileCard
              user={Users.user2}
              showEmail={true}
              showRole={true}
              onEdit={(userId, userName) =>
                alert(`Editing ${userName} | ${userId}`)
              }
            >
              <div className="bg-danger-subtle border border-danger border-2 mt-3 p-3">
                <AlertBox
                  type="warning"
                  message="Are you sure you want to edit the details of this profile? Once updated
            previous version are no longer available."
                >
                  <p>
                    <i>
                      Once you commit to change the details, please note that we
                      again do not save a copy of said profile details. Be sure
                      to back them up.
                    </i>
                  </p>
                </AlertBox>
              </div>
            </UserProfileCard>
          </div>
        </section>
        <section className="bg-success-subtle border border-success border-2 rounded-3 px-5 py-3 my-5 d-flex flex-row align-items-center">
          <div className="d-flex flex-column border-end border-black me-5 pe-3">
            <h3>Purchase Again From User's Purchase History</h3>
            <p>
              <i>Combine the UserProfileCard & ProductDisplay Components</i>
            </p>
          </div>
          <br />
          <div id="user-buy-again-page" className="bg-white row">
            <div
              id="example-header"
              className="row d-flex flex-row justify-content-between align-items-center"
            >
              <h2 className="col fs-4">Best Bargain Tech Co.</h2>
              <nav className="col">
                <ul className="d-flex flex-row justify-content-evenly">
                  <li>
                    <a href="#" className="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Dealer Room
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Coupon Corner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row row-cols-md-2">
              <section
                id="user-profile-overview"
                className="col-md d-flex flex-column align-items-center border-end border-black pe-4"
              >
                <h2 className="my-3">
                  <b>Welcome back!</b>
                </h2>
                <UserProfileCard
                  user={Users.user3}
                  showEmail={false}
                  showRole={true}
                  onEdit={(userId, userName) =>
                    alert(`Editing ${userName} | ${userId}`)
                  }
                >
                  <br />
                  <p>
                    <b>Total Spent(Yearly)</b>
                    <br />
                    $9,820.45
                    <br />
                    <b>Bio</b>
                    <br />
                    Big Spender because I like tech. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </UserProfileCard>
              </section>
              <section id="purchase-history">
                <h3>Purchase History</h3>
                <p>
                  <i>
                    Looking to reignite your shopping spree? Check out some past
                    purchases of yours!
                  </i>
                </p>
                <ProductDisplay
                  product={Products.product2}
                  showDescription={false}
                  showStockStatus={false}
                  onAddToCart={(productId, productName) =>
                    alert(`Added ${productName} | ${productId} x 1`)
                  }
                />
                <ProductDisplay
                  product={Products.product3}
                  showDescription={false}
                  showStockStatus={false}
                  onAddToCart={(productId, productName) =>
                    alert(`Added ${productName} | ${productId} x 1`)
                  }
                />
              </section>
            </div>
          </div>
        </section>
      </div>
      <div id="component-usage">
        <div>
          <div className="text-start">
            <h2>Component Usage</h2>
            <p>
              <i>How to use these components efficiently?</i>
            </p>
          </div>
          <br />
          <div>
            <ExplainationBox
              title="UserProfileCard"
              message={`In order to use the User Profile Card Component, you will
              need to create a User type object first to simulate user data. Why?
              The User Profile Card Component accepts the deconstructed props of type 
              UserProfileCardProps. One of which is the user property that is an object 
              of type User with its own properties.
              The component then accesses different properties of the user property to 
              display specific information such as avatars, names, email address and role.
                
              In order to show the data on screen, we need to create a user to recieve data from.
              After doing so, you will need to go to the App.tsx file, import the UserProfileCard 
              component (I've already done so for you), and create the component within the fragment 
              (<> </>).`}
              imageUrl={ExampleUser}
            >
              <p>
                <i>
                  An example of a User typed object that can be used by the
                  UserProfileCard Component.
                  <br />
                  It takes the shape of the <b>User interface</b>.
                </i>
              </p>
              <img src={UserProfileCardSetup} />
              <p>
                <i>
                  The Requirements/Setup for the interface used by the
                  UserProfileCard component.
                </i>
              </p>
              <div className="component-example">
                <div className="d-flex flex-row justify-content-start">
                  <img className="pe-5" src={UserProfileCardExample} />
                  <div>
                    <UserProfileCard
                      user={Users.user3}
                      onEdit={(userId, userName) =>
                        alert(
                          `Are you sure you want to edit ${userName} | ${userId}'s profile?`
                        )
                      }
                    />
                  </div>
                </div>
                <p>
                  <i>Example Usage.</i>
                </p>
                <div className="text-start">
                  <p className="fs-3 ps-4">
                    <b>Component Props</b>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <b>user:</b> An object of type User. Has the required
                      properties of: id(string), name(string), email(string),
                      and role(string). And optional property of
                      avatarUrl(string).
                      <br />
                      <b className="text-primary">
                        <i>Special Note about user object:</i>
                      </b>{" "}
                      The avatarUrl property will not show if it is undefined.
                      This is because This component's JSX checks whether this
                      value is undefined, then toggles the hidden attribute of
                      the JSX image element. When not undefined, hidden is false
                      (show it). When undefined, hidden is true (hide it).
                    </li>
                    <li className="pb-2">
                      <b>showEmail:</b> An optional boolean that decides whether
                      or not to show the user's email. When false or undefined,
                      replaces email with 'Unavailable' message. When true,
                      shows the user's email according to the user object's
                      email (string) property value.
                    </li>
                    <li className="pb-2">
                      <b>showRole:</b> An optional boolean that decides whether
                      or not to show the user's role. When false or undefined,
                      replaces role with 'Unavailable' message. When true, shows
                      the user's role according to the user object's role
                      (string) property value.{" "}
                    </li>
                    <li className="pb-2">
                      <b>onEdit:</b> An optional function{" "}
                    </li>
                    <li className="pb-2">
                      <b>children:</b> An optional area to place additional JSX
                      or components within the UserProfileCard component's
                      carats'
                      {"<UserProfileCard> Children go here </UserProfileCard>"}.
                    </li>
                  </ul>
                </div>
              </div>
            </ExplainationBox>
            <ExplainationBox
              title="ProductDisplay"
              message={`Similar to the User Profile Card Component, you will
              need to create a typed object first to simulate loading a product's data.
              ProductDisplay's prop includes a product of type product. It then uses this
              information to display specific product data.
              `}
              imageUrl={ExampleProduct}
            >
              <p>
                <i>
                  An example a Product typed object that can be used by the
                  ProductDisplay Component.
                  <br />
                  It takes the shape of the <b>Product interface</b>.
                </i>
              </p>
              <img src={ProductDisplaySetup} />
              <p>
                <i>
                  The Requirements/Setup for the interface used by the
                  ProductDisplay component.
                </i>
                <br />
              </p>
              <div className="component-example">
                <div className="d-flex flex-row justify-content-start">
                  <img className="pe-5" src={ProductDisplayExample} />
                  <div>
                    <ProductDisplay
                      product={Products.product2}
                      showDescription={false}
                      showStockStatus={true}
                      onAddToCart={(productId, productName) =>
                        alert(`Added ${productName} | ${productId} x 1`)
                      }
                    />
                  </div>
                </div>
                <p>
                  <i>Example Usage.</i>
                </p>
                <div className="text-start">
                  <p className="fs-3 ps-4">
                    <b>Component Props</b>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <b>product:</b> An object of type Product. Has the
                      required properties of: id(string), name(string),
                      price(number), description(string), and inStock(boolean).
                      Has the optional properties of imageUrl(string) and
                      imageAlt(string).
                    </li>
                    <li className="pb-2">
                      <b>showDescription:</b> An optional boolean prop that
                      decides whether or not to show the description of a
                      product. When left out (undefined) or set to false, it
                      will not show. When set to true, shows text set in the
                      product object's description (string) property value.
                    </li>
                    <li className="pb-2">
                      <b>showStockStatus: </b> An optional boolean prop that
                      decides whether or not to show the stock status of a
                      product. When left out (undefined) or set to false, it
                      will not show. When set to true, shows appropriate text
                      according to the product object's inStock boolean value.
                    </li>
                    <li className="pb-2">
                      <b>onAddToCart: </b> An optional function that accepts the
                      parameters of productId {"(string)"} and productName{" "}
                      {"(string)"}. When a ProductDisplay component is made,
                      this prop must be set to a function that takes these two
                      parameters and does something with them.
                    </li>
                    <li className="pb-2">
                      <b>children:</b> An optional area to place additional JSX
                      or components within the ProductDisplay component's
                      carats'
                      {"<ProductDisplay> Children go here </ProductDisplay>"}.
                    </li>
                  </ul>
                </div>
              </div>
            </ExplainationBox>
            <ExplainationBox title="AlertBox" message={`The AlertBox component is very straightforward for the most part.
              The only neccessary requirement to keep mind of is the type prop. AlertBox needs a type prop but it can only be
              of type AlertType. AlertType only has 4 options, and they MUST be of those three options when creating an
              Alert Component. More details below.`}>
              <img src={AlertBoxSetup} />
              <p>
                <i>
                  The Requirements/Setup for the interface used by the AlertBox
                  component.
                </i>
              </p>
              <div className="component-example">
                <div className="d-flex flex-row justify-content-start">
                  <img className="pe-5" src={AlertBoxExample} />
                  <div className="bg-secondary-subtle p-5 rounded-5">
                    <AlertBox
                      type="error"
                      message="Oops! Error loading page. Refresh and try again. [404]"
                      onClose={() =>
                        alert("Refreshing the page now! (I'm kidding)")
                      }
                    />
                  </div>
                </div>
                <div className="text-start">
                  <p className="fs-3 ps-4">
                    <b>Component Props</b>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <b>type:</b> A string specific to the AlertType. All types
                      possible are found in index.ts. But here's the options
                      here as well: 'success', 'error', 'warning', and 'info'.
                      <br />
                      The great thing about these options, is that in the JSX,
                      the{" "}
                      <b className="text-primary">
                        classname for their container is named after their type
                      </b>
                      . Example: An AlertBox with a type prop of 'success' will
                      have its div container class named 'success-alert'. This
                      makes styling by alert type much easier.
                    </li>
                    <li className="pb-2">
                      <b>message:</b> A string that will show within the
                      AlertBox component appears on screen to the user.
                    </li>
                    <li className="pb-2">
                      <b>onClose:</b> An optional function that is invoked when
                      a close button (made in the component's JSX) is pressed.
                      These examples bring up the alert.
                    </li>
                    <li className="pb-2">
                      <b>children:</b> An optional area to place additional JSX
                      or components within the AlertBox component's carats'
                      {"<AlertBox> Children go here </AlertBox>"}.
                    </li>
                  </ul>
                </div>
              </div>
            </ExplainationBox>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
