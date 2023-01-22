function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('cek_password').value;

    if (name != "" && email != "" && username != "" && password != "" && password2 == password) {
        alert("Registrasi Berhasil");
        login.setAttribute("action", "admin.html");
    }
    else {
        alert("Silahkan kembali Lengkapi Data");
    }
}