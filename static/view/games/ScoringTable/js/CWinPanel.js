function CWinPanel(e){var t,n,i,_,a,s,r,o,A,T,l;return this._init=function(e){stopSound("soundtrack"),playSound("game_over",1,!1),playSound("ambience",1,!1),(o=new createjs.Container).alpha=0,o.visible=!1;var E=new createjs.Shape;E.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),E.alpha=.5,o.addChild(E),(t=createBitmap(e)).x=CANVAS_WIDTH_HALF,t.y=CANVAS_HEIGHT_HALF+70,t.regX=.5*e.width,t.regY=.5*e.height,o.addChild(t),(n=new createjs.Text("","60px "+FONT_GAME,TEXT_COLOR_STROKE)).x=CANVAS_WIDTH/2,n.y=CANVAS_HEIGHT_HALF-150,n.textAlign="center",n.outline=5,o.addChild(n),(i=new createjs.Text("","60px "+FONT_GAME,TEXT_COLOR)).x=CANVAS_WIDTH/2,i.y=n.y,i.textAlign="center",o.addChild(i),(_=new createjs.Text("","40px "+FONT_GAME,TEXT_COLOR_STROKE)).x=CANVAS_WIDTH/2,_.y=CANVAS_HEIGHT_HALF-80,_.textAlign="center",_.outline=5,o.addChild(_),(a=new createjs.Text("","40px "+FONT_GAME,TEXT_COLOR)).x=CANVAS_WIDTH/2,a.y=_.y,a.textAlign="center",o.addChild(a),(s=new createjs.Text("","40px "+FONT_GAME,TEXT_COLOR_STROKE)).x=CANVAS_WIDTH/2,s.y=CANVAS_HEIGHT_HALF-30,s.textAlign="center",s.outline=5,o.addChild(s),(r=new createjs.Text("","40px "+FONT_GAME,TEXT_COLOR)).x=CANVAS_WIDTH/2,r.y=s.y,r.textAlign="center",o.addChild(r);var d=s_oSpriteLibrary.getSprite("but_restart");(T=new CGfxButton(.5*CANVAS_WIDTH+120,.5*CANVAS_HEIGHT+80,d,o)).pulseAnimation(),T.addEventListener(ON_MOUSE_DOWN,this._onRestart,this);var c=s_oSpriteLibrary.getSprite("but_home");(A=new CGfxButton(.5*CANVAS_WIDTH-148,.5*CANVAS_HEIGHT+80,c,o)).addEventListener(ON_MOUSE_DOWN,this._onExit,this),l=new createjs.Container,o.addChild(l),o.on("click",function(){}),s_oStage.addChild(o)},this.unload=function(){o.removeAllEventListeners(),s_oStage.removeChild(o),A&&(A.unload(),A=null),T&&(T.unload(),T=null)},this.show=function(e){n.text=TEXT_GAMEOVER,i.text=TEXT_GAMEOVER,_.text=TEXT_SCORE+": "+e,a.text=TEXT_SCORE+": "+e,s.text=TEXT_BEST_SCORE+": "+s_iBestScore,r.text=TEXT_BEST_SCORE+": "+s_iBestScore,o.visible=!0,createjs.Tween.get(o).wait(MS_WAIT_SHOW_GAME_OVER_PANEL).to({alpha:1},1250,createjs.Ease.cubicOut).call(function(){s_iAdsLevel===NUM_LEVEL_FOR_ADS?($(s_oMain).trigger("show_interlevel_ad"),s_iAdsLevel=1):s_iAdsLevel++}),$(s_oMain).trigger("save_score",e),$(s_oMain).trigger("share_event",e)},this._onContinue=function(){var e=this;createjs.Tween.get(o,{override:!0}).to({alpha:0},750,createjs.Ease.cubicOut).call(function(){e.unload()}),_oButContinue.block(!0),A.block(!0),s_oGame.onContinue()},this._onRestart=function(){T.block(!0),this.unload(),s_oGame.restartGame()},this._onExit=function(){this.unload(),s_oGame.onExit()},this._init(e),this}