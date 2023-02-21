import{_ as o,H as c,k as i,l as r,L as n,n as s,I as l,P as e,U as p}from"./framework-6ed030cc.js";const t={},D=p(`<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置" aria-hidden="true">#</a> 站点多语言配置</h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">docs</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ foo.md</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ nested</span></span>
<span class="line"><span style="color:#D4D4D4;">│  └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">└─ zh</span></span>
<span class="line"><span style="color:#D4D4D4;">   ├─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   ├─ foo.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   └─ nested</span></span>
<span class="line"><span style="color:#D4D4D4;">      └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=n("code",null,"locales",-1),y=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 键名是该语言所属的子路径</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue-powered Static Site Generator&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue 驱动的静态网站生成器&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>`,2),v={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"提示",-1),m=p(`<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置" aria-hidden="true">#</a> 主题多语言配置</h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;English&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;简体中文&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),C={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"提示",-1);function E(h,_){const a=c("RouterLink");return i(),r("div",null,[D,n("p",null,[s("然后，在你的 "),l(a,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:e(()=>[s("配置文件")]),_:1}),s(" 中设置 "),d,s(" 选项：")]),y,n("div",v,[u,n("p",null,[s("配置参考： "),l(a,{to:"/zh/reference/config.html#locales"},{default:e(()=>[s("locales")]),_:1})])]),m,n("div",C,[b,n("p",null,[s("配置参考： "),l(a,{to:"/zh/reference/default-theme/config.html#locales"},{default:e(()=>[s("默认主题 > locales")]),_:1})])])])}const g=o(t,[["render",E],["__file","i18n.html.vue"]]);export{g as default};
