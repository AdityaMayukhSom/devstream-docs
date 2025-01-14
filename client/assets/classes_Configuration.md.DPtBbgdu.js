import{_ as e,c as a,a0 as o,o as r}from"./chunks/framework.BIwO_W-P.js";const u=JSON.parse('{"title":"Class: Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"classes/Configuration.md","filePath":"classes/Configuration.md"}'),s={name:"classes/Configuration.md"};function i(d,t,n,c,h,l){return r(),a("div",null,t[0]||(t[0]=[o('<p><a href="./../">@adityamayukhsom/client-typescript</a> / Configuration</p><h1 id="class-configuration" tabindex="-1">Class: Configuration <a class="header-anchor" href="#class-configuration" aria-label="Permalink to &quot;Class: Configuration&quot;">​</a></h1><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-configuration" tabindex="-1">new Configuration() <a class="header-anchor" href="#new-configuration" aria-label="Permalink to &quot;new Configuration()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param: ConfigurationParameters): Configuration</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><p><code>param</code></p></td><td><p><a href="./../interfaces/ConfigurationParameters.html"><code>ConfigurationParameters</code></a></p></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Configuration.html"><code>Configuration</code></a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a id="accesstoken"></a> <code>accessToken?</code></td><td>| <code>string</code> | <code>Promise</code>&lt;<code>string</code>&gt; | (<code>name</code>?: <code>string</code>, <code>scopes</code>?: <code>string</code>[]) =&gt; <code>string</code> | (<code>name</code>?: <code>string</code>, <code>scopes</code>?: <code>string</code>[]) =&gt; <code>Promise</code>&lt;<code>string</code>&gt;</td><td>parameter for oauth2 security <strong>Param</strong> security name <strong>Param</strong> oauth2 scope <strong>Memberof</strong> Configuration</td></tr><tr><td><a id="apikey"></a> <code>apiKey?</code></td><td>| <code>string</code> | <code>Promise</code>&lt;<code>string</code>&gt; | (<code>name</code>: <code>string</code>) =&gt; <code>string</code> | (<code>name</code>: <code>string</code>) =&gt; <code>Promise</code>&lt;<code>string</code>&gt;</td><td>parameter for apiKey security <strong>Param</strong> security name <strong>Memberof</strong> Configuration</td></tr><tr><td><a id="baseoptions"></a> <code>baseOptions?</code></td><td><code>any</code></td><td>base options for axios calls <strong>Memberof</strong> Configuration</td></tr><tr><td><a id="basepath"></a> <code>basePath?</code></td><td><code>string</code></td><td>override base path <strong>Memberof</strong> Configuration</td></tr><tr><td><a id="formdatactor"></a> <code>formDataCtor?</code></td><td>() =&gt; <code>any</code></td><td>The FormData constructor that will be used to create multipart form data requests. You can inject this here so that execution environments that do not support the FormData class can still run the generated client.</td></tr><tr><td><a id="password"></a> <code>password?</code></td><td><code>string</code></td><td>parameter for basic security <strong>Memberof</strong> Configuration</td></tr><tr><td><a id="serverindex"></a> <code>serverIndex?</code></td><td><code>number</code></td><td>override server index <strong>Memberof</strong> Configuration</td></tr><tr><td><a id="username"></a> <code>username?</code></td><td><code>string</code></td><td>parameter for basic security <strong>Memberof</strong> Configuration</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="isjsonmime" tabindex="-1">isJsonMime() <a class="header-anchor" href="#isjsonmime" aria-label="Permalink to &quot;isJsonMime()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isJsonMime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mime: string): boolean</span></span></code></pre></div><p>Check if the given MIME is a JSON MIME. JSON MIME examples: application/json application/json; charset=UTF8 APPLICATION/JSON application/vnd.company+json</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>mime</code></p></td><td><p><code>string</code></p></td><td><p>MIME (Multipurpose Internet Mail Extensions)</p></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><p>True if the given MIME is JSON, false otherwise.</p>',20)]))}const g=e(s,[["render",i]]);export{u as __pageData,g as default};
