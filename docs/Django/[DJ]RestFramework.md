# Rest Framework

> Django REST framework is a powerful and flexible toolkit for building Web APIs.

根據[Home - Django REST framework](https://www.django-rest-framework.org/)的解釋，此框架可以提供好用的套件幫助我們建立REST APIs.

## Setup

### Installation

1. `$pip install djangorestframework`
2. Add `'rest_framework'` to your `INSTALLED_APPS` setting.
3. Add the following to your root `urls.py` file.
4. Add configuration dictionary named `REST_FRAMEWORK` to `settings.py` .

已經可以run server 並到網址api-auth/login（logout）去登入（出）。

### Add a App

1. 新增一個名為posts的app

   - `$python manage.py startapp posts`
   - 新增至INSTALLED_APPS

2. 設定models.py 和 amin.py

   ```python
   #posts/models.py
   from sre_parse import CATEGORIES
   from unicodedata import category
   from django.db import models
   
   CATEGORY_CHOICES = (
       ('DJ','Django'),
       ('RR','Ruby on Rails')
   )
   
   class Post(models.Model):
       title = models.CharField(max_length=100)
       custom_id = models.IntegerField()
       category = models.CharField(max_length=3,choices=CATEGORY_CHOICES)
       publish_day = models.DateTimeField(auto_now_add=True)#update only when created
       last_update = models.DateTimeField(auto_now=True)#update when Model.save() is called.
       
       def __str__(self):
           return self.title
   ```

   ```python
   #posts/admin.py
   from django.contrib import admin
   from .models import Post
   
   admin.site.register(Post)
   ```

## Serializers

簡易概念上來說，Django REST Framework 當中的serializers負責網頁使用者和資料庫中間的資料轉換傳遞。例如：將objects轉換成JavaScripts和前端框架可以理解的資料型態（.json）；而反向則稱為Deserialization，在初步驗證資料正確性後，將蒐集到的資料轉換為可儲存在資料庫中的形式。

**文件rest_framework/serializers.py**

Serializers and ModelSerializers 和 Forms and ModelForms類似，不同的地方在於他們不受限於 HTML output 以及 接收form

在REST framework的Serialization是兩階段的過程:

1. 處理複雜資料型態像是model instances和python primitives之間的關係.

2. 處理python primitives和
   - request藉由parsers 
   - response藉由renderers

### Overview

serializers可以在App內或之外設定，下面在App中設定。

1. 在posts中新增`serializers.py`

   ```python
   #posts/serializers.py
   from dataclasses import fields
   from rest_framework import serializers
   from .models import Post
   
   class PostSerializer(serializers.ModelSerializer):
       #Meta class is a class of a class that defines how a class behaves
       class Meta:
           model = Post
           fields = (
               'title',
               'custom_id',
               'category',
               'publish_day',
               'last_update',
           )
   ```

   

2. 在posts中`views.py` 建立一個view，這個view主要的作用就是接收data然後傳給serializer去解析（parsing），再回傳serializer解析的response給使用者瀏覽

   有兩個基本的API view可使用，一個用在class、一個用在def

   - Class : `from rest_framework.views import APIView`
   - def : `from rest_framework.decorators import api_view`

   ```python
   #posts/views.py
   from django.shortcuts import render
   from rest_framework.views import APIView
   from rest_framework.permissions import AllowAny
   from rest_framework.response import Response
   from .models import Post
   from .serializers import PostSerializer
   
   class PostView(APIView):
       permission_classes =(AllowAny,)
   
       def get(self,request,*args,**kwargs):
           queryset = Post.objects.all()
           serializer = PostSerializer(queryset,many=True)
           return Response(serializer.data)
   ```

3. 新增路徑project/urls.py

   ```python
   #project/urls.py
   from django.contrib import admin
   from django.urls import path,include
   from posts.views import PostView
   
   urlpatterns = [
       path('admin/', admin.site.urls),
       path('api-auth/',include('rest_framework.urls')),
       path('api/posts/',PostView.as_view(),name='post-list')
   ]
   ```

![](/img/docs/django/RestFramework/s1.png)

### What's going on with Serializers

藉由在python shell操作來看serializers可以幫助我們完成的動作，如同前面介紹serializer，主要展示其 **轉換資料型態，使得資料在前後端交換**

1. 啟動python shell `$python manage.py shell`

```bash
(env) yehs1225@yehs1225-VirtualBox:~/django-rf$ python manage.py shell
Python 3.9.7 (default, Sep 16 2021, 13:09:58) 
[GCC 7.5.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>>
```

2. 引入models、rest_framework、serializer

   ```bash
   >>>from posts.models import Post
   >>> from posts.serializers import PostSerializer
   >>> from rest_framework.renderers import JSONRenderer
   >>> from rest_framework.parsers import JSONParser
   ```

3. 新增一個instance - post，確認後儲存

   ```bash
   >>> post = Post(title='something new',custom_id=2,category='DJ')
   #Check the instance
   >>> post
   <Post: something new>
   >>> post.save()
   ```

4. 傳入serializer並查看，得到python原生的資料儲存方式之一 : dictionary

   ```bash
   >>> serializer = PostSerializer(post)
   >>> serializer.data
   #got python dictionary
   {'title': 'something new', 'custom_id': 2, 'category': 'DJ', 'publish_day': '2022-03-21T13:40:05.324098Z', 'last_update': '2022-03-21T13:40:05.324157Z'}
   ```

5. 為了讓前端方便使用，我們可以**轉成JSON file**

   ```bash
   >>> content=JSONRenderer().render(serializer.data)
   >>> content
   b'{"title":"something new","custom_id":2,"category":"DJ","publish_day":"2022-03-21T13:40:05.324098Z","last_update":"2022-03-21T13:40:05.324157Z"}'
   ```

6. **再把JSON file轉換回來**

   ```bash
   >>> import io
   >>> stream = io.BytesIO(content)
   >>> data=JSONParser().parse(stream)
   >>> data
   {'title': 'something new', 'custom_id': 2, 'category': 'DJ', 'publish_day': '2022-03-21T13:40:05.324098Z', 'last_update': '2022-03-21T13:40:05.324157Z'}
   ```

7. 呼叫serializer以儲存

   ```bash
   >>> serializer = PostSerializer(data=data)
   >>> serializer
   PostSerializer(data={'title': 'something new', 'custom_id': 2, 'category': 'DJ', 'publish_day': '2022-03-21T13:40:05.324098Z', 'last_update': '2022-03-21T13:40:05.324157Z'}):
       title = CharField(max_length=100)
       custom_id = IntegerField()
       category = ChoiceField(choices=(('DJ', 'Django'), ('RR', 'Ruby on Rails')))
       publish_day = DateTimeField(read_only=True)
       last_update = DateTimeField(read_only=True)
   >>> serializer.is_valid()
   True
   >>> serializer.validated_data
   OrderedDict([('title', 'something new'), ('custom_id', 2), ('category', 'DJ')])
   >>> serializer.save()
   <Post: something new>
   ```

8. 查看所有post

   ```bash
   >>> Post.objects.all()
   <QuerySet [<Post: First post>, <Post: something new>, <Post: something new>]>
   >>> serializer=PostSerializer(Post.objects.all(),many=True)
   >>> serializer.data
   [OrderedDict([('title', 'First post'), ('custom_id', 3), ('category', 'DJ'), ('publish_day', '2022-03-21T13:29:20.879831Z'), ('last_update', '2022-03-21T13:29:20.879858Z')]), OrderedDict([('title', 'something new'), ('custom_id', 2), ('category', 'DJ'), ('publish_day', '2022-03-21T13:40:05.324098Z'), ('last_update', '2022-03-21T13:40:05.324157Z')]), OrderedDict([('title', 'something new'), ('custom_id', 2), ('category', 'DJ'), ('publish_day', '2022-03-21T14:00:23.659995Z'), ('last_update', '2022-03-21T14:00:23.660031Z')])]
   ```

### Implement Serializers

透過建立view來完成!

```python
#post/views.py
from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer

from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

@csrf_exempt
def post_list(request):
    if request.method == 'GET':
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset,many=True)
        return JsonResponse(serializer.data,safe=False)

    if request.method =='POST':
        data = JSONParser.parse(request)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors,status=400)
        
@csrf_exempt
def post_detail(request,pk):
    try:
        post=Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method =='GET':
        serializer = PostSerializer(post)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        data = JSONParser(request)
        serializer = PostSerializer(post,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors,status=400)
    
    elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=204)
```

```python
#project/urls.py
from django.contrib import admin
from django.urls import path,include
from posts.views import PostView,post_list,post_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/',include('rest_framework.urls')),
    # path('api/posts/',PostView.as_view(),name='post-list'),
    path('api/post-list/',post_list,name='post-list'),
    path('api/posts/<int:pk>/',post_detail,name='post-detail'),
]
```

#### 測試工具 `$pip install httpie`

開啟server後，可以用`$http <測試內容>`去測試。

```bash
(env) yehs1225@yehs1225-VirtualBox:~/django-rf$ http http://127.0.0.1:8000/api/post-list/
HTTP/1.1 200 OK
Content-Length: 459
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Mon, 21 Mar 2022 15:52:11 GMT
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.9.7
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

[
    {
        "category": "DJ",
        "custom_id": 3,
        "last_update": "2022-03-21T13:29:20.879858Z",
        "publish_day": "2022-03-21T13:29:20.879831Z",
        "title": "First post"
    },
    {
        "category": "DJ",
        "custom_id": 2,
        "last_update": "2022-03-21T13:40:05.324157Z",
        "publish_day": "2022-03-21T13:40:05.324098Z",
        "title": "something new"
    },
    {
        "category": "DJ",
        "custom_id": 2,
        "last_update": "2022-03-21T14:00:23.660031Z",
        "publish_day": "2022-03-21T14:00:23.659995Z",
        "title": "something new"
    }
]
```

```bash
(env) yehs1225@yehs1225-VirtualBox:~/django-rf$ http http://127.0.0.1:8000/api/posts/1/
HTTP/1.1 200 OK
Content-Length: 149
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Mon, 21 Mar 2022 15:59:50 GMT
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.9.7
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "category": "DJ",
    "custom_id": 3,
    "last_update": "2022-03-21T13:29:20.879858Z",
    "publish_day": "2022-03-21T13:29:20.879831Z",
    "title": "First post"
}
```

## Class-based View

用Class的好處是可以讓這些元件被重複使用。

上面使用def方式來get、post等，但是因為沒有設定views所以我們只能用httpie來測試，現在將上面的內容改寫成Class。

#### import

```python
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_204_NO_CONTENT
from .models import Post
from .serializers import PostSerializer
```

#### class

```python
#posts/views.py
class PostView(APIView):
    permission_classes =(AllowAny,)

    def get(self,request,*args,**kwargs):
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def post(self,request,*args,**kwargs):
        serializer = PostSerializer(data=request.data)#.data instead of .post
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=HTTP_201_CREATED)
        return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)

    def put(self,request,pk,*args,**kwargs):
        #query the data
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post,data=request.data)#.data instead of .post
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk,*args,**kwargs):
        #query the data
        post = Post.objects.get(pk=pk)
        post.delete()
        return Response(status=HTTP_204_NO_CONTENT)
```

#### urls

```python
#project/urls.py
from django.contrib import admin
from django.urls import path,include
from posts.views import PostView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/',include('rest_framework.urls')),
    path('api/posts/',PostView.as_view(),name='post-list'),
    path('api/posts/<int:pk>/',PostView.as_view(),name='post-detail'),
]
```

## Mixins

A great article talk about Mixins in Python : [Aleksey Bilogur— Blog (residentmar.io)](https://www.residentmar.io/2019/07/07/python-mixins.html).

就我的理解，因為物件導向的設計，我們希望創造一個class具有某些"特徵"（方法）時，就會利用繼承（inherit）的方式，這個class也就成為其parent class的subclass，擁有parent class的所有methods及variables。然而，當希望一class可以繼承多個class時，本質上是允許繼承多項class的，但是這可能造成不易察覺的衝突，造成你在使用上面出錯也難以debug。因此，就有了Mixins可供使用，我們僅使用使用必要的method。

#### Import

```python
from rest_framework import mixins,generics
```

#### Class

```python
class PostMixinListView(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    generics.GenericAPIView):
    queryset=Post.objects.all()

    #define a set of serializer method that will be used in this class
    serializer_class = PostSerializer

    def get(self,request,*args,**kwargs):
        return self.list(request,*args,**kwargs)

    def post(self,request,*args,**kwargs):
        return self.create(request,*args,**kwargs)
```

## Generics

Generics.py 裡面有`LisrAPIView`、`CreateAPIView`等等，而他們已經使用了mixins所以等於我們比上面Mixins的範例再更精簡一些。

```python
class PostListView(generics.ListAPIView):
    queryset=Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(generics.RetrieveAPIView):
    queryset=Post.objects.all()
    serializer_class = PostSerializer

class PostDestroyView(generics.DestroyAPIView):
    queryset=Post.objects.all()
    serializer_class = PostSerializer    
```



## Routers and ViewSets

ViewSets是一種class based view，定義如下，可以看到它將所有Mixin都放進來了，因此，我們只需要這個就可以取代上面分別定義各種view的Class。通常會搭配**Router**使用。

```python
class ModelViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    """
    A viewset that provides default `create()`, `retrieve()`, `update()`,
    `partial_update()`, `destroy()` and `list()` actions.
    """
    pass    
```

#### posts/apps.py

引用`viewsets`，其他設定跟上面一樣

```python
from rest_framework import viewsets
#...
class PostViewSet(viewsets.ModelViewSet):
    queryset=Post.objects.all()
    serializer_class = PostSerializer        
    permission_classes = (AllowAny,)
```

#### Project/urls.py

在專案的urls中，包含能夠連到app < posts > 的路徑

```python
path('api/',include('posts.urls'))
```

#### Posts/urls.py

新增app內自己的urls.py,當連到posts時會使用PostViewset，其中就包含了get、post等等。

```python
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register('posts',PostViewSet)

urlpatterns=[
    path('',include(router.urls))
]
```

#### Custom

若有特殊的需求需要改寫，可以用下面的方式

```python
post_detail = PostViewSet.as_view({
    'get':'list',
    'post':'create'
})

urlpatterns=[
    path('',include(router.urls)),
    path('custom/',post_detail,name='custom')
]
```



## Permissions

在`rest_framework.permissions`中有提供幾項常用的權限設定：`AllowAny`、`IsAuthenticated`、`IsAdminUser`，使用方法為加上`permission_classes`：

```python
from rest_framework.permissions import IsAuthenticated
...
class PostListView(generics.ListAPIView):
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)
```

### 自定義

#### 背景設定

修改models.py使得post多一欄位owner，連結到特定user

```python
from django.contrib.auth import get_user_model

#User model that is active
User = get_user_model()
...
class Post(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    ...
```

#### 建立permissions.py

```python
#posts/permissions.py
from rest_framework import permissions

class IsOwnerPermission(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.owner==request.user
```

#### 加在view上

```python
from .permissions import IsOwnerPermission
...
class PostDetailView(generics.RetrieveAPIView):
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,IsOwnerPermission)
```

## Hyper Link

#### 背景設定

讓list顯示posts的owner可以連結到owner detail page

#### Import

為了取得使用者，在`serializers.py`和`views.py`都需要加上

```python
from django.contrib.auth import get_user_model

User = get_user_model()
```

#### PostSerializer 

加上要連結的欄位

`owner = serializers.HyperlinkedIdentityField(many=False,view_name='owner-detail')`

```python
#posts/serializers.py
class PostSerializer(serializers.ModelSerializer):
    owner = serializers.HyperlinkedIdentityField(many=False,view_name='owner-detail')
    class Meta:
        ...
```

#### OwnerSerializer

```python
#posts/serializers.py
class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=(
            'id','username'
        )
```

#### OwnerDetailView

```python
#posts/views.py
class OwnerDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = OwnerSerializer
```

#### urls

```python
#project/urls.py
urlpatterns = [
...    path('api/owner/<int:pk>/',OwnerDetailView.as_view(),name='owner-detail'),
]
```



## Linking to frontends

### 背景設定

將先前app < posts > 的檔案都先移到archive資料夾中，以generics完成設定。

- project/urls.py

  ```python
  from django.contrib import admin
  from django.urls import path,include
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('api-auth/',include('rest_framework.urls')),
      path('api/posts/',include('posts.urls'))
  ]
  ```

- posts/models.py

  ```python
  from django.contrib.auth import get_user_model
  from django.db import models
  
  User = get_user_model()
  
  class Author(models.Model):
      user = models.OneToOneField(User,on_delete=models.CASCADE)
  
      def __str__(self):
          return self.user.username
  
  class Post(models.Model):
      author = models.ForeignKey(Author,on_delete=models.CASCADE)
      title = models.CharField(max_length=120)
      content = models.TextField()
      publish_date=models.DateTimeField(auto_now_add=True)
      updated=models.DateTimeField(auto_now=True)
  
      def __str__(self):
          return self.title
  ```

- posts/admin.py

  ```python
  from django.contrib import admin
  from .models import Author,Post
  
  admin.site.register(Author)
  admin.site.register(Post)
  ```

- posts/serializers.py

  ```python
  from pyexpat import model
  from rest_framework import serializers
  from .models import Post
  
  class PostSerializer(serializers.ModelSerializer):
      class Meta:
          model=Post
          fields=(
              'id',
              'title',
              'content',
              'publish_date',
              'updated',
              'author'
          )
  ```

- posts/views

  ```python
  from rest_framework.generics import(
      ListAPIView,
      RetrieveAPIView,
      CreateAPIView,
      UpdateAPIView,
      DestroyAPIView
  )
  from rest_framework.permissions import IsAuthenticated,AllowAny
  from .models import Author,Post
  from .serializers import PostSerializer
  
  class PostListView(ListAPIView):
      permission_classes=(AllowAny,)
      serializer_class = PostSerializer
      queryset = Post.objects.all()
  ```

- posts/urls.py

  ```python
  from django.contrib import admin
  from django.urls import path,include
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('api-auth/',include('rest_framework.urls')),
      path('api/posts/',include('posts.urls'))
  ]
  ```

### Add Templates

- 在root新建資料夾templates，新增`index.html`

    ```python
    #project/settings.py
    import os
    TEMPLATES = [
        {#...
        'DIRS': [os.path.join(BASE_DIR,'templates')],    
        }
    ]
    ```

- 在root新增Static資料夾，

  ```python
  #project/settings.py
  STATICFILES_DIRS = [
      os.path.join(BASE_DIR,'static')
  ]
  STATIC_ROOT='static_root'
  ```

  ```python
  #projects/urls.py
  from django.conf import settings
  from django.conf.urls.static import static
  #...
  if settings.DEBUG:
      urlpatterns += static(settings.STATIC_URL,document_root=settings.STATIC)
  ```

- index.html

    ```django
    {% load static %}
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content='ie=edge'>
        <title>Django RF</title>
        </head>
    <body>
        <script src="{% static 'js/main.js' %}"></script>
    </body>
    </html> 
    ```

### Fetch data

資料要轉成json : `.json()`

```js
// fetch data and render
// create a DOM node
const createNode=(element)=>{
    return document.createElement(element);
}

//append a child node to it's parent node
const append=(parent,child)=>{
    return parent.appendChild(child);
}

//fetch api data
const getPostList=()=>{
    fetch('/api/posts')
    .then(res => res.json())
    .then(data=>{
        //render the data we get
        renderPosts(data)
    })
    .catch(err=>{
        console.error(err)
    })
}

const renderPosts=(data)=>{
    // for every value in the data, render it
    return data.map(post=>{
        renderPost(post);
    })
}

const renderPost=(post)=>{
    //make every instance a node
    const root = document.getElementById('root');
    const div =createNode('div');
    div.className='post-item';
    const title = createNode('h2');
    const publishDate = createNode('span')
    const lastUpdated = createNode('span')
    const content = createNode('p');
    const author = createNode('small');
    //add inner text to the node
    author.innerText=`  written by ${post.author}`;
    title.innerText=post.title;
    content.innerText=post.content;
    publishDate.innerText=`Published : ${new Date(post.publish_date).toDateString()}\n`;
    lastUpdated.innerText=`Last Updated : ${new Date(post.updated).toDateString()}`;
    //append the nodes
    append(title,author)
    append(div,title);
    append(div,content);   
    append(div,publishDate);   
    append(div,lastUpdated);   
    append(root,div)
}

getPostList()
```

### Create data

在沒登入admin的狀態下，可以直接post。

然而若已登入會造成403 forbidden，解決方法是**要設定csrf token [Cross Site Request Forgery protection](https://docs.djangoproject.com/en/3.2/ref/csrf/#ajax)**，根據文件說明簡化成下面步驟：

#### csrf token

1. 獲取cookie

   ```js
   function getCookie(name) {
       let cookieValue = null;
       if (document.cookie && document.cookie !== '') {
           const cookies = document.cookie.split(';');
           for (let i = 0; i < cookies.length; i++) {
               const cookie = cookies[i].trim();
               // Does this cookie string begin with the name we want?
               if (cookie.substring(0, name.length + 1) === (name + '=')) {
                   cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                   break;
               }
           }
       }
       return cookieValue;
   }
   ```

2. 從cookie中找到csrftoken

   ```js
   const csrftoken = getCookie('csrftoken');
   ```

3. 將csrftoken放進post的header中

   ```js
   function createPost(/*UserInputData*/) {
       const data = {
           method: "POST",
           headers: {
               'Content-Type': "application/json",
               'X-CSRFToken':csrftoken
           },
           body: JSON.stringify({
               /*UserInputData*/
           })
       }
       fetch(' /*RequestURL*/', data)
       .then(() => {
           getPostList();//fatch the data from server
       })
       .catch(err => {
           console.error(err);
       })
   }
   ```

#### All code we need to post

```js
$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        const title = document.getElementById('title');
        const content = document.getElementById('content');
        const author = document.getElementById('author');
        createPost(title.value, content.value, author.value);
        title.value="";
        content.value="";
        author.value="";
    });
});
//acquire cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
//acquire csrftoken
const csrftoken = getCookie('csrftoken');

function createPost(title, content, author) {
    const data = {
        method: "POST",
        mode:'same-origin',
        headers: {
            'Content-Type': "application/json",
            'X-CSRFToken':csrftoken
        },
        body: JSON.stringify({
            title, content, author
        })
    }
    fetch('/api/posts/create/', data)
    .then(() => {
        //if successed, fetch data
        getPostList();
    })
    .catch(err => {
        console.error(err);
    })
}

//fetch api data
const getPostList=()=>{
    fetch('/api/posts')
    .then(res => res.json())
    .then(data=>{
        //clear all nodes of root
        clearChildren(root);
        //render the data we get
        renderPosts(data);
    })
    .catch(err=>{
        console.error(err)
    })
}
```

### Detail View

新增一個`post_detail.html`，當在`home`點擊時取得pk，並從urls.py的設定連過去渲染指定內容的頁面。

##### Url

```python
#posts/urls.py
urlpatterns = [
...
    path('<pk>/', PostDetailView.as_view(), name='post-detail'),
]
```

要獲取網址列的內容可以用`window.location`取得

##### 取得pk

```js
//posts/detail.js
const pathname=window.location.pathname;
const pathnamePart = pathname.split('/');
const postID = pathnamePart[pathnamePart.length-2];
```

##### fetch data

```js
//posts/detail.js
const getPost=(postID)=>{
    fetch(`/api/posts/${postID}/`)
    .then(res => res.json())
    .then(data=>{
        //clear all data
        //render data
    })
    .catch(err=>{
        console.error(err)
    })
}
```

##### Add link at homepage

```js
//posts/main.js
const link = createNode('a');
    link.href = `/posts/${post.id}`;
//...
append(link,title);
append(div,link);
```

### Update view

將欄位名稱設為全域變數，fetch data後指定給該變數，在顯示在form欄位。取得form上更新資料PUT回server端。

##### 更改form欄位

```js
const title = document.getElementById('title');
const content = document.getElementById('content');
const author = document.getElementById('author');

const prepopulateForm=(data)=>{
    title.value=data.title;
    content.value=data.content;
    author.value=data.author;
}

//fetch api data
const getPost=(postID)=>{
    fetch(`/api/posts/${postID}/`)
    .then(res => res.json())
    .then(data=>{
        prepopulateForm(data);
        clearChildren(root)
        renderPost(data)
    })
    .catch(err=>{
        console.error(err)
    })
}
getPost(postID);
```

##### PUT回server端

```js
const updatePost=(title,content,author)=>{
    const data = {
        method: "PUT",
        mode:'same-origin',
        headers: {
            'Content-Type': "application/json",
            'X-CSRFToken':csrftoken
        },
        body: JSON.stringify({
            title, content, author
        })
    }
    fetch(`/api/posts/${postID}/update/`, data)
    .then(() => {
        getPost(postID);
    })
    .catch(err => {
        console.error(err);
    })
}
```

### Delete View

##### delete post

```js
const deletePost=(postID)=>{
    const data = {
        method: "DELETE",
        mode:'same-origin',
        headers: {
            'Content-Type': "application/json",
            'X-CSRFToken':csrftoken
        }
    }
    fetch(`/api/posts/${postID}/delete/`, data)
    .then(() => {
        window.location='/';
    })
    .catch(err => {
        console.error(err);
    })   
}
```

##### delete btn

```js
function appendDeleteBtn(post){
    const postDiv = document.querySelector('.post-item');
    const deleteBtn = createNode('button');
    deleteBtn.className='post-delete-btn';
    deleteBtn.innerText='Delete';
    deleteBtn.addEventListener('click',e=>{
        deletePost(post.id);
    })
    append(postDiv,deleteBtn);
}
```

##### delete view

```python
class PostDeleteView(DestroyAPIView):
    permission_classes=(AllowAny,)
    queryset = Post.objects.all()     
```

##### urlpatterns

```python
path('<pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
```

