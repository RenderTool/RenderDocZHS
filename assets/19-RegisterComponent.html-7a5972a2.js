import{_ as p}from"./new animation03-2b947bc5.js";import{_ as c,r as l,o as i,c as u,d as e,w as t,a as n,b as a,e as o}from"./app-f69dda3c.js";const r={},d=n("h3",{id:"_1-使用cdo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-使用cdo","aria-hidden":"true"},"#"),a(" 1.使用CDO：")],-1),k=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	SpringArm <span class="token operator">=</span> <span class="token generic-function"><span class="token function">CreateDefaultSubobject</span><span class="token generic class-name"><span class="token operator">&lt;</span>USpringArmComponent<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;SpringArm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	SpringArm<span class="token operator">-&gt;</span><span class="token function">SetupAttachment</span><span class="token punctuation">(</span>RootComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=o('<figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-使用-newobject-和-registercomponent" tabindex="-1"><a class="header-anchor" href="#_2-使用-newobject-和-registercomponent" aria-hidden="true">#</a> 2.使用 <code>NewObject</code> 和 <code>RegisterComponent</code>：</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 创建 Actor Component</span>
USkeletalMeshComponent<span class="token operator">*</span> SkeletalMeshComponent <span class="token operator">=</span> <span class="token generic-function"><span class="token function">NewObject</span><span class="token generic class-name"><span class="token operator">&lt;</span>USkeletalMeshComponent<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token class-name">USkeletalMeshComponent</span><span class="token double-colon punctuation">::</span><span class="token function">StaticClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;SkeletalMeshComponent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注册组件</span>
SkeletalMeshComponent<span class="token operator">-&gt;</span><span class="token function">RegisterComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-使用-addinstancecomponent" tabindex="-1"><a class="header-anchor" href="#_3-使用-addinstancecomponent" aria-hidden="true">#</a> 3. 使用 <code>AddInstanceComponent</code>：</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>USkeletalMeshComponent<span class="token operator">*</span> SkeletalMeshComponent <span class="token operator">=</span> <span class="token function">AddInstanceComponent</span><span class="token punctuation">(</span><span class="token class-name">USkeletalMeshComponent</span><span class="token double-colon punctuation">::</span><span class="token function">StaticClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;SkeletalMeshComponent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
SkeletalMeshComponent<span class="token operator">-&gt;</span><span class="token function">SetRelativeTransform</span><span class="token punctuation">(</span>InStruct<span class="token punctuation">.</span>SkeletalTransform<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h=n("ul",null,[n("li",null,[n("code",null,"AddInstanceComponent"),a(" 是 "),n("code",null,"UActorComponent"),a(" 的一个成员函数，用于在运行时添加一个新的组件实例到 AActor 上。")]),n("li",null,[a("这个方法内部实际上也是使用了 "),n("code",null,"NewObject"),a(" 和 "),n("code",null,"RegisterComponent"),a("，但是提供了更简化的接口，特别是在 AActor 子类中更方便。")])],-1);function g(v,f){const s=l("chatmessage");return i(),u("div",null,[e(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[a(" RegisterComponent的几种方法 ")]),_:1}),d,e(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[a(" 只可在构造函数中创建。 ")]),_:1}),k,e(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[a(" 有时候需要动态创建组件，比如一些组件中挂载其他组件，使用CDO可能会失效。 ")]),_:1}),m,e(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[h]),_:1})])}const b=c(r,[["render",g],["__file","19-RegisterComponent.html.vue"]]);export{b as default};
