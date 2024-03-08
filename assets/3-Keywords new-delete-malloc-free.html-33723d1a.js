import{_ as c,r as t,o as l,c as d,d as n,w as a,e as o,b as s}from"./app-d070a7fb.js";const p={},i=o(`<h3 id="new-和-delete-c-中使用" tabindex="-1"><a class="header-anchor" href="#new-和-delete-c-中使用" aria-hidden="true">#</a> <code>new</code> 和 <code>delete</code>（C++ 中使用）</h3><ol><li><p><strong><code>new</code>：</strong></p><ul><li><p><code>new</code> 是 C++ 中的关键字，用于在堆上动态分配内存，并返回分配的内存的地址。<code>new</code> 还会调用对象的构造函数，用于在分配的内存中创建对象。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span><span class="token operator">*</span> myInt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">;</span>  <span class="token comment">// 动态分配一个 int</span>
<span class="token keyword">int</span><span class="token operator">*</span> myArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 动态分配一个 int 数组</span>
MyClass<span class="token operator">*</span> myObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 动态分配一个 MyClass 对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong><code>delete</code>：</strong></p><ul><li><p><code>delete</code> 用于释放使用 <code>new</code> 分配的内存，同时调用对象的析构函数以进行清理。如果忘记使用 <code>delete</code>，可能导致内存泄漏。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">delete</span> myInt<span class="token punctuation">;</span>      <span class="token comment">// 释放动态分配的 int</span>
<span class="token keyword">delete</span> myObject<span class="token punctuation">;</span>   <span class="token comment">// 释放动态分配的 MyClass 对象</span>
<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> myArray<span class="token punctuation">;</span>  <span class="token comment">// 数组的delete格式比较特殊</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h3 id="malloc-和-free-c-中使用" tabindex="-1"><a class="header-anchor" href="#malloc-和-free-c-中使用" aria-hidden="true">#</a> <code>malloc</code> 和 <code>free</code>（C 中使用）</h3><ol><li><p><strong><code>malloc</code>：</strong></p><ul><li><p><code>malloc</code> 是 C 语言中的函数，用于在堆上分配一块指定大小的内存。它返回一个 <code>void*</code> 指针，需要进行类型转换。<code>malloc</code> 不会调用对象的构造函数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> myInt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 动态分配一个 int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p><strong><code>free</code>：</strong></p><ul><li><p><code>free</code> 用于释放使用 <code>malloc</code> 分配的内存。与 <code>delete</code> 不同，<code>free</code> 不会调用对象的析构函数。如果忘记使用 <code>free</code>，可能导致内存泄漏。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">free</span><span class="token punctuation">(</span>myInt<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 释放动态分配的 int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ol><h3 id="区别和注意事项" tabindex="-1"><a class="header-anchor" href="#区别和注意事项" aria-hidden="true">#</a> 区别和注意事项：</h3><ul><li><strong>语法：</strong> <code>new</code> 和 <code>delete</code> 是 C++ 中的关键字，而 <code>malloc</code> 和 <code>free</code> 是 C 语言中的函数。</li><li><strong>类型安全：</strong> <code>new</code> 和 <code>delete</code> 是类型安全的，它们会自动处理对象的构造和析构。<code>malloc</code> 和 <code>free</code> 不是类型安全的，需要手动进行类型转换，而且不会调用对象的构造和析构。</li><li><strong>操作对象：</strong> <code>new</code> 和 <code>delete</code> 通常用于动态分配和释放对象，而 <code>malloc</code> 和 <code>free</code> 可以用于分配和释放任意大小的内存块。</li><li><strong>内存泄漏：</strong> 在使用 <code>malloc</code> 和 <code>free</code> 时，需要手动管理内存，容易导致忘记释放，从而产生内存泄漏。使用 <code>new</code> 和 <code>delete</code> 可以更容易地避免这类问题。</li></ul><p>在 C++ 中，通常建议使用 <code>new</code> 和 <code>delete</code> 进行动态内存管理，因为它们更符合 C++ 对象模型，并提供了更多的类型安全和便利性。</p>`,7),r=o("<ol><li><p><strong>Code Segment (代码区):</strong></p><ul><li>也称为 Text Segment，存放可执行程序的机器码。这是包含实际可执行代码的区域。</li></ul></li><li><p><strong>Data Segment (数据区):</strong></p><ul><li>存放已初始化的全局和静态变量，也包括常量数据（例如字符串常量）。这个区域的数据在程序运行之前就已经被初始化。</li></ul></li><li><p><strong>BSS (Block Started by Symbol):</strong></p><ul><li>存放未初始化的全局和静态变量，它们的默认值为零。这是为了避免在可执行文件中存储大量的零值。</li></ul></li><li><p><strong>Heap (堆):</strong></p><ul><li>用于动态分配的内存。从低地址向高地址增长。在程序运行时，可以通过像 <code>malloc</code>、<code>new</code> 这样的函数从堆中分配内存。注意，堆是由程序员显式管理的，因此需要负责释放已分配的内存。</li></ul></li><li><p><strong>Stack (栈):</strong></p><ul><li>用于存储函数调用的本地变量、函数参数、返回地址等信息。栈是一种后进先出（LIFO）的数据结构，从高地址向低地址增长。在函数调用时，相关信息被推送到栈上；当函数返回时，这些信息被弹出。</li></ul></li></ol>",1);function u(m,k){const e=t("chatmessage");return l(),d("div",null,[n(e,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40},{default:a(()=>[s(" `new`和`delete``malloc`和`free`区别 ")]),_:1}),i,n(e,{avatar:"../../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[s(" Baba什么是栈!什么是堆！ ")]),_:1}),n(e,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:a(()=>[s(" 看来你还不清楚一些概念。 ")]),_:1}),r])}const v=c(p,[["render",u],["__file","3-Keywords new-delete-malloc-free.html.vue"]]);export{v as default};
