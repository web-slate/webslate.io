(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7672:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(6156),o=n(5893),i=(n(4898),n(1516)),a=n(2105),c=n(2868);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}i.ZP.initialize(c.vt),(0,a.FJ)()&&i.ZP.pageview(window.location.pathname+window.location.search)},2105:function(e,t,n){"use strict";n.d(t,{WF:function(){return r},FJ:function(){return o},Md:function(){return i}});var r=function(e){o()&&window.open(e,"_blank")},o=function(){return!0},i=function(e){return e.replace(/\s+/g,"-").toLowerCase()}},2868:function(e,t,n){"use strict";n.d(t,{vt:function(){return r},ei:function(){return o}});var r="UA-204337324-1",o={BLOGS:"BLOGS"}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7672)}])},4898:function(){},1516:function(e,t,n){"use strict";n.d(t,{ZP:function(){return fe}});var r={};n.r(r),n.d(r,{addTrackers:function(){return U},default:function(){return ie},event:function(){return ee},exception:function(){return te},ga:function(){return $},initialize:function(){return V},modalview:function(){return Q},outboundLink:function(){return re},pageview:function(){return H},plugin:function(){return ne},send:function(){return W},set:function(){return X},testModeAPI:function(){return oe},timing:function(){return Y}});var o=n(7294),i=n(5697),a=n.n(i);function c(e){console.warn("[react-ga]",e)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h="_blank",w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,i=y(a);function a(){var e;p(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(v(e=i.call.apply(i,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f=r!==h,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),a.trackLink(l,(function(){window.location.href=i}),u)):a.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=f(f({},s(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===h&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.createElement("a",r)}}])&&g(t.prototype,n),r&&g(t,r),a}(o.Component);m(w,"trackLink",(function(){c("ga tracking not enabled")})),w.propTypes={eventLabel:a().string.isRequired,target:a().string,to:a().string,onClick:a().func,trackerNames:a().arrayOf(a().string)},w.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function j(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(c("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function k(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var P=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function S(e){return k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(P)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var A=!1;function E(e){console.info("[react-ga]",e)}var D=[],N={calls:D,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];D.push([].concat(t))},resetCalls:function(){D.length=0}};function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I="undefined"===typeof window||"undefined"===typeof document,J=!1,R=!0,Z=!1,z=!0,F=!0,G=function(){var e;return Z?N.ga.apply(N,arguments):!I&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function M(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=S(e)),t&&(n=j(n)),n}(e,R,F)}function B(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!z&&Array.isArray(e)||G.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){G.apply(void 0,q(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):c("ga command must be a string")}function K(e,t){e?t&&(t.debug&&!0===t.debug&&(J=!0),!1===t.titleCase&&(R=!1),!1===t.redactEmail&&(F=!1),t.useExistingGa)||(t&&t.gaOptions?G("create",e,t.gaOptions):G("create",e,"auto")):c("gaTrackingID is required in initialize()")}function U(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===x(e)?K(e.trackingId,e):c("All configs must be an object")})):K(e,t),!0}function V(e,t){if(t&&!0===t.testMode)Z=!0;else{if(I)return;t&&!0===t.standardImplementation||function(e){if(!A){A=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,i,a,c,u,l=e&&e.onerror;n=window,r=document,o="script",i=t,a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=l,u.parentNode.insertBefore(c,u)}}(t)}z=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,U(e,t)}function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(G.apply(void 0,t),J&&(E("called ga('arguments');"),E("with arguments: ".concat(JSON.stringify(t))))),window.ga}function X(e,t){e?"object"===x(e)?(0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),B(t,"set",e),J&&(E("called ga('set', fieldsObject);"),E("with fieldsObject: ".concat(JSON.stringify(e))))):c("Expected `fieldsObject` arg to be an Object"):c("`fieldsObject` is required in .set()")}function W(e,t){B(t,"send",e),J&&(E("called ga('send', fieldObject);"),E("with fieldObject: ".concat(JSON.stringify(e))),E("with trackers: ".concat(JSON.stringify(t))))}function H(e,t,n){if(e){var r=k(e);if(""!==r){var o={};if(n&&(o.title=n),B(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),J){E("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),E("with path: ".concat(r).concat(i))}}else c("path cannot be an empty string in .pageview()")}else c("path is required in .pageview()")}function Q(e,t){if(e){var n,r="/"===(n=k(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);B(t,"send","pageview",o),J&&(E("called ga('send', 'pageview', path);"),E("with path: ".concat(o)))}else c("modalName cannot be an empty string or a single / in .modalview()")}else c("modalName is required in .modalview(modalName)")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var a={hitType:"timing",timingCategory:M(t),timingVar:M(n),timingValue:r};o&&(a.timingLabel=M(o)),W(a,i)}else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,u=C(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:M(t),eventAction:M(n)};r&&(f.eventLabel=M(r)),"undefined"!==typeof o&&("number"!==typeof o?c("Expected `args.value` arg to be a Number."):f.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?c("`args.nonInteraction` must be a boolean."):f.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=a)),Object.keys(u).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=u[e]})),Object.keys(u).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=u[e]})),W(f,l)}else c("args.category AND args.action are required in event()")}function te(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=M(n)),"undefined"!==typeof r&&("boolean"!==typeof r?c("`args.fatal` must be a boolean."):o.exFatal=r),W(o,t)}var ne={require:function(e,t,n){if(e){var r=k(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==x(t))return void c("Expected `options` arg to be an Object");0===Object.keys(t).length&&c("Empty `options` given to .require()"),$(o,r,t),J&&E("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else $(o,r),J&&E("called ga('require', '".concat(r,"');"))}else c("`name` cannot be an empty string in .require()")}else c("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?n=i[0]:(r=i[0],n=i[1]),"string"!==typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)c("Expected `action` arg to be a String.");else{var u="".concat(e,":").concat(t);n=n||null,r&&n?($(u,r,n),J&&(E("called ga('".concat(u,"');")),E('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?($(u,n),J&&(E("called ga('".concat(u,"');")),E("with payload: ".concat(JSON.stringify(n))))):($(u),J&&E("called ga('".concat(u,"');")))}}};function re(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:M(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},W(r,n)}else c("args.label is required in outboundLink()");else c("hitCallback function is required")}var oe=N,ie={initialize:V,ga:$,set:X,send:W,pageview:H,modalview:Q,timing:Y,event:ee,exception:te,plugin:ne,outboundLink:re,testModeAPI:N};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w.origTrackLink=w.trackLink,w.trackLink=re;var le=w,fe=ce(ce({},r),{},{OutboundLink:le})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);