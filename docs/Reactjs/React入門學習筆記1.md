# React入門學習筆記1

此篇內容為學習書籍「從Hook開始，讓你的網頁React起來」之筆記。 詳細內容請參閱書籍博客來網址 https://www.books.com.tw/products/0010870186

最終成品：[臺灣好天氣-即時縣市天氣 (yehs1225.github.io)](https://yehs1225.github.io/know-weather-app/)

## React基礎語法

1. Template literals / Template strings樣板字面值 此語法可在字串中帶入js的表達式(expression)，使用上只需要將源字串內容用反引號「`」 包住，要帶入表達式的地方用「${}」帶入即可。

> 表達式(expression) 輸入程式並執行時會得到回傳值。例如 a=3，會直接看到3。
>
> 陳述式(statements) 例如if、for等。

```
const myPhone = 'iPhone8';
console.log(`I want to buy the ${myPhone}`);
//calculation
const price = 15000;
console.log(`${myPhone} is ${price*1.5 }3 years ago.`);
console.log(`${myPhone} is ${price} now..`);
```

  在template中是可以換行的，因此若需要在js中放入html元素或區塊，也會常用到

```
const buttonGroup =`
<div class="btn-group-toggle"data-toggle=button>
  <label class ="btn btn-secondary active">
    <input type = "checkbox" checked autocomplete="off">Checked
  </label>
</div>
`; 
document.body.innerHTML = buttonGroup;
```

1. arrow function箭頭函式 在ES6中更簡便來定義函式的語法。傳統上的js函式

   ```
   function showPrice(price){
       return `The phone is ${price} now`;
   }
   console.log(showPrice(35900));
   ```

   - 基本使用

   ```
   const showPrice=(price) =>{
       return `The phone is ${price} now`;
   }
   console.log(showPrice(35900));
   ```

   - 只有一個參數可省略()

   ```
   const showPrice=price=>{
   return `The phone is ${price} now`;
   }
   ```

   - 直接回傳值時，可以省略箭頭後的`return`及大括號{}

   ```
   const showPrice=price=>`The phone is ${price} now`;
   ```

   - 若回傳物件時，就必須加上()，讓js知道大括號內是一個物件

   ```
   const showPrice=()=>({
   name :'iPhone8',
   price:'22000',
   brand:'Apple',
   merchants:['Studio A','pchome','shopee'],
   });
   console.log(showPrice());
   ```

2. 解構賦值和物件屬性名稱縮寫

   1. **解構賦值destructuring assignment：幫助開發者使用簡短的語法，從物件和陣列中取出所需資料，並建立成新的變數。**

   ```
   //含有多種資料的物件
   const product ={
     name:'iphone8',
     description:'best phone',
     brand:'Apple',
     offers:{
       priceCurrency:'TWD',
       price:'22900'
     }
   };
   //一般從物件取出屬性值並建立新變數的方法
   const name=product.name;
   const description = product.description
   console.log(name);
   //使用解構賦值
   const {name,brand,battery}=product;
   console.log(name);
   console.log(brand);
   console.log(battery);//battery 不在product物件中，因此是undefined
   ```

   - 取出物件中的物件

   ```
   const {
     offers:{price},
   }=product;
   
   console.log(price);
   console.log(offers);//Reference error : offers is not defined
   //依序取出
   const{offers}=product;
   const{price}=offers;
   ```

   - 陣列解構

   ```
   const Sales=['Samsung','Iphone','Huawei','HTC','OPPO'];
   const [best,second,third] = Sales;//best = Sales[0];.....
   console.log(second);
   ```

     

   1. **物件屬性名稱縮寫shorthand property names：用更精簡的方式定義物件。**	

   ```
   const deviceName = 'iPhone8';
   const price = 15000;
   const storage = '64G';
   //本來應該要加上後面那段，但因為變數名稱相同所以不用
   const IPhone = {
     deviceName,//:deviceName
     price,//:price
     storage,//:storege
   };
   console.log(IPhone.price);
   ```

1. 展開語法spread syntax和其餘語法rest syntax

   

2. 模組的匯出與匯入

## useState與JSX的使用

[3-1 Counter Started Template (codepen.io)](https://codepen.io/yehs1225/pen/BamBpgd)

計數器共有三個主要元素：上箭頭、數字及下箭頭

用原始的JS我們以querySelector選到各個元素，並且用addEventListener監聽各元素，對數字加減後再放回。

```
//1.use querySelector to select "arrow" in html
const upElement = document.querySelector('.chevron-up');
const downElement = document.querySelector('.chevron-down');
//2.use querySelector to select "number" in html
const numberElement = document.querySelector('.number');
//3.click event
upElement.addEventListener('click',(e)=>{
  //4.get current number
  const currentNumber = Number(numberElement.textContent);
  //5.add number and put it back 
numberElement.textContent = currentNumber+1;
})

downElement.addEventListener('click',(e)=>{
  //4.get current number
  const currentNumber = Number(numberElement.textContent);
  //5.add number and put it back 
numberElement.textContent = currentNumber-1;
})
```

### 為甚麼需要JSX

上面所使用的方法看起來非常方便容易理解，但是這是因為目前的元素還很少，如果元素極多需要一個一個選取監聽，就會非常麻煩。而JSX等同於可以直接**把HTML放進JS中去操作**，不需要先選取再替換，而是直接將變數放入JS變數中。

*在codepen中用react 需於setting中Preprocessor設定babel及External Script 設定react、react-dom

##### 用JSX寫HELLO　WORLD

```
<div id="root"></div>
ReactDOM.render(
  <h1>Hello,world! </h1>,
  document.getElementById('root')
  );
```

其中`<h1>Hello,world! </h1>,`這一段就是JSX

##### 在JSX帶入變數與表達式

```
const word = 'React';
ReactDOM.render(
  <h1>Hello,{word}</h1>,
  document.getElementById('root')
  );
const phone = 'iPhone8';
const currentPrice = 20000;
const price = (currentPrice,discount)=>currentPrice*discount;
ReactDOM.render(
  <h1>The price of ${phone} is ${price(currentPrice,0.85)} now</h1>,
  document.getElementById('root')
  );
```

#### 用JSX改寫計數器

```
ReactDOM.render(
  <div className="container">
    <div className="chevron chevron-up"></div>
    <div className="number">256</div>
    <div className="chevron chevron-down"></div>
  </div>,
  document.getElementById('root')
 );
```

既然是在JS中也可以將HTML的部分定義為const

```
const counter = (  
  <div className="container">
    <div className="chevron chevron-up"/> //只有標籤內的內容的話可以直接用/>關閉
    <div className="number">256</div>
    <div className="chevron chevron-down"/>
  </div>);
ReactDOM.render(
  counter,
  document.getElementById('root')
 );
```

##### 使用inline-style

```
const shadow={
  boxShadow:'rgb(20,76,128) 0px 0px 10px 10px',
  padding:20,//px 可省略
};
const counter = (  
  <div className="container" style={shadow}>
    <div className="chevron chevron-up"/>
    <div className="number">256</div>
    <div className="chevron chevron-down"/>
  </div>);
ReactDOM.render(
  counter,
  document.getElementById('root')
 );
//或是直接將style要的內容放進去
const counter = (  
  <div className="container" style={{
  boxShadow:'rgb(20,76,128) 0px 0px 10px 10px',
  padding:20,//px 可省略
}}>
    <div className="chevron chevron-up"/>
    <div className="number">256</div>
    <div className="chevron chevron-down"/>
  </div>);
```

### 建立第一個React元件

除了把JSX當成一個JS變數傳遞外，更常見的是將JSX內容包裝成React元件。

這裡用函是件出來的React元件又稱為Function Component，之後介紹的React Hooks也只能在這之中使用。在未有Hooks前，常以class建立元件，稱作Class Component。

```
const Counter = () =>(
    <div className="container">
      <div className="chevron chevron-up"/>
      <div className="number">256</div>
      <div className="chevron chevron-down"/>
    </div>
  );
//把剛建立好的React元件當作html標籤放進去即可
ReactDOM.render(<Counter/>,document.getElementById('root'));
```

##### 為甚麼使用元件?

當我們想要有很多個計數器時，可以複製同樣的HTML程式碼，但因為原本的JS都是用querySelector選到DOM元素在對不同元素去做監聽及改變數值，因此重複三次HTML的話會選到重複的元素，當然，可以透過修改querySelector來達成目的，但相對麻煩。使用React元件的話，只要重複標籤`<Counter/>`三次即可。

```
const Counter = () =>(
    <div className="container" style={{
     margin:'0 30px', 
    }}>
      <div className="chevron chevron-up"/>
      <div className="number">256</div>
      <div className="chevron chevron-down"/>
    </div>
  );
ReactDOM.render(
  <div style={{display:'flex',justifycontent:'space-between'}}>
    <Counter/>
    <Counter/>
    <Counter/>
   </div>,document.getElementById('root'));
```

##### React元件與HTML元素的命名規則與慣例

- 元件名稱以「大寫駝峰式」命名。例如：剛剛用的Counter。否則會當成一般html元素處理並跳出錯誤訊息。
- HTML屬性、CSS樣式或一般函式則遵守JS命名方式，以「小寫駝峰式」命名。例如：className、backgroundColor。

### 在React中使用變數

可以看到在console中變數number已被更新，但是由於沒有在進行render所以畫面並不會改變。

```
const Counter = () =>{
  {/*因為要宣告變數，所以改回使用{}並加上return*/}
  let number = 256;
return(
    <div className="container" style={{
     margin:'0 30px', 
    }}>
      <div className="chevron chevron-up" onClick={()=>{
        number=number+1;
        console.log(`current count is${number}`)
      }}/>
      <div className="number">{number}</div>
      <div className="chevron chevron-down"/>
    </div>
  );};
```

### React元件中的資料-useState的使用

**state狀態**指的是會連動導致畫面改變的**資料data**習慣上被稱作**狀態state**。

在React Hooks中的慣例是，**只要開頭為\*use\*的函式，就表示他是一個Hooks**

1. 從React物件中取出useState方法
2. 從useState中可取得一個「變數(count)」和「改變變數的方法(setCount)」，useState中的參數是count的預設值。
3. 在上箭頭加入onClick並用setCount方法將變數+1
4. 在下箭頭也用同樣設定

```
//從React物件中取出useState方法
const{useState}=React;

const Counter = () =>{
  {/*從useState中可取得一個「變數(count)」和「改變變數的方法(setCount)」，useState中的參數是count的預設值。*/}
  const[count,setCount]=useState(345);
return(
    <div className="container" style={{
     margin:'0 30px', 
    }}>
      <div className="chevron chevron-up" onClick={()=>setCount(count+1)}/>
      <div className="number">{count}</div>
      <div className="chevron chevron-down"onClick={()=>setCount(count-1)}/>
    </div>
  );};

ReactDOM.render(
  <div style={{display:'flex',justifycontent:'space-between'}}>
    <Counter/>
    <Counter/>
    <Counter/>
   </div>,document.getElementById('root'));
```

##### useState做了甚麼?

- 有兩種呼叫方法

  ```
  React.useState();
  const{useState}=React;//用解構的方式取得
  ```

- 使用方法

  呼叫後會回傳陣列，通常用解構的方式取得。

  ```
  const arrayReturnFromUseState=useState('<預設資料值>');
  //想要監控的資料
  const count = arrayReturnFromUseState[0];
  //修改該資料的方法
  const setCount = arrayReturnFromUseState[1];
  //解構方式
  const[count,setCount]=useState('<預設資料值>');
  ```

##### **總結**

用useState這個方法時，變數count及改變變數的方法setCount兩者的配合缺一不可。

React是以**資料驅動畫面**，他並不會把沒變的地方更動，也就是說以後我們不需要想怎麼改變畫面，只需要著重在如何更動資料。



## 條件轉譯conditional rendering

我們想要做到「計數器起始為5，最大值為10(超過10隱藏上箭頭)、最小值為0(隱藏下箭頭)」該如何做?

一般來說隱藏元素有幾種常見做法，一是讓DOM中整個元素都不要出來；二是新增CSS屬性將其隱藏(例如display:none、visibility:hidden)。

如果要嚴格控制使用者行為，就直接移除DOM元素；若被使用者手動更改不影響的話可用更改CSS，有較好的效能及體驗。

### 不要轉譯特定的DOM元素

我們可能會想用if判斷(陳述式)來做，然而JSX僅能以表達式呈現，因此用JS的邏輯運算子`&&` `||`實現。

**||** 簡單來說，當第一個值為false時取用後面的值

```
const a=0||dog; // dog
const b=1111||2222;// 1111
const c= true||'Not me';//true
const d=false||'It"s me';//It"s me
```

**&&** 簡單來說，當第一個值為true時取用後面的值

```
const a=0&&dog; // 0
const b=1111&&2222;// 2222
const c= true&&'It"s me';//It"s me
const d=false&&'Not me';//false
```

因此，可用邏輯運算子來達成

```
const Counter = () =>{
  {/*從useState中可取得一個「變數(count)」和「改變變數的方法(setCount)」，useState中的參數是count的預設值。*/}
  const[count,setCount]=useState(5);
return(
    <div className="container" style={{
     margin:'0 30px', 
    }}>
    {
      count<10&&(<div className="chevron chevron-up" onClick={()=>setCount(count+1)}/>)
    }
      
      <div className="number">{count}</div>
    {
      count>0&&(<div className="chevron chevron-down"onClick={()=>setCount(count-1)}/>)
    }    
    </div>
  );};
```

### 用CSS隱藏HTML元素

有兩種屬性display:none、visibility:hidden，差別在於前者會移除原先該元素在網頁上所佔的位置，畫面上的元素會跳動，因此，這裡使用後者。

- 用inline-style

  ```
    return (
      <div className="container">
          <div
            className="chevron chevron-up"
            style={{
              visibility:count>=10&&'hidden',
            }}
            onClick={() => setCount(count + 1)}
          />
        <div className="number">{count}</div>
          <div
            className="chevron chevron-down"
            style={{
              visibility:count<=0&&'hidden',
          }}
            onClick={() => setCount(count - 1)}
          />
      </div>
    );
  ```

- 在CSS中新增一樣式

  ```
  .visibility-hidden{
    visibility:hidden;
  }
  ```

  ```
    return (
      <div className="container">
          <div
            className={`chevron chevron-up ${count >=10&&'visibility-hidden'}`}
            onClick={() => setCount(count + 1)}
          />
        <div className="number">{count}</div>
          <div
            className={`chevron chevron-down ${count <=0&&'visibility-hidden'}`}
            onClick={() => setCount(count - 1)}
          />
      </div>
    );
  ```

## 事件處理器的重構

開發程式時，先專注於功能的實作，等可正常運作後，再將程式碼做整理，此動作一般稱為重構refactoring。主要用來減少後續維護上的困難，因為會刪除不必要的變數或重複的邏輯運算等，增加可讀性。以計數器為例，可以做以下處理：

1. #### 將事件處理邏輯從JSX抽離

   ```
   const Counter = () => {
     const [count, setCount] = useState(5);
     const handleIncrement =()=>setCount(count+1);
     const handleDecrement =()=>setCount(count-1);
     return (
       <div className="container">
           <div
             className={`chevron chevron-up ${count >=10&&'visibility-hidden'}`}
             onClick={handleIncrement}
           />
         <div className="number">{count}</div>
           <div
             className={`chevron chevron-down ${count <=0&&'visibility-hidden'}`}
             onClick={handleDecrement}
           />
       </div>
     );
   };
   ```

2. #### 不重複同樣的程式碼

   `handleIncrement`和`handleDecrement`很像，可以包在一起`handleClick`。

   ```
   const Counter = () => {
     const [count, setCount] = useState(5);
     const handleClick=(type)=>{
       if(type==='increment'){
         setCount(count+1);
       }
       if(type==='decrement'){
         setCount(count-1);
       }
     }
     return (
       <div className="container">
           <div
             className={`chevron chevron-up ${count >=10&&'visibility-hidden'}`}
             onClick={()=>handleClick('increment')}
             {/*error : onClick{handleClick('increment')}JS執行到這時會直接被執行，因此會變成無窮迴圈。改成包在一個函式中*/}
           />
         <div className="number">{count}</div>
           <div
             className={`chevron chevron-down ${count <=0&&'visibility-hidden'}`}
             onClick={()=>handleClick('decrement')}
           />
       </div>
     );
   };
   ```

   - 用三元判斷式簡化

   ```
   const handleClick=(type)=>{
       setCount(type==='increment'?count+1:count-1)
   }
   ```

   - 讓函式執行後回傳一個函式

     上面說過用`onClick{handleClick('increment')}`會出現迴圈，其實可以改寫，同樣讓handleClick被直接執行，但是handleClick執行後會回傳另一個函式，此函式才是使用者在點擊時會執行到的

     ```
     const handleClick=(type)=>{
         return()=>
         {
             setCount(type==='increment'?count+1:count-1) 
         }
     }
     //箭頭函式上的語法簡化
     const handleClick=(type)=>()=>
     	setCount(type==='increment'?count+1:count-1); 
     ```

   ## 迴圈的使用

   像前面提過的，可以直接貼上多個`<Counter/>`標籤，但是因為JSX最外層僅能有一個元素，所以可用一組`<div>`包起來。若要用迴圈的方式產生，因為for是statements而非expression，執行時不會有回傳值，因此不能放到JSX中的{}執行。最常用的方法是使用陣列的map方法，因為它有回傳值。

   1. ##### 先產生帶有多個元素的陣列

      ```
      //有很多方法，這裡用Array.from
      const counters=Array.from({length:8});//[undefined,undefined,...,undefined]
      ```

   2. ##### 在JSX中將此陣列用map方法，並且每次回傳< Counter/>元素

      ```
      ReactDOM.render(
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap", minWidth:160}}>
          {counters.map(()=>(
          <Counter/>))
          }
        </div>, document.getElementById("root"));
      ```

   ## JSX元素只能有一個最外元素

   1. 用html元素包住。例如`<div> </div>`

   2. 用React Fragment。`<React.Fragment></React.Fragment>`

      用這個方法在看html元素時會自動省略；若用地一種方法就會出現空的`<div>`。

      這方法可用**`<> </>`**取代!!!!就是這麼簡潔XD

   ## React Hooks不可這麼用

   以use開頭的幾乎都是hook!

   不能在**條件式conditions**、**迴圈loops**、**嵌套函式nested functions**中呼叫Hook方法。

   因為React元件(例如< Counter/>)在每次轉譯或更新畫面時，都會呼叫產生這個元件的函式(Counter() )，而在React Hooks 中會去紀錄這些Hooks在函式中被呼叫的順序，以確保資料能夠被互相對應。若將Hooks放入條件句中，便會破壞這樣的呼叫順序。

   錯誤範例

   ```
   const Counter=()=>{
       if(isValidCounter<=10){
           const[count,setCount]=useState();
       }
   }
   ```

## 建立專案前作業

1. 安裝node.js (以node-v查看版本確認有安裝成功)

2. 可在VScode中使用終端機

3. npx create-react-app #建立react資料夾

   在 v4 版本下面這個才可建立PWA

   ```
   npx create-react-app <my-app> --template cra-template-pwa
   ```

4. npm start #啟動React專案

資料夾的基本已經設定好，以下介紹主要檔案

- public/

  主要放靜態檔案，也就是不需要再經過任何前處理(preprocess)或編譯(compile)。例如這裡有index.html，內有`<div id="root"></div>`主要就是讓React知道要把內容轉譯在哪個div。

- src/index.js

  內建有引用React、ReactDOM 及ReactDOM.render、document.getElementById

- src/app.js

  主要編輯的檔案，它就是一個React元件

- src/app.css

  會套用在app.js