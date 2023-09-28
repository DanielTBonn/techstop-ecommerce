const removeFromPage = async (e) => {  
    const product_id = e.target.getAttribute("data-id");

    const response = await fetch('/api/product-cart', {
      method: 'DELETE',
      body: JSON.stringify({ 
        product_id,
    }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/user/cart');
    } else {
      alert('Failed to remove from cart.');
    }
  };
  
const btns = document.querySelectorAll('#btn-remove');
//   .addEventListener('click', removeFromPage);

console.log(btns);
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', removeFromPage);
}