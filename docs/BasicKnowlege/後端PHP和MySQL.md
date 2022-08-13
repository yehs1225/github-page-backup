# 後端PHP和MySQL

## php

#### 基礎操作

1. 要以`<php? ?>`包住內容。
2. `echo" "`顯示內容
3. `$變數名稱`
4. `.`連接變數
5. `var_dump()` 、`print_r()`印出物件型態、內容。
6. `sizeof()`字串長度

#### 從前端傳到後端

1. 直接在網址列傳遞( Only GET)

   一串網址(所在檔案)後加上`?變數=值`or `?變數1=值1&變數2=值2`，之後在php檔案裡用`$_GET`取得。

2. 在前端用form表單取得輸入值，傳入另一個php檔案(data.php)。php檔以`empty()`檢查是否有傳入值。

   ```html
   <form method="GET" action="data.php">
       name<input name="name"/>
       age<input name="age"/>
       <input type='submit'/>
   </form>
   ```

   ```php
   <?php	if(empty($_GET[name])||empty($_GET[age])){
   		echo'資料有缺!';
   	}
   	echo "$_GET[name]";
   	echo "$_GET[age]";
   ?>
   ```

## php + MySQL

#### 基礎操作

##### 連線

專門用來連資料庫的php檔案=>conn.php (因為有個資，上傳記得移除這個=>加進.gitignore)

其他檔案要使用以`require_once(conn.php)`呼叫。

```php
  //設定變數值
  //...
  $conn = new mysqli($server_name,$username,$password,$db_name);
  //設定編碼及時區
  $conn->query('SET NAMES UTF8');
  $conn->query('SET time_zone ="+8:00"')
```

##### 連線錯誤訊息

用die()停止執行接下來的程式碼。

```php
  if($conn->connect_error){
          die('資料庫連線錯誤:'.$conn->connect_error);
      }
```

##### 提取資訊

先用`$result=$conn->query("MySQL語法;")`拿到結果，接者有三種方法可以解析資料。

`fetch_array` : get key(column index, name) and value.

`fetch_assoc` : get key(column name) and value.

`fetch_row` : get key(column index) and value.

```php
<?php
	require_once('conn.php');//connect to MySQL
	$result=$conn->query("select now() as n;");//now is func. in MySQL
	if(!$result){
		die($conn->error);
	}
	$row = $result->fetch_array();
	print_r($row);
	echo '<br> now:'.$row['n'];
?>
```

##### 跳轉回Index.php

`header:('Location: index.php');`



## 實作練習

### 職缺報報

1. 思考問題全貌

   實作前台讓大家看有哪些職缺，寫出後台管理職缺，基本**CRUD**(create, read, update, delete)

   - 前台
     - index.php 展示所有職缺
     - job.php?id=1 展現單一職缺

   - 管理後臺
     - admin.php 管理者頁面
     - add.php 新增職缺
     - update.php 更改職缺

2. 資料結構

   職缺要放那些資料?

   - 職缺名稱
   - 職缺描述
   - 薪水範圍
   - 職缺連結

3. 設定DB

   - id int(11),AI,pk
   - 職缺名稱 ->title varchar(64)
   - 職缺描述 -> description text
   - 薪水範圍 ->salary varchar(64)
   - 職缺連結 -> link varchar(512)

    1.char長度固定 : 即每條數據佔用等長字節空間；適合用在身份證號碼、手機號碼等。
    2.varchar可變長度 : 可以設置最大長度；適合用在長度可變的屬性。
    3.text不設置長度 : 當不知道屬性的最大長度時，適合用text。

4. 實作前端頁面

5. 實作後臺與資料庫串接

## 安全問題

1. #### 偽造身分 

   例如:server將使用者帳密狀態存在cookie裡，使用者可以自己更改cookie來偽造身分。

2. #### 明文密碼

   至少使用**加鹽(salt)+雜湊(hash)**，salt要加上一串含特殊字元數字；hash常用的有SHA1、MD5，慢雜湊**Bcrypt**則是疊代次數較多，約慢SHA1一千倍左右。

   密碼學中有:Encode、Encrypt、hash，簡單來說，

   Encode只是用另一種方法表達資訊。

   Encrypt需要有key才能解出密碼。但在server端仍需儲存key所以當資料庫被盜用時也同樣危險。

   Hash 特性:

   - 不可逆

   - 相同輸入，相同輸出
   - 不同長度的輸入會得到固定長度的輸出
   - 相近的字元，雜湊後完全看不出來
   - 極低的機率產生相同雜湊結果(稱為碰撞collision)

4. #### XSS (Cross-site Scripting)

   惡意使用者將程式碼注入網頁上，例如輸入< script > ... < /script > ，網站會將其視為程式碼而非一般字串。

   - escape跳脫，htmlspecialchars() 將使用者輸入內容進行過濾(php)。其他語言也有類似功能。

5. #### SQL injection

   惡意使用者輸入SQL語法(針對網站的設計漏洞，例如用sprint_f字串拼接)，就可以存取資料庫內容。

   - Prepared statement 參數化查詢

     ```php
     <?php
     	$sql = "insert into users (name,phone) values(?,?)";//用?取代參數
         $stmt = $conn->prepare($sql);
         $stmt -> bind_param('ss',$name,$id);//參數是兩個字串，因此為ss
     	$result = $stmt -> execute();
     	if(!$result){
             die($conn->error);
         }
     	$result = $stmt -> get_result();//拿回結果
     	if($result->num_rows === 0){
             header("...");
             (exit);
         }
     ?>
     ```
   
   #### 5.CSRF(Cross Site Request Forgery)
   
   簡易來說就是透過瀏覽器本身運作方式的漏洞來攻擊，因為瀏覽器在拜訪網站時會自動帶入已儲存的資料，例如使用者帳戶密碼等，因此可能出現從別的網站發來請求進行操作。具體來說，例如今天我進入一個小遊戲的頁面，當我按下開始遊戲的按鈕時，背後的程式碼就對我曾經登入過的金流網站等發送請求，如此一來，我就可能在不知情的情況下，被惡意進行操作。
   
   前面提到這是因為瀏覽器的運作機制而有的攻擊手法，目前chrome就有針對此推出應對機制來防禦(目前瀏覽器的支援情況如下[SameSite cookies - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#browser_compatibility))，使用方法就是在cookies的header後面多加上一行設定，其中參數有三種選項可設定，參考[SameSite cookies - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)。
   
   cookies header設定
   
   ```js
   Set-Cookie: flavor=choco;//original
   Set-Cookie: flavor=choco; SameSite=Lax//set Samesite
   ```
   
   更多詳細說明：[讓我們來談談 CSRF (techbridge.cc)](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
   
   
