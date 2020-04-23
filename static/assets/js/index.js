
function oneBannerDetail(){
    let altTitle = $('.swiper-slide:eq(0) img').attr('alt');
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function twoBannerDetail(){
    let altTitle = $('.swiper-slide:eq(1) img').attr('alt');
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function threeBannerDetail(){
    let altTitle = $('.swiper-slide:eq(2) img').attr('alt');
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function oneHotDetail(){
    let altTitle = $('.hot-top-title').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function twoHotDetail(){
    let altTitle = $('.hot-bottom-title:eq(0)').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function threeHotDetail(){
    let altTitle = $('.hot-bottom-title:eq(1)').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function oneNewDetail(){
    let altTitle = $('.new-first-title:eq(0)').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function twoNewDetail(){
    let altTitle = $('.new-first-title:eq(1)').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function threeNewDetail(){
    let altTitle = $('.new-first-title:eq(2)').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function onePopDetail(){
    let altTitle = $('.list-first-title').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function twoPopDetail(){
    let altTitle = $('.list-second-title').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function threePopDetail(){
    let altTitle = $('.list-third-title').text();
    console.log(altTitle);
    var detailUrl = 'static/view/gameDetail/detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}

function hotMore(){
    let title = $('.hot-flex .hot-title:eq(0)').text();
    console.log(title);
    var moreUrl = 'static/view/moreGame/list.html?title=' + title;
    window.location.href = moreUrl;
}

function newMore(){
    let title = $('.hot-flex .hot-title:eq(1)').text();
    console.log(title);
    var moreUrl = 'static/view/moreGame/list.html?title=' + title;
    window.location.href = moreUrl;
}

function popMore(){
    let title = $('.hot-flex .hot-title:eq(2)').text();
    console.log(title);
    var moreUrl = 'static/view/moreGame/list.html?title=' + title;
    window.location.href = moreUrl;
}