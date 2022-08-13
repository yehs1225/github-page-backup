# PEP8

[PEP 8 – Style Guide for Python Code | peps.python.org](https://peps.python.org/pep-0008/)

code多數時候被 **閱讀** 的次數會多過 **撰寫**，因此，我們應該讓程式碼保持一定的風格格式，在大框架下遵循PEP 8讓程式碼可以更容易被閱讀。

## Code Lay-out

### Indentation縮排

**每一縮排層級使用4個空格。**

連續的Lines應該將被包住的元素對齊，方式有兩種

1. 第一行有arguments時，在 paretheses小括號(), braces大括號{} ,bracket中括號[]內**垂直對齊**
2. 使用hanging indent[註]要注意:第一行不要有任何arguments,其他行要有縮排來區隔

> hanging indention 是一種樣式設定，指的是文章中除了第一行之外的每一行都要縮排。
>
> 在python中，這個詞的意義為 : 「被()包住的一段敘述當中，左括弧 ( 是那一行當中的最後一個非空白字元，剩下的行數都需要縮排直到右括弧 )」

**Correct**

```python
# 對齊開始的分隔符號
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# 附著的縮排要加一縮排層級
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)

# 加上4空格（一縮排層級）區分剩下的arguments
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)
```

**Wrong**

```python
# 第一行有arguments但沒有垂直對齊
foo = long_function_name(var_one, var_two,
    var_three, var_four)

# 沒進一步縮排，造成難以區分
def long_function_name(
    var_one, var_two, var_three,
    var_four):
    print(var_one)
```

#### If statement

有些條件式太長就會需要分成很多行，`if`+` `+`(`就等於4空格了，所以接下來的行數通常也可以是4空格，或者在多一縮排層級（多4格）。

```python
# 不多縮排
if (this_is_one_thing and
    that_is_another_thing):
    do_something()
    
# 加上comment，在支援語意syntax highlighting的編輯器中可以更好區別
if (this_is_one_thing and
    that_is_another_thing):
    # 兩條件都為真,我們可以繼續執行...
    do_something()

# 在接續的行中，多一縮排層級    
if (this_is_one_thing 
        and that_is_another_thing):
    do_something()
```

#### []及()的位置

兩種接可

```python
my_list=[
    1,2,3,
    4,5,6,
]
result=some_function_that_takes_arguments[
    'a','b','c',
    'd','e','f',
]
```
```python
my_list=[
    1,2,3,
    4,5,6,
    ]
result=some_function_that_takes_arguments[
    'a','b','c',
    'd','e','f',
    ]
```

### Tabs or Spaces

Spaces空格 優於 Tabs。

Tab應該 **單獨** 使用在已經使用Tabs的程式碼。

Python 不允許 Tabs 和 Spaces混用。

### 最大單行長度

最大單行長度為79個字元。

在很少結構性限制（structural restrictions : docstrings or comments）下，最長應為72個字元。

很長的可以用 `\` 連接

```python
with open('/path/to/some/file/you/want/to/read') as file_1, \
     open('/path/to/some/file/being/written', 'w') as file_2:
    file_2.write(file_1.read())
```

### 二元運算子應該加在line break之後

也就是說二元運算子應該加在運算元前面。雖然python允許下面兩種寫法，但第一種比較推薦。

```Python
# Correct（較容易對映 運算元 和 運算子）
income = (gross_wages
          + taxable_interest
          + (dividends - qualified_dividends)
          - ira_deduction
          - student_loan_interest)

# 可行，但不好的寫法
income = (gross_wages +
          taxable_interest +
          (dividends - qualified_dividends) -
          ira_deduction -
          student_loan_interest)
```

### 空白行Blank Lines

- **最高層的function 及 class定義** 應被 **兩行空行**圍繞
- **class內的method** 空一行
- 多餘的空白行應有節制地使用，很多一行的操作中間應省略空白行
- 在function內（有節制地）用空白行來區分 邏輯區塊

### Imports

- import應該在分開的行當中

  ```python
  # Correct
  import os
  import sys
  
  from subprocess import Popen, PIPE
  
  # Wrong
  import os, sys
  ```

- import 應該被放在檔案最上面，module comment之後；其他東西之前。

- 將Import分類，每類間留一空白行。類別 :

  1. Standard Library
  2. Related third party 
  3. Local app / library specific

- absolute import比較推薦，因為可讀性較高、行為表現較好（至少在錯誤時的訊息較明確）

  ```python
  from mypkg import sibling
  ```

  relative import 也可行，尤其在有較複雜package結構之下

  ```python
  from . import sibling
  ```

- import 含有class的class

  ```python
  from myclass import MyClass
  import foo.bar.yourcalss.YourClass
  ```

- wildcard imports （`from <module> import *`）應該被避免

### Module Level Dunder Names

在docstring、`from __future__`的import 之後。

```python
"""This is the example module.

This module does stuff.
"""

from __future__ import barry_as_FLUFL

__all__ = ['a', 'b', 'c']
__version__ = '0.1'
__author__ = 'Cardinal Biggles'

import os
import sys
```

## String Quotes

單引號和雙引號是一樣的，選一個並且固定使用它。

## Expressions & Statements內的空白格

### Pet Peeves 

=個人認爲超煩厭的事物XD

- ()內貼近兩側的地方不用空格 （註:()、{}、[]都適用）

  ```python
  # Correct
  spam(l[0], {egg: 2})
  foo = (8,)
  
  # Wrong
  spam( l[0], {egg:2} )
  foo = (8, )
  ```

- 緊接在`:`、`;`、`,`之前的東西不用空格

  ```python
  # Correct
  if x==4: print(x, y); x, y = y, x
  
  # Wrong
  if x==4 : print(x, y) ; x, y = y , x
  ```

- `:`被當作二元運算子時，左右兩邊的空白應該相等

  ```python
  # Correct
  ham[1:9], ham[1:9:3], ham[:9:3], ham[1::3], ham[1:9:]
  ham[lower:upper], ham[lower:upper:], ham[lower::upper]
  ham[lower+offset : upper+offset]
  ham[: upper_fn(x) : step_fn(x)], ham[:: step_fn(x)]
  ham[lower + offset : upper + offset]
  
  # Wrong
  ham[1: 9], ham[1 :9], ham[1:9: 3]
  ham[lower : : upper]
  ham[lower + offset:upper + offset]
  ham[ : upper]
  ```

- 呼叫function傳入arguments時的()

  ```python
  # Correct
  spam(1)
  
  # Wrong
  spam (1)
  ```

- 傳入index或slice

  ```python
  # Correct
  dct['key'] = lst[index]
  
  # Wrong
  dct ['key'] = lst [index]
  ```

- 使用一空格在運算子旁邊來對齊其它的

  ```python
  # Correct
  x = 1
  y = 2
  long_variable = 3
  
  # Wrong
  x            = 1
  y            = 2
  long_variable= 3
  ```

### 其它建議

- 下面這些二元運算子都要左右空一格
  - 賦值 `=`、`+=`、`-=`
  - 比較 `==`、`>`、`<`、`!=`、`<>`、`>=`、`<=`、`in`、`not in`、`is`、`is not`
  - Boolean : 、`and`、`or`、`not`
- 若含有不同優先序的運算子，**較低優先權的運算子要空格**。
- 不要超過一格、運算子左右兩邊有相同格數。

```python
# Correct
i = i + 1
num += 1
x = x*2 - 1
hypot2 = x*x + y*y
c = (a+b) * (a-b)

# Wrong
i=i+1
num +=1
x = x * 2 - 1
hypot2 = x * x + y * y
c = (a + b) * (a - b)
```

- function annotations 中`:`如一般規定（前緊貼；後空一格）；` -> `左右兩側要空格

```python
# Correct
def munge(input: AnyStr):
def munge() -> PosInt:
    
# Wrong
def munge(input:AnyStr):
def munge()->PosInt:
```

- 在傳入keyword argument及回傳有預設值的參數不用空格

```python
# Correct
def complex(real, imag=0.0):
    return (r=real, i=img)

# Wrong
def complex(real, imag = 0.0):
    return (r = real, i = img)
```

- 若arguments有註解，在`=`要加入空格

```python
# Correct
def munge(input: AnyStr, sep: AnyStr = None, limit = 1000)

# Wrong
def munge(input: AnyStr=None):
def munge(input: AnyStr, limit = 1000)    
```

- 最好不要有Compound statements（多重Statements在同一行）

  ```python
  # Correct:
  if foo == 'blah':
      do_blah_thing()
  do_one()
  do_two()
  
  # Wrong:
  if foo == 'blah': do_blah_thing()
  do_one(); do_two();
  
  for x in lst: total += x
  while t < 10: t = delay()
      
  if foo == 'blah': do_blah_thing()
  else: do_non_blah_thing()
  
  try: something()
  finally: cleanup()
  
  do_one(); do_two(); do_three(long, argument,
                               list, like, this)
  
  if foo == 'blah': one(); two(); three()    
  ```

## 使用Trailing Commas的時機

一般來說trailing commas是選擇性使用的，除了在定義只含一個元素的tuple。但還是建議加上trailing commas在()內（儘管技術上來說是多餘的）

```python
# Correct:
FILES = ('setup.cfg',)

# Wrong:
FILES = 'setup.cfg',
```

再說一次，trailing commas技術上是多餘的，但是!使用版本控制時會很有用—當我們預期會擴充一list、args、imported items時。使用格式如下 : **每個元素自己一行在加上`,`，並以分隔符號如`]`、`)`關上**。  

```python
# Correct:
FILES = [
    'setup.cfg',
    'tox.ini',
    ]
