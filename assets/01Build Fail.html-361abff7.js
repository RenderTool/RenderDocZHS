import{_ as t,r as i,o as a,c as o,d as l,w as s,e as r,b as c}from"./app-3f521a46.js";const n="/RenderDocZHS/assets/builderror-1dbd0149.jpg",d="/RenderDocZHS/assets/build-46fc6f8c.jpg",g={},u=r('<figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h2><ol><li><p><strong>检查代码中的拼写和语法错误</strong>：</p><ul><li>确保代码中没有拼写错误或语法错误，可能导致编译器无法识别符号。</li></ul></li><li><p><strong>检查头文件和库的包含路径</strong>：</p><ul><li>确保你在项目中正确包含了所需的头文件和库文件。</li></ul></li><li><p><strong>确保依赖项正确链接</strong>：</p><ul><li>确保项目正确链接了所需的库文件，一般情况下都是对应的<code>xxx.build.cs</code>没有引入模块依赖。</li></ul></li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><strong>重新生成项目文件</strong>： <ul><li>在 UE 中，尝试删除 <code>Intermediate</code> 和 <code>Saved</code> 文件夹，然后重新生成项目文件。这将清除中间文件并尝试重新构建项目。</li></ul></li></ol>',5);function _(p,f){const e=i("chatmessage");return a(),o("div",null,[l(e,{avatar:"../../assets/emoji/bqb (4).png",avatarWidth:40},{default:s(()=>[c(" 写完代码，感觉自我良好，IDE也没报错，编译！——>报错！ ")]),_:1}),u])}const h=t(g,[["render",_],["__file","01Build Fail.html.vue"]]);export{h as default};
