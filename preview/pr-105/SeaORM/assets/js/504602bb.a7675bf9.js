"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[69117],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>y});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,m=p["".concat(s,".").concat(y)]||p[y]||l[y]||o;return r?t.createElement(m,i(i({ref:n},d),{},{components:r})):t.createElement(m,i({ref:n},d))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26736:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const o={},i="Sub Query",u={unversionedId:"advanced-query/subquery",id:"version-0.10.x/advanced-query/subquery",title:"Sub Query",description:"Conditional Expression With Sub Query",source:"@site/versioned_docs/version-0.10.x/08-advanced-query/05-subquery.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/subquery",permalink:"/preview/pr-105/SeaORM/docs/0.10.x/advanced-query/subquery",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/08-advanced-query/05-subquery.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691601459,formattedLastUpdatedAt:"Aug 9, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Joins",permalink:"/preview/pr-105/SeaORM/docs/0.10.x/advanced-query/custom-joins"},next:{title:"Transaction",permalink:"/preview/pr-105/SeaORM/docs/0.10.x/advanced-query/transaction"}},s={},c=[{value:"Conditional Expression With Sub Query",id:"conditional-expression-with-sub-query",level:2}],d={toc:c};function l(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sub-query"},"Sub Query"),(0,a.kt)("h2",{id:"conditional-expression-with-sub-query"},"Conditional Expression With Sub Query"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"in_subquery")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"not_in_subquery")," methods to construct conditional expressions with sub-queries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::Condition;\nuse sea_query::Query;\n\nassert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::any().add(\n                cake::Column::Id.in_subquery(\n                    Query::select()\n                        .expr(cake::Column::Id.max())\n                        .from(cake::Entity)\n                        .to_owned()\n                )\n            )\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE `cake`.`id` IN (SELECT MAX(`cake`.`id`) FROM `cake`)",\n    ]\n    .join(" ")\n);\n')))}l.isMDXComponent=!0}}]);