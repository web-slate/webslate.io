(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{2919:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(5893),i=t(6156),a=(t(7294),t(2465)),l=t(9163);function o(){var e=(0,a.Z)(["\n  display: table-cell;\n"]);return o=function(){return e},e}function s(){var e=(0,a.Z)(["\n  display: table-cell;\n  text-align: right;\n  padding-right: 1em;\n  user-select: none;\n  opacity: 0.5;\n"]);return s=function(){return e},e}function c(){var e=(0,a.Z)(["\n  display: table-row;\n"]);return c=function(){return e},e}function u(){var e=(0,a.Z)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow: scroll;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);return u=function(){return e},e}function d(){var e=(0,a.Z)(["\n  font-family: sans-serif;\n  text-align: center;\n"]);return d=function(){return e},e}var f=l.ZP.div(d()),p=l.ZP.pre(u()),m=l.ZP.div(c()),h=l.ZP.span(s()),b=l.ZP.span(o()),j=t(9235),g=t(5424);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=function(e){var n=e.children,t=e.language,i=void 0===t?"javascript":t;return(0,r.jsx)(f,{children:(0,r.jsx)(j.ZP,k(k({},j.lG),{},{theme:g.Z,code:n.trim(),language:i,children:function(e){var n=e.className,t=e.style,i=e.tokens,a=e.getLineProps,l=e.getTokenProps;return(0,r.jsx)(p,{className:n,style:t,children:i.map((function(e,n){return(0,r.jsxs)(m,k(k({},a({line:e,key:n})),{},{children:[(0,r.jsx)(h,{children:n+1}),(0,r.jsx)(b,{children:e.map((function(e,n){return(0,r.jsx)("span",k({},l({token:e,key:n})),n)}))})]}),n)}))})}}))})}},3042:function(e,n,t){"use strict";var r=t(5893),i=t(7294),a=t(1516),l=t(2105),o=t(2868);n.Z=function(e){var n=e.children,t=e.url,s=(0,i.useCallback)((function(e){e.preventDefault(),a.ZP.outboundLink({label:"Clicked ".concat(n)},(function(){(0,l.WF)(t)}),[o.ei.ExternalLink])}),[t]);return(0,r.jsx)("a",{href:"#",onClick:s,target:"_blank",children:n})}},7610:function(e,n,t){"use strict";t.d(n,{F:function(){return l}});var r=t(5893),i=t(5988),a=t(1664),l=function(e){var n=e.meta,t=e.link,l=e.isBlogPost;return(0,r.jsxs)(r.Fragment,{children:[l?(0,r.jsx)("h1",{className:"jsx-4001257583 "+((l?"great-title":null)||""),children:n.title}):(0,r.jsx)(a.default,{href:t,children:(0,r.jsx)("h1",{className:"jsx-4001257583 "+((l?"great-title":null)||""),children:n.title})}),(0,r.jsxs)("div",{className:"jsx-4001257583 details",children:[l?null:(0,r.jsx)("p",{className:"jsx-4001257583",children:n.description}),(0,r.jsx)("span",{className:"jsx-4001257583",children:n.date}),(0,r.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",n.readTime+" mins read"]})]}),(0,r.jsx)(i.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(e,n,t){"use strict";var r=t(5893),i=t(2465),a=t(9008),l=t(9163),o=t(9232),s=t(1930);function c(){var e=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return c=function(){return e},e}var u=l.ZP.div(c());n.Z=function(e){var n=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(u,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(o.Z,{})]})]})}},2052:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(2465),a=t(7610),l=t(2477);function o(){var e=(0,i.Z)(["\n  margin: 0 35px;\n"]);return o=function(){return e},e}var s=t(9163).ZP.div(o());function c(e){var n=e.children,t=e.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{title:t.title}),(0,r.jsxs)(s,{children:[(0,r.jsx)(a.F,{meta:t,isBlogPost:!0}),(0,r.jsx)("article",{children:n})]})]})}},9087:function(e,n,t){"use strict";var r=t(6156),i=t(5893),a=t(2105);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.label,t=e.url,r=e.name,l=e.anchor,s={};return t?s.href=t:l?s.href="#".concat((0,a.Md)(n)):r&&(s.name="".concat((0,a.Md)(n))),(0,i.jsx)("a",o(o({},s),{},{children:n}))}},1930:function(e,n,t){"use strict";var r=t(5893),i=t(2465),a=t(1664);function l(){var e=(0,i.Z)(["\n  width: 18%;\n"]);return l=function(){return e},e}var o=t(9163).ZP.div(l());n.Z=function(e){var n=e.type,t=void 0===n?"header-logo":n;return t?(0,r.jsx)(o,{children:(0,r.jsx)(a.default,{href:"/",className:"link",children:(0,r.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:t})})}):(0,r.jsx)(o,{children:(0,r.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),i=t(2465),a=t(7294),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?"/blogs/".concat(e):"/"},o=[{label:"Home",url:"/"},{label:"JavaScript",url:l("js")},{label:"HTML5",url:l("html")},{label:"React",url:l("react")},{label:"Programming",url:l("programming")},{label:"Problems",url:l("problems")},{label:"Data Structures",url:l("data-structures")},{label:"Algorithms",url:l("algorithms")},{label:"About",url:"/about"}];function s(){var e=(0,i.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return s=function(){return e},e}var c=t(9163).ZP.div(s());var u=function(e){var n=e.noStyle,t=void 0===n||n?c:a.Fragment;return(0,r.jsx)(t,{children:o.map((function(e,n){return(0,r.jsxs)("span",{children:[n>0&&" | ",(null===e||void 0===e?void 0:e.label)&&(0,r.jsx)("a",{href:null===e||void 0===e?void 0:e.url,children:null===e||void 0===e?void 0:e.label})]},null===e||void 0===e?void 0:e.label)}))})}},103:function(e,n,t){"use strict";t.r(n),t.d(n,{meta:function(){return f},default:function(){return h}});var r=t(6156),i=t(7375),a=(t(7294),t(4137)),l=t(2052),o=t(2919),s=t(3042),c=t(9087);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f={title:"Palindrome Solutions",description:"Palindrome is in reverse also same",date:"Jul 21, 2020",readTime:2},p={meta:f},m=function(e){var n=e.children;return(0,a.kt)(l.Z,{meta:f},n)};function h(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)(m,d(d(d({},p),t),{},{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#history"}),"History"))),(0,a.kt)("p",null,"PALINDROMES means PALIN (Back again) and DROMES (Running)"),(0,a.kt)("h2",null,(0,a.kt)(c.Z,{label:"History",name:!0,mdxType:"AnchorLink"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Palindrome comes from ancient greek"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/Sator_Square",mdxType:"ExternalLink"},"Sator Square")," is one of the famous piece which is two dimensional")),(0,a.kt)("p",null,"Below is the basic coding solution written in javascript."),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},'\nfunction isPalindrome(S) {\n  let iteration = Math.round(S.length / 2);\n  let backward = S.length;\n  for (let forward = 0; forward < iteration; forward++) {\n    backward--;\n    if (S[forward].toLowerCase() !== S[backward].toLowerCase()) {\n      return "NO";\n    }\n  }\n  return "YES";\n}\n'),(0,a.kt)("h2",null,"Some Words"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Detartrated (Longest incidental palindrome)"),(0,a.kt)("li",{parentName:"ol"},"WOW"),(0,a.kt)("li",{parentName:"ol"},"KAYAK"),(0,a.kt)("li",{parentName:"ol"},"Symmys - (Annual awards)"),(0,a.kt)("li",{parentName:"ol"},"RADAR"),(0,a.kt)("li",{parentName:"ol"},"EVIL OLIVE"),(0,a.kt)("li",{parentName:"ol"},"TACO CAT"),(0,a.kt)("li",{parentName:"ol"},"HUH"),(0,a.kt)("li",{parentName:"ol"},"DO GEESE SEE GOD"),(0,a.kt)("li",{parentName:"ol"},"BORE ME ROB"),(0,a.kt)("li",{parentName:"ol"},"RISE SIR"),(0,a.kt)("li",{parentName:"ol"},"MADAM"),(0,a.kt)("li",{parentName:"ol"},"DIVE VID"),(0,a.kt)("li",{parentName:"ol"},"Tattarrattat (Sound of knocking at the door used by ",(0,a.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/James_Joyce",mdxType:"ExternalLink"},"James Joyce")," in ",(0,a.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/Ulysses_(novel)",mdxType:"ExternalLink"},"Ulysses"),", modernist novel)")),(0,a.kt)("h2",null,"Some Phrases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Top spot"),(0,a.kt)("li",{parentName:"ol"},"Able was i ere I Saw Elba"),(0,a.kt)("li",{parentName:"ol"},"A man, A Plan, A Canal: Panama")))}h.isMDXComponent=!0},4814:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/problems/palindrome",function(){return t(103)}])}},function(e){e.O(0,[329,358,638,774,888,179],(function(){return n=4814,e(e.s=n);var n}));var n=e.O();_N_E=n}]);