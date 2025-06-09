const emailInput = document.getElementById('email');
const arrowBtn = document.getElementById('arrow-btn');
const error = document.getElementById('error');
const errorIcon = document.getElementById('error-icon');


arrowBtn.addEventListener("click", () => {
    const input = emailInput.value;

    if (input == "" || !validEmail(input)){
        error.textContent = `Please provide a valid email`;
        errorIcon.classList.remove('error-icon');
        errorIcon.classList.add('show');
    } else {
        error.textContent = "";
        errorIcon.classList.add('error-icon');
        errorIcon.classList.remove('show');
    }
});

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}