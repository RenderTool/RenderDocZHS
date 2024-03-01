import{_ as p,r as c,o as i,c as l,d as n,w as a,a as t,e as o,b as e}from"./app-f69dda3c.js";const u="/RenderDoc/assets/suberror-42139cc4.png",r="/RenderDoc/assets/worldsubsystem-5d8f4954.png",d={},k=t("figure",null,[t("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),m=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	InventorySubsystem <span class="token operator">=</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetGameInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UExorcistInventorySubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">check</span><span class="token punctuation">(</span>InventorySubsystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	ExtensionSubsystem <span class="token operator">=</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetGameInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UUIExtensionSubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">check</span><span class="token punctuation">(</span>ExtensionSubsystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h3>`,2),g=o('<figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	ExtensionSubsystem <span class="token operator">=</span> <span class="token function">GetWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UUIExtensionSubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function b(v,f){const s=c("chatmessage");return i(),l("div",null,[n(s,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:a(()=>[e(" Baba!为什么我获取子系统编译报错了！ ")]),_:1}),k,n(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" 看看代码 ")]),_:1}),m,n(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" 不好意思！ExtensionSubsystem并不是gamesubsystem![回顾子系统](../core[核心]/4.1-SubsystemUse.md) ")]),_:1}),g])}const _=p(d,[["render",b],["__file","07SubsystemError.html.vue"]]);export{_ as default};