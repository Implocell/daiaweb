import{_ as t,a as n,b as s,c as r,i as e,s as a,d as o,S as c,e as i,g as f,f as u,h as l,j as h,n as g,m as v,l as m,o as p,p as d,r as $,q as y,v as b,w as j,x as w,t as E,G as x,k as D,u as I,F as R,I as L,E as S,K as A,L as P}from"./client.8eb69ce8.js";import{b as q}from"./index.21cb7b73.js";import{P as V}from"./Posts.7aabec24.js";function k(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=n(t);if(r){var o=n(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return s(this,e)}}function z(t,n,s){var r=t.slice();return r[1]=n[s],r}function B(t){var n,s,r,e;return s=new V({props:{title:t[1].title,imgSrc:t[1].img,desc:t[1].desc,href:"losninger/".concat(t[1].slug)}}),{c:function(){n=i("div"),f(s.$$.fragment),r=u(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var e=h(n);g(s.$$.fragment,e),r=v(e),e.forEach(m),this.h()},h:function(){p(n,"class","single-post svelte-1wf1goa")},m:function(t,a){d(t,n,a),$(s,n,null),y(n,r),e=!0},p:function(t,n){var r={};1&n&&(r.title=t[1].title),1&n&&(r.imgSrc=t[1].img),1&n&&(r.desc=t[1].desc),1&n&&(r.href="losninger/".concat(t[1].slug)),s.$set(r)},i:function(t){e||(b(s.$$.fragment,t),e=!0)},o:function(t){j(s.$$.fragment,t),e=!1},d:function(t){t&&m(n),w(s)}}}function F(t){for(var n,s,r,e,a,o,c,f,g=t[0],$=[],w=0;w<g.length;w+=1)$[w]=B(z(t,g,w));var V=function(t){return j($[t],1,1,(function(){$[t]=null}))};return{c:function(){n=u(),s=i("div"),r=i("main"),e=i("h1"),a=E("Løsninger"),o=u();for(var t=0;t<$.length;t+=1)$[t].c();this.h()},l:function(t){x('[data-svelte="svelte-1isgf9z"]',document.head).forEach(m),n=v(t),s=l(t,"DIV",{class:!0});var c=h(s);r=l(c,"MAIN",{class:!0});var i=h(r);e=l(i,"H1",{class:!0});var f=h(e);a=D(f,"Løsninger"),f.forEach(m),o=v(i);for(var u=0;u<$.length;u+=1)$[u].l(i);i.forEach(m),c.forEach(m),this.h()},h:function(){document.title="DAIA: Løsninger",p(e,"class","svelte-1wf1goa"),p(r,"class","svelte-1wf1goa"),p(s,"class","container svelte-1wf1goa")},m:function(t,c){d(t,n,c),d(t,s,c),y(s,r),y(r,e),y(e,a),y(r,o);for(var i=0;i<$.length;i+=1)$[i].m(r,null);f=!0},p:function(t,n){var s=I(n,1)[0];if(1&s){var e;for(g=t[0],e=0;e<g.length;e+=1){var a=z(t,g,e);$[e]?($[e].p(a,s),b($[e],1)):($[e]=B(a),$[e].c(),b($[e],1),$[e].m(r,null))}for(S(),e=g.length;e<$.length;e+=1)V(e);R()}},i:function(t){if(!f){for(var n=0;n<g.length;n+=1)b($[n]);c||A((function(){(c=P(r,q,{})).start()})),f=!0}},o:function(t){$=$.filter(Boolean);for(var n=0;n<$.length;n+=1)j($[n]);f=!1},d:function(t){t&&m(n),t&&m(s),L($,t)}}}function G(t){t.params,t.query;return this.fetch("losninger.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function H(t,n,s){var r=n.posts;return t.$set=function(t){"posts"in t&&s(0,r=t.posts)},[r]}var K=function(n){t(i,c);var s=k(i);function i(t){var n;return r(this,i),n=s.call(this),e(o(n),t,H,F,a,{posts:0}),n}return i}();export default K;export{G as preload};
