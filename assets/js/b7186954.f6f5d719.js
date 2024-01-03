/*! For license information please see b7186954.f6f5d719.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55234],{68256:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(85893),s=t(11151);const a={sidebar_label:"Page.$$"},o="Page.$$() method",l={id:"api/puppeteer.page.__",title:"Page.$$() method",description:"The method runs document.querySelectorAll within the page. If no elements match the selector, the return value resolves to [].",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.page.__.md",sourceDirName:"api",slug:"/api/puppeteer.page.__",permalink:"/api/puppeteer.page.__",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"Page.$$"},sidebar:"api",previous:{title:"Page.$",permalink:"/api/puppeteer.page._"},next:{title:"Page.$$eval",permalink:"/api/puppeteer.page.__eval"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"page-method",children:"Page.$$() method"}),"\n",(0,n.jsxs)(r.p,{children:["The method runs ",(0,n.jsx)(r.code,{children:"document.querySelectorAll"})," within the page. If no elements match the selector, the return value resolves to ",(0,n.jsx)(r.code,{children:"[]"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  $$<Selector extends string>(\n    selector: Selector\n  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"selector"}),(0,n.jsx)(r.td,{children:"Selector"}),(0,n.jsxs)(r.td,{children:["A ",(0,n.jsx)("code",{children:"selector"})," to query page for"]})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<Array<",(0,n.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,n.jsx)(r.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>>>"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Shortcut for ",(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.__",children:"Page.mainFrame().$$(selector)"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:l.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>o});var n=t(67294);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);