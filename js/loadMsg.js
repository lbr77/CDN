    (function (a) {
        a.extend({
            mouseMoveShow: function (b) {
                var d = 0,
                    c = 0,
                    h = 0,
                    k = 0,
                    e = 0,
                    f = 0;
                a(window).mousemove(function (g) {
                    d = a(window).width();
                    c = a(window).height();
                    h = g.clientX;
                    k = g.clientY;
                    e = g.pageX;
                    f = g.pageY;
                    h + a(b).width() >= d && (e = e - a(b).width() - 5);
                    k + a(b).height() >= c && (f = f - a(b).height() - 5);
                    a("html").on({
                        contextmenu: function (c) {
                            3 == c.which && a(b).css({
                                left: e,
                                top: f
                            }).show()
                        },
                        click: function () {
                            a(b).hide()
                        }
                    })
                })
            },
            disabledContextMenu: function () {
                window.oncontextmenu = function () {
                    return !1
                }
            }
        })
    })(jQuery);
    function Box(title, msg, type) {
        $.message({
            message: msg,
            title: title,
            type: type,
            autoHide: !1,
            time: "3000"
        });
    }
    function getSelect() {
        "" == (window.getSelection ? window.getSelection() : document.selection.createRange().text) ? Box("提示", "啊噢...你没还没选择文字呢！", "error") : document.execCommand("Copy")
    }
    function baiduSearch() {
        var a = window.getSelection ? window.getSelection() : document.selection.createRange().text;
        "" == a ? Box("提示", "啊噢...你没还没选择文字呢！", "error") : window.open("https://www.baidu.com/s?wd=" + a)
    }
    $(function () {
        for (var a = navigator.userAgent, b = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), d = !0, c = 0; c < b.length; c++) if (0 < a.indexOf(b[c])) {
            d = !1;
            break
        }
        d && ($.mouseMoveShow(".usercm"), $.disabledContextMenu())
    });

$(document).ready(function ()  {
       if(document.referrer){
            let domain = new URL(document.referrer).host.split(".");
            if(domain[1]!='stevelbr'){
                Box("网站加载完成",`感谢您的访问！来自${domain[1].replace(domain[1][0],domain[1][0].toUpperCase())}的朋友！`,"success")
            }
       }
       else Box("网站加载完成",`感谢您的访问！`,"success")
});
