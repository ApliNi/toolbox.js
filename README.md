# toolbox.js
一些可能有用的js文件


<details><summary>sArrLib.js - 为数据库定制 :: 基于字符串的高性能数据存储格式</summary>

## sArrLib.js
为数据库定制 :: 基于字符串的高性能数据存储格式

```
// sArr 是前后没有括号的字符串格式的数组, 使用逗号分隔数据, 其数据和长度保存在一个普通数组里, 这个普通数组就是 sArrObj
// [sArr字符串, 数据长度数字]
```

### 如何使用
```js
// 创建 sArrObj
let sArr = sArrLib.new(100);
// 输出: ['null,null,null,...共100位...null', 100]


// 添加一个数据
sArr = sArrLib.push(sArr, 100);
// 输出: ['null,null,null,...共101位...null,100', 101]


// 删除第一个数据
sArr = sArrLib.shift(sArr);
// 输出: ['null,null,...共100位...null,100', 100]


// 删除第一位并添加一个数据
sArr = sArrLib.moveLeft(sArr, 200);
// 输出: ['null,...共100位...null,100,200', 100]


// 转换为普通数组
arr = sArrLib.toArray(sArr);
// 输出: [null, ...共100位...null, 100, 200]
```
 
此工具用于提供可不进行类型转换且满足一些数据快速编辑功能的字符串格式的js数组. 可用于数据库中的大量小数据存储. 数据会一次性全部读出, 可能牺牲一些IO性能. 

```js
// 提示

// 将数据返回给客户端
return '{"data": ['+ sArr +']}';
// 在发送数据时并不需要将其解码, 可以直接插入JSON字符串
```

</details>



<details><summary>miniTime.js - 可自定义时间范围和分辨率的时间戳</summary>

## miniTime.js
可自定义时间范围和分辨率的时间戳. 用于优化大量短期存放数据的体积和索引

![image](https://github.com/ApliNi/miniTime.js/assets/59365724/9549a8e4-c1c5-4529-9bb7-f52092f8dfd4)

### 如何使用

```js
import { miniTime } from './Util/timeLib.js';

// miniTime 配置
let miniTimeConfig = {
	reso: 10 * 60 * 1000, // 分辨率10分钟
	rbr: 69 * 24 * 6, // 最大69天 // 这里的单位为上方的分辨率
	// 0 ~ 9936
};

// 当前时间
let nowTime = miniTime.compile(miniTimeConfig);
// 数据过期时间 (数据保留32天)
let expirationTime = nowTime - 32 * 24 * 6;


// 转换回标准时间戳
let time = miniTIme.decompile(miniTimeConfig, nowTime);
```

</details>



<details><summary>mcProtocolVersion.js - 尽可能的通过MC服务器的ping信息获取版本号</summary>

## mcProtocolVersion.js
尽可能的通过MC服务器的ping信息获取版本号, 通过协议版本号/ 版本名称/ motd 匹配版本号或版本范围.

### 如何使用

```js
import { miniTime } from './Util/timeLib.js';

let pv = 762;
let vName = 'paper 1.19.4';
let motd = '我们支持 1.16.5 到 1.19.4 版本';

let verName = getVer(pv, vName, motd);
// verName: '1.16.5 - 1.19.4'
```

</details>