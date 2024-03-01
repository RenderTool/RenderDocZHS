const a=JSON.parse('{"key":"v-0c3c87db","path":"/unreal/exp_%E7%BB%8F%E9%AA%8C_/3-Blueprint2CPP-1.html","title":"EXP3.C++控制蓝图节点输入输出","lang":"zh-CN","frontmatter":{"title":"EXP3.C++控制蓝图节点输入输出","order":3,"category":["u++"],"description":"实践 1. 新建一个蓝图函数库类 2. Const控制 \\tUFUNCTION(BlueprintCallable, Category =\\"TEST\\",meta = ( tooltip = \\"值传递\\")) \\tstatic void PassbyValue(TArray&lt;ACameraActor*&gt;Camera, int32 test); \\t \\tUFUNCTION(BlueprintCallable, Category =\\"TEST\\",meta = ( tooltip = \\"值引用\\")) \\tstatic void PassbyConstReference(const TArray&lt;ACameraActor*&gt;&amp; Camera, const int32 test); \\t \\tUFUNCTION(BlueprintCallable, Category =\\"TEST\\",meta = ( tooltip = \\"const修饰的值引用\\")) \\tstatic void PassbyReference(TArray&lt;ACameraActor*&gt;&amp; Camera,int32 &amp;test);","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/unreal/exp_%E7%BB%8F%E9%AA%8C_/3-Blueprint2CPP-1.html"}],["meta",{"property":"og:site_name","content":"RenderDocZHS"}],["meta",{"property":"og:title","content":"EXP3.C++控制蓝图节点输入输出"}],["meta",{"property":"og:description","content":"实践 1. 新建一个蓝图函数库类 2. Const控制 \\tUFUNCTION(BlueprintCallable, Category =\\"TEST\\",meta = ( tooltip = \\"值传递\\")) \\tstatic void PassbyValue(TArray&lt;ACameraActor*&gt;Camera, int32 test); \\t \\tUFUNCTION(BlueprintCallable, Category =\\"TEST\\",meta = ( tooltip = \\"值引用\\")) \\tstatic void PassbyConstReference(const TArray&lt;ACameraActor*&gt;&amp; Camera, const int32 test); \\t \\tUFUNCTION(BlueprintCallable, Category =\\"TEST\\",meta = ( tooltip = \\"const修饰的值引用\\")) \\tstatic void PassbyReference(TArray&lt;ACameraActor*&gt;&amp; Camera,int32 &amp;test);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EXP3.C++控制蓝图节点输入输出\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"实践","slug":"实践","link":"#实践","children":[{"level":3,"title":"1. 新建一个蓝图函数库类","slug":"_1-新建一个蓝图函数库类","link":"#_1-新建一个蓝图函数库类","children":[]},{"level":3,"title":"2. Const控制","slug":"_2-const控制","link":"#_2-const控制","children":[]},{"level":3,"title":"3. UPARAM(ref)","slug":"_3-uparam-ref","link":"#_3-uparam-ref","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"蓝图中数组只能用引用传递。","slug":"蓝图中数组只能用引用传递。","link":"#蓝图中数组只能用引用传递。","children":[]}]}],"git":{"createdTime":1701100984000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":4},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":0.64,"words":192},"filePathRelative":"unreal/exp[经验]/3-Blueprint2CPP-1.md","localizedDate":"2023年11月28日","excerpt":"\\n<h2> 实践</h2>\\n<h3> 1. 新建一个蓝图函数库类</h3>\\n\\n<figure><figcaption></figcaption></figure>\\n<h3> 2. Const控制</h3>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code>\\t<span class=\\"token function\\">UFUNCTION</span><span class=\\"token punctuation\\">(</span>BlueprintCallable<span class=\\"token punctuation\\">,</span> Category <span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"TEST\\"</span><span class=\\"token punctuation\\">,</span>meta <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span> tooltip <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"值传递\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">PassbyValue</span><span class=\\"token punctuation\\">(</span>TArray<span class=\\"token operator\\">&lt;</span>ACameraActor<span class=\\"token operator\\">*</span><span class=\\"token operator\\">&gt;</span>Camera<span class=\\"token punctuation\\">,</span> int32 test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token function\\">UFUNCTION</span><span class=\\"token punctuation\\">(</span>BlueprintCallable<span class=\\"token punctuation\\">,</span> Category <span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"TEST\\"</span><span class=\\"token punctuation\\">,</span>meta <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span> tooltip <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"值引用\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">PassbyConstReference</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">const</span> TArray<span class=\\"token operator\\">&lt;</span>ACameraActor<span class=\\"token operator\\">*</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&amp;</span> Camera<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">const</span> int32 test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token function\\">UFUNCTION</span><span class=\\"token punctuation\\">(</span>BlueprintCallable<span class=\\"token punctuation\\">,</span> Category <span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"TEST\\"</span><span class=\\"token punctuation\\">,</span>meta <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span> tooltip <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"const修饰的值引用\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    \\t<span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">PassbyReference</span><span class=\\"token punctuation\\">(</span>TArray<span class=\\"token operator\\">&lt;</span>ACameraActor<span class=\\"token operator\\">*</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&amp;</span> Camera<span class=\\"token punctuation\\">,</span>int32 <span class=\\"token operator\\">&amp;</span>test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};
