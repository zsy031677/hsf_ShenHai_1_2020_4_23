ig.module("game.entities.good.nut1").requires("impact.entity","impact.entity-pool").defines(function(){EntityNut1=ig.Entity.extend({flip:!1,maxVel:{x:500,y:5e3},friction:{x:0,y:0},fall:!1,giveHit:!0,rotationSpeed:5,name:"",damage:0,impulseShake:0,rotationSpeedMax:0,speed:0,cnockback:0,bounce:0,killExp:0,killScore:0,type:ig.Entity.TYPE.B,checkAgainst:ig.Entity.TYPE.A,collides:ig.Entity.COLLIDES.NEVER,animSheet:new ig.AnimationSheet("media/media32/nut1.png",25,30),init:function(i,t,e){this.parent(i,t,e),this.size={x:25,y:15},this.addAnim("idle",1,[0]);var a=ig.global.gameSettings.nut1;this.name=a.name,this.damage=a.damage,this.impulseShake=a.impulseShake,this.rotationSpeedMax=a.rotationSpeedMax,this.speed=a.speed,this.cnockback=a.cnockback,this.bounce=a.bounce,this.killExp=a.killExp,this.killScore=a.killScore,this.vel.y=ig.game.playerVar.vel.y+ig.game.playerVar.vel.y*this.speed,this.pos.x=Math.round(Math.random()*(ig.global.gameSettings.systemWidth()-this.size.x)),this.rotationSpeed=Math.round(Math.random()*this.rotationSpeedMax)},reset:function(i,t,e){this.parent(i,t,e),this.currentAnim.angle=0,this.fall=!1,this.giveHit=!0,this.vel.y=ig.game.playerVar.vel.y+ig.game.playerVar.vel.y*this.speed,this.pos.x=Math.round(Math.random()*(ig.global.gameSettings.systemWidth()-this.size.x)),this.rotationSpeed=Math.round(Math.random()*this.rotationSpeedMax)},update:function(){(ig.game.screen.y+ig.global.gameSettings.systemHeight()<this.pos.y||this.pos.x+this.size.x<0||this.pos.x>ig.global.gameSettings.systemWidth())&&this.kill(),this.fall&&(this.currentAnim.angle+=this.rotationSpeed*ig.system.tick),this.parent()},check:function(i){this.giveHit&&!i.fall&&(i.giveHealth(this.damage),this.kill(),this.rewardKill(this.name))},rewardKill:function(i){ig.global.gameController.getReward(this)},receiveDamage:function(){}}),ig.EntityPool.enableFor(EntityNut1)});