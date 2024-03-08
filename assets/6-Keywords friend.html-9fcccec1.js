import{_ as e,r as p,o,c,d as a,w as t,e as l,b as n,a as i}from"./app-d070a7fb.js";const u={},r=l(`<ol><li><p><strong>访问私有成员：</strong> 如果有一些与类密切相关的非成员函数需要访问类的私有成员， 但这些函数不适合成为类的成员函数，可以将它们声明为友元函数，以便访问类的私有部分。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> privateData<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">privateData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 友元函数的声明</span>
    <span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">displayPrivateData</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 友元函数的定义</span>
<span class="token keyword">void</span> <span class="token function">displayPrivateData</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Private Data: &quot;</span> <span class="token operator">&lt;&lt;</span> obj<span class="token punctuation">.</span>privateData <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>提高效率：</strong> 有时，为了提高效率，需要使用非成员函数来执行某些操作，而这些操作需要访问类的私有成员。通过将这些函数声明为友元，可以避免将所有操作都包装成成员函数。</p></li><li><p><strong>重载运算符：</strong> 重载某些运算符时，可能需要直接访问类的私有成员。友元函数允许非成员函数重载类的运算符并访问类的私有部分。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">double</span> real<span class="token punctuation">;</span>
    <span class="token keyword">double</span> imag<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">Complex</span><span class="token punctuation">(</span><span class="token keyword">double</span> r<span class="token punctuation">,</span> <span class="token keyword">double</span> i<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">real</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">imag</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 友元函数的声明</span>
    <span class="token keyword">friend</span> Complex <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 友元函数的定义</span>
Complex <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Complex</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>real <span class="token operator">+</span> b<span class="token punctuation">.</span>real<span class="token punctuation">,</span> a<span class="token punctuation">.</span>imag <span class="token operator">+</span> b<span class="token punctuation">.</span>imag<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1),d=i("br",null,null,-1);function k(v,m){const s=p("chatmessage");return o(),c("div",null,[a(s,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[n(" 之前咱介绍了class中的三个访问控制修饰符`public`、`protected` 和 `private` 其中`private`控制的成员属性和函数是不是只能通过本身访问。 ")]),_:1}),a(s,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 并不绝对，你可以用友元函数开放权限。 ")]),_:1}),a(s,{avatar:"../../../assets/emoji/bqb01.png",avatarWidth:40},{default:t(()=>[n(" 就像开放权限给我的好朋友查看的意思？ ")]),_:1}),a(s,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 没错，可以这样理解。友元函数的存在就像是你的类把某个函数声明为“好朋友”，允许它访问类的私有成员。 ")]),_:1}),a(s,{avatar:"../../../assets/emoji/new3.png",avatarWidth:50},{default:t(()=>[n(" 那具体该怎么用呢？ ")]),_:1}),a(s,{avatar:"../../../assets/emoji/new1.png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 友元函数的声明通常放在类的定义中，并使用 friend 关键字。有几个特性： ")]),_:1}),r,a(s,{avatar:"../../../assets/emoji/new11.png",avatarWidth:55},{default:t(()=>[n(" 可是如果滥用，岂不是这个`private`就形同虚设，也就破坏了类的封装性。 ")]),_:1}),a(s,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 是的，过度使用友元函数还可能可能导致代码难以维护和理解。"),d,n(" 一般来说，尽量在类内部提供成员函数来实现需要访问私有成员的操作，而只在确实需要时才使用友元函数。 ")]),_:1})])}const y=e(u,[["render",k],["__file","6-Keywords friend.html.vue"]]);export{y as default};
