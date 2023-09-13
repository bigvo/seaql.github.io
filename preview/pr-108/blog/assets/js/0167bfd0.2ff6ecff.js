"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[2390],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>v});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),c=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},u=function(t){var a=c(t.components);return n.createElement(s.Provider,{value:a},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(e),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return e?n.createElement(v,i(i({ref:a},u),{},{components:e})):n.createElement(v,i({ref:a},u))}));function v(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=t,l[p]="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=e[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},7721:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=e(7462),r=(e(7294),e(3905));const o={slug:"2022-01-01-whats-new-in-0.5.0",title:"What's new in SeaORM 0.5.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,l={permalink:"/preview/pr-108/blog/2022-01-01-whats-new-in-0.5.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-01-01-whats-new-in-0.5.0.md",source:"@site/blog/2022-01-01-whats-new-in-0.5.0.md",title:"What's new in SeaORM 0.5.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.5.0 today! Here are some feature highlights \ud83c\udf1f:",date:"2022-01-01T00:00:00.000Z",formattedDate:"January 1, 2022",tags:[{label:"news",permalink:"/preview/pr-108/blog/tags/news"}],readingTime:3.98,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-01-01-whats-new-in-0.5.0",title:"What's new in SeaORM 0.5.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.6.0",permalink:"/preview/pr-108/blog/2022-02-07-whats-new-in-0.6.0"},nextItem:{title:"What's new in SeaORM 0.4.0",permalink:"/preview/pr-108/blog/2021-11-19-whats-new-in-0.4.0"}},s={authorsImageUrls:[void 0]},c=[{value:"Insert and Update Return <code>Model</code>",id:"insert-and-update-return-model",level:2},{value:"<code>ActiveValue</code> Revamped",id:"activevalue-revamped",level:2},{value:"SeaORM CLI &amp; Codegen Updates",id:"seaorm-cli--codegen-updates",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Community",id:"community",level:2}],u={toc:c},p="wrapper";function m(t){let{components:a,...e}=t;return(0,r.kt)(p,(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.5.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.5.0"))," today! Here are some feature highlights \ud83c\udf1f:"),(0,r.kt)("h2",{id:"insert-and-update-return-model"},"Insert and Update Return ",(0,r.kt)("inlineCode",{parentName:"h2"},"Model")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/339"},"#339"),"] As asked and requested by many of our community members. You can now get the refreshed ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," after insert or update operations. If you want to mutate the model and save it back to the database you can convert it into ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," with the method ",(0,r.kt)("inlineCode",{parentName:"p"},"into_active_model"),"."),(0,r.kt)("p",null,"Breaking Changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ActiveModel::insert")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveModel::update")," return ",(0,r.kt)("inlineCode",{parentName:"li"},"Model")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveModel")),(0,r.kt)("li",{parentName:"ul"},"Method ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveModelBehavior::after_save")," takes ",(0,r.kt)("inlineCode",{parentName:"li"},"Model")," as input instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveModel"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Construct a `ActiveModel`\nlet active_model = ActiveModel {\n    name: Set("Classic Vanilla Cake".to_owned()),\n    ..Default::default()\n};\n// Do insert\nlet cake: Model = active_model.insert(db).await?;\nassert_eq!(\n    cake,\n    Model {\n        id: 1,\n        name: "Classic Vanilla Cake".to_owned(),\n    }\n);\n\n// Covert `Model` into `ActiveModel`\nlet mut active_model = cake.into_active_model();\n// Change the name of cake\nactive_model.name = Set("Chocolate Cake".to_owned());\n// Do update\nlet cake: Model = active_model.update(db).await?;\nassert_eq!(\n    cake,\n    Model {\n        id: 1,\n        name: "Chocolate Cake".to_owned(),\n    }\n);\n\n// Do delete\ncake.delete(db).await?;\n')),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nicoulaj"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/3162?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Julien Nicoulaud"))),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/edg-l"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/15859336?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Edgar")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,r.kt)("h2",{id:"activevalue-revamped"},(0,r.kt)("inlineCode",{parentName:"h2"},"ActiveValue")," Revamped"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/340"},"#340"),"] The ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveValue")," is now defined as an enum instead of a struct. The public API of it remains unchanged, except ",(0,r.kt)("inlineCode",{parentName:"p"},"Unset")," was deprecated and ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveValue::NotSet")," should be used instead."),(0,r.kt)("p",null,"Breaking Changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rename method ",(0,r.kt)("inlineCode",{parentName:"li"},"sea_orm::unchanged_active_value_not_intended_for_public_use")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"sea_orm::Unchanged")),(0,r.kt)("li",{parentName:"ul"},"Rename method ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue::unset")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue::not_set")),(0,r.kt)("li",{parentName:"ul"},"Rename method ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue::is_unset")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue::is_not_set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PartialEq")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue")," will also check the equality of state instead of just checking the equality of value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Defines a stateful value used in ActiveModel.\npub enum ActiveValue<V>\nwhere\n    V: Into<Value>,\n{\n    /// A defined [Value] actively being set\n    Set(V),\n    /// A defined [Value] remain unchanged\n    Unchanged(V),\n    /// An undefined [Value]\n    NotSet,\n}\n")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},"Designed by:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Chris Tsang")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,r.kt)("h2",{id:"seaorm-cli--codegen-updates"},"SeaORM CLI & Codegen Updates"),(0,r.kt)("p",null,"Install latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install sea-orm-cli\n")),(0,r.kt)("p",null,"Updates related to entity files generation (",(0,r.kt)("inlineCode",{parentName:"p"},"cargo generate entity"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/348"},"#348"),"] Discovers and defines PostgreSQL enums"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/386"},"#386"),"] Supports SQLite database, you can generate entity files from all supported databases including MySQL, PostgreSQL and SQLite")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/charleschege"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/33346042?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Charles\xb7Chege"))),(0,r.kt)("br",null),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,r.kt)("h2",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/373"},"#373"),"] You can trace the query executed by SeaORM with ",(0,r.kt)("inlineCode",{parentName:"p"},"debug-print")," feature enabled and ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,r.kt)("inlineCode",{parentName:"a"},"tracing-subscriber"))," up and running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nappa85"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/7566389?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Marco Napetti"))))),(0,r.kt)("h2",{id:"sponsor"},"Sponsor"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," profile is up! If you feel generous, a small donation will be greatly appreciated."),(0,r.kt)("p",null,"A big shout out to our sponsors \ud83d\ude07:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/praveenperera"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1775346?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Praveen Perera")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,r.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Unnamed Sponsor"))))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,r.kt)("p",null,"Here is the roadmap for SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/6"},(0,r.kt)("inlineCode",{parentName:"a"},"0.6.x")),"."))}m.isMDXComponent=!0}}]);