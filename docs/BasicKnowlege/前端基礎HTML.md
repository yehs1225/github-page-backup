# 前端基礎HTML

Hyper Text Markup Language 超文本標記語言，最原始目的為讓大家透過網路以標準格式撰寫文章來交換資訊。

#### 一個網頁的基礎樣貌

```html
<!DOCTYPE HTML> <!-- 告訴瀏覽器你要使用的格式 --> 

<html>
	<head>
		<meta charset="utf-8"/> <!-- 自己一組的標籤可加/也可不加；chartset為attribute -->
		<title>I am title</title>
	</head>
	<body>
	</body>
</html>
```

## 各種標籤

(< />表示自成一組的標籤) 

常用跳脫符號 :

- " < "  等於 &lt
- " > "  等於 &gt
- "&"　等於＆amp

##### 基本款

- < h > : 文章標題，從h1~h6代表不同大小、級別
- < p > : 文章段落
- < div > : division 分組
- < span > : span 分組，div會換行，span不會
- < img /> :  圖片，attribute : 
  - src 圖片位置
  - title 鼠標移上去時顯示
  - alt 圖片無法載入時顯示
- < ul > :(unordered) 無序清單，內用< li >包住每個元素
- < ol > : (ordered)有序清單，內用< li >包住每個元素
- < pre > :保留完整格式(preformatted text)
- < br >: 換行(line break)
- < table > :
  - < tr > : row
  - < td > : column
  - < th > : head 
- < a > : anchor 錨點，attribute:
  - href : (hypertext reference) 要去的網址 or 本頁的其他位置。連本頁的話用#id 。
  - target :" _self " 在現有標籤頁開啟 "( _blank)" 在新標籤頁開啟

##### 語意化標籤

不用也沒關係，但用了會比較好!一般會用的 semantic element :

- < main /> 
- < nav /> : navigator
- < footer /> 

##### 直接用別人的網站<  iframe >

嵌入別人的網頁，多數網站會禁止這項功能，較少用。attribute:

- src
- width
- height

##### 表單相關標籤 < form >

- < input/ >輸入框，attribute 為type ，type 常用型式: text、password、email、date、...。

  - radio  單選框

    ```html
    <div>
        生理性別 : <input type="radio" name="gender" id="male"/><label for="male">男</label>
        <input type="radio" name="gender"id="female"/><label for="female">女</label>
        <input type="radio" name="gender"id="other"/><label for="other">其他</label>
    </div>
    <!-- 加上name才是一個群組 -->
    <!-- 加上label就可以不用一定要點小框框，可以點選字來選取 -->
    ```

  - checkbox 複選框

    ```html
    <div>
    興趣 : <input type="checkbox"id="baseketball"/><label for="baseketball">籃球</label>
    <input type="checkbox"id="volleyball"/><label for="volleyball">排球</label>
    </div>
    ```

##### SEO 相關標籤

Search Engine Optimization，幫助搜尋引擎理解網頁。在html 可以做的簡單優化例如:

