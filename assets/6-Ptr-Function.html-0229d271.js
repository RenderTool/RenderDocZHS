import{_ as t,r as p,o,c,d as s,w as a,e as i,b as e}from"./app-2494361c.js";const l="/RenderDocZHS/assets/functionptr-4f55208a.png",u={},r=i('<figure><img src="'+l+`" alt="C Primer Plus（第6版）中文版" tabindex="0" loading="lazy"><figcaption>C Primer Plus（第6版）中文版</figcaption></figure><h3 id="函数指针的语法" tabindex="-1"><a class="header-anchor" href="#函数指针的语法" aria-hidden="true">#</a> 函数指针的语法</h3><ol><li><p><strong>声明函数指针：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">returnType</span> <span class="token punctuation">(</span><span class="token operator">*</span>pointerName<span class="token punctuation">)</span><span class="token punctuation">(</span>parameterType1<span class="token punctuation">,</span> parameterType2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里：</p><ul><li><code>returnType</code> 是函数返回类型。</li><li><code>pointerName</code> 是函数指针的名称。</li><li><code>parameterType1, parameterType2, ...</code> 是函数参数类型。</li></ul></li><li><p><strong>初始化函数指针：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>pointerName <span class="token operator">=</span> <span class="token operator">&amp;</span>functionName<span class="token punctuation">;</span>
<span class="token comment">// 或者简写为</span>
pointerName <span class="token operator">=</span> functionName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>functionName</code> 是一个已经声明的函数，其返回类型和参数类型要与函数指针声明中的类型匹配。</p></li><li><p><strong>使用函数指针调用函数：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>returnType result <span class="token operator">=</span> <span class="token function">pointerName</span><span class="token punctuation">(</span>argument1<span class="token punctuation">,</span> argument2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//或者</span>
returnType result <span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>pointerName<span class="token punctuation">)</span><span class="token punctuation">(</span>argument1<span class="token punctuation">,</span> argument2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>argument1, argument2, ...</code> 是传递给函数的实际参数。</p></li><li><p><strong>函数地址：</strong> 函数指针地址很简单，就是函数名<code>**去掉()**</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//获取函数地址</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Address of add: &quot;</span> <span class="token operator">&lt;&lt;</span> add <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token comment">//Address of add: 00007FF65AC81474</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>函数指针地址：</strong></p></li></ol><h3 id="函数指针例子" tabindex="-1"><a class="header-anchor" href="#函数指针例子" aria-hidden="true">#</a> 函数指针例子</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 函数原型</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 声明一个函数指针，指向接受两个int参数并返回int的函数</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>operation<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化函数指针，使其指向add函数</span>
    operation <span class="token operator">=</span> <span class="token operator">&amp;</span>add<span class="token punctuation">;</span>

    <span class="token comment">// 使用函数指针调用add函数</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result of add: &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function d(k,m){const n=p("chatmessage");return o(),c("div",null,[s(n,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[e(" 函数指针是什么？ ")]),_:1}),s(n,{avatar:"../../../../assets/emoji/new1.png",avatarWidth:50,alignLeft:""},{default:a(()=>[e(" 函数指针是指向函数的指针变量。允许你使用指针来存储和调用函数的地址。 函数指针通常用于在运行时动态地选择要调用的函数，或者将函数作为参数传递给其他函数。 ")]),_:1}),r])}const b=t(u,[["render",d],["__file","6-Ptr-Function.html.vue"]]);export{b as default};
