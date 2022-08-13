"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},p="Deploy",l={unversionedId:"Django/[DJ]Deploy",id:"Django/[DJ]Deploy",title:"Deploy",description:"Fundamentals of Deployment",source:"@site/docs/Django/[DJ]Deploy.md",sourceDirName:"Django",slug:"/Django/[DJ]Deploy",permalink:"/docs/Django/[DJ]Deploy",draft:!1,editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Django/[DJ]Deploy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tree",permalink:"/docs/DataStructures/Tree"},next:{title:"GetStarted-documents",permalink:"/docs/Django/[DJ]GetStarted-documents"}},i={},s=[{value:"Fundamentals of Deployment",id:"fundamentals-of-deployment",level:2},{value:"Modern Deployment",id:"modern-deployment",level:3},{value:"Servers",id:"servers",level:3},{value:"Database",id:"database",level:3},{value:"Deploying on a separate server",id:"deploying-on-a-separate-server",level:5},{value:"Static and Media Files",id:"static-and-media-files",level:3},{value:"Django Deployment checklist",id:"django-deployment-checklist",level:3},{value:"Docker \uff08for python\uff09",id:"docker-for-python",level:2},{value:"Dockerfile",id:"dockerfile",level:3},{value:"Docker compose",id:"docker-compose",level:3},{value:"Cookiecutter \uff08with Docker\uff09",id:"cookiecutter-with-docker",level:2},{value:"CapRover",id:"caprover",level:2},{value:"\u8a2d\u5b9aCapRover",id:"\u8a2d\u5b9acaprover",level:3},{value:"\u5efa\u7acbApp",id:"\u5efa\u7acbapp",level:3},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy"},"Deploy"),(0,r.kt)("h2",{id:"fundamentals-of-deployment"},"Fundamentals of Deployment"),(0,r.kt)("p",null,"\u8a31\u591a\u73fe\u4ee3\u7684\u7db2\u9801\u958b\u767c\u6280\u8853\u90fd\u6709\u76f8\u4f3c\u7684\u90e8\u7f72\u904e\u7a0b\uff0c\u4e0d\u8ad6\u662fDjango\u3001Ruby on Rails \u3001ExpressJS\uff0c\u90fd\u6709\u4e9b\u8a2d\u5b9a\u662f\u985e\u4f3c\u7684\u3002"),(0,r.kt)("h3",{id:"modern-deployment"},"Modern Deployment"),(0,r.kt)("p",null,"\u73fe\u5728\u7684\u90e8\u7f72\u6709\u8a31\u591a\u76f4\u63a5\u53ef\u4ee5\u900f\u904e\u9023\u63a5\u4f60\u7684GitHub\u5e33\u865f\u5b58\u53d6\u7279\u5b9arepository\u4f86\u9032\u884c\u3002\u591a\u6578\u6642\u5019\u751a\u81f3\u53ea\u9700\u8981\u8a2d\u5b9a\u4e00\u4e9b\u9078\u9805\u3001\u8f38\u5165\u74b0\u5883\u8b8a\u6578\uff08environment variables\uff09\u3001\u8f38\u5165\u6307\u4ee4\uff08build commands\uff09\u7b49\u7b49\u5c31\u53ef\u4ee5\u5b8c\u6210\u3002"),(0,r.kt)("h3",{id:"servers"},"Servers"),(0,r.kt)("p",null,"Server\u5c31\u662f\u4e16\u754c\u4e0a\u7684\u53e6\u4e00\u53f0\u96fb\u8166\uff0c\u7db2\u8def\u5c31\u662f\u8b93\u4e00\u5806\u96fb\u8166\u80fd\u5920\u4e92\u76f8\u6e9d\u901a\u3002\u7576\u4f60\u90e8\u7f72\u4e86\u4f60\u7684web app\u5f8c\uff0c\u5c31\u53ef\u4ee5\u63a5\u6536\u8655\u7406\u4f86\u81eaweb\u4e0a\u7684\u8acb\u6c42\u3002"),(0,r.kt)("p",null,"\u5728\u5f88\u4e45\u4ee5\u524d\uff0c\u5982\u679c\u8981\u90e8\u7f72web app\u9700\u8981\u81ea\u5df1\u67b6\u8a2d\u4e00\u53f0\u4e3b\u6a5f\uff0c\u4e0d\u50c5\u9700\u8981\u516c\u53f8\u81ea\u6d3e\u4eba\u54e1\u7ba1\u7406\uff0c\u751a\u81f3\u4e5f\u6703\u56e0\u70ba\u4e3b\u6a5f\u58de\u6389\u800c\u9020\u6210\u7db2\u9801\u7121\u6cd5\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u6709\u5f88\u591a\u63d0\u4f9b\u96f2\u7aef\u670d\u52d9\u7684\u516c\u53f8\u50cf\u662fAWS\u3001Digital Ocean\u3001GCP\u7b49\u7b49\u3002\u8b8a\u6210\u53ea\u9700\u8981\u4ed8\u51fa\u76f8\u5c0d\u8f03\u5c11\u7684\u8cc7\u91d1\u6210\u672c\u5c31\u53ef\u4ee5\u53d6\u5f97\u7a69\u5b9a\u7684\u670d\u52d9\u3002"),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"\u6709\u8a31\u591a\u8cc7\u6599\u5eab\u7a2e\u985e\uff0c\u50cf\u662fPostgreSQL\u3001MySQL\u3001MongoDB\u7b49\u7b49\uff0c\u8cc7\u6599\u5eab\u662f\u90e8\u7f72\u5f88\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5c24\u5176\u5728\u5b89\u5168\u6027\uff0c\u8a2d\u5b9a\u53ea\u80fd\u8b93\u7279\u5b9a\u4f7f\u7528\u8005\u3001\u61c9\u7528\u5b58\u53d6\u7b49\u7b49\u3002"),(0,r.kt)("h5",{id:"deploying-on-a-separate-server"},"Deploying on a separate server"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/questions/when-do-you-move-your-database-to-a-separate-server"},"When do you move your database to a separate server? | DigitalOcean")),(0,r.kt)("p",null,"\u8f03\u591a\u7684\u5206\u6790\u53ef\u53c3\u8003\u9019\u7bc7\uff0c\u7136\u800c\u6700\u4e3b\u8981\u7684\u512a\u9ede\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u63d0\u9ad8\u5b89\u5168\u6027"),"\uff0c\u7f3a\u9ede\u5247\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u9020\u6210\u5ef6\u9072"),"\u3002"),(0,r.kt)("h3",{id:"static-and-media-files"},"Static and Media Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"static file : CSS\u3001JavaScript\u3001Images"),(0,r.kt)("li",{parentName:"ul"},"media file : \u7db2\u9801\u4f7f\u7528\u8005\u6240\u4e0a\u50b3\u7684\u6587\u4ef6")),(0,r.kt)("p",null,"\u9019\u4e9b\u6587\u4ef6\u90fd\u9700\u8981\u88ab\u5b58\u53d6\u5728\u67d0\u4e9b\u53ef\u88abweb app\u627e\u5230\u7684\u5730\u65b9\uff0c\u6709\u4e00\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u9054\u6210\uff1a"),(0,r.kt)("h3",{id:"django-deployment-checklist"},"Django Deployment checklist"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/"},"Deployment checklist | Django documentation | Django (djangoproject.com)")),(0,r.kt)("h2",{id:"docker-for-python"},"Docker \uff08for python\uff09"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/language/python/"},"Docker Documentation"),"\tFollow \u6587\u4ef6\u8a2d\u5b9a\u5c31\u597d!"),(0,r.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\u662f\u4ee5\u6587\u5b57\u70ba\u8173\u672c\uff08script\uff09\u4f86\u5275\u9020\u5bb9\u5668\u7684\u6620\u8c61\u6a94\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\u7684\u8a2d\u5b9a\u548c\u5176\u8a3b\u89e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# syntax=docker/dockerfile:1\n#Syntax should be the first line in Dockerfiles.\n#"docker/dockerfile:1" points to the latest release of the version 1 syntax\n\n#What base image we would like to use \nFROM python:3.8-slim-buster\n\n#Set default location for all subsequent commands.\nWORKDIR /app\n\n#Copy the required packages into our image and it\'s also named requirements.txt\nCOPY requirements.txt requirements.txt\n\n#Install the packages\nRUN pip3 install -r requirements.txt\n\n#Copy everything in the current directory\n#since we are caching, this command must after COPY requirements.txt requirements.txt\nCOPY . . \n\n#Run all the arguments in the list\nCMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]\n')),(0,r.kt)("h3",{id:"docker-compose"},"Docker compose"),(0,r.kt)("p",null,"\u7528\u5728\u8a2d\u5b9a\u6709\u591a\u500bapp\u7684container\uff0c\u4e00\u822c\u4f86\u8aaa\u6211\u5011\u90fd\u6703\u6709\u591a\u500bapp\uff0c\u50cf\u662fdjango+postgreSQL\u3002\u8981\u4f7f\u7528\u7684\u8a71\u5fc5\u9808\u8a2d\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"docker.compose.yml"),"\uff0c\u5728\u7bc4\u4f8b\u4e2d\u9577\u9019\u6a23\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version: '3.8'\n\nservices:\n web:\n  build:\n   context: .\n  ports:\n  - 8000:5000\n  volumes:\n  - ./:/app\n\n mysqldb:\n  image: mysql\n  ports:\n  - 3306:3306\n  environment:\n  - MYSQL_ROOT_PASSWORD=p@ssw0rd1\n  volumes:\n  - mysql:/var/lib/mysql\n  - mysql_config:/etc/mysql\n\nvolumes:\n  mysql:\n  mysql_config:\n")),(0,r.kt)("h2",{id:"cookiecutter-with-docker"},"Cookiecutter \uff08with Docker\uff09"),(0,r.kt)("p",null,"\u5728Packages And Tools\u90a3\u7bc7\u7b46\u8a18\u6709\u8b1b\u5230Cookiecutter\uff0c\u800c\u9019\u88e1\u5c31\u662f\u518d\u52a0\u4e0aDocker\u8a2d\u5b9a\uff0c\u53ef\u4ee5\u770b\u5230\u88e1\u9762\u52a0\u4e0a\u4e86.yml\u6a94\u6848\u3002"),(0,r.kt)("h2",{id:"caprover"},"CapRover"),(0,r.kt)("p",null,"CapRover \u662f\u88ab Docker \u5305\u88dd\u8d77\u4f86\uff0c\u63d0\u4f9b\u5716\u5f62\u5316\u4ecb\u9762\u8b93\u6211\u5011\u53ef\u4ee5\u4e00\u9375\u8a2d\u5b9a\u5404\u7a2e\u5de5\u5177\u7684\u5f8c\u53f0\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6709Domain name\u3001server\u3002"),(0,r.kt)("h3",{id:"\u8a2d\u5b9acaprover"},"\u8a2d\u5b9aCapRover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Digital Ocean\u5efa\u7acb\u65b0\u7684project"),(0,r.kt)("li",{parentName:"ol"},"\u65b0\u589eDroplet\uff08 Linux-based virtual machines (VMs) that run on top of virtualized hardware. \uff09",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5728market place\u4e2d\u53ef\u4ee5\u627e\u5230caprover"),(0,r.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u5b8c\u6210\u5f8c\u958b\u555fVScode terminal\u8f38\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"$ssh root@IP_Address"),"\uff08IP_Address \u5728\u525b\u525b\u5efa\u7acb\u597d\u7684droplet\u4e2d\uff09")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PS C:\\Users\\TzuHsuanYeh\\caprover-test> ssh root@206.189.37.133\nThe authenticity of host '206.189.37.133 (206.189.37.133)' can't be established.\nECDSA key fingerprint is SHA256:9obzCFHzIWXf9pgumBXx6ER9iOTLdN0vQNNcrOTJwJQ.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '206.189.37.133' (ECDSA) to the list of known hosts.\nroot@206.189.37.133's password: \nWelcome to Ubuntu 18.04.6 LTS (GNU/Linux 4.15.0-159-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Sat Mar 19 06:11:41 UTC 2022\n\n  System load:                    0.08\n  Usage of /:                     22.4% of 24.06GB\n  Memory usage:                   29%\n  Swap usage:                     0%\n  Processes:                      106\n  Users logged in:                0\n  IP address for eth0:            206.189.37.133\n  IP address for eth1:            10.104.0.3\n  IP address for docker0:         172.17.0.1\n  IP address for docker_gwbridge: 172.18.0.1\n\n25 updates can be applied immediately.\nTo see these additional updates run: apt list --upgradable\n\n\n*** System restart required ***\n********************************************************************************\n\nWelcome to CapRover, Open Source PaaS for developers!\n\nFollow the guide here to finish the setup https://caprover.com/docs/get-started.html#step-3-install-caprover-cli\n\nOr you can access the dashboard from http://206.189.37.133:3000\n\nThe default password is captain42\n\n\nPlease make sure to read the documentation https://CapRover.com\n")),(0,r.kt)("p",null,"\u4e4b\u5f8c\u53ef\u4ee5\u5230\u4ed6\u63d0\u4f9b\u7684"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"documents :  ",(0,r.kt)("a",{parentName:"li",href:"https://caprover.com/docs/get-started.html#step-3-install-caprover-cli"},"https://caprover.com/docs/get-started.html#step-3-install-caprover-cli")),(0,r.kt)("li",{parentName:"ul"},"dashboard : ",(0,r.kt)("inlineCode",{parentName:"li"},"Or you can access the dashboard from http://206.189.37.133:3000"))),(0,r.kt)("p",null,"\u6309\u7167\u6307\u793a\uff0c\u6211\u5011\u53ef\u4ee5\u5c07\u8a2d\u5b9asubdomain\uff08\u5728\u6b64\u8a2d\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"*.captain.yehs1225.com"),"\uff09\uff0c\u4e26\u5c07IP\u70ba\u6307\u5411\u6b64caprover dashboard \uff08206.189.37.133\uff09\uff0c\u63a5\u8005"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f09",(0,r.kt)("inlineCode",{parentName:"p"},"caprover"),"CLI\u6307\u4ee4 : ",(0,r.kt)("inlineCode",{parentName:"p"},"$npm install -g caprover"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728CLI\u8a2d\u5b9a : ",(0,r.kt)("inlineCode",{parentName:"p"},"$caprover serversetup")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'root@caprover-test:~# caprover serversetup\n\nSetup CapRover machine on your server...\n\n? have you already started CapRover container on your server? Yes\n? IP address of your server: 206.189.37.133\n? CapRover server root domain: captain.yehs1225.com\n? new CapRover password (min 8 characters): [hidden]\n? enter new CapRover password again: [hidden]\n? "valid" email address to get certificate and enable HTTPS: yeh.mentos@gmail.com\n? CapRover machine name, with whom the login credentials are stored locally: caprover-example\n\nCapRover server setup completed: it is available as caprover-example at https://captain.captain.yehs1225.com\n\nFor more details and docs see CapRover.com\n')))),(0,r.kt)("p",null,"\u200b\t\t\u8a2d\u5b9a\u5b8c\u6210\u5f8c\u5c31\u53ef\u4ee5\u8a72\u7db2\u5740\u53bb\u67e5\u770b\u7ba1\u7406\u4f60\u7684caprover\u4e86!"),(0,r.kt)("h3",{id:"\u5efa\u7acbapp"},"\u5efa\u7acbApp"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u5011\u5728app\u9801\u9762\u65b0\u589e\u4e00\u500b\u53eb\u505adjango\u7684app\uff0c\u4e26\u5617\u8a66\u5c07\u4ee5cookiecutter\u5efa\u7acb\u7684\u4e00\u500bproject\u90e8\u7f72\u5728\u9019\u88e1\u3002"),(0,r.kt)("p",null,"VSCode Termianl"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$pip install -r requirements/local.txt")," \uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"-r")," \u610f\u601d\u70ba Install from the given requirements file."),(0,r.kt)("p",{parentName:"li"},"\u6703\u51fa\u73fe\u5b89\u88dd",(0,r.kt)("inlineCode",{parentName:"p"},"psycopg2"),"\u7684\u932f\u8aa4\uff0c\u6211\u5011\u5728development\u6642\u53ef\u4ee5\u5148\u5c07\u5176\u6539\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"psycopg2-binary"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$python merge_production_dotenvs_in_dotenv.py"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"\u4e2d\u7684key\u3001value\u8cbc\u5230caprover app \u4e2d\u7684\u74b0\u5883\u8b8a\u6578\u4e2d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6839\u76ee\u9304\u5efa\u7acb",(0,r.kt)("a",{parentName:"p",href:"https://caprover.com/docs/captain-definition-file.html"},"Captain Definition File"),"\uff08\u662f",(0,r.kt)("inlineCode",{parentName:"p"},".json"),"\u88e1\u9762\u53ef\u4ee5\u505a\u4e9b\u8a2d\u5b9a\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},' {\n  "schemaVersion": 2,\n  "dockerfilePath": "./compose/production/django/Dockerfile"\n }\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$caprover deploy")),(0,r.kt)("p",{parentName:"li"},"\u5728\u6b64\u4e4b\u524d\uff0c\u8981\u5148",(0,r.kt)("inlineCode",{parentName:"p"},"$git init"),"\u3002\u4e5f\u8981\u8a18\u5f97\u767b\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"$caprover login"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"deploy\u5b8c\u6210\u5f8c\u53ef\u4ee5\u5728\u7ba1\u7406\u9801\u9762\u4e0a\u770b\u5230\u5728\u7b49\u5f85postgres\u8cc7\u6599\u5eab\u9023\u7dda\uff0c\u56e0\u70ba\u6211\u5011\u9084\u6c92\u5efa\u7acb")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728app\u9801\u9762\u4e2d\u65b0\u589e\u4e00\u500bone-click db \u9078\u64c7postgres"),(0,r.kt)("p",{parentName:"li"},"\u8a2d\u5b9a\u5b8c\u6210\u5f8c\u6703\u51fa\u73fe"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Postgres is deployed and available as srv-captain--postgres-db:5432 to other apps. For example with NodeJS: 'const client = new Client({ user: 'cap_pg_user', host: 'srv-captain--postgres', database: 'cap_pg_db', password: '********', port: 5432})'\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"srv-captain--postgres-db"),"\u662finternal name\uff0c\u65b9\u4fbf\u6211\u5011\u8b93\u5176\u4ed6app\u5b58\u53d6")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8a2d\u5b9adjango app\u7684configs\u4e2d\u95dc\u65bcpostgres\u7684\u8cc7\u8a0a")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"NGINX 502 Error :/        "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://caprover.com/docs/troubleshooting.html"},"Troubleshooting \xb7 CapRover")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"compose/production/django/start"),(0,r.kt)("p",{parentName:"li"},"\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"python /app/manage.py migrate")),(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539port",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/gunicorn config.wsgi --bind 0.0.0.0:80 --chdir=/app")),(0,r.kt)("p",{parentName:"li"},"\uff08\u5728caprover http settings \u53ef\u770b\u5230Container HTTP Port=80\uff09")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"compose/production/django/Dockerfile"),(0,r.kt)("p",{parentName:"li"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},'ENTRYPOINT ["/entrypoint"]'),"\u6539\u6210",(0,r.kt)("inlineCode",{parentName:"p"},'CMD ["/start"]'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"DATABASE_URL"),(0,r.kt)("p",{parentName:"li"},"\u5728config/production.py\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},'DATABASES["default"] = env.db("DATABASE_URL")'),"\u53ef\u77e5DATABASE_URL\u662f\u5fc5\u8981\u7684\u53c3\u6578\uff0c\u672c\u4f86\u61c9\u8a72\u662f\u5728.env\u4e2d\u65b0\u589e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#format\nDATABASE_URL = postgres://$user:$password@$host/$dbname\n")),(0,r.kt)("p",{parentName:"li"},"\u4f46\u6211\u5011\u8981\u5230caprover dashboard / app configs\u8a2d\u5b9a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"DATABASE_URL = postgres://postgresuser:postgrespassword@srv-captain--postgres-db:5432/postgresdb\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u56e0\u70ba\u76ee\u524d\u6c92\u6709\u7528AWS\u6240\u4ee5\u6703\u51fa\u73fe\u932f\u8aa4\uff0c\u5728\u9019\u88e1\u70ba\u4e86\u7df4\u7fd2\u5148\u5c07compose/production/django/start\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"python /app/manage.py collectstatic --noinput"),"\u8a3b\u89e3\u6389")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u8981\u6539domain name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728digital ocean\uff08\u6211\u7ba1\u7406DNS\u7684\u5730\u65b9\uff09\uff0c\u65b0\u589e\u4e00\u500btype=CNAME\u3001HOSTNAME=@\u3001DIRECT TO=\u525b\u525b\u7684\u7db2\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e26\u5728caprover http settings\u5c07\u7db2\u5740\u5c0e\u5411\u6b63\u78ba\u7db2\u5740\uff08\u9019\u88e1\u662fyehs1225.com\uff09")))),(0,r.kt)("h3",{id:"\u7d50\u8a9e"},"\u7d50\u8a9e"),(0,r.kt)("p",null,"\u8036!!!CapRover\u4e0d\u50c5\u4f7f\u6211\u5011\u65b9\u4fbf\u90e8\u7f72\uff0c\u8a2d\u5b9a\u8b8a\u6578\u3001DB\u8b8a\u5f97\u5f88\u65b9\u4fbf\uff08\u4e4b\u524d\u55ae\u7d14\u7528Digital Ocean\u7c21\u76f4\u592a\u7d2f\u4eba\u4e86QQ\uff09\uff0c\u66f4\u91cd\u8981\u7684\u662f\u66f4\u4fbf\u5b9c\u4e86!!!\u56e0\u70ba\u4f9d\u7167\u525b\u624d\u7684\u6a21\u5f0f\uff0c\u6211\u5011\u50c5\u9700\u5728Digital Ocean\u5efa\u7acb\u4e00\u500bdroplet\u53ca\u4e00\u500bDB\u5c31\u53ef\u4ee5\u6709\u975e\u5e38\u591a\u500bApp!!!!"))}d.isMDXComponent=!0}}]);