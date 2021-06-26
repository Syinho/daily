[Toc]

## <table>
### <table>标签的特有属性
- `cellpadding`:用于设置td，th中的内容与边框的距离
- `cellspacing`:用于设置td，th之间的距离

> ATTENTION:
> - 给`td`,`th`设置`margin`属性是无效的。想要设置单元格之间的间距只有通过`table`的内联属性`cellspacing`来进行设置。
> - 通常会在`reset.css`中写入`*{padding:0;margin:0;}`，这条代码会导致`cellpadding`失效。但是可以给单元格设置`padding`达到同样的效果。

## <td>
### <td>标签特有的属性
- `colspan`:设置单元格横向合并个数，即列合并。
- `rowspan`:设置单元格竖向合并个数，即行合并。


## <col>以<colgroup>
- `<col>`一般与`<colgroup>`一起使用，用于设置列样式。

### <col>特有属性
- `span`:设置该`col`标签横跨多少列

> ATTENTION:
> - 在`<col>`中设置的样式的优先级低于css。如果某个单元格的样式与`<col>`中的样式冲突，那么以css中的样式为准。


## <table>在css中的可设定样式
- `border-collapse`:控制两个单元格边框是否合并在一起
  - `separate`,分开
  - `collapse`,合并
- `border-spacing`:设置单元格边框之间的间距
- `caption-side`
- `empty-cells`:有边框的情况下设置无内容的单元格是否显示边框
  - `hide`:
  - `show`:

> ATTENTION
> 注意`border-spacing`样式属性与`cellspacing`内联属性之间的冲突由`border-spacing`样式决定。

## HTMLTableElement对象的方法

- `insertRow(index)`:在index处插入一行，返回新创建的HTMLTableRowElement。
- `createCaption()`:为表格创建标题。返回新创建的HTMLTableCaptionElement。
- `createTFoot()`:为表格创建<tfoot>元素，返回新创建的HTMLTableFootElement。
- `createTHead()`:为表格创建<thead>元素，返回新创建的HTMLTableHeadElement。
- `insertCell(index)`:在index处创建一个单元格，返回新创建的单元格。
- `deleteRow(index)`:删除指定的行。
- `deleteCell(index)`:删除指定的单元格。