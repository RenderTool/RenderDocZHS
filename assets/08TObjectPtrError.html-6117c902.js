import{_ as i,r as s,o as p,c as l,d as n,w as t,a as o,b as a,e as r}from"./app-ca7cc0fa.js";const d="/RenderDocZHS/assets/functionerror001-542625d9.png",u="/RenderDocZHS/assets/functionerror002-c67421e9.png",g={},f=r('<figure><img src="'+d+`" alt="functionerror001.png" tabindex="0" loading="lazy"><figcaption>functionerror001.png</figcaption></figure><ol><li>目前只有属性中可以使用TObjectPtr</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UPROPERTY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
TObjectPtr<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> MYActor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>文档是这么介绍的</li></ol><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h3>',6),m=r(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;ExorcistInventorySubsystem&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">AddTotalConfig</span><span class="token punctuation">(</span><span class="token keyword">const</span> UInventoryTotalConfig<span class="token operator">*</span> ConfigToAdd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>`,2),_={href:"https://docs.unrealengine.com/5.3/zh-CN/smart-pointers-in-unreal-engine/",target:"_blank",rel:"noopener noreferrer"};function h(k,v){const e=s("chatmessage"),c=s("ExternalLinkIcon");return p(),l("div",null,[n(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[a(" 我在函数参数列表中使用TObjectPtr报错了怎么办？ ")]),_:1}),f,n(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 改用传统C++指针 ")]),_:1}),m,o("p",null,[o("a",_,[a("官方文档"),n(c)])])])}const x=i(g,[["render",h],["__file","08TObjectPtrError.html.vue"]]);export{x as default};
