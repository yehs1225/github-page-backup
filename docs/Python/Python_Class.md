# Class

學習資源:[Corey]: https://www.youtube.com/c/Coreyms

影片[Python OOP Tutorial](https://www.youtube.com/watch?v=ZDa-Z5JzLYM&list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc)解釋的超級清楚!

當我們有需要重複使用具有類似特性的東西時，就可以用class（類別）來定義，並以此創造instance（物件）來表示這些東西。例如，創造員工這個類別並定義其所需要的欄位如姓、名、email、薪資等。最簡單的範例如下 : 

其中，`def __init__():`是在這個class被呼叫要創建新instance時會執行的，其他語言可能稱作`constructor`。裡面第一個參數會傳入`self`，其實叫做self是一個慣例作法，指的就是這個instance，其他參數則由使用者傳入。

**定義一個class Employee**

```python
class Employee:

    def __init__(self,first,last,pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first+"."+last+"mail.com"        
```

**建立一個instance**

`emp_1`就是我們建立的員工一號!

```python
emp_1 = Employee("Wendy","Yeh",42000)
```

**取得instance的attribute**

我們可以透過`emp_1.first`、`emp_1.last`獲取這個物件的特性。

```python
print(emp_1.first)#Wendy
print(emp_1.last)#Yeh
```

## 建立 method

在class中除了`__init__`是必要的（定義此class），我們可以依照自身需求加入任何以此類別建立的物件都可以使用的方法（method）。首先，先看最基礎的範例（這裡稱之為regular，指的是一般的用法）。

### Regular

- 建立一個回傳員工全名的method`fullname(self)`，在此也是以instance作為數入參數，並依慣例稱作`self`。
  
  呼叫時和上面不同的地方在於，上面呼叫的`first`、`last`都是emp_1這個物件的attribute，而這裡是要呼叫物件的function `fullname`，所以是需要加上`()`的!

```python
class Employee:

    def __init__(self,first,last,pay):
        #...
    def fullname(self):
        return f"{} {}".format(self.first,self.last)

print(emp_1.fullname())#Wendy Yeh
```

#### Variable

在class裡除了可以定義method，我們也可以加入變數variable。

- 加入`raise_amt`，代表加薪的乘數。

- 希望特定員工有不同的數值，因此設定一method`set_raise_amt(self,amount)`，`self`和之前一樣是指instance，而`amount`是使用者輸入的。
  
  更改並呼叫`emp_1`這個instance，可以發現已被更改成想要的1.05。查看class `Employee`可以發現還是原來的數值1.03，因為前面一直有提到一般的method都是**針對instance**去設定，當然跟本身的class無關。

```python
class Employee:
    raise_amt = 1.03
    #...
    def set_raise_amt(self,amount):
        self.raise_amt = amount

emp_1.set_raise_amt(1.05)
print(emp_1.raise_amt)#1.05
print(Employee.raise_amt)#1.03  
```

### classmethod

但python也提供了decorator `@classmethod`讓我們以instance去執行method時，可以去**改到整個class的attribute**。

- 在method前加入`@classmethod`
- 輸入的參數從instance（`self`）改為class（`cls`）

```python
class Employee:
    raise_amt = 1.03
    #...
    @classmethod
    def set_raise_amt(cls,amount):
        self.raise_amt = amount

emp_1.set_raise_amt(1.05)
print(emp_1.raise_amt)#1.05
print(Employee.raise_amt)#1.05
```

### staticmethod

前面兩個method一個是改instance、一個是改class，現在這個則是和這兩者都沒關的，一樣是用decorator `@staticmethod`。

- 傳入的不是`self`也不是`cls`，僅是單純由使用者所輸入的

```python
class Employee:
    @staticmethod
    def is_workday(day):
        if day.weekday() == 5 or day.weekday() == 6:
            return False
        return True

import datetime
my_date = datetime.date(2016,7,11)
print(Employee.is_workday(my_date))
```

### dunder method

其實這種`__XXX__`以底線框住的method多被稱之為dunder method，前面因為不想搞混單純學習class的目的，因此沒提。dunder method除了`__init__`之外，還有一些常用的設定，例如`__repr`、`__str__`，兩者在class當中都是可以用來定義想要如何呈現instance資訊，當有人想要查看時。前者主要是給其他開發人員看；後者則是終端使用者。

```python
def __repr__(self):
    return "Employee('{}','{}','{}')".format(self.first,self.last,self.pay)

def __str__(self):
    return '{}-{}'.format(self.fullname(),self.email)

emp_1 = Employee("Wendy","Yeh",90000)

print(repr(emp_1))#Employee('Wendy','Yeh','90000')
print(str(emp_1))#Wendy Yeh-Wendy.Yeh@mail.com

#上面的其實就是下面的!!
print(emp_1.__repr__())
print(emp_1.__str__())
```

這種方法其實你以前一定也用過，像是要 **相加數字、字串的add**、**計算字串長度的len**等，其實都是python對該變數類型定義好的dunder method，因此我們也可以自己幫Employee這個class加上。

- `__add__`
  
  ```python
  def __add__(self,other):
     return self.pay + other.pay
  
  emp_1 = Employee("Wendy","Yeh",90000)
  emp_2 = Employee("Amy","Lu",60000)
  
  print(emp_1+emp_2)
  ```

- `__len__`
  
  ```python
  def __len__(self):
     return len(self.fullname())
  
  emp_1 = Employee("Wendy","Yeh",90000)
  print(len(emp_1))
  ```

## Inheritance & Subclass

一開始就有說class是用在建立有許多相同特性的物件，但在這些物件當中總是還有一些不同之處，所以我們通常可以建立一個Base Class設定一些最基礎、大家都需要用到的東西，再一個class去 **繼承Inheritance**這些特性，這樣的class稱作subclass。

**Base Class`Employee`**

```python
class Employee:

    raise_amount = 1.03

    def __init__(self,first,last,pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first+'.'+last+'@mail.com'

    def fullname(self):
        return "{} {}".format(self.first,self.last)

    def apply_raise(self):
        self.pay=int(self.pay*self.raise_amount)
```

**Subclass `Developer`**

- 建立subclass `Developer`，在`()`內放入欲繼承的class。
- 將原先變數`raise_amount`的值做更改。
- `__init__(self,first,last,pay,prog_lang)` 除了有base class的參數，還有自己特有的`prog_lang`這一項。
  - 和base class要有一樣設定的東西，我們就用`super()`來繼承，像這裡就是繼承了`__init__(first,last,pay)`這個方法及其參數設定。
  - 剩下的`prog_lang`就是一般的class設定，用`self.`設定給這個instance。

​        可以看到除了本來直接以`Employee`建立的`emp_1`外（僅接收三個參數），可        以順利以`Developer`建立`dev_1`（多了一個參數）。再往下看，Developer我        們設定了不同的`raise_amount`值，並且呼叫method `raise_amount`，並不        會互相影響。

```python
class Developer(Employee):
    raise_amount = 1.10

    def __init__(self,first,last,pay,prog_lang):
        super().__init__(first,last,pay)
        self.prog_lang = prog_lang

emp_1 = Employee("John","Semon",50000)
dev_1 = Developer("Test","User",50000,"Python")

print(emp_1.email)#John.Semon@mail.com
print(dev_1.email)#Test.User@mail.com

emp_1.apply_raise()
dev_1.apply_raise()
print(emp_1.pay)#51500
print(dev_1.pay) #55000
```

**Subclass Manager**

另外再建立一個subclass，繼承原先的Employee，也另外加入了其他method，能夠將Employee加入到manger的attribute中。

```python
class Manager(Employee):

    def __init__(self,first,last,pay,employees=None):
        super().__init__(first,last,pay)
        if employees is None:
            self.employees = []
        else:
            self.employees = employees

    def add_emp(self,emp):
        if emp not in self.employees:
            self.employees.append(emp)

    def remove_emp(self,emp):
        if emp in self.employees:
            self.employees.remove(emp)

    def print_emps(self):
        for emp in self.employees:
            print('-->',emp.fullname())

emp_1 = Employee("Corey","Schafer",50000)
dev_1 = Developer("Test","User",50000,"Python")

mgr_1 = Manager("Wendy","Yeh",90000,[dev_1])
mgr_1.add_emp(emp_1)
mgr_1.print_emps()         
```

### isinstance & issubclass

有兩個方法可以幫我們確定某instance是否屬於某class、某class是不是另一個class的subclass。

```python
print(isinstance(dev_1,Developer))#True
print(isinstance(dev_1,Manager))#False
print(isinstance(dev_1,Employee))#True
print(issubclass(Developer,Employee))#True
print(issubclass(Developer,Manager))#False
```

## Property Decorators

在原先的class Employee中，我們的email這個attribute是以first+last組成，並且是在創立物件時就輸入，而不是像fullname是一個method，呼叫時才從instance中獲取。

因此，當我們更改emp_1的first時，可能會以為系統也會幫我們改email的值，但事實上卻沒有!

**Class Employee**

```python
class Employee:

    def __init__(self,first,last):
        self.first = first
        self.last = last
        self.email = first+'.'+last+'@mail.com'

    def fullname(self):
        return "{} {}".format(self.first,self.last)
```

**建立emp_1並改值**

```python
emp_1 = Employee("Wendy","Yeh")
emp_1.first = 'Denny'

print(emp_1.first)#Denny
print(emp_1.email)#Wendy.Yeh@mail.com
print(emp_1.fullname())#Denny Yeh
```

**把emial改成method**

```python
class Employee:

    def __init__(self,first,last):
        self.first = first
        self.last = last

    def email(self):
        return "{}.{}@email.com".format(self.first,self.last)

    def fullname(self):
        return "{} {}".format(self.first,self.last)

emp_1 = Employee("Wendy","Yeh")
emp_1.first = 'Denny'

print(emp_1.first)#Denny
print(emp_1.email())#Denny.Yeh@mail.com
print(emp_1.fullname())#Denny Yeh    
```

你可能會想說，那就把email也改成像fullname一樣，是method就可以了，這樣確實可以用`.email()`的方式呼叫（**注意:並非原先以`.email`，也就是以attribute方式呼叫**），這樣會讓原本就使用你的程式碼的人也需要去改變它的程式碼。

### Getters

為了解決這個問題，我們可以為此method加上`@property`這個decorator，讓我們可以get這個attribute。

```python
class Employee:

    def __init__(self,first,last):
        self.first = first
        self.last = last

    @property
    def email(self):
        return "{}.{}@email.com".format(self.first,self.last)

    @property
    def fullname(self):
        return "{} {}".format(self.first,self.last)

emp_1 = Employee("Wendy","Yeh")
emp_1.first = 'Denny'

print(emp_1.first)#Denny
print(emp_1.email)#Denny.Yeh@mail.com
print(emp_1.fullname)#Denny Yeh  
```

### Setters

現在，我們不只想要get attribute，也希望可以去做更改。從剛才的例子，現在想要以`emp_1.fullname = 'XXX XXX'`的方式去更改instance的first和last。如果僅是幫 `fullname()`加上decorator，會出現以下的錯誤：

```bash
AttributeError: can't set attribute
```

因此我們需要的是：在原先`@property`+function下面，再加上另一個decorator + function 來set attribute，名稱是`@func_name.setter`，所以這裡就是`@fullname.setter`。

```python
@property
def fullname(self):
    return "{} {}".format(self.first,self.last)

@fullname.setter
def fullname(self,name):
    first, last = name.split(' ')
    self.first = first
    self.last = last

emp_1 = Employee("Wendy","Yeh")
emp_1.fullname = 'Jim Lin'

print(emp_1.first)#Jim
print(emp_1.email)#Jim.Lin@email.com
print(emp_1.fullname)#Jim Lin
```

### Deleters

有get、set當然也有delete。做法和setter很像。

```python
    @property
    def fullname(self):
        return "{} {}".format(self.first,self.last)

    @fullname.setter
    def fullname(self,name):
        first, last = name.split(' ')
        self.first = first
        self.last = last

    @fullname.deleter
    def fullname(self):
        print('Delete name!')
        self.first = None
        self.last = None

emp_1 = Employee("Wendy","Yeh")
emp_1.fullname = 'Jim Lin'

print(emp_1.first)
print(emp_1.email)
print(emp_1.fullname)

del emp_1.fullname
print(emp_1.first)
print(emp_1.email)
print(emp_1.fullname)

# Jim.Lin@email.com
# Jim Lin
# Delete name!
# None
# None.None@email.com
```

## Dunder or Magic method

在python中dunder method 也稱為 magic method，指的是用前後`__`包裹住的method name。Dunder = Double Under（Underscores）。常用來作為operator overloading使用。一些範例像是 : `__init__`、`__add__`、`__len__`、`__repre__`等等。

> #### operator overloading
> 
> 是多型（polymorphism）的一種，多行指的是位不同資料類型的實體提供統一的介面，或使用單一符號表是多個不同的類型。例如 : + 在Python可作用於 字串 和 數值上，且表現行為也會跟著調整，字串像是拼接、數值則是像 一般計算的方法。
