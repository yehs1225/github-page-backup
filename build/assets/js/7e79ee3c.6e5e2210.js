"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1739],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),g=m(a),c=r,d=g["".concat(o,".").concat(c)]||g[c]||u[c]||i;return a?n.createElement(d,l(l({ref:e},k),{},{components:a})):n.createElement(d,l({ref:e},k))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4886:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={},l="Git",p={unversionedId:"Tools/Git-and-Github",id:"Tools/Git-and-Github",title:"Git",description:"\u4ec0\u9ebc\u662fGit\u7248\u672c\u63a7\u5236?",source:"@site/docs/Tools/Git-and-Github.md",sourceDirName:"Tools",slug:"/Tools/Git-and-Github",permalink:"/docs/Tools/Git-and-Github",draft:!1,editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Tools/Git-and-Github.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command Line and Vim",permalink:"/docs/Tools/Command-Line-and-Vim"},next:{title:"Set up",permalink:"/docs/Tools/Mac_Set_up"}},o={},m=[{value:"\u4ec0\u9ebc\u662fGit\u7248\u672c\u63a7\u5236?",id:"\u4ec0\u9ebc\u662fgit\u7248\u672c\u63a7\u5236",level:2},{value:"git\u57fa\u790e\u64cd\u4f5c",id:"git\u57fa\u790e\u64cd\u4f5c",level:3},{value:"\u4ec0\u9ebc\u662fbranch?",id:"\u4ec0\u9ebc\u662fbranch",level:2},{value:"branch \u76f8\u95dc\u6307\u4ee4",id:"branch-\u76f8\u95dc\u6307\u4ee4",level:3},{value:"git \u8ddf github \u5230\u5e95\u662f\u4ec0\u9ebc\u95dc\u4fc2?",id:"git-\u8ddf-github-\u5230\u5e95\u662f\u4ec0\u9ebc\u95dc\u4fc2",level:2},{value:"github\u7684\u57fa\u672c\u64cd\u4f5c",id:"github\u7684\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\u64cd\u4f5cgithub\u6700\u5f8c\u7684\u6700\u5f8c\uff1agithubflow",id:"\u64cd\u4f5cgithub\u6700\u5f8c\u7684\u6700\u5f8cgithubflow",level:3},{value:"Git \u72c0\u6cc1\u5287",id:"git-\u72c0\u6cc1\u5287",level:2},{value:"\u5176\u4ed6\u8cc7\u6e90",id:"\u5176\u4ed6\u8cc7\u6e90",level:2},{value:"githubpages",id:"githubpages",level:5},{value:"github\u8d85\u8a73\u7d30\u6559\u5b78",id:"github\u8d85\u8a73\u7d30\u6559\u5b78",level:5}],k={toc:m};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"Git"),(0,r.kt)("h2",{id:"\u4ec0\u9ebc\u662fgit\u7248\u672c\u63a7\u5236"},"\u4ec0\u9ebc\u662fGit\u7248\u672c\u63a7\u5236?"),(0,r.kt)("p",null,'\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f"\u6bcf\u4e00\u6b21\u4e00\u500b\u5c08\u6848(repository)\u6709\u4efb\u4f55\u6a94\u6848\u4fee\u6539(\u65b0\u589e\u3001\u522a\u9664\u3001\u7de8\u8f2f)\u90fd\u6703\u88ab\u8a18\u9304\u4e0b\u4f86"\uff0c\u5305\u542b\u5099\u8a3b\u3001\u4fee\u6539\u6642\u9593\u53ca\u66f4\u52d5\u8005\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"EX.\u548c\u5c0f\u7d44\u6210\u54e1\u4e00\u8d77\u505a\u5831\u544a\u7684\u6642\u5019....\n\u7121\u9650\u5faa\u74b0\u7684\u4fee\u6539\uff1a\u7d93\u6fdf\u5b78\u5831\u544a_V1 >\u7d93\u6fdf\u5b78\u5831\u544a_V2>\u7d93\u6fdf\u5b78\u5831\u544a_Final>\u7d93\u6fdf\u5b78\u5831\u544a_Final_\u6700\u7d42\u7248>\u7d93\u6fdf\u5b78\u5831\u544a_Final_\u7121\u6575\u6700\u7d42\u7248\n\u9664\u4e86\u5167\u5bb9\u4fee\u8a02\u5916\uff0c\u672c\u8eab\u547d\u540d\u7fd2\u6163\u4e5f\u4e0d\u540c(\u4ee5V1,1,first,\u65e5\u671f\u8a3b\u8a18)\uff0c\u5f88\u591a\u6642\u5019\u6700\u7d42\u7248\u4e4b\u5f8c\u53c8\u6709\u7121\u6575\u6700\u7d42\u7248\uff0c\u9019\u6642\u5019\u5c31\u6703\u767c\u73fe\u5169\u500b\u5927\u554f\u984c\uff1a\n(1)\u9019\u4e00\u7248\u8ddf\u4e0a\u4e00\u7248\u6709\u751a\u9ebc\u4e0d\u4e00\u6a23?\u5230\u5e95\u54ea\u4e00\u7248\u662f\u6700\u65b0\u7684?\n(2)\u5927\u5bb6\u90fd\u5728\u5404\u81ea\u96fb\u8166\u6539\uff0c\u6bcf\u4eba\u8ca0\u8cac\u4e00\u5c0f\u90e8\u5206\uff0c\u8981\u600e\u9ebc\u5408\u4f75\u5728\u4e00\u8d77?\u6709\u6c92\u6709\u4eba\u91cd\u8907\u6539\u4e86\u540c\u500b\u5730\u65b9?\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u9019\u500b\u554f\u984c\u4f7f\u7528\u57fa\u790e\u7684Git\u6307\u4ee4\u5c31\u53ef\u4ee5\u5e6b\u6211\u5011\u89e3\u6c7a!"),(0,r.kt)("h3",{id:"git\u57fa\u790e\u64cd\u4f5c"},"git\u57fa\u790e\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6307\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git init"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u521d\u59cb\u5316\u3002\u5728\u8a72\u4f4d\u7f6e\u4e2d\u52a0\u5165\u7248\u672c\u63a7\u5236(\u5efa\u7acb\u4e00\u500brepository)\uff0c\u6703\u751f\u6210\u96b1\u85cf\u6a94\u6848.git(\u88e1\u9762\u6703\u8a18\u9304\u7248\u672c\u63a7\u5236\u7684\u76f8\u95dc\u898f\u7bc4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vim .gitignore"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u5c07\u4e0d\u9700\u8981\u7248\u672c\u63a7\u5236\u7684\u6587\u4ef6\u540d\u7a31\u52a0\u5165\u88e1\u982d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git add \u6587\u4ef6\u540d\u7a31"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c07\u65b0\u589e\u7684\u6587\u4ef6/\u6709\u4fee\u6539\u7684\u6587\u4ef6\u52a0\u5165tracked\u4e2d\uff0c\u624d\u80fd\u9032\u884ccommit(\u6b63\u5f0f\u66f4\u65b0\u4e00\u500b\u7248\u672c)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git add ."),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u82e5\u8981\u5c07\u6240\u6709\u6a94\u6848\u90fd\u52a0\u5165\u53ef\u4ee5\u7528\u9019\u500b\u3002(\u4e0d\u5305\u542b\u5728.gitignore\u7684\u6587\u4ef6)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git commit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u4e00\u500b\u7248\u672c\uff0c\u6703\u9032\u5230\u6587\u5b57\u7de8\u8f2f\u7cfb\u7d71\uff0c\u53ef\u4ee5\u8f38\u5165\u672c\u6b21\u66f4\u65b0\u7684\u8aaa\u660e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},'git commit -m " \u8aaa\u660e\u6587\u5b57"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u76f4\u63a5\u8f38\u5165\u8aaa\u660e\u6587\u5b57\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git commit -am"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u7d50\u5408 git add \u53ca git commit -m " "\u5169\u500b\u52d5\u4f5c\u3002 *\u4f46\u82e5\u662f\u65b0\u589e\u7684\u6587\u4ef6\u5fc5\u9808\u4f7f\u7528git add')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git log"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u770b\u6240\u6709\u7248\u672c\u66f4\u52d5\u7d00\u9304\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git log online"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u770b\u6240\u6709\u7248\u672c\u66f4\u52d5\u7d00\u9304(\u50c5\u986f\u793a\u4e00\u884c)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git checkout \u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9032\u5165\u6307\u5b9a\u7248\u672c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git diff commit1 commit2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bd4\u8f03\u5169\u6b21commit\u5dee\u7570\u3002commit\u53ef\u4ee5\u8f38\u5165\u524d\u4e94\u78bc\u5c31\u597d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"git status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u770b\u76ee\u524d\u7684git\u72c0\u614b(\u54ea\u4e9b\u6587\u4ef6\u6709\u52a0\u5165git\u7248\u672c\u63a7\u5236\u4e14\u6709\u505a\u66f4\u6539\u4f46\u672acommit\u7b49\u7b49)")))),(0,r.kt)("h2",{id:"\u4ec0\u9ebc\u662fbranch"},"\u4ec0\u9ebc\u662fbranch?"),(0,r.kt)("p",null,'branch\u7684\u4e2d\u6587\u5c31\u662f"\u6a39\u8449\u7684\u5206\u652f"\uff0c\u6709\u5206\u652f\u4e5f\u5c31\u4ee3\u8868\u6709\u4e00\u500b\u4e3b\u9ad4\uff0c\u7a31\u70bamaster\uff0c\u662f\u6700\u4e3b\u8981\u7684\u6a94\u6848\u3002'),(0,r.kt)("p",null,"\u76f4\u63a5\u7528\u4f8b\u5b50\u4f86\u4ecb\u7d39\u70ba\u751a\u9ebc\u9700\u8981branch?\u4ee5\u53ca\u5177\u9ad4\u6548\u679c\u3002"),(0,r.kt)("p",null,"\u6709\u4e00\u500b\u7a69\u5b9a\u904b\u884c\u7684\u5c08\u6848(stable version)\uff0c\u4eca\u5929\u958b\u59cb\u8457\u624b\u70ba\u5b83\u64b0\u5beb\u65b0\u529f\u80fd\uff0c\u4f46\u662f\u5beb\u5230\u4e00\u534a\u6642\uff0c\u8001\u95c6\u7a81\u7136\u8ddf\u4f60\u8aaa\uff1a\u311d\u311d\u311d!\u672c\u4f86\u7684\u5c08\u6848\u51fa\u73febug\u4e86\uff0c\u5feb\u628a\u5b83\u4fee\u597d\u3002\u9019\u6642\u5019\u600e\u9ebc\u8fa6\u5462?"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u5011\u6c92\u6709\u5efa\u7acbbranch\u90fd\u5728\u4e3b\u9ad4\u4e0a\u9032\u884c\u7a0b\u5f0f\u7de8\u5beb\uff0c\u90a3\u5c31\u6703\u50cf\u4e0b\u5716\u4e00\u6a23\uff0c\u65b0\u529f\u80fd\u9084\u6c92\u5beb\u5b8c\uff0cbug\u4fee\u597d\u4e86\u4e5f\u4e0d\u80fd\u4e0a\u67b6QQQ"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5167\u90e8\u8cc7\u6599\u593e\u5167",src:a(2754).Z,width:"1157",height:"325"})),(0,r.kt)("p",null,"\u56e0\u6b64\u9664\u4e86\u9760\u57fa\u672c\u7684git\u6307\u4ee4\uff0c\u4f86\u77e5\u9053\u6bcf\u4e00\u6b21\u6a94\u6848\u7684\u66f4\u52d5\uff0c\u4e5f\u5229\u7528branch\u4f86\u5354\u52a9\u6211\u5011!"),(0,r.kt)("p",null,"\u5982\u4e0b\u5716\uff0c\u6211\u5011\u5728\u62ff\u5230\u5c08\u6848\u6642\u5c31\u5148\u5efa\u7acb\u4e00\u500bbranch\u4f86\u958b\u767c\u65b0\u529f\u80fd\uff0c\u90a3\u9ebc\u7576\u6211\u5011\u65b0\u529f\u80fd\u5b8c\u6210\u523030%\u6642\uff0c\u6211\u5011\u4e5f\u53ef\u4ee5\u5148\u653e\u8457\u53bb\u4fee\u7406master\u4e2d\u7684bug\u4e26\u4e14\u5c07\u5176\u767c\u4f48\u56de\u5fa9\u71df\u904b\uff0c\u6b64\u6642\u4f60\u505a\u5230\u4e00\u534a\u7684\u65b0\u529f\u80fd\u5b8c\u5168\u4e0d\u6703\u51fa\u73fe\u5728\u9019\u88e1\uff0c\u7b49\u5230\u5b8c\u6210\u6642\uff0c\u5728merge\u9019\u500bbranch\u5230master\u4e2d\uff0c\u5c31\u53ef\u4ee5\u63a8\u51fa\u65b0\u529f\u80fd\u62c9\uff01"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5167\u90e8\u8cc7\u6599\u593e\u5167",src:a(5581).Z,width:"994",height:"576"})),(0,r.kt)("p",null,"\u5f9e\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u51fabranch\u7684\u91cd\u8981\u6027\uff0c\u6b64\u5916\u7a0b\u5f0f\u958b\u767c\u591a\u7531\u8a31\u591a\u4eba\u4e00\u8d77\u64b0\u5beb\uff0c\u4e0d\u53ef\u80fd\u5927\u5bb6\u90fd\u5728\u4e3b\u8981\u7684\u6a94\u6848\u4e0a\u76f4\u63a5\u9032\u884c\u4fee\u6539\uff0c\u56e0\u6b64\uff0c\u5728\u62ff\u5230\u4e00\u4efd\u5c08\u6848\u6642\u6703\u5148\u5efa\u7acb\u4e00\u500bbranch\u9032\u884c\u90e8\u5206\u5206\u5de5\uff0c\u6700\u5f8c\u5728\u5408\u4f75\u5230\u4e3b\u8981\u6a94\u6848(master)\u4e2d\u3002"),(0,r.kt)("h3",{id:"branch-\u76f8\u95dc\u6307\u4ee4"},"branch \u76f8\u95dc\u6307\u4ee4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch -v"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u76ee\u524d\u6240\u6709branch(\u4e5f\u6703\u986f\u793amaster)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch \u65b0branch\u540d\u7a31"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5efa\u7acb\u65b0\u7684branch(\u6703\u8907\u88fd\u76ee\u524dmaster\u6240\u6709\u7248\u672c\u7684commit)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch -m \u65b0branch\u540d\u7a31"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u7576\u524dbranch\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch -d branch\u540d\u7a31"),(0,r.kt)("td",{parentName:"tr",align:null},"\u522a\u9664branch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git checkout branch\u540d\u7a31"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9032\u5165\u6307\u5b9abranch(\u6216master)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git merge branch\u540d\u7a31"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728master\u4e0b\u4f7f\u7528\uff0c\u4ee3\u8868\u5c07\u8a72branch\u5408\u4f75\u9032\u4f86")))),(0,r.kt)("p",null,"\u7576branch\u5408\u4f75\u6642\u767c\u751f\u885d\u7a81(conflict)\uff0c\u7cfb\u7d71\u6703\u986f\u793a\u54ea\u5e7e\u500b\u6a94\u6848\u767c\u751f\u885d\u7a81\u3002\u6b64\u6642\u9700\u8981\u4eba\u5de5\u9032\u5165\u6bcf\u4e00\u500b\u6a94\u6848(vim \u6a94\u6848\u540d)\u9032\u884c\u4fee\u6539\uff0c\u6703\u660e\u78ba\u6307\u51famaster\u3001branch\u4e2d\u54ea\u5e7e\u884c\u6709\u885d\u7a81(\u63d0\u793a\u5b57)\uff0c\u6b64\u6642\u53ef\u4ee5\u9078\u64c7\u63a1\u7528\u4efb\u4f55\u4e00\u500b\uff0c\u751a\u81f3\u662f\u6539\u6210\u5176\u4ed6\u6587\u5b57\uff0c\u522a\u9664(\u63d0\u793a\u5b57)\u5f8c\u76f4\u63a5\u9032\u884c\u4fee\u6539\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"git-\u8ddf-github-\u5230\u5e95\u662f\u4ec0\u9ebc\u95dc\u4fc2"},"git \u8ddf github \u5230\u5e95\u662f\u4ec0\u9ebc\u95dc\u4fc2?"),(0,r.kt)("p",null,'git \u662f\u524d\u9762\u4e00\u76f4\u63d0\u5230\u7684"\u7248\u672c\u63a7\u5236"\uff0c\u53ef\u4ee5\u5e6b\u6211\u5011\u9054\u5230\u7d00\u9304\u66f4\u52d5\u3001\u5171\u540c\u5354\u4f5c\u7684\u76ee\u7684\uff0c\u4f46\u662f!\u4f46\u662f!\u9019\u4e00\u5207\u90fd\u662f\u767c\u751f\u5728\u81ea\u5df1\u96fb\u8166\u4e0a(\u672c\u6a5f)\uff0c\u800c\u5728\u958b\u767c\u6642\uff0c\u80af\u5b9a\u9700\u8981\u8ddf\u5225\u4eba\u5354\u4f5c\uff0c\u90a3\u9ebc\u7576\u7136\u662f\u900f\u904e\u7db2\u8def\u4f86\u50b3\u8f38\uff0c\u53ef\u4ee5\u81ea\u884c\u67b6\u8a2d\u7db2\u7ad9\u5b58\u653e\u3002\u800cGitHub\u5c31\u662f\u4e00\u500b\u5b58\u653e\u4ea4\u6d41\u7684\u5e73\u53f0\uff0c\u63d0\u4f9b\u5927\u5bb6\u5716\u5f62\u5316\u4ecb\u9762\u4f7f\u7528git\u7684\u529f\u80fd\uff0c\u8996\u89ba\u5316\u7684repository\uff08\u5c08\u6848\uff0c\u4ee5\u4e0b\u4e5f\u7c21\u7a31repo\uff09\uff0c\u56e0\u70ba\u6709\u7c21\u6f54\u7684\u8a2d\u5b9a\u4ecb\u9762\u52a0\u4e0a\u773e\u591a\u7684\u4f7f\u7528\u8005\uff0c\u56e0\u6b64\uff0c\u53ef\u4ee5\u8aaa\u662f\u5168\u7403\u6700\u5927\u7684\u5de5\u7a0b\u5e2b\u4ea4\u53cb\u5e73\u53f0!(\u4e5f\u6709\u5176\u4ed6\u985e\u4f3c\u5e73\u53f0\u53ef\u4ee5\u9078\u64c7)\u3002'),(0,r.kt)("p",null,"\u4ee5\u4e0a\u53ef\u4ee5\u91d0\u6e05GitHub\u662fgit\u7684\u5ef6\u4f38\u7522\u7269 => ",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528git\u4e0d\u4e00\u5b9a\u8981\u4f7f\u7528GitHub\uff0c\u4f46\u4f7f\u7528github\u5c31\u4e00\u5b9a\u8981\u61c2git\u3002")),(0,r.kt)("h3",{id:"github\u7684\u57fa\u672c\u64cd\u4f5c"},"github\u7684\u57fa\u672c\u64cd\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"git-push-\u5982\u4f55\u628a\u81ea\u5df1\u672c\u6a5f\u7684code\u653e\u4e0agithub\u7684repository\u4e0a"},"git push \uff08\u5982\u4f55\u628a\u81ea\u5df1\u672c\u6a5f\u7684code\u653e\u4e0aGitHub\u7684repository\u4e0a\uff09"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u539f\u5148\u7684repository\u5c31\u662f\u5f9e\u9060\u7aef\u6293\u4e0b\u4f86\u7684\u8a71\uff0c\u8981push\u6642\uff0c\u6703\u81ea\u52d5\u53bb\u6aa2\u67e5\u82e5\u9060\u7aef\u5df2\u6709\u65b0\u7248\u672c\uff0c\u5c31\u5fc5\u9808\u5148\u9032\u884cpull\u53camerge\u7684\u52d5\u4f5c\uff0c\u624d\u80fd\u6210\u529f\u57f7\u884c")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9ede\u9078GitHub\u4e3b\u9801\u53f3\u4e0a\u7684+\u865f\uff0c\u65b0\u589e\u4e00\u500brepository")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u5efa\u5b8crepo\u5f8c\u6703\u6709\u63d0\u793a\u6559\u4f60\u8a72\u5728\u7d42\u7aef\u6a5f\u8f38\u5165\u7684\u6307\u4ee4"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9060\u7aef\u7684repository\u65b0\u589e\u4e00\u500borigin\u4f5c\u70ba\u57fa\u790e\uff08origin\u4e0d\u662f\u771f\u7684\u540d\u7a31\u6709\u9ede\u865b\u64ec\u7684\u6982\u5ff5\uff0c\u4e5f\u53ef\u4ee5\u6539\u6210\u5176\u4ed6\u540d\u7a31\u4f8b\u5982main\uff09"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git remote add origin https://github.com/<username>/<repo's name>.git"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c07\u672c\u6a5f\u4e2d\u9019\u500bbranch\u5206\u652f\u7684\u6a94\u6848\u653e\u4e0a\u53bb\uff08-u\u4ee3\u8868\u5806\u5230\u54ea\u88e1\u7684\u610f\u601d\uff09"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git push -u origin <local branch name>"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f38\u5165username\u53capassword\uff0c\u73fe\u5df2\u6539\u70ba\u7528personal token\uff0c\u56e0\u6b64\u5728github\u4e2d\u7533\u8acb\u5f8c\uff0c\u5728password\u9019\u6b04\u8f38\u5165\u4f60\u7684token\u3002"),(0,r.kt)("p",{parentName:"li"},"*\u89e3\u6c7a\u6bcf\u6b21pull\u3001push\u90fd\u8981\u8f38\u5165\u5e33\u5bc6\u7684\u554f\u984c\uff0c\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\uff0c\u4e0b\u6b21\u5c31\u4e0d\u7528\u518d\u91cd\u8907\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git config --global credential.helper store")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"git-pull"},"git pull"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git pull origin master"),"//origin\u70ba\u9060\u7aef\uff0cmaster\u70ba\u672c\u6a5fbranch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"git-clone"},"git clone"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git clone <url that you want to clone>")),(0,r.kt)("p",{parentName:"li"},"clone\u53ef\u4ee5\u628a\u5225\u4eba\uff08\u6216\u81ea\u5df1\uff09\u7684repo\u8907\u88fd\u5230\u672c\u6a5f\uff0c\u4f46\u662f\u4fee\u6539\u5f8c\u82e5\u4f60\u6c92\u6709\u6b0a\u9650\u5c31\u4e0d\u80fd\u76f4\u63a5push\u56de\u53bb\u9060\u7aef\u3002"),(0,r.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u82e5\u662f\u64c1\u6709\u4e00\u4efd\u5225\u4eba\u7684repo\u4e5f\u53ef\u4ee5\u5148\u9ede\u9078fork\uff0c\u628a\u8a72repo\u8907\u88fd\u4e00\u4efd\u5230\u81ea\u5df1\u7684github\u4e2d\uff0c\u518dclone\u4e0b\u4f86\uff0c\u6539\u52d5\u5f8c\u5c31\u53ef\u4ee5\u76f4\u63a5push\u56de\u81ea\u5df1\u7684repo\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"pull-requestpr\u8207\u5176\u4ed6\u4f5c\u8005\u4e00\u8d77\u5354\u4f5c"},"Pull Request(PR,\u8207\u5176\u4ed6\u4f5c\u8005\u4e00\u8d77\u5354\u4f5c)"),(0,r.kt)("p",{parentName:"li"},"\u7576\u4f60\u4eca\u5929\u770b\u5230\u5225\u4eba\u7684\u5c08\u6848\u5f88\u9177\uff0c\u81ea\u5df1\u4e5f\u60f3\u8ca2\u737b\u4e00\u4efd\u5fc3\u529b\u3002\u4f46\u662f\u539f\u5148\u7684\u4f5c\u8005\u80af\u5b9a\u4e0d\u6703\u5e0c\u671b\u96a8\u4fbf\u5c31\u6709\u8def\u4eba\u8981\u6c42\u81ea\u5df1\u958b\u6b0a\u9650\u7d66\u4ed6\uff0c\u56e0\u6b64\uff0c\u82e5\u4f60\u60f3\u8981\u53c3\u8207\u5c08\u6848\u7684\u958b\u767c\u53ef\u4ee5\u6709\u4ee5\u4e0b\u7684\u6b65\u9a5f\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"fork\u5c08\u6848\u5230\u81ea\u5df1\u7684github")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7de8\u8f2f\u5b8c\u7a0b\u5f0f\u78bc\u5f8cpush\u56de\u81ea\u5df1\u7684github")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u767c\u8d77pull request")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u539f\u4f5c\u8005\u6703\u770b\u5230\u4f60\u7684\u8acb\u6c42")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u8005\u540c\u610f\u5f8c\u5c31\u53ef\u4ee5\u6309\u4e0bmerge\u4f86\u5c07\u4f60\u505a\u7684\u66f4\u52d5\u5408\u4f75\u5230\u539f\u5148\u7684\u5c08\u6848"))))),(0,r.kt)("p",null,"\u200b\t",(0,r.kt)("strong",{parentName:"p"},"pull request\u5c31\u662f\u6307\u5e0c\u671b\u539f\u4f5c\u8005\u53ef\u4ee5\u5c07\u4f60\u505a\u7684\u6539\u8b8apull\u56de\u81ea\u5df1\u7684\u5c08\u6848\u88e1!")),(0,r.kt)("p",null,"\u200b\t",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u60f3\u8981\u7df4\u7fd2PR\u800c\u81ea\u5df1\u958b\u4e00\u500b\u5e33\u865f\uff0c\u90a3\u9ebc\u8981push\u6642\u4e5f\u8981\u5728terminal\u5207\u63db\u5e33\u865f\uff0c\u53ef\u4ee5\u4e0b\u9019\u500b\u6307\u4ee4\u3002")),(0,r.kt)("p",null,"\u200b\t",(0,r.kt)("inlineCode",{parentName:"p"},'$git config credential.username "new_username"')),(0,r.kt)("h3",{id:"\u64cd\u4f5cgithub\u6700\u5f8c\u7684\u6700\u5f8cgithubflow"},"\u64cd\u4f5cgithub\u6700\u5f8c\u7684\u6700\u5f8c\uff1agithubflow"),(0,r.kt)("p",null,"github\u63d0\u4f9b\u4e86\u4e00\u4efd\u6d41\u7a0b\uff0c\u544a\u8a34\u5927\u5bb6\u5982\u4f55\u4f7f\u7528github\u4f86\u8f14\u52a9\u8edf\u9ad4\u5de5\u7a0b\u7684\u958b\u767c\u3002",(0,r.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/"},"Understanding the GitHub flow \xb7 GitHub Guides")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u62ff\u5230\u5c08\u6848\u5f8c\uff0c\u5148\u5efa\u7acb\u65b0\u7684branch"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5be6\u4f5c\u904e\u7a0b\u4e2d\u6dfb\u52a0commit\uff0c\u7d00\u9304\u5de5\u4f5c\u6b77\u7a0b\u5916\u4e5f\u65b9\u4fbf\u5225\u4eba\u7406\u89e3"),(0,r.kt)("li",{parentName:"ol"},"\u5be6\u4f5c\u904e\u7a0b\u6216\u5b8c\u6210\u6642\uff0c\u958b\u555fpull request\uff0c"),(0,r.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u8005\u3001\u5718\u968a\u6210\u54e1\u53ef\u4ee5\u6aa2\u8996\u66f4\u52d5\u7684\u5730\u65b9\u4ee5\u53ca\u8a0e\u8ad6\uff0c\u78ba\u8a8d\u5b8c\u6210\u5f8cMerge"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u5728github\u5148\u5c07branch\u9032\u884c\u90e8\u5c6c"),(0,r.kt)("li",{parentName:"ol"},"\u78ba\u8a8d\u5b8c\u6210\uff0c\u5c07branch\u5408\u4f75\u5230master branch")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5167\u90e8\u8cc7\u6599\u593e\u5167",src:a(92).Z,width:"1013",height:"740"})),(0,r.kt)("h2",{id:"git-\u72c0\u6cc1\u5287"},"Git \u72c0\u6cc1\u5287"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h5",{parentName:"li",id:"\u6211commit\u4e86\u4f46\u662f\u60f3\u6539commit-message"},"\u6211commit\u4e86\u4f46\u662f\u60f3\u6539commit message"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git commit --amend")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h5",{parentName:"li",id:"\u6211commit\u4e86\u4f46\u662f\u6211\u53c8\u4e0d\u60f3commit\u4e86"},"\u6211commit\u4e86\u4f46\u662f\u6211\u53c8\u4e0d\u60f3commit\u4e86"),(0,r.kt)("p",{parentName:"li"},"(1)\u55ae\u7d14\u53d6\u6d88\u6700\u8fd1\u4e00\u6b21commit\u52d5\u4f5c(--soft\u53ef\u4ee5\u7701\u7565)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git reset HEAD^ --soft")),(0,r.kt)("p",{parentName:"li"},"(2)\u6211\u5168\u90fd\u4e0d\u8981\u4e86\u62c9(\u9664\u4e86commit\u5916\u9084\u6709\u4efb\u4f55\u66f4\u52d5\u904e\u7684\u8cc7\u6599\u7d00\u9304)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git reset HEAD^ --hard")),(0,r.kt)("p",{parentName:"li"},"**HEAD\u4ee3\u8868\u6700\u65b0\u7684\u4e00\u500bcommit\uff1b^\u662f\u524d\u4e00\u500b\u7684\u610f\u601d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h5",{parentName:"li",id:"\u6211\u9084\u6c92commit\u4f46\u662f\u6211\u6539\u7684\u6771\u897f\u4e0d\u60f3\u8981\u4e86"},"\u6211\u9084\u6c92commit\u4f46\u662f\u6211\u6539\u7684\u6771\u897f\u4e0d\u60f3\u8981\u4e86"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git restore < file>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h5",{parentName:"li",id:"\u6211\u60f3\u8981\u9060\u7aef\u7684branch"},"\u6211\u60f3\u8981\u9060\u7aef\u7684branch"),(0,r.kt)("p",{parentName:"li"},"\u65b0\u7248git\uff0c\u672c\u6a5f\u539f\u5148\u53ea\u6709master\u6642\uff0c\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u5c31\u53ef\u4ee5\u62ff\u5230\u9060\u7aef\u7684branch"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$git checkout branch-name")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5ba2\u88fd\u5316\u5404\u968e\u6bb5-hook")),(0,r.kt)("p",null,"hook\u662f\u864e\u514b\u8239\u9577\u7684\u9264\u5b50~~\u5728git\u88e1\u7684\u610f\u601d\u6709\u9ede\u50cf\u662f\u628a\u4e00\u500b\u9264\u5b50\u639b\u5728repository\u4e0a\uff0c\u7576\u6709\u4efb\u4f55\u6771\u897f\u8b8a\u52d5\u6642\uff0c\u9264\u5b50\u5c31\u6703\u52d5\uff0chook\u5c31\u6703\u88ab\u89f8\u767c\uff0c\u4f8b\u5982\u88e1\u9762\u53ef\u4ee5\u91dd\u5c0d\u57f7\u884c\u67d0\u4e9b\u52d5\u4f5c(e.g.commit\u3001push)\u6642\u505a\u4e9b\u6aa2\u67e5(\u9760\u7a0b\u5f0f\u78bc\u53bb\u5224\u65b7\u908f\u8f2f\u7b49\u7b49)\u3002\u800c\u9019\u4e9b\u6a94\u6848\u5c31\u5b58\u653e\u5728.git \u7684 hook\u8cc7\u6599\u593e\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u5176\u4ed6\u8cc7\u6e90"},"\u5176\u4ed6\u8cc7\u6e90"),(0,r.kt)("h5",{id:"githubpages"},"githubpages"),(0,r.kt)("p",null,"\u63d0\u4f9b\u5927\u5bb6\u53ef\u4ee5\u505a\u70ba\u975c\u614b\u7db2\u9801\u4f7f\u7528\uff0c\u53ef\u4ee5\u4f5c\u70ba\u500b\u4eba\u90e8\u843d\u683c\u3002\u53ef\u4ee5\u53c3\u8003\u7db2\u8def\u8cc7\u6e90\u6216\u662f\u6b64\u8ab2\u7a0b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://hahow.in/courses/5de8fec16117240026540b9c/discussions?announcement=60ffdb99331f0d00073bcfef&item=5e021aee1b68d20020e1fd8d"},"\u8ab2\u7a0b\u8a0e\u8ad6 - Github \u514d\u8cbb\u67b6\u7ad9\u8853\uff01\u8f15\u9b06\u6253\u9020\u500b\u4eba\u54c1\u724c - Hahow \u597d\u5b78\u6821")),(0,r.kt)("h5",{id:"github\u8d85\u8a73\u7d30\u6559\u5b78"},"github\u8d85\u8a73\u7d30\u6559\u5b78"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitbook.tw/"},"Git \u6559\u5b78 - Git \u66f8 - \u70ba\u4f60\u81ea\u5df1\u5b78 Git | \u9ad8\u898b\u9f8d (gitbook.tw)")))}u.isMDXComponent=!0},2754:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/branch1-b4a24750a33244f0edb52df32b857e5d.jpg"},5581:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/branch2-5cd05fc515bac8793cf946ed1342fd0e.jpg"},92:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/githubflow-912425d9c709f1224b70f3ac1965851c.png"}}]);