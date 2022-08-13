"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},s="Packages And Tools",i={unversionedId:"Django/[DJ]PackagesAndTools",id:"Django/[DJ]PackagesAndTools",title:"Packages And Tools",description:"Django Cookiecutter",source:"@site/docs/Django/[DJ]PackagesAndTools.md",sourceDirName:"Django",slug:"/Django/[DJ]PackagesAndTools",permalink:"/docs/Django/[DJ]PackagesAndTools",draft:!1,editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Django/[DJ]PackagesAndTools.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetStarted - build CRM [2]",permalink:"/docs/Django/[DJ]GetStartedBuildCRM[2]"},next:{title:"Rest Framework",permalink:"/docs/Django/[DJ]RestFramework"}},l={},p=[{value:"Django Cookiecutter",id:"django-cookiecutter",level:2},{value:"\u6a94\u6848\u7d50\u69cb",id:"\u6a94\u6848\u7d50\u69cb",level:3},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:3},{value:"PostgreSQL",id:"postgresql",level:4},{value:".env file",id:"env-file",level:4},{value:"Django Allauth",id:"django-allauth",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packages-and-tools"},"Packages And Tools"),(0,o.kt)("h2",{id:"django-cookiecutter"},"Django Cookiecutter"),(0,o.kt)("p",null,"github repo : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cookiecutter/cookiecutter-django"},"cookiecutter/cookiecutter-django: Cookiecutter Django is a framework for jumpstarting production-ready Django projects quickly. (github.com)")),(0,o.kt)("p",null,"documents : ",(0,o.kt)("a",{parentName:"p",href:"https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html"},"Getting Up and Running Locally \u2014 Cookiecutter Django 2022.11.2 documentation (cookiecutter-django.readthedocs.io)")),(0,o.kt)("p",null,"\u63d0\u4f9b\u5e38\u7528\u5230\u7684\u6a21\u677f\u8a2d\u5b9a\uff0c\u52a0\u5feb\u958b\u767c\u901f\u5ea6!"),(0,o.kt)("h3",{id:"\u6a94\u6848\u7d50\u69cb"},"\u6a94\u6848\u7d50\u69cb"),(0,o.kt)("p",null,"\u76ee\u524d\u66ab\u6642\u4f7f\u7528 ",(0,o.kt)("em",{parentName:"p"},"\u672c\u5730")," \u958b\u767c\u70ba\u4e3b\u3002\u5b8c\u6210\u5f8c\u6703\u51fa\u73fe\u4f60\u7684\u5c08\u6848\u540d\u7a31\u7684\u8cc7\u6599\u593e\uff0c\u7d50\u69cb\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 config\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 settings\n\u2502   \u2502   \u251c\u2500\u2500 base.py\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 local.py\n\u2502   \u2502   \u251c\u2500\u2500 production.py\n\u2502   \u2502   \u2514\u2500\u2500 test.py\n\u2502   \u251c\u2500\u2500 urls.py\n\u2502   \u2514\u2500\u2500 wsgi.py\n\u251c\u2500\u2500 CONTRIBUTORS.txt\n\u251c\u2500\u2500 cookiecutter_test\n\u2502   \u251c\u2500\u2500 conftest.py\n\u2502   \u251c\u2500\u2500 contrib\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u2514\u2500\u2500 sites\n\u2502   \u2502       \u251c\u2500\u2500 __init__.py\n\u2502   \u2502       \u2514\u2500\u2500 migrations\n\u2502   \u2502           \u251c\u2500\u2500 0001_initial.py\n\u2502   \u2502           \u251c\u2500\u2500 0002_alter_domain_unique.py\n\u2502   \u2502           \u251c\u2500\u2500 0003_set_site_domain_and_name.py\n\u2502   \u2502           \u251c\u2500\u2500 0004_alter_options_ordering_domain.py\n\u2502   \u2502           \u2514\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 static\n\u2502   \u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 project.css\n\u2502   \u2502   \u251c\u2500\u2500 fonts\n\u2502   \u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 favicons\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 favicon.ico\n\u2502   \u2502   \u251c\u2500\u2500 js\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 project.js\n\u2502   \u2502   \u2514\u2500\u2500 sass\n\u2502   \u2502       \u251c\u2500\u2500 custom_bootstrap_vars.scss\n\u2502   \u2502       \u2514\u2500\u2500 project.scss\n\u2502   \u251c\u2500\u2500 templates\n\u2502   \u2502   \u251c\u2500\u2500 403.html\n\u2502   \u2502   \u251c\u2500\u2500 404.html\n\u2502   \u2502   \u251c\u2500\u2500 500.html\n\u2502   \u2502   \u251c\u2500\u2500 account\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 account_inactive.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 base.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 email_confirm.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 email.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 login.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 logout.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 password_change.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 password_reset_done.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 password_reset_from_key_done.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 password_reset_from_key.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 password_reset.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 password_set.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 signup_closed.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 signup.html\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 verification_sent.html\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 verified_email_required.html\n\u2502   \u2502   \u251c\u2500\u2500 base.html\n\u2502   \u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 about.html\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 home.html\n\u2502   \u2502   \u2514\u2500\u2500 users\n\u2502   \u2502       \u251c\u2500\u2500 user_detail.html\n\u2502   \u2502       \u2514\u2500\u2500 user_form.html\n\u2502   \u251c\u2500\u2500 users\n\u2502   \u2502   \u251c\u2500\u2500 adapters.py\n\u2502   \u2502   \u251c\u2500\u2500 admin.py\n\u2502   \u2502   \u251c\u2500\u2500 apps.py\n\u2502   \u2502   \u251c\u2500\u2500 context_processors.py\n\u2502   \u2502   \u251c\u2500\u2500 forms.py\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 migrations\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 0001_initial.py\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 models.py\n\u2502   \u2502   \u251c\u2500\u2500 tests\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 factories.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 test_admin.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 test_forms.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 test_models.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 test_urls.py\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 test_views.py\n\u2502   \u2502   \u251c\u2500\u2500 urls.py\n\u2502   \u2502   \u2514\u2500\u2500 views.py\n\u2502   \u2514\u2500\u2500 utils\n\u2502       \u251c\u2500\u2500 __init__.py\n\u2502       \u2514\u2500\u2500 storages.py\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 conf.py\n\u2502   \u251c\u2500\u2500 howto.rst\n\u2502   \u251c\u2500\u2500 index.rst\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 make.bat\n\u2502   \u251c\u2500\u2500 Makefile\n\u2502   \u2514\u2500\u2500 users.rst\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 locale\n\u2502   \u2514\u2500\u2500 README.rst\n\u251c\u2500\u2500 manage.py\n\u251c\u2500\u2500 pytest.ini\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 requirements\n\u2502   \u251c\u2500\u2500 base.txt\n\u2502   \u251c\u2500\u2500 local.txt\n\u2502   \u2514\u2500\u2500 production.txt\n\u251c\u2500\u2500 setup.cfg\n\u2514\u2500\u2500 utility\n    \u251c\u2500\u2500 install_os_dependencies.sh\n    \u251c\u2500\u2500 install_python_dependencies.sh\n    \u251c\u2500\u2500 requirements-bionic.apt\n    \u251c\u2500\u2500 requirements-bullseye.apt\n    \u251c\u2500\u2500 requirements-buster.apt\n    \u251c\u2500\u2500 requirements-focal.apt\n    \u251c\u2500\u2500 requirements-jessie.apt\n    \u251c\u2500\u2500 requirements-stretch.apt\n    \u251c\u2500\u2500 requirements-trusty.apt\n    \u2514\u2500\u2500 requirements-xenial.apt\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"config / settings folder : "),(0,o.kt)("p",{parentName:"li"}," \u50cfgetting started - build CRM \u7576\u4e2d\u6240\u8a2d\u5b9a\u7684settings.py\u3002\u4e0d\u904e\u7576\u4e2d\u5206\u6210\u56db\u500b\u6a94\u6848\uff0cbase.py\u662f\u57fa\u790e\u8a2d\u5b9a\uff0c\u53e6\u5916\u4e09\u500b\u6839\u64da\u4f60\u60f3\u5728\u4e0d\u540c\u6a21\u5f0f\u958b\u767c\u9078\u7528\uff0c\u4e09\u8005\u90fd\u6703\u5f15\u7528base.py\u7684\u8cc7\u6599\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"manage.py\u4e2d\u7684\u9810\u8a2d\u958b\u767c\u74b0\u5883\u70balocal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7576\u4e2d\u9084\u6709\u4e00\u500b\u540c\u5c08\u6848\u540d\u7a31\u7684\u6a94\u6848\uff08\u9019\u88e1\u53eb\u505acookie\uff09\uff0c\u9019\u4e00\u6a94\u6848\u624d\u662f\u4e3b\u8981\u7684project\u5167\u5bb9\uff0c\u5916\u9762\u662f\u65b9\u4fbf\u958b\u767c\u5e6b\u4f60\u8a2d\u5b9a\u597d\u7684\u6771\u897f\u3002\u88e1\u9762\u7684\u6a94\u6848\u7d50\u69cb\u8ddf\u539f\u59cb\u7684django project\u6709\u4e9b\u5fae\u5dee\u7570\uff0c\u4f46\u662f\u5176\u5be6\u90fd\u5728\u7b2c\u4e00\u9ede\u7684base.py\u88e1\u8a2d\u5b9a\u597d\u4e86\uff0c\u4f8b\u5982migrations"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'MIGRATION_MODULES = {"sites": "cookiecutter_test.contrib.sites.migrations"}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728cookiecutter_test / users / apps.py\u4e2d\u53ef\u4ee5\u770b\u5230"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from django.apps import AppConfig\nfrom django.utils.translation import gettext_lazy as _\n\nclass UsersConfig(AppConfig):\n    name = "cookie.users"\n    verbose_name = _("Users")\n\n    def ready(self):\n        try:\n            import cookie.users.signals  # noqa F401\n        except ImportError:\n            pass\n')),(0,o.kt)("p",{parentName:"li"},"\u6703\u5c0d\u61c9\u5230base.py"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'LOCAL_APPS = [\n    "cookie.users",\n    # Your stuff: custom apps go here\n]\n')))),(0,o.kt)("h3",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,o.kt)("h4",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"\u9996\u5148\u5728postgreSQL\u64cd\u4f5c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5207\u63db\u6709\u6b0a\u9650\u7684\u4f7f\u7528\u8005 ",(0,o.kt)("inlineCode",{parentName:"li"},"$sudo su - postgres")),(0,o.kt)("li",{parentName:"ol"},"\u5275\u7acb\u8cc7\u6599\u5eab",(0,o.kt)("inlineCode",{parentName:"li"},'createdb "DB_NAME";'),"\uff08cookiecutterdb\uff09"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"$psql"),"\u9032\u5165\u64cd\u4f5c\u4ecb\u9762"),(0,o.kt)("li",{parentName:"ol"},"\u65b0\u589e\u4f7f\u7528\u8005",(0,o.kt)("inlineCode",{parentName:"li"},"postgres=# CREATE USER testuser WITH PASSWORD 'xxxxx';")),(0,o.kt)("li",{parentName:"ol"},"\u5c07\u6b0a\u9650\u958b\u653e\u7d66testuser ",(0,o.kt)("inlineCode",{parentName:"li"},"postgres=# GRANT ALL PRIVILEGES ON DATABASE DB_NAME TO testuser;"))),(0,o.kt)("h4",{id:"env-file"},".env file"),(0,o.kt)("p",null,"\u52a0\u5165\uff0cDB\u90a3\u6bb5\u662f\u7528\u4f86\u53d6\u4ee3\u9810\u8a2d\u7684DB\uff08\u53ef\u5728docs\u627e\u5230\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DJANGO_DEBUG=True\nDATABASE_URL=postgres://testuser:yehs1225@127.0.0.1:5432/cookiecutterdb\n")),(0,o.kt)("h2",{id:"django-allauth"},"Django Allauth"),(0,o.kt)("p",null,"github repo : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cookiecutter/cookiecutter-django"},"[pennersr/django-allauth](https://github.com/pennersr/django-allauth)")),(0,o.kt)("p",null,"documents :",(0,o.kt)("a",{parentName:"p",href:"https://django-allauth.readthedocs.io/en/latest/index.html"},"Welcome to django-allauth! ")),(0,o.kt)("p",null,"\u5ef6\u7e8c\u4e0a\u9762\u7684cookie\u5c08\u6848\uff0c"),(0,o.kt)("p",null,"\u5728config/settings/base.py\u52a0\u5165\u5fc5\u8981\u8a2d\u5b9a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'#config/settings/base.py\n\nAUTHENTICATION_BACKENDS = [\n    # `allauth` specific authentication methods, such as login by e-mail\n    \'allauth.account.auth_backends.AuthenticationBackend\',\n]\n\nINSTALLED_APPS = [\n    ...\n    # The following apps are required:\n    \'django.contrib.auth\',\n    \'django.contrib.messages\',\n    \'django.contrib.sites\'\n]    \n\nTHIRD_PARTY_APPS = [\n    "crispy_forms",\n    "crispy_bootstrap5",\n    "allauth",\n    "allauth.account",\n    "allauth.socialaccount",\n]\nSITE_ID = 1\n')),(0,o.kt)("p",null,"\u5728config/urls.py"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#config/urls.py\nurlpatterns = [\n    ...\n    path('accounts/', include('allauth.urls')),\n    ...\n]\n")),(0,o.kt)("p",null,"\u5176\u4e2d\u4ee5cookie\u9019\u5c08\u6848\u4f86\u8aaa\u53ea\u9700\u518d\u52a0\u5165\u4e0b\u9762\u9019\u500b\uff0c\u5176\u4ed6\u672c\u4f86\u5c31\u6709\u4e86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#config/settings/base.py\n\nAUTHENTICATION_BACKENDS = [\n    # `allauth` specific authentication methods, such as login by e-mail\n    'allauth.account.auth_backends.AuthenticationBackend',\n]\n")))}u.isMDXComponent=!0}}]);