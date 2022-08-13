# GetStarted - build CRM [2]
## Model 

### Model Managers

可以在models.py裡面定義功能來manage model，像是設定特定條件的filter

```python
class LeadManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset()
    #the above is the default setting
    def get_age_below_50(self):
        return self.get_queryset().filter(age__lt=50)
    
class Lead(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    age = models.IntegerField(default=0)
    ...
    email = models.EmailField()
    
    objects = LeadManager()
    Lead.objects.get_age_below_50()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
```



### Model Admin

可以針對管理者介面增添想要呈現的功能，如下

```python
class LeadAdmin(admin.ModelAdmin):
    list_display=['first_name','last_name','age','email']
    list_display_links=['first_name']
    list_editable=['last_name']
    list_filter=['category']
    search_fields=['first_name','last_name','email']

admin.site.register(Lead,LeadAdmin)
```

![](D:\model-admin.png)

## Forms

#### Validate 

1. specific fields
2. multiple fields

```python
import django.core.exceptions import ValidationError

class LeadModelForm(forms.ModelForm):
    class Meta:
        model = Lead
        fields=(
            'first_name',
            'last_name',
            'age',
            'agent',
            'description',
            'phone_number',
            'email',
        )
        
		#specific fields
        def clean_first_name(self):
            #cleaned_data is a property of forms
            data = self.cleaned_data["first_name"]
            if data != "testuser"
            	raise ValidationError("Your name is not testuser")
            return data
        
        #multiple fields （no need to "return" again）
        def clean(self):
            first_name = self.cleaned_data["first_name"]
            last_name = self.cleaned_data["last_name"]
            if first_name+last_name != "testUser One":
                raise ValidationError("Your name is not testuser One")
```

## Image

### In admin page

1. Add new fields in the model

   ```python
   profile_picture = models.ImageField(null=True,blank=True)
   ```

2. `$pip install pillow` （`$pip freeze > requirements.txt`）

3. `$python manage.py makemigrations`、`$python manage.py migrate`

如此一來，可在admin頁面增添image file，而預設的儲存位置會在根目錄。在部署時會需要存在server端，但在本地開發時我們先設定存在image這個資料夾內。

像設定static存.js、.css等檔案一樣（因此也要放入.gitignore）：

1. 在settings.py 加入

   ```python
   MEDIA_URL = '/media'
   MEDIA_ROOT = 'media_root'
   ```

2. 在urls.py的settings.DEBUG加入

   ```python
   if settings.DEBUG:
       ...
       urlpatterns += static('settins.MEDIA_URL',document_root=settings.MEDIA_ROOT)
   ```

可在`models.ImageField`的參數加入 `upload_to`：

```python
profile_picture = models.ImageField(null=True,blank=True,upload_to='profile_pictures')
#其中profile_pictures代表會在images/新增一個資料夾儲存
```

### In html page

在上面的設定在html並不管用，也就是說如果我們是從lead_update.html這個頁面去上傳照片時，並不能被記錄到，我們還需要去改動html裡的form tag

加入form的屬性`enctype`，並設定成`"multipart/form-data"`代表允許此網頁接收圖片等檔案。

```html
<form method="post" enctype="multipart/form-data">
```

## Message

