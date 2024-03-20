const t=JSON.parse('{"key":"v-7f6ffa27","path":"/unreal/function_%E5%87%BD%E6%95%B0_/14-SpawnActorfromClass.html","title":"F14.SpawnActorFromClass","lang":"zh-CN","frontmatter":{"title":"F14.SpawnActorFromClass","order":14,"category":["u++"],"description":"简单实例 角色按1生成一个球 cpp \\t//获取玩家ActorforwardVector \\tFVector forwardVector = GetActorForwardVector(); \\t//获取玩家ActorLocation \\tFVector location = GetActorLocation(); \\t//ForwardVector*200+Location \\tFVector const spawnLocation =forwardVector * 200 + location; \\tUWorld* const World = GetWorld(); \\t//断言 \\tcheck(World); \\t \\t World-&gt;SpawnActor&lt;AActor&gt;(CurrentTarget,spawnLocation,FRotator::ZeroRotator);","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDocZHS/unreal/function_%E5%87%BD%E6%95%B0_/14-SpawnActorfromClass.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"F14.SpawnActorFromClass"}],["meta",{"property":"og:description","content":"简单实例 角色按1生成一个球 cpp \\t//获取玩家ActorforwardVector \\tFVector forwardVector = GetActorForwardVector(); \\t//获取玩家ActorLocation \\tFVector location = GetActorLocation(); \\t//ForwardVector*200+Location \\tFVector const spawnLocation =forwardVector * 200 + location; \\tUWorld* const World = GetWorld(); \\t//断言 \\tcheck(World); \\t \\t World-&gt;SpawnActor&lt;AActor&gt;(CurrentTarget,spawnLocation,FRotator::ZeroRotator);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-03T18:34:11.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-03T18:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"F14.SpawnActorFromClass\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-03T18:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"简单实例","slug":"简单实例","link":"#简单实例","children":[]},{"level":3,"title":"cpp","slug":"cpp","link":"#cpp","children":[]}],"git":{"createdTime":1704306851000,"updatedTime":1704306851000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":0.33,"words":99},"filePathRelative":"unreal/function[函数]/14-SpawnActorfromClass.md","localizedDate":"2024年1月4日","excerpt":"\\n<figure><figcaption></figcaption></figure>\\n<h3> 简单实例</h3>\\n<blockquote>\\n<p>角色按1生成一个球</p>\\n</blockquote>\\n<figure><figcaption></figcaption></figure>\\n<iframe src=\\"https://blueprintue.com/render/tabw8zu8/\\" width=\\"100%\\" height=\\"500\\" scrolling=\\"no\\" allowfullscreen=\\"\\"></iframe>\\n<h3> cpp</h3>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code>\\t<span class=\\"token comment\\">//获取玩家ActorforwardVector</span>\\n\\tFVector forwardVector <span class=\\"token operator\\">=</span> <span class=\\"token function\\">GetActorForwardVector</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token comment\\">//获取玩家ActorLocation</span>\\n\\tFVector location <span class=\\"token operator\\">=</span> <span class=\\"token function\\">GetActorLocation</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">//ForwardVector*200+Location</span>\\n\\tFVector <span class=\\"token keyword\\">const</span> spawnLocation <span class=\\"token operator\\">=</span>forwardVector <span class=\\"token operator\\">*</span> <span class=\\"token number\\">200</span> <span class=\\"token operator\\">+</span> location<span class=\\"token punctuation\\">;</span>\\n\\n\\tUWorld<span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">const</span> World <span class=\\"token operator\\">=</span> <span class=\\"token function\\">GetWorld</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token comment\\">//断言</span>\\n\\t<span class=\\"token function\\">check</span><span class=\\"token punctuation\\">(</span>World<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t World<span class=\\"token operator\\">-&gt;</span><span class=\\"token generic-function\\"><span class=\\"token function\\">SpawnActor</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span>AActor<span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>CurrentTarget<span class=\\"token punctuation\\">,</span>spawnLocation<span class=\\"token punctuation\\">,</span>FRotator<span class=\\"token double-colon punctuation\\">::</span>ZeroRotator<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