initialize(FILES,
           error=True,
           )

# Wrong:
FILES = ['setup.cfg', 'tox.ini',]
initialize(FILES, error=True,)
```

## Comments

**與code相衝突的comments總比 no comments好**。f確保總是在改變code時更新註解。

### Block Comments

- 註解應是完整的句子，因此第一個字要大寫，除非是本身就是小寫開頭命名的東西（不要任意將小寫名稱改為大寫）。
- 開頭是`#`加上一空格` `
- 縮排就如同它所描述的code該做的

```python
for i in range(0, 10):
    # Loop over i ten times and print out the value of i, followed by a
    # new line character
    print(i, '\n')
```

### Inline Comments

- 盡量不要用inline comment，要的話確保離statements兩格以上的空格。

```python
x = x + 1                 # Compensate for border
```

### Documentation Strings

也稱作 「docstrings」。

- 為 **public** modules, functions, classes, methods添加docstrings。

- 對於non-public method不是必要的，但必須加上 comments 解釋其作用，且該註解要加在`def`的下一行。

- 多行的話，結尾的`'''`應該自己一行

  ```python
  """Return a foobang
  
  Optional plotz says to frobnicate the bizbaz first.
  """
  ```

- 只有一行的話，讓`'''`保持在同一行

  ```python
  """Return an ex-parrot."""
  ```

