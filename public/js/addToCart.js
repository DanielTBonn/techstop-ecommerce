const addToCart = async (e) => {  
    const product_id = e.target.getAttribute("data-id");

    const response = await fetch('/api/product-cart', {
      method: 'POST',
      body: JSON.stringify({ 
        product_id
    }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/user/cart');
        // console.log("Successfully added to cart!")
    } else {
      alert('Failed to add to cart.');
    }
  };
  
const btns = document.querySelectorAll('#btn-add');
//   .addEventListener('click', removeFromPage);

console.log(btns);
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', addToCart);
}