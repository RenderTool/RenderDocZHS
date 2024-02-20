import{_ as u,r as p,o as d,c as r,d as e,w as a,e as o,a as s,b as n}from"./app-4fdf0358.js";const k="/RenderDocZHS/assets/static-e4f93eac.png",v="/RenderDocZHS/assets/staticerror-ae8ad319.png",m="/RenderDocZHS/assets/static const-68273b5d.png",b={},g=o(`<ol><li><strong>区分同名变量：</strong> 如果成员函数中存在与成员变量同名的局部变量或参数，那么在没有 <code>this</code> 指针的情况下，无法直接访问成员变量。<code>this</code> 指针允许明确指定使用对象的成员。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 使用this指针</span>
<span class="token keyword">class</span> <span class="token class-name">MyClassWithThis</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用this指针区分成员变量和局部变量</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>函数内访问成员：</strong> 没有 <code>this</code> 指针，成员函数无法直接访问对象的成员变量和成员函数， 除非它们与局部变量或参数同名。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 使用this指针</span>
<span class="token keyword">class</span> <span class="token class-name">MyClassWithThis</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用this指针访问成员变量</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用this指针访问成员函数</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>在函数内传递当前对象：</strong> 在某些情况下，需要将当前对象作为参数传递给其他函数。 <code>this</code> 指针允许在成员函数内部方便地传递当前对象的引用。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 使用this指针</span>
<span class="token keyword">class</span> <span class="token class-name">MyClassWithThis</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用this指针访问成员变量</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用this指针访问成员函数</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总的来说，<code>this</code> 指针提供了一种在成员函数内部引用当前对象的方式，使得在面向对象的编程中更加灵活和清晰。 它有助于避免命名冲突，让代码更加可读、易于理解，并提供了对当前对象的直接访问。</p>`,7),h=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;test&quot;</span><span class="token operator">&lt;&lt;</span>std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"int"),n(),s("span",{class:"token function"},"main"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"return"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"pragma"),n(),s("span",{class:"token expression"},"once")]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},"<iostream>")]),n(`
`),s("span",{class:"token keyword"},"static"),n(),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
    std`),s("span",{class:"token double-colon punctuation"},"::"),n("cout"),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},'"test"'),s("span",{class:"token operator"},"<<"),n("std"),s("span",{class:"token double-colon punctuation"},"::"),n("endl"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("p",null,[n("写代码阶段没有报错提示，编译执行时提示我 "),s("code",null,"test.h(3, 13): [C2129] 静态函数“void test(void)”已声明但未定义"),n(" ！")],-1),f=s("figure",null,[s("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),x=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"int"),n(),s("span",{class:"token function"},"main"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"return"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"pragma"),n(),s("span",{class:"token expression"},"once")]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},"<iostream>")]),n(`
