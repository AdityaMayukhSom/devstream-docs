import{_ as t,c as a,a0 as s,o as i}from"./chunks/framework.BIwO_W-P.js";const k=JSON.parse('{"title":"Class: UserApi","description":"","frontmatter":{},"headers":[],"relativePath":"classes/UserApi.md","filePath":"classes/UserApi.md"}'),r={name:"classes/UserApi.md"};function o(h,e,d,n,l,p){return i(),a("div",null,e[0]||(e[0]=[s(`<p><a href="./../">@adityamayukhsom/client-typescript</a> / UserApi</p><h1 id="class-userapi" tabindex="-1">Class: UserApi <a class="header-anchor" href="#class-userapi" aria-label="Permalink to &quot;Class: UserApi&quot;">​</a></h1><p>UserApi - object-oriented interface TypeScript Client Stubs for Devstream</p><h2 id="export" tabindex="-1">Export <a class="header-anchor" href="#export" aria-label="Permalink to &quot;Export&quot;">​</a></h2><p>UserApi</p><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><code>BaseAPI</code></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-userapi" tabindex="-1">new UserApi() <a class="header-anchor" href="#new-userapi" aria-label="Permalink to &quot;new UserApi()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   configuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Configuration, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   basePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   axios</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AxiosInstance): UserApi</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Default value</th></tr></thead><tbody><tr><td><p><code>configuration</code>?</p></td><td><p><a href="./Configuration.html"><code>Configuration</code></a></p></td><td><p><code>undefined</code></p></td></tr><tr><td><p><code>basePath</code>?</p></td><td><p><code>string</code></p></td><td><p><code>BASE_PATH</code></p></td></tr><tr><td><p><code>axios</code>?</p></td><td><p><code>AxiosInstance</code></p></td><td><p><code>globalAxios</code></p></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./UserApi.html"><code>UserApi</code></a></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BaseAPI.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifier</th><th>Type</th><th>Default value</th><th>Inherited from</th></tr></thead><tbody><tr><td><a id="axios-1"></a> <code>axios</code></td><td><code>protected</code></td><td><code>AxiosInstance</code></td><td><code>globalAxios</code></td><td><code>BaseAPI.axios</code></td></tr><tr><td><a id="basepath-1"></a> <code>basePath</code></td><td><code>protected</code></td><td><code>string</code></td><td><code>BASE_PATH</code></td><td><code>BaseAPI.basePath</code></td></tr><tr><td><a id="configuration-1"></a> <code>configuration</code></td><td><code>protected</code></td><td><a href="./Configuration.html"><code>Configuration</code></a></td><td><code>undefined</code></td><td><code>BaseAPI.configuration</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="deleteuserprofile" tabindex="-1">deleteUserProfile() <a class="header-anchor" href="#deleteuserprofile" aria-label="Permalink to &quot;deleteUserProfile()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deleteUserProfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userId: string, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;void&gt;&gt;</span></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>userId</code></p></td><td><p><code>string</code></p></td><td></td></tr><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<code>void</code>&gt;&gt;</p><h4 id="throws" tabindex="-1">Throws <a class="header-anchor" href="#throws" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof" tabindex="-1">Memberof <a class="header-anchor" href="#memberof" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>UserApi</p><hr><h3 id="getuseranalytics" tabindex="-1">getUserAnalytics() <a class="header-anchor" href="#getuseranalytics" aria-label="Permalink to &quot;getUserAnalytics()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserAnalytics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UserAnalytics</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span></span></code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<a href="./../interfaces/UserAnalytics.html"><code>UserAnalytics</code></a>&gt;&gt;</p><h4 id="throws-1" tabindex="-1">Throws <a class="header-anchor" href="#throws-1" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-1" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-1" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>UserApi</p><hr><h3 id="getuserprofileinformation" tabindex="-1">getUserProfileInformation() <a class="header-anchor" href="#getuserprofileinformation" aria-label="Permalink to &quot;getUserProfileInformation()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserProfileInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UserProfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span></span></code></pre></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<a href="./../interfaces/UserProfile.html"><code>UserProfile</code></a>&gt;&gt;</p><h4 id="throws-2" tabindex="-1">Throws <a class="header-anchor" href="#throws-2" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-2" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-2" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>UserApi</p><hr><h3 id="getusersettings" tabindex="-1">getUserSettings() <a class="header-anchor" href="#getusersettings" aria-label="Permalink to &quot;getUserSettings()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserSettings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GetUserSettingsResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span></span></code></pre></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<a href="./../interfaces/GetUserSettingsResponse.html"><code>GetUserSettingsResponse</code></a>&gt;&gt;</p><h4 id="throws-3" tabindex="-1">Throws <a class="header-anchor" href="#throws-3" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-3" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-3" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>UserApi</p><hr><h3 id="updateuserprofileinformation" tabindex="-1">updateUserProfileInformation() <a class="header-anchor" href="#updateuserprofileinformation" aria-label="Permalink to &quot;updateUserProfileInformation()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateUserProfileInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userProfile: UserProfile, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;void&gt;&gt;</span></span></code></pre></div><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>userProfile</code></p></td><td><p><a href="./../interfaces/UserProfile.html"><code>UserProfile</code></a></p></td><td></td></tr><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<code>void</code>&gt;&gt;</p><h4 id="throws-4" tabindex="-1">Throws <a class="header-anchor" href="#throws-4" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-4" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-4" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>UserApi</p><hr><h3 id="updateusersettings" tabindex="-1">updateUserSettings() <a class="header-anchor" href="#updateusersettings" aria-label="Permalink to &quot;updateUserSettings()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateUserSettings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(updateUserSettingsRequest: UpdateUserSettingsRequest, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RawAxiosRequestConfig): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AxiosResponse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;void&gt;&gt;</span></span></code></pre></div><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>updateUserSettingsRequest</code></p></td><td><p><a href="./../interfaces/UpdateUserSettingsRequest.html"><code>UpdateUserSettingsRequest</code></a></p></td><td></td></tr><tr><td><p><code>options</code>?</p></td><td><p><code>RawAxiosRequestConfig</code></p></td><td><p>Override http request option.</p></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>AxiosResponse</code>&lt;<code>void</code>&gt;&gt;</p><h4 id="throws-5" tabindex="-1">Throws <a class="header-anchor" href="#throws-5" aria-label="Permalink to &quot;Throws&quot;">​</a></h4><h4 id="memberof-5" tabindex="-1">Memberof <a class="header-anchor" href="#memberof-5" aria-label="Permalink to &quot;Memberof&quot;">​</a></h4><p>UserApi</p>`,78)]))}const u=t(r,[["render",o]]);export{k as __pageData,u as default};
