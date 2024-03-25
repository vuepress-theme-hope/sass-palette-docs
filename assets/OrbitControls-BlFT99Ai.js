import{Ray as Ve,Plane as We,MathUtils as Ge,EventDispatcher as qe,Vector3 as u,MOUSE as k,TOUCH as S,Quaternion as Pe,Spherical as Te,Vector2 as m}from"./three.module-CwjCRhry.js";const we={type:"change"},J={type:"start"},Oe={type:"end"},X=new Ve,Me=new We,Be=Math.cos(70*Ge.DEG2RAD);class et extends qe{constructor(F,je){super(),this.object=F,this.domElement=je,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new u,this.cursor=new u,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:k.ROTATE,MIDDLE:k.DOLLY,RIGHT:k.PAN},this.touches={ONE:S.ROTATE,TWO:S.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",v),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(we),e.update(),r=a.NONE},this.update=function(){const t=new u,o=new Pe().setFromUnitVectors(F.up,new u(0,1,0)),n=o.clone().invert(),i=new u,l=new Pe,g=new u,d=2*Math.PI;return function(Fe=null){const ge=e.object.position;t.copy(ge).sub(e.target),t.applyQuaternion(o),s.setFromVector3(t),e.autoRotate&&r===a.NONE&&C(Ae(Fe)),e.enableDamping?(s.theta+=p.theta*e.dampingFactor,s.phi+=p.phi*e.dampingFactor):(s.theta+=p.theta,s.phi+=p.phi);let h=e.minAzimuthAngle,f=e.maxAzimuthAngle;isFinite(h)&&isFinite(f)&&(h<-Math.PI?h+=d:h>Math.PI&&(h-=d),f<-Math.PI?f+=d:f>Math.PI&&(f-=d),h<=f?s.theta=Math.max(h,Math.min(f,s.theta)):s.theta=s.theta>(h+f)/2?Math.max(h,s.theta):Math.min(f,s.theta)),s.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,s.phi)),s.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(j,e.dampingFactor):e.target.add(j),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor);let z=!1;if(e.zoomToCursor&&K||e.object.isOrthographicCamera)s.radius=B(s.radius);else{const b=s.radius;s.radius=B(s.radius*E),z=b!=s.radius}if(t.setFromSpherical(s),t.applyQuaternion(n),ge.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,j.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),j.set(0,0,0)),e.zoomToCursor&&K){let b=null;if(e.object.isPerspectiveCamera){const _=t.length();b=B(_*E);const Z=_-b;e.object.position.addScaledVector($,Z),e.object.updateMatrixWorld(),z=!!Z}else if(e.object.isOrthographicCamera){const _=new u(y.x,y.y,0);_.unproject(e.object);const Z=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/E)),e.object.updateProjectionMatrix(),z=Z!==e.object.zoom;const Ee=new u(y.x,y.y,0);Ee.unproject(e.object),e.object.position.sub(Ee).add(_),e.object.updateMatrixWorld(),b=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;b!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(b).add(e.object.position):(X.origin.copy(e.object.position),X.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(X.direction))<Be?F.lookAt(e.target):(Me.setFromNormalAndCoplanarPoint(e.object.up,e.target),X.intersectPlane(Me,e.target))))}else if(e.object.isOrthographicCamera){const b=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/E)),b!==e.object.zoom&&(e.object.updateProjectionMatrix(),z=!0)}return E=1,K=!1,z||i.distanceToSquared(e.object.position)>V||8*(1-l.dot(e.object.quaternion))>V||g.distanceToSquared(e.target)>V?(e.dispatchEvent(we),i.copy(e.object.position),l.copy(e.object.quaternion),g.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",be),e.domElement.removeEventListener("pointerdown",de),e.domElement.removeEventListener("pointercancel",Y),e.domElement.removeEventListener("wheel",me),e.domElement.removeEventListener("pointermove",Q),e.domElement.removeEventListener("pointerup",Y),e.domElement.getRootNode().removeEventListener("keydown",pe,{capture:!0}),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",v),e._domElementKeyEvents=null)};const e=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=a.NONE;const V=1e-6,s=new Te,p=new Te;let E=1;const j=new u,P=new m,T=new m,A=new m,w=new m,O=new m,L=new m,D=new m,R=new m,M=new m,$=new u,y=new m;let K=!1;const c=[],I={};let W=!1;function Ae(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function H(t){const o=Math.abs(t*.01);return Math.pow(.95,e.zoomSpeed*o)}function C(t){p.theta-=t}function U(t){p.phi-=t}const ee=function(){const t=new u;return function(n,i){t.setFromMatrixColumn(i,0),t.multiplyScalar(-n),j.add(t)}}(),te=function(){const t=new u;return function(n,i){e.screenSpacePanning===!0?t.setFromMatrixColumn(i,1):(t.setFromMatrixColumn(i,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(n),j.add(t)}}(),x=function(){const t=new u;return function(n,i){const l=e.domElement;if(e.object.isPerspectiveCamera){const g=e.object.position;t.copy(g).sub(e.target);let d=t.length();d*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*n*d/l.clientHeight,e.object.matrix),te(2*i*d/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(ee(n*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),te(i*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function G(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?E/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function oe(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?E*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function q(t,o){if(!e.zoomToCursor)return;K=!0;const n=e.domElement.getBoundingClientRect(),i=t-n.left,l=o-n.top,g=n.width,d=n.height;y.x=i/g*2-1,y.y=-(l/d)*2+1,$.set(y.x,y.y,1).unproject(e.object).sub(e.object.position).normalize()}function B(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ne(t){P.set(t.clientX,t.clientY)}function Le(t){q(t.clientX,t.clientX),D.set(t.clientX,t.clientY)}function ae(t){w.set(t.clientX,t.clientY)}function De(t){T.set(t.clientX,t.clientY),A.subVectors(T,P).multiplyScalar(e.rotateSpeed);const o=e.domElement;C(2*Math.PI*A.x/o.clientHeight),U(2*Math.PI*A.y/o.clientHeight),P.copy(T),e.update()}function Re(t){R.set(t.clientX,t.clientY),M.subVectors(R,D),M.y>0?G(H(M.y)):M.y<0&&oe(H(M.y)),D.copy(R),e.update()}function xe(t){O.set(t.clientX,t.clientY),L.subVectors(O,w).multiplyScalar(e.panSpeed),x(L.x,L.y),w.copy(O),e.update()}function Ne(t){q(t.clientX,t.clientY),t.deltaY<0?oe(H(t.deltaY)):t.deltaY>0&&G(H(t.deltaY)),e.update()}function ke(t){let o=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?U(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?U(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?C(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?C(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function ie(t){if(c.length===1)P.set(t.pageX,t.pageY);else{const o=N(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);P.set(n,i)}}function se(t){if(c.length===1)w.set(t.pageX,t.pageY);else{const o=N(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);w.set(n,i)}}function re(t){const o=N(t),n=t.pageX-o.x,i=t.pageY-o.y,l=Math.sqrt(n*n+i*i);D.set(0,l)}function Se(t){e.enableZoom&&re(t),e.enablePan&&se(t)}function Ie(t){e.enableZoom&&re(t),e.enableRotate&&ie(t)}function ce(t){if(c.length==1)T.set(t.pageX,t.pageY);else{const n=N(t),i=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);T.set(i,l)}A.subVectors(T,P).multiplyScalar(e.rotateSpeed);const o=e.domElement;C(2*Math.PI*A.x/o.clientHeight),U(2*Math.PI*A.y/o.clientHeight),P.copy(T)}function le(t){if(c.length===1)O.set(t.pageX,t.pageY);else{const o=N(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);O.set(n,i)}L.subVectors(O,w).multiplyScalar(e.panSpeed),x(L.x,L.y),w.copy(O)}function ue(t){const o=N(t),n=t.pageX-o.x,i=t.pageY-o.y,l=Math.sqrt(n*n+i*i);R.set(0,l),M.set(0,Math.pow(R.y/D.y,e.zoomSpeed)),G(M.y),D.copy(R);const g=(t.pageX+o.x)*.5,d=(t.pageY+o.y)*.5;q(g,d)}function Ce(t){e.enableZoom&&ue(t),e.enablePan&&le(t)}function Ye(t){e.enableZoom&&ue(t),e.enableRotate&&ce(t)}function de(t){e.enabled!==!1&&(c.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",Q),e.domElement.addEventListener("pointerup",Y)),!Xe(t)&&(Ue(t),t.pointerType==="touch"?fe(t):ze(t)))}function Q(t){e.enabled!==!1&&(t.pointerType==="touch"?He(t):_e(t))}function Y(t){switch(Ze(t),c.length){case 0:e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",Q),e.domElement.removeEventListener("pointerup",Y),e.dispatchEvent(Oe),r=a.NONE;break;case 1:const o=c[0],n=I[o];fe({pointerId:o,pageX:n.x,pageY:n.y});break}}function ze(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case k.DOLLY:if(e.enableZoom===!1)return;Le(t),r=a.DOLLY;break;case k.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;ae(t),r=a.PAN}else{if(e.enableRotate===!1)return;ne(t),r=a.ROTATE}break;case k.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ne(t),r=a.ROTATE}else{if(e.enablePan===!1)return;ae(t),r=a.PAN}break;default:r=a.NONE}r!==a.NONE&&e.dispatchEvent(J)}function _e(t){switch(r){case a.ROTATE:if(e.enableRotate===!1)return;De(t);break;case a.DOLLY:if(e.enableZoom===!1)return;Re(t);break;case a.PAN:if(e.enablePan===!1)return;xe(t);break}}function me(t){e.enabled===!1||e.enableZoom===!1||r!==a.NONE||(t.preventDefault(),e.dispatchEvent(J),Ne(Ke(t)),e.dispatchEvent(Oe))}function Ke(t){const o=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(o){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!W&&(n.deltaY*=10),n}function pe(t){t.key==="Control"&&(W=!0,e.domElement.getRootNode().addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(t){t.key==="Control"&&(W=!1,e.domElement.getRootNode().removeEventListener("keyup",he,{passive:!0,capture:!0}))}function v(t){e.enabled===!1||e.enablePan===!1||ke(t)}function fe(t){switch(ye(t),c.length){case 1:switch(e.touches.ONE){case S.ROTATE:if(e.enableRotate===!1)return;ie(t),r=a.TOUCH_ROTATE;break;case S.PAN:if(e.enablePan===!1)return;se(t),r=a.TOUCH_PAN;break;default:r=a.NONE}break;case 2:switch(e.touches.TWO){case S.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Se(t),r=a.TOUCH_DOLLY_PAN;break;case S.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ie(t),r=a.TOUCH_DOLLY_ROTATE;break;default:r=a.NONE}break;default:r=a.NONE}r!==a.NONE&&e.dispatchEvent(J)}function He(t){switch(ye(t),r){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;ce(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;le(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ce(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ye(t),e.update();break;default:r=a.NONE}}function be(t){e.enabled!==!1&&t.preventDefault()}function Ue(t){c.push(t.pointerId)}function Ze(t){delete I[t.pointerId];for(let o=0;o<c.length;o++)if(c[o]==t.pointerId){c.splice(o,1);return}}function Xe(t){for(let o=0;o<c.length;o++)if(c[o]==t.pointerId)return!0;return!1}function ye(t){let o=I[t.pointerId];o===void 0&&(o=new m,I[t.pointerId]=o),o.set(t.pageX,t.pageY)}function N(t){const o=t.pointerId===c[0]?c[1]:c[0];return I[o]}e.domElement.addEventListener("contextmenu",be),e.domElement.addEventListener("pointerdown",de),e.domElement.addEventListener("pointercancel",Y),e.domElement.addEventListener("wheel",me,{passive:!1}),e.domElement.getRootNode().addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}export{et as OrbitControls};
