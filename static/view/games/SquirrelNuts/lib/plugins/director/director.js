ig.module("plugins.director.director").requires("impact.impact").defines(function(){ig.Director=ig.Class.extend({init:function(e,t){return this.game=e,this.levels=[],this.currentLevel=0,this.append(t),this.loadLevel(this.currentLevel)},loadLevel:function(e){return this.currentLevel=e,this.game.loadLevel(this.levels[e]),!0},append:function(e){return newLevels=[],"object"==typeof e&&(e.constructor===(new Array).constructor?newLevels=e:newLevels[0]=e,this.levels=this.levels.concat(newLevels),!0)},nextLevel:function(){return this.currentLevel+1<this.levels.length&&this.loadLevel(this.currentLevel+1)},previousLevel:function(){return this.currentLevel-1>=0&&this.loadLevel(this.currentLevel-1)},jumpTo:function(e){var t=null;for(i=0;i<this.levels.length;i++)this.levels[i]==e&&(t=i);return t>=0&&this.loadLevel(t)},firstLevel:function(){return this.loadLevel(0)},lastLevel:function(){return this.loadLevel(this.levels.length-1)},reloadLevel:function(){return this.loadLevel(this.currentLevel)}})});