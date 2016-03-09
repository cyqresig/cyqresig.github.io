/**
 * @fileOverview 模拟静态数据
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/3/8.
 */


// 使用 Mock
var Mock = require('mockjs');

var localData = Mock.mock( {
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'淘|1-10': [{
		'keyword': '淘' + '@ctitle'
	}],
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'淘宝|1-10': [{
		'keyword': '淘宝' + '@ctitle'
	}],
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'淘宝宝|1-10': [{
		'keyword': '淘宝宝' + '@ctitle'
	}]
});
// 输出结果
//console.log(JSON.stringify(localData, null, 4))

module.exports = localData;