## 命名習慣

### 該避免的名稱

- `l`（小寫L）、`O`（大寫O）、`I`（大寫i）做為單一字元的變數

### 各種命名習慣

| Type     | Naming Convention                                            | Examples                       |
| -------- | ------------------------------------------------------------ | ------------------------------ |
| Variable | 小寫、單一字母或字詞、多個字詞用底線分開                     | `x`, `var`, `my_variable`      |
| Constant | 大寫、單一字母或字詞、多個字詞用底線分開                     | `CONSTANT`, `MY_LONG_CONSTANT` |
| Function | 短、全小寫、若可增加可讀性可加上底線                         | `function`, `my_function`      |
| Method   | 短、全小寫、若可增加可讀性可加上底線<br />名稱錢加上`_`代表非公開method和instance varibles | `method`, `my_method`          |
| Class    | 用CapWords                                                   | `Model`, `MyClass`             |
| Module   | 短、全小寫、若可增加可讀性可加上底線                         | `module.py`, `my_module.py`    |
| Package  | 短、全小寫、盡量不用底線                                     | `package`, `mypackage`         |

### 關於Inheritance的設定

總是要決定class的method和instance's variable（兩者合稱 attributes）要是public還是non-public。若是有些懷疑，就先設為non-public，因為從non-public到plubic會相對簡單。

- Public attributes是給其他人（unrelated clients）使用的，你必須保證其不會有"不相容"的更動。
- Non - Public是指並非意圖給的三方使用的，因此不用保證它 "不會被更動"甚至是"移除"。
- Python中不會用private這個詞，因為（沒有一定的設定之下）沒有真的是private的attribute。

另一類型是"subclass API"（在其他語言常被稱作"protected"）。有些classes是設計被用來繼承的（稱作base class），使得subclasses可以"增添"或"修改"該base class的行為。在設計這類class時，必須明確地決定哪些attributes是public，也就是subclass API的一部份，而那些又該是只能被你的base class使用的。

