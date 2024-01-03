/*! For license information please see 5d3f603d.e8cf617a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30413],{58972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(85893),r=t(11151);const s={sidebar_label:"Page.evaluateOnNewDocument"},o="Page.evaluateOnNewDocument() method",i={id:"api/puppeteer.page.evaluateonnewdocument",title:"Page.evaluateOnNewDocument() method",description:"Adds a function which would be invoked in one of the following scenarios:",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.page.evaluateonnewdocument.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluateonnewdocument",permalink:"/api/puppeteer.page.evaluateonnewdocument",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"Page.evaluateOnNewDocument"},sidebar:"api",previous:{title:"Page.evaluateHandle",permalink:"/api/puppeteer.page.evaluatehandle"},next:{title:"Page.exposeFunction",permalink:"/api/puppeteer.page.exposefunction"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"pageevaluateonnewdocument-method",children:"Page.evaluateOnNewDocument() method"}),"\n",(0,a.jsx)(n.p,{children:"Adds a function which would be invoked in one of the following scenarios:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"whenever the page is navigated"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"whenever the child frame is attached or navigated. In this case, the function is invoked in the context of the newly attached frame."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The function is invoked after the document was created but before any of its scripts were run. This is useful to amend the JavaScript environment, e.g. to seed ",(0,a.jsx)(n.code,{children:"Math.random"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract evaluateOnNewDocument<\n    Params extends unknown[],\n    Func extends (...args: Params) => unknown = (...args: Params) => unknown,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<NewDocumentScriptEvaluation>;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"pageFunction"}),(0,a.jsx)(n.td,{children:"Func | string"}),(0,a.jsx)(n.td,{children:"Function to be evaluated in browser context"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"args"}),(0,a.jsx)(n.td,{children:"Params"}),(0,a.jsxs)(n.td,{children:["Arguments to pass to ",(0,a.jsx)("code",{children:"pageFunction"})]})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.p,{children:["Promise<",(0,a.jsx)(n.a,{href:"/api/puppeteer.newdocumentscriptevaluation",children:"NewDocumentScriptEvaluation"}),">"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"An example of overriding the navigator.languages property before the page loads:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// preload.js\n\n// overwrite the `languages` property to use a custom getter\nObject.defineProperty(navigator, 'languages', {\n  get: function () {\n    return ['en-US', 'en', 'bn'];\n  },\n});\n\n// In your puppeteer script, assuming the preload.js file is\n// in same folder of our script.\nconst preloadFile = fs.readFileSync('./preload.js', 'utf8');\nawait page.evaluateOnNewDocument(preloadFile);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var a=t(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,s={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,a)&&!l.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);