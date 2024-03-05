const e=JSON.parse('{"key":"v-0dc2bc3e","path":"/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/1-Namespace%20scope.html","title":"c++1.Namespace作用域","lang":"zh-CN","frontmatter":{"title":"c++1.Namespace作用域","order":1,"category":["c++"],"description":"每个命名空间定义引入一个作用范围，包含该命名空间的所有内容。 重新声明或特化的部分也在该范围内。 全局作用域是整个程序的作用范围。 namespace Q { namespace V { void f(); } void V::f() { // in the scope of V } }","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/1-Namespace%20scope.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"c++1.Namespace作用域"}],["meta",{"property":"og:description","content":"每个命名空间定义引入一个作用范围，包含该命名空间的所有内容。 重新声明或特化的部分也在该范围内。 全局作用域是整个程序的作用范围。 namespace Q { namespace V { void f(); } void V::f() { // in the scope of V } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++1.Namespace作用域\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[],"git":{"createdTime":1701724009000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"language/cpp/new[新特性]/1-Namespace scope.md","localizedDate":"2023年12月5日","excerpt":"\\n<ol>\\n<li>\\n<p>每个命名空间定义引入一个作用范围，包含该命名空间的所有内容。</p>\\n</li>\\n<li>\\n<p>重新声明或特化的部分也在该范围内。</p>\\n</li>\\n<li>\\n<p>全局作用域是整个程序的作用范围。</p>\\n</li>\\n</ol>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">namespace</span> Q <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">namespace</span> V <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">f</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">void</span> <span class=\\"token class-name\\">V</span><span class=\\"token double-colon punctuation\\">::</span><span class=\\"token function\\">f</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>         <span class=\\"token comment\\">// in the scope of V</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};