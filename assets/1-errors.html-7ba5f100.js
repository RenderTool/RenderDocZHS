import{_ as t,r as c,o as r,c as i,a as s,b as e,d as n,e as o}from"./app-f9abccac.js";const d={},l=s("h2",{id:"无法监视文件变化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#无法监视文件变化","aria-hidden":"true"},"#"),e(" 无法监视文件变化")],-1),h=s("p",null,"其实这个问题存在已久，但是一直没有去处理。",-1),u={href:"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc",target:"_blank",rel:"noopener noreferrer"},p=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/sys/fs/inotify/max_user_watches <span class="token comment"># 19200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),m={href:"https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"Arch Linux",-1),f=s("code",null,"echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system",-1),v=o(`<p>最后的解决方案：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ll /etc/sysctl.d/
<span class="token comment"># 40-max-user-watches.conf</span>
<span class="token comment"># 50-max_user_watches.conf # 需注意文件名区别</span>
<span class="token function">cat</span> /etc/sysctl.d/50-max_user_watches.conf
fs.inotify.max_user_watches <span class="token operator">=</span> <span class="token number">19200</span> <span class="token comment"># 利用 vim 修改后重启成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空文件夹折叠" tabindex="-1"><a class="header-anchor" href="#空文件夹折叠" aria-hidden="true">#</a> 空文件夹折叠</h2><p>在一次更新之后 VSCode 添加了新的特性 <code>Compact Folders</code>，这种行为与 Chrome 浏览器擅自遮挡 <code>www</code> 一样恶心。</p><p>打开 <code>Settings</code>，输入 <code>Compact Folders</code> 取消选中即可。</p><h2 id="删除文件-文件夹时卡顿" tabindex="-1"><a class="header-anchor" href="#删除文件-文件夹时卡顿" aria-hidden="true">#</a> 删除文件/文件夹时卡顿</h2>`,6),b={href:"https://github.com/microsoft/vscode/issues/90034#issuecomment-582115953",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"~/.config/plasma-workspace/env/electron-trash-gio.sh",-1),x=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ELECTRON_TRASH</span><span class="token operator">=</span>gio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function k(w,y){const a=c("ExternalLinkIcon");return r(),i("div",null,[l,h,s("p",null,[e("当 VSCode 弹出该提示时会给一个对应的"),s("a",u,[e("链接"),n(a)]),e("，执行它提供的命令：")]),p,s("p",null,[e("限制比较小，接着查看"),s("a",m,[e("解决方案"),n(a)]),e("。虽然提示说 "),_,e(" 应当使用 "),f,e("，但我的 manjaro 重启后依旧存在问题。")]),v,s("p",null,[e("在 Arch 的 KDE 环境下会存在该问题，这是由于 "),s("a",b,[e("ELECTRON 引起的"),n(a)]),e("。可通过在 "),g,e(" 增加如下内容解决：")]),x])}const C=t(d,[["render",k],["__file","1-errors.html.vue"]]);export{C as default};
