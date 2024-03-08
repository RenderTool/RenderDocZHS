import{_ as l,r as e,o as c,c as i,d as n,w as t,a as p,b as s,e as r}from"./app-d070a7fb.js";const u={},d=r(`<ol><li><p><strong>表达式结束：</strong> 在赋值、函数调用、算术运算等表达式结束时，需要使用分号。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 赋值语句</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello, World!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 函数调用语句</span>
x <span class="token operator">=</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span> <span class="token comment">// 算术表达式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>控制结构：</strong> 在条件语句（if、else等）、循环语句（for、while等）以及其他控制结构的主体部分结束时，需要使用分号。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 代码块</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;x是正数&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 代码块</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;x不是正数&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 循环体</span>
    cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>类定义：</strong> 在类的定义中，每个成员函数的实现都需要用分号结束。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 函数体</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello from MyClass!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> myVariable<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 注意类定义结束时有分号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>结构体：</strong> 在类的定义中，每个成员函数的实现都需要用分号结束。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> myVariable<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 函数体</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello from MyClass!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 注意结构体定义结束时有分号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="扩展链接" tabindex="-1"><a class="header-anchor" href="#扩展链接" aria-hidden="true">#</a> 扩展链接</h3>`,2),k={href:"https://zh.cppreference.com/w/cpp/language/punctuators",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const a=e("chatmessage"),o=e("ExternalLinkIcon");return c(),i("div",null,[n(a,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:t(()=>[s(' Baba！什么地方用";" ')]),_:1}),n(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[s(" 在C++中，分号（;）是语句结束的标志。在几乎所有的C++语句中，都需要使用分号来表示语句的结束。以下是一些常见的情况： ")]),_:1}),d,p("p",null,[p("a",k,[s("C++标点"),n(o)])])])}const _=l(u,[["render",m],["__file","0-where use a semicolon.html.vue"]]);export{_ as default};
