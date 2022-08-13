# Function

function基本上是將一些操作包裝在一起來執行特定功能。

## 必要元素

- 用`def`開頭定義一個function。
- 若想要之後再定義內容，可先寫入`pass`，就不會讓這個空的function出現錯誤。
- 呼叫function要加上`()`。

```python
def hello_func():
    pass

# execute the function
print(hello_func())
# None （since no value returned）

# call function itself
print(hello_func)
# <function hello_func at 0x0000021604F2F040>
```

## Arguments

基本上使用function的人，不需要詳細知道內部如何運作，只需要知道 **輸入**和 **輸出** 是什麼就行了。而輸入的參數我們就稱為arguments（下面範例就是指`greeting`）。

```python
def hello_func(greeting):
    return '{} Function.'.format(greeting)

print(hello_func('Hi'))
```

### Default arguments

若function要求要輸入arguments，沒有輸入的話就會出現error。但是也可以設定default值，當沒有輸入時就將變數設定為該值（下面範例就是指`name`）。

```python
def hello_func(greeting = 'Hi'):
    return '{}, {}'.format(greeting)

print(hello_func())
```

### Position arguments

指的是當呼叫函式時，傳入的 arguments的**位置**是最重要的。

例如你本來是想輸出 「Hi, John」，但因為輸入時未注意傳入參數順序（位置），所以function理所當然地依照順序接收arguments。

```python
def hello_func(greeting, name):
    return '{}, {}'.format(greeting, name)

print(hello_func('John', 'Hi'))
# John, Hi
```

### Keyword arguments

相對於position arguments，keyword arguments因為有keyword附著在每一個argument上，所以就不需要在意位置關係。

```python
def hello_func(greeting, name):
    return '{}, {}'.format(greeting, name)

print(hello_func(name='John', greeting='Hi'))
```

### *args & **kwargs

一般看到別人寫的function都會有這兩個arguments，因為代表可以接收 **任意數量**的arguments。

`args`是position arguments的縮寫，會是一**tuple**。

`kwargs`是keyword arguments的縮寫，會是一**dictionary**。

```python
def student_info(*args, **kwargs):
    print(args)
    print(kwargs)
    # ('Math', 'Art')
    # {'name': 'John', 'age': 21}

student_info('Math', 'Art', name='John', age=21)
```

#### Unpacked

`*list`、`**dictionary`代表unpacked，因此我們可以在傳入function時利用這個技巧。

```python
def student_info(*args, **kwargs):
    print(args)
    print(kwargs)

courses = ['Math', 'Art']
info = {'name': 'John', 'age': 21}

student_info(*courses, **info)
```

## Function Annotations

Python 3的函式註解，讓你在定義參數時對參數和返回值添加註解。

```python
def foo(a: int, b: "this is b", c: str = 5) -> tuple:
    return a, b, c
```

- `a: int` 是參數註解
- `c: str = 5`是有default值的參數註解
- `-> tuple`是回傳值的註解

可以用`__annotations__`來得到

## libaries, packages , modules, framework差異

function是將code打包的最小單位，而libaries, packages , modules, framework也是類似的概念，打包code以達到特定效果，以下是一些名詞解釋。

### Modules

幫助你的code變得更有組織性，也就是將相關的code打包在一起，讓你可以在其他地方import進來使用。可以說module就是 **一綑相關的程式碼被儲存在附檔名為`.py`**。裡面可以是function, classes, or variables。

一些常用的modules : random, datetime, re。

**Ex**

- 有一檔案 < hello.py >內含一function `hello_message`

```python
def hello_message(msg):
    print('Hello, {}'.format(msg))
```

- 在其他檔案中import

此外，`module.__file__`可以找到該module的所在位置。

```python
# import method 1
import hello

hello.hello_message('World')

#import method 2
from hello import hello_message

hello_message('World')
```

### Packages

若開發較大專案，可能會有很多不同modules，造成管理上的困難。因此 packages就是 **一個資料夾裡面蒐集了多個modules**，允許module namespace有 **階層架構**，就像一般在資料夾中也能有子資料夾，也可以將modules組織成packages和subpackages。

一些常用的packages : Numpy, pandas

**Ex**

package結構及引入方式

```bash
├── my_module
│   ├── __init__.py
│   ├── training
│   │   ├── __init__.py
│   │   ├── training.py
│   │   ├── loss.py
│   │   └── test.py
│   ├── submission
│   │   ├── __init__.py
│   │   ├── submit.py
│   │   ├── production.py
│   │   └── test.py
# import method 1
import my_model.training.loss

#import method 2
from my_model.training import loss
```

### Libraries

通常說library包含許多modules和packages成為一個可重複利用的程式碼塊。但因為Package本身也可以包含很多subpackages，所以Library有時也會和Packages互換使用。一般來說，還是較常稱 **package包含許多modules；Library包含許多packages**。

常用的像是 : Matplotlib, Beautiful Soup。

packages提到的Numpy, pandas也會被稱作Library

### Framework

跟library很像，包含很多modules跟packages幫助使用者執行特定程序，加快開發流程，但framework比library複雜得多。framework包含該應用程式基本的流程和架構。

常用的framework有Django和Flask。
