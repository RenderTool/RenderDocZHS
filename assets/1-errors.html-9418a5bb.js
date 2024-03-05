const e=JSON.parse('{"key":"v-2ed462fa","path":"/tools/vscode/1-errors.html","title":"vscode-1.处理 VSCode 错误","lang":"zh-CN","frontmatter":{"title":"vscode-1.处理 VSCode 错误","order":1,"category":["vscode"],"description":"无法监视文件变化 其实这个问题存在已久，但是一直没有去处理。 当 VSCode 弹出该提示时会给一个对应的链接，执行它提供的命令： cat /proc/sys/fs/inotify/max_user_watches # 19200","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/tools/vscode/1-errors.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"vscode-1.处理 VSCode 错误"}],["meta",{"property":"og:description","content":"无法监视文件变化 其实这个问题存在已久，但是一直没有去处理。 当 VSCode 弹出该提示时会给一个对应的链接，执行它提供的命令： cat /proc/sys/fs/inotify/max_user_watches # 19200"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-23T11:15:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2023-11-23T11:15:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vscode-1.处理 VSCode 错误\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-23T11:15:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"无法监视文件变化","slug":"无法监视文件变化","link":"#无法监视文件变化","children":[]},{"level":2,"title":"空文件夹折叠","slug":"空文件夹折叠","link":"#空文件夹折叠","children":[]},{"level":2,"title":"删除文件/文件夹时卡顿","slug":"删除文件-文件夹时卡顿","link":"#删除文件-文件夹时卡顿","children":[]}],"git":{"createdTime":1700738130000,"updatedTime":1700738130000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":0.97,"words":291},"filePathRelative":"tools/vscode/1-errors.md","localizedDate":"2023年11月23日","excerpt":"<h2> 无法监视文件变化</h2>\\n<p>其实这个问题存在已久，但是一直没有去处理。</p>\\n<p>当 VSCode 弹出该提示时会给一个对应的<a href=\\"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">链接</a>，执行它提供的命令：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">cat</span> /proc/sys/fs/inotify/max_user_watches <span class=\\"token comment\\"># 19200</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
