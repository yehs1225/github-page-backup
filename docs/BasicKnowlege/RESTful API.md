# RESTful API

REST，Representational State Transfer，是一種風格，以此風格設計的API就稱為RESTful API。

## 組成三元素:

1. Noun

   URL定義資源位置

2. Verbs

   要對資源採取的動作

3. Content Types

   資源呈現方式。API資源可用多種方式呈現，常見的是JSON

一般API

```
獲取資料GET /getData
新增資料POST/importData
刪除資料DELETE/deleteData
```

RESTful API

```
獲取資料GET /Data
新增資料POST/Data
刪除資料DELETE/Data/2
```

## 優點和限制：

1. Uniform Interface : 具有唯一的URL，也就是統一的API接口。

2. Stateless : 無狀態

   一般的請求，在client和server交換完資訊後，server會保存像是登入狀態等訊息在server端的session，那麼下次這個client要請求資料時，就不需要再次登入，但相對來說，也就是server會需要在自己這邊認定指定的client。

   無狀態指的是Client端要自行保存狀態，而不是由server保存在session。可能像是server會要求request中的header要包含Token，那麼任何client就可以透過附帶指定的token來獲取資料。

   溝通時不需要知道任何之前的訊息。重要的是 **資源的使用**、而不是要求資源的方法等等

3. Cachable提高回應速度

   在server端有GET過的資源，如果沒有變更過，因為cache機制可以減少request。增加效能。在client端cache也記錄cache版本，若相同則不需要再request。

4. Layered System

   在組成一完整API的Components中，例如order有GET/POST/PUT/DELETE等方法去操作，透過設計分層的系統，讓components之間不會互相干擾，以便未來要進行相關修改或升級。

5. Separation between client and server

   Client跟Server間不需要互相"認識"，只要確保資料交換的格式，任何一端的變化都不會互相影響。Client可以專注在提升使用者體驗；Server可以專注在資料儲存的效能等。

6. 充分利用HTTP協定（使用GET/POST/PUT/DELETE）



資料來源 :

1.  [API 是什麼? RESTful API 又是什麼?Medium](https://medium.com/itsems-frontend/api-是什麼-restful-api-又是什麼-a001a85ab638)
2.  [What is REST? | Codecademy](https://www.codecademy.com/article/what-is-rest)





