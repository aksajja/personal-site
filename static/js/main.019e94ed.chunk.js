(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var a=n(0),c=n(1),s=n(16),i=n(3),l=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&l.a.initialize(o);var b=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){"production"===j&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},u=n(5),h=n(23),d=[{index:!0,label:"Akarshan Sajja",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(c.lazy)((function(){return n.e(4).then(n.t.bind(null,166,7))})),x=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("div",{className:"hamburger-container",children:[Object(a.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(a.jsx)("ul",{children:n?Object(a.jsx)("li",{className:"menu close-menu",children:Object(a.jsx)("div",{onClick:function(){return s(!n)},className:"menu-hover",children:"\u2715"})}):Object(a.jsx)("li",{className:"menu open-menu",children:Object(a.jsx)("div",{onClick:function(){return s(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(a.Fragment,{}),children:Object(a.jsx)(O,{right:!0,isOpen:n,children:Object(a.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:e.path,onClick:function(){return s(!n)},children:Object(a.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(a.jsxs)("header",{id:"header",children:[Object(a.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(a.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(a.jsx)("nav",{className:"links",children:Object(a.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(a.jsx)(x,{})]})},p=n(25),f=function(){return Object(a.jsxs)("section",{id:"sidebar",children:[Object(a.jsxs)("section",{id:"intro",children:[Object(a.jsx)(u.b,{to:"/",className:"logo",children:Object(a.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(a.jsxs)("header",{children:[Object(a.jsx)("h2",{children:"Akarshan Sajja"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"mailto:asajja@asu.edu",children:"asajja@asu.edu"})})]})]}),Object(a.jsxs)("section",{className:"blurb",children:[Object(a.jsx)("h2",{children:"About"}),Object(a.jsxs)("p",{children:["Hi, I'm Akarshan. ML Researcher | Math entusiast | Full stack developer. Currently a Graduate student at Arizona State University, working with Dr.Gautam Dasarathy. I am a BITS Pilani Alumni. Earlier I was at ",Object(a.jsx)("a",{href:"https://www.adonmo.com/",children:"Adonmo"}),", an ad-tech startup, where I was the 2nd employee and saw it grow from $0 -> $10 million valuation."]}),Object(a.jsx)("ul",{className:"actions",children:Object(a.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(a.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(a.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(a.jsxs)("section",{id:"footer",children:[Object(a.jsx)(p.a,{}),Object(a.jsxs)("p",{className:"copyright",children:["\xa9 Akarshan Sajja ",Object(a.jsx)(u.b,{to:"/",children:"aksajja.github.io"}),"."]})]})]})},k=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(a.jsxs)(s.b,{children:[Object(a.jsx)(b,{}),Object(a.jsx)(k,{}),Object(a.jsxs)(s.a,{titleTemplate:"%s | Akarshan Sajja",defaultTitle:"Akarshan Sajja",defer:!1,children:[e.title&&Object(a.jsx)("title",{children:e.title}),Object(a.jsx)("meta",{name:"description",content:e.description})]}),Object(a.jsxs)("div",{id:"wrapper",children:[Object(a.jsx)(m,{}),Object(a.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(a.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Akarshan Sajja's personal website."};t.a=v},25:function(e,t,n){"use strict";var a=n(0),c=(n(1),n(29)),s=n(30),i=n(31),l=n(32),r=n(33),j=[{link:"https://github.com/aksajja",label:"Github",icon:s.faGithub},{link:"https://www.instagram.com/akarshansajja/",label:"Instagram",icon:i.faInstagram},{link:"https://www.linkedin.com/in/akarshan-sajja-339a0a76/",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:asajja@asu.edu",label:"Email",icon:r.faEnvelope}];t.a=function(){return Object(a.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.link,children:Object(a.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(15),l=n(5),r=n(3),j=n(21),o=(n(46),Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,163))}))),b=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,170))})),u=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,164))})),h=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,165))})),d=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,169))})),O=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,167))})),x=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,168))})),m=function(){return Object(a.jsx)(l.a,{basename:"/personal-site",children:Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(j.a,{}),children:Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(a.jsx)(r.a,{path:"/about",component:o}),Object(a.jsx)(r.a,{path:"/projects",component:d}),Object(a.jsx)(r.a,{path:"/stats",component:x}),Object(a.jsx)(r.a,{path:"/contact",component:b}),Object(a.jsx)(r.a,{path:"/resume",component:O}),Object(a.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(a.jsx)(p,{}),f):Object(i.render)(Object(a.jsx)(p,{}),f)}},[[47,1,3]]]);
//# sourceMappingURL=main.019e94ed.chunk.js.map