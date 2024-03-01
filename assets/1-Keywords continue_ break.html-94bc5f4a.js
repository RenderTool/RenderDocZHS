import{_ as a,r as s,o as e,c as t,d as o,w as p,e as c,b as i}from"./app-c4ee493e.js";const r="/RenderDocZHS/assets/break-506abbe9.jpg",l="/RenderDocZHS/assets/continue-1be14da5.png",d={},u=c('<h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="_1-break-关键字" tabindex="-1"><a class="header-anchor" href="#_1-break-关键字" aria-hidden="true">#</a> 1. <strong><code>break</code> 关键字：</strong></h3><figure><img src="'+r+`" alt="整个蓝图块的过程为for循环" tabindex="0" loading="lazy"><figcaption>整个蓝图块的过程为for循环</figcaption></figure><ul><li><p><strong>作用：</strong> 当 <code>break</code> 关键字出现在循环体内时，它会立即终止当前循环，跳出循环体，不再执行循环内尚未执行完的语句。</p></li><li><p><strong>用法：</strong> 通常用于在满足某个条件时提前结束循环，无论循环条件是否达到结束条件。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 当 i 等于 5 时，终止循环</span>
  <span class="token punctuation">}</span>
  std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，当 <code>i</code> 等于 5 时，<code>break</code> 将立即终止循环。</p></li></ul><h3 id="_2-continue-关键字" tabindex="-1"><a class="header-anchor" href="#_2-continue-关键字" aria-hidden="true">#</a> 2. <strong><code>continue</code> 关键字：</strong></h3><figure><img src="`+l+`" alt="整个蓝图块的过程为for循环" tabindex="0" loading="lazy"><figcaption>整个蓝图块的过程为for循环</figcaption></figure><ul><li><p><strong>作用：</strong> 当 <code>continue</code> 关键字出现在循环体内时，它会跳过当前迭代中剩余的代码，直接进入下一次循环迭代。</p></li><li><p><strong>用法：</strong> 通常用于在满足某个条件时跳过当前迭代，继续进行下一次迭代。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 当 i 等于 5 时，跳过当前迭代，进入下一次迭代</span>
  <span class="token punctuation">}</span>
  std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，当 <code>i</code> 等于 5 时，<code>continue</code> 将跳过 <code>i == 5</code> 这一次的输出，直接进行下一次循环迭代。</p></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><code>break</code> 用于终止整个循环，而 <code>continue</code> 用于终止当前迭代并进入下一次迭代。</p>`,9);function k(b,m){const n=s("chatmessage");return e(),t("div",null,[o(n,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40},{default:p(()=>[i(" `continue` 和 `break` 是两个在 C++ 中用于控制循环流程的关键字，有什么区别？ ")]),_:1}),u])}const v=a(d,[["render",k],["__file","1-Keywords continue_ break.html.vue"]]);export{v as default};
