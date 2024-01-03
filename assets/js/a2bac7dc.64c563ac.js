/*! For license information please see a2bac7dc.64c563ac.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31801],{78511:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(85893),r=t(11151);const o={sidebar_label:"CDPSession"},i="CDPSession class",a={id:"api/puppeteer.cdpsession",title:"CDPSession class",description:"The CDPSession instances are used to talk raw Chrome Devtools Protocol.",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.cdpsession.md",sourceDirName:"api",slug:"/api/puppeteer.cdpsession",permalink:"/api/puppeteer.cdpsession",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"CDPSession"},sidebar:"api",previous:{title:"Target.worker",permalink:"/api/puppeteer.target.worker"},next:{title:"CDPSession.connection",permalink:"/api/puppeteer.cdpsession.connection"}},c={},d=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"cdpsession-class",children:"CDPSession class"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"CDPSession"})," instances are used to talk raw Chrome Devtools Protocol."]}),"\n",(0,n.jsx)(s.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class CDPSession extends EventEmitter<CDPSessionEvents>\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Extends:"})," ",(0,n.jsx)(s.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,n.jsx)(s.a,{href:"/api/puppeteer.cdpsessionevents",children:"CDPSessionEvents"}),">"]}),"\n",(0,n.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(s.p,{children:["Protocol methods can be called with ",(0,n.jsx)(s.a,{href:"/api/puppeteer.cdpsession.send",children:"CDPSession.send()"})," method and protocol events can be subscribed to with ",(0,n.jsx)(s.code,{children:"CDPSession.on"})," method."]}),"\n",(0,n.jsxs)(s.p,{children:["Useful links: ",(0,n.jsx)(s.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol Viewer"})," and ",(0,n.jsx)(s.a,{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md",children:"Getting Started with DevTools Protocol"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(s.code,{children:"CDPSession"})," class."]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const client = await page.target().createCDPSession();\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () =>\n  console.log('Animation created!')\n);\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2,\n});\n"})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Method"}),(0,n.jsx)(s.th,{children:"Modifiers"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/api/puppeteer.cdpsession.connection",children:"connection()"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/api/puppeteer.cdpsession.detach",children:"detach()"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used to send messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/api/puppeteer.cdpsession.id",children:"id()"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Returns the session's id."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/api/puppeteer.cdpsession.send",children:"send(method, paramArgs)"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,s,t)=>{var n=t(67294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var n,o={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,n)&&!c.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:a.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},85893:(e,s,t)=>{e.exports=t(75251)},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(67294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);