var app = {
    // 应用构造函数
    initialize: function() {
        this.bindEvents();
    },
    // 绑定事件监听
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        changeElementOpacityByScroll($(".jd-search-cover"));
    },
    changeElementOpacityByScroll:function(ele){
        $(window).bind("scroll", function(event){
            //所有内容的高度
            var scrollTotalHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            //已被滚动的高度
            var winScrollHeight = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            var ratio = winScrollHeight / scrollTotalHeight;
            var opacity;
            //元素透明度变化，是在滚动条位置占比在0-20%的范围内。
            if(ratio > 0.2){
                opacity = .8;
            }else if(ratio <= 0){
                opacity = 0;
            }else {
                // 20% * 4 = 。8正好是透明度的最大值
                opacity = ratio * 4.0;
            }
            if(opacity){
                $(ele).css("opacity", opacity);
            }
        })
    }
};