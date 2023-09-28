const { Product } = require('../models');

const productData = [
    // {
    //     id: 1,
    //     product_name: 'Brown Shoes',
    //     price: 1.00,
    //     description: "Some shoes that are brown.",
    //     image: "https://theblacktux.com/_next/image?url=https%3A%2F%2Fstatic.theblacktux.com%2Fproducts%2Fshoes%2Fbrown-leather-shoes%2FBrownLeatherShoes_1_1812x1875.jpg%3Fcrop%3D500%3A667&w=3840&q=75",
    //     category_id: 1,
    //     // cart_id: 1
    // },
    // {
    //     id: 9,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "Phones",
    //     price: "823.00",
    //     description: "A mobile phone that can make and receive calls",
    //     image: "https://images.samsung.com/us/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-highlights-kv-a.jpg?imbypass=true",
    //     category_id: 2,
    //     // cart_id: 1                                  
    // },
    // {
    //     id: 2,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "Computers",
    //     price: 800.00,
    //     description: "device that accepts information (in the form of digitalized data) and manipulates it for some result based on a program, software, or sequence of instructions on how the data is to be processed.",
    //     image: "https://i.dell.com/sites/csimages/Product_Imagery/all/prod-2579-desktop-xps-8960-black-rf-800x550.png",
    //     category_id: 3                                  // This should be whatever category it belongs to
    // },
    
    // {  
    //     id: 3,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "Gadgets",
    //     price: 474.00,
    //     description: "small mechanical or electronic device with a practical use",
    //     image: "https://i.ytimg.com/vi/TX9qSaGXFyg/sddefault.jpg",
    //     category_id: 4                                  // This should be whatever category it belongs to
    // },
    // {
    //     id: 4,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "Laptops",
    //     price: 1100.00,
    //     description: "a computer that is portable and suitable for use while traveling.",
    //     image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY218_.jpg",
    //     category_id: 5                                  // This should be whatever category it belongs to
    // },
    
    // {
    //     id: 5,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "TVs",
    //     price: 400.00,
    //     description: "a device for watching television",
    //     image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501902_sd.jpg;maxHeight=2000;maxWidth=2000",
    //     category_id: 6                                 // This should be whatever category it belongs to
    // },
    
    // {
    //     id: 6,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "Computer Monitors",
    //     price: 250.00,
    //     description: "an electronic output device which displays images in pictorial form on the screen",
    //     image: "https://dlcdnwebimgs.asus.com/gain/D99794B7-46F5-46F6-8169-D7CE91495BC6/w717/h525",
    //     category_id: 7                                  // This should be whatever category it belongs to
    // },
    
    // {
    //     id: 7,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "Key Boards and Mice",
    //     price: 95.00,
    //     description: "a panel of keys used for putting information including letters, words, and numbers into your computer. Mouse— is a hand-operated pointing device. ",
    //     image: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pebble-keys-2-k380s/gallery/pebble-keys-2-k380s-top-tonal-graphite-gallery-us.png?v=1",
    //     category_id: 8                                  // This should be whatever category it belongs to
    // },
    
    // {
    //     id: 8,                                          // Auto increment means we dont need this, its just so we can easily keep track of the items we create 
    //     product_name: "Gaming Consoles",
    //     price: 400.00,
    //     description: "a piece of electronic equipment for playing games on",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GameCube-Console-Set.png/1024px-GameCube-Console-Set.png",
    //     category_id: 1                                  // This should be whatever category it belongs to
    // },

    // Beginning of mydata.js
    {
        product_name:"Iphone 15",
price: 829.99,
description:"iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C—all in a durable color-infused glass and aluminum design. ",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417993_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Iphone 14",
price: 629.99,
description:"With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light. Get peace of mind with groundbreaking safety features. ",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504794_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Iphone 13",
price: 579.99,
description:" The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. ",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417788_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Iphone 12",
price: 554.99,
description:" 5G to download movies on the fly and stream high-quality video.¹ Beautifully bright 6.1-inch Super Retina XDR display.",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417831_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Samsung Galaxy s23",
price: 1199.99,
description:"S Series has a legacy of pushing the boundaries of what a smartphone can do. ",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529723_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Samsung Galaxy s22",
price: 699.99,
description:"Galaxy S22 is redefining the epic standard - both for what a smartphone can do with video and for what you can communicate, create, and experience with it",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494417_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Samsung Galaxy s21",
price: 399.99,
description:"Samsung Galaxy S21 FE 5G is jam-packed with features that help you get more out of whatever you're into",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465024cv18d.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Galaxy Note 20",
price: 499.99,
description:"Galaxy Note20 Ultra 5G connect you to everything you love at unprecedented speeds. ",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533176_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Samsung Galaxy s23 Ultra",
price: 1379.99,
description:"Galaxy S23 Ultra is more than the next big step in mobile tech. ",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529724_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Iphone 15 Pro Max",
price: 1099.99,
description:"iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. ",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525424_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 1,
},
{
product_name:"Macbook Pro 14",
price: 1999.99,
description:"The 14-inch MacBook Pro with M2 Pro and M2 Max takes power and speed to the next level",
image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455369_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 2,
},
{
product_name:"HP - ENVY Desktop - Intel Core i7 - 16GB Memory - 1TB SSD - Black",
price: 799.99,
description: "Fuel your creativity. Experience the power and performance of an Intel processor that's designed to meet your creation needs. Render, edit, and stream better than ever before.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6532/6532244_sd.jpg;maxHeight=2000;maxWidth=2000",
category_id: 2,
},
{
product_name: "HP - 15.6' Touch-Screen Laptop - Intel Core i3 - 8GB Memory - 256GB SSD - Silver",
price: 329.99,
description: "Do more from anywhere. All-day long. Designed to keep you productive and entertained from anywhere, the HP 15.6-inch Laptop PC combines long lasting battery life with a thin and portable, microedge bezel design.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6550/6550428_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 2,
},
{
product_name: "HP - 24' All-In-One - AMD Ryzen 3 - 8GB Memory - 256GB SSD - Jet Black",
price: 449.99,
description: "Solid Performance: Getting things done is easy and fast with the power of an AMD processor, Wi-fi technology, and advanced graphics.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6516/6516380_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 2,
},
{
product_name: "MacBook Air 13.3' Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Gold",
price: 749.99,
description: "Apple's thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418599_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 2,
},
{
product_name: "HP - Victus 15.6' Full HD 144Hz Gaming Laptop - Intel Core i5-13420H - 8GB Memory - NVIDIA GeForce RTX 3050 - 512GB SSD - Performance Blue",
price: 599.99,
description: "The HP Victus Laptop is made for peak PC gaming. This sleek machine touts a 13th Gen Intel Core processor¹ and a modern graphics card.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535505_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 2,
},
{
product_name: "HP - 24' Touch-Screen All-In-One - Intel Core i3 - 8GB Memory - 512GB SSD - Snow White",
price: 599.99,
description: "Built for tomorrow: Designed with a panel you can remove in three simple steps, easily upgrade your hardware to ensure you always have the power to get things done.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477672_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 2,
},
{
product_name: "Acer - Aspire 3 Thin & Light Laptop - 15.6' Full HD IPS Touch Display - AMD Ryzen 5 7520U - 8GB LPDDR5 - 512GB SSD - Wi-Fi 6 - Steam Blue",
price: 379.99,
description: "Choose the ready-to-go Aspire 3 with the latest Ryzen 7000 Series Processors made for practical multitasking and productivity.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530235_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 2,
},
{
product_name: "Apple - AirTag - Silver",
price: 29.00,
description: "AirTag. Keep track of your keys, wallet, luggage, backpack, and more, all in the Find My app. Play a sound on the built-in speaker, or say 'Hey Siri, find my gym bag.' With select iPhone models, Precision Finding can lead you right to your nearby AirTag.1 If it's further away, hundreds of millions of Apple devices in the Find My network can help track it down. All anonymously and encrypted for privacy.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461348_rd.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "Belkin - 3-in-1 Wireless Charger - Fast Charging Stand for iPhone, Watch & AirPods - Qi-Certified Charger - Case Compatible - White",
price: 93.99,
description: "The Belkin MagSafe 3-in-1 Wireless Charging Pad is the perfect way to keep your devices charged and ready to go.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403050_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "iOttie - Velox Magnetic Air Vent Mount for MagSafe Compatible Phones - Dark Blue",
price: 24.95,
description: "The Velox Air Vent mount is a magnetic phone mount for MagSafe compatible iPhone series. Just place your device against the Velox mount, and it will snap into place in perfect alignment for a secure hold.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6489/6489035_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "Best Buy essentials™ - Female USB-C to Male USB Adapter (2-Pack) - White",
price: 9.99,
description: "Technology is always changing — don't get caught without a way to connect old devices to new ones.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522045ld.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "OtterBox - Commuter Series Hard Shell for MagSafe for Apple iPhone 15 Pro - Black",
price: 44.95,
description: "Get moving with Commuter Series for MagSafe for the Apple iPhone 15 Pro, the slim MagSafe phone case. Its two-piece design delivers dependable protection when you’re on the move, and a port protector stops dirt from creeping in. Plus, built-in magnets click securely to MagSafe chargers and accessories.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548444_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "OtterBox - Commuter Series Hard Shell for Samsung Galaxy S23 Ultra - Black",
price: 29.99,
description: "Get moving with Commuter Series for the Samsung Galaxy S23 Ultra, the thin phone case that keeps your phone safe from drops and bumps.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525858_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "Insignia™ - Mouse Pad with Memory Foam Wrist Rest - Black",
price: 14.99,
description: "With an integrated memory foam wrist rest, this Insignia™ NS-PNP5002 mouse pad delivers comfort and support for your wrist to prevent fatigue during extended computer sessions. The nonslip rubber backing offers reliable stability.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7536/7536034_sa.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "SteelSeries - QcK Cloth Gaming Mouse Pad (XXL) - Black",
price: 23.99,
description: "Beat the competition with this SteelSeries QcK XXL mouse pad. The sensitivity of this mouse pad transfers every motion to the screen, and its generous size ensures your mouse never slides off and onto the table. The surface of this SteelSeries QcK XXL mouse pad is nearly friction-free to keep your focus on the game.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5637/5637211_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 3,
},
{
product_name: "Lenovo - Ideapad 1 15.6 HD Laptop - Athlon Silver 7120U with 4GB Memory - 128GB SSD - Cloud Grey",
price: 199.99,
description: "Browse, explore and connect with confidence on the Lenovo IdeaPad 1 powered by an AMD Athlon Silver proccessor.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6531/6531746_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
},
{
product_name: "HP - Victus 15.6' Full HD 144Hz Gaming Laptop - Intel Core i5-13420H - 8GB Memory - NVIDIA GeForce RTX 3050 - 512GB SSD - Performance Blue",
price: 599.99,
description: "The HP Victus Laptop is made for peak PC gaming. This sleek machine touts a 13th Gen Intel Core processor¹ and a modern graphics card.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535505_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
},
{
product_name: "ASUS - Vivobook 16' Laptop - AMD Ryzen 7 5800HS with 12GB Memory - 512GB SSD - Quiet Blue - Quiet Blue",
price: 479.99,
description: "Make your world shine with ASUS Vivobook 16X, the feature-packed laptop with a brilliant display.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535990_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
},
{
product_name: "Acer - Chromebook 314 Laptop-14 Full HD Touch IPS - 4GB LPDDR4-64GB eMMC- Wi-Fi 5 - Charcoal Black",
price: 169.00,
description: "The Acer Chromebook 314 is a productivity rock star with an immersive 14-inch Full HD IPS touch display that's designed for working in bright-light conditions.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529399_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
},
{
product_name: "MacBook Air 13.6' Laptop - Apple M2 chip - 8GB Memory - 256GB SSD - Midnight",
price: 899.00,
description: "Supercharged by the next-generation M2 chip, the redesigned MacBook Air combines incredible performance and up to 18 hours of battery life into its strikingly thin aluminum enclosure.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
},
{
product_name: "Dell - Inspiron 16.0' 2-in-1 Touch Laptop - AMD Ryzen 5 7530U - 16GB Memory - 512GB SSD - Dark River Blue",
price: 849.99,
description: "Feel your content unfold around you with the Inspiron 16 2-in-1 Laptop's powerful up-firing speakers, front-facing speakers and beautiful 16-inch display.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6539/6539906_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
},
{
product_name: "HP - 14' Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Jet Black",
price: 169.99,
description: "Take it anywhere. See more. With its thin and light design, 6.5 mm micro-edge bezel display, and 79% screen to body ratio - take this PC anywhere and see and do more.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499753_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
},
{
product_name: "GIGABYTE - AORUS 15.6 144Hz Gaming Laptop FHD - Intel i5-13500H - NVIDIA GeForce RTX 4050 - 512GB SSD",
price: 799.99,
description: "AORUS 15 redefines high-end gaming laptops. Combining powerful performance and mobility with the latest 13th Gen Intel Core Processor H-Series and NVIDIA GeForce RTX 40 Series Laptop GPUs, powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534579_sd.jpg;maxHeight=640;maxWidth=550",
category_id: 4,
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