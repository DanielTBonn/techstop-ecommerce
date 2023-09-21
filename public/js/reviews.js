// makes a post request for a blogpost
const reviewFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-content').value.trim();
    const content = document.querySelector('#body-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ content, username }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("Successfully created a review");
            // window.location = '/dashboard'
        } else {
            alert('Could not create blogpost');
        }
    }
};

document
    .querySelector('.review-form')
    .addEventListener('submit', reviewFormHandler);