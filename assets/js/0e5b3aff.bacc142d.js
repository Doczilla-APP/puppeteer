/*! For license information please see 0e5b3aff.bacc142d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20056],{78936:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var s=a(85893),t=a(11151);const n={sidebar_label:"Keyboard"},d="Keyboard class",i={id:"api/puppeteer.keyboard",title:"Keyboard class",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-21.6.1/api/puppeteer.keyboard.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard",permalink:"/api/puppeteer.keyboard",draft:!1,unlisted:!1,tags:[],version:"21.6.1",frontMatter:{sidebar_label:"Keyboard"},sidebar:"api",previous:{title:"Accessibility.snapshot",permalink:"/api/puppeteer.accessibility.snapshot"},next:{title:"Keyboard.down",permalink:"/api/puppeteer.keyboard.down"}},o={},p=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"keyboard-class",children:"Keyboard class"}),"\n",(0,s.jsxs)(r.p,{children:["Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.type",children:"Keyboard.type()"}),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Keyboard\n"})}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["For finer control, you can use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"}),", ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),", and ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.sendcharacter",children:"Keyboard.sendCharacter()"})," to manually fire events as if they were generated from a real keyboard."]}),"\n",(0,s.jsxs)(r.p,{children:["On macOS, keyboard shortcuts like ",(0,s.jsx)(r.code,{children:"\u2318 A"})," -> Select All do not work. See ",(0,s.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues/1313",children:"#1313"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(r.code,{children:"Keyboard"})," class."]}),"\n",(0,s.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(r.p,{children:["An example of holding down ",(0,s.jsx)(r.code,{children:"Shift"})," in order to select and delete some text:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"await page.keyboard.type('Hello World!');\nawait page.keyboard.press('ArrowLeft');\n\nawait page.keyboard.down('Shift');\nfor (let i = 0; i < ' World'.length; i++)\n  await page.keyboard.press('ArrowLeft');\nawait page.keyboard.up('Shift');\n\nawait page.keyboard.press('Backspace');\n// Result text will end up saying 'Hello!'\n"})}),"\n",(0,s.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(r.p,{children:["An example of pressing ",(0,s.jsx)(r.code,{children:"A"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"await page.keyboard.down('Shift');\nawait page.keyboard.press('KeyA');\nawait page.keyboard.up('Shift');\n"})}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"Modifiers"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"down(key, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Dispatches a ",(0,s.jsx)("code",{children:"keydown"})," event."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"press(key, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Shortcut for ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.sendcharacter",children:"sendCharacter(char)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Dispatches a ",(0,s.jsx)("code",{children:"keypress"})," and ",(0,s.jsx)("code",{children:"input"})," event. This does not send a ",(0,s.jsx)("code",{children:"keydown"})," or ",(0,s.jsx)("code",{children:"keyup"})," event."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.type",children:"type(text, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Sends a ",(0,s.jsx)("code",{children:"keydown"}),", ",(0,s.jsx)("code",{children:"keypress"}),"/",(0,s.jsx)("code",{children:"input"}),", and ",(0,s.jsx)("code",{children:"keyup"})," event for each character in the text."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"up(key)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Dispatches a ",(0,s.jsx)("code",{children:"keyup"})," event."]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},75251:(e,r,a)=>{var s=a(67294),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,a){var s,n={},p=null,c=null;for(s in void 0!==a&&(p=""+a),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)d.call(r,s)&&!o.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:t,type:e,key:p,ref:c,props:n,_owner:i.current}}r.Fragment=n,r.jsx=p,r.jsxs=p},85893:(e,r,a)=>{e.exports=a(75251)},11151:(e,r,a)=>{a.d(r,{Z:()=>i,a:()=>d});var s=a(67294);const t={},n=s.createContext(t);function d(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);