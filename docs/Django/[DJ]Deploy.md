# Deploy

## Fundamentals of Deployment

許多現代的網頁開發技術都有相似的部署過程，不論是Django、Ruby on Rails 、ExpressJS，都有些設定是類似的。

### Modern Deployment

現在的部署有許多直接可以透過連接你的GitHub帳號存取特定repository來進行。多數時候甚至只需要設定一些選項、輸入環境變數（environment variables）、輸入指令（build commands）等等就可以完成。

### Servers

Server就是世界上的另一台電腦，網路就是讓一堆電腦能夠互相溝通。當你部署了你的web app後，就可以接收處理來自web上的請求。

在很久以前，如果要部署web app需要自己架設一台主機，不僅需要公司自派人員管理，甚至也會因為主機壞掉而造成網頁無法使用。

現在有很多提供雲端服務的公司像是AWS、Digital Ocean、GCP等等。變成只需要付出相對較少的資金成本就可以取得穩定的服務。

### Database

有許多資料庫種類，像是PostgreSQL、MySQL、MongoDB等等，資料庫是部署很重要的一部分，尤其在安全性，設定只能讓特定使用者、應用存取等等。

##### Deploying on a separate server

[When do you move your database to a separate server? | DigitalOcean](https://www.digitalocean.com/community/questions/when-do-you-move-your-database-to-a-separate-server)

較多的分析可參考這篇，然而最主要的優點是 **可提高安全性**，缺點則是 **可能造成延遲**。

### Static and Media Files

- static file : CSS、JavaScript、Images
- media file : 網頁使用者所上傳的文件

這些文件都需要被存取在某些可被web app找到的地方，有一些方法可以達成：

### Django Deployment checklist

[Deployment checklist | Django documentation | Django (djangoproject.com)](https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/)



## Docker （for python）

[Docker Documentation](https://docs.docker.com/language/python/)	Follow 文件設定就好!

### Dockerfile

`Dockerfile`是以文字為腳本（script）來創造容器的映象檔。

其中的設定和其註解

```dockerfile
# syntax=docker/dockerfile:1
#Syntax should be the first line in Dockerfiles.
#"docker/dockerfile:1" points to the latest release of the version 1 syntax

#What base image we would like to use 
FROM python:3.8-slim-buster

#Set default location for all subsequent commands.
WORKDIR /app

#Copy the required packages into our image and it's also named requirements.txt
COPY requirements.txt requirements.txt

#Install the packages
RUN pip3 install -r requirements.txt

#Copy everything in the current directory
#since we are caching, this command must after COPY requirements.txt requirements.txt
COPY . . 

#Run all the arguments in the list
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
```

### Docker compose

用在設定有多個app的container，一般來說我們都會有多個app，像是django+postgreSQL。要使用的話必須設定`docker.compose.yml`，在範例中長這樣：

```
version: '3.8'

services:
 web:
  build:
   context: .
  ports:
  - 8000:5000
  volumes:
  - ./:/app

 mysqldb:
  image: mysql
  ports:
  - 3306:3306
  environment:
  - MYSQL_ROOT_PASSWORD=p@ssw0rd1
  volumes:
  - mysql:/var/lib/mysql
  - mysql_config:/etc/mysql

volumes:
  mysql:
  mysql_config:
```

## Cookiecutter （with Docker）

在Packages And Tools那篇筆記有講到Cookiecutter，而這裡就是再加上Docker設定，可以看到裡面加上了.yml檔案。

## CapRover

CapRover 是被 Docker 包裝起來，提供圖形化介面讓我們可以一鍵設定各種工具的後台。

需要有Domain name、server。

### 設定CapRover

1. Digital Ocean建立新的project
2. 新增Droplet（ Linux-based virtual machines (VMs) that run on top of virtualized hardware. ）
   1. 在market place中可以找到caprover
   2. 設定完成後開啟VScode terminal輸入`$ssh root@IP_Address`（IP_Address 在剛剛建立好的droplet中）

```bash
PS C:\Users\TzuHsuanYeh\caprover-test> ssh root@206.189.37.133
The authenticity of host '206.189.37.133 (206.189.37.133)' can't be established.
ECDSA key fingerprint is SHA256:9obzCFHzIWXf9pgumBXx6ER9iOTLdN0vQNNcrOTJwJQ.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '206.189.37.133' (ECDSA) to the list of known hosts.
root@206.189.37.133's password: 
Welcome to Ubuntu 18.04.6 LTS (GNU/Linux 4.15.0-159-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sat Mar 19 06:11:41 UTC 2022

  System load:                    0.08
  Usage of /:                     22.4% of 24.06GB
  Memory usage:                   29%
  Swap usage:                     0%
  Processes:                      106
  Users logged in:                0
  IP address for eth0:            206.189.37.133
  IP address for eth1:            10.104.0.3
  IP address for docker0:         172.17.0.1
  IP address for docker_gwbridge: 172.18.0.1

25 updates can be applied immediately.
To see these additional updates run: apt list --upgradable


*** System restart required ***
********************************************************************************

Welcome to CapRover, Open Source PaaS for developers!

Follow the guide here to finish the setup https://caprover.com/docs/get-started.html#step-3-install-caprover-cli

Or you can access the dashboard from http://206.189.37.133:3000

The default password is captain42


Please make sure to read the documentation https://CapRover.com
```

之後可以到他提供的

- documents :  https://caprover.com/docs/get-started.html#step-3-install-caprover-cli
- dashboard : `Or you can access the dashboard from http://206.189.37.133:3000`

按照指示，我們可以將設定subdomain（在此設為`*.captain.yehs1225.com`），並將IP為指向此caprover dashboard （206.189.37.133），接者

- 下載`caprover`CLI指令 : `$npm install -g caprover`

- 在CLI設定 : `$caprover serversetup`

  ```bash
  root@caprover-test:~# caprover serversetup
  
  Setup CapRover machine on your server...
  
  ? have you already started CapRover container on your server? Yes
  ? IP address of your server: 206.189.37.133
  ? CapRover server root domain: captain.yehs1225.com
  ? new CapRover password (min 8 characters): [hidden]
  ? enter new CapRover password again: [hidden]
  ? "valid" email address to get certificate and enable HTTPS: yeh.mentos@gmail.com
  ? CapRover machine name, with whom the login credentials are stored locally: caprover-example
  
  CapRover server setup completed: it is available as caprover-example at https://captain.captain.yehs1225.com
  
  For more details and docs see CapRover.com
  ```

​		設定完成後就可以該網址去查看管理你的caprover了!

### 建立App

首先我們在app頁面新增一個叫做django的app，並嘗試將以cookiecutter建立的一個project部署在這裡。

VSCode Termianl

1. `$pip install -r requirements/local.txt` ， `-r` 意思為 Install from the given requirements file.

   會出現安裝`psycopg2`的錯誤，我們在development時可以先將其改成`psycopg2-binary`

2. `$python merge_production_dotenvs_in_dotenv.py`

3. 將`.env`中的key、value貼到caprover app 中的環境變數中

4. 在根目錄建立[Captain Definition File](https://caprover.com/docs/captain-definition-file.html)（是`.json`裡面可以做些設定）

   ```json
    {
     "schemaVersion": 2,
     "dockerfilePath": "./compose/production/django/Dockerfile"
    }
   ```

5. `$caprover deploy`

   在此之前，要先`$git init`。也要記得登入`$caprover login`

6. deploy完成後可以在管理頁面上看到在等待postgres資料庫連線，因為我們還沒建立

7. 在app頁面中新增一個one-click db 選擇postgres

   設定完成後會出現

   ```
   Postgres is deployed and available as srv-captain--postgres-db:5432 to other apps. For example with NodeJS: 'const client = new Client({ user: 'cap_pg_user', host: 'srv-captain--postgres', database: 'cap_pg_db', password: '********', port: 5432})'
   ```

   `srv-captain--postgres-db`是internal name，方便我們讓其他app存取

8. 設定django app的configs中關於postgres的資訊

9. NGINX 502 Error :/        

   [Troubleshooting · CapRover](https://caprover.com/docs/troubleshooting.html)

   1. compose/production/django/start

      加上 `python /app/manage.py migrate`

      修改port`/usr/local/bin/gunicorn config.wsgi --bind 0.0.0.0:80 --chdir=/app`

      （在caprover http settings 可看到Container HTTP Port=80）

   2. compose/production/django/Dockerfile

      將`ENTRYPOINT ["/entrypoint"]`改成`CMD ["/start"]`

   3. DATABASE_URL

      在config/production.py中的`DATABASES["default"] = env.db("DATABASE_URL")`可知DATABASE_URL是必要的參數，本來應該是在.env中新增

      ```bash
      #format
      DATABASE_URL = postgres://$user:$password@$host/$dbname
      ```

      但我們要到caprover dashboard / app configs設定

      ```
      DATABASE_URL = postgres://postgresuser:postgrespassword@srv-captain--postgres-db:5432/postgresdb
      ```

   4. 因為目前沒有用AWS所以會出現錯誤，在這裡為了練習先將compose/production/django/start中的`python /app/manage.py collectstatic --noinput`註解掉

10. 如果要改domain name

    - 在digital ocean（我管理DNS的地方），新增一個type=CNAME、HOSTNAME=@、DIRECT TO=剛剛的網址。
    - 並在caprover http settings將網址導向正確網址（這裡是yehs1225.com）

### 結語

耶!!!CapRover不僅使我們方便部署，設定變數、DB變得很方便（之前單純用Digital Ocean簡直太累人了QQ），更重要的是更便宜了!!!因為依照剛才的模式，我們僅需在Digital Ocean建立一個droplet及一個DB就可以有非常多個App!!!!







