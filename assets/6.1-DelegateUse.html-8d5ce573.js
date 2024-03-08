import{_ as o,r as c,o as i,c as l,d as e,w as t,e as p,a as n,b as a}from"./app-d070a7fb.js";const u="/RenderDocZHS/assets/DelegateUse001-9a43aa25.png",r="/RenderDocZHS/assets/DelegateUse002-3eb0abd0.png",d="/RenderDocZHS/assets/DelegateUse003-330a08e5.png",k="/RenderDocZHS/assets/DelegateUse004-248fe9a8.png",v={},m=p(`<h2 id="单播委托" tabindex="-1"><a class="header-anchor" href="#单播委托" aria-hidden="true">#</a> 单播委托</h2><h3 id="_1-声明委托" tabindex="-1"><a class="header-anchor" href="#_1-声明委托" aria-hidden="true">#</a> 1. <strong>声明委托：</strong></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">DECLARE_DELEGATE</span><span class="token punctuation">(</span>FMyDelegate<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//无参数</span>
<span class="token function">DECLARE_DELEGATE_OneParam</span><span class="token punctuation">(</span>FMyDelegateOneParam<span class="token punctuation">,</span>int32<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//带参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=n("p",null,[a("参数列表多个参数时，必须用：返回类型+"),n("code",null,"，"),a("+参数名如："),n("code",null,"int32,Param")],-1),b=p(`<h3 id="_2-定义委托实例" tabindex="-1"><a class="header-anchor" href="#_2-定义委托实例" aria-hidden="true">#</a> 2. <strong>定义委托实例：</strong></h3><p>在类中定义委托的实例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    FMyDelegate MyDelegate<span class="token punctuation">;</span><span class="token comment">//纯C++无参单播</span>
   
    <span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintAssignable<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;MyCategory&quot;</span><span class="token punctuation">)</span><span class="token comment">//暴露给蓝图</span>
    FMyDelegate MyDelegate2<span class="token punctuation">;</span>

    FMyDelegateOneParam MyDelegateOneParam<span class="token punctuation">;</span><span class="token comment">//一个参数的单播</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-绑定和解绑委托" tabindex="-1"><a class="header-anchor" href="#_3-绑定和解绑委托" aria-hidden="true">#</a> 3. <strong>绑定和解绑委托：</strong></h3><p><s>在构造函数或其他地方绑定和解绑委托：</s><br> 在合适的实际绑定或者解绑委托</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 绑定委托</span>
MyDelegate<span class="token punctuation">.</span><span class="token function">BindUObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>AMyActor<span class="token double-colon punctuation">::</span>MyFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//解绑</span>
MyDelegate<span class="token punctuation">.</span><span class="token function">Unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    

 <span class="token comment">//绑定带参数的委托</span>
 MyDelegateOneParam<span class="token punctuation">.</span><span class="token function">BindUObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>AMyActor<span class="token double-colon punctuation">::</span>MyFunctionWithParam<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token comment">// 解绑委托</span>
 MyDelegateOneParam<span class="token punctuation">.</span><span class="token function">Unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-委托的回调函数" tabindex="-1"><a class="header-anchor" href="#_4-委托的回调函数" aria-hidden="true">#</a> 4. <strong>委托的回调函数：</strong></h3><p>定义委托回调的成员函数：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UFUNCTION</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//无参数单播委托被触发时执行的代码</span>
<span class="token punctuation">}</span>

