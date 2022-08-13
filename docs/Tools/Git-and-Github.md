# Git

## 什麼是Git版本控制?

簡單來說就是"每一次一個專案(repository)有任何檔案修改(新增、刪除、編輯)都會被記錄下來"，包含備註、修改時間及更動者。

```
EX.和小組成員一起做報告的時候....
無限循環的修改：經濟學報告_V1 >經濟學報告_V2>經濟學報告_Final>經濟學報告_Final_最終版>經濟學報告_Final_無敵最終版
除了內容修訂外，本身命名習慣也不同(以V1,1,first,日期註記)，很多時候最終版之後又有無敵最終版，這時候就會發現兩個大問題：
(1)這一版跟上一版有甚麼不一樣?到底哪一版是最新的?
(2)大家都在各自電腦改，每人負責一小部分，要怎麼合併在一起?有沒有人重複改了同個地方?
```

上面這個問題使用基礎的Git指令就可以幫我們解決!

### git基礎操作

| 指令                      | 描述                                                         |
| :------------------------ | :----------------------------------------------------------- |
| git init                  | 初始化。在該位置中加入版本控制(建立一個repository)，會生成隱藏檔案.git(裡面會記錄版本控制的相關規範) |
| vim .gitignore            | 可將不需要版本控制的文件名稱加入裡頭。                       |
| git add 文件名稱          | 將新增的文件/有修改的文件加入tracked中，才能進行commit(正式更新一個版本)。 |
| git add .                 | 若要將所有檔案都加入可以用這個。(不包含在.gitignore的文件)   |
| git commit                | 更新一個版本，會進到文字編輯系統，可以輸入本次更新的說明。   |
| git commit -m " 說明文字" | 直接輸入說明文字。                                           |
| git commit -am            | 結合 git add 及 git commit -m " "兩個動作。 *但若是新增的文件必須使用git add |
| git log                   | 查看所有版本更動紀錄。                                       |
| git log online            | 查看所有版本更動紀錄(僅顯示一行)。                           |
| git checkout 版本         | 進入指定版本。                                               |
| git diff commit1 commit2  | 比較兩次commit差異。commit可以輸入前五碼就好。               |
| git status                | 查看目前的git狀態(哪些文件有加入git版本控制且有做更改但未commit等等) |

## 什麼是branch?

branch的中文就是"樹葉的分支"，有分支也就代表有一個主體，稱為master，是最主要的檔案。

直接用例子來介紹為甚麼需要branch?以及具體效果。

有一個穩定運行的專案(stable version)，今天開始著手為它撰寫新功能，但是寫到一半時，老闆突然跟你說：ㄝㄝㄝ!本來的專案出現bug了，快把它修好。這時候怎麼辦呢?

如果我們沒有建立branch都在主體上進行程式編寫，那就會像下圖一樣，新功能還沒寫完，bug修好了也不能上架QQQ

![內部資料夾內](/img/docs/Git-and-Github/branch1.jpg)



因此除了靠基本的git指令，來知道每一次檔案的更動，也利用branch來協助我們!

如下圖，我們在拿到專案時就先建立一個branch來開發新功能，那麼當我們新功能完成到30%時，我們也可以先放著去修理master中的bug並且將其發佈回復營運，此時你做到一半的新功能完全不會出現在這裡，等到完成時，在merge這個branch到master中，就可以推出新功能拉！

![內部資料夾內](/img/docs/Git-and-Github/branch2.jpg)



從上面的例子可以看出branch的重要性，此外程式開發多由許多人一起撰寫，不可能大家都在主要的檔案上直接進行修改，因此，在拿到一份專案時會先建立一個branch進行部分分工，最後在合併到主要檔案(master)中。

### branch 相關指令

| 指令                       | 描述                                             |
| -------------------------- | ------------------------------------------------ |
| git branch -v              | 查看目前所有branch(也會顯示master)               |
| git branch 新branch名稱    | 建立新的branch(會複製目前master所有版本的commit) |
| git branch -m 新branch名稱 | 更改當前branch名稱                               |
| git branch -d branch名稱   | 刪除branch                                       |
| git checkout branch名稱    | 進入指定branch(或master)                         |
| git merge branch名稱       | 在master下使用，代表將該branch合併進來           |

當branch合併時發生衝突(conflict)，系統會顯示哪幾個檔案發生衝突。此時需要人工進入每一個檔案(vim 檔案名)進行修改，會明確指出master、branch中哪幾行有衝突(提示字)，此時可以選擇採用任何一個，甚至是改成其他文字，刪除(提示字)後直接進行修改即可。



## git 跟 github 到底是什麼關係?

git 是前面一直提到的"版本控制"，可以幫我們達到紀錄更動、共同協作的目的，但是!但是!這一切都是發生在自己電腦上(本機)，而在開發時，肯定需要跟別人協作，那麼當然是透過網路來傳輸，可以自行架設網站存放。而GitHub就是一個存放交流的平台，提供大家圖形化介面使用git的功能，視覺化的repository（專案，以下也簡稱repo），因為有簡潔的設定介面加上眾多的使用者，因此，可以說是全球最大的工程師交友平台!(也有其他類似平台可以選擇)。

