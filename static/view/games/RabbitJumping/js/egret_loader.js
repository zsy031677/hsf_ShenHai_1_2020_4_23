egret_h5={},egret_h5.prefix="",egret_h5.loadScript=function(e,t){var n=0,r=function(){egret_h5.loadSingleScript(egret_h5.prefix+e[n],function(){++n>=e.length?t():r()})};r()},egret_h5.loadSingleScript=function(e,t){var n=document.createElement("script");n.hasOwnProperty("async")&&(n.async=!1),n.src=e,n.addEventListener("load",function(){this.removeEventListener("load",arguments.callee,!1),t()},!1),document.body.appendChild(n)},egret_h5.startGame=function(){var e=document.getElementById(egret.StageDelegate.canvas_name);context=egret.MainContext.instance,context.touchContext=new egret.HTML5TouchContext(e),context.deviceContext=new egret.HTML5DeviceContext,context.netContext=new egret.HTML5NetContext,egret.StageDelegate.getInstance().setDesignSize(480,800),context.stage=new egret.Stage;var t=egret.MainContext.deviceType==egret.MainContext.DEVICE_MOBILE?egret.StageScaleMode.SHOW_ALL:egret.StageScaleMode.NO_SCALE;context.stage.scaleMode=t,context.stage=new egret.Stage(e.width,e.height),context.rendererContext=new egret.HTML5CanvasRenderer(e),egret.MainContext.instance.rendererContext.texture_scale_factor=1,context.run();var n;if(document_class&&(n=egret.getDefinitionByName(document_class)),!n)throw new Error("找不到文档类！");var r=new n;if(!(r instanceof egret.DisplayObjectContainer))throw new Error("文档类必须是egret.DisplayObjectContainer的子类!");context.stage.addChild(r)},egret_h5.preloadScript=function(e,t){egret_h5.preloadList||(egret_h5.preloadList=[]),egret_h5.preloadList=egret_h5.preloadList.concat(e.map(function(e){return t+e}))},egret_h5.startLoading=function(){var e=egret_h5.preloadList;egret_h5.loadScript(e,egret_h5.startGame)};