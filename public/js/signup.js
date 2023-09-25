// makes a post request to add a user to the database
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.lo
    if (username && password) {
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({username, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const response2 = await fetch('/api/carts', {
            method: 'POST',
            body: JSON.stringify({username, password }),
            headers: { 'Content-Type': 'application/json' },
        });


            if (response2.ok) {
                document.location.replace('/');
                
            } else {
                alert('Failed to create cart.');
            }
        }
    } else {
        alert('Failed to sign up.');
    }
};


document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);
