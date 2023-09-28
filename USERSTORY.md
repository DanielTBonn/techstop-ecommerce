# USER STORY

AS A shopper who enjoys tech,
I WANT an ecommerce shopping website,
SO THAT I can find new tech items, request to purchase, and leave reviews

## Acceptance Criteria

GIVEN an ecommerce based website,
WHEN I view the file structure,
THEN it should follow the MVC-paradigm,
WHEN I see how the data is stored,
THEN I see it is in the form of sql database and is properly associated,
WHEN I see how the pages are rendered,
THEN I see that the views are made by handlebars being routed by the controllers,
WHEN I visit the site for the first time,
THEN I am presented with a homepage, which includes existing products with a name, picture, price, and add to cart button
WHEN I want to navigate through the website 
THEN I am presented with a navbar with links to the homepage, categories, login, and signup.
WHEN I click the login button,
THEN I am redirected to a login page with the option of redirecting to signup,
WHEN I click on the signup option in the navbar or on the login page,
THEN I am redirected to a signup page with the option of creating an account
WHEN I sign up for an account
THEN I am redircted to the homepage and have the option to sign into the account I just made,
WHEN I click on the image of the product I am interested in,
THEN I am redirected to a store page with the image, name, price, description, and reviews, as well as options to add to cart and post a new review,
WHEN I login,
THEN the navbar options to login and signup are replaced with the cart and logout options,
WHEN I wish to add a product to the cart,
THEN I can press the add to cart button on a product page while logged in,
WHEN I wish to add a review for a product,
THEN I can leave a review on a product page thats stored in the review section while logged in,
WHEN I wish to look at another users past reviews, 
THEN I can click on their name and am taken to a page of their old reviews,
WHEN I want to look at the items in my cart,
THEN I can click on the cart option in the navbar and am redirected to a cart page with all of my items in it while logged in,
WHEN I see something in my cart,
THEN it includes an image, name, price, and total price of all items in the cart as well as options to buy and remove from the cart while logged in,
WHEN I click on the remove from cart option,
THEN the product in question is removed from the page and the total price is upated while logged in,
WHEN I click on the Buy Now or Buy All buttons on the page,
THEN I am redirected to a demo page thanking the user for their interest in our store,
WHEN I click the logout button,
THEN I am logged out and back to the initial homepage I started with.