(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{4070:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),{1:{notation:"Constant",value:"1"},"log log n":{notation:"Double Logarithmic",value:"Log Log n"},"log n":{notation:"Logarithmic",value:"Log n"},"\u221an":{notation:"Square Root",value:"\u221an"},n:{notation:"Linear",value:"n"},n2:{notation:"Quadratic",value:(0,r.jsxs)(r.Fragment,{children:["n",(0,r.jsx)("sup",{children:"2"})]})},"2n":{notation:"Exponential",value:(0,r.jsxs)(r.Fragment,{children:["2",(0,r.jsx)("sup",{children:"n"})]})},"n!":{notation:"Factorial",value:"n!"}});t.Z=function(e){var t=e.type,n=void 0===t?"time":t,i=e.value,l=e.children,o=a[i]||{},s=o.notation,u=o.value;return s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("strong",{children:["time"===n?"Time  Complexity":"Space Complexity",": "]}),"O(",u,") - ",s,l,(0,r.jsx)("br",{})]}):null}},2919:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),a=n(6156),i=(n(7294),n(2465)),l=n(9163);function o(){var e=(0,i.Z)(["\n  display: table-cell;\n"]);return o=function(){return e},e}function s(){var e=(0,i.Z)(["\n  display: table-cell;\n  text-align: right;\n  padding-right: 1em;\n  user-select: none;\n  opacity: 0.5;\n"]);return s=function(){return e},e}function u(){var e=(0,i.Z)(["\n  display: table-row;\n"]);return u=function(){return e},e}function c(){var e=(0,i.Z)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow: scroll;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);return c=function(){return e},e}function p(){var e=(0,i.Z)(["\n  font-family: sans-serif;\n  text-align: center;\n"]);return p=function(){return e},e}var m=l.ZP.div(p()),h=l.ZP.pre(c()),d=l.ZP.div(u()),k=l.ZP.span(s()),g=l.ZP.span(o()),f=n(9235),b=n(5424);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.children,n=e.language,a=void 0===n?"javascript":n;return(0,r.jsx)(m,{children:(0,r.jsx)(f.ZP,N(N({},f.lG),{},{theme:b.Z,code:t.trim(),language:a,children:function(e){var t=e.className,n=e.style,a=e.tokens,i=e.getLineProps,l=e.getTokenProps;return(0,r.jsx)(h,{className:t,style:n,children:a.map((function(e,t){return(0,r.jsxs)(d,N(N({},i({line:e,key:t})),{},{children:[(0,r.jsx)(k,{children:t+1}),(0,r.jsx)(g,{children:e.map((function(e,t){return(0,r.jsx)("span",N({},l({token:e,key:t})),t)}))})]}),t)}))})}}))})}},3042:function(e,t,n){"use strict";var r=n(5893),a=n(7294),i=n(1516),l=n(2105),o=n(2868);t.Z=function(e){var t=e.children,n=e.url,s=(0,a.useCallback)((function(e){e.preventDefault(),i.ZP.outboundLink({label:"Clicked ".concat(t)},(function(){(0,l.WF)(n)}),[o.ei.ExternalLink])}),[n]);return(0,r.jsx)("a",{href:"#",onClick:s,target:"_blank",children:t})}},7610:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(5893),a=n(5988),i=n(1664),l=function(e){var t=e.meta,n=e.link,l=e.isBlogPost;return(0,r.jsxs)(r.Fragment,{children:[l?(0,r.jsx)("h1",{className:"jsx-4001257583 "+((l?"great-title":null)||""),children:t.title}):(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("h1",{className:"jsx-4001257583 "+((l?"great-title":null)||""),children:t.title})}),(0,r.jsxs)("div",{className:"jsx-4001257583 details",children:[l?null:(0,r.jsx)("p",{className:"jsx-4001257583",children:t.description}),(0,r.jsx)("span",{className:"jsx-4001257583",children:t.date}),(0,r.jsxs)("span",{role:"img","aria-label":"one coffee",className:"jsx-4001257583",children:["\u2615 ",t.readTime+" mins read"]})]}),(0,r.jsx)(a.default,{id:"4001257583",children:["h1.jsx-4001257583{font-size:1.5rem;font-weight:700;color:#f39c12;}",".great-title.jsx-4001257583{font-size:2rem;}",".details.jsx-4001257583 span.jsx-4001257583{color:#bdbdbd;margin-right:1rem;}",".details.jsx-4001257583{margin-bottom:1rem;}"]})]})}},2477:function(e,t,n){"use strict";var r=n(5893),a=n(2465),i=n(9008),l=n(9163),o=n(9232),s=n(1930);function u(){var e=(0,a.Z)(["\n  display: flex;\n  flex-direction: row;\n"]);return u=function(){return e},e}var c=l.ZP.div(u());t.Z=function(e){var t=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(c,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(o.Z,{})]})]})}},2052:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),a=n(2465),i=n(7610),l=n(2477);function o(){var e=(0,a.Z)(["\n  margin: 0 35px;\n"]);return o=function(){return e},e}var s=n(9163).ZP.div(o());function u(e){var t=e.children,n=e.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{title:n.title}),(0,r.jsxs)(s,{children:[(0,r.jsx)(i.F,{meta:n,isBlogPost:!0}),(0,r.jsx)("article",{children:t})]})]})}},9087:function(e,t,n){"use strict";var r=n(6156),a=n(5893),i=n(2105);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.label,n=e.url,r=e.name,l=e.anchor,s={};return n?s.href=n:l?s.href="#".concat((0,i.Md)(t)):r&&(s.name="".concat((0,i.Md)(t))),(0,a.jsx)("a",o(o({},s),{},{children:t}))}},1930:function(e,t,n){"use strict";var r=n(5893),a=n(2465),i=n(1664);function l(){var e=(0,a.Z)(["\n  width: 18%;\n"]);return l=function(){return e},e}var o=n(9163).ZP.div(l());t.Z=function(e){var t=e.type,n=void 0===t?"header-logo":t;return n?(0,r.jsx)(o,{children:(0,r.jsx)(i.default,{href:"/",className:"link",children:(0,r.jsx)("img",{src:"/images/webslate.jpg",alt:"Web Slate.io",className:n})})}):(0,r.jsx)(o,{children:(0,r.jsx)("img",{src:"images/webslate.jpg",alt:"Web Slate.io"})})}},9232:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(2465),i=n(7294),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?"/blogs/".concat(e):"/"},o=[{label:"Home",url:"/"},{label:"JavaScript",url:l("js")},{label:"HTML5",url:l("html")},{label:"React",url:l("react")},{label:"Programming",url:l("programming")},{label:"About",url:"/about"}];function s(){var e=(0,a.Z)(["\n  width: 82%;\n  margin-top: 35px;\n"]);return s=function(){return e},e}var u=n(9163).ZP.div(s());var c=function(e){var t=e.noStyle,n=void 0===t||t?u:i.Fragment;return(0,r.jsx)(n,{children:o.map((function(e,t){return(0,r.jsxs)("span",{children:[t>0&&" | ",(null===e||void 0===e?void 0:e.label)&&(0,r.jsx)("a",{href:null===e||void 0===e?void 0:e.url,children:null===e||void 0===e?void 0:e.label})]},null===e||void 0===e?void 0:e.label)}))})}},1342:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return m},default:function(){return k}});var r=n(6156),a=n(7375),i=(n(7294),n(4137)),l=n(2052),o=n(2919),s=(n(3042),n(9087)),u=n(4070);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={title:"Passing Yearbooks",description:"There are n students, numbered from 1 to n, each with their own yearbook. They would like to pass their yearbooks around and get them signed by other students.",date:"Mar 16, 2020",readTime:10},h={meta:m},d=function(e){var t=e.children;return(0,i.kt)(l.Z,{meta:m},t)};function k(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)(d,p(p(p({},h),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Straight to the Point !"),(0,i.kt)("p",null,"Are you landed to this page and rushing for the immediate solution in javascript. here you go !!"),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nfunction findSignatureCounts(arr) {\n  const ans = Array(arr.length).fill(1);\n  // Iterate Array.\n  for (let i = 0; i < arr.length; i++) {\n    let k = i;\n    while (arr[k] !== i + 1) {\n      ans[i]++;\n      k = arr[k] - 1;\n    }\n  }\n  return ans;\n}\n".trim()),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"On High level note, It worth to read in detail for a better understanding.")),(0,i.kt)("h1",null,"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#problem-statement"}),"Problem Statement"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#constraints"}),"Constraints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#expected"}),"Expected")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#test-cases"}),"Test Cases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#foot-note"}),"Foot Note")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#solution-intro"}),"Solution Intro")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#solutions"}),"Solutions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#brute-force"}),"Brute Force")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#$Approach-1$"}),"$Approach-1$")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#$Approach-2$"}),"$Approach-2$")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#time-optimized"}),"Time Optimized")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#space-optimized"}),"Space Optimized")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#other-questions"}),"Other Possible Questions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#$Question-1$"}),"$Question-1$")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#$Question-2$"}),"$Question-2$")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#$Question-3$"}),"$Question-3$")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#$Question-4$"}),"$Question-4$"))))),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Problem Statement",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"There are n students, numbered from 1 to n, each with their own yearbook. They would like to pass their yearbooks around and get them signed by other students.  "),(0,i.kt)("p",null,"You're given a list of n integers arr","[1..n]",", which is guaranteed to be a permutation of 1..n (in other words, it includes the integers from 1 to n exactly once each, in some order). The meaning of this list is described below.  "),(0,i.kt)("p",null,"Initially, each student is holding their own yearbook. The students will then repeat the following two steps each minute: Each student i will first sign the yearbook that they're currently holding (which may either belong to themselves or to another student), and then they'll pass it to student arr","[i-1]",". It's possible that arr","[i-1]"," = i for any given i, in which case student i will pass their yearbook back to themselves. Once a student has received their own yearbook back, they will hold on to it and no longer participate in the passing process.  "),(0,i.kt)("p",null,"It's guaranteed that, for any possible valid input, each student will eventually receive their own yearbook back and will never end up holding more than one yearbook at a time.  "),(0,i.kt)("p",null,"You must compute a list of n integers output, whose element at i-1 is equal to the number of signatures that will be present in student i's yearbook once they receive it back.  "),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nint[] findSignatureCounts(int[] arr)\n".trim()),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Constraints",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"n is in the range ","[1, 100,000]","."),(0,i.kt)("li",{parentName:"ol"},"Each value arr","[i]"," is in the range ","[1, n]",", and all values in arr","[i]"," are distinct.")),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Expected",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Return a list of n integers output, as described above.")),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Test Cases",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"n = 2, arr = ","[2, 1]"," and output = ","[2, 2]"),(0,i.kt)("li",{parentName:"ol"},"n = 2, arr = ","[1, 2]"," and output = ","[1, 1]")),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Foot Note",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Test Case 1 Explaination:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pass 1:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Student 1 signs their own yearbook. Then they pass the book to the student at arr","[0]",", which is Student 2."),(0,i.kt)("li",{parentName:"ul"},"Student 2 signs their own yearbook. Then they pass the book to the student at arr","[1]",", which is Student 1."))),(0,i.kt)("li",{parentName:"ul"},"Pass 2:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Student 1 signs Student 2's yearbook. Then they pass it to the student at arr","[0]",", which is Student 2."),(0,i.kt)("li",{parentName:"ul"},"Student 2 signs Student 1's yearbook. Then they pass it to the student at arr","[1]",", which is Student 1."))),(0,i.kt)("li",{parentName:"ul"},"Pass 3:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Both students now hold their own yearbook, so the process is complete."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result"),": Each student received 2 signatures."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Test Case 2 Explaination:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pass 1:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Student 1 signs their own yearbook. Then they pass the book to the student at arr","[0]",", which is themself, Student 1."),(0,i.kt)("li",{parentName:"ul"},"Student 2 signs their own yearbook. Then they pass the book to the student at arr","[1]",", which is themself, Student 2."))),(0,i.kt)("li",{parentName:"ul"},"Pass 2:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Both students now hold their own yearbook, so the process is complete."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result:")," Each student received 1 signature.  ")))),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Solution Intro",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"Lets see the list of approaches and their complexities."),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null})),(0,i.kt)("th",p({parentName:"tr"},{align:"center"}),"Approach"),(0,i.kt)("th",p({parentName:"tr"},{align:"right"}),"Time Complexity"),(0,i.kt)("th",p({parentName:"tr"},{align:"right"}),"Space Complexity"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"1"),(0,i.kt)("td",p({parentName:"tr"},{align:"center"}),"Brute Force"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n+m)"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(m+n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"2"),(0,i.kt)("td",p({parentName:"tr"},{align:"center"}),"$Approach 1$"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"3"),(0,i.kt)("td",p({parentName:"tr"},{align:"center"}),"$Approach 2$"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"4"),(0,i.kt)("td",p({parentName:"tr"},{align:"center"}),"Time Optimized"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"5"),(0,i.kt)("td",p({parentName:"tr"},{align:"center"}),"Memory Optimized"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)"),(0,i.kt)("td",p({parentName:"tr"},{align:"right"}),"O(n)")))),(0,i.kt)("hr",null),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Solutions",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"With no further due, lets take a example of code solutions."),(0,i.kt)("h3",null,(0,i.kt)(s.Z,{label:"Brute Force",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"Description"),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nCode goes here...\n".trim()),(0,i.kt)(u.Z,{type:"time",value:"n+m",mdxType:"BigO"}),(0,i.kt)(u.Z,{type:"space",value:"n+m",mdxType:"BigO"}),(0,i.kt)("h3",null,(0,i.kt)(s.Z,{label:"$Approach-1$",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"Description"),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nCode goes here...\n".trim()),(0,i.kt)(u.Z,{type:"time",value:"n+m",mdxType:"BigO"}),(0,i.kt)(u.Z,{type:"space",value:"n+m",mdxType:"BigO"}),(0,i.kt)("h3",null,(0,i.kt)(s.Z,{label:"$Approach-2$",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"Description"),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nCode goes here...\n".trim()),(0,i.kt)(u.Z,{type:"time",value:"n+m",mdxType:"BigO"}),(0,i.kt)(u.Z,{type:"space",value:"n+m",mdxType:"BigO"}),(0,i.kt)("h3",null,(0,i.kt)(s.Z,{label:"$Time-Optimized$",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"Description"),(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nCode goes here...\n".trim()),(0,i.kt)(u.Z,{type:"time",value:"n+m",mdxType:"BigO"}),(0,i.kt)(u.Z,{type:"space",value:"n+m",mdxType:"BigO"}),"### ",(0,i.kt)(s.Z,{label:"$Space-Optimized$",name:!0,mdxType:"AnchorLink"}),"Description",(0,i.kt)(o.Z,{mdxType:"CodeBlock"},"\nCode goes here...\n".trim()),(0,i.kt)(u.Z,{type:"time",value:"n+m",mdxType:"BigO"}),(0,i.kt)(u.Z,{type:"space",value:"n+m",mdxType:"BigO"}))}k.isMDXComponent=!0},3758:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/problems/facebook-passing-year-books",function(){return n(1342)}])}},function(e){e.O(0,[329,358,638,774,888,179],(function(){return t=3758,e(e.s=t);var t}));var t=e.O();_N_E=t}]);