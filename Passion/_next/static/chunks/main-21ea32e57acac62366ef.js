_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+gNf":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))})},"0D0S":function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}},"7t6h":function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return h})),n.d(t,"getFCP",(function(){return v})),n.d(t,"getFID",(function(){return g})),n.d(t,"getLCP",(function(){return S})),n.d(t,"getTTFB",(function(){return _}));var r,a,o=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:o(),isFinal:!1}},u=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},c=!1,s=!1,l=function(e){c=!e.persisted},f=function(){addEventListener("pagehide",l),addEventListener("beforeunload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(f(),s=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:c})}),{capture:!0,once:t})},p=function(e,t,n,r){var a;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(a||0),(t.delta||t.isFinal||void 0===a)&&(e(t),a=t.value))}},h=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),a=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),t())},o=u("layout-shift",a);o&&(t=p(e,r,o,n),d((function(e){var n=e.isUnloading;o.takeRecords().map(a),n&&(r.isFinal=!0),t()})))},m=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},v=function(e){var t,n=i("FCP"),r=m(),a=u("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(n.value=e.startTime,n.isFinal=!0,n.entries.push(e),t())}));a&&(t=p(e,n,a))},g=function(e){var t=i("FID"),n=m(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,o())},a=u("first-input",r),o=p(e,t,a);a?d((function(){a.takeRecords().map(r),a.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],o())}))},y=function(){return a||(a=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),a},S=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),a=m(),o=function(e){var n=e.startTime;n<a.timeStamp?(r.value=n,r.entries.push(e)):r.isFinal=!0,t()},c=u("largest-contentful-paint",o);if(c){t=p(e,r,c,n);var s=function(){r.isFinal||(c.takeRecords().map(o),r.isFinal=!0,t())};y().then(s),d(s,!0)}},_=function(e){var t,n=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},"9YZO":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},J6CG:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return n+t}},YtVx:function(e,t,n){"use strict";var r=n("pONU")(n("ioxi"));window.next=r,(0,r.default)().catch(console.error)},awAI:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,a=n("7t6h"),o=(location.href,!1);function i(e){r&&r(e)}t.default=function(e){r=e,o||(o=!0,(0,a.getCLS)(i),(0,a.getFID)(i),(0,a.getFCP)(i),(0,a.getLCP)(i),(0,a.getTTFB)(i))}},ioxi:function(e,t,n){"use strict";var r=n("IebI"),a=n("4mCN"),o=n("zQIG"),i=n("8mBC"),u=n("I/kN"),c=n("cMav"),s=n("pSQP"),l=n("x3oR");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}var d=n("pONU"),p=n("Y3ZS");t.__esModule=!0,t.render=oe,t.renderError=ue,t.default=t.emitter=t.router=t.version=void 0;var h=p(n("9YZO"));p(n("pONU"));n("+gNf");var m=p(n("ERkP")),v=p(n("7nmT")),g=n("op+c"),y=p(n("YBsB")),S=n("wsRY"),_=n("L9lV"),E=n("Lko9"),w=d(n("FrRs")),R=d(n("0D0S")),b=n("fvxO"),P=p(n("jRQF")),x=d(n("vOaH")),T=p(n("awAI")),C=n("7xIC"),A=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=A;t.version="10.0.1";var k=A.props,I=A.err,N=A.page,L=A.query,M=A.buildId,D=A.assetPrefix,F=A.runtimeConfig,B=A.dynamicIds,O=A.isFallback,j=A.head,q=A.locales,U=A.locale,H=A.defaultLocale,G=D||"";n.p="".concat(G,"/_next/"),R.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:F||{}});var Y=(0,b.getURL)();(0,_.hasBasePath)(Y)&&(Y=(0,_.delBasePath)(Y));var X=new x.default(M,G,N),Q=function(e){var t=l(e,2),n=t[0],r=t[1];return X.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return Q(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=Q;var V,J,W,Z,z,$,K,ee=(0,P.default)(j),te=document.getElementById("__next");t.router=W;var ne=function(e){u(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),W.isSsr&&(O||A.nextExport&&((0,E.isDynamicRoute)(W.pathname)||location.search)||k&&k.__N_SSG&&location.search)&&W.replace(W.pathname+"?"+String(w.assign(w.urlQueryToSearchParams(W.query),new URLSearchParams(location.search))),Y,{_h:1,shallow:!O})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(m.default.Component),re=(0,y.default)();t.emitter=re;var ae=function(){var e=a(r.mark((function e(){var n,a,o,i,u,c,s=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,X.loadPage("/_app");case 4:return n=e.sent,a=n.page,o=n.mod,$=a,o&&o.reportWebVitals&&(K=function(e){var t,n=e.id,r=e.name,a=e.startTime,i=e.value,u=e.duration,c=e.entryType,s=e.entries,l="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),o.reportWebVitals({id:n||l,name:r,startTime:a||t,value:null==i?u:i,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),i=I,e.prev=10,e.next=14,X.loadPage(N);case 14:u=e.sent,Z=u.page,z=u.styleSheets,e.next=21;break;case 21:e.next=28;break;case 23:if(e.prev=23,e.t0=e.catch(10),!(x.INITIAL_CSS_LOAD_ERROR in e.t0)){e.next=27;break}throw e.t0;case 27:i=e.t0;case 28:if(!window.__NEXT_PRELOADREADY){e.next=32;break}return e.next=32,window.__NEXT_PRELOADREADY(B);case 32:return t.router=W=(0,C.createRouter)(N,L,Y,{initialProps:k,pageLoader:X,App:$,Component:Z,initialStyleSheets:z,wrapApp:pe,err:i,isFallback:Boolean(O),subscription:function(e,t){return oe({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})},locale:U,locales:q,defaultLocale:H}),oe(c={App:$,Component:Z,styleSheets:z,props:k,err:i}),e.abrupt("return",re);case 40:return e.abrupt("return",{emitter:re,render:oe,renderCtx:c});case 41:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();function oe(e){return ie.apply(this,arguments)}function ie(){return(ie=a(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,ue(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,he(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,ue((0,h.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function ue(e){var t=e.App,n=e.err;return console.error(n),X.loadPage("/_error").then((function(r){var a=r.page,o=r.styleSheets,i=pe(t),u={Component:a,AppTree:i,router:W,ctx:{err:n,pathname:N,query:L,asPath:Y,AppTree:i}};return Promise.resolve(e.props?e.props:(0,b.loadGetInitialProps)(t,u)).then((function(t){return he((0,h.default)({},e,{err:n,Component:a,styleSheets:o,props:t}))}))}))}t.default=ae;var ce="function"===typeof v.default.hydrate;function se(){b.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),K&&performance.getEntriesByName("Next.js-hydration").forEach(K),fe())}function le(){if(b.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),K&&(performance.getEntriesByName("Next.js-render").forEach(K),performance.getEntriesByName("Next.js-route-change-to-render").forEach(K)),fe(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function fe(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function de(e){var t=e.children;return m.default.createElement(ne,{fn:function(e){return ue({App:$,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},m.default.createElement(S.RouterContext.Provider,{value:(0,C.makePublicRouterInstance)(W)},m.default.createElement(g.HeadManagerContext.Provider,{value:ee},t)))}var pe=function(e){return function(t){var n=(0,h.default)({},t,{Component:Z,err:I,router:W});return m.default.createElement(de,null,m.default.createElement(e,n))}};function he(e){var t=e.App,n=e.Component,r=e.props,a=e.err,o=e.styleSheets;n=n||V.Component,r=r||V.props;var i=(0,h.default)({},r,{Component:n,err:a,router:W});V=i;var u,c=!1,s=new Promise((function(e,t){J&&J(),u=function(){J=null,e()},J=function(){c=!0,J=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var l,f,d=m.default.createElement(me,{callback:function(){if(!ce&&!c){for(var e=new Set(o.map((function(e){return e.href}))),t=(0,x.looseToArray)(document.querySelectorAll("style[data-n-href]")),n=t.map((function(e){return e.getAttribute("data-n-href")})),r=0;r<n.length;++r)e.has(n[r])?t[r].removeAttribute("media"):t[r].setAttribute("media","x");var a=document.querySelector("noscript[data-n-css]");a&&o.forEach((function(e){var t=e.href,n=document.querySelector('style[data-n-href="'.concat(t,'"]'));n&&(a.parentNode.insertBefore(n,a.nextSibling),a=n)})),(0,x.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}u()}},m.default.createElement(de,null,m.default.createElement(t,i)));return function(){if(ce)return!1;var e=(0,x.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));o.forEach((function(e){var n=e.href,r=e.text;if(!t.has(n)){var a=document.createElement("style");a.setAttribute("data-n-href",n),a.setAttribute("media","x"),document.head.appendChild(a),a.appendChild(document.createTextNode(r))}}))}(),l=d,f=te,b.ST&&performance.mark("beforeRender"),ce?(v.default.hydrate(l,f,se),ce=!1):v.default.render(l,f,le),s}function me(e){var t=e.callback,n=e.children;return m.default.useLayoutEffect((function(){return t()}),[t]),m.default.useEffect((function(){(0,T.default)(K)}),[]),n}},jRQF:function(e,t,n){"use strict";var r=n("x3oR");t.__esModule=!0,t.default=function(e){var t=document.getElementsByTagName("head")[0],n=new Set(t.children);i(n,e.map((function(e){var t=r(e,2),n=t[0],o=t[1];return(0,a.createElement)(n,o)})),!1);var o=null;return{mountedInstances:new Set,updateHead:function(e){var t=o=Promise.resolve().then((function(){t===o&&(o=null,i(n,e,!0))}))}}};var a=n("ERkP"),o={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function i(e,t,n){var r=document.getElementsByTagName("head")[0],a=new Set(e);t.forEach((function(t){if("title"!==t.type){for(var n=function(e){var t=e.type,n=e.props,r=document.createElement(t);for(var a in n)if(n.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==n[a]){var i=o[a]||a.toLowerCase();r.setAttribute(i,n[a])}var u=n.children,c=n.dangerouslySetInnerHTML;return c?r.innerHTML=c.__html||"":u&&(r.textContent="string"===typeof u?u:Array.isArray(u)?u.join(""):""),r}(t),i=e.values();;){var u=i.next(),c=u.done,s=u.value;if(null==s?void 0:s.isEqualNode(n))return void a.delete(s);if(c)break}e.add(n),r.appendChild(n)}else{var l="";if(t){var f=t.props.children;l="string"===typeof f?f:Array.isArray(f)?f.join(""):""}l!==document.title&&(document.title=l)}})),a.forEach((function(t){n&&t.parentNode.removeChild(t),e.delete(t)}))}},vOaH:function(e,t,n){"use strict";var r=n("IebI"),a=n("4mCN"),o=n("zQIG"),i=n("8mBC"),u=n("Y3ZS");t.__esModule=!0,t.default=t.INITIAL_CSS_LOAD_ERROR=t.looseToArray=void 0;var c=u(n("YBsB")),s=n("L9lV"),l=u(n("J6CG")),f=n("Lko9"),d=n("3G4Q"),p=function(e){return[].slice.call(e)};function h(e,t){try{return document.createElement("link").relList.supports(e)}catch(n){}}function m(e){return(0,s.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=p;var v=Symbol("INITIAL_CSS_LOAD_ERROR");t.INITIAL_CSS_LOAD_ERROR=v;var g=h("preload")&&!h("prefetch")?"preload":"prefetch",y=h("preload")?"preload":g;document.createElement("script");function S(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function _(e,t,n,r){return new Promise((function(a,o){r=document.createElement("link"),n&&(r.as=n),r.rel=t,r.crossOrigin=void 0,r.onload=a,r.onerror=o,r.href=e,document.head.appendChild(r)}))}var E=function(){function e(t,n,r){o(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=r,this.buildId=t,this.assetPrefix=n,this.pageCache={},this.pageRegisterEvents=(0,c.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==r&&(this.loadingRoutes[r]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return i(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(n){return n[e]?n[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(m(e))}))}},{key:"getDataHref",value:function(e,t,n,r){var a=this,o=(0,d.parseRelativeUrl)(e),i=o.pathname,u=o.query,c=o.search,p=(0,d.parseRelativeUrl)(t).pathname,h=S(i),m=function(e){var t=(0,s.addLocale)((0,l.default)(e,".json"),r);return(0,s.addBasePath)("/_next/data/".concat(a.buildId).concat(t).concat(n?"":c))},v=(0,f.isDynamicRoute)(h),g=v?(0,s.interpolateAs)(i,p,u).result:"";return v?g&&m(g):m(h)}},{key:"prefetchData",value:function(e,t,n){var r=this,a=S((0,d.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(o,i){return o.has(a)&&(i=r.getDataHref(e,t,!0,n))&&!document.querySelector('link[rel="'.concat(g,'"][href^="').concat(i,'"]'))&&_(i,g,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=S(e),new Promise((function(n,r){var a=t.pageCache[e];if(a)"error"in a?r(a.error):n(a);else{var o=function a(o){t.pageRegisterEvents.off(e,a),delete t.loadingRoutes[e],"error"in o?r(o.error):n(o)};if(t.pageRegisterEvents.on(e,o),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,n){var r=document.createElement("script");r.crossOrigin=void 0,r.src=e,r.onload=t,r.onerror=function(){return n(m(e))},document.body.appendChild(r)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(y,'"][href^="').concat(e,'"]'))&&_(e,y,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(n){t.pageCache[e]={error:n},o({error:n})}))}}))}},{key:"registerPage",value:function(e,t){var n=this,o=this,i=function(){var n=a(r.mark((function n(a){var i,u;return r.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t();case 3:i=n.sent,u={page:i.default||i,mod:i,styleSheets:a},o.pageCache[e]=u,o.pageRegisterEvents.emit(e,u),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),o.pageCache[e]={error:n.t0},o.pageRegisterEvents.emit(e,{error:n.t0});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();var u=e===this.initialPage;("/_app"===e?Promise.resolve([]):(u?Promise.resolve(p(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw m(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){throw u&&Object.defineProperty(e,v,{}),e}))}))).then((function(e){return i(e)}),(function(t){n.pageCache[e]={error:t},n.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var n,r,a=this;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return Promise.resolve();if(t)r=e;else;return Promise.all(document.querySelector('link[rel="'.concat(g,'"][href^="').concat(r,'"]'))?[]:[r&&_(r,g,r.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return a.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=E}},[["YtVx",0,2,1]]]);