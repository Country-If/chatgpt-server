const data = 'http://new.cutim.top/,https://xmind.ai/,https://www.ok1314.cn/,https://www.gogpt.online/,https://chat1.lumione.cloud/,https://chat.locationwith.com/,https://chat.kcalb.wang/,https://chatgpt-yyds.fun/,https://www.mychat.icu/,https://www.kwuang123.xyz/,https://robot.kahao360.com/,https://chat.caoayu.top/,https://www.sotai.cc/,https://magic2.defiweb3.games/,https://ai.ijike.wang/,https://doraemon.hosealle.cloud/,https://chat.gandli.ga/,https://chat.yingqiu001.com/,https://www.case789.com/,https://www.lazyboy.top/,https://chat.v193.one/,https://chat.moyunav.com/,https://chat.w630.cc/,https://chatgpt.lxzh.app/,https://gpt.ppqq.me/,https://sofast.ai/chat,https://chat35.com/chat,https://www.free-bot.top/,https://www.ziyuandaili.com/,https://gpt996.icu/,https://chatweb.intoodoo.com/,https://freechatgpt.chat/,https://trychatgp.com/,https://bengbu.icu/,https://chat-bzl.maybee.shop/,https://chat.aigc101.net/,https://www.simpletrying.xyz/,https://www.ad1865.xyz/,https://www.gpt5.life/,https://chatgpt.cly.life/,https://chat.tradergalax.xyz/,https://vercel.onlybot.club/,https://chat.getgpt.world/,https://chat.chatgptworld.net/,https://chat.zuomu.org/,https://keco.tk/,https://chat.dofun.tech/,https://chatgpt.jingbh.cloud/,https://www.cheapxyzs.online/,https://chat.zyxianzi.moe/,https://ai.i-misaka.com/,https://chat.fcc.cm/,https://chatgpt.allprompt.org/,https://chatgpt.moinkhao.me/,https://app.haitunchat.com/,https://7o5.fun/,https://chatgpt.orcas.link/,https://gpt.jaxonly.com/,https://www.nununu.net/,https://gpt.chrome7.com/,https://chatgpt.text-input1234.tk/,https://www.ioscundang.com/,https://chatgpt.woc.moe/,https://chatgpt.imerc.cc/,https://chatgpt.lik.sale/,https://chatgpt.linjuorange.top/,https://chatgpt.ddiu.me/,https://www.hoofthrower.com/,https://www.chatdage.com/,https://chatgpt.gengai.net/ChatGPT.html,https://www.gptbt.top/,https://chat.199107.xyz/,https://www.rockyzhong.buzz/,https://ai.liuks.cn/,https://bot.sy1120.top/,https://aitools.run/,https://gptweb.ttti.cc/,https://chatgpt.peterdavehello.org/,https://futurewei.tech/,https://chatgpt.yuexun.me/,https://chat.xueshi.io/,https://chat.landon.li/,https://chat.buygpt.shop/,https://gpt.xt98.xyz/,https://xifa.tk/,https://chat.solodu.com/,https://ai.xiaokai.dev/,https://jiehan.tech/,https://chat.acgh.top/,https://www.starryu.cn/,https://www.justrrry.xyz/,https://www.lynngpt.club/,https://gpg.icu/,https://chatgpt.oyas-nano.com/,https://chatgpt.revincx.icu/,https://chatgpt123.fyi/,https://www.luqman.chat/,https://chatgpt.hiiruki.dev/,https://fenfei.v6.rocks/,https://chat.by-pro.cn/,https://chatgpt.930621.xyz/,https://hub.docker.com/r/quzard/chatgpt-demo,https://chat.internetip.cn/,https://chat.bigs.top/,https://www.weijiwangluo.com/talk,https://modelscope.cn/,https://chatgpt-next.aab.icu/,https://chat.wobcw.com/,https://yiyan.baidu.com/,https://chat.lmsys.org/,https://plus.wxredcover.cn/,https://chat.miantiao.me/,https://www.chatgpt123.fyi/,https://mychat.icu/,https://chilloutai.com/,https://lazyboy.top/,https://case789.com/,https://kwuang123.xyz/,https://simpletrying.xyz/,https://ioscundang.com/,https://lynngpt.club/,https://chatgptcn.live/,https://chatgpt.waltcow.com/,https://aibi.one/,https://chatmeta.top/,https://starryu.cn/,https://freeharvest.vip/,https://ylychatgpt.chat/,https://chatgpt.ddiu.io/,https://chat4u.me/,https://kehangbio.com/,https://gpt-prompts.xyz/,https://gptfalao.cloud/,https://kernelgpt.uk/,https://gpt5.life/,https://sailiwen.one/,https://www.gptbot.icu/,https://chat.geekr.cool/,https://ai-toolbox.codefuture.top/';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();