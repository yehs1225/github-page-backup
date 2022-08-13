# Docker[2]基本管理

- 啟動Docker`$sudo systemctl start docker `
- 查看Docker狀態``$sudo systemctl status docker`
- 關閉Docker`$sudo systemstl stop docker`

（`systemctl` 指令用來管理 Systemd 的系統服務。）

## 拒絕存取（permission　denied）

```bash
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.24/images/search?limit=25&term=mysql: dial unix /var/run/docker.sock: connect: permission denied
```

因為目前使用者root不具存取權，因此有兩種解決辦法

1. 每次`$docker`前都加上 `sudo`
2. 將root加進管理群
   1. `$sudo group docker`
   2. `$sudo usermod -aG docker $USER`
   3. `$newgrp docker`

## 映像檔

### 尋找 

`$docker search <keyword>` ，加上 `-s` 或`-start`可過濾評價較高的。

### 下載

`$docker pull <name:tag>` ，`tag`是選擇性的，可選擇倉庫中多版本的其一，若未指定就是最新的。

tag對於管理有極大的幫助!好讓我們區分不同版本。

大部分映像檔都是分層儲存的，例如某一映像檔由4層組成，而其中幾層本地倉庫因為之前下載其他套件已經有儲存了，Docker就可以不用再下載一次。

### 列表

`$docker images`

### 刪除

`$docker rmi image`，若要刪除多個用空格隔開。

若有其他容器依賴該映像檔，會出現錯誤提醒，建議先刪除該容器，再刪映像檔。不建議加`-f`來強制刪除。

### 查看

`$docker inspect image`

### 建置

1. `$docker build` ，從無到有生出來!!

2. `$docker commit`，在現有的映像檔中加入功能。

   1. 啟動一個ubuntu容器

      `$docker run -i -t ubuntu/bin/bash`

      - `-i` 採對話模式
      - `-t` 為目前使用者分配一個虛擬終端
      - `/bin/bash` 要執行的指令

      成功啟動容器後，terminal中會改變

      ```bash
      $User@$User-VirtualBox:~
      root@640a645aac6c:/#
      ```

      - root為目前容器的使用者
      - 640a645aac6c是容器ID
      - #代表superuser

   2. 更新apt

      `$apt-get -y update`

   3. 安裝Apache2

      `$apt-get install -y apache2`

   4. 退出

      `$exit`

   5. 查看目前所有容器狀態

      `$docker ps -a`

      ```bash
      CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS                      PORTS     NAMES
      640a645aac6c   ubuntu        "/bin/bash"   12 minutes ago   Exited (0) 26 seconds ago             jovial_shaw
      5c498a3dd677   hello-world   "/hello"      23 hours ago     Exited (0) 23 hours ago               angry_bardeen
      
      ```

   6. commit 剛才的動作（會存為新的容器）

      `$ docker commit <CONTAINER ID> ` 

      ```bash
      yehs1225@yehs1225-VirtualBox:~$ docker commit 640a645aac6c demo/webserver
      sha256:a83d1ebcfbe03ecb71141cdf59fe00b60ac3fd5663ae89cfd64c9afea6516f92
      ```

   7. 再檢查是否完成

      `$ docker images`

      ```
      yehs1225@yehs1225-VirtualBox:~$ docker images
      REPOSITORY       TAG       IMAGE ID       CREATED         SIZE
      demo/webserver   latest    a83d1ebcfbe0   8 seconds ago   107MB
      ubuntu           latest    2b4cba85892a   13 days ago     72.8MB
      hello-world      latest    feb5d9fea6a5   5 months ago    13.3kB
      ```

### 標籤

目前狀態

```bash
yehs1225@yehs1225-VirtualBox:~$ docker ps -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS                      PORTS     NAMES
640a645aac6c   ubuntu        "/bin/bash"   12 minutes ago   Exited (0) 26 seconds ago             jovial_shaw
5c498a3dd677   hello-world   "/hello"      23 hours ago     Exited (0) 23 hours ago               angry_bardeen
```

- 將來源標示為目標映像檔

  `$docker tag source_image:tag target_image:tag`

  例如 `$docker tag hello-world local/hello-world` 將名為hello-world的映像檔標示為local倉庫內的hello-world

  ```bash
  yehs1225@yehs1225-VirtualBox:~$ docker images
  REPOSITORY          TAG       IMAGE ID       CREATED          SIZE
  demo/webserver      latest    a83d1ebcfbe0   14 minutes ago   107MB
  ubuntu              latest    2b4cba85892a   13 days ago      72.8MB
  hello-world         latest    feb5d9fea6a5   5 months ago     13.3kB
  local/hello-world   latest    feb5d9fea6a5   5 months ago     13.3kB
  ```

- 修改

  `$docker tag hello-world local/hello-world:v2`

  ```bash
  yehs1225@yehs1225-VirtualBox:~$ docker images
  REPOSITORY          TAG       IMAGE ID       CREATED          SIZE
  demo/webserver      latest    a83d1ebcfbe0   14 minutes ago   107MB
  ubuntu              latest    2b4cba85892a   13 days ago      72.8MB
  hello-world         latest    feb5d9fea6a5   5 months ago     13.3kB
  local/hello-world   latest    feb5d9fea6a5   5 months ago     13.3kB
  local/hello-world   v2        feb5d9fea6a5   5 months ago     13.3kB
  ```

- 參考其他映像檔ID

  `$docker tag feb5d9fea6a5 local/hello-world:v3`

  ```bash
  yehs1225@yehs1225-VirtualBox:~$ docker images
  REPOSITORY          TAG       IMAGE ID       CREATED          SIZE
  demo/webserver      latest    a83d1ebcfbe0   17 minutes ago   107MB
  ubuntu              latest    2b4cba85892a   13 days ago      72.8MB
  hello-world         latest    feb5d9fea6a5   5 months ago     13.3kB
  local/hello-world   latest    feb5d9fea6a5   5 months ago     13.3kB
  local/hello-world   v2        feb5d9fea6a5   5 months ago     13.3kB
  local/hello-world   v3        feb5d9fea6a5   5 months ago     13.3kB
  ```

## 容器

### 建置

找不到映像檔的時候會去下載

1. 建立`$docker create [options] Image:tag`

   多數時候options用不到~~

   - --add-host=[] 指定主機到IP位址的對映關係，host:ip
   - --dns=[] 為容器指定域名伺服器
   - -h 為容器指定主機名稱
   - -i 開啟容器的標準輸入模式
   - --name 指定容器名稱
   - -u, --user建立使用者

   ```bash
   yehs1225@yehs1225-VirtualBox:~$ docker create ubuntu
   6bf3e7d30d6996bef958ad17879b729aabc922564dccce31c157cfeeccd98f4d
   ```

   建立後回傳該容器ID

2. 建立並執行`$docker run [options]`

   - -t 互動式容器，會分配一個命令列虛擬終端給使用者互動
   - -d 後臺容器，保持在後台運行

​	以`$exit`退出

### 檢視

1. 運行中的`$docker ps`


2. 全部`$docker ps -a`
   
   ```bash
   yehs1225@yehs1225-VirtualBox:~$ docker ps -a
   CONTAINER ID   IMAGE         COMMAND       CREATED              STATUS                          PORTS     NAMES
   8a607c36e53f   ubuntu        "/bin/bash"   About a minute ago   Exited (0) About a minute ago             demo_ubuntu
   6bf3e7d30d69   ubuntu        "bash"        7 minutes ago        Created                                   distracted_jennings
   640a645aac6c   ubuntu        "/bin/bash"   58 minutes ago       Exited (0) 46 minutes ago                 jovial_shaw
   5c498a3dd677   hello-world   "/hello"      24 hours ago         Exited (0) 24 hours ago                   angry_bardeen
   ```
   
   - ID、NAMES不能重複
   - COMMAND為最後執行的指令
   
3. 包含特定字串的`$docker ps -a -f field=value`

   fields可以是name、image、status等

### 啟動

- 啟動 `$docker start NAME`
- 重新啟動 `$docker restart NAME`

### 停止

-  `$docker stop [CONTAINER ID 或 NAME]` 

​		若無法停止，強制停止 `$docker stop -t 10 container`（10s）

- 立即中止`$docker kill container` 

### 刪除

 `$docker rm [CONTAINER ID 或 NAME]` 



## 網路

網路算是Docker較弱的部分，但是我們要把Docker用得好就需要去了解更多的網路原理!先補充一下OSI模型。OSI模型（Open **S**ystem Interconnection Model）由國際標準化組織提出，**試圖讓世界各地的電腦互連為網路的標準框架**。共分為７層，每一層都定義了不同通訊協定！

### 原理

Docker為了讓容器間及容器和外部網路連接，會在宿主機內安裝 **虛擬橋接器**（一般情況下叫做docker0），在OSI模型中的資料連結層（Data Link Layer）作用。在docker 0 中會開名為 `veth*`的介面，來連接到容器。

可透過`$brctl show`來查看docker的資訊。

```bash
yehs1225@yehs1225-VirtualBox:~$ brctl show
bridge name	bridge id		STP enabled	interfaces
docker0		8000.0242c32a8c88	no	
```

### 模式

在建置容器時加入`--network`來指定。

1. #### bridge（default）

   Docker用Linux中的命名空間（namespace）來隔離資源，PID - 處理程序、Mount - 檔案系統、Network - 網路。一個Network命名空間會獨立一個網路環境，包含網路卡、路由、iptable規則等。

   一個容器通常就會分配到一個namespace，這就是bridge模式。

   > namespace表示一個識別碼（identifier）的可見範圍，一個識別碼可在不同空間的含意是不會互相干擾的。例如兩間公司A、B，都有員工的編號為0012，但是因為兩者就處在不同namespace所以不會有搞混的情形。

   > iptables是運行在使用者空間的應用軟體，通過控制Linux核心netfilter模組，來管理網路封包的處理和轉發。
   >
   
2. #### container

   和指定的容器共用namespace，但是除了網路設定外，其他檔案、處理程序等還是隔離的。

3. #### none

   不會為容器做任何網路設定，也就是說此Docker沒有網卡、IP、路由等，需要自己添加。

4. #### host

   和宿主機用同一個，像是IP、通訊埠。

嘗試建立一host模式的容器 `$docker run -d -ti --network=host ubuntu`

查看容器網路參數`$docker exec CONTAINER_ID ip a show`

### 容器間互連

每個namespace都會連到虛擬橋接器docker0，所以基本上就是相通的。測試方法可先建立兩個容器，再分別查看網路參數`$docker exec CONTAINER_ID ip a show`，得到IP位址，再去兩個容器中試著連到彼此的IP（`$ping IP_ADDRESS`）

### 容器與外部網路

docker0連接到各容器，而docker0又是與主機相通的，所以基本上可以存取到外部網路，但若是要由外往存取容器的話就要：通訊埠對應，也就是設定主機內某個通訊埠對應到容器的網路服務通訊埠，如此一來，使用者存取主機的指定通訊埠就可以了。

`$ docker run --publish [host port]:[container port] IMAGE`

例如要用IMAGE `python-docker`建立容器並向外連，python-docker的port是5000，本機是8000，所以要執行容器時用

`$ docker run --publish 8000:5000 python-docker`
