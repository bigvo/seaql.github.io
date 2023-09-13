"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},i="Using SQLite",o={unversionedId:"write-test/sqlite",id:"write-test/sqlite",title:"Using SQLite",description:"If you want to test application logic that does not require database-specific features, SQLite will be a good choice for you.",source:"@site/docs/07-write-test/03-sqlite.md",sourceDirName:"07-write-test",slug:"/write-test/sqlite",permalink:"/preview/pr-108/SeaORM/docs/next/write-test/sqlite",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/07-write-test/03-sqlite.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1694602220,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mock Interface",permalink:"/preview/pr-108/SeaORM/docs/next/write-test/mock"},next:{title:"Custom Select",permalink:"/preview/pr-108/SeaORM/docs/next/advanced-query/custom-select"}},l={},c=[{value:"Integration Test",id:"integration-test",level:2},{value:"Setup database schema",id:"setup-database-schema",level:2},{value:"Performing tests",id:"performing-tests",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-sqlite"},"Using SQLite"),(0,r.kt)("p",null,"If you want to test application logic that does not require database-specific features, SQLite will be a good choice for you."),(0,r.kt)("p",null,"Check out a simple example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/tests/basic.rs"},"here"),"."),(0,r.kt)("h2",{id:"integration-test"},"Integration Test"),(0,r.kt)("p",null,"It is recommended to execute more complex test cases in ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html"},"integration tests"),". The following code snippet illustrates the steps of connecting to a database, setting up schema and performing tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'async fn main() -> Result<(), DbErr> {\n    // Connecting SQLite\n    let db = Database::connect("sqlite::memory:").await?;\n\n    // Setup database schema\n    setup_schema(&db).await?;\n\n    // Performing tests\n    testcase(&db).await?;\n\n    Ok(())\n}\n')),(0,r.kt)("h2",{id:"setup-database-schema"},"Setup database schema"),(0,r.kt)("p",null,"To create tables in SQLite database for testing, instead of writing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCreateStatement"))," manually, you can derive it from ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"async fn setup_schema(db: &DbConn) {\n\n    // Setup Schema helper\n    let schema = Schema::new(DbBackend::Sqlite);\n\n    // Derive from Entity\n    let stmt: TableCreateStatement = schema.create_table_from_entity(MyEntity);\n\n    // Or setup manually\n    assert_eq!(\n        stmt.build(SqliteQueryBuilder),\n        Table::create()\n            .table(MyEntity)\n            .col(\n                ColumnDef::new(MyEntity::Column::Id)\n                    .integer()\n                    .not_null()\n            )\n            //...\n            .build(SqliteQueryBuilder)\n    );\n\n    // Execute create table statement\n    let result = db\n        .execute(db.get_database_backend().build(&stmt))\n        .await;\n}\n")),(0,r.kt)("h2",{id:"performing-tests"},"Performing tests"),(0,r.kt)("p",null,"Execute test cases and assert against the results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'async fn testcase(db: &DbConn) -> Result<(), DbErr> {\n\n    let baker_bob = baker::ActiveModel {\n        name: Set("Baker Bob".to_owned()),\n        contact_details: Set(serde_json::json!({\n            "mobile": "+61424000000",\n            "home": "0395555555",\n            "address": "12 Test St, Testville, Vic, Australia"\n        })),\n        bakery_id: Set(2),\n        ..Default::default()\n    };\n\n    let baker_insert_res = Baker::insert(baker_bob)\n        .exec(db)\n        .await\n        .expect("could not insert baker");\n\n    assert_eq!(baker_insert_res.last_insert_id, 1);\n\n    Ok(())\n}\n')))}m.isMDXComponent=!0}}]);