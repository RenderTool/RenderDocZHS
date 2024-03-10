import{_ as o,r as p,o as i,c,d as t,w as e,a,b as n,e as l}from"./app-ca7cc0fa.js";const d="/RenderDocZHS/assets/ganepadfocus-0fb63d39.png",u="/RenderDocZHS/assets/ganepadfocus03-63b30994.png",r="/RenderDocZHS/assets/ganepadfocus02-c937570d.png",k="/RenderDocZHS/assets/ganepadfocus05-b935b372.png",m="/RenderDocZHS/assets/ganepadfocus04-20df041a.png",_="/RenderDocZHS/assets/ganepadfocus06-c7a0bcfb.png",g={},f=a("h3",{id:"_1-前提",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-前提","aria-hidden":"true"},"#"),n(" 1.前提")],-1),v=a("h3",{id:"_2-去掉虚线选择轮廓",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-去掉虚线选择轮廓","aria-hidden":"true"},"#"),n(" 2.去掉虚线选择轮廓")],-1),h=a("p",null,[a("strong",null,"编辑 - 项目首选项 - 用户界面"),n(),a("code",null,"渲染焦点规则"),n("设置为"),a("code",null,"从不")],-1),b=a("figure",null,[a("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),y=a("h3",{id:"_3-聚焦组件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-聚焦组件","aria-hidden":"true"},"#"),n(" 3.聚焦组件")],-1),x=a("figure",null,[a("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),S=a("h3",{id:"_4-重写函数getdesiredfocus",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-重写函数getdesiredfocus","aria-hidden":"true"},"#"),n(" 4.重写函数GetDesiredFocus")],-1),w=a("figure",null,[a("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),j=a("figure",null,[a("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),L=a("figure",null,[a("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),F=a("h3",{id:"_5-吊用没有的函数-nativeonfocusreceived",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_5-吊用没有的函数-nativeonfocusreceived","aria-hidden":"true"},"#"),n(" 5.吊用没有的函数 NativeOnFocusReceived")],-1),I=l(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>FReply <span class="token class-name">UHeroSkinsWidget</span><span class="token double-colon punctuation">::</span><span class="token function">NativeOnFocusReceived</span><span class="token punctuation">(</span><span class="token keyword">const</span> FGeometry<span class="token operator">&amp;</span> InGeometry<span class="token punctuation">,</span> <span class="token keyword">const</span> FFocusEvent<span class="token operator">&amp;</span> InFocusEvent<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">const</span> UCommonInputSubsystem<span class="token operator">*</span> InputSubsystem <span class="token operator">=</span> <span class="token function">GetInputSubsystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>InputSubsystem <span class="token operator">&amp;&amp;</span> InputSubsystem<span class="token operator">-&gt;</span><span class="token function">GetCurrentInputType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> ECommonInputType<span class="token double-colon punctuation">::</span>Gamepad<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>SkinListView<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			SkinListView<span class="token operator">-&gt;</span><span class="token function">NavigateToIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			SkinListView<span class="token operator">-&gt;</span><span class="token function">SetSelectedIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token class-name">FReply</span><span class="token double-colon punctuation">::</span><span class="token function">Handled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token class-name">FReply</span><span class="token double-colon punctuation">::</span><span class="token function">Unhandled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2);function R(W,V){const s=p("chatmessage");return i(),c("div",null,[t(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[n(" 加了一个ListView或者TileView，用手柄发现无法操作! ")]),_:1}),t(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 这是一个非常坑的东西！需要保证下面几个操作。 ")]),_:1}),f,t(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 需要使用CommonUI ")]),_:1}),v,t(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[h]),_:1}),b,y,t(s,{avatar:"../../assets/emoji/new2.png",avatarWidth:50,alignLeft:""},{default:e(()=>[n(" 和聚焦组件是否开启半毛钱关系没有，真的坑 ")]),_:1}),x,S,t(s,{avatar:"../../assets/emoji/new1.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 这样写是没用的 ")]),_:1}),w,t(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 最好是判断现在是不是手柄输入，然后导航到索引为0的位置。 ")]),_:1}),j,t(s,{avatar:"../../assets/emoji/bqb01.png",avatarWidth:40},{default:e(()=>[n(" 导航和设置有区别吗？ ")]),_:1}),t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 有大区别！，导航到位置只是导航不会触发，设置则会触发点击事件。 ")]),_:1}),L,F,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 我看Lyra还写了一个接口函数，实测吊用没有，我真的想吐槽这方面官方文档真的不够仔细，能不能让开发者更专注游戏细节而不是这种基本细节！ ")]),_:1}),I])}const H=o(g,[["render",R],["__file","11GamePadFocus.html.vue"]]);export{H as default};
