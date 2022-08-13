# 升級JavaScript

## module模組化

將個別功能區分開來，好處在於

(1)在多處被使用的功能，不用重複再寫一次

(2)要更動特定功能時，不會改到其他地方。

nodejs中有許多寫好的

[模組]: https://nodejs.org/api/

可供使用，以下以os這個模組實作，使用OS.platform()來查詢電腦的作業系統。使用**require**呼叫os這個模組 ，並存於變數os，便可直接使用。

```javascript
var os = require('os')
console.log(os.platform())
```

除了使用nodejs提供的模組，也可以自己寫好模組輸出並引用。

### 輸出自己的模組

e.g.以myModule.js寫自己的模組功能，並在index.js呼叫使用。

1. #### 輸出方法一 : **module.exports**

```javascript
#myModule.js
function double(n)
{
	return n*2
}
module.exports = double
```

```javascript
#index.js
var double = require('./myModule.js')
console.log(double)
console.log(double(3))
//[Function:double]
//6
```

#####  當要輸出的function不只一個

```javascript
#myModule.js
function double(n)
{
	return n*2
}
function triple(n)
{
	return n*3
}

var obj = {
	double:double,
	triple:triple
}
module.exports = obj
```

```javascript
var myModule = require('./myModule.js')
console.log(myModule)
console.log(myModule.double(2))
console.log(myModule.triple(2))
//{ double: [Function: double], triple: [Function: triple] }
//4
//6
```

##### 此方法可以輸出任意資料型態

```javascript
module.exports = 123 
module.exports = '123'
module.exports = [1,2,3]
#這樣僅會輸出最後一行，在此僅用來表示可輸出任意型態
```

#### 	2.輸出方法二:**exports.名稱 = 某function**

```javascript
#myModule.js
function double(n)
{
	return n*2
}
function triple(n)
{
	return n*3
}

exports.double = double
exports.triple = triple
#可以有多行，輸出型態為物件
```

```javascript
var myModule = require('./myModule.js')
console.log(myModule)
console.log(myModule.double(2))
console.log(myModule.triple(2))
```



## NPM(Node Package Manager)

管理套件的工具，最常用的是可以從網路上下載別人寫好的package。

##### npm install

`$npm install <package>  `

安裝套件，以

[left-pad]: https://www.npmjs.com/package/left-pad

為例，首先可以`$npm -v`先確認自己有沒有安裝好npm及其版本，接著直接以`$npm install left-pad`安裝。安裝完畢後，如果是在此資料夾內第一次安裝package，會出現三個新的資料夾     

1. node_modules : 之後新下載的packages也都會存放在裡面，可以看到裡面多了一個left-pad。
2. package.json :此檔案紀錄你的專案使用了哪些packages及其版本。由於所有npm套件都可以從網路上下載，若直接將node_modules裡的套件都放在雲端供人下載，因檔案較大下載時間較久，所以實務上並不會將其放在雲端。要告訴別人你這個專案使用了哪些package，**只需要將package.json、package-lock.json放上去即可，使用npm install可以直接下載該專案所需的所有套件**。
3. package-lock.json:為甚麼又有一個多了lock的檔案呢?這裡記載的是你所下載的套件及其所依賴的套件，包含各種詳細訊息(版本、下載地址)，主要有以下兩個作用:
   - 當npm install下載該專案所需套件時，可以提升下載速度(因為有詳細記錄套件資訊)
   - 下載時鎖定特定版本(因為安裝預設為最新版，然而可能會不相容)

之後可以在Index.js裡使用該套件。

```javascript
#index.js
var leftPad = require('left-pad')
console.log(leftPad(123,10,'0'))
//0000000123
```

##### npm scripts

在專案內執行**npm init**可以建立關於此專案的相關訊息，訊息會儲存在package.json裡面，其中scripts這個區域可以加入想要執行的檔案，例如"start":"node index.js", 之後便可以在終端機直接以`$npm run start`來執行index.js。

## yarn

除了npm外，Facebook也開發了新的Package Manager叫做yarn，功能大致相同，但下載速度較快，也解決了一些npm原有的問題。

