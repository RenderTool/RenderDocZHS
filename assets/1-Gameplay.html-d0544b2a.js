import{_ as p,a as u}from"./gamemodeinclue-ed0d22ef.js";import{_ as h}from"./libexpcpp-4eb3d4ac.js";import{_,r as o,o as b,c as m,f as v,d as n,w as t,a,b as e,e as l}from"./app-c4ee493e.js";const g="/RenderDocZHS/assets/helloworldUE-41c43e32.jpg",f="/RenderDocZHS/assets/newcppclass-9d55c7f1.png",r="/RenderDocZHS/assets/actorpublicobject-cd1e639f.jpg",k="/RenderDocZHS/assets/slate-9b7fdbc4.jpg",y="/RenderDocZHS/assets/GameFramework-d1ad3780.jpg",U="/RenderDocZHS/assets/UEComponent-d7ede08e.png",C="/RenderDocZHS/assets/level-5d0d5770.jpg",j="/RenderDocZHS/assets/uworld-78be2191.jpg",E="/RenderDocZHS/assets/gameinstancecpp-3ff99027.jpg",x="/RenderDocZHS/assets/carbagecollection-1f23cf87.png",S="/RenderDocZHS/assets/UEpakage-0c99c34e.jpg",w="/RenderDocZHS/assets/subsystems-fbfd5b27.jpg",q="/RenderDocZHS/assets/IDEgenerate def-9b5715a4.jpg",W="/RenderDocZHS/assets/ideaicode2-14207711.jpg",T="/RenderDocZHS/assets/testhelloworld-e6cf4ebe.png",A="/RenderDocZHS/assets/testfunlist-a2d85ff2.jpg",P="/RenderDocZHS/assets/successhelloworld-884e34d3.png",L={},H=a("blockquote",null,[a("p",null,[e("天地除开，诞生了第一缕"),a("code",null,"UObject"),e("，各自进化成Actor+Component、Level、World、WorldContext、GameInstance等。"),a("br"),e(" 有这么一天，UEngine大佬出现自称为帝，掌管所有UObject，还给各种UObject划分职责。有的管理游戏逻辑、有的管理游戏表现、有的管理游戏数据。")])],-1),R=a("h2",{id:"导读",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#导读","aria-hidden":"true"},"#"),e(" 导读")],-1),D=a("br",null,null,-1),G=a("br",null,null,-1),I=a("br",null,null,-1),O=l('<h2 id="ue启动" tabindex="-1"><a class="header-anchor" href="#ue启动" aria-hidden="true">#</a> UE启动</h2><blockquote><p>心血来潮！我要自己搞一个游戏！UE启动！</p></blockquote><h2 id="_1-新建一个cpp工程" tabindex="-1"><a class="header-anchor" href="#_1-新建一个cpp工程" aria-hidden="true">#</a> 1. 新建一个CPP工程</h2><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),B=a("h2",{id:"_2-添加第一个c-类",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-添加第一个c-类","aria-hidden":"true"},"#"),e(" 2.添加第一个C++类")],-1),z=a("blockquote",null,[a("p",null,"等待编译并启动项目，初次尝试UECPP先问候一句HelloWorld再说，点击工具-新建一个C++类。")],-1),M=a("figure",null,[a("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),V=a("figure",null,[a("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),N=a("br",null,null,-1),Z=a("br",null,null,-1),F=a("h2",{id:"uobject-ue对象",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#uobject-ue对象","aria-hidden":"true"},"#"),e(" UObject|UE对象")],-1),X=a("blockquote",null,[a("p",null,"什么是UObject?")],-1),K=a("br",null,null,-1),Y=a("br",null,null,-1),J=a("br",null,null,-1),$=a("figure",null,[a("img",{src:r,alt:"例如：Actor继承自UObject",tabindex:"0",loading:"lazy"}),a("figcaption",null,"例如：Actor继承自UObject")],-1),Q=a("figure",null,[a("img",{src:k,alt:"左边C++右边蓝图",tabindex:"0",loading:"lazy"}),a("figcaption",null,"左边C++右边蓝图")],-1),aa=a("hr",null,null,-1),ea=a("h2",{id:"ue-gameplay架构",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ue-gameplay架构","aria-hidden":"true"},"#"),e(" UE-GamePlay架构")],-1),na=a("figure",null,[a("img",{src:y,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),ta=a("p",null,"摘自官方文档：",-1),sa=a("blockquote",null,[a("p",null,[e("此流程图演示了这些核心Gameplay类彼此之间的关系。 "),a("br"),e("一个游戏由一个GameMode和一个GameState构成。 "),a("br"),e("加入游戏的人类玩家与PlayerController关联。 "),a("br"),e("这些PlayerController允许玩家持有游戏中的Pawn，以便在关卡中有物理表示。 "),a("br"),e("PlayerController还为玩家提供了输入功能按钮、平视显示器（简称HUD）和用于处理摄像机视图的PlayerCameraManager。")])],-1),ia=a("br",null,null,-1),la=a("br",null,null,-1),oa=a("blockquote",null,[a("p",null,"下面会详细介绍每一项")],-1),ra={style:{color:"red"}},da=a("a",{href:"#_1GamePlay->GameMode"},"游戏规则： ①-②",-1),ca=a("br",null,null,-1),pa=a("a",{href:"#_3-camera-游戏相机"},[e("3C是指： "),a("span",{style:{color:"orangered"}},"Character（角色）、Control（控制）和Camera（摄像机）"),e(" ③-⑤")],-1),ua={href:"https://zhuanlan.zhihu.com/p/357621053",target:"_blank",rel:"noopener noreferrer"},ha=a("br",null,null,-1),_a=a("a",{href:"#_6-gameui-游戏ui"},"游戏界面⑥",-1),ba=a("h3",{id:"_1gameplay-gamemode",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1gameplay-gamemode","aria-hidden":"true"},"#"),e(" ①GamePlay->GameMode")],-1),ma=a("ul",null,[a("li",null,[e("AGameModeBase (public AInfo) "),a("ul",null,[a("li",null,[e("AInfo (public AActor) "),a("ul",null,[a("li",null,"AActor (public UObject)")])])])])],-1),va=l('<figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>生成的类打开后</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>类别</th><th>类名</th><th>用途</th></tr></thead><tbody><tr><td>APawn class</td><td>游戏中的角色</td><td>代表游戏中的玩家、AI 或者其他角色。控制移动、动画、状态、碰撞等。</td></tr><tr><td>AHUD class</td><td>Heads-Up Display (HUD)</td><td>用于在屏幕上显示游戏信息，如分数、生命值、小地图等。通常负责在画面上绘制 UI 元素。</td></tr><tr><td>APlayerController class</td><td>玩家控制器</td><td>处理玩家输入，控制与玩家的交互，例如移动、攻击、交互等。可以操控一个或多个角色。</td></tr><tr><td>AGameState class</td><td>游戏状态</td><td>负责跟踪整个游戏的全局状态，例如游戏时间、分数、胜利条件等。用于同步状态给所有客户端。</td></tr><tr><td>APlayerState class</td><td>玩家状态</td><td>保存与玩家相关的状态，如分数、生命值、角色类型等。通常由服务器和客户端各自维护一份。</td></tr><tr><td>ASpectatorPawn class</td><td>观察者角色</td><td>允许玩家以观察者身份观察游戏，通常用于回放、录像功能或者观察比赛。不与玩家角色相关联，可以自由观察游戏世界。</td></tr></tbody></table><hr><h3 id="_2-gamestate-游戏状态" tabindex="-1"><a class="header-anchor" href="#_2-gamestate-游戏状态" aria-hidden="true">#</a> ② GameState|游戏状态</h3><ul><li>AGameStateBase (public AInfo) <ul><li>AInfo (public AActor) <ul><li>AActor (public UObject)</li></ul></li></ul></li></ul>',7),ga=a("hr",null,null,-1),fa=a("h3",{id:"_3-camera-游戏相机",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-camera-游戏相机","aria-hidden":"true"},"#"),e(" ③ Camera|游戏相机")],-1),ka=a("hr",null,null,-1),ya=a("h3",{id:"_4-character-游戏角色",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-character-游戏角色","aria-hidden":"true"},"#"),e(" ④ Character|游戏角色")],-1),Ua=a("hr",null,null,-1),Ca=a("h3",{id:"_5-controller-控制器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_5-controller-控制器","aria-hidden":"true"},"#"),e(" ⑤ Controller|控制器")],-1),ja=a("hr",null,null,-1),Ea=a("h3",{id:"_6-gameui-游戏ui",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_6-gameui-游戏ui","aria-hidden":"true"},"#"),e(" ⑥ GameUI|游戏UI")],-1),xa=a("hr",null,null,-1),Sa=a("h3",{id:"component-组件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#component-组件","aria-hidden":"true"},"#"),e(" Component|组件")],-1),wa=l('<figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>组件类型</th><th>功能和用途</th></tr></thead><tbody><tr><td>UStaticMeshComponent</td><td>渲染静态网格模型，如墙、地板等</td></tr><tr><td>USkeletalMeshComponent</td><td>渲染有骨骼的网格模型，适用于角色和生物</td></tr><tr><td>UCameraComponent</td><td>创建摄像机视图，用于玩家或观察</td></tr><tr><td>ULightComponentBase</td><td>创建不同类型的光源，如点光源、聚光灯等</td></tr><tr><td>UParticleSystemComponent</td><td>播放粒子系统，创建特效如火焰、爆炸等</td></tr><tr><td>UAudioComponent</td><td>播放声音，附加到物体上产生音效</td></tr><tr><td>UCollisionComponent</td><td>处理碰撞和触发事件，可以是基本碰撞体或区域</td></tr><tr><td>UInputComponent</td><td>处理玩家输入，如按键和鼠标事件</td></tr><tr><td>USceneComponent</td><td>在场景中构建组件层次结构，可作为父组件</td></tr><tr><td>UWidgetComponent</td><td>将2D UI嵌入3D世界，显示UMG部件</td></tr></tbody></table>',2),qa=a("a",{href:"./exp_经验_/1-Blueprint2CPP.html"},"蓝图节点对应CPP的探索与解析",-1),Wa=a("hr",null,null,-1),Ta=a("h3",{id:"uworld-游戏世界",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#uworld-游戏世界","aria-hidden":"true"},"#"),e(" UWorld|游戏世界")],-1),Aa=a("figure",null,[a("img",{src:C,alt:"关卡",tabindex:"0",loading:"lazy"}),a("figcaption",null,"关卡")],-1),Pa=a("h3",{id:"ulevel-游戏关卡",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ulevel-游戏关卡","aria-hidden":"true"},"#"),e(" ULevel|游戏关卡")],-1),La=a("br",null,null,-1),Ha=a("span",{style:{color:"#c0392b"}},"N*ULeveL => UWorld ",-1),Ra=a("figure",null,[a("img",{src:j,alt:"若干小关卡组成大世界",tabindex:"0",loading:"lazy"}),a("figcaption",null,"若干小关卡组成大世界")],-1),Da=a("h3",{id:"worldcontext-世界上下文",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#worldcontext-世界上下文","aria-hidden":"true"},"#"),e(" WorldContext|世界上下文")],-1),Ga=a("hr",null,null,-1),Ia=a("h2",{id:"掌权者",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#掌权者","aria-hidden":"true"},"#"),e(" 掌权者")],-1),Oa=a("h3",{id:"gameinstance-游戏实例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gameinstance-游戏实例","aria-hidden":"true"},"#"),e(" GameInstance|游戏实例")],-1),Ba=l('<figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="大帝" tabindex="-1"><a class="header-anchor" href="#大帝" aria-hidden="true">#</a> 大帝</h2><h3 id="uengine-虚幻游戏引擎" tabindex="-1"><a class="header-anchor" href="#uengine-虚幻游戏引擎" aria-hidden="true">#</a> UEngine|虚幻游戏引擎</h3><p>天地除开，诞生了第一缕<code>UObject</code>，各自进化成Actor+Component、Level、World、WorldContext、GameInstance等。<br> 有这么一天，UEngine大佬出现自称为帝，掌管所有UObject，还给各种UObject划分职责。有的管理游戏逻辑、有的管理游戏表现、有的管理游戏数据。</p>',4),za=a("p",null,[a("strong",null,"Object->Actor+Component->Level->World->WorldContext->GameInstance->Engine")],-1),Ma=a("h2",{id:"真神",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#真神","aria-hidden":"true"},"#"),e(" 真神")],-1),Va=a("h3",{id:"ue-refection-ue反射",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ue-refection-ue反射","aria-hidden":"true"},"#"),e(" UE-Refection|UE反射")],-1),Na=a("blockquote",null,[a("p",null,"篇幅限制，这里不做反射的深入，具体可以看后续的反射机制篇。")],-1),Za={href:"https://docs.unrealengine.com/5.3/zh-CN/reflection-system-in-unreal-engine/",target:"_blank",rel:"noopener noreferrer"},Fa=a("code",null,"宏（英语：Macro），是一种批量处理的称谓。 计算机科学里的宏是一种抽象（Abstraction），它根据一系列预定义的规则替换一定的文本模式。 解释器或编译器在遇到宏时会自动进行这一模式替换。——wiki",-1),Xa=a("h3",{id:"uht-unreal-header-tool-虚幻头文件工具",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#uht-unreal-header-tool-虚幻头文件工具","aria-hidden":"true"},"#"),e(" UHT|Unreal Header Tool（虚幻头文件工具）")],-1),Ka=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 源代码
    <span class="token list punctuation">-</span> 用户编写包含特定宏和标记的UE4 C++ 代码。

<span class="token list punctuation">2.</span> UHT扫描
    <span class="token list punctuation">-</span> UHT在构建项目时扫描头文件，寻找特定的宏和标记。

<span class="token list punctuation">3.</span> 生成反射信息
    <span class="token list punctuation">-</span> UHT使用找到的宏和标记生成反射信息，包括类的成员变量和成员函数。

<span class="token list punctuation">4.</span> 生成代码框架
    <span class="token list punctuation">-</span> 除了反射信息，UHT也可以根据宏和标记生成一些代码框架，以辅助实现类的功能。

<span class="token list punctuation">5.</span> 传递给编译器
    <span class="token list punctuation">-</span> 生成的反射信息和代码框架将传递给C++编译器，它们会被合并到最终的编译过程中。

<span class="token list punctuation">6.</span> 构建项目
    <span class="token list punctuation">-</span> 编译器将所有的源代码和生成的代码一起编译成可执行文件。

<span class="token list punctuation">7.</span> 运行游戏
    <span class="token list punctuation">-</span> 最终生成的可执行文件可以在UE4引擎中运行，实现用户在代码中定义的功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通常会在一个类的头文件中包含一个以 .generated.h 结尾的文件， 例如 MyClass.generated.h。</li><li>这个文件包含了由UHT生成的代码，通常用于实现反射信息、蓝图节点以及其他与类相关的元数据。</li><li>默认情况下，UE会使用Microsoft Visual C++(MSVC)作为主要的编译工具,这里我们用Rider连接MSVC（IDE自动完成）。</li></ul><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',3),Ya={href:"https://www.bilibili.com/video/BV1EM411U7PX?p=36&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2",target:"_blank",rel:"noopener noreferrer"},Ja=a("hr",null,null,-1),$a=a("h3",{id:"upk-ue包文件组成",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upk-ue包文件组成","aria-hidden":"true"},"#"),e(" UPK|UE包文件组成")],-1),Qa=l('<figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>从Unreal Engine 4（UE4）开始，UPK 文件被替代为更先进的Unreal Asset文件格式（.uasset）和Unreal Asset Registry（.uassetregistry）等。 UPK 文件仍然存在于早期版本的Unreal Engine中。<br> 更准确点描述：一个Package是一个文件（.uasset或者.umap），它包含一些可以UE4进行操作和访问的二进制数据文件。</p></blockquote><h2 id="进化" tabindex="-1"><a class="header-anchor" href="#进化" aria-hidden="true">#</a> 进化</h2><p>各司其职原本是件好事，随着时间的增加，我们发现这个管理模式会出现很多问题。大帝UEngine忙着管理大局，所有琐碎任务都堆积给我们的Gameinstance这位掌权者身上，导致我们的项目非常难以维护。 <br>如果我们自己重新定义一个管理者Object Manager，又必须非常小心管理这一切。<br> 好钢用在刀刃——显然开发者应该把精力更多的放在游戏性本身。</p><blockquote><p>于是UEngine“东、西厂”出现了！——Subsystem。</p></blockquote><h3 id="subsystem-子系统" tabindex="-1"><a class="header-anchor" href="#subsystem-子系统" aria-hidden="true">#</a> Subsystem|子系统</h3>',6),ae=l('<table><thead><tr><th>子系统</th><th>继承自的类</th></tr></thead><tbody><tr><td>引擎子系统</td><td>UEngineSubsystem 类</td></tr><tr><td>编辑器子系统</td><td>UEditorSubsystem 类</td></tr><tr><td>游戏实例子系统</td><td>UGameInstanceSubsystem 类</td></tr><tr><td>本地玩家子系统</td><td>ULocalPlayerSubsystem 类</td></tr></tbody></table><blockquote><p>当引擎子系统的模块加载时，子系统将在模块的 Startup() 函数返回后执行 Initialize()，子系统将在模块的 Shutdown() 函数返回后执行 Deinitialize()。</p></blockquote><figure><img src="'+w+'" alt="目录：EngineSourceRuntimeEnginePublicSubsystems" tabindex="0" loading="lazy"><figcaption>目录：Engine\\Source\\Runtime\\Engine\\Public\\Subsystems\\</figcaption></figure><h2 id="_3-选择蓝图函数库类" tabindex="-1"><a class="header-anchor" href="#_3-选择蓝图函数库类" aria-hidden="true">#</a> 3. 选择蓝图函数库类</h2>',4),ee=l('<figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>因为我们只是想打印一条简单的HelloWorld,又不想挂载在Actor上，最终决定先写在蓝图函数库中。</p></blockquote><h2 id="_4-分析系统生成的cpp文件。" tabindex="-1"><a class="header-anchor" href="#_4-分析系统生成的cpp文件。" aria-hidden="true">#</a> 4. 分析系统生成的cpp文件。</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Fill out your copyright notice in the Description page of Project Settings.</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;CoreMinimal.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Kismet/BlueprintFunctionLibrary.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;TEST.generated.h&quot;</span></span>

<span class="token comment">/**
 * 
 */</span>
<span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">EXORCIST_API</span> UTEST <span class="token operator">:</span> <span class="token keyword">public</span> UBlueprintFunctionLibrary
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>打开TEST.generated.h</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 版权归 Epic Games, Inc. 所有。保留所有权利。</span>
<span class="token comment">/*===========================================================================
	从UnrealHeaderTool导出的生成代码。
	请勿手动修改！请编辑相应的.h文件！
===========================================================================*/</span>

<span class="token comment">// IWYU pragma: private, include &quot;TEST.h&quot;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;UObject/ObjectMacros.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;UObject/ScriptMacros.h&quot;</span></span>

PRAGMA_DISABLE_DEPRECATION_WARNINGS
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">EXORCIST_TEST_generated_h</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">error</span> <span class="token string">&quot;TEST.generated.h 已经被包含，TEST.h 中缺少 &#39;#pragma once&#39;&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">EXORCIST_TEST_generated_h</span></span>

<span class="token comment">//后续省略.....</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),ne=l(`<h2 id="_5-新建一个helloworld函数" tabindex="-1"><a class="header-anchor" href="#_5-新建一个helloworld函数" aria-hidden="true">#</a> 5. 新建一个HelloWorld函数</h2><blockquote><p>TEST.h</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Fill out your copyright notice in the Description page of Project Settings.</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;CoreMinimal.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Kismet/BlueprintFunctionLibrary.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;TEST.generated.h&quot;</span></span>

<span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">EXORCIST_API</span> UTEST <span class="token operator">:</span> <span class="token keyword">public</span> UBlueprintFunctionLibrary
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token comment">//测试函数打印HelloWorld</span>
	
	<span class="token comment">//使用UFUNCTION红标记，BlueprintCallable让UE反射系统能够反射成蓝图调用。</span>
	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;TEST&quot;</span><span class="token punctuation">)</span>
	
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TESTFUNC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-对应的函数实现输出helloworld" tabindex="-1"><a class="header-anchor" href="#_6-对应的函数实现输出helloworld" aria-hidden="true">#</a> 6. 对应的函数实现输出HelloWorld</h2><blockquote><p>可以借助IDE生成对应函数定义。</p></blockquote><figure><img src="`+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>TEST.cpp</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;TEST.h&quot;</span></span>

<span class="token keyword">void</span> <span class="token class-name">UTEST</span><span class="token double-colon punctuation">::</span><span class="token function">TESTFUNC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	GEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>Red<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+W+'" alt="ideaicode2.jpg" tabindex="0" loading="lazy"><figcaption>ideaicode2.jpg</figcaption></figure>',9),te=a("h2",{id:"_6-编译-在关卡蓝图检验。",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_6-编译-在关卡蓝图检验。","aria-hidden":"true"},"#"),e(" 6. 编译，在关卡蓝图检验。")],-1),se=a("figure",null,[a("img",{src:T,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),ie=a("figure",null,[a("img",{src:A,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),le=a("blockquote",null,[a("p",null,"因为我们的函数中没有加入参数，所以对应生成的蓝图节点也没有输入输出节点。")],-1),oe=a("h2",{id:"_7-运行查看成果",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_7-运行查看成果","aria-hidden":"true"},"#"),e(" 7.运行查看成果！")],-1),re=a("figure",null,[a("img",{src:P,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),de=a("h2",{id:"参考链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),e(" 参考链接")],-1),ce=a("thead",null,[a("tr",null,[a("th",null,"大佬")])],-1),pe={href:"https://www.zhihu.com/people/fjz13",target:"_blank",rel:"noopener noreferrer"},ue=a("thead",null,[a("tr",null,[a("th",null,"课程名"),a("th",null,"类型"),a("th",null,"链接")])],-1),he=a("td",null,"2023最新版C++",-1),_e=a("td",null,"C++基础",-1),be={href:"https://www.bilibili.com/video/BV1eL41187JS/?spm_id_from=333.999.0.0&vd_source=fc61eb54bf3245afbff2be6b8c1ebfc2",target:"_blank",rel:"noopener noreferrer"},me=a("td",null,"【Cherno C++】",-1),ve=a("td",null,"C++基础",-1),ge={href:"https://www.bilibili.com/video/BV1fP4y1w7iE/?spm_id_from=333.999.0.0",target:"_blank",rel:"noopener noreferrer"},fe=a("td",null,"为游戏编程学习C++",-1),ke=a("td",null,"C++基础",-1),ye={href:"https://www.bilibili.com/video/BV1Dd4y1R7VS/?spm_id_from=333.999.0.0",target:"_blank",rel:"noopener noreferrer"},Ue=a("td",null,"黑马程序员匠心之作",-1),Ce=a("td",null,"C++教程",-1),je={href:"https://www.bilibili.com/video/BV1et411b73Z?t=94.0&p=95",target:"_blank",rel:"noopener noreferrer"},Ee=a("td",null,"字节跳动最新打造的C++教程",-1),xe=a("td",null,"C++基础",-1),Se={href:"https://www.bilibili.com/video/BV1ps4y1k7d7/?spm_id_from=333.999.0.0",target:"_blank",rel:"noopener noreferrer"},we=a("td",null,"Udemy宝藏数据结构与算法课",-1),qe=a("td",null,"C++算法",-1),We={href:"https://www.bilibili.com/video/BV1Ba411Y71K/?spm_id_from=333.337.top_right_bar_window_custom_collection.content.click",target:"_blank",rel:"noopener noreferrer"};function Te(Ae,Pe){const s=o("chatmessage"),d=o("gifwithbutton"),i=o("ExternalLinkIcon"),c=o("RouterLink");return b(),m("div",null,[H,v(" more "),R,n(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[e(" 1、食用本文前你应该已经了解UE的一些基本操作,包括下载安装、打开工程、资源导入导出、关卡等概念。"),D,e(" 2、有一定的（C++）编程基础，但不是必须的。"),G,e(" 3、本章将试图初步了解UE GamePlay架构。"),I,e(" 4、最终尝试用CPP在我们的屏幕上打印一个HelloWorld。 ")]),_:1}),O,n(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[e(" 什么我不会CPP! ")]),_:1}),n(s,{avatar:"../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 如果你不会CPP建议你去下方查考链接观看CPP基础教程，或者等我的CPP入门介绍篇。 ")]),_:1}),B,z,M,n(s,{avatar:"../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" BABA用了Rider已经回不去了,如果你用VS这里是将是刷新VS项目。 ")]),_:1}),n(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[e(" 弹出的窗口让人一脸懵逼！ ")]),_:1}),V,n(s,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:t(()=>[e(" 看不懂，根本看不懂。 ")]),_:1}),n(s,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 虽然看不懂这些东西是干啥的，但细心的你应该发现:"),N,e(" 所有节点的根目录都来自一个叫Object的东西，这里我们叫它UObject。"),Z,e(" 即：所有XXObject都继承自UObject。 ")]),_:1}),n(d,{src:"../../assets/unrealgif/newcppclass.gif"}),n(s,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:t(()=>[e(" 你在说啥？啥是UObject？ ")]),_:1}),n(s,{avatar:"../../assets/emoji/bqb (6).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 很好！看来下一步之前需要搞清楚几个基本概念 ")]),_:1}),F,X,n(s,{avatar:"../../assets/emoji/bqb (6).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 在 Unreal Engine 中 "),K,e(" ·UObject几乎是所有对象的基类，包括角色、物体、组件、纹理、材质等等。"),Y,e(" ·UObject 提供了许多基本的功能和特性，例如内存管理、反射（Reflection）、属性系统、蓝图扩展等。"),J]),_:1}),$,n(s,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:t(()=>[e(" 确实耶！对比蓝图版，C++类中多了许多编辑器类，代码在手为所欲为。 ")]),_:1}),Q,aa,n(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 如果把UObject理解成混沌之力，凝聚成一个一个对象。现在这些对象只是原始部落时代的人类，没有规则、秩序。 Epicbaba作为造物主，当然需要给自己的UE宇宙制定一些界面准则——GamePlay。 ")]),_:1}),ea,n(s,{avatar:"../../assets/emoji/bqb (6).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 现在请你暂停阅读，你会怎么制定这些准则，让你的游戏世界正常运作？ ")]),_:1}),na,ta,sa,n(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[e(" 官方你在说啥？我脑子不够用了！ ")]),_:1}),n(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 总结成一个基本公式："),ia,e(" 游戏规则 + 3C + 游戏界面 = 基础GamePlay。"),la]),_:1}),oa,a("p",null,[a("span",ra,[da,ca,pa,a("a",ua,[e("扩展阅读"),n(i)]),ha,_a])]),ba,ma,n(s,{avatar:"../../assets/emoji/bqb02.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" GameMode（游戏模式）是一个非常重要的类，它决定了游戏的规则、逻辑和行为。 ")]),_:1}),va,n(s,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" Game State 就是指游戏状态。它管理了所有已连接的客户端，并且实时追踪游戏层面的属性并把它们分发给远程客户端。 ")]),_:1}),ga,fa,n(s,{avatar:"../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 3C之一Camera ")]),_:1}),ka,ya,n(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 3C之一Character ")]),_:1}),Ua,Ca,n(s,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 3C之一Controller ")]),_:1}),ja,Ea,n(s,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:t(()=>[e(" 比如血条、切枪图标等。 ")]),_:1}),xa,Sa,n(s,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 组件 是一种特殊类型的 对象，Actor 可以将组件作为子对象附加到自身。组件适用于共享相同的行为，例如显示视觉表现、播放声音 ")]),_:1}),wa,n(s,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:t(()=>[e(" 记不住根本记不住！这里BABA推荐我看"),qa]),_:1}),Wa,Ta,n(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40},{default:t(()=>[e(" 现在框架有了好比游戏内剧本、演员、相机等道具都齐活了！可拍摄地呢?导演呢？谁是BOSS? ")]),_:1}),n(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 拍摄地当然是要放在世界里啊，当然这个“世界”指的是我们的UWorld。 ")]),_:1}),Aa,Pa,n(s,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:t(()=>[e(" 可一个世界不一定只有一个国家，像我们真实世界就有好多国家. ")]),_:1}),n(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 是的，你口中的好多国家其实就是Ulevel.实际上是受硬件限制，不得不将这个大世界分成若干块，然后按需加载。"),La,Ha]),_:1}),Ra,Da,n(s,{avatar:"../../assets/emoji/bqb01.png",avatarWidth:40},{default:t(()=>[e(" 问题又来了！我们玩的很多游戏好像不止一张地图哦！也就是不止一个World!如果玩家去另外一个世界丢失记忆（游戏数据）可不是一件好事。 ")]),_:1}),n(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" EPICbaba给我们的UE奈何桥留了个后门-WorldContext，通过WorldContext可以连接各个界面而保持记忆。 ")]),_:1}),Ga,Ia,Oa,n(s,{avatar:"../../assets/emoji/bqb01.png",avatarWidth:40},{default:t(()=>[e(" 似乎我们已经从人界跳脱，来到了其他界面。前文我们讨论了后门-WorldContext的事情，看毕竟这只是一个后门，到底谁能开启掌管这个后门呢？ ")]),_:1}),n(s,{avatar:"../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" GameInstance就是这么一个掌权者，管理这些“后门”。 ")]),_:1}),Ba,n(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 没错，这就是经典的MVC->数据（Model）、表现（View）、逻辑（Controller） ")]),_:1}),za,n(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 最终一个由大帝——UEngine掌管的宇宙诞生了。 ")]),_:1}),Ma,n(s,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 说到底还是程序员在管理这些东西，可是“它们”内部之前的矛盾一不小心就会激化。比如：垃圾怎么倒啊！某管理员权限越级啊！ 这时候我们需要介入调和、整顿。 ")]),_:1}),Va,n(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" C++中并没有类似JAVA的反射机制，但EpicBABA的UE引擎已经帮我们实现了。 ")]),_:1}),Na,a("p",null,[e("可以先参考"),a("a",Za,[e("官方文档"),n(i)])]),n(s,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 简单来说虚幻引擎反射系统 使用宏为提供引擎和编辑器各种功，封装你的类。在使用 虚幻引擎（UE） 时，可以使用标准的C++类、函数和变量。 ")]),_:1}),n(s,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40},{default:t(()=>[e(" Baba我不知道什么叫宏耶！ ")]),_:1}),a("p",null,[Fa,e(" 具体的宏标记请"),n(c,{to:"/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/doc_%E6%96%87%E6%A1%A3_/macro.html"},{default:t(()=>[e("阅读我的")]),_:1})]),Xa,n(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" UHT是一个用于生成C++类和相关代码的预处理器工具，它将特定的宏和标记解析成C++代码，以便在编译时构建项目。大致流程如下： ")]),_:1}),Ka,a("p",null,[e("图片截取自"),a("a",Ya,[e("图片截取自ARRG从入门到进阶P36"),n(i)])]),Ja,n(s,{avatar:"../../assets/emoji/bqb (7).png",avatarWidth:40},{default:t(()=>[e(" 解决完这些矛盾、纠纷后怎么保存我们建立的”宇宙“呢？ ")]),_:1}),n(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 不得不引入一个叫做资源打包的概念。 ")]),_:1}),$a,n(s,{avatar:"../../assets/emoji/bqb (7).png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" Unreal Package 文件，它是Unreal Engine（虚幻引擎）中用于存储游戏资源和数据的一种文件格式。 ")]),_:1}),Qa,n(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 子系统是一组在整个引擎中提供特定功能的类和接口，它们可以独立于Gameplay存在并提供额外的功能和服务。后续会有实践篇，更加深入体验一下。 ")]),_:1}),ae,n(s,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[e(" 是不是已经快要忘记咱们的主线任务啦！ ")]),_:1}),ee,n(s,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:t(()=>[e(" 之前我们已经介绍过UHT,通过观察，UHT确实将一些宏标记”翻译“成具体代码提交给了编译器。 ")]),_:1}),ne,n(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[e(" 再次安利一波AI补全插件，只需记住类的开头基本都能补出来！ ")]),_:1}),te,se,n(s,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:t(()=>[e(" 我们之前命名为TESTFUNC，分组在TEST已经成功映射到蓝图中了！ ")]),_:1}),ie,le,oe,n(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[e(" 点击播放后，窗口中也成功打印红色的hello world! ")]),_:1}),re,de,a("table",null,[ce,a("tbody",null,[a("tr",null,[a("td",null,[a("strong",null,[a("a",pe,[e(" 知乎大钊"),n(i)])])])])])]),a("table",null,[ue,a("tbody",null,[a("tr",null,[he,_e,a("td",null,[a("a",be,[e("链接"),n(i)])])]),a("tr",null,[me,ve,a("td",null,[a("a",ge,[e("链接"),n(i)])])]),a("tr",null,[fe,ke,a("td",null,[a("a",ye,[e("链接"),n(i)])])]),a("tr",null,[Ue,Ce,a("td",null,[a("a",je,[e("链接"),n(i)])])]),a("tr",null,[Ee,xe,a("td",null,[a("a",Se,[e("链接"),n(i)])])]),a("tr",null,[we,qe,a("td",null,[a("a",We,[e("链接"),n(i)])])])])])])}const De=_(L,[["render",Te],["__file","1-Gameplay.html.vue"]]);export{De as default};
