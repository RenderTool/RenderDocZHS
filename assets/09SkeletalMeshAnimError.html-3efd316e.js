import{_ as i}from"./new animation03-27d85776.js";import{_ as l,r as c,o as u,c as r,d as s,w as e,a as n,e as o,b as a}from"./app-f9abccac.js";const d="/RenderDocZHS/assets/new animation02-5f7c3503.jpg",k="/RenderDocZHS/assets/new animation04-60da88b5.png",m="/RenderDocZHS/assets/node-806bf3ef.png",v={},g=n("figure",null,[n("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),b=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">UExorcistFunctionLibrary</span><span class="token double-colon punctuation">::</span><span class="token function">SetSkeletalMeshAndAnimation</span><span class="token punctuation">(</span>USkeletalMesh<span class="token operator">*</span> NewMesh<span class="token punctuation">,</span> UAnimationAsset<span class="token operator">*</span> NewAnimation<span class="token punctuation">,</span>
                                                           <span class="token keyword">float</span> PlayRate<span class="token punctuation">,</span> <span class="token keyword">bool</span> bLooping<span class="token punctuation">,</span>
                                                           USkeletalMeshComponent<span class="token operator">*</span> TargetMeshComponent<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>TargetMeshComponent<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// 设置骨骼网格</span>
		TargetMeshComponent<span class="token operator">-&gt;</span><span class="token function">SetSkeletalMesh</span><span class="token punctuation">(</span>NewMesh<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 播放动画</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>NewAnimation<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			TargetMeshComponent<span class="token operator">-&gt;</span><span class="token function">PlayAnimation</span><span class="token punctuation">(</span>NewAnimation<span class="token punctuation">,</span> bLooping<span class="token punctuation">)</span><span class="token punctuation">;</span>
			TargetMeshComponent<span class="token operator">-&gt;</span><span class="token function">SetPlayRate</span><span class="token punctuation">(</span>PlayRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=o('<figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">USkeletalMeshComponent</span><span class="token double-colon punctuation">::</span><span class="token function">PlayAnimation</span><span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">UAnimationAsset</span><span class="token operator">*</span> NewAnimToPlay<span class="token punctuation">,</span> <span class="token keyword">bool</span> bLooping<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">SetAnimationMode</span><span class="token punctuation">(</span>EAnimationMode<span class="token double-colon punctuation">::</span>AnimationSingleNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">SetAnimation</span><span class="token punctuation">(</span>NewAnimToPlay<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">Play</span><span class="token punctuation">(</span>bLooping<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">USkeletalMeshComponent</span><span class="token double-colon punctuation">::</span><span class="token function">SetAnimation</span><span class="token punctuation">(</span>UAnimationAsset<span class="token operator">*</span> NewAnimToPlay<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	UAnimSingleNodeInstance<span class="token operator">*</span> SingleNodeInstance <span class="token operator">=</span> <span class="token function">GetSingleNodeInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>SingleNodeInstance<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		SingleNodeInstance<span class="token operator">-&gt;</span><span class="token function">SetAnimationAsset</span><span class="token punctuation">(</span>NewAnimToPlay<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		SingleNodeInstance<span class="token operator">-&gt;</span><span class="token function">SetPlaying</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> AnimScriptInstance <span class="token operator">!=</span> <span class="token keyword">nullptr</span> <span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">UE_LOG</span><span class="token punctuation">(</span>LogAnimation<span class="token punctuation">,</span> Warning<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;Currently in Animation Blueprint mode. Please change AnimationMode to Use Animation Asset&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=n("p",null,"UE5.2版本中PlayAnimation 和SetAnimation 都能更新动画，但都不能解决材质Bug!",-1),S=o('<h3 id="一-动态创建组件" tabindex="-1"><a class="header-anchor" href="#一-动态创建组件" aria-hidden="true">#</a> 一. 动态创建组件</h3><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-使用-newobject-和-registercomponent" tabindex="-1"><a class="header-anchor" href="#_1-使用-newobject-和-registercomponent" aria-hidden="true">#</a> 1.使用 <code>NewObject</code> 和 <code>RegisterComponent</code>：</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 创建 Actor Component</span>
USkeletalMeshComponent<span class="token operator">*</span> SkeletalMeshComponent <span class="token operator">=</span> <span class="token generic-function"><span class="token function">NewObject</span><span class="token generic class-name"><span class="token operator">&lt;</span>USkeletalMeshComponent<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token class-name">USkeletalMeshComponent</span><span class="token double-colon punctuation">::</span><span class="token function">StaticClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;SkeletalMeshComponent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注册组件</span>
SkeletalMeshComponent<span class="token operator">-&gt;</span><span class="token function">RegisterComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用-addinstancecomponent" tabindex="-1"><a class="header-anchor" href="#_2-使用-addinstancecomponent" aria-hidden="true">#</a> 2. 使用 <code>AddInstanceComponent</code>：</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>USkeletalMeshComponent<span class="token operator">*</span> SkeletalMeshComponent <span class="token operator">=</span> <span class="token function">AddInstanceComponent</span><span class="token punctuation">(</span><span class="token class-name">USkeletalMeshComponent</span><span class="token double-colon punctuation">::</span><span class="token function">StaticClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;SkeletalMeshComponent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
SkeletalMeshComponent<span class="token operator">-&gt;</span><span class="token function">SetRelativeTransform</span><span class="token punctuation">(</span>InStruct<span class="token punctuation">.</span>SkeletalTransform<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),_=n("ul",null,[n("li",null,[n("code",null,"AddInstanceComponent"),a(" 是 "),n("code",null,"UActorComponent"),a(" 的一个成员函数，用于在运行时添加一个新的组件实例到 AActor 上。")]),n("li",null,[a("这个方法内部实际上也是使用了 "),n("code",null,"NewObject"),a(" 和 "),n("code",null,"RegisterComponent"),a("，但是提供了更简化的接口，特别是在 AActor 子类中更方便。")])],-1),M=n("h3",{id:"二-缓存材质-传递材质",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二-缓存材质-传递材质","aria-hidden":"true"},"#"),a(" 二. 缓存材质，传递材质")],-1),A=n("figure",null,[n("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),y=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 其中SkeletalMesh为传入的新的骨骼网格物体，请自己判断原始模型上有没有材质</span>
TArray<span class="token operator">&lt;</span>FSkeletalMaterial<span class="token operator">&gt;</span> CurrentMats <span class="token operator">=</span> SkeletalMesh<span class="token operator">-&gt;</span><span class="token function">GetMaterials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
SkeletalMeshComponent<span class="token operator">-&gt;</span><span class="token function">SetSkeletalMesh</span><span class="token punctuation">(</span>SkeletalMesh<span class="token punctuation">)</span><span class="token punctuation">;</span>
SkeletalMeshComponent<span class="token operator">-&gt;</span><span class="token function">SetMaterials</span><span class="token punctuation">(</span>CurrentMats<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>正确的应该是：</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TArray<span class="token operator">&lt;</span>FSkeletalMaterial<span class="token operator">&gt;</span> CurrentMats <span class="token operator">=</span> SkeletalMesh<span class="token operator">-&gt;</span><span class="token function">GetMaterials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>CurrentMats<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>int32 i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>CurrentMats<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    SkeletalMeshComponent<span class="token operator">-&gt;</span><span class="token function">SetMaterial</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>CurrentMats<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>MaterialInterface<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function C(w,x){const t=c("chatmessage"),p=c("gifwithbutton");return u(),r("div",null,[s(t,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 起因是这样得，我在做角色皮肤切换效果 ")]),_:1}),s(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 然后呢？ ")]),_:1}),s(t,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 按正常人的思维来说，只要设置新的骨骼网格体+播放指定动画就行了！ ")]),_:1}),g,s(t,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 一开始我只使用了前面的设置蒙皮资产和更新切换不同的角色，实现的非常完美！ ")]),_:1}),s(p,{src:"../../assets/unrealgif/hpimpove09.gif"}),s(t,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 然后我把后面的节点也用上了 ")]),_:1}),b,s(t,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 悲剧发生了！切换动画后角色的材质ID出现了错位。 ")]),_:1}),s(p,{src:"../../assets/unrealgif/hpimpove10.gif"}),s(t,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 我翻开了源码发现了这里两段函数！ ")]),_:1}),h,s(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[f]),_:1}),s(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 目前有两个解决方案： ")]),_:1}),S,s(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[_]),_:1}),M,A,s(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 注意不要偷懒直接用SetMaterials,GetMaterials 返回的是 Skeletal Mesh 中的材质数组的一个拷贝，而不是对原始数组的引用。 ")]),_:1}),y])}const T=l(v,[["render",C],["__file","09SkeletalMeshAnimError.html.vue"]]);export{T as default};