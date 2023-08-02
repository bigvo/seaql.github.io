"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,h=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},i="Getting Started",s={unversionedId:"seaography/getting-started",id:"version-0.12.x/seaography/getting-started",title:"Getting Started",description:"This example can be found on SeaORM + Seaography Example.",source:"@site/versioned_docs/version-0.12.x/10-seaography/02-getting-started.md",sourceDirName:"10-seaography",slug:"/seaography/getting-started",permalink:"/SeaORM/docs/seaography/getting-started",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/10-seaography/02-getting-started.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690981221,formattedLastUpdatedAt:"Aug 2, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udded Seaography Intro",permalink:"/SeaORM/docs/seaography/seaography-intro"},next:{title:"Looking Forward",permalink:"/SeaORM/docs/seaography/looking-forward"}},p={},l=[{value:"Install Seaography",id:"install-seaography",level:2},{value:"Generate Seaography Entities",id:"generate-seaography-entities",level:2},{value:"Generate GraphQL Project",id:"generate-graphql-project",level:2},{value:"Start the server",id:"start-the-server",level:2}],c={toc:l};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"This example can be found on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/seaography_example"},"SeaORM + Seaography Example"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/SeaQL/sea-orm/master/examples/seaography_example/Seaography%20example.png",alt:null})),(0,n.kt)("p",null,"To get started, all you need is a live SQL database with schema. You can code everything in Rust by writing SeaORM migrations, or design the schema with a GUI tool (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/datagrip/"},"DataGrip"),")."),(0,n.kt)("h2",{id:"install-seaography"},"Install Seaography"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install seaography-cli@^1.0.0-rc.2\n")),(0,n.kt)("h2",{id:"generate-seaography-entities"},"Generate Seaography Entities"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sea-orm-cli generate entity --output-dir graphql/src/entities --seaography\n")),(0,n.kt)("p",null,"Generate entities with ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-orm-cli"),", but with an additional ",(0,n.kt)("inlineCode",{parentName:"p"},"--seaography")," flag. The entities are basically good-old SeaORM entities, but with additional ",(0,n.kt)("inlineCode",{parentName:"p"},"RelatedEntity")," enum."),(0,n.kt)("h2",{id:"generate-graphql-project"},"Generate GraphQL Project"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# seaography-cli <DESTINATION> <ENTITIES> <DATABASE_URL> <CRATE_NAME>\nseaography-cli graphql graphql/src/entities $DATABASE_URL sea-orm-seaography-example\n")),(0,n.kt)("h2",{id:"start-the-server"},"Start the server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd graphql\ncargo run\n")),(0,n.kt)("p",null,"You are of course free to modify the project to suit your needs. But the interesting bit starts at the ",(0,n.kt)("inlineCode",{parentName:"p"},"seaography::register_entity!")," macro and the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/seaography/1.0.0-rc.2/seaography/builder/struct.Builder.html"},"seaography::Builder"),"."))}g.isMDXComponent=!0}}]);