import{_ as r,a as l,b as d}from"./perfect-0c654488.js";import{_ as p,r as o,o as g,c as u,d as t,w as e,a,b as n,e as i}from"./app-c4ee493e.js";const f="/RenderDocZHS/assets/gamefeture-06475ca0.jpg",_="/RenderDocZHS/assets/gf-890daad7.png",m="/RenderDocZHS/assets/errorgf-1781cc2b.png",h="/RenderDocZHS/assets/gfpl2-1bc779f0.png",b="/RenderDocZHS/assets/installgf-f1a4bd25.png",v="/RenderDocZHS/assets/zc-0346cdaa.png",k="/RenderDocZHS/assets/loadgf-9b20183e.png",x="/RenderDocZHS/assets/activegf-6b0a017e.png",y="/RenderDocZHS/assets/gamefplugin-6c581ec8.png",z="/RenderDocZHS/assets/actiongf-d1406f47.png",D="/RenderDocZHS/assets/zujian-56c15cc6.png",S="/RenderDocZHS/assets/bpgf-d26a4746.png",j="/RenderDocZHS/assets/actionsou-6bb2da88.jpg",L="/RenderDocZHS/assets/publicaction-9c273ba4.png",H="/RenderDocZHS/assets/cppgf-dbacd869.png",R="/RenderDocZHS/assets/mapgf-f3598358.png",W="/RenderDocZHS/assets/widgetmapuse-b129aaa0.png",q="/RenderDocZHS/assets/zcff-297903e0.png",Z="/RenderDocZHS/assets/getpr-ecff5a58.png",G={},F=a("h2",{id:"gameplayfeature",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gameplayfeature","aria-hidden":"true"},"#"),n(" GameplayFeature")],-1),w=a("p",null,"游戏功能（Game Features） 和 模块化Gameplay（Modular Gameplay） 插件可以帮助开发人员为项目创建独立功能。",-1),A=a("h3",{id:"概念",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#概念","aria-hidden":"true"},"#"),n(" 概念")],-1),M=a("figure",null,[a("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),N=i('<h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="_1-插件" tabindex="-1"><a class="header-anchor" href="#_1-插件" aria-hidden="true">#</a> 1.插件</h3><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-错误提示" tabindex="-1"><a class="header-anchor" href="#_2-错误提示" aria-hidden="true">#</a> 2.错误提示</h3><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-根据游戏模式设置特性" tabindex="-1"><a class="header-anchor" href="#_3-根据游戏模式设置特性" aria-hidden="true">#</a> 3. 根据游戏模式设置特性</h3><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),B=i('<ul><li>已安装:</li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>已注册:</li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>已加载:</li></ul><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>激活:</li></ul><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-目录结构" tabindex="-1"><a class="header-anchor" href="#_4-目录结构" aria-hidden="true">#</a> 4.目录结构</h3><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),C=a("h3",{id:"_5-默认动作",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_5-默认动作","aria-hidden":"true"},"#"),n(" 5.默认动作")],-1),P=a("figure",null,[a("img",{src:z,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),U=a("figure",null,[a("img",{src:D,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),V=a("figure",null,[a("img",{src:S,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),E=a("figure",null,[a("img",{src:j,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),I=a("figure",null,[a("img",{src:L,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),T=a("figure",null,[a("img",{src:H,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),J=a("h3",{id:"_6-gamefeature",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_6-gamefeature","aria-hidden":"true"},"#"),n(" 6.gamefeature")],-1),K=a("figure",null,[a("img",{src:R,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),O=a("figure",null,[a("img",{src:W,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),Q=a("figure",null,[a("img",{src:q,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),X=i(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>FString <span class="token class-name">UCommonSession_HostSessionRequest</span><span class="token double-colon punctuation">::</span><span class="token function">GetMapName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
	FAssetData MapAssetData<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">UAssetManager</span><span class="token double-colon punctuation">::</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetPrimaryAssetData</span><span class="token punctuation">(</span>MapID<span class="token punctuation">,</span> <span class="token comment">/*out*/</span> MapAssetData<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> MapAssetData<span class="token punctuation">.</span>PackageName<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">FString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Y=a("figure",null,[a("img",{src:Z,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),$=a("h3",{id:"_7-巨坑",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_7-巨坑","aria-hidden":"true"},"#"),n(" 7.巨坑")],-1),aa=a("figure",null,[a("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),na=a("figure",null,[a("img",{src:l,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),ta=a("figure",null,[a("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),sa=a("h2",{id:"参考链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),n(" 参考链接")],-1),ea={href:"https://docs.unrealengine.com/5.0/zh-CN/game-features-and-modular-gameplay-in-unreal-engine/",target:"_blank",rel:"noopener noreferrer"};function ia(oa,ca){const s=o("chatmessage"),c=o("ExternalLinkIcon");return g(),u("div",null,[F,w,A,t(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[n(" 啥意思？我可以理解成模块化开发？ ")]),_:1}),t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 是这么个意思，借用大佬的图形象的解释一下。 ")]),_:1}),M,t(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[n(" 所以本质是插件+资产化？ ")]),_:1}),t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 可以这么理解。Game Features后面我们简称GF，既然是插件，就得康康怎么用再来决定要不要用到开发流程上。 ")]),_:1}),N,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 解释一下这里的当前状态的作用 ")]),_:1}),B,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 可以看到和普通插件一样，拥有一个独立的Content,其他的资源该怎么加就怎么加。 ")]),_:1}),C,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 下面一行就是要添加的动作，官方给了几个默认的行为 ")]),_:1}),P,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 以添加组件为例 ")]),_:1}),U,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 然后在对应的BP中添加对应的激活和关闭节点即可（依然是一个子系统） ")]),_:1}),V,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 当然官方的Lyra案例中写了个更多例子 ")]),_:1}),E,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 想要自定义也很简单，只需要继承UGameFeatureAction即可。 ")]),_:1}),I,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 当然，只有CPP中可以看到 ")]),_:1}),T,J,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 接着是一些要扫描的资产，比如地图 ")]),_:1}),K,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 值得注意的是，一但GF化后的地方就无法使用软引用的方法打开地图了。例如：我在UMG中创建打开一个地图。 ")]),_:1}),O,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 会提示资产非法。 ")]),_:1}),Q,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 你可以做一个对应的Action来添加地图，也可以模仿Lyra通过注册资产来加载。 ")]),_:1}),X,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 直接用BP也可以 ")]),_:1}),Y,$,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 一模一样的两个工程，有时候莫名其妙项目就看不到插件内容。一度以为自己写了什么BUG。 ")]),_:1}),aa,t(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 后来发现即便是显示了设置插件内容如果看不到插件目录也要重新点开一遍！ ")]),_:1}),na,t(s,{avatar:"../../assets/emoji/bqb (6).png",avatarWidth:40},{default:e(()=>[n(" 卧槽！ ")]),_:1}),ta,sa,a("p",null,[a("a",ea,[n("官网"),t(c)])])])}const da=p(G,[["render",ia],["__file","7-GameFeature.html.vue"]]);export{da as default};
