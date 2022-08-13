# CSS RWD切版練習

### Viewport 

使用者在網頁可以看見的區域，隨著裝置而不同

#### Setting The Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- width=device-width : 將畫面寬度設為使用者的螢幕大小。
- initial-scale=1.0 : 原始縮放等級為最初載入時的大小。

### Media Query

用@media設定當特定條件達成時，使用下方block的css設定。

```css
@media only screen and (max-width: 600px){
...
    [class *="col-"]{
        width:100%;
    }
    /*選取含..col-..的class*/
}
```

- max(min)-width : 設定大小，Desktop 768px > Tablet > 600px Phone
- orientation : portrait 或 landscape 螢幕寬大於高時執行。
- add a Breakpoint :  width:100% ，當視窗縮到一定比例就讓每個column佔整row。

### Design for Mobile first

這會讓網頁在小的裝置上呈現速度較快，因此我們應該設定最原始的樣貌是適用於手機的，而當螢幕寬度大於定值時有相應改變。

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

### Images

- #####  max-width property :

   be **reponsive**.必要時會縮小，但不會放大超過原本圖片大小。

```css
img {
  max-width: 100%;
  height: auto;
}
```

- ##### background-size
  
  - contain 會維持原先的圖片尺寸
  - 100% 100% 延伸至完全覆蓋
  - cover 維持原先尺寸完全覆蓋 (因此有些部分可能被切掉)
  
- ##### 根據螢幕大小更改圖片

  - 在css設定

  ```css
  /* For devices smaller than 400px: */
  body {
    background-image: url('img_smallflower.jpg');
  }
  
  /* For devices 400px and larger: */
  @media only screen and (min-device-width: 400px) {
    body {
      background-image: url('img_flowers.jpg');
    }
  }
  ```

  - ##### 在html設定< picture >(flexible)

  ```html
  <picture>
      <source srcset="small.jpg" media="(max-width:600px)">
      <source srcset="original.jpg">
      <img src="original.jpg"> <!--設定img是怕瀏覽器不支援picture-->
  </picture>
  ```

  