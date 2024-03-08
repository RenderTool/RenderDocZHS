import{_ as i,r as p,o as u,c as r,d as a,w as e,a as s,b as n,e as o}from"./app-d070a7fb.js";const d="/RenderDocZHS/assets/getactorofclass-0ca144d5.jpg",k="/RenderDocZHS/assets/getallactorsofclass-42d2cf8a.png",m="/RenderDocZHS/assets/constwithoutconst-e28bad4a.png",v="/RenderDocZHS/assets/wss-435f7e33.png",b="/RenderDocZHS/assets/xd-776c4b30.png",g="/RenderDocZHS/assets/yjsc-f2d18a48.png",f="/RenderDocZHS/assets/cppcastvsgetacotrofclass-c66993a3.png",h={},A=s("h2",{id:"getactorofclass",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getactorofclass","aria-hidden":"true"},"#"),n(" GetActorOfClass")],-1),y=s("h3",{id:"节点介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#节点介绍","aria-hidden":"true"},"#"),n(" 节点介绍")],-1),_=s("figure",null,[s("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),C=s("h3",{id:"节点案例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#节点案例","aria-hidden":"true"},"#"),n(" 节点案例")],-1),O=s("h3",{id:"c-剖析",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c-剖析","aria-hidden":"true"},"#"),n(" c++剖析")],-1),w=s("span",{style:{color:"#c0392b"}},"getactorofclass",-1),x=o(`<h4 id="gameplaystatics-h" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-h" aria-hidden="true">#</a> GameplayStatics.h</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * 在世界中查找指定类的第一个Actor。
 * 这是一项耗时的操作，谨慎使用，例如不要在每一帧都使用。
 * @param ActorClass 要查找的Actor的类。必须指定，否则结果将为空。
 * @return 指定类的Actor。
 */</span>
<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">,</span> meta<span class="token operator">=</span><span class="token punctuation">(</span>WorldContext<span class="token operator">=</span><span class="token string">&quot;WorldContextObject&quot;</span><span class="token punctuation">,</span> DeterminesOutputType<span class="token operator">=</span><span class="token string">&quot;ActorClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">AActor</span><span class="token operator">*</span> <span class="token function">GetActorOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),T=s("p",null,[n("一个普通静态函数，返回类型是 "),s("code",null,"AActor*"),n("，即指向 "),s("code",null,"AActor"),n(" 类的指针。"),s("br"),n(" 在C++中，"),s("code",null,"static"),n(" 关键字用于指示该函数是属于类而不是类的实例，并且可以直接通过类名来调用，而不需要创建类的实例。")],-1),W=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> myVariable<span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 函数实现</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个MyClass类的实例</span>
MyClass myObject<span class="token punctuation">;</span>

<span class="token comment">//如果函数是static实现，则不需要创建实例就可以直接调用</span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> myVariable<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 静态函数实现</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 直接调用静态函数</span>
<span class="token class-name">MyClass</span><span class="token double-colon punctuation">::</span><span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),j=s("p",null,[n("这里static修饰的了函数,因此 "),s("code",null,"UGameplayStatics::GetActorOfClass"),n(" 可以直接调用，而不需要创建 "),s("code",null,"UGameplayStatics"),n(" 类的实例。")],-1),U=o(`<h4 id="gameplaystatics-cpp" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-cpp" aria-hidden="true">#</a> GameplayStatics.cpp</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>AActor<span class="token operator">*</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetActorOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 使用QUICK_SCOPE_CYCLE_COUNTER进行性能分析，标记函数调用的性能</span>
    <span class="token function">QUICK_SCOPE_CYCLE_COUNTER</span><span class="token punctuation">(</span>UGameplayStatics_GetActorOfClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果未提供ActorClass，则不执行任何操作，直接返回nullptr</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ActorClass<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 通过WorldContextObject获取当前世界的指针，如果失败则记录错误并返回nullptr</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>UWorld<span class="token operator">*</span> World <span class="token operator">=</span> GEngine<span class="token operator">-&gt;</span><span class="token function">GetWorldFromContextObject</span><span class="token punctuation">(</span>WorldContextObject<span class="token punctuation">,</span> EGetWorldErrorMode<span class="token double-colon punctuation">::</span>LogAndReturnNull<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 使用TActorIterator迭代World中的所有指定类型的Actor</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>TActorIterator<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> <span class="token function">It</span><span class="token punctuation">(</span>World<span class="token punctuation">,</span> ActorClass<span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 获取当前迭代到的Actor指针</span>
                AActor<span class="token operator">*</span> Actor <span class="token operator">=</span> <span class="token operator">*</span>It<span class="token punctuation">;</span>
                <span class="token comment">// 返回找到的第一个符合条件的Actor</span>
                <span class="token keyword">return</span> Actor<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果未找到符合条件的Actor，返回nullptr</span>
    <span class="token keyword">return</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),S=o('<h2 id="getallactorofclass" tabindex="-1"><a class="header-anchor" href="#getallactorofclass" aria-hidden="true">#</a> GetAllActorOfClass</h2><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="节点介绍-1" tabindex="-1"><a class="header-anchor" href="#节点介绍-1" aria-hidden="true">#</a> 节点介绍</h3>',3),G=o(`<h4 id="gameplaystatics-h-1" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-h-1" aria-hidden="true">#</a> GameplayStatics.h</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * 在世界中查找指定类的所有角色。
 * 这是一个较慢的操作，请谨慎使用，例如不要在每一帧都使用。
 * @param ActorClass 要查找的Actor类。必须指定，否则结果数组将为空。
 * @param OutActors 输出包含指定类的Actor数组。
 */</span>
<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">,</span> meta<span class="token operator">=</span><span class="token punctuation">(</span>WorldContext<span class="token operator">=</span><span class="token string">&quot;WorldContextObject&quot;</span><span class="token punctuation">,</span> DeterminesOutputType<span class="token operator">=</span><span class="token string">&quot;ActorClass&quot;</span><span class="token punctuation">,</span> DynamicOutputParam<span class="token operator">=</span><span class="token string">&quot;OutActors&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">GetAllActorsOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">,</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gameplaystatics-cpp-1" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-cpp-1" aria-hidden="true">#</a> GameplayStatics.cpp</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetAllActorsOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">,</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 使用QUICK_SCOPE_CYCLE_COUNTER进行性能分析，标记函数调用的性能</span>
    <span class="token function">QUICK_SCOPE_CYCLE_COUNTER</span><span class="token punctuation">(</span>UGameplayStatics_GetAllActorsOfClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 清空输出数组</span>
    OutActors<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果未提供类，则不执行任何操作，而是返回空数组</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ActorClass<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 从上下文对象获取世界，如果失败则记录错误并返回空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>UWorld<span class="token operator">*</span> World <span class="token operator">=</span> GEngine<span class="token operator">-&gt;</span><span class="token function">GetWorldFromContextObject</span><span class="token punctuation">(</span>WorldContextObject<span class="token punctuation">,</span> EGetWorldErrorMode<span class="token double-colon punctuation">::</span>LogAndReturnNull<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 遍历世界中指定类的所有Actor</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>TActorIterator<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> <span class="token function">It</span><span class="token punctuation">(</span>World<span class="token punctuation">,</span> ActorClass<span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                AActor<span class="token operator">*</span> Actor <span class="token operator">=</span> <span class="token operator">*</span>It<span class="token punctuation">;</span>
                OutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3>`,5),N=s("br",null,null,-1),F=o("<p><code>DeterminesOutputType</code> 和 <code>DynamicOutputParam</code> 是 UFUNCTION 宏的元数据，用于在蓝图中更好地处理输出参数的类型。</p><ol><li><p><strong><code>DeterminesOutputType</code>：</strong></p><ul><li>当指定了 <code>DeterminesOutputType</code> 元数据时，它表示函数的输出参数类型是由函数的实现决定的，而不是由函数声明时指定的。这对于一些动态生成输出类型的函数非常有用。</li></ul></li><li><p><strong><code>DynamicOutputParam</code>：</strong></p><ul><li>当指定了 <code>DynamicOutputParam</code> 元数据时，它表示函数的输出参数是动态生成的，而不是静态指定的。在函数签名中，你可以看到这个参数被标记为 <code>&amp;OutActors</code>，这就是动态输出参数的示例。</li></ul></li></ol>",2),D=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>   <span class="token comment">//没用const限定</span>
	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">,</span>  meta<span class="token operator">=</span><span class="token punctuation">(</span> DynamicOutputParam<span class="token operator">=</span><span class="token string">&quot;OutActors&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TestFun</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token keyword">void</span> <span class="token class-name">UTEST</span><span class="token double-colon punctuation">::</span><span class="token function">TestFun</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//测试使用，实际开发别用哦</span>
	AActor<span class="token operator">*</span> Actor2 <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    OutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	OutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> Num <span class="token operator">=</span> OutActors<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	GEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.0f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>White<span class="token punctuation">,</span> <span class="token class-name">FString</span><span class="token double-colon punctuation">::</span><span class="token function">FromInt</span><span class="token punctuation">(</span>Num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">FVector2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
	
	<span class="token comment">//const限定</span>
	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span> <span class="token punctuation">,</span>meta<span class="token operator">=</span><span class="token punctuation">(</span>DynamicOutputParam<span class="token operator">=</span><span class="token string">&quot;OutActors&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TestFun2</span><span class="token punctuation">(</span><span class="token keyword">const</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token keyword">void</span> <span class="token class-name">UTEST</span><span class="token double-colon punctuation">::</span><span class="token function">TestFun2</span><span class="token punctuation">(</span> <span class="token keyword">const</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> Num <span class="token operator">=</span> OutActors<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	GEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.0f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>White<span class="token punctuation">,</span> <span class="token class-name">FString</span><span class="token double-colon punctuation">::</span><span class="token function">FromInt</span><span class="token punctuation">(</span>Num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">FVector2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),E=s("figure",null,[s("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),I=s("figure",null,[s("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),q=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//没有meta</span>
<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TestFun3</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token class-name">UTEST</span><span class="token double-colon punctuation">::</span><span class="token function">TestFun3</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//测试使用，实际开发别用哦</span>
	AActor<span class="token operator">*</span> Actor2 <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
	OutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	OutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> Num <span class="token operator">=</span> OutActors<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	GEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.0f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>White<span class="token punctuation">,</span> <span class="token class-name">FString</span><span class="token double-colon punctuation">::</span><span class="token function">FromInt</span><span class="token punctuation">(</span>Num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">FVector2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),L=o('<p>结论：</p><ol><li>const 限定优先级更高。</li><li>DynamicOutputParam 确实帮我们动态生成了一个对象，但即使不加也会主动尝试生成。</li></ol><h2 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h2><h3 id="getactorofclassvscast" tabindex="-1"><a class="header-anchor" href="#getactorofclassvscast" aria-hidden="true">#</a> <code>getactorofclass</code>vs<code>Cast</code></h3><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',6),R={href:"https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433",target:"_blank",rel:"noopener noreferrer"},M={href:"https://forums.unrealengine.com/t/dynamicoutputtype-dynamicoutputparam/336920",target:"_blank",rel:"noopener noreferrer"};function P(B,V){const t=p("chatmessage"),l=p("gifwithbutton"),c=p("ExternalLinkIcon");return u(),r("div",null,[A,y,a(t,{avatar:"../../assets/emoji/new1.png",avatarWidth:50,alignLeft:""},{default:e(()=>[n(" GetActorOfClass是一个UGameplayStatics类中的静态函数，在世界中找到指定类的第一个Actor ")]),_:1}),_,C,a(l,{src:"../../assets/unrealgif/refencecom.gif"}),a(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40},{default:e(()=>[n(" 为什么不放在一个关卡会报错。 ")]),_:1}),O,a(t,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" Baba先带你康康 "),w,n("节点源码实现原理吧. ")]),_:1}),x,a(t,{avatar:"../../assets/emoji/new1.png",avatarWidth:40,alignLeft:""},{default:e(()=>[T]),_:1}),a(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:e(()=>[n(" Baba我不懂什么叫创建类的实例！ ")]),_:1}),a(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 给你举个例子吧！ ")]),_:1}),W,a(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[j]),_:1}),U,a(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 由此可见，getactorofclass的本质就是利用迭代器在世界中迭代查找指定类的第一个Actor。 关于迭代器，请参考我的Template[模板] ")]),_:1}),a(t,{avatar:"../../assets/emoji/new1.png",avatarWidth:40},{default:e(()=>[n(" 搜嘎！难怪都要放入关卡中。 ")]),_:1}),S,a(t,{avatar:"../../assets/emoji/new1.png",avatarWidth:50,alignLeft:""},{default:e(()=>[n(" GetAllActorOfClass顾名思义找到在世界中找到指定类的所有Actor ")]),_:1}),G,a(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:50},{default:e(()=>[n(" 为什么一开始就清空了数组,我也没见到节点有传入数组啊？"),N]),_:1}),a(t,{avatar:"../../assets/emoji/new4.png",avatarWidth:50,alignLeft:""},{default:e(()=>[n(" 你注意UFUNCTION宏meta（元数据）的描述了吗？ ")]),_:1}),F,a(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:50},{default:e(()=>[n(" 那么这个节点会强制变成输出节点吗？比如我加了const修饰。 ")]),_:1}),a(t,{avatar:"../../assets/emoji/new7.png",avatarWidth:50,alignLeft:""},{default:e(()=>[n(" 测试一下不就行了！ ")]),_:1}),D,a(t,{avatar:"../../assets/emoji/new8.png",avatarWidth:50},{default:e(()=>[n(" 测试结果看来const修饰后会将数组变成输入节点。 ")]),_:1}),a(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 没错，而且我们测试代码中给2个空指针到这个指针数组中，测试结果也是打印2. ")]),_:1}),E,a(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" const修饰后数组变成只读，需要我们自己传入数据。 ")]),_:1}),I,a(t,{avatar:"../../assets/emoji/new8.png",avatarWidth:50},{default:e(()=>[n(" const强制变成只读这没毛病，但动态生成我还是抱有怀疑态度，如果我们去掉DynamicOutputParam呢？还会打印2吗？ ")]),_:1}),q,a(t,{avatar:"../../assets/emoji/new3.png",avatarWidth:50,alignLeft:""},{default:e(()=>[n(" 居然还是可以！看来系统自动帮我们初始化了一个指针数组。 ")]),_:1}),L,s("p",null,[s("a",R,[n("https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433"),a(c)])]),s("p",null,[s("a",M,[n("DynamicOutputType & DynamicOutputParam"),a(c)])])])}const H=i(h,[["render",P],["__file","11-Getactorofclass.html.vue"]]);export{H as default};
