import{_ as i,H as t,k as c,l as D,I as e,L as s,n,P as p,U as l}from"./framework-6ed030cc.js";const d={},u=s("h1",{id:"pwa",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),n(" pwa")],-1),y={href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@vuepress/plugin-pwa@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">pwaPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="web-app-manifests" tabindex="-1"><a class="header-anchor" href="#web-app-manifests" aria-hidden="true">#</a> Web App Manifests</h2>`,4),b={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,".vuepress/public",-1),g=l(`<ol><li>Create manifest file</li></ol><p>Typically <code>.vuepress/public/manifest.webmanifest</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;short_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;description&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Vue-powered Static Site Generator&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/index.html&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;display&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;standalone&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;background_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#fff&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;theme_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#3eaf7c&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;icons&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-192x192.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;192x192&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-384x384.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;384x384&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Generate PWA icons</li></ol><p>To make your PWA more accessible, you need to generate some icons, and put them inside the public directory.</p><p>Make sure the path of icons matches the <code>icons</code> field in your manifest file:</p><ul><li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li><li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li></ul>`,7),_={class:"custom-container tip"},f=s("p",{class:"custom-container-title"},"TIP",-1),E={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},k=s("ol",{start:"3"},[s("li",null,"Set tags in head")],-1),w={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">head:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;link&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">rel:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;manifest&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">href:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/manifest.webmanifest&#39;</span><span style="color:#D4D4D4;"> }],</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;meta&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;theme-color&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#3eaf7c&#39;</span><span style="color:#D4D4D4;"> }],</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...other tags</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>`,2),q={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},F=s("code",null,"globDirectory",-1),A=s("code",null,"swDest",-1),P=l(`<p>For example, you can set <code>skipWaiting: true</code> to auto activate the new service worker once it is ready:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">skipWaiting:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But if you omit <code>skipWaiting</code> or set it to <code>false</code>, you have to activate the new service worker manually:</p>`,3),W=s("li",null,[n("For developers, you can use our "),s("a",{href:"#composition-api"},"composition API"),n(" to take control of the service worker behavior.")],-1),S=s("h3",{id:"serviceworkerfilename",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),n(" serviceWorkerFilename")],-1),T=s("li",null,[s("p",null,[n("Type: "),s("code",null,"string")])],-1),I=s("li",null,[s("p",null,[n("Default: "),s("code",null,"'service-worker.js'")])],-1),V=s("p",null,"Details:",-1),z=s("p",null,[n("The service worker file will only be generated in "),s("code",null,"build"),n(" mode.")],-1),B=s("h2",{id:"composition-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),n(" Composition API")],-1),N=s("h3",{id:"usepwaevent",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),n(" usePwaEvent")],-1),U=s("p",null,"Details:",-1),L=s("p",null,"Returns the event emitter of this plugin.",-1),M={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},G=s("li",null,[s("p",null,"Example:")],-1),R=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;ready&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Service worker is active.&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>Parameters:</li></ul><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>The registration of the service worker you want activate</td></tr></tbody></table>`,4),j=s("p",null,"Details:",-1),Y={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},H=s("li",null,[s("p",null,"Example:")],-1),O=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">useSkipWaiting</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;updated&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;The waiting service worker is available.&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// activate the waiting service worker</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">useSkipWaiting</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function J(K,Q){const r=t("NpmBadge"),a=t("ExternalLinkIcon"),o=t("RouterLink");return c(),D("div",null,[u,e(r,{package:"@vuepress/plugin-pwa"}),s("p",null,[n("Make your VuePress site a "),s("a",y,[n("Progressive Web Application (PWA)"),e(a)]),n(".")]),s("p",null,[n("This plugin uses "),s("a",v,[n("workbox-build"),e(a)]),n(" to generate service worker file, and uses "),s("a",h,[n("register-service-worker"),e(a)]),n(" to register service worker.")]),m,s("p",null,[n("To make your website fully compliant with PWA, you need to create a "),s("a",b,[n("Web app manifests"),e(a)]),n(" file and set the icons, colors, etc. for your PWA.")]),s("p",null,[n("You need to put your manifest file and icons into the "),e(o,{to:"/guide/assets.html#public-files"},{default:p(()=>[n("public files directory")]),_:1}),n(". In the following example, we assume that you are using the default public directory "),C,n(".")]),g,s("div",_,[f,s("p",null,[n("Some tools can help to do that. For example, "),s("a",E,[n("Favicon Generator"),e(a)]),n(" would help you to generate icons together with a sample manifest file.")])]),k,s("p",null,[n("You also need to set some tags via "),e(o,{to:"/reference/config.html#head"},{default:p(()=>[n("head")]),_:1}),n(" option to "),s("a",w,[n("deploy the manifest"),e(a)]),n(":")]),x,s("p",null,[n("This plugin accepts all parameters of workbox-build's "),s("a",q,[n("generateSW method"),e(a)]),n(" in its options, except "),F,n(" and "),A,n(".")]),P,s("ul",null,[s("li",null,[n("For users, you can use our "),e(o,{to:"/reference/plugin/pwa-popup.html"},{default:p(()=>[n("pwa-popup")]),_:1}),n(" plugin together.")]),W]),S,s("ul",null,[T,I,s("li",null,[V,s("p",null,[n("File path of the generated service worker file, which is relative to the "),e(o,{to:"/reference/config.html#dest"},{default:p(()=>[n("dest")]),_:1}),n(" directory.")]),z])]),B,N,s("ul",null,[s("li",null,[U,L,s("p",null,[n("You can add listener function to events that provided by "),s("a",M,[n("register-service-worker"),e(a)]),n(".")])]),G]),R,s("ul",null,[s("li",null,[j,s("p",null,[n("Call "),s("a",Y,[n("skipWaiting()"),e(a)]),n(" to activate the waiting service worker.")])]),H]),O])}const Z=i(d,[["render",J],["__file","pwa.html.vue"]]);export{Z as default};
