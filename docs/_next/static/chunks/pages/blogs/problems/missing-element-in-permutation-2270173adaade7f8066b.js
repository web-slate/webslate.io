(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{2919:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(5893),i=t(6156),l=(t(7294),t(2465)),a=t(9163);function o(){var e=(0,l.Z)(["\n  display: table-cell;\n"]);return o=function(){return e},e}function s(){var e=(0,l.Z)(["\n  display: table-cell;\n  text-align: right;\n  padding-right: 1em;\n  user-select: none;\n  opacity: 0.5;\n"]);return s=function(){return e},e}function c(){var e=(0,l.Z)(["\n  display: table-row;\n"]);return c=function(){return e},e}function u(){var e=(0,l.Z)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow: scroll;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);return u=function(){return e},e}function f(){var e=(0,l.Z)(["\n  font-family: sans-serif;\n  text-align: center;\n"]);return f=function(){return e},e}var m=a.ZP.div(f()),d=a.ZP.pre(u()),p=a.ZP.div(c()),h=a.ZP.span(s()),g=a.ZP.span(o()),b=t(9235),j=t(5424);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=function(e){var n=e.children,t=e.language,i=void 0===t?"javascript":t;return(0,r.jsx)(m,{children:(0,r.jsx)(b.ZP,x(x({},b.lG),{},{theme:j.Z,code:n.trim(),language:i,children:function(e){var n=e.className,t=e.style,i=e.tokens,l=e.getLineProps,a=e.getTokenProps;return(0,r.jsx)(d,{className:n,style:t,children:i.map((function(e,n){return(0,r.jsxs)(p,x(x({},l({line:e,key:n})),{},{children:[(0,r.jsx)(h,{children:n+1}),(0,r.jsx)(g,{children:e.map((function(e,n){return(0,r.jsx)("span",x({},a({token:e,key:n})),n)}))})]}),n)}))})}}))})}},3042:function(e,n,t){"use strict";var r=t(5893),i=t(7294),l=t(1516),a=t(2105),o=t(2868);n.Z=function(e){var n=e.children,t=e.url,s=(0,i.useCallback)((function(e){e.preventDefault(),l.ZP.outboundLink({label:"Clicked ".concat(n)},(function(){(0,a.WF)(t)}),[o.ei.ExternalLink])}),[t]);return(0,r.jsx)("a",{href:"#",onClick:s,target:"_blank",children:n})}},7610:function(e,n,t){"use strict";t.d(n,{F:function(){return a}});var r=t(5893),i=t(5988),l=t(1664),a=function(e){var n=e.meta,t=e.link,a=e.isBlogPost;return(0,r.jsxs)(r.Fragment,{children:[a?(0,r.jsx)("h1",{className:"jsx-4001257583 "+((a?"great-title":null)||""),children:n.title}):(0,r.jsx)(l.default,{href:t,children:(0,r.jsx)("h1",{className:"jsx-4001257583 "+((a?"great-title":null)||""),children:n.title})}),(0,r.jsxs)("div",{className:"jsx-4001257583 details",children:[a?null:(0,r.jsx)("p",{className:"jsx-4001257583",children:n.description}),(0,r.jsx)("span",{className:"jsx-4001257583",children:n.date}),(0,r.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",n.readTime+" mins read"]})]}),(0,r.jsx)(i.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(e,n,t){"use strict";var r=t(5893),i=t(2465),l=t(9008),a=t(9163),o=t(9232),s=t(1930);function c(){var e=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return c=function(){return e},e}var u=a.ZP.div(c());n.Z=function(e){var n=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(u,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(o.Z,{})]})]})}},2052:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(2465),l=t(7610),a=t(2477);function o(){var e=(0,i.Z)(["\n  margin: 0 35px;\n"]);return o=function(){return e},e}var s=t(9163).ZP.div(o());function c(e){var n=e.children,t=e.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:t.title}),(0,r.jsxs)(s,{children:[(0,r.jsx)(l.F,{meta:t,isBlogPost:!0}),(0,r.jsx)("article",{children:n})]})]})}},9087:function(e,n,t){"use strict";var r=t(6156),i=t(5893),l=t(2105);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.label,t=e.url,r=e.name,a=e.anchor,s={};return t?s.href=t:a?s.href="#".concat((0,l.Md)(n)):r&&(s.name="".concat((0,l.Md)(n))),(0,i.jsx)("a",o(o({},s),{},{children:n}))}},1930:function(e,n,t){"use strict";var r=t(5893),i=t(2465),l=t(1664);function a(){var e=(0,i.Z)(["\n  width: 18%;\n"]);return a=function(){return e},e}var o=t(9163).ZP.div(a());n.Z=function(e){var n=e.type,t=void 0===n?"header-logo":n;return t?(0,r.jsx)(o,{children:(0,r.jsx)(l.default,{href:"/",className:"link",children:(0,r.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:t})})}):(0,r.jsx)(o,{children:(0,r.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),i=t(2465),l=t(7294),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?"/blogs/".concat(e):"/"},o=[{label:"Home",url:"/"},{label:"JavaScript",url:a("js")},{label:"HTML5",url:a("html")},{label:"React",url:a("react")},{label:"Programming",url:a("programming")},{label:"Problems",url:a("problems")},{label:"Data Structures",url:a("data-structures")},{label:"Algorithms",url:a("algorithms")},{label:"About",url:"/about"}];function s(){var e=(0,i.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return s=function(){return e},e}var c=t(9163).ZP.div(s());var u=function(e){var n=e.noStyle,t=void 0===n||n?c:l.Fragment;return(0,r.jsx)(t,{children:o.map((function(e,n){return(0,r.jsxs)("span",{children:[n>0&&" | ",(null===e||void 0===e?void 0:e.label)&&(0,r.jsx)("a",{href:null===e||void 0===e?void 0:e.url,children:null===e||void 0===e?void 0:e.label})]},null===e||void 0===e?void 0:e.label)}))})}},8305:function(e,n,t){"use strict";t.r(n),t.d(n,{meta:function(){return m},default:function(){return h}});var r=t(6156),i=t(7375),l=(t(7294),t(4137)),a=t(2052),o=t(2919),s=t(9087),c=t(3042);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={title:"Missing element in Permutation.",description:"Find the missing element in a given permutation.",date:"Jul 21, 2020",readTime:2},d={meta:m},p=function(e){var n=e.children;return(0,l.kt)(a.Z,{meta:m},n)};function h(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)(p,f(f(f({},d),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An array A consisting of N different integers is given. The array contains integers in the range ","[1..(N + 1)]",", which means that exactly one element is missing.  "),(0,l.kt)("p",null,"Your goal is to find that missing element."),(0,l.kt)("p",null,"Write a function:  "),(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n}\n"),(0,l.kt)("p",null,"that, given an array A, returns the value of the missing element.  "),(0,l.kt)("p",null,"For example, given array A such that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A","[0]"," = 2"),(0,l.kt)("li",{parentName:"ul"},"A","[1]"," = 3"),(0,l.kt)("li",{parentName:"ul"},"A","[2]"," = 1"),(0,l.kt)("li",{parentName:"ul"},"A","[3]"," = 5")),(0,l.kt)("p",null,"the function should return 4, as it is the missing element.  "),(0,l.kt)("p",null,"Write an efficient algorithm for the following assumptions:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"N is an integer within the range ","[0..100,000]",";"),(0,l.kt)("li",{parentName:"ul"},"the elements of A are all distinct;"),(0,l.kt)("li",{parentName:"ul"},"each element of array A is an integer within the range ","[1..(N + 1)]",".")),(0,l.kt)("h2",null,(0,l.kt)(s.Z,{label:"Points to be Taken",name:!0,mdxType:"AnchorLink"})),(0,l.kt)("p",null,"1.1"),(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n    const b = A.sort()\n    for(let i=0;i<=b.length;i++) {\n        if(b[i+1] !== b[i] + 1) {\n            return b[i] + 1\n        }\n    }\n    return ''\n}\n"),(0,l.kt)("p",null,"1.2"),(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n    const n = A.length + 1\n    const sumOfN = Math.floor(n * (n + 1) / 2)\n    const sumOfAll = A.reduce((a, b) => a + b, 0)\n    return sumOfN - sumOfAll\n}\n"),(0,l.kt)("h2",null,(0,l.kt)(s.Z,{label:"Points to be Taken",name:!0,mdxType:"AnchorLink"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Array problem expect empty array condition check and single element check."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)(c.Z,{url:"https://en.wikipedia.org/wiki/Arithmetic_progression",mdxType:"ExternalLink"},"Arithmetic progression"))))}h.isMDXComponent=!0},7442:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/problems/missing-element-in-permutation",function(){return t(8305)}])}},function(e){e.O(0,[329,358,638,774,888,179],(function(){return n=7442,e(e.s=n);var n}));var n=e.O();_N_E=n}]);