`),s("span",{class:"token keyword"},"static"),n(),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),j=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
    std`),s("span",{class:"token double-colon punctuation"},"::"),n("cout"),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},'"test"'),s("span",{class:"token operator"},"<<"),n("std"),s("span",{class:"token double-colon punctuation"},"::"),n("endl"),s("span",{class:"token punctuation"},";"),n(` 
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),W=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"int"),n(),s("span",{class:"token function"},"main"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    myclass`),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"return"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),V=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"pragma"),n(),s("span",{class:"token expression"},"once")]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},"<iostream>")]),n(`

`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"myclass"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token keyword"},"public"),s("span",{class:"token operator"},":"),n(`
    `),s("span",{class:"token keyword"},"static"),n(),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(` 
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),C=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"void"),n(" myclass"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
    std`),s("span",{class:"token double-colon punctuation"},"::"),n("cout"),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},'"test"'),n(),s("span",{class:"token operator"},"<<"),n(" std"),s("span",{class:"token double-colon punctuation"},"::"),n("endl"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),L=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"int"),n(),s("span",{class:"token function"},"main"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    myclass a`),s("span",{class:"token punctuation"},";"),n(`
    a`),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"return"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),M=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"pragma"),n(),s("span",{class:"token expression"},"once")]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},"<iostream>")]),n(`

`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"myclass"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token keyword"},"public"),s("span",{class:"token operator"},":"),n(`
    `),s("span",{class:"token keyword"},"static"),n(),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(` 
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),T=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"void"),n(" myclass"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
    std`),s("span",{class:"token double-colon punctuation"},"::"),n("cout"),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},'"test"'),n(),s("span",{class:"token operator"},"<<"),n(" std"),s("span",{class:"token double-colon punctuation"},"::"),n("endl"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),q=s("p",null,[n("编译器提示："),s("code",null,"'this' 只能在非 static 成员函数或非 static 数据成员初始值设定项内使用")],-1),N=s("figure",null,[s("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),S=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"int"),n(),s("span",{class:"token function"},"main"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    myclass a`),s("span",{class:"token punctuation"},";"),n(`
    a`),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"return"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),z=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"pragma"),n(),s("span",{class:"token expression"},"once")]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},"<iostream>")]),n(`

`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"myclass"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token keyword"},"private"),s("span",{class:"token operator"},":"),n(`
    `),s("span",{class:"token keyword"},"int"),n(" value"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"public"),s("span",{class:"token operator"},":"),n(`
    `),s("span",{class:"token keyword"},"static"),n(),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token keyword"},"int"),n(" value"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),B=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"test.h"')]),n(`

`),s("span",{class:"token keyword"},"void"),n(" myclass"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token keyword"},"int"),n(" value"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token keyword"},"this"),s("span",{class:"token operator"},"->"),n("value "),s("span",{class:"token operator"},"="),n(" value"),s("span",{class:"token punctuation"},";"),s("span",{class:"token comment"},"//错误'this' 只能在非 static 成员函数或非 static 数据成员初始值设定项内使用"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),D=s("figure",null,[s("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),H=o(`<ol><li><p><strong>mutable 成员变量：</strong> 将需要在常成员函数中修改的成员变量声明为 <code>mutable</code>。 <code>mutable</code> 关键字告诉编译器，即使在常成员函数中，这些成员变量仍然可以被修改。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">mutable</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>  <span class="token comment">// mutable 成员变量</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在常成员函数中修改 mutable 成员变量是允许的</span>
        value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在常成员函数中访问 mutable 成员变量</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>通过 const_cast 去除 const 限定：</strong> 尽管不推荐，但你可以使用 <code>const_cast</code> 来去除 <code>this</code> 指针的常量属性， 以便在常成员函数中修改成员变量。这种做法需要谨慎使用，因为它绕过了 <code>const</code> 的本意，可能导致未定义的行为。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 const_cast 去除 const 限定</span>
        <span class="token generic-function"><span class="token function">const_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyClass<span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span>value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在常成员函数中访问成员变量</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function R(Z,P){const i=p("chatmessage"),l=p("CodeTabs");return d(),r("div",null,[e(i,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[n(" this指针是什么？ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/new1.png",avatarWidth:50,alignLeft:""},{default:a(()=>[n(" this 指针是一个指向当前对象的指针，它是作为类的非静态成员函数的隐含参数而存在的。 ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[n(" this指针可以理解成第一人称我嘛？ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/new1.png",avatarWidth:50,alignLeft:""},{default:a(()=>[n(" 可以将 this 视为当前对象的“自引用指针”。 通过 this 指针，你可以在成员函数中访问对象的成员变量和其他成员函数，即使它们和局部变量或参数有相同的名称。 ")]),_:1}),g,e(i,{avatar:"../../../../assets/emoji/new2.png",avatarWidth:60},{default:a(()=>[n(" 另外，什么是非静态成员函数？ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/new4.png",avatarWidth:50,alignLeft:""},{default:a(()=>[n(" 非静态成员函数也就是没有用static修饰的成员函数。 ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[n(" 也就是说static修饰的成员函数就叫静态成员函数，你的意思是必须写在某个对象的类内？外部的某个函数就不能用static修饰嘛？ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/new4.png",avatarWidth:50,alignLeft:""},{default:a(()=>[n(" 那是当然。 ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/new11.png",avatarWidth:80},{default:a(()=>[n(" 可是我这么写编译器并没有报错！ ")]),_:1}),h,e(i,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:50,alignLeft:""},{default:a(()=>[n(" 那是因为你写的 test函数声明和定义已经调用都在同个文件中。 现在你将这个test函数写在其他头文件中，然后在main中引入调用告诉我看到了什么？ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/new7.png",avatarWidth:40},{default:a(()=>[n(" 依然编译成功！ ")]),_:1}),e(l,{id:"39",data:[{id:"main.cpp"},{id:"test.h"}],"tab-id":"language"},{title0:a(({value:t,isActive:c})=>[n("main.cpp")]),title1:a(({value:t,isActive:c})=>[n("test.h")]),tab0:a(({value:t,isActive:c})=>[y]),tab1:a(({value:t,isActive:c})=>[w]),_:1},8,["data"]),e(i,{avatar:"../../../../assets/emoji/bqb (2).png",avatarWidth:50,alignLeft:""},{default:a(()=>[n(" good！你现在将函数的定义从头文件分离，写到一个新的cpp中。 ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[_]),_:1}),f,e(l,{id:"56",data:[{id:"main.cpp"},{id:"test.h"},{id:"test.cpp"}],"tab-id":"language"},{title0:a(({value:t,isActive:c})=>[n("main.cpp")]),title1:a(({value:t,isActive:c})=>[n("test.h")]),title2:a(({value:t,isActive:c})=>[n("test.cpp")]),tab0:a(({value:t,isActive:c})=>[x]),tab1:a(({value:t,isActive:c})=>[A]),tab2:a(({value:t,isActive:c})=>[j]),_:1},8,["data"]),e(i,{avatar:"../../../../assets/emoji/new4.png",avatarWidth:50,alignLeft:""},{default:a(()=>[n(" 在 C++ 中，函数默认情况下是全局的（具有外部链接），但使用 static 关键字可以将函数的链接属性更改为内部链接， 使其在同一文件中的其他文件看不到。现在尝试将你的static test的函数写到某个类中. ")]),_:1}),e(l,{id:"68",data:[{id:"main.cpp"},{id:"test.h"},{id:"test.cpp"}],"tab-id":"language"},{title0:a(({value:t,isActive:c})=>[n("main.cpp")]),title1:a(({value:t,isActive:c})=>[n("test.h")]),title2:a(({value:t,isActive:c})=>[n("test.cpp")]),tab0:a(({value:t,isActive:c})=>[W]),tab1:a(({value:t,isActive:c})=>[V]),tab2:a(({value:t,isActive:c})=>[C]),_:1},8,["data"]),e(i,{avatar:"../../../../assets/emoji/new7.png",avatarWidth:40},{default:a(()=>[n(" 好神奇！竟然可以用了！而且我不需要创建这个对象实例！ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" static修饰一个成员函数或者成员变量后，会将其存储在全局数据区，这也是我们可以直接用作用域访问符::直接访问而不创建实例的原因。 ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/new7.png",avatarWidth:40},{default:a(()=>[n(" 可是！我现在依然可以用普通的创建类的实例来调用他耶？ ")]),_:1}),e(l,{id:"82",data:[{id:"main.cpp"},{id:"test.h"},{id:"test.cpp"}],"tab-id":"language"},{title0:a(({value:t,isActive:c})=>[n("main.cpp")]),title1:a(({value:t,isActive:c})=>[n("test.h")]),title2:a(({value:t,isActive:c})=>[n("test.cpp")]),tab0:a(({value:t,isActive:c})=>[L]),tab1:a(({value:t,isActive:c})=>[M]),tab2:a(({value:t,isActive:c})=>[T]),_:1},8,["data"]),e(i,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 那是当然，现在你在你的类中尝试使用this指针，康康会出什么问题。 ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/bqb (5).png",avatarWidth:40},{default:a(()=>[q]),_:1}),N,e(l,{id:"102",data:[{id:"main.cpp"},{id:"test.h"},{id:"test.cpp"}],"tab-id":"language"},{title0:a(({value:t,isActive:c})=>[n("main.cpp")]),title1:a(({value:t,isActive:c})=>[n("test.h")]),title2:a(({value:t,isActive:c})=>[n("test.cpp")]),tab0:a(({value:t,isActive:c})=>[S]),tab1:a(({value:t,isActive:c})=>[z]),tab2:a(({value:t,isActive:c})=>[B]),_:1},8,["data"]),e(i,{avatar:"../../../../assets/emoji/new2.png",avatarWidth:60},{default:a(()=>[n(" 除了这个static,有时候成员函数是个常函数用了const限定，好像也无法用this访问成员变量！ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 没错，但你用const限定成员函数时，确实无法通过this访问成员变量。而且限定符 'const' 仅允许用于非 static 成员函数。 ")]),_:1}),D,e(i,{avatar:"../../../../assets/emoji/new2.png",avatarWidth:60},{default:a(()=>[n(" 那么非静态成员常函数我该怎么访问成员变量呢？有没有办法？ ")]),_:1}),e(i,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 有两种方法： ")]),_:1}),H])}const F=u(b,[["render",R],["__file","7-Ptr-this.html.vue"]]);export{F as default};
