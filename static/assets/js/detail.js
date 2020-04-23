
function playDetail() {
    let altTitle = $('.detail-first-title').text();
    console.log(altTitle);
    var playUrl;
    if (altTitle == "Football Tricks") {
        playUrl = 'http://www.lequ.com/h5/zqjq/index.html?lequwebapp=1';
        window.location.href = playUrl;
    } else if (altTitle == "Lightning Fighter") {
        playUrl = 'http://www.lequ.com/h5/ltjz/index.html?lequwebapp=1';
        window.location.href = playUrl;
    } else if (altTitle == "Monster Rampace") {
        playUrl = 'http://www.lequ.com/h5/fndgs/index.html?lequwebapp=1';
        window.location.href = playUrl;
    } else if (altTitle == "Young santa 1") {
        playUrl = 'https://img.ishouyou.cn/xyx/180423/201804231622439431/index.html';
        window.location.href = playUrl;
    } else if (altTitle == "Rabbit Jumping") {
        playUrl = 'http://www.lequ.com/h5/mmttt/index.html?lequwebapp=1';
        window.location.href = playUrl;
    } else if (altTitle == "Picture Learning") {
        playUrl = 'http://szhong.4399.com/4399swf/upload_swf/ftp16/ssj/20150718/y1/index.html';
        window.location.href = playUrl;
    } else if (altTitle == "Desert Is land") {
        playUrl = 'https://img.ishouyou.cn/h5/mshd/index.html';
        window.location.href = playUrl;
    } else if (altTitle == "Naruto Parkour") {
        playUrl = 'http://www.lequ.com/h5/hypk/index.html?lequwebapp=1';
        window.location.href = playUrl;
    } else if (altTitle == "Penguin Combat") {
        playUrl = 'http://www.lequ.com/h5/qebwz/index.html?lequwebapp=1';
        window.location.href = playUrl;
    } else if (altTitle == "Rebel Thumb") {
        playUrl = 'https://img.ishouyou.cn/h5/180207/201802071001336449/index.html';
        window.location.href = playUrl;
    } else if (altTitle == "Sliding Flight") {
        playUrl = 'http://www.lequ.com/h5/xxcbdwf/index.html?lequwebapp=1';
        window.location.href = playUrl;
    } else if (altTitle == "Shoot Wolf") {
        playUrl = 'http://www.lequ.com/h5/fndxhm1/index.html?lequwebapp=1';
        window.location.href = playUrl;
    }else if (altTitle == "Ball Master") {
        playUrl = 'http://www.lequ.com/h5/dqdr/index.html?lequwebapp=1';
        window.location.href = playUrl;
    }else if (altTitle == "Jumping Dog") {
        playUrl = 'http://www.lequ.com/h5/xsbttg/index.html?lequwebapp=1';
        window.location.href = playUrl;
    }else if (altTitle == "Scoring Table") {
        playUrl = 'http://www.lequ.com/h5/tfqt/index.html?lequwebapp=1';
        window.location.href = playUrl;
    }else if (altTitle == "Slow Warrior") {
        playUrl = 'http://www.lequ.com/h5/fcys/index.html?lequwebapp=1';
        window.location.href = playUrl;
    }else if (altTitle == "Spoof Boss") {
        playUrl = 'http://szhong.4399.com/4399swf/upload_swf/ftp16/ssj/20150714/2/index.html';
        window.location.href = playUrl;
    }else if (altTitle == "Squirrel Nuts") {
        playUrl = 'http://www.lequ.com/h5/qhjgjh/index.html?lequwebapp=1';
        window.location.href = playUrl;
    }

}

