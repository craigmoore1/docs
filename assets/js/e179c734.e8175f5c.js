"use strict";(self.webpackChunkidentity_docs=self.webpackChunkidentity_docs||[]).push([[9129],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3770:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={title:"Overview",draft:!0},l="Overview",u={unversionedId:"getting-started/Overview",id:"getting-started/Overview",title:"Overview",description:"Welcome to the Identity Documentation!",source:"@site/docs/getting-started/Overview.md",sourceDirName:"getting-started",slug:"/getting-started/Overview",permalink:"/docs/getting-started/Overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/Overview.md",tags:[],version:"current",frontMatter:{title:"Overview",draft:!0},sidebar:"tutorialSidebar",previous:{title:"Cryptid",permalink:"/docs/cryptid/"},next:{title:"Sol-Did",permalink:"/docs/sol-did/"}},c={},d=[{value:"What is the Gateway Protocol?",id:"what-is-the-gateway-protocol",level:2},{value:"What is did:sol?",id:"what-is-didsol",level:2},{value:"What is Cryptid?",id:"what-is-cryptid",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Welcome to the Identity Documentation!"),(0,i.kt)("p",null,"Here you can find out more about how you can use our toolkits to verify your user's identities, securely validate identities for third-parties, and build dApps that safely manage your user's identities."),(0,i.kt)("p",null,"Identity validators and identity requesters should start by looking at the Gateway Protocol."),(0,i.kt)("h2",{id:"what-is-the-gateway-protocol"},"What is the Gateway Protocol?"),(0,i.kt)("p",null,"The Gateway Protocol allows both identity requesters and identity validators (also known as Gatekeepers) to securely and privately verify a person's identity on-chain."),(0,i.kt)("p",null,"The Gateway Protocol is permissionless, allowing a wide variety of Gatekeeper Networks to act as identity validators for dApps that need identity verification."),(0,i.kt)("p",null,"Gatekeeper Networks are made up of identity validators who are compensated for performing identity verification tasks for supported dApps. Each Gatekeeper Network has its own set of rules and requirements which are determined by the Gatekeepers. Gatekeepers can vote for changes both within their Gatekeeper Network and for the broader Gateway Protocol."),(0,i.kt)("h2",{id:"what-is-didsol"},"What is did:sol?"),(0,i.kt)("p",null,"Decentralized identifiers (DIDs) are a tool that allows users to manage their identity on blockchains. And did:sol is the official DID method for the Solana blockchain. This means that did:sol:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Defines how DIDs work on Solana"),(0,i.kt)("li",{parentName:"ul"},"Offers performance benefits to the controller"),(0,i.kt)("li",{parentName:"ul"},"Supports different Solana verification methods"),(0,i.kt)("li",{parentName:"ul"},"Provides an identifier for use both on-chain and off-chain")),(0,i.kt)("h2",{id:"what-is-cryptid"},"What is Cryptid?"),(0,i.kt)("p",null,"Cryptid allows developers to securely interact with transactions using a user's DID instead of with their private key. It integrates with Solana, and is geared towards developers working with on-chain dApps. Developers can make it easy for users to sign transactions and prove their identity while keeping their personal information private and secure. This allows developers to build a variety of features including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access control that delegates a user's assets to a trusted party"),(0,i.kt)("li",{parentName:"ul"},"Back-up options for a user's wallet in case of lost access"),(0,i.kt)("li",{parentName:"ul"},"Safety features to rotate a compromised user key"),(0,i.kt)("li",{parentName:"ul"},"Multi-account and multi-device access to a user's assets")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Now that you know what each Identity product does, you can jump in and get started with our how-to guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify Your First User"),(0,i.kt)("li",{parentName:"ul"},"Become an Identity Validator"),(0,i.kt)("li",{parentName:"ul"},"Join a Gatekeeper Network"),(0,i.kt)("li",{parentName:"ul"},"Store a DID"),(0,i.kt)("li",{parentName:"ul"},"Sign Transactions")))}f.isMDXComponent=!0}}]);