<span class="token function">UFUNCTION</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">MyFunctionWithParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 带参数单播委托被触发时执行的代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-触发委托" tabindex="-1"><a class="header-anchor" href="#_5-触发委托" aria-hidden="true">#</a> 5. <strong>触发委托：</strong></h3><p>在适当的地方触发委托：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 触发委托</span>
MyDelegate<span class="token punctuation">.</span><span class="token function">ExecuteIfBound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 触发带参数的委托</span>
MyDelegateWithParam<span class="token punctuation">.</span><span class="token function">ExecuteIfBound</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda" aria-hidden="true">#</a> Lambda</h2><p>合理利用Lambda表达式</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>FInfoUpdatedDelegate DynamicDelegate<span class="token punctuation">;</span>
DynamicDelegate<span class="token punctuation">.</span><span class="token function">CreateLambda</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>DynamicDelegate<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
、、、、、
<span class="token comment">//用完后解绑	 		</span>
DynamicDelegate<span class="token punctuation">.</span><span class="token function">Unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="球体例子" tabindex="-1"><a class="header-anchor" href="#球体例子" aria-hidden="true">#</a> 球体例子</h2><h3 id="_1-新建actor类添加对应组件" tabindex="-1"><a class="header-anchor" href="#_1-新建actor类添加对应组件" aria-hidden="true">#</a> 1. 新建Actor类添加对应组件</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//静态网格物体</span>
<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>VisibleAnywhere<span class="token punctuation">,</span> BlueprintReadOnly<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;EquipmentMesh&quot;</span><span class="token punctuation">,</span> meta <span class="token operator">=</span> <span class="token punctuation">(</span>AllowPrivateAccess <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
TObjectPtr<span class="token operator">&lt;</span>UStaticMeshComponent<span class="token operator">&gt;</span> StaticMesh<span class="token punctuation">;</span>

<span class="token comment">// 球形触发器</span>
<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>VisibleAnywhere<span class="token punctuation">,</span> BlueprintReadOnly<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;Trigger&quot;</span><span class="token punctuation">,</span> meta <span class="token operator">=</span> <span class="token punctuation">(</span>AllowPrivateAccess <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
TObjectPtr<span class="token operator">&lt;</span>USphereComponent<span class="token operator">&gt;</span> TriggerSphere<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),h=n("figure",null,[n("img",{src:u,alt:"这是Actor自身的触发函数",tabindex:"0",loading:"lazy"}),n("figcaption",null,"这是Actor自身的触发函数")],-1),f=n("h3",{id:"_2-球体组件委托绑定",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-球体组件委托绑定","aria-hidden":"true"},"#"),a(" 2. 球体组件委托绑定")],-1),_=n("figure",null,[n("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),y=p(`<div class="hint-container note"><p class="hint-container-title">注</p><p>线程安全（Thread Safety）是指一个程序或者代码在多线程环境下执行时，能够保持正确的行为。当多个线程同时访问共享的数据或资源时，如果没有适当的同步机制，可能导致不确定的结果，甚至引发一些难以调试和修复的问题。线程安全的目标是确保在多线程环境中程序的行为是可预测和正确的。</p><ol><li><p><strong>竞态条件（Race Condition）：</strong> 当两个或多个线程同时访问共享资源，并且至少一个线程对资源进行了写操作，就可能发生竞态条件。这可能导致不一致的结果，因为线程执行的顺序是不确定的。</p></li><li><p><strong>互斥锁（Mutex）：</strong> 互斥锁是一种用于保护共享资源的同步机制。它确保在任何时刻，只有一个线程能够访问共享资源，其他线程必须等待锁被释放。</p></li><li><p><strong>死锁（Deadlock）：</strong> 死锁是指两个或多个线程无限期地阻塞等待彼此持有的锁。这种情况会导致程序无法继续执行。</p></li><li><p><strong>原子操作（Atomic Operation）：</strong> 原子操作是不可被中断的操作，它在执行时不会被其他线程干扰。在多线程环境中，原子操作可以用来确保某些操作的完整性，而不会受到其他线程的影响。</p></li><li><p><strong>可重入性（Reentrancy）：</strong> 可重入性是指一个函数可以被多个线程同时调用，而不会导致不确定的行为。函数内部使用的资源应该是线程私有的或者受到适当的同步控制。</p></li></ol></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">AEquipmentBase</span><span class="token double-colon punctuation">::</span><span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">Super</span><span class="token double-colon punctuation">::</span><span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	TriggerSphere<span class="token operator">-&gt;</span>OnComponentBeginOverlap<span class="token punctuation">.</span><span class="token function">AddDynamic</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>AEquipmentBase<span class="token double-colon punctuation">::</span>OnBeginOverlap<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	TriggerSphere<span class="token operator">-&gt;</span>OnComponentEndOverlap<span class="token punctuation">.</span><span class="token function">AddDynamic</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>AEquipmentBase<span class="token double-colon punctuation">::</span>OnEndOverlap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),O=n("h3",{id:"_3-回调函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-回调函数","aria-hidden":"true"},"#"),a(" 3. 回调函数")],-1),D=p('<figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UFUNCTION</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">OnBeginOverlap</span><span class="token punctuation">(</span> UPrimitiveComponent<span class="token operator">*</span> OverlappedComponent<span class="token punctuation">,</span> AActor<span class="token operator">*</span> OtherActor<span class="token punctuation">,</span> UPrimitiveComponent<span class="token operator">*</span> OtherComp<span class="token punctuation">,</span> int32 OtherBodyIndex<span class="token punctuation">,</span> <span class="token keyword">bool</span> bFromSweep<span class="token punctuation">,</span> <span class="token keyword">const</span> FHitResult <span class="token operator">&amp;</span> SweepResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">UFUNCTION</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">OnEndOverlap</span><span class="token punctuation">(</span>UPrimitiveComponent<span class="token operator">*</span> OverlappedComponent<span class="token punctuation">,</span> AActor<span class="token operator">*</span> OtherActor<span class="token punctuation">,</span> UPrimitiveComponent<span class="token operator">*</span> OtherComp<span class="token punctuation">,</span> int32 OtherBodyIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function U(A,C){const s=c("chatmessage");return i(),l("div",null,[m,e(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[g]),_:1}),b,e(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 误区：是球体组件委托不是Actor的Over函数 ")]),_:1}),h,f,e(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 既然是组件本身的委托，必然是组件的成员函数，意味着要用组件来绑定委托。 ")]),_:1}),_,e(s,{avatar:"../../assets/emoji/new9.png",avatarWidth:40},{default:t(()=>[a(" 那么绑定时机呢？ ")]),_:1}),e(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 一般在BeginPlay中，不推荐在构造函数中，容易出现线程安全问题。 ")]),_:1}),y,e(s,{avatar:"../../assets/emoji/new9.png",avatarWidth:40},{default:t(()=>[a(" 我明白了！你这其实是组件中定义了委托，在其他类中绑定了回调函数，组件触发了对应的绑定函数也就触发了！ ")]),_:1}),e(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 没错！这就是委托的订阅机制，也称观察者模式。 ")]),_:1}),O,e(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 回调函数就简单了！我们可以根据球体的委托定义对应参数个数的回调函数。 ")]),_:1}),D,e(s,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[a(" 注意参数别漏抄少抄!这个UFUNCTION是必须的！要不然UE中根本不会调用函数！ ")]),_:1}),x])}const P=o(v,[["render",U],["__file","6.1-DelegateUse.html.vue"]]);export{P as default};
