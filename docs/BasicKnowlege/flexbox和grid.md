# flexbox和grid

## Flex

分為container 和 items 。

## flex container

```css
display: flex;
```

可以設定的屬性(property)如 : 

1. **flex-direction** 排列方式-行或列
   
   - column(-reverse)、row(-reverse)
2. **flex-wrap **包裹方式

   - nowrap 超出視窗的物件不會被包裹(default)

     (every items is fit to a single line.)

   - wrap 所有物件都會被包裹

     (items wrap around to addition lines.)

   - wrap-reverse
3. **flex-flow** 結合direction、wrap
4. **justify-content** 決定items的對齊方式:左右
   - center
   - flex-start (靠左對齊)
   - flex-end
   - space-around(items平均在container內)
   - space-between(items之間平均)
5. **align-items** 決定items的對齊方式:上下
   - center
   - flex-start
   - flex-end
   - stretch (垂直填滿container)
   - baseline(用items內的文字底部為對準基準)
6. **align-content** 決定lines的對齊方式:上下
   - center
   - flex-start (靠左對齊)
   - flex-end
   - space-around(items的line周圍有一樣的空間)
   - space-between(items之間平均)
   - stretch

**perfect centering**

```css
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: DodgerBlue;
}
.flex-container>div {
  background-color: #f1f1f1;
  color: white;
  width: 100px;
  height: 100px;
}
```

## flex items

1. **order** 指定items排列順序

   - order: (number , default is 0) 數字小到大由左到右排列，可設定負值。

2. **flex-grow** 相對於container內的其他items要多大

   - flex-grow: (number , default is 0)

3. **flex-shrink**相對於container內的其他items縮放比例(倍數)

   - flex-shrink:(number , default is 1) ，0代表不會被縮放。

4. **flex-basis**指定item原始長度

5. **flex** 結合grow、shrink、basis

6. **align-self** 指定item的對其方式

   對應到container的align-items，align-self會優先於align-items。

#### **flex responsive : **[CSS Flexbox Responsive (w3schools.com)](https://www.w3schools.com/css/css3_flexbox_responsive.asp)



## Grid

也是分為container 和 items。

直:columns 橫 : row ，每個item之間稱為gap，用grid-gap。

指定item位置用line index。
line index :
![外部網址](https://www.w3schools.com/css/grid_lines.png)

### container

property 分為grid 和 inline-grid兩種。

```css
display: grid
/* or */
display: inline-grid
```

1. **gird-template-columns(rows)**設定columns(rows)數量及大小

   ```css
   grid-template-columns: auto auto 100px 50px;
   grid-template-rows: auto 50px;
   ```

2. **justify-content** (column之間)

   *要確保items(grid)的總寬度小於container才能確保運作效果。

   - space-between : items之間平均分散
   - space-around : 每個item邊邊有固定距離
   - space-evenly : item平均分散在container
   - center
   - start
   - end

3. **align-content** (row之間)

   *要確保items(grid)的總高度小於container才能確保運作效果。

   - center
   - space-between
   - space-around
   - space-evenly
   - start
   - end

### Grid items (grids)

1. **grid-column** ( combine start and end using "/")

   or you can use "grid-column-start" and "grid-column-end" individually

   指定item1從line1至line5(佔4格)可以用

   ```css
   .item1{
   	grid-column:1/5;
   }
   ```

   ```css
   .item1{
   	grid-column:1/span 4;
   }
   ```

2. **grid-row** (just like column)

3. **grid-area**

   - combine grid-column and grid-row 

     (grid-row-start / grid-column-start / grid-row-end / grid-column-end)

     可以用來改變html原先元素順序，例如

     ```css
     .item1 { grid-area: 1 / 3 / 2 / 4; }
     .item2 { grid-area: 2 / 3 / 3 / 4; }
     .item3 { grid-area: 1 / 1 / 2 / 2; }
     .item4 { grid-area: 1 / 2 / 2 / 3; }
     .item5 { grid-area: 2 / 1 / 3 / 2; }
     .item6 { grid-area: 2 / 2 / 3 / 3; }
     ```

     

   - 可以取名，並在container中用grid-template-areas使用該名稱。

     ```css
     .item1{
     	grid-area:area1;
     }
     
     /* item1 columns數量為3 item1 佔滿row1 ，其他往下繼續排列 */
     .grid-container{
         display:grid;
         grid-template-areas:'area1 area1 area1';
     }
     
     /* item1 columns數量為5 item1 佔row1中前2columns ，其他往後繼續排列 */
     .grid-container{
         display:grid;
         grid-template-areas:'area1 area1...';
     }
     
     /* 2 rows * 5 columns item1佔row1,2 佔column1,2*/
     .grid-container{
         display:grid;
         grid-template-areas:'area1 area1...''area1 area1...';
     }
     ```

     **可以設定每個區塊名稱方便排版**

     ```html
     <!DOCTYPE HTML>
     
     <html>
     	<head>
     		<meta charset="utf-8"/>
     		<title>I am title</title>
     		<link rel="stylesheet" href="./style.css"/>
     	</head>
     	<body>
     		<div class="grid-container">
     			<div class="header">header</div>
     			<div class="main">main</div>
     			<div class="menu">menu</div>
     			<div class="right">right</div>
     			<div class="footer">footer</div>
     		</div>
     	</body>
     </html>
     ```

     ```css
     .header{grid-area: header;}
     .main{grid-area: main;}
     .menu{grid-area: menu;}
     .right{grid-area: right;}
     .footer{grid-area: footer;}
     
     .grid-container {
       display:grid;
       background:lightblue;	
       padding: 50px;
       grid-gap: 10px;
       grid-template-areas:
       	'header header header header header'
       	'menu main main main right'
       	'menu footer footer footer footer';
     }
     
     .grid-container > div{
     	background: orange;
     	text-align: center;
     	padding: 30px 0px;
     }
     ```
