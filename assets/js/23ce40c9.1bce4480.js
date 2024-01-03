/*! For license information please see 23ce40c9.1bce4480.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41454],{29597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(85893),i=n(11151);const s={sidebar_label:"EventsWithWildcard"},a="EventsWithWildcard type",p={id:"api/puppeteer.eventswithwildcard",title:"EventsWithWildcard type",description:"Signature:",source:"@site/../docs/api/puppeteer.eventswithwildcard.md",sourceDirName:"api",slug:"/api/puppeteer.eventswithwildcard",permalink:"/next/api/puppeteer.eventswithwildcard",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"EventsWithWildcard"},sidebar:"api",previous:{title:"EvaluateFuncWith",permalink:"/next/api/puppeteer.evaluatefuncwith"},next:{title:"EventType",permalink:"/next/api/puppeteer.eventtype"}},o={},c=[{value:"Signature:",id:"signature",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"eventswithwildcard-type",children:"EventsWithWildcard type"}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type EventsWithWildcard<Events extends Record<EventType, unknown>> =\n  Events & {\n    '*': Events[keyof Events];\n  };\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventtype",children:"EventType"})]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:p.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>a});var r=n(67294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);