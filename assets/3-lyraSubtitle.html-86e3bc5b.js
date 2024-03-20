import{_ as n,r as o,o as l,c as r,d as e,w as s,e as d,a,b as i}from"./app-3f521a46.js";const c="/RenderDocZHS/assets/lyrasub1-1583d273.png",g="/RenderDocZHS/assets/lyrasub2-23e1e03a.png",u="/RenderDocZHS/assets/lyrasub3-d3f38cf1.png",_="/RenderDocZHS/assets/lyrasub4-7048a2b5.png",p="/RenderDocZHS/assets/lyrasub5-c75c3a7d.png",f="/RenderDocZHS/assets/lyrasub6-2aba0213.png",b="/RenderDocZHS/assets/lyrasub7-e08572ed.png",m="/RenderDocZHS/assets/lyrasub8-5e4d0e6f.png",h="/RenderDocZHS/assets/lyrasub9-f0885322.png",y="/RenderDocZHS/assets/subsub-13fc16bf.png",S="/RenderDocZHS/assets/usesubtitle-f93c2669.png",v={},x=d('<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><h3 id="依赖插件-gamesubtitles" tabindex="-1"><a class="header-anchor" href="#依赖插件-gamesubtitles" aria-hidden="true">#</a> 依赖插件：GameSubtitles</h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),D=a("p",null,[i("先看一个比较重要的一个类 "),a("code",null,"USubtitleDisplay : public UWidget")],-1),W=a("figure",null,[a("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),H=a("figure",null,[a("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),j=a("p",null,[i("需要配置相关 Options 资产类 "),a("code",null,"[USubtitleDisplayOptions : public UDataAsset]")],-1),z=a("figure",null,[a("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),L=a("figure",null,[a("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),R=a("figure",null,[a("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),Z=a("figure",null,[a("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),U=a("figure",null,[a("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),k=a("figure",null,[a("img",{src:y,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),G=a("figure",null,[a("img",{src:S,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function q(w,M){const t=o("chatmessage");return l(),r("div",null,[x,e(t,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40,alignLeft:""},{default:s(()=>[D]),_:1}),W,e(t,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" 表现为游戏内为 UMG 组件，用于显示游戏字幕。 ")]),_:1}),H,e(t,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:s(()=>[j]),_:1}),z,e(t,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" 游戏内路径: Content/UI/Foundation/Subtitles/W_SubtitleDisplayHost.uasset ")]),_:1}),e(t,{avatar:"../../assets/emoji/new4.png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" 配置内容其实也就是字体和显示的一些属性，和 GameSetting 里是对应的。 ")]),_:1}),L,R,e(t,{avatar:"../../assets/emoji/new1.png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" 当然使用它也非常简单，随便找一个音频文件，添加测试字幕 ")]),_:1}),Z,e(t,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" 下面是效果。 ")]),_:1}),U,e(t,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" 至于使用，只需要像一个普通UMG组件一样附加到显示的UMG上即可。 ")]),_:1}),e(t,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:s(()=>[i(" 那么为什么这个组件加到UMG上就能用呢？ ")]),_:1}),e(t,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" 猫腻其实就出现在这——SubtitleDisplaySubsystem ")]),_:1}),k,e(t,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:s(()=>[i(" Lyra大量使用了Subsystem这里的SubtitleDisplaySubsystem继承自UGameInstanceSubsystem ")]),_:1}),G])}const V=n(v,[["render",q],["__file","3-lyraSubtitle.html.vue"]]);export{V as default};
