# 前端基礎CSS

Cascading Style Sheets 階層樣式表。

## 三種使用方式

1. 直接加在內文裡(不佳)

   ```html
   <body>
       <div style="background: red;">
       	hello
       </div>
   </body>
   ```

2. 加在< head >裡(不佳)

   ```html
   <head>
       ...
       <style>
           div {
               background: red;
           }
       </style>
   </head>
   ```

   

3. 自成一個檔案(讚)

```html
<head>
	...
	<link rel="stylesheet" href="./style.css"/>
</head>
```

```css
div {
	background: blue;
}
```

## Selector

##### 我全都要universal selectors

```css
*{
	color: blue;
}
```

##### 標籤

```css
div{
	background: blue;
}
body{
	background: black;
}
```

##### id 與 class

- 整個檔案id只能有一個 => #idName
- class可以多個，一個元素也可以有多個 => .className

```html
...
<div id="greet">
    hello
</div>
<div class="bg-blue text-white">
    don't give up.
</div>
<div class="bg-yellow">
    keep going~
</div>
<div class="bg-blue">
    action will overcome fear.
</div>
...
```

```css
body{
	background: green;
}

#greet{
	background: white;
}

.bg-yellow{
	background: yellow;
}

.bg-blue{
	background: blue;
}

.text-white{
	color: white;
}
```

##### 符合全部條件我才要
```html
<div class="bg-blue text-white">
    don't give up.
</div>
<span class="bg-blue">
    action will overcome fear.
</span>
```
- tag + class_name

```css
span.bg-blue{
	background: blue;
}
```

- class_name1 + class_name2 (中間不空格)

```css
.bg-blue.text-white{ /*中間不空格*/
	background: blue;
	color: white;
}
```

##### 底下的元素

```html
<div class="lv1">
	Level 1
	<div class="bg-red">
		Level 2
		<div class="text-green">
			Level 3
		</div>
	</div>
	<div class="text-green">
		Level 2-2
	</div>
</div>
```

- 選下 "一" 層 : >

```css
.lv1 > div{
	color: green;
}
/* class+class*/
.lv1>.text-green{
	color: green;
}
```

- 選下面全部的

```css
.lv1 div{
	background: black;
}
/* class+class*/
.lv1 .text-green{
	color: green;
}
```

#### 旁邊的你好 + 與  ~

都只能用在同一層。旁邊的要符合條件。

```html
<div>
	<div class="bg-yellow">
		line 1
	</div>
	<div class="bg-blue">
		line 2
	</div>
	<div class="bg-blue">
		line 3
	</div>
</div>
```

- " + " : 選擇旁邊符合的下一個

  ```css
  .bg-yellow + .bg-blue{
  	background: blue;
  }
  ```

- " ~ " : 選擇旁邊符合的全部

  ```css
  .bg-yellow ~ .bg-blue{
  	background: blue;
  }
  ```

## 虛擬類別(pseudo-class) :

