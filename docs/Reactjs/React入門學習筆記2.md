# React入門學習筆記2

此篇內容為學習書籍「從Hook開始，讓你的網頁React起來」之筆記。 詳細內容請參閱書籍博客來網址 https://www.books.com.tw/products/0010870186

最終成品：[臺灣好天氣-即時縣市天氣 (yehs1225.github.io)](https://yehs1225.github.io/know-weather-app/)

## 建立專案

1. HTML、CSS撰寫
2. 將語法改成JSX格式
3. 在input綁定onChange事件
4. 用useState讓React明白資料變動
5. 設定useState並替代變數
6. React元件拆分
   1. React元件命名是大寫駝峰
   2. 若單純回傳JSX，箭頭函式後直接回傳即可
7. 檔案拆分
   1. 在src/新增資料夾< component>
   2. 將React元件都新增成一個.js檔
      - js檔要匯入React套件`import React from 'react'`
      - 匯出檔案`export default <元件名稱>`
   3. 在App.js匯入Component

### React元件間的互動及資料傳遞

想要改動components中的元件，然而使用者輸入而造成的值變動是在App.js(App這個元件中)，因此需要將資料從App傳遞到components中的元件。

##### 透過props傳遞資料

元件間有"相對"的父、子元件。子元件會被父元件引用。

- 父曾透過prop傳遞資料

  ```
  //將資料透過html屬性的方式傳入component
  const ParentComponent=()=>(
      <ChildComponent firstName="Cama" lastName="Yeh"/>
  );
  ```

- 子層元件接收資料

  ```
  const ChildComponent (prop)=>
  {
      {firstName,lastName}=prop;
      ....
      return(
      ...
      {firstName}{lastName}
      );
  };
  //or 
  return(
      ...
      {prop.firstName} {prop.lastName}
  );
  //or
  const ChildComponent ({firstName,lastName})=>
  {..};
  ```

##### 子層元件修改父層元件資料

子不可直接修改父元件，因為父元件才是擁有資料的人。若要修改，可請父元件修改。

1. 先在父元件定義好修改資料的函式
2. 透過prop傳到子層
3. 在子層內呼叫父元素定義好的方法

### 使用React FontAwesome

- 安裝

  ```
  #算是把FontAwesome變成React元件的核心
  yarn add @fortawesome/fontawesome-svg-core  
  yarn add @fortawesome/react-fontawesome
  #將所有圖示分為三類regular、brands、solid
  yarn add @fortawesome/free-regular-svg-icons
  yarn add @fortawesome/free-brands-svg-icons
  yarn add @fortawesome/free-solid-svg-icons
  ```

- 在最上層元件(App.js)註冊FontAwesome工具

  ```
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {fab} from '@fortawesome/free-brands-svg-icons';
  import {fas} from '@fortawesome/free-solid-svg-icons';
  import {far} from '@fortawesome/free-regular-svg-icons'
  ```

- 在需要用到的地方使用React FontAwesome元件

  ```
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  ...
      <FontAwesomeIcon icon={['fas','angle-right']} className="fas fa-angle-right" />
  ...
  ```

### CSS in JS

Why? 

以前都是將css寫在一個或多個檔案再引入進來，這樣可能會因為重複命名class而造成樣式不如預期。

現今前端框架中，可以把各元件分開，每個不同功能的元件都是不同元件，不會互相干擾，CSS in JS 就如同HTML in JS 的JSX一樣（邏輯判斷這些也適用）。實務上會同時搭配兩種做法，如版型主題字體等會套用在整個網頁，若是針對個別元件的則撰寫在該元件樣式內。

#### 套件選擇：emotion

React中有許多套件能讓元件帶有獨立樣式，這裡選用emotion。

在開始之前，先修改全域用的CSS

1. normalize.css(眾多開發者共同整理為使各式瀏覽器可有一致樣式)

   - 安裝`npm install --save normalize.css`
   - 在src/index.js最上方`import 'normalize.css'`

2. 修改index.css(全域，使後續完成元件可撐滿整個畫面)

   ```
   html,
   body{
       margin:0;
       padding:0;
       height:100%;
       width:100%;
   }
   #root{
       height:100%;
       width:100%;
   }
   ```

在未使用emotion之前，先用傳統方法：定義CSS樣式並使用className

```
//App.js
function App() {
  return (
    <div className='container'>
      <div className='weather-card'>
        <h1>Weather</h1>
      </div>
    </div>
  );
}
/*App.css*/
.container{
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.weather-card{
  min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
}
```

##### 使用emotion的Styled Component

帶有樣式的元件就稱為Styled Component。

1. 安裝`$npm install --save @emotion/core @emotion/styled`

2. 在App.js載入emotion套件`import styled from '@emotion/styled';`(並移除原本的import App.css) 

3. 改寫元件樣式

   - 直接用「styled」接「.div」(或.button等)接「``；」

   ```
   const Component=styled.div`
   	//css樣式...
   `;
   ```

#### 使用emotion完成完整UI

```
import logo from './logo.svg';
import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
...
function App() {
  return (
    <Container>
		...
    </Container>
  );
}
export default App;
```

#### 在React中載入SVG圖示

圖示已放至./src/images中，create-react-app已經設定好環境，因此只需使用其提供的ReactComponent元件即可。

引入後作為元件使用（此做法是在create-react-app下才行，否則要在webpack中另外設定）。

要引入SVG圖片也可直接當作圖片匯入。

```
//App.js
import { ReactComponent as DayCloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
//use Component
<DayCloudy/>
```

##### 調整SVG樣式

直接用CSS選擇器選到對應SVG

```
const AirFlow = styled.div`
  display: flex;
  ...
  margin-bottom: 20px;
  svg{
    width:25px;
    height:auto;
    margin-right:30px;
  }
`;
```

##### 根據某一元件進行樣式調整

為原有的元件新增樣式，原本就有DayCloudyIcon這個元件

```
const NewComponent = styled(Component) ``;
const DayCloudy = styled(DayCloudyIcon)`
	/*CSS樣式*/
`;
```

##### 將props傳入styled components

和之前傳遞的方法一樣。透過接收不同變數可去設定不同CSS樣式。

### 用emotion作深色主題

1. 定義深色主題配色

2. 將配色當作props傳入各Style Component

3. 步驟2可使用Emotion提供的ThemeProvider

   - 安裝`$npm install @emotion/react @emotion/styled`
   - App.js載入並使用`import { ThemeProvider } from '@emotion/react';`

4. 套用主題色彩

   在每一個Styled Component都加入props傳進的theme，如此一來就不會動到App中的元件。

   ```
   const Location = styled.div`
     font-size: 28px;
     color: ${({ theme }) => theme.titleColor};
     margin-bottom: 20px;
   `;
   
   const Description = styled.div`
     font-size: 16px;
     color: ${({ theme }) => theme.textColor};
     margin-bottom: 30px;
   `;
   ```

5. 切換主題樣式

   說到狀態的改變，直覺就想到用useState。

   ```
   function App() {
     const [currentTheme,setCurrentTheme] = useState('light');
     return (
       <ThemeProvider theme={theme[currentTheme]}>
       ...
       )};
   ```

   ##### 快速了解元件狀態的React Dev Tools

   可在chrome、firefox安裝擴充套件。打開inspect後，右方有component可查看各元件，也可以在熟悉的elements先找到元素選取，react就會幫你找到對應的元件。另外，右側會友可以更改hooks的state。

### 串接API

##### 以useState將天氣資料顯示於畫面中

首先要查看回傳的API格式，接者使用useState來設定

```
const App=()=>{
  const [currentTheme,setCurrentTheme] = useState('light');
  const [currentWeather, setCurrentWeather] = useState({
    locationName: '臺北市',
    description: '多雲時晴',
    windSpeed: 1.1,
    temperature: 22.9,
    rainPossibility: 48.3,
    observationTime: '2020-12-12 22:10:00',
  });
```

接者以JSX帶入原本寫死的數值位置

```
const App=()=>{
...
return (
    <ThemeProvider theme={theme[currentTheme]}>
    <Container>
      <WeatherCard>
        <Location>{currentWeather.locationName}</Location>
        <Description>{currentWeather.description}</Description>
          ...
)};
```

##### 資料優化

- 氣溫不要小數點

  用`Math.round()`做四捨五入

- 時間格式目前為'2020-12-12 22:10:00'，希望僅顯示10:00。

  1. 瀏覽器原生的Intl（Internationalization API）

     可以針對日期、時間、數字(貨幣)等資料進行多語系處理呈現。修改後的程式碼如下

     ```
     //本來的樣子{currentWeather.observationTime}
     {new Intl.DateTimeFormat('zh-TW',{//放地區
         hour:'numeric',
         minute:'numeric',//希望數值呈現時和分就好
     }).format(new Date(currentWeather.observationTime))}
     {''}//因為JSX會自動去除最後的空格，因此想要有空格的話可以用此方法
     ```

     

  2. day.js

     方法1可以正常在FireFox及Chrome運作，然而safari就不支援使用`new Date('2020-12-12 22:10:00')`。因此用dayjs來處理跨瀏覽器的問題。

     1. 安裝並引入`import dayjs from 'dayjs';`
     2. 只需將使用new Date的地方改為dayjs => `.format(dayjs(currentWeather.observationTime))`

### 使用fetch拉取天氣觀測資料

##### fetch API的基本使用

首先還是要先觀察API格式，找到我們需要的資料位置。接著撰寫一段AJAX向中央氣象局拉取資料，這裡使用的是瀏覽器原生的fetch API來發送請求，一般使用fetch發送GET請求時，只需要帶入請求的網址像是`fetch(requestURL)`，***這個fetch就會是一個promise***，因此可用.then串連伺服器回傳的資料。

```
fetch('requestURL')//向該網站發送請求
	.then((response)=>response.json())//取得回傳資料並以JSON解析
	.then((data)=>console.log('data'))//取得解析後的JSON資料
```

##### 點擊按鈕時拉取資料						

事先定義好handleClick方法，並在要被觸發的元件上綁定onClick事件，被觸發時就呼叫handleClick。

```
const AUTHORIZATION_KEY='<...>';//對於這類不會變更的常數的慣用命名方式=>大寫_
const LOCATION_NAME='臺北';//先預設為固定的
//在const App中設定handleClick
const handeClick=()=>{
    fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?
    		Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}&parameterName=CITY`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log('data',data);
    });
};
//綁定
<Component onClick={handleClick}/>
```

##### 更新元件資料

把需要的部分內容取出來，並使用reduce搭配includes。更新setCurrentWeather。

```
const locationData = data.records.location[0];
const weatherElements = locationData.weatherElement.reduce(
	neededElements,item)=>{
        if(['WDSD','TEMP'].includes(item.elementName)){
            (neededElements[item.elementName]=item.elementValue;
        }
        return neededElements;
	},{}
);
//注意在使用setSomething時，會把舊有資料完全覆蓋aka所有資料不管有沒有更動都需要再寫一次。
setCurrentWeather({
    observationTime: locationData.time.obsTime,
    locationName: locationData.locationName,
    temperature: weatherElements.TEMP,
    windSpeed: weatherElements.WDSD,
    description: '多雲時晴',
    rainPossibility: 60,
});
```

##### 載入頁面時就請求資料useEffect

> 元件轉譯完後才會呼叫useEffect內的function

`useEffect(<didUpdate>,dependencies)`每一次轉譯後都會執行指定函式，而第二個參數是一個陣列，每次轉譯完後就會去確認陣列內的元素是否有改變，若無，就不進行useEffect的函式。在比較時，如果式傳入物件或函式的話，因為是參照不同地址，所以一定是不同的(會陷入不停運作的迴圈QQ)。

effect是指甚麼？

是side-effect的簡稱，指的是跟React本身無關的行為，像是發送API請求資料、手動更改DOM畫面等。手動更改DOM畫面指的是透過瀏覽器原生的API或第三方套件去操作DOM，而非直接對React元件內的state更改資料。

##### 產生Loading中的狀態

為了有好的使用者體驗，應該在資料還未抓取好時，呈現等待中的圖案!

1. 新增一個變數存放狀態

   這裡在useState中設定一個新的變數isLoading並預設為true。也可以自己獨立成一個State，但考慮通常與currentWeather是連動的，所以放一起。

2. Loading的時機

   - 一開始載入畫面

     在完成資料抓取後改回false

   - 使用者點重整到完成資料抓取

     開始抓之前設為true，抓完才設false

     ```
     const fetchCurrentWeather=()=>{
     	setCurrentWeather(
             {isLoading:true}
         )
     };
     ```

     **概念對，但執行上錯誤!**

     因為，之前說過setState會把所有資料都覆蓋過去，所以不能只設這一個參數，但全部又再打一次很麻煩(看起來也很多餘)，好在

     setSomething除了可以帶入物件外，還可以帶入函式，因此我們透過函式取回原先狀態(命名為prevState)再放回來。詳細作法是會將原先狀態放入函式中，將者以解構賦值將prevState再放回來。

     程式碼會變這樣：

##### 將Loading圖示放進來

1. 先import svg 圖檔，接者在< Refresh>這個Component中加入三元判斷式，決定要用哪個Icon。

2. 修改CSS樣式加上旋轉效果：定義樣式 > 用props改變欲作用的元件。

   ```
   //定義旋轉效果
   const Refresh = styled.div`
     position: absolute;
     right: 15px;
     bottom: 15px;
     font-size: 12px;
     display: inline-flex;
     align-items: flex-end;
     color: ${({ theme }) => theme.textColor};
     svg {
       margin-left: 10px;
       width: 15px;
       height: 15px;
       cursor: pointer;
       /* STEP 2：使用 rotate 動畫效果在 svg 圖示上 */
       animation: rotate infinite 1.5s linear;
       animation-duration: ${({ isLoading }) => (isLoading ? '1.5s' : '0s')};{/*0s代表不轉動*/}
     }
     /* STEP 1：定義旋轉的動畫效果，並取名為 rotate */
     @keyframes rotate {
       from {
         transform: rotate(360deg);
       }
       to {
         transform: rotate(0deg);
       }
     }
   `;
    <Component isLoading={currentWeather.isLoading}>
   ```

   

##### 用解構賦值整理程式碼

currentWeather.XXX出現許多次，可以把它變的精簡。

```
const {
    observationTime,
    locationName,
    description,
    windSpeed,
    temperature,
    rainPossibility,
    isLoading,
} = currentWeather;
```

##### 拉回多支API資料

同樣可使用prevState的技巧，避免資料遺失。

##### 讓fetchAPI跟Component脫鉤

1. 希望達到一併拉回資料再同步顯示
2. 可將該函式放到App之外

可以透過async function及promise達成。原先兩個抓取資料的函式都會去setSomething，現在則式改成fetch之後return promise，以便在日後的async function使用。使用await 及 promise.all等待兩個函式都完成`await pormise.all([fetchXX1(),fetchXX2()]);`，promise.all回傳的資料是陣列，可以用解構賦值直接取出。

先對初始載入作設定 => 在useEffect去呼叫fetch並setStatement

## Refactoring

- 在./src中新增view資料夾
- 建立最大版面元件的js
- 自定義hook
- 在./src中新增hooks資料夾
- 新增useSomething.js回傳的不是JSX而是[資料或方法]

## 表單處理與頁面間的切換

- ##### 在utils/helper.js中建立查詢符合API的名稱

- ##### 建立新頁面以做查詢用

​		在views/新增.js => WeatherSetting.js

- ##### 以條件轉譯來達成切換畫面

​		e.g.定義currentPage這個state

- ##### 子元件修改父元件資料

​		像之前說的，不能直接改，但可以在父元件先定義好修改的函式，用props傳給子元件，子元件再呼叫修改。

## React中的表單處理(Controlled v.s. Uncontrolled)

指的是資料有沒有受到React控制。一般像是< input  />這類的表單元素本身可保有自己的資料狀態，因此可透過querySelector選取得到值。用React時，也可以將表單內輸入的資料交給React處理，在使用者輸入時同時檢驗有效性及作畫面更新。如此將資料交由React處理就稱作Controlled Components，(aka. 受React控制的資料)。一般針對表單元素建議使用controlled，唯有type是file時，考量安全性，所以不可使用，必定是Uncontrolled。

**Controlled Components**：因為要讓React知道資料狀態，所以用useState的方法，並在表單元素上用**onChange**取得輸入的值，馬上更新到React 元件中。在input元素中利用value屬性帶入預設值。



## 在localStorage保存設定

基本用法

- 儲存`localStorage.setItem(keyName,keyValue);`
- 取得特定`localStorage.getItem(keyName);`
- 清除特定`localStorage.removeItem(keyName);`
- 清除`localStorage.clear();`

## 部署

1. 推上github

2. 在package.json中加入homepage欄位，裡面放github page網址 `"homepage":"https://<your-username>.github.io/<ur-project-name>"`

3. 安裝部署用的工具`gh-pages`

4. 設定gh-pages :

   ```
   //package.json
   {
       "scripts":{
           "predeploy":"npm run build",
           "deploy":"gh-pages -d build"
           //....
       }
   }
   ```

5. 部署!`npm run deploy`

6. 在github branch找到gh -pages並在設定中找到網址

#### PWA

1. ./src/index.js打開PWA的Service Worker (改成register)

2. 圖示 :

   1. 圖片存放在./public

   2. ./public/manifest.json(在此定義PWA相關設定，如下載的LOGO、顏色)

      ```
      {
        "short_name": "臺灣好天氣",//app name
        "name": "臺灣好天氣-即時縣市天氣",//app name
        "icons": [//different size for numerous devices
          {
            "src": "icon@192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "icon@512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "start_url": ".",//open url when user clicks
        "display": "standalone",//Do not display url in the top of screen
        "orientation": "portrait-primary",//display by vertical or horizontal
        "theme_color": "#1f2022",//color when it's loading
        "background_color": "#1f2022"//color when it's loading
      }
      ```

   3. IOS裝置要在Index.html多設定

      ```
      <!doctype html>
      <html lang="zh-Hant">
          <head>
              <meta charset="utf-8"/>
              <link rel="shortcut icon" href="/know-weather-app/icon@48.png"/>
              <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=1,minimum-scale=1,maximum-scale=1,shrink-to-fit=no"/>
              <meta name="theme-color" content="#1f2022"/>
              <link rel="manifest" href="/know-weather-app/manifest.json"/>
              <link rel="apple-touch-icon" href="/know-weather-app/icon@48.png"/>
              <link rel="apple-touch-icon" sizes="96x96" href="/know-weather-app/icon@96.png"/>
              <link rel="apple-touch-icon" sizes="144x144" href="/know-weather-app/icon@144.png"/>
              <link rel="apple-touch-icon" sizes="192x192" href="/know-weather-app/icon@192.png"/>
              <link rel="apple-touch-icon" sizes="512x512" href="/know-weather-app/icon@512.png"/>
              <link rel="apple-touch-startup-image" href="/know-weather-app/launch.png"/>
              <meta name="apple-mobile-web-app-title" content="臺灣好天氣"/>
              <meta name="apple-mobile-web-app-capable" content="yes"/>
              <meta name="apple-mobile-web-app-status-bar-style" content="#1f2022"/>
              <meta name="description" content="臺灣好天氣-即時縣市天氣"/>
              <title>臺灣好天氣-即時縣市天氣</title>
              <script defer="defer" src="/know-weather-app/static/js/main.941d228b.js"></script>
              <link href="/know-weather-app/static/css/main.2eacf0f1.css" rel="stylesheet">
          </head>
          <body>
              <noscript>You need to enable JavaScript to run this app.</noscript>
              <div id="root"></div>
          </body>
      </html>
      ```

   4. 部署!`npm run diploy`

      

## 未來學習方向

1. React完整觀念及舊的Class、生命週期等

   - React Getting Started
   - Codecademy Learn React.js

2. React router

   作為一個SPA(Single Page Application)，通常要處理的資料會有超多頁面，因此需要有「路由」概念，讓使用者可直接透過網址進到某一頁面。

   - React router : https://redux.js.org

3. Redux

   當專案變大，元件和頁面間的資料傳輸就更龐大，因此props傳遞資料的方法可能較不合適，而是需要一個資料的「中控中心」，讓所有元件都可到此取得資料。

   - Redux : https://redux.js.org

4. React Testing

   - React Testing Library : -https://testing-library.com/docs/react-testing-library/intro

5. PWA

   - ​	Geoloacation API : https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API@MDN
   - Progress Web Apps : https://web.dev/progressive-web-apps

