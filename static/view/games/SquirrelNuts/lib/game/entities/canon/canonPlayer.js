ig.module("game.entities.canon.canonPlayer").requires("impact.entity").defines(function(){EntityCanonPlayer=ig.Entity.extend({maxVel:{x:0,y:0},init:function(i,e,n){this.animSheet=new ig.AnimationSheet("media/media32/hero.png",50,120),this.size={x:32,y:85},this.offset={x:12,y:35},this.addAnim("idle",1,[0]),this.parent(i,e,n)}})});