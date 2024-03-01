const n=JSON.parse('{"key":"v-51adada9","path":"/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/1-insidePtr.html","title":"c++指针是什么？","lang":"zh-CN","frontmatter":{"title":"c++指针是什么？","order":2,"category":["c++"],"description":"inside指针 概念 语法：type* var_name; 指针是个存储地址的变量： 指针是一种特殊类型的变量，它存储的是内存地址，这个地址指向存储器中的某个数据。 指针有两大能力： 指针有修改指向（某个变量）的值的能力： 通过指针，你可以访问和修改所指向内存地址上的数据。例如，如果有一个指向整数的指针，你可以通过解引用操作符 * 来获取或修改该整数的值。 int num = 42; int* ptr = &amp;num; *ptr = 100; // 修改了ptr指向的地址上的值，即修改了num的值 指针是个变量有修改本身指向地址的能力： 你可以改变指针本身存储的地址，使其指向不同的内存位置。这是通过给指针赋予一个新的地址来实现的。 int num1 = 42; int num2 = 100; int* ptr = &amp;num1; // ptr指向num1的地址 ptr = &amp;num2; // 修改了ptr本身存储的地址，使其指向num2的地址","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/1-insidePtr.html"}],["meta",{"property":"og:site_name","content":"RenderDocZHS"}],["meta",{"property":"og:title","content":"c++指针是什么？"}],["meta",{"property":"og:description","content":"inside指针 概念 语法：type* var_name; 指针是个存储地址的变量： 指针是一种特殊类型的变量，它存储的是内存地址，这个地址指向存储器中的某个数据。 指针有两大能力： 指针有修改指向（某个变量）的值的能力： 通过指针，你可以访问和修改所指向内存地址上的数据。例如，如果有一个指向整数的指针，你可以通过解引用操作符 * 来获取或修改该整数的值。 int num = 42; int* ptr = &amp;num; *ptr = 100; // 修改了ptr指向的地址上的值，即修改了num的值 指针是个变量有修改本身指向地址的能力： 你可以改变指针本身存储的地址，使其指向不同的内存位置。这是通过给指针赋予一个新的地址来实现的。 int num1 = 42; int num2 = 100; int* ptr = &amp;num1; // ptr指向num1的地址 ptr = &amp;num2; // 修改了ptr本身存储的地址，使其指向num2的地址"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++指针是什么？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"inside指针","slug":"inside指针","link":"#inside指针","children":[]},{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[{"level":3,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":3,"title":"解析","slug":"解析","link":"#解析","children":[]}]}],"git":{"createdTime":1700738130000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":775},"filePathRelative":"language/cpp/BaseGuide[基础概念]/ptr[指针]/1-insidePtr.md","localizedDate":"2023年11月23日","excerpt":"<h2> inside指针</h2>\\n\\n\\n<h2> 概念</h2>\\n<p>语法：type* var_name;</p>\\n<figure><figcaption></figcaption></figure>\\n<ol>\\n<li><strong>指针是个存储地址的变量：</strong></li>\\n</ol>\\n<p>指针是一种特殊类型的变量，它存储的是内存地址，这个地址指向存储器中的某个数据。</p>\\n<ol start=\\"2\\">\\n<li>\\n<p><strong>指针有两大能力：</strong></p>\\n<ul>\\n<li><strong>指针有修改指向（某个变量）的值的能力：</strong>\\n通过指针，你可以访问和修改所指向内存地址上的数据。例如，如果有一个指向整数的指针，你可以通过解引用操作符 <code>*</code> 来获取或修改该整数的值。</li>\\n</ul>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">int</span> num <span class=\\"token operator\\">=</span> <span class=\\"token number\\">42</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">int</span><span class=\\"token operator\\">*</span> ptr <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>num<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">*</span>ptr <span class=\\"token operator\\">=</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 修改了ptr指向的地址上的值，即修改了num的值</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><ul>\\n<li><strong>指针是个变量有修改本身指向地址的能力：</strong>\\n你可以改变指针本身存储的地址，使其指向不同的内存位置。这是通过给指针赋予一个新的地址来实现的。</li>\\n</ul>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">int</span> num1 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">42</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">int</span> num2 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">int</span><span class=\\"token operator\\">*</span> ptr <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>num1<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// ptr指向num1的地址</span>\\nptr <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>num2<span class=\\"token punctuation\\">;</span>       <span class=\\"token comment\\">// 修改了ptr本身存储的地址，使其指向num2的地址</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","autoDesc":true}');export{n as data};
