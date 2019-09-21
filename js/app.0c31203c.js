(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4831a1d2"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"3fc9bdf6"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/api-omdb/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"home"},[n("div",{staticClass:"container"},[n("h1",[e._v("I Like Movies")]),n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.getMovies(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],staticClass:"form__input form__search",attrs:{type:"search",placeholder:"Search Movie"},domProps:{value:e.term},on:{input:function(t){t.target.composing||(e.term=t.target.value)}}}),n("input",{staticClass:"form__input form__submit",attrs:{type:"submit"}})]),e.loading?n("div",[e._v("\n      Carregando...\n    ")]):e._e(),e.movies?n("ul",{staticClass:"listMovie"},e._l(e.movies,(function(t){return n("li",{key:t.imdbID,staticClass:"listMovie__item"},[n("router-link",{staticClass:"listMovie__link",attrs:{to:{name:"movie",params:{id:t.imdbID}}}},[n("img",{staticClass:"listMovie__image",attrs:{src:t.Poster,alt:t.Title}}),n("div",{staticClass:"listMovie__description"},[n("h3",{staticClass:"listMovie__title"},[e._v(e._s(t.Title))]),n("div",{staticClass:"listMovie__line"},[n("p",{staticClass:"listMovie__year"},[e._v(e._s(t.Year))]),n("p",{staticClass:"listMovie__type"},[e._v(e._s(t.Type))])])])])],1)})),0):n("h2",[e._v("No results were found for your search.")])])])},d=[],p=n("87e7"),m={name:"home",data:function(){return{loading:!1,term:"",movies:{},query:"s="}},components:{},methods:{getMovies:function(){var e=this;this.loading=!0,p["a"].get(this.query,this.term).then((function(t){e.movies=t.data.Search,e.loading=!1}))}},created:function(){this.getMovies()}},v=m,h=(n("cccb"),Object(i["a"])(v,f,d,!1,null,null,null)),b=h.exports;r["a"].use(l["a"]);var g=new l["a"]({mode:"history",base:"/api-omdb/",routes:[{path:"/",name:"home",component:b},{path:"/movie",name:"movie",component:function(){return n.e("about").then(n.bind(null,"def6"))},children:[{path:":id",name:"movie",component:function(){return n.e("about").then(n.bind(null,"def6"))}}]}]}),_=n("2f62");r["a"].use(_["a"]);var y=new _["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:g,store:y,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},"87e7":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("bc3a"),o=n.n(r),a="?apikey=414955e6&",i=o.a.create({baseURL:"https://www.omdbapi.com/"}),s={get:function(e,t){var n="".concat(a).concat(e).concat(t);return i.get(n)}}},cccb:function(e,t,n){"use strict";var r=n("d563"),o=n.n(r);o.a},d563:function(e,t,n){}});
//# sourceMappingURL=app.0c31203c.js.map