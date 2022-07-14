function LoginCheck(){
    let isLogin = getCookie("isLogin");
    let userName = getCookie("userName");
    if(isLogin !== '1'){//未登录
        window.location.href = "../pages/login.html";
    }
    else{
        $(".userName").html("你好！"+userName);
    }
}

function Logout(){
    setCookie("isLogin","0")
    window.location.href = "../pages/login.html";
}

function LogoutShow(){
    $(".logout-overlay").fadeTo(200, 0.5);
    $(".logout-box").show();
}

function LogoutHide(){
    $(".logout-overlay").fadeOut(200);
    $(".logout-box").hide();
}
