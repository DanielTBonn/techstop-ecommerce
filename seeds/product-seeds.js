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

    // Beginning of electronics-seeds
    {
        product_name: "Samsung - 65 Class S90C OLED Smart Tizen TV",
        price: 1999.99,
        description: "Prepare to be captivated. Whether you prefer dramatic thrillers or fantasy football, lose yourself in the viewing adventure with a contrast rich picture.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6536/6536964_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "Roku - 65 Class Select Series 4K Smart RokuTV",
        price: 349.99,
        description: "Roku Select Series 4K TVs are thoughtfully designed to upgrade your entertainment at an incredible value.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6536/6536726_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "Insignia™ - 55 Class F30 Series LED 4K UHD Smart Fire TV",
        price: 249.99,
        description: "Take in every moment with breathtaking 4K Ultra HD on this 55-inch screen. Its equipped with DTS Studio Sound to create realistic and immersive audio.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450247_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "Samsung - 85 Class CU7000 Crystal UHD 4K UHD Smart Tizen TV",
        price: 1199.99,
        description: "True-to-life color. Effortless connectivity. Dazzling 4K value. Samsung Crystal UHD is worth a look (and more). Effortlessly access TV shows, movies and ambient content using the Samsung Smart Hub, or find a range of great games on the Samsung Gaming Hub.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537371_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "TCL - 98 Class S5 S-Class LED 4K UHD HDR Smart TV with Google TV",
        price: 2999.99,
        description: "Experience the ultimate in 4K Ultra HD entertainment with TCL's 98 S Class. Its 4X resolution surpasses Full HD, delivering stunning detail. The 120Hz Panel Refresh Rate ensures a smooth, blur-free viewing experience, while Motion Rate 480 with MEMC Frame Insertion provides exceptional motion clarity.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551177_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "LG - 86” Class UQ75 Series LED 4K UHD Smart webOS TV",
        price: 1199.99,
        description: "Dive into a world of free content, thanks to over 300+ free LG Channels¹ and personalized recommendations for everyone you share the remote with.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524315_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "Westinghouse - 50 4K UHD Smart Roku TV with HDR",
        price: 219.99,
        description: "Westinghouse 50” 4K UHD Roku TV with HDR10 offers an unequaled entertainment experience that fits your lifestyle. Watch exactly what you want, how you want, when you want it.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6489/6489042_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "Insignia™ - 43 Class N10 Series LED Full HD TV",
        price: 119.99,
        description: "This 43-inch screen has clear images and rich, natural color with an LED flat-screen and 1080p full HD resolution.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530085_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 5,
        },
        {
        product_name: "LG - 34 IPS LED UltraWide FHD AMD FreeSync Monitor with HDR (HDMI, DisplayPort) - Black",
        price: 279.99,
        description: "34” UltraWide FHD VESA DisplayHDR 400 IPS Monitor with AMD FreeSync.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505062_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
        },
        {
        product_name: "LG - 24 IPS LED FHD FreeSync Monitor (HDMI, VGA) - Black",
        price: 89.99,
        description: "Set up a gaming station with this LG 24-inch Full HD monitor.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6362/6362423_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
         },
        {
        product_name: "Samsung - 27 T350 Series IPS FHD, AMD FreeSync Monitor (VESA, HDMI, VGA) - Dark Blue Gray",
        price: 149.99,
        description: "Seamless screen with 3-sided border-less display stretches from edge to edge for immersive viewing and maximum concentration.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420869_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
        },
        {
        product_name: "Samsung - ViewFinity S5 34 Ultra-WQHD 100Hz AMD FreeSync Monitor with HDR10 (DisplayPort, HDMI) - Black",
        price: 299.99,
        description: "Samsung's 34 ViewFinity S50GC offers a wider workspace featuring a 21:9 ratio and lifelike detail with Ultra-WQHD resolution.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6532/6532277_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
        },
        {
        product_name: "Samsung - 27 390C Series Curved FHD AMD FreeSync Monitor (DP, HDMI, VGA) - Black",
        price: 129.99,
        description: "Discover a truly immersive viewing experience with the Samsung CF390 curved monitor.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535575_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
        },
        {
        product_name: "HP - 31.5 LED Full HD FreeSync Monitor - Silver & Black",
        price: 199.99,
        description: "The New Definition of High Definition: This FHD display feels as good as it looks, packing 99% sRGB color gamut for color accuracy and AMD Freesync to keep your eyes up to speed with your imagination.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454578_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
        },
        {
        product_name: "Acer - Nitro 23.8 IPS LED FHD FreeSync Gaming Monitor (HDMI 2.0, Display Port)",
        price: 129.99,
        description: "Acer Nitro XF243Y Pbmiiprx 23.8 Full HD (1920 x 1080) IPS Monitor with AMD Radeon FREESYNC Technology, Up to 165Hz, Up to 0.5ms, HDR 10, 99% sRGB, (2 x HDMI 2.0 Ports & 1 x Display Port)",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425559_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
        },
        {
        product_name: "Samsung - 27” Odyssey FHD IPS 240Hz G-Sync Gaming Monitor - Black",
        price: 299.99,
        description: "When it comes to gaming performance, the slightest disadvantage can be the difference between winning and losing a match. With a 240Hz refresh rate, lightning fast 1ms (GTG) response time and full adaptive G-Sync compatibility and FreeSync Premium support, you can be sure that the Odyssey G4 wont let you down on the battlefield.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507926_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 6,
        },
        {
        product_name: "Energizer - MAX 10,000mAh 15W USB-C Fast Universal Portable Battery Charger/Power Bank with LCD screen for Smartphones & Accessories - Black",
        price: 29.99,
        description: "This portable charger provides 10,000mAh capacity to charge smartphones, tablets, smartwatches, headphones, ear buds, and more.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6498/6498921_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
        },
        {
        product_name: "Insignia™ - 8' USB-C to USB-C Charge-and-Sync Cable - Black",
        price: 9.99,
        description: "When your smartphone battery dies, you lose the ability to stay connected. Whether it's social media, your calendar or just the internet, nothing's worse than a device with a low battery and no way to charge it. The Insignia NS-PC3CC8LB23 8' USB-C to USB-C Charge-and-Sync Cable lets you power and transfer files between USB-C smartphones, tablets and more. With a black and gray braided design, you can count on its durability for everyday use. This 6 ft. (2.44 m) cable keeps you connected to everything that's important.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6532/6532873_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
         },
        {
        product_name: "Belkin 11-in-1 USB C Hub with 4K HDMI, DP, VGA, 100W PD Docking Station for MacBook Pro, Air, and more - Gray",
        price: 119.99,
        description: "Turn your USB C laptop into the ultimate workstation with this Belkin Laptop Dock. This all-in-one solution gives you access to ports that newer mac and PC laptops have eliminated in recent years, allowing you to connect to monitors, SD cards, thumb drives, and more through its USB C port.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452575_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
        },
        {
        product_name: "CORSAIR - K60 PRO TKL Wired Optical-Mechanical OPX Linear Switch Gaming Keyboard with per-key RGB Backlighting - Black",
        price: 99.99,
        description: "The CORSAIR K60 PRO TKL RGB Tenkeyless Optical-Mechanical Gaming Keyboard delivers style and performance with a durable brushed aluminum frame, compact tenkeyless design, and detachable USB Type-C cable for optimal portability.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6516/6516271_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
        },
        {
        product_name: "Logitech - G502 X PLUS LIGHTSPEED Wireless Gaming Mouse with HERO 25K Sensor - Black",
        price: 141.99,
        description: "G502 X PLUS, the latest version of Logitech's most popular gaming mouse, combines a legacy of performance with the most advanced gaming technologies.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512122_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
        },
        {
        product_name: "Sony - PlayStation 5 - DualSense Wireless Controller - Midnight Black",
        price: 69.99,
        description: "Discover a deeper, highly immersive gaming experience1 that brings the action to life in the palms of your hands.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464307_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
        },
        {
        product_name: "Microsoft - Elite Series 2 Wireless Controller for Xbox One, Xbox Series X, and Xbox Series S - Black",
        price: 179.99,
        description: "Experience the Xbox Elite Wireless Controller Series 2 featuring adjustable-tension thumbsticks, wrap-around rubberized grip, and shorter hair trigger locks.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6352/6352703_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
        },
        {
        product_name: "Backbone One (USB-C) - Mobile Gaming Controller for Android Series - Black",
        price: 99.99,
        description: "Backbone One transforms your Android into the ultimate gaming console.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523794_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 7,
        },
        {
        product_name: "Microsoft - Xbox Series S 1TB All-Digital Console (Disc-Free Gaming) - Black",
        price: 349.99,
        description: "Experience next-gen speed and performance with Xbox Series S in Carbon Black, featuring a 1TB SSD.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6547/6547877_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 8,
        },
        {
        product_name: "Sony - PlayStation 5 Console",
        price: 499.99,
        description: "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio*, and an all-new generation of incredible PlayStation games.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523167_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 8,
        },
        {
        product_name: "Microsoft - Xbox Series X 1TB Console - Black",
        price: 499.99,
        description: "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428324_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 8,
        },
        {
        product_name: "Nintendo - Switch OLED Console - The Legend of Zelda: Tears of the Kingdom Edition - Green",
        price: 359.99,
        description: "The Nintendo Switch - OLED Model - The Legend of Zelda: Tears of the Kingdom Edition system features a design inspired by the Legend of Zelda.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6540/6540265_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 8,
        },
        {
        product_name: "ASUS ROG Ally 7 120Hz FHD 1080p Gaming Handheld - AMD Ryzen Z1 Extreme Processor - 512GB - White",
        price: 699.99,
        description: "Play your way with the ROG Ally gaming handheld. Access any game that runs on Windows across all game platforms, including Steam, GOG, Xbox Game Pass, cloud gaming services, Android apps and more. Play anywhere, anytime, using handheld mode or by connecting the Ally to a TV and linking multiple controllers to play with friends.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6542/6542964cv16d.jpg;maxHeight=640;maxWidth=550",
        category_id: 8,
        },
        {
        product_name: "Nintendo - Geek Squad Certified Refurbished Switch Lite 32GB Console - Blue",
        price: 179.99,
        description: "Geek Squad® Certified Refurbished products are thoroughly, painstakingly and lovingly tested, so you can be sure that your device will work right, right away.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463700_sd.jpg;maxHeight=2000;maxWidth=2000",
        category_id: 8,
        },
        {
        product_name: "Sony - Geek Squad Certified Refurbished PlayStation 4 1TB Console - Black",
        price: 259.99,
        description: "Geek Squad® Certified Refurbished products are thoroughly, painstakingly and lovingly tested, so you can be sure that your device will work right, right away.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509622_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 8,
        },
        {
        product_name: "Logitech - G CLOUD Gaming Handheld Console - White",
        price: 299.99,
        description: "Logitech G CLOUD gaming handheld puts next-games right in your hand by putting the processing power and bookshelf of games in the cloud.",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6515/6515261_sd.jpg;maxHeight=640;maxWidth=550",
        category_id: 8,
        }
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;