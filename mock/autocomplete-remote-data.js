/**
 * @fileOverview 模拟动态数据
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/3/8.
 */

var Mock = require('mockjs');

var remoteJSONData = Mock.mock( /\/sug/, {

	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'list|1-10': [{
		'keyword': '淘宝宝' + '@ctitle'
	}]
});
//$.ajax({
//	url: '/demo/sug?',
//	dataType: 'json'
//}).done(function(data, status, jqXHR){
//	$('<pre>').text(JSON.stringify(data, null, 4))
//		.appendTo('body')
//})


module.exports = remoteJSONData;