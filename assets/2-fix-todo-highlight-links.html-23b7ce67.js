import{_ as a,r as t,o,c as i,a as e,b as n,d,e as r}from"./app-2494361c.js";const c={},l={href:"https://github.com/wayou/vscode-todo-highlight",target:"_blank",rel:"noopener noreferrer"},p=r(`<h2 id="修复" tabindex="-1"><a class="header-anchor" href="#修复" aria-hidden="true">#</a> 修复</h2><p>由于作者许久未维护且不想发包，所以本地进行修改即可，打开插件安装位置 <code>~/.vscode/extensions</code>，找到 <code>vscode-todo-highlight</code> 的 <code>util</code> 文件：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> var patternB = &#39;#&#39; + (i + 1) + &#39;\\t&#39; + v.uri + &#39;:&#39; + (v.lineNum + 1) + &#39;:&#39; + (v.startCol + 1);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> var patternB = &#39;#&#39; + (i + 1) + &#39;\\t&#39; + decodeURIComponent(v.uri) + &#39;:&#39; + (v.lineNum + 1) + &#39;:&#39; + (v.startCol + 1)
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 VSCode 即可。</p>`,4);function h(u,v){const s=t("ExternalLinkIcon");return o(),i("div",null,[e("p",null,[e("a",l,[n("VSCODE-TODO-HIGHLIGHT"),d(s)]),n(" 在 linux 平台下输出所有事项时对路径进行了编码，导致跳转失败。")]),p])}const f=a(c,[["render",h],["__file","2-fix-todo-highlight-links.html.vue"]]);export{f as default};
