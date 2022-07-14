

//加载事件
$(function() {
    // isLoginFun();

});

//显示遮罩层和卡片
function showCard(){
    $(".overlay").fadeTo(200, 0.5);
    $(".card").show();
}

//遮罩层取消+评价
function hideCard(){
    $(".overlay").fadeOut(200);
    $(".card").hide();
    // var userId = parseInt(getCookie("userId"))
    // var movieId = parseInt(getCookie("movieId"))
    //获取评分
    var rating = $('input:radio[name="rating"]:checked').val();
    if (rating){
        let data = {
            "userId": 111111,//userId,
            "movieId": 1188877,//movieId,
            "rating": parseFloat(rating.toString()),
            "timestamp": new Date().valueOf().toString()
        };
        console.log(data)
        commonAjaxPost(true, "/insertRatingInfo", data,ratingSuccess)
    }
}

//评价成功函数回调
function ratingSuccess(){

}