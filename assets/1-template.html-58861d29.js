import{_ as o,r as c,o as l,c as i,d as t,w as p,e,a as s,b as n}from"./app-f9abccac.js";const u="/RenderDocZHS/assets/ptfunction-a57a9819.png",d="/RenderDocZHS/assets/templatefunc-97fe7186.png",r="/RenderDocZHS/assets/array-e8eddde6.jpg",k={},v=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//这是普通函数写法</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//函数重载</span>
<span class="token keyword">double</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">double</span> a <span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=s("h2",{id:"函数模板",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#函数模板","aria-hidden":"true"},"#"),n(" 函数模板")],-1),b=s("blockquote",null,[s("p",null,[n("语法："),s("code",null,"template<typename T>")])],-1),g=s("h2",{id:"调用规则",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#调用规则","aria-hidden":"true"},"#"),n(" 调用规则")],-1),h=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token comment">//普通函数</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;调用普通函数&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
T <span class="token function">max</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;调用模板&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=s("figure",null,[s("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),f=s("h3",{id:"_2-空模板参数列表强制使用模板-显式指定模板参数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-空模板参数列表强制使用模板-显式指定模板参数","aria-hidden":"true"},"#"),n(" 2. 空模板参数列表强制使用模板|显式指定模板参数")],-1),y=s("p",null,[n("很简单，调用时加一对"),s("code",null,"<>"),n("即可。")],-1),w=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>  std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token generic-function"><span class="token function">max</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),x=e(`<h3 id="_3-有更好的匹配时-优先使用模板-如-使用不同数据类型" tabindex="-1"><a class="header-anchor" href="#_3-有更好的匹配时-优先使用模板-如-使用不同数据类型" aria-hidden="true">#</a> 3.有更好的匹配时，优先使用模板|如：使用不同数据类型</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">20.5</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>  <span class="token comment">// 使用不同类型的参数，可能更容易匹配模板函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),T=e(`<h3 id="_4-强制类型转换" tabindex="-1"><a class="header-anchor" href="#_4-强制类型转换" aria-hidden="true">#</a> 4.强制类型转换</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>  <span class="token comment">// 使用强制类型转换，优先选择模板函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-模板特化" tabindex="-1"><a class="header-anchor" href="#_5-模板特化" aria-hidden="true">#</a> 5. 模板特化</h3>`,3),q=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>  <span class="token comment">// 使用不同类型的参数，可能更容易匹配模板函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),j=s("figure",null,[s("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),W=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 普通函数</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;调用普通函数&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模板函数</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
T <span class="token function">max</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;调用模板&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模板特化用于比较数组大小</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token punctuation">,</span> size_t N<span class="token operator">&gt;</span>
T <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">T</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">T</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;调用特化数组&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    T max_val <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>size_t i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max_val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max_val <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max_val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>  <span class="token comment">// 调用特化数组，比较数组大小</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-类模板和函数模板区别" tabindex="-1"><a class="header-anchor" href="#_6-类模板和函数模板区别" aria-hidden="true">#</a> 6. 类模板和函数模板区别</h3><blockquote><p>语法：<code>template&lt;typename T&gt; class</code></p></blockquote><table><thead><tr><th>特征</th><th>函数模板</th><th>类模板</th></tr></thead><tbody><tr><td><strong>用途</strong></td><td>创建泛型函数，处理多种数据类型</td><td>创建泛型类，处理多种数据类型</td></tr><tr><td><strong>定义方式</strong></td><td>使用 <code>template</code> 关键字定义，通常在函数声明或定义前加上模板声明</td><td>使用 <code>template</code> 关键字定义，通常在类声明或定义前加上模板声明</td></tr><tr><td><strong>实例化</strong></td><td>在使用函数时，根据传递的实际参数类型生成对应的函数实例。可以显式指定模板参数，也可以根据参数推断</td><td>在使用类时，通常需要显式指定模板参数，因为编译器不能总是从上下文中推断出所需的类型</td></tr><tr><td><strong>成员函数和成员变量的模板化</strong></td><td>可以模板化整个函数，也可以只模板化函数的部分</td><td>可以模板化整个类，包括成员函数和成员变量</td></tr></tbody></table><h3 id="类模板成员函数创建时机" tabindex="-1"><a class="header-anchor" href="#类模板成员函数创建时机" aria-hidden="true">#</a> 类模板成员函数创建时机</h3>`,5),L=e(`<ul><li><p><strong>普通类：</strong></p><ul><li>成员函数的定义和实现通常在类的声明中完成。</li><li>当实例化一个普通类的对象时，编译器会在链接时生成相应的函数代码，并将其与类的实例链接在一起。</li><li>所有对象共享相同的函数实现。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 普通类</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 函数实现</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>类模板：</strong></p><ul><li>成员函数的定义和实现通常也在类模板的声明中完成。</li><li>然而，由于类模板是泛型的，函数代码的实例化是在使用时进行的，即在实例化模板的特定类型时生成。</li><li>每个模板实例都有其独立的函数实现，针对特定的模板参数。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 类模板</span>
<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">MyTemplateClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 函数实现</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 实例化模板，生成特定类型的函数实现</span>
MyTemplateClass<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> obj1<span class="token punctuation">;</span>
MyTemplateClass<span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">&gt;</span> obj2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1);function N(C,z){const a=c("chatmessage");return l(),i("div",null,[t(a,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:p(()=>[n(" 每一次增加一个数据类型，就得重写写一次函数，使得代码非常冗余，有没有办法改进？ ")]),_:1}),v,t(a,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 你可以使用函数模板。 ")]),_:1}),t(a,{avatar:"../../../assets/emoji/hh.png",avatarWidth:40},{default:p(()=>[n(" 怎么用呢？ ")]),_:1}),m,b,t(a,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 当然一些调用规则需要牢记 ")]),_:1}),g,t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 你觉得下面的函数会调用那个版本？ ")]),_:1}),h,t(a,{avatar:"../../../assets/emoji/bqb (4).png",avatarWidth:40},{default:p(()=>[n(" 我觉得应该会调用模板吧。 ")]),_:1}),t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 然而事实上是优先调用普通函数，有多个函数或模板可以匹配调用时，编译器会选择最特定的版本。 ")]),_:1}),_,t(a,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:p(()=>[n(" 那么我怎么强制他使用我的模板版本重载呢？ ")]),_:1}),f,t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[y]),_:1}),w,t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 当然，这不是绝对的，如果有一个更好的匹配时，也会优先使用模板函数 ")]),_:1}),x,t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 但需注意窄化转换。 ")]),_:1}),T,t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 模板并不是万能的，就拿这个例子来说，我们传入数组你看会发生什么？ ")]),_:1}),q,t(a,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:p(()=>[n(" 打印了一串地址耶！ ")]),_:1}),j,t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 没错，这时候咱们就需要特殊的处理一下这个版本，让他可以传入数组。 ")]),_:1}),W,t(a,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 类模板（Class Template）和普通类（Non-Template Class）之间的主要区别在于成员函数的实例化时机。 ")]),_:1}),L])}const S=o(k,[["render",N],["__file","1-template.html.vue"]]);export{S as default};
