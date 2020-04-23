function CMenu(){var e,t,i,s,n,l,o,r,a,u,_,c=null,h=null;this._init=function(){n=createBitmap(s_oSpriteLibrary.getSprite("bg_menu")),s_oStage.addChild(n);var d=(p=s_oSpriteLibrary.getSprite("lettering_menu")).width/2,S=p.height,g={images:[p],frames:{width:d,height:S,regX:d/2,regY:S/2},animations:{off:[0],on:[1]}},A=new createjs.SpriteSheet(g),b=createSprite(A,"off",d/2,S/2,d,S);b.x=CANVAS_WIDTH_HALF,b.y=CANVAS_HEIGHT_HALF+80,s_oStage.addChild(b);var f=createSprite(A,"on",d/2,S/2,d,S);f.x=b.x,f.y=b.y,f.alpha=0,s_oStage.addChild(f),createjs.Tween.get(f,{loop:!0}).to({alpha:1},1e3,createjs.Ease.bounceIn).wait(2e3).to({alpha:0},3e3,createjs.Ease.cubicOut);p=s_oSpriteLibrary.getSprite("but_play");if(t={x:CANVAS_WIDTH/2,y:CANVAS_HEIGHT-440},l=createBitmap(p),l.x=t.x,l.y=t.y,l.regX=.5*p.width,l.regY=.5*p.height,s_oStage.addChild(l),(_=new createjs.Shape).graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x-l.regX,t.y-l.regY,p.width,150),_.on("mousedown",this._onMouseDownHitArea,this,!0),_.on("pressup",this._onButPlayRelease,this,!0),_.cursor="pointer",s_oStage.addChild(_),s_iBestScore=getItem(LOCALSTORAGE_STRING[LOCAL_BEST_SCORE]),null===s_iBestScore&&(s_iBestScore=0),!1===DISABLE_SOUND_MOBILE||!1===s_bMobile){var p=s_oSpriteLibrary.getSprite("audio_icon");e={x:CANVAS_WIDTH-p.height/2-10,y:p.height/2+10},(a=new CToggle(e.x,e.y,p,s_bAudioActive)).addEventListener(ON_MOUSE_UP,this._onAudioToggle,this)}var w=s_oSpriteLibrary.getSprite("but_info");i={x:w.height/2+10,y:w.height/2+10},(o=new CGfxButton(i.x,i.y,w,s_oStage)).addEventListener(ON_MOUSE_UP,this._onButInfoRelease,this);var E=window.document,y=E.documentElement;c=y.requestFullscreen||y.mozRequestFullScreen||y.webkitRequestFullScreen||y.msRequestFullscreen,h=E.exitFullscreen||E.mozCancelFullScreen||E.webkitExitFullscreen||E.msExitFullscreen,!1===ENABLE_FULLSCREEN&&(c=!1),c&&screenfull.enabled&&(p=s_oSpriteLibrary.getSprite("but_fullscreen"),s={x:i.x+p.width/2+10,y:p.height/2+10},(u=new CToggle(s.x,s.y,p,s_bFullscreen,s_oStage)).addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this)),(r=new createjs.Shape).graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),s_oStage.addChild(r),createjs.Tween.get(r).to({alpha:0},1e3).call(function(){r.visible=!1}),this.refreshButtonPos(s_iOffsetX,s_iOffsetY)},this.refreshButtonPos=function(t,n){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||a.setPosition(e.x-t,n+e.y),c&&screenfull.enabled&&u.setPosition(s.x+t,s.y+n),o.setPosition(i.x+t,i.y+n)},this.unload=function(){_.removeAllEventListeners(),!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||(a.unload(),a=null),c&&screenfull.enabled&&u.unload(),s_oStage.removeAllChildren(),s_oMenu=null},this._onMouseDownHitArea=function(){l.scaleX=l.scaleY=.9},this._onButPlayRelease=function(){l.scaleX=l.scaleY=1,this.unload(),isIOS()&&null===s_oSoundTrack&&playSound("ambience",1,!0),s_oMain.gotoGame()},this._onAudioToggle=function(){Howler.mute(s_bAudioActive),s_bAudioActive=!s_bAudioActive},this._onButInfoRelease=function(){new CCreditsPanel},this.resetFullscreenBut=function(){c&&screenfull.enabled&&u.setActive(s_bFullscreen)},this._onFullscreenRelease=function(){s_bFullscreen?h.call(window.document):c.call(window.document.documentElement),sizeHandler()},s_oMenu=this,this._init()}var s_oMenu=null;