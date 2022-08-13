# [6]Dynamic Programming

我們前面學過greedy algorithm、divide and conquer的技巧。然而有許多問題無法是無法發展出greedy algorithm的，而divide and conquer在前面主要探討將時間複雜度限縮在polynomial time的困難度。現在要來說明Dynamic Programming，基本的想法是

- 謹慎地將問題解構成一系列的子問題
- 經由不停建構子問題的正確答案，最後成為整個問題的解

## Weighted Interval Scheduling

第一步先想到之前學的greedy algorithm有沒有辦法找到解答，NO。在這裡我們要用recursive的方式求出演算法。

- 有n個request, 標示為1, ... , n。
- 每個request i 有起始時間si, 結束時間fi, 價值（weight）vi。
- 兩個request是相容的，若它們沒有重疊
- 假設request是以結束時間依上升排列：f1 ≤ f2 ≤ ... ≤ fn，我們會說request i 在j之前，若且唯若i<j。
- P(j)，表示在j前有多少個request不和它衝突。（如下圖說明）

目標：挑選出request 各自相容的集合S ⊆ {1, . . . , n},最大化 Σ i∈S vi。

![](/img/docs/algorithm/dynamic1.jpg)

### Design Algorithm

假設此問題有一最佳解O，儘管目前我們不知道確切是甚麼。

- Oj 是最佳解for intervals 1,2,...,j
- OPT(j)是最佳解for intervals 1,2,...,j的**值**

**例子說明**

OPT6有兩種可能

1. V6 + OPT(3)
2. OPT(5)

所以OPT(6) = max{V6 + OPT(3), OPT(5)}

general form : OPT(j) = max{{Vj + OPT(P(j))}, OPT(j-1)}

![](/img/docs/algorithm/dynamic2.jpg)

```pseudocode
//Preprocessing
//Sort intervals by finish times：f1≤f2≤...≤fn
//Compute p(1),p(2),...,p(n)
Compute-Opt(j)
If (j=0) then 
	return 0
Else
	return  max{{Vj + Compute-OPT(P(j))}, Compute-OPT(j-1)}
```

### Memoizing the Recursion : Top-Down

到目前為止，我們的演算法仍是exponential time，因為Compute-OPT只是解決了n+1個子問題（Compute-Opt(0), ...., Compute-Opt(n)）。解決辦法是將計算過的值放在全域變數，使其可以在之後recusive call時被取用，這樣的技巧稱為memoization。我們另外設一陣列M[0...n]來儲存。

```pseudocode
M-Compute-Opt(j)
If j=0 then
	Return 0
Else if M[j] is not empty then
	Return M[j]
Else
	Define M[j] = max(Vj + M-Compute-Opt, M-Compute-Opt(j-1))
	Return M[j]
Endif
```

M-Compute-Opt(n)的執行時間為O(n)。（假設輸入的Interval已照finish time被排序）

### Iteration : Bottom-up

當然也可以用迴圈的方式處理M陣列。

```pseudocode
Iterative-Compute-Opt
M[0] = 0
For j = 1,2,...,n
	M[j] = max(Vj + M[p(j)], M[j-1])
Endfor
```

#### Difference between Memoization and Iteration

- Memoization : Compute only when we need
- Iteration : Compute every small piece. Construct from the smallest subproblem to the largest one.

### Computing a Soloution

前面的演算法只算出最佳解的值，現在要來真正求出解集合。最直覺想到的辦法可能是用一新的陣列S來儲存最佳解集合，但這樣會多花費時間到O(n)，總時間會變成O(n^2)。

從上面尋找OPT的general form的程序時，可以發現interval i 會被納入最佳解，若且唯若Vj + OPT(P(j))  ≥  OPT(j-1)。因此我們只要加上條件判斷，就可以蒐集到我們要的。

```pseudocode
Find-Solution(j)
If j = 0 then
	Output nothing
Else
	If vj + M[p(j)]≥ M[j − 1] then
		Output j together with the result of Find-Solution(p(j))
	Else
		Output the result of Find-Solution(j − 1)
	Endif
Endif
```

