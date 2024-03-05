import{_ as c,r as p,o as l,c as r,d as s,w as e,a as n,b as a,e as o}from"./app-856193f9.js";const u="/RenderDocZHS/assets/network004-e57c7e2e.png",d="/RenderDocZHS/assets/network005-2ad0adb8.png",v="/RenderDocZHS/assets/network006-20630c59.jpg",k="/RenderDocZHS/assets/network007-88ca1e10.png",b="/RenderDocZHS/assets/network008-830f402d.jpg",m="/RenderDocZHS/assets/network009-40fbebf6.png",g="/RenderDocZHS/assets/network010-28090f2b.jpg",h="/RenderDocZHS/assets/network011-b8a8644b.jpg",f="/RenderDocZHS/assets/replicate024-2a3e244b.png",_={},y=n("h2",{id:"导言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导言","aria-hidden":"true"},"#"),a(" 导言")],-1),x=n("h2",{id:"前置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前置","aria-hidden":"true"},"#"),a(" 前置")],-1),S=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	<span class="token comment">/** 
	 * Called when this Pawn is possessed. Only called on the server (or in standalone).
	 * @param NewController The controller possessing this pawn
	 */</span>
	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">PossessedBy</span><span class="token punctuation">(</span>AController<span class="token operator">*</span> NewController<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="possessedby" tabindex="-1"><a class="header-anchor" href="#possessedby" aria-hidden="true">#</a> PossessedBy</h3>`,2),P=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">AExorcistHeroCharacter</span><span class="token double-colon punctuation">::</span><span class="token function">PossessedBy</span><span class="token punctuation">(</span>AController<span class="token operator">*</span> NewController<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">Super</span><span class="token double-colon punctuation">::</span><span class="token function">PossessedBy</span><span class="token punctuation">(</span>NewController<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">UE_LOG</span><span class="token punctuation">(</span>LogTemp<span class="token punctuation">,</span> Warning<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;PossessedBy %d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">InitAbilityActorInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>InitAbilityActorInfo()中写了计数函数主要负责++处理，以及获取玩家PlayerState</p></blockquote>`,2),j=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),A=n("figure",null,[n("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),W=n("figure",null,[n("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),w=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),L=n("h3",{id:"playerstate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playerstate","aria-hidden":"true"},"#"),a(" PlayerState")],-1),C=n("figure",null,[n("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),q=n("h3",{id:"onrep-playerstate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onrep-playerstate","aria-hidden":"true"},"#"),a(" OnRep_PlayerState")],-1),E=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">AExorcistHeroCharacter</span><span class="token double-colon punctuation">::</span><span class="token function">OnRep_PlayerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">Super</span><span class="token double-colon punctuation">::</span><span class="token function">OnRep_PlayerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">UE_LOG</span><span class="token punctuation">(</span>LogTemp<span class="token punctuation">,</span> Warning<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;OnRep_PlayerState %d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">InitAbilityActorInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I=n("figure",null,[n("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),R=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span>BlueprintReadWrite<span class="token punctuation">)</span>
	int32 count <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),U=n("h3",{id:"子系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#子系统","aria-hidden":"true"},"#"),a(" 子系统")],-1),B=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">AExorcistHeroCharacter</span><span class="token double-colon punctuation">::</span><span class="token function">InitAbilityActorInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	UExorcistAbilitySubsystem<span class="token operator">*</span> ExorcistAbilitySubsystem <span class="token operator">=</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetGameInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UExorcistAbilitySubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	ExorcistAbilitySubsystem<span class="token operator">-&gt;</span><span class="token function">InitOverlay</span><span class="token punctuation">(</span>AbilitySystemComponent<span class="token punctuation">,</span> AttributeSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
	ExorcistAbilitySubsystem<span class="token operator">-&gt;</span><span class="token function">BroadCastInitialValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O=n("figure",null,[n("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),G=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">IsLocallyControlled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
		<span class="token comment">//调用子系统，利用子系统转发GE委托或者能力等</span>
    	UExorcistAbilitySubsystem<span class="token operator">*</span> ExorcistAbilitySubsystem <span class="token operator">=</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetGameInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UExorcistAbilitySubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>ExorcistAbilitySubsystem<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//子系统初始化组件，并将初始GE加载显示。</span>
		ExorcistAbilitySubsystem<span class="token operator">-&gt;</span><span class="token function">InitOverlay</span><span class="token punctuation">(</span>AbilitySystemComponent<span class="token punctuation">,</span> AttributeSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ExorcistAbilitySubsystem<span class="token operator">-&gt;</span><span class="token function">BroadCastInitialValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H=n("h3",{id:"思考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思考","aria-hidden":"true"},"#"),a(" 思考")],-1),D=n("figure",null,[n("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),N=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">const</span> ULocalPlayer<span class="token operator">*</span> LocalPlayerController <span class="token operator">=</span> <span class="token generic-function"><span class="token function">Cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>ULocalPlayer<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>PlayerController<span class="token operator">-&gt;</span>Player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),z=n("h2",{id:"实践",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实践","aria-hidden":"true"},"#"),a(" 实践")],-1);function T(Z,V){const t=p("chatmessage"),i=p("gifwithbutton");return l(),r("div",null,[s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 本想着归类到经验或者错误中，不过感觉这个和网络同步模块更加贴切，遗忘时更容易定位回来。 ")]),_:1}),y,s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 我们已经知道了RPC的调用、Actor的复制、变量的复制等。但实际开发中，一些RunOnServer的行为，比如靠近某个物体掉血。 可是我是用类似子系统（非Actor管理类）去完成这个任务时，所有客户端都会显示UI，该怎么解决？ ")]),_:1}),s(i,{src:"../../assets/unrealgif/hpup08.gif"}),x,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 咱们已经清楚所有Character继承自Pawn，Pawn继承自Actor,玩家控制器获取某个Pawn的控制权时，会调用PossessedBy。 ")]),_:1}),S,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 通过源码追溯，PossessedBy接口最早出现在Pawn类中。记住这里的注释 Only called on the server，意味着这个函数 只会在服务器上执行。 ")]),_:1}),s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 那么到底谁会执行PossessedBy？ ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 事实上所有放入场景的Pawn类即便没人去控制也会执行，只不过这时候是AI控制器在代理执行。为了测试我们可以加入以下代码 ")]),_:1}),P,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 然后在场景中运行，不出意外只会打印一次。 ")]),_:1}),j,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 现在我们在场景中丢个Pawn进去 ")]),_:1}),A,s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 为什么会被打印两次？ ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 因为场景中的Pawn默认会交给AI控制器Possess，而且咱们的代码并没有做控制器类型判断。 ")]),_:1}),W,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 通过禁用控制器也可以验证这一点。 ")]),_:1}),w,L,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 所以PossessedBy处理获取玩家PlayerState的时要额外小心，因为AI是没有PlayerState的，会导致内存异常。 ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 现在我们考虑客户端加入的情况。 ")]),_:1}),C,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 可以看到主机和客户端各自都会执行一次自己的PossessBy ")]),_:1}),q,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 有意思的来了，OnRep_PlayerState被执行了多少次？ ")]),_:1}),E,s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 看到我头皮发麻，所以到底执行了几次？ ")]),_:1}),I,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 虽然我们使用了计数也可以配合C++Debug程序，但这种多玩家的情况还是借助引擎蓝图比较靠谱。 所以我们干脆公开计数变量，看看各自的Character中都执行了几次。 ")]),_:1}),R,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 可以无论是客户端还是服务器，各自拥有的Character都执行了一次OnRep_PlayerState(); ")]),_:1}),s(i,{src:"../../assets/unrealgif/hpup06.gif"}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 其实这个问题我们在网路同步02就提到过了，变量的回调RepNotify|OnRepC++中会在变量本身改变时触发。 所以这里每个都只执行了一次。 ")]),_:1}),U,s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 问题来了，我在子系统中写了一些UI委托转发逻辑，一个客户端触发了所有客户端都跟着触发了！ ")]),_:1}),s(i,{src:"../../assets/unrealgif/hpup08.gif"}),B,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 虽然子系统本身是不会进行网络同步的，我们可以在子系统中也加入引用计数。 其实不用调试也能猜到，子系统中AbilitySystemComponent和AttributeSet会被覆盖成最后一个玩家的数据， ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 当AbilitySystemComponent和AttributeSet覆盖成新值时，原本的委托并没有解绑，他会继续绑定新的委托。 ")]),_:1}),O,s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 难怪我玩家A的血条一扣，所有玩家的HUD血条也跟着扣，但其实这个血量并不是玩家B自己的，而是玩家A的。。 ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 借助蓝图调试可以进一步验证这点 ")]),_:1}),s(i,{src:"../../assets/unrealgif/hpup09.gif"}),s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 那该怎么解决呢？ ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 按照单一职责原则，某个类不应该有过多的逻辑限制其他使用者，比如判断是不是本地玩家，子系统并不关心使用者是谁。 通过IsLocallyControlled可以判断是不是本地玩家,简单高效。 ")]),_:1}),G,s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 为什么这样就行了？ ")]),_:1}),H,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 从网络复制角度上来说，子系统本身并不支持复制。而是所有端都有的一个UObject，网络同步01咱们讨论过，一个Actor开启复制和普通的 UObject没区别，子系统在这里也一样。 ")]),_:1}),s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 那么我们咱们才能正确的调用对应端的子系统完成我们的任务呢？ ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 虽然子系统本身无法复制，但使用者可以自己判断执行者，比如先前咱们案例中判断是不是本地玩家，然后本地玩家去执行。 ")]),_:1}),s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 这样可行吗？ ")]),_:1}),s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 可不可行不是已经有结果了嘛？而且你有没有发现一些内置官方函数是需要传入PlayerController的？比如增强输入系统。 ")]),_:1}),s(t,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 这么说还真是！增强输入系统继承自ULocalPlayerSubsystem，意味着必须传入本地玩家才会生效。 ")]),_:1}),D,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 是的，使用它时需要传入一个PlayerController指针。 ")]),_:1}),N,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 明白这点以后，凡是涉及某个Player的操作都可以这么玩，比如显示某个道具的UI ")]),_:1}),s(i,{src:"../../assets/unrealgif/hpup18.gif"}),z,s(t,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 在下一篇中，我们将以UI管理子系统为切入点，进一步思考网络同步。 ")]),_:1})])}const Y=c(_,[["render",T],["__file","2.2.-GamePlayNetWork.html.vue"]]);export{Y as default};
