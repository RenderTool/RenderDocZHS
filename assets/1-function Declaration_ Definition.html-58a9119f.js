import{_ as d,r as o,o as r,c as u,d as c,w as a,e as p,a as n,b as s}from"./app-2494361c.js";const k="/RenderDocZHS/assets/todefefine-63a5c2d6.png",m={},v=p(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><blockquote><p>在C++中，<br> 函数声明：为了告诉编译器函数的存在、名称和参数列表。<br> 函数定义：提供函数的具体实现。</p></blockquote><p><strong>函数声明（Function Declaration）:</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 函数声明，告诉编译器这个函数存在，但并没有提供具体实现</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>add</code> 函数被声明，但没有提供具体的实现。这样的声明通常放在头文件中，以便在其他文件中使用该函数。</p><p><strong>函数定义（Function Definition）:</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 函数定义，提供了函数的具体实现</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="文件分离" tabindex="-1"><a class="header-anchor" href="#文件分离" aria-hidden="true">#</a> 文件分离</h3>`,9),b=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[s(`
`),n("span",{class:"token comment"},"// myfunctions.h"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"pragma"),s(),n("span",{class:"token expression"},"once")]),s(`

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"myFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[s(` 
`),n("span",{class:"token comment"},"// myfunctions.h"),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"ifndef"),s(),n("span",{class:"token expression"},"MYFUNCTIONS_H")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"define"),s(),n("span",{class:"token macro-name"},"MYFUNCTIONS_H")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"endif"),s("  "),n("span",{class:"token comment"},"// MYFUNCTIONS_H")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 源文件中的函数定义</span>
<span class="token comment">// myfunctions.cpp</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;myfunctions.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main函数" tabindex="-1"><a class="header-anchor" href="#main函数" aria-hidden="true">#</a> main函数</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 主程序文件中的使用函数</span>
<span class="token comment">// main.cpp</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;myfunctions.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用声明的函数</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出结果</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result: &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>带有{ }的就是定义，不带的就是声明。</p>`,5),y=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function f(_,w){const i=o("chatmessage"),l=o("CodeTabs");return r(),u("div",null,[c(i,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:a(()=>[s(" 函数声明和定义 ")]),_:1}),v,c(l,{id:"26",data:[{id:"头文件中的函数声明现代C++风格"},{id:"头文件中的函数声明经典C风格"}],"tab-id":"cpp"},{title0:a(({value:e,isActive:t})=>[s("头文件中的函数声明现代C++风格")]),title1:a(({value:e,isActive:t})=>[s("头文件中的函数声明经典C风格")]),tab0:a(({value:e,isActive:t})=>[b]),tab1:a(({value:e,isActive:t})=>[h]),_:1}),g,c(i,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[s(" 这也是IDE中为什么点击函数声明时会弹窗前往定义。 ")]),_:1}),y])}const C=d(m,[["render",f],["__file","1-function Declaration_ Definition.html.vue"]]);export{C as default};
