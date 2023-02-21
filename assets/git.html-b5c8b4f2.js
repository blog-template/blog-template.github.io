import{_ as r,H as e,k as c,l as d,I as n,L as a,n as s,P as i,U as o}from"./framework-6ed030cc.js";const D={},u=a("h1",{id:"git",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" git")],-1),h=a("p",null,"该插件会收集你的页面的 Git 信息，包括创建和更新时间、贡献者等。",-1),y=o(`<p>该插件主要用于开发主题，大部分情况下你不需要直接使用它。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@vuepress/plugin-git@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">gitPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-git&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">gitPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-仓库" tabindex="-1"><a class="header-anchor" href="#git-仓库" aria-hidden="true">#</a> Git 仓库</h2>`,5),m={href:"https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository",target:"_blank",rel:"noopener noreferrer"},v={href:"https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt",target:"_blank",rel:"noopener noreferrer"},g=o(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>该插件会显著降低准备数据的速度，特别是在你的页面数量很多的时候。你可以考虑在 <code>dev</code> 模式下禁用该插件来获取更好的开发体验。</p></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="createdtime" tabindex="-1"><a class="header-anchor" href="#createdtime" aria-hidden="true">#</a> createdTime</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否收集页面的创建时间。</p></li></ul><h3 id="updatedtime" tabindex="-1"><a class="header-anchor" href="#updatedtime" aria-hidden="true">#</a> updatedTime</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否收集页面的更新时间。</p></li></ul><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否收集页面的贡献者。</p></li></ul><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="gitinclude" tabindex="-1"><a class="header-anchor" href="#gitinclude" aria-hidden="true">#</a> gitInclude</h3><ul><li><p>类型： <code>string[]</code></p></li><li><p>详情：</p><p>文件相对路径组成的数组，该数组中的文件会在计算页面数据时被包含在内。</p></li><li><p>示例：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">gitInclude</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">relative/path/to/file1</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">relative/path/to/file2</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面数据" tabindex="-1"><a class="header-anchor" href="#页面数据" aria-hidden="true">#</a> 页面数据</h2><p>该插件会向页面数据中添加一个 <code>git</code> 字段。</p><p>在使用该插件后，可以在页面数据中获取该插件收集到的 Git 信息：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePageData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">GitPluginPageData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-git&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">page</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePageData</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">GitPluginPageData</span><span style="color:#D4D4D4;">&gt;()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-createdtime" tabindex="-1"><a class="header-anchor" href="#git-createdtime" aria-hidden="true">#</a> git.createdTime</h3><ul><li><p>类型： <code>number</code></p></li><li><p>详情：</p><p>页面第一次提交的 Unix 毫秒时间戳。</p><p>该属性将取当前页面及 <a href="#gitinclude">gitInclude</a> 中所列文件的第一次提交的时间戳的最小值。</p></li></ul><h3 id="git-updatedtime" tabindex="-1"><a class="header-anchor" href="#git-updatedtime" aria-hidden="true">#</a> git.updatedTime</h3><ul><li><p>类型： <code>number</code></p></li><li><p>详情：</p><p>页面最后一次提交的 Unix 毫秒时间戳。</p><p>该属性将取当前页面及 <a href="#gitinclude">gitInclude</a> 中所列文件的最后一次提交的时间戳的最大值。</p></li></ul><h3 id="git-contributors" tabindex="-1"><a class="header-anchor" href="#git-contributors" aria-hidden="true">#</a> git.contributors</h3><ul><li>类型： <code>GitContributor[]</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">GitContributor</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">email</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">commits</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>页面的贡献者信息。</p><p>该属性将会包含 <a href="#gitinclude">gitInclude</a> 所列文件的贡献者。</p></li></ul>`,24);function b(C,f){const t=e("NpmBadge"),l=e("RouterLink"),p=e("ExternalLinkIcon");return c(),d("div",null,[u,n(t,{package:"@vuepress/plugin-git"}),h,a("p",null,[s("默认主题的 "),n(l,{to:"/zh/reference/default-theme/config.html#lastupdated"},{default:i(()=>[s("lastUpdated")]),_:1}),s(" 和 "),n(l,{to:"/zh/reference/default-theme/config.html#contributors"},{default:i(()=>[s("contributors")]),_:1}),s(" 就是由该插件支持的。")]),y,a("p",null,[s("该插件要求你的项目在 "),a("a",m,[s("Git 仓库"),n(p)]),s(" 下，这样它才能从提交历史记录中收集信息。")]),a("p",null,[s("在构建站点时，你应该确保所有的提交记录是可以获取到的。举例来说， CI 工作流通常会在克隆你的仓库时添加 "),a("a",v,[s("--depth 1"),n(p)]),s(" 参数来避免拉取全部的提交记录，因此你需要禁用这个功能，以便该插件在 CI 可以中正常使用。")]),g])}const x=r(D,[["render",b],["__file","git.html.vue"]]);export{x as default};
