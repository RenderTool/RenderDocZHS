const o=JSON.parse('{"key":"v-191531e6","path":"/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/9-Big%20Four.html","title":"c++9.Big Four","lang":"zh-CN","frontmatter":{"title":"c++9.Big Four","order":9,"category":["c++"],"description":"默认构造函数 (Default Constructor): 如果你没有为类定义任何构造函数，编译器将生成一个无参的默认构造函数。它用于创建对象时的初始化，例如 MyClass obj;。 析构函数 (Destructor): 如果你没有显式定义析构函数，编译器将生成一个默认的析构函数。它用于在对象生命周期结束时进行清理工作，例如释放动态分配的资源。析构函数的名称是类名前加上波浪号 ~，如 ~MyClass()。 拷贝构造函数 (Copy Constructor): 如果你没有定义自己的拷贝构造函数，编译器将生成一个默认的拷贝构造函数。它用于通过复制另一个对象来初始化一个新对象，例如 MyClass obj1; MyClass obj2 = obj1;。 拷贝赋值运算符 (Copy Assignment Operator): 如果你没有定义自己的拷贝赋值运算符，编译器将生成一个默认的拷贝赋值运算符。它用于将一个对象的值复制给另一个对象，例如 MyClass obj1, obj2; obj2 = obj1;。","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/9-Big%20Four.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"c++9.Big Four"}],["meta",{"property":"og:description","content":"默认构造函数 (Default Constructor): 如果你没有为类定义任何构造函数，编译器将生成一个无参的默认构造函数。它用于创建对象时的初始化，例如 MyClass obj;。 析构函数 (Destructor): 如果你没有显式定义析构函数，编译器将生成一个默认的析构函数。它用于在对象生命周期结束时进行清理工作，例如释放动态分配的资源。析构函数的名称是类名前加上波浪号 ~，如 ~MyClass()。 拷贝构造函数 (Copy Constructor): 如果你没有定义自己的拷贝构造函数，编译器将生成一个默认的拷贝构造函数。它用于通过复制另一个对象来初始化一个新对象，例如 MyClass obj1; MyClass obj2 = obj1;。 拷贝赋值运算符 (Copy Assignment Operator): 如果你没有定义自己的拷贝赋值运算符，编译器将生成一个默认的拷贝赋值运算符。它用于将一个对象的值复制给另一个对象，例如 MyClass obj1, obj2; obj2 = obj1;。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++9.Big Four\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[],"git":{"createdTime":1701724009000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":2},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":2.03,"words":609},"filePathRelative":"language/cpp/BaseGuide[基础概念]/9-Big Four.md","localizedDate":"2023年12月5日","excerpt":"\\n<ol>\\n<li>\\n<p><strong>默认构造函数 (Default Constructor):</strong> 如果你没有为类定义任何构造函数，编译器将生成一个无参的默认构造函数。它用于创建对象时的初始化，例如 <code>MyClass obj;</code>。</p>\\n</li>\\n<li>\\n<p><strong>析构函数 (Destructor):</strong> 如果你没有显式定义析构函数，编译器将生成一个默认的析构函数。它用于在对象生命周期结束时进行清理工作，例如释放动态分配的资源。析构函数的名称是类名前加上波浪号 <code>~</code>，如 <code>~MyClass()</code>。</p>\\n</li>\\n<li>\\n<p><strong>拷贝构造函数 (Copy Constructor):</strong> 如果你没有定义自己的拷贝构造函数，编译器将生成一个默认的拷贝构造函数。它用于通过复制另一个对象来初始化一个新对象，例如 <code>MyClass obj1; MyClass obj2 = obj1;</code>。</p>\\n</li>\\n<li>\\n<p><strong>拷贝赋值运算符 (Copy Assignment Operator):</strong> 如果你没有定义自己的拷贝赋值运算符，编译器将生成一个默认的拷贝赋值运算符。它用于将一个对象的值复制给另一个对象，例如 <code>MyClass obj1, obj2; obj2 = obj1;</code>。</p>\\n</li>\\n</ol>","autoDesc":true}');export{o as data};