[The messages framework | Django documentation | Django (djangoproject.com)](https://docs.djangoproject.com/en/4.0/ref/contrib/messages/)

可用在成功填寫表單後跳出通知，例如我們加在成功創建Lead之後

```python
#Leads/views.py
class LeadCreateView(OrganizorAndLoginRequiredMixin,CreateView):
    ...
    def form_valid(self,form):
        lead = form.save(commit=False)
        ...
        messages.success(self.request,"Successfully create!")
        return super(LeadCreateView,self).form_valid(form)
```

或是update view

```python
class LeadUpdateView(OrganizorAndLoginRequiredMixin,UpdateView):
    template_name = "leads/lead_update.html"
    ...

    def form_valid(self,form):
        form.save()
        messages.info(self.request,"You have successfully updated this lead!")
        return super(LeadUpdateView,self).form_valid(form)
```

接者在base.html中加入（基本模板）

```django
{% if messages %}
<ul class="messages">
    {% for message in messages %}
    <li{% if message.tags %} class="{{ message.tags }}"{% endif %}>{{ message }}</li>
    {% endfor %}
</ul>
{% endif %}
```

也可以做點修改，把class改成這樣

```django
class="{% if message.tags == 'success' %}bg-green-500 text-white{% endif %}"
```

在本專案中，我們將message獨立放到message.html，再在base.html引用

```django
{% if messages %}
    {% for message in messages %}
        <div class="p-4 border-l-4
        {% if message.tags == 'success' %}
        bg-green-50 border-green-400
        {% elif message.tags == 'info' %}
        bg-blue-50 border-blue-400
        {% elif message.tags == 'warning' %}
        bg-yellow-50 border-yellow-400
        {% else %}
        bg-red-50 border-red-400
        {% endif %}
        ">
        
        <p class="text-sm
        {% if message.tags == 'success' %}
        text-green-700
        {% elif message.tags == 'info' %}
        text-blue-700
        {% elif message.tags == 'warning' %}
        text-yellow-700
        {% else %}
        text-red-700
        {% endif %}
        ">
            {{ message }}
        </p>
        </div>
    {% endfor %}
{% endif %}
```

**因為怕`if`、`else`判斷式會造成tailwind沒有採用到，所以特別放入safelist（下面Improve TailwindCSS有）**

## Custom Command

我們常用的command

`$python manage.py runserver`、`$python manage.py migrate`等等

我們可以自己加入想要的command，這裡以加入`$python manage.py create_lead`說明

1. 在app leads中新增資料夾management/commands/

2. 在裏頭新增create_lead.py

3. 在create_lead.py編寫

   import :

   `from django.core.management.base import BaseCommand`

   Method : 

   - `handle(self, *args,**options)`:基礎的方法
   - `add_arguments(self,parser)` : 接收指令中的args，例如`$python manage.py create_lead John`當中的John

   ```python
   from django.core.management.base import BaseCommand
   
   class Command(BaseCommand):
   
       def add_arguments(self, parser):
           parser.add_argument('first_name',type=str)
   
       def handle(self, *args,**options):
           print(options['first_name'])
   ```

   如果執行`$python manage.py create_lead John`就會得到John



## Improve TailwindCSS

原先是直接用整個tailwind，但是有很多其實我們完全用不到!一個原始的做法是將所有.html中有用到的放在一個檔案裡，然後引用。但我們可以使用第三方套件[Django-Tailwind 2.0.0 documentation](https://django-tailwind.readthedocs.io/en/latest/installation.html)。基本上，按照指示設定就可以。幾項重點如下

- `$python manage.py tailwind build`需要在每次有改動css後執行

- 在tailwind.config.js中設定要被包含的.html

  ```js
  module.exports = {
      content: [
          // Templates within theme app (e.g. base.html)
          '../templates/**/*.html',
          // Templates in other apps
          '../../templates/**/*.html',
          // Ignore files in node_modules 
          '!../../**/node_modules',
          // Include JavaScript files that might contain Tailwind CSS classes      
          '../../**/*.js',
          // Include Python files that might contain Tailwind CSS classes
          '../../**/*.py'
      ],
      ...
  }
  ```

- 若有一定要被包含的可放在safelist裡面（因為有時候用`if`、`else`判斷式，怕會沒被包含進來）

  ```js
  module.exports = {
      content: [
          // Templates within theme app (e.g. base.html)
          '../templates/**/*.html',
          // Templates in other apps
          '../../templates/**/*.html',
          // Ignore files in node_modules 
          '!../../**/node_modules',
          // Include JavaScript files that might contain Tailwind CSS classes      
          '../../**/*.js',
          // Include Python files that might contain Tailwind CSS classes
          '../../**/*.py'
      ],
      safelist:[
          ....//必須被包含的css樣式
      ]
      ...
  }
  ```

  

## Import Data from .CSV

這裡我們想要自動加入leads

先創立一個leads.csv，包含想要的欄位first_name, last_name, age, email

```
first_name,last_name,age,email
joe,soap,35,joesoap@test.com
bob,rice,37,bob@test.com
mary,meat,42,mary@test.com
luke,drink,25,luke@test.com
john,spoon,15,john@test.com
max,fork,39,max@test.com
mark,napkin,14,mark@test.com
billy,bottle,27,billy@test.com
```

接者修改Custom command （之前有寫過再leads/management/commands中有個create_leads.py）

1. 讀取檔案名稱、organizor_email （因為organization欄位不可空白，所以要用來找是哪個organizor）並指定給變數。

   ```python
   class Command(BaseCommand):
   
       def add_arguments(self, parser):
           parser.add_argument('file_name',type=str)
           parser.add_argument('organizor_email',type=str)
           
       def handle(self, *args,**options):
           file_name=options['file_name']
           organizor_email=options['organizor_email']
   ```

2. 引入model、將csv轉為DictReader的python package

   ```python
   from csv import DictReader
   from leads.models import Lead,UserProfile
   ```

3. 利用model UserProfile找到user後存在`organization`變數當中

   ```python
   organization = UserProfile.objects.get(user__email=organizor_email)
   ```

4. 讀取csv後，在Lead中建立資料

   ```python
   with open(file_name,'r') as read_obj:
               csv_reader = DictReader(read_obj)
               for row in csv_reader:
                   first_name = row['first_name']
                   last_name = row['last_name']
                   age = row['age']
                   email = row['email']
   
                   #TODO create the lead
                   Lead.objects.create(
                       organization=organization,
                       first_name=first_name,
                       last_name=last_name,
                       age=age,
                       email=email,
                   )
   ```

完整版

```python
from django.core.management.base import BaseCommand
from csv import DictReader
from leads.models import Lead,UserProfile

class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('file_name',type=str)
        parser.add_argument('organizor_email',type=str)

    def handle(self, *args,**options):
        file_name=options['file_name']
        organizor_email=options['organizor_email']
        organization = UserProfile.objects.get(user__email=organizor_email)

        with open(file_name,'r') as read_obj:
            csv_reader = DictReader(read_obj)
            for row in csv_reader:
                first_name = row['first_name']
                last_name = row['last_name']
                age = row['age']
                email = row['email']

                #TODO create the lead
                Lead.objects.create(
                    organization=organization,
                    first_name=first_name,
                    last_name=last_name,
                    age=age,
                    email=email,
                )

```