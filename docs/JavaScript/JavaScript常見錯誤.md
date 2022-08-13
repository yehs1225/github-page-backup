# JavaScript常見錯誤

## 資料型態

#### primitive type

1. null
2. undefined
3. string
4. number
5. boolean
6. symbol(ES6)

**其他都是object(array,function,date...)**，但是typeof在判斷上會有些困難。如知名的bug : `typeof(null)==object `，一個方法是使用`Object.prototype.toString.call(null)`來檢測其值。primitive type 不能改變，如下:

```js
var str = 'hello'
str.toUpperCase // 這行不會改變str本身而是回傳值，因此會用變數去接
var newStr = str.toUpperCase
```

## Scope作用域

作用域在升級JS有提過，這裡簡單複習幾點:

1. var 的作用域為function內，非{}
	```js
	var a = 'global'
	function test(){
    console.log(a)
    var a = 'local'
	}
	test() //undefined
	
	//======等於=======
	
	var a = 'global'
	function test(){
	    var a
	    console.log(a)
	    a = 'local'
	}
	test() //undefined

2. 若沒宣告var，則會自動在全域中宣告
3. let、const的作用域在{}內
4. const為定義常數，不可再更改值


## 賦值或指向記憶體位置？

#### 用 = 要小心~

用var1 = var2的話就是指向記憶體位置

```js
var obj1={
    number:10
}
var obj2 = obj1 //point to the address of obj1
console.log(obj1,obj2)//{ number: 10 } { number: 10 }
obj2.number = 20
console.log(obj1,obj2)//{ number: 20 } { number: 20 }
obj2 = {
    number:30
}
console.log(obj1,obj2)//{ number: 20 } { number: 30 }
```

## Hoisting(提升)

**變數宣告**會被拉到前面去，稱為提升。注意，賦值=不會被提升

```js
test()//undefined
function test(){
    console.log(n)
}
var n=10
```

本例會輸出undefined而非error，因為等同於下方Code

```js
var n
test()//undefined
function test(){
    console.log(n)
}
n=10
```

**不會被提升的另一例子**

```js
test()
var test = function(){
    console.log(123)
}
```

輸出TypeError：test is not a function，因為其等同於

```js
var test
test()
test = function(){
    console.log(123)
}
```
### 容易搞錯的優先順序

#### var的作用域在function內

#### function 優先度較高

```js
var a = 'global'
function test(){
    console.log(a)  
    function a(){

    }
    var a = 'local'
}
test()//[Function:a]

//======等於=======

var a = 'global'
function test(){
    console.log(a)  
    var a = 'local'
    function a(){

    }
}
test()//[Function:a]

//======等於=======

var a = 'global'
function test(){
    function a(){
    }
    console.log(a) 
    var a = 'local'
}
test()//[Function:a]
```

#### 後面宣告蓋過前面

```js
var a = 'global'
function test(){
    console.log(a)  
    a()
    function a(){
        console.log(1)
    }
    function a(){
        console.log(2)
    }
    var a = 'local'
}
test
//[Function: a]
//2
```

#### 小測驗

```js
var a = 1;
function test(){
  console.log('1.', a);
  var a = 7;
  console.log('2.', a);
  a++;
  var a;
  inner();
  console.log('4.', a);
  function inner(){
    console.log('3.', a);
    a = 30;
    b = 200;
  }
}
test();
console.log('5.', a);
a = 70;
console.log('6.', a);
console.log('7.', b);
// 1. undefined
// 2. 7
// 3. 8
// 4. 30
// 5. 1
// 6. 70
// 7. 200
```
#### Closure閉包

> 閉包（Closure）是函式以及該函式被宣告時所在的作用域環境（lexical environment）的組合。-MDN
>

在func內return func。

```js
function test(){
    var a = 10;
    function inner(){
        a++
        console.log(a);
    }
    return inner
}
var func = test()
func()//11
func()//12
```

##### 常見用法

將運算過的值存起來，減少重複運算的時間。

下面程式碼只會執行運算四次（也就是印出"calculate字樣"），最後兩次因為閉包的關係，已被儲存，可以直接使用。

```js
function complex(num){
    //complex calculate
    console.log("calculate");
    return num*num;
}

function cache(func){
    var ans ={};
    return function(num){
        if(ans[num]){
            return ans[num];   
        }   
        ans[num] = func(num);
        return ans[num];
    } 
}

const cachedComplex = cache(complex);
console.log(complex(30));
console.log(complex(30));
console.log(complex(30));
console.log(cachedComplex(30));
console.log(cachedComplex(30));
console.log(cachedComplex(30));
```

### IIFE

Immediately Invoked Functions Expressions，立刻執行function。

主要是用來避免汙染到全域變數。

1. 無法在外層呼叫
2. 變數只在function內作用

##### 防止別人亂改變數

```js
function createWallet(initMoney){
    var money = initMoney;
    return {
        add:function(num){
            money+=num;
        },
        deduct:function(num){
            if(num>=10){money-=10;}
            else{money-=num;}
        },
        getMoney:()=>{
            return money;
        }
    }
}

var myWallet = createWallet(99);
myWallet.add(1);
console.log(myWallet.getMoney());
```

