const n=JSON.parse('{"key":"v-8db588aa","path":"/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/1-Sington.html","title":"DS1.Singleton|单例","lang":"zh-CN","frontmatter":{"title":"DS1.Singleton|单例","order":1,"category":["c++"],"description":"Singleton|单例 懒汉式（Lazy Initialization） 懒汉式单例模式： 实例创建时机： 懒汉式在第一次被调用时才创建实例，即在需要的时候才进行初始化。 线程安全性： 如果不进行特殊处理，懒汉式可能在多线程环境下引发竞态条件，导致多个线程同时检测到实例为nullptr，然后都尝试创建实例。为了解决这个问题，可以使用双重检查锁定（Double-Checked Locking）或者其他线程安全的机制。 class LazySingleton { private: static LazySingleton* instance; LazySingleton() {} // 私有构造函数 public: static LazySingleton* getInstance() { if (instance == nullptr) { instance = new LazySingleton(); } return instance; } }; // 在cpp文件中初始化静态成员变量 LazySingleton* LazySingleton::instance = nullptr;","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/1-Sington.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"DS1.Singleton|单例"}],["meta",{"property":"og:description","content":"Singleton|单例 懒汉式（Lazy Initialization） 懒汉式单例模式： 实例创建时机： 懒汉式在第一次被调用时才创建实例，即在需要的时候才进行初始化。 线程安全性： 如果不进行特殊处理，懒汉式可能在多线程环境下引发竞态条件，导致多个线程同时检测到实例为nullptr，然后都尝试创建实例。为了解决这个问题，可以使用双重检查锁定（Double-Checked Locking）或者其他线程安全的机制。 class LazySingleton { private: static LazySingleton* instance; LazySingleton() {} // 私有构造函数 public: static LazySingleton* getInstance() { if (instance == nullptr) { instance = new LazySingleton(); } return instance; } }; // 在cpp文件中初始化静态成员变量 LazySingleton* LazySingleton::instance = nullptr;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DS1.Singleton|单例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"Singleton|单例","slug":"singleton-单例","link":"#singleton-单例","children":[]},{"level":3,"title":"懒汉式（Lazy Initialization）","slug":"懒汉式-lazy-initialization","link":"#懒汉式-lazy-initialization","children":[]},{"level":3,"title":"饿汉式（Eager Initialization）","slug":"饿汉式-eager-initialization","link":"#饿汉式-eager-initialization","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":3,"title":"双检锁单例","slug":"双检锁单例","link":"#双检锁单例","children":[]}],"git":{"createdTime":1703391495000,"updatedTime":1704233233000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":2}]},"readingTime":{"minutes":1.9,"words":569},"filePathRelative":"language/cpp/designer[设计模式]/1-Sington.md","localizedDate":"2023年12月24日","excerpt":"<h3> Singleton|单例</h3>\\n\\n<h3> 懒汉式（Lazy Initialization）</h3>\\n<ol>\\n<li>\\n<p><strong>懒汉式单例模式：</strong></p>\\n<ul>\\n<li><strong>实例创建时机：</strong> 懒汉式在第一次被调用时才创建实例，即在需要的时候才进行初始化。</li>\\n<li><strong>线程安全性：</strong> 如果不进行特殊处理，懒汉式可能在多线程环境下引发竞态条件，导致多个线程同时检测到实例为<code>nullptr</code>，然后都尝试创建实例。为了解决这个问题，可以使用双重检查锁定（Double-Checked Locking）或者其他线程安全的机制。</li>\\n</ul>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">LazySingleton</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">private</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">static</span> LazySingleton<span class=\\"token operator\\">*</span> instance<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">LazySingleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>  <span class=\\"token comment\\">// 私有构造函数</span>\\n\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">static</span> LazySingleton<span class=\\"token operator\\">*</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>instance <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">nullptr</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            instance <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token function\\">LazySingleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> instance<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 在cpp文件中初始化静态成员变量</span>\\nLazySingleton<span class=\\"token operator\\">*</span> LazySingleton<span class=\\"token double-colon punctuation\\">::</span>instance <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">nullptr</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","autoDesc":true}');export{n as data};
