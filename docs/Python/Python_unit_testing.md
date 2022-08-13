# Unit Testing

## Settings

準備一個要被測試的Module `calculator.py`。

```python
def add(x, y):
    """Add Function"""
    return x+y

def subtract(x, y):
    """Subtract Function"""
    return x-y

def multiply(x, y):
    """Multiply Function"""
    return x*y

def divide(x, y):
    """Divide Function"""
    if y == 0:
        raise ValueError('Can not divide by 0!')
    return x/y
```

## Test file

- 建立以`test_`開頭的測試.py檔。
- 引入模組`unittest`
- 引入要被測試的模組`calculator.py`

```python
import unittest
import calculator
```

- 建立class繼承`unittest.TestCase`
- method 以`test_`開頭命名
- method傳入的第一個參數`self`

```python
class TestCalc(unittest.TestCase):

    def test_add(self):
        result = calculator.add(10, 5)
        self.assertEqual(result, 15)
```

### 執行

有兩種方法

-  `$ python -m unittest <test_file_name>`

- 在file內加上下面code，以一般方式執行該檔案`$ python <test_file_name>`

  `if`判斷的是「我們是不是直接執行該檔案」。

  ```python
  if __name__ == '__main__':
      unittest.main()
  ```

### setUp & tearDown Method

當我們在寫test method時，若有些程式碼是重複的，就違反了DRY（Don't Repeat Yourself）原則，我們可以用兩個method來設定這些重複的程式碼。

`setUp`總是會在每一個method之前執行。

`tearDown`總是會在每一個method之後執行。

為了讓其他method可以取用，要將`setUp`和`tearDown`裡面的東西設定成instance的attributes，也就是說要用`self.variable`的形式，而非`variable`（可以參考說明Class的note）。在其他method裡面要使用當然也就是要用`self.variable`。