# Docker[3]K8s

Kubernetes因為是很長的單字加上有點難唸？所以大家簡稱為K8s。

## K8s介紹

### 歷史

一套自動化容器運行維護的開放原始碼平台，運行維護包含 部署、排程、節點叢集間的擴充。K8s是容器技術發展下的產物，例如現在多數公司用來管理Docker容器。K8s是由Google所提供的系統並開放原始碼，藉由其管理數以億計的容器經驗所撰寫的系統。也因為雲端技術的發展，多數軟體需要藉由網路與他人共享，因此因為容器解決了環境設定問題，而被更多人所採用，一個企業平均需要用到的容器數日益增加，因此K8s被多數企業給採用。

### 為什麼使用？

- 快速精準地部署、即時伸縮應用程式
- 限制硬體所需資源
- 可移動、擴充、自動部署修復複製等
- 滿足一系列產品內程式的執行需求

### 重要元素

1. Pod

   - k8s中的最小單位，可包含一個或多個container(通常是一個，稱為pause container)。是container的抽象化，用k8s對Pod進行操作，而非直接對container動作。

   - 每一個Pod有自己的虛擬IP位置，Pod互相可用這樣內部的IP聯絡（endpoint的概念），但缺點是Pod掛掉時IP會一起消失，重建也會指派新的，造成應用程式內部溝通失敗。

   - Service用來改善IP問題，是永久的IP位置，且在Pod掛上的service和Pod本身的life cycle不相關。

     **當使用Deployment複製多個pods時，Service同時也是load balancer**

   - Ingress處理對外網路連到內部各網之間的關係。 

   - app要與DB相連的資訊通常都是建立在app之中，這時候若需要改動一些DB相關東西時，還需要到app內部更改設定，不僅麻煩也容易出錯，因此**ConfigMap**就可用來處理這類的configuration，也就是把設定搬到app和DB之外，利用K8s中各pods的endpoint（service）相連。

     **注意不可以將機密資料放在這裡！！！**

   - Secrets功能就如同ConfigMap，但是可用來存放機密資料。

2. Volumes

   如果用來存Data的pod被重啟，那麼這些資料就會不見，因此會用到Volumes來存取，volumes會和物理層面的儲存相連，例如本地的硬碟空間、遠端儲存（和K8s本身無關）。

   **注意K8s本身不管資料儲存的一致性，需要自己將這一塊儲存設定好**

3. Deployment & StatefulSet

   單一個app若壞掉的話，會造成服務中斷，是不可以的！因此會有複製一個或多個app的想法，K8s當中可以用Deployment來辦到，增加/縮小 規模，而這樣複製pods的行為不可以用在DB上，因為會造成各DB資料的不一致，K8s以StatefulSet處理，但不容易使用，因此多半會把DB放在K8s cluster之外。

4. Node節點 ＆Master主控

   Nodes組成Cluster叢集，Cluster是用來**計算、儲存和網路資源的集合**，執行各種應用程式的基礎。Nodes分為master node和worker node。

   - Worker Node裡面有很多Pods，每個Node都會設置有3個processes：

     - Container runtime

       Pod 是由 container組成，container runtime就是container engine中的低階元素，例如Docker、CRI-O。

     - Kubelet

       讓container和node之間可以互動；讓pod得以用內部的container啟動。

     - Kube Proxy

       cluster通常以多個nodes串成，pods彼此之間透過service聯繫。Kube Proxy幫助將接收到的請求轉接到適合的pod上，例如：當一要求存取node1的app時，會優先導向相同node中的DB。

   - Master node用來操作worker nodes，當中有4個processes：

     - API Server：當client向其發送請求，會先碰到它，可做到 **Auth的驗證 **。

     - Scheduler：查看現有worker node的使用情況，並決定要將新的pod放在哪一個node。

       **只決定要放哪一node，真正啟動pod中container仍是kublete執行的**

     - Controller manager：偵測cluster的狀態，當有部分pods潰堤時，會通知scheduler指派新的pods。

     - etcd：Key Value Store，是cluster的大腦！任何cluster中的改動都會存在這裡。

   建立新的Master/Node server:

   1. 取得一新（沒有內容的）server
   2. 安裝所有master/worker node所需的processes
   3. 將其加入指定cluster

## Minikube & Kubectl

**Minikube**

一般來說Cluster需要有多個master nodes 和 worker nodes組成， 也就是需要有多個個別的虛擬/實體 服務器來執行。但若我們只想測試或練習使用相關功能，可以用minikube，建立一個虛擬機作為cluster的概念，執行模式是將需要用到的master/worder **processes**建立在一個node之上 （作為cluster）。裡面已經內建Docker。

