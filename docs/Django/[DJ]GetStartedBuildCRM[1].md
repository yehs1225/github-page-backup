# GetStarted - build CRM [1]

Link : [YEHCRM (yehs1225.com)](https://django-crm.yehs1225.com/)

#### 專案開始前

1. 設定環境，在此使用的是miniconda

2. 安裝django(3.1.4)

   `$pip freeze > requirements.txt` 可以幫我們輸出文字檔以查看目前的套件dependencies

3. 開始專案< djcrm >

    `$django-admin startproject djcrm .`

   djcrm後有一空格，會新增一資料夾在目前工作的位置下。

## 建立App

- 建立一個叫做leads的app（會是一資料夾）

​		`$python manage.py startapp leads`

- 在project中註冊app

  在project的settings.py中，要在註冊的app中加入leads

  ```python
  #djcrm/settings.py
  INSTALLED_APPS=[
      ....,
      'leads'
  ]
  ```

## 建立資料庫

### 建立table

- 在model.py中建立table

  [Model field reference](https://docs.djangoproject.com/en/4.0/ref/models/fields/)

  基本語法如下

  ```python
  from django.db import models
  #使用models內的class Model來建立table
  class <'table_name'>(models.Model):
      'field_name' = models.'field_type'('condition')
  #field_type : CharField、IntergerField、BooleanField...
  #condition : max_length=X、default=X...
  ```

  **CharField**也可以設定choices讓人選擇

  ```python
  class table(models.Model):
     SOURCE_CHOICES = (
          ('YT','YouTube'),
         ('Google','Google'),
          ('NewsLetter','NewsLetter'),
      )
  #第一個值是要存入db的字串
  #第二個是要顯示在畫面上的字串
      ...
      source = models.CharField(choices=SOURCE_CHOICES,max_length=100)
  ```

  **ImageField**

  ```python
  profile_picture = models.ImageField(blank=True,null=True)
  #blank 代表使用者可輸入空白
  #null代表db可接受null值
  ```

- 執行makemigrations

  `$python manage.py makemigrations`

  migration的資料夾內會多出一個檔案000X_initial.py，裡面是這次新增加的table

- 執行migrate

  `$python manage.py migrate`

### 連結兩table

- 用 `ForeignKey()` 來連接

  在要當作foriegn key的欄位加上`ForeignKey()`，`ForeignKey()`有兩個args，一是要連結的table；二是`on_delete`，代表要如何處置這筆資料當連結到的表格內容不存在時（像是被刪除之類的），有幾種選項設定：

  1. `models.CASCADE `: 找不到foreignkey的指向就刪除
  2. `models.SET_NULL `:設定為null，僅在我們允許欄位為null時作用（`null=True`）

  ```python
  class table1(models.Model):
      {...
      }
      
  class table2(models.Model):
      {...
      fieldX = models.ForeignKey("table1",on_delete=models.XXX)
      }
  ```

### 使用者table

**建議建立自己的user table**，儘管也可用 `from django.contrib.quth import get_user_model`引入User

- 引入django提供的模組

  `from django.contrib.auth.models import AbstractUser`，可按右鍵go to definition查看。

- 因為裡面已有使用者名稱、信箱等資訊，因此用pass保留原本的設定就好。如果希望加上其他欄位就直接加上就行了。

  ```python
  class User(AbstractUser):
      pass
  ```

- 在其他table設定user欄位

  希望是1對1 : `OneToOneField`

  ```python
  class table(models.Model):
  	user = models.OneToOneField(User,on_delete=models.CASCADE)
  ```

- 在project中的settings.py告知新增了user table

  ```python
  #djcrm/setting.py
  AUTH_USER_MODEL = 'leads.User'
  ```

## 操作資料庫 

#### Model Manager

使用model manager : 取得model用`model_name.objects`

- 新增資料create

  `model_name.objects.create(field1=XX,...)`

- 查詢query

  - query all

    `model_name.objects.all()`

  - query with filter

    `model_name.filter(field1="XXX")`

  - **如果已經query all，再根據條件式用filter，那麼第二個filter其實不會真的去用到資料庫，因此不用擔心效能會變差**

    

    

- get 拿回一筆資料

  get 和 query不同，只會有一筆資料，而且不是查詢是直接取回，但方法和filter類似

  `model_name.get(field1="XXX")`

  - 當要取的資料是參照另一table時，在欄位後加上`__`+`欄位名稱`，例如一table < Agent >的user欄位是參照table User，而我們要取出特定email(此欄位屬於table User)。

    ```python
    get_agent = Agent.objects.get(user__email="XXX")
    ```

- 可以用python shell來操作指令`$python manage.py shell`

  - 新增user來測試`$python manage.py createsuperuser`

  - 接者開啟shell輸入，可看到以新增使用者

    ```python
    from django.contrib.auth import get_user_model
    User = get_user_model()
    User.objects.all()#<QuerySet [<User:yehs1225>]>
    ```

## 管理者頁面設定

django有自己提供好用的管理者頁面，一旦建立完model就可以在網頁上操作資料庫。介面上也可做調整，以方便操作。

在app中的admin.py中設定

- 新增可被管理者操作的models

  ```python
  #app/admin.py
  #引入想要加入的model
  from .models import User, Lead, Agent
  #加到admin的page中
  admin.site.register(User)
  admin.site.register(Lead)
  admin.site.register(Agent)
  ```

## View

在view中引用資料庫（models），定義函數分別代表要從資料庫中執行的動作，例如app_list 、 app_detail等等。

#### 基本使用

- 新增home page

  - 在app的view.py中新增一函數

    - 用HttpResponse回應

      ```python
      #app/view.py
      from django.http import HttpResponse
      
      def home_page(request):
          return HttpResponse("hello world")
      ```

    - 用.html渲染（**templates**）

      - 我們需要在app裡新增資料夾`template`，再裡面再新增一資料夾（命名要和app名稱一樣），將.html檔案放在裡面。

      - 在view.py則用以下方法

        ```python
        #app/view.py
        def home_page(request):
            return render(request,"leads/home_page.html")
        ```

        在render中可加入第三個參數把想要加入頁面的內容傳送到html中

        ```python
        #app/view.py
        def home_page(request):
            context = {
                "name":"cama",
                "age":3
            }
            return render(request,"leads/home_page.html",context)
        ```

        而在html中則以`{{ NameOfKey }}`使用

        ```html
        ...
        {{name}}
        {{age}}
        ...
        ```

        如果有多筆資料傳入時可用

        ```django
        {% for item in list %}
        	{{item}}
        {% endfor %}
        ```

      - 在project的setting.py中設定template

        ```python
        #project/setting.py
        TEMPLATES = [
            {
        	...
                'DIRS': [BASE_DIR/"templates"],
            ...
            },
        ]
        ```

  - 在project的urls.py中引入並加入要連結的地址

    ```python
    #project/urls.py
    from leads.views import home_page
    urlpatterns = [
        ...,
        path('',home_page)
    ]
    ```

## URL Namespaces

#### 讓url在它該在的app中

我們在project中的urls.py要告訴這個專案，有用到哪個app就去那個app中找。

1. 在app中新增urls.py這個檔案

   ```python
   #app/urls.py
   from django.urls import path
   from .views import home_page
   
   app_name = 'leads'
   
   urlpatterns = [
       path('all/',home_page)
   ]
   ```

2. 告訴project要去app中找連結

   `import include`

   ```python
   #project/urls.py
   from django.contrib import admin
   from django.urls import path,include
   
   urlpatterns = [
       path('admin/', admin.site.urls),
       path('app_name/',include('app_name.urls',namespace="app_name"))
   ]
   ```

#### 要看整個list和它的detail

假設我們現在有個網頁僅列出列表（list），每列呈現使用者姓名，並且希望能夠透過特定的primary key number作用於urls以連結到指定使用者的詳細訊息（detail）。下圖的id就是此table的primary key，例如我們希望輸入1時就帶往Joe的頁面。

![](/img/docs/django/crm/lead_table.jpg)

1. 首先我們在view.py中新增一函數，接收`request`及`pk`

   ```python
   #app/view.py
   def lead_detail(reauest,pk):
       print(pk)#顯示在terminal
       return HttpResponse("here is the detail view")
   ```

2. 接者在urls.py中以`<int:pk>/`讓路徑在接收到pk時會使用detail這個函數

   ```python
   #app/urls.py
   urlpatterns = [
       path('',lead_list),
       path('<int:pk>/',lead_detail)
   ]
   ```

3. 希望在原本html頁面中新增< a >tag，如此一來當我們點擊某個使用者後，就會將頁面帶向該使用者的詳細內容。

   可以直接在`href`用`key.pk`

   ```django
   {% for lead in leads %}
       <div class="lead">
           <a href="/leads/{{lead.pk}}/">{{lead.first_name}} {{lead.last_name}}</a>. Age: {{lead.age}}
       </div>
   {% endfor %}
   ```

4. 確認可運作後就可以新建一個html頁面for detail，並將httpResponse改為render

   ```python
   #app/view.py
   def lead_detail(request,pk):
       lead = Lead.objects.get(id=pk)
       context = {
           'lead':lead
       }
       return render(request,"leads/lead_detail.html",context)
   ```

## Forms

希望能夠提交表單來新增使用者等，新增使用者在admin中可以辦到，但在此希望可以利用網頁提交表單的方式。

1. 新增create.html在templates/app內

2. 新增路徑在app/urls.py

   ```python
   #app/urls.py
   urlpatterns = [
       path('',lead_list),
       path('create/',lead_detail),
       path('<int:pk>/',lead_create)#等會要在view.py中新增一函數create
   ]
   ```

3. 在app底下新建forms.py

   可以把app中所有要用到表單定義在這裡，再在view.py中引入

   ```python
   #app/forms.py
   from django import forms#引用forms模組
   class LeadForm(forms.Form):#使用forms中的Form
       first_name=forms.CharField()
       last_name = forms.CharField()
       age=forms.IntegerField(min_value=0)
   ```

4. 在view.py中使用forms

   主要的步驟如下

   1. 從forms.py引用需要的form
   2. 在context中先填入form `form = LeadForm()`
   3. 檢查是否為POST `if request == "POST"`，是則填入request`form = LeadForm(request.POST)`
   4. `form.is_valid()`django檢查是否有效
   5. 用`form.cleaned_data`拿到"乾淨"的資料並取出
   6. 有特定欄位無法從取得，可考慮拿出該table中的第一筆資料來用`table.objects.first()`
   7. 建立資料`table.objects.create(...)`
   8. `redirect`導回頁面，（須`from django.shortcuts import redirect`）

   ```python
   #app/veiws.py
   ...
   from django.shortcuts import redirect
   from .models  import Agent
   from .forms import LeadForm
   
   def lead_create(request):
       form = LeadForm()
       if request.method=="POST":
           print('Receiving a post request')
           form = LeadForm(request.POST) 
           if form.is_valid():#check form
               print("the form is valid")
               print(form.cleaned_data)#got{'first_name': 'Sally', 'last_name': 'Somul', 'age': 28}
               first_name = form.cleaned_data['first_name']
               last_name = form.cleaned_data['last_name']
               age = form.cleaned_data['age']
               #because we don't get agent from form
               agent = Agent.objects.first()#got first row of Agent
               Lead.objects.create(
                   first_name = first_name,
                   last_name = last_name,
                   age = age,
                   agent = agent
               )
               print("lead created")
               return redirect('/leads')
       context={
           "form":form
       }
       return render(request,"leads/lead_create.html",context)
   ```

5. 在html檔中設定

   - 在引用要用form tag包起來，才可以提交

     ```django
     //app/templates/app/create.html
     
     <form method="post">
         {% csrf_token %}{% comment %} 防止csrf {% endcomment %}
         {{form.as_p}}
         <button>submit</button>
     </form>
     ```

   - 引用傳入參數時，可以設定呈現樣式，例如下面右邊以< p > paragh呈現。


   | {{form}}                            | {{form.as_p}}                       |
   | ----------------------------------- | ----------------------------------- |
   | ![](/img/docs/django/crm/form1.jpg) | ![](/img/docs/django/crm/form1.jpg) |


## Model Form

除了上面自己做一個form之外，可以用django提供的ModelForm直接把model變成form。

1. 在forms.py設定model form

   ```python
   #app/forms.py
   from .models import Lead
   
   class Table1ModelForm(forms.ModelForm):
       model = Lead
       fields = (
       	field1,#field in the table
           ...,
      		field4
       )
   ```

2. 在view.py中更改函數內容

   將之前用到`Table1Form`改成`Table1ModelForm`，這時表單就會收到原本table所需要的所有欄位，所以之前取用table2中的第一筆資料的做法也可改回使用使用者輸入的資料就行。

   此外，因為我們已經在forms.py中建立ModelForm指定要使用哪個model，所以也可以把確認`form.is_valid():`之後

   要取出資料再放入table中的動作

   ```python
   first_name = form.cleaned_data['first_name']
   last_name = form.cleaned_data['last_name']
   age = form.cleaned_data['age']
   agent = form.cleaned_data['agent']
   Lead.objects.create(
       first_name = first_name,
       last_name = last_name,
       age = age,
       agent = agent
   )
   ```

   簡化為

   ```python
   form.save()
   ```

​		內可傳參數，例如`commit=False`代表不要馬上傳到model，我們可用object儲存目前form得到的狀態，在進行額外操作，所以可變成`obj=form.save(commit=False)`

## Update View （Form）

1. 定義新函數在app/view.py

   ```python
   #app/view.py
   def lead_update(request,pk):
       lead =Lead.objects.get(id=pk)
       form = LeadForm()
       if request.method=="POST":
           form = LeadForm(request.POST) 
           if form.is_valid():
               first_name = form.cleaned_data['first_name']
               last_name = form.cleaned_data['last_name']
               age = form.cleaned_data['age']
               lead.first_name = first_name
               lead.last_name = last_name
               lead.age = age
               lead.save()
               return redirect('/leads')
       context = {
           "form":form,
           'lead':lead
       }
       return render(request,"app/lead_update.html",context)
   ```

   跟create一樣，也可改用較簡潔的方式

   ```python
   #app/view.py
   def lead_update(request,pk):
       lead = Lead.objects.get(id=pk)
       form = LeadModelForm(instance=lead)
       if request.method=="POST":
           form = LeadModelForm(request.POST,instance=lead) 
           if form.is_valid():
               form.save()
               return redirect('/leads')
       context = {
           "form":form,
           'lead':lead
       }
       return render(request,"leads/lead_update.html",context)
   ```

2. 新增app/templates/update.html

   基本上跟create一樣

   ```django
   //app/templates/update.html
   <form method="post">
           {% csrf_token %}
           {{form.as_p}}
           <button>submit</button>
   </form>
   ```

3. 在app/urls.py中要新增path

   ```python
   #app/urls.py
   path('<int:pk>/update/',lead_update),
   ```

## Delete View（form）

1. 定義新函數在app/view.py

   ```python
   def lead_delete(request,pk):
       lead=Lead.objects.get(id=pk)
       lead.delete()
       return redirect('/leads')
   ```

2. 在app/urls.py加上path

   ```python
   urlpatterns = [
       ...
       path('<int:pk>/delete/',lead_delete),
       ...
   ]
   ```

3. 在detail.html加上刪除的link

   ```django
   <a href="/leads/{{ lead.pk }}/delete">Delete</a>
   ```

## URL Names

現在的app/urls.py中的path長這樣

```python
#app/urls.py
urlpatterns = [
    path('',lead_list),
    path('<int:pk>/',lead_detail),
    path('<int:pk>/update/',lead_update),
    path('<int:pk>/delete/',lead_delete),
    path('create/',lead_create),
]
```

也就是說，我們在網址列輸入對應的字串就能進到該路徑位置，然而，有時候我們會希望可以更改顯示在網址列的字，於是將path中的第一個參數例如`create`直接改成`create-a-lead`，這樣確實是改好了沒錯，但是但是!如果在其他.html的< a > tag中的`href`有指向`/create`的話就必須要都更改，要在茫茫人海中尋找實在不容易。這也是為何我們應該要避免**hardcode**出現的原因。

#### path的第三個參數 - name

要避免hardcode出現，就是加上第三個參數，並且在其他需要連結到的地方都是用name所設定好的字串，如此一來以後要改顯示在網址列的字串時就不用擔心!

```python
#app/urls.py
urlpatterns = [
    path('',lead_list,name='lead-list'),
    path('<int:pk>/',lead_detail,name='lead-detail'),
    path('<int:pk>/update/',lead_update,name='lead-update'),
    path('<int:pk>/delete/',lead_delete,name='lead-delete'),
    path('create/',lead_create,name='lead-create'),
]
```

而在各html檔案中，則可將`href`改為`{% url 'leads:XXXX' %}`的形式，第一個`leads`是因為我們在project中的urls.py有這一行`path('leads/',include('leads.urls',namespace="leads"))`，而`:`之後接的`XXX`就是我們在`name`所設定的。

##### 一般的html中link的變動

```django
//原始
<a href="/leads/create">Create a new Lead</a>
//變成
<a href="{% url 'leads:lead-create' %}">Create a new Lead</a>
```

##### 有包含pk的

```django
//原始
<a href="/leads/{{lead.pk}}/">{{lead.first_name}} {{lead.last_name}}</a>. Age: {{lead.age}}
//變成
<a href="{% url 'leads:lead-detail' lead.pk %}">{{lead.first_name}} {{lead.last_name}}</a>. Age: {{lead.age}}
```

## Extending Templates

因為我們創造的create、detail、update....等等所有的html都很相似，因此應該做些優化，避免重複做同樣的事情。

1. 在最外層（at the same layer of project and apps）新增templates資料夾，並新增base.html（取叫base是慣例）

   - 放入相同的東西例如整個html大綱、title、sytle等等
   - 在`body`部分，則是用`{% block content %}`、`{% endblock content %}`包住，代表到時候要被渲染的東西會放在這個`block`中

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <style>
           .lead{
               padding:10px 6px;
               margin-top:10px;
               background-color:#f6f6f6;
               width:100%;
           }
       </style>
       <title>YEHCRM</title>
   </head>
   
   <body>
       {% block content %}
       {% endblock content %}
   </body>
   </html> 
   ```

   

2. 把原先html中很相似的地方刪除

   以lead_list來說就是除了這段以外的。

   - 在開頭加上`{% extends "base.html" %}`
   - 並用`{% block content %}`、`{% endblock content %}`包住要被渲染的（就是下面這區塊）

   ```django
   {% extends "base.html" %}
   
   {% block content %}
   
       <a href="{% url 'leads:lead-create' %}">Create a new Lead</a>
       <hr/>
       <h1>This is all or our list</h1>
       {% for lead in leads %}
           <div class="lead">
               <a href="{% url 'leads:lead-detail' lead.pk %}">{{lead.first_name}} {{lead.last_name}}</a>. Age: {{lead.age}}
           </div>
       {% endfor %}
   
   {% endblock content %}
   ```

##### 如果想要引用其他檔案

例如在和base.html同層新增一個scripts.html，在base中用`{% include%}`引用

```django
{% block content %}
{% endblock content %}
{% include "script.html" %}
```

## TwailwindCss

Found useful component here ! https://github.com/aniftyco/awesome-tailwindcss

下面這裡是用https://tailblocks.cc/

1. 在base.html引用

   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   ```

2. 建立navbar

   1. 在twailwind中找到適用的模板後，在與base.html同層的地方新建navbar.html，並將code貼入
   2. 在base.html引入（`{% include "navbar.html" %}`）

3. 建立登入頁面

   1. 建立landing.html

   2. 在app/views.py中定義新函數

      ```python
      def leading_page(request):
          return render(request,"landing.html")
      ```

   3. 在project中的urls.py新增路徑

      ```python
      from leads.views import landing_page#引入剛定義好的函數
      
      urlpatterns = [
          ..
          path('',landing_page,name='landing-page'),
      	..
      ]
      
      ```

4. 為已存在的html加上twailwind css

   直接加在`{% block content %}`內

## Class Based View

之前都是用function based view，來handle request，而用class可以減少很多code，Django就提供了`django.views.generic`這個模組，裡面可以引用各種view來使用，之後再到urls.py作相對應的修正。

#### CRUD

Create, Retrieve, Update and Delete + List.

基本上所有的網頁都可由這些動作完成，因此Django很貼心的提供了這些View讓我們使用，每個view中最基礎的設定就是`template_name`。以下對各種情況分別進行修改：



#### 一般頁面 - `TemplateView`

e.g.Landing_page

`template_name`

1. ##### 修改views.py的func => class based

    原先的function

    ```python
    #app/views.py
    def landing_page(request):
        return render(request,"landing.html")
    ```

    引用TemplateView

    ```python
    #app/views.py
    from django.views.generic import TemplateView

    class LandingPageView(TemplateView):
        template_name="landing.html"
    ```

2. ##### 修改在project/urls.py中引用的模組及路徑

    引入ClassBasedView後，以`ClassBasedView.as_view()`的方式呼叫

    ```python
    from leads.views import landing_page,LandingPageView
    
    urlpatterns = [
    .. path('',LandingPageView.as_view(),name='landing-page'),
    ..
    ]
    ```



#### List頁面 - `ListView`

e.g.lead_list

`template_name`

`queryset`:放入要操作資料庫的部分。

`context_object_name`optional but recommend（說明在第三點html）

1. ##### 修改views.py的func => class based

    原先的function

    ```python
    def lead_list(request):
        leads = Lead.objects.all()
        context = {
            'leads':leads,
        }
        return render(request,"leads/lead_list.html",context)
    ```

    引用ListView

    ```python
    class LeadVistView(ListView):
        template_name = "leads/lead_list.html"
        queryset = Lead.objects.all()
    ```

2. ##### 修改在app/urls中引用的模組及路徑

   ```python
   from .views import (
       ..
       LeadVistView
   )
   urlpatterns = [
   ..   path('',LeadVistView.as_view(),name='lead-list'),
   ..  
   ]
   ```

3. ##### 修正html中的參數

   - 因為原先的function是自訂context內容再傳去html中，像這樣：


   ```python
   def lead_list(request):
       ...
       context = {
           'leads':leads,
       }
       return render(request,"leads/lead_list.html",context)
   ```

   因此，我們在html中是以`leads`來取用內容，而使用ListView時，預設的名稱是`object_list`，所以把這部分改掉就行：

   ```django
   {% for lead in leads %}
   ```
   ```django
   {% for lead in object_list %}
   ```

   - ​	或者設定`context_object_name`，就不用更改html檔案

   ```python
   class XXX(ListView):
   	...
   	context_object_name = "leads"
   ```



#### Detail頁面 - `DetailView`

e.g.lead_detail

`template_name`

`queryset`

大致上與List相同，僅注意在`queryset`也是使用一樣的`Lead.objects.all()`而不需要像原本function中設定用`.get(id=pk)`



#### Create頁面 - `CreateView`

e.g.lead_create

`template_name`

`form_class`:連結表單的部分。

`reverse`:重新導回某頁面。

1. ##### 修改views.py的func => class based

   - form_class

     ```python
     Class XXX(CreateView):
         form_class = LeadModelForm
     ```

   - import reverse from django.shortcuts

       ```python
       from django.shortcuts import reverse
       ```

   - `reverse()`內是`namespace`(leads) + `path (name)`(lead-list)

     ```python
         def get_success_url(self):
             return reverse("leads:lead-list")
     ```

2. ##### 修改urls.py的path

#### Update頁面 - `UpdateView`

`template_name`

`form_class`

`queryset`

需要操作表單和資料庫，所以用到

`form_class`及`queryset`，

```python
class LeadUpdateView(UpdateView):
    template_name = "leads/lead_update.html"
    queryset = Lead.objects.all()
    form_class = LeadModelForm
    
    def get_success_url(self):
        return reverse("leads:lead-list")
```



#### Delete頁面 - `DeleteView`

`template_name`

`queryset`

1. ##### views.py的class

   ```python
   class LeadDeleteView(DeleteView):
       template_name = "leads/lead_delete.html"
       queryset = Lead.objects.all()
       
       def get_success_url(self):
           return reverse("leads:lead-list")
   ```

2. ##### templates/app/.html

    因為必須要有`template_name`，所以我們要新建一個lead_delete.html。	
    
    這裡我們同樣保留form tag，因為在DeleteView就是預設要有提交的功能來確定要刪除。
    
    ```django
    {% comment %} app/templates/app/.html {% endcomment %}
    {% extends "base.html" %}
    {% block content %}
        <a href="{% url 'leads:lead-list' %}">Go back to leads</a>
        <hr/>
        <h1>Are you sure you want to delete this lead</h1>
        <form method="post">
            {% csrf_token %}
            {{form.as_p}}
            <button>submit</button>
        </form>
    {% endblock content %}
    ```

## Set Static files

1. 在最外層創建資料夾static並創建資料夾&lt;js&gt;、&lt;css&gt;、&lt;images&gt;來存放以後要用的檔案

2. 在project中的settings.py可以看到本來就有`STATIC_URL = '/static/'`，我們另外再設定下面兩個變數

    ```python
    STATICFILES_DIRS=[
        BASE_DIR/"static" #像在template的設定
    ]
    STATIC_ROOT="static_root"
    ```

3. 在project/urls.py設定

    - `from django.conf import settings`讓我們可以使用第二點setting中的`STATIC_URL`和`STATIC_ROOT`

    - `from django.conf.urls.static import static`讓我們可以設定
    
      ```python
      static('settins.STATIC_URL',document_root=settings.STATIC_ROOT)
      ```
    
      我們將這一段加在底下，而不是直接放在URLPattern中，因為當部署時，server可能會將STATIC移至不同位置，不像現在在本地開發的狀態，所以不總是執行他。
    
      ```python
      if settings.DEBUG:
          urlpatterns += static('settins.STATIC_URL',document_root=settings.STATIC_ROOT)
      ```
    
4. 在base.html中使用

   ```django
   {% load static %}
   <!DOCTYPE html>
   <html lang="en">
   <head>
       ...
       <link href="{% static 'css/styles.css' %}" rel="stylesheet"/>
       ...
   </head>
   <body>
       ...
       <script src="{% static 'js/main.js' %}"/>
   </body>
   </html> 
   ```


## Send Emails

現在我們想要在「新增玩Lead時，寄發email」。因此我們在app/views.py定義class  LeadCreateView定義新函數。

註：我們可以選取引用的模組按右鍵:go to defination 去查看原始的定義。

1. 重新定義`form_valid`之後要執行的事

   ```python
   #app/views.py
   class LeadCreateView(CreateView):
      ...
       def form_valid(self,form):
           return super(LeadCreateView,self).form_valid(form)
   ```

2. 引入`send_email`

   ```python
   #app/views.py
   from django.core.mail import send_mail
   def form_valid(self,form):
           #TO SEND EMAIL
           send_mail(
               subject="A lead has been created",
               message="Go to the site to see the new lead",
               from_email="test@test.com",
               recipient_list=["test2@test.com"]
           )
           return super(LeadCreateView,self).form_valid(form)
   ```

3. 在project中settings.py設定

   告訴django如何 send email

   ```python
   #project/settings.py
   EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
   #in real , we use smtp instead of console
   ```

最後就可得到

```bash
Content-Type: text/plain; charset="utf-8"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
Subject: A lead has been created
From: test@test.com
To: test2@test.com
Date: Fri, 25 Feb 2022 06:24:40 -0000
Message-ID: <164577028083.2132.15977409263506702204@yehs1225-VirtualBox>

Go to the site to see the new lead
```

## Authentication

*使用miniconda來建立環境。

可以在minconda3/python3.9/site-packages/django/contrib/auth/auth/views.py中查看定義好的相關模組，裡面有Login、Logout、Password相關view。

#### Login/Logout

其中我們要使用的是`class LoginView()`、`class LogoutView()`，在`template_name `中會用到'registration/login.html'，所以我們回到最外層的templates中新建資料夾和檔案。

1. templates/registration/login.html

   ```django
   #templates/registration/login.html
   {% extends 'base.html' %}
   {% block content %}
   
   <form method="POST">
       {% csrf_token %}
       {{ form.as_p }}
       <button type="submit">Login</button>
   </form>
   
   {% endblock content %}
   ```

2. project/urls.py

   ```python
   from django.contrib.auth.views import LoginView
   urlpatterns = [
   ...    path('',LoginView.as_view(),name='login'),   
   ]
   ```

3. project/settings.py

   因為預設完登入後會導回特定的url，但我們沒有要新增一個檔案，只是希望回到本來app的首頁，所以可在settings中設定

   ```python
   LOGIN_REDIRECT_URL="/leads"
   ```

4. 設定navbar的登入狀態顯示

   - `{% if request.user.is_authenticated %} `、`{% else %}`和`{% endif %}`
   - &lt;a &gt; Login的href也要記得更改

   ```django
   {% if not request.user.is_authenticated %}
      <a class="mr-5 hover:text-gray-900">Sign up</a>
   {% endif %}    
   {% if request.user.is_authenticated %}
      You are logged in: {{request.user.username}}
   {% else %}
      <a href="{% url 'login' %}" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
           Login
         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
           <path d="M5 12h14M12 5l7 7-7 7"></path>
         </svg>
      </a>
   {% endif %}
   ```

#### Sign up

1. app/forms.py

   ```python
   from django.contrib.auth import get_user_model
   from django.contrib.auth.forms import UserCreationForm,UsernameField
   class CustomUserCreationForm(UserCreationForm):
       class Meta:
           model = User
           fields =("username",)
           field_classes = {'username':UsernameField}
   ```

   `class Meta`讓你可在model內用metadata（指的是任何非model中現存的欄位）

2. app/views.py

   ```python
   from .forms import ...,CustomUserCreationForm
   class SignupView(CreateView):
       template_name = "registration/signup.html"
       form_class = UserCreationForm
       
       def get_success_url(self):
           return reverse("login")   
   ```

3. template/registration/signup.html

   ```django
   {% extends 'base.html' %}
   {% block content %}
   
   <form method="POST">
       {% csrf_token %}
       {{ form.as_p }}
       <button type="submit">SignUp</button>
   </form>
   
   {% endblock content %}
   ```

4. app/urls.py

   ```python
   urlpatterns = [
   ... path('signup/',SignupView.as_view(),name='signup'),  
   ...
   ]
   ```

## Test

####  1. Just In app/test.py 

我們可以在app資料夾中找到test.py並在其中撰寫Class 和 function ，以`$python manage.py test`來測試。

- class LandingPageTest 測試views.py中的Landing page
- function以`test_`作為開頭，被視為一個test
- `(self)`提供許多function可用來測試
- `self.client`就像`request`一樣可以用`.get`、`.post`等等http 請求方法
- `reverse`用來連到url
- `self.assertEqual`檢查兩物件是否相等
- `self.assertTemplateUsed`檢查response是否是想要的檔案

```python
from django.test import TestCase
from django.shortcuts import reverse

class LandingPageTest(TestCase):
    
    def test_get(self):
        response = self.client.get(reverse("landing-page"))
        # TO test status code
        self.assertEqual(response.status_code,200)
        # TO test template code
        self.assertTemplateUsed(response,"landing.html")
```

#### 2. Make a folder : test

因為之後專案可能會變很大，所以一個好的做法可以在app底下新增資料夾tests，裡面先新增一個`__init__.py`，在像上面一樣建立想要的`test.py`，命名方式可以是`test_views.py`、`test_forms.py`等。

## Auth Permissions

#### 這不是誰都可以看的💢

有些views我們希望在有權限的人登錄後才可以看到。我們需要

```python
from django.contrib.auth.mixins import LoginRequiredMixin
```

並且將`LoginRequiredMixin`放在class（）第一個位置像這樣

```python
class LeadVistView(LoginRequiredMixin,ListView):
    ...
```

接者在瀏覽器的網址列可看到

```
http://localhost:8000/accounts/login/?next=/leads/
```

會先導到登入頁面，在redirect到原本要去的頁面，其中登入頁面預設為`accounts/login`，但我們的app中是設定`login`，所以去project中settings.py設定

```python
LOGIN_URL = '/login'
```

#### 你的專屬內容

我們現在有3個models:User, Lead, Agent，希望做到的功能是使用者登入後，屬於該User的Lead和Agent可以呈現及管理，因此我們新增一個model叫做UserProfile，並且也修改Agent。

```python
class UserProfile(models.Model):
    user = models.OneToOneField("User",on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Agent(models.Model):
    user = models.OneToOneField("User",on_delete=models.CASCADE)
    organization = models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    def __str__(self):
        return self.user.email    
```

新增完新model要記得去admin.py註冊

```python
from .models import ...,UserProfile
admin.site.register(UserProfile)
```

#### Signal

可以做設定，讓發生特定事情時django會發送signal。

目前想做的是：當有新user被建立時，就新建一筆UserProfile資料。

1. 引入模組：

```python
from django.db.models.signals import post_save
```

`post_save` :當POST請求被成功儲存在model時（另外也有`pre_save`，作用於尚未被存到資料庫時）

2. 定義function：

```python
# a signal once the post_save is set
def post_user_created_signal(sender,instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

post_save.connect(post_user_created_signal,sender=User)
```

`post_save.connect(arg1,arg2)`：

- arg1 : 要呼叫的function
- arg2 : 要連接的model

`def post_user_created_signal(sender,instance, created, **kwargs)` :

- sender : signal連接的model
- instance : 發出訊號的物件，例如這裡是更改使用者test1的資料，print出來就是test1
- created : 用來偵測這次的signal是否是全新的post或只是修改
- **kwargs : 接收剩餘所有arguments

#### User Types

將user分為兩類：組織管理者（organizor）及單一機構（agent）。於是回到原先建立的model User增加新欄位`is_organizer`及`is_agent`。

```python
class User(AbstractUser):
    is_organizor = models.BooleanField(default=True)
    is_agent = models.BooleanField(default=False)
```

之後我們可以在navbar中過濾是否為organizor

```html
{% if request.user.is_organizor %}
	<a href="{% url 'agents:agent-list' %}" class="mr-5 hover:text-gray-900">Agents</a>
{% endif %}
```

然而這樣只是不顯示在渲染的畫面上，實際上仍可透過在網址上直接輸入來存取指定頁面，因此應該在views.py去做限制。

#### 客製化的Mixin

在前面設定view時我們曾經用過

```python
from django.contrib.auth.mixins import LoginRequiredMixin
class LeadVistView(LoginRequiredMixin,ListView):
    ...
```

來確認使用者是否已登入，但是現在不只是使用者登入，還要檢查他是否為organizer，因此我們去察看此模組後

```python
class LoginRequiredMixin(AccessMixin):
    """Verify that the current user is authenticated."""
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return self.handle_no_permission()
        return super().dispatch(request, *args, **kwargs)
```

可以用`AccessMixin`來客製化自己的mixin。

1. 新增mixins.py

   ```python
   from django.contrib.auth.mixins import AccessMixin
   from django.shortcuts import redirect
   
   class OrganizorAndLoginRequiredMixin(AccessMixin):
       """Verify that the current user is authenticated and is organizor."""
       def dispatch(self, request, *args, **kwargs):
           if not request.user.is_authenticated or not request.user.is_organizor:
               return redirect("leads:lead-list")
           return super().dispatch(request, *args, **kwargs)    
   ```

   除了在if判斷中加入

   `or not request.user.is_organizor`

   由於 return 原先的`self.handle_no_permission()`是會丟出error code（403 Forbidden），我們可以把它改成redirect到指定頁面。

2. 在views.py中引用

   ```python
   #agents.views.py
   from .mixins import OrganizorAndLoginRequiredMixin
   
   class AgentListView(OrganizorAndLoginRequiredMixin,generic.ListView):
       template_name = "agents/agent_list.html"
       context_object_name = "agents"
       def get_queryset(self):
           return Agent.objects.all()
   ```

## Password

#### set random password 

```python
user.set_password(f"{random.randint(0,100000)}")
```

#### reset password

在auth.views中有提供重設密碼的view（如同login/logout），因此我們在project的urls.py中引用，1並在url中加入路徑。

```python
from django.contrib.auth.views import(
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView
)

urlpatterns = [
    ...
    path('password-reset/',PasswordResetView.as_view(),name='password-reset'),   
    path('password-reset-confirm/<uidb64>/<token>',PasswordResetConfirmView.as_view(),name='password-reset-confirm'),   
    path('password-reset-done/',PasswordResetDoneView.as_view(),name='password-reset-confirm'),   
]
```

在引用後去查看這幾個vieew可以看到他們分別會對應需要的.html檔案

- PasswordResetView

  - password_reset_form.html

    按forget password後會先連到這裡

    ```python
    {% extends 'base.html' %}
    {% block content %}
    
    <form method="POST">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Reset password</button>
    </form>
    <hr>
    <a href="{% url 'login'%}">Already have an account?</a>
    
    {% endblock content %}
    ```

  - password_reset_email.html

    下方這個link的呈現方式不是最佳的，django有提供相關package可使用。

    ```django
    You've requested to reset your password.
    
    Please click the following link to enter your new password :
    
    {{ protocol }}://{{ domain }}/password-reset-confirm/{{uid}}/{{token}}
    ```

    

- PasswordResetConfirmView

  - password_reset_confirm.html

    ```django
    {% extends 'base.html' %}
    {% block content %}
    
    <form method="POST">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Reset password</button>
    </form>
    <hr>
    <a href="{% url 'login'%}">Already have an account?</a>
    
    {% endblock content %}
    ```

    

- PasswordResetDoneView

  - password_reset_done.html

    ```django
    {% extends "base.html" %}
    
    {% block content %}
        <h1>We've sent a email to reset the password</h1>
    {% endblock content %}
    ```

- PasswordResetCompleteView

  - password_reset_complete.html

    ```django
    {% extends 'base.html' %}
    {% block content %}
    
    <h1>Password reset completed</h1>
    <hr>
    <p>Click <a href="{% url 'login'%}">here</a> to login</p>
    
    
    {% endblock content %}
    ```


## Dynamic choices

#### Pass arguments from views to forms

views.py

```python
#pass extra arguments into the form
def get_form_kwargs(self):
    return {
        "request":self.request
    }
```

forms.py

```python
class AssinAgentForm(forms.Form):
    agent = forms.ModelChoiceField(queryset=Agent.objects.none())

    #get parameter passed in views
    def __init__(self, *args, **kwargs):
        print(kwargs)
#{'request': <WSGIRequest: GET '/leads/1/assign-agent/'>}
```

#### Assign agents to lead (agent in the organization)

the choices of agents are generated dynamically according to the organization.

```python
#views.py
class AssignAgentView(OrganizorAndLoginRequiredMixin,FormView):
    template_name = "leads/assign_agent.html"
    form_class = AssinAgentForm

    #pass extra arguments into the form
    def get_form_kwargs(self,**kwargs):
        kwargs=super(AssignAgentView,self).get_form_kwargs(**kwargs)
        kwargs.update({
            "request":self.request
        })
        return kwargs

    def get_success_url(self):
        return reverse("leads:lead-list")

    def form_valid(self,form):
        agent = form.cleaned_data['agent']
        lead = Lead.objects.get(id=self.kwargs["pk"])
        lead.agent = agent
        lead.save()
        return super(AssignAgentView,self).form_valid(form)
```

```python
#forms.py
class AssinAgentForm(forms.Form):
    agent = forms.ModelChoiceField(queryset=Agent.objects.none())

    #get parameter passed in views
    def __init__(self, *args, **kwargs):
        request = kwargs.pop('request')
        agents = Agent.objects.filter(organization=request.user.userprofile)
        #initialize the form
        super(AssinAgentForm,self).__init__(*args,**kwargs)
        self.fields['agent'].queryset = agents
```

## Filter by category

將leads依照類別分類顯示，目前的model如下

```python
class Lead(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    age = models.IntegerField(default=0)
    organization = models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    agent = models.ForeignKey("Agent",null=True,blank=True,on_delete = models.SET_NULL)
    category = models.ForeignKey("Category",null=True,blank=True,on_delete = models.SET_NULL)

#category of leads : New(initial), contacted, Converted, Unconverted
class Category(models.Model):
    name = models.CharField(max_length=30)
    organization = models.ForeignKey(UserProfile,on_delete=models.CASCADE)   
```

#### 有三種方法可以實現

前兩種基本上是長得像這樣子，`get_context_data(self,**kwargs):`，再對context做一些update

```python
class CategoryDetailView(LoginRequiredMixin,DetailView):
    template_name = 'leads/category_detail.html'
    context_object_name = 'category'

    def get_context_data(self,**kwargs):
        context = super(CategoryDetailView,self).get_context_data(**kwargs)   
        leads = ...
        context.update({
			'leads':leads
        })
        return context

    def get_queryset(self):
        user = self.request.user
        #initial query of lead in the organization
        if user.is_organizor:
            queryset = Category.objects.filter(
                organization = user.userprofile
            )
            else:
                queryset = Category.objects.filter(
                    organization = user.agent.organization
                )
                return queryset
```


1. `get_object`

   此方法在DetailView中

   [get_object]: https://docs.djangoproject.com/en/4.0/ref/class-based-views/mixins-single-object/#django.views.generic.detail.SingleObjectMixin.get_object

   ，會回傳這個view所需要的單一物件，使用`queryset`或`get_queryset()`當作物件的來源，使用網址列所提供的引數作為查找目標。（翻譯得很爛，可以直接看文件!）
   
   ```python
   leads = Lead.objects.filter(category=self.get_object())
   ```

2. 反向去搜尋foriegn key

   因為model Category 是 model Lead的FK，所以可以用這樣的方法。

   ```python
   leads = self.get_object().lead_set.all()
   ```

   另外也可以在models.py做些更動，在Lead中的category欄位加入新的field `related_name`（這個name用來告知連結兩model的關係）

   ```python
   category = models.ForeignKey("Category",related_name='leads',null=True,blank=True,on_delete = models.SET_NULL)
   ```

   因此在views.py就可以改成

   ```python
   leads = self.get_object().leads.all()
   ```

3. **有了`related_name`可以直接在html中使用**

​		前面兩種方法因為在views.py中已經過濾好要顯示的lead，所以在html中是長這樣子

```django
{% for lead in leads %}
    <tr>
        <td class="px-4 py-3">{{ lead.first_name }}</td>
        <td class="px-4 py-3">{{ lead.last_name }}</td>
    </tr>
{% endfor %}
```

​	而因為剛剛在model中設定了`related_name = leads`，所以不需要在views中先`get_context_data()`，而是直接將html改成

```django
{% for lead in category.leads.all %}
    <tr>
        <td class="px-4 py-3">{{ lead.first_name }}</td>
        <td class="px-4 py-3">{{ lead.last_name }}</td>
    </tr>
{% endfor %}
```

## Django Third party Packages

https://djangopackages.org/

Use crispy form for this project.

## Deployment

### Environment Variables

用django-environ來管理設定的套件，原先的設定都在project/settings.py裡面，現在將設定抽離到程式之外，以便未來有設定需要更動時僅需調整這些設定就行了。

1. `$pip install django-environ`

   （記得每次新增套件就用`$pip freeze > requirements.txt`來記錄）

2. 新建`.env`在project的根目錄中

   另外也創建一個`.template.env`之後會放在git repository上，因為我們不會想把secret_key放在網路上，所以只放模板。

   ```python
   DEBUG=True
   SECRET_KEY='XXXXXXX'
   ```

3. project/settings.py新增

   ```python
   import environ
   import os
   env = environ.Env(
       # set casting, default value
       DEBUG=(bool, False)
   )
   environ.Env.read_env()
   DEBUG = env('DEBUG')
   SECRET_KEY = env('SECRET_KEY')
   
   BASE_DIR = Path(__file__).resolve().parent.parent
   ```

   其中，為了讓我們自己決定是否程式可以讀取.env，將

   ```python
   environ.Env.read_env()
   ```

   改成

   ```python
   READ_DOT_ENV_FILE = env.bool('READ_DOT_ENV_FILE',default=False)
   if READ_DOT_ENV_FILE:
       environ.Env.read_env()
   ```

   當我們在terminal或佈署時的終端機輸入`export  READ_DOT_ENV_FILE=True`時，就可以去讀取.env，再進一步開始執行server。

### 	Set up Postgresql

1. 安裝PostgreSQL

   Ubuntu中官方套件已收錄，所以執行以下指令即可

   - `$sudo apt update`
   - `$apt-get install postgresql-12`（最新版）
   - 相關操作
     - `$systemctl status postgresql.service`查看服務氣是否正常啟動
     - 進入指令介面`$sudo -u postgres psql`（以預設管理權限使用者postgres操作）
     - 離開`Ctrl`+`d`或`q`
     - 新增使用者`createuser User1`
     - 新增資料庫`createdb dbdemo`

2. DB操作

   1. 創建資料庫`CREATE DATABASE yehcrm;`
   2. 創建使用者`CREATE USER yehcrmuser WITH PASSWORD 'XXXX';`
   3. 給予權限`GRANT ALL PRIVILEGES ON DATABASE yehcrm TO yehcrmuser;`

3. 更改.env 和 .template.env

   ```python
   DEBUG=True
   SECRET_KEY='znogy$=ohkmfq@*0a+75t6!nkhpmto2ecuae)(l6n$%uzmn@tw'
   DB_NAME="yehcrm" 
   # use "" or not is fine
   DB_USER=yehcrmuser
   PASSWORD=yehcrm1225
   DB_HOST=localhost
   
   #leave blank means go defalt
   DB_PORT=
   ```

   ** **`=`前後如有空格可能造成讀取失敗!!!!**

4. settings.py中的DATABASES

   安裝套件`psycopg2` : `pip install psycopg2-binary`

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql_psycopg2',
           'NAME': env('DB_NAME'),
           'USER':env("DB_USER"),
           'PASSWORD':env("PASSWORD"),
           'HOST':env("DB_HOST"),
           'PORT':env("DB_PORT")
       }
   }
   ```

5. `python manage.py migrate`

   因為換了資料庫，所以需要重新migrate

### Whitenoise -> Static files

http://whitenoise.evans.io/en/stable/

1. `$pip install whitenoise`
2. 修改settings.py（根據文件）
3. `$python manage.py collectstatic`

### Digital Ocean

1. Add a new app

2. Build a DB

3. enter enviroment variable for the app

4. `$pip install gunicorn`

5. add security in settings.py

   ```python
   if not DEBUG:
       SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
       SECURE_SSL_REDIRECT = True
       SESSION_COOKIE_SECURE = True
       CSRF_COOKIE_SECURE = True
       SECURE_BROWSER_XSS_FILTER = True
       SECURE_CONTENT_TYPE_NOSNIFF = True
       SECURE_HSTS_SECONDS = 31536000  # 1 year
       SECURE_HSTS_INCLUDE_SUBDOMAINS = True
       SECURE_HSTS_PRELOAD = True
       X_FRAME_OPTIONS = "DENY"
   
       ALLOWED_HOSTS = ["*"]
   
       EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
       EMAIL_HOST = env("EMAIL_HOST")
       EMAIL_HOST_USER = env("EMAIL_HOST_USER")
       EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
       EMAIL_USE_TLS = True
       EMAIL_PORT = env("EMAIL_PORT")
       DEFAULT_FROM_EMAIL = env("DEFAULT_FROM_EMAIL")
   ```

6. new file runserver.sh

   ```sh
   python manage.py collectstatic --no-input
   
   python manage.py migrate
   
   gunicorn --worker-tmp-dir /dev/shm djcrm.wsgi
   ```

   但這不能在terminal中執行，輸入`$chmod +x runserver.sh`

### Mailgun

[Transactional Email API Service For Developers | Mailgun](https://www.mailgun.com/)
