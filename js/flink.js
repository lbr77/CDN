class FlinkCircle {
    constructor(url, el) {
        this.init(url, el)
    }
    async init(url, el) {
        function LoadBlock(item, el) {
            function dateFormat(fmt, date) {
                let ret;
                const opt = {
                    "Y+": date.getFullYear().toString(),
                    "m+": (date.getMonth() + 1).toString(),
                    "d+": date.getDate().toString(),
                    "H+": date.getHours().toString(),
                    "M+": date.getMinutes().toString(),
                    "S+": date.getSeconds().toString()
                };
                for (let k in opt) {
                    ret = new RegExp("(" + k + ")").exec(fmt);
                    if (ret) {
                        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                    }
                };
                return fmt
            }
            let articleItem = `<div class="fArticleItem"><div class="fArticleAvatar"><a class="fArticlelink fAvatar"target="_blank"rel="noopener nofollow"href="${item.link}"><img src="${item.avatar}"alt="avatar"onerror="this.src='https://cdn.stevelbr.top/usr/uploads/2021-10-02-4d734b.png!/format/webp'; this.onerror = null;"></a><div class="fArticleAuthor">${item.author}</div></div><div class="fArticleMessage"><a class="fArticleTitle"href="${item.link}"target="_blank"rel="noopener nofollow"data-title="${item.title}">${item.title}</a><div class="fArticleTime"><span class="fArticleCreated"><i class="far fa-calendar-alt"></i>Published at ${dateFormat("YYYY-mm-dd",new Date(parseInt(item.time)))}</span></div></div></div>`;
            $(`${el}`).append(articleItem);
        }
        async function LoadData(url) {
            saved = JSON.parse(await (await (fetch(url))).text());
            localStorage.setItem("flinkData", JSON.stringify({
                time: new Date().getTime(),
                data: saved
            }));
            return saved
        }
        let saved = localStorage.getItem("flinkData");
        if (!saved) {
            saved = await LoadData(url)
        } else if (((!JSON.parse(saved).data) || (!JSON.parse(saved).time - new Date().getTime() > 2678400000))) {
            saved = await LoadData(url)
        } else {
            saved = JSON.parse(saved)
        }
        function min(a, b) {
            return a > b ? b : a
        }
        saved = saved.data;
        console.log(min(20, saved.length));
        for (let i = 0; i < min(20, saved.length); i++) {
            LoadBlock(saved[i], el)
        }
    }
}
