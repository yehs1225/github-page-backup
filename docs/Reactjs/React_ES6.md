# React_ES6

此篇內容：[React Tutorial (w3schools.com)](https://www.w3schools.com/react/default.asp)

## Class

class是function的一種，以class作為ketyword，開頭名稱通常為大寫，property被定義在其constructor方法(method)內。另外也可以自定義方法。

- method
- Inheritance : 
  - `class` < New class name> `extends` < Old class name> 
  - `super()` : 用來繼承舊的Class's property and method

```js
class Dog{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	show(){
		return( 'My dog name ' +this.name+', and it is '+this.age+' yrs old.');
	}
}	
const myDog = new Dog('Cama',3);
console.log(myDog.show());//My dog name Cama, and it is 3 yrs old.
//Inheritance
class BlackDog extends Dog{
	constructor(nickname,age,sex){
		super(nickname,age);
		this.sex = sex;
	}
	call(){
		return this.show()+', and it is '+this.sex+'.';
	}
}
const myBlackDog = new BlackDog('LiuLiu',4,'female');
console.log(myBlackDog.call());//My dog name LiuLiu, and it is 4 yrs old,, and it is female.
```

## Arrow function

讓使用者可用較簡潔的表示法。原始 : `function SayHi(){return "Hi"}` or `SayHi = function(){return "Hi";}`

- 去掉'function'加上=> : `SayHi = ()=>{return "Hi";}`

- 只有一個敘述可以去掉{}及return : `SayHi = ()=>"Hi";`

- ()內帶上參數 `SayHi = (name)=>"Hi " +name;`

- 只有一個參數可省略() `SayHi = name=>"Hi " +name;`

- `this` :一般func指的是呼叫它的物件(可能是window、btn等) ； arrow func指的是Header這個物件本身。 

  ```jsx
  class Header {
    constructor() {
      this.color = "Red";
    }
  //Regular function:
    changeColor = function() {
      document.getElementById("demo").innerHTML += this;
    }
  }
  //Arrow function:
    changeColor = () => {
      document.getElementById("demo").innerHTML += this;
    }
  }
  ```

## Variables

以前僅`var`，現在共有三種

- `var`  :  function scope. 
- `let`  :  block scope.(like loop)
- `const` : block scope and can't reassign.

## Array - map()

可以對陣列內的元素都進行func，並放進另一陣列中。

```js
const myArray = ['dog', 'cat', 'horse'];

const myList = myArray.map((item) => <p>{item}</p>)
```

## Destructuring

解構使得要拿出"必要的東西"變得較方便。

- 指定陣列內的值給變數 : `const [constName1,constName2,constName3] = definedConst;`
- 承上，但只要取幾項 : `const [,,constName] = definedConst;`

```js
const bag = ['bottle','wallet','books'];
const [drink,money,paper]=bag;
const [drink,,paper]=bag;
console.log(drink);//bottle
console.log(paper);//paper
```

- 在nested object取值 : 

  ```js
  const bag = {
  	bottle:'water',
  	wallet:{
  		cash:100,
  		card:'VISA',
  	},
  	book:'The remains of day'
  }
  
  myBag(bag);
  
  function myBag({ bottle, wallet: { cash } }) {
    console.log('I have ' + bottle + ' and ' + cash+ ' in my bag.');
  ```

- func的回傳值是陣列取回`const [c1,c2,..,c5] = <call func and it's return>;`

- 傳Object進func

  舊的做法是在func內用Object.XXX取得；可用`({XX_1,XX_2,...,XX_5}){..<just use XX_1 , not Object.XX1>..}`

## Spread Operator

可快速用`...`來複製部分或全部的物件或陣列。

- Combine 2 arrays or objects : `[...arr1,...arr2]`
- Get value from the array : `[first_item,sec_item,...rest_item] = definedArray`

## Modules

- Export

  1. default export : only one in a file.
  2. named export : 都需要先取名稱才可匯出

  匯出方法大概有幾種

  - `export const/let constName = 100;` `const a = 1; export default a;`
  - `export function funcName(){...};`；`export default function{...}`(沒有名稱)
  - `export {const1,obj1,obj2};`可用`as`修改輸出的名稱 => `export {obj1 as CoolName};` ；`export default {const1,obj1,obj2};`
  - 兩者可併用，但default就是只能一個。

- Import

  1. default 匯入並取名

     `import Name from '</location.js>;'`

  2. named

     - 匯入要使用的套件`import {Name1,Name2} from '</location.js>;' `
     - `*` 匯入要使用的套件在一物件上`import * as OneObject from '</location.js>;' `，使用時就要用`OneObject.XX`的方式。
     - `as` =>匯入並重新命名`import {Name1 as NewName} from '</location.js>;' ` 

  3. 同時匯入default及named

     `import DefaultModule , * as NamedModule from '</location.js>;'`

  

## Ternary Operator

簡化 if / else

`x > 10 ?10:x; ` 如果x>10就是10否則不更改x值。
