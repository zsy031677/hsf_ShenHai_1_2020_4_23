// 在新页面接收跳转页面传递的参数

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    console.log(url);
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    console.log(theRequest); //获取传递的参数
    return theRequest;
}

function hotList() {
    $('.menu-hot').addClass('menu-active');
    $('.menu-new').removeClass('menu-active');
    $('.menu-pop').removeClass('menu-active');
    $('.list-first:eq(0) amp-img').attr("src", '../games/Young santa 1/images/icon.png');
    $('.list-first:eq(1) amp-img').attr("src", '../games/Rabbit Jumping/images/icon.png');
    $('.list-first:eq(2) amp-img').attr("src", '../games/Picture Learning/images/icon.png');
    $('.list-first:eq(3) amp-img').attr("src", '../games/Ball Master/images/icon.png');
    $('.list-first-title:eq(0)').text('Young santa 1');
    $('.list-first-title:eq(1)').text('Rabbit Jumping');
    $('.list-first-title:eq(2)').text('Picture Learning');
    $('.list-first-title:eq(3)').text('Ball Master');
}
function newList() {
    $('.menu-hot').removeClass('menu-active');
    $('.menu-new').addClass('menu-active');
    $('.menu-pop').removeClass('menu-active');
    $('.list-first:eq(0) amp-img').attr("src", '../games/Desert Is land/images/icon.png');
    $('.list-first:eq(1) amp-img').attr("src", '../games/Naruto Parkour/images/icon.png');
    $('.list-first:eq(2) amp-img').attr("src", '../games/Penguin Combat/images/icon.png');
    $('.list-first:eq(3) amp-img').attr("src", '../games/Jumping Dog/images/icon.png');
    $('.list-first-title:eq(0)').text('Desert Is land');
    $('.list-first-title:eq(1)').text('Naruto Parkour');
    $('.list-first-title:eq(2)').text('Penguin Combat');
    $('.list-first-title:eq(3)').text('Jumping Dog');
}
function popList() {
    $('.menu-hot').removeClass('menu-active');
    $('.menu-new').removeClass('menu-active');
    $('.menu-pop').addClass('menu-active');
    $('.list-first:eq(0) amp-img').attr("src", '../games/Rebel Thumb/images/icon.png');
    $('.list-first:eq(1) amp-img').attr("src", '../games/Sliding Flight/images/icon.png');
    $('.list-first:eq(2) amp-img').attr("src", '../games/Shoot Wolf/images/icon.png');
    $('.list-first:eq(3) amp-img').attr("src", '../games/Scoring Table/images/icon.png');
    $('.list-first-title:eq(0)').text('Rebel Thumb');
    $('.list-first-title:eq(1)').text('Sliding Flight');
    $('.list-first-title:eq(2)').text('Shoot Wolf');
    $('.list-first-title:eq(3)').text('Scoring Table');
}
function oneNewDetail(){
    let altTitle = $('.new-first-title:eq(0)').text();
    console.log(altTitle);
    var detailUrl = '../gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function twoNewDetail(){
    let altTitle = $('.new-first-title:eq(1)').text();
    console.log(altTitle);
    var detailUrl = '../gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function threeNewDetail(){
    let altTitle = $('.new-first-title:eq(2)').text();
    console.log(altTitle);
    var detailUrl = '../gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function fourNewDetail(){
    let altTitle = $('.new-first-title:eq(3)').text();
    console.log(altTitle);
    var detailUrl = '../gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}

function show() {
    let requestObj = GetRequest();
    if (requestObj.title == "Hottest") {
        $('.menu-hot').addClass('menu-active');
        $('.list-first:eq(0) amp-img').attr("src", '../games/Young santa 1/images/icon.png');
        $('.list-first:eq(1) amp-img').attr("src", '../games/Rabbit Jumping/images/icon.png');
        $('.list-first:eq(2) amp-img').attr("src", '../games/Picture Learning/images/icon.png');
        $('.list-first:eq(3) amp-img').attr("src", '../games/Ball Master/images/icon.png');
        $('.list-first-title:eq(0)').text('Young santa 1');
        $('.list-first-title:eq(1)').text('Rabbit Jumping');
        $('.list-first-title:eq(2)').text('Picture Learning');
        $('.list-first-title:eq(3)').text('Ball Master');

    }else if(requestObj.title == "New") {
        $('.menu-new').addClass('menu-active');
        $('.list-first:eq(0) amp-img').attr("src", '../games/Desert Is land/images/icon.png');
        $('.list-first:eq(1) amp-img').attr("src", '../games/Naruto Parkour/images/icon.png');
        $('.list-first:eq(2) amp-img').attr("src", '../games/Penguin Combat/images/icon.png');
        $('.list-first:eq(3) amp-img').attr("src", '../games/Jumping Dog/images/icon.png');
        $('.list-first-title:eq(0)').text('Desert Is land');
        $('.list-first-title:eq(1)').text('Naruto Parkour');
        $('.list-first-title:eq(2)').text('Penguin Combat');
        $('.list-first-title:eq(3)').text('Jumping Dog');


    }else if(requestObj.title == "Popular") {
        $('.menu-pop').addClass('menu-active');
        $('.list-first:eq(0) amp-img').attr("src", '../games/Rebel Thumb/images/icon.png');
        $('.list-first:eq(1) amp-img').attr("src", '../games/Sliding Flight/images/icon.png');
        $('.list-first:eq(2) amp-img').attr("src", '../games/Shoot Wolf/images/icon.png');
        $('.list-first:eq(3) amp-img').attr("src", '../games/Scoring Table/images/icon.png');
        $('.list-first-title:eq(0)').text('Rebel Thumb');
        $('.list-first-title:eq(1)').text('Sliding Flight');
        $('.list-first-title:eq(2)').text('Shoot Wolf');
        $('.list-first-title:eq(3)').text('Scoring Table');

    }
}
window.onload = function () {
    this.show();
}