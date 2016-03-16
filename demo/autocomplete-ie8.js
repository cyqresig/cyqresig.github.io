/**
 * @fileOverview 初始化autocomplete组件
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/3/7.
 */


//仅在脱离服务端环境下做测试用

$.mockjaxSettings.contentType = "application/json";
$.mockjax({
	url: '/sug',
	data: {

	},
	responseText: {
		list: [{
			'keyword': '淘宝宝1'
		},{
			'keyword': '淘宝宝11'
		},{
			'keyword': '淘宝宝111'
		}]
	}
});

//require.ensure('./../src/autocomplete', function(require) {

	var AutoComplete = require('./../src/autocomplete');

	////local
	//var instance_1 = new AutoComplete({
	//
	//	localData: localData,
	//
	//	$searchInput: $('#s1')
	//
	//});


	//remote
	var instance_2 = new AutoComplete({

		remote: true,

		url: '/sug',

		$searchInput: $('#s2'),

		onSearch: function(recommendKeywordItem, recommendKeyword) {

			//console.log('onSearch recommendKeywordItem recommendKeyword = ' + recommendKeyword);

			//console.log(recommendKeywordItem);

			alert('您已提交了搜索词: ' + recommendKeyword);

		}

	});

//});