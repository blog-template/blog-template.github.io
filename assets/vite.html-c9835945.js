import{_ as p,H as a,k as t,l as r,I as n,L as s,n as e,U as i}from"./framework-6ed030cc.js";const c={},d=s("h1",{id:"vite",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),e(" Vite")],-1),u={href:"https://www.npmjs.com/package/@vuepress/bundler-vite",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@vuepress/bundler-vite@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><p>Vite 打包工具的配置项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/cli&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bundler:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">viteBundler</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">viteOptions:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">vuePluginOptions:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a> viteOptions</h3>`,5),h=s("li",null,[s("p",null,"详情："),s("p",null,"接收 Vite 的所有配置项。")],-1),_=s("p",null,"参考：",-1),y={href:"https://cn.vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},m=s("h3",{id:"vuepluginoptions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepluginoptions","aria-hidden":"true"},"#"),e(" vuePluginOptions")],-1),C=s("p",null,"详情：",-1),b={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,"参考：",-1),g={href:"https://cn.vitejs.dev/plugins/#vitejsplugin-vue",target:"_blank",rel:"noopener noreferrer"};function k(E,x){const o=a("NpmBadge"),l=a("ExternalLinkIcon");return t(),r("div",null,[d,n(o,{package:"@vuepress/bundler-vite"}),s("p",null,[e("Vite 打包工具是由 "),s("a",u,[e("@vuepress/bundler-vite"),n(l)]),e(" 包提供的。它是 "),s("a",D,[e("vuepress"),n(l)]),e(" 包的依赖之一，当然你也可以单独安装它：")]),v,s("ul",null,[h,s("li",null,[_,s("ul",null,[s("li",null,[s("a",y,[e("Vite > Config"),n(l)])])])])]),m,s("ul",null,[s("li",null,[C,s("p",null,[e("接收 "),s("a",b,[e("@vitejs/plugin-vue"),n(l)]),e(" 的所有配置项。")])]),s("li",null,[f,s("ul",null,[s("li",null,[s("a",g,[e("Vite > 插件 > 官方插件"),n(l)])])])])])])}const w=p(c,[["render",k],["__file","vite.html.vue"]]);export{w as default};
