function CLoadingPanel(){var e,t,a,i;this._init=function(){e=!0,t=0,a=new createjs.Container;var n=(new createjs.Graphics).beginFill("rgba(0,0,0,1)").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);(i=new createjs.Shape(n)).on("click",function(){});var r=s_oSpriteLibrary.getSprite("lettering_menu"),o=r.width/2,s=r.height,l={images:[r],frames:{width:o,height:s,regX:o/2,regY:s/2},animations:{off:[0],on:[1]}},c=new createjs.SpriteSheet(l),A=createSprite(c,"off",o/2,s/2,o,s);A.x=CANVAS_WIDTH_HALF,A.y=CANVAS_HEIGHT_HALF;var _=createSprite(c,"on",o/2,s/2,o,s);_.x=A.x,_.y=A.y,_.alpha=0,createjs.Tween.get(_,{loop:!0}).to({alpha:1},500,createjs.Ease.cubicIn).wait(2e3).to({alpha:0},3e3,createjs.Ease.cubicOut),a.addChild(i,A,_);var H={x:CANVAS_WIDTH_HALF,y:CANVAS_HEIGHT_HALF},S=new CBall(CANVAS_WIDTH_HALF,CANVAS_HEIGHT_HALF,null,a);S.setVisible(!0),S.setPosition(CANVAS_WIDTH_HALF,CANVAS_HEIGHT_HALF),S.scale(.5);var h=Math.floor(6*Math.random());S.setCurBallSpriteIndex(h);var C=100*Math.random();createjs.Tween.get(S.getSprite(),{loop:!0}).wait(C).to({y:H.y+40},500,createjs.Ease.cubicIn).to({y:H.y},500,createjs.Ease.cubicOut);var u=new CBall(CANVAS_WIDTH_HALF,CANVAS_HEIGHT_HALF,null,a);u.setVisible(!0),u.setPosition(CANVAS_WIDTH_HALF,CANVAS_HEIGHT_HALF+100),u.scale(.5),u.getSprite().alpha=.1,u.setCurBallSpriteIndex(h),createjs.Tween.get(u.getSprite(),{loop:!0}).wait(C).to({y:H.y+70},500,createjs.Ease.cubicIn).to({y:H.y+100},500,createjs.Ease.cubicOut),s_oStage.addChild(a)},this.unload=function(){e=!1,i.off("click",function(){}),s_oStage.removeChild(a),s_oLoadingPanel=null},this._init(),s_oLoadingPanel=this}var s_oLoadingPanel=null;