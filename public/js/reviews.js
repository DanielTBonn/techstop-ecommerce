// makes a post request for a blogpost
const reviewFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const content = document.querySelector('#review').value.trim();

    const currentUrl = await window.location.href;
    const product_id = await currentUrl.split('/').at(-1)

    if (name && content) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ content, username: name, product_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("Successfully created a review");
            window.location.reload();
        } else {
            alert('Could not create blogpost');
        }
    }
};

document
    .querySelector('.review-form')
    .addEventListener('submit', reviewFormHandler);