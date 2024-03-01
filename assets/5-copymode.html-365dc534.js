const e=JSON.parse('{"key":"v-622a641a","path":"/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/5-copymode.html","title":"c++6.浅拷贝|深拷贝","lang":"zh-CN","frontmatter":{"title":"c++6.浅拷贝|深拷贝","order":6,"category":["c++"],"description":"概念 浅拷贝是对相同数据的共享引用，一个修改会影响到另一个。 而深拷贝是创建一个原始数据的独立副本，修改一个不会影响另一个。 浅拷贝： 定义： 浅拷贝是指对对象进行复制，仅复制对象的值，而不复制对象所指向的内容。 判断： 当类中只包含简单数据类型的成员变量时，进行默认的复制构造函数或赋值操作符重载会产生浅拷贝。 示例： class ShallowCopyExample { public: int* data; ShallowCopyExample(const ShallowCopyExample&amp; other) { data = other.data; // 浅拷贝，只复制指针值，不复制内容 } };","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/5-copymode.html"}],["meta",{"property":"og:site_name","content":"RenderDocZHS"}],["meta",{"property":"og:title","content":"c++6.浅拷贝|深拷贝"}],["meta",{"property":"og:description","content":"概念 浅拷贝是对相同数据的共享引用，一个修改会影响到另一个。 而深拷贝是创建一个原始数据的独立副本，修改一个不会影响另一个。 浅拷贝： 定义： 浅拷贝是指对对象进行复制，仅复制对象的值，而不复制对象所指向的内容。 判断： 当类中只包含简单数据类型的成员变量时，进行默认的复制构造函数或赋值操作符重载会产生浅拷贝。 示例： class ShallowCopyExample { public: int* data; ShallowCopyExample(const ShallowCopyExample&amp; other) { data = other.data; // 浅拷贝，只复制指针值，不复制内容 } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++6.浅拷贝|深拷贝\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"对比","slug":"对比","link":"#对比","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1700738130000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":3},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":2.06,"words":619},"filePathRelative":"language/cpp/BaseGuide[基础概念]/5-copymode.md","localizedDate":"2023年11月23日","excerpt":"\\n<h3> 概念</h3>\\n<p>浅拷贝是对相同数据的共享引用，一个修改会影响到另一个。</p>\\n\\n<p>而深拷贝是创建一个原始数据的独立副本，修改一个不会影响另一个。</p>\\n\\n<h4> 浅拷贝：</h4>\\n<ul>\\n<li>\\n<p><strong>定义：</strong> 浅拷贝是指对对象进行复制，仅复制对象的值，而不复制对象所指向的内容。</p>\\n</li>\\n<li>\\n<p><strong>判断：</strong> 当类中只包含简单数据类型的成员变量时，进行默认的复制构造函数或赋值操作符重载会产生浅拷贝。</p>\\n</li>\\n<li>\\n<p><strong>示例：</strong></p>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ShallowCopyExample</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">int</span><span class=\\"token operator\\">*</span> data<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token function\\">ShallowCopyExample</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">const</span> ShallowCopyExample<span class=\\"token operator\\">&amp;</span> other<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        data <span class=\\"token operator\\">=</span> other<span class=\\"token punctuation\\">.</span>data<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 浅拷贝，只复制指针值，不复制内容</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{e as data};
