"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?i.createElement(m,a(a({ref:n},u),{},{components:t})):i.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},72450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const o={},a="Custom Joins",l={unversionedId:"advanced-query/custom-joins",id:"version-0.10.x/advanced-query/custom-joins",title:"Custom Joins",description:"You can use the join method to construct complex join select queries. It takes any RelationDef defined in entity files, and you can define relation with the belongs_to method as well. Join type is specified using JoinType such as inner join, left join and right join.",source:"@site/versioned_docs/version-0.10.x/08-advanced-query/04-custom-joins.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-joins",permalink:"/preview/pr-108/SeaORM/docs/0.10.x/advanced-query/custom-joins",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/08-advanced-query/04-custom-joins.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1694602220,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aggregate Functions",permalink:"/preview/pr-108/SeaORM/docs/0.10.x/advanced-query/aggregate-function"},next:{title:"Sub Query",permalink:"/preview/pr-108/SeaORM/docs/0.10.x/advanced-query/subquery"}},c={},s=[],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-joins"},"Custom Joins"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"join")," method to construct complex join select queries. It takes any ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationDef")," defined in entity files, and you can define relation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"belongs_to")," method as well. Join type is specified using ",(0,r.kt)("inlineCode",{parentName:"p"},"JoinType")," such as inner join, left join and right join."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{JoinType, RelationTrait};\nuse sea_query::Expr;\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(filling::Column::Id.count(), "count")\n        .column_as(\n            Expr::tbl(Alias::new("fruit_alias"), fruit::Column::Name).into_simple_expr(),\n            "fruit_name"\n        )\n        // construct `RelationDef` on the fly\n        .join_rev(\n            JoinType::InnerJoin,\n            cake_filling::Entity::belongs_to(cake::Entity)\n                .from(cake_filling::Column::CakeId)\n                .to(cake::Column::Id)\n                .into()\n        )\n        // reuse a `Relation` from existing Entity\n        .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n        // join with table alias and custom on condition\n        .join_as(\n            JoinType::LeftJoin,\n            cake::Relation::Fruit\n                .def()\n                .on_condition(|_left, right| {\n                    Expr::tbl(right, fruit::Column::Name)\n                        .like("%tropical%")\n                        .into_condition()\n                }),\n            Alias::new("fruit_alias")\n        )\n        .group_by(cake::Column::Id)\n        .having(filling::Column::Id.count().equals(Expr::value(2)))\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name`, COUNT(`filling`.`id`) AS `count`, `fruit_alias`.`name` AS `fruit_name` FROM `cake`",\n        "INNER JOIN `cake_filling` ON `cake_filling`.`cake_id` = `cake`.`id`",\n        "INNER JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n        "LEFT JOIN `fruit` AS `fruit_alias` ON `cake`.`id` = `fruit_alias`.`cake_id` AND `fruit_alias`.`name` LIKE \'%tropical%\'",\n        "GROUP BY `cake`.`id`",\n        "HAVING COUNT(`filling`.`id`) = 2",\n    ]\n    .join(" ")\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can use a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,r.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of such complex query. See ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-108/SeaORM/docs/0.10.x/advanced-query/custom-select#handling-custom-selects"},"here")," for details.")))}p.isMDXComponent=!0}}]);