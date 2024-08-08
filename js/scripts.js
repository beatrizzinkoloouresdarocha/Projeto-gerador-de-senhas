// Selecionando os elementos do DOM
const generatePasswordLink = document.getElementById('generate-password-link');
const generatedPasswordElement = document.getElementById('generated-password').querySelector('h4');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');

// Função para gerar uma senha aleatória
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

// Evento de clique para gerar e exibir a senha
generatePasswordLink.addEventListener('click', function() {
    const newPassword = generatePassword();
    generatedPasswordElement.textContent = newPassword;
    passwordInput.value = newPassword;
    confirmPasswordInput.value = newPassword;
});

// Função para validar se as senhas coincidem
function validatePasswords() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return false;
    }
    return true;
}

// Evento de envio do formulário
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validatePasswords()) {
        event.preventDefault(); // Previne o envio do formulário se as senhas não coincidirem
    }
});
