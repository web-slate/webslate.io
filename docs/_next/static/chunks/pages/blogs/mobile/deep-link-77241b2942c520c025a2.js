(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1745],{7610:function(e,n,t){"use strict";t.d(n,{F:function(){return s}});var r=t(5893),i=t(5988),l=t(1664),s=function(e){var n=e.meta,t=e.link,s=e.isBlogPost;return(0,r.jsxs)(r.Fragment,{children:[s?(0,r.jsx)("h1",{className:"jsx-4001257583 "+((s?"great-title":null)||""),children:n.title}):(0,r.jsx)(l.default,{href:t,children:(0,r.jsx)("h1",{className:"jsx-4001257583 "+((s?"great-title":null)||""),children:n.title})}),(0,r.jsxs)("div",{className:"jsx-4001257583 details",children:[s?null:(0,r.jsx)("p",{className:"jsx-4001257583",children:n.description}),(0,r.jsx)("span",{className:"jsx-4001257583",children:n.date}),(0,r.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",n.readTime+" mins read"]})]}),(0,r.jsx)(i.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(e,n,t){"use strict";var r=t(5893),i=t(2465),l=t(9008),s=t(9163),a=t(9232),o=t(1930);function c(){var e=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return c=function(){return e},e}var u=s.ZP.div(c());n.Z=function(e){var n=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(u,{children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(a.Z,{})]})]})}},2052:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(2465),l=t(7610),s=t(2477);function a(){var e=(0,i.Z)(["\n  margin: 0 35px;\n"]);return a=function(){return e},e}var o=t(9163).ZP.div(a());function c(e){var n=e.children,t=e.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{title:t.title}),(0,r.jsxs)(o,{children:[(0,r.jsx)(l.F,{meta:t,isBlogPost:!0}),(0,r.jsx)("article",{children:n})]})]})}},1930:function(e,n,t){"use strict";var r=t(5893),i=t(2465),l=t(1664);function s(){var e=(0,i.Z)(["\n  width: 18%;\n"]);return s=function(){return e},e}var a=t(9163).ZP.div(s());n.Z=function(e){var n=e.type,t=void 0===n?"header-logo":n;return t?(0,r.jsx)(a,{children:(0,r.jsx)(l.default,{href:"/",className:"link",children:(0,r.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:t})})}):(0,r.jsx)(a,{children:(0,r.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),i=t(2465),l=t(7294),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?"/blogs/".concat(e):"/"},a=[{label:"Home",url:"/"},{label:"JavaScript",url:s("js")},{label:"HTML5",url:s("html")},{label:"React",url:s("react")},{label:"Programming",url:s("programming")},{label:"About",url:"/about"}];function o(){var e=(0,i.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return o=function(){return e},e}var c=t(9163).ZP.div(o());var u=function(e){var n=e.noStyle,t=void 0===n||n?c:l.Fragment;return(0,r.jsx)(t,{children:a.map((function(e,n){return(0,r.jsxs)("span",{children:[n>0&&" | ",(null===e||void 0===e?void 0:e.label)&&(0,r.jsx)("a",{href:null===e||void 0===e?void 0:e.url,children:null===e||void 0===e?void 0:e.label})]},null===e||void 0===e?void 0:e.label)}))})}},9658:function(e,n,t){"use strict";t.r(n),t.d(n,{meta:function(){return c},default:function(){return f}});var r=t(6156),i=t(7375),l=(t(7294),t(4137)),s=t(2052);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c={title:"Deep Linking",description:"Understand deep links in 5 minutes",date:"Jul 21, 2020",readTime:2},u={meta:c},d=function(e){var n=e.children;return(0,l.kt)(s.Z,{meta:c},n)};function f(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)(d,o(o(o({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",null,"Coming soon"))}f.isMDXComponent=!0},8635:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/mobile/deep-link",function(){return t(9658)}])}},function(e){e.O(0,[1329,2358,9774,2888,179],(function(){return n=8635,e(e.s=n);var n}));var n=e.O();_N_E=n}]);