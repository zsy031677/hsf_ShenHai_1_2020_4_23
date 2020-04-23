var responsefailedLabel,heroLayer=null,monsterLayer=null,explosionLayer=null,isFirstPlay=!0,prepareMonsterArr=[],monsterArray=[],monsterShadowArray=[],delArray=[],touchLocationX=null,positionY=null,bgSprite=null,shadowBatchNode=null,heroSprite=null,heroShadow=null,targetX=0,durationLabel=null,duration=0,hpMax=3,hpLabel=null,hpProgress=null,hp=0,hpNode=null,scoreLabel=null,score=0,isGameOver=!1,coolDowan=0,skillProgress=null,isSkillPeriod=!1,attackDir=0,response=null,isSharelayer=!1,BgLayer=cc.Layer.extend({ctor:function(){this._super(),(bgSprite=cc.Sprite.create(res.bg1_jpg)).setPosition(cc.p(240,400)),bgSprite.setScale(1.6),this.addChild(bgSprite)}}),PlayLayer=cc.Layer.extend({ctor:function(){this._super(),prepareMonsterArr=[],monsterArray=[],duration=0,hp=hpMax,score=0,isGameOver=!1,coolDowan=0,isSkillPeriod=!1,attackDir=0,isSharelayer=!1;for(r=0;r<g_resources.length;r++)cc.textureCache.addImage(g_resources[r]);var e=cc.director.getWinSize();positionY=e.height/2+35,hpNode=cc.Node.create();for(var r=1;r<=hpMax;r++){var t=cc.Sprite.create(res.xin_1_png);t.setPosition(cc.p(30*(hpMax-r),0)),hpNode.addChild(t,1,r)}hpNode.setPosition(cc.p(480-30*hpMax,780)),this.addChild(hpNode),(heroSprite=cc.Sprite.create(res.hero1_png)).setAnchorPoint(cc.p(.3,.5)),heroSprite.setPosition(cc.p(e.width/2,positionY-10)),heroLayer.addChild(heroSprite,3);var c=cc.MenuItemImage.create(res.skill_png,res.skill_png,function(){cc.log("释放技能"),null==heroSprite.getActionByTag(1024)&&useSkill(heroSprite.getParent())},this);c.setPosition(cc.p(240,280));if(cc.Menu.create(c).setPosition(cc.p(0,0)),isFirstPlay){this.guidePrecess(),isFirstPlay=!1;var a=cc.Sprite.create(res.guide_png);a.setScale(1),a.setPosition(cc.p(240,200)),this.addChild(a,1),a.runAction(cc.Sequence.create(cc.DelayTime.create(1.5),cc.FadeOut.create(1),cc.CallFunc.create(function(e){e.removeFromParent()})))}else this.initMonster(),this.init()},guidePrecess:function(){var e=cc.Node.create(),r=cc.Sprite.create(res.notice_board_png);r.setPosition(cc.p(240,840)),e.addChild(r),r.runAction(cc.Sequence.create(cc.MoveTo.create(.3,cc.p(240,400)),cc.MoveTo.create(.05,cc.p(240,420)),cc.MoveTo.create(.05,cc.p(240,400))));var t=cc.Sprite.create(res.monster6_1_png);t.setPosition(cc.p(-t.getContentSize().width/2,450)),e.addChild(t),this.addChild(e,3);for(var c=cc.moveTo(.2,cc.p(t.getContentSize().width/2,450)),a=cc.Animation.create(),o=1;o<=4;o++){var n="res/monster6_"+o+".png";a.addSpriteFrameWithFile(n)}a.setDelayPerUnit(.15),t.runAction(cc.RepeatForever.create(cc.Animate.create(a))),t.runAction(cc.Sequence.create(cc.DelayTime.create(.4),c,cc.CallFunc.create(noticeCallback)))},init:function(){cc.director.getWinSize();playIdleAction();for(var e=cc.Animation.create(),r=6;r<=8;r++){var t="res/hero"+r+".png";e.addSpriteFrameWithFile(t)}e.setDelayPerUnit(.04);for(var c=cc.Animate.create(e),a=cc.Animation.create(),r=6;r<=8;r++){var o="res/sword"+r+".png";a.addSpriteFrameWithFile(o)}a.setDelayPerUnit(.04);cc.Animate.create(a);var n=cc.Sequence.create(c,cc.CallFunc.create(heroAttackCallback)),i=cc.EventListener.create({event:cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:!0,onTouchBegan:function(e,r){if(isSkillPeriod||isGameOver||e.getLocationY()>350||Math.abs(e.getLocationX()-240)<20)return!1;if(null==heroSprite.getActionByTag(1024)){if((touchLocationX=e.getLocationX())<240){if(1==attackDir)return!1;attackDir=1,heroSprite.setScaleX(-1)}else{if(2==attackDir)return!1;attackDir=2,heroSprite.setScaleX(1)}heroSprite.stopAllActions(),heroSprite.runAction(n)}return!0}});cc.eventManager.addListener(i,this),this.schedule(this.updateDuration,.5,cc.REPEAT_FOREVER)},initMonster:function(){prepareMonster(1,1,1,0),prepareMonster(1.5,1,0,0),prepareMonster(2,1,1,0),prepareMonster(2.5,1,0,0),prepareMonster(3,1,1,0),prepareMonster(3.5,1,0,0),prepareMonster(4,1,1,0),prepareMonster(4.5,1,0,0),prepareMonster(5,1,1,0),prepareMonster(5.5,1,0,0),prepareMonster(6,1,1,0),prepareMonster(6.5,1,0,0),prepareMonster(7,1,1,0),prepareMonster(7.5,1,0,0),prepareMonster(8,1,1,0);prepareMonster(11,1,1,0),prepareMonster(12,1,.5,0),prepareMonster(12.2,1,.5,1),prepareMonster(13.4,1,1,1),prepareMonster(14.2,1,0,0),prepareMonster(15,1,0,0),prepareMonster(15.2,1,0,1),prepareMonster(15.5,1,0,0),prepareMonster(16.4,1,0,1),prepareMonster(16.6,1,1,0),prepareMonster(17.2,1,0,0),prepareMonster(18,1,1,0),prepareMonster(18.7,1,.5,0),prepareMonster(20,1,0,1);prepareMonster(23,1,1,0),prepareMonster(23.5,1,.5,0),prepareMonster(24.5,3,.5,0),prepareMonster(24.6,1,1,1),prepareMonster(24.9,1,0,0),prepareMonster(24.9,3,1,0),prepareMonster(27.1,1,0,1),prepareMonster(27.1,3,1,0),prepareMonster(27.9,3,.5,0),prepareMonster(27.9,1,0,1),prepareMonster(28.4,3,1,0),prepareMonster(28.6,1,.5,0),prepareMonster(29.7,1,1,1),prepareMonster(30,1,.5,.5);prepareMonster(33,1,.5,1),prepareMonster(33.2,1,.5,0),prepareMonster(33.3,3,.5,0),prepareMonster(33.9,2,1,0),prepareMonster(34.2,3,1,0),prepareMonster(34.5,1,0,0),prepareMonster(35.3,1,0,1),prepareMonster(35.6,2,.5,0),prepareMonster(37,1,.5,1),prepareMonster(37,3,.5,0),prepareMonster(37.4,3,.5,0),prepareMonster(37.8,2,.5,0),prepareMonster(39.4,2,1,0),prepareMonster(40,2,1,1);prepareMonster(43,2,.5,1),prepareMonster(43,1,0,0),prepareMonster(44,3,1,0),prepareMonster(44.5,1,0,0),prepareMonster(44.7,4,0,0),prepareMonster(44.8,3,.5,0),prepareMonster(45.5,4,1,0),prepareMonster(45.6,1,1,1),prepareMonster(46.9,1,0,0),prepareMonster(46.9,3,0,0),prepareMonster(47.5,4,.5,0),prepareMonster(47.8,3,1,0),prepareMonster(48.6,2,1,0),prepareMonster(48.7,3,0,0),prepareMonster(49.7,1,1,0),prepareMonster(50,3,.5,0),prepareMonster(50,2,0,1);prepareMonster(53,3,.5,0),prepareMonster(53.3,1,.5,1),prepareMonster(53.8,4,0,0),prepareMonster(54,3,.5,0),prepareMonster(54.3,2,0,0),prepareMonster(54.9,5,0,0),prepareMonster(55.3,3,1,0),prepareMonster(56.1,1,1,1),prepareMonster(56.1,5,0,0),prepareMonster(56.6,2,0,0),prepareMonster(56.6,4,1,0),prepareMonster(56.6,3,0,0),prepareMonster(57.1,1,1,0),prepareMonster(57.4,5,.5,0),prepareMonster(57.9,2,1,1),prepareMonster(57.9,3,0,0),prepareMonster(58.5,4,.5,0),prepareMonster(58.9,5,.5,0),prepareMonster(59.3,5,0,0),prepareMonster(60,2,.5,1);prepareMonster(63,4,1,0),prepareMonster(63.4,4,0,0),prepareMonster(63.9,2,0,1),prepareMonster(64,4,1,0),prepareMonster(64.2,3,0,0),prepareMonster(64.5,2,1,0),prepareMonster(64.8,3,1,0),prepareMonster(65.5,5,0,0),prepareMonster(65.9,4,1,0),prepareMonster(66,3,.5,0),prepareMonster(66.4,2,1,0),prepareMonster(66.7,6,0,0),prepareMonster(67.1,3,1,0),prepareMonster(67.4,5,1,0),prepareMonster(68.1,4,.5,0),prepareMonster(69,2,0,1),prepareMonster(69.2,6,0,0),prepareMonster(69.5,3,1,0),prepareMonster(69.8,5,1,0),prepareMonster(69.9,3,.5,0),prepareMonster(70,2,.5,1);prepareMonster(76,2,.5,1),prepareMonster(76.2,2,.5,1),prepareMonster(76.5,2,.5,1),prepareMonster(76.6,2,.5,1),prepareMonster(76.6,4,.5,0),prepareMonster(76.6,3,1,0),prepareMonster(76.8,6,0,0),prepareMonster(76.8,2,0,1),prepareMonster(76.9,4,1,0),prepareMonster(77,3,1,0),prepareMonster(77.1,6,.5,0),prepareMonster(77.2,2,0,1),prepareMonster(77.4,6,0,0),prepareMonster(77.4,3,1,1),prepareMonster(77.9,4,1,0),prepareMonster(78,4,0,0),prepareMonster(80,2,.5,1),prepareMonster(80.2,2,.5,1),prepareMonster(80.6,2,.5,1),prepareMonster(80.6,5,1,0),prepareMonster(80.7,6,.5,0),prepareMonster(80.7,2,.5,1),prepareMonster(80.9,4,0,0),prepareMonster(81,4,1,0),prepareMonster(81.5,6,.5,0),prepareMonster(84,2,.5,1),prepareMonster(84.2,2,.5,1),prepareMonster(84.4,2,.5,1)},update:function(e){},updateDuration:function(e){duration+=e,(coolDowan+=e)<=30||(coolDowan=30);for(var r=[],t=0;t<prepareMonsterArr.length&&prepareMonsterArr[t].time<=duration;t++)r.push(prepareMonsterArr[t]);for(t=0;t<r.length;t++)this.createMonster(r[t]);deleteChildFromArray(prepareMonsterArr,r),duration>=88&&gameOver()},createMonster:function(e){var r=cc.Sprite.create("res/monster"+e.type+"_1.png");r.setScale(1.25),r.setAnchorPoint(cc.p(.5,0));Math.random();Math.random()<e.direction?(targetX=180,r.setPosition(cc.p(-30,positionY-55))):(targetX=300,r.setPosition(cc.p(510,positionY-55)),r.setFlippedX(!0)),monsterArray.push(r),monsterLayer.getChildByTag(e.type).addChild(r,1,e.type),1==e.type||3==e.type||4==e.type||5==e.type?r.setUserData(monsterUserData(1,1)):r.setUserData(monsterUserData(2,2));var t=createMonsterWalkLine(e.type,e.rampageProb);1==e.type||2==e.type||5==e.type||6==e.type?(r.runAction(createMonsterWalkAnimate(e.type)),r.runAction(cc.Sequence.create(t,cc.CallFunc.create(monsterAttackCallback)))):3!=e.type&&4!=e.type||r.runAction(t)}}),useSkill=function(e){if(!isSkillPeriod&&!isGameOver){coolDowan<30&&cc.log("冷却时间，不能释放技能"),coolDowan=0,isSkillPeriod=!0;for(var r=cc.MoveTo.create(.3,cc.p(240,700)),t=cc.EaseBackIn.create(cc.MoveTo.create(.3,cc.p(240,positionY+10))),c=cc.Animation.create(),a=6;a<=9;a++){var o="res/hero"+a+".png";c.addSpriteFrameWithFile(o)}c.setDelayPerUnit(.1);var n=cc.Animate.create(c);heroSprite.stopAllActions();var i=cc.Sequence.create(r,cc.Spawn.create(t,n),cc.CallFunc.create(useSkillCallback));heroSprite.runAction(i)}},useSkillCallback=function(e){cc.director.getScheduler().setTimeScale(.2);var r=cc.Sprite.create(res.eff_dark_png);r.setScale(800),r.setPosition(cc.p(240,400)),heroSprite.getParent().addChild(r,2,1001),heroSprite.getParent().runAction(cc.Sequence.create(cc.ScaleTo.create(.2,1.5))),heroSprite.getParent().runAction(cc.Spawn.create(cc.CallFunc.create(function(){for(var e=[],r=0;r<monsterArray.length;r++)monsterBeHurt(monsterArray[r]),monsterArray[r].getUserData().curBlood<=0&&e.push(monsterArray[r]);for(r=0;r<e.length;r++)null!=e[r].getUserObject()&&e[r].getUserObject().removeFromParent(),e[r].removeFromParent();deleteChildFromArray(monsterArray,e)}))),heroSprite.getParent().runAction(cc.Sequence.create(cc.DelayTime.create(.3),cc.CallFunc.create(function(){cc.director.getScheduler().setTimeScale(1),heroSprite.getParent().getChildByTag(1001).removeFromParent(),playIdleAction(),isSkillPeriod=!1}),cc.ScaleTo.create(.2,1)))},noticeCallback=function(e){var r=cc.LabelTTF.create("据说没有人能过37秒","Arial",24);r.setColor(cc.color(204,255,0,255)),r.setPosition(cc.p(240,400)),e.getParent().addChild(r,4);var t=cc.moveTo(.2,cc.p(0,450));e.getParent().runAction(cc.Sequence.create(cc.DelayTime.create(1.5),t,cc.CallFunc.create(helpCallback)))},helpCallback=function(e){var r=cc.LabelTTF.create("点击屏幕下方左右键砍杀怪物","Arial",20);r.setColor(cc.color(255,255,0,255)),r.setPosition(240,340),e.getParent().addChild(r,3),e.getParent().initMonster(),e.getParent().init(),r.runAction(cc.Sequence.create(cc.DelayTime.create(1.5),cc.FadeOut.create(1),cc.CallFunc.create(function(e){e.removeFromParent()})))},PrepareMonsterData=function(e,r,t,c){return{time:e,type:r,direction:t,rampageProb:c}},prepareMonster=function(e,r,t,c){var a=PrepareMonsterData(e,r,t,c);prepareMonsterArr.push(a)},monsterUserData=function(e,r){return{maxBlood:e,curBlood:r}},monsterAttackCallback=function(e){e.stopAllActions();var r=cc.RepeatForever.create(cc.Sequence.create(createMonsterAttackAnimate(e.getTag()),cc.CallFunc.create(function(){heroBeHurt()}),cc.DelayTime.create(1.5)));e.runAction(r)},createMonsterWalkLine=function(e,r){var t=null,c=Math.random()<r?.75:1.5;if(1==e)t=cc.MoveTo.create(c,cc.p(targetX,positionY-55));else if(2==e)t=cc.MoveTo.create(c/1.5,cc.p(targetX,positionY-55));else if(3==e){var a,o,n=cc.MoveTo.create(.3,cc.p(targetX,positionY-55)),i=cc.Sprite.create(res.warning_wolf_png);targetX<240?(M=cc.Place.create(cc.p(-30,positionY+100)),a=cc.EaseBackIn.create(cc.JumpTo.create(2,cc.p(targetX-70,positionY-55),100,1)),o=cc.MoveTo.create(2,cc.p(580,positionY-55)),i.setPosition(cc.p(50,positionY+150))):(M=cc.Place.create(cc.p(510,positionY+100)),a=cc.EaseBackIn.create(cc.JumpTo.create(2,cc.p(targetX+70,positionY-55),100,1)),o=cc.MoveTo.create(2,cc.p(-100,positionY-55)),i.setPosition(cc.p(430,positionY+150)),i.setScaleX(-1));var p=cc.ScaleBy.create(.2,1.8),s=cc.Sequence.create(p,p.reverse());heroSprite.getParent().addChild(i),i.runAction(cc.Sequence.create(s,cc.CallFunc.create(function(){i.removeFromParent()})));var l=cc.CallFunc.create(function(){heroBeHurt()}),u=cc.Sequence.create(cc.DelayTime.create(2),createMonsterWalkAnimate(e)),d=cc.Sequence.create(M,a,n,createMonsterAttackAnimate(e),l,cc.Spawn.create(o),cc.CallFunc.create(function(e){monsterArray.splice(monsterArray.indexOf(e),1),null!=e.getUserObject()&&e.getUserObject().removeFromParent(),e.removeFromParent()}));t=cc.Spawn.create(u,d)}else if(4==e){h=targetX<240?cc.MoveTo.create(1,cc.p(50,positionY-60)):cc.MoveTo.create(1,cc.p(430,positionY-60)),t=cc.Sequence.create(h,createMonsterAttackAnimate(e),cc.CallFunc.create(shootArrow))}else if(5==e){targetX<240?(M=cc.Place.create(cc.p(-50,positionY+200)),h=cc.MoveTo.create(2,cc.p(targetX,positionY-30))):(M=cc.Place.create(cc.p(530,positionY+200)),h=cc.MoveTo.create(2,cc.p(targetX,positionY-30))),t=cc.Sequence.create(M,h)}else if(6==e){var M,h,m=30*Math.random(),g=30*Math.random();targetX<240?(M=cc.Place.create(cc.p(-30+m,-30+g)),h=cc.MoveTo.create(2,cc.p(targetX,positionY-60))):(M=cc.Place.create(cc.p(510-m,-30+g)),h=cc.MoveTo.create(2,cc.p(targetX,positionY-60))),t=cc.Sequence.create(M,h)}return t},shootArrow=function(e){var r=cc.Sprite.create(res.arrow_png);r.setPosition(cc.p(e.getPosition().x,positionY-40)),r.setAnchorPoint(cc.p(1,.5)),r.setScale(.8),e.getParent().addChild(r,1,11),r.setUserData(monsterUserData(1,1)),monsterArray.push(r);var t,c;e.isFlippedX()?(r.setScaleX(-.8),r.setPosition(cc.p(e.getPosition().x-20,positionY-40)),t=cc.MoveTo.create(1,cc.p(260,positionY-40)),c=cc.MoveTo.create(.5,cc.p(530,positionY-60))):(r.setPosition(cc.p(e.getPosition().x+20,positionY-40)),t=cc.MoveTo.create(1,cc.p(220,positionY-40)),c=cc.MoveTo.create(.5,cc.p(-50,positionY-60))),e.runAction(cc.Sequence.create(cc.DelayTime.create(1),c,cc.CallFunc.create(function(){monsterArray.splice(monsterArray.indexOf(e),1),null!=e.getUserObject()&&e.getUserObject().removeFromParent(),e.removeFromParent()}))),r.runAction(cc.Sequence.create(t,cc.CallFunc.create(function(e){heroBeHurt(),monsterArray.splice(monsterArray.indexOf(r),1),r.removeFromParent()})))},createMonsterWalkAnimate=function(e){for(var r="res/monster"+e+"_",t=cc.Animation.create(),c=1;c<=4;c++){var a=r+(c%4+1)+".png";t.addSpriteFrameWithFile(a)}return t.setDelayPerUnit(.12),cc.Repeat.create(cc.Animate.create(t),50)},createMonsterAttackAnimate=function(e){for(var r="res/monster"+e+"_",t=cc.Animation.create(),c=7;c<=9;c++){var a=r+c+".png";t.addSpriteFrameWithFile(a)}return t.addSpriteFrameWithFile(r+"4.png"),t.setDelayPerUnit(.04),cc.Animate.create(t)},heroBeHurt=function(){if(isSkillPeriod)cc.log("释放技能期间英雄不掉血");else{hp--,null!=hpNode.getChildByTag(hp+1)&&hpNode.getChildByTag(hp+1).setVisible(!1);var e=cc.Sprite.create(res.be_shot_png);e.attr({x:240,y:400,scaleX:2.4,scaleY:2.5}),heroSprite.getParent().addChild(e);var r=cc.FadeIn.create(.1),t=cc.FadeOut.create(.1);e.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(r,t),1),cc.CallFunc.create(function(){e.removeFromParent()}))),hp<=0&&gameOver()}},playIdleAction=function(){for(var e=cc.Animation.create(),r=1;r<=6;r++){var t="res/hero"+r+".png";e.addSpriteFrameWithFile(t)}e.setDelayPerUnit(.1);var c=cc.RepeatForever.create(cc.Animate.create(e));heroSprite.stopAllActions(),heroSprite.runAction(c)},heroAttackCallback=function(){attackDir=0,delArray=[];for(var e=!1,r=0;r<monsterArray.length;r++){monsterArray[r].getScaleX();var t=monsterArray[r].getPositionX();t>130&&t<240&&touchLocationX<240?(e=!0,monsterBeHurt(monsterArray[r])):t>240&&t<350&&touchLocationX>240&&(e=!0,monsterBeHurt(monsterArray[r]))}for(var c=cc.Animation.create(),r=9;r<=10;r++){var a="res/hero"+r+".png";c.addSpriteFrameWithFile(a)}c.setDelayPerUnit(.04);var o=cc.Animate.create(c);o.setTag(1024);for(var n=cc.Animation.create(),r=9;r<=10;r++){var i="res/sword"+r+".png";n.addSpriteFrameWithFile(i)}n.setDelayPerUnit(.04);var p=cc.Animate.create(n);if(p.setTag(1024),e)heroSprite.runAction(cc.Sequence.create(o,cc.CallFunc.create(playIdleAction)));else{cc.log("硬直");var s=cc.DelayTime.create(.5);heroSprite.stopAllActions();var l=cc.Sequence.create(o,s,cc.CallFunc.create(playIdleAction));cc.Sequence.create(p,s.clone());l.setTag(1024),heroSprite.runAction(cc.Sequence.create(l));var u=cc.Sprite.create(res.miss_png);u.setScale(.8);var d=heroSprite.getScale()<0?heroSprite.getPositionX()-10:heroSprite.getPositionX()+10;u.setPosition(cc.p(d,heroSprite.getPositionY()+12)),heroSprite.getParent().addChild(u,3);var M=cc.Sequence.create(cc.Sequence.create(cc.MoveBy.create(.3,cc.p(0,-7)),cc.FadeOut.create(.1)),cc.CallFunc.create(function(e){e.removeFromParent()}));u.runAction(M);var h=cc.MoveBy.create(.03,cc.p(3,0)),m=cc.MoveBy.create(.03,cc.p(-3,0)),g=cc.MoveBy.create(.03,cc.p(0,3)),S=cc.MoveBy.create(.03,cc.p(0,-3)),v=cc.Repeat.create(cc.Sequence.create(h,m,g,S),2);heroSprite.getParent().getParent().runAction(v)}deleteChildFromArray(monsterArray,delArray);for(r=0;r<delArray.length;r++)null!=delArray[r].getUserObject()&&delArray[r].getUserObject().removeFromParent(),delArray[r].removeFromParent()},monsterBeHurt=function(e){var r=e.getUserData();if(r.curBlood--,score++,r.curBlood<=0)monsterDead(e);else{e.stopAllActions();for(var t=cc.Animation.create(),c=1;c<=2;c++){var a="res/monster"+e.getTag()+"_10.png";t.addSpriteFrameWithFile(a)}if(t.setDelayPerUnit(.12),e.runAction(cc.Animate.create(t)),1==e.getTag()||2==e.getTag()){var o,n;e.isFlippedX()?(o=cc.EaseBackOut.create(cc.MoveTo.create(.5,cc.p(360,e.getPositionY()))),n=cc.MoveTo.create(.5,cc.p(300,e.getPositionY()))):(o=cc.EaseBackOut.create(cc.MoveTo.create(.5,cc.p(120,e.getPositionY()))),n=cc.MoveTo.create(.5,cc.p(180,e.getPositionY()))),e.runAction(cc.Sequence.create(o,n,cc.CallFunc.create(monsterAttackCallback))),e.runAction(cc.Sequence.create(cc.DelayTime.create(.5),createMonsterWalkAnimate(e.getTag())))}else if(6==e.getTag()){var i,p;e.isFlippedX()?(p=180/(e.getPositionX()-300),i=cc.MoveTo.create(4/p,cc.p(300,positionY-60))):(p=180/(180-e.getPositionX()),i=cc.MoveTo.create(4/p,cc.p(180,positionY-60))),e.runAction(cc.Sequence.create(cc.DelayTime.create(.5),createMonsterWalkAnimate(e.getTag()))),e.runAction(cc.Sequence.create(cc.DelayTime.create(.5),i,cc.CallFunc.create(monsterAttackCallback)))}else e.runAction(cc.Sequence.create(cc.DelayTime.create(.5),cc.CallFunc.create(monsterAttackCallback)))}},monsterDead=function(e){delArray.push(e);var r=e.getParent(),t=e.getTag(),c=e.getPositionX(),a=e.getPositionY(),o=cc.Animation.create();o.addSpriteFrameWithFile(res.explosion0_png),o.addSpriteFrameWithFile(res.explosion2_png),o.addSpriteFrameWithFile(res.explosion4_png),o.setDelayPerUnit(.08);var n=cc.Animate.create(o),i=cc.Sprite.create(res.explosion0_png);if(i.attr({x:c,y:a+30,scale:2.4}),explosionLayer.addChild(i,2),i.runAction(cc.Sequence.create(n,cc.CallFunc.create(function(e){e.removeFromParent()}))),11!=t){var p=cc.Sprite.create("res/monster"+t+"_5.png");p.setScale(1.25),p.setPosition(cc.p(c+10,a));var s=cc.Sprite.create("res/monster"+t+"_6.png");s.setPosition(cc.p(c-10,a));var l,u,d=200+300*Math.random(),M=200+300*Math.random();e.isFlippedX()?(l=cc.JumpTo.create(.8,cc.p(400+100*Math.random(),-50),d,1),u=cc.JumpTo.create(.8,cc.p(280-100*Math.random(),-50),M,1),p.setFlippedX(!0),s.setFlippedX(!0)):(l=cc.JumpTo.create(.8,cc.p(80-100*Math.random(),-50),d,1),u=cc.JumpTo.create(.8,cc.p(200+100*Math.random(),-50),M,1)),r.addChild(p,2),r.addChild(s,2);var h=Math.random()>.5?1:-1;p.runAction(cc.Sequence.create(cc.Spawn.create(l,cc.RotateBy.create(.8,360*h)),cc.CallFunc.create(function(e){e.removeFromParent()}))),s.runAction(cc.Sequence.create(cc.Spawn.create(u,cc.RotateBy.create(.8,-360*h)),cc.CallFunc.create(function(e){e.removeFromParent()})))}},gameOver=function(){console.log("gameover"),isGameOver=!0,hpNode.getParent().unscheduleAllCallbacks();for(var e=0;e<monsterArray.length;e++)monsterArray[e].stopAllActions();heroSprite.stopAllActions();var r=cc.JumpTo.create(1,cc.p(100,-500),580,1),t=cc.Animation.create();t.addSpriteFrameWithFile(res.hero1_png),t.setDelayPerUnit(.04);var c=cc.Animate.create(t);heroSprite.runAction(cc.Sequence.create(c,r,cc.DelayTime.create(.6),cc.CallFunc.create(popupWindow)))},popupWindow=function(){var e=cc.Node.create();e.setPosition(cc.p(240,400)),e.setScale(0);var r=cc.Sprite.create(res.popup_r_png);r.setScaleY(1.7),e.addChild(r),heroSprite.getParent().addChild(e,3);var t=cc.MenuItemImage.create(res.btn_1,res.btn_2,function(){if(cc.log("再来一次"),isSharelayer)isSharelayer=!1;else{var e=new PlayScene;cc.director.pushScene(e)}},e);t.setPosition(cc.p(-100,-120)),t.setScaleX(2),t.setScaleY(.8);var c=cc.LabelTTF.create("再来一次","Arial",24);c.setColor(cc.color(255,144,0,255)),c.setPosition(cc.p(-100,-120)),e.addChild(c,999);var a=cc.MenuItemImage.create(res.btn_1,res.btn_2,function(){cc.log("分享")},e);a.setPosition(cc.p(100,-120)),a.setScaleX(2),a.setScaleY(.8);var o=cc.LabelTTF.create("炫耀一下","Arial",24);o.setColor(cc.color(255,144,0,255)),o.setPosition(a.getPosition()),e.addChild(o,999);var n=cc.Menu.create(t,a);n.x=0,n.y=0,e.addChild(n,3);var i=cc.LabelTTF.create("您坚持了"+Math.floor(100*duration)/100+"秒，听说没人能过37秒，快让小伙伴们来挑战吧！！！","Arial",26,cc.size(400,100));i.setPosition(cc.p(0,35)),e.addChild(i),e.runAction(cc.ScaleTo.create(.3,.9))},sendResult=function(e){},getnickname=function(e){return e<10?"初学菜鸟":e<20?"挑战者  ":e<30?"屠龙战神":e<40?"一代宗师":e<50?"难逢敌手":e<60?"生存勇者":e<70?"钢铁意志":"不死之躯"},deleteChildFromArray=function(e,r){if(!(e.length<1||r.length<1))for(var t=0;t<r.length;t++){var c=e.indexOf(r[t]);c>-1&&e.splice(c,1)}},timeFormat=function(e){var r=function(e){return e<10?"0"+e:e};return(e=Math.floor(e))<10?"00:"+r(e):r(Math.floor(e/60))+":"+r(e%60)},PlayScene=cc.Scene.extend({onEnter:function(){this._super();var e=new cc.Layer,r=new BgLayer;e.addChild(r),monsterLayer=new cc.Layer,e.addChild(monsterLayer),heroLayer=new cc.Layer,e.addChild(heroLayer),explosionLayer=new cc.Layer,e.addChild(explosionLayer);var t=new PlayLayer;e.addChild(t);for(var c=0;c<6;c++){var a=new cc.Layer;monsterLayer.addChild(a,0,c+1)}this.addChild(e)}});