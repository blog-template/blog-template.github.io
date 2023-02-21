import{_ as r,H as a,k as u,l as m,I as n,L as e,n as s,P as l,U as p}from"./framework-6ed030cc.js";const v={},D=e("h1",{id:"built-in-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#built-in-components","aria-hidden":"true"},"#"),s(" Built-in Components")],-1),b={id:"badge",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),g=p(`<ul><li><p>Props:</p><ul><li>type <ul><li>Type: <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>Default: <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>Type: <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>Default: <code>undefined</code></li></ul></li></ul></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;tip&quot; text=&quot;v2&quot; vertical=&quot;top&quot; /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;warning&quot; text=&quot;v2&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;danger&quot; text=&quot;v2&quot; vertical=&quot;bottom&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,4),y=p(`<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h2><ul><li><p>Details:</p><p>Wrapper of the <a href="#codegroupitem">CodeGroupItem</a> components.</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem" aria-hidden="true">#</a> CodeGroupItem</h2><ul><li><p>Props:</p><ul><li>title <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul></li></ul></li><li><p>Details:</p><p>This component must be placed inside a <a href="#codegroup">CodeGroup</a> component.</p><p>Use the <code>active</code> prop to set the initial active item, or the first item will be activated by default.</p></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&lt;CodeGroup&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;CodeGroupItem title=&quot;PNPM&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">pnpm </span><span style="color:#CE9178;">install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;CodeGroupItem title=&quot;YARN&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn </span><span style="color:#CE9178;">install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;CodeGroupItem title=&quot;NPM&quot; active&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/CodeGroup&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,7),_=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"pnpm "),e("span",{style:{color:"#CE9178"}},"install")]),s(`
`),e("span",{class:"line"})])])],-1),f=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"yarn "),e("span",{style:{color:"#CE9178"}},"install")]),s(`
`),e("span",{class:"line"})])])],-1),k=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"npm "),e("span",{style:{color:"#CE9178"}},"install")]),s(`
`),e("span",{class:"line"})])])],-1),x={class:"custom-container warning"},C=e("p",{class:"custom-container-title"},"WARNING",-1),E=e("p",null,[s("You must add an empty line between the starting tag of "),e("code",null,"<CodeGroupItem>"),s(" and the code fence, otherwise the code fence will not be parsed correctly by Markdown.")],-1),q=e("p",null,"All content must be valid Markdown first, and then a Vue SFC.",-1);function G(w,I){const c=a("NpmBadge"),t=a("Badge"),o=a("CodeGroupItem"),d=a("CodeGroup"),i=a("RouterLink");return u(),m("div",null,[D,n(c,{package:"@vuepress/theme-default"}),e("h2",b,[h,s(" Badge "),n(t,{text:"badge"})]),g,e("ul",null,[e("li",null,[s("VuePress - "),n(t,{type:"tip",text:"v2",vertical:"top"})]),e("li",null,[s("VuePress - "),n(t,{type:"warning",text:"v2",vertical:"middle"})]),e("li",null,[s("VuePress - "),n(t,{type:"danger",text:"v2",vertical:"bottom"})])]),y,n(d,null,{default:l(()=>[n(o,{title:"PNPM"},{default:l(()=>[_]),_:1}),n(o,{title:"YARN"},{default:l(()=>[f]),_:1}),n(o,{title:"NPM",active:""},{default:l(()=>[k]),_:1})]),_:1}),e("div",x,[C,E,q,e("p",null,[s("Learn more: "),n(i,{to:"/advanced/cookbook/markdown-and-vue-sfc.html"},{default:l(()=>[s("Cookbook > Markdown and Vue SFC")]),_:1})]),e("p",null,[s("Alternatively, you can use the "),n(i,{to:"/reference/default-theme/markdown.html#custom-containers"},{default:l(()=>[s("custom containers")]),_:1}),s(".")])])])}const N=r(v,[["render",G],["__file","components.html.vue"]]);export{N as default};
