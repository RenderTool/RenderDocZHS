const e=JSON.parse('{"key":"v-347c1406","path":"/unreal/core_%E6%A0%B8%E5%BF%83_/6-Delegate.html","title":"c6.Delegate|委托","lang":"zh-CN","frontmatter":{"title":"c6.Delegate|委托","order":600,"category":["u++"],"description":"委托|Delegate 泛型但类型安全的方式： 委托是一种泛型但类型安全的机制，允许在运行时动态绑定到对象的成员函数。这意味着你可以在不知道对象类型的情况下，安全地调用其成员函数。 动态绑定到任意对象的成员函数： 委托允许你动态地绑定到任意对象的成员函数。这种灵活性使得在运行时能够决定要调用的函数，而不需要在编译时就确定。 安全地复制委托对象： 复制委托对象是安全的。这意味着你可以创建一个委托的副本，而不会影响原始委托的状态。每个委托对象都独立于其他委托对象。 值传递委托需要在堆上分配内存： 值传递委托，即通过值传递委托对象，需要在堆上分配内存。这样的操作相对较慢，因此通常不推荐。最好通过引用传递委托，以避免额外的内存分配。 尽量通过引用传递委托： 为了避免性能开销，推荐通过引用传递委托，而不是通过值传递。这样可以避免在堆上分配内存，提高代码执行效率。","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/unreal/core_%E6%A0%B8%E5%BF%83_/6-Delegate.html"}],["meta",{"property":"og:site_name","content":"RenderDocZHS"}],["meta",{"property":"og:title","content":"c6.Delegate|委托"}],["meta",{"property":"og:description","content":"委托|Delegate 泛型但类型安全的方式： 委托是一种泛型但类型安全的机制，允许在运行时动态绑定到对象的成员函数。这意味着你可以在不知道对象类型的情况下，安全地调用其成员函数。 动态绑定到任意对象的成员函数： 委托允许你动态地绑定到任意对象的成员函数。这种灵活性使得在运行时能够决定要调用的函数，而不需要在编译时就确定。 安全地复制委托对象： 复制委托对象是安全的。这意味着你可以创建一个委托的副本，而不会影响原始委托的状态。每个委托对象都独立于其他委托对象。 值传递委托需要在堆上分配内存： 值传递委托，即通过值传递委托对象，需要在堆上分配内存。这样的操作相对较慢，因此通常不推荐。最好通过引用传递委托，以避免额外的内存分配。 尽量通过引用传递委托： 为了避免性能开销，推荐通过引用传递委托，而不是通过值传递。这样可以避免在堆上分配内存，提高代码执行效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-03T18:34:11.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-03T18:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c6.Delegate|委托\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-03T18:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"委托|Delegate","slug":"委托-delegate","link":"#委托-delegate","children":[]},{"level":2,"title":"源码一览","slug":"源码一览","link":"#源码一览","children":[{"level":3,"title":"委托类型","slug":"委托类型","link":"#委托类型","children":[]},{"level":3,"title":"委托宏声明","slug":"委托宏声明","link":"#委托宏声明","children":[]},{"level":3,"title":"委托绑定函数","slug":"委托绑定函数","link":"#委托绑定函数","children":[]}]}],"git":{"createdTime":1704306851000,"updatedTime":1704306851000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":14.9,"words":4471},"filePathRelative":"unreal/core[核心]/6-Delegate.md","localizedDate":"2024年1月4日","excerpt":"<h2> 委托|Delegate</h2>\\n\\n\\n<figure><figcaption></figcaption></figure>\\n\\n\\n<ol>\\n<li>\\n<p><strong>泛型但类型安全的方式：</strong></p>\\n<ul>\\n<li>委托是一种泛型但类型安全的机制，允许在运行时动态绑定到对象的成员函数。这意味着你可以在不知道对象类型的情况下，安全地调用其成员函数。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>动态绑定到任意对象的成员函数：</strong></p>\\n<ul>\\n<li>委托允许你动态地绑定到任意对象的成员函数。这种灵活性使得在运行时能够决定要调用的函数，而不需要在编译时就确定。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>安全地复制委托对象：</strong></p>\\n<ul>\\n<li>复制委托对象是安全的。这意味着你可以创建一个委托的副本，而不会影响原始委托的状态。每个委托对象都独立于其他委托对象。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>值传递委托需要在堆上分配内存：</strong></p>\\n<ul>\\n<li>值传递委托，即通过值传递委托对象，需要在堆上分配内存。这样的操作相对较慢，因此通常不推荐。最好通过引用传递委托，以避免额外的内存分配。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>尽量通过引用传递委托：</strong></p>\\n<ul>\\n<li>为了避免性能开销，推荐通过引用传递委托，而不是通过值传递。这样可以避免在堆上分配内存，提高代码执行效率。</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
