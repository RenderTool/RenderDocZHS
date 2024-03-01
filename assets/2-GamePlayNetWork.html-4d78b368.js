import{_ as u}from"./spwanActor-aee20b67.js";import{_ as m,r as c,o as v,c as h,d as s,w as t,a as n,b as a,e as o}from"./app-f69dda3c.js";const g="/RenderDoc/assets/clientreplicate-bb522964.png",b="/RenderDoc/assets/serverreplicate-ec4181cb.png",k="/RenderDoc/assets/replicate-ef5442ed.png",_="/RenderDoc/assets/variables--8cab992a.png",f="/RenderDoc/assets/actorfz001-25ed0972.png",y="/RenderDoc/assets/authority-fc5ce4e4.png",R="/RenderDoc/assets/hasauthority-553d1019.png",x="/RenderDoc/assets/hasauthoritynode-b2d5a2ff.png",A="/RenderDoc/assets/network001-2911ae57.png",w="/RenderDoc/assets/network002-8a10c262.png",L="/RenderDoc/assets/csnode-d9847eaf.png",P="/RenderDoc/assets/onlinemode-b48bb7b8.png",S="/RenderDoc/assets/Framework_Network-c8861046.svg",j="/RenderDoc/assets/Framework_Network_Two--f96202d5.svg",W="/RenderDoc/assets/simple-3e9c7950.svg",E="/RenderDoc/assets/errorpc-4170dc9d.svg",q="/RenderDoc/assets/gh-52feb941.jpg",C={},D=n("h2",{id:"导读",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导读","aria-hidden":"true"},"#"),a(" 导读")],-1),N=n("blockquote",null,[n("p",null,"按数字1可以Spawn生成Actor")],-1),O=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),z=n("figure",null,[n("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),I=n("figure",null,[n("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),H=n("h2",{id:"replication-复制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#replication-复制","aria-hidden":"true"},"#"),a(" Replication|复制")],-1),T=n("blockquote",null,[n("p",null,"复制是服务器将信息/数据传递给客户端的行为。")],-1),G=o('<figure><img src="'+k+'" alt="中文" tabindex="0" loading="lazy"><figcaption>中文</figcaption></figure><figure><img src="'+_+`" alt="英文" tabindex="0" loading="lazy"><figcaption>英文</figcaption></figure><blockquote><p>对应的CPP</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token class-name">AMyCharacter</span><span class="token double-colon punctuation">::</span><span class="token function">ATestCharacter</span><span class="token punctuation">(</span><span class="token keyword">const</span> FObjectInitializer<span class="token operator">&amp;</span> ObjectInitializer<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token function">Super</span><span class="token punctuation">(</span>ObjectInitializer<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    bReplicates <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果服务器生成了将“bReplicates”设置为 TRUE 的 Actor，则将在所有客户端上生成和复制。<br> 如果一个客户端生成了这个 Actor，那么 Actor 将只存在于这个客户端上。</p></blockquote><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),U=o('<h2 id="网络权威" tabindex="-1"><a class="header-anchor" href="#网络权威" aria-hidden="true">#</a> 网络权威</h2><h3 id="authority-remote" tabindex="-1"><a class="header-anchor" href="#authority-remote" aria-hidden="true">#</a> Authority|Remote</h3><div class="hint-container note"><p class="hint-container-title">注</p><p>罗马音读音为 /əˈθɔːrəti/（英式发音）或 /əˈθɒrəti/（美式发音）。</p></div>',3),F=n("figure",null,[n("img",{src:y,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),M=n("p",null,[a("在UE，可以通过调用 "),n("code",null,"HasAuthority()"),a(' 来检查当前代码是否在具有 "Authority" 的实体上执行。例如：')],-1),Y=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">HasAuthority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 在具有Authority的实体上执行的代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+R+'" alt="BP宏" tabindex="0" loading="lazy"><figcaption>BP宏</figcaption></figure><figure><img src="'+x+'" alt="展开" tabindex="0" loading="lazy"><figcaption>展开</figcaption></figure>',3),B=n("figure",null,[n("img",{src:A,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),V=n("h3",{id:"enetrole-remote",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#enetrole-remote","aria-hidden":"true"},"#"),a(" ENetRole|Remote")],-1),X=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">GetLocalRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> ROLE_Authority
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),J={href:"https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking/Actors/Roles/",target:"_blank",rel:"noopener noreferrer"},K=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"/** The network role of an actor on a local/remote network context */"),a(`
`),n("span",{class:"token function"},"UENUM"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"enum"),a(),n("span",{class:"token class-name"},"ENetRole"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"int"),a(`
`),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token comment"},"/** No role at all. */"),a(`
	ROLE_None`),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token comment"},"/** Locally simulated proxy of this actor. */"),a(`
	ROLE_SimulatedProxy`),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token comment"},"/** Locally autonomous proxy of this actor. */"),a(`
	ROLE_AutonomousProxy`),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token comment"},"/** Authoritative control over the actor. */"),a(`
	ROLE_Authority`),n("span",{class:"token punctuation"},","),a(`
	ROLE_MAX`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"/** 在本地/远程网络环境中，演员的网络角色 */"),a(`
