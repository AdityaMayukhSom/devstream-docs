import{_ as t,c as o,a0 as n,o as r}from"./chunks/framework.BIwO_W-P.js";const g=JSON.parse('{"title":"Interface: LoginResponse","description":"","frontmatter":{},"headers":[],"relativePath":"interfaces/LoginResponse.md","filePath":"interfaces/LoginResponse.md"}'),a={name:"interfaces/LoginResponse.md"};function s(i,e,d,c,p,h){return r(),o("div",null,e[0]||(e[0]=[n('<p><a href="./../">@adityamayukhsom/client-typescript</a> / LoginResponse</p><h1 id="interface-loginresponse" tabindex="-1">Interface: LoginResponse <a class="header-anchor" href="#interface-loginresponse" aria-label="Permalink to &quot;Interface: LoginResponse&quot;">​</a></h1><p>Check if requiresTwoFactorAuth is true, then use ID and generated OTP to send another request to get authentication tokens. If two factor authentication is set to false, directly access the tokens from the object.</p><h2 id="export" tabindex="-1">Export <a class="header-anchor" href="#export" aria-label="Permalink to &quot;Export&quot;">​</a></h2><p>LoginResponse</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a id="accesstoken"></a> <code>accessToken</code></td><td><code>string</code></td><td><strong>Memberof</strong> LoginResponse</td></tr><tr><td><a id="loginattemptid"></a> <code>loginAttemptID</code></td><td><code>string</code></td><td>This is to keep track of which login attempt will be validated using the two factor authentication OTP. <strong>Memberof</strong> LoginResponse</td></tr><tr><td><a id="loginattempttimestamp"></a> <code>loginAttemptTimeStamp</code></td><td><code>string</code></td><td><strong>Memberof</strong> LoginResponse</td></tr><tr><td><a id="refreshtoken"></a> <code>refreshToken</code></td><td><code>string</code></td><td><strong>Memberof</strong> LoginResponse</td></tr><tr><td><a id="requirestwofactorauth"></a> <code>requiresTwoFactorAuth</code></td><td><code>boolean</code></td><td>Whether two factor authentication is on or off. If true, accessToken and refreshToken needs to be set empty string. If false, only then the tokens contain meaningful information. <strong>Memberof</strong> LoginResponse</td></tr></tbody></table>',7)]))}const l=t(a,[["render",s]]);export{g as __pageData,l as default};
