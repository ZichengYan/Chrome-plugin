/**
 * Created by icourt on 2016/12/27.
 */

//刷新页面


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var status = request.status;
        switch (status) {
            //监听来自popup的消息:开启收藏夹
            case "onCollection": {
                onCollection();

                break;
                //sendResponse({"farewell":"验证响应"});
            }

        }
    });




/*========================方法定义===========================*/

//创建收藏夹的小按钮
function onCollection() {
    console.log("创建收藏夹小图标成功");
    $('<div class="onCollection draggable"><span>字体图标</span><span>条目</span></div>').appendTo("body");
    //拖拽动作
    var $draggable = $('.draggable').draggabilly({
        // options...
        axis: 'y'
    })
    //收藏夹小条点击事件,点击生成收藏夹,并隐藏小条
    $(".onCollection").click(function () {
        console.log("小按钮点击事件");
        //创建收藏夹
        $("<div class='collection'></div>")
    })
}



function _click(selector) {
    $(selector).click(function () {
        $("<div></div>")
    })
}