#### Pythonic guidelines

- public attribute不要加`_`在前面
- 若public attribute和保留字衝突，在後面加上`_`，而不是任意縮寫或打亂字詞。其中`cls`是一個例外，是用來代替`class`的慣用法。
- 對簡單的public data attributes，最好是直接取attribute名就好，不要加上一些存取辦法等。
- 針對base class中不想讓subclass存取的attributes，在命名時在前方加上`__`。這會促使python的mangling algorithm，也就是會避免衝突 — 當subclasses不經意間地包含了相同名稱的attribute。
- 即使設定`__all__`list代表public attributes，其它non-public也應該加上`_`在名稱前面。

## Programming 建議

- 寫Code時應考慮其對其它python的執行方式（PyPy, Jython, ...）的相容性。（有些語法不相容）

- 在singletons例如`None`的比較時要用`is`或`is not`，而非`=`。

- 用`is not`而非`not ... is`，儘管功能相同，但可讀性有差。

- 當要進行很多比較時，最好是用下面這六種方法（`__eq__`、`__ne__`、`__lt__`、`__le__`、`__gt__`、`__ge__`）而非使用其它code來執行特定的比較。可使用`functools.total_ordering()` decorator來幫助我們產生這六種method。

  ```python
  from functools import total_ordering
    
  @total_ordering
  class Car:
      def __init__(self, price):
          self.price = price
    
      def __lt__(self, other):
          return self.price<other.price
    
      def __eq__(self, other):
          return self.price == other.price
    
      def __le__(self, other):
          return self.price<= other.price
        
      def __ge__(self, other):
          return self.price>= other.price
            
      def __ne__(self, other):
          return self.price != other.price
      
  Tesla = Car(200)
  Toyota = Car(100)
  print(Tesla.__gt__(Toyota))
  # Output is True
  ```

- lamda最好是用在 "你要使用一function但不想assign它"，一般function應用`def`而非lamda。

  ```python
  # Correct:
  def f(x): return 2*x
  
  # Wrong:
  f = lambda x: 2*x
  
  # Correct
  sorted(players, key=lambda car: car.price)
  ```

- 用明確的exception。例如使用`except ValueError:`而非僅是`except`。

- 使用try/except時，讓`try`只含必要最少量的code。

  ```python
  # Correct:
  try:
      value = collection[key]
  except KeyError:
      return key_not_found(key)
  else:
      return handle_value(value)
      
  # Wrong:
  try:
      # Too broad!
      return handle_value(collection[key])
  except KeyError:
      # Will also catch KeyError raised by handle_value()
      return key_not_found(key)    
  ```

- 當資源只是在某一個特定區塊使用，可用`with`或`try/finally`確保使用完後的可靠性。

  ```python
  with open('file-path', 'w') as file: 
      file.write('Hello World') 
  ```

  ```python
  file = open('file-path', 'w') 
  try: 
      file.write('Hello World') 
  finally: 
      file.close() 
  ```

- 保持return的一致性，例如回傳expression，若沒有值應該回傳None。

  ```python
  # Correct:
  
  def foo(x):
      if x >= 0:
          return math.sqrt(x)
      else:
          return None
  
  def bar(x):
      if x < 0:
          return None
      return math.sqrt(x)
  
  # Wrong:
  
  def foo(x):
      if x >= 0:
          return math.sqrt(x)
  
  def bar(x):
      if x < 0:
          return
      return math.sqrt(x)
  ```

- 確認字詞開頭和結尾時，應該用`''.startwith()`及`''.endswith`而不是string slice（例如`foo[:3]`）。

- 物件型態的比較用 `isinstance()`而非`type(obj1) is type(obj2)`。

- 對於sequence,（strings, lists, tuples）查看是不是empty

  ```python
  # Correct:
  if not seq:
  if seq:
      
  # Wrong:
  if len(seq):
  if not len(seq):    
  ```

- 不要將Boolean值和`True`、`False`做比較

  ```python
  # Correct:
  if greeting:
  
  # Wrong:
  if greeting == True:
  
  # Worse:
  if greeting is True:
  ```

- 不建議在`try...finally`用flow control statements：`return`/`break`/`continue`。因為這樣會暗中地取消t傳遞到`finally:`的任何active exception。

  ```python
  # Wrong:
  def foo():
      try:
          1 / 0
      finally:
          return 42
  ```

  