(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{7610:function(e,t,r){"use strict";r.d(t,{F:function(){return a}});var n=r(5893),i=r(5988),l=r(1664),a=function(e){var t=e.meta,r=e.link,a=e.isBlogPost;return(0,n.jsxs)(n.Fragment,{children:[a?(0,n.jsx)("h1",{className:"jsx-4001257583 "+((a?"great-title":null)||""),children:t.title}):(0,n.jsx)(l.default,{href:r,children:(0,n.jsx)("h1",{className:"jsx-4001257583 "+((a?"great-title":null)||""),children:t.title})}),(0,n.jsxs)("div",{className:"jsx-4001257583 details",children:[a?null:(0,n.jsx)("p",{className:"jsx-4001257583",children:t.description}),(0,n.jsx)("span",{className:"jsx-4001257583",children:t.date}),(0,n.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",t.readTime+" mins read"]})]}),(0,n.jsx)(i.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(e,t,r){"use strict";var n=r(5893),i=r(2465),l=r(9008),a=r(9163),s=r(9232),c=r(1930);function o(){var e=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return o=function(){return e},e}var u=a.ZP.div(o());t.Z=function(e){var t=e.title;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.default,{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsxs)(u,{children:[(0,n.jsx)(c.Z,{}),(0,n.jsx)(s.Z,{})]})]})}},2052:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),i=r(2465),l=r(7610),a=r(2477);function s(){var e=(0,i.Z)(["\n  margin: 0 35px;\n"]);return s=function(){return e},e}var c=r(9163).ZP.div(s());function o(e){var t=e.children,r=e.meta;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:r.title}),(0,n.jsxs)(c,{children:[(0,n.jsx)(l.F,{meta:r,isBlogPost:!0}),(0,n.jsx)("article",{children:t})]})]})}},1930:function(e,t,r){"use strict";var n=r(5893),i=r(2465),l=r(1664);function a(){var e=(0,i.Z)(["\n  width: 18%;\n"]);return a=function(){return e},e}var s=r(9163).ZP.div(a());t.Z=function(e){var t=e.type,r=void 0===t?"header-logo":t;return r?(0,n.jsx)(s,{children:(0,n.jsx)(l.default,{href:"/",className:"link",children:(0,n.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:r})})}):(0,n.jsx)(s,{children:(0,n.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),i=r(2465),l=r(7294),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?"/blogs/".concat(e):"/"},s=[{label:"Home",url:"/"},{label:"JavaScript",url:a("js")},{label:"HTML5",url:a("html")},{label:"React",url:a("react")},{label:"Programming",url:a("programming")},{label:"Problems",url:a("problems")},{label:"Data Structures",url:a("data-structures")},{label:"Algorithms",url:a("algorithms")},{label:"About",url:"/about"}];function c(){var e=(0,i.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return c=function(){return e},e}var o=r(9163).ZP.div(c());var u=function(e){var t=e.noStyle,r=void 0===t||t?o:l.Fragment;return(0,n.jsx)(r,{children:s.map((function(e,t){return(0,n.jsxs)("span",{children:[t>0&&" | ",(null===e||void 0===e?void 0:e.label)&&(0,n.jsx)("a",{href:null===e||void 0===e?void 0:e.url,children:null===e||void 0===e?void 0:e.label})]},null===e||void 0===e?void 0:e.label)}))})}},687:function(e,t,r){"use strict";r.r(t),r.d(t,{meta:function(){return o},default:function(){return f}});var n=r(6156),i=r(7375),l=(r(7294),r(4137)),a=r(2052);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o={title:"useEffect Basics (Part 1)",description:"One of the good Features in React 16.x",date:"Jul 21, 2020",readTime:2},u={meta:o},d=function(e){var t=e.children;return(0,l.kt)(a.Z,{meta:o},t)};function f(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,l.kt)(d,c(c(c({},u),r),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Welcome to useEffect basics article"))}f.isMDXComponent=!0},8451:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/react/use-effect",function(){return r(687)}])}},function(e){e.O(0,[329,358,774,888,179],(function(){return t=8451,e(e.s=t);var t}));var t=e.O();_N_E=t}]);