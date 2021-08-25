function updateCommentLink(){
        twikoo.getRecentComments({
        envId:"https://comments.stevelbr.top",
        pageSize:5,
        includeReply: true
}).then(function(res){
        console.log(res);
        let html = ``
        for(let i in res){
                console.log(res[i]);
                let domain = new URL(location.href).origin;
                let link = domain+res[i].url+`#${res[i].id}`
                html+=`
                <a href="${link}" class="pull-left thumb-sm avatar m-r" style="border-radius:100%; overflow:hidden;"><img src="${res[i].avatar}"></img></a>
                <a href="${link}" class="text-muted"><i class="iconfont icon-comments-o text-muted pull-right m-t-sm text-sm" title="详情" aria-hidden="true" data-toggle="tooltip" data-placement="auto left"></i><span class="sr-only">评论详情</span></a>
                <div class="clear"><div class="text-ellipsis"><a href="${link}" title="${res[i].nick}"> ${res[i].nick} </a></div><small class="text-muted"><span>${res[i].commentText}</span></small></div>`
                $(".comments-list").html(html);
        }

}).catch(function(err){
        console.error(err);
})
}
updateCommentLink()
