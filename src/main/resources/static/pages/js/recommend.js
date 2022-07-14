var questIdModal = '';
var data;
var colorful = ["#000000",
    "#B47C74",
    "#354B6A",
    "#5F6E65",
    "#54464B",
    "#D0B4A9",
    "#809489",
    "#A9888D",
    "#9F9C96",
    "#878FB1",
]
function showCard(title,release_date,genres,runtime,overview,userid){
    var MovieInfo = JSON.stringify(returndata);
    console.log(MovieInfo)
    $(".overlay").fadeTo(200, 0.5);
    $(".card_title").innerText=title
    $(".card_movie_year").innerText=release_date
    $(".card_movie_tag").innerText=genres
    $(".card_right__review").innerText=overview
    $(".card").show();
}


$(function() {
    LoginCheck();
    queryMoviesList();

});


function queryMoviesList() {
    var userId= getCookie("userId");
    console.log(userId);
    var url = '/queryRecommendList';
    var data = {
        "userid": parseInt(userId)
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
                if(i==0) {
                    var sb = '     <div class="overlay" ></div> <div class="card">';
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
                var ss='      <div class="MovieList" onclick="showCard('+MovieInfo.title+','+MovieInfo.release_date+','+MovieInfo.genres+','+MovieInfo.runtime+','+MovieInfo.overview+')">';
                ss+='            <div class="movie-number" style="background-color:'+ colorful[i] +'"></div>';
                ss+='            <div class="movie-left">';
                ss+= '                <img src="https://image.tmdb.org/t/p/original/'+MovieInfo.poster_path+'" height="200">';
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

                $("#panel-23802").append(ss);
                $("#results-report").html("电影推荐 Movie Recommend");
            }
        } else {
            $("#results-report").html("暂无推荐，期待您的评分！");
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