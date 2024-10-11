const buttons = document.querySelectorAll('.reproductions__button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('reproductions__button--active'));

        button.classList.add('reproductions__button--active');
    });
});