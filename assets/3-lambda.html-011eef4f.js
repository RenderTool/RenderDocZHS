import{_ as o,r as c,o as i,c as l,d as s,w as e,a as t,b as a,e as p}from"./app-2494361c.js";const d="/RenderDocZHS/assets/v2-a1c0823ffa71cf6a5adba2ba913c0e1a_1440w-c5d54d2d.jpg",r={},u=t("h2",{id:"函数式编程",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#函数式编程","aria-hidden":"true"},"#"),a(" 函数式编程")],-1),k=t("blockquote",null,[t("p",null,"函数式编程（Functional Programming）是一种编程范式，它将计算视为数学函数的求值，并避免了可变状态和可变数据。 函数式编程强调函数的纯粹性、不可变性和无副作用，这些特性使得程序更容易推理、测试和并行化。")],-1),m=t("figure",null,[t("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),v=t("h2",{id:"lambda表达式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#lambda表达式","aria-hidden":"true"},"#"),a(" lambda表达式")],-1),b=t("h3",{id:"定义",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#定义","aria-hidden":"true"},"#"),a(" 定义")],-1),h=p(`<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token punctuation">[</span>capture<span class="token punctuation">]</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> return_type <span class="token punctuation">{</span>
    <span class="token comment">// 函数体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[]：这是捕获列表，指定 lambda 表达式中使用的外部变量。</li><li>()：这是参数列表，类似于普通函数的参数列表。</li><li>-&gt;：这是一个箭头符号，用于指定返回类型。如果没有指定，编译器会自动推断返回类型。</li><li>{}：这是函数体，包含了实际的代码。</li></ul>`,3),g=p(`<blockquote><p>例如，在数学中，我们可能有一个函数：</p></blockquote><p>[ f(x) = x^2 ]</p><p>在编程中，可以使用Lambda表达式来表示类似的逻辑：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code> <span class="token keyword">auto</span> square <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> 
 <span class="token punctuation">{</span>
   <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),_=p(`<blockquote><p>如果Lambda表达式的函数体更复杂，无法通过单一的return语句确定返回类型，或者你想要显式指定返回类型，那么你可以使用<code>-&gt;</code>符号来指定返回类型，例如：</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> complexLambda <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">double</span> <span class="token punctuation">{</span>
    <span class="token comment">// 复杂的函数体</span>
    <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>-&gt; double</code> 显式指定了Lambda表达式的返回类型为 <code>double</code>。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ol><li><strong>匿名性：</strong> Lambda表达式是匿名的，不需要显式地定义函数的名称。</li><li><strong>紧凑性：</strong> Lambda表达式通常非常简洁，可以在一行内完成函数的定义。</li><li><strong>传递行为：</strong> Lambda表达式可以作为参数传递给其他函数，从而实现更灵活的编程模式。</li></ol><h3 id="其他例子" tabindex="-1"><a class="header-anchor" href="#其他例子" aria-hidden="true">#</a> 其他例子</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Lambda 表达式示例</span>
<span class="token keyword">auto</span> sum <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 Lambda 表达式</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// result = 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function f(x,w){const n=c("chatmessage");return i(),l("div",null,[s(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" Baba!lambda表达式是什么？ ")]),_:1}),s(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 你可能注意到这里由lambda+表达式构成虽然这像一句废话。 提到表达式你的第一反应是什么？ ")]),_:1}),s(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 数学，各种公式、函数:f(x) = x2; ")]),_:1}),s(n,{avatar:"../../../assets/emoji/new2.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 没错，在数学中，函数通常被表示为一个映射关系，将输入映射到输出。这种函数往往非常纯粹、简单。 也就是我们常说的函数式编程思想。 ")]),_:1}),u,k,m,s(n,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 在面向对象思想中强调“必须通过对象的形式来做事情”，而函数式编程强调的是通过函数的组合和变换来实现程序逻辑，而不是通过改变状态的方式。 ")]),_:1}),v,b,s(n,{avatar:"../../../assets/emoji/new5.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" Lambda表达式是一种轻量级的匿名函数，它可以直接在代码中定义，不需要事先命名，非常适合在函数式编程中使用。 ")]),_:1}),h,s(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 那么说Lambda表达式可以被理解为编程中的一种类似于数学中函数的表达方式? ")]),_:1}),s(n,{avatar:"../../../assets/emoji/new1.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" Lambda表达式可以看作是一个匿名函数，它描述了一段代码块，可以接受一些输入参数并返回结果。 这类似于数学中的函数，其中输入参数对应于函数的自变量，而返回值对应于函数的因变量。 ")]),_:1}),g,s(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 为什么你这里没有->? ")]),_:1}),s(n,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 根据lambda规则如果没有指定，编译器会自动推断返回类型就不需要加->。 ")]),_:1}),_,s(n,{avatar:"../../../assets/emoji/new3.png",avatarWidth:40},{default:e(()=>[a(" 以前总不理解，你说了函数式编程后我把它理解成一个数学公式就简单多了！ ")]),_:1})])}const y=o(r,[["render",f],["__file","3-lambda.html.vue"]]);export{y as default};
