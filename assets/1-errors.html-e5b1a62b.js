import{_ as p,r as i,o as l,c as r,d as a,w as o,a as n,b as s,e as c}from"./app-f69dda3c.js";const u="/RenderDoc/assets/image3-d41cc5c2.png",d="/RenderDoc/assets/jjwt-13fc55f3.png",k="/RenderDoc/assets/SAVE-da90137f.jpg",v="/RenderDoc/assets/additem-32732c83.jpg",h={},m=n("h2",{id:"修复rider在ue5-2报错找不到directx符号问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修复rider在ue5-2报错找不到directx符号问题","aria-hidden":"true"},"#"),s(" 修复Rider在UE5.2报错找不到DirectX符号问题")],-1),g=n("h2",{id:"问题复现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#问题复现","aria-hidden":"true"},"#"),s(" 问题复现")],-1),b=c('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h2><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-下载文件" tabindex="-1"><a class="header-anchor" href="#_1-下载文件" aria-hidden="true">#</a> 1.下载文件</h3>',4),_={href:"https://github.com/EpicGames/UnrealEngine/blob/5.2/Engine/Source/ThirdParty/Windows/DirectX/DirectX.Build.cs",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),y=n("span",{style:{color:"red"}},"UE_5.2(UE根目录)\\Engine\\Source\\ThirdParty\\Windows\\DirectX",-1),w=c('<figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Copyright Epic Games, Inc. All Rights Reserved.</span>

<span class="token keyword">using</span> System<span class="token punctuation">.</span>IO<span class="token punctuation">;</span>
<span class="token keyword">using</span> UnrealBuildTool<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectX</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token class-name">ModuleRules</span></span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> string <span class="token function">GetDir</span><span class="token punctuation">(</span>ReadOnlyTargetRules Target<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> Target<span class="token punctuation">.</span>UEThirdPartySourceDirectory <span class="token operator">+</span> <span class="token string">&quot;Windows/DirectX&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> string <span class="token function">GetIncludeDir</span><span class="token punctuation">(</span>ReadOnlyTargetRules Target<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">GetDir</span><span class="token punctuation">(</span>Target<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/include&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> string <span class="token function">GetLibDir</span><span class="token punctuation">(</span>ReadOnlyTargetRules Target<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span><span class="token function">GetDir</span><span class="token punctuation">(</span>Target<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Lib&quot;</span><span class="token punctuation">,</span> Target<span class="token punctuation">.</span>Architecture<span class="token punctuation">.</span>WindowsName<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> string <span class="token function">GetDllDir</span><span class="token punctuation">(</span>ReadOnlyTargetRules Target<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>Target<span class="token punctuation">.</span>RelativeEnginePath<span class="token punctuation">,</span> <span class="token string">&quot;Binaries/ThirdParty/Windows/DirectX&quot;</span><span class="token punctuation">,</span> Target<span class="token punctuation">.</span>Architecture<span class="token punctuation">.</span>WindowsName<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token function">DirectX</span><span class="token punctuation">(</span>ReadOnlyTargetRules Target<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">base</span><span class="token punctuation">(</span>Target<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		Type <span class="token operator">=</span> ModuleType<span class="token punctuation">.</span>External<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加条目" tabindex="-1"><a class="header-anchor" href="#添加条目" aria-hidden="true">#</a> 添加条目</h3><blockquote><p>Rider定位到\\Engine\\Source\\ThirdParty\\Windows对着Windows文件夹右键添加现有条目且选择DirectX文件夹 <img src="`+v+'" alt="" loading="lazy"></p></blockquote><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',5),T={href:"https://zhuanlan.zhihu.com/p/647644457",target:"_blank",rel:"noopener noreferrer"},D={href:"https://youtrack.jetbrains.com/issue/RSCPP-34310/Cant-resolve-DirectX-symbol-in-engine-sources-UE-5.2#focus=Comments-27-7378458.0-0",target:"_blank",rel:"noopener noreferrer"};function R(x,E){const e=i("chatmessage"),t=i("ExternalLinkIcon");return l(),r("div",null,[m,g,a(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:o(()=>[s(" BABA不想再重新做了，直接网图了。 ")]),_:1}),b,n("blockquote",null,[n("p",null,[s("UE5.2的源码Github中下载"),n("a",_,[s("DirectX.Build.cs"),a(t)]),f,s(" 放入"),y])]),a(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40},{default:o(()=>[s(" 打不开链接就直接新建一个DirectX.Build.cs ")]),_:1}),w,n("p",null,[n("a",T,[s("知乎dest1yo"),a(t)])]),n("p",null,[n("a",D,[s("Rider官方"),a(t)])])])}const X=p(h,[["render",R],["__file","1-errors.html.vue"]]);export{X as default};