以上可以釐清GitHub是git的延伸產物 => **使用git不一定要使用GitHub，但使用github就一定要懂git。**

### github的基本操作

- ##### git push （如何把自己本機的code放上GitHub的repository上）

  **如果原先的repository就是從遠端抓下來的話，要push時，會自動去檢查若遠端已有新版本，就必須先進行pull及merge的動作，才能成功執行**

  1. 點選GitHub主頁右上的+號，新增一個repository

  2. 新建完repo後會有提示教你該在終端機輸入的指令

     1. 在遠端的repository新增一個origin作為基礎（origin不是真的名稱有點虛擬的概念，也可以改成其他名稱例如main）

        `$git remote add origin https://github.com/<username>/<repo's name>.git`

     2. 將本機中這個branch分支的檔案放上去（-u代表堆到哪裡的意思）

        `$git push -u origin <local branch name>`

  3. 輸入username及password，現已改為用personal token，因此在github中申請後，在password這欄輸入你的token。

     *解決每次pull、push都要輸入帳密的問題，輸入以下指令，下次就不用再重複。

     `$git config --global credential.helper store`

     

- ##### git pull

  `$git pull origin master`//origin為遠端，master為本機branch

- ##### git clone

  `$git clone <url that you want to clone>`

  clone可以把別人（或自己）的repo複製到本機，但是修改後若你沒有權限就不能直接push回去遠端。

  因此，若是擁有一份別人的repo也可以先點選fork，把該repo複製一份到自己的github中，再clone下來，改動後就可以直接push回自己的repo。

- ##### Pull Request(PR,與其他作者一起協作)

  當你今天看到別人的專案很酷，自己也想貢獻一份心力。但是原先的作者肯定不會希望隨便就有路人要求自己開權限給他，因此，若你想要參與專案的開發可以有以下的步驟：

  1. fork專案到自己的github
  2. 編輯完程式碼後push回自己的github
  3. 發起pull request
  4. 原作者會看到你的請求
  
    5. 作者同意後就可以按下merge來將你做的更動合併到原先的專案

​	**pull request就是指希望原作者可以將你做的改變pull回自己的專案裡!**

​	**如果想要練習PR而自己開一個帳號，那麼要push時也要在terminal切換帳號，可以下這個指令。**

​	`$git config credential.username "new_username"`

### 操作github最後的最後：githubflow

github提供了一份流程，告訴大家如何使用github來輔助軟體工程的開發。[Understanding the GitHub flow · GitHub Guides](https://guides.github.com/introduction/flow/)

1. 拿到專案後，先建立新的branch
2. 在實作過程中添加commit，紀錄工作歷程外也方便別人理解
3. 實作過程或完成時，開啟pull request，
4. 管理者、團隊成員可以檢視更動的地方以及討論，確認完成後Merge
5. 如果需要，可以在github先將branch進行部屬
6. 確認完成，將branch合併到master branch

![內部資料夾內](/img/docs/Git-and-Github/githubflow.png)

## Git 狀況劇

1. ##### 我commit了但是想改commit message

   `$git commit --amend`

   

2. ##### 我commit了但是我又不想commit了

   (1)單純取消最近一次commit動作(--soft可以省略)

   `$git reset HEAD^ --soft`
   
   (2)我全都不要了拉(除了commit外還有任何更動過的資料紀錄)

   `$git reset HEAD^ --hard`

   **HEAD代表最新的一個commit；^是前一個的意思
   
   
   
3. ##### 我還沒commit但是我改的東西不想要了

   `$git restore < file>`
   
   
   
4. ##### 我想要遠端的branch

   新版git，本機原先只有master時，直接使用以下指令就可以拿到遠端的branch

   `$git checkout branch-name`
   
   

**客製化各階段-hook**

hook是虎克船長的鉤子~~在git裡的意思有點像是把一個鉤子掛在repository上，當有任何東西變動時，鉤子就會動，hook就會被觸發，例如裡面可以針對執行某些動作(e.g.commit、push)時做些檢查(靠程式碼去判斷邏輯等等)。而這些檔案就存放在.git 的 hook資料夾中。

## 其他資源

##### githubpages

提供大家可以做為靜態網頁使用，可以作為個人部落格。可以參考網路資源或是此課程：[課程討論 - Github 免費架站術！輕鬆打造個人品牌 - Hahow 好學校](https://hahow.in/courses/5de8fec16117240026540b9c/discussions?announcement=60ffdb99331f0d00073bcfef&item=5e021aee1b68d20020e1fd8d)

##### github超詳細教學

[Git 教學 - Git 書 - 為你自己學 Git | 高見龍 (gitbook.tw)](https://gitbook.tw/)
