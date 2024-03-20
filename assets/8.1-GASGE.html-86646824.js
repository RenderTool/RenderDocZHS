import{_ as d,r as o,o as c,c as g,d as e,w as n,e as r,a,b as t}from"./app-f9abccac.js";const l="/RenderDocZHS/assets/gas018-6ffde121.png",h="/RenderDocZHS/assets/gas028-4054c5e5.png",f="/RenderDocZHS/assets/gas029-ce693a5d.png",u="/RenderDocZHS/assets/gas027-2e9150d3.png",_="/RenderDocZHS/assets/gas030-4e2442ae.png",p="/RenderDocZHS/assets/gas031-0260961c.png",b="/RenderDocZHS/assets/gas032-249aa06b.png",m="/RenderDocZHS/assets/gas034-c7684897.png",v="/RenderDocZHS/assets/gas033-cf76a24e.png",y="/RenderDocZHS/assets/gas035-fe1e6eda.png",x="/RenderDocZHS/assets/gas020-b7900426.png",D="/RenderDocZHS/assets/gas022-4a3d3a01.png",S="/RenderDocZHS/assets/gas026-f89c26e5.png",j="/RenderDocZHS/assets/gas025-42ca9e7d.png",W="/RenderDocZHS/assets/gas023-e1ca5b0a.png",q="/RenderDocZHS/assets/gas024-1fc909cf.png",L="/RenderDocZHS/assets/gas021-71a9a120.png",A={},z=r('<h2 id="gameplayeffect" tabindex="-1"><a class="header-anchor" href="#gameplayeffect" aria-hidden="true">#</a> <strong>GameplayEffect</strong></h2><p>GameplayEffect简称GE，它是技能Buff、被动技能、技能伤害等各种游戏效果的抽象</p><blockquote><p>本章是对GE各个属性的理解。</p></blockquote><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="periodic" tabindex="-1"><a class="header-anchor" href="#periodic" aria-hidden="true">#</a> <strong>Periodic</strong></h2><h3 id="period" tabindex="-1"><a class="header-anchor" href="#period" aria-hidden="true">#</a> Period</h3><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="periodic-inhibition-policy" tabindex="-1"><a class="header-anchor" href="#periodic-inhibition-policy" aria-hidden="true">#</a> Periodic Inhibition Policy</h3><blockquote><p>某个周期性基础上，如何采取抑制行为或制定抑制策略。</p></blockquote>',9),H=a("p",null,[t("在Instant状态下（详见后面的"),a("a",{href:"#duration-policy"},"Duration Policy"),t("）只有一个 Periodic Inhibition Policy")],-1),R=a("figure",null,[a("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),Z=a("hr",null,null,-1),P=a("p",null,[t("在持续(Duration)下（详见后面的"),a("a",{href:"#duration-policy"},"Duration Policy"),t("）会多出两个选项。")],-1),k=a("figure",null,[a("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),E=a("hr",null,null,-1),G=a("h3",{id:"execute-periodic-effect-on-application-阶段执行周期性效果",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#execute-periodic-effect-on-application-阶段执行周期性效果","aria-hidden":"true"},"#"),t(" Execute Periodic Effect on Application|阶段执行周期性效果")],-1),I=a("figure",null,[a("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),B=a("p",null,[t("当然如果在无限(Infinite)状态下（详见后面的"),a("a",{href:"#duration-policy"},"Duration Policy"),t("）则会一直加下去")],-1),M=a("p",null,[t("有BUG!!!!你前面说"),a("code",null,"相当于这个100伤害维持2s，2s后就恢复到原来的伤害"),t("现在我设置了Period，并且持续(Duration)下。 重复触发，发现数值并不是从原来的开始！")],-1),N=r('<p>TODO</p><h2 id="stacking" tabindex="-1"><a class="header-anchor" href="#stacking" aria-hidden="true">#</a> Stacking</h2><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="stacking-type" tabindex="-1"><a class="header-anchor" href="#stacking-type" aria-hidden="true">#</a> Stacking Type</h3>',4),T=a("figure",null,[a("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),V=a("figure",null,[a("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),w=a("h3",{id:"_1-none",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-none","aria-hidden":"true"},"#"),t(),a("strong",null,"1.None")],-1),C=a("figure",null,[a("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),O=a("figure",null,[a("img",{src:y,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),U=a("h3",{id:"_2-aggregatebysource",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-aggregatebysource","aria-hidden":"true"},"#"),t(),a("strong",null,"2.AggregateBySource")],-1),F=a("h2",{id:"gameplayeffect-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gameplayeffect-1","aria-hidden":"true"},"#"),t(),a("strong",null,"GameplayEffect")],-1),J=a("h3",{id:"duration-policy",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#duration-policy","aria-hidden":"true"},"#"),t(" Duration Policy")],-1),K=a("figure",null,[a("img",{src:x,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),Q=r('<h3 id="_1-instant-即刻" tabindex="-1"><a class="header-anchor" href="#_1-instant-即刻" aria-hidden="true">#</a> 1. <strong>Instant|即刻</strong></h3><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="modifier" tabindex="-1"><a class="header-anchor" href="#modifier" aria-hidden="true">#</a> Modifier</h3><h4 id="attribute" tabindex="-1"><a class="header-anchor" href="#attribute" aria-hidden="true">#</a> Attribute</h4>',4),X=a("h4",{id:"modifier-op",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#modifier-op","aria-hidden":"true"},"#"),t(" Modifier-OP")],-1),Y=r('<figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>操作</th><th>描述</th><th>类型</th></tr></thead><tbody><tr><td>Add</td><td>将指定值加到计算结果上。使用负数实现减法操作。</td><td>ModifierAttribute</td></tr><tr><td>Multiply</td><td>将计算结果乘以指定值。</td><td>ModifierAttribute</td></tr><tr><td>Divide</td><td>将计算结果除以指定值。</td><td>ModifierAttribute</td></tr><tr><td>Override</td><td>使用计算结果覆盖指定的值。</td><td>ModifierAttribute</td></tr></tbody></table>',2),$=a("figure",null,[a("img",{src:j,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),aa=a("h3",{id:"_2-infinite-无限",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-infinite-无限","aria-hidden":"true"},"#"),t(" 2. "),a("strong",null,"Infinite|无限")],-1),ta=a("figure",null,[a("img",{src:W,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),ea=a("h3",{id:"_3-duration-持续",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-duration-持续","aria-hidden":"true"},"#"),t(" 3."),a("strong",null,"Duration|持续")],-1),ia=a("figure",null,[a("img",{src:q,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),na=a("h3",{id:"duration-magnitude",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#duration-magnitude","aria-hidden":"true"},"#"),t(" Duration Magnitude")],-1),sa=a("figure",null,[a("img",{src:L,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function ra(oa,da){const i=o("chatmessage"),s=o("gifwithbutton");return c(),g("div",null,[z,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[H]),_:1}),R,Z,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[P]),_:1}),k,E,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 打个比方，比如现在我有一个持续2s的加伤100的buff,如果你不配置这个Period 相当于这个100伤害维持2s，2s后就恢复到原来的伤害。 ")]),_:1}),e(s,{src:"../../assets/unrealgif/move02.gif"}),e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 现在你给他设置0.2，意味着每0.2s就会触发一次加伤100，持续2s。 ")]),_:1}),e(s,{src:"../../assets/unrealgif/move03.gif"}),e(i,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[t(" 为什么是1200？不是1100？ ")]),_:1}),e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 这就和我们下面的配置有关了。 ")]),_:1}),G,I,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 如果勾选Execute Periodic Effect on Application，默认是从0次开始计算，0.2s/次持续2s正好加了11次。 如果不勾选，则先延迟0.2s后开始执行。 ")]),_:1}),e(s,{src:"../../assets/unrealgif/move04.gif"}),e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[B]),_:1}),e(s,{src:"../../assets/unrealgif/move05.gif"}),e(i,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[M]),_:1}),e(s,{src:"../../assets/unrealgif/move06.gif"}),N,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" Stacking Type有None、AggregateBySource 、AggregateByTarget三种。 ")]),_:1}),T,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 现在假定我们有3个效果生成器。 ")]),_:1}),V,w,C,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 如果是None状态下，去触摸。 ")]),_:1}),e(s,{src:"../../assets/unrealgif/move07.gif"}),e(i,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[t(" 好像3个同时生效了。 ")]),_:1}),e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 准确来说，是三个按序生效了，就像栈一样按序进入了。即便是我们把下面的Stack Limit Count给了1，发现依然是这样。 ")]),_:1}),O,U,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 便于理解，我画了个图分别介绍AggregateBySource和AggregateByTarget。 ")]),_:1}),F,J,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" GameplayEffect有三种持续类型: 即刻(Instant)持续(Duration)无限(Infinite) ")]),_:1}),e(i,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[t(" 这个也很好理解，比如5s内（Duration）持续增益，又比如装备破军后立即(Instant)获得180攻击，或者是V8全局收益300%（本局Infinite） ")]),_:1}),K,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 不同状态有不同的配置策略，我们一个一个介绍。 ")]),_:1}),Q,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 没啥好说的，就是你设定好的AS属性。 ")]),_:1}),X,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 简单来讲，Modifier是通过各自设定好的算法去修改Attribute,比如加减乘除。 ")]),_:1}),Y,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 比如我装备了某个角色皮肤，立即增加10点体力。 ")]),_:1}),$,aa,e(i,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[t(" 和Instant一样！ ")]),_:1}),ta,ea,ia,e(i,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[t(" 多了一个Duration Magnitude ")]),_:1}),na,sa,e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 需要注意，这个只是持续这段时间，我们GAS中已经介绍过，这段时间内他修改CurrentValue。 ")]),_:1}),e(i,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[t(" 是5s内增加10还是说每秒都增加10？ ")]),_:1}),e(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:n(()=>[t(" 是指给你加10点伤害，只能维持5s，不是每秒给你加10。 ")]),_:1})])}const ga=d(A,[["render",ra],["__file","8.1-GASGE.html.vue"]]);export{ga as default};
