# Decorator

學習資源 : [Corey]: https://www.youtube.com/c/Coreyms

## First-Class Functions

如果一程式語言有first-class functions代表它將function視為"first-class citizens"。

而first-class citizens（有時又稱作first-class objects）的定義：一個個體（entity）支援其他個體進行對其任何操作（operation），這些操作包含"被當作argument傳入"、"被function回傳"、"被指定（assigned）成variable"。

1. 被指定成variable & 被當作argument傳入

   我們定義了一function `square`，可以將其assign給變數`f`。另外，原本的`map()`就是拿function作為argument的例子，在這裡我們自己做一個`map()`的功能，同樣也是以function作為argument。

   ```python
   def square(x):
       return x*x
   
   f = square
   def my_map(func,arg_list):
       result=[]
       for _ in arg_list:
           result.append(func(_))
       return result
   
   squares = my_map(square,[1,2,3,4,5])
   print(squares)#[1,4,9,16,25]
   ```

2. 被function回傳

   ```python
   def logger(msg):
   
       def log_message():
           print('Log:',msg)
       
       return log_message
   
   log_hi = logger('Hi!')
   log_hi()
   ```

## Closure

Closure是一個record，會儲存function和environment：可以映射（mapping）function內的每一個free variable的值或儲存位置到內部的function當中（當closure被創造時）。不同於一般function，在closure裡的function可以透過closure或取原先不在其作用域的東西。

像是下面的`inner_func()`（簡稱inner）應該是屬於`out_func()`（簡稱outer）的一部分，因此照理來說inner是不能拿到outer的東西的，但是因為在outer是回傳其內部的inner，也就形成了closure，inner可以存取outer的變數`message`，此變數也就稱為free variable。

```python
def out_func(msg):
    message = msg

    def inner_func():
        print(message)#message對他來說是free variable，因為並非定義在自己的func，但可以存取

    return inner_func

hi_func=out_func("hi")
hello_func=out_func("hello")

hi_func()
hello_func()
```

## Decorator

### Type - Function

decorator其實就是把一function丟入一個定義好的decorator function，去做想要的"修飾"，也就是說我們可以將一些常用的動作功能定義在wrapper裡面，幫其他function增添這些功能。下面可以看到最原始的做法- Method 1，以及一般常見的decorator用法`@decorator_func`。

```python
def decorator_func(original_func):
    def wrapper_func():
        print('wrapper executed this before {}'.format(original_func.__name__))
        return original_func()
    return wrapper_func

#Method 1 to use the decorator function
def display():
    print("display function ran")
    
decorated_display = decorator_func(display)
decorated_display()

#Method 2 (common one)
@decorator_func
def display():
    print("display function ran")

display()
#wrapper executed this before display
#display function ran
```

另外，一般來說，function都會帶入arguments，所以加入`wrapper_func(*args,**kwargs) `，代表可以接受任意數目的arguments和keyword arguments，也一併回傳。

```python
def decorator_func(original_func):
    def wrapper_func(*args,**kwargs):
        print('wrapper executed this before {}'.format(original_func.__name__))
        return original_func(*args,**kwargs)
    return wrapper_func

@decorator_func
def display_info(name,age):
    print('display_info ran with arguments({}, {})'.format(name,age))

display_info('Wendy',22)
#wrapper executed this before display_info
#display_info ran with arguments(Wendy, 22)
```

### Type - Class

可以改成class形式，會輸出一樣的結果。

```python
class decorator_class(object):

    def __init__(self,original_func):
        self.original_func = original_func

    def __call__(self,*args,**kwargs):
        print('call method executed this before {}'.format(self.original_func.__name__))
        return self.original_func(*args,**kwargs)
    
@decorator_class
def display():
    print("display function ran")

@decorator_class
def display_info(name,age):
    print('display_info ran with arguments({}, {})'.format(name,age))

display_info('Wendy',22)

display()    
```

### Combine 2 wrapper

#### wrapper 1

例如設定一個wrapper，輸出執行的function作為檔名，裡面儲存該function接收到的arguments和keyword arguments。

