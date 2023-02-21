import{_ as r,H as t,k as d,l as c,I as s,L as e,n as l,P as a,U as i}from"./framework-6ed030cc.js";const u={},h=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),l(" Frontmatter")],-1),D=e("h2",{id:"all-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#all-pages","aria-hidden":"true"},"#"),l(" All Pages")],-1),m=e("p",null,"Frontmatter in this section will take effect in all types of pages.",-1),y=e("h3",{id:"externallinkicon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#externallinkicon","aria-hidden":"true"},"#"),l(" externalLinkIcon")],-1),f=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),v=e("p",null,"Details:",-1),b=e("p",null,"Also see:",-1),g=e("h3",{id:"navbar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#"),l(" navbar")],-1),_=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),k=e("li",null,[e("p",null,"Details:"),e("p",null,"Show navbar on this page or not."),e("p",null,"If you disable navbar in theme config, this frontmatter will not take effect.")],-1),C=e("p",null,"Also see:",-1),x=i(`<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass" aria-hidden="true">#</a> pageClass</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Add extra class name to this page.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">pageClass</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">custom-page-class</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can customize styles of this page in <code>.vuepress/styles/index.scss</code> file:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.theme-container.custom-page-class</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* page styles */</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),E=i(`<h2 id="home-page" tabindex="-1"><a class="header-anchor" href="#home-page" aria-hidden="true">#</a> Home Page</h2><p>Frontmatter in this section will only take effect in home pages.</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Specify whether the page is homepage or a normal page.</p><p>If you don&#39;t set this frontmatter or set it to <code>false</code>, the page would be a <a href="#normal-page">normal page</a>.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">home</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the url of the hero image.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#6A9955;"># public file path</span></span>
<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/images/hero.png</span></span>
<span class="line"><span style="color:#6A9955;"># url</span></span>
<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://vuejs.org/images/logo.png</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),T=e("h3",{id:"heroimagedark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroimagedark","aria-hidden":"true"},"#"),l(" heroImageDark")],-1),A=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),w=e("li",null,[e("p",null,"Details:"),e("p",null,"Specify the url of hero image to be used in dark mode."),e("p",null,"You can make use of this option if you want to use different heroImage config in dark mode.")],-1),S=e("p",null,"Also see:",-1),L=e("li",null,[e("a",{href:"#heroimage"},"Default Theme > Frontmatter > heroImage")],-1),I=i('<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the <code>alt</code> attribute of the hero image.</p><p>This will fallback to the <a href="#heroText">heroText</a>.</p></li></ul><h3 id="heroheight" tabindex="-1"><a class="header-anchor" href="#heroheight" aria-hidden="true">#</a> heroHeight</h3>',3),N=e("li",null,[e("p",null,[l("Type: "),e("code",null,"number")])],-1),F=e("li",null,[e("p",null,[l("Default: "),e("code",null,"280")])],-1),P=e("p",null,"Details:",-1),B=e("p",null,[l("Specify the "),e("code",null,"height"),l(" attribute of the hero "),e("code",null,"<img>"),l(" tag.")],-1),V=e("p",null,"You may need to reduce this value if the height of your hero image is less than the default value.",-1),H={href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"herotext",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#herotext","aria-hidden":"true"},"#"),l(" heroText")],-1),M=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string | null")])],-1),G=e("p",null,"Details:",-1),R=e("p",null,"Specify the the hero text.",-1),U=e("p",null,[l("Set to "),e("code",null,"null"),l(" to disable hero text.")],-1),Y=e("h3",{id:"tagline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tagline","aria-hidden":"true"},"#"),l(" tagline")],-1),z=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string | null")])],-1),O=e("p",null,"Details:",-1),q=e("p",null,"Specify the the tagline.",-1),J=e("p",null,[l("Set to "),e("code",null,"null"),l(" to disable tagline.")],-1),K=i(`<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">?: </span><span style="color:#CE9178;">&#39;primary&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;secondary&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the action buttons.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">actions</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Get Started</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.html</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">primary</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Introduction</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">secondary</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the features list.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">features</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Simplicity First</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Minimal setup with markdown-centered project structure helps you focus on writing.</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Vue-Powered</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Performant</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the content of the footer.</p></li></ul><h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml" aria-hidden="true">#</a> footerHtml</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Allow HTML in footer or not.</p><p>If you set it to <code>true</code>, the <a href="#footer">footer</a> will be treated as HTML code.</p></li></ul><h2 id="normal-page" tabindex="-1"><a class="header-anchor" href="#normal-page" aria-hidden="true">#</a> Normal Page</h2><p>Frontmatter in this section will only take effect in normal pages.</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3>`,17),Q=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),W=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"edit this page"),l(" link in this page or not.")])],-1),X=e("p",null,"Also see:",-1),Z=e("h3",{id:"editlinkpattern",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editlinkpattern","aria-hidden":"true"},"#"),l(" editLinkPattern")],-1),$=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),ee=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Specify the pattern of the "),e("em",null,"edit this page"),l(" link of this page.")])],-1),le=e("p",null,"Also see:",-1),se=e("h3",{id:"lastupdated",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lastupdated","aria-hidden":"true"},"#"),l(" lastUpdated")],-1),ne=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),ae=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"last updated timestamp"),l(" in this page or not.")])],-1),ie=e("p",null,"Also see:",-1),te=e("h3",{id:"contributors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),l(" contributors")],-1),oe=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),pe=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"contributors list"),l(" in this page or not.")])],-1),re=e("p",null,"Also see:",-1),de=e("h3",{id:"sidebar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),l(" sidebar")],-1),ce=e("li",null,[e("p",null,[l("Type: "),e("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),ue=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar of this page.")],-1),he=e("p",null,"Also see:",-1),De=e("h3",{id:"sidebardepth",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebardepth","aria-hidden":"true"},"#"),l(" sidebarDepth")],-1),me=e("li",null,[e("p",null,[l("Type: "),e("code",null,"number")])],-1),ye=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar depth of this page.")],-1),fe=e("p",null,"Also see:",-1),ve=i(`<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the previous page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>To configure the prev link manually, you can set this frontmatter to a <code>NavLink</code> object or a string:</p><ul><li>A <code>NavLink</code> object should have a <code>text</code> field and a <code>link</code> field.</li><li>A string should be the path to the target page file. It will be converted to a <code>NavLink</code> object, whose <code>text</code> is the page title, and <code>link</code> is the page route path.</li></ul></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#6A9955;"># NavLink</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Get Started</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># NavLink - external url</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">GitHub</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://github.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># string - page file path</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># string - page file relative path</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">../../guide/getting-started.md</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the next page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>The type is the same as <a href="#prev">prev</a> frontmatter.</p></li></ul>`,5);function be(ge,_e){const o=t("NpmBadge"),n=t("RouterLink"),p=t("ExternalLinkIcon");return d(),c("div",null,[h,s(o,{package:"@vuepress/theme-default"}),D,m,y,e("ul",null,[f,e("li",null,[v,e("p",null,[l("Provided by "),s(n,{to:"/reference/plugin/external-link-icon.html#externallinkicon"},{default:a(()=>[l("@vuepress/plugin-external-link-icon")]),_:1}),l(".")])]),e("li",null,[b,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#themeplugins-externallinkicon"},{default:a(()=>[l("Default Theme > Config Reference > themePlugins.externalLinkIcon")]),_:1})])])])]),g,e("ul",null,[_,k,e("li",null,[C,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#navbar"},{default:a(()=>[l("Default Theme > Config > navbar")]),_:1})])])])]),x,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/styles.html#style-file"},{default:a(()=>[l("Default Theme > Styles > Style File")]),_:1})])])])]),E,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[s(n,{to:"/guide/assets.html#public-files"},{default:a(()=>[l("Guide > Assets > Public Files")]),_:1})])])])]),T,e("ul",null,[A,w,e("li",null,[S,e("ul",null,[L,e("li",null,[s(n,{to:"/reference/default-theme/config.html#colormode"},{default:a(()=>[l("Default Theme > Config > colorMode")]),_:1})])])])]),I,e("ul",null,[N,F,e("li",null,[P,B,V,e("p",null,[l("Notice that the height is also constrained by CSS. This attribute is to reduce "),e("a",H,[l("Cumulative Layout Shift (CLS)"),s(p)]),l(" that caused by the loading of the hero image.")])])]),j,e("ul",null,[M,e("li",null,[G,R,e("p",null,[l("This will fallback to the site "),s(n,{to:"/reference/config.html#title"},{default:a(()=>[l("title")]),_:1}),l(".")]),U])]),Y,e("ul",null,[z,e("li",null,[O,q,e("p",null,[l("This will fallback to the site "),s(n,{to:"/reference/config.html#description"},{default:a(()=>[l("description")]),_:1}),l(".")]),J])]),K,e("ul",null,[Q,W,e("li",null,[X,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#editlink"},{default:a(()=>[l("Default Theme > Config > editLink")]),_:1})])])])]),Z,e("ul",null,[$,ee,e("li",null,[le,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#editlinkpattern"},{default:a(()=>[l("Default Theme > Config > editLinkPattern")]),_:1})])])])]),se,e("ul",null,[ne,ae,e("li",null,[ie,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#lastupdated"},{default:a(()=>[l("Default Theme > Config > lastUpdated")]),_:1})])])])]),te,e("ul",null,[oe,pe,e("li",null,[re,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#contributors"},{default:a(()=>[l("Default Theme > Config > contributors")]),_:1})])])])]),de,e("ul",null,[ce,ue,e("li",null,[he,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#sidebar"},{default:a(()=>[l("Default Theme > Config > sidebar")]),_:1})])])])]),De,e("ul",null,[me,ye,e("li",null,[fe,e("ul",null,[e("li",null,[s(n,{to:"/reference/default-theme/config.html#sidebardepth"},{default:a(()=>[l("Default Theme > Config > sidebarDepth")]),_:1})])])])]),ve])}const Ce=r(u,[["render",be],["__file","frontmatter.html.vue"]]);export{Ce as default};
