"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75050],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={},a="Custom Joins",c={unversionedId:"advanced-query/custom-joins",id:"version-0.6.x/advanced-query/custom-joins",title:"Custom Joins",description:"You can use the join method to construct complex join select queries. It takes any RelationDef defined in entity files, and you can define relation with the belongs_to method as well. Join type is specified using JoinType such as inner join, left join and right join.",source:"@site/versioned_docs/version-0.6.x/09-advanced-query/04-custom-joins.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/custom-joins",permalink:"/SeaORM/docs/0.6.x/advanced-query/custom-joins",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/09-advanced-query/04-custom-joins.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1697098869,formattedLastUpdatedAt:"Oct 12, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aggregate Functions",permalink:"/SeaORM/docs/0.6.x/advanced-query/aggregate-function"},next:{title:"Subquery",permalink:"/SeaORM/docs/0.6.x/advanced-query/subquery"}},l={},s=[],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-joins"},"Custom Joins"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," method to construct complex join select queries. It takes any ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationDef")," defined in entity files, and you can define relation with the ",(0,o.kt)("inlineCode",{parentName:"p"},"belongs_to")," method as well. Join type is specified using ",(0,o.kt)("inlineCode",{parentName:"p"},"JoinType")," such as inner join, left join and right join."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{JoinType, RelationTrait};\nuse sea_query::Expr;\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(filling::Column::Id.count(), "count")\n        .join_rev(\n            // construct `RelationDef` on the fly\n            JoinType::InnerJoin,\n            cake_filling::Entity::belongs_to(cake::Entity)\n                .from(cake_filling::Column::CakeId)\n                .to(cake::Column::Id)\n                .into()\n        )\n        // reuse a `Relation` from existing Entity\n        .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n        .group_by(cake::Column::Id)\n        .having(filling::Column::Id.count().equals(Expr::value(2)))\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name`, COUNT(`filling`.`id`) AS `count` FROM `cake`",\n        "INNER JOIN `cake_filling` ON `cake_filling`.`cake_id` = `cake`.`id`",\n        "INNER JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n        "GROUP BY `cake`.`id`",\n        "HAVING COUNT(`filling`.`id`) = 2",\n    ]\n    .join(" ")\n);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can use a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,o.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of such complex query. See ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/custom-select#handling-custom-selects"},"here")," for details.")))}p.isMDXComponent=!0}}]);