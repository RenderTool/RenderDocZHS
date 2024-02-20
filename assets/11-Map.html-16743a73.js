import{_ as o,r as c,o as l,c as i,d as e,w as p,a as n,b as s,e as t}from"./app-4fdf0358.js";const u={},d=n("h3",{id:"map-mutimap",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#map-mutimap","aria-hidden":"true"},"#"),s(" Map|MutiMap")],-1),r=n("p",null,[n("code",null,"std::map"),s(" 是 C++ 标准库中的关联容器，它提供了"),n("code",null,"key"),s("键-"),n("code",null,"value"),s("值对的存储和检索功能。每个键-值对在 "),n("code",null,"std::map"),s(" 中被称为一个元素。关联容器的一个重要特性是，它们按照键的顺序进行有序存储。")],-1),k=n("p",null,[n("code",null,"MutiMap"),s("可以有重复的"),n("code",null,"key"),s("值")],-1),m=t(`<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义：</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;map&gt;</span></span>

std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>KeyType<span class="token punctuation">,</span> ValueType<span class="token operator">&gt;</span> myMap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>KeyType</code> 是键的类型，<code>ValueType</code> 是值的类型。</li></ul><h3 id="主要操作" tabindex="-1"><a class="header-anchor" href="#主要操作" aria-hidden="true">#</a> 主要操作：</h3><ol><li><p><strong>插入元素：</strong> 使用 <code>insert</code> 函数或数组下标运算符 <code>[]</code> 插入元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myMap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">make_pair</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
myMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>访问元素：</strong> 使用键访问元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>ValueType value <span class="token operator">=</span> myMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>删除元素：</strong> 使用 <code>erase</code> 函数删除指定键的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myMap<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>查找元素：</strong> 使用 <code>find</code> 函数查找指定键的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> it <span class="token operator">=</span> myMap<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>it <span class="token operator">!=</span> myMap<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 元素找到</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>迭代：</strong> 使用迭代器对 <code>std::map</code> 中的元素进行遍历。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> it <span class="token operator">=</span> myMap<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> myMap<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>it<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    KeyType key <span class="token operator">=</span> it<span class="token operator">-&gt;</span>first<span class="token punctuation">;</span>
    ValueType value <span class="token operator">=</span> it<span class="token operator">-&gt;</span>second<span class="token punctuation">;</span>
    <span class="token comment">// 处理键值对</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="与-std-pair-的联系" tabindex="-1"><a class="header-anchor" href="#与-std-pair-的联系" aria-hidden="true">#</a> 与 <code>std::pair</code> 的联系：</h3><p><code>std::pair</code> 通常用于表示键-值对，并且在 <code>std::map</code> 中的元素实际上就是 <code>std::pair</code> 类型的对象。每个元素都是一个由键和值组成的有序对。</p>`,7),v=n("p",null,[s("例如，使用 "),n("code",null,"std::pair"),s(" 来插入元素到 "),n("code",null,"std::map"),s("：")],-1),b=t(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;map&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> myMap<span class="token punctuation">;</span>

    <span class="token comment">// 使用 std::pair 插入元素</span>
    myMap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">make_pair</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;One&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myMap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">pair</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 访问元素</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value corresponding to key 1: &quot;</span> <span class="token operator">&lt;&lt;</span> myMap<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(h,y){const a=c("chatmessage");return l(),i("div",null,[d,e(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:p(()=>[r,k]),_:1}),m,e(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:p(()=>[v]),_:1}),b])}const _=o(u,[["render",g],["__file","11-Map.html.vue"]]);export{_ as default};
