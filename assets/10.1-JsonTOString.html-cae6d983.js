import{_ as s,r as a,o as e,c as t,d as o,w as p,e as c,b as l}from"./app-c4ee493e.js";const i="/RenderDocZHS/assets/json5-71db9f24.png",r="/RenderDocZHS/assets/json6-90d1657f.png",u={},d=c('<figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-找到定义" tabindex="-1"><a class="header-anchor" href="#_1-找到定义" aria-hidden="true">#</a> 1.找到定义</h3><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-发现是宏函数-使用了通配符-所以要找到具体的定义函数cpp" tabindex="-1"><a class="header-anchor" href="#_2-发现是宏函数-使用了通配符-所以要找到具体的定义函数cpp" aria-hidden="true">#</a> 2. 发现是宏函数，使用了通配符，所以要找到具体的定义函数cpp</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code> P_NATIVE_BEGIN
    bResult <span class="token operator">=</span> <span class="token class-name">FJsonObjectConverter</span><span class="token double-colon punctuation">::</span><span class="token function">UStructToJsonObjectString</span><span class="token punctuation">(</span>StructProperty<span class="token operator">-&gt;</span>Struct<span class="token punctuation">,</span> ValuePtr<span class="token punctuation">,</span> OutJsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    P_NATIVE_END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-引入具体的头文件" tabindex="-1"><a class="header-anchor" href="#_3-引入具体的头文件" aria-hidden="true">#</a> 3. 引入具体的头文件</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;JsonObjectWrapper.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;JsonObjectWrapper.h&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-实现函数" tabindex="-1"><a class="header-anchor" href="#_4-实现函数" aria-hidden="true">#</a> 4.实现函数</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//jsontostring</span>
<span class="token keyword">bool</span> <span class="token class-name">FJsonObjectWrapper</span><span class="token double-colon punctuation">::</span><span class="token function">JsonObjectToString</span><span class="token punctuation">(</span>FString<span class="token operator">&amp;</span> Str<span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
    TSharedRef<span class="token operator">&lt;</span>TJsonWriter<span class="token operator">&lt;</span>TCHAR<span class="token punctuation">,</span> TCondensedJsonPrintPolicy<span class="token operator">&lt;</span>TCHAR<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> JsonWriter <span class="token operator">=</span> <span class="token class-name">TJsonWriterFactory</span><span class="token operator">&lt;</span>TCHAR<span class="token punctuation">,</span> TCondensedJsonPrintPolicy<span class="token operator">&lt;</span>TCHAR<span class="token operator">&gt;&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Str<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">FJsonSerializer</span><span class="token double-colon punctuation">::</span><span class="token function">Serialize</span><span class="token punctuation">(</span>JsonObject<span class="token punctuation">.</span><span class="token function">ToSharedRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> JsonWriter<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//jsonfromstring</span>
<span class="token keyword">bool</span> <span class="token class-name">FJsonObjectWrapper</span><span class="token double-colon punctuation">::</span><span class="token function">JsonObjectFromString</span><span class="token punctuation">(</span><span class="token keyword">const</span> FString<span class="token operator">&amp;</span> Str<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    TSharedRef<span class="token operator">&lt;</span>TJsonReader<span class="token operator">&lt;</span><span class="token operator">&gt;&gt;</span> JsonReader <span class="token operator">=</span> <span class="token class-name">TJsonReaderFactory</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">Create</span><span class="token punctuation">(</span>Str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">FJsonSerializer</span><span class="token double-colon punctuation">::</span><span class="token function">Deserialize</span><span class="token punctuation">(</span>JsonReader<span class="token punctuation">,</span> JsonObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(m,v){const n=a("chatmessage");return e(),t("div",null,[o(n,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:p(()=>[l(" Json和结构体互转 ")]),_:1}),d])}const g=s(u,[["render",k],["__file","10.1-JsonTOString.html.vue"]]);export{g as default};
