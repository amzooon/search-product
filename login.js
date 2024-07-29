const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

const password = "963258741";

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === password) {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'index-6gtr548564gtrs584ds65t5r4d65tr8654ers89zs648t564dgtr558654654e654erw896473w869543wa86a3wWDAESGYUAEW5E5ERT5EA.html';
    } else {
        errorMessage.textContent = "Password errata. Riprova.";
    }
});
