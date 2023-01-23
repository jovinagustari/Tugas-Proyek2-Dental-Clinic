function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == 'admin' && password == 'admin'){
        alert("Login Berhasil");
        login.setAttribute('action', '../../admin/admin_booking.html');
    }
    else if(username == "" && password == ""){
        alert("isi username & password");
    }
    else if (username == ''){
        alert("username tak boleh kosong");
    }
    else if (password == ''){
        alert('password tak boleh kosong');
    }
    else {
        alert('username/password salah');
    }

}

