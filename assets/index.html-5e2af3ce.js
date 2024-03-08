import{_ as c,r as i,o as p,c as r,a as n,b as s,d as a,w as e,e as d}from"./app-d070a7fb.js";const u={},h=n("hr",null,null,-1),k=n("h3",{id:"🤞关于本站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🤞关于本站","aria-hidden":"true"},"#"),s(" 🤞关于本站")],-1),v={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.unrealengine.com/5.0/zh-CN/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"希望这里的内容能对你有所帮助！",-1),b=n("hr",null,null,-1),f=n("h3",{id:"主要形式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主要形式","aria-hidden":"true"},"#"),s(" 主要形式：")],-1),g=n("h3",{id:"_1-图文对话",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-图文对话","aria-hidden":"true"},"#"),s(" 1. 图文对话")],-1),x=n("h3",{id:"_2-外链引用-视频-插件等",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-外链引用-视频-插件等","aria-hidden":"true"},"#"),s(" 2. 外链引用-视频-插件等")],-1),q=n("iframe",{src:"https://blueprintue.com/render/j0oxoqx7/",width:"100%",height:"500",scrolling:"no",allowfullscreen:""},null,-1),E={href:"https://blueprintue.com/",target:"_blank",rel:"noopener noreferrer"},y=d(`<h3 id="_3-代码演示" tabindex="-1"><a class="header-anchor" href="#_3-代码演示" aria-hidden="true">#</a> 3. 代码演示</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;CoreMinimal.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Kismet/BlueprintFunctionLibrary.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;TEST.generated.h&quot;</span></span>

<span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">EXORCIST_API</span> UTEST <span class="token operator">:</span> <span class="token keyword">public</span> UBlueprintFunctionLibrary
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
<span class="token keyword">public</span><span class="token operator">:</span>
	
	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category <span class="token operator">=</span><span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">HelloUE</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	GEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>Red<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),w=n("h2",{id:"留情",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#留情","aria-hidden":"true"},"#"),s(" 留情")],-1),C=n("h2",{id:"联系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#联系","aria-hidden":"true"},"#"),s(" 📧 联系")],-1),T=n("ul",null,[n("li",null,[n("strong",null,"Email"),s(": "),n("a",{href:"mailto:750831855@qq.com"},"750831855@qq.com")]),n("li",null,[n("strong",null,"声明"),s("：请注意，本站仅供个人学习参考之用，部分流程和术语可能需要读者自行辨别和确认。")])],-1);function U(B,L){const o=i("ExternalLinkIcon"),t=i("chatmessage"),l=i("RouterLink");return p(),r("div",null,[h,k,n("p",null,[s("欢迎你的到来，本站是基于 "),n("a",v,[s("VuePress"),a(o)]),s(" 的中文个人备忘随笔。")]),n("p",null,[s("我主要记录与建模、渲染技术、光线追踪、"),n("a",_,[s("UE4/UE5"),a(o)]),s("、各类编程语言、以及各类工具使用等综合技术应用相关的内容。")]),m,b,f,g,a(t,{avatar:"./assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[s(" babaUE引擎怎么在屏幕中打印内容！ ")]),_:1}),a(t,{avatar:"./assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 直接右键添加一个print节点就行啦！ ")]),_:1}),x,q,n("blockquote",null,[n("p",null,[s("蓝图模块基于 **"),n("a",E,[s("BlueprintUE"),a(o)]),s("**当前BlueprintUE部分是外链，无法保证其长期有效性。因此，每个蓝图都会提供一个备用的图像版本。")])]),a(t,{avatar:"./assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[s(" 可我问的是C++怎么写？ ")]),_:1}),a(t,{avatar:"./assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 上代码！ ")]),_:1}),y,a(t,{avatar:"./assets/emoji/bqb (6).png",avatarWidth:40},{default:e(()=>[s(" 为了TA的视力健康，建议采用深色主题。 ")]),_:1}),w,a(t,{avatar:"./assets/emoji/hh.png",avatarWidth:40},{default:e(()=>[s(" 本站大多为个人踩坑合实践记录,如果你发现一些错误和纰漏实属正常。要么是我不懂，要么是我还没写。 ")]),_:1}),n("blockquote",null,[n("p",null,[s("如果你更深入的了解我，建议你看下我写的 "),a(l,{to:"/preface/"},{default:e(()=>[s("写在前面")]),_:1})])]),C,T])}const N=c(u,[["render",U],["__file","index.html.vue"]]);export{N as default};
