import{_ as i,r as c,o as u,c as r,d as a,w as t,a as s,b as n,e}from"./app-c4ee493e.js";const d="/RenderDocZHS/assets/stringarray-780aca1f.png",k="/RenderDocZHS/assets/ptrarray-6e5d5f53.jpg",v="/RenderDocZHS/assets/intptrarrayfirest-02f99c19.png",m="/RenderDocZHS/assets/arrayptrall-3cdcea4d.png",b="/RenderDocZHS/assets/ggbl-014f817e.png",g={},h=s("h2",{id:"概念",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#概念","aria-hidden":"true"},"#"),n(" 概念")],-1),y=s("h2",{id:"指针数组",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#指针数组","aria-hidden":"true"},"#"),n(" 指针数组")],-1),_=s("figure",null,[s("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),f=s("span",{style:{color:"#c0392b"}},"数组",-1),w=e('<blockquote><p>UE中一堆<code>对象指针</code>组成的<code>数组</code>就是<code>指针数组</code>例如：TArray&lt;ACameraActor*&gt;Camera。（多直观易懂）</p></blockquote><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>语法：<code>typename* ArrayName[arraySize]</code>;</strong></p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 假设有三个整数</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token comment">// 声明一个指针数组，其中每个元素都是指向整数的指针</span>
    <span class="token keyword">int</span><span class="token operator">*</span> ptrArray<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 将指针指向对应的整数</span>
    ptrArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
    ptrArray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
    ptrArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>c<span class="token punctuation">;</span>

    <span class="token comment">// 使用指针数组中的指针访问对应的整数值</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value at index &quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptrArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>ptrArray</code> 是一个包含三个元素的数组，每个元素都是一个指向整数的指针。通过将这些指针分别指向整数变量 <code>a</code>、<code>b</code> 和 <code>c</code>，我们形成了一个指针数组。在循环中，我们使用指针数组中的指针访问对应的整数值。</p><p>指针数组在某些情况下非常有用，例如在处理字符串数组、动态分配内存等情况下。</p><h2 id="i-与-i" tabindex="-1"><a class="header-anchor" href="#i-与-i" aria-hidden="true">#</a> i++与++i</h2>`,7),x=s("h2",{id:"多维指针数组",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#多维指针数组","aria-hidden":"true"},"#"),n(" 多维指针数组")],-1),j=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=s("br",null,null,-1),W=s("br",null,null,-1),A=s("br",null,null,-1),D=s("br",null,null,-1),L=s("br",null,null,-1),z=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),P=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
arr[2][3][4]
arr[①][②][③]
|
|-- [0]
|   |
|   |-- [0]
|   |   |-- [0]
|   |   |-- [1]
|   |   |-- [2]
|   |   |-- [3]
|   |
|   |-- [1]
|   |   |-- [0]
|   |   |-- [1]
|   |   |-- [2]
|   |   |-- [3]
|   |
|   |-- [2]
|   |   |-- [0]
|   |   |-- [1]
|   |   |-- [2]
|   |   |-- [3]
|
|-- [1]
|   |
|   |-- [0]
|   |   |-- [0]
|   |   |-- [1]
|   |   |-- [2]
|   |   |-- [3]
|   |
|   |-- [1]
|   |   |-- [0]
|   |   |-- [1]
|   |   |-- [2]
|   |   |-- [3]
|   |
|   |-- [2]
|   |   |-- [0]
|   |   |-- [1]
|   |   |-- [2]
|   |   |-- [3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 声明一个三维数组，2个矩阵，每个矩阵3行4列</span>
    <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 初始化数组元素的值</span>
    <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token operator">++</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 访问数组元素</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value at (1,2,3): &quot;</span> <span class="token operator">&lt;&lt;</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token comment">// 释放分配的内存</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组指针" tabindex="-1"><a class="header-anchor" href="#数组指针" aria-hidden="true">#</a> 数组指针</h2>`,2),T=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> array2<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> array2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R=s("figure",null,[s("img",{src:v,alt:"普通指针，指向数组首元素",tabindex:"0",loading:"lazy"}),s("figcaption",null,"普通指针，指向数组首元素")],-1),S=e('<figure><img src="'+m+`" alt="保存的是整个数组的地址" tabindex="0" loading="lazy"><figcaption>保存的是整个数组的地址</figcaption></figure><h3 id="图中案例" tabindex="-1"><a class="header-anchor" href="#图中案例" aria-hidden="true">#</a> 图中案例</h3><blockquote><p><strong>语法 typename( * p)[n];</strong></p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> <span class="token operator">*</span> P1 <span class="token operator">=</span> array<span class="token punctuation">;</span><span class="token comment">//P指向array首元素，本质还是int指针。</span>

    <span class="token keyword">int</span> <span class="token operator">*</span> P2 <span class="token operator">=</span> <span class="token operator">&amp;</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//注意看地址和P1一致。</span>
    
    <span class="token keyword">int</span> <span class="token operator">*</span> P3 <span class="token operator">=</span> <span class="token operator">&amp;</span>array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//注意看地址。</span>
    
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span> P4<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>array<span class="token punctuation">;</span><span class="token comment">//P2指向array整个内存空间.注意看IDEP4地址。</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="内存图" tabindex="0" loading="lazy"><figcaption>内存图</figcaption></figure>',5),V=e(`<h2 id="多维数组指针" tabindex="-1"><a class="header-anchor" href="#多维数组指针" aria-hidden="true">#</a> 多维数组指针</h2><p>多维数组指针的基本语法如下：</p><ol><li><p>声明二维数组指针：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>ptrTo2DArray<span class="token punctuation">)</span><span class="token punctuation">[</span>Columns<span class="token punctuation">]</span> <span class="token operator">=</span> array2D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>Columns</code> 是二维数组的列数，<code>array2D</code> 是二维数组的名字。</p></li><li><p>声明三维数组指针：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>ptrTo3DArray<span class="token punctuation">)</span><span class="token punctuation">[</span>Rows<span class="token punctuation">]</span><span class="token punctuation">[</span>Columns<span class="token punctuation">]</span> <span class="token operator">=</span> array3D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>Rows</code> 是三维数组的行数，<code>Columns</code> 是列数，<code>array3D</code> 是三维数组的名字。</p></li><li><p>访问元素：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>value <span class="token operator">=</span> ptrTo2DArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
value <span class="token operator">=</span> ptrTo3DArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用指针可以通过索引访问多维数组的元素。</p></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 声明一个二维整数数组</span>
    <span class="token keyword">int</span> array2D<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                         <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                         <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 声明一个指向二维数组的指针</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>ptrToArray2D<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> array2D<span class="token punctuation">;</span>

    <span class="token comment">// 使用指针访问数组元素</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value at (1,2): &quot;</span> <span class="token operator">&lt;&lt;</span> ptrToArray2D<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,5),E={href:"https://zhuanlan.zhihu.com/p/391942337",target:"_blank",rel:"noopener noreferrer"},H={href:"https://blog.csdn.net/chenmozhe22/article/details/106420311",target:"_blank",rel:"noopener noreferrer"},N={href:"https://blog.csdn.net/chenmozhe22/article/details/106420311",target:"_blank",rel:"noopener noreferrer"};function Z(B,I){const p=c("chatmessage"),l=c("gifwithbutton"),o=c("ExternalLinkIcon");return u(),r("div",null,[a(p,{avatar:"../../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 有了先前知识点的铺垫，现在正是理解数组指针|指针数组最佳时机 ")]),_:1}),h,y,a(p,{avatar:"../../../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[n(" 什么叫指针数组？ ")]),_:1}),a(p,{avatar:"../../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 先别急着抠字眼，先看看这些：字符串数组、结构体数组,这些你能想到什么？ ")]),_:1}),a(p,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[n(" 一堆字符串组成的数组和一堆结构体组成的数组呗 ")]),_:1}),_,a(p,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 那么他换个马甲你就不认识？指针数组，不就是一堆指针组成的"),f,n("嘛？ ")]),_:1}),w,a(p,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[n(" 我不理解！为什么这里用++i而不是i++，有什么区别嘛？ ")]),_:1}),a(p,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 在这里i没有对其他变量赋值，所以没有区别。你可以康康我之前的文章《i++|++i区别》 ")]),_:1}),x,a(p,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 讨论多维指针数组之前先来复习一下多维数组。比如：int arr[2][3]是什么意思？ ")]),_:1}),a(p,{avatar:"../../../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[n(" 表示一个二维数组，2表示行数，3表示列数。 ")]),_:1}),j,a(p,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" goodjob!int arr[2][3][4]呢？ ")]),_:1}),a(p,{avatar:"../../../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[n(" 隔着套娃呢！这个我就迷糊了，2行 3列 4？ ")]),_:1}),a(p,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 你可以这么理解，从左边开始："),q,n(" arr[2][3][4]"),W,n(" arr[①][②][③]"),A,n(" - 每个①有2个数组②。"),D,n(" - 每个②有3个数组③。"),L,n(" - 每个③有4个元素。 ")]),_:1}),z,a(p,{avatar:"../../../../assets/emoji/bqb (6).png",avatarWidth:40},{default:t(()=>[n(" 那么说！其实就是一个数括号游戏。 ")]),_:1}),P,a(p,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 多维指针数组依然是一个指针组成的数组。 ")]),_:1}),C,a(p,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[n(" Baba帮我康康我写的这个p2是不是就是数组指针？ ")]),_:1}),T,a(p,{avatar:"../../../../assets/emoji//blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 你说的这个不叫数组指针，是一个普通指针。 ")]),_:1}),a(p,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[n(" 数组指针不是直接可以用 指针指向数组首地址进行访问么? ")]),_:1}),a(p,{avatar:"../../../../assets/emoji//bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 是的，实践证明确实首地址和整个数组地址一致，但你这个确实只是一个指向的是数组首元素的普通指针，看下面的程序调试图： ")]),_:1}),R,a(p,{avatar:"../../../../assets/emoji//bqb (3).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 真正的数组指针长这样： ")]),_:1}),S,a(l,{src:"../../../../assets/unrealgif/arrayptr.gif"}),V,s("p",null,[s("a",E,[n("i++/++i"),a(o)])]),s("p",null,[s("a",H,[n("数组指针/指针数组"),a(o)])]),s("p",null,[s("a",N,[n("C语言基础---14.指针数组 & 数组指针---图解篇"),a(o)])])])}const F=i(g,[["render",Z],["__file","3-Ptr-Array.html.vue"]]);export{F as default};