## input:file 的属性
- accept : 接受 MIME类型字符串 为值。限定可以上传的文件后缀名。但是很不安全。
- multiple : 允许上传多个文件。

## flieReader 对象
- 通过 `let reader = new FileReader()`构造对象。
- 通过 `reader.readAsText（file,'utf8'）`,`reader.readAsDataURL()`,`reader.readAsBinaryString()`来决定读取方式。
- 通过 `reader.onload`来决定读取完毕后的调用函数。
- 读取的结果保存在`reader.result`里面。

## fileReader 对象的方法
- abort()
- onloadstart()
- onprogress()
- onload()
- onloadend()
- onerror()

## onprogress() 方法
```
reader.onprogress = function(e){
    pro.value = e.loaded;
}
// 该方法接收一个对象，其loaded属性表示当前加载的二进制大小
// 将 pro.max = f.files[0].size 
```