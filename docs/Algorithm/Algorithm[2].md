# [2] Basic of Algorithm Analysis

## What this a good algorithm?

一個"好的"演算法可從兩大面向來看

1. 正確性correct : 透過證明來驗證
2. 效率efficient : 又分為"執行時間"及"使用的記憶體空間"

在基礎的分析上，我們先著重在探討"執行時間"，但時間又會隨者問題、資料的大小，又或者是所使用的硬體不同而有差異，因此我們以 " 最糟執行時間Worst-Case Running Time " 來探討，也就是說只專注於演算法本身的流程執行去探討，而非資料量的大小。另外，用三種符號來表示演算法的複雜度，這樣的呈現是以定義的方式來嚴謹地考慮演算法效能。

### Worst-Case Running Time

#### polynomial running time

分析一問題時，若輸入大小為N，而我們可以找到常數c和d，使得此問題的執行時間上限cN^d個 **基礎計算步驟（primitive computational steps）**，我們就稱此演算法有polynomial running time，或稱之為polynomial-time algorithm。注意，當問題輸入大小由N變成2N時，上限也會從cN^d變成c（2N）^d = c．2^d．N^d，也就是說會變得慢2^d倍。

*基礎計算步驟（primitive computational steps）: 最簡單的理解是程式中的一行計算指令。

> An algorithm is efficient if it has a polynomial running time

上述定義可能有點模糊，你可能會想：n^100 （polynomial ）難道就比ｎ^(1+0.02logn)（non-polynomial ）的執行時間快嗎？答案當然是否定的，但會說polynomial相對有效率的主要原因是「It really works.」，沒錯，就是指通常擁有polynomial-time algorithm 的問題（n,n,logn,n^2,n^3...），當問題緩慢地增長會有演算法存在可執行。而non-polynomial 就比較難被實行。



### Asymptotic Order of Growth

有了上述定義後，我們還需要更正式的方式來表達。當我們要探討某一演算法時，一個很具體的陳述方式就是「若輸入大小為n，需要執行最多1.62n^2 + 3.5n +8 步」。這樣不免有些耗費精力且可能意義不大，因為我們要的是更粗略一些地幫演算法分類。所以我們之後都會用三種符號O,Ω , and Θ來表示。

#### Asymptotic Notation O,Ω , and Θ

- 讓一函數T(n)來描述一輸入大小為n的演算法的worst-case running time。
- Asymptotic upper bound : T(n) = O(f(n)) 若存在常數c > 0 和 N0 > 0 ，使得在所有n ≧ N0 的情況下，T(n) ≦ cf(n)。
- Asymptotic lower bound : T(n) = Ω(f(n)) 若存在常數c > 0 和 N0 > 0 ，使得在所有n ≧ N0 的情況下，T(n) ≧ cf(n)。
- Asymptotic tight bound : T(n) = Θ(f(n)) 若 T 既是O(f(n)) 也是 Ω(f(n))。

##### Example :

Q : T(n) = 1.62n^2 + 3.5n + 8 , 下列哪些正確？

1. T(n) = O(n)
2. T(n) = O(n^2)
3. T(n) = O(n^3)
4. T(n) = Ω(n)
5. T(n) = Ω(n^2)
6. T(n) = Ω(n^3)
7. T(n) = Θ(n)
8. T(n) = Θ(n^2)
9. T(n) = Θ(n^3)

A : 2,3,4,5,8



##### Abuse of  Notation

Q : Why use equality in T(n) = O(f(n)) ?

​	f(n) = 5n^3 ； g(n) = 2n^3

​	f(n) = O(n^3 ) = g(n) 

​	但f(n) ≠ g(n) 

A : Big O notation 應該是 " 集合 " 的概念，所以應該用f(n) ∈ O(n^3 ) ，但我們已經習慣用 "=" 表示。



##### Properties

- Transitivity

  若 f(n) = △ (g(n)) and g(n) = △ (h(n)) , 那麼  f(n) =△ (h(n)) , 當△ =  O,Ω , or Θ

- Rule of sums

  f(n) + g(n) = △ (max { f(n) , g(n) } )

- Rule of products

  若 f1(n) = △ (g1(n)) and f2(n) = △ (g2(n)) , 那麼f1(n) ‧ f2(n) = △ (g2(n))  ‧  △ (g1(n))

- Transpose symmetry

  f(n) =  O(g(n)) 若且唯若 g(n) =  Ω(f(n))

- Symmetry

  f(n) =  Θ(g(n)) 若且唯若 Θ(g(n)) =  f(n)

## Recap : Gale - Shapley Algorithm

### 正確性（Correctness）

G - S演算法像上一篇所提，符合正確性（correctness），其中包含

1. Termination : 至多n^2迴圈會停止
2. Perfection : 每個人都結婚
3. Stability :  「male - optimal and female-pessimal」和「所有執行都會產生相同結果」

其中Termination讓我們知道「至多n^2迴圈會停止」，但是n^2迴圈究竟是多長的執行時間呢？如果裡面含有複雜的資料結構，是不是就會花費比預期中更多的時間呢？

### 效率（Effectiveness）- 設計資料結構

