import{_ as p,r as c,o as l,c as i,d as t,w as e,a as n,e as o,b as s}from"./app-3f521a46.js";const u="/RenderDocZHS/assets/beginplay-8a5aedaa.png",r="/RenderDocZHS/assets/bpfirst-0adb770f.png",d="/RenderDocZHS/assets/actorbeginplay-580108f3.png",k="/RenderDocZHS/assets/eventbegin!-352d5161.png",v={},m=n("p",null,[s("C++中的"),n("code",null,"BeginPlay"),s("是不是就是蓝图中的"),n("code",null,"EventBeginPlay")],-1),g=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),b=n("p",null,[s("回答问题之前我们先看看C++的"),n("code",null,"BeginPlay")],-1),y=o(`<blockquote><p>新建一个测试actor</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;CoreMinimal.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;GameFramework/Actor.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTest.generated.h&quot;</span></span>

<span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">EXORCIST_API</span> AMyTest <span class="token operator">:</span> <span class="token keyword">public</span> AActor
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// Sets default values for this actor&#39;s properties</span>
	<span class="token function">AMyTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">protected</span><span class="token operator">:</span>
	<span class="token comment">// Called when the game starts or when spawned</span>
	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span><span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// Called every frame</span>
	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Tick</span><span class="token punctuation">(</span><span class="token keyword">float</span> DeltaTime<span class="token punctuation">)</span> <span class="token keyword">override</span><span class="token punctuation">;</span>
		
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">AMyTest</span><span class="token double-colon punctuation">::</span><span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">Super</span><span class="token double-colon punctuation">::</span><span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	GEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.0f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>Blue<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;C++ BeginPlay&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=n("p",null,[s("确实，按照我们的惯性思维这里的"),n("code",null,"EventBeginPlay"),s("和"),n("code",null,"C++BeginPlay"),s("认为是一个东西,所以应该先打印父项部分再打印子项，可事实真的这样吗？")],-1),h=n("figure",null,[n("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),B=n("figure",null,[n("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),P=n("p",null,[s("可是继承的父类Actor中 "),n("code",null,"BeginPlay"),s("只是一个虚函数，而且没有宏标记！他是怎么映射到蓝图中的?")],-1),w=n("p",null,[s("起初我也以为是父类标记了"),n("code",null,"BeginPlay"),s("的"),n("code",null,"UPROPERTY"),s(",子类可以省略不写。现在看来并不是这样。我们康康定义的源码写了什么!")],-1),A=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">AActor</span><span class="token double-colon punctuation">::</span><span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">TRACE_OBJECT_LIFETIME_BEGIN</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">ensureMsgf</span><span class="token punctuation">(</span>ActorHasBegunPlay <span class="token operator">==</span> EActorBeginPlayState<span class="token double-colon punctuation">::</span>BeginningPlay<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;BeginPlay was called on actor %s which was in state %d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token function">GetPathName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>int32<span class="token punctuation">)</span>ActorHasBegunPlay<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">SetLifeSpan</span><span class="token punctuation">(</span> InitialLifeSpan <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">RegisterAllActorTickFunctions</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Components are done below.</span>

	TInlineComponentArray<span class="token operator">&lt;</span>UActorComponent<span class="token operator">*</span><span class="token operator">&gt;</span> Components<span class="token punctuation">;</span>
	<span class="token function">GetComponents</span><span class="token punctuation">(</span>Components<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span>UActorComponent<span class="token operator">*</span> Component <span class="token operator">:</span> Components<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// bHasBegunPlay will be true for the component if the component was renamed and moved to a new outer during initialization</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token operator">-&gt;</span><span class="token function">IsRegistered</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>Component<span class="token operator">-&gt;</span><span class="token function">HasBegunPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			Component<span class="token operator">-&gt;</span><span class="token function">RegisterAllComponentTickFunctions</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			Component<span class="token operator">-&gt;</span><span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">ensureMsgf</span><span class="token punctuation">(</span>Component<span class="token operator">-&gt;</span><span class="token function">HasBegunPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to route BeginPlay (%s)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">*</span>Component<span class="token operator">-&gt;</span><span class="token function">GetFullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// When an Actor begins play we expect only the not bAutoRegister false components to not be registered</span>
			<span class="token comment">//check(!Component-&gt;bAutoRegister);</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">GetAutoDestroyWhenFinished</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>UWorld<span class="token operator">*</span> MyWorld <span class="token operator">=</span> <span class="token function">GetWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>UAutoDestroySubsystem<span class="token operator">*</span> AutoDestroySys <span class="token operator">=</span> MyWorld<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UAutoDestroySubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				AutoDestroySys<span class="token operator">-&gt;</span><span class="token function">RegisterActor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">ReceiveBeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	ActorHasBegunPlay <span class="token operator">=</span> EActorBeginPlayState<span class="token double-colon punctuation">::</span>HasBegunPlay<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C=n("p",null,[s("我发现他结尾调用了"),n("code",null,"ReceiveBeginPlay"),s("！这个函数的声明的"),n("code",null,"UPROPERTY"),s("元数据属性中就有 "),n("code",null,'meta=(DisplayName = "BeginPlay")'),s("!!!")],-1),q=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),T=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"注"),n("p",null,[n("code",null,'meta=(DisplayName = "BeginPlay")'),s(" 用于修改显示节点名。")])],-1),S=o("<blockquote><p>因为我们加了Super::BeginPlay();所以执行顺序如下：</p></blockquote><ol><li>重写后的Actor<code>BeginPlay</code></li><li>执行<code>BeginPlay</code>中的<code>ReceiveBeginPlay()</code>;——》<code>BP BeginPlay</code></li><li>执行打印——》C++<code>BeginPlay</code></li></ol>",2);function E(R,x){const a=c("chatmessage");return l(),i("div",null,[t(a,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[m]),_:1}),g,t(a,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:e(()=>[b]),_:1}),y,t(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 我们已经看到了继承重写的BeginPlay函数，现在我们往定义中添加一些测试代码 ")]),_:1}),f,t(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 接着我们在派生的蓝图EventBeginPlay中也写一份打印，你觉得打印顺序是什么？ ")]),_:1}),t(a,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[s(" 蓝图派生自C++的actor，那么应该先打印C++的内容然后打印BP的内容。 ")]),_:1}),t(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[_]),_:1}),h,t(a,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[s(" 为什么先打印的BP? ")]),_:1}),t(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 说明我们调用C++BeginPlay 之前 已经调用了BP部分的函数。我们可以去源码中康康猫腻在哪！ ")]),_:1}),B,t(a,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[P]),_:1}),t(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[w]),_:1}),A,t(a,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40},{default:e(()=>[C]),_:1}),q,T,t(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 没错，这就解释了为什么继承的Actor执行后会先调用蓝图部分的函数再调用C++。 ")]),_:1}),S])}const D=p(v,[["render",E],["__file","13-BeginPlay.html.vue"]]);export{D as default};
