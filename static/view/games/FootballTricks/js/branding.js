function resizeSpill(){var e=window.innerHeight/500,t=parseInt(spillWidth*e),i=parseInt(spillHeight*e),n=parseInt(spillMargnLeft*e);parseInt(spillMargnTop*e);$("#brand").css("width",t+"px"),$("#brand").css("height",i+"px"),$("#brand").css("marginLeft",n+"px"),$("#brand").css("background-size","auto "+5*i/6+"px")}$("#all").append("<div id='brand' style='position:absolute; width: 207px; height: 67px; left:50%; top:0%; display:block; border:none; z-index:99999; background-position : center; background-size: auto 67px; background-repeat: no-repeat; cursor:pointer;'></div>");var canvas,stage,exportRoot,spillHeight=60,spillWidth=194,spillMargnLeft=-97,spillMargnTop=5;$("#brand").css("background-image","url(images/logo_D.png)"),resizeSpill(),$(window).resize(function(){resizeSpill()});var oldMenuStateInit=MenuState.prototype.init;MenuState.prototype.init=function(e){$("#brand").css("left","0%"),spillMargnLeft=0,resizeSpill(),oldMenuStateInit.call(this,e),this.getGui("play").setPosition(251,280);var t=guiFactory.createObject("GuiButton",{parent:this.getGui("menuContainer"),normal:{image:"FinalArt/Menu/Button.png",label:{style:"gameButton bowl-white-unboredered",text:"moreGames",fontSize:28,color:"#01B5FF",y:"51%"}},hover:{image:"FinalArt/Menu/Button.png",scale:115,label:{style:"gameButton bowl-white-unboredered",text:"moreGames",fontSize:28,color:"#01B5FF",y:"51%"}},style:"gameButton",width:126,height:56,x:391,y:280});this.addGui(t),t.bind(function(){})};var oldGameStateInit=GameState.prototype.init;GameState.prototype.init=function(e){oldGameStateInit.call(this,e),$("#brand").css("left","100%"),spillMargnLeft=-200,resizeSpill();var t=this.getGui("pauseBtn"),i=t.pushFunction;t.bind(function(e){window.mobileAPI&&window.mobileAPI.events.paused(),i()});var n=(t=this.getGui("resume")).pushFunction;t.bind(function(e){window.mobileAPI&&window.mobileAPI.events.resume(function(){n()})})};var LevelMenuStateInit=LevelMenuState.prototype.init;LevelMenuState.prototype.init=function(e){$("#brand").css("left","100%"),spillMargnLeft=-200,resizeSpill(),LevelMenuStateInit.call(this,e)};var oldBattleScene=BattleScene.prototype.createVisual;BattleScene.prototype.createVisual=function(){oldBattleScene.call(this),window.mobileAPI&&window.mobileAPI.events.started()};var oldFailShow=BattleScene.prototype.failShow;BattleScene.prototype.failShow=function(){oldFailShow.call(this),window.mobileAPI&&window.mobileAPI.events.gameover()};var oldSuccessShow=BattleScene.prototype.successShow;BattleScene.prototype.successShow=function(){oldSuccessShow.call(this),window.mobileAPI&&(window.mobileAPI.events.scored(parseInt(this.score)),window.mobileAPI.events.levelup())};