const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the button's ID (color name) and apply it as the background
        document.body.style.backgroundColor = button.id;
        console.log(button.id)
    });
});
