# JavaScript入門

## 邏輯運算

- && : and  
- || : or
- ! : not

##### 短路特性

**「false」 ,「 0 」, 「null」 ,「" "」 都是false**

| console.log() | result |
| ------------- | ------ |
| 3\|\|10       | 3      |
| false\|\| 10  | 10     |
| 3&&10         | 10     |
| 10&&3         | 3      |
| true&&3       | 3      |
| false&&3      | false  |



##### 位移運算子

| console.log() | result                                      |
| ------------- | ------------------------------------------- |
| 10 << 2       | 40 (*...0101 往左兩位變成 10100 => 32+8=40) |
| 10 >> 2       | 2(*...0101 往右兩位變成 ...0001 => 2)       |



##### 位元運算

- & : and  
- | : or
- ^ : xor
- ~ : not
- **A & 1 => 0 : A是偶數**
- **A & 1 => 1 : A是奇數**

| console.log() | result |
| ------------- | ------ |
| 2 & 6         | 2      |
| 2\|6          | 6      |
| 2^6           | 4      |
| ~3            | -4     |

#### ==與===

=== datatype 也要相等才行



## Primitive Value

> A data that is not an object and has no methods. All primitives are immutable, i.e. they cannot be altered.

共有7種原始值，這些值並非物件也沒有方法(method)去操作改變它。

1. string
2. number
3. bigint
4. boolean
5. undefined
6. symbol
7. null

**Examples show that primitive values are immutable.**

```
#Using a string method does not mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

#Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

#Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
```



## 記憶體位置

##### 指向原本的記憶體

```
function add(obj){
    obj.number++
    return 1
}
var a={
    number:10
}
add(a)
console.log(a)//{ number: 11 }
```

##### 用" = " 指向新的記憶體

```
function add(obj){
    obj={
        number:100
    }
}
var a={
    number:10
}
add(a)
console.log(a)//{ number: 10 }
```



## 常用的Function  

1. ##### Number

   Math.ceil()

   Math.floor()

   Math.random() : inclusive 0, not 1.

   Math.round() 

   number.tostring() : number to string or  "string"+" "

   parseInt() : string to int

   parseFloat((x).toFixed(2)) : string to float, and 2 decimal places

   

2. ##### String

   string.toUpperCase()

   string.toLowerCase()

   string.charCodeAt(index) : returns integer between 0 and 65535 representing UTF-16 unit at the given index.

   string.indexOf('the word you want to search') : find the word.

   string.replace("old word","new word") : only replace the first one. Use RegExp ( regular expression) : /old word/g   to replace all(g means globally).

   string.split(' ')

   string.trim() : remove the blank space

   string.length

   

3. ##### Array

​		arr.join('blank or any text') : join the array with  a specific text.

​		arr.map() : do something to every component in the array and **put it back**.		

```javascript
var arr = [1,2,3]
function double(x){
    return x*2
}
console.log(arr.map(double))//[2,4,6]

#anonymous function
console.log(arr.map(function(x){
    return x*2
}))//[2,4,6]

#use numerous map
console.log(arr.map(function(x){
    return x*-1
}).map(function(x){
    return x*2
})
)//[-2,-4,-6]
```

​		arr.filter() : filter every component in the array and **put it back**.

```javascript
var arr = [1,2,3,-6,-4,7]
console.log(arr.filter(function(x){
    return x>0
}))//[1,2,3,7]
```

​		arr.slice() : return a shallows **copy** of a position of an array into a new array object selected from 		start to end(end is not included)

​		p.s. start, end is the index of component in the array 

```javascript
var arr = [0,1,2,3,-3,-4,6]
console.log(arr.slice(3,5))
//[3,-3]
```

​		arr.splice() : **changes** the contents of an array by removing existing elements and/or adding new 		elements. 

```javascript
#add new word
var arr = ['Jan','March','April','June']
arr.splice(1,0,'Feb')
console.log(arr)
//[ 'Jan', 'Feb', 'March', 'April', 'June' ]
#replace word
var arr = ['Jan','March','April','June']
arr.splice(1,1,'Feb')
console.log(arr)
//[ 'Jan', 'Feb', 'April', 'June' ]

```

​		arr.sort()

```javascript
#Originally, sorted by string
var arr = [1,30,4,21]
arr.sort()
console.log(arr)
//[1,21,30,4]
#sorted by value
#-1,0,1 in a comparison function are used to tell the caller how the first value should be sorted in relation to the second one.
#0 : a == b
#1 : ba
#-1 : ab
var arr = [1,30,4,21]
arr.sort(function(a,b){
    if (a===b) return 0
    if (a > b) return 1
    return -1
})
console.log(arr)
//[1,4,21,30]
#or 
var arr = [1,30,4,21]
arr.sort(function(a,b){
    return a-b
})
console.log(arr)
//[1,4,21,30]
#ternary operator
var arr = [1,30,4,21]
arr.sort(function(a,b){
    return a>b?1:-1
})
console.log(arr)
//[1,4,21,30]
```