import{_ as r,H as t,k as c,l as D,I as a,L as s,n,P as e,U as p}from"./framework-6ed030cc.js";const d={},y=s("h1",{id:"plugin-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plugin-api","aria-hidden":"true"},"#"),n(" Plugin API")],-1),u={href:"https://www.npmjs.com/package/@vuepress/core",target:"_blank",rel:"noopener noreferrer"},C=p('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Plugins should be used before initialization. The basic options will be handled once the plugin is used:</p><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul><p>The following hooks will be processed when initializing app:</p><ul><li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li><li><a href="#extendsmarkdown">extendsMarkdown</a></li><li><a href="#extendspageoptions">extendsPageOptions</a></li><li><a href="#extendspage">extendsPage</a></li><li><a href="#oninitialized">onInitialized</a></li></ul><p>The following hooks will be processed when preparing files:</p><ul><li><a href="#clientconfigfile">clientConfigFile</a></li><li><a href="#onprepared">onPrepared</a></li></ul><p>The following hooks will be processed in dev / build:</p><ul><li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li><li><a href="#alias">alias</a></li><li><a href="#define">define</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul>',9),h=p(`<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options" aria-hidden="true">#</a> Basic Options</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the plugin.</p><p>It will be used for identifying plugins to avoid using a same plugin multiple times, so make sure to use a unique plugin name.</p><p>It should follow the naming convention:</p><ul><li>Non-scoped: <code>vuepress-plugin-foo</code></li><li>Scoped: <code>@org/vuepress-plugin-foo</code></li></ul></li><li><p>Also see:</p><ul><li><a href="#multiple">Plugin API &gt; multiple</a></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Declare whether the plugin can be used multiple times.</p><p>If set to <code>false</code>, when using plugins with the same name, the one used previously will be replaced by the one used later.</p><p>If set to <code>true</code>, plugins with the same name could be used multiple times and won&#39;t be replaced.</p></li><li><p>Also see:</p><ul><li><a href="#name">Plugin API &gt; name</a></li></ul></li></ul><h2 id="development-hooks" tabindex="-1"><a class="header-anchor" href="#development-hooks" aria-hidden="true">#</a> Development Hooks</h2><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h3><ul><li><p>Type: <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>Details:</p><p>Path aliases definition.</p><p>This hook accepts an object or a function that returns an object.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/alias&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clientconfigfile" tabindex="-1"><a class="header-anchor" href="#clientconfigfile" aria-hidden="true">#</a> clientConfigFile</h3><ul><li><p>Type: <code>string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code></p></li><li><p>Details:</p><p>Path of client config file.</p><p>This hook accepts an absolute file path, or a function that returns the path.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">clientConfigFile:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;./path/to/clientConfig.js&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),m=p(`<h3 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> define</h3><ul><li><p>Type: <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>Details:</p><p>Define global constants replacements.</p><p>This hook accepts an object or a function that returns an object.</p><p>This can be useful for passing variables to client files. Note that the values will be automatically processed by <code>JSON.stringify()</code>.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">define:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__GLOBAL_BOOLEAN__:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__GLOBAL_STRING__:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;foobar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__GLOBAL_OBJECT__:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendsbundleroptions" tabindex="-1"><a class="header-anchor" href="#extendsbundleroptions" aria-hidden="true">#</a> extendsBundlerOptions</h3><ul><li><p>Type: <code>(options: BundlerOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Bundler options extension.</p><p>This hook accepts a function that will receive the bundler options.</p><p>This hook can be used for modifying bundler options.</p><p>You could determine which bundler the user is using by <code>app.options.bundler.name</code>.</p></li><li><p>Example:</p></li></ul>`,5),v={href:"https://vuejs.org/api/application.html#app-config-compileroptions",target:"_blank",rel:"noopener noreferrer"},b=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsBundlerOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// extends options of @vuepress/bundler-vite</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bundler</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;@vuepress/bundler-vite&#39;</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">isCustomElement</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCustomElement</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;">?.(</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">)) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;my-custom-element&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// extends options of @vuepress/bundler-webpack</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bundler</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;@vuepress/bundler-webpack&#39;</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">isCustomElement</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCustomElement</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;">?.(</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">)) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;my-custom-element&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=p(`<h3 id="extendsmarkdownoptions" tabindex="-1"><a class="header-anchor" href="#extendsmarkdownoptions" aria-hidden="true">#</a> extendsMarkdownOptions</h3><ul><li><p>Type: <code>(options: MarkdownOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Markdown options extension.</p><p>This hook accepts a function that will receive the markdown options.</p><p>This hook can be used for modifying markdown options.</p></li><li><p>Example:</p></li></ul><p>Modifying the default header levels that going to be extracted:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsMarkdownOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;"> === </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;"> = [</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),f=s("h3",{id:"extendsmarkdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#extendsmarkdown","aria-hidden":"true"},"#"),n(" extendsMarkdown")],-1),E=s("li",null,[s("p",null,[n("Type: "),s("code",null,"(md: Markdown, app: App) => void | Promise<void>")])],-1),F=s("p",null,"Details:",-1),k=s("p",null,"Markdown enhancement.",-1),x=s("code",null,"Markdown",-1),_={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},w=s("p",null,"This hook can be used for using extra markdown-it plugins and implementing customizations.",-1),A=s("li",null,[s("p",null,"Example:")],-1),P=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsMarkdown</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">plugin1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">linkify</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">set</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">fuzzyEmail:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendspageoptions" tabindex="-1"><a class="header-anchor" href="#extendspageoptions" aria-hidden="true">#</a> extendsPageOptions</h3><ul><li><p>Type: <code>(options: PageOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Page options extension.</p><p>This hook accepts a function that will receive the options of <code>createPage</code>.</p><p>This hook can be used for modifying page options</p></li><li><p>Example:</p></li></ul><p>Set permalink pattern for pages in <code>_posts</code> directory:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsPageOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">filePath</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">startsWith</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">dir</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;_posts/&#39;</span><span style="color:#D4D4D4;">))) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;"> ?? {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">permalinkPattern</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;/:year/:month/:day/:slug.html&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),O=p(`<h3 id="extendspage" tabindex="-1"><a class="header-anchor" href="#extendspage" aria-hidden="true">#</a> extendsPage</h3><ul><li><p>Type: <code>(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Page extension.</p><p>This hook accepts a function that will receive a <code>Page</code> instance.</p><p>This hook can be used for adding extra properties or modifying current properties on <code>Page</code> object.</p><p>Notice that changes to <code>page.data</code> and <code>page.routeMeta</code> can be used in client side code.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsPage</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In client component:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePageData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">page</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePageData</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// bar</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),T=p('<h2 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a> Lifecycle Hooks</h2><h3 id="oninitialized" tabindex="-1"><a class="header-anchor" href="#oninitialized" aria-hidden="true">#</a> onInitialized</h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has been initialized.</p></li></ul><h3 id="onprepared" tabindex="-1"><a class="header-anchor" href="#onprepared" aria-hidden="true">#</a> onPrepared</h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has finished preparation.</p></li></ul><h3 id="onwatched" tabindex="-1"><a class="header-anchor" href="#onwatched" aria-hidden="true">#</a> onWatched</h3><ul><li><p>Type: <code>(app: App, watchers: Closable[], restart: () =&gt; Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has started dev-server and watched files change.</p><p>The <code>watchers</code> is an array of file watchers. When changing config file, the dev command will be restarted and those watchers will be closed. If you are adding new watchers in this hook, you should push your watchers to the <code>watchers</code> array, so that they can be closed correctly when restarting.</p><p>The <code>restart</code> is a method to restart the dev command. When calling this method, the <code>watchers</code> array will be closed automatically.</p></li></ul><h3 id="ongenerated" tabindex="-1"><a class="header-anchor" href="#ongenerated" aria-hidden="true">#</a> onGenerated</h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has generated static files.</p></li></ul>',9);function B(I,N){const i=t("NpmBadge"),o=t("ExternalLinkIcon"),l=t("RouterLink");return c(),D("div",null,[y,a(i,{package:"@vuepress/core"}),s("p",null,[n("Plugin API is supported by "),s("a",u,[n("@vuepress/core"),a(o)]),n(" package. You could check out "),a(l,{to:"/reference/node-api.html"},{default:e(()=>[n("Node API")]),_:1}),n(" for how to use the VuePress app instance in plugin hooks.")]),C,s("blockquote",null,[s("p",null,[n("Check out "),a(l,{to:"/advanced/architecture.html#core-process-and-hooks"},{default:e(()=>[n("Advanced > Architecture > Core Process and Hooks")]),_:1}),n(" to understand the process better.")])]),h,s("ul",null,[s("li",null,[n("Also see: "),s("ul",null,[s("li",null,[a(l,{to:"/reference/client-api.html#defineclientconfig"},{default:e(()=>[n("Client API > defineClientConfig")]),_:1})]),s("li",null,[a(l,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:e(()=>[n("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])]),m,s("p",null,[n("Adding default "),s("a",v,[n("app.compilerOptions.isCustomElement"),a(o)]),n(" option:")]),b,s("ul",null,[s("li",null,[n("Also see: "),s("ul",null,[s("li",null,[a(l,{to:"/reference/bundler/vite.html"},{default:e(()=>[n("Bundlers > Vite")]),_:1})]),s("li",null,[a(l,{to:"/reference/bundler/webpack.html"},{default:e(()=>[n("Bundlers > Webpack")]),_:1})])])])]),g,s("ul",null,[s("li",null,[n("Also see: "),s("ul",null,[s("li",null,[a(l,{to:"/reference/config.html#markdown"},{default:e(()=>[n("Config > markdown")]),_:1})])])])]),f,s("ul",null,[E,s("li",null,[F,k,s("p",null,[n("This hook accepts a function that will receive an instance of "),x,n(" powered by "),s("a",_,[n("markdown-it"),a(o)]),n(" in its arguments.")]),w]),A]),P,s("ul",null,[s("li",null,[n("Also see: "),s("ul",null,[s("li",null,[a(l,{to:"/reference/node-api.html#createpage"},{default:e(()=>[n("Node API > Page > createPage")]),_:1})])])])]),O,s("ul",null,[s("li",null,[n("Also see: "),s("ul",null,[s("li",null,[a(l,{to:"/reference/client-api.html#usepagedata"},{default:e(()=>[n("Client API > usePageData")]),_:1})]),s("li",null,[a(l,{to:"/reference/node-api.html#data"},{default:e(()=>[n("Node API > Page Properties > data")]),_:1})]),s("li",null,[a(l,{to:"/reference/node-api.html#routemeta"},{default:e(()=>[n("Node API > Page Properties > routeMeta")]),_:1})])])])]),T])}const L=r(d,[["render",B],["__file","plugin-api.html.vue"]]);export{L as default};