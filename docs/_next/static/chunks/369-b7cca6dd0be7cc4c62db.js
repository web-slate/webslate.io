(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{8145:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var r=n(5893),o=n(5988),i=n(1664),a=n(7610),l=function(e){var t=e.type,n=e.post,l=n.link,s=n.module.meta,u="/blogs/".concat(t)+l;return(0,r.jsxs)("article",{className:"jsx-3233879758",children:[(0,r.jsx)(a.F,{meta:s,link:u}),(0,r.jsx)(i.default,{href:u,children:(0,r.jsx)("a",{className:"jsx-3233879758",children:"Read more \u2192"})}),(0,r.jsx)(o.default,{id:"3233879758",children:["article.jsx-3233879758{margin-bottom:3rem;}"]})]})}},3988:function(e,t,n){"use strict";function r(e){return e.keys().map((function(t){return{link:t.substr(1).replace(/\.mdx$/,""),module:e(t)}}))}n.d(t,{Lc:function(){return o},$F:function(){return i},R_:function(){return a},hx:function(){return l},TM:function(){return s},Di:function(){return u},yB:function(){return c}});var o=r(n(2900)),i=r(n(3735)),a=r(n(1304)),l=r(n(7312)),s=r(n(6126)),u=r(n(4417)),c=r(n(5501))},6675:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return u},default:function(){return m}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"Storage API",description:"learn more about Storage API (Local and Session Storage).",date:"Aug 8, 2016",link:"storage-api",readTime:2},c={meta:u},p=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:u},t)};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(p,s(s(s({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operations. Promise API followed Promises/A+ Specification prior to this, there was Promise/A."),(0,i.kt)("h1",null,"What is Promises/A and Promises/A+ ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Both are specification for open standard but Javascript currently uses Promise/A+."),(0,i.kt)("li",{parentName:"ol"},"The main three reason for using Promise/A+ is Three different states, Value for Fulfilment and for Rejection and thenable object. for more detail see Differences from Promises/A"),(0,i.kt)("li",{parentName:"ol"},"These Promise/A+ organisation occasionally revise and address the corner cases in to new Specification.")),(0,i.kt)("h1",null,"Difference between Promise/A and /A+?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rejection / Fulfilment method returns thenable object."),(0,i.kt)("li",{parentName:"ol"},"Rejection triggers catch method, if errors thrown.")),(0,i.kt)("p",null,"In short, running continuation-passing style. Let me shoot few bullets with simple diagram on Promises below. "))}m.isMDXComponent=!0},239:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return u},default:function(){return m}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"JS Promise (Part 2 - Q.js, When.js and RSVP.js)",description:"I would like to continue with an examination of JavaScript Promise API. Let\u2019s have a look at Promise evolution by various libraries. below three libraries which we are going to explore on this article.",date:"Dec 5, 2016",readTime:5},c={meta:u},p=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:u},t)};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(p,s(s(s({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I would like to continue with an examination of JavaScript Promise API. Let\u2019s have a look at Promise evolution by various libraries. below three libraries which we are going to explore on this article."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Q.js Library"),(0,i.kt)("li",{parentName:"ol"},"When.js Library"),(0,i.kt)("li",{parentName:"ol"},"RSVP.js Library")),(0,i.kt)("h1",null,"Using q.js"),(0,i.kt)("p",null,"The q.js is best one for promise implementation by Kris Kowal. It is more evident of promise evolution."),(0,i.kt)("p",null,"Lets have a look, What makes it special."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It provides two ways to define the promise. one is very famous by Q.defer() and another one is Q.Promise()."),(0,i.kt)("li",{parentName:"ul"},"The Q.defer() method is custom and flexible way to define promise like defining anywhere in the code likevar deferred = Q.defer(); and any time that can be resolved, rejected and notified (deferred.resolve, deferred.reject, deferred.notify).")))}m.isMDXComponent=!0},6177:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return u},default:function(){return m}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"JS Promises Basics (Part 1)",description:"One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operations. Promise API followed Promises/A+ Specification prior to this, there was Promise/A.",date:"Oct 21, 2016",readTime:2},c={meta:u},p=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:u},t)};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(p,s(s(s({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operations. Promise API followed Promises/A+ Specification prior to this, there was Promise/A."),(0,i.kt)("h1",null,"What is Promises/A and Promises/A+ ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Both are specification for open standard but Javascript currently uses Promise/A+."),(0,i.kt)("li",{parentName:"ol"},"The main three reason for using Promise/A+ is Three different states, Value for Fulfilment and for Rejection and thenable object. for more detail see Differences from Promises/A"),(0,i.kt)("li",{parentName:"ol"},"These Promise/A+ organisation occasionally revise and address the corner cases in to new Specification.")),(0,i.kt)("h1",null,"Difference between Promise/A and /A+?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rejection / Fulfilment method returns thenable object."),(0,i.kt)("li",{parentName:"ol"},"Rejection triggers catch method, if errors thrown.")),(0,i.kt)("p",null,"In short, running continuation-passing style. Let me shoot few bullets with simple diagram on Promises below. "))}m.isMDXComponent=!0},8305:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return m},default:function(){return h}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052),l=n(2919),s=n(9087),u=n(3042);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={title:"Missing element in Permutation.",description:"Find the missing element in a given permutation.",date:"Jul 21, 2020",readTime:2},f={meta:m},d=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:m},t)};function h(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(d,p(p(p({},f),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An array A consisting of N different integers is given. The array contains integers in the range ","[1..(N + 1)]",", which means that exactly one element is missing.  "),(0,i.kt)("p",null,"Your goal is to find that missing element."),(0,i.kt)("p",null,"Write a function:  "),(0,i.kt)(l.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n}\n"),(0,i.kt)("p",null,"that, given an array A, returns the value of the missing element.  "),(0,i.kt)("p",null,"For example, given array A such that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A","[0]"," = 2"),(0,i.kt)("li",{parentName:"ul"},"A","[1]"," = 3"),(0,i.kt)("li",{parentName:"ul"},"A","[2]"," = 1"),(0,i.kt)("li",{parentName:"ul"},"A","[3]"," = 5")),(0,i.kt)("p",null,"the function should return 4, as it is the missing element.  "),(0,i.kt)("p",null,"Write an efficient algorithm for the following assumptions:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"N is an integer within the range ","[0..100,000]",";"),(0,i.kt)("li",{parentName:"ul"},"the elements of A are all distinct;"),(0,i.kt)("li",{parentName:"ul"},"each element of array A is an integer within the range ","[1..(N + 1)]",".")),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Points to be Taken",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("p",null,"1.1"),(0,i.kt)(l.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n    const b = A.sort()\n    for(let i=0;i<=b.length;i++) {\n        if(b[i+1] !== b[i] + 1) {\n            return b[i] + 1\n        }\n    }\n    return ''\n}\n"),(0,i.kt)("p",null,"1.2"),(0,i.kt)(l.Z,{mdxType:"CodeBlock"},"\nfunction solution(A) {\n    const n = A.length + 1\n    const sumOfN = Math.floor(n * (n + 1) / 2)\n    const sumOfAll = A.reduce((a, b) => a + b, 0)\n    return sumOfN - sumOfAll\n}\n"),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Points to be Taken",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Array problem expect empty array condition check and single element check."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(u.Z,{url:"https://en.wikipedia.org/wiki/Arithmetic_progression",mdxType:"ExternalLink"},"Arithmetic progression"))))}h.isMDXComponent=!0},103:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return m},default:function(){return h}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052),l=n(2919),s=n(3042),u=n(9087);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={title:"Palindrome Solutions",description:"Palindrome is in reverse also same",date:"Jul 21, 2020",readTime:2},f={meta:m},d=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:m},t)};function h(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(d,p(p(p({},f),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"#history"}),"History"))),(0,i.kt)("p",null,"PALINDROMES means PALIN (Back again) and DROMES (Running)"),(0,i.kt)("h2",null,(0,i.kt)(u.Z,{label:"History",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Palindrome comes from ancient greek"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/Sator_Square",mdxType:"ExternalLink"},"Sator Square")," is one of the famous piece which is two dimensional")),(0,i.kt)("p",null,"Below is the basic coding solution written in javascript."),(0,i.kt)(l.Z,{mdxType:"CodeBlock"},'\nfunction isPalindrome(S) {\n  let iteration = Math.round(S.length / 2);\n  let backward = S.length;\n  for (let forward = 0; forward < iteration; forward++) {\n    backward--;\n    if (S[forward].toLowerCase() !== S[backward].toLowerCase()) {\n      return "NO";\n    }\n  }\n  return "YES";\n}\n'),(0,i.kt)("h2",null,"Some Words"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Detartrated (Longest incidental palindrome)"),(0,i.kt)("li",{parentName:"ol"},"WOW"),(0,i.kt)("li",{parentName:"ol"},"KAYAK"),(0,i.kt)("li",{parentName:"ol"},"Symmys - (Annual awards)"),(0,i.kt)("li",{parentName:"ol"},"RADAR"),(0,i.kt)("li",{parentName:"ol"},"EVIL OLIVE"),(0,i.kt)("li",{parentName:"ol"},"TACO CAT"),(0,i.kt)("li",{parentName:"ol"},"HUH"),(0,i.kt)("li",{parentName:"ol"},"DO GEESE SEE GOD"),(0,i.kt)("li",{parentName:"ol"},"BORE ME ROB"),(0,i.kt)("li",{parentName:"ol"},"RISE SIR"),(0,i.kt)("li",{parentName:"ol"},"MADAM"),(0,i.kt)("li",{parentName:"ol"},"DIVE VID"),(0,i.kt)("li",{parentName:"ol"},"Tattarrattat (Sound of knocking at the door used by ",(0,i.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/James_Joyce",mdxType:"ExternalLink"},"James Joyce")," in ",(0,i.kt)(s.Z,{url:"https://en.wikipedia.org/wiki/Ulysses_(novel)",mdxType:"ExternalLink"},"Ulysses"),", modernist novel)")),(0,i.kt)("h2",null,"Some Phrases"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Top spot"),(0,i.kt)("li",{parentName:"ol"},"Able was i ere I Saw Elba"),(0,i.kt)("li",{parentName:"ol"},"A man, A Plan, A Canal: Panama")))}h.isMDXComponent=!0},6992:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return p},default:function(){return d}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052),l=n(2919),s=n(9087);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"Frog Jump Solution",description:"Count minimal number of jumps from position X to Y.",date:"Jul 21, 2020",readTime:2},m={meta:p},f=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:p},t)};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(f,c(c(c({},m),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.  "),(0,i.kt)("p",null,"Count the minimal number of jumps that the small frog must perform to reach its target.  "),(0,i.kt)("p",null,"Write a function:  "),(0,i.kt)(l.Z,{mdxType:"CodeBlock"},"\nfunction solution(X, Y, D) {\n  // write your code in JavaScript (Node.js 8.9.4)\n}\n"),(0,i.kt)("p",null,"that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.  "),(0,i.kt)("p",null,"For example, given:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"X = 10"),(0,i.kt)("li",{parentName:"ul"},"Y = 85"),(0,i.kt)("li",{parentName:"ul"},"D = 30")),(0,i.kt)("p",null,"the function should return 3, because the frog will be positioned as follows:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"after the first jump, at position 10 + 30 = 40"),(0,i.kt)("li",{parentName:"ul"},"after the second jump, at position 10 + 30 + 30 = 70"),(0,i.kt)("li",{parentName:"ul"},"after the third jump, at position 10 + 30 + 30 + 30 = 100")),(0,i.kt)("p",null,"Write an efficient algorithm for the following assumptions:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"X, Y and D are integers within the range ","[1..1,000,000,000]",";"),(0,i.kt)("li",{parentName:"ul"},"X \u2264 Y.")),(0,i.kt)(l.Z,{mdxType:"CodeBlock"},"\nfunction solution(x, y, d) {\n    // write your code in JavaScript (Node.js 8.9.4)\n    if ((y - x) % d === 0) {\n       return (y - x) / d;\n    }\n    return Math.ceil((y - x) / d);\n}\n"),(0,i.kt)("h2",null,(0,i.kt)(s.Z,{label:"Points to be Taken",name:!0,mdxType:"AnchorLink"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Solution need division check with modulo operator whether its remainder is zero."),(0,i.kt)("li",{parentName:"ol"})))}d.isMDXComponent=!0},8415:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return u},default:function(){return m}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"10 Things you should know",description:"10 Things you should know",date:"Jul 21, 2020",readTime:2},c={meta:u},p=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:u},t)};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(p,s(s(s({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"10 Things you should know"))}m.isMDXComponent=!0},687:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return u},default:function(){return m}});var r=n(6156),o=n(7375),i=(n(7294),n(4137)),a=n(2052);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"useEffect Basics (Part 1)",description:"One of the good Features in React 16.x",date:"Jul 21, 2020",readTime:2},c={meta:u},p=function(e){var t=e.children;return(0,i.kt)(a.Z,{meta:u},t)};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)(p,s(s(s({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to useEffect basics article"))}m.isMDXComponent=!0},4417:function(e,t,n){var r={"./big-o-notations.mdx":150};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=4417},5501:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=5501,e.exports=t},3735:function(e,t,n){var r={"./storage-api.mdx":6675};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=3735},2900:function(e,t,n){var r={"./promises-part-2.mdx":239,"./promises.mdx":6177};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=2900},6126:function(e,t,n){var r={"./fibonacci.mdx":1980,"./missing-element-in-permutation.mdx":8305,"./palindrome.mdx":103,"./simple-frog-jump.mdx":6992};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=6126},7312:function(e,t,n){var r={"./10-things-should-know.mdx":8415};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=7312},1304:function(e,t,n){var r={"./use-effect.mdx":687};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=1304}}]);