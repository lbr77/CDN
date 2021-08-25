function zan(){
        let element = document.getElementsByClassName("zan")[0]
        let fetchurl = element.dataset["url"];
        let cid = element.dataset["cid"];
        fetch(fetchurl,{
            method:"POST",
            body: `agree=${cid}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        });

        element.innerText = resp;
        element.disabled=true;
        return resp;
   }
function remcls(){$('.heart').removeClass("heartAnimation");}
function addcls(){$('.heart').addClass("heartAnimation");    }
$(document).ready(function ()  { //.post-content 文章内页样式
	  $(".post-content").append("<div id='zan' class='clearfix'><div class='heart' onclick="zan()"></div><br><div id='zan_text'></div></div>");
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
	    });
        });
