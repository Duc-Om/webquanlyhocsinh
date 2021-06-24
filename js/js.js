function login(){
    var idlogin = document.getElementById('user');
    var id = idlogin.value;
    if(id == ""){
        alert("Tài khoản không được để trống!");
        idlogin.select();
        return false;
    }
    var regexID = /^[\w\.\-]+@\w+(\.\w+){1,3}$/;
    if(regexID.test(id)){
        alert("Email không hợp lệ!");
        regexID.select();
        return false;
    }
    var passLogin = document.getElementById('password');
    var pass = passLogin.value;
    if( pass == ""){
        alert("Mật khẩu không được để trống!");
        passLogin.select();
        return false;
    }
    var regexPass = /\ /;
    if(regexPass.test(pass)){
        alert("Mật khẩu không được có dấu cách!");
        regexPass.select();
        return false;
    }
}
document.getElementById('login').onclick = login;