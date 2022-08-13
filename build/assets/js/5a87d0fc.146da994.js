"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=l,h=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={},a="[3]Graphs",i={unversionedId:"Algorithm/Algorithm[3]",id:"Algorithm/Algorithm[3]",title:"[3]Graphs",description:"\u5716\u5f62\u662f\u96e2\u6563\u6578\u5b78\u4e2d\u5176\u4e2d\u4e00\u9805\u91cd\u8981\u7684\u9805\u76ee\u3002Graph\u7684\u57fa\u790e\u4ecb\u7d39\u5728DataStructures\u4e2d\u7684Graph\u5716\u5f62\u6709\u4ecb\u7d39\u904e\uff0c\u9019\u88e1\u7c21\u55ae\u8907\u7fd2\u4e00\u4e9b\u63a5\u4e0b\u4f86\u6703\u51fa\u73fe\u7684\u57fa\u790e\u6982\u5ff5\u53ca\u540d\u8a5e\u3002",source:"@site/docs/Algorithm/Algorithm[3].md",sourceDirName:"Algorithm",slug:"/Algorithm/Algorithm[3]",permalink:"/docs/Algorithm/Algorithm[3]",draft:!1,editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Algorithm/Algorithm[3].md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[2] Basic of Algorithm Analysis",permalink:"/docs/Algorithm/Algorithm[2]"},next:{title:"[4.1]Greedy Algorithms - Analysis",permalink:"/docs/Algorithm/Algorithm[4_1]"}},c={},p=[{value:"\u7121\u5411\u5716\uff08Undirected graph\uff09: G",id:"\u7121\u5411\u5716undirected-graph-g",level:5},{value:"\u6709\u5411\u5716\uff08Directed graph\uff09: G&#39;",id:"\u6709\u5411\u5716directed-graph-g",level:5},{value:"\u8def\u5f91Paths : P",id:"\u8def\u5f91paths--p",level:5},{value:"Connectivity",id:"connectivity",level:5},{value:"Tree",id:"tree",level:5},{value:"Connected Component",id:"connected-component",level:2},{value:"correctness :  \u96c6\u5408R\u6700\u5f8c\u771f\u7684\u662f\u5305\u542bs\u7684connected component of G",id:"correctness---\u96c6\u5408r\u6700\u5f8c\u771f\u7684\u662f\u5305\u542bs\u7684connected-component-of-g",level:5},{value:"Strongly Connected Component (<strong>SCC</strong>)",id:"strongly-connected-component-scc",level:5},{value:"Breadth-Fisrst-Search (BFS)",id:"breadth-fisrst-search-bfs",level:2},{value:"Implement",id:"implement",level:3},{value:"Depth-Fisrst-Search (DFS)",id:"depth-fisrst-search-dfs",level:2},{value:"Implement",id:"implement-1",level:3},{value:"Bipartiteness",id:"bipartiteness",level:2},{value:"Test Bipartiteness",id:"test-bipartiteness",level:3},{value:"Correctness :",id:"correctness-",level:5},{value:"Connectivity",id:"connectivity-1",level:2},{value:"Testing Strong Connectivity",id:"testing-strong-connectivity",level:3},{value:"Correctness",id:"correctness",level:5},{value:"Directed Acyclic Graphs and Topological Ordering",id:"directed-acyclic-graphs-and-topological-ordering",level:2},{value:"Q:\u82e5G\u70ba\u4e00DAG, \u90a3\u9ebcG\u6703\u6709topological ordering\u55ce?",id:"q\u82e5g\u70ba\u4e00dag-\u90a3\u9ebcg\u6703\u6709topological-ordering\u55ce",level:4},{value:"Compute a topological ordering of G",id:"compute-a-topological-ordering-of-g",level:3},{value:"\u6642\u9593\u8907\u96dc\u5ea6",id:"\u6642\u9593\u8907\u96dc\u5ea6",level:4}],s={toc:p};function d(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"3graphs"},"[3]","Graphs"),(0,l.kt)("p",null,"\u5716\u5f62\u662f\u96e2\u6563\u6578\u5b78\u4e2d\u5176\u4e2d\u4e00\u9805\u91cd\u8981\u7684\u9805\u76ee\u3002Graph\u7684\u57fa\u790e\u4ecb\u7d39\u5728DataStructures\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"https://yehs1225.github.io/docs/DataStructures/Graph"},"Graph\u5716\u5f62"),"\u6709\u4ecb\u7d39\u904e\uff0c\u9019\u88e1\u7c21\u55ae\u8907\u7fd2\u4e00\u4e9b\u63a5\u4e0b\u4f86\u6703\u51fa\u73fe\u7684\u57fa\u790e\u6982\u5ff5\u53ca\u540d\u8a5e\u3002"),(0,l.kt)("p",null,"\u5716\u5f62\u662f\u4e00\u7a2e\u7c21\u55ae\u7528\u4f86\u8868\u793a\u6210\u5c0d\u95dc\u4fc2\uff08pairwise\uff09\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("h5",{id:"\u7121\u5411\u5716undirected-graph-g"},"\u7121\u5411\u5716\uff08Undirected graph\uff09: G"),(0,l.kt)("p",null,"\u6211\u5011\u7528V\u8868\u793a",(0,l.kt)("strong",{parentName:"p"},"\u9ede"),"nodes\uff08vertices\uff09\u7684\u96c6\u5408\uff1bE\u8868\u793a",(0,l.kt)("strong",{parentName:"p"},"\u908a"),"edges\u7684\u96c6\u5408\uff0c\u800c\u6bcf\u689d\u908a\u90fd ",(0,l.kt)("strong",{parentName:"p"},"joins")," \u5169\u500b\u9ede\uff1b\u7528 Edge e \u2208 E\u8868\u793a\u542b\u6709V\u4e2d\u5169\u5143\u7d20\u7684\u5b50\u96c6\u5408\uff1ae = {u,v} for some u, v \u2208 V\uff0c\u4e26\u7a31u, v \u70bae\u7684\u5169\u500b\u7aef\u9ede\uff08end\uff09\u3002"),(0,l.kt)("h5",{id:"\u6709\u5411\u5716directed-graph-g"},"\u6709\u5411\u5716\uff08Directed graph\uff09: G'"),(0,l.kt)("p",null,"\u6211\u5011\u7528V\u8868\u793a",(0,l.kt)("strong",{parentName:"p"},"\u9ede"),"nodes\uff08vertices\uff09\u7684\u96c6\u5408\uff1bE'\u8868\u793a",(0,l.kt)("strong",{parentName:"p"},"\u908a"),"edges\u7684\u96c6\u5408\uff1b\u6bcf\u500bEdge e' \u2208 E'\u90fd\u8868\u793a\u4e00\u500b\u6709\u9806\u5e8f\u7684pair (u,v)\uff0c\u4e5f\u5c31\u662f\u8aaau,v\u4e0d\u53ef\u5c0d\u8abf\uff0c\u4e26\u7a31u\u662f\u908a\u7684\u982d\uff08head\uff09\u3001 v \u70ba\u5c3e\uff08tail\uff09\uff0c\u53e6\u5916\uff0c\u4e5f\u7a31edge e' \u96e2\u958b\u9edeu\u9032\u5165\u9edev\u3002"),(0,l.kt)("h5",{id:"\u8def\u5f91paths--p"},"\u8def\u5f91Paths : P"),(0,l.kt)("p",null,"\u5728G=(V,E)\u4e2d\uff0c\u6709\u4e00\u5e8f\u5217P\u7531v1,v2,....vk\u7d44\u6210\uff0c\u5176\u4e2d\u6bcf\u4e00\u5c0dvi , vi+1\u90fd\u6709\u908a\u76f8\u9023\u3002P\u88ab\u7a31\u4f5c\u5f9ev1\u5230vk\u7684\u8def\u5f91\uff0c\u6216\u7a31\u70bav1-vk path\u3002\u82e5\u4e00\u8def\u5f91\u9664\u4e86\u8d77\u9ede\u548c\u7d42\u9ede\u5916\u7684\u5176\u4ed6\u9ede\u90fd\u53ea\u7d93\u904e\u4e00\u6b21\uff0c\u5c31\u7a31\u70basimple path\u3002"),(0,l.kt)("h5",{id:"connectivity"},"Connectivity"),(0,l.kt)("p",null,"\u5728\u7121\u5411\u5716\u4e2dG =\uff08V,E\uff09\uff0c\u82e5\u6bcf\u4e00\u5c0d\uff08u,v\uff09u,v\u2208V \u90fd\u5b58\u5728\u4e00\u8def\u5f91\u5f9eu\u5230v\uff0c\u5247\u7a31\u4f5c",(0,l.kt)("strong",{parentName:"p"},"connected"),"\uff1b\u5728\u6709\u5411\u5716\u4e2dG' =\uff08V,E'\uff09\u8981\u5b9a\u7fa9connectivity\u5247\u8f03\u5fae\u5999!\u56e0\u70ba\u53ef\u80fd\u5b58\u5728u-v path\u4f46\u4e0d\u5b58\u5728v-u path\uff0c\u56e0\u6b64\u5b9a\u7fa9\u70ba\uff1a\u82e5\u6bcf\u4e00\u5c0d\uff08u,v\uff09u,v\u2208V \u90fd\u5b58\u5728\u4e00\u8def\u5f91\u5f9eu\u5230v\u4e26\u4e14\u5b58\u5728\u4e00\u8def\u5f91\u5f9ev\u5230u\uff0c\u7a31\u4f5c",(0,l.kt)("strong",{parentName:"p"},"strongly connected"),"\u3002"),(0,l.kt)("h5",{id:"tree"},"Tree"),(0,l.kt)("p",null,"\u6a39\u5728DataStructures\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"https://yehs1225.github.io/docs/DataStructures/Tree"},"Tree"),"\u6709\u4ecb\u7d39\u904e!\u82e5\u4e00\u7121\u5411\u5716connected\u4e14\u4e0d\u5305\u542bcycle\uff0c\u5c31\u7a31\u70batree\u3002tree\u5c31\u662f\u4e00\u7a2econnected graph\uff0c\u522a\u9664\u4efb\u4e00edge\u90fd\u6703\u4f7f\u5176disconnect\u3002"),(0,l.kt)("p",null,"G\u662f\u4e00\u542b\u6709n\u500b\u9ede\u7684\u7121\u5411\u5716\uff0c\u4e0b\u9762\u4efb\u5169\u9ede\u90fd\u4fdd\u8b49\u7b2c\u4e09\u9ede\u7684\u767c\u751f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"G is connected"),(0,l.kt)("li",{parentName:"ul"},"G doesn't contain a cycle"),(0,l.kt)("li",{parentName:"ul"},"G has n-1 edges")),(0,l.kt)("h2",{id:"connected-component"},"Connected Component"),(0,l.kt)("p",null,"\u5c07G\u4e2d\u6240\u6709\u8207s\u76f8\u9023\uff08connected\uff09\u9ede\u96c6\u5408R\u7a31\u4f5cconnected component\uff0c\u9664\u4e86\u4e0b\u9762\u8981\u4ecb\u7d39\u7684BFS\u3001DFS\u53ef\u4ee5\u627e\u5230connected component\u5916\uff0c\u4e5f\u53ef\u4ee5\u7c21\u55ae\u7528\u4e0b\u9762\u6f14\u7b97\u6cd5\u627e\u5230\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pseudocode"},"R will consist of nodes to which s has a path\nInitially R = {s}\nWhile there is an edge (u,v) where u\u2208R and v\u2209R\n    Add v to R\nEndWhile\n")),(0,l.kt)("h5",{id:"correctness---\u96c6\u5408r\u6700\u5f8c\u771f\u7684\u662f\u5305\u542bs\u7684connected-component-of-g"},"correctness :  \u96c6\u5408R\u6700\u5f8c\u771f\u7684\u662f\u5305\u542bs\u7684connected component of G"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5c6c\u65bcR\u7684\u9edev\u90fd\u8ddfs\u76f8\u9023 : \u53ef\u7531BFS\u4fdd\u8b49"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u4e0d\u5c6c\u65bcR\u7684\u9edew\u90fd\u4e0d\u8ddfs\u76f8\u9023")),(0,l.kt)("p",null,"\u200b\t",(0,l.kt)("strong",{parentName:"p"},"\u8b49\u660e"),"\uff1a\u53cd\u8b49\u6cd5\uff0c\u6709\u4e00\u9edew\u2209R\uff0c\u4f46\u8ddfs\u76f8\u9023\u3002\u56e0\u70bas\u2208R\u4e14w\u2209R\uff0c\u5728P\u4e0a\u5fc5\u5b58\u5728\u7b2c\u4e00\u500b\u4e0d\u5c6c\u65bcR\u7684\u9edev\uff0c\u4e14v\u2260s\u3002\u4e5f\u5b58\u5728\u4e00\u9edeu\u9023\u5230v\uff0c\u56e0\u70ba\u9edev\u662f\u7b2c\u4e00\u500b\u4e0d\u5c6c\u65bcP\u7684\u9ede\uff0c\u53ef\u77e5u\u2208R\uff0c\u4e0a\u8ff0\u53ef\u5f97 : \u5b58\u5728\u4e00edge (u,v)\uff0c\u5176\u4e2du\u2208R\u4e14v\u2209R\uff0c\u6b64\u6558\u8ff0\u9055\u53cd\u6f14\u7b97\u6cd5\u4e2dwhile\u8ff4\u5708\u7684\u4e2d\u6b62\u689d\u4ef6\uff0c\u77db\u76fe\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The set of all Connected Component")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4efb\u4f55\u5716\u4e2d\u7684\u5169\u9edes\u548ct\uff0c\u4ed6\u5011\u7684connected components\u8981\u4e0d\u662f\u76f8\u540c\u5c31\u662f\u6c92\u4ea4\u96c6\uff08disjoint\uff09\u3002")),(0,l.kt)("h5",{id:"strongly-connected-component-scc"},"Strongly Connected Component (",(0,l.kt)("strong",{parentName:"h5"},"SCC"),")"),(0,l.kt)("p",null,"\u6307\u7684\u662f\u4e00\u6709\u5411\u5716\u4e2d\u6700\u5927\u7684Strongly Connected\u5b50\u5716"),(0,l.kt)("h2",{id:"breadth-fisrst-search-bfs"},"Breadth-Fisrst-Search (BFS)"),(0,l.kt)("p",null,"\u7576\u6211\u5011\u8981\u67e5\u770bGraph G\u4e2d\u7684\u5169\u9edes-t\u662f\u5426\u70baconnected\u6642\uff0c\u53ef\u4ee5\u5617\u8a66\u7528BFS\u6f14\u7b97\u6cd5\uff0c\u4ee5\u4e0b\u57161\u70ba\u4f8b\uff1a\u4ee51\u4f5c\u70bas\uff0c\u5411\u5916\u5c0b\u627e\u6240\u6709\u53ef\u80fd\u7684\u65b9\u5411\uff0c\u6bcf\u6b21\u52a0\u5165\u4e00\u5c64\uff08layer\uff09\uff0c\u4ee5L0\uff08\u9ede1\uff09,L1\uff08\u9ede2,3\uff09,L2\uff08\u9ede4,5,7,8\uff09,L3\uff08\u9ede6\uff09\u8868\u793a\u3002\u6700\u5f8c\u9664\u4e86\u5f97\u5230s\u53ef\u5230\u9054\u7684\u9ede\u4e4b\u5916\uff0c\u4e5f\u8a08\u7b97\u4e86\u5230\u9054\u9019\u4e9b\u9ede\u7684\u6700\u77ed\u8ddd\u96e2\u3002"),(0,l.kt)("p",null,"*\u5c64\u7d1a\u4e5f\u53ef\u4ee5\u7b97\u662f\u4e00\u7a2e\u8ddd\u96e2\u7684\u8868\u793a\u65b9\u5f0f\uff0c\u4f8b\u5982\u9ede2\u30013\u8ddd\u96e2s\u90fd\u662f1\u3002"),(0,l.kt)("p",null,"\u5176\u4e2dLayer\u5b9a\u7fa9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer L1\u5305\u542b\u6240\u6709\u8d77\u9edes\u7684neighbor\uff08\u70ba\u4e86\u7b26\u865f\u7684\u7d71\u4e00\u4f7f\u7528\uff0c\u591a\u6578\u6642\u5019\u6703\u7528L0\u8868\u793a\u50c5\u5305\u542b\u8d77\u9edes\u7684\u96c6\u5408\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5047\u8a2d\u6211\u5011\u5df2\u7d93\u5b9a\u7fa9layers L1,...Lj\uff0c\u90a3\u9ebcLj+1\u6703\u5305\u542b\u6240\u6709\u524d\u9762\u5c64\u7d1a\u6240\u672a\u5305\u542b\u7684\u9ede\uff0c\u4e26\u4e14\u9019\u4e9b\u9ede\u90fd\u548cLj\u6709\u908a\u76f8\u9023\u3002")),(0,l.kt)("p",null,"\u57161\u7684G\u57f7\u884c\u5b8cBFS\u5f8c\uff0c\u5c31\u6703\u5f97\u5230\u4e00\u68f5root\u5728s\uff08\u9ede1\uff09\u7684BFS tree T\uff0c\u53ef\u4ee5\u8f49\u8b8a\u6210\u57162\u8868\u793a\uff0c\u5176\u4e2d\u5be6\u7dda\u4ee3\u8868\u8a72edge\u5c6c\u65bcT\uff0c\u4e14\u7576\u7136\u4e5f\u5c6c\u65bcG\uff1b\u865b\u7dda\u5247\u4ee3\u8868edge\u5c6c\u65bcG\uff0c\u4f46\u4e0d\u5c6c\u65bcT\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8641).Z,width:"2139",height:"783"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u7406")," : "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"T\u662f\u4e00BFS tree\uff0c\u9edex,y\u662fT\u4e2d\u5206\u5c6c\u65bclayer Li\u548cLj\u7684\u5169\u9ede\uff0c\u4e14(x,y)\u662fG\u7684\u4e00\u500b\u908a\u3002\u90a3\u9ebci\u548cj\u6700\u591a\u76f8\u5dee1\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8b49\u660e")," : \u7528\u53cd\u8b49\u6cd5\u8b49\u660e\uff0c\u5047\u8a2di, j \u76f8\u5dee\u5927\u65bc1\u3002"),(0,l.kt)("p",null,"j>i+1\uff0c\u6839\u64daBFS\u6f14\u7b97\u6cd5\uff0c\u9edex\u7684neighbor\u8981\u4e0d\u662f\u5728 (a)\u4e0b\u4e00\u5c64\uff0c\u8981\u4e0d\u5c31\u662f\u5728(b)\u4e4b\u524d\u5df2\u7d93\u8d70\u8a2a\u904e\uff0c\u4e5f\u5c31\u662f\u8aaaj<i\uff0c\u4f46\u5df2\u5047\u8a2dj>i\u6240\u4ee5\u50c5(a)\u6210\u7acb\u3002(a)\u6210\u7acb\u4e5f\u5c31\u4ee3\u8868j=i+1\u548cj>i+1\u77db\u76fe\u3002"),(0,l.kt)("h3",{id:"implement"},"Implement"),(0,l.kt)("p",null,"\u56e0\u70baBFS\u8981\u6aa2\u67e5\u5f9e\u7279\u5b9a\u9ede\u51fa\u767c\u53ef\u5230\u9054\u7684\u9ede\uff08\u5c1a\u672a\u88ab\u8d70\u904e\u7684\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u9078\u64c7\u7528adjacent list\u3002\u53e6\u5916\uff0c\u8a2d\u4e00\u9663\u5217Discovered","[n]","\u5132\u5b58\u5df2\u8d70\u904e\u7684\u9ede\uff1b\u9663\u5217Li \uff08i=0,1,2,...\uff09\u5132\u5b58\u5728\u7b2cLi\u5c64\u7684\u9ede\uff0c\u5176\u4e2dL","[i]","\u7528stack\u548cqueue\u90fd\u53ef\u4ee5\uff0c\u56e0\u70ba\u548c\u9806\u5e8f\u6c92\u95dc\u4fc2\u3002"),(0,l.kt)("p",null,"O(m+n)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pseudocode"},"BFS(s):\n    Set Discovered[s] = True and Discovered[v]=False for all other v\n    Initialize L[0] to consist of the single element s \n    Set the layer counter i=0\n    Set the current BFS tree T =  \u2205\n    While L[i] is not empty\n        Initialize an empty list L[i+1]\n        For each node u\u2208L[i] \n            Consider each edge (u,v) incident to u\n            If Discovered[v] = false then\n                Set Discovered[v]=true\n                Add edge (u,v) to the tree T\n                Add v to the list L[i+1]\n            EndIf\n        EndFor\n        Increment the layer counter i by one\n    EndWhile\n")),(0,l.kt)("h2",{id:"depth-fisrst-search-dfs"},"Depth-Fisrst-Search (DFS)"),(0,l.kt)("p",null,"\u985e\u4f3c\u8001\u9f20\u8d70\u8ff7\u5bae\uff1a\u9078\u5b9a\u4e00\u689d\u53ef\u8d70\u7684\u908a\u4e4b\u5f8c\u6703\u4e00\u76f4\u8d70\u5230\u8d70\u4e0d\u4e0b\u53bb\u70ba\u6b62\uff0c\u518d\u56de\u982d\u627e\u5230\u4e4b\u524d\u6c92\u63a2\u7d22\u904e\u7684\u9ede\u7e7c\u7e8c\u8d70\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pseudocode"},'DFS(u):\n    Mark u as "Explored" and add u to R:\n    For each edge (u,v) incident to u \n        If v is not marked "Explored" then \n            Recursively invoke DFS(v)\n        EndIf\n    EndFor\n')),(0,l.kt)("p",null,"\u525b\u525b\u57161\uff08\u4e0b\u57163\uff09\u82e5\u6539\u6210DFS\uff0c\u57f7\u884c\u904e\u7a0b\u5c31\u6703\u50cf\u57164\u4e00\u6a23\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8683).Z,width:"1758",height:"788"})),(0,l.kt)("p",null,'\u53ef\u89c0\u5bdf\u5230\u5728\u905e\u8ff4\u547c\u53ebDFS(u)\u6642\u548c\u905e\u8ff4\u547c\u53eb\u7d50\u675f\u4e4b\u9593\u7684\u6240\u6709\u9ede\u90fd\u6703\u662f\u5df2\u88ab\u6a19\u8a3b"Explored"\u7684\u9ede\uff08\u5982\u9edeu\uff09\u7684\u5f8c\u4ee3\u3002'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u7406 : ")," "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"T\u662fDFS tree\uff0cx, y\u662fT\u4e2d\u7684\u5169\u500b\u9ede\u4e14edge(x,y)\u5c6c\u65bcG\u4f46\u4e0d\u5c6c\u65bcT\u3002\u90a3\u9ebcx,y\u5176\u4e2d\u4e00\u500b\u6703\u662f\u53e6\u4e00\u500b\u7684\u7956\u5148\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8b49\u660e :"),"  WLOG, \u5728DFS\u6f14\u7b97\u6cd5\u4e2d\uff0cx\u6bd4y\u65e9\u88ab\u8d70\u5230\uff0c\u7576\u67e5\u770b\u8207x\u76f8\u9023\u7684y\u6642\uff0c\u56e0\u70baedge(x,y)\u4e0d\u5c6c\u65bcT\u8868\u793ay\u4e26\u672a\u88ab\u6a19\u793a\u6210Explored\u3002\u56e0\u70ba\u5728\u7b2c\u4e00\u6b21\u547c\u53ebDFS(x)\u6642\uff0cy\u672a\u88ab\u6a19\u8a18\u6210Explored\uff0c\u4ee3\u8868\u9019\u500b\u9ede\u662f\u5728\u905e\u8ff4\u547c\u53ebDFS(x)\u548c\u905e\u8ff4\u547c\u53eb\u7d50\u675f\u4e4b\u9593\u767c\u73fe\u7684\uff0c\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u7531\u4e0a\u9762\u7684\u89c0\u5bdf\u77e5\u9053y\u662fx\u7684\u5f8c\u4ee3\u3002"),(0,l.kt)("p",null,"*WLOG : Without Loss of Generality\u4e0d\u5931\u4e00\u822c\u6027"),(0,l.kt)("h3",{id:"implement-1"},"Implement"),(0,l.kt)("p",null,"\u7528\u4e00\u9663\u5217Explored","[n]","\u5b58\u8d70\u8a2a\u904e\u7684\u9ede\uff1bStack\uff08LIFO\uff09\u5b58\u8981\u88ab\u6aa2\u67e5\u7684\u9ede\u3002"),(0,l.kt)("p",null,"O(m+n)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pseudocode"},"DFS(s):\n    Initialize S to be a stack with one element s\n    While S is not empty:\n        Take a node u from S\n        If Explored[u] = False then\n            Set Explored[u] = true\n            For each edge(u,v) incident to u\n                Add v to the stack S\n            EndFor\n        EndIf\n    EndWhile\n")),(0,l.kt)("h2",{id:"bipartiteness"},"Bipartiteness"),(0,l.kt)("p",null,"Bipartitie graph \uff08bigraph\uff09G = (X,Y,E) \uff0cG\u7576\u4e2d\u7684\u6240\u6709\u9ede\u53ef\u4ee5\u88ab\u5206\u70ba\u5169\u500b\u96c6\u5408X, Y\uff0c\u4e14\u6bcf\u4e00\u689d\u908a\u4e00\u7aef\u9ede\u4f4d\u65bcX\u3001\u4e00\u7aef\u9ede\u4f4d\u65bcY\u3002X\u548cY\u662f\u5169\u500b\u4e0d\u76f8\u4ea4\u7684\u96c6\u5408\u3002X,Y\u5167\u7684\u4efb\u5169\u9ede\u4e0d\u76f8\u9130\u3002\u57165\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8874).Z,width:"1415",height:"422"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If a graph G is bipartite, then it cannot contain an odd cycle.")),(0,l.kt)("h3",{id:"test-bipartiteness"},"Test Bipartiteness"),(0,l.kt)("p",null,"\u6211\u5011\u77e5\u9053bigraph\u4e2d\u7684\u6bcf\u4e00\u689d\u908a\u90fd\u9023\u63a5\u4e0d\u540c\u96c6\u5408\u7684\u9ede\uff0c\u60f3\u50cf\u6210\u5c07\u4e00\u7aef\u9ede\u5857\u70ba\u7d05\u8272\u3001\u53e6\u4e00\u7aef\u9ede\u5857\u70ba\u85cd\u8272\uff0c\u90a3\u9ebc\u6211\u5011\u53ef\u4ee5BFS\u7684\u6f14\u7b97\u6cd5\u4f86\u5b8c\u6210\uff1a\u5f9e\u9edes\u51fa\u767c\uff0c\u9047\u5230\u53e6\u4e00\u9ede\u5c31\u5c07\u5176\u5857\u70ba\u7d05\u8272\uff0c\u9047\u5230\u4e0b\u4e00\u9ede\u518d\u5857\u70ba\u85cd\u8272\uff0c\u518d\u63db\u56de\u7d05\u8272....\uff1b\u6216\u8005\u4e5f\u53ef\u4ee5\u8aaa\u662f\u5c07\u9edes\u5857\u70ba\u7d05\u8272\u3001L1\u5857\u70ba\u85cd\u8272\u3001L2\u5857\u70ba\u7d05\u8272...\u3002"),(0,l.kt)("p",null,"\u518d\u67e5\u770b\u4e00\u6b21",(0,l.kt)("a",{parentName:"p",href:"https://yehs1225.github.io/docs/Algorithm/Algorithm%5B3%5D#implement"},"\u4e00\u822c\u7684BFS\u6f14\u7b97\u6cd5"),"\u3002\u52a0\u4e0a\u9663\u5217Color","[v]","\u5132\u5b58\u6bcf\u4e00\u9ede\u7684\u984f\u8272\uff0c\u7576\u9edev \u88ab\u52a0\u5165\u9663\u5217L","[i+1]","\u6642\uff0c\u82e5i+1\u70ba\u5076\u6578\u5247\u5857\u6210\u7d05\u8272\uff1b\u5947\u6578\u5247\u5857\u70ba\u85cd\u8272\uff0c\u6700\u5f8c\u6211\u5011\u5728\u6aa2\u67e5\u6bcf\u689d\u908a\u662f\u5426\u5169\u7aef\u90fd\u88ab\u5857\u4e0a\u76f8\u7570\u7684\u984f\u8272\u3002\u6642\u9593\u8907\u96dc\u5ea6\u548cBFS\u4e00\u6a23\u70baO(M+N)\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pseudocode"},"BFS(s):\n    Set Discovered[s] = True and Discovered[v]=False for all other v\n    Initialize L[0] to consist of the single element s \n    color[s] = red\n    Set the layer counter i=0\n    Set the current BFS tree T =  \u2205\n    While L[i] is not empty\n        Initialize an empty list L[i+1]\n        For each node u\u2208L[i] \n            Consider each edge (u,v) incident to u\n            If Discovered[v] = false then\n                Set Discovered[v]=true\n                Add edge (u,v) to the tree T\n                Add v to the list L[i+1]\n                If i+1 is even then\n                    color[v]=red\n                Else \n                    color[v]=blue\n                EndIf\n            EndIf\n        EndFor\n        Increment the layer counter i by one\n    EndWhile\n")),(0,l.kt)("h5",{id:"correctness-"},"Correctness :"),(0,l.kt)("p",null,"G\u662f\u4e00connected graph\uff0c\u4ee5s\u505a\u70ba\u8d77\u9ede\u904b\u7528BFS\u7522\u751flayer L1,L2,....\u3002\u90a3\u9ebc\u4e0b\u9762\u81f3\u5c11\u6709\u4e00\u9805\u6210\u7acb\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"G\u7576\u4e2d\u4e0d\u80fd\u6709\u908a\u4e0a\u5169\u9ede\u5728\u540c\u4e00\u5c64\uff0c\u4f7f\u5f97G\u70babipartite"),(0,l.kt)("li",{parentName:"ul"},"G\u7576\u4e2d\u6709\u908a\u4e0a\u5169\u9ede\u5728\u540c\u4e00\u5c64\uff0c\u90a3\u9ebcG\u542b\u6709odd-length cycle\uff0c\u4f7f\u5f97G\u4e0d\u70babipartitie")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u9ede\u8b49\u660e\uff1a")),(0,l.kt)("p",null,"\u5047\u8a2d\u5b58\u5728\u4e00edge(x,y)\u4e14x\u548cy\u5c6c\u65bc\u540c\u4e00\u5c64 Lj\u3002\u4ee4z = lca(x,y) ","[lca : Lowest Common ancestor]","\u4e14\u9edez\u4f4d\u65bcLi\u3002\u8003\u616e\u4e00cycle : (x-y),(y-z),(z-x)\u90a3\u9ebcx-z\u9019\u689d\u8def\u5f91\u9577\u5ea6\u5c31\u662f1+(i+j) +(i+j) \uff0c\u70ba\u4e00odd cycle\u3002"),(0,l.kt)("h2",{id:"connectivity-1"},"Connectivity"),(0,l.kt)("p",null,"Strong connectivity\u6307\u5728\u6709\u5411\u5716\u4e2d\u5b58\u5728pair (u,v) \u5176\u4e2d\u6709u-v path\u4e5f\u6709v-u path\uff0c\u4e5f\u7a31u,v\u662fmutually reachable\u3002mutually reachable\u6709\u4e00\u4e9b\u5f88\u68d2\u7684\u7279\u6027\uff0c\u4e14\u5927\u90e8\u5206\u51fa\u81ea\u4e0b\u9762\u9019\u500b\u7c21\u55ae\u7684\u4e8b\u5be6\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u82e5u, v \u662fmutually reachable\uff0cv,w \u662fmutually reachable\uff0c\u90a3\u9ebcu,w\u4e5f\u662fmutually reachable")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8b49\u660e : ")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(201).Z,width:"904",height:"278"})),(0,l.kt)("h3",{id:"testing-strong-connectivity"},"Testing Strong Connectivity"),(0,l.kt)("p",null,"\u662f\u5426\u80fd\u4ee5linear time\u6aa2\u67e5\u4e00graph\u662f\u4e0d\u662fStrong Connectivity\uff1f"),(0,l.kt)("p",null,"\u767d\u8a71\u4f86\u8aaa\uff0c\u8dd1\u5169\u6b21BFS\u5c31\u53ef\u4ee5!\u56e0\u6b64\u6642\u9593\u4e5f\u70baO(n+m)"),(0,l.kt)("p",null,"\u5176\u4e2dGrev\u70ba\u5c07G\u4e2d\u6240\u6709edge\u65b9\u5411\u53cd\u8f49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pseudocode"},"TestSC(G)\nPick any node s in G\nR = BFS(s,G)\nRrev = BFS(s,Grev)\nIf (Grev = V = R) then\n    return true \nElse \n    return false\n")),(0,l.kt)("h5",{id:"correctness"},"Correctness"),(0,l.kt)("p",null,"(1)   Not strongly connected\uff08return false\uff09\u7684\u6b63\u78ba\u6027\uff1a"),(0,l.kt)("p",null,"\u4ee5BFS\u5c0dG\u53caGrev \u4ee5\u9edes\u70ba\u8d77\u59cb\u641c\u5c0b\uff0c\u82e5\u4efb\u4e00\u641c\u5c0b\u7121\u6cd5\u5230\u9054\u6bcf\u4e00\u9ede\uff0c\u5373\u9055\u53cdstrongly connected\u7684\u5b9a\u7fa9\uff0c\u90a3\u9ebc\u6b64\u5716G\u5fc5\u5b9a\u4e0d\u70bastrongly connected\u3002"),(0,l.kt)("p",null,"(2)   strongly connected\uff08return true\uff09\u7684\u6b63\u78ba\u6027\uff1a"),(0,l.kt)("p",null,"\u4ee5BFS\u5c0dG\u53caGrev \u4ee5\u9edes\u70ba\u8d77\u59cb\u641c\u5c0b\uff0cs\u53ef\u5230\u9054\u6bcf\u4e00\u9ede\u4e14\u6bcf\u4e00\u9ede\u4e5f\u80fd\u5230\u9054s\uff0c\u4ee3\u8868s\u5230\u4efb\u4e00\u9edeu\u662fmutually reachable\uff0c\u5230\u4efb\u4e00\u9edev\u4e5f\u662fmutually reachable\uff0c\u6839\u64da\u4e0a\u9762\u7684\u5b9a\u7406\u53ef\u5f97\u5728G\u4e2d\u7684\u4efb\u4e00\u5169\u9ede\u7686\u70bamutually reachable\uff0c\u7b26\u5408strongly connected\u7684\u5b9a\u7fa9\u3002"),(0,l.kt)("h2",{id:"directed-acyclic-graphs-and-topological-ordering"},"Directed Acyclic Graphs and Topological Ordering"),(0,l.kt)("p",null,"Directed Acyclic Graphs \u7c21\u7a31\u70baDAG\uff0c\u4ee3\u8868\u4e00\u6709\u5411\u5716\u4e2d\u4e0d\u5305\u542bcycle\u3002\u82e5\u4e00\u7121\u5411\u5716\u4e0d\u5305\u542bcycle\u90a3\u9ebc\u5b83\u5c31\u6709\u975e\u5e38\u7c21\u55ae\u7684\u7d50\u69cb\uff0c\u6bcf\u500bconnected components\u90fd\u662f\u4e00\u68f5\u6a39\uff1b\u5728\u6709\u5411\u5716\u4e2d\u6c92\u6709cycle\u53ef\u80fd\u4e5f\u5177\u6709\u8c50\u5bcc\u7684\u7d50\u69cb\u6027\uff0c\u4f8b\u5982\u64c1\u6709\u8f03\u591a\u908a\u7684\u5716\uff08\u57167\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2090).Z,width:"1522",height:"403"})),(0,l.kt)("p",null,"DAG\u53ef\u4ee5\u7528\u4f86\u8868\u793a ",(0,l.kt)("strong",{parentName:"p"},"\u524d\u5f8c\u9806\u5e8f\u95dc\u4fc2"),"\u6216 ",(0,l.kt)("strong",{parentName:"p"},"\u4f9d\u8cf4\u6027\uff08dependencies\uff09"),"\uff0c\u662f\u96fb\u8166\u79d1\u5b78\u4e2d\u5e38\u898b\u7684\u7d50\u69cb\uff0c\u6211\u5011\u53ef\u4ee5\u5c07\u57167\u7de8\u865f\u8b8a\u6210\u57168\u3002\u9032\u4e00\u6b65\u8a0e\u8ad6 ",(0,l.kt)("strong",{parentName:"p"},"\u524d\u5f8c\u9806\u5e8f\u95dc\u4fc2"),"\uff0c\u65e5\u5e38\u751f\u6d3b\u4e2d\u50cf\u662f\u4fee\u8ab2\u7684\u9806\u5e8f\uff0c\u9700\u8981\u5148\u5b8c\u6210\u67d0\u9805\u8ab2\u7a0b\u624d\u80fd\u9078\u4fee\u9032\u968e\u8ab2\u7a0b\u9019\u6a23\u7684\u4f5c\u6cd5\uff0c\u5fc5\u9808\u7531\u8f03\u5c0f\u7684\u9ede\u5728\u524d\u5f80\u8f03\u5927\u7684\u9ede\uff0c\u7a31\u70ba",(0,l.kt)("strong",{parentName:"p"},"topological ordering"),"\uff0c\u57169\u5c31\u662f\u4e00\u7a2e\uff0c\u4e5f\u662f\u57168\u6240\u8f49\u63db\u800c\u4f86\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u7406 :")," "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u82e5\u4e00graph G\u70batopological ordering\uff0c\u90a3\u9ebcG\u662f\u4e00DAG")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8b49\u660e : ")),(0,l.kt)("p",null,"\u4ee5\u53cd\u8b49\u6cd5\u8b49\u660e\uff0cG\u70ba\u4e00topological ordering : v1,v2,...,vk\u4e14\u542b\u6709cycle C\u3002\u4ee4vi\u70baC\u4e2d\u64c1\u6709\u6700\u5c0findex\u7684\u9ede\uff0cvj\u662fvi\u524d\u7684\u9ede\uff08\u6709\u4e00edge(vj,vi)\uff09\u3002\u8981\u9078\u64c7vi\u6642\uff0c\u4ee3\u8868\u6211\u5011\u5df2\u7d93\u9078\u904evj\uff0c\u548cG\u70batopological ordering \u7684\u5047\u8a2d\u77db\u76fe\u3002"),(0,l.kt)("h4",{id:"q\u82e5g\u70ba\u4e00dag-\u90a3\u9ebcg\u6703\u6709topological-ordering\u55ce"},"Q:\u82e5G\u70ba\u4e00DAG, \u90a3\u9ebcG\u6703\u6709topological ordering\u55ce?"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u74061 :")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u6bcf\u4e00\u500bDAG G\u4e2d\uff0c\u90fd\u81f3\u5c11\u5b58\u5728\u4e00\u9ede\u6c92\u6709\u6d41\u5165\u7684\u908a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8b49\u660e : ")),(0,l.kt)("p",null,"\u7528\u53cd\u8b49\u6cd5\u8b49\u660e\uff0cG\u662f\u4e00DAG\uff0c\u4e14\u6bcf\u4e00\u9ede\u90fd\u81f3\u5c11\u6709\u4e00\u6d41\u5165\u7684\u908a\u3002"),(0,l.kt)("p",null,"\u9078\u4e00\u9edev\uff0c\u56e0\u70ba\u6709\u56de\u53bb\u7684\u908a\u6240\u4ee5\u4e00\u5b9a\u53ef\u4ee5\u5f80\u56de\u627e\u5230\u4e00\u9edeu\uff0c\u5230u\u4e4b\u5f8c\u4e00\u5b9a\u4e5f\u53ef\u4ee5\u5f80\u56de\u627e\u4e00\u9edex\uff0c\u5982\u6b64\u5f80\u56de\u627e\u7684\u52d5\u4f5c\u91cd\u8907n+1\u6b21\u5f8c\uff08\u4e00\u958b\u59cb\u627ev\u4e5f\u7b97\u4e00\u6b21\uff09\uff0c\u56e0\u70ba\u7e3d\u5171\u53ea\u6709n\u500b\u9ede\uff0c\u6240\u4ee5\u6703\u627e\u56de\u7b2c\u4e00\u500b\u9edev\uff0c\u4e5f\u5c31\u4ee3\u8868\u5b58\u5728cycle\uff0c\u548cDAG\u7684\u5b9a\u7fa9\u77db\u76fe\u3002"),(0,l.kt)("p",null,"\u6709\u4e86\u5b9a\u74061\u5c31\u53ef\u4ee5\u56de\u7b54\u9019\u500b\u554f\u984c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u74062 :")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If G is a DAG, then G has a topological ordering.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8b49\u660e :")," "),(0,l.kt)("p",null,"\u7528\u6b78\u7d0d\u6cd5\u3002"),(0,l.kt)("p",null,'\u6211\u5011\u53ef\u4ee5\u8072\u7a31 "\u6bcf\u4e00DAG\u90fd\u6709topological ordering"\uff0c\u5c24\u5176\u5728\u9ede\u500b\u6578\u70ba1\u548c2\u6642\u66f4\u70ba\u986f\u800c\u6613\u898b\u3002\u73fe\u5728\u8072\u7a31\u5728\u6709n\u500b\u9ede\u6642\u4ecd\u70ba\u771f\uff0c\u7d66\u5b9a\u4e00G\u6709n+1\u500b\u9ede\uff0c\u5fc5\u5b9a\u80fd\u627e\u5230\u4e00\u9edev\u6c92\u6709\u6d41\u5165\u7684\u908a\uff08\u5b9a\u74061\uff09\uff0c\u5c07v\u653e\u5728topological ordering\u7684\u7b2c\u4e00\u4f4d\u662f\u53ef\u884c\u7684\uff0c\u56e0\u70bav\u7684\u908a\u90fd\u662f\u6d41\u51fa\u7684\uff0c\u73fe\u5728G - {v}\u4ecd\u662fDAG\uff0c\u56e0\u70ba\u4e0d\u6703\u5f62\u6210cycle\uff08n\u500b\u9ede\u7684G\u672c\u4f86\u5c31\u6c92\u6709\uff09\uff0c\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u5f97\u5230topological ordering : G - {v}\uff0c\u4e26\u5c07\u9019\u4e9b\u9ede\u653e\u5728v\u5f8c\u9762\uff0c\u9019\u4e9b\u5728G\u7576\u4e2d\u6240\u6709\u908a\u90fd\u6709\u6d41\u5411\u7684\u5730\u65b9\uff08\u9806\u5e8f\u95dc\u4fc2\uff09\uff0c\u56e0\u6b64\u9019\u662f\u4e00\u500btopological ordering\u3002'),(0,l.kt)("h3",{id:"compute-a-topological-ordering-of-g"},"Compute a topological ordering of G"),(0,l.kt)("p",null,"\u6839\u64da\u4e0a\u9762\u7684\u5b9a\u7406\uff0c\u53ef\u4ee5\u8a2d\u8a08\u51fa\u4e0b\u9762\u7684\u6f14\u7b97\u6cd5\u3002 \u4e26\u4e14\u6839\u64da\u6b64\u6f14\u7b97\u6cd5\uff0c\u5c07\u4e0a\u9762\u57168\u8f49\u70ba\u57169\u7684\u904e\u7a0b\u5982\u4e0b\u571610\u6240\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pseudocode"},"To compute a topological ordering of G:\nFind a node v with no incoming edges and order it first\nDelete v from G\nRecursively compute a topological ordering of G\u2212{v} and append this order after v\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9571).Z,width:"1340",height:"770"})),(0,l.kt)("h4",{id:"\u6642\u9593\u8907\u96dc\u5ea6"},"\u6642\u9593\u8907\u96dc\u5ea6"),(0,l.kt)("p",null,"\u627e\u5230\u6c92\u6709\u6d41\u5165\u7684\u9edev\u4e26\u4e14\u81eaG\u4e2d\u522a\u9664\u9700\u8981O(n)\u7684\u6642\u9593\uff0c\u5171\u8981\u57f7\u884cn\u6b21\uff0c\u6240\u4ee5\u662fO(n^2)\u3002\u7576G\u975e\u5e38\u7a20\u5bc6\uff08dense\uff09\uff0c\u542b\u6709\u0398(n^2)\u500b\u908a\u6642\uff0c\u9019\u6a23\u7684\u6642\u9593\u8907\u96dc\u5ea6\u5c0d\u65bc\u8f38\u5165\u5927\u5c0f\u4f86\u8aaa\u662flinear\uff1b\u4f46\u662f\u7576\u908a(m)\u7684\u6578\u91cf\u5927\u5e45\u5c0f\u65bc\u9ede(n)\u7684\u6578\u91cf\uff0c\u82e5\u6642\u9593\u8907\u96dc\u5ea6\u70baO(m+n)\u6703\u662fO(n^2)\u5927\u5e45\u7684\u6539\u5584\u3002"),(0,l.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u85c9\u7531\u300c",(0,l.kt)("strong",{parentName:"p"},"\u758a\u4ee3\uff08iteration\uff09\u522a\u9664\u6c92\u6709\u6d41\u5165\u7684\u9ede"),'\u300d\u7684\u65b9\u5f0f\u9054\u5230O(m+n)\u3002\u82e5\u4e00\u9ede\u5c1a\u672a\u88ab\u6f14\u7b97\u6cd5\u522a\u9664\uff0c\u5ba3\u544a\u70ba"active"\uff0c\u4e26\u4e14\u7dad\u6301\u4e0b\u9762\u5169\u4ef6\u4e8b\uff1a'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c0d\u6bcf\u4e00\u9edew\u7dad\u6301\u300c\u662f\u5f9eactive\u9ede\u6d41\u5165\u7684\u908a\u300d\u7684\u6578\u91cf"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u96c6\u5408S\u5305\u542bG\u4e2d\u6240\u6709\u300c\u6c92\u6709\u5f9e\u5176\u4ed6active\u9ede\u6d41\u5165\u7684\u908a\u300d\u7684active\u9ede")),(0,l.kt)("p",null,"\u8d77\u521d\u6240\u6709\u9ede\u90fd\u662factive\uff0c\u6240\u4ee5\u53ef\u4ee5\u5f88\u597d\u521d\u59cb\u5316\u4e0a\u9762\u5169\u9ede\u3002\u63a5\u8005\u6bcf\u4e00\u758a\u4ee3\u90fd\u5f9eS\u6311\u51fa\u4e00\u9edev\u4e26\u522a\u9664\uff0c\u522a\u9664v\u5f8c\u67e5\u770b\u6240\u6709\u8207v\u6709\u908a\u7684\u9edew\uff0c\u82e5\u908a\u7684\u6d41\u5411\u70bav->w\u5247\u5c07w\u300c\u662f\u5f9eactive\u9ede\u6d41\u5165\u7684\u908a\u300d\u7684\u6578\u91cf\u6e1b1\uff0c\u7576\u6578\u91cf\u70ba0\u6642\uff0c\u5c07w\u52a0\u5165\u96c6\u5408S\u3002\u85c9\u7531\u9019\u6a23\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u6301\u7e8c\u627e\u5230\u6709\u8cc7\u683c\u88ab\u522a\u9664\u7684\u9ede\uff0c\u4e26\u4e14\u5728\u904e\u7a0b\u4e2d\u7528constant work\u5728\u8655\u7406\u908a\u4e0a\u3002"))}d.isMDXComponent=!0},8641:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph_1-9ecf37f3dc229163b5f28c5db018f002.jpg"},8683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph_2-7164b0b2933cdff0ed0975f9a47ac3c4.jpg"},8874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph_3-cac5e0b034215d34256452cf61097d81.jpg"},201:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph_4-d19a887b10c22604fd7015f94579d90a.jpg"},2090:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph_5-1d03b90a248d8cf4e6721e43a243ec37.jpg"},9571:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph_6-f30ac96e0b97484f070af74c14d70589.jpg"}}]);