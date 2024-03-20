import{_ as p,r as t,o as l,c,d as s,w as a,e as o,b as e}from"./app-3f521a46.js";const i={},d=o('<h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><ol><li><p><strong>算术运算符：</strong></p><ul><li><code>+</code>（加法）</li><li><code>-</code>（减法）</li><li><code>*</code>（乘法）</li><li><code>/</code>（除法）</li><li><code>%</code>（取模）</li></ul></li><li><p><strong>关系运算符：</strong></p><ul><li><code>==</code>（等于）</li><li><code>!=</code>（不等于）</li><li><code>&lt;</code>（小于）</li><li><code>&gt;</code>（大于）</li><li><code>&lt;=</code>（小于等于）</li><li><code>&gt;=</code>（大于等于）</li></ul></li><li><p><strong>逻辑运算符：</strong></p><ul><li><code>&amp;&amp;</code>（逻辑与）</li><li><code>||</code>（逻辑或）</li><li><code>!</code>（逻辑非）</li></ul></li><li><p><strong>位运算符：</strong></p><ul><li><code>&amp;</code>（按位与）</li><li><code>|</code>（按位或）</li><li><code>^</code>（按位异或）</li><li><code>~</code>（按位取反）</li><li><code>&lt;&lt;</code>（左移）</li><li><code>&gt;&gt;</code>（右移）</li></ul></li><li><p><strong>赋值运算符：</strong></p><ul><li><code>=</code>（赋值）</li><li><code>+=</code>（加法赋值）</li><li><code>-=</code>（减法赋值）</li><li><code>*=</code>（乘法赋值）</li><li><code>/=</code>（除法赋值）</li><li><code>%=</code>（取模赋值）</li><li><code>&amp;=</code>（按位与赋值）</li><li><code>|=</code>（按位或赋值）</li><li><code>^=</code>（按位异或赋值）</li><li><code>&lt;&lt;=</code>（左移赋值）</li><li><code>&gt;&gt;=</code>（右移赋值）</li></ul></li><li><p><strong>递增和递减运算符：</strong></p><ul><li><code>++</code>（递增）</li><li><code>--</code>（递减）</li></ul></li><li><p><strong>成员访问运算符：</strong></p><ul><li><code>-&gt;</code>（成员访问）</li><li><code>-&gt;*</code>（成员指针访问）</li></ul></li><li><p><strong>函数调用运算符：</strong></p><ul><li><code>()</code>（函数调用）</li></ul></li><li><p><strong>下标运算符：</strong></p><ul><li><code>[]</code>（下标访问）</li></ul></li><li><p><strong>其他运算符：</strong></p></li></ol><ul><li><code>,</code>（逗号运算符）</li><li><code>&amp;</code>（取地址运算符）</li><li><code>*</code>（指针解引用运算符）</li><li><code>sizeof</code>（sizeof 运算符）</li><li><code>typeid</code>（typeid 运算符）</li><li><code>new</code>（动态内存分配运算符）</li><li><code>delete</code>（动态内存释放运算符）</li></ul><h3 id="运算符重载" tabindex="-1"><a class="header-anchor" href="#运算符重载" aria-hidden="true">#</a> 运算符重载</h3>',4),r=o(`<h2 id="_1-成员函数的运算符重载" tabindex="-1"><a class="header-anchor" href="#_1-成员函数的运算符重载" aria-hidden="true">#</a> 1. <strong>成员函数的运算符重载：</strong></h2><h3 id="二元算术运算符" tabindex="-1"><a class="header-anchor" href="#二元算术运算符" aria-hidden="true">#</a> <strong>二元算术运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>MyClass MyClass<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token keyword">const</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现加法运算</span>
         <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> <strong>关系运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> MyClass<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">==</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token keyword">const</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现相等性比较</span>
         <span class="token comment">// 返回比较结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递增和递减运算符" tabindex="-1"><a class="header-anchor" href="#递增和递减运算符" aria-hidden="true">#</a> <strong>递增和递减运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//前置</span>
MyClass<span class="token operator">&amp;</span> MyClass<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
 <span class="token operator">++</span>i<span class="token punctuation">;</span>
 <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//后置</span>
MyClass<span class="token operator">&amp;</span> MyClass<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token comment">//占位运算</span>
<span class="token punctuation">{</span>
 <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token operator">*</span><span class="token keyword">this</span> <span class="token punctuation">;</span>
 i<span class="token operator">++</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> <strong>赋值运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>MyClass<span class="token operator">&amp;</span> MyClass<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现赋值操作</span>
         <span class="token comment">// 返回修改后的对象</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数调用运算符" tabindex="-1"><a class="header-anchor" href="#函数调用运算符" aria-hidden="true">#</a> <strong>函数调用运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>ReturnType <span class="token class-name">MyClass</span><span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token comment">/* 参数列表 */</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
         <span class="token comment">// 实现函数调用</span>
         <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下标运算符" tabindex="-1"><a class="header-anchor" href="#下标运算符" aria-hidden="true">#</a> <strong>下标运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>ElementType<span class="token operator">&amp;</span> MyClass<span class="token double-colon punctuation">::</span><span class="token keyword">operator</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>size_t index<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现下标访问</span>
         <span class="token comment">// 返回对应元素的引用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-全局函数的运算符重载" tabindex="-1"><a class="header-anchor" href="#_2-全局函数的运算符重载" aria-hidden="true">#</a> 2. <strong>全局函数的运算符重载：</strong></h2><h3 id="二元算术运算符-1" tabindex="-1"><a class="header-anchor" href="#二元算术运算符-1" aria-hidden="true">#</a> <strong>二元算术运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>MyClass <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现加法运算</span>
         <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符-1" tabindex="-1"><a class="header-anchor" href="#关系运算符-1" aria-hidden="true">#</a> <strong>关系运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">==</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现相等性比较</span>
         <span class="token comment">// 返回比较结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递增和递减运算符-1" tabindex="-1"><a class="header-anchor" href="#递增和递减运算符-1" aria-hidden="true">#</a> <strong>递增和递减运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>MyClass<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span>MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现前置递增</span>
         <span class="token comment">// 返回修改后的对象</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋值运算符-1" tabindex="-1"><a class="header-anchor" href="#赋值运算符-1" aria-hidden="true">#</a> <strong>赋值运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>MyClass<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span>MyClass<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现赋值操作</span>
         <span class="token comment">// 返回修改后的对象</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数调用运算符-1" tabindex="-1"><a class="header-anchor" href="#函数调用运算符-1" aria-hidden="true">#</a> <strong>函数调用运算符：</strong></h3><blockquote><p>也称为仿函数</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>ReturnType <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">,</span> <span class="token comment">/* 参数列表 */</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
         <span class="token comment">// 实现函数调用</span>
         <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下标运算符-1" tabindex="-1"><a class="header-anchor" href="#下标运算符-1" aria-hidden="true">#</a> <strong>下标运算符：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>ElementType<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">,</span> size_t index<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
         <span class="token comment">// 实现下标访问</span>
         <span class="token comment">// 返回对应元素的引用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="左移-右移运算符" tabindex="-1"><a class="header-anchor" href="#左移-右移运算符" aria-hidden="true">#</a> 左移|右移运算符</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 重载左移运算符，用于输出对象</span>
    <span class="token keyword">friend</span> std<span class="token double-colon punctuation">::</span>ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>ostream<span class="token operator">&amp;</span> os<span class="token punctuation">,</span> <span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        os <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value: &quot;</span> <span class="token operator">&lt;&lt;</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> os<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 重载右移运算符，用于输入对象</span>
    <span class="token keyword">friend</span> std<span class="token double-colon punctuation">::</span>istream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>istream<span class="token operator">&amp;</span> is<span class="token punctuation">,</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        is <span class="token operator">&gt;&gt;</span> obj<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> is<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyClass obj<span class="token punctuation">;</span>

    <span class="token comment">// 从标准输入流输入对象的值</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter a value: &quot;</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cin <span class="token operator">&gt;&gt;</span> obj<span class="token punctuation">;</span>

    <span class="token comment">// 将对象的值输出到标准输出流</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Object details: &quot;</span> <span class="token operator">&lt;&lt;</span> obj <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function u(k,v){const n=t("chatmessage");return l(),c("div",null,[s(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[e(" 上一篇咱们讨论完了++，这一篇顺带复习一下运算符重载吧。 ")]),_:1}),s(n,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" ok，咱们先来了解一下有哪些运算符。 ")]),_:1}),d,s(n,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" 在 C++ 中，运算符重载可以通过成员函数或全局函数来完成。以下是一些运算符的重载方式： ")]),_:1}),r])}const b=p(i,[["render",u],["__file","8-operator.html.vue"]]);export{b as default};