[Home | Yarn - Package Manager (yarnpkg.com)](https://yarnpkg.com/)

透過npm install -g yarn 安裝，若需要管理員權限，在前面加上sudo (in Linux)。

使用上若是之前新下載專案要安裝所有套件是用npm install，yarn的部分則是直接打yarn 就可以了。以之前的舉例的專案只安裝left-pad來說，yarn只需要0.34s而npm則是0.576s 。

npm install 則用 yarn add代替，其他大部分都相同。

## 測試

**jset**是Facebook出的一款幫助JavaScript寫測試的軟體。unit test單元測試。

##### 安裝

首先在專案裡安裝jest

```
yarn add --dev jest
```

##### 使用

在測試檔內的用法如下(官網範例):

```javascript
const sum = require('./sum'); //引入寫好的模組
test('adds 1 + 2 to equal 3', () => { //描述模組作用
  expect(sum(1, 2)).toBe(3);//使用函數、輸入/預期輸出
});
```

##### 命名

假設現在要測試寫在index.js裡的function，則建立一個index.test.js做為測試檔(加上.test的命名規則是約定成俗的!) 

```javascript
#index.js
function repeat(str,times)
{
	var result =''
	for (var i=0; i<times; i++)
	{
		result+=str
	}
	return result
}

module.exports = repeat
```

```javascript
#index.test.js
var repeat = require('./index.js')
describe('測試repeat',()=>{ //用describe包起來不是必要的，但可以看起來比較清楚。
	test('a重複五次應等於aaaaa',()=>{
	expect(repeat('a',5)).toBe('aaaaa')
	})
	test('abc重複一次應等於abc',()=>{
		expect(repeat('abc',1)).toBe('abc')
	})
	test('""重複十次應等於""',()=>{
		expect(repeat('',10)).toBe('')
	})	
})
```

##### 有四種方法可執行jest測試

1. 在package.json中的scripts裡修改成"test":"jest" 

   //npm run test

   //會執行所有為.test的測試檔

2. 在package.json中的scripts裡修改成"test":"jest index.test.js"

   // 會執行index.test.js測試檔

3. 在package.json中的scripts裡修改成"start":"jest index.test.js" 

   //像之前一樣npm run start的用法

4. 在terminal執行 npx jest index.test.js(較新的npm版本才有npx指令)

   //因為jest僅安裝在專案底下，因此不能在terminal直接使用jest 要加上npx。

   

## TDD(Test Driven Development)

測試驅動開發，一般邏輯會先做出函式在進行測試，TDD則是先完成測試檔，在進行函式開發。

也就是把前一段落的流程倒過來!先將想好的edge case加入.test，再撰寫主程式，便可以確保該程式可以符合預期結果，不會有例外。

## ES6

ES6 (= ES2015)是一個標準規範ECMAScript 的縮寫+版本，JS就是根據此編寫而成。此為涵蓋全部新增功能，其他可參照

[ES6語法]: https://github.com/DrkSephy/es6-cheatsheet

### 基本變動

#### 宣告變數的新選擇

1. const

   constant常數，宣告後就不能再更動。**不需要變動的東西盡量使用const**。

   ```javascript
   #這樣就是不行的!
   const b=10
   b=20
   console.log(b)
   
   
   #這樣是可以變更的!
   #因為這樣是儲存該物件的記憶體位置在b，因此可以透過該記憶體位置去變更儲存的值。
   const b = {
   	number: 10
   }
   b.number=20
   console.log(b)
   ```

2. let

   和var主要差異在於作用域(scope)不同，在js中，var的作用域為fuction內，而let則是{}內，以下面程式碼說明:

   ```javascript
   #var 作用於function內，因此第二個console會失敗
   function test(){
   	
   	if(true){
   		var a = 10				
   	}	
   	console.log(a)
   }
   test()
   console.log(a)
   
   #let 作用於{}內，因此兩個console會失敗
   ```

註（Scope）：

1. var 的作用域為function內，非{}
2. 若沒宣告var，則會自動在全域中宣告
3. let、const的作用域在{}內

#### Template literals

再也不需要字串拼接，可讀性變高!主要影響有以下兩個:

1. 多行字串

   ```javascript
   #要輸出
   //
   //second line
   //third line
   #ES5以前
   var str =''+'\n'+
   'second line'+'\n'+
   'third line'
   console.log(str)
   #ES6
   var str =`
   second line
   third line`
   console.log(str)
   
   ```

   

2. 字串+變數拼接

   ```javascript
   #要輸出
   //hello, Wendy now is Sat Oct 02 2021 18:35:41 GMT+0800 (Taipei Standard Time)
   #ES5以前
   function sayHi(name){
   	console.log('hello, ' + name + '! now is ' +new Date())
   }
   sayHi('Wendy')
   #ES6
   function sayHi(name){
   	console.log(`hello ${name} now is ${new Date()}`)
   }
   sayHi('Wendy')
   ```

#### Destructuring解構

```javascript
#ES5以前
const arr = [1,2,3,4]

var first = arr[0]
var second = arr[1]
var third = arr[2]
var fourth = arr[3]

console.log(second,third)

#ES6
const arr = [1,2,3,4]

var [first,second,third,fourth]=arr

console.log(second,third)
```

```javascript
#ES5以前
const obj={
	name: 'wendy',
	age:21,
	address:'Taiwan'
}

var name = obj.name
var age = obj.age

console.log(name,age)

#ES6
const obj={
	name: 'wendy',
	age:21,
	address:'Taiwan'
}
//名稱一定要對到原本的!
var {name,age,address}=obj

console.log(name,age)
```

```javascript
#ES6
const obj={
	name: 'wendy',
	age:21,
	address:'Taiwan',
	father:{
		name:'Jack',
		age:55
	}
}

var {father:{name}}=obj

console.log(name)
//Jack

var {father}=obj

console.log(father)
//{ name: 'Jack', age: 55 }
```

```javascript
#ES5以前
function test(obj){
	console.log(obj.a)
}

test({
	a:1,
	b:2
})

#ES6
function test({a,b}){
	console.log(a)
}
```

#### Spread Operator

可以用在陣列或物件。用法如下:

```javascript
#array
var arr = [1,2]
var arr2 = [3,4,5,arr]
console.log(arr2)
//[3,4,5,[1,2]]

var arr = [1,2]
var arr2 = [3,4,5,...arr]
console.log(arr2)
//[3,4,5,1,2]
```

```javascript
#object
var obj1 ={
	a:1,
	b:2
}

var obj2={
	obj1,
	c:3
}
console.log(obj2)
//{ obj1: { a: 1, b: 2 }, c: 3 }

var obj1 ={
	a:1,
	b:2
}

var obj2={
	...obj1,
	c:3
}
console.log(obj2)
//{ a: 1, b: 2, c: 3 }
```



##### 搞清楚是"複製"還是"指向記憶體位置"

```javascript
#指向記憶體位置
var arr = [1,2]
var arr2 = arr
console.log(arr === arr2) //true

#複製
var arr = [1,2]
var arr2 = [...arr]
console.log(arr === arr2) //false
```

##### Rest Parameters 反向展開

同樣可以用在陣列或物件，還有function。

```javascript
#在array 或 object
var arr = [1,2,3,4,5]
var [a,b,...rest] = arr 
console.log(rest)
//[ 3, 4, 5 ]

#function
function add(a,b){
	return a+b
}
console.log(add(1,2))//3
//等同於
function add(...args){
	console.log(args)
	return args[0]+args[1]
}

console.log(add(1,2))
//等同於
function add(a,...args){
	console.log(args)
	return a+args[0]
}

console.log(add(1,2))
```

##### default parameter加上預設值

可以用在陣列或物件的解構，還有function。

```javascript
#解構
const obj = {
	a:1
}
const{a=123,b='hi'} = obj
console.log(a,b)//1 hi

#function
function repeat(str = 'hello', times = 5){
	return str.repeat(times)
}
//abcabc
//abcabcabcabcabc
//hellohellohellohellohello
```



##### Arrow Function

```javascript
const test = function(n){
    return n
}
#可以省略function 改成 =>
const test = (n) => {
    return n
}
#若只有一個參數 可以省略()
const test = n => {
    return n
}
```

目前最大的差別如下，可讀性較高較簡潔

```javascript
var arr = [1,2,3,4,5]
console.log(
	arr
		.filter(function(value){
			return value > 1
		})
		.map(function(value){
			return value*2
		})
)

console.log(
	arr 
	.filter(value => value > 1)
	.map(value => value * 2)
)
```

##### Import & Export

ES6新增功能，與ES5做對照。主程式index.js，函式檔utils.js。

```javascript
#index.js
#ES5
//method 1
var add = require('./utils')
console.log(add(1,2))
//method 2
var utils = require('./utils')
console.log(utils.add(1,2))
```

```javascript
#utils.js
#ES5
function add(a,b){
    return a+b
}
//method 1
module.exports = add
//method 2
exports.add = add
```

```javascript
#index.js
#ES6
//method 1 : 使用import {} from ''
import {add,PI} from './utils'
console.log(add(1,2))
//method 2
import {addFunction,PI} from './utils' //{}內要對應輸出名稱，e.g.addFuction
console.log(addFunction(1,2))

import {addFunction as a,PI} from './utils' //這裡也可以用as
console.log(addFunction(1,2))
//method 3 : 使用import * from ''，一次引入全部
import * as utils from '.utils' 
//method 4 :export default function add()，使用 import add 引入，不需要加大括號
import add from './utils'
console.log(add(1,2))
```

```javascript
#utils.js
#ES6
//method 1 : 直接在欲輸出東西前加上export
export function add(a,b){
    return a+b
}
export const PI = 3.14

//method 2 : 最後放export{}把想輸出東西放入
function add(a,b){
    return a+b
}
const PI = 3.14
export{
	add as addFunction,//如果不用取別名，as ... 可以省略
    PI
}

//method 4 :export default function add()，使用 import add 引入，不需要加大括號
export default function add(a,b){
    return a+b
}
```

### Babel

新的語法(例如ES6)可以經由Babel轉換為舊版瀏覽器可相容的語法(e.g.ES5)。有許多

[用法]: https://babeljs.io/docs/en/babel-node.html

，在這裡練習使用`$npx babel-node`這個指令(不用於開發，速度太慢)，開發可參照網站指示。

安裝步驟 : 

1. 安裝必要套件：`$npm install --save-dev @babel/core @babel/node @babel/preset-env`

2. 新增 .babelrc

3. 填入內容，告訴 babel 要用這個 preset：

   {

    "presets": ["@babel/preset-env"]

   }

最後使用 `$npx babel-node index.js` 即可