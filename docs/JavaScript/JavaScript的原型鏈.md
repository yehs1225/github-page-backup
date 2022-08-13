# JavaScript的原型鏈

JS本身是沒有`class`這個關鍵字的動態語言，儘管在ES6時有提供該關鍵字，然而，其背後的設計其實是基於原型（prototype-based）的語言。

原型鏈簡易來說可以理解成（可以先看下面說明了解設計概念）：

因為每個物件都有自己的`prototype`，而每個物件又是建立在某物件之下（例如：最頂端一定是建立在global之下），那麼這些物件有些內容是可以共享的，有點像繼承的概念，要繼承就必須要讓每個物件的`prototype`有辦法相連，這時候就是用`__proto__`連接，當層層往上探究物件的`prototype`直到null時，就是原型鏈的頂端了。

```js
function Dog(name){
    this.name = name;
    this.color = 'black';
}
Dog.prototype = {color:'brown'}
var dog1 = new Dog('cama');
  
// dog1.__proto__ 會指向Dog.prototype
console.log(dog1.__proto__ )//{ color: 'brown' }
console.log(dog1.__proto__ === Dog.prototype) // true

// 那Dog.prototype.__proto__ 會指向Object.prototype
console.log(Dog.prototype.__proto__ )//[Object: null prototype] {}
console.log(Dog.prototype.__proto__ === Object.prototype) // true

// 那 Object.prototype.__proto__ 指向 null，也就是原型鍊的頂端
console.log(Object.prototype.__proto__) // null
```



## JavaScript的發明與設計

在1990年代網路瀏覽器開始盛行，原先在瀏覽器的操作不具備和使用者的互動能力，例如使用者提交表單時，不能先做檢查而是到了服務器時才查看內容，如此一來，有錯時又要再跳回頁面請使用者重新輸入，不僅體驗不好，也浪費了服務器的效能。於是工程師[Brendan Eich](https://brendaneich.com/)被託付設計新的語言，也就是JS。

當時的JS是設想被用來使瀏覽器與使用者可以有**簡單**互動的**網頁腳本語言**，因此希望這個語言不要被設計得太複雜。當時是1994年，正是物件導向程式盛行的時期（C++、JAVA），而JS也受到了影響，因此JS裡除了原型數值之外都是**物件（object）**。然而，是否要將這些語言所擁有的**繼承（inherit）**機制也加進來呢？

如果只是簡易腳本語言設計**繼承**的機制好像有點太過複雜了，但是，JS中都是**物件**的方式操作，必須有辦法將所有物件可以被串起來，因此還是設計了繼承的機制，但是，並非像JAVA等真的設計了**類別（class）**，但是使用了**new**這個指令。因為在C++和JAVA中使用class都會用到**構造函數（constructor）**，因此，在JS中做了個簡化的設計，**用構造函數作為物件（object）的原型（prototype）**，再對該函數使用new。

```c++
//C++
ClassName *object = new ClassName(param);
```

```JAVA
//JAVA
Foo foo = new Foo();
```

```javascript
//JavaScript
//以構造函數作為物件的原型
function Dog(name){
    this.name = name;//新增一instance
}
var dog1 = new Dog('cama');
console.log(dog1);//Dog {name:'cama'}
```

每次new的時候，因為構造函數內的this都會新生成一個物件，所以每次新增的instance（dog）都是不同物件，無法共享共有的屬性。

例如：

**在Dog中新增一屬性，並新增兩個instance**

```js
function Dog(name){
    this.name = name;
    this.color = 'black';
}
var dog1 = new Dog('cama');
var dog2 = new Dog('liuliu');
```

**現已有兩隻不同名字但有相同花色的狗，然而如果顏色被誤植，要做更改**

```js
dog1.color = 'brown';
console.log(dog2.color);//'black'
```

因為兩instance的顏色這個屬性是獨立的，所以更改一個並不會影響到其他的，然而這樣就無法共享資源，會造成浪費。因此JS以prototype屬性來解決這樣的問題。

## Prototype屬性

為構造函數加入prototype屬性，於是現在的規則是

- 不需要共用的屬性（e.g.name）直接放進構造函數
- 需要共用的屬性（e.g.color）放進該構造函數的prototype中

```js
function Dog(name){
    this.name = name;
}
Dog.prototype = {color:'brown'}
```

## Prototype Chain運作模式

Class是在ES6才出現的保留字，在這之前，如上所述我們需要將共同屬性放入`.prototype`中，而現在使用class後就將共同屬性放在constructor外就行了。下面也附上運作的原理。

#### ES6的Class

```js
class Dog{
    constructor(name){
        this.name = name;    
    }
    getName(){
        return this.name;
    }//共同屬性
    sayHello(){
        console.log("Hello ~ ",this.name);
    }//共同屬性
}
var d = new Dog('cama');
d.sayHello();
```

#### 在ES5前的運作方法

##### 設定`prototype` 

```js
function Dog(name){
    this.name = name;
    this.sayHello = function () {
    console.log(this.name);
}
////////////////////////////////////////
//這種寫法會造成每次new一個物件後，        //
//呼叫sayhello其實是兩個不同的function   //
////////////////////////////////////////    
function Dog(name){
    this.name = name;
}
Dog.prototype.getName = function(){
    return this.name;
}
Dog.prototype.sayHello = function(){
    console.log("Hello ~ ",this.name);
}
var d = new Dog('cama');
d.sayHello();
```

##### new 到底做了甚麼

```js
function Dog(name){
    this.name = name;
}
//新增共同屬性到prototype
Dog.prototype.getName = function(){
    return this.name;
}
//新增共同屬性到prototype
Dog.prototype.sayHello = function(){
    console.log("Hello ~ ",this.name);
}
function newDog(name){
    var obj = {};//create an instance
    Dog.call(obj,name);
    obj.__proto__ = Dog.prototype;//把instance跟Dog的prototype連在一起
    return obj; //return your DOG!
}
console.log(newDog('lulu'))
```

#### Inheritance繼承

```js
class Dog{
    constructor(name){
        this.name = name;    
    }
    getName(){
        return this.name;
    }
    sayHello(){
        console.log("Hello ~ ",this.name);
    }
}
class BlackDog extends Dog{
    woof(){
        console.log('woof~~',this.name);
    }
}

const d = new BlackDog('LiuLiu');
d.sayHello();
```

參考資料：

[Javascript继承机制的设计思想 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

[該來理解 JavaScript 的原型鍊了 (techbridge.cc)](https://blog.techbridge.cc/2017/04/22/javascript-prototype/)
