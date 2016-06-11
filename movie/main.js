require.config({
    baseUrl: "../movie",
    paths: {
        "jquery": "lib/jQuery",
        /*"common": "js/common"*/
    }

});

// 开始使用jQuery 模块
require(["jquery","js/iscroll5", "js/script",], function ($, C) {
    //console.log(C);
});