```pseudocode
1.  Initailly all m∈M and w∈W are free
2.	while (there is a man m who is free and hasn't proposed to every woman)
3.	Let w be the highest-ranked woman in m's preference list to whom m hasn't yot proposed
4.	If (w is free)
5.	(m,w) become engaged
6.  Else if(w is currently engaged with m′)
7.    If(w prefers m′ to m)
8.         m remains free
9.	  Else //(w prefers m to m′)
10.		(m,w) become engaged
11.      m′ becomes free
12.	Return the set S of engaged pairs
```

**目標**： 讓每一迴圈花費O(1)的時間，所以總共就是O(n^2)的時間

**需要執行運算的地方**：

LINE 2 : 確認man是否為free

LINE 3 : m要找到還沒求過婚的women當中，順位最高的一位(w)

LINE 4~6 : 查看w是否訂婚了，若是的話，是和哪一個man

LINE 7~11 :  決定w較喜歡哪一個man（m' or m）

**於是我們針對這些運算需求來設計好的資料結構!**

#### Representing Men and Women

- 假設男生和女生的集合都是{1,...,n}，用兩個array紀錄

  例如男生array

  | ID   | Name  |
  | ---- | ----- |
  | 0    | John  |
  | 1    | Alan  |
  | ...  | ...   |
  | n    | Lucas |

- Preference list

  例如以下，第0列代表第0個男生的女生偏好順序為2>1>3，以此類推

  | 2    | 1    | 3    |
  | ---- | ---- | ---- |
  | 3    | 1    | 2    |
  | 2    | 1    | 3    |
  | 1    | 2    | 3    |

#### LINE 2 :確認man是否為free

如何在O(1)時間之內完成？

因為考慮到free man是**動態**改變的，也就是代表會頻繁地更動（讀取、刪除、插入），因此用陣列不是好辦法，我們可以考慮用**linked list**!

在初始時，將所有man串起來，代表大家都是free，當man變為enagaged時，則從List中刪除!

#### LINE 3 : m要找到還沒求過婚的women當中，順位最高的一位(w)

因為我們有man's preference list，所以我們稍微把儲存男生的array稍作修改，加上Next紀錄下一個要去求婚的對象到底幾號了，再到preference list去找該序號是哪個女生。

Note : 

- 這會在while loop前完成，共需O(n)的時間將所有的Next欄位設為1。
- 該man求婚過後，不論是否被拒絕，Next都要+1

| ID   | Men  | Next |
| ---- | ---- | ---- |
| 0    | John | 5    |
| 1    | Alan | 2    |
| ...  | ...  | ...  |

#### LINE 4~6 : 查看w是否訂婚了，若是的話，是和哪一個man

跟上面的技巧很像，在woman新增current欄位

#### LINE 7~11 :  決定w較喜歡哪一個man（m' or m）

情境假設：目前w和man 1 engaged，但man 4和其求婚

| ID   | NAME | Current |
| ---- | ---- | ------- |
| 1    | w    | 1       |

用原本的preference list來看的話，假設woman w 的preference長這樣，代表她喜歡3>2>4>1>5

| 3    | 2    | 4    | 1    | 5    |
| ---- | ---- | ---- | ---- | ---- |

那要找man 1和4誰順位較高就要先從頭開始找到1在第四位（linear scan），再從頭找到4在第三位（linear scan） :(

如果把array改成按照男生編號來建立，代表man 1是她的第四順位，這樣就把執行時間變成O(1)，僅在一開始要用O(n^2)的時間建立。

| 4    | 2    | 1    | 3    | 5    |
| ---- | ---- | ---- | ---- | ---- |

## Running Time Comparison

常見的演算法時間複雜度

### Linear Time

- Computing the maximum

  ```pseudocode
  max = a1
  For i=2 to n
  	If ai > max then
  		set max=ai
  	EndIf
  EndFor
  ```

- Merging Two  Sorted Lists

  ```pseudocode
  To merge sorted Lists A = a1,...,an and B = b1,...,bn
  	Maintain pointer Pa,Pb to point to the front element of list A,B
  	While both lists are not empty:
  		Let ai and bj be the elements pointed to by the Pa and Pb
  		Append the smaller of these two to the output list
  		Advance the pointer in the list from which the smaller element was selected
  	EndWhile
  	Once one list is empty, append the remainder of the other list to the output
  ```

### O(nlogn) Time

蠻普遍的。演算法為將input平分為兩半，各別進行遞迴運算，再用linear time合併。

- merge sort

## Priority Queue

一種較複雜的資料結構：一集合S，S內的每一元素v都有一個key(v)，key(v)愈小代表v優先度愈高，可以對集合內的元素新增、刪減以及挑出最小的元素。一個好的應用是用在即時的電腦程序排程問題，因為每個程序都有其優先順序（緊急度）。

heap : [Tree | Yeh's blog (yehs1225.github.io)](https://yehs1225.github.io/docs/DataStructures/Tree/#heap-堆積)

heap sort : [Sorting排序 | Yeh's blog (yehs1225.github.io)](https://yehs1225.github.io/docs/DataStructures/Sorting排序#heap-sort)
