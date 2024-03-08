import{_ as p,r as o,o as c,c as l,d as s,w as a,e,b as t}from"./app-d070a7fb.js";const i={},u=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">UHttpBlueprintFunctionLibrary</span><span class="token double-colon punctuation">::</span><span class="token function">MakeRequestHeader</span><span class="token punctuation">(</span><span class="token keyword">const</span> TMap<span class="token operator">&lt;</span>FString<span class="token punctuation">,</span> FString<span class="token operator">&gt;</span><span class="token operator">&amp;</span> Headers<span class="token punctuation">,</span> FHttpHeader<span class="token operator">&amp;</span> OutHeader<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	OutHeader <span class="token operator">=</span> FHttpHeader<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">SetHeaders</span><span class="token punctuation">(</span>Headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>OutHeader <span class="token operator">=</span> FHttpHeader<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
OutHeader<span class="token punctuation">.</span><span class="token function">SetHeaders</span><span class="token punctuation">(</span>Headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>FHttpHeader TempHeader<span class="token punctuation">;</span>  <span class="token comment">// 使用默认构造函数创建 FHttpHeader 对象</span>
TempHeader<span class="token punctuation">.</span><span class="token function">SetHeaders</span><span class="token punctuation">(</span>Headers<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 使用 SetHeaders 方法设置对象的属性</span>
OutHeader <span class="token operator">=</span> TempHeader<span class="token punctuation">;</span>  <span class="token comment">// 将 TempHeader 赋值给 OutHeader</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="花括号-初始化-brace-initialization" tabindex="-1"><a class="header-anchor" href="#花括号-初始化-brace-initialization" aria-hidden="true">#</a> 花括号{}初始化（brace initialization）</h2>`,2),k=e(`<ol><li><p><strong>列表初始化</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 列表初始化</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>            <span class="token comment">// x被初始化为5</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> v <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 用三个元素初始化一个数组</span>
<span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 用三个元素初始化一个数组</span>

<span class="token comment">// 传统初始化</span>
<span class="token keyword">int</span> <span class="token function">y</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">// y被初始化为5</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">w</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 用三个元素初始化一个数组，每个元素的值为1</span>
<span class="token keyword">int</span> brr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 用三个元素初始化一个数组</span>

 <span class="token comment">// UE中列表初始化</span>
 FVector Position <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1.0f</span><span class="token punctuation">,</span> <span class="token number">2.0f</span><span class="token punctuation">,</span> <span class="token number">3.0f</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化一个3D向量</span>
 FQuat Rotation <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0.0f</span><span class="token punctuation">,</span> <span class="token number">0.0f</span><span class="token punctuation">,</span> <span class="token number">0.0f</span><span class="token punctuation">,</span> <span class="token number">1.0f</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化一个四元数</span>
 FColor Color <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化一个颜色</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>值初始化</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 值初始化</span>
<span class="token keyword">int</span> x<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>       <span class="token comment">// x被初始化为0</span>
<span class="token keyword">double</span> d<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>    <span class="token comment">// x被初始化为0</span>

<span class="token comment">// 传统初始化</span>
<span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>     <span class="token comment">// y被初始化为0</span>
<span class="token keyword">double</span> z <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// z被初始化为0.0</span>

<span class="token comment">// UE中的值初始化</span>
 int32 IntegerValue<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 初始化为0</span>
 <span class="token keyword">float</span> FloatValue<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>    <span class="token comment">// 初始化为0.0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>空初始化</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 空初始化</span>
std<span class="token double-colon punctuation">::</span>string s<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token comment">// 初始化一个空字符串</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> v<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化一个空容器</span>
<span class="token keyword">char</span> arr<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>        <span class="token comment">// 初始化一个空数组</span>

<span class="token comment">// 传统初始化</span>
std<span class="token double-colon punctuation">::</span>string t<span class="token punctuation">;</span>       <span class="token comment">// 初始化一个空字符串</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> u<span class="token punctuation">;</span>  <span class="token comment">// 初始化一个空容器</span>
<span class="token keyword">char</span> brr<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>        <span class="token comment">// 初始化一个未定义的数组</span>

 <span class="token comment">// UE中的空初始化</span>
 FString EmptyString<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token comment">// 初始化一个空字符串</span>
 TArray<span class="token operator">&lt;</span>int32<span class="token operator">&gt;</span> EmptyArray<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化一个空数组</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>指针的空初始化</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 空初始化</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptr<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>         <span class="token comment">// 将指针初始化为nullptr</span>
std<span class="token double-colon punctuation">::</span>shared_ptr<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> sp<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 将共享指针初始化为nullptr</span>

<span class="token comment">// 传统初始化</span>
<span class="token keyword">int</span><span class="token operator">*</span> qtr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>         <span class="token comment">// 将指针初始化为nullptr</span>
std<span class="token double-colon punctuation">::</span>shared_ptr<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> sqtr<span class="token punctuation">;</span>  <span class="token comment">// 将共享指针初始化为空指针</span>

<span class="token comment">// UE中的指针的空初始化</span>
 UObject<span class="token operator">*</span> MyObjectPtr<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>         <span class="token comment">// 将UE对象指针初始化为nullptr</span>
 TSharedPtr<span class="token operator">&lt;</span>UObject<span class="token operator">&gt;</span> SharedPtr<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 将UE共享指针初始化为nullptr</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><ul><li><strong>简洁性：</strong> 使用花括号初始化可以在一行代码中完成对象的创建和初始化操作，使代码更加简洁。</li><li><strong>避免窄化转换：</strong> 花括号初始化限制了窄化转换，提高了代码的类型安全性。</li><li><strong>可读性：</strong> 这种写法直观地表达了对象的创建和初始化顺序，提高了代码的可读性。</li></ul>`,2),m=e(`<h2 id="窄化转换" tabindex="-1"><a class="header-anchor" href="#窄化转换" aria-hidden="true">#</a> 窄化转换</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> integerNumber <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> doubleNumber <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

<span class="token comment">// 将 doubleNumber 转换为 int，存在可能的精度丢失</span>
integerNumber <span class="token operator">=</span> doubleNumber<span class="token punctuation">;</span>  <span class="token comment">// 编译器可能会产生警告或错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，将 <code>doubleNumber</code>（双精度浮点数）赋值给 <code>integerNumber</code>（整数）。这是一种窄化转换，因为浮点数的范围可能比整数大，将其赋值给整数可能导致精度丢失。</p><p>在花括号初始化的语法中，窄化转换是禁止的。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> integerNumber <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> doubleNumber <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

<span class="token comment">// 花括号初始化，避免窄化转换</span>
integerNumber <span class="token operator">=</span> <span class="token punctuation">{</span>doubleNumber<span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 编译器将禁止这种窄化转换</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,6),v=e(`<h2 id="二义性" tabindex="-1"><a class="header-anchor" href="#二义性" aria-hidden="true">#</a> 二义性</h2><p>二义性（ambiguity）指的是某个语句或表达式有多个解释或解决方案，但编译器无法确定应该选择哪一个的情况。这可能会导致编译错误。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">printValue</span><span class="token punctuation">(</span><span class="token keyword">float</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Printing float: &quot;</span> <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">printValue</span><span class="token punctuation">(</span><span class="token keyword">double</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Printing double: &quot;</span> <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printValue</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 编译器不清楚要调用哪个版本，因为传入了一个int，但我们函数版本中他不清楚要转换成哪种。</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(g,h){const n=o("chatmessage");return c(),l("div",null,[s(n,{avatar:"../../../assets/emoji/bqb (5).png",avatarWidth:40},{default:a(()=>[t(" Baba!我阅读UEHttp插件时有段代码我不太理解! ")]),_:1}),u,s(n,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:a(()=>[t(" FHttpHeader是个结构体,为什么这里没初始化就可以直接调用成员函数SetHeaders(Headers)? ")]),_:1}),s(n,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:a(()=>[t(" 看来你学的C++教程有点老啊,这里用了{}匿名初始化了FHttpHeader,如果我写成这样你是不是能看懂? ")]),_:1}),r,s(n,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:a(()=>[t(" 然后再进一步翻译一下: ")]),_:1}),d,s(n,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:a(()=>[t(" C++11及以后的标准中被引入，允许使用花括号 {} 直接初始化对象并调用其成员函数。花括号{}语法在不同语境下有不同的用法: ")]),_:1}),k,s(n,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40,alignLeft:""},{default:a(()=>[t(" 要注意确保目标类型支持这种初始化形式，而且没有引起二义性或其他问题。 ")]),_:1}),s(n,{avatar:"../../../assets/emoji/bqb (5).png",avatarWidth:40},{default:a(()=>[t(" 什么叫避免窄化转换? ")]),_:1}),s(n,{avatar:"../../../assets/emoji/bqb (5).png",avatarWidth:40},{default:a(()=>[t(" 什么叫二义性?字我都认识,就是不明白意思. ")]),_:1}),s(n,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:a(()=>[t(" 窄化转换（narrowing conversion）是指在将一种数据类型转换为另一种数据类型时，可能会导致数据的精度丢失或不安全的情况。 ")]),_:1}),m,s(n,{avatar:"../../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:a(()=>[t(" 至于二义性,你小子基础不牢靠啊!早在函数重载的时候就提到过了. ")]),_:1}),v])}const f=p(i,[["render",b],["__file","4-function brace initialization.html.vue"]]);export{f as default};