```python
def my_logger(orig_func):
    import logging
    logging.basicConfig(filename = '{}.log'.format(orig_func.__name__),level=logging.INFO)

    def wrapper(*args,**kwargs):
        logging.info(
            'Ran with args: {}, and kwargs: {}'.format(args,kwargs)
        )
        return my_logger
    
    return wrapper

@my_logger
def display_info(name,age):
    print('display_info ran with arguments ({}, {})'.format(name,age))

display_info('Denny',24)
```

```bash
INFO:root:Ran with args: ('Wendy', 22), and kwargs: {}
INFO:root:Ran with args: ('Denny', 24), and kwargs: {}
```

#### wrapper 2

計算function執行時間

```python
def my_timer(orig_func):
    import time

    def wrapper(*args,**kwargs):
        t1 = time.time()
        result = orig_func(*args,**kwargs)
        t2 = time.time()-t1
        print('{} ran in {} sec'.format(orig_func.__name__,t2))
        return result
    
    return wrapper
    
import time
@my_timer
def display_info(name,age):
    time.sleep(1)
    print('display_info ran with arguments ({}, {})'.format(name,age))

display_info('Denny',24)
#display_info ran with arguments (Denny, 24)
#display_info ran in 1.0098938941955566 sec
```

#### Combine 2 wrapper

如果我們單純就是把剛才的定義好的decorator加上，如下

```python
import time

@my_logger
@my_timer
def display_info(name,age):
    time.sleep(1)
    print('display_info ran with arguments ({}, {})'.format(name,age))

display_info('Denny',24)
```

這樣的`@`順序，就等於是 **先執行my_timer再去執行my_logger**

```python
display_info = my_logger(my_timer(display_info('Denny',24)))
```

接著是者印出執行的function名稱

```python
print(display_info.__name__)
```

可以發現變成wrapper。所以我們應該要引入一項工具來確保進入wrapper後，function名稱不會被更動。

```python
from functools import wrap

def my_logger(orig_func):
    #...
    @wraps(orig_func)
    def wrapper(*args,**kwargs):
        #...    
    return wrapper

def my_timer(orig_func):
    #...
    @wraps(orig_func)
    def wrapper(*args,**kwargs):
        #...
    return wrapper
```

### Decorator with arguments

在使用decorator時也可以傳入參數，在一些framework中尤其常見。

先看我們初始的decorator—作用為將該函數要回傳的值再乘以2。

```python
from functools import wraps


def decorator_func(original_func):
    @wraps(original_func)
    def wrapper_func(*args, **kwargs):
        print(f'Executed Before, {original_func.__name__}')
        return 2*original_func(*args, **kwargs)
    return wrapper_func


@decorator_func
def calculate_func(x):
    return x+1


print(calculate_func(3))
# Executed Before, calculate_func
# 8
```

現在加上前綴詞（prefix），在decorator中傳入。基本上就是再多一層，變成巢狀的decorator。

```python
from functools import wraps


def prefix_decorator(prefix):
    def decorator_func(original_func):
        @wraps(original_func)
        def wrapper_func(*args, **kwargs):
            print(f'{prefix}: Executed Before, {original_func.__name__}')
            return 2*original_func(*args, **kwargs)
        return wrapper_func
    return decorator_func


@prefix_decorator('TEST')
def calculate_func(x):
    return x+1


print(calculate_func(3))
# TEST: Executed Before, calculate_func
# 8
```

## 補充：Scope

這裡牽扯到很多參數的傳遞，所以我們必須要了解Scope如何運作，才能正確地使用。

LEGB，代表python會依序去察看變數的順序：

1. Local
2. Enclosing
3. Global
4. Built-in

其中Enclosing就是上面Closure的概念。

### Local & Global

```python
x = 'global x'

def test():
    x = 'local x'
    print(x)

test()
print(x)
# local x
# global x
```

- `global`宣告為全域變數

  所以`x = 'global x'`其實不需要了。但這並不是好的做法，會讓維持變數的作用愈變得很亂。

  ```python
  x = 'global x'
  
  def test():
      global x
      x = 'local x'
      print(x)
  
  test()
  print(x)
  # local x
  # local x
  ```

### Built-in

一個Built-in例子是python內建的函式。

`min()`可以取出list中最小值

```python
print(min([2,5,1,7]))
# 1
```

依照LEGB的順序，若local定義了相同名稱的函式，就會優先選用。

我們定義新的`min()`回傳第一個元素。

```python
def min(l):
    return l[0]

print(min([2,5,1,7]))
# 2
```

