function showLoginForm() {
  document.querySelector('.login-form').style.display = 'block';
  document.querySelector('.signup-form').style.display = 'none';
}


function showSignupForm() {
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.signup-form').style.display = 'block';
}

document.querySelector('.signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const user = { name, email, password };
  localStorage.setItem('user', JSON.stringify(user));

  alert('Registro exitoso. Ahora puedes iniciar sesión.');
  showLoginForm();
});


document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const userData = JSON.parse(localStorage.getItem('user'));

  if (!userData) {
    alert('No hay ningún usuario registrado.');
    return;
  }

  if (userData.email === email) {
    alert(`Bienvenido/a, ${userData.name}!`);
  } else {
    alert('Correo incorrecto o usuario no registrado.');
  }
});
