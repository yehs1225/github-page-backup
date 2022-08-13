# HTTP和HTTPS

Super great site : [How HTTPS works - How HTTPS works](https://howhttps.works/)

## HTTP

HTTP是超文本傳輸協定，在網路上電腦間溝通的一種方式，主要用在網頁上。要求瀏覽特定網頁、輸入訂單等都會需要溝通（發出請求）。

##### Request

- start line : http method/路徑/http版本

- header : 額外資訊。可能關於發送地或目的地，或body內的資料類型等等。

- body : 要送過去的東西

  | 欄位       | 範例                                                         |
  | ---------- | ------------------------------------------------------------ |
  | start line | POST /order HTTP/1.1                                         |
  | header     | Host : api.com <br />User-Agent : Mozilla/5.0(windows)Chrome<br />Accept : text/plain<br />Content-Type:text/plain<br />Content-Length:43 |
  | body       | {"quantity":3,"total_price":2330}                            |

**Response**

| 欄位       | 範例                                                         |
| ---------- | ------------------------------------------------------------ |
| start line | HTTP/1.1 200 OK                                              |
| header     | Server:nginx<br />Content-Type:text/plain<br />Content-Length:7<br />Date:Fri, 22 Aug 2020 12:25:01 GMT |
| body       | success                                                      |

## HTTPS

因為HTTP是用明文去傳送，等於卡號密碼等機密資料直接坦露無遺，因為網路是公開的!!! 

HTTPS 是 HTTP加上Secure，主要是利用SSL/TLS去做加密，如果有人竊聽也會是一串亂碼。主要保證下面三點：

1. Privacy所有資訊都是加密傳播，第三方無法竊聽
2. Integrity具校驗機制，一旦被竄改，通訊雙發會立刻發現
3. Identification配備身分證書，防止身分被冒充

### 加密如何運作

加密主要有兩種方式:對稱和非對稱

對稱指的是只有一把鑰匙，只要有鑰匙的人都可以開，你必須要小心保管，並且要分享給別人時，也要用最安全的方式。

非對稱指的是有兩把鑰匙，公鑰與私鑰。自己持有私鑰，並將公鑰透過網路發送給想要傳送訊息給你的人，讓他們以此鑰匙將訊息加密，因為只有你有私鑰，所以就只有你可以打開這封信。

### 如何將連線變成安全的

網址列最左邊有一個鎖的符號，若其正常顯示，代表此連線受到加密保護。

可以看到網址列有我們現在正訪問的網站地址，代表我們的瀏覽器正在和host此網站的電腦進行連線以安全的傳輸訊息，首先他們必須同意要用甚麼方法 **安全地**溝通。

這樣溝通的過程就稱為 **handshake**，這個過程非常迅速!

#### handshake steps

1. Client Hello

   用戶端的瀏覽器寄送一清單的SSL/TLS版本和加密演算法（在他自己電腦可運行的）

2. Server Hello

   Server依照他的偏好順序選擇用戶端寄來的清單中SSL/TLS版本及演算法。

   回傳自己的身分證書，裡面包含了自己的公鑰，讓用戶端可以驗證server的身分。

3. Client Key Exchange

   用戶確認server的證書合法性，用戶產生一 **pre-master key**，使得等等雙方產生unique key時可以使用。將pre-master key用server的公鑰加密後回傳給他。

4. Change Cipher spec

   Server用自己的私鑰解開pre-master key。**到目前為止這些溝通都是公開的，還沒加密任何訊息，因為是使用公私鑰匙，所以沒人可以偷走pre-master key**。現在他們都擁有了共同的pre-master key，所以就可以用對稱加密的方式。

   用戶會試著以剛才的pre-master key加密訊息傳送給server。

   若成功，Server會回傳訊息，讓雙方確認這把鑰匙是可行的!

5. Everything is now secured

   之後，兩者間的訊息往來都會被加密了!

### SSL & TSL

上面提到handshake會需要SSL/TSL，這兩者都是關於網路傳輸安全的協定。

**SSL是TSL的前身**。

SSL = Secure Sockets Layer是Netscape訂定的協議，非常久遠，第一版V1甚至沒有釋出，而V2是在1995年，後來V2有許多安全性問題，因此推出V3一切都很美好直到1999年，網路大戰掀起（主要是Netscape和Microsoft），Netscape將SSL協定控制權轉交給IETF（管理網路標準的開放組織），在1999年底，IETF釋出TLS V1（其實就是SSL V3.1），直到現在TLS和SSL都還是讓人很confused。

之後TLS一直有釋出新版本，但直到2013年瀏覽器才開始跟上並支持V1.2，（more confusion : SSL3.0在2015被正式退役）。2018年推出TLS V1.3大幅提升安全性，也是目前多數瀏覽器所支持的。

## Certificate Authorites(CA)

上面提到要安全連線，代表server一定要有身分證書（certificate），究竟要如何獲取呢？

Certificate Authority(CA)是第三方機構，主要有三個功能

1. 發證書
2. 確認證書擁有者的身分
3. 提供證明證書的合法有效性

較有名的機構有Comodo, DigiCert, GoDaddy等等，要成為CA需要符合嚴謹的安全性要求，且經過重重審核並有能力確保安全性。必須要被接受加入root store，root store基本上是儲存被信任的CA的資料庫。Apple, Windows, Mozilla等在你的電腦或裝置中運行他們預先安裝的自己的root stores

### 憑證類型

1. Domain validated

   僅驗證domain name，沒其他的了，一般人可能需要這個!

2. Organization validated

   除了驗證憑證外，會需要手動驗證憑證背後的組織。

3. Extended Validated

   會需要相當繁雜的驗證，主要用在商業用途。

所有有效憑證都會使得瀏覽器網址列有合法的鎖的符號，而若是最後一項EV則會有公司的名稱。

#### 發憑證（sign certificate）

當CA要發憑證時，簽署他們透過他們預先註冊於root store的root certificate，多數時候，憑證是由root cerificate間接簽署的intermedia certificate，若發生安全性問題，很容易撤銷憑證，因為這些root certificate是被安裝在美台裝置上的。

### 如何驗證憑證有效性

稱為 **chain of trust**

1. 瀏覽器透過HTTPS連線並下載憑證

2. 檢查憑證並非root certificate

3. 瀏覽器下載另一憑證，此憑證就是intemedia certificate，用來簽署該上一個憑證的

4. 檢查並非root certificate

5. 再去檢查簽署此intemidat certificate的憑證

   - Yeahh是root certificate，那麼剛剛那些憑證都會被視為是有效的
   - Noooo,不是root certificate，那麼全部都不能信任了

   