!function(){function e(){}function t(){}function r(){this.skinIndices=[],this.skinWeights=[],this.matrices=[]}function o(){this.hierarchy=[]}function n(){this.node=null,this.name=null,this.id=null,this.vertices=[],this.indices=[],this.normals=[],this.uvs=[],this.bones=[],this.skins=null}function i(){this.uv=null,this.map=null,this.ref=null,this.node=null,this.index=null}function s(){this.normal=null,this.map=null,this.ref=null,this.node=null,this.index=null}function a(){this.version=null,this.id=null,this.internalId=null,this.times=null,this.values=null,this.attrFlag=null,this.attrData=null}function h(){this.id=null,this.attr=null,this.attrX=!1,this.attrY=!1,this.attrZ=!1,this.internalId=null,this.containerInternalId=null,this.containerBoneId=null,this.curveIdx=null,this.curves=[]}function c(){this.curves={},this.length=0,this.fps=30,this.frames=0}function p(){this.textures=[],this.perGeoMap={}}function d(){this.fileName="",this.name="",this.id=null,this.parentIds=[]}THREE.FBXLoader=function(e,t){THREE.Loader.call(this,e),this.manager=void 0!==t?t:THREE.DefaultLoadingManager,this.textureLoader=null,this.textureBasePath=null},THREE.FBXLoader.prototype=Object.create(THREE.Loader.prototype),THREE.FBXLoader.prototype.constructor=THREE.FBXLoader,THREE.FBXLoader.prototype.load=function(e,t,r,o){var n=this;new THREE.XHRLoader(n.manager).load(e,function(r){n.isFbxFormatASCII(r)?n.isFbxVersionSupported(r)?(n.textureBasePath=n.extractUrlBase(e),t(n.parse(r))):console.warn("FBXLoader: !!! FBX Version below 7 not supported !!!"):console.warn("FBXLoader: !!! FBX Binary format not supported !!!")},r,o)},THREE.FBXLoader.prototype.setCrossOrigin=function(e){this.crossOrigin=e},THREE.FBXLoader.prototype.isFbxFormatASCII=function(e){CORRECT=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];for(var t=0,r=function(r){var o=e[r-1];return e=e.slice(t+r),t++,o},o=0;o<CORRECT.length;++o)if(num=r(1),num==CORRECT[o])return!1;return!0},THREE.FBXLoader.prototype.isFbxVersionSupported=function(e){if(match=e.match(/FBXVersion: (\d+)/),match){var t=parseInt(match[1]);return console.log("FBXLoader: FBX version "+t),t>=7e3}return!1},THREE.FBXLoader.prototype.parse=function(e){console.time("FBXLoader"),console.time("FBXLoader: TextParser");var n=(new t).parse(e);console.timeEnd("FBXLoader: TextParser"),console.time("FBXLoader: ObjectParser"),this.hierarchy=(new o).parseHierarchy(n),this.weights=(new r).parse(n,this.hierarchy),this.animations=(new c).parse(n,this.hierarchy),this.textures=(new p).parse(n,this.hierarchy),console.timeEnd("FBXLoader: ObjectParser"),console.time("FBXLoader: GeometryParser"),geometries=this.parseGeometries(n),console.timeEnd("FBXLoader: GeometryParser");for(var i=new THREE.Group,s=0;s<geometries.length;++s)void 0!==geometries[s]&&i.add(geometries[s]);return console.timeEnd("FBXLoader"),i},THREE.FBXLoader.prototype.parseGeometries=function(e){if(!("Geometry"in e.Objects.subNodes))return[];var t=0;for(var r in e.Objects.subNodes.Geometry)r.match(/^\d+$/)&&t++;var o=[];if(t>0)for(r in e.Objects.subNodes.Geometry)"Mesh"===e.Objects.subNodes.Geometry[r].attrType&&o.push(this.parseGeometry(e.Objects.subNodes.Geometry[r],e));else o.push(this.parseGeometry(e.Objects.subNodes.Geometry,e));return o},THREE.FBXLoader.prototype.parseGeometry=function(e,t){geo=(new n).parse(e),geo.addBones(this.hierarchy.hierarchy);var r=new THREE.BufferGeometry;r.name=geo.name,r.addAttribute("position",new THREE.BufferAttribute(new Float32Array(geo.vertices),3)),void 0!==geo.normals&&geo.normals.length>0&&r.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(geo.normals),3)),void 0!==geo.uvs&&geo.uvs.length>0&&r.addAttribute("uv",new THREE.BufferAttribute(new Float32Array(geo.uvs),2)),void 0!==geo.indices&&geo.indices.length>65535?r.setIndex(new THREE.BufferAttribute(new Uint32Array(geo.indices),1)):void 0!==geo.indices&&r.setIndex(new THREE.BufferAttribute(new Uint16Array(geo.indices),1)),r.verticesNeedUpdate=!0,r.computeBoundingSphere(),r.computeBoundingBox();var o,i=this.textures.getById(t.searchConnectionParent(geo.id));void 0!==i&&i.length>0&&(null===this.textureLoader&&(this.textureLoader=new THREE.TextureLoader),o=this.textureLoader.load(this.textureBasePath+"/"+i[0].fileName));var s;s=void 0!==o?new THREE.MeshBasicMaterial({map:o}):new THREE.MeshBasicMaterial({color:3342591}),(r=(new THREE.Geometry).fromBufferGeometry(r)).bones=geo.bones,r.skinIndices=this.weights.skinIndices,r.skinWeights=this.weights.skinWeights;var a=null;if(void 0===geo.bones||void 0===geo.skins||void 0===this.animations||0===this.animations.length){a=new THREE.Mesh(r,s);for(var h=t.Connections.properties.connections,c=t.Objects.subNodes.Model,p=0;p<h.length;p++)if(h[p][0]===e.id){if(a.name=c[h[p][1]].attrName,c[h[p][1]].properties.Lcl_Translation){for(var d=c[h[p][1]].properties.Lcl_Translation.value.split(","),p=0;p<d.length;p++)d[p]=parseFloat(d[p]);a.position.x=d[0],a.position.y=d[1],a.position.z=d[2]}break}}else s.skinning=!0,a=new THREE.SkinnedMesh(r,s),this.addAnimation(a,this.weights.matrices,this.animations);return a},THREE.FBXLoader.prototype.addAnimation=function(e,t,r){for(var o={name:"animationtest",fps:30,length:r.length,hierarchy:[]},n=0;n<e.geometry.bones.length;++n){var i=e.geometry.bones[n].name;i=i.replace(/.*:/,""),o.hierarchy.push({parent:e.geometry.bones[n].parent,name:i,keys:[]})}var s=function(e,t){if(void 0===e)return!1;var r;switch(t){case"S":if(void 0===e.S)return!1;r=e.S;break;case"R":if(void 0===e.R)return!1;r=e.R;break;case"T":if(void 0===e.T)return!1;r=e.T}return void 0!==r.curves.x&&(void 0!==r.curves.y&&void 0!==r.curves.z)},a=function(e,t){var r=h(e.curves.x,t),o=h(e.curves.y,t),n=h(e.curves.z,t);return r&&o&&n},h=function(e,t){return void 0!==e.values[t]},c=function(e,t){var o={};if(o.time=frame/r.fps,o.pos=t.pos,o.rot=t.rotq,o.scl=t.scl,void 0===e)return o;try{if(s(e,"T")&&a(e.T,frame)){var n=new THREE.Vector3(e.T.curves.x.values[frame],e.T.curves.y.values[frame],e.T.curves.z.values[frame]);o.pos=[n.x,n.y,n.z]}else delete o.pos;if(s(e,"R")&&a(e.R,frame)){var i=degToRad(e.R.curves.x.values[frame]),h=degToRad(e.R.curves.y.values[frame]),c=degToRad(e.R.curves.z.values[frame]),p=new THREE.Vector3(i,h,c),d=quatFromVec(p.x,p.y,p.z);o.rot=[d.x,d.y,d.z,d.w]}else delete o.rot;if(s(e,"S")&&a(e.S,frame)){var u=new THREE.Vector3(e.S.curves.x.values[frame],e.S.curves.y.values[frame],e.S.curves.z.values[frame]);o.scl=[u.x,u.y,u.z]}else delete o.scl}catch(e){console.log(t),console.log(e)}return o},p=e.geometry.bones;for(frame=0;frame<r.frames;frame++)for(n=0;n<p.length;n++)for(var d=p[n],u=r.curves[n],l=0;l<o.hierarchy.length;l++)o.hierarchy[l].name===d.name&&o.hierarchy[l].keys.push(c(u,d));void 0===e.geometry.animations&&(e.geometry.animations=[]),e.geometry.animations.push(THREE.AnimationClip.parseAnimation(o,e.geometry.bones))},THREE.FBXLoader.prototype.parseMaterials=function(e){if(!("Material"in e.subNodes))return[];var t=0;for(var r in e.subNodes.Materials)r.match(/^\d+$/)&&t++;var o=[];if(t>0)for(r in e.subNodes.Material)o.push(parseMaterial(e.subNodes.Material[r]));else o.push(parseMaterial(e.subNodes.Material));return o},THREE.FBXLoader.prototype.parseMaterial=function(e){},THREE.FBXLoader.prototype.loadFile=function(e,t,r,o,n){var i=new THREE.XHRLoader(this.manager);i.setResponseType(n);return i.load(e,function(e){t(e)},r,o)},THREE.FBXLoader.prototype.loadFileAsBuffer=function(e,t,r,o){this.loadFile(e,onLoad,r,o,"arraybuffer")},THREE.FBXLoader.prototype.loadFileAsText=function(e,t,r,o){this.loadFile(e,t,r,o,"text")},e.prototype.add=function(e,t){this[e]=t},e.prototype.searchConnectionParent=function(e){if(void 0===this.__cache_search_connection_parent&&(this.__cache_search_connection_parent=[]),void 0!==this.__cache_search_connection_parent[e])return this.__cache_search_connection_parent[e];this.__cache_search_connection_parent[e]=[];for(var t=this.Connections.properties.connections,r=[],o=0;o<t.length;++o)if(t[o][0]==e){var n=0===t[o][1]?-1:t[o][1];r.push(n)}return r.length>0?(this.__cache_search_connection_parent[e]=this.__cache_search_connection_parent[e].concat(r),r):(this.__cache_search_connection_parent[e]=[-1],[-1])},e.prototype.searchConnectionChildren=function(e){if(void 0===this.__cache_search_connection_children&&(this.__cache_search_connection_children=[]),void 0!==this.__cache_search_connection_children[e])return this.__cache_search_connection_children[e];this.__cache_search_connection_children[e]=[];for(var t=this.Connections.properties.connections,r=[],o=0;o<t.length;++o)t[o][1]==e&&r.push(0===t[o][0]?-1:t[o][0]);return r.length>0?(this.__cache_search_connection_children[e]=this.__cache_search_connection_children[e].concat(r),r):(this.__cache_search_connection_children[e]=[-1],[-1])},e.prototype.searchConnectionType=function(e,t){var r=e+","+t;if(void 0===this.__cache_search_connection_type&&(this.__cache_search_connection_type=""),void 0!==this.__cache_search_connection_type[r])return this.__cache_search_connection_type[r];this.__cache_search_connection_type[r]="";for(var o=this.Connections.properties.connections,n=0;n<o.length;++n)if(o[n][0]==e&&o[n][1]==t)return this.__cache_search_connection_type[r]=o[n][2],o[n][2];return this.__cache_search_connection_type[e]=null,null},t.prototype={getPrevNode:function(){return this.nodeStack[this.currentIndent-2]},getCurrentNode:function(){return this.nodeStack[this.currentIndent-1]},getCurrentProp:function(){return this.currentProp},pushStack:function(e){this.nodeStack.push(e),this.currentIndent+=1},popStack:function(){this.nodeStack.pop(),this.currentIndent-=1},setCurrentProp:function(e,t){this.currentProp=e,this.currentPropName=t},parse:function(t){this.currentIndent=0,this.allNodes=new e,this.nodeStack=[],this.currentProp=[],this.currentPropName="";var r=t.split("\n");for(var o in r){var n=r[o];if(!n.match(/^[\s\t]*;/)&&!n.match(/^[\s\t]*$/)){var i=new RegExp("^\\t{"+this.currentIndent+"}(\\w+):(.*){","");if(match=n.match(i),match){var s=match[1].trim().replace(/^"/,"").replace(/"$/,""),a=match[2].split(",").map(function(e){return e.trim().replace(/^"/,"").replace(/"$/,"")});this.parseNodeBegin(n,s,a||null)}else{var h=new RegExp("^\\t{"+this.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)");if(match=n.match(h),match){var c=match[1].replace(/^"/,"").replace(/"$/,"").trim(),p=match[2].replace(/^"/,"").replace(/"$/,"").trim();this.parseNodeProperty(n,c,p)}else{var d=new RegExp("^\\t{"+(this.currentIndent-1)+"}}");n.match(d)?this.nodeEnd():n.match(/^[^\s\t}]/)&&this.parseNodePropertyContinued(n)}}}}return this.allNodes},parseNodeBegin:function(e,t,r){var o={name:t,properties:{},subNodes:{}},n=this.parseNodeAttr(r),i=this.getCurrentNode();if(0===this.currentIndent)this.allNodes.add(t,o);else if(t in i.subNodes){var s=i.subNodes[t];this.isFlattenNode(i.subNodes[t])&&(""===n.id?(i.subNodes[t]=[],i.subNodes[t].push(s)):(i.subNodes[t]={},i.subNodes[t][s.id]=s)),""===n.id?i.subNodes[t].push(o):i.subNodes[t][n.id]=o}else i.subNodes[t]=o;r&&(o.id=n.id,o.attrName=n.name,o.attrType=n.type),this.pushStack(o)},parseNodeAttr:function(e){var t=e[0];""!==e[0]&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));var r,o;return e.length>1&&(r=e[1].replace(/^(\w+)::/,""),o=e[2]),{id:t,name:r||"",type:o||""}},parseNodeProperty:function(e,t,r){var o=this.getCurrentNode(),n=o.name;if(void 0!==n){if(n.match(/Properties(\d)+/))return void this.parseNodeSpecialProperty(e,t,r)}if("C"==t){var i=r.split(",").slice(1),s=parseInt(i[0]),a=parseInt(i[1]),h=r.split(",").slice(3);t="connections",r=(r=[s,a]).concat(h),void 0===o.properties[t]&&(o.properties[t]=[])}if("Node"==t){var c=parseInt(r);o.properties.id=c,o.id=c}t in o.properties?Array.isArray(o.properties[t])?o.properties[t].push(r):o.properties[t]+=r:Array.isArray(o.properties[t])?o.properties[t].push(r):o.properties[t]=r,this.setCurrentProp(o.properties,t)},parseNodePropertyContinued:function(e){this.currentProp[this.currentPropName]+=e},parseNodeSpecialProperty:function(e,t,r){var o=r.split('",').map(function(e){return e.trim().replace(/^\"/,"").replace(/\s/,"_")}),n=o[0],i=o[1],s=o[2],a=o[3],h=o[4];switch(i){case"int":h=parseInt(h);break;case"double":h=parseFloat(h);break;case"ColorRGB":case"Vector3D":var c=h.split(",");h=new THREE.Vector3(c[0],c[1],c[2])}this.getPrevNode().properties[n]={type:i,type2:s,flag:a,value:h},this.setCurrentProp(this.getPrevNode().properties,n)},nodeEnd:function(e){this.popStack()},isFlattenNode:function(e){return"subNodes"in e&&"properties"in e}},function(){}.prototype={},r.prototype.parseCluster=function(e,t,r){var o=e.searchConnectionParent(t),n=toInt(r.subNodes.Indexes.properties.a.split(",")),i=toFloat(r.subNodes.Weights.properties.a.split(",")),s=toMat44(toFloat(r.subNodes.Transform.properties.a.split(","))),a=toMat44(toFloat(r.subNodes.TransformLink.properties.a.split(",")));return{parent:o,id:parseInt(t),indices:n,weights:i,transform:s,transformlink:a,linkMode:r.properties.Mode}},r.prototype.parse=function(e,t){this.skinIndices=[],this.skinWeights=[],this.matrices=[];var r=e.Objects.subNodes.Deformer,o={};for(var n in r)if("Cluster"===r[n].attrType){if(!("Indexes"in r[n].subNodes))continue;var i=this.parseCluster(e,n,r[n]);o[e.searchConnectionChildren(i.id)[0]]=i}for(var s=[],a=t.hierarchy,h=0;h<a.length;++h){var c=a[h].internalId;if(void 0!==o[c]){var p=o[c];this.matrices.push(p.transform);for(var d=0;d<p.indices.length;++d){void 0===s[p.indices[d]]&&(s[p.indices[d]]={},s[p.indices[d]].joint=[],s[p.indices[d]].weight=[]);var u=e.searchConnectionChildren(p.id);u.length>1&&console.warn("FBXLoader: node "+p.id+" have many weight kids: "+u),s[p.indices[d]].joint.push(t.getBoneIdfromInternalId(e,u[0])),s[p.indices[d]].weight.push(p.weights[d])}}else this.matrices.push(new THREE.Matrix4)}for(var l=0;l<s.length;l++){var f=new THREE.Vector4(s[l].joint[0]?s[l].joint[0]:0,s[l].joint[1]?s[l].joint[1]:0,s[l].joint[2]?s[l].joint[2]:0,s[l].joint[3]?s[l].joint[3]:0),y=new THREE.Vector4(s[l].weight[0]?s[l].weight[0]:0,s[l].weight[1]?s[l].weight[1]:0,s[l].weight[2]?s[l].weight[2]:0,s[l].weight[3]?s[l].weight[3]:0);this.skinIndices.push(f),this.skinWeights.push(y)}return this},o.prototype.parseHierarchy=function(e){var t=e.Objects.subNodes.Model,r=[];for(var o in t)void 0!==t[o].attrType&&r.push(t[o]);this.hierarchy=[];for(var n=0;n<r.length;++n){var i=r[n],s=e.searchConnectionParent(i.id)[0],a=[0,0,0],h=[0,0,0,1],c=[1,1,1];if("Lcl_Translation"in i.properties&&(a=toFloat(i.properties.Lcl_Translation.value.split(","))),"Lcl_Rotation"in i.properties){h=toRad(toFloat(i.properties.Lcl_Rotation.value.split(",")));var p=new THREE.Quaternion;p.setFromEuler(new THREE.Euler(h[0],h[1],h[2],"ZYX")),h=[p.x,p.y,p.z,p.w]}"Lcl_Scaling"in i.properties&&(c=toFloat(i.properties.Lcl_Scaling.value.split(",")));var d=i.attrName;d=(d=(d=d.replace(/:/,"")).replace(/_/,"")).replace(/-/,""),this.hierarchy.push({parent:s,name:d,pos:a,rotq:h,scl:c,internalId:i.id})}return this.reindexParentId(),this.restoreBindPose(e),this},o.prototype.reindexParentId=function(){for(var e=0;e<this.hierarchy.length;e++)for(var t=0;t<this.hierarchy.length;++t)if(this.hierarchy[e].parent==this.hierarchy[t].internalId){this.hierarchy[e].parent=t;break}},o.prototype.restoreBindPose=function(e){var t=e.Objects.subNodes.Pose;if(void 0!==t){for(var r=t.subNodes.PoseNode,o={},n={},i=0;i<r.length;++i){var s=toMat44(r[i].subNodes.Matrix.properties.a.split(",")),a=toMat44(r[i].subNodes.Matrix.properties.a.split(","));o[r[i].id]=s,n[r[i].id]=a}for(var h=0;h<this.hierarchy.length;++h){var c=this.hierarchy[h],p=c.internalId;if(void 0!==n[p]){for(var d,u=new THREE.Vector3(0,0,0),l=new THREE.Quaternion,f=new THREE.Vector3(1,1,1),y=e.searchConnectionParent(p),_=0;_<y.length;++_)if(this.isBoneNode(y[_])){d=y[_];break}if(void 0!==d&&void 0!==o[d]){var v=new THREE.Matrix4;v.getInverse(n[d]),v.multiply(o[p]),o[p]=v}o[p].decompose(u,l,f),c.pos=[u.x,u.y,u.z],c.rotq=[l.x,l.y,l.z,l.w],c.scl=[f.x,f.y,f.z]}}}},o.prototype.searchRealId=function(e){for(var t=0;t<this.hierarchy.length;t++)if(e==this.hierarchy[t].internalId)return t;return-1},o.prototype.getByInternalId=function(e){for(var t=0;t<this.hierarchy.length;t++)if(e==this.hierarchy[t].internalId)return this.hierarchy[t];return null},o.prototype.isBoneNode=function(e){for(var t=0;t<this.hierarchy.length;++t)if(e===this.hierarchy[t].internalId)return!0;return!1},o.prototype.getBoneIdfromInternalId=function(e,t){if(void 0===e.__cache_get_boneid_from_internalid&&(e.__cache_get_boneid_from_internalid=[]),void 0!==e.__cache_get_boneid_from_internalid[t])return e.__cache_get_boneid_from_internalid[t];for(var r=0;r<this.hierarchy.length;++r)if(this.hierarchy[r].internalId==t){return e.__cache_get_boneid_from_internalid[t]=r,r}return-1},n.prototype.parse=function(e){if(this.node=e,this.name=e.attrName,this.id=e.id,this.vertices=this.getVertices(),void 0!==this.vertices)return this.indices=this.getPolygonVertexIndices(),this.uvs=(new i).parse(this.node,this),this.normals=(new s).parse(this.node,this),this.getPolygonTopologyMax()>3&&(this.indices=this.convertPolyIndicesToTri(this.indices,this.getPolygonTopologyArray())),this;console.log("FBXLoader: Geometry.parse(): pass"+this.node.id)},n.prototype.getVertices=function(){if(this.node.__cache_vertices)return this.node.__cache_vertices;if(void 0===this.node.subNodes.Vertices)return console.warn("this.node: "+this.node.attrName+"("+this.node.id+") does not have Vertices"),this.node.__cache_vertices=void 0,null;var e=this.node.subNodes.Vertices.properties.a.split(",").map(function(e){return parseFloat(e)});return this.node.__cache_vertices=e,this.node.__cache_vertices},n.prototype.getPolygonVertexIndices=function(){if(this.node.__cache_indices&&this.node.__cache_poly_topology_max)return this.node.__cache_indices;if(void 0===this.node.subNodes)return console.error("this.node.subNodes undefined"),void console.log(this.node);if(void 0===this.node.subNodes.PolygonVertexIndex)return console.warn("this.node: "+this.node.attrName+"("+this.node.id+") does not have PolygonVertexIndex "),void(this.node.__cache_indices=void 0);for(var e=this.node.subNodes.PolygonVertexIndex.properties.a.split(","),t=1,r=null,o=[],n=0;n<e.length;++n){var i=parseInt(e[n]);i<0?(t>r&&(r=t),e[n]=-1^i,o.push(t),t=1):(e[n]=i,t++)}return null===r&&(console.warn("FBXLoader: topology N not found: "+this.node.attrName),console.warn(this.node),r=3),this.node.__cache_poly_topology_max=r,this.node.__cache_poly_topology_arr=o,this.node.__cache_indices=e,this.node.__cache_indices},n.prototype.getPolygonTopologyMax=function(){return this.node.__cache_indices&&this.node.__cache_poly_topology_max?this.node.__cache_poly_topology_max:(this.getPolygonVertexIndices(this.node),this.node.__cache_poly_topology_max)},n.prototype.getPolygonTopologyArray=function(){return this.node.__cache_indices&&this.node.__cache_poly_topology_max?this.node.__cache_poly_topology_arr:(this.getPolygonVertexIndices(this.node),this.node.__cache_poly_topology_arr)},n.prototype.convertPolyIndicesToTri=function(e,t){for(var r=[],o=0,n=0,i=0;o<e.length;){i=t[n];for(var s=0;s<=i-3;s++)r.push(e[o]),r.push(e[o+(i-2-s)]),r.push(e[o+(i-1-s)]);n++,o+=i}return r},n.prototype.addBones=function(e){this.bones=e},i.prototype.getUV=function(e){return this.node&&this.uv&&this.map&&this.ref?this.uv:this._parseText(e)},i.prototype.getMap=function(e){return this.node&&this.uv&&this.map&&this.ref?this.map:(this._parseText(e),this.map)},i.prototype.getRef=function(e){return this.node&&this.uv&&this.map&&this.ref?this.ref:(this._parseText(e),this.ref)},i.prototype.getIndex=function(e){return this.node&&this.uv&&this.map&&this.ref?this.index:(this._parseText(e),this.index)},i.prototype.getNode=function(e){return null!==this.node?this.node:(this.node=e.subNodes.LayerElementUV,this.node)},i.prototype._parseText=function(e){var t=this.getNode(e);if(void 0===t)return[];var r=0;for(var o in t)o.match(/^\d+$/)&&(r++,o);r>0&&(console.warn("multi uv not supported"),t=t[o]);var n=t.subNodes.UVIndex.properties.a,i=t.subNodes.UV.properties.a,s=t.properties.MappingInformationType,a=t.properties.ReferenceInformationType;return this.uv=toFloat(i.split(",")),this.index=toInt(n.split(",")),this.map=s,this.ref=a,this.uv},i.prototype.parse=function(e,t){this.uvNode=this.getNode(e),this.uv=this.getUV(e);var r=this.getMap(e),o=this.getRef(e),n=this.getIndex(e),i=t.getPolygonTopologyArray();switch(r){case"ByPolygonVertex":switch(o){case"Direct":this.uv=this.parseUV_ByPolygonVertex_Direct(this.uv,n,i,2);break;case"IndexToDirect":this.uv=this.parseUV_ByPolygonVertex_IndexToDirect(this.uv,n)}this.uv=function(e,t,r){for(var o={},n=[],i=0,s=0;s<t.length;++s)if(!(t[s]in o)){o[t[s]]={};for(var a=0;a<r;++a)o[t[s]][a]=e[s*r+a];i=i<t[s]?t[s]:i}try{for(s=0;s<=i;s++)for(var h=0;h<r;h++)n.push(o[s][h])}catch(e){}return n}(this.uv,t.getPolygonVertexIndices(e),2);break;case"ByPolygon":switch(o){case"Direct":this.uv=this.parseUV_ByPolygon_Direct();break;case"IndexToDirect":this.uv=this.parseUV_ByPolygon_IndexToDirect()}}return this.uv},i.prototype.parseUV_ByPolygonVertex_Direct=function(e,t,r,o){return parse_Data_ByPolygonVertex_Direct(e,t,r,o)},i.prototype.parseUV_ByPolygonVertex_IndexToDirect=function(e,t){return function(e,t,r){for(var o=[],n=0;n<t.length;++n)for(var i=0;i<r;++i)o.push(e[t[n]*r+i]);return o}(e,t,2)},i.prototype.parseUV_ByPolygon_Direct=function(e){return console.warn("not implemented"),e},i.prototype.parseUV_ByPolygon_IndexToDirect=function(e){return console.warn("not implemented"),e},i.prototype.parseUV_ByVertex_Direct=function(e){return console.warn("not implemented"),e},s.prototype.getNormal=function(e){return this.node&&this.normal&&this.map&&this.ref?this.normal:(this._parseText(e),this.normal)},s.prototype.getMap=function(e){return this.node&&this.normal&&this.map&&this.ref?this.map:(this._parseText(e),this.map)},s.prototype.getRef=function(e){return this.node&&this.normal&&this.map&&this.ref?this.ref:(this._parseText(e),this.ref)},s.prototype.getNode=function(e){return this.node?this.node:(this.node=e.subNodes.LayerElementNormal,this.node)},s.prototype._parseText=function(e){var t=this.getNode(e);if(void 0!==t){var r=t.properties.MappingInformationType,o=t.properties.ReferenceInformationType,n=t.subNodes.Normals.properties.a;this.normal=toFloat(n.split(",")),this.map=r,this.ref=o}else console.warn("node: "+e.attrName+"("+e.id+") does not have LayerElementNormal")},s.prototype.parse=function(e,t){var r=this.getNormal(e),o=(this.getNode(e),this.getMap(e)),n=this.getRef(e),i=t.getPolygonVertexIndices(e),s=t.getPolygonTopologyArray(e);switch(o){case"ByPolygonVertex":switch(n){case"Direct":r=this.parseNormal_ByPolygonVertex_Direct(r,i,s,3);break;case"IndexToDirect":r=this.parseNormal_ByPolygonVertex_IndexToDirect()}break;case"ByPolygon":switch(n){case"Direct":r=this.parseNormal_ByPolygon_Direct();break;case"IndexToDirect":r=this.parseNormal_ByPolygon_IndexToDirect()}}return r},s.prototype.parseNormal_ByPolygonVertex_Direct=function(e,t,r,o){return parse_Data_ByPolygonVertex_Direct(e,t,r,o)},s.prototype.parseNormal_ByPolygonVertex_IndexToDirect=function(e){return console.warn("not implemented"),e},s.prototype.parseNormal_ByPolygon_Direct=function(e){return console.warn("not implemented"),e},s.prototype.parseNormal_ByPolygon_IndexToDirect=function(e){return console.warn("not implemented"),e},s.prototype.parseNormal_ByVertex_Direct=function(e){return console.warn("not implemented"),e},a.prototype.fromNode=function(e){return this.id=e.id,this.internalId=e.id,this.times=e.subNodes.KeyTime.properties.a,this.values=e.subNodes.KeyValueFloat.properties.a,this.attrFlag=e.subNodes.KeyAttrFlags.properties.a,this.attrData=e.subNodes.KeyAttrDataFloat.properties.a,this.times=toFloat(this.times.split(",")),this.values=toFloat(this.values.split(",")),this.attrData=toFloat(this.attrData.split(",")),this.attrFlag=toInt(this.attrFlag.split(",")),this.times=this.times.map(function(e){return u(e)}),this},a.prototype.getLength=function(){return this.times[this.times.length-1]},h.prototype.fromNode=function(e,t,r){if(this.id=t.id,this.attr=t.attrName,this.internalId=t.id,!this.attr.match(/S|R|T/))return null;for(var o in t.properties)o.match(/X/)&&(this.attrX=!0),o.match(/Y/)&&(this.attrY=!0),o.match(/Z/)&&(this.attrZ=!0);this.containerIndices=e.searchConnectionParent(this.id),this.curveIdx=e.searchConnectionChildren(this.id);for(var n=this.containerIndices.length-1;n>=0;--n){var i=r.searchRealId(this.containerIndices[n]);if(i>=0&&(this.containerBoneId=i,this.containerId=this.containerIndices[n]),i>=0)break}return this},h.prototype.setCurve=function(e){this.curves.push(e)},c.prototype.parse=function(e,t){var r=e.Objects.subNodes.AnimationCurveNode,o=e.Objects.subNodes.AnimationCurve,n=[];for(var i in r)if(i.match(/\d+/)){var s=(new h).fromNode(e,r[i],t);n.push(s)}for(var c={},p=0;p<n.length;++p)null!==n[p]&&(c[n[p].id]=n[p]);var d=[],u=0;for(i in o)if(i.match(/\d+/)){var l=(new a).fromNode(o[i]);d.push(l),u=l.getLength()?l.getLength():u;var f=e.searchConnectionParent(l.id)[0],y=e.searchConnectionType(l.id,f);y.match(/X/)&&(y="x"),y.match(/Y/)&&(y="y"),y.match(/Z/)&&(y="z"),c[f].curves[y]=l}for(var _ in c){var v=c[_].containerBoneId;void 0===this.curves[v]&&(this.curves[v]={}),this.curves[v][c[_].attr]=c[_]}return this.length=u,this.frames=this.length*this.fps,this},p.prototype.add=function(e){void 0===this.textures&&(this.textures=[]),this.textures.push(e);for(var t=0;t<e.parentIds.length;++t)void 0===this.perGeoMap[e.parentIds[t]]&&(this.perGeoMap[e.parentIds[t]]=[]),this.perGeoMap[e.parentIds[t]].push(this.textures[this.textures.length-1])},p.prototype.parse=function(e,t){var r=e.Objects.subNodes.Texture;for(var o in r){var n=(new d).parse(r[o],e);this.add(n)}return this},p.prototype.getById=function(e){return this.perGeoMap[e]},d.prototype.parse=function(e,t){return this.id=e.id,this.name=e.attrName,this.fileName=this.parseFileName(e.properties.FileName),this.parentIds=this.searchParents(this.id,t),this},d.prototype.parseFileName=function(e){if(void 0===e)return"";var t=e.split(/[\\\/]/);return t.length>0?t[t.length-1]:e},d.prototype.searchParents=function(e,t){return t.searchConnectionParent(e)},parse_Data_ByPolygonVertex_Direct=function(e,t,r,o){for(var n=[],i=0,s=0;s<t.length;++s){n[t[s]]=[];for(var a=0;a<o;++a)n[t[s]][a]=e[i+a];i+=o}for(var h=[],c=0;c<n.length;++c)if(void 0!==n[c])for(var p=0;p<o;++p)void 0!==n[c][p]&&h.push(n[c][p]);return h};var u=function(e){return e/46186158e3};degToRad=function(e){return e*Math.PI/180},radToDeg=function(e){return 180*e/Math.PI},quatFromVec=function(e,t,r){var o=new THREE.Euler(e,t,r,"ZYX"),n=new THREE.Quaternion;return n.setFromEuler(o),n},toInt=function(e){return e.map(function(e){return parseInt(e)})},toFloat=function(e){return e.map(function(e){return parseFloat(e)})},toRad=function(e){return e.map(function(e){return degToRad(e)})},toMat44=function(e){var t=new THREE.Matrix4;return t.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),t}}();