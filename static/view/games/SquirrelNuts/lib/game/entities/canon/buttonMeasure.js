ig.module("game.entities.canon.buttonMeasure").requires("impact.entity").defines(function(){EntityButtonMeasure=ig.Entity.extend({maxVel:{x:0,y:0},friction:{x:200,y:0},start:!0,init:function(e,t,a){this.parent(e,t,a),this.animSheet=new ig.AnimationSheet("media/media32/buttonMeasure.png",64,64),this.size={x:64,y:64},this.addAnim("idle",1,[0])},update:function(){if(this.parent(),ig.global.gameController.action(this.size.x,this.size.y,this.pos.x,this.pos.y,"press",ig.game.screen)&&this.start){var e=ig.game.getEntitiesByType(EntityPointerMeasure)[0];e.speed=0,ig.global.playerController.startLaunch=Math.round((ig.global.playerController.launchSkill+ig.global.playerController.pointLaunch*ig.global.playerController.amountLaunch)*((224-(e.pos.y+e.size.y/2-e.topY))/224)),ig.global.playerController.startLaunch<=2&&(ig.global.playerController.startLaunch=3),this.start=!1;var t=ig.game.getEntitiesByType(EntityCanonPlayer)[0];ig.global.playerController.startLaunch<500?(t.maxVel={x:0,y:500},t.vel.y=-500):(t.maxVel={x:0,y:ig.global.playerController.startLaunch},t.vel.y=-1*ig.global.playerController.startLaunch),ig.game.spawnEntity(EntityBoom,t.pos.x-35,t.pos.y+80),ig.game.fadeScreen=new ig.ScreenFader({fade:"in",speed:3,callback:function(){ig.game.fadeScreen=null,ig.system.setGame(MyGame)},delayBefore:1})}}})});