function oneRelatDetail() {
    let altTitle = $('.detail-top-title').text();
    console.log(altTitle);
    var detailUrl = 'detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function twoRelatDetail() {
    let altTitle = $('.detail-bottom-title:eq(0)').text();
    console.log(altTitle);
    var detailUrl = 'detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}
function threeRelatDetail() {
    let altTitle = $('.detail-bottom-title:eq(1)').text();
    console.log(altTitle);
    var detailUrl = 'detail.html?title=' + altTitle;
    window.location.href = detailUrl;
}


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

function showDetail() {
    let requestObj = GetRequest();
    if (requestObj.title == "Football Tricks") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Football Tricks/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Football Tricks/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Football Tricks/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Football Tricks/images/icon.png');
        $('.detail-first-title').text('Football Tricks');
        $('.instruct-text').text("There is no superb football skill in reality. Come and play this game. It's time to reflect your football skills. Come and try. Use your shooting skills to the fullest!");

    } else if (requestObj.title == "Lightning Fighter") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Lightning Fighter/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Lightning Fighter/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Lightning Fighter/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Lightning Fighter/images/icon.png');
        $('.detail-first-title').text('Lightning Fighter');
        $('.instruct-text').text("Star Wars has begun again. This time, the enemy you face is even stronger. Where can you go in this war? Let's wait and see! Reasonable control to destroy all enemy aircraft.");

    } else if (requestObj.title == "Monster Rampace") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Monster Rampace/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Monster Rampace/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Monster Rampace/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Monster Rampace/images/icon.png');
        $('.detail-first-title').text('Monster Rampace');
        $('.instruct-text').text("The evil scientist successfully resurrected the monster by extracting its DNA. He armed the monster in an attempt to dominate the world. But this monster was awakening silently, and a terrible killing began!");

    } else if (requestObj.title == "Young santa 1") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Young santa 1/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Young santa 1/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Young santa 1/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Young santa 1/images/icon.png');
        $('.detail-first-title').text('Young santa 1');
        $('.instruct-text').text("Just shoot bullets to the gift to get points. The mission of the player is to shoot more gifts to get a higher score, and quickly join the game challenge!");

    } else if (requestObj.title == "Rabbit Jumping") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Rabbit Jumping/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Rabbit Jumping/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Rabbit Jumping/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Rabbit Jumping/images/icon.png');
        $('.detail-first-title').text('Rabbit Jumping');
        $('.instruct-text').text("Help the bunny jump to the moon! Make the bunny jump upwards continuously by drawing a line, all the way to the moon, click and drag to draw a line, and use the line to bounce the rabbit.");

    } else if (requestObj.title == "Picture Learning") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Picture Learning/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Picture Learning/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Picture Learning/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Picture Learning/images/icon.png');
        $('.detail-first-title').text('Picture Learning');
        $('.instruct-text').text("In this learning game, players mainly type target English words by looking at pictures and listening to sounds, quickly develop your word ability, and enrich your English vocabulary.");

    } else if (requestObj.title == "Desert Is land") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Desert Is land/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Desert Is land/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Desert Is land/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Desert Is land/images/icon.png');
        $('.detail-first-title').text('Desert Is land');
        $('.instruct-text').text("An open role-playing game with the theme of survival on a desert island. Control characters, choose different weapons, destroy enemies, and enter the next level.");

    } else if (requestObj.title == "Naruto Parkour") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Naruto Parkour/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Naruto Parkour/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Naruto Parkour/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Naruto Parkour/images/icon.png');
        $('.detail-first-title').text('Naruto Parkour');
        $('.instruct-text').text("The game incorporates the elements of ninja. The addition of Ninjutsu summons makes this game more exciting and tortuous. The game as a whole is very durable.");

    } else if (requestObj.title == "Penguin Combat") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Penguin Combat/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Penguin Combat/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Penguin Combat/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Penguin Combat/images/icon.png');
        $('.detail-first-title').text('Penguin Combat');
        $('.instruct-text').text("A casual little game, players slide the screen to fight penguins, don't hit the bomb disguised as a penguin! Pay attention to your speed. Don't let go of a penguin. Come and try it!");

    } else if (requestObj.title == "Rebel Thumb") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Rebel Thumb/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Rebel Thumb/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Rebel Thumb/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Rebel Thumb/images/icon.png');
        $('.detail-first-title').text('Rebel Thumb');
        $('.instruct-text').text("The thumb was fed up with its owner and decided to flee from its owner. When he escaped, he was accidentally found by the owner. Help the thumb to pass through the obstacle and get freedom!");

    } else if (requestObj.title == "Sliding Flight") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Sliding Flight/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Sliding Flight/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Sliding Flight/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Sliding Flight/images/icon.png');
        $('.detail-first-title').text('Sliding Flight');
        $('.instruct-text').text("The classic online game, click to load to enter the game, swipe up to start flying, and move left and right to avoid debris falling from the sky. The little friends will take you to cool and fly you.");

    } else if (requestObj.title == "Shoot Wolf") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Shoot Wolf/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Shoot Wolf/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Shoot Wolf/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Shoot Wolf/images/icon.png');
        $('.detail-first-title').text('Shoot Wolf');
        $('.instruct-text').text("An arrow, a lunch bag in the game, can Little Red Riding Hood reach the grandmother's house safely? Hurry up and escort Little Red Riding Hood to the grandma's house. Be a real warrior!");

    }else if (requestObj.title == "Ball Master") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Ball Master/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Ball Master/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Ball Master/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Ball Master/images/icon.png');
        $('.detail-first-title').text('Ball Master');
        $('.instruct-text').text("You have to learn to control the ball when you play football. How to control the ball is to raise the ball without landing. Can you also control a good ball like those football stars!");

    }else if (requestObj.title == "Jumping Dog") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Jumping Dog/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Jumping Dog/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Jumping Dog/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Jumping Dog/images/icon.png');
        $('.detail-first-title').text('Jumping Dog');
        $('.instruct-text').text("Players control your jumping dogs, climb high-rise buildings, and scrub windowsills. Challenge your ability to react, but don't be discovered, come and challenge your high scores!");

    }else if (requestObj.title == "Scoring Table") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Scoring Table/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Scoring Table/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Scoring Table/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Scoring Table/images/icon.png');
        $('.detail-first-title').text('Scoring Table');
        $('.instruct-text').text("In the game, you can control the direction and strength to throw the ball into the hole to score. Now let's challenge your highest score! Call your friends to compare.");

    }else if (requestObj.title == "Slow Warrior") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Slow Warrior/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Slow Warrior/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Slow Warrior/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Slow Warrior/images/icon.png');
        $('.detail-first-title').text('Slow Warrior');
        $('.instruct-text').text("Facing more and more mobs, the waste wood warriors are a bit dull and challenge many mobs. How long can the wastewood warriors survive? It's up to you!");

    } else if (requestObj.title == "Spoof Boss") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Spoof Boss/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Spoof Boss/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Spoof Boss/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Spoof Boss/images/icon.png');
        $('.detail-first-title').text('Spoof Boss');
        $('.instruct-text').text("Toy Puzzle City is a game of finding numbers or letters. All the clues are on the doll. You need to pay attention to every detail to successfully find it and test your carefulness.");

    } else if (requestObj.title == "Squirrel Nuts") {
        $('.swiper-slide:eq(0) img').attr("src", '../games/Squirrel Nuts/images/detail/detail_1.png');
        $('.swiper-slide:eq(1) img').attr("src", '../games/Squirrel Nuts/images/detail/detail_2.png');
        $('.swiper-slide:eq(2) img').attr("src", '../games/Squirrel Nuts/images/detail/detail_3.png');
        $('.detail-first img').attr("src", '../games/Squirrel Nuts/images/icon.png');
        $('.detail-first-title').text('Squirrel Nuts');
        $('.instruct-text').text("The squirrel's nuts were stolen by a group of birds. The squirrel flies to the sky and can continue to fly by touching the birds or eating the nuts. Let's help squirrels get more nuts!");

    }

}
window.onload = function () {
    this.showDetail();
}