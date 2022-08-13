# Command Line and Vim



## 什麼是command line？

*一種操作電腦的方法*

一般操作電腦使用的是GUI(Graphical User Inerface)，透過圖形化介面我們可以直接點選、拖曳圖示完成操作。而CLI(Command Line Interface)就是透過輸入指令(純文字)的方式來進行相同的操作。

## 常用command line 指令

| 指令      | 全名                    | 功能                             | 描述                                                         |
| --------- | ----------------------- | -------------------------------- | ------------------------------------------------------------ |
| pwd       | print working directory | 列出現在所在位置                 |                                                              |
| ls        | list segment            | 列出所在位置所有檔案             | 加上-a 會有更多信息                                          |
| cd        | change directory        | 更改位置                         | ..回上一路徑(相對路徑)                           <br /> ~返回家目錄(相對路徑)                            <br /> / 從根目錄出發(絕對路徑) |
| touch     |                         | 建立檔案或更新檔案時間           |                                                              |
| mv        | move                    | 移動檔案、重新命名               | mv 欲移動檔案 位置                                           |
| rm        | remove                  | 移除檔案                         | 若要移除資料夾可用 rmdir (空資料夾)或是 rm -r (經確認後輸入y刪除所有內容)、或是 rm -rf(直接刪除所有內容，危險!) |
| mkdir     | make directory          | 新增資料夾                       |                                                              |
| cat       | concentrate             | 列印檔案內容or合併檔案           | 可直接呈現檔案內容                                           |
| grep      |                         | 在檔案內搜尋關鍵字               | grep 關鍵字 檔案                                             |
| \|        | pipe                    | 將左邊指令輸出當成右邊指令輸入   |                                                              |
| >         |                         | 將左邊內容指定給右邊(會覆蓋)     | cat 檔案1 檔案2 > 檔案3                                      |
| >>        |                         | 將左邊內容指定給右邊(加在最後面) | echo "append in the end" > 檔案                              |
| **cp**    | copy                    | 複製一份                         | copy 舊檔案 新檔名                                           |
| **echo**  |                         | 呈現文字                         |                                                              |
| **man**   | manual                  | 指令說明                         |                                                              |
| **wget**  |                         | 下載檔案                         |                                                              |
| **curl**  |                         | 送出request                      |                                                              |
| **clear** |                         | 清除終端機顯示內容               |                                                              |
| **fim**   |                         | 開啟圖片檔                       | 自己安裝的，可能有別的可以用                                 |



## Vim 文字編輯器

Vim(vi Improved)是從vi衍伸出來的文書編輯器。所有的Unix Like系統都會內建vi文書編輯器，且有許多預設按鍵用得好的話可以讓你撰寫地飛快XD雖然不像其他文字編輯器可以排版e.g.word。但就像Unix的哲學一樣：只做一件事，並做好它。

好玩的教學[Interactive Vim tutorial (openvim.com)](https://www.openvim.com/tutorial.html)

### 基本操作

進入文字編輯：輸入` $vim <檔案名稱>`(如果不存在會新建一個)

內部操作：

-  i 為插入(insert)
- esc 結束插入
- :w存檔
- :q離開
- :wq存檔並離開
- :q!不存檔離開

### 詳細操作說明

#### Mode模式

1. normal (Esc)：to navigate and manipulate text.
2. insert (i)：write text
3. visual (v)

#### Setup設定

- 加上（取消）行號：在normal mode中，輸入`: set number(or just "nu")`（ `:set nonumber`）

  *change forever ：在根目錄中輸入`$ vim ~/.vimrc` ,新增一行 `set number (or "nu")`.

- 設定tab產生的間隔數：在根目錄中輸入`$ vim ~/.vimrc` ,新增一行`set tabstop=4 `.

#### Go to anywhere

| 指令    | 動作                             |
| ------- | -------------------------------- |
| h,l,k,j | ←, →, ↑, ↓                       |
| w       | the start of next word.          |
| b       | the start of the word.           |
| e       | the end of the word.             |
| 0       | reach the beginning of the line. |
| shift+$ | reach the end of the line.       |
| gg      | go to the beginning of file.     |
| shift+g | the end of the file.             |

- 可以結合數字和指令e.g.
  -  2(shift + G) : go to line 2.
  - 3w : go to the begin of the next 3 words
  - "3igo"  and then press Esc : "gogogo"

#### Find & Jump

- 搜尋字母

  按f加上要**搜尋**的字母(或符號也可)，並用；及，**跳往**下一個或上一個目標

- 搜尋單字

  按/並輸入要**搜尋**的詞，用n和N**跳往**下一個或上一個目標

#### Add new line

- o：插入文字至下一行
- O：插入文字至前一行

#### Delete

- x：從當下游標位置開始刪除（跟按鍵delete功能一樣）
- D 或 dd ：刪除整行

#### Replace

- 在當下位置按r再輸入要替換的字

#### Cut&Paste

- yy：剪下
- P：貼上

#### Save

- ：w ( save )
- ：q (quit )
- ：q! (quit without save)
- ：wq (save and quit)

#### Other

- ：w ( save )
- ：q (quit )
- ：q! (quit without save)
- ：wq (save and quit)



