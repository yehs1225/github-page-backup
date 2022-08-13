# JavaScript-this

在JS中的`this`是函式中的關鍵字（keyword），且和其他語言有些許的不同、在不同模式中（strict/non-strict）也有不同。多數時候`this`的值（value）是被**呼叫的方式**所決定。

## Global context

在全域的執行環境中，`this`指的是全域物件（global object）。

*在網頁瀏覽器中，window object = global object

```javascript
console.log(this===window);//true;

a=66;
console.log(this.a);//66

this.b = "hello";
console.log(window.b);//"hello"
console.log(b);//"hello"
```

## Functional context

在函式中，`this`的值由呼叫方式決定。

1. 在非嚴格模式中（可以未宣告就使用變數），並且在此`this`的值不是在呼叫時設定，因此`this`被預設為全域變數
   
   ```js
   function f1(){
     return this;
   }
   //in a browser
   f1()===window;//true
   //in nodejs
   f1()===globaThis;//true
   ```

2. 在嚴格模式，會變成undefined
   
   ```js
   function f2(){
      'use strict';//strict mode
      return this;
   }
   f2()===undefined;//true
   ```

3. 在函式中設定`this`的值可以使用`call`或`apply`，兩者主要不同在於傳送的Argument不同。
   
    **call：argument list**
   
   ```js
   //call
   function Product(name, price) {
    this.name = name;
    this.price = price;
   }
   
   function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
   }
   
   function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
   }
   
   const cheese = new Food('feta', 5);
   const fun = new Toy('robot', 40);
   ```
   
   **apply：single array of argument**
   
   ```js
   //apply
   const numbers = [5, 6, 2, 3, 7];
   
   const max = Math.max.apply(null, numbers);
   
   console.log(max);
   // expected output: 7
   
   const min = Math.min.apply(null, numbers);
   
   console.log(min);
   // expected output: 2
   ```
   
   **Use `call` and `apply` in function**
   
   ```js
   function add(c, d) {
    return this.a + this.b + c + d;
   }
   var o = {a: 1, b: 3};
   add.call(o, 5, 7); // 16
   add.apply(o, [10, 20]); // 34
   ```

4. 用`bind`設定
   
   在ES5中加入的。`bind`會建立一個和指定函數相同作用域、相同內容的新函數，但傳入函數的argument會**永久**作用於原始的函數，且之後的新function也會被第一個使用`bind`時的arguments設定所影響。
   
   ```js
   function f() {
     return this.a;
   }
   
   var g = f.bind({a: 'azerty'});
   console.log(g()); // azerty
   
   var h = g.bind({a: 'yoo'}); // bind only works once!
   console.log(h()); // azerty
   
   var o = {a: 37, f: f, g: g, h: h};
   console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
   ```

5. Arrow function箭頭函式    
   
   在箭頭函式中，`this`的值是在被定義時就決定了（也就是說會維持在原先的enclosing lexical context），並不會因為呼叫的方式而有所改變，就算使用`call`、`apply`、`bind`也一樣。
   
   ```js
   // Call as a method of an object
   var obj = {func: foo};
   console.log(obj.func() === globalObject); // true
   
   // Attempt to set this using call
   console.log(foo.call(obj) === globalObject); // true
   
   // Attempt to set this using bind
   foo = foo.bind(obj);
   console.log(foo() === globalObject); // true
   ```
   
   - 設定一object，裡面設定method 稱為bar，bar會回傳一個function，而此function會回傳`this`的值。因為此function是箭頭函式，因此它的`this`值在建立時就被綁定在它的enclosing function內。  
     
     ```js
     var obj = {
         bar: function() {
           var x = (() => this);
           return x;
         }
       };    
     ```
     
        **呼叫作為obj的method的bar，並以fn接收回傳的function**
     
     ```js
     var fn = obj.bar();
     console.log(fn()); //[function:bar]    
     ```
     
         **僅以fn2指向bar這個method而沒有呼叫**
     
     ```js
     var fn2 = obj.bar;
     console.log(fn2()());//global object        
     ```

## Class context

因為class也算是一種函式，所以行為類似，僅有些許不同。

在class的constructor中，`this`是一般物件（regular object）。所有non-static的method（[method]([Method - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Method)) 分為：Instance Methods及 [Static Methods](https://developer.mozilla.org/en-US/docs/Glossary/Static_method)）都會被加入`this`這個prototype。而static method則是屬於class本身的一種屬性（property）。

```js
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}//non-static method
  second(){}//non-static method
  static third(){}
}

new Example(); // ['constructor', 'first', 'second']
```

## 補充：strict mode

因為JS是很自由的語言，因此不嚴謹的寫法是被允許的，而在ES5中新增了strict mode，使用方法為在js檔案的**最前面**加入`use strict`，總的來說就是可以讓你的程式更嚴謹也更安全。在嚴格模式中以下情況是不被允許的：

- 未宣告變數就使用
  
  ```js
  x=3.14;
  //objects are variables too
  x={one:10,two:20}
  ```

- 使用delete刪除變數或函式
  
  ```js
  let x = 3.14;
  function y(a,b){};
  delete x;
  delete y;
  ```

- 重複變數
  
  ```js
  function y(a,b){};
  function y(a,b){};
  ```

- 使用8進位值、字
  
  ```js
  let x = 0101;
  let x = "\010";
  ```

- Writing to a read-only （get-only）property is not allowed:
  
  ```js
  const obj = {};
  Object.defineProperty(obj, "x", {value:0, writable:false});
  
  obj.x = 3.14;            // This will cause an error
  const obj = {};
  Object.defineProperty(obj, "x", {value:0, writable:false});
  
  obj.x = 3.14;            // This will cause an erorr
  ```

- 使用with

- eval、arguments不可作為變數名稱

- 為ES6留的保留字

- **this不可指向全域**

reference：

[JavaScript "use strict" (w3schools.com)](https://www.w3schools.com/js/js_strict.asp)

[[JavaScript] Javascript 的嚴格模式 (Strict Mode)：不讓你錯 - itsems_frontend - Medium](https://medium.com/itsems-frontend/javascript-strict-mode-d0a3aa74458b)
