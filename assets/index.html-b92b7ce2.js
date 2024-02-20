import{_ as h,r,o as i,c as d,d as t,w as s,a as e,b as a,e as l}from"./app-4fdf0358.js";const c={},_=e("h2",{id:"我是",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#我是","aria-hidden":"true"},"#"),a(" 我是")],-1),p=e("p",null,"我接触的第一款游戏引擎不是UE，也不是起源、CE、U3D而是一款非常古董的3D游戏引擎.",-1),u=e("p",null,"直到上高中才接触的UE引擎，当时还是UE3(UDK)时代黄金，国内贴吧也是开荒阶。 天真的以为会点Kismet(蓝图前身)就能开发游戏，以至于想退学搞游戏。（在这里非常感谢我的父母的极力反对）",-1),g=e("blockquote",null,[e("p",null,"UE3时代萌生了许多优秀游戏例如战争机器、蝙蝠侠等，具体就问度娘吧。")],-1),f=e("p",null,"不巧的是，毕业后我并没有找到一份合适的UE工作岗位，妥协后找了一份3D建模渲染的工作。（是的，我被那清一色U3D开发劝退了）",-1),b=e("h2",{id:"缘起",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#缘起","aria-hidden":"true"},"#"),a(" 缘起")],-1),m=e("code",null,"补课",-1),v={href:"https://erichlof.github.io/THREE.js-PathTracing-Renderer/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"初窥",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#初窥","aria-hidden":"true"},"#"),a(" 初窥")],-1),j={href:"https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"目的很纯粹，看懂他写的东西，能扩展。学了一段时间后，发现我还是太年轻了，他的整个框架几乎都是使用原始js+threejs。",-1),k=e("h2",{id:"深坑",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#深坑","aria-hidden":"true"},"#"),a(" 深坑")],-1),P=e("p",null,"当我已经能大概看懂他框架部分后，发现另外一个严重的问题：他的render core部分不是用js写的，而是基于opengl es3写的shader。",-1),U=e("blockquote",null,[e("p",null,"后来我才搞懂语言和算法不是一个东西。")],-1),L=e("p",null,"OpenGL（Open Graphics Library）是一个用于渲染2D和3D图形的跨平台图形API。OpenGL Shading Language（GLSL）是OpenGL的一个组成部分， 它是一种类似C语言的编程语言，用于编写图形着色器程序，控制图形渲染的各个阶段，but和光线追踪算法一毛钱关系没有。",-1),D=e("blockquote",null,[e("p",null,"这下好了，彻底坑了，学完js的我试图生啃C语言（就是不学的意思啦）。")],-1),W=e("h2",{id:"摸索",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#摸索","aria-hidden":"true"},"#"),a(" 摸索")],-1),C=e("p",null,"当时没有game101这种大佬级别的课程，于是我用了最笨的方法——骚扰作者。",-1),q=e("a",{href:"https://zhuanlan.zhihu.com/p/128582904"},"《一周光线追踪》",-1),y=e("a",{href:"https://www.pbrt.org/"},"《pbrt》",-1),O=e("a",{href:"https://erichlof.github.io/THREE.js-PathTracing-Renderer/"}," github ",-1),B=e("h2",{id:"僵局",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#僵局","aria-hidden":"true"},"#"),a(" 僵局")],-1),G=e("p",null,"就这样，持续几个月后。我总算认识他写的东西了。",-1),S=e("h2",{id:"突变",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#突变","aria-hidden":"true"},"#"),a(" 突变")],-1),w=e("p",null,"风云突变，UE5横空出世，lumen、nanite大量新特性的出现，直接改变了UE4时代ligtmass烘培ligtmap的历史。",-1),R=e("blockquote",null,[e("p",null,"Lumen 是一套全动态全局光照和反射系统，专为次世代主机而设计。Lumen作为默认的全局光照系统， 可以使用多种光线追踪方法，解决大规模全局光照和反射。")],-1),M=e("p",null,[a("这时候的我依然痴迷我都支线任务：js+Pathtracing，以至于荒废了学习UE的大好时光。"),e("br"),a(" 当我再次下载UE的时候以及是UE5.0Beta了，里面大量的新特性让我措手不及...")],-1),V=e("h2",{id:"主线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主线","aria-hidden":"true"},"#"),a(" 主线")],-1),z=e("p",null,"一天，我梦中惊醒。我在干什么？我读书时的梦想到现在可一点都没实现。我到现在只是个简单会连连看（蓝图）的杂毛。",-1),A=l('<blockquote><p>这下好了，没得玩了。CPP真的看不懂一点。回头看才知道，这确实推荐给编程人员入门DEMO。</p></blockquote><p>看来学习CPP迫在眉睫。</p><h2 id="支线" tabindex="-1"><a class="header-anchor" href="#支线" aria-hidden="true">#</a> 支线</h2><p>说到支线，AI画图刚出来的时确实浅学了一下，还自己训练了几个lora、也面向gpt3.5开发了python小应用，摸索过基于WPF+OBS的直播推流。 后来，日常工作也不再是简单的渲染、建模，更多时候是调研一些新的模块任务，包括一些PBR材质扫描流程、拍照建模流程等、无缝贴图算法等。</p><h2 id="天真" tabindex="-1"><a class="header-anchor" href="#天真" aria-hidden="true">#</a> 天真</h2><p>入坑CPP才发现，自己真的年轻。这种掉头发级语言怎么会比python、js容易呢。可是UE除了蓝图、LUA、cpp、python也没得选啊。</p><h2 id="转折" tabindex="-1"><a class="header-anchor" href="#转折" aria-hidden="true">#</a> 转折</h2><blockquote><p>人们总是希望像电影主角那样，迎来某个剧情转折。</p></blockquote>',8),T=e("h2",{id:"前进",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前进","aria-hidden":"true"},"#"),a(" 前进")],-1),I=e("p",null,"活着，不放弃思考。",-1);function N(H,K){const n=r("chatmessage"),o=r("ExternalLinkIcon");return i(),d("div",null,[_,t(n,{avatar:"../assets/emoji/blzt.png",avatarWidth:40},{default:s(()=>[a(" 我是一个普通人，如果你希望通过看我的文章变成高手，不好意思我办不到。 ")]),_:1}),p,t(n,{avatar:"../assets/emoji/hx.png",avatarWidth:40,alignLeft:""},{default:s(()=>[a(" 太古老了我真的想不起名字了，只记得电驴上下载的本体，想起来再来补名字吧。 ")]),_:1}),u,g,f,b,e("p",null,[a("一开始，我的日常是建模、渲染维护APP的3D板块。每次渲染阶段都会有一小段的电脑无法操作时间。这时候喜欢抽出时间来给自己"),m,a(". 我不知道哪天开始，我看到了一个网页版光线追踪的Demo(准确来说是路径追踪)"),e("a",v,[a("地址"),t(o)]),a(" 正好当时我的项目中有改进移动版渲染画质的需求，于是潘多拉魔盒被打开了。")]),x,e("p",null,[a("下载完DEMO后我发现，阻碍我第一步前进的便是前端编程语言JavaScript以及他用到的"),e("a",j,[a("threejs"),t(o)]),a("(基于webgl)")]),t(n,{avatar:"../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:s(()=>[a(" 对于我来说简直堪比看天书。于是，我就找了几百集的js课程以及threejs课程进行简单入坑。 ")]),_:1}),E,t(n,{avatar:"../assets/emoji/ybk.png",avatarWidth:40},{default:s(()=>[a(" 回头来看这确实是DEMO，因为真的一点不考虑模块和通用结构。 ")]),_:1}),k,P,t(n,{avatar:"../assets/emoji/kclr.png",avatarWidth:40},{default:s(()=>[a(" 简直太可爱了（脏话），难不成还要学习opengl? ")]),_:1}),a(" 可是国内外的opengl教程都太少了，唯一能看到也只有官方的文档而已。可是，我想说可是，threejs基于webgl把能写的都写了,而他核心的渲染部分其实压根和opengl没关系。 "),U,L,D,W,C,t(n,{avatar:"../assets/emoji/ybk.png",avatarWidth:40},{default:s(()=>[a(" 老外人还怪热情的，知道我是个初学者，耐心的推荐了一些书籍给我，其中就有经典的 "),q,y,a(" 这是老外的"),O]),_:1}),B,G,t(n,{avatar:"../assets/emoji/kclr.png",avatarWidth:40},{default:s(()=>[a(" 只是认识了，里面的原理我是真看不懂，简直折磨。什么BVH、PBRShader、Raytracing、Pathtracing以及一大堆公式的代码化。 ")]),_:1}),a(" 我已经意识到，如果没有扎实的数学、编程基础根本搞不定这个。于是我放弃所谓的简单魔改的想法，定下心来了解基础的光线追踪原理，至于CPP我依然没兴趣去学。 "),S,w,R,M,t(n,{avatar:"../assets/emoji/blzt.png",avatarWidth:40},{default:s(()=>[a(" 这时候的我对gameplay框架、GAS、网络模块等压根没有概念。 ")]),_:1}),V,z,t(n,{avatar:"../assets/emoji/hx.png",avatarWidth:40},{default:s(()=>[a(" 对不起，没有诋毁蓝图大佬的意思。 ")]),_:1}),a(" 于是鬼使神差，我起床打得开了电脑。下了个说是推荐新人用的DEMO-lyra。 可当我打开他工程中的的UMG时我傻了，几乎都是空的，甚至连GameMode都是空的。每个文件点开都会唤起我的VS2019。 "),A,t(n,{avatar:"../assets/emoji/kclr.png",avatarWidth:40,alignLeft:""},{default:s(()=>[a(" 抱歉！现实是残酷的，穷人只能坚信学习可能改变命运。 ")]),_:1}),T,I])}const J=h(c,[["render",N],["__file","index.html.vue"]]);export{J as default};
