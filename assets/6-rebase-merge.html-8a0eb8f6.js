import{_ as l,r as t,o,c as d,d as s,w as n,a as e,b as a,e as r}from"./app-ca7cc0fa.js";const c="/RenderDocZHS/assets/merge-83e6a623.png",u="/RenderDocZHS/assets/rebase-eee8799e.png",g="/RenderDocZHS/assets/qub-0ec8943b.png",v={},m=e("h2",{id:"问题详情",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题详情","aria-hidden":"true"},"#"),a(" 问题详情")],-1),b=r(`<h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><ol><li><p><strong>合并（Merge）：</strong></p><ul><li>合并是将两个分支的历史记录合并在一起，创建一个新的合并提交来整合两者的修改。</li><li>合并会保留原分支的完整历史记录，因此可以清晰地看到哪些修改来自于哪个分支。</li><li>合并会创建一个新的合并提交，这个提交有多个父节点，指向被合并的分支的最新提交和合并分支的最新提交。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>o---o---o---o---o---o   (分支A)
 \\         /
  o---o---o   (分支B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>合并后：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>o---o---o---o---o---o---o   (合并提交)
 \\         /           /
  o---o---o   (分支A)   (分支B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><p><strong>变基（Rebase）：</strong></p><ul><li>变基也是将两个分支的历史记录合并在一起，但与合并不同，它将当前分支的所有提交都应用在目标分支的最新提交上。</li><li>变基会使提交历史更加线性，避免了合并提交的产生，使得提交历史更加清晰。</li><li>变基可以提供一个更干净、整洁的提交历史，但可能会改写提交历史，因此不建议在公共分支上进行变基操作。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>o---o---o---o---o---o   (分支A)
 \\
  o---o---o   (分支B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>变基后：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>o---o---o---o---o---o   (分支A)
                       \\
                        o---o---o   (分支B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>',6),h=e("ul",null,[e("li",null,[e("strong",null,"合并"),a("会保留原分支的完整历史记录，创建一个新的合并提交。")]),e("li",null,[e("strong",null,"变基"),a("会将当前分支的所有提交都应用在目标分支的最新提交上，使提交历史更加线性。")])],-1),p=e("figure",null,[e("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function _(x,f){const i=t("chatmessage");return o(),d("div",null,[m,s(i,{avatar:"../../assets/emoji/bqb01.png",avatarWidth:40},{default:n(()=>[a(" Git-变基(rebase)和合并(merge)区别？ ")]),_:1}),b,s(i,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40},{default:n(()=>[a(" 再多说就不礼貌了 ")]),_:1}),h,p])}const R=l(v,[["render",_],["__file","6-rebase-merge.html.vue"]]);export{R as default};
