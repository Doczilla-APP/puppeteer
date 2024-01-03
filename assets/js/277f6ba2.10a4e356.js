/*! For license information please see 277f6ba2.10a4e356.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18379],{92656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=n(85893),i=n(11151);const s={sidebar_label:"EventEmitter.emit"},a="EventEmitter.emit() method",d={id:"api/puppeteer.eventemitter.emit",title:"EventEmitter.emit() method",description:"Emit an event and call any associated listeners.",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.eventemitter.emit.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.emit",permalink:"/api/puppeteer.eventemitter.emit",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"EventEmitter.emit"},sidebar:"api",previous:{title:"EventEmitter.addListener",permalink:"/api/puppeteer.eventemitter.addlistener"},next:{title:"EventEmitter.listenerCount",permalink:"/api/puppeteer.eventemitter.listenercount"}},o={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"eventemitteremit-method",children:"EventEmitter.emit() method"}),"\n",(0,r.jsx)(t.p,{children:"Emit an event and call any associated listeners."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  emit<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    event: EventsWithWildcard<Events>[Key]\n  ): boolean;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Key"}),(0,r.jsx)(t.td,{children:"the event you'd like to emit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"event"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]"]}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"boolean"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"true"})," if there are any listeners, ",(0,r.jsx)(t.code,{children:"false"})," if there are not."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:d.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var r=n(67294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);