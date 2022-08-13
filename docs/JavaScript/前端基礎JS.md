# 前端基礎JS

## DOM

Document Object Model 由W3C定義網頁工作者(例如設計瀏覽器的工程師)遵守以方便使用網路的人統一規格，不會一團亂! DOM指的是將HTML(document)中的內容(文字圖片等)都定義成物件(object)，並以樹狀結構呈現。
![外部網址](https://www.w3schools.com/js/pic_htmltree.gif)

## JS與瀏覽器溝通

#### 選擇元素

```html
const element = document.~~~~()
```

- document.getElementsByTagName
- document.getElementsByClassName
- document.getElementById
- document.querySelector : 像CSS一樣的選擇方式，但僅會回傳匹配的第一個物件
- document.querySelectorAll : 回傳所有匹配物件

#### 改變元素的

##### css 

```html
<!-- script通常放body最下面，因為這樣瀏覽器才有讀完網頁資料，才能正確選取 -->
....
<script>
	element.style.~~~ = '...';
</script>
```

##### class

因為每次都單獨改一個元素會很雜亂，因此我們直接改變class並設定CSS檔案中該class的內容。

```html
<div id='block' class='main'>
    hello
</div>
<script>
	const element = document.querySelector('#block')
	element.classList.add('active')  //幫它新增class
    element.classList.remove('main') //移除它的class
    element.classList.toggle('main') //開關:有(沒有)該class會變沒有(有)
</script>
```

##### 內容

- element.innerText
- element.innerHTML
- element.outerHTML

```html
<div id='block' class="main">
    hello
</div>
<!-- innerHTML -->

hello
<!-- outerHTML -->
<div id="block" class="main active">
hello
</div>
```

### 修改元素

- element.appendchild()

- element.removechild()

- document.createElement()

  ```html
  <div id='block'>
    ha!
    <a>hello</a> 
  </div>
  <script>
    const element = document.querySelector('#block')
    element.removeChild(document.querySelector('a'))
    const item = document.createElement('div')
    element.appendChild(item).append('bye')
  </script>
  //ha!
  //bye
  ```

  ## EventListener

  ref:[重新認識 JavaScript: Day 15 隱藏在 "事件" 之中的秘密 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天 (ithome.com.tw)](https://ithelp.ithome.com.tw/articles/10192015)

  有三個參數 : 事件名稱、callback function 、捕獲和冒泡機制的轉換:boolean值(預設為false) 
  
  當監聽的事件發生時，瀏覽器會去執行addEventListener註冊的Event Handler(EventListen)，也就是我們所指定的function。
  
  
  
  ```html
  <script>
  //anonymous function
  element.addEventListener('click',function(){
  ...
  })
  //callback function
  element.addEventListener('push',onClick)
  function onClick(){
      alert('click')
  }
  </script>
  ```

  ### event(e)

  e會傳入瀏覽器帶給你的資訊，多是關於偵測到的位置、設定等等。

  ### 表單事件處理

  onSubmit 加上提交功能。

  preventDefault 阻止瀏覽器預設行為，例如在表單中就是阻止表單送出、阻止連結跳轉。

  ```javascript
  //阻止表單送出
  const element = document.querySelector('.login-form')
  element.addEventListener('submit',function(e){
  e.preventDefault()
  })
  //不讓使用者輸入特定字元
  const element = document.querySelector('input[name=username]')
  element.addEventListener('keypress',function(e){
      if(e.key==='e'){
          e.preventDefault()
      }
      console.log(e.key)
  })
  //不讓連結跳轉
  const element = document.querySelector('a')
  element.addEventListener('click',function(e){
    e.preventDefault()
  })
  ```
  
  ### DOM事件傳遞機制
  
  共三種階段:Capture Phase(捕獲) -> Target Phase -> Bubbling Phase(冒泡)
  
  ![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
  
  ```html
  <!-- 點擊最裡層btn時會由層層捕獲再層層冒泡 -->
  <body>
    <div class="outer">
      <div class="inner">
        <button class="btn">Click me</button>
      </div>
    </div>
    <script>
      addEvent('.outer')
      addEvent('.inner')
      addEvent('.btn')
  
      function addEvent(className){
        document.querySelector(className)
          .addEventListener('click',function(e){
            console.log(className,'bubble')
          },false)//false代表冒泡階段(預設值)
        document.querySelector(className)
          .addEventListener('click',function(e){
            console.log(className,'capture')
          },true)//true代表捕獲階段
      } 
    </script>
  </body>
  ```
  
  **e.preventDefault**
  
  在window呼叫，就會一直傳遞下去，所以window裡面的東西都會被設定為preventDefault
  
  ```javascript
  window.addEventListener('click',function(e){
    e.preventDefault()
    console.log('e')
  })
  ```
  
  **stopPropagation : 停止傳遞**
  
  ```javascript
  document.querySelector('.btn')
  	.addEventListener('click',function(e){
  	e.stopPropagation()
  })
  ```
  
  **stopImmediatePropagation : 立刻阻止當前所有傳遞**
  
  一個元素可以加上多個EventListener，這時這幾個listener就在同一個階層(雖然程式碼中click2在click1後面)，原先的stopPropagation並不會阻止到另一個的觸發行為，可改用stopImmediatePropagation。
  
  ```javascript
  document.querySelector('.btn')
      .addEventListener('click',function(e){
      e.stopImmediatePropagation()
      console.log('.btn click1')
  })
  
  document.querySelector('.btn')
      .addEventListener('click',function(e){
      e.stopPropagation()
      console.log('.btn click2')
  })
  ```
  
  **容易搞錯的機制問題**
  
  html裡有三個botton
  
  ```html
  <div class="outer">
  	<button class="btn">1</button>
  	<button class="btn">2</button>
  	<button class="btn">3</button>
  </div>
  ```
  
  - 想要點每個btn都可以跳出alert
  
  
  使用querySelector**All**，但是回傳類似陣列的東西，因此不能直接加上listener。改用另一種形式。
  
  ```javascript
    document.querySelectorAll('.btn')
      .addEventListener('click',function(){
      alert(1)
    })
    //正確型式
    const elements = document.querySelectorAll('.btn')
    for(var i=0; i<elements.length; i++){
      elements[i].addEventListener('click',function(){
        alert(i)
      })
    }
  ```
  
  - 想要跳出來的是正確的i值(點 1就是1)
  
  
  但觸發click function時是迴圈已經跑完跑到elements.length時。通常要存資訊的話，不會用文字，會新增一個屬性去存。(新增的自定義資料屬性通常用data開頭)
  
  因此修改html
  
  ```html
  <div class="outer">
  	<button class="btn" data-value='1'>1</button>
  	<button class="btn" data-value='2'>2</button>
  	<button class="btn" data-value='3'>3</button>
  </div>
  ```
  
  JS則改成取出屬性
  
  ```javascript
  const elements = document.querySelectorAll('.btn')
  for(var i=0; i<elements.length; i++){
    elements[i].addEventListener('click',function(e){
      alert(e.target.getAttribute('data-value'))
    })
  }
  ```
  
  - 想要讓使用者新增按鈕
  
  
  可成功新增btn但是點擊無alert，因為程式只會執行一次，在一開始載入時就已經在elements加入btn1~3的listener，其他btn沒有。因此需要下個功能來幫後來新增的btn也能加入listener。
  
  ```html
  <div class="outer">
    <button class="add-btn">add</button>
    <button class="btn" data-value='1'>1</button>
    <button class="btn" data-value='2'>2</button>
    <button class="btn" data-value='3'>3</button>
  </div>
  <script>
    let num = 4
    const elements = document.querySelectorAll('.btn')
    for(var i=0; i<elements.length; i++){
      elements[i].addEventListener('click',function(e){
        alert(e.target.getAttribute('data-value'))
      })}
    document.querySelector('.add-btn')
      .addEventListener('click',function(){
      const btn = document.createElement('button')
      btn.setAttribute('data-value',num)
      btn.innerText = num
      num++
      document.querySelector('.outer').appendChild(btn)
    })
  </script>
  ```
  
  **event delegation(代理)**
  
  因為事件都會冒泡，所以我們可以將EventListener 加在parent身上，再去判斷裡面選到的child是不是我們有興趣的，例如這裡的.btn (child)在.outer(parent)之下，但outer是一個div所以點擊整個頁面都會選到，但我們只想要點btn時才觸發，因此加上if判斷是否屬於.btn。
  
  ​	
  
  ```html
  <div class="outer">
    <button class="add-btn">add</button>
    <button class="btn" data-value='1'>1</button>
    <button class="btn" data-value='2'>2</button>
    <button class="btn" data-value='3'>3</button>
  </div>
  <script>
    let num = 4
      document.querySelector('.add-btn')
        .addEventListener('click',function(){
        const btn = document.createElement('button')
        btn.setAttribute('data-value',num)
        btn.classList.add('btn')
        btn.innerText = num
        num++
        document.querySelector('.outer').appendChild(btn)
      })
      document.querySelector('.outer').addEventListener('click',function(e){
        if(e.target.classList.contains('btn')){
          alert(e.target.getAttribute('data-value'))  
        }
      })
  </script>
  ```
  
  

### 小練習 : 簡易亂碼產生器

```Html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>簡易亂碼產生器</title>
</head>
<body>
  <div class="outer">
    <div><label><input type="checkbox" name="english" data-value="qwertyuiopasdfghjklzxcvbnm">英文</label></div>
    <div><label><input type="checkbox" name="number" data-value="0123456789">數字</label></div>
    <div><label><input type="checkbox" name="symbol" data-value="~!@#$%^&*()">符號</label></div>
    <div>
      <button class="btn-generate">產生</button>
    </div>
    <div class="result">
      
    </div>
  </div>
  <script>
    document.querySelector(".btn-generate").addEventListener('click',function(e){
      let char = ''
      const elements = document.querySelectorAll('input[type=checkbox]')
      for (let i=0; i<elements.length; i++){
        if(elements[i].checked){
          char += elements[i].getAttribute('data-value')
        }
      }
      let result =''
      for (let i=0; i<10; i++){
        const number = Math.floor(Math.random() *　char.length)
        result += char[number]
      }
      if(char===''){
        alert("please check at least one.")
        e.preventDefault()
      }else{
        document.querySelector('.result').innerText=result
      }
    })
  </script>
</body>
</html>
```

### 小練習 : 動態通訊錄

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>簡易亂碼產生器</title>
</head>
<body>
  <div class="outer">
    <div>
      <button class="add-btn">add</button>
    </div>
    <div class="contacts">
      <div class="row">
        姓名<input name="name">
        電話<input name="phone">
        <button class="del-btn">delete</button>
      </div>
    </div>
  </div>
  <script>
    document.querySelector('.add-btn').addEventListener('click',function(){
        const div = document.createElement('div')
        div.classList.add('row')
        div.innerHTML = `姓名<input name="name">
        電話<input name="phone">
        <button class="del-btn">delete</button>`
        document.querySelector('.contacts').appendChild(div)
    })
    document.querySelector('.contacts').addEventListener('click',function(e){
        if(e.target.classList.contains('del-btn')){
          e.target.parentElement.remove()
        }
    })
  </script>
</body>
</html>
```

