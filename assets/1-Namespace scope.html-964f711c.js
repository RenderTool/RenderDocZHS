import{_ as a,r as n,o as s,c,d as o,w as p,e as t,b as i}from"./app-f69dda3c.js";const l="/RenderDoc/assets/namespace-4f53fa10.png",d={},u=t(`<ol><li><p>每个命名空间定义引入一个作用范围，包含该命名空间的所有内容。</p></li><li><p>重新声明或特化的部分也在该范围内。</p></li><li><p>全局作用域是整个程序的作用范围。</p></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">namespace</span> Q <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span> V <span class="token punctuation">{</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token class-name">V</span><span class="token double-colon punctuation">::</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">// in the scope of V</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中：</p><ol><li><code>namespace Q</code> 的作用范围包括整个命名空间 <code>Q</code>。</li><li><code>namespace V</code> 的作用范围包括整个命名空间 <code>V</code>，这也包括了 <code>void f();</code> 的定义。</li><li><code>void V::f()</code> 是函数 <code>f</code> 的定义，它位于命名空间 <code>V</code> 的作用范围内。</li></ol><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总结：</p><ul><li><code>namespace Q</code> 的作用范围包括整个命名空间 <code>Q</code>，其中包括 <code>namespace V</code> 和函数 <code>V::f()</code>。</li><li><code>namespace V</code> 的作用范围包括整个命名空间 <code>V</code>，其中包括函数 <code>V::f()</code>。</li></ul>',7);function r(m,k){const e=n("chatmessage");return s(),c("div",null,[o(e,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:p(()=>[i(" Namespace的作用域 ")]),_:1}),u])}const v=a(d,[["render",r],["__file","1-Namespace scope.html.vue"]]);export{v as default};
