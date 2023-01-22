function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (name != "" && email != "" && username != "" && password != "") {
        alert("Registrasi Anda Berhasil");
        register.setAttribute("action", "../admin.html");
    }
    else {
        alert("Silahkan lengkapi data Anda");
    }
}