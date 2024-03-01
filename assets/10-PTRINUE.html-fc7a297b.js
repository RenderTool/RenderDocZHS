import{_ as c,r as p,o as i,c as r,d as s,w as e,a as o,b as a,e as t}from"./app-c4ee493e.js";const d="/RenderDocZHS/assets/loadassets002-8dcd164b.png",u={},g=o("h3",{id:"类和对象",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#类和对象","aria-hidden":"true"},"#"),a(" 类和对象")],-1),E=t(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string Name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> Age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=t(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>Person person1<span class="token punctuation">;</span>
Person <span class="token keyword">new</span> person2<span class="token punctuation">;</span>
<span class="token comment">//....</span>
<span class="token keyword">delete</span> person2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=t(`<h3 id="ue类实例化" tabindex="-1"><a class="header-anchor" href="#ue类实例化" aria-hidden="true">#</a> UE类实例化</h3><blockquote><p>模板</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>UYourClass<span class="token operator">*</span> MyObject <span class="token operator">=</span> <span class="token generic-function"><span class="token function">NewObject</span><span class="token generic class-name"><span class="token operator">&lt;</span>UYourClass<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>静态工厂</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>UYourClass<span class="token operator">*</span> MyObject <span class="token operator">=</span> <span class="token class-name">UYourClass</span><span class="token double-colon punctuation">::</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>SpawnActor</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>AYourActor<span class="token operator">*</span> MyActor <span class="token operator">=</span> <span class="token function">GetWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">SpawnActor</span><span class="token generic class-name"><span class="token operator">&lt;</span>AYourActor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>YourActorClass<span class="token punctuation">,</span> SpawnLocation<span class="token punctuation">,</span> SpawnRotation<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ue类引用" tabindex="-1"><a class="header-anchor" href="#ue类引用" aria-hidden="true">#</a> UE类引用</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TSoftClassPtr<span class="token operator">&lt;</span>UUserWidget<span class="token operator">&gt;</span> WidgetClass<span class="token punctuation">;</span>
UClass<span class="token operator">*</span> UUserWidget <span class="token operator">=</span> WidgetClass<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),m=t('<figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><strong>对象引用 (<code>TObjectPtr</code>):</strong><ul><li><strong>特性：</strong> 对象引用是强引用，它持有对 <code>UObject</code> 派生类对象的强引用，当对象销毁时，引用计数减少。</li><li><strong>用途：</strong> 适用于需要确保对象在引用期间不会被销毁的情况，例如需要持有一个具体对象的引用。</li></ul></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TObjectPtr<span class="token operator">&lt;</span>UYourClass<span class="token operator">&gt;</span> MyObject<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><strong>软引用 (<code>TSoftObjectPtr</code>):</strong><ul><li><strong>特性：</strong> 软引用是一种弱引用，它不会增加对象的引用计数。如果对象被销毁，软引用会变为无效。</li><li><strong>用途：</strong> 适用于需要引用对象，但不要求对象一直存在的情况，例如在需要加载对象时，但不希望对象一直保持在内存中。</li></ul></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TSoftObjectPtr<span class="token operator">&lt;</span>UYourClass<span class="token operator">&gt;</span> MySoftObject<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><strong>类引用 (<code>TSubclassOf</code>):</strong><ul><li><strong>特性：</strong> 类引用是用于引用类的一种方式，而不是类的实例。它不会增加类的引用计数。</li><li><strong>用途：</strong> 适用于需要引用类本身而不是类的实例的情况，例如在运行时动态生成对象的时候。</li></ul></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TSubclassOf<span class="token operator">&lt;</span>UYourClass<span class="token operator">&gt;</span> MyClass<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><strong>软类引用 (<code>TSoftClassPtr</code>):</strong><ul><li><strong>特性：</strong> 软类引用是软引用的类版本，用于引用类，当类被销毁时，引用变为无效。</li><li><strong>用途：</strong> 类似于软引用，适用于需要引用类但不要求一直存在的情况，例如在需要加载类时。</li></ul></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TSoftClassPtr<span class="token operator">&lt;</span>UYourClass<span class="token operator">&gt;</span> MySoftClass<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),b=t('<h3 id="ue中的指针模板" tabindex="-1"><a class="header-anchor" href="#ue中的指针模板" aria-hidden="true">#</a> UE中的指针模板</h3><ol><li><strong>shared_ptr|共享指针:</strong></li></ol><p>记录该对象当前被多少个共享指针所持有。当一个共享指针被销毁时，所有指向该对象的共享指针的计数都会减少。当指向一个对象的所有共享指针都被销毁时，对象自动被销毁。</p><ol start="2"><li><strong>unique_ptr|唯一指针：</strong></li></ol><p>该对象只能被一个唯一指针所持有。当唯一指针被销毁时，对应的对象也被销毁。</p><ol start="3"><li><strong>weak_ptr|弱指针：</strong></li></ol><p>该指针并不直接指向对象，而是指向该对象的共享指针。这样即使弱指针始终存在，没有被销毁，对象也会在共享指针的管理下自动销毁。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',8),B={href:"https://zhuanlan.zhihu.com/p/604213414#:~:text=%E8%BD%AF%E7%B1%BB%E5%BC%95%E7%94%A8%EF%BC%9A%20TSoftClassPtr%3CT%3E%20SoftClassRef%3B%20%E5%9C%A8%E8%93%9D%E5%9B%BE%E4%B8%AD%EF%BC%8C%E8%BD%AF%E7%B1%BB%E5%BC%95%E7%94%A8%E5%AF%B9%E5%BA%94%E7%9A%84%E6%98%AF%E6%B5%85%E7%B4%AB%E8%89%B2%E7%9A%84%E8%BD%AF%E7%B1%BB%E5%BC%95%E7%94%A8%EF%BC%9A%20%E4%B8%8D%E8%BF%87%EF%BC%8C%E8%BF%99%E4%B8%A4%E7%A7%8D%E4%B8%9C%E8%A5%BF%E6%9C%AC%E8%B4%A8%E4%B8%8A%E5%8F%AA%E6%98%AF%E4%B8%BA%E4%BA%86%E5%AD%98%E5%82%A8%E4%B8%80%E4%B8%AA%E8%B5%84%E4%BA%A7%E8%B7%AF%E5%BE%84%E3%80%82,%E5%A6%82%E6%9E%9C%E4%BD%A0%E4%B8%8D%E5%9C%A8%E4%B9%8E%E8%93%9D%E5%9B%BE%E5%B1%82%E6%98%BE%E7%A4%BA%E7%9A%84%E5%9B%BE%E6%A0%87%E7%9A%84%E8%AF%9D%EF%BC%8C%E5%AE%8C%E5%85%A8%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%20FSoftObjectPath%20%E5%92%8C%20FSoftClassPath%20%E6%9D%A5%E4%BB%A3%E6%9B%BF%E4%BB%96%E4%BB%AC%E7%9A%84%E9%83%A8%E5%88%86%E5%8A%9F%E8%83%BD%E3%80%82",target:"_blank",rel:"noopener noreferrer"};function h(A,f){const n=p("chatmessage"),l=p("ExternalLinkIcon");return i(),r("div",null,[g,s(n,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 类和对象什么区别？ ")]),_:1}),s(n,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 这个叫类 ")]),_:1}),E,s(n,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 根据这个类实例化的叫对象 ")]),_:1}),k,s(n,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 类的实例化就是创建对象的过程。在面向对象编程中，通过实例化类来创建对象，这个过程也被称为类的实例化。而UE中因为有反射系统，推荐你用NewObject来实例化 ")]),_:1}),v,s(n,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 注意这里还是类，不是实例化的对象，所以你可以在引擎中看到从类构建实例、创建UI的控件、spawnActor这种节点。 ")]),_:1}),s(n,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 先来了解一下几个UE中的引用类型. ")]),_:1}),m,s(n,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 本质都是指针 ")]),_:1}),b,o("p",null,[o("a",B,[a("【UE4】对象指针，类指针，智能指针，硬引用，软引用"),s(l)])])])}const _=c(u,[["render",h],["__file","10-PTRINUE.html.vue"]]);export{_ as default};
