_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,n){n("ODB1"),e.exports=n("7xIC")},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},EvPg:function(e,t,n){},"I/kN":function(e,t,n){var r=n("w7mb");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},J9Yr:function(e,t,n){"use strict";var r=n("iN+R"),o=n("zQIG"),a=n("8mBC"),u=(n("N7I1"),n("I/kN")),i=n("cMav"),c=n("pSQP");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("ERkP"),d=function(e){u(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},N7I1:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},O5Wi:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},ODB1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},cMav:function(e,t,n){var r=n("i2RQ"),o=n("N7I1");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cha2:function(e,t,n){"use strict";n.r(t);var r=n("ysqo"),o=n.n(r),a=n("ERkP"),u=n.n(a),i=(n("EvPg"),u.a.createElement);t.default=function(e){var t=e.Component,n=e.pageProps;return i(u.a.Fragment,null,i(o.a,null,i("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})),i(t,n))}},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("ERkP"))&&r.__esModule?r:{default:r},a=n("TZT2");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},"iN+R":function(e,t,n){var r=n("bOkD"),o=n("DSo7"),a=n("D7XE"),u=n("uYlf");e.exports=function(e){return r(e)||o(e)||a(e)||u()}},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},pSQP:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ysqo:function(e,t,n){"use strict";n("O5Wi");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),a=(r=n("J9Yr"))&&r.__esModule?r:{default:r},u=n("TZT2"),i=n("op+c"),c=n("dq4L");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function l(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var f=p[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],d=r[f]||new Set;d.has(s)?a=!1:(d.add(s),r[f]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:l,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v}},[[0,0,2,6,1]]]);