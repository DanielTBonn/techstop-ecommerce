# USER STORY

AS A shopper who enjoys tech,
I WANT an ecommerce shopping website,
SO THAT I can find new tech items, request to purchase, and leave reviews

## Acceptance Criteria

GIVEN an ecommerce based website,
WHEN I visit the site for the first time,
THEN I am presented with a homepage, which includes existing products with a name, picture, and price; navigation links to the homepage (OPTIONAL an orders cart page) and the option to login/logout,
WHEN I click on the homepage option,
THEN I am taken to the homepage,
WHEN I click on an existing product,
THEN I am taken to the product page,
WHEN I want to leave a review on that product,
THEN I can view/leave a review below the product while signed in with the username, review, and date posted,
WHEN I wish to 'purchase' a product,
THEN I am taken to a page while signed in that will state it as out of stock (OPTIONAL add an option to add it to a cart),
(OPTIONAL) WHEN I wish to view my orders,
(OPTIONAL) THEN I can navigate to an orders page with all the items I wish to order present,




## Requirements For Project

For our Ecommerce Website, requirements are met if the current plan includes the following criteria:

* Use Node.js and Express.js to create a RESTful API -- MET
    - We use node to start the server.js file which will communicate with our server files, the SQL server, and our computer
* Use Handlebars.js as the template engine -- MET
    - Have already included this in our file structure, will be using this to create html pages in the views folder
* Use MYSQL and the Sequelize ORM for the database -- MET
    - Have already included both of these in our server, will use Sequelize with all models
* Have both GET and POST routes for retrieveing and adding new data -- MET
    - Inside the controllers/api folder we will include GET and POST routes for users, categories, and products
* Use at least one new library, package, or technology that we haven't discussed -- PENDING
    - We have yet to find a technology to include
* Have a folder structure that meets the MVC paradigm -- MET
    - Our folder structure already fits the MVC paradigm
* Include Authentication (express-session and cookies) -- MET
    - This will be handled by the User model, routes for the user, and our session object in the server.js folder
* Protect API keys and sensitive information with environment variables -- MET
    - This is done using the dotenv dependency and the .env file which stores our datebase name, sql user, and sql password
* Be deployed using Heroku (with data) -- MET
    - Our application can be deployed using heroku with data
* Have a polished UI -- MET
    - We are already starting on building .handlbars pages that will look clean and user friendly
* Be responsive -- MET
    - A responsive website adjuts for different-sized screens and viewports. As long as we use handlebars and some CSS properties we should be able to accomplish this easily
* Be interactive (accept/respond to user input) -- MET
    - At the minimum we will be able to add user reviews of our products, with adding items to cart being an additional functionality and going to a 'purchase page' as well (upon trying to purchase we will go to an Out of Stock page or something)
* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc) -- MET
    - We'll stick to quality coding standards, and if need be we can setup and eslinter for changing names to fit proper standards
* Have a professional README -- MET
    - We will write a README when we complete our project.

## Our Requirements for an MVP

For what we need to build for this Ecommerce website:

* For Views (handlebars):
    - We need to design a main.handlebars in the layout that will have a navigation bar containing a homepage, a select categories drop down menu, and a login button while logged out, and logout button while logged in
    - We need to design a 'gallery' of all of our items which will be displayed on the homepage as homepage.handlebars directly in the views folder and will use a partial (homepage-details.handlebars) from the partials folder.
    - We need to design an 'items page' which will display an item we have for sale including its name, price, a short description, and a purchase button; AND will include a partial reviews.handlbars containing and user reviews on the item; 
    and then name it item.handlebars in the views folder. 
    - We need to design a login and signup page which includes an email, username, and password input.
    - We need to design partials for reviews left on items from our database that will show up below items (if there are any) on the item.handlebars page (we will call it reviews.hanldebars and put it in the views/partials folder).
    - We need to design partials for the items including their name and a price that will be displayed on hompage.handlebars and name them homepage-details.handlebars in the views/partials folder.
    - From the gallery, we need to add the functionality that takes us to a specific item page when its icon is pressed.
    - We will need an 'Out of stock' page which will be directed to from an <a> tag reference from the specific item on item.handlebars that we would like to purchase when clicking a 'purchase' button
    - We will most likely need a categories.handlebars file for splitting up the items as categories -- tbd
    - May need to update some other things -- tbd


* For Models (MYSQL, mysql2, and sequelize):

    - We need to design a schema.sql file that will DROP a techstore_db database if it exists and CREATE a new techstore_db database placed in the db folder
    - We need to design Models (aka sql tables) for User, Category, Product, and Review.
        - User Model Requirements:
            * id -- Integer, Doesn't allow null values, Set as Primary Key, Uses auto increment
            * email -- String, Doesn't allow null values
            * username -- String, Doesn't allow null values
            * password -- String, Doesn't allow null values
        - Category Model Requirements:
            * id -- Integer, Doesn't allow null values, Set as Primary Key, Uses auto increment
            * category_name -- String, Doesn't allow null values
        - Product Model Requirements:
            * id -- Integer, Doesn't allow null values, Set as Primary Key, Uses auto increment
            * product_name -- String, Doesn't allow null values
            * price -- Decimal, Doesn't allow null values, Validates that the value is a decimal
            * stock -- Integer, set a default value as 0, validates that the value is numeric,
            * Description -- String, Doesn't Allow Null Values
            * image -- String, Doesn't Allow Null Values
            * category_id -- Integer, References the `category` model's id 
        - Review Model Requirements:
            * id -- Integer, Doesn't allow null values, Set as Primary Key, Uses auto increment
            * content -- String, Doesn't allow null,
            * date_posted -- Date
            * user_id -- Integer, References the `user` model's id
            * product_id -- Integer, References the `product` model's id
        - Associations:
            * Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
            * Category has many Product models.
            * User has many Review models.
            * Review belongs to User, as a user can have multiple reviews but a review can only belong to one user.
            * Product has many review models
    - We also need to design hooks for user passwords that use bcrypt


    - We need to retrieve product data that aligns with our categories and create seed data.
    - Categories will be: Phones, Computers, Gadgets, Laptops, TVs, Computer Monitors, Keyboards and Mice, and Gaming Consoles
    - Each category should have a minimum of 10 products.
    - We will need information such as product name, product price, a description, and an image source for each product written as json for seedData, the format is as follows:
        {
            id: 1,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
            product_name: "product name",
            price: 1.00,
            description: "Put a description here",
            image: "https://www.imagesrc.com/image",
            category_id: 1                                  // This should be whatever category it belongs to
        }
    - We will also need to create seedData for the other models (User, Category, and Review) as well categories is will look like as follows, the rest you should be able to make up after these.
        {
            id: 1,                                          // Again, auto increment means we dont need this, its just so we can easily keep track of the items we create 
            category_name: "category name"
        }
