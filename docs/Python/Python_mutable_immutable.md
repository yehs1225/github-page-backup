# Mutable & Immutable

一個Immutable物件指的是它的狀態在建立之後不可被修改；Mutable物件可以被修改。

## Immutable

1. Integers
2. Float
3. Booleans
4. Strings
5. Tuples

用string作範例。

- 若我們對一個型態為string的變數再賦值，因為它是immutable，所以其實會再創造一個變數（新的記憶體空間）來儲存新的值。
  
  ```python
  a = 'cama'
  print(a)
  print(f'Adress: {id(a)}')
  # Cama
  # Adress: 2799136512304
  
  a = 'LuiLui'
  print(a)
  print(f'Adress: {id(a)}')
  # LuiLui
  # Adress: 2799133358000
  ```

- 若我們試圖替換其中的字元，會出現TypeError。
  
  ```python
  a = 'Cama'
  a[0] = 'M'
  # TypeError: 'str' object does not support item assignment
  ```

## Mutable

1. Lists
2. Dictionaries
3. Sets

用list作範例。

```python
a = [1, 2, 3]
print(a)
print(f'Adress: {id(a)}')

a[0] = 4
print(a)
print(f'Adress: {id(a)}')
```

## Why it's important

其中一個例子：現在要將一list放入html的tag當中。

```python
fruits = ['Apple', 'Banana', 'Orange', 'Kiwi']

output = '<ul>\n'

for fruit in fruits:
    output += f'\t<li>{fruit}</li>\n'

output += '</ul>'

print(output)
# <ul>
#         <li>Apple</li>
#         <li>Banana</li>
#         <li>Orange</li>
#         <li>Kiwi</li>
# </ul>
```

輸出長得像這樣，可起來沒什麼問題對吧!BUT，記得string是immutable嗎？代表．．．每次更動都是給予新的記憶體空間，於是我們在for迴圈印出output的記憶體來看看。

```python
for fruit in fruits:
    output += f'\t<li>{fruit}</li>\n'
    print(f'Address of output is {id(output)}')
    # Address of output is 2339199288544
    # Address of output is 2339196505040
    # Address of output is 2339197312448
    # Address of output is 2339199039152
```

天啊，一不小心就耗費了大量資源! 因此務必要非常注意immutable和mutable的概念。我們可以嘗試把for迴圈改成這樣：

```python
fruits = ['Apple', 'Banana', 'Orange', 'Kiwi']

output = '<ul>\n'

for fruit in fruits:
    output += f'\t<li>{fruit}</li>\n'
    print(f'Address of output is {id(output)}')

output += '</ul>'

print(output)
```
