import{_ as c,r as d,o as p,c as l,d as a,w as t,a as n,b as s,e as i}from"./app-d070a7fb.js";const r={},u=i('<h2 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h2><table><thead><tr><th>特征</th><th>描述</th></tr></thead><tbody><tr><td><code>WITH_EDITORONLY_DATA</code></td><td>用于标记在头文件中的成员变量，仅在编辑器中可见，游戏运行时被忽略。</td></tr><tr><td><code>WITH_EDITOR</code></td><td>用于标记在 CPP 文件中的代码块，该代码块在构建编辑器时应被编译。</td></tr><tr><td><code>GIsEditor</code></td><td>全局布尔变量，用于判断当前是否在虚幻编辑器中运行。</td></tr></tbody></table><hr>',3),h=i(`<hr><h3 id="with-editor-和-giseditor-的区别" tabindex="-1"><a class="header-anchor" href="#with-editor-和-giseditor-的区别" aria-hidden="true">#</a> <code>WITH_EDITOR</code> 和 <code>GIsEditor</code> 的区别</h3><h3 id="with-editor" tabindex="-1"><a class="header-anchor" href="#with-editor" aria-hidden="true">#</a> <code>WITH_EDITOR</code></h3><p><code>WITH_EDITOR</code> 是一个宏，用于在代码中标记在构建编辑器时应该被编译的部分。以下是示例代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">WITH_EDITOR </span></span>
<span class="token comment">// 仅在构建编辑器时编译的代码</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span>  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=n("p",null,[s("这意味着在构建编辑器时，"),n("code",null,"WITH_EDITOR"),s(" 中的代码会被编译，而在独立构建中将被移除。它通常用于区分编辑器构建和游戏构建的代码。")],-1),k=i(`<h3 id="giseditor" tabindex="-1"><a class="header-anchor" href="#giseditor" aria-hidden="true">#</a> <code>GIsEditor</code></h3><p><code>GIsEditor</code> 是一个全局的布尔变量，用于判断当前是否在虚幻编辑器中运行。以下是示例代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>GIsEditor<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token comment">// 仅在编辑器中运行时执行的代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b=n("p",null,[n("code",null,"GIsEditor"),s(" 用于检查是否在虚幻编辑器中运行，即使在 Play In Editor (PIE) 模式下也为 "),n("code",null,"true"),s("。这对于需要在编辑器中执行特定代码的情况非常有用。")],-1),m=i(`<h3 id="区别和示例" tabindex="-1"><a class="header-anchor" href="#区别和示例" aria-hidden="true">#</a> 区别和示例</h3><ul><li><code>WITH_EDITOR</code> 是一个宏，而 <code>GIsEditor</code> 是一个全局的布尔变量。</li><li>使用 <code>WITH_EDITOR</code> 的代码在构建编辑器时会被编译，而 <code>GIsEditor</code> 是在运行时判断是否在编辑器中运行。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">WITH_EDITOR </span></span>
int32 TestInt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>     
<span class="token keyword">if</span><span class="token punctuation">(</span>GIsEditor<span class="token punctuation">)</span>     
<span class="token punctuation">{</span>         
  TestInt <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>             
<span class="token punctuation">}</span>     
<span class="token keyword">else</span>     
<span class="token punctuation">{</span>         
  TestInt <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>     
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在这个示例中，如果在编辑器中运行，则 <code>TestVar</code> 被设置为1；否则，它被设置为2。这种区别允许开发者根据构建环境和运行时上下文来控制代码的行为。</p></blockquote><table><thead><tr><th>特征</th><th><code>WITH_EDITOR</code></th><th><code>GIsEditor</code></th></tr></thead><tbody><tr><td>类型</td><td>宏</td><td>全局布尔变量</td></tr><tr><td>用途</td><td>标记仅在构建编辑器时编译的代码</td><td>判断是否在虚幻编辑器中运行</td></tr><tr><td>作用范围</td><td>代码中，通常在头文件或CPP文件中使用</td><td>通常在代码中使用，用于运行时判断编辑器运行状态</td></tr></tbody></table><h2 id="with-editoronly-data-和-with-editor-的区别" tabindex="-1"><a class="header-anchor" href="#with-editoronly-data-和-with-editor-的区别" aria-hidden="true">#</a> <code>WITH_EDITORONLY_DATA</code> 和 <code>WITH_EDITOR</code> 的区别</h2><h3 id="with-editoronly-data" tabindex="-1"><a class="header-anchor" href="#with-editoronly-data" aria-hidden="true">#</a> <code>WITH_EDITORONLY_DATA</code></h3>`,7),_=n("p",null,[n("code",null,"WITH_EDITORONLY_DATA"),s(" 是一个宏，用于在头文件中标记成员变量，这些变量仅在编辑器环境中可见，并且在游戏运行时被忽略。这对于在编辑器中使用特定数据或属性非常有用。")],-1),y=i(`<p>示例代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;MyCategory&quot;</span><span class="token punctuation">)</span>
    int32 EditableVariable<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">WITH_EDITORONLY_DATA</span></span>
    <span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;MyCategory&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">float</span> EditorOnlyVariable<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在这个示例中，<code>EditorOnlyVariable</code> 只会在编辑器中显示，并且在游戏运行时将被忽略。</p></blockquote><h3 id="with-editor-1" tabindex="-1"><a class="header-anchor" href="#with-editor-1" aria-hidden="true">#</a> <code>WITH_EDITOR</code></h3>`,4),I=n("p",null,[n("code",null,"WITH_EDITOR"),s(" 仍然是一个宏，但一般用于在 CPP 文件中标记与编辑器相关的代码块，例如某些特定于编辑器的逻辑，而不是用于标记成员变量。")],-1),T=i(`<p>示例代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">WITH_EDITOR</span></span>
<span class="token keyword">void</span> <span class="token class-name">MyClass</span><span class="token double-colon punctuation">::</span><span class="token function">EditorOnlyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 编辑器中调用的函数</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在这个示例中，<code>EditorOnlyFunction</code> 只会在构建编辑器时被编译，而在独立构建时会被移除。</p></blockquote><h3 id="区别和示例-1" tabindex="-1"><a class="header-anchor" href="#区别和示例-1" aria-hidden="true">#</a> 区别和示例</h3><ul><li>使用 <code>WITH_EDITORONLY_DATA</code> 的成员变量将仅在编辑器中可见，而在游戏运行时将被忽略。</li><li><code>WITH_EDITOR</code> 通常用于包含编辑器特定的功能或逻辑的 CPP 代码块。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;MyCategory&quot;</span><span class="token punctuation">)</span>
    int32 EditableVariable<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">WITH_EDITORONLY_DATA</span></span>
    <span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;MyCategory&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">float</span> EditorOnlyVariable<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">WITH_EDITOR</span></span>
    <span class="token keyword">void</span> <span class="token function">EditorOnlyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在这个示例中，<code>EditorOnlyVariable</code> 在编辑器中可见，而 <code>EditorOnlyFunction</code> 仅在编辑器构建时可用。这样可以更精确地控制编辑器和游戏运行时的代码行为。</p></blockquote><table><thead><tr><th>特征</th><th><code>WITH_EDITORONLY_DATA</code></th><th><code>WITH_EDITOR</code></th></tr></thead><tbody><tr><td>类型</td><td>宏</td><td>宏</td></tr><tr><td>用途</td><td>标记仅在编辑器中可见的成员变量</td><td>标记在构建编辑器时应该被编译的代码块</td></tr><tr><td>作用范围</td><td>通常在头文件中使用，标记成员变量</td><td>通常在 CPP 文件中使用，标记编辑器特定的功能或逻辑</td></tr></tbody></table><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>`,9),E={href:"https://forums.unrealengine.com/t/having-trouble-with-if-with_editor/138926",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/76590936",target:"_blank",rel:"noopener noreferrer"},f={href:"https://exkulo.github.io/2021/01/05/20210105-UE4-With-Editor-vs-With-EditorDataOnly/",target:"_blank",rel:"noopener noreferrer"};function O(w,D){const e=d("chatmessage"),o=d("ExternalLinkIcon");return p(),l("div",null,[u,a(e,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:t(()=>[s(" Baba我的编辑器宏写上编译成功但打包失败了！ ")]),_:1}),a(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[s(" 让我康康！看来你还不知道这些区别！ ")]),_:1}),h,a(e,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[v]),_:1}),k,a(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[b]),_:1}),m,a(e,{avatar:"../../assets/emoji/bqb (6).png",avatarWidth:40,alignLeft:""},{default:t(()=>[_]),_:1}),y,a(e,{avatar:"../../assets/emoji/bqb02.png",avatarWidth:40,alignLeft:""},{default:t(()=>[I]),_:1}),T,n("ol",null,[n("li",null,[n("a",E,[s("Having trouble with #if WITH_EDITOR"),a(o)])]),n("li",null,[n("a",g,[s("编辑器相关宏说明"),a(o)])]),n("li",null,[n("a",f,[s("20210105 UE4 With_Editor vs With_EditorDataOnly"),a(o)])])])])}const R=c(r,[["render",O],["__file","3-EditorUsing.html.vue"]]);export{R as default};
