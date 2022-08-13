# Data Types Basic

- `type(variable)`獲取此變數資料型態
- `dir(data_type)`獲取可操作此data type的方法；
- `help(data_type)`獲取詳細的方法內容
- `help(data_type.method)`獲取指定方法的詳細內容。

### Variable Name

- 變數命名要清楚有意義
- 變數若為多個單字用`_`連接，例如`my_message`

## Textual Data

### 單雙引號`''`、`""`

- 皆可包住字串

兩者意義相同，擇一並且維持就好。但是因為可能有字串內需要用到單雙引號的情形，有兩種解決辦法：

Ex : 印出 Amanda's cats

1. 使用跳脫字元 `\`
   
   ```python
   print('Amanda\'s cats')
   ```

2. 外面用另一符號
   
   ```python
   print("Amanda's cats")
   ```
- 多行可用`""" """`
  
  並且輸出會遵照數入格式
  
  ```python
  print(
      """
      Cama is the best
      dog of the world!
      """)
  ```

### Modules

- 長度 : `len()`
  
  ```python
  message = 'Hello World'
  
  print(len(message))
  ```

- 擷取字元 : `[]`
  
  ```python
  message = 'Hello World'
  
  print(message[6:])
  # Output World
  ```

- 小寫 : `.lower()`

- 大寫 : `.upper()`

- 數內含字元個數`.count('')`
  
  ```python
  message = 'Hello World'
  
  print(message.count('Hello'))
  # Output 1
  print(message.count('l'))
  # Output 3
  ```

- 找字元index
  
  不存在的字元輸出是-1
  
  ```python
  message = 'Hello World'
  
  print(message.find('World'))
  # Output 6
  print(message.find('dog'))
  # Output -1
  ```

- 替代成別的字元 : `.replace('original', 'new')` 
  
  ```python
  message = 'Hello World'
  
  message.replace('World', 'Dog')
  print(message)
  # Output Hello World
  
  message = message.replace('World', 'Dog')
  print(message)
  # Output Hello Dog
  ```

- 字串相加 
  
  ```python
  greeting = 'Hi'
  name = 'John'
  ```
  
  - with `+`
    
    但是如果遇到較長的組合會很不方便，所以較不建議。
    
    ```python
    message = greeting + ', ' + name
    ```
  
  - Format String : placeholder`{}` + `.format(var_1, var_2, ...)`
    
    ```python
    message = '{}, {}. Welcome!'.format(greeting, name)
    ```
  
  - f string : `f'{var_1}, {var_2}.`
    
    是python3.6以上新增的，其一好處是在placeholder直接對變數操作時可讀性高，例如`name.upper()`
    
    ```python
    message = f'{greeting}, {name}. Welcome!'
    ```

## Integer & Float

## 基本運算

- Division : `/`
  
  ```python
  print(3/2)
  # 1.5
  ```
  
  在Python3以前會是1。

- Floor  Division: `//`
  
  ```python
  print(3//2)
  # 1
  ```

- Exponent
  
  ```python
  print(3 ** 2)
  # 9
  ```

- Modulus
  
  能用來確認是 奇數還是偶數
  
  ```python
  print(5 % 2)
  # 1
  ```

### Modules

- 絕對值`abs()`

- 近似值`round()`
  
  - first arg : number
  - second : 要取到的位數
  
  ```python
  print(round(3.65), 1)
  # 3.7
  ```

### Comparisons

- Equal `==`
- Not Equal `!=`
- Greater Than `>`
- Less Than `<`
- Greater or Equal `>=`
- Less or Equal `<=`

## String or Number？

因為在python當中，字串和數值都可以使用`+`的運算，所以如果不小心就會出現預期外結果。

若是要做數值運算，最好加上`int()`、`float()`等確定將變數轉換為你要的資料型態。

```python
num_1 = '10'
num_2 = '20'

print(num_1 + num_2)
# 1020

num_1 = int(num_1)
num_2 = int(num_2)

print(num_1 + num_2)
# 30
```

## Booleans

### is

比較**內容**的相異性用的是`==`；而`is`是用來比較**記憶體**位置是否相同。

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)
# True

print(a is b)
# False

# Print the memory location
print(id(a))
print(id(b))
# 1679406415360
# 1679409529472
a = [1, 2, 3]
b = a

