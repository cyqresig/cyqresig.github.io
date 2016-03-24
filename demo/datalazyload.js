/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/3/24.
 */

var DataLazyLoad = require('./../src/datalazyload');

var instance = new DataLazyLoad({
  threshold: 20,
  jsonpCallback: 'loadLazyData',
  load: function($element) {
    $element.find('script').remove();
  }

});

instance.init($('.lazyload'));


