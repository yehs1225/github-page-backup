# GetStarted-documents

## Know Django

##### What is Django

Django is a Python based web framework for building dynamic web applications.

##### Why

Make it easier to build better Web apps more quickly and less code.

#### Django Project and Apps

##### Project

It is the overall web application setup and all parts and settings.

##### Apps

It is a subcomponent or submodule of the Project and it is independent of other Apps even though they all function in the same Project.

## Set up miniconda

common conda command:

- build env : `conda create --name <'env_name'> python=3.9`(the version u want.)
- enter env  : `conda activate <'env_name'>`
- leave env : `conda deactivate`

if you are using VSCode, Ctrl + Shift + P -> Type and select 'Python: Select Interpreter' to change to the current environment. 

## Start using django

- #### Build a project :`django-admin startproject mysite`

  **structure**

  - mysite/   => *container of project (can rename)*
    - manage.py
    - mysite/ => *python packeage for Ur project*
      - __ init__.py => *Tell python that this directory should be considered a Python package*
      - settings.py => *Tell U* all about how settings work
      - urls.py => *The URL declarations for this Django project; a “table of contents” of your Django-powered site. (Django lets you design URLs however you want, with no framework limitations.)*
      - asgi.py => *An entry-point for ASGI-compatible web servers to serve your project.* 
      - wsgi.py =>  *An entry-point for WSGI-compatible web servers to serve your project.*

- #### Verify project work?

  - type`python manage.py runserver` 

    Ignore warning, we'll set databases migrations later.U can check if it success at http://localhost:8000/ 

    U can change port (to 8080)`python manage.py runserver 8080`

## Build an polls app

1. `python manage.py startapp polls` create a directory called "polls", directory structure looks like

   ```
   mysite/   
       mysite/
       db.sqlite3/
       manage.py
       polls/
           __init__.py
           admin.py
           apps.py
           migrations/？
               __init__.py
           models.py
           tests.py
           views.py
   ```

2. write code in polls/views.py

3. add and write in new file < urls.py >  To call the view, we need to map it to a URL

   **Be care of 2 different urls.py ! Or U'll got 404 page not error :(**

   ```jsx
   #mysite/polls/urls.py
   from django.urls import path
   from . import views
   urlpatterns = [
       path('', views.index, name='index')
   ]
   ```

   And in **another urls.py**

   ```jsx
   #mysite/mtysite/urls.py
   from django.contrib import admin
   from django.urls import include, path
   urlpatterns = [
       path('polls/', include('polls.urls')),
       path('admin/', admin.site.urls),
   ]
   #You should always use `include()` when you include other URL patterns. `admin.site.urls` is the only exception to this.
   ```

### Set up a database

##### In settings.py 

- U'll need to set in settings.py if U want to use databases other than SQLite(default choice)
- INSTALLED_APPS = [...] can be revise if U don't need.
- set TIME_ZONE :'Asia/Taipei' ( [List of tz database time zones - Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones))

##### Creating models

