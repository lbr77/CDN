function zan(){
        let element = document.getElementById("zan")
        let fetchurl = element.dataset["url"];
        let cid = element.dataset["cid"];
        fetch(fetchurl,{
            method:"POST",
            body: `agree=${cid}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        });
}
function remcls(){$('.heart').removeClass("heartAnimation");}
function addcls(){$('.heart').addClass("heartAnimation");    }
$(document).ready(function ()  { //.post-content 文章内页样式
	  //$(".post-content").append("<div id='zan' class='clearfix'><div class='heart' onclick=\"zan()\"></div><br><div id='zan_text'></div></div>");
	// senddata(url,flag);
	    $('body').on("click",'.heart',function(){
		    $('.heart').css("background-position","")
		    var wwin=$('.heart').attr("class");
		    if(wwin === 'heart'){
		    	$('.heart').addClass("heartAnimation");
		    	tui=setTimeout("remcls()",800)
		    }else{
		     	remcls()
		     	tuiw=setTimeout("addcls()",100)
		    }
		    $("#zan_text").text(parseInt($("#zan_text").text())+1);//更新框中的数字
		    $(".meta-zan .meta-value").text(parseInt($(".meta-zan .meta-value").text())+1)
	    });    
		let path = new URL(window.location.href).pathname;
                twikoo.getCommentsCount({
                    envId:"https://comments.stevelbr.top",
                    urls: [
                        path
                    ],
                    includeReply: true
                }).then(function(res){
                    console.log(res);
                    $(".meta-comments .meta-value").text(res[0].count)

                }).catch(function(err){
                    console.error(err);
                })
        });
