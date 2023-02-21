import{_ as i,H as o,k as d,l as c,I as s,L as l,n,P as a,U as t}from"./framework-6ed030cc.js";const u={},D=l("h1",{id:"frontmatter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),n(" Frontmatter")],-1),h=l("h2",{id:"date",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#date","aria-hidden":"true"},"#"),n(" date")],-1),m=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string")])],-1),y=l("p",null,"详情：",-1),_=l("p",null,"页面的创建日期。",-1),v=l("code",null,"yyyy-MM-dd",-1),b={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},C=l("p",null,"参考：",-1),f=l("h2",{id:"description",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),n(" description")],-1),g=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string")])],-1),k=l("li",null,[l("p",null,"详情："),l("p",null,"页面的描述。"),l("p",null,[n("它将会覆盖站点配置中的 "),l("code",null,"description"),n(" 配置项。")])],-1),E=l("p",null,"参考：",-1),x=t(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><ul><li><p>类型： <code>HeadConfig[]</code></p></li><li><p>详情：</p><p>页面 <code>&lt;head&gt;</code> 标签内添加的额外标签。</p></li><li><p>示例：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">head</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">meta</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foo</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yaml 数组语法</span></span>
<span class="line"><span style="color:#D4D4D4;">  - [</span><span style="color:#CE9178;">meta</span><span style="color:#D4D4D4;">, { </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bar</span><span style="color:#D4D4D4;"> , </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">方括号语法</span><span style="color:#D4D4D4;"> }]</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染为：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;foo&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;yaml 数组语法&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bar&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;方括号语法&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=l("h2",{id:"lang",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),n(" lang")],-1),F=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string")])],-1),M=l("li",null,[l("p",null,"详情："),l("p",null,"页面的语言。"),l("p",null,[n("它将会覆盖站点配置中的 "),l("code",null,"lang"),n(" 配置项")])],-1),z=l("p",null,"参考：",-1),N=t(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>页面的布局。</p><p>布局是由主题提供的。如果你不指定该 Frontmatter ，则会使用默认布局。你应该参考主题自身的文档来了解其提供了哪些布局。</p><p>如果主题布局无法满足你的需求，你可以使用自定义布局组件。</p></li><li><p>示例：</p></li></ul><p>在 <code>.vuepress/client.ts</code> 文件中注册一个布局组件：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./CustomLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Frontmatter 中设置自定义布局：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">layout</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">CustomLayout</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h2>`,7),A=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string")])],-1),L=l("li",null,[l("p",null,"详情："),l("p",null,"页面的永久链接。"),l("p",null,"它将会覆盖根据文件路径来决定的默认路由路径。")],-1),I=l("p",null,"参考：",-1),q=l("li",null,[l("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),w=t(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h2><ul><li><p>类型： <code>string | null</code></p></li><li><p>详情：</p><p>为页面生成永久链接的 Pattern 。</p><p>它将会覆盖站点配置中的 <code>permalinkPattern</code> 配置项。</p><p>如果 Frontmatter 中设置了 <code>permalink</code> ，那么这个字段则不会生效。</p></li><li><p>使用：</p><table><thead><tr><th>Pattern</th><th>描述</th></tr></thead><tbody><tr><td><code>:year</code></td><td>创建日期的 年 部分</td></tr><tr><td><code>:month</code></td><td>创建日期的 月 部分</td></tr><tr><td><code>:day</code></td><td>创建日期的 日 部分</td></tr><tr><td><code>:slug</code></td><td>页面文件名的 Slug</td></tr><tr><td><code>:raw</code></td><td>原始路由路径</td></tr></tbody></table><p><code>:year</code>, <code>:month</code> 和 <code>:day</code> Pattern 根据如下优先级进行解析：</p><ul><li>Frontmatter 中的 <code>date</code> 字段。</li><li>符合 <code>yyyy-MM-dd-foobar.md</code> 或 <code>yyyy-MM-foobar.md</code> 日期格式的文件名。</li><li>符合 <code>yyyy/MM/dd/foobar.md</code> 或 <code>yyyy/MM/foobar.md</code> 日期格式的目录名。</li><li>默认值 <code>0000-00-00</code> 。</li></ul></li><li><p>示例 1 ：</p><p>页面文件名是 <code>foo-bar.md</code> 。</p><p>页面 Frontmatter 是：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">date</span><span style="color:#D4D4D4;">: 2021-01-03</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/foo-bar.html</code> 。</p><ul><li><p>示例 2 ：</p><p>页面文件名是 <code>2021-01-03-bar-baz.md</code>。</p><p>页面 Frontmatter 是：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/bar-baz.html</code> 。</p>`,7),B=l("li",null,[l("a",{href:"#date"},"Frontmatter > date")],-1),V=l("li",null,[l("a",{href:"#permalink"},"Frontmatter > permalink")],-1),R=l("h2",{id:"routemeta",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#routemeta","aria-hidden":"true"},"#"),n(" routeMeta")],-1),T=l("li",null,[l("p",null,[n("类型： "),l("code",null,"Record<string, unknown>")])],-1),H=l("li",null,[l("p",null,"详情："),l("p",null,"附加到页面路由的自定义数据。")],-1),S=l("p",null,"参考：",-1),U=l("h2",{id:"title",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#"),n(" title")],-1),Y=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string")])],-1),j=l("li",null,[l("p",null,"详情："),l("p",null,"页面的标题。"),l("p",null,[n("如果你不在 Frontmatter 中设置 "),l("code",null,"title"),n(" ，那么页面中第一个一级标题（即 "),l("code",null,"# title"),n("）的内容会被当作标题使用。")])],-1),G=l("p",null,"参考：",-1);function J(K,O){const p=o("NpmBadge"),r=o("ExternalLinkIcon"),e=o("RouterLink");return d(),c("div",null,[D,s(p,{package:"@vuepress/client"}),s(p,{package:"@vuepress/markdown"}),h,l("ul",null,[m,l("li",null,[y,_,l("p",null,[n("应按照 "),v,n(" 的格式来指定日期，或者遵循 "),l("a",b,[n("YAML Timestamp Type"),s(r)]),n(" 。")])]),l("li",null,[C,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/node-api.html#date"},{default:a(()=>[n("Node API > Page 属性 > date")]),_:1})])])])]),f,l("ul",null,[g,k,l("li",null,[E,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#description"},{default:a(()=>[n("配置 > description")]),_:1})])])])]),x,l("ul",null,[l("li",null,[n("参考： "),l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#head"},{default:a(()=>[n("配置 > head")]),_:1})])])])]),P,l("ul",null,[F,M,l("li",null,[z,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#lang"},{default:a(()=>[n("配置 > lang")]),_:1})]),l("li",null,[s(e,{to:"/zh/reference/node-api.html#lang"},{default:a(()=>[n("Node API > Page 属性 > lang")]),_:1})])])])]),N,l("ul",null,[A,L,l("li",null,[I,l("ul",null,[q,l("li",null,[s(e,{to:"/zh/guide/page.html#%E8%B7%AF%E7%94%B1"},{default:a(()=>[n("指南 > 页面 > 路由")]),_:1})]),l("li",null,[s(e,{to:"/zh/reference/node-api.html#permalink"},{default:a(()=>[n("Node API > Page 属性 > permalink")]),_:1})])])])]),w,l("ul",null,[l("li",null,[n("参考： "),l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#permalinkpattern"},{default:a(()=>[n("配置 > permalinkPattern")]),_:1})]),B,V,l("li",null,[s(e,{to:"/zh/reference/node-api.html#permalink"},{default:a(()=>[n("Node API > Page 属性 > permalink")]),_:1})])])])]),R,l("ul",null,[T,H,l("li",null,[S,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/node-api.html#routeMeta"},{default:a(()=>[n("Node API > Page 属性 > routeMeta")]),_:1})])])])]),U,l("ul",null,[Y,j,l("li",null,[G,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/node-api.html#title"},{default:a(()=>[n("Node API > Page 属性 > title")]),_:1})])])])])])}const W=i(u,[["render",J],["__file","frontmatter.html.vue"]]);export{W as default};