`),n("span",{class:"token function"},"UENUM"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"enum"),a(),n("span",{class:"token class-name"},"ENetRole"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"int"),a(`
`),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token comment"},"/** 没有角色。 */"),a(`
	ROLE_None`),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token comment"},"/** 该演员的本地模拟代理。 */"),a(`
	ROLE_SimulatedProxy`),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token comment"},"/** 该演员的本地自治代理。 */"),a(`
	ROLE_AutonomousProxy`),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token comment"},"/** 对该演员的权威控制。 */"),a(`
	ROLE_Authority`),n("span",{class:"token punctuation"},","),a(`
	ROLE_MAX`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("figure",null,[n("img",{src:L,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),$=n("blockquote",null,[n("p",null,"Character继承Pawn，Pawn继承Actor，本质还是Actor所以可以调到。")],-1),nn=n("h2",{id:"网络模型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络模型","aria-hidden":"true"},"#"),a(" 网络模型")],-1),an=o('<figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="基本网络模式" tabindex="-1"><a class="header-anchor" href="#基本网络模式" aria-hidden="true">#</a> 基本网络模式</h3><table><thead><tr><th>网络模式</th><th>说明</th></tr></thead><tbody><tr><td>独立 (Standalone)</td><td>游戏作为服务器运行，不接受远程客户端连接。参与游戏的玩家必须为本地玩家。此模式用于单人游戏和本地多人游戏。其将运行本地玩家适用的服务器逻辑和客户端逻辑。</td></tr><tr><td>客户端 (Client)</td><td>游戏作为网络多人游戏会话中与服务器连接的客户端运行。其不会运行服务器逻辑。</td></tr><tr><td>聆听服务器 (Listen Server)</td><td>游戏作为主持网络多人游戏会话的服务器运行。其接受远程客户端中的连接，且直接在服务器上拥有本地玩家。此模式通常用于临时合作和竞技多人游戏。</td></tr><tr><td>专属服务器 (Dedicated Server)</td><td>游戏作为主持网络多人游戏会话的服务器运行。其接受远程客户端中的连接，但无本地玩家，因此为了高效运行，其将废弃图形、音效、输入和其他面向玩家的功能。此模式常用于需要更固定、安全和大型多人功能的游戏。</td></tr></tbody></table><h3 id="ds和ls区别" tabindex="-1"><a class="header-anchor" href="#ds和ls区别" aria-hidden="true">#</a> DS和LS区别</h3><blockquote><p>（Dedicated Server）和监听服务器（Listen Server）</p></blockquote><table><thead><tr><th>方面</th><th>独立服务器（Dedicated Server）</th><th>监听服务器（Listen Server）</th></tr></thead><tbody><tr><td>主机</td><td>独立服务器，不需要玩家主机</td><td>服务器和客户端合并在一起</td></tr><tr><td>与玩家的依赖</td><td>独立于玩家；不受玩家加入或退出的影响</td><td>需要托管玩家在线</td></tr><tr><td>操作系统</td><td>可编译为Windows和Linux</td><td>客户端的操作系统</td></tr><tr><td>可视化表示</td><td>没有可视部分，没有UI，PlayerController或Character</td><td>需要UI，PlayerController和Character</td></tr><tr><td>连接性</td><td>可在具有固定IP地址的云服务器上运行</td><td>玩家连接到客户端的IP地址</td></tr><tr><td>IP地址问题</td><td>玩家连接到固定IP，没有动态IP问题</td><td>由于客户端的IP更改，玩家可能面临动态IP问题</td></tr><tr><td>OnlineSubsystem的使用</td><td>可以使用OnlineSubsystem解决IP问题</td><td>也可以使用OnlineSubsystem解决动态IP问题</td></tr></tbody></table><h3 id="gameplay网络职责" tabindex="-1"><a class="header-anchor" href="#gameplay网络职责" aria-hidden="true">#</a> GamePlay网络职责</h3>',7),sn=n("figure",null,[n("img",{src:S,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),tn=n("h3",{id:"ds-dedicated-server-服务器网络模型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ds-dedicated-server-服务器网络模型","aria-hidden":"true"},"#"),a(" DS(Dedicated Server)服务器网络模型")],-1),en=n("figure",null,[n("img",{src:j,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),on=n("h3",{id:"rpc-remote-procedure-calls",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rpc-remote-procedure-calls","aria-hidden":"true"},"#"),a(" RPC|Remote Procedure Calls")],-1),cn=n("p",null,'"RPC" 是 "Remote Procedure Call"（远程过程调用）的缩写。它是一种通信协议和编程模型，用于在不同的计算机或进程之间调用远程服务或函数，就像调用本地函数一样。',-1),ln=n("p",null,"在软件开发中，特别是在分布式系统中，RPC允许一个程序调用另一个地址空间（通常在远程机器上）的过程或服务，而开发人员不必担心底层网络通信的细节。",-1),pn=n("p",null,"基本思想是，通过RPC，你可以调用远程机器上的函数，就好像调用本地函数一样，而不必手动处理底层网络通信和数据传输。这样的抽象使得分布式系统的开发更加方便。",-1),rn=n("p",null,"在RPC中，通常有两个角色：",-1),dn=n("ol",null,[n("li",null,[n("strong",null,"客户端(Client):"),a(" 发起RPC调用的一方。")]),n("li",null,[n("strong",null,"服务器(Server):"),a(" 响应RPC调用的一方。")])],-1),un=n("p",null,[a("理解还是有误！客户端没有权限生成Actor让"),n("strong",null,"服务器"),a("去同步（客户端不可靠）,我给你画个简单的流程请求图吧！")],-1),mn=n("blockquote",null,[n("p",null,"注意这里的服务器描述可能不准确，LS确实是生成球体，而DS模式可能只是生成球体的代理。")],-1),vn=n("figure",null,[n("img",{src:W,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),hn=o('<figure><img src="'+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><ol><li><p><strong>定义复制属性：</strong> 在您的Actor类中，您需要定义哪些属性需要在网络中进行复制。这通常通过使用<code>Replicated</code>标记来完成。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UPROPERTY</span><span class="token punctuation">(</span>Replicated<span class="token punctuation">)</span>
<span class="token keyword">float</span> Health<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这将使<code>Health</code>属性被复制到所有连接的客户端。</p></li><li><p><strong>重写复制函数：</strong> 在您的Actor类中，您需要重写<code>GetLifetimeReplicatedProps</code>函数，以告诉引擎哪些属性应该在复制中被考虑。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">AYourActor</span><span class="token double-colon punctuation">::</span><span class="token function">GetLifetimeReplicatedProps</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span> FLifetimeProperty <span class="token operator">&gt;</span> <span class="token operator">&amp;</span> OutLifetimeProps<span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
    <span class="token class-name">Super</span><span class="token double-colon punctuation">::</span><span class="token function">GetLifetimeReplicatedProps</span><span class="token punctuation">(</span>OutLifetimeProps<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// DOREPLIFETIME for each replicated variable</span>
    <span class="token function">DOREPLIFETIME</span><span class="token punctuation">(</span>AYourActor<span class="token punctuation">,</span> Health<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>在服务器上更改属性：</strong> 当服务器上的属性更改时，使用<code>ServerReplicateFunction</code>之类的自定义RPC（远程过程调用）函数来通知客户端。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// .h</span>
<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>Server<span class="token punctuation">,</span> Reliable<span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">ServerSetHealth</span><span class="token punctuation">(</span><span class="token keyword">float</span> NewHealth<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// .cpp</span>
<span class="token keyword">void</span> <span class="token class-name">AYourActor</span><span class="token double-colon punctuation">::</span><span class="token function">ServerSetHealth_Implementation</span><span class="token punctuation">(</span><span class="token keyword">float</span> NewHealth<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Health <span class="token operator">=</span> NewHealth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>在客户端上接收属性更改：</strong> 客户端会自动接收服务器上的属性更改。确保您在客户端上有相应的操作来处理这些变化。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 处理属性更改的函数</span>
<span class="token keyword">void</span> <span class="token class-name">AYourActor</span><span class="token double-colon punctuation">::</span><span class="token function">OnRep_Health</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 在这里处理 Health 属性的变化</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>在服务器上生成对象：</strong> 如果您希望在服务器上生成新的Actor（例如，一个新的游戏对象），确保使用Server RPC在服务器上生成，而不是直接在客户端上生成。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 在服务器上生成新的Actor</span>
<span class="token keyword">void</span> <span class="token class-name">AYourGameMode</span><span class="token double-colon punctuation">::</span><span class="token function">SpawnNewActor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">HasAuthority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        AYourActor<span class="token operator">*</span> NewActor <span class="token operator">=</span> <span class="token function">GetWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">SpawnActor</span><span class="token generic class-name"><span class="token operator">&lt;</span>AYourActor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 在此添加其他处理逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="扩展阅读" tabindex="-1"><a class="header-anchor" href="#扩展阅读" aria-hidden="true">#</a> 扩展阅读</h2><figure><img src="`+q+'" alt="光环网络同步" tabindex="0" loading="lazy"><figcaption>光环网络同步</figcaption></figure>',5),gn={href:"https://www.gdcvault.com/play/1024041/Networking-Scripted-Weapons-and-Abilities",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://cedric-neukirchen.net/docs/multiplayer-compendium/additional-resources",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://forums.unrealengine.com/t/who-has-authority-server-or-client-and-when/247708/7",target:"_blank",rel:"noopener noreferrer"};function _n(fn,yn){const e=c("chatmessage"),i=c("ExternalLinkIcon"),r=c("CodeTabs"),d=c("gifwithbutton");return v(),h("div",null,[D,s(e,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[a(" Baba，我遇到问题了！ ")]),_:1}),s(e,{avatar:"../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 说！ ")]),_:1}),s(e,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[a(" 我在我的角色类中添加了如下函数： ")]),_:1}),N,O,s(e,{avatar:" ../../assets/emoji/new7.png",avatarWidth:40},{default:t(()=>[a(" 接着，我进行了简单网络同步测试。同时运行了客户端和服务端后，发现在客户端按1生成Actor，服务端并没有同步生成！ ")]),_:1}),z,s(e,{avatar:" ../../assets/emoji/new7.png",avatarWidth:40},{default:t(()=>[a(" 然而，神奇的是在服务端按1时，客户端却同步了！ ")]),_:1}),I,s(e,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[a(" 我明明已经启用了网络复制！为什么客户端中按1，服务端没有同步生成？ ")]),_:1}),H,T,s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 案例中你应该只是启用了Actor的网络复制属性如下图： ")]),_:1}),G,s(e,{avatar:"../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 你想啊，如果客户端可以随便生成数据那岂不是外挂满天飞了？ ")]),_:1}),s(e,{avatar:" ../../assets/emoji/bqb (6).png",avatarWidth:40},{default:t(()=>[a(" 对哦！这么说来客户端确实不应该生成Actor! ")]),_:1}),s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 我们先来补充几个知识点！ ")]),_:1}),U,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 客户端确实生成了Actor，但最终解释权在服务端，即服务器拥有绝对权限(Authority) ")]),_:1}),F,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[M]),_:1}),Y,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 为了更进一步，我们翻看翻看源码。 ")]),_:1}),B,V,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 可以看到实际它调用了GetLocalRole() ")]),_:1}),X,s(e,{avatar:" ../../assets/emoji/bqb (6).png",avatarWidth:40},{default:t(()=>[a(" 这不就是个枚举值吗? ")]),_:1}),s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[n("p",null,[a("没错，但其中几个概念我们需要搞懂。也可以参考"),n("a",J,[a("文档"),s(i)])])]),_:1}),s(r,{id:"100",data:[{id:"原文"},{id:"翻译"}],"tab-id":"language"},{title0:t(({value:l,isActive:p})=>[a("原文")]),title1:t(({value:l,isActive:p})=>[a("翻译")]),tab0:t(({value:l,isActive:p})=>[K]),tab1:t(({value:l,isActive:p})=>[Q]),_:1}),Z,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 可以看到客户端的角色只有Remote权限没有Authority。 ")]),_:1}),$,s(d,{src:"../../assets/unrealgif/hpimpove5.gif"}),nn,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 在多人在线游戏中，客户端通常是模仿服务器行为的，因为服务器负责游戏世界的状态和逻辑。这种架构被称为客户端-服务器模型。 ")]),_:1}),s(e,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[a(" 突然官腔！ ")]),_:1}),an,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" GamePlay框架中各自对应的网络职责划分（大佬的图） ")]),_:1}),sn,tn,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 专用服务器的下的网络模型 ")]),_:1}),en,on,s(e,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[a(" 你说客户端没有什么权限。可是！客户端总得发送我的按键消息吧！ ")]),_:1}),s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 是的，客户端总得通过一个方法去告诉服务器自己的行为，我们把这个过程称为RPC. ")]),_:1}),cn,ln,pn,rn,dn,s(e,{avatar:" ../../assets/emoji/bqb (6).png",avatarWidth:40},{default:t(()=>[a(" 6!所以我该怎么改才能让客户端生成的Actor能同步到服务器呢？ ")]),_:1}),s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[un]),_:1}),mn,vn,s(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 现在康康你原本的思路。 ")]),_:1}),hn,n("p",null,[n("a",gn,[a("《守望先锋》中的网络脚本武器和能力"),s(i)])]),n("p",null,[n("a",bn,[a("大佬博客"),s(i)])]),n("p",null,[n("a",kn,[a("官方论坛"),s(i)])])])}const An=m(C,[["render",_n],["__file","2-GamePlayNetWork.html.vue"]]);export{An as default};