[虛擬類別 - CSS | MDN (mozilla.org)](https://developer.mozilla.org/zh-TW/docs/Web/CSS/Pseudo-classes) 

這裡以常用的hover為例。直接加 :hover在.class name後面。

```css
.bg-yellow:hover{
	background: blue;
}
```

#### 虛擬元素(pseudo-element) :: {content:""}

[Pseudo-elements - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) 

加 ::before 跟 ::after 在.class name後面 ，

裡面要有content:" "，content內可以使用attr()來取得html檔案的東西。

```html
<div class="price" data-symbol="NTD" >
	1000
</div>
<div class="price" data-symbol="USD" >
	35
</div>
```

```css
.price::before{
	content: "$";
	color: darkgreen;
}
.price::after{
	content: attr(data-symbol);
}
```

## nth-child

```html
<div class="wrapper">
	<div class="l1">
		line 1
	</div>
	<div class="l2">
		line 2
	</div>
	<div class="l1">
		line 3
	</div>
	<div class="l2">
		line 4
	</div>
</div>
```

```css
.wrapper div:first-child{
	background: blue;
}

.wrapper div:nth-child(3){
	background: blue;
}

.wrapper div:last-child{
	background: blue;
}

.wrapper div:nth-child(odd){
	background: blue;
}

.wrapper div:nth-child(3n){
	background: blue;
}

.wrapper div:nth-child(4n-1){
	background: blue;
}
```

**注意!**

這樣等同於檢查.wrapper底下第二個元素class是否為 .l1 。不!所以沒有任何效果。

```css
.wrapper .l1:nth-child(2){
	background: blue;
}
```

## 權重 : 到底誰優先

一般狀況下簡單來說 id > class > tag 。例外: inline style 、!important。

會依照使用不同元素來計算權重，表示方法可用 0 - 0 - 0，第一個為id個數、依序為class、tag，左邊(較前面)的數字會先比，勝出的才會套用在樣式上。有兩個例外，inlinstyle指的是在html檔案裡tag中直接用< style >來設定樣式。最強的則是在.css設定中直接加上!important ，完勝!

>!important 优先级最高，但也会被权重高的important所覆盖
>
>行内样式总会覆盖外部样式表的任何样式(除了!important)
>
>单独使用一个选择器的时候，不能跨等级使css规则生效
>
>如果两个权重不同的选择器作用在同一元素上，权重值高的css规则生效
>
>如果两个相同权重的选择器作用在同一元素上：以后面出现的选择器为最后规则.
>
>权重相同时，与元素距离近的选择器生效
>
>作者：OBKoro1
>链接：https://juejin.cn/post/6844903608199151630
>来源：稀土掘金
>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

另外附上有趣圖片(來源:[強烈推薦收藏好物 - CSS Specificity (CSS 權重一覽) - MUKI space*](https://muki.tw/tech/css-specificity-document/) )

![外部網址](https://muki.tw/wordpress/wp-content/uploads/2015/07/CSS-Specificity-full.png)

## 各種裝飾

#### background

1. ##### 一般顏色設定
   
   - 直接打顏色 e.g. background:red
   - HEX色碼 e.g.  #EA0000
   - rgb( ,  , )
   - rgba( , , ,)最後多一個透明度
2. ##### 用圖片當背景url()
   
   - background-size :調整圖片size
     -  px 或%
     - contain 縮放視窗不改變比例
     - cover 會把該區塊都cover住，不改變比例，因此圖片可能會被裁剪。

```css
#box1{
	background: url("./wallpaper.png") no-repeat center center/*bottom right*/;
	/*background-size: 500px 300px;*/
	/*background-size: 100% 50%;*/
	/*background-size: cover;*/
	background-size: contain;
	height: 600px;
}
```

center、no-repeat這些設定是省略的打法。用瀏覽器dev-tool可以看到完整資訊。

```css
background-position-x: center;
background-position-y: center;
background-size: cover;
background-repeat-x: no-repeat;
background-repeat-y: no-repeat;
```

#### 框框 border 和 outline

outline是外框線(不會影響元素位置)

border是邊框線

border較常用，可以分別設定:

- border-radius
- border-top (bottom、right、left)

#### 我們之間的距離margin 和 padding

- margin : 該區塊外框和外面的距離

  通常瀏覽器body會預設加margin，因此加上把body margin 設為0。

- padding : content和該區塊外框的距離

### 文字相關

1. color
2. font-size
3. font-weight
4. font-family
5. line-spacing字距
6. line-height行高 :單位為em 或 px
7. text-align 水平位置
8. 垂直置中的方法
   1. 只有一行文字。將line-height設為該區塊的height的大小
   2. 不要設height和line-height，框會貼合文字，另外設定padding撐開框的大小。
9. word-break 例如設定break-word會用完整單字來分行。
10. white-space 例如設定nowrap為將文字顯示成一行。
11. overflow :
    1. hidden : 多了就不要了 ，另外設定text-overflow:ellipisis有多出的文字可以加上省略號...
    2. scroll : 加上滾輪
    3. auto 

#### 質感升級transition 

常用的方法是配合:hover。注意如果效果是會影響到其他元素的話會影響效能。

```css
#box1{
	border:5px solid lightblue;
	width: 100px;
	height: 100px;
	line-height: 100px;
	border-radius: 30px;
	text-align: center;
	transition: all 1s ;
}

#box1:hover{
	background: lightblue;
	color: white;
	cursor: pointer; /*鼠標*/
}
```

#### transform

輸入func像是scale(縮放)、rotate(旋轉)、translateX(水平移動)

- ##### 可搭配transition一起使用，

```css
.box {
	border:5px solid lightblue;
	width: 100px;
	height: 100px;
	margin: 100px;
	line-height: 100px;
	text-align: center;
	position: relative;
	transition: all 0.6s;
}

.box:hover{
	transform: scale(2);
	background: lightblue;
	color: white;
	cursor: pointer; /*鼠標*/
}
```

- ##### 或是要將物件放在畫面正中央

```css
.box {
	border:5px solid lightblue;
	width: 100px;
	height: 100px;
	line-height: 100px;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
```



## 定位position

#### static 和 relative

預設為static : 該物件本身就該在的位置，如果是relative就是相對原本static的位置進行移動。

```css
.box {
	background:lightblue;
	width: 100px;
	height: 100px;
	margin: 10px;
}
.box:nth-child(2){
	position: relative;
	top: 20px;
	left: 30px;
}
```

#### fixed 和 absolute

fixed是相對viewport作定位；aboluste找特定位置作定位(特定位置指的是往上找不是static的元素。

*用absolute之後該元素就會從需要被排列的元素中刪除，也就是說，他的下一個元素預設會排在他原本的位置。

```css
.box {
	background:lightblue;
	width: 300px;
	height: 100px;
	margin: 10px;
	position: relative;
}

.box-inner{
	position: absolute;
	top: 0px;
	right: 0px;
}
```

#### 誰在前面z-index

z-index 比較大的會排在上面。

#### sticky

原本是static，達到設定的條件(滾動到特定位置)後，就會固定在那裏。

```css
.box {
	background:lightblue;
	width: 300px;
	height: 100px;
	margin: 10px;
	position: relative;
}
/* 第二個item滑動到頂的時候就會一直在那裏 */
.box:nth-child(2){
	position: sticky;
	top: 0px;
	background: orange;
	z-index: 2;
}
```

## box model
![外部網址](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

對應設定是box-sizing，只有兩種可以選

(1)content-box[預設]

(2)border0box

預設的content box是以內容作為基準大小，因此若是設定為寬高為200px，又再設定padding:20px，整個div就會變成240px*240px，而非原本想要的200px。如果要確定大小正確，可以考慮設為border-box

#### display

- inline : span , a 。調寬高(會根據內容顯示)、上下邊距都沒用。
- block : div , h1 , p。調甚麼都可以 。
- inline-block : button ,  input , select..。綜合兩個優點，對外像inline可併排、對內向block可調各種屬性。
