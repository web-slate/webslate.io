(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3696],{2919:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var r=t(5893),i=t(6156),l=(t(7294),t(2465)),a=t(9163);function o(){var n=(0,l.Z)(["\n  display: table-cell;\n"]);return o=function(){return n},n}function c(){var n=(0,l.Z)(["\n  display: table-cell;\n  text-align: right;\n  padding-right: 1em;\n  user-select: none;\n  opacity: 0.5;\n"]);return c=function(){return n},n}function s(){var n=(0,l.Z)(["\n  display: table-row;\n"]);return s=function(){return n},n}function u(){var n=(0,l.Z)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow: scroll;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);return u=function(){return n},n}function f(){var n=(0,l.Z)(["\n  font-family: sans-serif;\n  text-align: center;\n"]);return f=function(){return n},n}var d=a.ZP.div(f()),p=a.ZP.pre(u()),m=a.ZP.div(s()),h=a.ZP.span(c()),g=a.ZP.span(o()),b=t(9235),j=t(5424);function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k=function(n){var e=n.children,t=n.language,i=void 0===t?"javascript":t;return(0,r.jsx)(d,{children:(0,r.jsx)(b.ZP,x(x({},b.lG),{},{theme:j.Z,code:e.toString(),language:i,children:function(n){var e=n.className,t=n.style,i=n.tokens,l=n.getLineProps,a=n.getTokenProps;return(0,r.jsx)(p,{className:e,style:t,children:i.map((function(n,e){return(0,r.jsxs)(m,x(x({},l({line:n,key:e})),{},{children:[(0,r.jsx)(h,{children:e+1}),(0,r.jsx)(g,{children:n.map((function(n,e){return(0,r.jsx)("span",x({},a({token:n,key:e})),e)}))})]}),e)}))})}}))})}},3042:function(n,e,t){"use strict";var r=t(5893),i=t(7294),l=t(1516),a=t(2105),o=t(2868);e.Z=function(n){var e=n.children,t=n.url,c=(0,i.useCallback)((function(n){n.preventDefault(),l.ZP.outboundLink({label:"Clicked ".concat(e)},(function(){(0,a.WF)(t)}),[o.ei.ExternalLink])}),[t]);return(0,r.jsx)("a",{href:"#",onClick:c,target:"_blank",children:e})}},7610:function(n,e,t){"use strict";t.d(e,{F:function(){return a}});var r=t(5893),i=t(5988),l=t(1664),a=function(n){var e=n.meta,t=n.link,a=n.isBlogPost;return(0,r.jsxs)(r.Fragment,{children:[a?(0,r.jsx)("h1",{className:"jsx-4001257583 "+((a?"great-title":null)||""),children:e.title}):(0,r.jsx)(l.default,{href:t,children:(0,r.jsx)("h1",{className:"jsx-4001257583 "+((a?"great-title":null)||""),children:e.title})}),(0,r.jsxs)("div",{className:"jsx-4001257583 details",children:[a?null:(0,r.jsx)("p",{className:"jsx-4001257583",children:e.description}),(0,r.jsx)("span",{className:"jsx-4001257583",children:e.date}),(0,r.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",e.readTime+" mins read"]})]}),(0,r.jsx)(i.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(n,e,t){"use strict";var r=t(5893),i=t(2465),l=t(9008),a=t(9163),o=t(9232),c=t(1930);function s(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return s=function(){return n},n}var u=a.ZP.div(s());e.Z=function(n){var e=n.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(u,{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(o.Z,{})]})]})}},2052:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(5893),i=t(2465),l=t(7610),a=t(2477);function o(){var n=(0,i.Z)(["\n  margin: 0 35px;\n"]);return o=function(){return n},n}var c=t(9163).ZP.div(o());function s(n){var e=n.children,t=n.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:t.title}),(0,r.jsxs)(c,{children:[(0,r.jsx)(l.F,{meta:t,isBlogPost:!0}),(0,r.jsx)("article",{children:e})]})]})}},9087:function(n,e,t){"use strict";var r=t(6156),i=t(5893),l=t(2105);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.label,t=n.url,r=n.name,a=n.anchor,c={};return t?c.href=t:a?c.href="#".concat((0,l.Md)(e)):r&&(c.name="".concat((0,l.Md)(e))),(0,i.jsx)("a",o(o({},c),{},{children:e}))}},1930:function(n,e,t){"use strict";var r=t(5893),i=t(2465),l=t(1664);function a(){var n=(0,i.Z)(["\n  width: 18%;\n"]);return a=function(){return n},n}var o=t(9163).ZP.div(a());e.Z=function(n){var e=n.type,t=void 0===e?"header-logo":e;return t?(0,r.jsx)(o,{children:(0,r.jsx)(l.default,{href:"/",className:"link",children:(0,r.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:t})})}):(0,r.jsx)(o,{children:(0,r.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(5893),i=t(2465),l=t(7294),a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n?"/blogs/".concat(n):"/"},o=[{label:"Home",url:"/"},{label:"JavaScript",url:a("js")},{label:"HTML5",url:a("html")},{label:"React",url:a("react")},{label:"Programming",url:a("programming")},{label:"About",url:"/about"}];function c(){var n=(0,i.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return c=function(){return n},n}var s=t(9163).ZP.div(c());var u=function(n){var e=n.noStyle,t=void 0===e||e?s:l.Fragment;return(0,r.jsx)(t,{children:o.map((function(n,e){return(0,r.jsxs)("span",{children:[e>0&&" | ",(null===n||void 0===n?void 0:n.label)&&(0,r.jsx)("a",{href:null===n||void 0===n?void 0:n.url,children:null===n||void 0===n?void 0:n.label})]},null===n||void 0===n?void 0:n.label)}))})}},8305:function(n,e,t){"use strict";t.r(e),t.d(e,{meta:function(){return d},default:function(){return h}});var r=t(6156),i=t(7375),l=(t(7294),t(4137)),a=t(2052),o=t(2919),c=t(9087),s=t(3042);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var d={title:"Missing element in Permutation.",description:"Find the missing element in a given permutation.",date:"Jul 21, 2020",readTime:2},p={meta:d},m=function(n){var e=n.children;return(0,l.kt)(a.Z,{meta:d},e)};function h(n){var e=n.components,t=(0,i.Z)(n,["components"]);return(0,l.kt)(m,f(f(f({},p),t),{},{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An array A consisting of N different integers is given. The array contains integers in the range ","[1..(N + 1)]",", which means that exactly one element is missing.  "),(0,l.kt)("p",null,"Your goal is to find that missing element."),(0,l.kt)("p",null,"Write a function:  "),(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n}\n"),(0,l.kt)("p",null,"that, given an array A, returns the value of the missing element.  "),(0,l.kt)("p",null,"For example, given array A such that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A","[0]"," = 2"),(0,l.kt)("li",{parentName:"ul"},"A","[1]"," = 3"),(0,l.kt)("li",{parentName:"ul"},"A","[2]"," = 1"),(0,l.kt)("li",{parentName:"ul"},"A","[3]"," = 5")),(0,l.kt)("p",null,"the function should return 4, as it is the missing element.  "),(0,l.kt)("p",null,"Write an efficient algorithm for the following assumptions:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"N is an integer within the range ","[0..100,000]",";"),(0,l.kt)("li",{parentName:"ul"},"the elements of A are all distinct;"),(0,l.kt)("li",{parentName:"ul"},"each element of array A is an integer within the range ","[1..(N + 1)]",".")),(0,l.kt)("h2",null,(0,l.kt)(c.Z,{label:"Points to be Taken",name:!0,mdxType:"AnchorLink"})),(0,l.kt)("p",null,"1.1"),(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n    const b = A.sort()\n    for(let i=0;i<=b.length;i++) {\n        if(b[i+1] !== b[i] + 1) {\n            return b[i] + 1\n        }\n    }\n    return ''\n}\n"),(0,l.kt)("p",null,"1.2"),(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n    const n = A.length + 1\n    const sumOfN = Math.floor(n * (n + 1) / 2)\n    const sumOfAll = A.reduce((a, b) => a + b, 0)\n    return sumOfN - sumOfAll\n}\n"),(0,l.kt)("h2",null,(0,l.kt)(c.Z,{label:"Points to be Taken",name:!0,mdxType:"AnchorLink"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Array problem expect empty array condition check and single element check."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/Arithmetic_progression",mdxType:"ExternalLink"},"Arithmetic progression"))))}h.isMDXComponent=!0},7442:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/problems/missing-element-in-permutation",function(){return t(8305)}])}},function(n){n.O(0,[1329,2358,4638,9774,2888,179],(function(){return e=7442,n(n.s=e);var e}));var e=n.O();_N_E=e}]);