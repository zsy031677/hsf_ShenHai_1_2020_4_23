egret_h5={},egret_h5.prefix="",egret_h5.loadScript=function(e,t){var r=0,n=function(){egret_h5.loadSingleScript(egret_h5.prefix+e[r],function(){++r>=e.length?t():n()})};n()},egret_h5.loadSingleScript=function(e,t){var r=document.createElement("script");r.hasOwnProperty("async")&&(r.async=!1),r.src=e,r.addEventListener("load",function(){r.parentNode.removeChild(r),this.removeEventListener("load",arguments.callee,!1),t()},!1),document.body.appendChild(r)},egret_h5.preloadScript=function(e,t){egret_h5.preloadList||(egret_h5.preloadList=[]),egret_h5.preloadList=egret_h5.preloadList.concat(e.map(function(e){return t+e}))},egret_h5.startLoading=function(){var e=egret_h5.preloadList;egret_h5.loadScript(e,egret_h5.startGame)};