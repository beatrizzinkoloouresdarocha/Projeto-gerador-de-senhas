
const generatePasswordLink = document.getElementById('generate-password-link');
const generatedPasswordElement = document.getElementById('generated-password').querySelector('h4');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');

function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const passwordLength = 12;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

generatePasswordLink.addEventListener('click', function() {
    const newPassword = generatePassword();
    generatedPasswordElement.textContent = newPassword;
    passwordInput.value = newPassword;
    confirmPasswordInput.value = newPassword;
});

function validatePasswords() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return false;
    }
    return true;
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (!validatePasswords()) {
        event.preventDefault(); 
    }
});
