# Docker[1]基本介紹

## 容器

### 虛擬化

在介紹容器之前，要先介紹一個概念「虛擬化」，虛擬化已經發展了幾十年，但是因為近年來電腦CPU、記憶體容量等各種硬體技術進步，許多電腦資源並未充分利用，因此虛擬化的技術逐漸發展起來。所謂的虛擬化是將電腦的各主種硬體資源都看做資源池，管理員就可以將這些資源池進行重新分配。兩個極大的優點就是：一、解決高性能電腦硬體的產能過剩問題。二、可以將老舊電腦的硬體組合起來，作為一個整體的資源使用。

目前主流的虛擬化產品有VirtaulBox、VMWare等，可以支援許多作業系統。在傳統虛擬化技術中，系統會虛擬出一整套完整硬體基礎設施，像是CPU、記憶體、顯示卡、磁碟、主機板等，因此彼此是互相隔離不會互相干擾的，如同多台物理電腦。隔離帶來了不少好處，但同樣也有壞處，例如每個虛擬機都需要執行用戶端作業系統的完整備份及其中包含的大量應用程式，沉重的負載影響工作效能。

### 容器

容器為虛擬化技術帶來革命性的變化，擁有虛擬化的靈活性，且避免了上述的缺點。容器，是一種輕量化級的作業系統級虛擬化，讓使用者在一個資源隔離的處理程序中執行應用及其依賴項。執行應用程式所需的原件都被包裝在一個 **映像檔**中，可以重複使用。執行映像檔時是在一隔離環境中，因此不會共用主機的CPU、記憶體、磁碟，也就代表 **容器內的處理程序不能監控容器之外的任何處理程序**。

分為作業系統容器及應用容器，其中Docker就屬於應用容器。

### 容器與虛擬機器的差別

虛擬機管理系統需要虛擬出一套完整的硬碟系統，另外每個虛擬機也需要自己的作業系統，因此會需要大量的記憶體資源。而容器則因為是輕量化的虛擬化方案，因此大幅降低所需要的儲存空間，啟動時間也相對迅速。

![](https://images.contentstack.io/v3/assets/blt300387d93dabf50e/bltb6200bc085503718/5e1f209a63d1b6503160c6d5/containers-vs-virtual-machines.jpg)

[picture from : [Docker vs Virtual Machines (VMs) : A Practical Guide to Docker Containers and VMs (weave.works)](https://www.weave.works/blog/a-practical-guide-to-choosing-between-docker-containers-and-vms)]



### 解決的問題

在容器之前，應用程式從開發到正式上線即有可能在不同的環境當中，例如：Linux-Windows、python2-python3等等差異，造成執行上的錯誤甚至無法執行。因此將應用程式部署在容器裡，而容器便將應用程式所依賴的環境都放進映像檔中，就可以拿到各平台上部署。

類似海運中的貨櫃，內容物可能大小包裝材料千奇百怪，但通通都被放進了貨櫃中，如果要將貨櫃運送到世界各地，只需要有人可以將貨櫃放上船就行了，而貨櫃因為整齊劃一所以就方便了許多。

### 優缺點

#### 優

1. 敏捷

   檔案較小，方便建立、開發、轉移。

2. 版本控制

   容器的映象檔有版本控制!可以追蹤不同版本及其中的差異。

3. 標準化

   多數容器可以執行在主流的Linux或Windows平台

4. 安全

   是一種沙盒（sandbox）。程序互相隔離，不會互相影響，也可獨立升級，增加生產力。

#### 缺

較不成熟，且多數是基於原生Linux技術，在其他地方執行可能稍微複雜些。

## Docker技術

Docker 就是應用容器引擎使管理者可透過其對容器進行管理，基於Go語言開發、Apache2.0開放原始碼協定。Docker提供包裝封裝容器映像檔的功能，讓開發者能夠將輕便的容器輕鬆部署到許多不同環境中，也就是說Docker整合了開發、測試和部署的環境和流程。

C、C++等程式語言在不同平台上往往都需要重新編譯和執行，而後出現的JAVA則號稱「編譯一次，到處執行」，其就是仰賴Java的虛擬機器，也就是說開發人員都必須透過該虛擬機器開發，因此不同平台間也可以通用。Docker就是為其他語言也提供類似的功能，透過包裝映像檔（同時隱藏與該平台相關的實際細節）包含應用程式所需的元件。另外，更棒的是也整合了像是Git的版本控制功能。

### 架構

採C / S（customer用戶/service伺服器）架構，管理者透過用戶端與Docker伺服器互動，兩者可在同一主機或不同主機上。Docker伺服器負責建置、執行、執行映像檔。

![](https://docs.docker.com/engine/images/architecture.svg)



[picture from : [Docker overview | Docker Documentation ](https://docs.docker.com/get-started/overview/)]

#### 名詞介紹

- ##### Image映像檔

  以映像檔作為範本建造容器，內容可以是多種多樣的，例如完整作業系統（通常不會，檔案太大）、某個應用程式、依賴元件等。Docker提供完整的管理功能，方便更新下載，可下載現成的或是自己設定。

- ##### Container容器

  以映像檔建立的實例，可獨立執行，可以看成是簡易版的Linux系統，包含root使用者許可權及使用者、網路、處理程序空間及當中執行的應用程式。

- ##### Registry倉庫

  Docker建立存放映像檔的地方，分為公有及私有倉庫。公有倉庫最大的是Docker Hub，有大量樣像檔可供下載；斯有倉庫則是指使用者可在本地網路上建立自己的倉庫，放自己的映像檔，也可再放到網路上，以便之後使用。



### 使用優點

#### 雲端

雲端環境中，管理員可透過Docker處理多個租戶的需求，因此能提供較低廉的雲端服務，使用者不必為了效能而花大錢。

#### 開發

簡化設定、統一開發（development）生產（production）環境。開發時設定好使其貼近生產環境，部署時，便僅需要用該映像檔輕鬆達成。另外，其個容器是分離的，也不會互相影響。



### 安裝Docker in Ubuntu（透過遠端倉庫）

1. 更新apt `$sudo apt update`

2. 安裝Docker`$sudo apt install docker.io`

3. 查看否安裝成功`$docker -v`

4. 啟動Docker`$sudo systemctl start docker `

5. 查看Docker狀態``$sudo systemctl status docker`

   `systemctl` 指令用來管理 Systemd 的系統服務，跟傳統 System V 的 init 相比，開機速度更快、效能更好、具有相依性檢查功能。



#### 下載第一個映像檔

Docker為了讓大家測試，提供一個測試檔「hello-world」，成功會出現以下文字!（好可愛XD）

```bash
yehs1225@yehs1225-VirtualBox:~$ sudo docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:4c5f3db4f8a54eb1e017c385f683a2de6e06f75be442dc32698c9bbe6c861edd
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

