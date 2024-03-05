import{_ as e,o as a,c as s,e as n}from"./app-2494361c.js";const i={},t=n(`<h2 id="问题详情" tabindex="-1"><a class="header-anchor" href="#问题详情" aria-hidden="true">#</a> 问题详情</h2><p>如何同步一个fork?</p><h2 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h2><h3 id="_1-配置-upstream" tabindex="-1"><a class="header-anchor" href="#_1-配置-upstream" aria-hidden="true">#</a> 1. 配置 upstream</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment"># 以 \`ant-design-vue\` 示例</span>
<span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/vueComponent/ant-design-vue.git
<span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 验证</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-同步-upstream" tabindex="-1"><a class="header-anchor" href="#_2-同步-upstream" aria-hidden="true">#</a> 2. 同步 upstream</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch upstream <span class="token comment"># fetch</span>
<span class="token function">git</span> merge upstream/master <span class="token comment"># merge</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-推送" tabindex="-1"><a class="header-anchor" href="#_3-推送" aria-hidden="true">#</a> 3. 推送</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),r=[t];function d(c,l){return a(),s("div",null,r)}const p=e(i,[["render",d],["__file","3-sync-a-fork.html.vue"]]);export{p as default};
