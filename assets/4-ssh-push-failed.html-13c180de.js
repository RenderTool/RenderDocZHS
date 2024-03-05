import{_ as t,a as s}from"./ssh-4bf6f50c.js";import{_ as o,r as n,o as r,c as d,a as e,b as c,d as l,e as a}from"./app-2494361c.js";const u="/RenderDocZHS/assets/sshfail-c61ebc93.png",g="/RenderDocZHS/assets/genreatessh-053ba8de.png",h="/RenderDocZHS/assets/sshkeyupdata-29a21cde.png",p={},m=a('<h2 id="问题详情" tabindex="-1"><a class="header-anchor" href="#问题详情" aria-hidden="true">#</a> 问题详情</h2><p>本着能用一个IDE来完成各自的想法，尝试用<em>Rider</em>开发前端，结果一开始Push就出问题了。</p><blockquote><ol><li>远程空仓库已经建立</li></ol></blockquote><figure><img src="'+t+'" alt="无法推送" tabindex="0" loading="lazy"><figcaption>无法推送</figcaption></figure><blockquote><ol start="2"><li>无法推送项目</li></ol></blockquote><p>git@github.com: Permission denied (publickey). fatal: Could not read from remote...</p><figure><img src="'+s+'" alt="错误提示" tabindex="0" loading="lazy"><figcaption>错误提示</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',8),f={href:"https://blog.csdn.net/W_317/article/details/106518894",target:"_blank",rel:"noopener noreferrer"},_=a(`<h2 id="方案1" tabindex="-1"><a class="header-anchor" href="#方案1" aria-hidden="true">#</a> 方案1</h2><ol><li>cmd输入</li></ol><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>   ssh-keygen -t rsa -C &quot;xxxxxxxx@qq.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>显示的目录会对应生成一个文件</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3.然后将 <code>id_rsa.pub</code> 文件内容复制到github上。</p><figure><img src="'+h+`" alt="sshkeyupdata.png" tabindex="0" loading="lazy"><figcaption>sshkeyupdata.png</figcaption></figure><h2 id="方案2" tabindex="-1"><a class="header-anchor" href="#方案2" aria-hidden="true">#</a> 方案2</h2><blockquote><p>C:\\Users\\admin.ssh 下新建config,然后添加下面的代码</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Host github.com
  HostName ssh.github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(x,v){const i=n("ExternalLinkIcon");return r(),d("div",null,[m,e("ol",null,[e("li",null,[e("a",f,[c("CSDN"),l(i)])])]),_])}const y=o(p,[["render",b],["__file","4-ssh-push-failed.html.vue"]]);export{y as default};