**Kubectl**

要操作Minikube建立元素時，會使用kubectl來操作像是：建立pods、services、消除pods等，可用UI、API、CLI等三種clients端操作。不只能用來操作Minikube，也支援許多類似的apps。

**Download**

1. minikube
2. kubectl
3. hyperkit (或其他虛擬機)

以上都可以用homebrew安裝，且minikube會自動安裝相依套件kubectl

### Start minikube

Start minikube using hyperkit as virtual environment

```bash
$minikube start --vm-driver=hyperkit
```

Get status of nodes

```bash
$kubectl get nodes
NAME       STATUS   ROLES           AGE     VERSION
minikube   Ready    control-plane   4m46s   v1.24.1
```

```bash
$minikube status
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

Kubectl Version

```bash
$kubectl version
Client Version: version.Info{Major:"1", Minor:"24", GitVersion:"v1.24.2", GitCommit:"f66044f4361b9f1f96f0053dd46cb7dce5e990a8", GitTreeState:"clean", BuildDate:"2022-06-15T14:14:10Z", GoVersion:"go1.18.3", Compiler:"gc", Platform:"darwin/amd64"}
Kustomize Version: v4.5.4
Server Version: version.Info{Major:"1", Minor:"24", GitVersion:"v1.24.1", GitCommit:"3ddd0f45aa91e2f30c70734b175631bec5b5825a", GitTreeState:"clean", BuildDate:"2022-05-24T12:18:48Z", GoVersion:"go1.18.2", Compiler:"gc", Platform:"linux/amd64"}
```

### Basic kubectl commands

#### Check

s可加可不加。輸出更多可在後面加`-o wide`。

```bash
$kubectl get nodes
$kubectl get pods
$kubectl get services
$kubectl get deployments
$kubectl get replicaset
```



#### Create

欲建立一pod，但可以發現在create 參數中並沒有pod這選項，因為在K8s中我們是用Deployment來操作pod！

```bash
$kubectl create deployment NAME --image=image

$kubectl create deployment nginx-depl --image=nginx
```

當創建deployment時，會自動有建立pods的blueprint，裡面有基本的configuration（name, image to use）。



####  Edit

```bash
$kubectl edit deployment NAME 
```

會顯示自動產生的configuration file (with default value)。如果這時做些修改，可以看到舊的pod狀態顯示已經結束，同時也有一個新的pod正在運作中。

```bash
[yehs1225@YehTzuHsuansMBP] ~  
❯ kubectl get pod
NAME                          READY   STATUS              RESTARTS   AGE
nginx-depl-58458fcbd-9c765    1/1     Running             0          12m
nginx-depl-68b5c6ddf6-8kcr7   0/1     ContainerCreating   0          28s

[yehs1225@YehTzuHsuansMBP] ~  
❯ kubectl get pod
NAME                          READY   STATUS    RESTARTS   AGE
nginx-depl-68b5c6ddf6-8kcr7   1/1     Running   0          64s
```



#### Debug

```bash
$kubectl logs [POD NAME]
$kubectl describe pod [Pod NAME]
$kubectl exec -it [Pod NAME] --bin/bash
```



#### Use configuration file (.YAML)

當要創立deployment時，如果有較多參數要打（例如image有很多），直接打成一行很不方便，因此可以設定configuration file (為.yaml檔)。以下面指令來使用：

```bash
$kubectl apply -f [File Name.yaml]
```

當然刪除也可以用.yaml

```bash
$kubectl delete -f [File Name.yaml]
```



### YAML file in K8s

YAML有嚴格的空格規定，可以用YAML validator幫忙。分成三部分：

1. metadata
2. specification
3. status(K8s會自動產生)



## Demo

用mongo DB和Mongo Express來練習，流程如下：

1. 瀏覽器訪問app網頁

   ⬇藉由External Service

2. 連接Mongo Express 

   (check Auth)

3. 將request送到Mongo Express的Pod

   ⬇藉由ConfigMap(DB Url)

4. 經由Internal Service連到MongoDB

5. request 送到MongoDB這個Pod

   (設定Secret存放DB User、Pwd)

### MongoDB settings

設定環境變數

**mongo.yaml** (Deployment)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongodb-deployment
  labels:
    app: mongodb
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
      - name: mongodb
        image: mongo
        ports:
        - containerPort: 27017
        env:
        - name: MONGO_INITDB_ROOT_USERNAME
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-username
        - name: MONGO_INITDB_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-password 
```

**mongo-secret.yaml**(secret)

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mongodb-secret
type: Opaque
data:
		#generate base64 by type below words in terminal
		#echo -n "username" | base64
    mongo-root-username: dXNlcm5hbWU=
    mongo-root-password: cGFzc3dvcmQ=
