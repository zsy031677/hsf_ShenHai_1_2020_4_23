ig.module("impact.collision-map").requires("impact.map").defines(function(){"use strict";ig.CollisionMap=ig.Map.extend({lastSlope:1,tiledef:null,init:function(i,t,e){this.parent(i,t),this.tiledef=e||ig.CollisionMap.defaultTileDef;for(var s in this.tiledef)s|0>this.lastSlope&&(this.lastSlope=0|s)},trace:function(i,t,e,s,l,o){var h={collision:{x:!1,y:!1,slope:!1},pos:{x:i,y:t},tile:{x:0,y:0}},a=Math.ceil(Math.max(Math.abs(e),Math.abs(s))/this.tilesize);if(a>1)for(var r=e/a,n=s/a,f=0;f<a&&(r||n)&&(this._traceStep(h,i,t,r,n,l,o,e,s,f),i=h.pos.x,t=h.pos.y,h.collision.x&&(r=0,e=0),h.collision.y&&(n=0,s=0),!h.collision.slope);f++);else this._traceStep(h,i,t,e,s,l,o,e,s,0);return h},_traceStep:function(i,t,e,s,l,o,h,a,r,n){i.pos.x+=s,i.pos.y+=l;var f=0;if(s){var p=s>0?o:0,c=s<0?this.tilesize:0,x=Math.max(Math.floor(e/this.tilesize),0),M=Math.min(Math.ceil((e+h)/this.tilesize),this.height),u=Math.floor((i.pos.x+p)/this.tilesize),z=Math.floor((t+p)/this.tilesize);if((n>0||u==z||z<0||z>=this.width)&&(z=-1),u>=0&&u<this.width)for(v=x;v<M&&!(-1!=z&&(f=this.data[v][z])>1&&f<=this.lastSlope&&this._checkTileDef(i,f,t,e,a,r,o,h,z,v));v++)if(1==(f=this.data[v][u])||f>this.lastSlope||f>1&&this._checkTileDef(i,f,t,e,a,r,o,h,u,v)){if(f>1&&f<=this.lastSlope&&i.collision.slope)break;i.collision.x=!0,i.tile.x=f,t=i.pos.x=u*this.tilesize-p+c,a=0;break}}if(l){var d=l>0?h:0,y=l<0?this.tilesize:0,S=Math.max(Math.floor(i.pos.x/this.tilesize),0),m=Math.min(Math.ceil((i.pos.x+o)/this.tilesize),this.width),v=Math.floor((i.pos.y+d)/this.tilesize),g=Math.floor((e+d)/this.tilesize);if((n>0||v==g||g<0||g>=this.height)&&(g=-1),v>=0&&v<this.height)for(u=S;u<m&&!(-1!=g&&(f=this.data[g][u])>1&&f<=this.lastSlope&&this._checkTileDef(i,f,t,e,a,r,o,h,u,g));u++)if(1==(f=this.data[v][u])||f>this.lastSlope||f>1&&this._checkTileDef(i,f,t,e,a,r,o,h,u,v)){if(f>1&&f<=this.lastSlope&&i.collision.slope)break;i.collision.y=!0,i.tile.y=f,i.pos.y=v*this.tilesize-d+y;break}}},_checkTileDef:function(i,t,e,s,l,o,h,a,r,n){var f=this.tiledef[t];if(!f)return!1;var p=(r+f[0])*this.tilesize,c=(n+f[1])*this.tilesize,x=(f[2]-f[0])*this.tilesize,M=(f[3]-f[1])*this.tilesize,u=f[4],z=e+l+(M<0?h:0)-p,d=s+o+(x>0?a:0)-c;if(x*d-M*z>0){if(l*-M+o*x<0)return u;var y=Math.sqrt(x*x+M*M),S=M/y,m=-x/y,v=z*S+d*m,g=S*v,k=m*v;return g*g+k*k>=l*l+o*o?u||x*(d-o)-M*(z-l)<.5:(i.pos.x=e+l-g,i.pos.y=s+o-k,i.collision.slope={x:x,y:M,nx:S,ny:m},!0)}return!1}});var i=.5,t=1/3,e=2/3;ig.CollisionMap.defaultTileDef={5:[0,1,1,e,!0],6:[0,e,1,t,!0],7:[0,t,1,0,!0],3:[0,1,1,i,!0],4:[0,i,1,0,!0],2:[0,1,1,0,!0],10:[i,1,1,0,!0],21:[0,1,i,0,!0],32:[e,1,1,0,!0],43:[t,1,e,0,!0],54:[0,1,t,0,!0],27:[0,0,1,t,!0],28:[0,t,1,e,!0],29:[0,e,1,1,!0],25:[0,0,1,i,!0],26:[0,i,1,1,!0],24:[0,0,1,1,!0],11:[0,0,i,1,!0],22:[i,0,1,1,!0],33:[0,0,t,1,!0],44:[t,0,e,1,!0],55:[e,0,1,1,!0],16:[1,t,0,0,!0],17:[1,e,0,t,!0],18:[1,1,0,e,!0],14:[1,i,0,0,!0],15:[1,1,0,i,!0],13:[1,1,0,0,!0],8:[i,1,0,0,!0],19:[1,1,i,0,!0],30:[t,1,0,0,!0],41:[e,1,t,0,!0],52:[1,1,e,0,!0],38:[1,e,0,1,!0],39:[1,t,0,e,!0],40:[1,0,0,t,!0],36:[1,i,0,1,!0],37:[1,0,0,i,!0],35:[1,0,0,1,!0],9:[1,0,i,1,!0],20:[i,0,0,1,!0],31:[1,0,e,1,!0],42:[e,0,t,1,!0],53:[t,0,0,1,!0],12:[0,0,1,0,!1],23:[1,1,0,1,!1],34:[1,0,1,1,!1],45:[0,1,0,0,!1]},ig.CollisionMap.staticNoCollision={trace:function(i,t,e,s){return{collision:{x:!1,y:!1,slope:!1},pos:{x:i+e,y:t+s},tile:{x:0,y:0}}}}});