當我們有一子問題的最佳解陣列M，找到解法的時間複雜度為O(n)。

## Key for Dynamic Programming

一般用來**最佳化**問題，很適合拿來處理linearly ordered的問題（前面例子就是）。適用的問題必須符合以下特性：

1. 只有 **polynomial**個數的子問題
2. 問題的解答要可以經由子問題的解答簡單地計算而來
3. 子問題存在自然的順序由小到大，達到easy-to-compute-recurrence

組成Dynamic Programming的兩大要素：

1. Optimal substructure
2. Overlapping subproblem

一般作業流程：

1. 將答案變成一種reccurence的關係，或是說recursive的演算法（從divide-and-conquer開始）
2. 證明在你的演算法流程中每個環節都可以被限定在polynomial
3. 釐清遞迴呼叫中需要計算的物件順序，使得每次呼叫都可以取得需要的物件

## Segmented Least Squares

在上一個問題Weighted Interval Scheduling當中，我們的選擇只有要或不要（選取某一interval），現在要探討的問題是統計中很常用到的 **尋找多條最適線來符合二維座標中的數個點**。

#### 一條最適直線

找到a, b來決定最適直線L，並且要求最小化Error。

![](/img/docs/algorithm/dynamic3.jpg)

#### 多條最適直線

將所有點切成數個部分（segments），分別都有一條最適直線。

![](/img/docs/algorithm/dynamic4.jpg)

以下兩種情況是不允許的

1. 有點沒被分到任意segments中
2. segment中的連續兩點參雜了其他segment的點

![](/img/docs/algorithm/dynamic5.jpg)

### Design Algorithm

給予n個點於二維座標P = {(x1,y1), ... , (xn, yn)}，要決定K值，指的是分成k個segments。

- 將p分為k個segments：{P1,...,Pk}
- 對Pj來說，有一條最適直線L = ajx + bj
- 最小化：加總j=1~k的Error(Lj, Pj) + Ck （其中Ck稱為penalty term，用來控制不可以分成太多segments）

此問題有一最佳解O

- e(i,j) 是最適直線的error值。此最適值線適於包含{pi,...,pj}的segment。
- OPT(i)是{p1,...,pi}中每條最適直線的加總error值（optimal）

目標是計算OPT(n)

general form : OPT(n) = e(i,n) + OPT(i-1) + C  

（加上C是因為多加了一條線的懲罰值）

若最後一個segment是{pi, pi+1, ... , pj}則

OPT(j) = e(i,j) + C + OPT(j-1)

而我們會需要從1~j都執行這樣的步驟，所以最終的OPT(j)應修改成如下：

![](/img/docs/algorithm/dynamic6.jpg)

```pseudocode
Segmented-Least-Squares(n)
Array M[0,...,n]
Set M[0] = 0
For all pairs i≤j
	Compute the least squares error e(i,j) for the segment pi,...,pj
EndFor
For j=1,2,..,n
	M[j] = min{e(i,j) + C + M[i-1]} （其中1≤i≤j）
Endfor
return M[n]
```

時間複雜度為O(n^3)：花n^2時間計算e(i,j)，每次計算最多n。

## Shortest Path with Negative Edges

之前探討過的Dijkstra Algorithm只能用在非負的邊上，下面我們嘗試做一些修正，以及探討他仍舊存在的問題。

- Observation：一開始成本較低的最後可能會劣於一開始成本較高，但後來因為負值加入而下降的成本。
- Reweighting：將每個值都加上一數，使得沒有一條邊是負數。但會造成某些路徑（經過比較多邊的路徑）被過度加上成本值。

### Bellman-Ford Algorithm

試圖用Dynamic Programming在含有負邊但沒有負迴圈的圖找到最短路徑。想法是：子問題i可以用前i個點找到最短路徑。

**定理1**

> 若G沒有負迴圈，那麼會存在一條最短路徑從s-t是simple的（沒有重複的點），也代表僅含有n-1條邊。

**證明**

用反證法。假設有條路徑P為s-v-t且會重複在點v，那麼因為成本值都不回負值，所以一定可以移除掉重複v的部分，形成一條更短的路徑Q。