```

上面設定完後，到terminal輸入

**必須先建立secret，deployment才可以參照！**

```bash
$kubectl apply -f mongo-secret.yaml
#check
$kubectl get secret
NAME             TYPE     DATA   AGE
mongodb-secret   Opaque   2      2m3s

$kubectl apply -f mongo.yaml
```



### Create Internal Service

可以將多個configuration放在同一.yaml中，用---分隔。

**mongo.yaml**

```yaml
.
.
.
---
apiVersion: v1
kind: Service
metadata: 
  name: mongodb-service
spec:
  selector:
    app: mongodb
  ports:
    - protocol: TCP
      port: 27017
      targetPort: 27017
```

apply

```bash
$kubectl apply -f mongo.yaml

#check
$kubectl get service        
NAME              TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)     AGE
kubernetes        ClusterIP   10.96.0.1      <none>        443/TCP     17h
mongodb-service   ClusterIP   10.96.79.161   <none>        27017/TCP   4s

$kubectl describe service mongodb-service
Name:              mongodb-service
Namespace:         default
Labels:            <none>
Annotations:       <none>
Selector:          app=mongodb
Type:              ClusterIP
IP Family Policy:  SingleStack
IP Families:       IPv4
IP:                10.96.79.161
IPs:               10.96.79.161
Port:              <unset>  27017/TCP
TargetPort:        27017/TCP
Endpoints:         172.17.0.2:27017
Session Affinity:  None
Events:            <none>
```

see all 

```bash
$kubectl get all | grep mongodb
pod/mongodb-deployment-67dcfb9c9f-2k8zq   1/1     Running   0          13m
service/mongodb-service   ClusterIP   10.96.79.161   <none>        27017/TCP   5m44s
deployment.apps/mongodb-deployment   1/1     1            1           13m
replicaset.apps/mongodb-deployment-67dcfb9c9f   1         1         1       13m
```



### MongoExpress settings

環境變數設定一樣可以從Mongo-Express 的 docker image

[官方文件]: https://hub.docker.com/_/mongo-express

找到

```
Name                            | Default         | Description
--------------------------------|-----------------|------------
ME_CONFIG_BASICAUTH_USERNAME    | ''              | mongo-express web username
ME_CONFIG_BASICAUTH_PASSWORD    | ''              | mongo-express web password
ME_CONFIG_MONGODB_ENABLE_ADMIN  | 'true'          | Enable admin access to all databases. Send strings: `"true"` or `"false"`
ME_CONFIG_MONGODB_ADMINUSERNAME | ''              | MongoDB admin username
ME_CONFIG_MONGODB_ADMINPASSWORD | ''              | MongoDB admin password
ME_CONFIG_MONGODB_PORT          | 27017           | MongoDB port
ME_CONFIG_MONGODB_SERVER        | 'mongo'         | MongoDB container name. Use comma delimited list of host names for replica sets.
ME_CONFIG_OPTIONS_EDITORTHEME   | 'default'       | mongo-express editor color theme, [more here](http://codemirror.net/demo/theme.html)
ME_CONFIG_REQUEST_SIZE          | '100kb'         | Maximum payload size. CRUD operations above this size will fail in [body-parser](https://www.npmjs.com/package/body-parser).
ME_CONFIG_SITE_BASEURL          | '/'             | Set the baseUrl to ease mounting at a subdirectory. Remember to include a leading and trailing slash.
ME_CONFIG_SITE_COOKIESECRET     | 'cookiesecret'  | String used by [cookie-parser middleware](https://www.npmjs.com/package/cookie-parser) to sign cookies.
ME_CONFIG_SITE_SESSIONSECRET    | 'sessionsecret' | String used to sign the session ID cookie by [express-session middleware](https://www.npmjs.com/package/express-session).
ME_CONFIG_SITE_SSL_ENABLED      | 'false'         | Enable SSL.
ME_CONFIG_SITE_SSL_CRT_PATH     | ''              | SSL certificate file.
ME_CONFIG_SITE_SSL_KEY_PATH     | ''              | SSL key file.
```

這裡我們需要用到三個變數

**如何連到MongoDB?**

→ME_CONFIG_MONGODB_SERVER  

**訪問權限(credential)?**

→ME_CONFIG_MONGODB_ADMINUSERNAME

→ME_CONFIG_MONGODB_ADMINPASSWORD

**mongo-express.yaml**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo-express
  labels:
    app: mongo-express
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongo-express
  template:
    metadata:
      labels:
        app: mongo-express
    spec:
      containers:
      - name: mongo-express
        image: mongo-express
        ports:
        - containerPort: 8081
        env:
        - name: ME_CONFIG_MONGODB_ADMINUSERNAME
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-username
        - name: ME_CONFIG_MONGODB_ADMINPASSWORD
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-password         
        - name: ME_CONFIG_MONGODB_SERVER
          valueFrom:
            configMapKeyRef::
              name: mongodb-configmap
              key: database_url 
```

**mongo-configmap.yaml**

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb-configmap
data:
    database_url: mongodb-service
```

上面設定完後，到terminal輸入

**必須先建立configmap，deployment才可以參照！**

```bash
$kubectl apply -f mongo-configmap.yaml
$kubectl apply -f mongo-express.yaml
```



### Create External Service

**mongo-express.yaml**

```yaml
.
.
.
---
apiVersion: v1
kind: Service
metadata: 
  name: mongodb-express-service
spec:
  selector:
    app: mongo-express
    # make it external server
  type: LoadBalancer
  ports:
    - protocol: TCP
      port: 8081
      targetPort: 8081     
      # make it external server (must between 30000~32767)
      nodePort: 30000
```

terminal

```bash
$kubectl apply -f mongo-express.yaml
$kubectl get service                                                                                                                                                      
NAME                      TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
kubernetes                ClusterIP      10.96.0.1        <none>        443/TCP          18h
mongodb-express-service   LoadBalancer   10.101.183.184   <pending>     8081:30000/TCP   37s
mongodb-service           ClusterIP      10.96.79.161     <none>        27017/TCP        34m
```



### Outcome

```bash
$ minikube service mongodb-express-service
|-----------|-------------------------|-------------|---------------------------|
| NAMESPACE |          NAME           | TARGET PORT |            URL            |
|-----------|-------------------------|-------------|---------------------------|
| default   | mongodb-express-service |        8081 | http://192.168.64.2:30000 |
|-----------|-------------------------|-------------|---------------------------|
🎉  Opening service default/mongodb-express-service in default browser...
```



## Namespace

### 介紹

概念像是cluster裡面有虛擬的cluster。預設會有4個Namespaces。

```bash
$ kubectl get namespaces
NAME              STATUS   AGE
default           Active   10d
kube-node-lease   Active   10d
kube-public       Active   10d
kube-system       Active   10d
```

1. **kube-system**

   不要在此新增或修改任何文件！此處負責system process，例如Master、kubectl的process。

2. **kube-public**
   存放可公開存取的資料，一configmap用來儲存cluster的資訊。

```bash
$ kubectl cluster-info                                                               ⏎
Kubernetes control plane is running at https://192.168.64.2:8443
CoreDNS is running at https://192.168.64.2:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'
```

3. **kube-node-lease**

   每一個node都會連到namespace中的lease物件，偵測node的heartbeats（也就是其availability）。

4. **default**

   最初的resources會放在這，就算使用者沒有自己新增一個namespace。

   

#### create new namespaces

with CLI

```bash
$ kubectl create namespace my-namespace
namespace/my-namespace created
$ kubectl get namespaces                                                           ⏎
NAME              STATUS   AGE
default           Active   11d
kube-node-lease   Active   11d
kube-public       Active   11d
kube-system       Active   11d
my-namespace      Active   23s
```

whit configuration file

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb-configmap
  namespace: my-namespace
data:
    database_url: mongodb-service
```



### 適用案例

1. Resources grouped in Namespaces

   解決 Everything in one namespace ，例如：DB可以是一群、Monitoring也分一群

2. Many teams, Same application

3. Resources sharing

   1. Staging and Development
   2. Blue/Green Deployment(兩不同版本)

4. Access and Resources Limits

   在同一cluster之間若有兩個以上的projects，建立各自的namespace，限制CPU, RAM, Storage。



幾乎所有東西都不能在不同的Namespace之間共用，而service是可以共用的元素。例如要連到特定DB的app's nod的configmap中，在`database_url`指定`mysql-service.database`（其中`.database`是我們幫存放DB的namespace所取的名字）。

有些components不可以被**放進namespace**當中，例如volume。用來設定的相關指令是

```bash
$ kubectl api-resources --namespaced=false
$ kubectl api-resources --namespaced=true
```

**變更active namespace**

若要換到my-namespace這個namespace，就要在每一行kubectl後加上`-n my-namespace`。可安裝kubectx內含kubens指令，`kubens`代表查看所有namespaces及目前active的那一個；`kubens my-namespace`切換active one。

## Helm

Package Manager of K8s

Helm Charts : bundle of YAML file，也有Helm Repository放常見的設定檔可供下載。
