import{_ as i,r as t,o as l,c as r,d as n,w as e,a as o,b as s,e as p}from"./app-ca7cc0fa.js";const u={},d=o("h2",{id:"选择排序-selection-sort",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#选择排序-selection-sort","aria-hidden":"true"},"#"),s(" 选择排序 (Selection Sort)")],-1),k=p('<h3 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h3><ol><li>首先在<code>未排序</code>序列中找到最小（大）元素，存放到排序序列的起始位置.</li><li>再从剩余<code>未排序</code>元素中继续寻找最小（大）元素，然后放到<code>已排序</code>序列的末尾。</li><li>以此类推，直到所有元素均排序完毕。</li></ol>',2),m=p(`<h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">selectionSort</span><span class="token punctuation">(</span>T arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(h,b){const a=t("chatmessage"),c=t("gifwithbutton");return l(),r("div",null,[d,n(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40},{default:e(()=>[s(" 简单选择排序是通过不断选择剩余元素中的最小值，并将其放在已排序部分的末尾。 ")]),_:1}),n(c,{src:"../../assets/algorithmgif/selctionsort.gif"}),k,n(a,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 时间复杂度是O(n^2)，其中n是数组的长度，优势在于交换次数相对较少，且不受输入数据分布的影响(相对稳定)。 ")]),_:1}),m])}const f=i(u,[["render",v],["__file","01selectionSort1.html.vue"]]);export{f as default};
