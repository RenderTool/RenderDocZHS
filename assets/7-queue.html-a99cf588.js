import{_ as e,r as t,o as p,c as o,d as c,w as i,a as n,b as s,e as l}from"./app-f9abccac.js";const u="/RenderDocZHS/assets/queue-8da59ec1.png",d={},r=n("h3",{id:"queue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#queue","aria-hidden":"true"},"#"),s(" queue")],-1),k=l('<figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><code>std::queue</code> 是 C++ 标准模板库中的容器适配器（container adapter），它基于某个底层容器（默认是 <code>std::deque</code>， 但也可以是 <code>std::list</code> 或 <code>std::vector</code>）提供了队列（queue）的功能。</p></blockquote><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义：</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;queue&gt;</span></span>

std<span class="token double-colon punctuation">::</span>queue<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> Container<span class="token operator">&gt;</span> myQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>T</code> 是队列中元素的类型。</li><li><code>Container</code> 是底层容器的类型，默认为 <code>std::deque&lt;T&gt;</code>。</li></ul><h3 id="主要操作" tabindex="-1"><a class="header-anchor" href="#主要操作" aria-hidden="true">#</a> 主要操作：</h3><ol><li><strong>push()：</strong> 将元素推入队列尾部。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>   myQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><strong>pop()：</strong> 弹出队列头部的元素。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>   myQueue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><strong>front()：</strong> 返回队列头部的元素（不会删除该元素）。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>  T frontElement <span class="token operator">=</span> myQueue<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><p><strong>back()：</strong> 返回队列尾部的元素（不会删除该元素）。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>T backElement <span class="token operator">=</span> myQueue<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>empty()：</strong> 检查队列是否为空。</p></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>   <span class="token keyword">if</span> <span class="token punctuation">(</span>myQueue<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 队列为空</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><strong>size()：</strong> 返回队列中元素的个数。<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>size_t queueSize <span class="token operator">=</span> myQueue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念：</h3><ul><li><p><strong>底层容器（Underlying Container）：</strong> <code>std::queue</code> 使用某个底层容器来存储元素。默认情况下，底层容器是 <code>std::deque</code>，但你可以通过模板参数指定其他容器类型，如 <code>std::list</code> 或 <code>std::vector</code>。</p></li><li><p><strong>队头（Front）和队尾（Back）：</strong> 队列中的元素是按照先进先出的顺序排列的，最先进队列的元素是队头，最后进队列的元素是队尾。</p></li><li><p><strong>适配器（Adapter）：</strong> <code>std::queue</code> 被称为容器适配器，因为它提供了一组特定的接口，是对底层容器的封装，使其具有队列的行为。</p></li><li><p><strong>不提供迭代器：</strong> 栈不提供对其元素的迭代器访问，因为只允许在栈顶进行插入和删除操作。</p></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;queue&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> myQueue<span class="token punctuation">;</span>

    myQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>myQueue<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> myQueue<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span> <span class="token comment">// 输出队头元素</span>
        myQueue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 弹出队头元素</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function v(m,g){const a=t("chatmessage");return p(),o("div",null,[r,c(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:i(()=>[s(" 队列是一种先进先出（First In, First Out，FIFO）的数据结构，即最先进队列的元素将最先被取出。 ")]),_:1}),k])}const h=e(d,[["render",v],["__file","7-queue.html.vue"]]);export{h as default};
