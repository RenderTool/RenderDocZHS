import{_ as p,r,o as c,c as d,a as s,b as a,d as n,w as t,e}from"./app-2494361c.js";const u="/RenderDocZHS/assets/Git-logo-5009760a.svg",h="/RenderDocZHS/assets/gitdownload-ff9c832e.jpg",g="/RenderDocZHS/assets/git gui-ce5ecffa.jpg",k="/RenderDocZHS/assets/gitstatus-76e403ce.jpg",b="/RenderDocZHS/assets/gitclone-4145d0db.jpg",v="/RenderDocZHS/assets/idelog-cd854e30.jpg",m={},_=e('<h2 id="版本控制工具-git" tabindex="-1"><a class="header-anchor" href="#版本控制工具-git" aria-hidden="true">#</a> 版本控制工具 Git</h2><figure><img src="'+u+'" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><a href="%22https://git-scm.com/%22">Git</a>是世界上先进的开源「分布式的版本控制系统」，而SVN是「集中式的版本控制系统」，SVN对于版本的管理集中于中央服务器中，而Git对于版本的管理可以在本地。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',4),f={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},x=e('<figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>windows中安装好以后，空白处右键会多Git GUI Here以及Git Bash Here。</p></blockquote><figure><img src="'+g+'" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><h3 id="_1-git" tabindex="-1"><a class="header-anchor" href="#_1-git" aria-hidden="true">#</a> 1. GIT</h3><blockquote><p>一个开源的分布式版本控制系统</p></blockquote>',6),q={id:"_2-github",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#_2-github","aria-hidden":"true"},"#",-1),w=s("blockquote",null,[s("p",null,'一个托管和协作管理 Git 仓库的"同性交友"平台')],-1),G=s("h3",{id:"_3-git基本概念",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-git基本概念","aria-hidden":"true"},"#"),a(" 3. GIT基本概念")],-1),j=e('<ol><li><p><strong>工作区（Workspace）：</strong> 你在本地计算机上用来编辑、修改和保存文件的目录，包含了项目的实际文件。</p></li><li><p><strong>暂存区（Staging Area）：</strong> 一个中间区域，可以暂时存放你要提交的修改，允许你一次性提交多个修改。使用 <code>git add</code> 命令将工作区中的修改添加到暂存区。</p></li></ol><blockquote><p>在早期的Git文档和一些教程中，&quot;暂存区&quot; 有时会被称为 &quot;索引&quot;，而 &quot;索引&quot; 也经常被用来指代暂存区。这两者的含义完全相同，只是术语不同而已。</p></blockquote><ol start="3"><li><p><strong>本地仓库（Local Repository）：</strong> 包含了完整的版本历史、分支信息等的目录，通常是指项目根目录下的 <code>.git</code> 目录。它是Git用来记录和管理项目变更历史的核心。</p></li><li><p><strong>远程仓库（Remote Repository）：</strong> 存储在服务器上的代码仓库，可以供团队成员共享和协作。可以通过 <code>git push</code> 和 <code>git pull</code> 与远程仓库进行交互。</p></li><li><p><strong>提交（Commit）：</strong> 将工作区或者暂存区的修改记录到本地仓库中，形成一个版本快照，可以随时回溯到这个版本。</p></li></ol><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置" aria-hidden="true">#</a> 1. 配置</h3>',5),R=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;你的名字&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;你的邮箱&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-初始化" tabindex="-1"><a class="header-anchor" href="#_2-初始化" aria-hidden="true">#</a> 2.初始化</h3>`,2),z=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> testfolder             <span class="token comment"># 创建一个名为 testfolder 的文件夹</span>
$ <span class="token builtin class-name">cd</span> testfolder                <span class="token comment"># 进入到 testfolder 文件夹</span>
$ <span class="token builtin class-name">pwd</span>                          <span class="token comment"># 输出当前工作目录的路径，此时应该是 /e/testfolder</span>

$ <span class="token function">git</span> init                     <span class="token comment"># 初始化本地仓库，创建了一个新的 Git 仓库</span>
<span class="token comment">#$ git clean                   # 是一个用于清理工作区的命令，谨慎使用以避免意外删除重要文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： <code>Initialized empty Git repository in /e/testfolder/.git/</code></p><h3 id="_3-创建仓库" tabindex="-1"><a class="header-anchor" href="#_3-创建仓库" aria-hidden="true">#</a> 3.创建仓库</h3><ul><li>添加 - <strong><code>git add</code></strong></li></ul>`,4),$=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>              <span class="token comment"># 将文件添加到暂存区</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;提交信息&quot;</span>      <span class="token comment"># 提交暂存区中的修改，并附上提交信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>操作结束后可以用git status查看文件</p></blockquote><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><ul><li>远程 - 连接 - <strong><code>git remote</code></strong></li></ul>',5),D=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token punctuation">[</span>远程仓库的URL<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><ul><li>远程- 克隆 - <strong><code>git clone</code></strong></li></ul>`,3),S=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone <span class="token operator">&lt;</span>远程仓库的URL<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><ul><li>远程推送 -<strong><code>git push</code></strong></li></ul>',4),W=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin main

<span class="token comment">#如果是第一次</span>
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token operator">&lt;</span>本地分支名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_4-同步操作" tabindex="-1"><a class="header-anchor" href="#_4-同步操作" aria-hidden="true">#</a> 4.同步操作</h3><table><thead><tr><th>命令</th><th>作用</th><th>示例</th></tr></thead><tbody><tr><td>git merge</td><td>将一个分支的代码合并到当前分支中</td><td><code>git merge &lt;分支名&gt;</code></td></tr><tr><td>git fetch</td><td>从远程仓库获取最新的代码和分支信息，但不合并</td><td><code>git fetch &lt;远程仓库&gt;</code></td></tr><tr><td>git pull</td><td>获取远程仓库的最新代码并将其合并到当前分支</td><td><code>git pull &lt;远程仓库&gt; &lt;分支名&gt;</code></td></tr></tbody></table>`,4),H=s("span",{style:{color:"#c0392b"}},"git pul",-1),I=s("span",{style:{color:"#c0392b"}},"git fetch",-1),L=s("span",{style:{color:"#c0392b"}},"git merge",-1),N=e(`<hr><blockquote><p>可以保持本地仓库与远程仓库的同步，同时确保清理掉已经不存在的远程分支。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token parameter variable">--prune</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),C={href:"/os/linux/xargs",target:"_blank",rel:"noopener noreferrer"},E=s("code",null,"grep",-1),V=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;fix/*&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">git</span> branch <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="_5-分支操作" tabindex="-1"><a class="header-anchor" href="#_5-分支操作" aria-hidden="true">#</a> 5.分支操作</h3><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td><code>git branch [branch-name]</code></td><td>创建一个新分支</td></tr><tr><td><code>git switch -c [branch-name]</code></td><td>切换到指定分支并更新工作目录(working directory)</td></tr><tr><td><code>git merge [branch]</code></td><td>将指定分支的历史合并到当前分支</td></tr><tr><td><code>git branch -d [branch-name]</code></td><td>删除指定的分支</td></tr></tbody></table>`,4),Z=e(`<h3 id="_6-其他" tabindex="-1"><a class="header-anchor" href="#_6-其他" aria-hidden="true">#</a> 6.其他</h3><ul><li>日志 - <strong><code>git log</code></strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 所有分支指定用户指定时间范围提交信息</span>

<span class="token function">git</span> log <span class="token parameter variable">--all</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;你的名称&quot;</span> <span class="token parameter variable">--after</span><span class="token operator">=</span><span class="token string">&quot;2022-07-16&quot;</span> <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token string">&quot;2022-07-23&quot;</span> --no-merges <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%an(%ae) %as: %s&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h2><blockquote><p>所有命令行最重要的当然是查看帮助文档：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-vim line-numbers-mode" data-ext="vim"><pre class="language-vim"><code>用法：git <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">version</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">help</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>C <span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">c</span> <span class="token operator">&lt;</span>名称<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>取值<span class="token operator">&gt;</span><span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>exec<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>html<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>man<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>info<span class="token operator">-</span><span class="token builtin">path</span><span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token keyword">p</span> | <span class="token operator">-</span><span class="token operator">-</span>paginate | <span class="token operator">-</span><span class="token keyword">P</span> | <span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>pager<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>replace<span class="token operator">-</span>objects<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>bare<span class="token punctuation">]</span>
           <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>git<span class="token operator">-</span><span class="token builtin">dir</span><span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>work<span class="token operator">-</span>tree<span class="token operator">=</span><span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token operator">-</span>namespace<span class="token operator">=</span><span class="token operator">&lt;</span>名称<span class="token operator">&gt;</span><span class="token punctuation">]</span>
           <span class="token operator">&lt;</span>命令<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>参数<span class="token operator">&gt;</span><span class="token punctuation">]</span>

