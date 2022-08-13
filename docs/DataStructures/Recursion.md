# Recursion

以結構化程式(structured programming)來看，使用程序(procedure)可以增加程式的可讀性、正確性，對程式的debug及reuse也有很大的幫助。

> 只要是可用assignment、if-else、while的陳述式都可以用recursion的方式實現。

## 排列Permutation

排列n個元素會有n!種排列方法。以{A,B,C}為例，排列所成集合為(A,B,C)(A,C,B)(B,A,C)(B,C,A)(C,B,A)(C,A,B)六種。以遞迴方式排列可以想像成 : 每個字母輪流當首字母，每次除了首字母外的字母進行排列。當需要被排列的字母剩下一個(boundary condition)時就輸出此時的陣列。過程如下圖說明(參考 : [permutation (排序） @ 大神的世界 :: 痞客邦 :: (pixnet.net)](https://dreamisadream97.pixnet.net/blog/post/165770118-permutation-(排序）))

![內部資料夾內](/img/docs/recursion/permutation.jpg)

pseudo code:

```pseudocode
void perm(list c,int k, int n)
{
	if(k=n-1)//boundary condition
	{
		print c //印出現在的陣列長相
	}else
	{
		for(int i=k; i<n; i++)//從c[k]~c[n-1]輪流當首字
		{
			SWAP(c[i],c[k])//交換成首字
			perm(c,k+1,n)//排序剩下的	
			SWAP(c[i],c[k])//排序完要換回來
		}
	}
}
```

## Hanoi Tower

![內部資料夾內](/img/docs/recursion/HanoiTower.jpg)

河內塔目標為將三根柱子上的圓盤字起點A移至終點C，其中不可違反兩點規則(1)只能移動最上方的一個圓盤(2)大圓盤不能放置於小圓盤之上。

首先，我們可以先簡化問題，假設現在只有兩個圓盤disk=2(大、小)要從A->C，步驟如下:

1. 小 : A->B
2. 大 : A->C
3. 小 : B->C

再把最大的圓盤放在終點C前，必須要移走堆疊在其上面的圓盤，因此，我們先把d-1個圓盤放到暫存區B，移完d-1個圓盤後，就剩下第d個圓盤(在A中最大的那個)，此時便可將其由A移到C，接下來的目標是將小圓盤移到C，因為目前在B的小圓盤已經是最上層的，因此可以直接移到C，完成~接著再思考如果圓盤變成三個、四個呢?

觀察後可以歸納出:當起始柱子的圓盤個數k>1時，我們需要先將k-1個圓盤搬到暫存區，再將第k個圓盤搬到終點，接下來改變柱子順序(起始、暫存、終點)，執行相同邏輯:將k-1個先搬到暫存區，形成遞迴recursion! 

pseudo code:

```pseudocode
void Hanoi(disk,start,mid,destination)
{
	if(disk=1)
	{
		print ("move the top disk from",start,"to",destination) 
	}else
	{
		Hanoi(disk-1,start,destination,mid)//把k-1個先搬走
		Hanoi(1,start,mid,destination)//將第k個搬到終點
		Hanoi(disk-1,mid,start,destination)//剛剛在暫存區的k-1個圓盤要搬回終點
	}
}
```

