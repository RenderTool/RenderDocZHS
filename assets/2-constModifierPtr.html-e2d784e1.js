import{_ as i,r as p,o as l,c as d,d as s,w as t,a,e as o,b as n}from"./app-ca7cc0fa.js";const r="/RenderDocZHS/assets/ptrabs-75922e18.jpg",u="/RenderDocZHS/assets/ptrconst-03d51092.jpg",v={},m=a("figure",null,[a("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),k=a("p",null,[n("当你用 const 修饰指针，这时候限制了"),a("code",null,"指针修改指向（某个变量）的值"),n("的能力，但不妨碍你换个地址给这个指针变量啊。")],-1),h=o('<figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="const-修饰指针" tabindex="-1"><a class="header-anchor" href="#const-修饰指针" aria-hidden="true">#</a> <code>const</code> 修饰指针</h2><h4 id="底层-const-low-level-const-常量指针" tabindex="-1"><a class="header-anchor" href="#底层-const-low-level-const-常量指针" aria-hidden="true">#</a> 底层 const（Low-level const）:常量指针</h4><ol><li><code>const int* p</code>: 这表示 <code>p</code> 是一个指向常量整数的指针。这意味着通过指针 <code>p</code> 可以访问整数，但不能通过 <code>p</code> 修改所指向的整数的值。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">*</span> p<span class="token punctuation">;</span><span class="token comment">//注意这里只是为了方便演示，建议给一个初始值，避免指针错误。</span>
    p <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>

    <span class="token comment">// 有效，可以通过指针读取 x 的值</span>
    <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>

    <span class="token comment">//有效，修改指针指向的值的行为被const限定,不代表变量本身被限定</span>
    x <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">//注意看p地址上的值变化。</span>

    <span class="token comment">// 有效，修改指针指向的行为没有被限定。</span>
    p <span class="token operator">=</span> <span class="token operator">&amp;</span>y<span class="token punctuation">;</span>

    <span class="token comment">// 无效，不能通过指针修改 x 的值</span>
    <span class="token comment">// *p = 10;  // 这将导致编译错误</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b=a("p",null,[n("搜嘎！那么反过来const相当于限制了"),a("code",null,"指针指向某个地址的能力"),n(",但不妨碍我们修改指向（某个变量）的值。")],-1),_=o(`<h4 id="顶层-const-top-level-const-指针常量" tabindex="-1"><a class="header-anchor" href="#顶层-const-top-level-const-指针常量" aria-hidden="true">#</a> 顶层 const（Top-level const）:指针常量</h4><ol start="2"><li><p><code>int* const p</code>: 这表示 <code>p</code> 是一个常量指针，即指针本身是常量，不能被重新赋值指向其他地方。但是，通过这个指针可以修改所指向的整数的值。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>

<span class="token comment">// 有效，可以通过指针修改 x 的值</span>
<span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">// 无效，不能修改指针 p 的值</span>
p <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>  <span class="token comment">// 这将导致编译错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),g=o(`<h4 id="_1-指针-地址-都在修饰指针-谁在前谁只读" tabindex="-1"><a class="header-anchor" href="#_1-指针-地址-都在修饰指针-谁在前谁只读" aria-hidden="true">#</a> 1. 指针 = 地址，都在修饰指针，谁在前谁只读</h4><ul><li><p>常量指针:常量在前 = 指向的值只读。</p></li><li><p>指针常量：指针在前 = 指向的地址只读。</p></li></ul><h4 id="_2-根据英文直译中文" tabindex="-1"><a class="header-anchor" href="#_2-根据英文直译中文" aria-hidden="true">#</a> 2. 根据英文直译中文</h4><p>常量（const）指针（<code>int* p</code>)<br> 指针（<code>int*</code>）常量（const p）</p><h3 id="举一反三" tabindex="-1"><a class="header-anchor" href="#举一反三" aria-hidden="true">#</a> 举一反三</h3><h4 id="const即修饰指针又修饰指向的值。" tabindex="-1"><a class="header-anchor" href="#const即修饰指针又修饰指向的值。" aria-hidden="true">#</a> const即修饰指针又修饰指向的值。</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">*</span> <span class="token keyword">const</span> p<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一定牢记！只是指针的能力限定（只读）不是指向的<code>变量</code>被锁定，这里和引用一定要区分开。</p>`,8);function f(x,w){const e=p("chatmessage"),c=p("gifwithbutton");return l(),d("div",null,[s(e,{avatar:"../../../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[n(" Baba!你不是说指针是一个存储地址的变量吗？加了const还能算变量吗？ ")]),_:1}),s(e,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 还记得指针的两大能力吗？ ")]),_:1}),s(e,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[n(" 等我翻翻笔记： ")]),_:1}),m,s(e,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[k]),_:1}),h,s(c,{src:"../../../../assets/unrealgif/constaptr.gif"}),s(e,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40},{default:t(()=>[b]),_:1}),_,s(e,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 很好！Baba再给你几种无脑记忆方法。 ")]),_:1}),g])}const j=i(v,[["render",f],["__file","2-constModifierPtr.html.vue"]]);export{j as default};
