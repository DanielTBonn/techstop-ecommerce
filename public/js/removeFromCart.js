const removeFromPage = async () => {
  console.log("HELLO WORLD!")

    const response = await fetch('/api/product-cart', {
      method: 'DELETE',
      body: JSON.stringify({ 
        product_id: 4,
        cart_id: 1
    }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/user/cart/1');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#btn-remove').addEventListener('click', removeFromPage);