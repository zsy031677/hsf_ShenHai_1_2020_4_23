ig.module("game.entities.good.goldStar").requires("impact.entity").defines(function(){EntityGoldStar=ig.Entity.extend({flip:!1,maxVel:{x:500,y:5e3},animSheet:new ig.AnimationSheet("media/media32/gold-star.png",40,40),init:function(i,t,e){this.parent(i,t,e),this.size={x:40,y:40},this.addAnim("idle",1,[0]),this.pos.x-=this.size.x/2},update:function(){(ig.game.screen.y+ig.global.gameSettings.systemHeight()<this.pos.y||ig.game.screen.y>this.pos.y||this.pos.x+this.size.x<0||this.pos.x>ig.global.gameSettings.systemWidth())&&this.kill(),this.parent()}})});