ig.module("impact.input").defines(function(){"use strict";ig.KEY={MOUSE1:-1,MOUSE2:-3,MWHEEL_UP:-4,MWHEEL_DOWN:-5,BACKSPACE:8,TAB:9,ENTER:13,PAUSE:19,CAPS:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,_0:48,_1:49,_2:50,_3:51,_4:52,_5:53,_6:54,_7:55,_8:56,_9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBSTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SHIFT:16,CTRL:17,ALT:18,PLUS:187,COMMA:188,MINUS:189,PERIOD:190},ig.Input=ig.Class.extend({bindings:{},actions:{},presses:{},locks:{},delayedKeyup:{},isUsingMouse:!1,isUsingKeyboard:!1,isUsingAccelerometer:!1,mouse:{x:0,y:0},accel:{x:0,y:0,z:0},initMouse:function(){if(!this.isUsingMouse){this.isUsingMouse=!0;var e=this.mousewheel.bind(this);ig.system.canvas.addEventListener("mousewheel",e,!1),ig.system.canvas.addEventListener("DOMMouseScroll",e,!1),ig.system.canvas.addEventListener("contextmenu",this.contextmenu.bind(this),!1),ig.system.canvas.addEventListener("mousedown",this.keydown.bind(this),!1),ig.system.canvas.addEventListener("mouseup",this.keyup.bind(this),!1),ig.system.canvas.addEventListener("mousemove",this.mousemove.bind(this),!1),ig.ua.touchDevice&&(ig.system.canvas.addEventListener("touchstart",this.keydown.bind(this),!1),ig.system.canvas.addEventListener("touchend",this.keyup.bind(this),!1),ig.system.canvas.addEventListener("touchmove",this.mousemove.bind(this),!1),ig.system.canvas.addEventListener("MSPointerDown",this.keydown.bind(this),!1),ig.system.canvas.addEventListener("MSPointerUp",this.keyup.bind(this),!1),ig.system.canvas.addEventListener("MSPointerMove",this.mousemove.bind(this),!1),ig.system.canvas.style.msTouchAction="none")}},initKeyboard:function(){this.isUsingKeyboard||(this.isUsingKeyboard=!0,window.addEventListener("keydown",this.keydown.bind(this),!1),window.addEventListener("keyup",this.keyup.bind(this),!1))},initAccelerometer:function(){this.isUsingAccelerometer||window.addEventListener("devicemotion",this.devicemotion.bind(this),!1)},mousewheel:function(e){var t=(e.wheelDelta?e.wheelDelta:-1*e.detail)>0?ig.KEY.MWHEEL_UP:ig.KEY.MWHEEL_DOWN,i=this.bindings[t];i&&(this.actions[i]=!0,this.presses[i]=!0,this.delayedKeyup[i]=!0,e.stopPropagation(),e.preventDefault())},mousemove:function(e){var t=parseInt(ig.system.canvas.offsetWidth)||ig.system.realWidth,i=ig.system.scale*(t/ig.system.realWidth),s={left:0,top:0};ig.system.canvas.getBoundingClientRect&&(s=ig.system.canvas.getBoundingClientRect());var n=e.touches?e.touches[0]:e;this.mouse.x=(n.clientX-s.left)/i,this.mouse.y=(n.clientY-s.top)/i},contextmenu:function(e){this.bindings[ig.KEY.MOUSE2]&&(e.stopPropagation(),e.preventDefault())},keydown:function(e){var t=e.target.tagName;if("INPUT"!=t&&"TEXTAREA"!=t){var i="keydown"==e.type?e.keyCode:2==e.button?ig.KEY.MOUSE2:ig.KEY.MOUSE1;"touchstart"!=e.type&&"mousedown"!=e.type||this.mousemove(e);var s=this.bindings[i];s&&(this.actions[s]=!0,this.locks[s]||(this.presses[s]=!0,this.locks[s]=!0),e.stopPropagation(),e.preventDefault())}},keyup:function(e){var t=e.target.tagName;if("INPUT"!=t&&"TEXTAREA"!=t){var i="keyup"==e.type?e.keyCode:2==e.button?ig.KEY.MOUSE2:ig.KEY.MOUSE1,s=this.bindings[i];s&&(this.delayedKeyup[s]=!0,e.stopPropagation(),e.preventDefault())}},devicemotion:function(e){this.accel=e.accelerationIncludingGravity},bind:function(e,t){e<0?this.initMouse():e>0&&this.initKeyboard(),this.bindings[e]=t},bindTouch:function(e,t){var i=ig.$(e),s=this;i.addEventListener("touchstart",function(e){s.touchStart(e,t)},!1),i.addEventListener("touchend",function(e){s.touchEnd(e,t)},!1),i.addEventListener("MSPointerDown",function(e){s.touchStart(e,t)},!1),i.addEventListener("MSPointerUp",function(e){s.touchEnd(e,t)},!1)},unbind:function(e){var t=this.bindings[e];this.delayedKeyup[t]=!0,this.bindings[e]=null},unbindAll:function(){this.bindings={},this.actions={},this.presses={},this.locks={},this.delayedKeyup={}},state:function(e){return this.actions[e]},pressed:function(e){return this.presses[e]},released:function(e){return!!this.delayedKeyup[e]},clearPressed:function(){for(var e in this.delayedKeyup)this.actions[e]=!1,this.locks[e]=!1;this.delayedKeyup={},this.presses={}},touchStart:function(e,t){return this.actions[t]=!0,this.presses[t]=!0,e.stopPropagation(),e.preventDefault(),!1},touchEnd:function(e,t){return this.delayedKeyup[t]=!0,e.stopPropagation(),e.preventDefault(),!1}})});