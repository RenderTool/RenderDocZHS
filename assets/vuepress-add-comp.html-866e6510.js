import{_ as i,r as p,o as u,c as r,d as a,w as e,a as n,b as s,e as o}from"./app-d070a7fb.js";const c="/RenderDocZHS/assets/add vue comps-6e655a14.jpg",d={},k=n("h2",{id:"问题描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#问题描述","aria-hidden":"true"},"#"),s(" 问题描述")],-1),v=n("p",null,"vuepress添加自定义组件-以实现聊天气泡为例。",-1),m=n("h2",{id:"实现目标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实现目标","aria-hidden":"true"},"#"),s(" 实现目标")],-1),g=o(`<h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2><h3 id="方案1-markdown镶嵌html" tabindex="-1"><a class="header-anchor" href="#方案1-markdown镶嵌html" aria-hidden="true">#</a> 方案1：Markdown镶嵌HTML</h3><h4 id="_1-添加到-vuepress-项目中的-markdown-文件中" tabindex="-1"><a class="header-anchor" href="#_1-添加到-vuepress-项目中的-markdown-文件中" aria-hidden="true">#</a> 1. 添加到 VuePress 项目中的 Markdown 文件中：</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ width: avatarWidth + &#39;px&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>头像<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这是一条聊天消息。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在你的-vuepress-项目中的-vuepress-styles-index-styl-或者-vuepress-styles-index-scss-文件中-添加以下-css-样式" tabindex="-1"><a class="header-anchor" href="#_2-在你的-vuepress-项目中的-vuepress-styles-index-styl-或者-vuepress-styles-index-scss-文件中-添加以下-css-样式" aria-hidden="true">#</a> 2. 在你的 VuePress 项目中的 .vuepress/styles/index.styl 或者 .vuepress/styles/index.scss 文件中，添加以下 CSS 样式：</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.chat-container</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span> <span class="token comment">/* 设置聊天容器的最大宽度 */</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token comment">/* 将聊天容器居中显示 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.chat-message</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span> <span class="token comment">/* 将聊天内容垂直对齐到顶部 */</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 设置聊天消息之间的间距 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.avatar img</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> <span class="token comment">/* 设置头像的最大宽度 */</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token comment">/* 将头像设置成圆形 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.message</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #e0e0e0<span class="token punctuation">;</span> <span class="token comment">/* 设置聊天消息的背景颜色 */</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 设置聊天消息的内边距 */</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 设置聊天消息的圆角 */</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span> <span class="token comment">/* 设置聊天消息的最大宽度 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.message p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 清除段落的默认外边距 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案2-全局导入-vue-组件" tabindex="-1"><a class="header-anchor" href="#方案2-全局导入-vue-组件" aria-hidden="true">#</a> 方案2：全局导入 Vue 组件</h3>`,7),b=o('<h4 id="_1-在-vuepress中添加目录components" tabindex="-1"><a class="header-anchor" href="#_1-在-vuepress中添加目录components" aria-hidden="true">#</a> 1. 在<code>.vuepress</code>中添加目录<code>components</code></h4><figure><img src="'+c+'" alt="add vue comps.jpg" tabindex="0" loading="lazy"><figcaption>add vue comps.jpg</figcaption></figure><h4 id="_2-添加vue组件" tabindex="-1"><a class="header-anchor" href="#_2-添加vue组件" aria-hidden="true">#</a> 2. 添加vue组件</h4><figure><img src="'+c+`" alt="add vue comps.jpg" tabindex="0" loading="lazy"><figcaption>add vue comps.jpg</figcaption></figure><h4 id="_3-将之前的代码写入组件" tabindex="-1"><a class="header-anchor" href="#_3-将之前的代码写入组件" aria-hidden="true">#</a> 3. 将之前的代码写入组件</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ width: avatarWidth + &#39;px&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>头像<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// 头像路径</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.chat-message</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.avatar img</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.message</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #e0e0e0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.message p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.avatar img</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 保持头像在容器内的最大宽度 */</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-vuepress下新建client-ts" tabindex="-1"><a class="header-anchor" href="#_4-vuepress下新建client-ts" aria-hidden="true">#</a> 4. <code>.vuepress</code>下新建client.ts</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// @ts-ignore</span>
<span class="token keyword">import</span> chatmessage <span class="token keyword">from</span> <span class="token string">&quot;./components/chatmessage.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;chatmessage&quot;</span><span class="token punctuation">,</span> chatmessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-在对应的md中使用" tabindex="-1"><a class="header-anchor" href="#_5-在对应的md中使用" aria-hidden="true">#</a> 5. 在对应的md中使用</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>chatmessage</span> <span class="token attr-name">avatar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/R.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:avatarWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  这是一条聊天消息。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>chatmessage</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,11),h={href:"https://vuejs.press/zh/reference/plugin/register-components.html",target:"_blank",rel:"noopener noreferrer"};function y(x,q){const t=p("chatmessage"),l=p("ExternalLinkIcon");return u(),r("div",null,[k,v,m,a(t,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40},{default:e(()=>[s(" 这是一条聊天消息。 ")]),_:1}),g,a(t,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40},{default:e(()=>[s(" 很显然，方案1局限非常大，每次使用都要粘贴大量代码。 ")]),_:1}),b,n("p",null,[n("a",h,[s("vuepress官方添加组件教程"),a(l)])])])}const _=i(d,[["render",y],["__file","vuepress-add-comp.html.vue"]]);export{_ as default};
