var questIdModal = '';
var data
function showCard(title,release_date,genres,runtime,overview){
console.log(title)
    $(".overlay").fadeTo(200, 0.5);
    $(".card_title").innerText=title
    $(".card_movie_year").innerText=release_date
    $(".card_movie_tag").innerText=genres
    $(".card_right__review").innerText=overview
    $(".card").show();
}
// $(function () {
//     //关闭遮盖层
//     $(".overlay").click(function () {
//         $(".overlay").fadeOut(200);
//         $(".card").hide();
//     });
// });

$(function() {
    // isLoginFun();
    // var userId= getCookie('userId');
    // header();
    // $("#ctl01_lblUserName").html(userId);
    queryMoviesList();
});
// 查看项目及其包含的问卷列表
function queryMoviesList() {

    var url = '/queryMoviesList';
    var data = {

    };
    commonAjaxPost(true, url, data, queryMoviesListSuccess);
}

function queryMoviesListSuccess(result) {
    console.log(result.code);
    if (result.code == "666") {
        data = result.data;
        console.log(data)
        console.log("11")
        $("#panel-23802").empty();

        //遍历多个项目
        var text = "";

        if (data.length) {

            for (var i = 0; i < data.length; i++) {
                var MovieInfo = data[i];
                var movieTitle = MovieInfo.title;
                if (movieTitle.length >= 25) {
                    movieTitle = movieTitle.substring(0, 26) + "...";
                }
                if(i<=0) {
                    var sb = '     <div class="overlay" onclick="hideCard()" ></div> <div class="card">';
                    sb += '        <div class="card_left">';
                    sb += '            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"/>';
                    sb += '        </div>';
                    sb += '        <div class="card_right">';
                    sb += '            <h1 class="card_title" >' + MovieInfo.title + '</h1>';
                    sb += '            <div class="card_right__details">';
                    sb += '                <ul>';
                    sb += '                    <li class="card_movie_year">' + MovieInfo.release_date + '</li>';
                    sb += '                    <li class="card_movie_runtime">' + MovieInfo.runtime + '</li>';
                    sb += '                    <li class="card_movie_tag">Action</li>';
                    sb += '                </ul>';
                    sb += '                <div class="card_right__rating">';
                    sb += '                    <div class="card_right__rating__stars">';
                    sb += '                        <fieldset class="rating">';
                    sb += '                            <input id="star10" name="rating" type="radio" value="10"/>';
                    sb += '                            <label class="full" for="star10" title="10 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star9half" name="rating" type="radio" value="9 and a half"/>';
                    sb += '                            <label class="half" for="star9half" title="9.5 stars"></label>';
                    sb += '                            <input id="star9" name="rating" type="radio" value="9"/>';
                    sb += '                            <label class="full" for="star9" title="9 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star8half" name="rating" type="radio" value="8 and a half"/>';
                    sb += '                            <label class="half" for="star8half" title="8.5 stars"></label>';
                    sb += '                            <input id="star8" name="rating" type="radio" value="8"/>';
                    sb += '                            <label class="full" for="star8" title="8 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star7half" name="rating" type="radio" value="7 and a half"/>';
                    sb += '                            <label class="half" for="star7half" title="7.5 stars"></label>';
                    sb += '                            <input id="star7" name="rating" type="radio" value="7"/>';
                    sb += '                            <label class="full" for="star7" title="7 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star6half" name="rating" type="radio" value="6 and a half"/>';
                    sb += '                            <label class="half" for="star6half" title="6.5 stars"></label>';
                    sb += '                            <input id="star6" name="rating" type="radio" value="6"/>';
                    sb += '                            <label class="full" for="star6" title="6 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star5half" name="rating" type="radio" value="5 and a half"/>';
                    sb += '                            <label class="half" for="star5half" title="5.5 stars"></label>';
                    sb += '                            <input id="star5" name="rating" type="radio" value="5"/>';
                    sb += '                            <label class="full" for="star5" title="5 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star4half" name="rating" type="radio" value="4 and a half"/>';
                    sb += '                            <label class="half" for="star4half" title="4.5 stars"></label>';
                    sb += '                            <input id="star4" name="rating" type="radio" value="4"/>';
                    sb += '                            <label class="full" for="star4" title="4 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star3half" name="rating" type="radio" value="3 and a half"/>';
                    sb += '                            <label class="half" for="star3half" title="3.5 stars"></label>';
                    sb += '                            <input id="star3" name="rating" type="radio" value="3"/>';
                    sb += '                            <label class="full" for="star3" title="3 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star2half" name="rating" type="radio" value="2 and a half"/>';
                    sb += '                            <label class="half" for="star2half" title="2.5 stars"></label>';
                    sb += '                            <input id="star2" name="rating" type="radio" value="2"/>';
                    sb += '                            <label class="full" for="star2" title="2 stars"></label>';
                    sb += '';
                    sb += '                            <input id="star1half" name="rating" type="radio" value="1 and a half"/>';
                    sb += '                            <label class="half" for="star1half" title="1.5 stars"></label>';
                    sb += '                            <input id="star1" name="rating" type="radio" value="1"/>';
                    sb += '                            <label class="full" for="star1" title="1 stars"></label>';
                    sb += '';
                    sb += '                            <input id="starhalf" name="rating" type="radio" value="half"/>';
                    sb += '                            <label class="half" for="starhalf" title="0.5 stars"></label>';
                    sb += '                        </fieldset>';
                    sb += '                    </div>';
                    sb += '                </div>';
                    sb += '                <div class="card_right__review">';
                    sb += '                    <p>' + MovieInfo.overview + '</p>';
                    sb += '                    <a href="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl" target="_blank">Read more</a>';
                    sb += '                </div>';
                    sb += '                <div class="card_right__button">';
                    sb += '                    <a href="https://www.youtube.com/watch?v=ot6C1ZKyiME" target="_blank">WATCH TRAILER</a>';
                    sb += '                </div>';
                    sb += '            </div>';
                    sb += '        </div>';
                    sb += '    </div>';
                    $("#panel-23802").append(sb);
                }
                var ss='    <div id="content">';
                ss+='        <div class="MovieList" onclick=\'showCard('+'"'+ MovieInfo.title + '"'+')\'>';
                ss+='            <div class="movie-number"></div>';
                ss+='            <div class="movie-left">';
                ss+='                <img src="../images/poster/killbill.jpeg" height="200">';
                ss+='            </div>';
                ss+='            <div class="movie-right">';
                ss+='                <h3 class="movie-title">'+MovieInfo.title+'</h3>';
                ss+='                <ul class="movie-detail-line">';
                ss+='                    <li class="movie_director">语言：'+MovieInfo.original_language+'</li>';
                ss+='                    <li class="movie_runtime">'+MovieInfo.runtime+'min</li>';
                ss+='                </ul>';
                ss+='                <ul class="movie-detail-line">';
                ss+='                    <li class="movie_year">'+MovieInfo.release_date+'</li>';
                ss+='                    <li class="movie_tag">'+MovieInfo.genres+'</li>';
                ss+='                </ul>';
                ss+='                <div class="movie-rating">';
                ss+='                    <div class="rating-content" data-rating="'+MovieInfo.vote_average+'">';
                ss+='                        <span>★</span>';
                ss+='                        <span>★</span>';
                ss+='                        <span>★</span>';
                ss+='                        <span>★</span>';
                ss+='                        <span>★</span>';
                ss+='                    </div>';
                ss+='                    <span class="rating-content-num">'+MovieInfo.vote_average+'</span>';
                ss+='                    <div class="movie-rating-num">'+MovieInfo.vote_count+'人已评价</div>';
                ss+='                </div>';
                ss+='            </div>';
                ss+='        </div>';

                // }
                $("#panel-23802").append(ss);
            }
            //for循环结束


        } else {
            alert("ppppp")
        }

    } else if (result.code == "333") {
        layer.msg(result.message, { icon: 2 });
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 1000)
    } else {
        layer.msg(result.message, { icon: 2 })
    }

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
