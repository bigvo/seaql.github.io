"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[45084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,y=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="One to Many",l={unversionedId:"relation/one-to-many",id:"version-0.4.x/relation/one-to-many",title:"One to Many",description:'A one-to-many relation is similar to one-to-one relation. In the previous section, we give the example of "a Cake entity has at most one Fruit topping". In one-to-many relation, we change the "at most one" constraint. So, we have a Cake entity that might have many Fruit toppings.',source:"@site/versioned_docs/version-0.4.x/06-relation/02-one-to-many.md",sourceDirName:"06-relation",slug:"/relation/one-to-many",permalink:"/preview/pr-105/SeaORM/docs/0.4.x/relation/one-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/06-relation/02-one-to-many.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691601459,formattedLastUpdatedAt:"Aug 9, 2023",sidebarPosition:2,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"One to One",permalink:"/preview/pr-105/SeaORM/docs/0.4.x/relation/one-to-one"},next:{title:"Many to Many",permalink:"/preview/pr-105/SeaORM/docs/0.4.x/relation/many-to-many"}},s={},p=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"one-to-many"},"One to Many"),(0,o.kt)("p",null,'A one-to-many relation is similar to one-to-one relation. In the previous section, we give the example of "a ',(0,o.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,o.kt)("inlineCode",{parentName:"p"},"Fruit"),' topping". In one-to-many relation, we change the "at most one" constraint. So, we have a ',(0,o.kt)("inlineCode",{parentName:"p"},"Cake")," entity that might have many ",(0,o.kt)("inlineCode",{parentName:"p"},"Fruit")," toppings."),(0,o.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,o.kt)("p",null,"This is almost identical to defining a one-to-one relation; the only difference is that we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity::has_many()")," method here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{2,8,13} title="entity/cake.rs"',"{2,8,13}":!0,title:'"entity/cake.rs"'},"pub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,o.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,o.kt)("p",null,"It is the same as defining the one-to-one inverse relation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")))}c.isMDXComponent=!0}}]);