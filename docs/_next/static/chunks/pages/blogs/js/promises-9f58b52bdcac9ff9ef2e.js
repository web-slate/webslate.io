(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8084],{7610:function(e,t,r){"use strict";r.d(t,{F:function(){return o}});var n=r(5893),i=r(5988),s=r(1664),o=function(e){var t=e.meta,r=e.link,o=e.isBlogPost;return(0,n.jsxs)(n.Fragment,{children:[o?(0,n.jsx)("h1",{className:"jsx-4001257583 "+((o?"great-title":null)||""),children:t.title}):(0,n.jsx)(s.default,{href:r,children:(0,n.jsx)("h1",{className:"jsx-4001257583 "+((o?"great-title":null)||""),children:t.title})}),(0,n.jsxs)("div",{className:"jsx-4001257583 details",children:[o?null:(0,n.jsx)("p",{className:"jsx-4001257583",children:t.description}),(0,n.jsx)("span",{className:"jsx-4001257583",children:t.date}),(0,n.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",t.readTime+" mins read"]})]}),(0,n.jsx)(i.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(e,t,r){"use strict";var n=r(5893),i=r(2465),s=r(9008),o=r(9163),a=r(9232),l=r(1930);function c(){var e=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return c=function(){return e},e}var u=o.ZP.div(c());t.Z=function(e){var t=e.title;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsxs)(u,{children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(a.Z,{})]})]})}},2052:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),i=r(2465),s=r(7610),o=r(2477);function a(){var e=(0,i.Z)(["\n  margin: 0 35px;\n"]);return a=function(){return e},e}var l=r(9163).ZP.div(a());function c(e){var t=e.children,r=e.meta;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{title:r.title}),(0,n.jsxs)(l,{children:[(0,n.jsx)(s.F,{meta:r,isBlogPost:!0}),(0,n.jsx)("article",{children:t})]})]})}},1930:function(e,t,r){"use strict";var n=r(5893),i=r(2465),s=r(1664);function o(){var e=(0,i.Z)(["\n  width: 18%;\n"]);return o=function(){return e},e}var a=r(9163).ZP.div(o());t.Z=function(e){var t=e.type,r=void 0===t?"header-logo":t;return r?(0,n.jsx)(a,{children:(0,n.jsx)(s.default,{href:"/",className:"link",children:(0,n.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:r})})}):(0,n.jsx)(a,{children:(0,n.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),i=r(2465),s=r(7294),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?"/blogs/".concat(e):"/"},a=[{label:"Home",url:"/"},{label:"JavaScript",url:o("js")},{label:"HTML5",url:o("html")},{label:"React",url:o("react")},{label:"Programming",url:o("programming")},{label:"About",url:"/about"}];function l(){var e=(0,i.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return l=function(){return e},e}var c=r(9163).ZP.div(l());var u=function(e){var t=e.noStyle,r=void 0===t||t?c:s.Fragment;return(0,n.jsx)(r,{children:a.map((function(e,t){return(0,n.jsxs)("span",{children:[t>0&&" | ",(null===e||void 0===e?void 0:e.label)&&(0,n.jsx)("a",{href:null===e||void 0===e?void 0:e.url,children:null===e||void 0===e?void 0:e.label})]},null===e||void 0===e?void 0:e.label)}))})}},6177:function(e,t,r){"use strict";r.r(t),r.d(t,{meta:function(){return c},default:function(){return f}});var n=r(6156),i=r(7375),s=(r(7294),r(4137)),o=r(2052);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={title:"JS Promises Basics (Part 1)",description:"One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operations. Promise API followed Promises/A+ Specification prior to this, there was Promise/A.",date:"Oct 21, 2016",readTime:2},u={meta:c},d=function(e){var t=e.children;return(0,s.kt)(o.Z,{meta:c},t)};function f(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,s.kt)(d,l(l(l({},u),r),{},{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operations. Promise API followed Promises/A+ Specification prior to this, there was Promise/A."),(0,s.kt)("h1",null,"What is Promises/A and Promises/A+ ?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Both are specification for open standard but Javascript currently uses Promise/A+."),(0,s.kt)("li",{parentName:"ol"},"The main three reason for using Promise/A+ is Three different states, Value for Fulfilment and for Rejection and thenable object. for more detail see Differences from Promises/A"),(0,s.kt)("li",{parentName:"ol"},"These Promise/A+ organisation occasionally revise and address the corner cases in to new Specification.")),(0,s.kt)("h1",null,"Difference between Promise/A and /A+?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Rejection / Fulfilment method returns thenable object."),(0,s.kt)("li",{parentName:"ol"},"Rejection triggers catch method, if errors thrown.")),(0,s.kt)("p",null,"In short, running continuation-passing style. Let me shoot few bullets with simple diagram on Promises below. "))}f.isMDXComponent=!0},7828:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/js/promises",function(){return r(6177)}])}},function(e){e.O(0,[1329,2358,9774,2888,179],(function(){return t=7828,e(e.s=t);var t}));var t=e.O();_N_E=t}]);