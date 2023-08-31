const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', formSubmit);

function formSubmit(event){
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if(email === '' || password === ''){
        alert('Please, fill all the gap!');
    } else{
        const data = {
            email,
            password
        }
        console.log(data);
        form.reset();
    };
}
