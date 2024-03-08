import{_ as i,r as l,o as u,c as r,d as o,w as a,a as n,b as s,e as k}from"./app-d070a7fb.js";const d={},m=n("h2",{id:"spectating-system",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spectating-system","aria-hidden":"true"},"#"),s(" Spectating System")],-1),v=n("p",null,"观战系统直观的分为两类，一类是主动观战系统比如比赛、观战模式。一类则是被动的，比如死亡观战。",-1),b=k(`<h3 id="_1-观战类-spectatorpawn" tabindex="-1"><a class="header-anchor" href="#_1-观战类-spectatorpawn" aria-hidden="true">#</a> 1.观战类|SpectatorPawn</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>UMySpectatorPawnr <span class="token operator">:</span> <span class="token keyword">public</span> APawn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-观战类接口" tabindex="-1"><a class="header-anchor" href="#_2-观战类接口" aria-hidden="true">#</a> 2.观战类接口</h3>`,3),y=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"virtual"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"SetupPlayerInputComponent"),n("span",{class:"token punctuation"},"("),s("UInputComponent"),n("span",{class:"token operator"},"*"),s(" InInputComponent"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"override"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"/** Move camera to next player */"),s(`
`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"ViewNextPlayer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"/** Move camera to previous player */"),s(`
`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"ViewPrevPlayer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token class-name"},"AMySpectatorPawn"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"SetupPlayerInputComponent"),n("span",{class:"token punctuation"},"("),s("UInputComponent"),n("span",{class:"token operator"},"*"),s(" InInputComponent"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Super"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"SetupPlayerInputComponent"),n("span",{class:"token punctuation"},"("),s("InInputComponent"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    InInputComponent`),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"BindAction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ViewNext"'),n("span",{class:"token punctuation"},","),s(" IE_Pressed"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("ThisClass"),n("span",{class:"token double-colon punctuation"},"::"),s("ViewNextPlayer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    InInputComponent`),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"BindAction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ViewPrev"'),n("span",{class:"token punctuation"},","),s(" IE_Pressed"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("ThisClass"),n("span",{class:"token double-colon punctuation"},"::"),s("ViewPrevPlayer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token class-name"},"AMySpectatorPawn"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"ViewNextPlayer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("APlayerController"),n("span",{class:"token operator"},"*"),s(" PC "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"GetController"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("APlayerController"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        PC`),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"ServerViewNextPlayer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token class-name"},"AMySpectatorPawn"),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"ViewPrevPlayer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("APlayerController"),n("span",{class:"token operator"},"*"),s(" PC "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"GetController"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("APlayerController"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        PC`),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"ServerViewPrevPlayer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(P,_){const c=l("chatmessage"),p=l("CodeTabs");return u(),r("div",null,[m,v,o(c,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[s(" 网络上好像很少有讲观战系统的！ ")]),_:1}),o(c,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:a(()=>[s(" 那么今天我们来简单品尝一下观战系统！别慌，EpicBaba该写的都写的差不多了！ ")]),_:1}),b,o(p,{id:"15",data:[{id:"MySpectatorPawn.h"},{id:"MySpectatorPawn.cpp"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("MySpectatorPawn.h")]),title1:a(({value:e,isActive:t})=>[s("MySpectatorPawn.cpp")]),tab0:a(({value:e,isActive:t})=>[y]),tab1:a(({value:e,isActive:t})=>[h]),_:1},8,["data"])])}const g=i(d,[["render",w],["__file","9-Spectating.html.vue"]]);export{g as default};
