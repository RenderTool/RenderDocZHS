const n=JSON.parse('{"key":"v-0b064b0f","path":"/unreal/function_%E5%87%BD%E6%95%B0_/20-Vector.html","title":"F20.Vector中Size和Length区别","lang":"zh-CN","frontmatter":{"title":"F20.Vector中Size和Length区别","order":20,"category":["u++"],"description":"导言 template&lt;typename T&gt; FORCEINLINE T TVector&lt;T&gt;::Size() const { return FMath::Sqrt(X*X + Y*Y + Z*Z); } template&lt;typename T&gt; FORCEINLINE T TVector&lt;T&gt;::Length() const { \\treturn Size(); }","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/unreal/function_%E5%87%BD%E6%95%B0_/20-Vector.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"F20.Vector中Size和Length区别"}],["meta",{"property":"og:description","content":"导言 template&lt;typename T&gt; FORCEINLINE T TVector&lt;T&gt;::Size() const { return FMath::Sqrt(X*X + Y*Y + Z*Z); } template&lt;typename T&gt; FORCEINLINE T TVector&lt;T&gt;::Length() const { \\treturn Size(); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T17:56:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-03-18T17:56:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"F20.Vector中Size和Length区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T17:56:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"导言","slug":"导言","link":"#导言","children":[]}],"git":{"createdTime":1710784600000,"updatedTime":1710784600000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":0.23,"words":70},"filePathRelative":"unreal/function[函数]/20-Vector.md","localizedDate":"2024年3月19日","excerpt":"<h3> 导言</h3>\\n\\n\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">template</span><span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">typename</span> <span class=\\"token class-name\\">T</span><span class=\\"token operator\\">&gt;</span>\\nFORCEINLINE T <span class=\\"token class-name\\">TVector</span><span class=\\"token operator\\">&lt;</span>T<span class=\\"token operator\\">&gt;</span><span class=\\"token double-colon punctuation\\">::</span><span class=\\"token function\\">Size</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">const</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token class-name\\">FMath</span><span class=\\"token double-colon punctuation\\">::</span><span class=\\"token function\\">Sqrt</span><span class=\\"token punctuation\\">(</span>X<span class=\\"token operator\\">*</span>X <span class=\\"token operator\\">+</span> Y<span class=\\"token operator\\">*</span>Y <span class=\\"token operator\\">+</span> Z<span class=\\"token operator\\">*</span>Z<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">template</span><span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">typename</span> <span class=\\"token class-name\\">T</span><span class=\\"token operator\\">&gt;</span>\\nFORCEINLINE T <span class=\\"token class-name\\">TVector</span><span class=\\"token operator\\">&lt;</span>T<span class=\\"token operator\\">&gt;</span><span class=\\"token double-colon punctuation\\">::</span><span class=\\"token function\\">Length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">const</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token function\\">Size</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};