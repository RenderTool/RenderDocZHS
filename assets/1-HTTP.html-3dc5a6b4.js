import{_ as r,r as i,o as p,c as d,d as t,w as n,a,b as e,e as l}from"./app-2494361c.js";const c="/RenderDocZHS/assets/http-bb16ec66.jpeg",h="/RenderDocZHS/assets/http-auth-sequence-diagram-1ee900f1.jpg",u="/RenderDocZHS/assets/https-a6af6061.jpg",g="/RenderDocZHS/assets/httpplugin-106eb37c.png",m="/RenderDocZHS/assets/fetching_a_page-62fe5344.jpg",T="/RenderDocZHS/assets/httprequest-9e5382f3.png",v="/RenderDocZHS/assets/http_request-6ce5514d.png",k="/RenderDocZHS/assets/http_response-1dd5520d.png",b="/RenderDocZHS/assets/httpmessage-cee08f55.jpg",_="/RenderDocZHS/assets/chajmul-eb65fa90.png",f="/RenderDocZHS/assets/gfhttpblueprint-045cbf94.png",H="/RenderDocZHS/assets/jtzyhttprequest-466273e8.jpg",P={},y=l('<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><table><thead><tr><th>协议</th><th>全称</th><th>描述</th></tr></thead><tbody><tr><td>HTTP</td><td>Hyper Text Transfer Protocol</td><td>用于从服务器传输超文本到本地浏览器的传送协议。</td></tr><tr><td>HTTPS</td><td>HyperText Transfer Protocol Secure</td><td>一种通过计算机网络进行安全通信的传输协议，利用 SSL/TLS 加密数据包，提供身份认证和保护隐私与完整性。</td></tr><tr><td>默认端口</td><td>80</td><td>443</td></tr><tr><td>URL 示例</td><td>http://</td><td>https://</td></tr></tbody></table><hr>',3),x=a("h3",{id:"https",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#https","aria-hidden":"true"},"#"),e(" HTTPS")],-1),S=a("figure",null,[a("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),q=a("figure",null,[a("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),z=a("figure",null,[a("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),C=a("hr",null,null,-1),j=a("figure",null,[a("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),L=a("h3",{id:"http基本流程",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#http基本流程","aria-hidden":"true"},"#"),e(" HTTP基本流程")],-1),R=a("p",null,"HTTP（Hypertext Transfer Protocol）是一种用于传输超文本的协议，通常用于在客户端和服务器之间传递数据。",-1),w=a("figure",null,[a("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),W=a("li",null,[a("p",null,[a("strong",null,"建立连接：")]),a("ul",null,[a("li",null,"客户端（例如，Web浏览器）向服务器发起连接请求。"),a("li",null,"服务器监听来自客户端的连接请求。")])],-1),E=a("p",null,[a("strong",null,"建立TCP连接：")],-1),D={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/TCP",target:"_blank",rel:"noopener noreferrer"},A=l("<li><p><strong>发送HTTP请求（Request）：</strong></p><ul><li>客户端向服务器发送HTTP请求。请求包括： <ul><li>请求行（Request line） <ul><li>请求的方法（GET、POST、等需指定对资源的操作）。</li><li>请求的URL：指定请求的资源。</li><li>请求的HTTP版本：指定使用的HTTP协议版本。</li></ul></li><li>请求头部（Request headers）：包含关于请求的其他信息，如用户代理、接受的数据类型等。</li><li>请求体（Request body）（对于POST等请求方法）：包含发送给服务器的数据。</li></ul></li></ul></li>",1),Z=l(`<div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">developer.mozilla.org</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">zh</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><p><strong>服务器处理请求：</strong></p><ul><li>服务器收到HTTP请求后，解析请求并确定如何响应。</li><li>执行相应的操作，例如获取请求的资源、处理表单数据等。</li></ul></li><li><p><strong>服务器发送HTTP响应（Response)：</strong></p><ul><li>服务器创建一个HTTP响应。</li><li>响应包括： <ul><li>响应状态码(Response Code)：指示请求成功、失败或其他状态。</li><li>响应头（Response Headers）：包含关于响应的其他信息，如服务器类型、内容类型等。</li><li>响应体(Response Body)：包含服务器返回给客户端的数据。</li></ul></li></ul></li></ol><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>/*状态行*/
<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
/*消息报头-start*/
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Sat, 09 Oct 2010 14:28:02 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Apache</span></span>
<span class="token header"><span class="token header-name keyword">Last-Modified</span><span class="token punctuation">:</span> <span class="token header-value">Tue, 01 Dec 2009 20:18:22 GMT</span></span>
<span class="token header"><span class="token header-name keyword">ETag</span><span class="token punctuation">:</span> <span class="token header-value">&quot;51142bc1-7449-479b075b2891b&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Ranges</span><span class="token punctuation">:</span> <span class="token header-value">bytes</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">29769</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html</span></span>
<span class="token text-html">/*消息报头-end*/

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>…（此处是所请求网页的 29769 字节）
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li><p><strong>传输数据：</strong></p><ul><li>服务器通过建立的TCP连接将HTTP响应传输到客户端。</li><li>客户端接收并解析响应。</li></ul></li><li><p><strong>关闭连接：</strong></p><ul><li>客户端和服务器其中一方或双方关闭TCP连接。这取决于连接是否需要保持活动状态以进行后续请求。</li><li></li></ul></li></ol><hr>',9),G=l('<h3 id="http请求操作" tabindex="-1"><a class="header-anchor" href="#http请求操作" aria-hidden="true">#</a> HTTP请求操作</h3><ol><li><strong>GET</strong></li></ol><blockquote><p>用于从服务器获取指定资源的数据。GET 请求通常用于获取网页、图像、文本文件等。它是一个幂等操作，即多次发起相同的GET请求会产生相同的结果。</p></blockquote><ol start="2"><li><strong>POST</strong></li></ol><blockquote><p>用于向服务器提交数据，通常用于向服务器发送表单数据或上传文件。POST请求对提交的数据没有长度限制，且可以发送敏感信息（例如密码）。</p></blockquote><ol start="3"><li><strong>PUT</strong></li></ol><blockquote><p>用于向服务器上传数据，将指定资源的内容替换为请求中提供的数据。</p></blockquote><ol start="4"><li><strong>DELETE</strong></li></ol><blockquote><p>用于从服务器删除指定资源。</p></blockquote><ol start="5"><li><strong>HEAD</strong></li></ol><blockquote><p>与GET类似，但服务器只返回响应头部信息，而不返回实际内容主体。通常用于获取资源的元数据，而无需获取实际数据。</p></blockquote><ol start="6"><li><strong>OPTIONS</strong></li></ol><blockquote><p>用于获取服务器支持的HTTP方法列表。可以用来确定服务器支持哪些方法。</p></blockquote><ol start="7"><li><strong>PATCH</strong></li></ol><blockquote><p>用于部分更新资源，只更新资源的一部分内容。</p></blockquote><ol start="8"><li><strong>TRACE</strong></li></ol><blockquote><p>用于在请求-响应链上的代理服务器之间跟踪请求的传输。</p></blockquote><ol start="9"><li><strong>CONNECT</strong></li></ol><blockquote><p>用于将连接改为隧道，通常用于加密连接（例如TLS/SSL）的代理服务器。</p></blockquote><hr>',20),N=l(`<ol><li><p><strong>请求头（Request Headers）：</strong></p><ul><li>请求头是包含在HTTP请求中的信息，用于向服务器传递额外的元数据。请求头通常包括了客户端的信息、所期望的响应格式、身份验证凭证等。一些常见的请求头包括<code>User-Agent</code>、<code>Accept</code>、<code>Content-Type</code>等。</li></ul></li><li><p><strong>响应头（Response Headers）：</strong></p><ul><li>响应头是包含在HTTP响应中的信息，用于向客户端传递关于响应的元数据。响应头包括了服务器的信息、响应数据的类型、缓存控制等信息。一些常见的响应头包括<code>Server</code>、<code>Content-Type</code>、<code>Cache-Control</code>等。</li></ul></li></ol><p>请求头和响应头都以键值对的形式存在，例如：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>// 请求头
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8</span></span>

// 响应头
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Apache/2.4.29 (Ubuntu)</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=UTF-8</span></span>
<span class="token header"><span class="token header-name keyword">Cache-Control</span><span class="token punctuation">:</span> <span class="token header-value">max-age=3600</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),O=l('<h2 id="uehttp" tabindex="-1"><a class="header-anchor" href="#uehttp" aria-hidden="true">#</a> UEHTTP</h2><h3 id="插件目录" tabindex="-1"><a class="header-anchor" href="#插件目录" aria-hidden="true">#</a> 插件目录</h3><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="蓝图节点" tabindex="-1"><a class="header-anchor" href="#蓝图节点" aria-hidden="true">#</a> 蓝图节点</h3><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="主要节点" tabindex="-1"><a class="header-anchor" href="#主要节点" aria-hidden="true">#</a> 主要节点</h3>',6),U=l('<figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="扩展阅读" tabindex="-1"><a class="header-anchor" href="#扩展阅读" aria-hidden="true">#</a> 扩展阅读</h2><h3 id="套接字-tcp-http" tabindex="-1"><a class="header-anchor" href="#套接字-tcp-http" aria-hidden="true">#</a> 套接字-TCP-HTTP</h3><ul><li>套接字<br> |<br> +--- TCP<br> | |<br> | +--- HTTP</li></ul><h2 id="测试工具" tabindex="-1"><a class="header-anchor" href="#测试工具" aria-hidden="true">#</a> 测试工具</h2>',5),M={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.sojson.com/http/test.html",target:"_blank",rel:"noopener noreferrer"};function V(I,K){const s=i("chatmessage"),o=i("ExternalLinkIcon");return p(),d("div",null,[t(s,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[e(" 什么是HTTP? ")]),_:1}),t(s,{avatar:" ../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" HTTP（超文本传输协议）是一种用于在互联网上传输信息的应用层协议。 ")]),_:1}),y,t(s,{avatar:" ../../assets/emoji/hx.png",avatarWidth:40},{default:n(()=>[e(" 为什么会有HTTPS ")]),_:1}),t(s,{avatar:" ../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 它是HTTP的安全版本，通过使用TLS（Transport Layer Security）或其前身SSL（Secure Sockets Layer）协议，对数据进行加密和身份验证，从而保护数据的完整性和隐私。 ")]),_:1}),x,S,t(s,{avatar:" ../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" HTTPS对应的通信时序 ")]),_:1}),q,t(s,{avatar:" ../../assets/emoji/kclr.png",avatarWidth:40},{default:n(()=>[e(" 看不懂!我想知道浏览器里长啥样! ")]),_:1}),t(s,{avatar:" ../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 浏览器里一般是这样的,这个证书一般是要钱的! ")]),_:1}),z,C,t(s,{avatar:" ../../assets/emoji/hh.png",avatarWidth:40},{default:n(()=>[e(" 很好,可是怎么在UE中用他! ")]),_:1}),t(s,{avatar:" ../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 别急,先把插件安排上! ")]),_:1}),j,t(s,{avatar:" ../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 使用插件前,先了解一下HTTP基本流程. ")]),_:1}),L,R,w,a("ol",null,[W,a("li",null,[E,a("ul",null,[a("li",null,[e("如果使用的是HTTP，通常是通过"),a("a",D,[e("TCP"),t(o)]),e("（Transmission Control Protocol）建立连接。连接建立后，客户端和服务器之间可以进行双向通信。")])])]),A]),Z,t(s,{avatar:" ../../assets/emoji/hh.png",avatarWidth:40},{default:n(()=>[e(" 看不懂!请求方法是什么? ")]),_:1}),t(s,{avatar:" ../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 请求方法是客户端向服务器请求执行特定操作的方式。一般有以下几种请求方法: ")]),_:1}),G,t(s,{avatar:" ../../assets/emoji/hh.png",avatarWidth:40},{default:n(()=>[e(" 响应头和请求头是两个概念嘛? ")]),_:1}),t(s,{avatar:" ../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 是的，请求头和响应头是两个概念，它们分别指HTTP请求和HTTP响应中包含的头部信息。 ")]),_:1}),N,t(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 回到正题,官方的HTTP插件. ")]),_:1}),O,t(s,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:n(()=>[e(" 我们已经清楚HTTP的基本流程,简单来说需要实现请求和接收,官方优雅的封装了这一过程. ")]),_:1}),U,a("p",null,[a("a",M,[e("参考文档"),t(o)])]),a("p",null,[a("a",B,[e("在线测试2"),t(o)])])])}const Y=r(P,[["render",V],["__file","1-HTTP.html.vue"]]);export{Y as default};
