(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{2919:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var r=n(5893),a=n(6156),i=(n(7294),n(2465)),l=n(9163);function o(){var t=(0,i.Z)(["\n  display: table-cell;\n"]);return o=function(){return t},t}function s(){var t=(0,i.Z)(["\n  display: table-cell;\n  text-align: right;\n  padding-right: 1em;\n  user-select: none;\n  opacity: 0.5;\n"]);return s=function(){return t},t}function c(){var t=(0,i.Z)(["\n  display: table-row;\n"]);return c=function(){return t},t}function u(){var t=(0,i.Z)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow: scroll;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);return u=function(){return t},t}function m(){var t=(0,i.Z)(["\n  font-family: sans-serif;\n  text-align: center;\n"]);return m=function(){return t},t}var p=l.ZP.div(m()),d=l.ZP.pre(u()),h=l.ZP.div(c()),k=l.ZP.span(s()),f=l.ZP.span(o()),g=n(9235),b=n(5424);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(t){var e=t.children,n=t.language,a=void 0===n?"javascript":n;return(0,r.jsx)(p,{children:(0,r.jsx)(g.ZP,y(y({},g.lG),{},{theme:b.Z,code:e.trim(),language:a,children:function(t){var e=t.className,n=t.style,a=t.tokens,i=t.getLineProps,l=t.getTokenProps;return(0,r.jsx)(d,{className:e,style:n,children:a.map((function(t,e){return(0,r.jsxs)(h,y(y({},i({line:t,key:e})),{},{children:[(0,r.jsx)(k,{children:e+1}),(0,r.jsx)(f,{children:t.map((function(t,e){return(0,r.jsx)("span",y({},l({token:t,key:e})),e)}))})]}),e)}))})}}))})}},3042:function(t,e,n){"use strict";var r=n(5893),a=n(7294),i=n(1516),l=n(2105),o=n(2868);e.Z=function(t){var e=t.children,n=t.url,s=(0,a.useCallback)((function(t){t.preventDefault(),i.ZP.outboundLink({label:"Clicked ".concat(e)},(function(){(0,l.WF)(n)}),[o.ei.ExternalLink])}),[n]);return(0,r.jsx)("a",{href:"#",onClick:s,target:"_blank",children:e})}},7610:function(t,e,n){"use strict";n.d(e,{F:function(){return l}});var r=n(5893),a=n(5988),i=n(1664),l=function(t){var e=t.meta,n=t.link,l=t.isBlogPost;return(0,r.jsxs)(r.Fragment,{children:[l?(0,r.jsx)("h1",{className:"jsx-4001257583 "+((l?"great-title":null)||""),children:e.title}):(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("h1",{className:"jsx-4001257583 "+((l?"great-title":null)||""),children:e.title})}),(0,r.jsxs)("div",{className:"jsx-4001257583 details",children:[l?null:(0,r.jsx)("p",{className:"jsx-4001257583",children:e.description}),(0,r.jsx)("span",{className:"jsx-4001257583",children:e.date}),(0,r.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",e.readTime+" mins read"]})]}),(0,r.jsx)(a.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(t,e,n){"use strict";var r=n(5893),a=n(2465),i=n(9008),l=n(9163),o=n(9232),s=n(1930);function c(){var t=(0,a.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return c=function(){return t},t}var u=l.ZP.div(c());e.Z=function(t){var e=t.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(u,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(o.Z,{})]})]})}},2052:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(5893),a=n(2465),i=n(7610),l=n(2477);function o(){var t=(0,a.Z)(["\n  margin: 0 35px;\n"]);return o=function(){return t},t}var s=n(9163).ZP.div(o());function c(t){var e=t.children,n=t.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{title:n.title}),(0,r.jsxs)(s,{children:[(0,r.jsx)(i.F,{meta:n,isBlogPost:!0}),(0,r.jsx)("article",{children:e})]})]})}},1930:function(t,e,n){"use strict";var r=n(5893),a=n(2465),i=n(1664);function l(){var t=(0,a.Z)(["\n  width: 18%;\n"]);return l=function(){return t},t}var o=n(9163).ZP.div(l());e.Z=function(t){var e=t.type,n=void 0===e?"header-logo":e;return n?(0,r.jsx)(o,{children:(0,r.jsx)(i.default,{href:"/",className:"link",children:(0,r.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:n})})}):(0,r.jsx)(o,{children:(0,r.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(5893),a=n(2465),i=n(7294),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t?"/blogs/".concat(t):"/"},o=[{label:"Home",url:"/"},{label:"JavaScript",url:l("js")},{label:"HTML5",url:l("html")},{label:"React",url:l("react")},{label:"Programming",url:l("programming")},{label:"Problems",url:l("problems")},{label:"Data Structures",url:l("data-structures")},{label:"Algorithms",url:l("algorithms")},{label:"About",url:"/about"}];function s(){var t=(0,a.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return s=function(){return t},t}var c=n(9163).ZP.div(s());var u=function(t){var e=t.noStyle,n=void 0===e||e?c:i.Fragment;return(0,r.jsx)(n,{children:o.map((function(t,e){return(0,r.jsxs)("span",{children:[e>0&&" | ",(null===t||void 0===t?void 0:t.label)&&(0,r.jsx)("a",{href:null===t||void 0===t?void 0:t.url,children:null===t||void 0===t?void 0:t.label})]},null===t||void 0===t?void 0:t.label)}))})}},3366:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return m},default:function(){return h}});var r=n(6156),a=n(7375),i=(n(7294),n(4137)),l=n(2052),o=n(2919),s=n(3042);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={title:"Fibonacci Series",description:"Fibonacci numbers, commonly denoted Fn sequence",date:"Aug 7, 2021",readTime:10},p={meta:m},d=function(t){var e=t.children;return(0,i.kt)(l.Z,{meta:m},e)};function h(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)(d,u(u(u({},p),n),{},{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#history"}),"History"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#problem-of-rabbits"}),"Problem of Rabbits")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#properties"}),"Properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#solutions"}),"Solutions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#recursive"}),"Recursive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#dynamic-programming"}),"Dynamic Programming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#power-of-matrix-approach"}),"Power of Matrix Approach")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#using-binets-formula"}),"Using Binet's Formula")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#other-facts"}),"Other Facts"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#planets-activity"}),"Planets Activity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#golden-ratio"}),"Golden Ratio (Phi)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#fibonacci-extension"}),"Fibonacci Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#fibonacci-retracement"}),"Fibonacci Retracement"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones.")),(0,i.kt)("h2",null,(0,i.kt)("a",{name:"history"},"History")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/Fibonacci",mdxType:"ExternalLink"},"Leonardo Bonacci"),", Italian Mathemetician from the Republic of Pisa studied with Muslim schoolmaster who introduced him to the Hindu-Arabic system of Enumeration along with computation. later he investigated various arithmetic sytems in Egypt, France, Greece, Rome and Syria."),(0,i.kt)("li",{parentName:"ol"},"In 1202, he published his ",(0,i.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/Liber_Abaci",mdxType:"ExternalLink"},"Liber Abaci")," (Book of Abacus), Practice of Geometry (1220), Book of Square Numbers (1225) and others etc."),(0,i.kt)("li",{parentName:"ol"},"This sequence of numbers (0,1,1,2,3,5,8,13,21,34...) called Fibonacci Sequence which is contraction of Filius Bonacci (son of Bonacci).")),(0,i.kt)("h3",null,(0,i.kt)("a",{name:"problem-of-rabbits"},"Problem of Rabbits")),(0,i.kt)("p",null,"Problem is about a person who has a pair of newborn rabbits (different gender). here problem to determine the numbers of pairs after a year. at the end of each month, a newborn pair grows to maturity. "),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Rabbits Population per year."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",u({parentName:"tr"},{align:null})),(0,i.kt)("th",u({parentName:"tr"},{align:"center"}),"Newborn"),(0,i.kt)("th",u({parentName:"tr"},{align:"right"}),"Matured"),(0,i.kt)("th",u({parentName:"tr"},{align:"right"}),"Total"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Jan 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"1"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"0"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Feb 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"0"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"1"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Mar 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"1"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"1"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Apr 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"1"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"2"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"May 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"2"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"3"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Jun 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"3"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"5"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Jul 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"5"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"8"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"13")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Aug 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"8"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"13"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"21")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Sep 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"13"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"21"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"34")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Oct 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"21"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"34"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"55")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Nov 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"34"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"55"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"89")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Dec 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"55"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"89"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"144")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Jan 1"),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"89"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"144"),(0,i.kt)("td",u({parentName:"tr"},{align:"right"}),"233")))),(0,i.kt)("hr",null),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/X1L8XMTi_Vw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("h2",null,(0,i.kt)("a",{name:"properties"},"Properties")),(0,i.kt)("p",null,"Finding the great common divisor of F5 = 5 and F6 = 8 is 1. This is due to the fact that only positive integer that divide F5 = 5 are 1 and 5 (denoted as gcd(F5, F6) = 1 likewise, F6 = 8 are 1,2,4 and 8 (denoted as gcd(F9, F10) = 1) there are common properties available. lets look at them."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"For n>=0, GCD(F",(0,i.kt)("sub",null,"n"),", F",(0,i.kt)("sub",null,"n+1"),") = 1"),(0,i.kt)("li",{parentName:"ol"},"For n>=0, GCD(F",(0,i.kt)("sub",null,"n"),", F",(0,i.kt)("sub",null,"n+2"),") = 1"),(0,i.kt)("li",{parentName:"ol"},"Sum of any six consecutive fibonacci numbers is divisible by 4"),(0,i.kt)("li",{parentName:"ol"},"Sum of 10 consecutive fibonacci numbers is divisible by 11"),(0,i.kt)("li",{parentName:"ol"},"and there is five more properties until 9.")),(0,i.kt)("h2",null,(0,i.kt)("a",{name:"solutions"},"Solutions")),(0,i.kt)("p",null,"There is various kinds of approaches in order to get this sequence and there is many solutions available. lets see each of them with solutions written in javascript.\nBefore, lets look at the formulae."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"F",(0,i.kt)("sub",null,"0")," = 0, F",(0,i.kt)("sub",null,"1")," = 1 (initial conditions)"),(0,i.kt)("li",{parentName:"ol"},"Fn = F",(0,i.kt)("sub",null,"n-1")," + F",(0,i.kt)("sub",null,"n-2"),", n>=2 (Recurrence Relation)")),(0,i.kt)("h3",null,"1. ",(0,i.kt)("a",{name:"properties"},"Recursive Approach")),(0,i.kt)("p",null,"Basically, this approach call itself creating more and more branches of the tree until it hits the base case.\nBelow is the recursive solution in Javascript."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Time Complexity:")," O(2",(0,i.kt)("sup",null,"n"),") (exponential time). ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Space Complexity:")," O(n) considering function call stack size, otherwise O(1)."),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction fib_1(n) {\n  if (n < 2) {\n    return n\n  }\n  return fib_1(n - 1) + fib_1(n - 2)\n}\n".trim()),(0,i.kt)("h3",null,"2. ",(0,i.kt)("a",{name:"dynamic-programming"},"Dynamic Programming")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. "),(0,i.kt)("li",{parentName:"ol"},"The idea is to simply store the results of sub problems to prevent re-computations of same inputs."),(0,i.kt)("li",{parentName:"ol"},"This helps to reduces time complexities from exponential to polynomial.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Time Complexity:")," O(n). ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Space Complexity:")," O(1). "),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction fib_2(n) {\n  let a = 0, b = 1, c, i;\n  if (n == 0)\n    return a;\n  for (i = 2; i <= n; i++) {\n    c = a + b;\n    a = b;\n    b = c;\n  }\n  return b;\n}\n".trim()),(0,i.kt)("h3",null,"3. ",(0,i.kt)("a",{name:"power-of-matrix-approach"},"Power of Matrix Approach")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Time Complexity:")," O(Logn). ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Space Complexity:")," O(1) or O(Logn) on function call stack size consideration. "),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction fib_3(n) {\n  const F = [[1, 1], [1, 0]];\n  if (n == 0)\n    return 0;\n  power(F, n - 1);\n  return F[0][0];\n}\n// Helper function that multiplies 2\n// matrices F and M of size 2*2, and\n// puts the multiplication result\n// back to F[][]\nfunction multiply(F, M) {\n  const x = F[0][0] * M[0][0] + F[0][1] * M[1][0];\n  const y = F[0][0] * M[0][1] + F[0][1] * M[1][1];\n  const z = F[1][0] * M[0][0] + F[1][1] * M[1][0];\n  const w = F[1][0] * M[0][1] + F[1][1] * M[1][1];\n  F[0][0] = x;\n  F[0][1] = y;\n  F[1][0] = z;\n  F[1][1] = w;\n}\n// Helper function that calculates F[][]\n// raise to the power n and puts the\n// result in F[][]\nfunction power(F, n) {\n  const M = [[1, 1], [1, 0]];\n  // n - 1 times multiply the\n  // matrix to {{1,0},{0,1}}\n  for (let i = 2; i <= n; i++)\n    multiply(F, M);\n}\n// Optimized version of power() in method 4 */\nfunction power(F, n) {\n  if (n == 0 || n == 1)\n    return;\n  const M = [[1, 1], [1, 0]];\n  power(F, n / 2);\n  multiply(F, F);\n  if (n % 2 != 0)\n    multiply(F, M);\n}\n".trim()),(0,i.kt)("h3",null,"4 ",(0,i.kt)("a",{name:"using-binets-formula"},"Using Binet's Formula")),(0,i.kt)("p",null,"Binet formula, sums, combinatorial representations and generating function of the generalized Fibonacci -numbers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Time Complexity:")," O(logn), this is because calculating phi^n takes logn time.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Space Complexity:")," O(1)"),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction fib_4(n) {\n  let phi = (1 + Math.sqrt(5)) / 2;\n  return Math.round(Math.pow(phi, n) / Math.sqrt(5));\n}\n".trim()),(0,i.kt)("h2",null,(0,i.kt)("a",{name:"other-facts"},"Other Facts")),(0,i.kt)("p",null,"Let's look at the other facts where we used in real life."),(0,i.kt)("h3",null,(0,i.kt)("a",{name:"planets-activity"},"Planets Activity")),(0,i.kt)("p",null,"Even our planet activities like Rotations period, Precession Period, Orbital Period are in fibonacci. Refer to Journal of Astronomy on ",(0,i.kt)(s.Z,{url:"http://article.sapub.org/10.5923.j.astronomy.20190801.02.html",mdxType:"ExternalLink"},"Modeling Celestial Mechanics Using the Fibonacci Numbers")),(0,i.kt)("h3",null,(0,i.kt)("a",{name:"golden-ratio"},"Golden Ratio (Phi)")),(0,i.kt)("p",null,"In mathematics, two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities where F",(0,i.kt)("sub",null,"(n+1)")," / F",(0,i.kt)("sub",null,"n")," is most of the time is 1.618"),(0,i.kt)("p",null,"Golden ratio everywhere like example below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Flower petals"),(0,i.kt)("li",{parentName:"ol"},"Spiral of Pine Cone, Pineapple"),(0,i.kt)("li",{parentName:"ol"},"Storms spin in golden sequence"),(0,i.kt)("li",{parentName:"ol"},"Wave can be measured in this ratio."),(0,i.kt)("li",{parentName:"ol"},"Planet alignment and spirals of our Milky way galaxy"),(0,i.kt)("li",{parentName:"ol"},"Shoulder to elbow and elbow to fingertips will be 1:1.6"),(0,i.kt)("li",{parentName:"ol"},"Finger tips to wrist and wrist to elbow"),(0,i.kt)("li",{parentName:"ol"},"bottom of fingertips to wrist"),(0,i.kt)("li",{parentName:"ol"},"Even your ears, brains, lungs system even helix of our DNA that forms rhythm of our hearbeat."),(0,i.kt)("li",{parentName:"ol"},"Musical scales like piano.")),(0,i.kt)("h3",null,(0,i.kt)("a",{name:"fibonacci-extension"},"Fibonacci Extension")),(0,i.kt)("p",null,"Fibonacci extensions are a tool that traders can use to establish profit targets or estimate how far a price may travel after a retracement/pullback is finished. Extension levels are also possible areas where the price may reverse."),(0,i.kt)("h3",null,(0,i.kt)("a",{name:"fibonacci-retracement"},"Fibonacci Retracement")),(0,i.kt)("p",null,"In finance, Fibonacci retracement is a method of technical analysis for determining support and resistance levels.","[1]"," They are named after their use of the Fibonacci sequence."))}h.isMDXComponent=!0}}]);