function CGame(e){var t,i,n,a,o,r=0,c=0;this._init=function(e){if(t=e,o=new CPlayer,t){a=new CInterface(this,t);var c=(n=new CBallChallenge(this)).getInitialScoringdata();r=c.initGravity,i=c.tick}else a=new CInterface(this,t),n=new CBall(this)},this.unload=function(){n.unload(),s_oMain.gotoMenu()},this.update=function(){n.checkEdges()&&(0!==r&&a.updateScore(0,Math.floor(100*c)/100),t?(r=n.getInitialScoringdata().initGravity,!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("reset_kickup")):r>0&&(r=0,!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("reset_kickup"))),n.update(),s_oStage.update()},this.increaseScore=function(){t?r+=i:r++;var e=Math.random();e<=.25&&r>c?a.newTopScore():e<=.7&&a.encouragement(),r>c&&(c=r,$(s_oMain).trigger("new_highscore",c)),a.updateScore(Math.floor(100*r)/100,Math.floor(100*c)/100)},this.playerAnim=function(e,t){o.display(e,t)},this._init(e)}