import{_ as t,a as n,b as r,c as s,i as e,s as a,d as o,S as c,e as i,g as f,f as u,h as l,j as h,n as v,m as g,l as m,o as p,p as d,r as $,q as y,v as b,w as j,x as w,G as x,u as D,F as E,I,E as R,K as S,L as k}from"./client.a92866b5.js";import{b as A}from"./index.21cb7b73.js";import{P}from"./Posts.bd4da5d1.js";function q(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=n(t);if(s){var o=n(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return r(this,e)}}function L(t,n,r){var s=t.slice();return s[1]=n[r],s}function V(t){var n,r,s,e;return r=new P({props:{title:t[1].title,imgSrc:t[1].img,desc:t[1].desc,href:"losninger/".concat(t[1].slug)}}),{c:function(){n=i("div"),f(r.$$.fragment),s=u(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var e=h(n);v(r.$$.fragment,e),s=g(e),e.forEach(m),this.h()},h:function(){p(n,"class","single-post svelte-1tl8w4k")},m:function(t,a){d(t,n,a),$(r,n,null),y(n,s),e=!0},p:function(t,n){var s={};1&n&&(s.title=t[1].title),1&n&&(s.imgSrc=t[1].img),1&n&&(s.desc=t[1].desc),1&n&&(s.href="losninger/".concat(t[1].slug)),r.$set(s)},i:function(t){e||(b(r.$$.fragment,t),e=!0)},o:function(t){j(r.$$.fragment,t),e=!1},d:function(t){t&&m(n),w(r)}}}function z(t){for(var n,r,s,e,a,o=t[0],c=[],f=0;f<o.length;f+=1)c[f]=V(L(t,o,f));var v=function(t){return j(c[t],1,1,(function(){c[t]=null}))};return{c:function(){n=u(),r=i("div"),s=i("main");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){x('[data-svelte="svelte-1isgf9z"]',document.head).forEach(m),n=g(t),r=l(t,"DIV",{class:!0});var e=h(r);s=l(e,"MAIN",{class:!0});for(var a=h(s),o=0;o<c.length;o+=1)c[o].l(a);a.forEach(m),e.forEach(m),this.h()},h:function(){document.title="DAIA: Løsninger",p(s,"class","svelte-1tl8w4k"),p(r,"class","container svelte-1tl8w4k")},m:function(t,e){d(t,n,e),d(t,r,e),y(r,s);for(var o=0;o<c.length;o+=1)c[o].m(s,null);a=!0},p:function(t,n){var r=D(n,1)[0];if(1&r){var e;for(o=t[0],e=0;e<o.length;e+=1){var a=L(t,o,e);c[e]?(c[e].p(a,r),b(c[e],1)):(c[e]=V(a),c[e].c(),b(c[e],1),c[e].m(s,null))}for(R(),e=o.length;e<c.length;e+=1)v(e);E()}},i:function(t){if(!a){for(var n=0;n<o.length;n+=1)b(c[n]);e||S((function(){(e=k(s,A,{})).start()})),a=!0}},o:function(t){c=c.filter(Boolean);for(var n=0;n<c.length;n+=1)j(c[n]);a=!1},d:function(t){t&&m(n),t&&m(r),I(c,t)}}}function B(t){t.params,t.query;return this.fetch("losninger.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function F(t,n,r){var s=n.posts;return t.$set=function(t){"posts"in t&&r(0,s=t.posts)},[s]}var G=function(n){t(i,c);var r=q(i);function i(t){var n;return s(this,i),n=r.call(this),e(o(n),t,F,z,a,{posts:0}),n}return i}();export default G;export{B as preload};
