(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return A()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:h,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function m(){}function y(){}function g(){}var L={};u(L,a,(function(){return this}));var E=Object.getPrototypeOf,w=E&&E(E(O([])));w&&w!==n&&r.call(w,a)&&(L=w);var x=g.prototype=m.prototype=Object.create(L);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=g,u(x,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n){var r=document.documentElement,o="data-outside";function a(i){t.contains(i.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,a)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,a)}))})),t.setAttribute(o,""))}function e(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o,a,i,c,u,s,l,f,h,d,v,p,m,y=n(757),g=n.n(y);function L(){var t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}));var e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}!function(){var t=document.querySelectorAll('[data-menu="suave"] a[href^="#"]');function e(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}t.length&&t.forEach((function(t){t.addEventListener("click",e)}))}(),function(){var t=document.querySelectorAll('[data-anime="scroll"]'),e="ativo",n=.6*window.innerHeight;function r(){t.forEach((function(t){t.getBoundingClientRect().top-n<0?t.classList.add(e):t.classList.contains(e)&&t.classList.remove(e)}))}t.length&&(r(),window.addEventListener("scroll",r))}(),function(){var t=document.querySelectorAll('[data-anime="accordion"] dt'),e="ativo";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((function(t){t.addEventListener("click",n)})))}(),o=document.querySelectorAll('[data-tab="menu"] li'),a=document.querySelectorAll('[data-tab="content"] section'),i="ativo",o.length&&a.length&&(a[0].classList.add(i),o.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){var e=a[t].dataset.anime;a.forEach((function(t){t.classList.remove(i)})),a[t].classList.add(i,e)}(e)}))}))),function(){var t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function r(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",r),e.addEventListener("click",r),n.addEventListener("click",(function(t){t.target===this&&r(t)})))}(),function(){var t=document.querySelectorAll("[data-tooltip]"),e={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},n={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function r(t){var r=function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);r.style.top="".concat(t.pageY,"px"),r.style.left="".concat(t.pageX,"px"),e.tooltipBox=r,n.tooltipBox=r,n.element=this,this.addEventListener("mousemove",e),this.addEventListener("mouseleave",n)}t.forEach((function(t){t.addEventListener("mouseover",r)}))}(),c=document.querySelectorAll("[data-dropdown]"),u=["touchstart","click"],c.forEach((function(e){function n(e){var n=this;e.preventDefault(),this.classList.add("active"),t(this,u,(function(){n.classList.remove("active")}))}u.forEach((function(t){e.addEventListener(t,n)}))})),function(){var e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),r=["touchstart","click"];function o(){n.classList.add("active"),e.classList.add("active"),t(n,r,(function(){n.classList.remove("active"),e.classList.remove("active")}))}e&&r.forEach((function(t){e.addEventListener(t,o)}))}(),l=(s=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),f=s.dataset.horario.split(",").map(Number),d=(h=new Date).getDay(),v=h.getHours(),p=l.includes(d),m=v>=f[0]&&v<f[1],p&&m&&s.classList.add("aberto"),function(){function t(t){var e=document.createElement("div");return e.classList.add(".numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numero>").concat(t.total,"</span>"),e}function e(){return(e=r(g().mark((function e(n){var r,o,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,a=document.querySelector(".numeros-grid"),o.forEach((function(e){var n=t(e);a.appendChild(n)})),L(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(Error(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("./animaisapi.json")}(),function(){function t(){return(t=r(g().mark((function t(e){var n,r,o;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.next=9,r.BRL;case 9:o=t.sent,document.querySelector(".btc-preco").innerText=(1e3/o.buy).toFixed("4"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(Error(t.t0));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("https://blockchain.info/ticker")}()})()})();