以 [鼎泰豐(101店) (信義區) - 餐廳/美食評論 - Tripadvisor](https://www.tripadvisor.com.tw/Restaurant_Review-g13808515-d2244808-Reviews-Din_Tai_Fung_101_Branch-Xinyi_District_Taipei.html)為例

1. 使用的語言

2. keywords

3. description

4. [opengraphprotocol]: https://ogp.me/

   (og) : 用於社交媒體抓取內容用的。通常是facebook在用的 [分享偵錯工具 - Facebook for Developers](https://developers.facebook.com/tools/debug/) 可以查看以facebook的角度可以看到甚麼。

5. JSON :< script >用JSON放資料(統一格式)讓搜尋引擎較好理解。

6. 用txt告訴爬蟲 : url最後加上robots.txt進入純文字頁面，裡面可能會有建議及不建議爬取的資料 e.g. https://www.tripadvisor.com.tw/robots.txt 

7. Sitemap : 給搜尋引擎一張地圖(所有想被連結的網址)

8. 還有提供別的語言 : < link rel="" hreflang="" href="">

9. 還有APP版可以看呦 : < meta property="" name="" content=""/>

```html
<!-- 告訴別人你用繁體中文 -->
<html lang="zh-Hant" xmlns:og="http://opengraphprotocol.org/schema/">
   
    <!--  keywords -->
    <meta name="keywords" content="信義區鼎泰豐(101店), 餐廳, 餐廳評論, 食物, 用餐"/>
    
    <!-- description -->
    <meta name="description" content="鼎泰豐(101店)(信義區): 讀讀4,658則則關於鼎泰豐(101店)客觀公正的美食評論，在Tripadvisor的5分滿分評等中得4.5分，在信義區的1,559家餐廳中排第11名。"/>
    
    <!-- og means opengraphprotocol -->
    <meta property="og:title" content="鼎泰豐(101店) (信義區) - 餐廳/美食評論 - Tripadvisor"/>
    <meta property="og:description" content="鼎泰豐(101店)(信義區): 讀讀4,658則則關於鼎泰豐(101店)客觀公正的美食評論，在Tripadvisor的5分滿分評等中得4.5分，在信義區的1,559家餐廳中排第11名。"/>
    <meta property="og:image" content="https://media-cdn.tripadvisor.com/media/photo-s/15/f6/bd/b4/must-try-soup-dumplings.jpg"/>
    <meta property="og:image:width" content="550"/>
    <meta property="og:image:height" content="413"/>
    <meta property="og:type" content="restaurant"/>
    <meta property="og:url" content="http://www.tripadvisor.com.tw/Restaurant_Review-g13808515-d2244808-Reviews-Din_Tai_Fung_101_Branch-Xinyi_District_Taipei.html"/>
    <meta property="og:site_name" content="Tripadvisor"/>
    
    <!-- 用JSON放資料(統一格式)讓搜尋引擎較好理解-->
    <script type="application/ld+json">{"@context":"http:\u002F\u002Fschema.org","@type":"FoodEstablishment","name":"\u9F0E\u6CF0\u8C50(101\u5E97)","url":"\u002FRestaurant_Review-g13808515-d2244808-Reviews-Din_Tai_Fung_101_Branch-Xinyi_District_Taipei.html","image":"https:\u002F\u002Fmedia-cdn.tripadvisor.com\u002Fmedia\u002Fphoto-s\u002F15\u002Ff6\u002Fbd\u002Fb4\u002Fmust-try-soup-dumplings.jpg","priceRange":"$$ - $$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.5","reviewCount":"4658"},"address":{"@type":"PostalAddress","streetAddress":"\u5E02\u5E9C\u8DEF45\u865F B1","addressLocality":"\u4FE1\u7FA9\u5340","addressRegion":"","postalCode":"110","addressCountry":{"@type":"Country","name":"\u53F0\u7063"}}}</script>
    
    <!-- 提供其他語言 -->
    <link rel="alternate" hreflang="en" href="https://www.tripadvisor.com/Restaurant_Review-g13808515-d2244808-Reviews-Din_Tai_Fung_101_Branch-Xinyi_District_Taipei.html" />
    <link rel="alternate" hreflang="en-GB" href="https://www.tripadvisor.co.uk/Restaurant_Review-g13808515-d2244808-Reviews-Din_Tai_Fung_101_Branch-Xinyi_District_Taipei.html" />
    
    <!-- 我們還有APP版喔 -->
    <meta property="al:ios:app_name" content="TripAdvisor">
    <meta property="al:ios:app_store_id" content="284876795">
    <meta property="twitter:app:id:ipad" name="twitter:app:id:ipad" content="284876795">
    <meta property="twitter:app:id:iphone" name="twitter:app:id:iphone" content="284876795">
    <meta property="al:ios:url" content="tripadvisor://www.tripadvisor.com.tw/Restaurant_Review-g13808515-d2244808-Reviews-Din_Tai_Fung_101_Branch-Xinyi_District_Taipei.html?m=33762">
```