- Concept of models in django [[Django教學3\]Django Migration(資料遷移)的重要觀念 (learncodewithmike.com)](https://www.learncodewithmike.com/2020/03/django-model-migration.html)	

- Concept of ORM( Object Relational Mapping) [[Day20\] 資料庫設計概念 - ORM - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天 (ithome.com.tw)](https://ithelp.ithome.com.tw/articles/10207752)

- Edit in polls/models.py

  **It's vital to add `__str__()` method.**

  U can also add custom method. (e.g. was_published_recently)

  ```
  from django.db import models
  # Create 2 tables.
  class Question(models.Model):
      question_text = models.CharField(max_length=200)
      pub_date = models.DateTimeField('date published')
      #neccessary
      def __str__(self):
          return self.question_text
      #custom method
      def was_published_recently(self):
          return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
      
  class Choice(models.Model):
      question = models.ForeignKey(Question, on_delete=models.CASCADE)
      choice_text = models.CharField(max_length=200)
      votes = models.IntegerField(default=0)
      def __str__(self):
          return self.question_text
  ```

##### Activate models

The above "model code" gives Django **(1)** CREATE TABLE(schema) **(2)** Create a Python database-access API for accessing those objects(Question & Choice).

- Tell our project that the **polls** app is installed. (Django app is pluggable)

  ```
  #mysite/settings.py
  INSTALLED_APPS = [
      'polls.apps.PollsConfig',
      'django.contrib.admin',
      ....,
      'django.contrib.staticfiles',
  ]
  ```

- `python manage.py makemigrations polls` *Create migrations for those changes*

  U'll see migrations for 'polls' , < storing position >, Create model Question , Create model Choice

  Use  `makemigrations` when U make changes in Model(table) and then Django stores the changes. All migration are stored in polls/migrations/XXX.py

  - `python manage.py sqlmigrate polls 0001`	

    See more readable TABLE.

- `python manage.py migrate`	*apply those changes*

##### Playing with the API

- `python manage.py shell`

  By this command, we can use our Models.

  ```
  # First Import the model classes we just wrote.
  from polls.models import Choice, Question 
  ```

  - References of Playing APIs : [Making queries | Django documentation | Django (djangoproject.com)](https://docs.djangoproject.com/en/4.0/topics/db/queries/)
  - Related objects : https://docs.djangoproject.com/en/4.0/ref/models/relations/
  - Field lookups : [Making queries | Django documentation | Django (djangoproject.com)](https://docs.djangoproject.com/en/4.0/topics/db/queries/#field-lookups-intro)

## Introducing the Django Admin

Django build a Admin page automatically. Thus, we can make revise our data conveniently.

- `python manage.py createsuperuser`

- `python manage.py runserver`

- make the **poll app** modifiable in the admin

  ```
  #polls/admin.py
  from .models import Question
  admin.site.register(Question)
  ```

## Write more views

- edit in polls/views.py , add new lines besides `def index(){...}`

  ```
  def detail(request, question_id):
      return HttpResponse("You're looking at question %s." % question_id)
  
  def results(request, question_id):
      response = "You're looking at the results of question %s."
      return HttpResponse(response % question_id)
  
  def vote(request, question_id):
      return HttpResponse("You're voting on question %s." % question_id)
  ```

- edit in polls/urls.py , when we have new views , do not forget add `path()` call in urls.py

  `< int:question_id>` 

  - 「 < > 」captures part of the URL and send it as keyword argument to the view function
  - 「int」is convertor , 「question_id」 will be used to identify the matched pattern , seperated by 「:」

  ```jsx
  urlpatterns = [
      # ex: /polls/
      path('', views.index, name='index'),
      #-----------new----------------------------------------------
      # ex: /polls/5/
      path('<int:question_id>/', views.detail, name='detail'),
      # ex: /polls/5/results/
      path('<int:question_id>/results/', views.results, name='results'),
      # ex: /polls/5/vote/
      path('<int:question_id>/vote/', views.vote, name='vote'),
  ]
  ```

### Let views actually do something

2 things views should do : (1) returning HttpResponse (2) rasing exception (e.g.Http404)

##### (1) returning HttpResponse

- show latest 5 dataset in system

  ```
  def index(request):
      latest_question_list = Question.objects.order_by('-pub_date')[:5]
      output = ', '.join([q.question_text for q in latest_question_list])
      return HttpResponse(output)
  
  # Leave the rest of the views (detail, results, vote) unchanged
  ```

  - change template 

    create new directory in */polls* named *templates* , then in */polls/template* create new directory named *polls* , finally create *index.html*.

    **We should not avoid create subdirectory \*polls\* in templates , otherwise if we have same template name in different apps , Django may got the wrong one.**

    ```
    <!-- polls/templates/polls/index.html -->
    <html>
        <head></head>
        <body>
            <h1>{{ question.question_text }}</h1>
            <ul>
            {% for choice in question.choice_set.all %}
                <li>{{ choice.choice_text }}</li>
            {% endfor %}
            </ul>
        </body>
    </html>
    ```

  - use template in views.py

    1. `from django.template import loader`
    2. `template = loader.get_template(<'app_name/index.html'>)`
    3. `return HttpResponse(template.render(context, request))`

    ```
    #polls/views
    from django.template import loader
    
    def index(request):
        latest_question_list = Question.objects.order_by('-pub_date')[:5]
        template = loader.get_template('polls/index.html')
        context = {
            'latest_question_list': latest_question_list,
        }
        return HttpResponse(template.render(context, request))
    ```

  ##### Shortcut : `render()`

  It is idiom to load a template , **fiil context and return Httpresponse**. Therefore use `render()`.

  1. `from django.shortcuts import render`

     No longer need to import `loader` and `HttpResponse`

  2. modify return()

     ```
     from django.shortcuts import render
     
     from .models import Question
     
     
     def index(request):
         latest_question_list = Question.objects.order_by('-pub_date')[:5]
         context = {'latest_question_list': latest_question_list}
         return render(request, 'polls/index.html', context)
     ```

##### (2) rasing exception 

- ##### Rasing a 404 error

  1. `from django.http import Http404`

  2. add `def detail():{...}`

     ```
     from django.http import Http404
     from django.shortcuts import render
     
     from .models import Question
     # ...
     def detail(request, question_id):
         try:
             question = Question.objects.get(pk=question_id)
         except Question.DoesNotExist:
             raise Http404("Question does not exist")
         return render(request, 'polls/detail.html', {'question': question})
     ```

  3. add new file *detail.html* in *polls/templates/polls/detail.html*

     ```
     <!-- polls/templates/polls/detail.html -->
     <html>
         <head></head>
         <body>
             {{ question }}
         </body>
     </html>
     ```

  ##### Shortcut : `get_object_or_404(<'model'>,<keyword arguments>)`	 	

    Pass **`get()`** function of model's manager, rasing Http404 if the object not exist. The main reasion to use this is to maintain 	**loos coupling** , which is foremast design goals of Django. Also there are `get_list_or_404()`, which works just like this , but 	using `filter()` instead of `get()`.

  1. `from django.shortcuts import get_object_or_404`
  2. no longer need `try:...except`

  ```
    from django.shortcuts import get_object_or_404, render
  
    from .models import Question
    # ...
    def detail(request, question_id):
        question = get_object_or_404(Question, pk=question_id)
        return render(request, 'polls/detail.html', {'question': question})
  ```

##### Use the template system

More : [Templates | Django documentation | Django (djangoproject.com)](https://docs.djangoproject.com/en/4.0/topics/templates/)

It generate HTML dynamically in a convenient way. The [Django template language](https://docs.djangoproject.com/en/4.0/ref/templates/language/) is Django’s own template system. If you don’t have a pressing reason to choose another backend, you should use the DTL, especially if you’re writing a pluggable application and you intend to distribute templates.

### Removing hardcoded URLs in templates

In *polls/index.html*, the below code is hardcoded, tightly-coupled approach.

```
<!--polls/index.html-->
<li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>
```

Change to 

```
<!--polls/index.html-->
<li><a href="{% url 'detail' question.id %}">{{ question.question_text }}</a></li
```

It is because we defined the name argument in the 

[**path()**]    https://docs.djangoproject.com/en/4.0/ref/urls/#django.urls.path 

 func. in the polls/urls.py module. So we can use `{% url %}` template tag.

##### Namespacing URL names

How does Django differentiate the URL names between numerous Apps.

Use **namespace** to Ur URLconf. Go to *polls/urls.py* and add an app_name to set the application namespace. Then , modify *polls/index.html*

```
#polls/urls.py
app_name = 'polls'
urlpatterns = [...]
<!--polls/index.html-->
<li><a href="{% url 'polls:detail' question.id %}">{{ question.question_text }}</a></li>
```

## Write a minimal form

- action : `{% url 'polls:vote' question.id %}` , We have created URLconf for the polls application in *polls/urls.py*
- Prevent [Cross Site Request Forgeries](https://docs.djangoproject.com/en/4.0/ref/csrf/) : `{% csrf_token %}`

```
<!-- polls/templates/polls/detail.html -->
<form action="{% url 'polls:vote' question.id %}" method="post">
{% csrf_token %}
<fieldset>
    <legend><h1>{{ question.question_text }}</h1></legend>
    {% if error_message %}<p><strong>{{ error_message }}</strong></p>{% endif %}
    {% for choice in question.choice_set.all %}
        <input type="radio" name="choice" id="choice{{ forloop.counter }}" value="{{ choice.id }}">
        <label for="choice{{ forloop.counter }}">{{ choice.choice_text }}</label><br>
    {% endfor %}
</fieldset>
<input type="submit" value="Vote">
</form>
```

- revise views.py => `def vote():`

```
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

from .models import Choice, Question
# ...
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
```

- revise views.py => `def results():` 

  which is almost the same as `def detail():`

```
def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})
```

- add new file in templates/polls <  result .html>

```
<!--polls/templates/polls/result.html-->
<h1>{{ question.question_text }}</h1>

<ul>
{% for choice in question.choice_set.all %}
    <li>{{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}</li>
{% endfor %}
</ul>

<a href="{% url 'polls:detail' question.id %}">Vote again?</a>
```

### Generic view

[Generic display views](https://docs.djangoproject.com/en/4.0/ref/class-based-views/generic-display/#django.views.generic.list.ListView)

Less code is better!All the html files we have is similar(redundant). What the files do is : Getting data from DB(according to the URL) , Loading template and returning the rendered one. 

Django provides a shortcut called the "generic views" system, which abstract common patterns to the point , so we do not need to write Python code.

> **code-shuffle?**
>
> Generally, U will know whether generic views are a good fit for Ur problem. Therefore , U will use them from the beginning, rather than refactoring code halfway through.

1. Convert the URLconf.
2. Delete some of the old, unneeded views.
3. Introduce new views based on Django's generic views.

##### Amend URLconf

- Change from `views.index` to `views.IndexView.as_view()` ... and also Details and result.
- Change from `< int:question_id>` to  `< int:pk>` 
- vote remains the same.

```
#polls/urls.py
from django.urls import path
from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
```

##### Amend views

- `from django.views import generic`

- Change class index, details, results

  *write comments below the def , and U can see the usages of the function when U hover on it.

  - We use two generic views here : ListView and DetailView.
    - Both Views use a default template called **<app** **name>/<model** **name>_list(or detail).html**
    - In DetailView, the **question** variable is provided automatically.
    - In ListView, the default variable is **question_list**, So we need to provide the **context_object_name** attribute, telling it that we want to use **latest_question_list** instead.
  - Each generic views needs to know which model to use.
  - 

  ```
  class IndexView(generic.ListView):
      template_name = 'polls/index.html'
      context_object_name = 'latest_question_list'
  
      def get_queryset(self):
          """
          Return the last five published questions (not including those set to be
          published in the future).
          """
          return Question.objects.filter(
              pub_date__lte=timezone.now()
          ).order_by('-pub_date')[:5]
  
  class DetailView(generic.DetailView):
      model = Question
      template_name = 'polls/detail.html'
      def get_queryset(self):
          """
          Excludes any questions that aren't published yet.
          """
          return Question.objects.filter(pub_date__lte=timezone.now())
  class ResultsView(generic.DetailView):
      model = Question
      template_name = 'polls/results.html'
  ```

  

## Testing

[Testing in Django](https://docs.djangoproject.com/en/4.0/topics/testing/)

U can test by prompt `python manage.py shell` to call the shell, and entering data to check how it behaves, or just run the application. However **automated tests** is that the testing work is done for U by the system. The biggest advantage is that U **create a set of tests once**, and then as U make changes to Ur app, U can check that Ur code still **works as U originally intended**. 

Why Test?

- Save Ur time.
- Not to identify problems, they prevent them.
- Make Ur code more attractive
- Helps teams work together

Good rules-of-thumb include having:

- A separate **TestClass**  for each model or view
- A separate test method for each set of conditions U want to test
- Test method names that describe their function

#### Create a test to expose the bug

- edit in *polls/tests.py*
- `from django.test import Testcase`
- create django.test.TestCase subclass

```
#polls/tests.py
import datetime
from django.test import TestCase
from django.utils import timezone
from .models import Question

class QuestionModelTests(TestCase):

    def test_was_published_recently_with_future_question(self):
        """
        was_published_recently() returns False for questions whose pub_date
        is in the future.
        """
        time = timezone.now() + datetime.timedelta(days=30)
        future_question = Question(pub_date=time)
        self.assertIs(future_question.was_published_recently(), False)
```

- `python manage.py test polls` , what it did
  1. looked for tests in the **polls** app
  2. found subclass of the django.test.TestCase class
  3. created a special DB for testing
  4. looked for test method - **one whose names begin with "test"**
  5. in *test_was_published_recently_with_future_question* , it create a instance whose *pub_date* field is 30 days in the future
  6. use `assertIs()` method, discover that it returns **True**, though we want it to return **False**

#### Fix the bug

- We know what the problem is, so amend the method in models.py
- run the test again

#### More comprehensive tests

```
#polls/tests.py
import datetime
from django.test import TestCase
from django.utils import timezone
from .models import Question

class QuestionModelTests(TestCase):

    def test_was_published_recently_with_future_question(self):
        """
        was_published_recently() returns False for questions whose pub_date
        is in the future.
        """
        time = timezone.now() + datetime.timedelta(days=30)
        future_question = Question(pub_date=time)
        self.assertIs(future_question.was_published_recently(), False)
    def test_was_published_recently_with_old_question(self):
        """
        was_published_recently() returns False for questions whose pub_date
        is older than 1 day.
        """
        time = timezone.now() - datetime.timedelta(days=1, seconds=1)
        old_question = Question(pub_date=time)
        self.assertIs(old_question.was_published_recently(), False)

    def test_was_published_recently_with_recent_question(self):
        """
        was_published_recently() returns True for questions whose pub_date
        is within the last day.
        """
        time = timezone.now() - datetime.timedelta(hours=23, minutes=59, seconds=59)
        recent_question = Question(pub_date=time)
        self.assertIs(recent_question.was_published_recently(), True)
```

### Test a view

#### Django test Client

[Testing tools |Client](https://docs.djangoproject.com/en/4.0/topics/testing/tools/#django.test.Client)

- Test in shell , since the things we did are not necessary in test.py

  - `python manage.py shell`

  - `from django.test.utils import setup_test_environment`

  - `setup_test_environment()` : 

    - installs template renderer which will allow us to examine some additional attributes on responses such as  **response.context**  
    - However it would not create a test DB, it tests in existing DB.

  - `from django.test import Client`

  - `client = Client()`  : create an instance of the client for our us

    ```
    >>> # get a response from '/'
    >>> response = client.get('/')
    #Not Found: /
    >>> response.status_code
    #404
    >>> # we'll use 'reverse()' rather than a hardcoded URL
    >>> from django.urls import reverse
    >>> response = client.get(reverse('polls:index'))
    >>> response.status_code
    #200
    >>> response.content
    b'\n    <ul>\n    \n        <li><a href="/polls/1/">What&#x27;s up?</a></li>\n    \n    </ul>\n\n'
    >>> response.context['latest_question_list']
    #<QuerySet [<Question: What's up?>]>
    ```

- After amend the bugs, let's create automated test

  - [**django.test.TestCase**]    https://docs.djangoproject.com/en/4.0/topics/testing/tools/#django.test.TestCase 

    provide other assert methods  like `assertContains()`、`assertQuerysetEqual()`

  ```
  #polls/tests.py
  from django.urls import reverse
  def create_question(question_text, days):
      """
      Create a question with the given `question_text` and published the
      given number of `days` offset to now (negative for questions published
      in the past, positive for questions that have yet to be published).
      """
      time = timezone.now() + datetime.timedelta(days=days)
      return Question.objects.create(question_text=question_text, pub_date=time)
  
  
  class QuestionIndexViewTests(TestCase):
      def test_no_questions(self):
          """
          If no questions exist, an appropriate message is displayed.
          """
          response = self.client.get(reverse('polls:index'))
          self.assertEqual(response.status_code, 200)
          self.assertContains(response, "No polls are available.")
          self.assertQuerysetEqual(response.context['latest_question_list'], [])
  
      def test_past_question(self):
          """
          Questions with a pub_date in the past are displayed on the
          index page.
          """
          question = create_question(question_text="Past question.", days=-30)
          response = self.client.get(reverse('polls:index'))
          self.assertQuerysetEqual(
              response.context['latest_question_list'],
              [question],
          )
  
      def test_future_question(self):
          """
          Questions with a pub_date in the future aren't displayed on
          the index page.
          """
          create_question(question_text="Future question.", days=30)
          response = self.client.get(reverse('polls:index'))
          self.assertContains(response, "No polls are available.")
          self.assertQuerysetEqual(response.context['latest_question_list'], [])
  
      def test_future_question_and_past_question(self):
          """
          Even if both past and future questions exist, only past questions
          are displayed.
          """
          question = create_question(question_text="Past question.", days=-30)
          create_question(question_text="Future question.", days=30)
          response = self.client.get(reverse('polls:index'))
          self.assertQuerysetEqual(
              response.context['latest_question_list'],
              [question],
          )
  
      def test_two_past_questions(self):
          """
          The questions index page may display multiple questions.
          """
          question1 = create_question(question_text="Past question 1.", days=-30)
          question2 = create_question(question_text="Past question 2.", days=-5)
          response = self.client.get(reverse('polls:index'))
          self.assertQuerysetEqual(
              response.context['latest_question_list'],
              [question2, question1],
          )
  ```

  - We also need to test the DetailView and ResultView, in case of someone knew or guess the URL. So we add a similar constraint to DetailView and ResultView.

## Customize App's look and feel

Aside from the HTML generated by the server, we also need CSS, JavaScript, images etc. to render the page. In Django , we refer to these files as "static files". And **django.contrib.staticfiles** help us collects static files in different apps into a single location that can easily be served in production.

1. Create a directory <  static> in polls.

2. Create a directory <  polls> in static, and then create a file < style.css >

3. edit .css

   ```
   /*  polls/static/polls/style.css  */
   li a {
       color: green;
   }
   ```

4. edit index.html , add these in the top

   ```
   <!-- polls/templates/polls/index.html  -->
   {% load static %}<!--generates the absolute URL of static files.-->
   <link rel="stylesheet" type="text/css" href="{% static 'polls/style.css' %}">
   ```

##### Add images

1. Create a directory < images> in the same directory as style.css
2. Put images into it
3. edit style.css

## Customize the admin form

### Admin form

- We can change order of field.

  ```
  #polls/admin.py
  class QuestionAdmin(admin.ModelAdmin):
      fields = ['pub_date', 'question_text']
  
  admin.site.register(Question, QuestionAdmin)
  ```

  

- Split the form up into fieldsets

  ```
  #polls/admin.py
  class QuestionAdmin(admin.ModelAdmin):
      fieldsets = [
          (None,               {'fields': ['question_text']}),
          ('Date information', {'fields': ['pub_date']}),
      ]
  
  admin.site.register(Question, QuestionAdmin)
  ```

### Adding related objects

**Question** has multiple **Choices**, there are 2 methods to connect them.

1. Do what Question do

   `from .models import Choice`

   `admin.site.register(Choice)`

   But we can only add one choice at once.

2. Add Choice with Question

   remove `admin.site.register(Choice)`

   ```
   #polls/admin.py
   class ChoiceInline(admin.StackedInline):
       model = Choice
       extra = 3
       
   class QuestionAdmin(admin.ModelAdmin):
       fieldsets = [
           ...
       ]
       inlines = [ChoiceInline]
       
   admin.site.register(Question, QuestionAdmin)
   ```

   

   ##### Change `StackedInline` to `TabularInline`

​		

### Admin change list

Add field name `list_display = ()`

Add filter `list_filter = ['pub_date']`

Add search bar `search_fields = ['question_text']`

```
#polls/admin.py
class QuestionAdmin(admin.ModelAdmin):
    # ...
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    list_filter = ['pub_date']
```

Using `display()`decorator to decorate dufault field name 'was_published_recently'

```
#polls/models.py
class Question(models.Model):
    # ...
    @admin.display(
        boolean=True,
        ordering='pub_date',
        description='Published recently?',
    )
    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
```