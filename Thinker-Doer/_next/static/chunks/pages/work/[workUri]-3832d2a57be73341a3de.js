_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"1lGl":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work/[workUri]",function(){return n("nnCJ")}])},"9HG0":function(t,e,n){var i;!function(r,o,s,a){"use strict";var u,c=["","webkit","Moz","MS","ms","o"],l=o.createElement("div"),h=Math.round,p=Math.abs,f=Date.now;function d(t,e,n){return setTimeout(E(t,n),e)}function m(t,e,n){return!!Array.isArray(t)&&(v(t,n[e],n),!0)}function v(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(undefined!==t.length)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function g(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}u="function"!==typeof Object.assign?function(t){if(undefined===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(undefined!==i&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var y=g((function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&undefined===t[i[r]])&&(t[i[r]]=e[i[r]]),r++;return t}),"extend","Use `assign`."),T=g((function(t,e){return y(t,e,!0)}),"merge","Use `assign`.");function b(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&u(i,n)}function E(t,e){return function(){return t.apply(e,arguments)}}function w(t,e){return"function"==typeof t?t.apply(e&&e[0]||undefined,e):t}function S(t,e){return undefined===t?e:t}function I(t,e,n){v(_(e),(function(e){t.addEventListener(e,n,!1)}))}function A(t,e,n){v(_(e),(function(e){t.removeEventListener(e,n,!1)}))}function O(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function x(t,e){return t.indexOf(e)>-1}function _(t){return t.trim().split(/\s+/g)}function C(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function P(t){return Array.prototype.slice.call(t,0)}function k(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];C(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function D(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<c.length;){if((i=(n=c[o])?n+r:e)in t)return i;o++}}var N=1;function j(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var R="ontouchstart"in r,z=undefined!==D(r,"PointerEvent"),M=R&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),W=["x","y"],X=["clientX","clientY"];function U(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){w(t.options.enable,[t])&&n.handler(e)},this.init()}function Y(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=1&e&&i-r===0,s=12&e&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=F(e));r>1&&!n.firstMultiple?n.firstMultiple=F(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,u=e.center=H(i);e.timeStamp=f(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=V(a,u),e.distance=G(a,u),function(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};1!==e.eventType&&4!==o.eventType||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}(n,e),e.offsetDirection=q(e.deltaX,e.deltaY);var c=L(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=p(c.x)>p(c.y)?c.x:c.y,e.scale=s?(l=s.pointers,h=i,G(h[0],h[1],X)/G(l[0],l[1],X)):1,e.rotation=s?function(t,e){return V(e[1],e[0],X)+V(t[1],t[0],X)}(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,r,o,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp;if(8!=e.eventType&&(a>25||undefined===s.velocity)){var u=e.deltaX-s.deltaX,c=e.deltaY-s.deltaY,l=L(a,u,c);i=l.x,r=l.y,n=p(l.x)>p(l.y)?l.x:l.y,o=q(u,c),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}(n,e);var l,h;var d=t.element;O(e.srcEvent.target,d)&&(d=e.srcEvent.target);e.target=d}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function F(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:h(t.pointers[n].clientX),clientY:h(t.pointers[n].clientY)},n++;return{timeStamp:f(),pointers:e,center:H(e),deltaX:t.deltaX,deltaY:t.deltaY}}function H(t){var e=t.length;if(1===e)return{x:h(t[0].clientX),y:h(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:h(n/e),y:h(i/e)}}function L(t,e,n){return{x:e/t||0,y:n/t||0}}function q(t,e){return t===e?1:p(t)>=p(e)?t<0?2:4:e<0?8:16}function G(t,e,n){n||(n=W);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function V(t,e,n){n||(n=W);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}U.prototype={handler:function(){},init:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(j(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&A(this.element,this.evEl,this.domHandler),this.evTarget&&A(this.target,this.evTarget,this.domHandler),this.evWin&&A(j(this.element),this.evWin,this.domHandler)}};var B={mousedown:1,mousemove:2,mouseup:4};function J(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,U.apply(this,arguments)}b(J,U,{handler:function(t){var e=B[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Z={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},$={2:"touch",3:"pen",4:"mouse",5:"kinect"},K="pointerdown",Q="pointermove pointerup pointercancel";function tt(){this.evEl=K,this.evWin=Q,U.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(K="MSPointerDown",Q="MSPointerMove MSPointerUp MSPointerCancel"),b(tt,U,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Z[i],o=$[t.pointerType]||t.pointerType,s="touch"==o,a=C(e,t.pointerId,"pointerId");1&r&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):12&r&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var et={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function nt(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,U.apply(this,arguments)}function it(t,e){var n=P(t.touches),i=P(t.changedTouches);return 12&e&&(n=k(n.concat(i),"identifier",!0)),[n,i]}b(nt,U,{handler:function(t){var e=et[t.type];if(1===e&&(this.started=!0),this.started){var n=it.call(this,t,e);12&e&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var rt={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function ot(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},U.apply(this,arguments)}function st(t,e){var n=P(t.touches),i=this.targetIds;if(3&e&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=P(t.changedTouches),a=[],u=this.target;if(o=n.filter((function(t){return O(t.target,u)})),1===e)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),12&e&&delete i[s[r].identifier],r++;return a.length?[k(o.concat(a),"identifier",!0),a]:void 0}b(ot,U,{handler:function(t){var e=rt[t.type],n=st.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});function at(){U.apply(this,arguments);var t=E(this.handler,this);this.touch=new ot(this.manager,t),this.mouse=new J(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ut(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,ct.call(this,e)):12&t&&ct.call(this,e)}function ct(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),2500)}}function lt(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=25&&s<=25)return!0}return!1}b(at,U,{handler:function(t,e,n){var i="touch"==n.pointerType,r="mouse"==n.pointerType;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)ut.call(this,e,n);else if(r&&lt.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ht=D(l.style,"touchAction"),pt=undefined!==ht,ft=function(){if(!pt)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||r.CSS.supports("touch-action",n)})),t}();function dt(t,e){this.manager=t,this.set(e)}dt.prototype={set:function(t){"compute"==t&&(t=this.compute()),pt&&this.manager.element.style&&ft[t]&&(this.manager.element.style[ht]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return v(this.manager.recognizers,(function(e){w(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(x(t,"none"))return"none";var e=x(t,"pan-x"),n=x(t,"pan-y");if(e&&n)return"none";if(e||n)return e?"pan-x":"pan-y";if(x(t,"manipulation"))return"manipulation";return"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=x(i,"none")&&!ft.none,o=x(i,"pan-y")&&!ft["pan-y"],s=x(i,"pan-x")&&!ft["pan-x"];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}if(!s||!o)return r||o&&6&n||s&&24&n?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function mt(t){this.options=u({},this.defaults,t||{}),this.id=N++,this.manager=null,this.options.enable=S(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function vt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function gt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function yt(t,e){var n=e.manager;return n?n.get(t):t}function Tt(){mt.apply(this,arguments)}function bt(){Tt.apply(this,arguments),this.pX=null,this.pY=null}function Et(){Tt.apply(this,arguments)}function wt(){mt.apply(this,arguments),this._timer=null,this._input=null}function St(){Tt.apply(this,arguments)}function It(){Tt.apply(this,arguments)}function At(){mt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Ot(t,e){return(e=e||{}).recognizers=S(e.recognizers,Ot.defaults.preset),new xt(t,e)}mt.prototype={defaults:{},set:function(t){return u(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(m(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=yt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return m(t,"dropRecognizeWith",this)||(t=yt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(m(t,"requireFailure",this))return this;var e=this.requireFail;return-1===C(e,t=yt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(m(t,"dropRequireFailure",this))return this;t=yt(t,this);var e=C(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<8&&i(e.options.event+vt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=8&&i(e.options.event+vt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=u({},t);if(!w(this.options.enable,[this,e]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},b(Tt,mt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=6&e,r=this.attrTest(t);return i&&(8&n||!r)?16|e:i||r?4&n?8|e:2&e?4|e:2:32}}),b(bt,Tt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push("pan-y"),24&t&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(6&e.direction?(r=0===o?1:o<0?2:4,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?1:s<0?8:16,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return Tt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=gt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),b(Et,Tt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),b(wt,mt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=d((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),b(St,Tt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),b(It,Tt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return bt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return 30&n?e=t.overallVelocity:6&n?e=t.overallVelocityX:24&n&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&p(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=gt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),b(At,mt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(i&&r&&n){if(4!=t.eventType)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||G(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=d((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return 32},failTimeout:function(){return this._timer=d((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Ot.VERSION="2.0.7",Ot.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[St,{enable:!1}],[Et,{enable:!1},["rotate"]],[It,{direction:6}],[bt,{direction:6},["swipe"]],[At],[At,{event:"doubletap",taps:2},["tap"]],[wt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function xt(t,e){var n;this.options=u({},Ot.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(z?tt:M?ot:R?at:J))(n,Y),this.touchAction=new dt(this,this.options.touchAction),_t(this,!0),v(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function _t(t,e){var n,i=t.element;i.style&&(v(t.options.cssProps,(function(r,o){n=D(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}xt.prototype={set:function(t){return u(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&14&n.state&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof mt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(m(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(m(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=C(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(undefined!==t&&undefined!==e){var n=this.handlers;return v(_(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(undefined!==t){var n=this.handlers;return v(_(t),(function(t){e?n[t]&&n[t].splice(C(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&_t(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},u(Ot,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:xt,Input:U,TouchAction:dt,TouchInput:ot,MouseInput:J,PointerEventInput:tt,TouchMouseInput:at,SingleTouchInput:nt,Recognizer:mt,AttrRecognizer:Tt,Tap:At,Pan:bt,Swipe:It,Pinch:Et,Rotate:St,Press:wt,on:I,off:A,each:v,merge:T,extend:y,assign:u,inherit:b,bindFn:E,prefixed:D}),("undefined"!==typeof r?r:"undefined"!==typeof self?self:{}).Hammer=Ot,undefined===(i=function(){return Ot}.call(e,n,e,t))||(t.exports=i)}(window,document)},nnCJ:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return B}));var i=n("ERkP"),r=n.n(i),o=n("apO0"),s=n("k+9c"),a=n("xNG2"),u=n("ACCp"),c=n("bAPh"),l=n("QG9V"),h=n("qbWp"),p=n("CGzl"),f=n("bfkP"),d=n("hdMM"),m=n("e2Vl"),v=n("yi+J"),g=n("fLiW"),y=n("HbmN"),T=n("60mK"),b=n("f74Z");function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var A={height:600,width:600},O=function(t,e){var n=[];if(!t)return n;var i=null===t||void 0===t?void 0:t.creator;if(i&&i instanceof s.Agent){var r,o,a=i,u=a.thumbnail({targetDimensions:A});if(u)n.push({agent:a,href:null!==(r=null!==(o=a.page)&&void 0!==o?o:a.wikidataConceptUri)&&void 0!==r?r:null,role:e+" creator",thumbnail:u,thumbnailTargetDimensions:A})}return n},x=n("2jyX"),_=i.createElement;function C(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var k=function(t){var e,n=t.workAgentProfiles,i=[],r=C(n);try{var o=function(){var t=e.value;i.find((function(e){return e.agent.uri===t.agent.uri}))||i.push(t)};for(r.s();!(e=r.n()).done;)o()}catch(s){r.e(s)}finally{r.f()}return _(m.a,{fluid:!0},i.map((function(t,e){var n;return _(v.a,{className:e>0?"mt-4":"mt-2",key:e},_(g.a,{xs:12,className:"p-0"},_(a.a,{className:"text-center"},_(x.a,{tag:"h6"},t.href?_("a",{href:t.href},t.agent.name):_("span",null,t.agent.name)),_(u.a,null,_("img",{src:null!==(n=t.thumbnail.src)&&void 0!==n?n:t.thumbnail.uri,style:{maxHeight:t.thumbnailTargetDimensions.height,maxWidth:t.thumbnailTargetDimensions.width},title:t.agent.name})),t.thumbnail.rights?_(c.a,null,_(b.a,{material:"Image",rights:t.thumbnail.rights,style:{fontSize:"x-small",marginBottom:0}})):null)))})))},D=n("aWzz"),N=n.n(D),j=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var M="undefined"!==typeof window?n("9HG0"):void 0,W={children:!0,direction:!0,options:!0,recognizeWith:!0,vertical:!0},X={action:"tap press",onDoubleTap:"doubletap",onPan:"pan",onPanCancel:"pancancel",onPanEnd:"panend",onPanStart:"panstart",onPinch:"pinch",onPinchCancel:"pinchcancel",onPinchEnd:"pinchend",onPinchIn:"pinchin",onPinchOut:"pinchout",onPinchStart:"pinchstart",onPress:"press",onPressUp:"pressup",onRotate:"rotate",onRotateCancel:"rotatecancel",onRotateEnd:"rotateend",onRotateMove:"rotatemove",onRotateStart:"rotatestart",onSwipe:"swipe",onSwipeRight:"swiperight",onSwipeLeft:"swipeleft",onSwipeUp:"swipeup",onSwipeDown:"swipedown",onTap:"tap"};function U(t,e){e.hasOwnProperty("vertical")&&console.warn("vertical is deprecated, please use `direction` instead");var n=e.direction;if(n||e.hasOwnProperty("vertical")){var i=n||(e.vertical?"DIRECTION_ALL":"DIRECTION_HORIZONTAL");t.get("pan").set({direction:M[i]}),t.get("swipe").set({direction:M[i]})}e.options&&Object.keys(e.options).forEach((function(n){if("recognizers"===n)Object.keys(e.options.recognizers).forEach((function(n){var i=t.get(n);i.set(e.options.recognizers[n]),e.options.recognizers[n].requireFailure&&i.requireFailure(e.options.recognizers[n].requireFailure)}),this);else{var i={};i[n]=e.options[n],t.set(i)}}),this),e.recognizeWith&&Object.keys(e.recognizeWith).forEach((function(n){t.get(n).recognizeWith(e.recognizeWith[n])}),this),Object.keys(e).forEach((function(n){var i=X[n];i&&(t.off(i),t.on(i,e[n]))}))}Object.keys(X).forEach((function(t){W[t]=!0}));var Y=function(t){function e(){return R(this,e),z(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),j(e,[{key:"componentDidMount",value:function(){this.hammer=new M(this.domElement),U(this.hammer,this.props)}},{key:"componentDidUpdate",value:function(){this.hammer&&U(this.hammer,this.props)}},{key:"componentWillUnmount",value:function(){this.hammer&&(this.hammer.stop(),this.hammer.destroy()),this.hammer=null}},{key:"render",value:function(){var t={};Object.keys(this.props).forEach((function(e){W[e]||(t[e]=this.props[e])}),this);var e=this;return t.ref=function(t){e.props.ref&&e.props.ref(t),e.domElement=t},r.a.cloneElement(r.a.Children.only(this.props.children),t)}}]),e}(r.a.Component);Y.displayName="Hammer",Y.propTypes={className:N.a.string};var F=Y,H=n("7xIC"),L=i.createElement;function q(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var V={fontSize:"x-small",marginBottom:0},B=!0;e.default=function(t){var e=t.collectionUri,n=t.configuration,r=t.currentWorkUri,E=t.datasetString,I=t.nextWorkUri,A=t.previousWorkUri,x=Object(H.useRouter)(),_=Object(i.useMemo)((function(){return s.Dataset.parse(E)}),[E]),C=_.collectionByUri(e),P=_.workByUri(r),D=C.institution,N=Object(i.useMemo)((function(){if(P.abstract)return P.abstract;if(P.properties){var t,e=q(P.properties);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.uri===s.DCTERMS.description.value)return n.value.value.toString()}}catch(i){e.e(i)}finally{e.f()}return null}return null}),[P]),j=Object(i.useMemo)((function(){return N&&N instanceof s.Text&&N.rights?N.rights:P.rights?P.rights:D.rights}),[P,N,D]),R=Object(i.useMemo)((function(){return function(t){var e,n,i=t.institution,r=t.work,o=[];o.push.apply(o,w(O(null!==(e=null!==(n=r.rights)&&void 0!==n?n:i.rights)&&void 0!==e?e:null,"Work")));var a=r.abstract;a&&a instanceof s.Text&&o.push.apply(o,w(O(a.rights,"Text")));var u,c=S(r.originalImages);try{for(c.s();!(u=c.n()).done;){var l=u.value;o.push.apply(o,w(O(l.rights,"Image")))}}catch(h){c.e(h)}finally{c.f()}return o}({institution:D,work:P})}),[P,D]),z=Object(i.useState)(null),M=z[0],W=z[1],X=[];P.images.length>0&&X.push({title:"Images",content:L(a.a,{className:"border-0"},L(u.a,{className:"text-center"},L(T.WorkImagesCarousel,{hideImageRights:!0,key:X.length,onShowImage:W,work:P})),M&&M.rights?L(c.a,{className:"text-center"},L(b.a,{material:"Image",rights:M.rights,style:V})):null)}),R.length>0&&X.push({title:"People",content:L(k,{key:X.length,workAgentProfiles:R})});var U,Y=Object(i.useState)(0),G=Y[0],B=Y[1],J=Object(i.useCallback)((function(){I&&x.push(y.a.work(I))}),[I,x]),Z=Object(i.useCallback)((function(){A&&x.push(y.a.work(A))}),[A,x]),$=Object(i.useCallback)((function(t){switch(t.keyCode){case 37:Z();break;case 39:J()}}),[J,Z]);1===X.length?U=X[0].content:X.length>1&&(U=L(i.Fragment,null,L(l.a,{tabs:!0},X.map((function(t,e){return L(h.a,{key:e},L(p.a,{className:G===e?"active":void 0,onClick:function(){return B(e)}},t.title))}))),L(f.a,{activeTab:G.toString()},X.map((function(t,e){return L(d.a,{key:e,tabId:e.toString()},L("div",{className:"mt-2"},t.content))})))));var K=N?L(m.a,{fluid:!0},L(v.a,null,"\xa0"),L(v.a,{className:"mt-4"},L(g.a,{className:"text-wrap",xs:12,dangerouslySetInnerHTML:{__html:N.toString()}}))):null;return L(o.a,{collection:C,configuration:n,currentWork:P,nextWork:I?{uri:I}:void 0,previousWork:A?{uri:A}:void 0},L(F,{onSwipeLeft:Z,onSwipeRight:J},L("div",null,L("div",{onKeyDown:$,style:{outline:"none"},tabIndex:0},L(m.a,{fluid:!0},L(v.a,null,U?L(g.a,{xs:12,sm:12,lg:K?8:12,xl:K?6:12,style:{minHeight:600,minWidth:600}},U):null,L(g.a,{className:"d-flex justify-content-center px-0",xs:12,sm:12,lg:U?4:12,xl:U?6:12},K)),N&&j?L(v.a,{className:"mt-2"},L(g.a,{style:{textAlign:"center"},xs:12},L(b.a,{material:"Text",rights:j,style:V}))):null)))))}}},[["1lGl",1,2,3,0,4]]]);