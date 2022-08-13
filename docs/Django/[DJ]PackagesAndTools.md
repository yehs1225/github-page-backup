# Packages And Tools

## Django Cookiecutter

github repo : [cookiecutter/cookiecutter-django: Cookiecutter Django is a framework for jumpstarting production-ready Django projects quickly. (github.com)](https://github.com/cookiecutter/cookiecutter-django)

documents : [Getting Up and Running Locally — Cookiecutter Django 2022.11.2 documentation (cookiecutter-django.readthedocs.io)](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html)

提供常用到的模板設定，加快開發速度!

### 檔案結構

目前暫時使用 *本地* 開發為主。完成後會出現你的專案名稱的資料夾，結構如下：

```bash
├── config
│   ├── __init__.py
│   ├── settings
│   │   ├── base.py
│   │   ├── __init__.py
│   │   ├── local.py
│   │   ├── production.py
│   │   └── test.py
│   ├── urls.py
│   └── wsgi.py
├── CONTRIBUTORS.txt
├── cookiecutter_test
│   ├── conftest.py
│   ├── contrib
│   │   ├── __init__.py
│   │   └── sites
│   │       ├── __init__.py
│   │       └── migrations
│   │           ├── 0001_initial.py
│   │           ├── 0002_alter_domain_unique.py
│   │           ├── 0003_set_site_domain_and_name.py
│   │           ├── 0004_alter_options_ordering_domain.py
│   │           └── __init__.py
│   ├── __init__.py
│   ├── static
│   │   ├── css
│   │   │   └── project.css
│   │   ├── fonts
│   │   ├── images
│   │   │   └── favicons
│   │   │       └── favicon.ico
│   │   ├── js
│   │   │   └── project.js
│   │   └── sass
│   │       ├── custom_bootstrap_vars.scss
│   │       └── project.scss
│   ├── templates
│   │   ├── 403.html
│   │   ├── 404.html
│   │   ├── 500.html
│   │   ├── account
│   │   │   ├── account_inactive.html
│   │   │   ├── base.html
│   │   │   ├── email_confirm.html
│   │   │   ├── email.html
│   │   │   ├── login.html
│   │   │   ├── logout.html
│   │   │   ├── password_change.html
│   │   │   ├── password_reset_done.html
│   │   │   ├── password_reset_from_key_done.html
│   │   │   ├── password_reset_from_key.html
│   │   │   ├── password_reset.html
│   │   │   ├── password_set.html
│   │   │   ├── signup_closed.html
│   │   │   ├── signup.html
│   │   │   ├── verification_sent.html
│   │   │   └── verified_email_required.html
│   │   ├── base.html
│   │   ├── pages
│   │   │   ├── about.html
│   │   │   └── home.html
│   │   └── users
│   │       ├── user_detail.html
│   │       └── user_form.html
│   ├── users
│   │   ├── adapters.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── context_processors.py
│   │   ├── forms.py
│   │   ├── __init__.py
│   │   ├── migrations
│   │   │   ├── 0001_initial.py
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── tests
│   │   │   ├── factories.py
│   │   │   ├── __init__.py
│   │   │   ├── test_admin.py
│   │   │   ├── test_forms.py
│   │   │   ├── test_models.py
│   │   │   ├── test_urls.py
│   │   │   └── test_views.py
│   │   ├── urls.py
│   │   └── views.py
│   └── utils
│       ├── __init__.py
│       └── storages.py
├── docs
│   ├── conf.py
│   ├── howto.rst
│   ├── index.rst
│   ├── __init__.py
│   ├── make.bat
│   ├── Makefile
│   └── users.rst
├── LICENSE
├── locale
│   └── README.rst
├── manage.py
├── pytest.ini
├── README.md
├── requirements
│   ├── base.txt
│   ├── local.txt
│   └── production.txt
├── setup.cfg
└── utility
    ├── install_os_dependencies.sh
    ├── install_python_dependencies.sh
    ├── requirements-bionic.apt
    ├── requirements-bullseye.apt
    ├── requirements-buster.apt
    ├── requirements-focal.apt
    ├── requirements-jessie.apt
    ├── requirements-stretch.apt
    ├── requirements-trusty.apt
    └── requirements-xenial.apt
```

- config / settings folder : 

   像getting started - build CRM 當中所設定的settings.py。不過當中分成四個檔案，base.py是基礎設定，另外三個根據你想在不同模式開發選用，三者都會引用base.py的資料。

- manage.py中的預設開發環境為local

  ```python
  os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")
  ```

- 當中還有一個同專案名稱的檔案（這裡叫做cookie），這一檔案才是主要的project內容，外面是方便開發幫你設定好的東西。裡面的檔案結構跟原始的django project有些微差異，但是其實都在第一點的base.py裡設定好了，例如migrations

  ```python
  MIGRATION_MODULES = {"sites": "cookiecutter_test.contrib.sites.migrations"}
  ```

- 在cookiecutter_test / users / apps.py中可以看到

  ```python
  from django.apps import AppConfig
  from django.utils.translation import gettext_lazy as _
  
  class UsersConfig(AppConfig):
      name = "cookie.users"
      verbose_name = _("Users")
  
      def ready(self):
          try:
              import cookie.users.signals  # noqa F401
          except ImportError:
              pass
  ```

  會對應到base.py

  ```python
  LOCAL_APPS = [
      "cookie.users",
      # Your stuff: custom apps go here
  ]
  ```

### 操作

#### PostgreSQL

首先在postgreSQL操作

1. 切換有權限的使用者 `$sudo su - postgres`
2. 創立資料庫`createdb "DB_NAME";`（cookiecutterdb）
3. `$psql`進入操作介面
4. 新增使用者`postgres=# CREATE USER testuser WITH PASSWORD 'xxxxx';`
5. 將權限開放給testuser `postgres=# GRANT ALL PRIVILEGES ON DATABASE DB_NAME TO testuser;`

#### .env file

加入，DB那段是用來取代預設的DB（可在docs找到）

```
DJANGO_DEBUG=True
DATABASE_URL=postgres://testuser:yehs1225@127.0.0.1:5432/cookiecutterdb
```

## Django Allauth

github repo : [[pennersr/django-allauth](https://github.com/pennersr/django-allauth)](https://github.com/cookiecutter/cookiecutter-django)

documents :[Welcome to django-allauth! ](https://django-allauth.readthedocs.io/en/latest/index.html)

延續上面的cookie專案，

在config/settings/base.py加入必要設定

```python
#config/settings/base.py

AUTHENTICATION_BACKENDS = [
    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
]

INSTALLED_APPS = [
    ...
    # The following apps are required:
    'django.contrib.auth',
    'django.contrib.messages',
    'django.contrib.sites'
]    

THIRD_PARTY_APPS = [
    "crispy_forms",
    "crispy_bootstrap5",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
]
SITE_ID = 1
```

在config/urls.py

```python
#config/urls.py
urlpatterns = [
    ...
    path('accounts/', include('allauth.urls')),
    ...
]
```

其中以cookie這專案來說只需再加入下面這個，其他本來就有了

```python
#config/settings/base.py

AUTHENTICATION_BACKENDS = [
    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
]
```

