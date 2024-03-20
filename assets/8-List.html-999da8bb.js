import{_ as t,r as e,o as p,c,d as i,w as o,a as n,b as s,e as l}from"./app-3f521a46.js";const u="/RenderDocZHS/assets/List-05316b94.png",d="/RenderDocZHS/assets/stllist-6ffb7693.png",r={},k=n("h3",{id:"list",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#list","aria-hidden":"true"},"#"),s(" List")],-1),v=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),m=n("p",null,[n("code",null,"std::list"),s(" 是 C++ 标准模板库中的双向链表容器。它提供了一个能够高效进行插入和删除操作的数据结构，支持在序列的两端和任何位置进行快速插入和删除元素。")],-1),b=l('<figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义：</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;list&gt;</span></span>

std<span class="token double-colon punctuation">::</span>list<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> myList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>T</code> 是列表中元素的类型。</li></ul><h3 id="主要操作" tabindex="-1"><a class="header-anchor" href="#主要操作" aria-hidden="true">#</a> 主要操作：</h3><ol><li><p><strong>push_back()：</strong> 在列表尾部插入元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myList<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>push_front()：</strong> 在列表头部插入元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myList<span class="token punctuation">.</span><span class="token function">push_front</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>pop_back()：</strong> 移除列表尾部的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myList<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>pop_front()：</strong> 移除列表头部的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myList<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>insert()：</strong> 在指定位置插入元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>iterator<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>erase()：</strong> 移除指定位置的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myList<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>iterator<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>size()：</strong> 返回列表中元素的个数。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>size_t listSize <span class="token operator">=</span> myList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>empty()：</strong> 检查列表是否为空。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>myList<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 列表为空</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>begin() 和 end()：</strong> 返回指向列表开头和结尾的迭代器，可用于遍历列表。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> it <span class="token operator">=</span> myList<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it <span class="token operator">!=</span> myList<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理 *it</span>
    <span class="token operator">++</span>it<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念：</h3><ul><li><p><strong>双向链表：</strong> <code>std::list</code> 使用双向链表来存储元素，每个元素都包含指向前一个和后一个元素的指针，这使得在任意位置进行插入和删除操作都非常高效。</p></li><li><p><strong>迭代器：</strong> <code>std::list</code> 提供了双向迭代器，支持正向和反向遍历。</p></li><li><p><strong>动态大小：</strong> <code>std::list</code> 的大小可以动态调整，可以根据需要进行插入和删除操作，而不会涉及到重新分配内存。</p></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;list&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>list<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> myList<span class="token punctuation">;</span>

    myList<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myList<span class="token punctuation">.</span><span class="token function">push_front</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myList<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    myList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">next</span><span class="token punctuation">(</span>myList<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在第二个元素后插入15</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">auto</span><span class="token operator">&amp;</span> element <span class="token operator">:</span> myList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> element <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="in-ue" tabindex="-1"><a class="header-anchor" href="#in-ue" aria-hidden="true">#</a> In UE</h2><blockquote><p>在Unreal Engine 中，本身并没有提供一个名为<code> std::list</code>的标准C++库的list容器， 但可以使用 TDoubleLinkedList 类来实现双向链表的功能。</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    <span class="token comment">// 使用 TDoubleLinkedList 模拟双向链表</span>
    TDoubleLinkedList<span class="token operator">&lt;</span>int32<span class="token operator">&gt;</span> MyList<span class="token punctuation">;</span>

    <span class="token comment">// 在链表尾部插入元素</span>
    MyList<span class="token punctuation">.</span><span class="token function">AddTail</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    MyList<span class="token punctuation">.</span><span class="token function">AddTail</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 在链表头部插入元素</span>
    MyList<span class="token punctuation">.</span><span class="token function">AddHead</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 在链表的特定位置插入元素</span>
    TDoubleLinkedList<span class="token operator">&lt;</span>int32<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>TDoubleLinkedListNode<span class="token operator">*</span> NodeToInsertAfter <span class="token operator">=</span> MyList<span class="token punctuation">.</span><span class="token function">GetHeadNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    MyList<span class="token punctuation">.</span><span class="token function">InsertAfter</span><span class="token punctuation">(</span>NodeToInsertAfter<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历链表</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> int32<span class="token operator">&amp;</span> Element <span class="token operator">:</span> MyList<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 处理 Element</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function g(h,f){const a=e("chatmessage");return p(),c("div",null,[k,v,i(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:o(()=>[m]),_:1}),b])}const L=t(r,[["render",g],["__file","8-List.html.vue"]]);export{L as default};
