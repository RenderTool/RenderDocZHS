const e=JSON.parse('{"key":"v-7f051d34","path":"/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/4-function%20brace%20initialization.html","title":"c++4.函数花括号初始化","lang":"zh-CN","frontmatter":{"title":"c++4.函数花括号初始化","order":4,"category":["c++"],"description":"void UHttpBlueprintFunctionLibrary::MakeRequestHeader(const TMap&lt;FString, FString&gt;&amp; Headers, FHttpHeader&amp; OutHeader) { \\tOutHeader = FHttpHeader{}.SetHeaders(Headers); }","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/4-function%20brace%20initialization.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"c++4.函数花括号初始化"}],["meta",{"property":"og:description","content":"void UHttpBlueprintFunctionLibrary::MakeRequestHeader(const TMap&lt;FString, FString&gt;&amp; Headers, FHttpHeader&amp; OutHeader) { \\tOutHeader = FHttpHeader{}.SetHeaders(Headers); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++4.函数花括号初始化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"花括号{}初始化（brace initialization）","slug":"花括号-初始化-brace-initialization","link":"#花括号-初始化-brace-initialization","children":[]},{"level":2,"title":"窄化转换","slug":"窄化转换","link":"#窄化转换","children":[]},{"level":2,"title":"二义性","slug":"二义性","link":"#二义性","children":[]}],"git":{"createdTime":1701893836000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":4.44,"words":1333},"filePathRelative":"language/cpp/BaseGuide[基础概念]/4-function brace initialization.md","localizedDate":"2023年12月7日","excerpt":"\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">void</span> <span class=\\"token class-name\\">UHttpBlueprintFunctionLibrary</span><span class=\\"token double-colon punctuation\\">::</span><span class=\\"token function\\">MakeRequestHeader</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">const</span> TMap<span class=\\"token operator\\">&lt;</span>FString<span class=\\"token punctuation\\">,</span> FString<span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&amp;</span> Headers<span class=\\"token punctuation\\">,</span> FHttpHeader<span class=\\"token operator\\">&amp;</span> OutHeader<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\tOutHeader <span class=\\"token operator\\">=</span> FHttpHeader<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetHeaders</span><span class=\\"token punctuation\\">(</span>Headers<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
