const { Product } = require('../models');

const productData = [
    {
        id: 1,
        product_name: 'Brown Shoes',
        price: 1.00,
        description: "Some shoes that are brown.",
        image: "https://theblacktux.com/_next/image?url=https%3A%2F%2Fstatic.theblacktux.com%2Fproducts%2Fshoes%2Fbrown-leather-shoes%2FBrownLeatherShoes_1_1812x1875.jpg%3Fcrop%3D500%3A667&w=3840&q=75",
        category_id: 1,
        // cart_id: 1
    },
    {
        id: 9,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "Phones",
        price: "823.00",
        description: "A mobile phone that can make and receive calls",
        image: "https://images.samsung.com/us/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-highlights-kv-a.jpg?imbypass=true",
        category_id: 2,
        // cart_id: 1                                  
    },
    {
        id: 2,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "Computers",
        price: 800.00,
        description: "device that accepts information (in the form of digitalized data) and manipulates it for some result based on a program, software, or sequence of instructions on how the data is to be processed.",
        image: "https://i.dell.com/sites/csimages/Product_Imagery/all/prod-2579-desktop-xps-8960-black-rf-800x550.png",
        category_id: 3                                  // This should be whatever category it belongs to
    },
    
    {  
        id: 3,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "Gadgets",
        price: 474.00,
        description: "small mechanical or electronic device with a practical use",
        image: "https://i.ytimg.com/vi/TX9qSaGXFyg/sddefault.jpg",
        category_id: 4                                  // This should be whatever category it belongs to
    },
    {
        id: 4,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "Laptops",
        price: 1100.00,
        description: "a computer that is portable and suitable for use while traveling.",
        image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY218_.jpg",
        category_id: 5                                  // This should be whatever category it belongs to
    },
    
    {
        id: 5,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "TVs",
        price: 400.00,
        description: "a device for watching television",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501902_sd.jpg;maxHeight=2000;maxWidth=2000",
        category_id: 6                                 // This should be whatever category it belongs to
    },
    
    {
        id: 6,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "Computer Monitors",
        price: 250.00,
        description: "an electronic output device which displays images in pictorial form on the screen",
        image: "https://dlcdnwebimgs.asus.com/gain/D99794B7-46F5-46F6-8169-D7CE91495BC6/w717/h525",
        category_id: 7                                  // This should be whatever category it belongs to
    },
    
    {
        id: 7,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "Key Boards and Mice",
        price: 95.00,
        description: "a panel of keys used for putting information including letters, words, and numbers into your computer. Mouse— is a hand-operated pointing device. ",
        image: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pebble-keys-2-k380s/gallery/pebble-keys-2-k380s-top-tonal-graphite-gallery-us.png?v=1",
        category_id: 8                                  // This should be whatever category it belongs to
    },
    
    {
        id: 8,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
        product_name: "Gaming Consoles",
        price: 400.00,
        description: "a piece of electronic equipment for playing games on",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GameCube-Console-Set.png/1024px-GameCube-Console-Set.png",
        category_id: 1                                  // This should be whatever category it belongs to
    },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;