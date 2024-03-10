const n=JSON.parse('{"key":"v-070726ff","path":"/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/3-FactoryPattern.html","title":"DS3.FactoryPattern|工厂模式","lang":"zh-CN","frontmatter":{"title":"DS3.FactoryPattern|工厂模式","order":3,"category":["c++"],"description":"FactoryPattern 工厂方法模式（Factory Method Pattern）： 定义： 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。 组成部分： 抽象产品类（Abstract Product）： 声明了产品的接口。 具体产品类（Concrete Product）： 实现了抽象产品接口的具体类。 抽象工厂类（Creator）： 声明了一个创建产品对象的工厂方法，可以包含一些默认的实现。 具体工厂类（Concrete Creator）： 实现了抽象工厂类，实际负责创建产品的具体工厂。 示例代码： class Product { public: virtual void operate() = 0; }; class ConcreteProductA : public Product { public: void operate() override { // 具体产品 A 的操作 } }; class ConcreteProductB : public Product { public: void operate() override { // 具体产品 B 的操作 } }; class Creator { public: virtual Product* createProduct() = 0; }; class ConcreteCreatorA : public Creator { public: Product* createProduct() override { return new ConcreteProductA(); } }; class ConcreteCreatorB : public Creator { public: Product* createProduct() override { return new ConcreteProductB(); } };","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/3-FactoryPattern.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"DS3.FactoryPattern|工厂模式"}],["meta",{"property":"og:description","content":"FactoryPattern 工厂方法模式（Factory Method Pattern）： 定义： 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。 组成部分： 抽象产品类（Abstract Product）： 声明了产品的接口。 具体产品类（Concrete Product）： 实现了抽象产品接口的具体类。 抽象工厂类（Creator）： 声明了一个创建产品对象的工厂方法，可以包含一些默认的实现。 具体工厂类（Concrete Creator）： 实现了抽象工厂类，实际负责创建产品的具体工厂。 示例代码： class Product { public: virtual void operate() = 0; }; class ConcreteProductA : public Product { public: void operate() override { // 具体产品 A 的操作 } }; class ConcreteProductB : public Product { public: void operate() override { // 具体产品 B 的操作 } }; class Creator { public: virtual Product* createProduct() = 0; }; class ConcreteCreatorA : public Creator { public: Product* createProduct() override { return new ConcreteProductA(); } }; class ConcreteCreatorB : public Creator { public: Product* createProduct() override { return new ConcreteProductB(); } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DS3.FactoryPattern|工厂模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"FactoryPattern","slug":"factorypattern","link":"#factorypattern","children":[]},{"level":3,"title":"工厂方法模式（Factory Method Pattern）：","slug":"工厂方法模式-factory-method-pattern","link":"#工厂方法模式-factory-method-pattern","children":[]},{"level":3,"title":"抽象工厂模式（Abstract Factory Pattern）：","slug":"抽象工厂模式-abstract-factory-pattern","link":"#抽象工厂模式-abstract-factory-pattern","children":[]},{"level":3,"title":"区别：","slug":"区别","link":"#区别","children":[]},{"level":3,"title":"依赖倒置","slug":"依赖倒置","link":"#依赖倒置","children":[]}],"git":{"createdTime":1703391495000,"updatedTime":1704233233000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":2}]},"readingTime":{"minutes":3.79,"words":1138},"filePathRelative":"language/cpp/designer[设计模式]/3-FactoryPattern.md","localizedDate":"2023年12月24日","excerpt":"<h3> FactoryPattern</h3>\\n\\n<h3> 工厂方法模式（Factory Method Pattern）：</h3>\\n<ol>\\n<li>\\n<p><strong>定义：</strong> 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。</p>\\n</li>\\n<li>\\n<p><strong>组成部分：</strong></p>\\n<ul>\\n<li><strong>抽象产品类（Abstract Product）：</strong> 声明了产品的接口。</li>\\n<li><strong>具体产品类（Concrete Product）：</strong> 实现了抽象产品接口的具体类。</li>\\n<li><strong>抽象工厂类（Creator）：</strong> 声明了一个创建产品对象的工厂方法，可以包含一些默认的实现。</li>\\n<li><strong>具体工厂类（Concrete Creator）：</strong> 实现了抽象工厂类，实际负责创建产品的具体工厂。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>示例代码：</strong></p>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Product</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">virtual</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">operate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteProductA</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Product</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">operate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 具体产品 A 的操作</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteProductB</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Product</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">operate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 具体产品 B 的操作</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Creator</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">virtual</span> Product<span class=\\"token operator\\">*</span> <span class=\\"token function\\">createProduct</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteCreatorA</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Creator</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    Product<span class=\\"token operator\\">*</span> <span class=\\"token function\\">createProduct</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token function\\">ConcreteProductA</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteCreatorB</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Creator</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    Product<span class=\\"token operator\\">*</span> <span class=\\"token function\\">createProduct</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token function\\">ConcreteProductB</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","autoDesc":true}');export{n as data};
