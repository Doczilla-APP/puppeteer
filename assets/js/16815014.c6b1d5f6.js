/*! For license information please see 16815014.c6b1d5f6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89900],{93680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var a=r(85893),n=r(11151);const d={sidebar_label:"Page.addStyleTag"},s="Page.addStyleTag() method",i={id:"api/puppeteer.page.addstyletag",title:"Page.addStyleTag() method",description:"Adds a ` tag into the page with the desired URL or a ` tag with the content.",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.page.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addstyletag",permalink:"/api/puppeteer.page.addstyletag",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"Page.addStyleTag"},sidebar:"api",previous:{title:"Page.addScriptTag",permalink:"/api/puppeteer.page.addscripttag"},next:{title:"Page.addStyleTag_1",permalink:"/api/puppeteer.page.addstyletag_1"}},l={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"pageaddstyletag-method",children:"Page.addStyleTag() method"}),"\n",(0,a.jsxs)(t.p,{children:["Adds a ",(0,a.jsx)(t.code,{children:'<link rel="stylesheet">'})," tag into the page with the desired URL or a ",(0,a.jsx)(t.code,{children:'<style type="text/css">'})," tag with the content."]}),"\n",(0,a.jsxs)(t.p,{children:["Shortcut for ",(0,a.jsx)(t.a,{href:"/api/puppeteer.frame.addstyletag_1",children:"page.mainFrame().addStyleTag(options)"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"options"}),(0,a.jsxs)(t.td,{children:["Omit<",(0,a.jsx)(t.a,{href:"/api/puppeteer.frameaddstyletagoptions",children:"FrameAddStyleTagOptions"}),", 'url'>"]}),(0,a.jsx)(t.td,{})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLStyleElement>>"]}),"\n",(0,a.jsxs)(t.p,{children:["An ",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,a.jsx)(t.code,{children:"<link>"})," or ",(0,a.jsx)(t.code,{children:"<style>"})," element."]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var a,d={},p=null,o=null;for(a in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(o=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===d[a]&&(d[a]=t[a]);return{$$typeof:n,type:e,key:p,ref:o,props:d,_owner:i.current}}t.Fragment=d,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var a=r(67294);const n={},d=a.createContext(n);function s(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);