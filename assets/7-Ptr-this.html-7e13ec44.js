const e=JSON.parse('{"key":"v-26ee6f20","path":"/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/7-Ptr-this.html","title":"c++this指针","lang":"zh-CN","frontmatter":{"title":"c++this指针","order":7,"category":["c++"],"description":"区分同名变量： 如果成员函数中存在与成员变量同名的局部变量或参数，那么在没有 this 指针的情况下，无法直接访问成员变量。this 指针允许明确指定使用对象的成员。 // 使用this指针 class MyClassWithThis { private: int value; public: void setValue(int value) { // 使用this指针区分成员变量和局部变量 this-&gt;value = value; } };","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/7-Ptr-this.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"c++this指针"}],["meta",{"property":"og:description","content":"区分同名变量： 如果成员函数中存在与成员变量同名的局部变量或参数，那么在没有 this 指针的情况下，无法直接访问成员变量。this 指针允许明确指定使用对象的成员。 // 使用this指针 class MyClassWithThis { private: int value; public: void setValue(int value) { // 使用this指针区分成员变量和局部变量 this-&gt;value = value; } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++this指针\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[],"git":{"createdTime":1701724009000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":5.83,"words":1750},"filePathRelative":"language/cpp/BaseGuide[基础概念]/ptr[指针]/7-Ptr-this.md","localizedDate":"2023年12月5日","excerpt":"\\n\\n\\n\\n<ol>\\n<li><strong>区分同名变量：</strong> 如果成员函数中存在与成员变量同名的局部变量或参数，那么在没有 <code>this</code> 指针的情况下，无法直接访问成员变量。<code>this</code> 指针允许明确指定使用对象的成员。</li>\\n</ol>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token comment\\">// 使用this指针</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">MyClassWithThis</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">private</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">int</span> value<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setValue</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> value<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 使用this指针区分成员变量和局部变量</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token operator\\">-&gt;</span>value <span class=\\"token operator\\">=</span> value<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};