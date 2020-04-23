CANNON=CANNON||{};var camera,scene,renderer,s_oRender,controls=null;CANNON.Demo=function(e){function t(){if(g){for(var e in g.__controllers)g.__controllers[e].updateDisplay();for(var t in g.__folders)for(var e in g.__folders[t].__controllers)g.__folders[t].__controllers[e].updateDisplay()}}function n(e){function t(e,n){e.material&&(e.material=n);for(var a=0;a<e.children.length;a++)t(e.children[a],n)}if(-1===G.indexOf(e))throw new Error("Render mode "+e+" not found!");switch(e){case"solid":u.currentMaterial=C,_.intensity=1,F.color.setHex(2236962);break;case"wireframe":u.currentMaterial=H,_.intensity=0,F.color.setHex(16777215)}for(var n=0;n<v.length;n++)t(v[n],u.currentMaterial);f.rendermode=e}function a(){for(var e=w.length,t=0;t<e;t++){var n=w[t];n.position.copy(n.initPosition),n.velocity.copy(n.initVelocity),n.initAngularVelocity&&(n.angularVelocity.copy(n.initAngularVelocity),n.quaternion.copy(n.initQuaternion))}}function o(e){0===e.x&&(e.x=1e-6),0===e.y&&(e.y=1e-6),0===e.z&&(e.z=1e-6)}function r(){for(var e=w.length,t=0;t<e;t++){var n=w[t],a=v[t];a.position.copy(n.position),n.quaternion&&a.quaternion.copy(n.quaternion)}if(A.restart(),f.contacts)for(g=0;g<L.contacts.length;g++)for(c=0;c<2;c++){var r=A.request(),i=L.contacts[g],n=0===c?i.bi:i.bj,s=0===c?i.ri:i.rj;r.position.set(n.position.x+s.x,n.position.y+s.y,n.position.z+s.z)}if(A.hideCached(),M.restart(),f.cm2contact)for(g=0;g<L.contacts.length;g++)for(var c=0;c<2;c++){var l=M.request(),i=L.contacts[g],n=0===c?i.bi:i.bj,s=0===c?i.ri:i.rj;l.scale.set(s.x,s.y,s.z),o(l.scale),l.position.copy(n.position)}if(M.hideCached(),k.restart(),B.restart(),f.constraints){for(g=0;g<L.constraints.length;g++){if((i=L.constraints[g])instanceof CANNON.DistanceConstraint){var d,p=i.equations.normal,h=p.bi,u=p.bj,l=k.request(),t=h.id;u.id;d=u.position?u.position:u,l.scale.set(d.x-h.position.x,d.y-h.position.y,d.z-h.position.z),o(l.scale),l.position.copy(h.position)}}for(g=0;g<L.constraints.length;g++){if((i=L.constraints[g])instanceof CANNON.PointToPointConstraint){var h=(N=i.equations.normal).bi,u=N.bj,E=B.request(),m=B.request(),y=B.request(),t=h.id;u.id;E.scale.set(N.ri.x,N.ri.y,N.ri.z),m.scale.set(N.rj.x,N.rj.y,N.rj.z),y.scale.set(-N.penetrationVec.x,-N.penetrationVec.y,-N.penetrationVec.z),o(E.scale),o(m.scale),o(y.scale),E.position.copy(h.position),m.position.copy(u.position),N.bj.position.vadd(N.rj,y.position)}}}if(B.hideCached(),k.hideCached(),q.restart(),f.normals)for(var g=0;g<L.contacts.length;g++){var h=(i=L.contacts[g]).bi,u=i.bj,l=q.request(),t=h.id,N=(u.id,i.ni),n=h;l.scale.set(N.x,N.y,N.z),o(l.scale),l.position.copy(n.position),i.ri.vadd(l.position,l.position)}if(q.hideCached(),V.restart(),f.axes)for(h=0;h<w.length;h++){n=w[h];(r=V.request()).position.copy(n.position),n.quaternion&&r.quaternion.copy(n.quaternion)}if(V.hideCached(),O.restart(),f.aabbs)for(t=0;t<w.length;t++){if((n=w[t]).computeAABB&&(n.aabbNeedsUpdate&&n.computeAABB(),isFinite(n.aabb.lowerBound.x)&&isFinite(n.aabb.lowerBound.y)&&isFinite(n.aabb.lowerBound.z)&&isFinite(n.aabb.upperBound.x)&&isFinite(n.aabb.upperBound.y)&&isFinite(n.aabb.upperBound.z)&&n.aabb.lowerBound.x-n.aabb.upperBound.x!=0&&n.aabb.lowerBound.y-n.aabb.upperBound.y!=0&&n.aabb.lowerBound.z-n.aabb.upperBound.z!=0)){(r=O.request()).scale.set(n.aabb.lowerBound.x-n.aabb.upperBound.x,n.aabb.lowerBound.y-n.aabb.upperBound.y,n.aabb.lowerBound.z-n.aabb.upperBound.z),r.position.set(.5*(n.aabb.lowerBound.x+n.aabb.upperBound.x),.5*(n.aabb.lowerBound.y+n.aabb.upperBound.y),.5*(n.aabb.lowerBound.z+n.aabb.upperBound.z))}}O.hideCached()}function i(){requestAnimationFrame(i),f.paused||r(),l(),D.update()}function s(e){}function c(e){U=s_iCanvasResizeWidth+2*s_iCanvasOffsetWidth,Y=s_iCanvasResizeHeight+2*s_iCanvasOffsetHeight,CAMERA_TEST_TRACKBALL&&(controls.screen.width=U,controls.screen.height=Y)}function l(){(CAMERA_TEST_TRACKBALL||CAMERA_TEST_TRANSFORM&&null!==controls)&&controls.update(),renderer.clear(),renderer.render(u.scene,camera)}function d(e){u.dispatchEvent({type:"destroy"}),f.paused=!1,t(),p(e)}function p(e){for(var n=v.length,a=0;a<n;a++){L.remove(w.pop());var o=v.pop();u.scene.remove(o)}for(;L.constraints.length;)L.removeConstraint(L.constraints[0]);y[e](),f.iterations=L.solver.iterations,f.gx=L.gravity.x+0,f.gy=L.gravity.y+0,f.gz=L.gravity.z+0,f.quatNormalizeSkip=L.quatNormalizeSkip,f.quatNormalizeFast=L.quatNormalizeFast,t(),A.restart(),A.hideCached(),M.restart(),M.hideCached(),k.restart(),k.hideCached(),q.restart(),q.hideCached()}function h(e){var t=[],n=[];this.request=function(){return t.length?geo=t.pop():geo=e(),scene.add(geo),n.push(geo),geo},this.restart=function(){for(;n.length;)t.push(n.pop())},this.hideCached=function(){for(var e=0;e<t.length;e++)scene.remove(t[e])}}var u=this;this.addScene=function(e,t){if("string"!=typeof e)throw new Error("1st argument of Demo.addScene(title,initfunc) must be a string!");if("function"!=typeof t)throw new Error("2nd argument of Demo.addScene(title,initfunc) must be a function!");y.push(t);var n=y.length-1;R[e]=function(){d(n)},E.add(R,e)},this.restartCurrentScene=a,this.changeScene=d,this.start=function(){p(0)};var E,f=this.settings={stepFrequency:60,quatNormalizeSkip:2,quatNormalizeFast:!0,gx:0,gy:0,gz:0,iterations:3,tolerance:1e-4,k:1e6,d:3,scene:0,paused:!1,rendermode:"solid",constraints:!1,contacts:!1,cm2contact:!1,normals:!1,axes:!1,particleSize:.1,shadows:!1,aabbs:!1,profiling:!1,maxSubSteps:3};e=e||{};for(var m in e)m in f&&(f[m]=e[m]);if(f.stepFrequency%60!=0)throw new Error("stepFrequency must be a multiple of 60.");var w=this.bodies=[],v=this.visuals=[],y=[],g=null,N=null,b=null,R={},T=new THREE.SphereGeometry(.1,6,6),C=(this.particleGeo=new THREE.SphereGeometry(1,16,8),new THREE.MeshPhongMaterial({color:11184810,specular:1118481,shininess:50})),H=new THREE.MeshLambertMaterial({color:16777215,wireframe:!0});this.currentMaterial=C;var S=new THREE.MeshPhongMaterial({color:16711680}),A=(this.particleMaterial=new THREE.MeshLambertMaterial({color:16711680}),new h(function(){return new THREE.Mesh(T,S)})),M=new h(function(){var e=new THREE.Geometry;return e.vertices.push(new THREE.Vector3(0,0,0)),e.vertices.push(new THREE.Vector3(1,1,1)),new THREE.Line(e,new THREE.LineBasicMaterial({color:16711680}))}),x=new THREE.BoxGeometry(1,1,1),z=new THREE.MeshBasicMaterial({color:11184810,wireframe:!0}),O=new h(function(){return new THREE.Mesh(x,z)}),k=new h(function(){var e=new THREE.Geometry;return e.vertices.push(new THREE.Vector3(0,0,0)),e.vertices.push(new THREE.Vector3(1,1,1)),new THREE.Line(e,new THREE.LineBasicMaterial({color:16711680}))}),B=new h(function(){var e=new THREE.Geometry;return e.vertices.push(new THREE.Vector3(0,0,0)),e.vertices.push(new THREE.Vector3(1,1,1)),new THREE.Line(e,new THREE.LineBasicMaterial({color:16711680}))}),q=new h(function(){var e=new THREE.Geometry;return e.vertices.push(new THREE.Vector3(0,0,0)),e.vertices.push(new THREE.Vector3(1,1,1)),new THREE.Line(e,new THREE.LineBasicMaterial({color:65280}))}),V=new h(function(){var e=new THREE.Object3D,t=new THREE.Vector3(0,0,0),n=new THREE.Geometry,a=new THREE.Geometry,o=new THREE.Geometry;n.vertices.push(t),a.vertices.push(t),o.vertices.push(t),n.vertices.push(new THREE.Vector3(1,0,0)),a.vertices.push(new THREE.Vector3(0,1,0)),o.vertices.push(new THREE.Vector3(0,0,1));var r=new THREE.Line(n,new THREE.LineBasicMaterial({color:16711680})),i=new THREE.Line(a,new THREE.LineBasicMaterial({color:65280})),s=new THREE.Line(o,new THREE.LineBasicMaterial({color:255}));return e.add(r),e.add(i),e.add(s),e}),L=this.world=new CANNON.World;L.broadphase=new CANNON.NaiveBroadphase;var _,F,D,P,G=["solid","wireframe"];Detector.webgl||Detector.addGetWebGLMessage();var I,j=1024,W=1024,K=0,U=s_iCanvasResizeWidth+s_iCanvasOffsetWidth,Y=s_iCanvasResizeHeight+s_iCanvasOffsetHeight;!function(){I=document.createElement("div"),document.body.appendChild(I),CAMERA_TEST_TRACKBALL?(NEAR=1,(camera=new THREE.PerspectiveCamera(45,U/Y,NEAR,FAR)).position.set(CAMERA_POSITION.x,CAMERA_POSITION.y,CAMERA_POSITION.z)):camera=createPerspectiveGraphicCamera(),(scene=u.scene=new THREE.Scene).fog=new THREE.Fog(8306926,.5*FAR,FAR),F=new THREE.AmbientLight(4473924),scene.add(F),(_=new THREE.DirectionalLight(16777181,1)).position.set(180,0,180),_.target.position.set(0,0,0),_.castShadow=!0,_.shadow.camera.near=10,_.shadow.camera.far=100,_.shadow.camera.fov=FOV,_.shadowMapBias=.0139,_.shadowMapDarkness=.1,_.shadow.mapSize.width=j,_.shadow.mapSize.height=W,new THREE.CameraHelper(_.shadow.camera),scene.add(_),scene.add(camera),(renderer=SHOW_3D_RENDER?new THREE.WebGLRenderer({clearColor:0,clearAlpha:.5,antialias:!0,alpha:!0}):new THREE.CanvasRenderer({clearColor:0,clearAlpha:.5,antialias:!1,alpha:!0})).setSize(U,Y),renderer.domElement.style.position="relative",renderer.domElement.style.top=K+"px",renderer.domElement.style.opacity=CANVAS_3D_OPACITY,I.appendChild(renderer.domElement),(P=document.createElement("div")).style.position="absolute",P.style.top="10px",P.style.width="100%",P.style.textAlign="center",P.innerHTML="<a>cannon.js</a> - javascript 3d physics",I.appendChild(P),document.addEventListener("mousemove",s),window.addEventListener("resize",c),renderer.setClearColor(scene.fog.color,1),renderer.autoClear=!1,(b=document.createElement("canvas")).width=U,b.height=Y,b.style.opacity=.5,b.style.position="absolute",b.style.top="0px",b.style.zIndex=90,I.appendChild(b),(N=new SmoothieChart({labelOffsetY:50,maxDataSetLength:100,millisPerPixel:2,grid:{strokeStyle:"none",fillStyle:"none",lineWidth:1,millisPerLine:250,verticalSections:6},labels:{fillStyle:"rgb(180, 180, 180)"}})).streamTo(b);var e={},t=[[255,0,0],[0,255,0],[0,0,255],[255,255,0],[255,0,255],[0,255,255]],a=0;for(var o in L.profile)r=t[a%t.length],e[o]=new TimeSeries({label:o,fillStyle:"rgb("+r[0]+","+r[1]+","+r[2]+")",maxDataLength:500}),a++;L.addEventListener("postStep",function(t){for(var n in L.profile)e[n].append(1e3*L.time,L.profile[n])}),a=0;for(var o in L.profile){var r=t[a%t.length];N.addTimeSeries(e[o],{strokeStyle:"rgb("+r[0]+","+r[1]+","+r[2]+")",lineWidth:2}),a++}if(L.doProfiling=!1,N.stop(),b.style.display="none",D=new Stats,D.domElement.style.position="absolute",D.domElement.style.top="0px",D.domElement.style.zIndex=100,I.appendChild(D.domElement),void 0!=window.dat){(g=new dat.GUI).domElement.parentNode.style.zIndex=120;var i=g.addFolder("Rendering");i.add(f,"rendermode",{Solid:"solid",Wireframe:"wireframe"}).onChange(function(e){n(e)}),i.add(f,"contacts"),i.add(f,"cm2contact"),i.add(f,"normals"),i.add(f,"constraints"),i.add(f,"axes"),i.add(f,"particleSize").min(0).max(1).onChange(function(e){for(var t=0;t<v.length;t++)w[t]instanceof CANNON.Particle&&v[t].scale.set(e,e,e)}),i.add(f,"shadows").onChange(function(e){e?renderer.shadowMapAutoUpdate=!0:(renderer.shadowMapAutoUpdate=!1,renderer.clearTarget(_.shadowMap))}),i.add(f,"aabbs"),i.add(f,"profiling").onChange(function(e){e?(L.doProfiling=!0,N.start(),b.style.display="block"):(L.doProfiling=!1,N.stop(),b.style.display="none")});var l=g.addFolder("World");l.add(f,"paused").onChange(function(e){}),l.add(f,"stepFrequency",60,600).step(60),l.add(f,"gx",-100,100).onChange(function(e){isNaN(e)||L.gravity.set(e,f.gy,f.gz)}),l.add(f,"gy",-100,100).onChange(function(e){isNaN(e)||L.gravity.set(f.gx,e,f.gz)}),l.add(f,"gz",-100,100).onChange(function(e){isNaN(e)||L.gravity.set(f.gx,f.gy,e)}),l.add(f,"quatNormalizeSkip",0,50).step(1).onChange(function(e){isNaN(e)||(L.quatNormalizeSkip=e)}),l.add(f,"quatNormalizeFast").onChange(function(e){L.quatNormalizeFast=!!e});var d=g.addFolder("Solver");d.add(f,"iterations",1,50).step(1).onChange(function(e){L.solver.iterations=e}),d.add(f,"k",10,1e7).onChange(function(e){u.setGlobalSpookParams(f.k,f.d,1/f.stepFrequency)}),d.add(f,"d",0,20).step(.1).onChange(function(e){u.setGlobalSpookParams(f.k,f.d,1/f.stepFrequency)}),d.add(f,"tolerance",0,10).step(.01).onChange(function(e){L.solver.tolerance=e}),(E=g.addFolder("Scenes")).open()}CAMERA_TEST_TRACKBALL&&((controls=new THREE.TrackballControls(camera,renderer.domElement)).rotateSpeed=1,controls.zoomSpeed=1.2,controls.panSpeed=.2,controls.noZoom=!1,controls.noPan=!1,controls.staticMoving=!1,controls.dynamicDampingFactor=.3,controls.minDistance=0,controls.maxDistance=1e5,controls.keys=[65,83,68],controls.screen.width=U,controls.screen.height=Y)}(),i();s_oRender=l,document.addEventListener("keypress",function(e){if(e.keyCode)switch(e.keyCode){case 32:a();break;case 104:"none"==D.domElement.style.display?(D.domElement.style.display="block",P.style.display="block"):(D.domElement.style.display="none",P.style.display="none");break;case 97:f.aabbs=!f.aabbs,t();break;case 99:f.constraints=!f.constraints,t();break;case 112:f.paused=!f.paused,t();break;case 115:var o=1/f.stepFrequency;L.step(o),r();break;case 109:var i=G.indexOf(f.rendermode);i++,i%=G.length,n(G[i]),t();break;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:y.length>e.keyCode-49&&!document.activeElement.localName.match(/input/)&&d(e.keyCode-49)}})},CANNON.Demo.prototype=new CANNON.EventTarget,CANNON.Demo.constructor=CANNON.Demo,CANNON.Demo.prototype.setGlobalSpookParams=function(e,t,n){for(var a=this.world,o=0;o<a.constraints.length;o++)for(var r=a.constraints[o],i=0;i<r.equations.length;i++){r.equations[i].setSpookParams(e,t,n)}for(o=0;o<a.contactmaterials.length;o++){var s=a.contactmaterials[o];s.contactEquationStiffness=e,s.frictionEquationStiffness=e,s.contactEquationRelaxation=t,s.frictionEquationRelaxation=t}a.defaultContactMaterial.contactEquationStiffness=e,a.defaultContactMaterial.frictionEquationStiffness=e,a.defaultContactMaterial.contactEquationRelaxation=t,a.defaultContactMaterial.frictionEquationRelaxation=t},CANNON.Demo.prototype.createTransformControl=function(e,t){controls=new THREE.TransformControls(camera,renderer.domElement),scene.add(e),controls.attach(e,t),scene.add(controls),console.log("CREATE"),window.addEventListener("keydown",function(e){switch(e.keyCode){case 81:controls.setSpace("local"===controls.space?"world":"local");break;case 17:controls.setTranslationSnap(100),controls.setRotationSnap(THREE.Math.degToRad(15));break;case 87:controls.setMode("translate");break;case 69:controls.setMode("rotate");break;case 82:controls.setMode("scale");break;case 187:case 107:controls.setSize(controls.size+.1);break;case 189:case 109:controls.setSize(Math.max(controls.size-.1,.1))}}),window.addEventListener("keyup",function(e){switch(e.keyCode){case 17:controls.setTranslationSnap(null),controls.setRotationSnap(null)}})},CANNON.Demo.prototype.getWorld=function(){return this.world},CANNON.Demo.prototype.addVisual=function(e,t){var n;this.settings;return e instanceof CANNON.Body&&(n=this.shape2mesh(e,t)),n&&(this.bodies.push(e),this.visuals.push(n),e.visualref=n,e.visualref.visualId=this.bodies.length-1,this.scene.add(n)),n},CANNON.Demo.prototype.addVisuals=function(e){for(var t=0;t<e.length;t++)this.addVisual(e[t])},CANNON.Demo.prototype.removeVisual=function(e){if(e.visualref){for(var t=this.bodies,n=this.visuals,a=[],o=[],r=t.length,i=0;i<r;i++)a.unshift(t.pop()),o.unshift(n.pop());for(var s=e.visualref.visualId,c=0;c<a.length;c++)if(c!==s){t[i=c>s?c-1:c]=a[c],n[i]=o[c],t[i].visualref=a[c].visualref,t[i].visualref.visualId=i}e.visualref.visualId=null,this.scene.remove(e.visualref),e.visualref=null}},CANNON.Demo.prototype.removeAllVisuals=function(){for(;this.bodies.length;)this.removeVisual(this.bodies[0])},CANNON.Demo.prototype.shape2mesh=function(e,t){this.settings.renderMode;for(var n=new THREE.Object3D,a=0;a<e.shapes.length;a++){var o,r=e.shapes[a];switch(r.type){case CANNON.Shape.types.SPHERE:var i=new THREE.SphereGeometry(r.radius,8,8);(o=void 0===t?new THREE.Mesh(i,this.currentMaterial):new THREE.Mesh(i,t)).castShadow=!0;break;case CANNON.Shape.types.PARTICLE:o=new THREE.Mesh(this.particleGeo,this.particleMaterial);var s=this.settings;o.scale.set(s.particleSize,s.particleSize,s.particleSize);break;case CANNON.Shape.types.PLANE:y=new THREE.PlaneGeometry(10,10,4,4);o=new THREE.Object3D;var c,l=new THREE.Object3D;(c=void 0===t?new THREE.Mesh(y,this.currentMaterial):new THREE.Mesh(y,t)).scale.set(100,100,100),l.add(c),c.castShadow=!1,c.receiveShadow=!0,o.add(l);break;case CANNON.Shape.types.BOX:var d=new THREE.BoxGeometry(2*r.halfExtents.x,2*r.halfExtents.y,2*r.halfExtents.z);o=void 0===t?new THREE.Mesh(d,this.currentMaterial):new THREE.Mesh(d,t);break;case CANNON.Shape.types.CONVEXPOLYHEDRON:for(var p=new THREE.Geometry,h=0;h<r.vertices.length;h++){var u=r.vertices[h];p.vertices.push(new THREE.Vector3(u.x,u.y,u.z))}for(h=0;h<r.faces.length;h++)for(var E=r.faces[h],f=E[0],m=1;m<E.length-1;m++){var w=E[m],v=E[m+1];p.faces.push(new THREE.Face3(f,w,v))}p.computeBoundingSphere(),p.computeFaceNormals(),o=void 0===t?new THREE.Mesh(p,this.currentMaterial):new THREE.Mesh(p,t);break;case CANNON.Shape.types.HEIGHTFIELD:for(var y=new THREE.Geometry,g=new CANNON.Vec3,N=new CANNON.Vec3,b=new CANNON.Vec3,R=0;R<r.data.length-1;R++)for(var T=0;T<r.data[R].length-1;T++)for(var C=0;C<2;C++){r.getConvexTrianglePillar(R,T,0===C),g.copy(r.pillarConvex.vertices[0]),N.copy(r.pillarConvex.vertices[1]),b.copy(r.pillarConvex.vertices[2]),g.vadd(r.pillarOffset,g),N.vadd(r.pillarOffset,N),b.vadd(r.pillarOffset,b),y.vertices.push(new THREE.Vector3(g.x,g.y,g.z),new THREE.Vector3(N.x,N.y,N.z),new THREE.Vector3(b.x,b.y,b.z));h=y.vertices.length-3;y.faces.push(new THREE.Face3(h,h+1,h+2))}y.computeBoundingSphere(),y.computeFaceNormals(),o=void 0===t?new THREE.Mesh(y,this.currentMaterial):new THREE.Mesh(y,t);break;case CANNON.Shape.types.TRIMESH:for(var y=new THREE.Geometry,g=new CANNON.Vec3,N=new CANNON.Vec3,b=new CANNON.Vec3,h=0;h<r.indices.length/3;h++){r.getTriangleVertices(h,g,N,b),y.vertices.push(new THREE.Vector3(g.x,g.y,g.z),new THREE.Vector3(N.x,N.y,N.z),new THREE.Vector3(b.x,b.y,b.z));m=y.vertices.length-3;y.faces.push(new THREE.Face3(m,m+1,m+2))}y.computeBoundingSphere(),y.computeFaceNormals(),o=void 0===t?new THREE.Mesh(y,this.currentMaterial):new THREE.Mesh(y,t);break;default:throw"Visual type not recognized: "+r.type}if(o.receiveShadow=!0,o.castShadow=!0,o.children)for(h=0;h<o.children.length;h++)if(o.children[h].castShadow=!0,o.children[h].receiveShadow=!0,o.children[h])for(m=0;m<o.children[h].length;m++)o.children[h].children[m].castShadow=!0,o.children[h].children[m].receiveShadow=!0;var H=e.shapeOffsets[a],S=e.shapeOrientations[a];o.position.set(H.x,H.y,H.z),o.quaternion.set(S.x,S.y,S.z,S.w),n.add(o)}return this.camera=function(){return camera},this.getScene=function(){return scene},n};