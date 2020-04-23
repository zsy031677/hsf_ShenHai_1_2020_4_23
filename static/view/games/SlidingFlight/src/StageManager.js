function getProxy(e,t){return function(a){t.apply(e,[a])}}function StageManager(){if(StageManager._interfac)throw"Stage Error"}function Component(){this.initialize()}function GameErrorScene(){this.initialize(),this.initUI()}function GameScene(){this.initialize()}var IS_QQBrowse=!1;StageManager._interfac=null,StageManager.WIDTH=640,StageManager.HEIGHT=960,StageManager.FRAME=30,StageManager.SCALE=StageManager.WIDTH/StageManager.HEIGHT,StageManager.getInstance=function(){return null==StageManager._interfac?StageManager._interfac=new StageManager:StageManager._interfac},StageManager.prototype.resizeCanvas=function(){var e=0,t=window.innerWidth,a=window.innerHeight;switch(e=StageManager.SCALE>t/a?t/StageManager.WIDTH:a/StageManager.HEIGHT,window.orientation){case 0:this.StageType="H";break;case-90:case 90:this.StageType="V";break;case 180:this.StageType="H"}this.loadicon&&(this.loadicon.style.left=t/2-15+"px",this.loadicon.style.top=a/2-30+"px"),this.__defineGetter__("scale",function(){return e});var i=a/(StageManager.HEIGHT*e),n=t/(StageManager.WIDTH*e);this.StageWidth=n*StageManager.WIDTH,this.StageHeight=i*StageManager.HEIGHT,canvas.width=t,canvas.height=a;for(var r in this.list)this.list[r]&&this.list[r].resize&&this.list[r].resize(t,a)},StageManager.prototype.add=function(e){this.remove(e),this.list.push(e)},StageManager.prototype.remove=function(e){var t=this.list.indexOf(e);-1!=t&&this.list.splice(t,1)},StageManager.prototype.removeAll=function(){for(var e in this.list)delete this.list[e];this.list=[]},StageManager.prototype.initialize=function(){this.list=[],this.setupCanvas("canvas"),this.loadicon=document.getElementById("loadicon"),window.onresize=getProxy(this,this.resizeCanvas),window.orientationChange=getProxy(this,this.resizeCanvas),this.loader({name:"loaderLib",src:"src/loader.js",lib:"loaderImages"}),this.resizeCanvas()},StageManager.prototype.setupCanvas=function(e){this.canvas=document.getElementById(e);var t=new createjs.Container;t.nominalBounds=new createjs.Rectangle(0,0,StageManager.WIDTH,StageManager.HEIGHT);var a=new createjs.Stage(this.canvas);a.addChild(t),a.update(),createjs.Ticker.setFPS(StageManager.FRAME),createjs.Ticker.addEventListener("tick",a),createjs.Touch.enable(a),this.game=new GameScene,this.gameErrorScene=new GameErrorScene,this.add(this.game),this.gameErrorScene.visible=!1,this.add(this.gameErrorScene),t.addChild(this.game),t.addChild(this.gameErrorScene),this.__defineGetter__("scene",function(){return a}),this.__defineGetter__("root",function(){return t})},StageManager.prototype.loader=function(e){var t=new LoaderManager;t.addLib(e);var a=this;t.addEventListener("complete",function(){"loaderLib"==e.name?("none"!=document.getElementById("loadicon").style.display&&(document.getElementById("loadicon").style.display="none"),a.game.addChild(loaderLib.loader),a.loader({name:"gameLib",src:"src/game.js",lib:"gameImages"})):a.startGame()}),t.addEventListener("progress",function(t){"loaderLib"!=e.name&&loaderLib.loader.setScale(t.currentTarget.progress)}),t.start()},StageManager.prototype.startGame=function(){this.game.removeChild(loaderLib.loader),this.game.addChild(new GameInfo),this.resizeCanvas()},Component.prototype=new createjs.Container,Component.prototype.container_init=Component.prototype.initialize,Component.prototype.initialize=function(){this.container_init()},GameErrorScene.prototype.__proto__=Component.prototype,GameErrorScene.prototype.initUI=function(){this.pre=StageManager.StageHeight/StageManager.StageWidth,this.shape=new createjs.Shape,this.addChild(this.shape),this.bit=new createjs.Bitmap("images/scene.png"),this.addChild(this.bit),this.resize()},GameErrorScene.prototype.resize=function(e,t){var e=window.innerWidth,t=window.innerHeight,a=e/960;this.scaleX=this.scaleY=a;this.y=(t-640*a)/2,this.bit.x=358,this.bit.y=(640*a-209)/2,this.visible="V"==StageManager.getInstance().StageType},GameScene.prototype.__proto__=Component.prototype,GameScene.prototype.resize=function(e,t){var a=StageManager.getInstance().scale;this.scaleX=this.scaleY=a,this.x=(e-StageManager.WIDTH*a)/2,this.visible="V"!=StageManager.getInstance().StageType;for(var i=0;i<this.getNumChildren();i++){var n=this.getChildAt(i);n.resize&&n.resize(e,t)}};