//import { useState } from 'react'
import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ExplainationBox from "./components/ExplainationBox/ExplainationBox";

//Example Images
import ExampleUser from "./assets/examples/fake-user-data-for-testing.png";
import UserProfileCardSetup from "./assets/examples/user-profile-card-requirements.png";

//Fake Products
import * as Products from "./components/ProductDisplay/ProductDisplay.test"
//Fake Users
import * as Users from "./components/UserProfileCard/UserProfileCard.test";

function App() {
  return (
    <>
      <div className="row row-cols-2">
        <div className="col-md-12">
          <h2>Initial Component Testing</h2>
        </div>
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
      <p className="separator">
        --------------------------------------------------------------
      </p>
      <div>
        <div>
          <h2>Component Compositions</h2>
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
          <div id="user-buy-again-page" className="row row-cols-md-2">
            <div className="col-md">
              <h2 className="my-3">
                <b>Welcome back, Hank!</b>
              </h2>
              <UserProfileCard
                user={Users.user3}
                showEmail={false}
                showRole={true}
                onEdit={(userId, userName) =>
                  alert(`Editing ${userName} | ${userId}`)
                }
              />
            </div>
            <div>
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
            </div>
          </div>
        </section>
      </div>
      <p>--------------------------------------------------------------</p>
      <div>
        <div>
          <h2>Component Usage</h2>
          <p>
            <i>How to use these components efficiently?</i>
          </p>
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
                  This is an example of a User typed object that can be used by
                  the Explaination Box Component.
                </i>
              </p>
              <img src={UserProfileCardSetup} />
              <p>
                <i>
                  For clarity, here are the requirements/setup for the
                  interfaces used by this component.
                </i>
              </p>
            </ExplainationBox>
            <p>One Here for ProductDisplay</p>
            <p>One Here for AlertBox</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
