function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == 'adminklinik' && password == '12345'){
        alert("Login Berhasil");
        login.setAttribute('action', '../../admin/admin_booking.html');
    }
    else if(username == "" && password == ""){
        alert("Silahkan isi username & password terlebih dahulu");
    }
    else if (username == ''){
        alert("Username tidak boleh kosong!");
    }
    else if (password == ''){
        alert('Password tidak boleh kosong!');
    }
    else {
        alert('Maaf, username atau password salah');
    }

}

