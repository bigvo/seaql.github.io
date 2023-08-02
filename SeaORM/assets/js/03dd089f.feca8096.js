"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[40755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Transaction",c={unversionedId:"advanced-query/transaction",id:"version-0.6.x/advanced-query/transaction",title:"Transaction",description:"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs.",source:"@site/versioned_docs/version-0.6.x/09-advanced-query/06-transaction.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/transaction",permalink:"/SeaORM/docs/0.6.x/advanced-query/transaction",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/09-advanced-query/06-transaction.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690981221,formattedLastUpdatedAt:"Aug 2, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Subquery",permalink:"/SeaORM/docs/0.6.x/advanced-query/subquery"},next:{title:"Streaming",permalink:"/SeaORM/docs/0.6.x/advanced-query/streaming"}},l={},s=[{value:"Within a <code>Closure</code>",id:"within-a-closure",level:2},{value:"<code>begin</code> &amp; <code>commit</code> / <code>rollback</code>",id:"begin--commit--rollback",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transaction"},"Transaction"),(0,a.kt)("p",null,"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs."),(0,a.kt)("h2",{id:"within-a-closure"},"Within a ",(0,a.kt)("inlineCode",{parentName:"h2"},"Closure")),(0,a.kt)("p",null,"The transaction will be committed if the closure returned ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),", rollbacked if returned ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),". The 2nd and 3rd type parameters are the Ok and Err types respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// <Fn, A, B> -> Result<A, B>\ndb.transaction::<_, (), DbErr>(|txn| {\n    Box::pin(async move {\n        bakery::ActiveModel {\n            name: Set("SeaSide Bakery".to_owned()),\n            profit_margin: Set(10.4),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        bakery::ActiveModel {\n            name: Set("Top Bakery".to_owned()),\n            profit_margin: Set(15.0),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        Ok(())\n    })\n})\n.await;\n')),(0,a.kt)("p",null,"This is the preferred way for most cases. However, if you happen to run into an ",(0,a.kt)("em",{parentName:"p"},"impossible lifetime")," while trying to capture a reference in the async block, then the following API is the solution."),(0,a.kt)("h2",{id:"begin--commit--rollback"},(0,a.kt)("inlineCode",{parentName:"h2"},"begin")," & ",(0,a.kt)("inlineCode",{parentName:"h2"},"commit")," / ",(0,a.kt)("inlineCode",{parentName:"h2"},"rollback")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"begin")," the transaction followed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"commit")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rollback"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"txn")," goes out of scope, the transaction is automatically rollbacked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let txn = db.begin().await?;\n\nbakery::ActiveModel {\n    name: Set("SeaSide Bakery".to_owned()),\n    profit_margin: Set(10.4),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\nbakery::ActiveModel {\n    name: Set("Top Bakery".to_owned()),\n    profit_margin: Set(15.0),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\ntxn.commit().await?;\n')))}p.isMDXComponent=!0}}]);