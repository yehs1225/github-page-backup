"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4407],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(t),k=r,d=u["".concat(s,".").concat(k)]||u[k]||c[k]||l;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const l={},o="Docker[3]K8s",p={unversionedId:"Docker/Docker3K8s",id:"Docker/Docker3K8s",title:"Docker[3]K8s",description:"Kubernetes\u56e0\u70ba\u662f\u5f88\u9577\u7684\u55ae\u5b57\u52a0\u4e0a\u6709\u9ede\u96e3\u5538\uff1f\u6240\u4ee5\u5927\u5bb6\u7c21\u7a31\u70baK8s\u3002",source:"@site/docs/Docker/Docker3K8s.md",sourceDirName:"Docker",slug:"/Docker/Docker3K8s",permalink:"/docs/Docker/Docker3K8s",draft:!1,editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Docker/Docker3K8s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker[2]\u57fa\u672c\u7ba1\u7406",permalink:"/docs/Docker/Docker2\u57fa\u672c\u7ba1\u7406"},next:{title:"JavaScript-this",permalink:"/docs/JavaScript/JavaScript-this"}},s={},i=[{value:"K8s\u4ecb\u7d39",id:"k8s\u4ecb\u7d39",level:2},{value:"\u6b77\u53f2",id:"\u6b77\u53f2",level:3},{value:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\uff1f",id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528",level:3},{value:"\u91cd\u8981\u5143\u7d20",id:"\u91cd\u8981\u5143\u7d20",level:3},{value:"Minikube &amp; Kubectl",id:"minikube--kubectl",level:2},{value:"Start minikube",id:"start-minikube",level:3},{value:"Basic kubectl commands",id:"basic-kubectl-commands",level:3},{value:"Check",id:"check",level:4},{value:"Create",id:"create",level:4},{value:"Edit",id:"edit",level:4},{value:"Debug",id:"debug",level:4},{value:"Use configuration file (.YAML)",id:"use-configuration-file-yaml",level:4},{value:"YAML file in K8s",id:"yaml-file-in-k8s",level:3},{value:"Demo",id:"demo",level:2},{value:"MongoDB settings",id:"mongodb-settings",level:3},{value:"Create Internal Service",id:"create-internal-service",level:3},{value:"MongoExpress settings",id:"mongoexpress-settings",level:3},{value:"Create External Service",id:"create-external-service",level:3},{value:"Outcome",id:"outcome",level:3},{value:"Namespace",id:"namespace",level:2},{value:"\u4ecb\u7d39",id:"\u4ecb\u7d39",level:3},{value:"create new namespaces",id:"create-new-namespaces",level:4},{value:"\u9069\u7528\u6848\u4f8b",id:"\u9069\u7528\u6848\u4f8b",level:3},{value:"Helm",id:"helm",level:2}],m={toc:i};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker3k8s"},"Docker","[3]","K8s"),(0,r.kt)("p",null,"Kubernetes\u56e0\u70ba\u662f\u5f88\u9577\u7684\u55ae\u5b57\u52a0\u4e0a\u6709\u9ede\u96e3\u5538\uff1f\u6240\u4ee5\u5927\u5bb6\u7c21\u7a31\u70baK8s\u3002"),(0,r.kt)("h2",{id:"k8s\u4ecb\u7d39"},"K8s\u4ecb\u7d39"),(0,r.kt)("h3",{id:"\u6b77\u53f2"},"\u6b77\u53f2"),(0,r.kt)("p",null,"\u4e00\u5957\u81ea\u52d5\u5316\u5bb9\u5668\u904b\u884c\u7dad\u8b77\u7684\u958b\u653e\u539f\u59cb\u78bc\u5e73\u53f0\uff0c\u904b\u884c\u7dad\u8b77\u5305\u542b \u90e8\u7f72\u3001\u6392\u7a0b\u3001\u7bc0\u9ede\u53e2\u96c6\u9593\u7684\u64f4\u5145\u3002K8s\u662f\u5bb9\u5668\u6280\u8853\u767c\u5c55\u4e0b\u7684\u7522\u7269\uff0c\u4f8b\u5982\u73fe\u5728\u591a\u6578\u516c\u53f8\u7528\u4f86\u7ba1\u7406Docker\u5bb9\u5668\u3002K8s\u662f\u7531Google\u6240\u63d0\u4f9b\u7684\u7cfb\u7d71\u4e26\u958b\u653e\u539f\u59cb\u78bc\uff0c\u85c9\u7531\u5176\u7ba1\u7406\u6578\u4ee5\u5104\u8a08\u7684\u5bb9\u5668\u7d93\u9a57\u6240\u64b0\u5beb\u7684\u7cfb\u7d71\u3002\u4e5f\u56e0\u70ba\u96f2\u7aef\u6280\u8853\u7684\u767c\u5c55\uff0c\u591a\u6578\u8edf\u9ad4\u9700\u8981\u85c9\u7531\u7db2\u8def\u8207\u4ed6\u4eba\u5171\u4eab\uff0c\u56e0\u6b64\u56e0\u70ba\u5bb9\u5668\u89e3\u6c7a\u4e86\u74b0\u5883\u8a2d\u5b9a\u554f\u984c\uff0c\u800c\u88ab\u66f4\u591a\u4eba\u6240\u63a1\u7528\uff0c\u4e00\u500b\u4f01\u696d\u5e73\u5747\u9700\u8981\u7528\u5230\u7684\u5bb9\u5668\u6578\u65e5\u76ca\u589e\u52a0\uff0c\u56e0\u6b64K8s\u88ab\u591a\u6578\u4f01\u696d\u7d66\u63a1\u7528\u3002"),(0,r.kt)("h3",{id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528"},"\u70ba\u4ec0\u9ebc\u4f7f\u7528\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5feb\u901f\u7cbe\u6e96\u5730\u90e8\u7f72\u3001\u5373\u6642\u4f38\u7e2e\u61c9\u7528\u7a0b\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u9650\u5236\u786c\u9ad4\u6240\u9700\u8cc7\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u79fb\u52d5\u3001\u64f4\u5145\u3001\u81ea\u52d5\u90e8\u7f72\u4fee\u5fa9\u8907\u88fd\u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u6eff\u8db3\u4e00\u7cfb\u5217\u7522\u54c1\u5167\u7a0b\u5f0f\u7684\u57f7\u884c\u9700\u6c42")),(0,r.kt)("h3",{id:"\u91cd\u8981\u5143\u7d20"},"\u91cd\u8981\u5143\u7d20"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pod"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"k8s\u4e2d\u7684\u6700\u5c0f\u55ae\u4f4d\uff0c\u53ef\u5305\u542b\u4e00\u500b\u6216\u591a\u500bcontainer(\u901a\u5e38\u662f\u4e00\u500b\uff0c\u7a31\u70bapause container)\u3002\u662fcontainer\u7684\u62bd\u8c61\u5316\uff0c\u7528k8s\u5c0dPod\u9032\u884c\u64cd\u4f5c\uff0c\u800c\u975e\u76f4\u63a5\u5c0dcontainer\u52d5\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u500bPod\u6709\u81ea\u5df1\u7684\u865b\u64ecIP\u4f4d\u7f6e\uff0cPod\u4e92\u76f8\u53ef\u7528\u9019\u6a23\u5167\u90e8\u7684IP\u806f\u7d61\uff08endpoint\u7684\u6982\u5ff5\uff09\uff0c\u4f46\u7f3a\u9ede\u662fPod\u639b\u6389\u6642IP\u6703\u4e00\u8d77\u6d88\u5931\uff0c\u91cd\u5efa\u4e5f\u6703\u6307\u6d3e\u65b0\u7684\uff0c\u9020\u6210\u61c9\u7528\u7a0b\u5f0f\u5167\u90e8\u6e9d\u901a\u5931\u6557\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Service\u7528\u4f86\u6539\u5584IP\u554f\u984c\uff0c\u662f\u6c38\u4e45\u7684IP\u4f4d\u7f6e\uff0c\u4e14\u5728Pod\u639b\u4e0a\u7684service\u548cPod\u672c\u8eab\u7684life cycle\u4e0d\u76f8\u95dc\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7576\u4f7f\u7528Deployment\u8907\u88fd\u591a\u500bpods\u6642\uff0cService\u540c\u6642\u4e5f\u662fload balancer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ingress\u8655\u7406\u5c0d\u5916\u7db2\u8def\u9023\u5230\u5167\u90e8\u5404\u7db2\u4e4b\u9593\u7684\u95dc\u4fc2\u3002 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"app\u8981\u8207DB\u76f8\u9023\u7684\u8cc7\u8a0a\u901a\u5e38\u90fd\u662f\u5efa\u7acb\u5728app\u4e4b\u4e2d\uff0c\u9019\u6642\u5019\u82e5\u9700\u8981\u6539\u52d5\u4e00\u4e9bDB\u76f8\u95dc\u6771\u897f\u6642\uff0c\u9084\u9700\u8981\u5230app\u5167\u90e8\u66f4\u6539\u8a2d\u5b9a\uff0c\u4e0d\u50c5\u9ebb\u7169\u4e5f\u5bb9\u6613\u51fa\u932f\uff0c\u56e0\u6b64",(0,r.kt)("strong",{parentName:"p"},"ConfigMap"),"\u5c31\u53ef\u7528\u4f86\u8655\u7406\u9019\u985e\u7684configuration\uff0c\u4e5f\u5c31\u662f\u628a\u8a2d\u5b9a\u642c\u5230app\u548cDB\u4e4b\u5916\uff0c\u5229\u7528K8s\u4e2d\u5404pods\u7684endpoint\uff08service\uff09\u76f8\u9023\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e0d\u53ef\u4ee5\u5c07\u6a5f\u5bc6\u8cc7\u6599\u653e\u5728\u9019\u88e1\uff01\uff01\uff01"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secrets\u529f\u80fd\u5c31\u5982\u540cConfigMap\uff0c\u4f46\u662f\u53ef\u7528\u4f86\u5b58\u653e\u6a5f\u5bc6\u8cc7\u6599\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Volumes"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u4f86\u5b58Data\u7684pod\u88ab\u91cd\u555f\uff0c\u90a3\u9ebc\u9019\u4e9b\u8cc7\u6599\u5c31\u6703\u4e0d\u898b\uff0c\u56e0\u6b64\u6703\u7528\u5230Volumes\u4f86\u5b58\u53d6\uff0cvolumes\u6703\u548c\u7269\u7406\u5c64\u9762\u7684\u5132\u5b58\u76f8\u9023\uff0c\u4f8b\u5982\u672c\u5730\u7684\u786c\u789f\u7a7a\u9593\u3001\u9060\u7aef\u5132\u5b58\uff08\u548cK8s\u672c\u8eab\u7121\u95dc\uff09\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610fK8s\u672c\u8eab\u4e0d\u7ba1\u8cc7\u6599\u5132\u5b58\u7684\u4e00\u81f4\u6027\uff0c\u9700\u8981\u81ea\u5df1\u5c07\u9019\u4e00\u584a\u5132\u5b58\u8a2d\u5b9a\u597d"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deployment & StatefulSet"),(0,r.kt)("p",{parentName:"li"},"\u55ae\u4e00\u500bapp\u82e5\u58de\u6389\u7684\u8a71\uff0c\u6703\u9020\u6210\u670d\u52d9\u4e2d\u65b7\uff0c\u662f\u4e0d\u53ef\u4ee5\u7684\uff01\u56e0\u6b64\u6703\u6709\u8907\u88fd\u4e00\u500b\u6216\u591a\u500bapp\u7684\u60f3\u6cd5\uff0cK8s\u7576\u4e2d\u53ef\u4ee5\u7528Deployment\u4f86\u8fa6\u5230\uff0c\u589e\u52a0/\u7e2e\u5c0f \u898f\u6a21\uff0c\u800c\u9019\u6a23\u8907\u88fdpods\u7684\u884c\u70ba\u4e0d\u53ef\u4ee5\u7528\u5728DB\u4e0a\uff0c\u56e0\u70ba\u6703\u9020\u6210\u5404DB\u8cc7\u6599\u7684\u4e0d\u4e00\u81f4\uff0cK8s\u4ee5StatefulSet\u8655\u7406\uff0c\u4f46\u4e0d\u5bb9\u6613\u4f7f\u7528\uff0c\u56e0\u6b64\u591a\u534a\u6703\u628aDB\u653e\u5728K8s cluster\u4e4b\u5916\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Node\u7bc0\u9ede \uff06Master\u4e3b\u63a7"),(0,r.kt)("p",{parentName:"li"},"Nodes\u7d44\u6210Cluster\u53e2\u96c6\uff0cCluster\u662f\u7528\u4f86",(0,r.kt)("strong",{parentName:"p"},"\u8a08\u7b97\u3001\u5132\u5b58\u548c\u7db2\u8def\u8cc7\u6e90\u7684\u96c6\u5408"),"\uff0c\u57f7\u884c\u5404\u7a2e\u61c9\u7528\u7a0b\u5f0f\u7684\u57fa\u790e\u3002Nodes\u5206\u70bamaster node\u548cworker node\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Worker Node\u88e1\u9762\u6709\u5f88\u591aPods\uff0c\u6bcf\u500bNode\u90fd\u6703\u8a2d\u7f6e\u67093\u500bprocesses\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Container runtime"),(0,r.kt)("p",{parentName:"li"},"Pod \u662f\u7531 container\u7d44\u6210\uff0ccontainer runtime\u5c31\u662fcontainer engine\u4e2d\u7684\u4f4e\u968e\u5143\u7d20\uff0c\u4f8b\u5982Docker\u3001CRI-O\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kubelet"),(0,r.kt)("p",{parentName:"li"},"\u8b93container\u548cnode\u4e4b\u9593\u53ef\u4ee5\u4e92\u52d5\uff1b\u8b93pod\u5f97\u4ee5\u7528\u5167\u90e8\u7684container\u555f\u52d5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kube Proxy"),(0,r.kt)("p",{parentName:"li"},"cluster\u901a\u5e38\u4ee5\u591a\u500bnodes\u4e32\u6210\uff0cpods\u5f7c\u6b64\u4e4b\u9593\u900f\u904eservice\u806f\u7e6b\u3002Kube Proxy\u5e6b\u52a9\u5c07\u63a5\u6536\u5230\u7684\u8acb\u6c42\u8f49\u63a5\u5230\u9069\u5408\u7684pod\u4e0a\uff0c\u4f8b\u5982\uff1a\u7576\u4e00\u8981\u6c42\u5b58\u53d6node1\u7684app\u6642\uff0c\u6703\u512a\u5148\u5c0e\u5411\u76f8\u540cnode\u4e2d\u7684DB\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Master node\u7528\u4f86\u64cd\u4f5cworker nodes\uff0c\u7576\u4e2d\u67094\u500bprocesses\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API Server\uff1a\u7576client\u5411\u5176\u767c\u9001\u8acb\u6c42\uff0c\u6703\u5148\u78b0\u5230\u5b83\uff0c\u53ef\u505a\u5230 ",(0,r.kt)("strong",{parentName:"p"},"Auth\u7684\u9a57\u8b49 "),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scheduler\uff1a\u67e5\u770b\u73fe\u6709worker node\u7684\u4f7f\u7528\u60c5\u6cc1\uff0c\u4e26\u6c7a\u5b9a\u8981\u5c07\u65b0\u7684pod\u653e\u5728\u54ea\u4e00\u500bnode\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53ea\u6c7a\u5b9a\u8981\u653e\u54ea\u4e00node\uff0c\u771f\u6b63\u555f\u52d5pod\u4e2dcontainer\u4ecd\u662fkublete\u57f7\u884c\u7684"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Controller manager\uff1a\u5075\u6e2ccluster\u7684\u72c0\u614b\uff0c\u7576\u6709\u90e8\u5206pods\u6f70\u5824\u6642\uff0c\u6703\u901a\u77e5scheduler\u6307\u6d3e\u65b0\u7684pods\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"etcd\uff1aKey Value Store\uff0c\u662fcluster\u7684\u5927\u8166\uff01\u4efb\u4f55cluster\u4e2d\u7684\u6539\u52d5\u90fd\u6703\u5b58\u5728\u9019\u88e1\u3002"))))),(0,r.kt)("p",{parentName:"li"},"\u5efa\u7acb\u65b0\u7684Master/Node server:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u53d6\u5f97\u4e00\u65b0\uff08\u6c92\u6709\u5167\u5bb9\u7684\uff09server"),(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88dd\u6240\u6709master/worker node\u6240\u9700\u7684processes"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u5176\u52a0\u5165\u6307\u5b9acluster")))),(0,r.kt)("h2",{id:"minikube--kubectl"},"Minikube & Kubectl"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minikube")),(0,r.kt)("p",null,"\u4e00\u822c\u4f86\u8aaaCluster\u9700\u8981\u6709\u591a\u500bmaster nodes \u548c worker nodes\u7d44\u6210\uff0c \u4e5f\u5c31\u662f\u9700\u8981\u6709\u591a\u500b\u500b\u5225\u7684\u865b\u64ec/\u5be6\u9ad4 \u670d\u52d9\u5668\u4f86\u57f7\u884c\u3002\u4f46\u82e5\u6211\u5011\u53ea\u60f3\u6e2c\u8a66\u6216\u7df4\u7fd2\u4f7f\u7528\u76f8\u95dc\u529f\u80fd\uff0c\u53ef\u4ee5\u7528minikube\uff0c\u5efa\u7acb\u4e00\u500b\u865b\u64ec\u6a5f\u4f5c\u70bacluster\u7684\u6982\u5ff5\uff0c\u57f7\u884c\u6a21\u5f0f\u662f\u5c07\u9700\u8981\u7528\u5230\u7684master/worder ",(0,r.kt)("strong",{parentName:"p"},"processes"),"\u5efa\u7acb\u5728\u4e00\u500bnode\u4e4b\u4e0a \uff08\u4f5c\u70bacluster\uff09\u3002\u88e1\u9762\u5df2\u7d93\u5167\u5efaDocker\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kubectl")),(0,r.kt)("p",null,"\u8981\u64cd\u4f5cMinikube\u5efa\u7acb\u5143\u7d20\u6642\uff0c\u6703\u4f7f\u7528kubectl\u4f86\u64cd\u4f5c\u50cf\u662f\uff1a\u5efa\u7acbpods\u3001services\u3001\u6d88\u9664pods\u7b49\uff0c\u53ef\u7528UI\u3001API\u3001CLI\u7b49\u4e09\u7a2eclients\u7aef\u64cd\u4f5c\u3002\u4e0d\u53ea\u80fd\u7528\u4f86\u64cd\u4f5cMinikube\uff0c\u4e5f\u652f\u63f4\u8a31\u591a\u985e\u4f3c\u7684apps\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"minikube"),(0,r.kt)("li",{parentName:"ol"},"kubectl"),(0,r.kt)("li",{parentName:"ol"},"hyperkit (\u6216\u5176\u4ed6\u865b\u64ec\u6a5f)")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u90fd\u53ef\u4ee5\u7528homebrew\u5b89\u88dd\uff0c\u4e14minikube\u6703\u81ea\u52d5\u5b89\u88dd\u76f8\u4f9d\u5957\u4ef6kubectl"),(0,r.kt)("h3",{id:"start-minikube"},"Start minikube"),(0,r.kt)("p",null,"Start minikube using hyperkit as virtual environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$minikube start --vm-driver=hyperkit\n")),(0,r.kt)("p",null,"Get status of nodes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl get nodes\nNAME       STATUS   ROLES           AGE     VERSION\nminikube   Ready    control-plane   4m46s   v1.24.1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$minikube status\nminikube\ntype: Control Plane\nhost: Running\nkubelet: Running\napiserver: Running\nkubeconfig: Configured\n")),(0,r.kt)("p",null,"Kubectl Version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$kubectl version\nClient Version: version.Info{Major:"1", Minor:"24", GitVersion:"v1.24.2", GitCommit:"f66044f4361b9f1f96f0053dd46cb7dce5e990a8", GitTreeState:"clean", BuildDate:"2022-06-15T14:14:10Z", GoVersion:"go1.18.3", Compiler:"gc", Platform:"darwin/amd64"}\nKustomize Version: v4.5.4\nServer Version: version.Info{Major:"1", Minor:"24", GitVersion:"v1.24.1", GitCommit:"3ddd0f45aa91e2f30c70734b175631bec5b5825a", GitTreeState:"clean", BuildDate:"2022-05-24T12:18:48Z", GoVersion:"go1.18.2", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,r.kt)("h3",{id:"basic-kubectl-commands"},"Basic kubectl commands"),(0,r.kt)("h4",{id:"check"},"Check"),(0,r.kt)("p",null,"s\u53ef\u52a0\u53ef\u4e0d\u52a0\u3002\u8f38\u51fa\u66f4\u591a\u53ef\u5728\u5f8c\u9762\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"-o wide"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl get nodes\n$kubectl get pods\n$kubectl get services\n$kubectl get deployments\n$kubectl get replicaset\n")),(0,r.kt)("h4",{id:"create"},"Create"),(0,r.kt)("p",null,"\u6b32\u5efa\u7acb\u4e00pod\uff0c\u4f46\u53ef\u4ee5\u767c\u73fe\u5728create \u53c3\u6578\u4e2d\u4e26\u6c92\u6709pod\u9019\u9078\u9805\uff0c\u56e0\u70ba\u5728K8s\u4e2d\u6211\u5011\u662f\u7528Deployment\u4f86\u64cd\u4f5cpod\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl create deployment NAME --image=image\n\n$kubectl create deployment nginx-depl --image=nginx\n")),(0,r.kt)("p",null,"\u7576\u5275\u5efadeployment\u6642\uff0c\u6703\u81ea\u52d5\u6709\u5efa\u7acbpods\u7684blueprint\uff0c\u88e1\u9762\u6709\u57fa\u672c\u7684configuration\uff08name, image to use\uff09\u3002"),(0,r.kt)("h4",{id:"edit"},"Edit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl edit deployment NAME \n")),(0,r.kt)("p",null,"\u6703\u986f\u793a\u81ea\u52d5\u7522\u751f\u7684configuration file (with default value)\u3002\u5982\u679c\u9019\u6642\u505a\u4e9b\u4fee\u6539\uff0c\u53ef\u4ee5\u770b\u5230\u820a\u7684pod\u72c0\u614b\u986f\u793a\u5df2\u7d93\u7d50\u675f\uff0c\u540c\u6642\u4e5f\u6709\u4e00\u500b\u65b0\u7684pod\u6b63\u5728\u904b\u4f5c\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[yehs1225@YehTzuHsuansMBP] ~  \n\u276f kubectl get pod\nNAME                          READY   STATUS              RESTARTS   AGE\nnginx-depl-58458fcbd-9c765    1/1     Running             0          12m\nnginx-depl-68b5c6ddf6-8kcr7   0/1     ContainerCreating   0          28s\n\n[yehs1225@YehTzuHsuansMBP] ~  \n\u276f kubectl get pod\nNAME                          READY   STATUS    RESTARTS   AGE\nnginx-depl-68b5c6ddf6-8kcr7   1/1     Running   0          64s\n")),(0,r.kt)("h4",{id:"debug"},"Debug"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl logs [POD NAME]\n$kubectl describe pod [Pod NAME]\n$kubectl exec -it [Pod NAME] --bin/bash\n")),(0,r.kt)("h4",{id:"use-configuration-file-yaml"},"Use configuration file (.YAML)"),(0,r.kt)("p",null,"\u7576\u8981\u5275\u7acbdeployment\u6642\uff0c\u5982\u679c\u6709\u8f03\u591a\u53c3\u6578\u8981\u6253\uff08\u4f8b\u5982image\u6709\u5f88\u591a\uff09\uff0c\u76f4\u63a5\u6253\u6210\u4e00\u884c\u5f88\u4e0d\u65b9\u4fbf\uff0c\u56e0\u6b64\u53ef\u4ee5\u8a2d\u5b9aconfiguration file (\u70ba.yaml\u6a94)\u3002\u4ee5\u4e0b\u9762\u6307\u4ee4\u4f86\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl apply -f [File Name.yaml]\n")),(0,r.kt)("p",null,"\u7576\u7136\u522a\u9664\u4e5f\u53ef\u4ee5\u7528.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl delete -f [File Name.yaml]\n")),(0,r.kt)("h3",{id:"yaml-file-in-k8s"},"YAML file in K8s"),(0,r.kt)("p",null,"YAML\u6709\u56b4\u683c\u7684\u7a7a\u683c\u898f\u5b9a\uff0c\u53ef\u4ee5\u7528YAML validator\u5e6b\u5fd9\u3002\u5206\u6210\u4e09\u90e8\u5206\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"metadata"),(0,r.kt)("li",{parentName:"ol"},"specification"),(0,r.kt)("li",{parentName:"ol"},"status(K8s\u6703\u81ea\u52d5\u7522\u751f)")),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"\u7528mongo DB\u548cMongo Express\u4f86\u7df4\u7fd2\uff0c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u700f\u89bd\u5668\u8a2a\u554fapp\u7db2\u9801"),(0,r.kt)("p",{parentName:"li"},"\u2b07\u85c9\u7531External Service")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9023\u63a5Mongo Express "),(0,r.kt)("p",{parentName:"li"},"(check Auth)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c07request\u9001\u5230Mongo Express\u7684Pod"),(0,r.kt)("p",{parentName:"li"},"\u2b07\u85c9\u7531ConfigMap(DB Url)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7d93\u7531Internal Service\u9023\u5230MongoDB")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"request \u9001\u5230MongoDB\u9019\u500bPod"),(0,r.kt)("p",{parentName:"li"},"(\u8a2d\u5b9aSecret\u5b58\u653eDB User\u3001Pwd)"))),(0,r.kt)("h3",{id:"mongodb-settings"},"MongoDB settings"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u74b0\u5883\u8b8a\u6578"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongo.yaml")," (Deployment)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: mongodb-deployment\n  labels:\n    app: mongodb\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: mongodb\n  template:\n    metadata:\n      labels:\n        app: mongodb\n    spec:\n      containers:\n      - name: mongodb\n        image: mongo\n        ports:\n        - containerPort: 27017\n        env:\n        - name: MONGO_INITDB_ROOT_USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: mongodb-secret\n              key: mongo-root-username\n        - name: MONGO_INITDB_ROOT_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: mongodb-secret\n              key: mongo-root-password \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongo-secret.yaml"),"(secret)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: mongodb-secret\ntype: Opaque\ndata:\n        #generate base64 by type below words in terminal\n        #echo -n "username" | base64\n    mongo-root-username: dXNlcm5hbWU=\n    mongo-root-password: cGFzc3dvcmQ=\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u8a2d\u5b9a\u5b8c\u5f8c\uff0c\u5230terminal\u8f38\u5165"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u9808\u5148\u5efa\u7acbsecret\uff0cdeployment\u624d\u53ef\u4ee5\u53c3\u7167\uff01")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl apply -f mongo-secret.yaml\n#check\n$kubectl get secret\nNAME             TYPE     DATA   AGE\nmongodb-secret   Opaque   2      2m3s\n\n$kubectl apply -f mongo.yaml\n")),(0,r.kt)("h3",{id:"create-internal-service"},"Create Internal Service"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c07\u591a\u500bconfiguration\u653e\u5728\u540c\u4e00.yaml\u4e2d\uff0c\u7528---\u5206\u9694\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongo.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},".\n.\n.\n---\napiVersion: v1\nkind: Service\nmetadata: \n  name: mongodb-service\nspec:\n  selector:\n    app: mongodb\n  ports:\n    - protocol: TCP\n      port: 27017\n      targetPort: 27017\n")),(0,r.kt)("p",null,"apply"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl apply -f mongo.yaml\n\n#check\n$kubectl get service        \nNAME              TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)     AGE\nkubernetes        ClusterIP   10.96.0.1      <none>        443/TCP     17h\nmongodb-service   ClusterIP   10.96.79.161   <none>        27017/TCP   4s\n\n$kubectl describe service mongodb-service\nName:              mongodb-service\nNamespace:         default\nLabels:            <none>\nAnnotations:       <none>\nSelector:          app=mongodb\nType:              ClusterIP\nIP Family Policy:  SingleStack\nIP Families:       IPv4\nIP:                10.96.79.161\nIPs:               10.96.79.161\nPort:              <unset>  27017/TCP\nTargetPort:        27017/TCP\nEndpoints:         172.17.0.2:27017\nSession Affinity:  None\nEvents:            <none>\n")),(0,r.kt)("p",null,"see all "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl get all | grep mongodb\npod/mongodb-deployment-67dcfb9c9f-2k8zq   1/1     Running   0          13m\nservice/mongodb-service   ClusterIP   10.96.79.161   <none>        27017/TCP   5m44s\ndeployment.apps/mongodb-deployment   1/1     1            1           13m\nreplicaset.apps/mongodb-deployment-67dcfb9c9f   1         1         1       13m\n")),(0,r.kt)("h3",{id:"mongoexpress-settings"},"MongoExpress settings"),(0,r.kt)("p",null,"\u74b0\u5883\u8b8a\u6578\u8a2d\u5b9a\u4e00\u6a23\u53ef\u4ee5\u5f9eMongo-Express \u7684 docker image"),(0,r.kt)("p",null,"\u627e\u5230"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Name                            | Default         | Description\n--------------------------------|-----------------|------------\nME_CONFIG_BASICAUTH_USERNAME    | ''              | mongo-express web username\nME_CONFIG_BASICAUTH_PASSWORD    | ''              | mongo-express web password\nME_CONFIG_MONGODB_ENABLE_ADMIN  | 'true'          | Enable admin access to all databases. Send strings: `\"true\"` or `\"false\"`\nME_CONFIG_MONGODB_ADMINUSERNAME | ''              | MongoDB admin username\nME_CONFIG_MONGODB_ADMINPASSWORD | ''              | MongoDB admin password\nME_CONFIG_MONGODB_PORT          | 27017           | MongoDB port\nME_CONFIG_MONGODB_SERVER        | 'mongo'         | MongoDB container name. Use comma delimited list of host names for replica sets.\nME_CONFIG_OPTIONS_EDITORTHEME   | 'default'       | mongo-express editor color theme, [more here](http://codemirror.net/demo/theme.html)\nME_CONFIG_REQUEST_SIZE          | '100kb'         | Maximum payload size. CRUD operations above this size will fail in [body-parser](https://www.npmjs.com/package/body-parser).\nME_CONFIG_SITE_BASEURL          | '/'             | Set the baseUrl to ease mounting at a subdirectory. Remember to include a leading and trailing slash.\nME_CONFIG_SITE_COOKIESECRET     | 'cookiesecret'  | String used by [cookie-parser middleware](https://www.npmjs.com/package/cookie-parser) to sign cookies.\nME_CONFIG_SITE_SESSIONSECRET    | 'sessionsecret' | String used to sign the session ID cookie by [express-session middleware](https://www.npmjs.com/package/express-session).\nME_CONFIG_SITE_SSL_ENABLED      | 'false'         | Enable SSL.\nME_CONFIG_SITE_SSL_CRT_PATH     | ''              | SSL certificate file.\nME_CONFIG_SITE_SSL_KEY_PATH     | ''              | SSL key file.\n")),(0,r.kt)("p",null,"\u9019\u88e1\u6211\u5011\u9700\u8981\u7528\u5230\u4e09\u500b\u8b8a\u6578"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u9023\u5230MongoDB?")),(0,r.kt)("p",null,"\u2192ME_CONFIG_MONGODB_SERVER  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8a2a\u554f\u6b0a\u9650(credential)?")),(0,r.kt)("p",null,"\u2192ME_CONFIG_MONGODB_ADMINUSERNAME"),(0,r.kt)("p",null,"\u2192ME_CONFIG_MONGODB_ADMINPASSWORD"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongo-express.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: mongo-express\n  labels:\n    app: mongo-express\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: mongo-express\n  template:\n    metadata:\n      labels:\n        app: mongo-express\n    spec:\n      containers:\n      - name: mongo-express\n        image: mongo-express\n        ports:\n        - containerPort: 8081\n        env:\n        - name: ME_CONFIG_MONGODB_ADMINUSERNAME\n          valueFrom:\n            secretKeyRef:\n              name: mongodb-secret\n              key: mongo-root-username\n        - name: ME_CONFIG_MONGODB_ADMINPASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: mongodb-secret\n              key: mongo-root-password         \n        - name: ME_CONFIG_MONGODB_SERVER\n          valueFrom:\n            configMapKeyRef::\n              name: mongodb-configmap\n              key: database_url \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongo-configmap.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: mongodb-configmap\ndata:\n    database_url: mongodb-service\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8a2d\u5b9a\u5b8c\u5f8c\uff0c\u5230terminal\u8f38\u5165"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u9808\u5148\u5efa\u7acbconfigmap\uff0cdeployment\u624d\u53ef\u4ee5\u53c3\u7167\uff01")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl apply -f mongo-configmap.yaml\n$kubectl apply -f mongo-express.yaml\n")),(0,r.kt)("h3",{id:"create-external-service"},"Create External Service"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongo-express.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},".\n.\n.\n---\napiVersion: v1\nkind: Service\nmetadata: \n  name: mongodb-express-service\nspec:\n  selector:\n    app: mongo-express\n    # make it external server\n  type: LoadBalancer\n  ports:\n    - protocol: TCP\n      port: 8081\n      targetPort: 8081     \n      # make it external server (must between 30000~32767)\n      nodePort: 30000\n")),(0,r.kt)("p",null,"terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$kubectl apply -f mongo-express.yaml\n$kubectl get service                                                                                                                                                      \nNAME                      TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE\nkubernetes                ClusterIP      10.96.0.1        <none>        443/TCP          18h\nmongodb-express-service   LoadBalancer   10.101.183.184   <pending>     8081:30000/TCP   37s\nmongodb-service           ClusterIP      10.96.79.161     <none>        27017/TCP        34m\n")),(0,r.kt)("h3",{id:"outcome"},"Outcome"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube service mongodb-express-service\n|-----------|-------------------------|-------------|---------------------------|\n| NAMESPACE |          NAME           | TARGET PORT |            URL            |\n|-----------|-------------------------|-------------|---------------------------|\n| default   | mongodb-express-service |        8081 | http://192.168.64.2:30000 |\n|-----------|-------------------------|-------------|---------------------------|\n\ud83c\udf89  Opening service default/mongodb-express-service in default browser...\n")),(0,r.kt)("h2",{id:"namespace"},"Namespace"),(0,r.kt)("h3",{id:"\u4ecb\u7d39"},"\u4ecb\u7d39"),(0,r.kt)("p",null,"\u6982\u5ff5\u50cf\u662fcluster\u88e1\u9762\u6709\u865b\u64ec\u7684cluster\u3002\u9810\u8a2d\u6703\u67094\u500bNamespaces\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get namespaces\nNAME              STATUS   AGE\ndefault           Active   10d\nkube-node-lease   Active   10d\nkube-public       Active   10d\nkube-system       Active   10d\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"kube-system")),(0,r.kt)("p",{parentName:"li"},"\u4e0d\u8981\u5728\u6b64\u65b0\u589e\u6216\u4fee\u6539\u4efb\u4f55\u6587\u4ef6\uff01\u6b64\u8655\u8ca0\u8cacsystem process\uff0c\u4f8b\u5982Master\u3001kubectl\u7684process\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"kube-public"),"\n\u5b58\u653e\u53ef\u516c\u958b\u5b58\u53d6\u7684\u8cc7\u6599\uff0c\u4e00configmap\u7528\u4f86\u5132\u5b58cluster\u7684\u8cc7\u8a0a\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl cluster-info                                                               \u23ce\nKubernetes control plane is running at https://192.168.64.2:8443\nCoreDNS is running at https://192.168.64.2:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"kube-node-lease")),(0,r.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u500bnode\u90fd\u6703\u9023\u5230namespace\u4e2d\u7684lease\u7269\u4ef6\uff0c\u5075\u6e2cnode\u7684heartbeats\uff08\u4e5f\u5c31\u662f\u5176availability\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"default")),(0,r.kt)("p",{parentName:"li"},"\u6700\u521d\u7684resources\u6703\u653e\u5728\u9019\uff0c\u5c31\u7b97\u4f7f\u7528\u8005\u6c92\u6709\u81ea\u5df1\u65b0\u589e\u4e00\u500bnamespace\u3002"))),(0,r.kt)("h4",{id:"create-new-namespaces"},"create new namespaces"),(0,r.kt)("p",null,"with CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create namespace my-namespace\nnamespace/my-namespace created\n$ kubectl get namespaces                                                           \u23ce\nNAME              STATUS   AGE\ndefault           Active   11d\nkube-node-lease   Active   11d\nkube-public       Active   11d\nkube-system       Active   11d\nmy-namespace      Active   23s\n")),(0,r.kt)("p",null,"whit configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: mongodb-configmap\n  namespace: my-namespace\ndata:\n    database_url: mongodb-service\n")),(0,r.kt)("h3",{id:"\u9069\u7528\u6848\u4f8b"},"\u9069\u7528\u6848\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Resources grouped in Namespaces"),(0,r.kt)("p",{parentName:"li"},"\u89e3\u6c7a Everything in one namespace \uff0c\u4f8b\u5982\uff1aDB\u53ef\u4ee5\u662f\u4e00\u7fa4\u3001Monitoring\u4e5f\u5206\u4e00\u7fa4")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Many teams, Same application")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Resources sharing"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Staging and Development"),(0,r.kt)("li",{parentName:"ol"},"Blue/Green Deployment(\u5169\u4e0d\u540c\u7248\u672c)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access and Resources Limits"),(0,r.kt)("p",{parentName:"li"},"\u5728\u540c\u4e00cluster\u4e4b\u9593\u82e5\u6709\u5169\u500b\u4ee5\u4e0a\u7684projects\uff0c\u5efa\u7acb\u5404\u81ea\u7684namespace\uff0c\u9650\u5236CPU, RAM, Storage\u3002"))),(0,r.kt)("p",null,"\u5e7e\u4e4e\u6240\u6709\u6771\u897f\u90fd\u4e0d\u80fd\u5728\u4e0d\u540c\u7684Namespace\u4e4b\u9593\u5171\u7528\uff0c\u800cservice\u662f\u53ef\u4ee5\u5171\u7528\u7684\u5143\u7d20\u3002\u4f8b\u5982\u8981\u9023\u5230\u7279\u5b9aDB\u7684app's nod\u7684configmap\u4e2d\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"database_url"),"\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-service.database"),"\uff08\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},".database"),"\u662f\u6211\u5011\u5e6b\u5b58\u653eDB\u7684namespace\u6240\u53d6\u7684\u540d\u5b57\uff09\u3002"),(0,r.kt)("p",null,"\u6709\u4e9bcomponents\u4e0d\u53ef\u4ee5\u88ab",(0,r.kt)("strong",{parentName:"p"},"\u653e\u9032namespace"),"\u7576\u4e2d\uff0c\u4f8b\u5982volume\u3002\u7528\u4f86\u8a2d\u5b9a\u7684\u76f8\u95dc\u6307\u4ee4\u662f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl api-resources --namespaced=false\n$ kubectl api-resources --namespaced=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8b8a\u66f4active namespace")),(0,r.kt)("p",null,"\u82e5\u8981\u63db\u5230my-namespace\u9019\u500bnamespace\uff0c\u5c31\u8981\u5728\u6bcf\u4e00\u884ckubectl\u5f8c\u52a0\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"-n my-namespace"),"\u3002\u53ef\u5b89\u88ddkubectx\u5167\u542bkubens\u6307\u4ee4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"kubens"),"\u4ee3\u8868\u67e5\u770b\u6240\u6709namespaces\u53ca\u76ee\u524dactive\u7684\u90a3\u4e00\u500b\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"kubens my-namespace"),"\u5207\u63dbactive one\u3002"),(0,r.kt)("h2",{id:"helm"},"Helm"),(0,r.kt)("p",null,"Package Manager of K8s"),(0,r.kt)("p",null,"Helm Charts : bundle of YAML file\uff0c\u4e5f\u6709Helm Repository\u653e\u5e38\u898b\u7684\u8a2d\u5b9a\u6a94\u53ef\u4f9b\u4e0b\u8f09\u3002"))}c.isMDXComponent=!0}}]);