print(a is b)
# True
```

### False Value

- False
- None
- Zero of any numeric type.
- Any empty sequence. （e.g. `''`、`()`、`[]`）
- Any empty mapping. （e.g.`{}`）

## List, Tuple, and Sets

List和Tuple適用於處理一序列的資料，Tuple不能更改。

Sets是沒有順序性的，且元素不能重複。因為Sets不在意順序，所以可能會每次印出來順序不同。此外，會自動排除重複的元素。

### 宣告方式

list1 = []

list1 = list()

tuple1 = ()

tuple1 = tuple()

set1 = set()

**Not Correct** : set1={}

### List

#### 取得元素

- list_1[index]
- list_1[idx1:idx2]
- list_1[idx1:]
- list_1[:idx]

#### 增加元素

- 加在最尾端：`list_1.append(number)`
- 加在指定位置：`list_1.insert(index, number)`
- 附加在另一list後面：`list_1.extends(list_2)`

#### 減少元素

- 移除指定元素：`list_1.remove(number)`
- 移除最尾端的元素，並且會回傳pop的元素：`list_1.pop()`

#### 操作元素

- 倒轉元素：`list_1.reverse()`
- 排序元素：`list_1.sort()`，args:`reverse=False`，會改變原始list
- 排序元素，回傳一list：`sorted(list_1)`，因此不會改變原始list

#### number list

- `min(list_1)`
- `max(list_1)`
- `sum(list_1)`

#### Others

`list_1.index(number)` 取得number的index，若number不存在，會有ValueError

`number in list_1 `: 確認number是否存在list_1中，回傳Boolean

#### loop

取得list_1內容

```python
for item in list_1:
    print(item)
```

取得list_1內容和index, args = `start`，設定index要起始數

```python
for idx,item in enumerate(list_1,start=0):
    print(idx,item)
```

#### join & split

```python
list = [A,B,C]
list_str = ' _ '.join(list)
# A _ B _ C

new_list = list_str.split(' _ ')
# [A,B,C]
```

### Sets

- 確認某元素item是否存在set_1中：`item in set_1`
- 兩set的共同、相異元素 、聯集

```python
set_1.intersection(set_2)
set_1.difference(set_2)
set_1.union(set_2)
```

### namedtuple

有點類似結合dictionary的tuple，享有tuple不可更動及dictionary可以有標籤的好處。來看一個範例：

```python
color = (255, 155, 55)
```

用tuple定義三原色組成橘色!但這樣的可讀性很低，別人可能會不知道255代表是紅色等等。所以我們改用dictionary試試。

```python
color = {'red': 255, 'green': 155, 'blue': 55}
```

這樣就好看多了，但是!如果要定義很多顏色，就要重複很多次這些較長的敘述，而且dictionary是可以被修改的，如果不小心被改，顏色就跑掉了!所以我們要來用namedtuple。

```python
from collections import namedtuple

Color = namedtuple('Color', ['red', 'green', 'blue'])
orange = Color(255, 155, 55) 

print(orange)
# Color(red=255, green=155, blue=55)

print(orange.red)
# 255
```

## Dictionary

### Basic

- setting
  
  ```python
  student = {'name': 'John', 'age': 25, 'courses': ['Math', 'CompSci']}
  ```

- get data
  
  ```python
  print(student)
  # {'name': 'John', 'age': 25, 'courses': ['Math', 'CompSci']}
  
  print(student['name'])
  # John
  ```

- set data
  
  ```python
  student['name'] = 'Wendy'
  print(student['name'])
  # Wendy
  
  student['phone'] = '1234-5678'
  print(student['phone'])
  # 1234-5678
  ```

### Modules

```python
student = {'name': 'John', 'age': 25, 'courses': ['Math', 'CompSci']}
```

- 取得某key對應的value : `dict.get()`
  
  因為直接用`dict['key']`的方式若該key不存在，會出現KeyError，所以應用`dict.get()`
  
  ```python
  print(student.get('phone'))
  # None
  
  print(student.get('phone'), 'Not Found')
  # Not Found
  ```

- 更新 : `dict.update()`
  
  ```python
  student.update({'name': 'Wendy', 'age': 22, 'phone': '123-4567'})
  ```

- 刪除 : `del dict['key']` or `dict.pop('key')`，pop會回傳值。
  
  ```python
  # delete 'age' in dict
  del student['age']
  print(student)
  # {'name': 'Wendy', 'phone': '123-4567'}
  
  # pop 'name' in dict
  name = student.pop('name')
  print(student)
  # {'phone': '123-4567'}
  print(name)
  # Wendy
  ```

- 長度`len(dict)`
  
  ```python
  print(len(student))
  # 3
  ```

- 取得keys : `dict.keys()` or loop
  
  ```python
  print(student.keys())
  # dict_keys(['name', 'age', 'courses'])
  ```
  
  ```python
  for key in student:
      print(key)
      # name
      # age
      # courses
  ```

- 取得values : `dict.values()`
  
  ```python
  print(student.values())
  # dict_values(['John', 25, ['Math', 'CompSci']])
  ```

- 同時取得keys和values
  
  ```python
  dict_values(['John', 25, ['Math', 'CompSci']])
  # dict_items([('name', 'John'), ('age', 25), ('courses', ['Math', 'CompSci'])])
  ```
  
  ```python
  for key, value in student.items():
      print(key, value)
      # name John
      # age 25
      # courses ['Math', 'CompSci']
  ```

## Loops

### break&continue

`break` : 離開迴圈。

`continue` : 直接進入下一迴圈。

```python
nums = [1, 2, 3]

for num in nums:
    if num == 2:
        print("Found!")
        break
    print(num)
    # 1
    # found!

for num in nums:
    if num == 2:
        print("Found!")
        continue
    print(num)
    # 1
    # Found!
    # 3
```
