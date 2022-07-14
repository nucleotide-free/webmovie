var SignUpName = document.getElementById("SignUpName");
var SignUpPassword = document.getElementById("SignUpPassword");
var SignUpPassword2 = document.getElementById("SignUpPassword2");

var SignInName = document.getElementById("SignInName");
var SignInPassword = document.getElementById("SignInPassword");


//注册
function SignUp() {

    if (!SignUpName.value) {
        alert("用户名不能为空！");
        SignUpName.focus();
        return;
    }
    if (!SignUpPassword.value) {
        alert("密码不能为空！");
        SignUpPassword.focus();
        return;
    }
    if (!SignUpPassword2.value) {
        alert("请确认密码！");
        SignUpPassword2.focus();
        return;
    }
    if (SignUpPassword.value !== SignUpPassword2.value) {
        alert("两次输入的密码不一致！");
        SignUpPassword.focus();
        return;
    }

    var data = {
        "username": SignUpName.value,
        "password": SignUpPassword.value
    };
    commonAjaxPost(true, "/userSignUp", data, signUpSuccess)

}

//登录
function SignIn() {
    if (!SignInName.value) {
        alert("请先输入用户名");
        SignInName.focus();
        return;
    }
    if (!SignInPassword.value) {
        alert("请输入密码");
        SignInPassword.focus();
        return;
    }

    let data = {
        "username": SignInName.value,
        "password": SignInPassword.value
    };
    commonAjaxPost(true, "/userSignIn", data, loginSuccess)
}

//登录成功回调
function loginSuccess(result) {
    console.log(result)
    if (result.code == '666') {
        setCookie('isLogin', '1');
        setCookie('userId', result.data.id);
        setCookie('userName', SignInName.value);
       window.location.href = "../pages/analyse.html"
    } else {
        alert("八嘎");
    }
}

//注册成功回调
function signUpSuccess(result) {
    console.log(result)
    if (result.code === '666') {
        setCookie('isLogin', '1');
        setCookie('userId', result.data.id);
        setCookie('userName', SignInName.value);
        window.location.href = "../pages/analyse.html"
    } else {
        alert("八嘎");
    }
}

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active")
});
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active")
});