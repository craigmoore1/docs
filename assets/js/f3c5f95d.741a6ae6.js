"use strict";(self.webpackChunkidentity_docs=self.webpackChunkidentity_docs||[]).push([[8369],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7672:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],u={},l="Cruiser",c={unversionedId:"cruiser/cruiser",id:"cruiser/cruiser",title:"Cruiser",description:"If you just want an example of Cruiser in action, check out the escrow example. Visit the walkthrough for a more in-depth tutorial.",source:"@site/docs/cruiser/cruiser.md",sourceDirName:"cruiser",slug:"/cruiser/",permalink:"/docs/cruiser/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cruiser/cruiser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Identity Technology Showcase",permalink:"/docs/showcase/"},next:{title:"Solana Basics",permalink:"/docs/cruiser/walkthrough/Solana Basics"}},s={},p=[{value:"If you just want an example of Cruiser in action, check out the escrow example. Visit the walkthrough for a more in-depth tutorial.",id:"if-you-just-want-an-example-of-cruiser-in-action-check-out-the-escrow-example-visit-the-walkthrough-for-a-more-in-depth-tutorial",level:2},{value:"Unordered topics for later exploration",id:"unordered-topics-for-later-exploration",level:2},{value:"Reference Material",id:"reference-material",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cruiser"},"Cruiser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const intro: string = "THIS FILE WILL SERVE AS INTRODUCTION"\n\nconsole.log(`${intro.toLowerCase()}`)\n')),(0,a.kt)("h2",{id:"if-you-just-want-an-example-of-cruiser-in-action-check-out-the-escrow-example-visit-the-walkthrough-for-a-more-in-depth-tutorial"},"If you just want an example of Cruiser in action, check out the escrow example. Visit the walkthrough for a more in-depth tutorial."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cruiser Intro"),(0,a.kt)("li",{parentName:"ul"},"Solana basics (you need to know x, y, z)"),(0,a.kt)("li",{parentName:"ul"},"Project setup"),(0,a.kt)("li",{parentName:"ul"},"Your first account"),(0,a.kt)("li",{parentName:"ul"},"Your first instruction"),(0,a.kt)("li",{parentName:"ul"},"Testing your instruction")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"unordered-topics-for-later-exploration"},"Unordered topics for later exploration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom account arguments"),(0,a.kt)("li",{parentName:"ul"},"Custom account infos"),(0,a.kt)("li",{parentName:"ul"},"In-place data"),(0,a.kt)("li",{parentName:"ul"},"Type-safe PDAs (Program-Derived Address)"),(0,a.kt)("li",{parentName:"ul"},"Custom CPI (Cross-Program Invocation)"),(0,a.kt)("li",{parentName:"ul"},"Anchor Integration"),(0,a.kt)("li",{parentName:"ul"},"Errors")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"reference-material"},"Reference Material"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Included account arguments"),(0,a.kt)("li",{parentName:"ul"},"Account list"),(0,a.kt)("li",{parentName:"ul"},"Instruction list"),(0,a.kt)("li",{parentName:"ul"},"On-chain size"),(0,a.kt)("li",{parentName:"ul"},"Small Vectors"),(0,a.kt)("li",{parentName:"ul"},"Error handling")))}f.isMDXComponent=!0}}]);