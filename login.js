const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');
RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
});
LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
});
const registerForm = document.querySelector('.form-box.Register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelectorAll('input')[0].value;
    const email = registerForm.querySelectorAll('input')[1].value;
    const password = registerForm.querySelectorAll('input')[2].value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === username)) {
        alert("Уучлаарай, энэ нэр аль хэдийн бүртгэгдсэн байна.");
        return;
    }
    users.push({
        username: username,
        email: email,
        password: password
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Амжилттай бүртгэгдлээ! Одоо нэвтэрнэ үү.");
    container.classList.remove('active'); // Нэвтрэх хэсэг рүү шилжүүлнэ
});
const loginForm = document.querySelector('.form-box.Login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelectorAll('input')[0].value;
    const password = loginForm.querySelectorAll('input')[1].value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        sessionStorage.setItem('currentUser', username);
        window.location.href = "bdpu.html"; 
    } else {
        alert("Нэвтрэх нэр эсвэл нууц үг буруу байна!");
    }
});