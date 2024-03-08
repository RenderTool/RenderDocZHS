import{_ as t}from"./spwanActor-3d08e19d.js";import{_ as o,r as e,o as c,c as p,d as l,w as r,a as n,b as s,e as i}from"./app-d070a7fb.js";const u="/RenderDocZHS/assets/spawnact-3bfd4102.png",d={},k=n("p",null,[n("code",null,"SpawnActorFromClass"),s("顾名思义，从类构建生成对象")],-1),m=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),v=n("h3",{id:"简单实例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单实例","aria-hidden":"true"},"#"),s(" 简单实例")],-1),_=n("blockquote",null,[n("p",null,"角色按1生成一个球")],-1),h=n("figure",null,[n("img",{src:t,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),f=n("iframe",{src:"https://blueprintue.com/render/tabw8zu8/",width:"100%",height:"500",scrolling:"no",allowfullscreen:""},null,-1),b=i(`<h3 id="cpp" tabindex="-1"><a class="header-anchor" href="#cpp" aria-hidden="true">#</a> cpp</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	<span class="token comment">//获取玩家ActorforwardVector</span>
	FVector forwardVector <span class="token operator">=</span> <span class="token function">GetActorForwardVector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//获取玩家ActorLocation</span>
	FVector location <span class="token operator">=</span> <span class="token function">GetActorLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//ForwardVector*200+Location</span>
	FVector <span class="token keyword">const</span> spawnLocation <span class="token operator">=</span>forwardVector <span class="token operator">*</span> <span class="token number">200</span> <span class="token operator">+</span> location<span class="token punctuation">;</span>

	UWorld<span class="token operator">*</span> <span class="token keyword">const</span> World <span class="token operator">=</span> <span class="token function">GetWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//断言</span>
	<span class="token function">check</span><span class="token punctuation">(</span>World<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	 World<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">SpawnActor</span><span class="token generic class-name"><span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>CurrentTarget<span class="token punctuation">,</span>spawnLocation<span class="token punctuation">,</span>FRotator<span class="token double-colon punctuation">::</span>ZeroRotator<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(w,V){const a=e("chatmessage");return c(),p("div",null,[l(a,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:r(()=>[k]),_:1}),m,v,_,h,f,b])}const F=o(d,[["render",g],["__file","14-SpawnActorfromClass.html.vue"]]);export{F as default};
