import{_ as n,r as o,o as d,c as l,d as s,w as i,a,b as t,e as r}from"./app-ca7cc0fa.js";const c="/RenderDocZHS/assets/110-Vlado-full (1)-9da622bb.jpg",g="/RenderDocZHS/assets/Light001-95b2e1ec.jpg",_="/RenderDocZHS/assets/lightmap001-3c987b9f.png",h="/RenderDocZHS/assets/lightmap002-9bf8b361.png",p="/RenderDocZHS/assets/lightmap003-fbb901ff.png",f="/RenderDocZHS/assets/lightmap004-9455116e.jpg",u="/RenderDocZHS/assets/lightmap005-9b40a672.jpg",m="/RenderDocZHS/assets/lightmap006-7bf92917.jpg",v="/RenderDocZHS/assets/lightmap007-1b165c80.png",j="/RenderDocZHS/assets/lightmap008-4fd160fd.jpg",b="/RenderDocZHS/assets/lightmap009-881e4013.jpg",x={},y=a("figure",null,[a("img",{src:c,alt:"110-Vlado-full (1).jpg",tabindex:"0",loading:"lazy"}),a("figcaption",null,"110-Vlado-full (1).jpg")],-1),W=a("h2",{id:"从灯光开始",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#从灯光开始","aria-hidden":"true"},"#"),t(" 从灯光开始")],-1),R=a("figure",null,[a("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),S=r("<ol><li><p><strong>固定管线时代：</strong> 在早期的游戏引擎中，使用固定管线图形渲染流水线。灯光通常是基于简单的光照模型，如冯·肖定律（Phong Shading）等。这种方法的计算相对简单，但在细节和真实感方面表现一般。</p></li><li><p><strong>可编程管线和着色器：</strong> 随着可编程图形管线的出现，引擎可以更灵活地处理灯光。开发者可以使用自定义的着色器编写更复杂的光照算法，如基于物理的渲染（Physically Based Rendering，PBR）。PBR模型更准确地模拟了真实世界中光的反射和折射。</p></li><li><p><strong>实时光照技术：</strong> 引擎开始引入实时光照技术，如实时全局光照（Real-Time Global Illumination）和实时阴影技术。这些技术旨在模拟真实世界中的光照效果，提高场景的真实感。包括屏幕空间反射（Screen Space Reflection）和环境遮挡（Ambient Occlusion）等技术。</p></li><li><p><strong>实时光追：</strong> 随着硬件性能的提升，一些引擎引入了实时光追技术，这种技术通过模拟光线在场景中的传播来实现更高质量的光照效果。实时光追通常需要更强大的计算资源，但可以提供更真实的光照和阴影。</p></li><li><p><strong>深度学习和实时渲染：</strong> 最近，深度学习技术开始应用于游戏渲染，例如基于机器学习的超分辨率技术、反走样和实时光照估计等。这些技术旨在通过神经网络等方法改善实时渲染的质量和性能。</p></li></ol>",1),L=a("h3",{id:"灯光烘培",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#灯光烘培","aria-hidden":"true"},"#"),t(" 灯光烘培")],-1),z=a("figure",null,[a("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),D=a("blockquote",null,[a("p",null,"由于本人精力有限，这里记录一些重点，更加详细的还是看专门的视频吧，码字实在太累了！")],-1),H=a("h3",{id:"_2uv",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2uv","aria-hidden":"true"},"#"),t(" 2UV")],-1),Z=a("figure",null,[a("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),V=a("figure",null,[a("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),B=a("blockquote",null,[a("p",null,"图里确实是AO贴图，你没看错，AO叫环境光遮蔽，理论上也算灯光阴影贴图。")],-1),k=a("h3",{id:"光源色温",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#光源色温","aria-hidden":"true"},"#"),t(" 光源色温")],-1),N=a("figure",null,[a("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),P=a("figure",null,[a("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),A=a("h3",{id:"光源大小",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#光源大小","aria-hidden":"true"},"#"),t(" 光源大小")],-1),O=a("figure",null,[a("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),U=a("figure",null,[a("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),q=a("h3",{id:"物体影响",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#物体影响","aria-hidden":"true"},"#"),t(" 物体影响")],-1),w=a("figure",null,[a("img",{src:j,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),C=a("h3",{id:"构图",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#构图","aria-hidden":"true"},"#"),t(" 构图")],-1),E=a("figure",null,[a("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function T(G,I){const e=o("chatmessage");return d(),l("div",null,[s(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:i(()=>[t(" 为什么我的材质质感总是达不到想要的效果？ ")]),_:1}),s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" everything has fresnel!但前提是要有光！ ")]),_:1}),y,W,s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 说到灯光，我们肯定先能想到日常生活中的太阳、电灯、手电等。当然游戏中还有一些例子特效等。 这些光源或是直接影响物体，或是间接影响物体。 ")]),_:1}),R,s(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:i(()=>[t(" 可是为什么总觉得游戏中的质感就是没有渲染器渲染的好？ ")]),_:1}),s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 游戏引擎不比离线灯光算法的，离线渲染器只要你想，可以一直用渐进式渲下去，游戏往往需要在每秒60帧的时间内计算出灯光效果，每帧不得超过60毫秒。 ")]),_:1}),S,s(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:i(()=>[t(" 可是早期我看游戏灯光不也挺自然的吗？ ")]),_:1}),L,s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 你看到的可能是提前渲染烘培好的灯光，然后保存到一张贴图中，我们通常把这个贴图叫灯光贴图，这种计算烘培的技术在UE也叫Lightmass。 ")]),_:1}),z,D,H,s(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:i(()=>[t(" 问题来了！这个灯光贴图贴哪？我看有些灯光贴图的样子和本体不太一样啊！ ")]),_:1}),s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 问的好！游戏中分两套UV，第一套是给物体本身用的，第二套是拿来烘培灯光的。这也是烘培时代有些物体烘培后会出现黑面的原因之一，2uv没展！ ")]),_:1}),Z,V,B,k,s(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:i(()=>[t(" 可是有时候我们渲染的东西有色差啊！尤其是面料这种材质色彩特别明显。 ")]),_:1}),s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 灯光不仅仅拥有亮度，同时还有一个重要的属性——色温，你拍摄的环境有色温，你处理的手法等导致你口中所谓的色差。 ")]),_:1}),N,s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 某宝的截图 ")]),_:1}),P,A,s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(' 除了色温，光源本身的物理尺寸也会影响"质感"。 ')]),_:1}),O,s(e,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:i(()=>[t(" 可是我明明已经按照现实打光了！为什么还是没有质感？ ")]),_:1}),s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 现实中，尤其是拍电影的时候往往需要一些额外的灯光补充细节。 ")]),_:1}),U,q,s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 当然，物体本身也会影响你的场景亮度，比如下面不同透光类型的窗帘。 ")]),_:1}),w,C,s(e,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:i(()=>[t(" 还有一个重要元素就是构图的影响。好比你给女朋友拍照一个道理，合适的透视关系很重要！ ")]),_:1}),E])}const J=n(x,[["render",T],["__file","4-始于灯光.html.vue"]]);export{J as default};