这些是各种场合常见的 Git 命令：

开始一个工作区（参见：git <span class="token keyword">help</span> tutorial）
   clone      克隆仓库到一个新目录
   init       创建一个空的 Git 仓库或重新初始化一个已存在的仓库

在当前变更上工作（参见：git <span class="token keyword">help</span> everyday）
   add        添加文件内容至索引
   mv         移动或重命名一个文件、目录或符号链接
   reset      重置当前 HEAD 到指定状态
   rm         从工作区和索引中删除文件

检查历史和状态（参见：git <span class="token keyword">help</span> revisions）
   bisect     通过二分查找定位引入 bug 的提交
   <span class="token keyword">grep</span>       输出和模式匹配的行
   log        显示提交日志
   show       显示各种类型的对象
   status     显示工作区状态

扩展、标记和调校您的历史记录
   branch     列出、创建或删除分支
   checkout   切换分支或恢复工作区文件
   commit     记录变更到仓库
   <span class="token builtin">diff</span>       显示提交之间、提交和工作区之间等的差异
   merge      合并两个或更多开发历史
   rebase     在另一个分支上重新应用提交
   <span class="token keyword">tag</span>        创建、列出、删除或校验一个 GPG 签名的标签对象

协同（参见：git <span class="token keyword">help</span> workflows）
   fetch      从另外一个仓库下载对象和引用
   pull       获取并整合另外的仓库或一个本地分支
   push       更新远程引用和相关的对象

