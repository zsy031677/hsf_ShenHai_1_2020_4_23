ig.module("game.entities.canon.metalicCanon").requires("impact.entity").defines(function(){EntityMetalicCanon=ig.Entity.extend({maxVel:{x:0,y:0},init:function(i,n,e){this.animSheet=new ig.AnimationSheet("media/media32/metalicCanon.png",64,96),this.size={x:64,y:96},this.addAnim("idle",1,[0]),this.parent(i,n,e)}})});