"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(m,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Consumer",s={unversionedId:"streamer/consumer",id:"version-0.1.x/streamer/consumer",title:"Consumer",description:"The Consumer trait defines the common interface of stream consumers.",source:"@site/versioned_docs/version-0.1.x/03-streamer/03-consumer.md",sourceDirName:"03-streamer",slug:"/streamer/consumer",permalink:"/preview/pr-108/SeaStreamer/docs/0.1.x/streamer/consumer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.1.x/03-streamer/03-consumer.md",tags:[],version:"0.1.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1694602220,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Producer",permalink:"/preview/pr-108/SeaStreamer/docs/0.1.x/streamer/producer"},next:{title:"Inter Process",permalink:"/preview/pr-108/SeaStreamer/docs/0.1.x/processors/inter-process"}},m={},l=[{value:"<code>ConsumerOptions</code>",id:"consumeroptions",level:2},{value:"<code>ConsumerMode</code>",id:"consumermode",level:3},{value:"<code>RealTime</code>",id:"realtime",level:4},{value:"<code>Resumable</code>",id:"resumable",level:4},{value:"<code>LoadBalanced</code>",id:"loadbalanced",level:4},{value:"<code>ConsumerGroup</code>",id:"consumergroup",level:3},{value:"<code>next</code>",id:"next",level:2},{value:"<code>stream</code>",id:"stream",level:2},{value:"<code>assign</code>",id:"assign",level:2},{value:"<code>rewind</code>",id:"rewind",level:2},{value:"<code>seek</code>",id:"seek",level:2}],d={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/*/sea_streamer/trait.Consumer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Consumer"))," trait defines the common interface of stream consumers."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaConsumer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"KafkaConsumer"))," has more functions for committing offsets. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConsumer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"StdioConsumer"))," currently has no specific functions."),(0,r.kt)("h2",{id:"consumeroptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"ConsumerOptions")),(0,r.kt)("h3",{id:"consumermode"},(0,r.kt)("inlineCode",{parentName:"h3"},"ConsumerMode")),(0,r.kt)("p",null,"There are 3 modes:"),(0,r.kt)("h4",{id:"realtime"},(0,r.kt)("inlineCode",{parentName:"h4"},"RealTime")),(0,r.kt)("p",null,"This is the 'vanilla' stream consumer. It does not auto-commit, and thus only consumes messages from now on."),(0,r.kt)("h4",{id:"resumable"},(0,r.kt)("inlineCode",{parentName:"h4"},"Resumable")),(0,r.kt)("p",null,"When the process restarts, it will resume the stream from the previous committed sequence."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"kafka-semantics"},"Kafka semantics"),(0,r.kt)("p",{parentName:"admonition"},"It will use a group id unique to this host: on a physical machine, it will use the mac address.\nInside a docker container, it will use the container id.")),(0,r.kt)("h4",{id:"loadbalanced"},(0,r.kt)("inlineCode",{parentName:"h4"},"LoadBalanced")),(0,r.kt)("p",null,"You should assign a consumer group manually. The load-balancing mechanism is implementation-specific."),(0,r.kt)("h3",{id:"consumergroup"},(0,r.kt)("inlineCode",{parentName:"h3"},"ConsumerGroup")),(0,r.kt)("p",null,"A consumer group is a string for clients to identify themselves to the streaming server. So that when you reconnect, the states can be downloaded from the server. From the broker's point of view, it is all that matters. The client can connect from any host or network."),(0,r.kt)("p",null,"Multiple consumers can share the same consumer group, and remain connected to the server at the same time. Usually, the intention is to achieve load-balancing. The precise semantics is backend-specific."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"kafka-semantics-1"},"Kafka semantics"),(0,r.kt)("p",{parentName:"admonition"},"If multiple consumers shares the same group, only one consumer in the group will receive a message, i.e. it is load-balanced."),(0,r.kt)("p",{parentName:"admonition"},"However, the load-balancing mechanism is what makes Kafka different:"),(0,r.kt)("p",{parentName:"admonition"},"Each stream is divided into multiple shards (known as partition), and each partition will be assigned to only one consumer in a group."),(0,r.kt)("p",{parentName:"admonition"},"Say there are 2 consumers (in the group) and 2 partitions, then each consumer will receive messages from one partition, and they are thus load-balanced."),(0,r.kt)("p",{parentName:"admonition"},"If there are 2 consumers and 3 partitions, then one consumer will be assigned 2 partitions, and the other will be assigned only 1."),(0,r.kt)("p",{parentName:"admonition"},"However if the stream has only 1 partition, even if there are many consumers, these messages will only be received by the assigned consumer, and other consumers will be in stand-by mode, resulting in a hot-failover setup.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"stdio-semantics"},"Stdio semantics"),(0,r.kt)("p",{parentName:"admonition"},"If multiple consumers share the same group, only one in the group will receive a message.\nThis is load-balanced in a round-robin fashion.")),(0,r.kt)("h2",{id:"next"},(0,r.kt)("inlineCode",{parentName:"h2"},"next")),(0,r.kt)("p",null,"Poll and receive one message: it awaits until there are new messages."),(0,r.kt)("h2",{id:"stream"},(0,r.kt)("inlineCode",{parentName:"h2"},"stream")),(0,r.kt)("p",null,"Returns an async stream. You cannot create multiple streams from the same consumer, nor perform any operation while streaming."),(0,r.kt)("p",null,"It allows you to do neat things:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let items = consumer\n    .stream()\n    .take(num)\n    .map(process_message)\n    .collect::<Vec<_>>()\n    .await\n")),(0,r.kt)("h2",{id:"assign"},(0,r.kt)("inlineCode",{parentName:"h2"},"assign")),(0,r.kt)("p",null,"Assign this consumer to a particular shard."),(0,r.kt)("p",null,"It will only take effect on the next ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer::seek")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer::rewind"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"kafka-semantics-2"},"Kafka semantics"),(0,r.kt)("p",{parentName:"admonition"},"Always succeed. This operation is additive. You can assign a consumer to multiple shards (aka partition). There is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaConsumer::unassign")," method.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"stdio-semantics-1"},"Stdio semantics"),(0,r.kt)("p",{parentName:"admonition"},"There is only shard ZERO anyway.")),(0,r.kt)("h2",{id:"rewind"},(0,r.kt)("inlineCode",{parentName:"h2"},"rewind")),(0,r.kt)("p",null,"Rewind the stream to a particular sequence number."),(0,r.kt)("p",null,"If the consumer is not already assigned, shard ZERO will be used."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"kafka-semantics-3"},"Kafka semantics"),(0,r.kt)("p",{parentName:"admonition"},"Note: this rewind all streams across all assigned partitions.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("h4",{parentName:"admonition",id:"stdio-semantics-2"},"Stdio semantics"),(0,r.kt)("p",{parentName:"admonition"},"This is not implemented by the Stdio backend.")),(0,r.kt)("h2",{id:"seek"},(0,r.kt)("inlineCode",{parentName:"h2"},"seek")),(0,r.kt)("p",null,"Seek all streams to the given point in time. It will start consuming from the earliest message with a timestamp later than ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,r.kt)("p",null,"If the consumer is not already assigned, shard ZERO will be used."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"kafka-semantics-4"},"Kafka semantics"),(0,r.kt)("p",{parentName:"admonition"},"This async method is not cancel safe. You must await this future, and this Consumer will be unusable for any operations until it finishes.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("h4",{parentName:"admonition",id:"stdio-semantics-3"},"Stdio semantics"),(0,r.kt)("p",{parentName:"admonition"},"This is not implemented by the Stdio backend.")))}p.isMDXComponent=!0}}]);