**符號定義**

OPT(i,v)：以v做起點到達一固定終點t，且最多只用i條邊的成本值。根據定理1，OPT(n-1,s) = s-t最短路徑長。

現在要用更小的子問題來表達OPT(i,v)。path P如下圖示，考慮下面兩種可能情形

![](/img/docs/algorithm/dynamic7.jpg)

1. P至多使用i-1條邊，那麼OPT(i,v) = OPT(i-1,v)

   （針對第i條邊可以選擇不去使用他）

2. P確實使用i條邊，且第一條邊是(v,w)，那麼OPT(i,v) = Cvw + OPT(i-1,w)

   （選擇使用第i條邊，相當於 選了第一條(v,w)後，剩下的i-1條邊仍組成最短路徑）

**定理2**

> If i > 0 then OPT(i, v) = min(OPT(i − 1, v), min w∈V (OPT(i − 1, w) + Cvw))

```pseudocode
Bellman-Ford(G,s,t)
n = number of nodes in G
Array M[0...n-1, V]
Define M[0,t] = 0 and M[0,v] = ∞ for all other v ∈ V
For i = 1,...,n-1
	For v ∈ V in any order
		M[i,v] = min(M[i−1], v), min w∈V (M[i− 1,w]) + Cvw))
	EndFor
EndFor
Return M[n-1,s]
```

初始化會長的像下圖。例如第一列第二行為OPT(1,t)，亦即「從t到t至多走一步需要cost=0」。

![](/img/docs/algorithm/dynamic8.jpg)

#### Negative Cycle

此演算法不適用於含有負值的cycle，因為會造成不停地經過負迴圈來減少cost的情形。

## Application : Currency Conversion

給予下圖的n種貨幣及之間的匯率關係，尋找是否有套利的空間。觀察粉紅色的三個點，從$ -> F -> E計算個匯率關係乘積=1.0084，會形成套利。

圖中的node是貨幣；edge是匯率，而我們先前的shortest path是將成本加總，但這裡是需要相乘的關係。

![](/img/docs/algorithm/dynamic9.png)

#### Convertion

要將**相乘**轉變為**相加**的關係，可以想到**log**

原先為1.3941 * 0.6677 * 1.0752 > 1，兩邊取-log

log(1.3941 * 0.6677 * 1.0752 ) < log(1)

log(1.3941) + log(0.6677) + log(1.0752) < 0

所以我們可以將邊上的匯率取-log，然後用原本路徑成本相加的方式，若發現一路徑成本小於0就代表有套利空間。

## Negative Cycle Detection

Bellman-Ford Algorithm並不適用於negative cycle，當G含有negative cycle時，我們很自然地會想到兩個問題：

1. 要如何得知G是否有negative cycle
2. 要如何在有negative cycle的G中找到它

透過發展找到negative cycle的演算法可以幫助我們改善Bellman-Ford Algorithm，因此下面討論如何發現含有negative cycle。

Bellman-Ford：OPT(i,v) = OPT(n-1,v) for all v and i≥n，表示我們只需要至多n-1條就會是最小成本的路徑了，所以如果 

> 對於某些點v來說，OPT(n,v) < OPT(n-1,v)，則此最短路徑含有negative cycle。

**證明**

以反證法證明。

- 因為OPT(n,v) < OPT(n-1,v)，P恰好有n條邊。
- 任何至多用n-1條邊的路徑，成本必定大於P。
- P一定有cycle。
- 若C不是negative cycle，刪除C產生的路徑（#edges < n）成本不會更大。

## Overview 4 Algorithmic Paradigms

1. #### Brute-force

   要檢查所有可能的答案，其實多半是作為和其他方法比較的基準。

2. #### Greedy

   目光短淺地在每一階段都挑選當下最好的解。

3. #### Divide-and-Coquer

   將問題拆成兩部分，獨立解決兩個子問題，在將子問題合併得到完整的解答。

4. #### Dynamic Programming

   將問題拆成一序列有關聯的子問題，並且將子問題一步步解決，直到完成完整的問題。
