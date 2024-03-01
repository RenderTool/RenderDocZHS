const n=JSON.parse('{"key":"v-8f64b8dc","path":"/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/5-Diamond%20Inheritance.html","title":"c++5.virtual-菱形继承|多态","lang":"zh-CN","frontmatter":{"title":"c++5.virtual-菱形继承|多态","order":5,"category":["c++"],"description":"菱形继承 class A { public: int dataA; }; class B : public A { public: int dataB; }; class C : public A { public: int dataC; }; class D : public B, public C { public: int dataD; };","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/5-Diamond%20Inheritance.html"}],["meta",{"property":"og:site_name","content":"RenderDocZHS"}],["meta",{"property":"og:title","content":"c++5.virtual-菱形继承|多态"}],["meta",{"property":"og:description","content":"菱形继承 class A { public: int dataA; }; class B : public A { public: int dataB; }; class C : public A { public: int dataC; }; class D : public B, public C { public: int dataD; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++5.virtual-菱形继承|多态\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"菱形继承","slug":"菱形继承","link":"#菱形继承","children":[{"level":3,"title":"作用域运算符::","slug":"作用域运算符","link":"#作用域运算符","children":[]},{"level":3,"title":"虚继承","slug":"虚继承","link":"#虚继承","children":[]},{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]}]},{"level":2,"title":"多态-虚函数","slug":"多态-虚函数","link":"#多态-虚函数","children":[{"level":3,"title":"编译期：","slug":"编译期","link":"#编译期","children":[]},{"level":3,"title":"链接期：","slug":"链接期","link":"#链接期","children":[]},{"level":3,"title":"关于绑定：","slug":"关于绑定","link":"#关于绑定","children":[]}]},{"level":2,"title":"多态-纯虚函数","slug":"多态-纯虚函数","link":"#多态-纯虚函数","children":[]},{"level":2,"title":"多态总结","slug":"多态总结","link":"#多态总结","children":[{"level":3,"title":"多态分为两类","slug":"多态分为两类","link":"#多态分为两类","children":[]},{"level":3,"title":"静态多态和动态多态区别：","slug":"静态多态和动态多态区别","link":"#静态多态和动态多态区别","children":[]}]},{"level":2,"title":"多态-虚析构|纯虚析构","slug":"多态-虚析构-纯虚析构","link":"#多态-虚析构-纯虚析构","children":[{"level":3,"title":"虚析构函数：","slug":"虚析构函数","link":"#虚析构函数","children":[]},{"level":3,"title":"纯虚析构函数：","slug":"纯虚析构函数","link":"#纯虚析构函数","children":[]}]}],"git":{"createdTime":1703074087000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":13.26,"words":3977},"filePathRelative":"language/cpp/keywords[关键字]/5-Diamond Inheritance.md","localizedDate":"2023年12月20日","excerpt":"\\n<h2> 菱形继承</h2>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">A</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">int</span> dataA<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">B</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">A</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token keyword\\">int</span> dataB<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">C</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">A</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token keyword\\">int</span> dataC<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">D</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">B</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">C</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token keyword\\">int</span> dataD<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
