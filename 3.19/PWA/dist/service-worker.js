if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-4efff5f2"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/a4caf7a089.css",revision:"4eb0e88549b8f4a7a8ef63c8c64d7972"},{url:"images/a7054130ef.jpeg",revision:"a7054130ef2da7c0ccf4cdbdf677082f"},{url:"index.html",revision:"ab7e9f1db460aa1964019e49e4b621f9"},{url:"js/bundle.331036c1a1.js",revision:"15eb8f613cea1d1b5537d6de10d0b2a4"}],{})}));
//# sourceMappingURL=service-worker.js.map