命令 <span class="token string">&#39;git help -a&#39;</span> 和 <span class="token string">&#39;git help -g&#39;</span> 显示可用的子命令和一些概念帮助。
查看 <span class="token string">&#39;git help &lt;命令&gt;&#39;</span> 或 <span class="token string">&#39;git help &lt;概念&gt;&#39;</span> 以获取给定子命令或概念的
帮助。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ide" tabindex="-1"><a class="header-anchor" href="#ide" aria-hidden="true">#</a> IDE</h2><p>人生苦短我选IDE,可视化一切，包括Commit模板、分支合并、同步。</p><figure><img src="`+v+'" alt="idelog.jpg" tabindex="0" loading="lazy"><figcaption>idelog.jpg</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><blockquote><p>更多细节操作可以参考我的其他记录。</p></blockquote>',13),B={href:"https://help.github.com/en",target:"_blank",rel:"noopener noreferrer"},T={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},U={href:"https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.runoob.com/manual/git-guide/",target:"_blank",rel:"noopener noreferrer"};function P(F,J){const i=r("ExternalLinkIcon"),l=r("RouterLink"),o=r("chatmessage");return c(),d("div",null,[_,s("p",null,[a("工欲善其事必先利其器。"),s("a",f,[a("下载地址"),n(i)])]),x,s("h3",q,[y,a(" 2."),n(l,{to:"/tools/github/"},{default:t(()=>[a("Github")]),_:1})]),w,G,n(o,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40},{default:t(()=>[a(" 在Git中几个基本概念 ")]),_:1}),j,n(o,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40},{default:t(()=>[a(" 对所有本地仓库的用户信息进行配置 ")]),_:1}),R,n(o,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[a(" 配置完信息后，就可以「创建目录并初始化自己的本地仓库」 ")]),_:1}),z,n(o,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40},{default:t(()=>[a(" 在接下来的操作中，你可以做一些修改，并通过以下命令将它们提交到版本库中 ")]),_:1}),$,n(o,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40},{default:t(()=>[a(" 如果有远程仓库，可以使用这个命令和远程仓库连接起来。 ")]),_:1}),D,n(o,{avatar:"../../assets/emoji/ybk.png",avatarWidth:40},{default:t(()=>[a(" 不需要 git init(初始化) 和 mkdir（创建文件夹）操作，最多就是cd（切换）到想放的目录。 ")]),_:1}),S,n(o,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[a(" 将本地仓库的内容推送到远程仓库中 ")]),_:1}),W,n(o,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:t(()=>[H,a("相当于先执行"),I,a("，再紧接着执行 "),L,a("将远程仓库的代码合并到本地分支中。 ")]),_:1}),N,s("blockquote",null,[s("p",null,[a("还可利用 "),s("a",C,[a("xargs"),n(i)]),a(" 配合 "),E,a(" 清理指定条件分支：")])]),V,n(o,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:t(()=>[a(" 记不住根本记不住。 ")]),_:1}),Z,s("ul",null,[s("li",null,[s("a",B,[a("Github"),n(i)])]),s("li",null,[s("a",T,[a("Git-scm"),n(i)])]),s("li",null,[s("a",U,[a("命令备忘单"),n(i)])]),s("li",null,[s("a",A,[a(" Git 快速入门版本"),n(i)])])])])}const M=p(m,[["render",P],["__file","index.html.vue"]]);export{M as default};
