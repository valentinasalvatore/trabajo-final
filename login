function toggleLogin() {
    const loginContainer = document.getElementById('login-container');
    if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
        loginContainer.style.display = 'block';
    } else {
        loginContainer.style.display = 'none';
    }
}

function handleLogin(event) {
    event.preventDefault(); 
    document.getElementById('login-container').style.display = 'none'; 
    alert('Inicio de sesión exitoso'); 
}