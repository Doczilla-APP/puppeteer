/*! For license information please see 59c4a31d.9c0cdb03.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99844],{98871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=r(85893),a=r(11151);const s={sidebar_label:"Mouse.dragEnter"},o="Mouse.dragEnter() method",d={id:"api/puppeteer.mouse.dragenter",title:"Mouse.dragEnter() method",description:"Dispatches a dragenter event.",source:"@site/../docs/api/puppeteer.mouse.dragenter.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.dragenter",permalink:"/next/api/puppeteer.mouse.dragenter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Mouse.dragEnter"},sidebar:"api",previous:{title:"Mouse.dragAndDrop",permalink:"/next/api/puppeteer.mouse.draganddrop"},next:{title:"Mouse.dragOver",permalink:"/next/api/puppeteer.mouse.dragover"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"mousedragenter-method",children:"Mouse.dragEnter() method"}),"\n",(0,n.jsxs)(t.p,{children:["Dispatches a ",(0,n.jsx)(t.code,{children:"dragenter"})," event."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragEnter(\n    target: Point,\n    data: Protocol.Input.DragData\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.point",children:"Point"})}),(0,n.jsxs)(t.td,{children:["point for emitting ",(0,n.jsx)("code",{children:"dragenter"})," event"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"Protocol.Input.DragData"}),(0,n.jsx)(t.td,{children:"drag data containing items and operations mask"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,p=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:p,props:s,_owner:d.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>o});var n=r(67294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);