"use strict";(self.webpackChunkcricketweb=self.webpackChunkcricketweb||[]).push([[650],{9650:(ze,U,m)=>{m.r(U),m.d(U,{PublicRoutes:()=>Ae});var w=m(6814),j=m(4664),F=m(9397),H=m(2050),i=m(6146);let Z=(()=>{class t extends H.b{constructor(){super()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Y=m(6555),K=m(7833);function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach(function(r){mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mt(t,e,n){return e=function gt(t){var e=function yt(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function x(t){return"span"===t._type&&"text"in t&&"string"==typeof t.text&&(typeof t.marks>"u"||Array.isArray(t.marks)&&t.marks.every(e=>"string"==typeof e))}function A(t){return"string"==typeof t._type&&"@"!==t._type[0]&&(!("markDefs"in t)||!t.markDefs||Array.isArray(t.markDefs)&&t.markDefs.every(e=>"string"==typeof e._key))&&"children"in t&&Array.isArray(t.children)&&t.children.every(e=>"object"==typeof e&&"_type"in e)}function G(t){return A(t)&&"listItem"in t&&"string"==typeof t.listItem&&(typeof t.level>"u"||"number"==typeof t.level)}function R(t){return"@list"===t._type}function W(t){return"@span"===t._type}function V(t){return"@text"===t._type}const X=["strong","em","code","underline","strike-through"];function wt(t,e,n){if(!x(t)||!t.marks)return[];if(!t.marks.length)return[];const r=t.marks.slice(),o={};return r.forEach(s=>{o[s]=1;for(let a=e+1;a<n.length;a++){const u=n[a];if(!(u&&x(u)&&Array.isArray(u.marks)&&-1!==u.marks.indexOf(s)))break;o[s]++}}),r.sort((s,a)=>function kt(t,e,n){const r=t[e],o=t[n];if(r!==o)return o-r;const s=X.indexOf(e),a=X.indexOf(n);return s!==a?s-a:e.localeCompare(n)}(o,s,a))}function bt(t,e){return(t.level||1)===e.level&&t.listItem===e.listItem}function _(t,e,n){return{_type:"@list",_key:"".concat(t._key||"".concat(e),"-parent"),mode:n,level:t.level||1,listItem:t.listItem,children:[t]}}function z(t,e){const n=e.level||1,r=e.listItem||"normal",o="string"==typeof e.listItem;if(R(t)&&(t.level||1)===n&&o&&(t.listItem||"normal")===r)return t;if(!("children"in t))return;const s=t.children[t.children.length-1];return s&&!x(s)?z(s,e):void 0}function q(t){let e="";return t.children.forEach(n=>{V(n)?e+=n.text:W(n)&&(e+=q(n))}),e}const Ot=["block","list","listItem","marks","types"],Pt=["listItem"],Lt=["_key"];function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach(function(r){_t(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _t(t,e,n){return e=function Tt(t){var e=function Ct(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t,e){if(null==t)return{};var r,o,n=function $t(t,e){if(null==t)return{};var o,s,n={},r=Object.keys(t);for(s=0;s<r.length;s++)!(e.indexOf(o=r[s])>=0)&&(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)!(e.indexOf(r=s[o])>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const Mt=["http","https","mailto","tel"],Dt={"&":"amp","<":"lt",">":"gt",'"':"quot","'":"#x27"};function et(t){return t.replace(/[&<>"']/g,e=>"&".concat(Dt[e],";"))}const S=(t,e)=>"Unknown ".concat(t,", specify a component for it in the `components.").concat(e,"` option"),nt=t=>S('block type "'.concat(t,'"'),"types");function Ht(t){console.warn(t)}const rt={types:{},block:{normal:t=>{let{children:e}=t;return"<p>".concat(e,"</p>")},blockquote:t=>{let{children:e}=t;return"<blockquote>".concat(e,"</blockquote>")},h1:t=>{let{children:e}=t;return"<h1>".concat(e,"</h1>")},h2:t=>{let{children:e}=t;return"<h2>".concat(e,"</h2>")},h3:t=>{let{children:e}=t;return"<h3>".concat(e,"</h3>")},h4:t=>{let{children:e}=t;return"<h4>".concat(e,"</h4>")},h5:t=>{let{children:e}=t;return"<h5>".concat(e,"</h5>")},h6:t=>{let{children:e}=t;return"<h6>".concat(e,"</h6>")}},marks:{em:t=>{let{children:e}=t;return"<em>".concat(e,"</em>")},strong:t=>{let{children:e}=t;return"<strong>".concat(e,"</strong>")},code:t=>{let{children:e}=t;return"<code>".concat(e,"</code>")},underline:t=>{let{children:e}=t;return'<span style="text-decoration:underline">'.concat(e,"</span>")},"strike-through":t=>{let{children:e}=t;return"<del>".concat(e,"</del>")},link:t=>{let{children:e,value:n}=t;const r=n?.href||"";return function jt(t){const e=(t||"").trim(),n=e.charAt(0);if("#"===n||"/"===n)return!0;const r=e.indexOf(":");if(-1===r)return!0;const o=e.slice(0,r).toLowerCase();if(-1!==Mt.indexOf(o))return!0;const s=e.indexOf("?");if(-1!==s&&r>s)return!0;const a=e.indexOf("#");return-1!==a&&r>a}(r)?'<a href="'.concat(et(r),'">').concat(e,"</a>"):e}},list:{number:t=>{let{children:e}=t;return"<ol>".concat(e,"</ol>")},bullet:t=>{let{children:e}=t;return"<ul>".concat(e,"</ul>")}},listItem:t=>{let{children:e}=t;return"<li>".concat(e,"</li>")},hardBreak:()=>"<br/>",unknownType:t=>{let{value:e,isInline:n}=t;const r=nt(e._type);return n?'<span style="display:none">'.concat(r,"</span>"):'<div style="display:none">'.concat(r,"</div>")},unknownMark:t=>{let{markType:e,children:n}=t;return'<span class="unknown__pt__mark__'.concat(e,'">').concat(n,"</span>")},unknownList:t=>{let{children:e}=t;return"<ul>".concat(e,"</ul>")},unknownListItem:t=>{let{children:e}=t;return"<li>".concat(e,"</li>")},unknownBlockStyle:t=>{let{children:e}=t;return"<p>".concat(e,"</p>")}};function O(t,e,n){const r=e[n],o=t[n];return"function"==typeof r||r&&"function"==typeof o?r:r?v(v({},o),r):o}const Kt=(t,e)=>function n(l){const{node:c,index:f,isInline:p}=l;return R(c)?function o(l,c){const f=l.children.map((g,k)=>n({node:g._key?g:v(v({},g),{},{_key:"li-".concat(c,"-").concat(k)}),index:c,isInline:!1,renderNode:n})),p=t.list,y=("function"==typeof p?p:p[l.listItem])||t.unknownList;if(y===t.unknownList){const g=l.listItem||"bullet";e((t=>S('list style "'.concat(t,'"'),"list"))(g),{nodeType:"listStyle",type:g})}return y({value:l,index:c,isInline:!1,renderNode:n,children:f.join("")})}(c,f):G(c)?function r(l,c){const f=it({node:l,index:c,isInline:!1,renderNode:n}),p=t.listItem,y=("function"==typeof p?p:p[l.listItem])||t.unknownListItem;if(y===t.unknownListItem){const k=l.listItem||"bullet";e((t=>S('list item style "'.concat(t,'"'),"listItem"))(k),{type:k,nodeType:"listItemStyle"})}let g=f.children;return l.style&&"normal"!==l.style&&(g=n({node:E(l,Pt),index:c,isInline:!1,renderNode:n})),y({value:l,index:c,isInline:!1,renderNode:n,children:g})}(c,f):W(c)?function s(l){const{markDef:c,markType:f,markKey:p}=l,h=t.marks[f]||t.unknownMark,y=l.children.map((g,k)=>n({node:g,index:k,isInline:!0,renderNode:n}));return h===t.unknownMark&&e((t=>S('mark type "'.concat(t,'"'),"marks"))(f),{nodeType:"mark",type:f}),h({text:q(l),value:c,markType:f,markKey:p,renderNode:n,children:y.join("")})}(c):A(c)?function a(l,c,f){const y=E(it({node:l,index:c,isInline:f,renderNode:n}),Lt),g=y.node.style||"normal",D=("function"==typeof t.block?t.block:t.block[g])||t.unknownBlockStyle;return D===t.unknownBlockStyle&&e((t=>S('block style "'.concat(t,'"'),"block"))(g),{nodeType:"blockStyle",type:g}),D(v(v({},y),{},{value:y.node,renderNode:n}))}(c,f,p):V(c)?function u(l){if("\n"===l.text){const c=t.hardBreak;return c?c():"\n"}return et(l.text)}(c):function d(l,c,f){const p=t.types[l._type];return p||e(nt(l._type),{nodeType:"block",type:l._type}),(p||t.unknownType)({value:l,isInline:f,index:c,renderNode:n})}(c,f,p)};function it(t){const{node:e,index:n,isInline:r,renderNode:o}=t,a=function vt(t){var e;const{children:n,markDefs:r=[]}=t;if(!n||!n.length)return[];const o=n.map(wt),s={_type:"@span",children:[],markType:"<unknown>"};let a=[s];for(let u=0;u<n.length;u++){const d=n[u];if(!d)continue;const l=o[u]||[];let c=1;if(a.length>1)for(;c<a.length;c++){const p=(null==(e=a[c])?void 0:e.markKey)||"",h=l.indexOf(p);if(-1===h)break;l.splice(h,1)}a=a.slice(0,c);let f=a[a.length-1];if(f){for(const p of l){const h=r.find(k=>k._key===p),g={_type:"@span",_key:d._key,children:[],markDef:h,markType:h?h._type:p,markKey:p};f.children.push(g),a.push(g),f=g}if(x(d)){const p=d.text.split("\n");for(let h=p.length;h-- >1;)p.splice(h,0,"\n");f.children=f.children.concat(p.map(h=>({_type:"@text",text:h})))}else f.children=f.children.concat(d)}}return s.children}(e).map((u,d)=>o({node:u,isInline:!0,index:d,renderNode:o}));return{_key:e._key||"block-".concat(n),children:a.join(""),index:n,isInline:r,node:e}}function Jt(){}const ot=t=>{switch(t.markType){case"small":return`<span class='smaller'>${t.children}</span>`;case"red":return`<span class='red'>${t.children}</span>`;default:return`<span>${t.children}</span>`}},Gt={block:t=>{const e=t.node.style||"normal";if(/^h\d/.test(e)){const n=e.replace(/[^\d]/g,"");return`<h${n} class="f${n}">${t.children}</h${n}>`}return"pullquote"===e||"blockquote"===e?`<div class="quoted ${"pullquote"===e?"vanity":""}"><blockquote>${t.children}</blockquote></div>`:`<p>${t.children}</p>`},marks:{red:ot,small:ot,link:t=>`<a rel="noreferrer" href="${t.value.href}" target="_blank">${t.children}</a>`}};let st=(()=>{class t{constructor(){}transform(n){return function Yt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{components:n,onMissingComponent:r=Ht}=e,o=r||Jt,a=function It(t,e){const n=[];let r;for(let o=0;o<t.length;o++){const s=t[o];if(s){if(!G(s)){n.push(s),r=void 0;continue}if(!r){r=_(s,o,e),n.push(r);continue}if(bt(s,r)){r.children.push(s);continue}if((s.level||1)>r.level){const a=_(s,o,e);if("html"===e){const u=r.children[r.children.length-1],d=Q(Q({},u),{},{children:[...u.children,a]});r.children[r.children.length-1]=d}else r.children.push(a);r=a;continue}if((s.level||1)<r.level){const a=n[n.length-1],u=a&&z(a,s);if(u){r=u,r.children.push(s);continue}r=_(s,o,e),n.push(r);continue}if(s.listItem!==r.listItem){const a=n[n.length-1],u=a&&z(a,{level:s.level||1});if(u&&u.listItem===s.listItem){r=u,r.children.push(s);continue}r=_(s,o,e),n.push(r);continue}console.warn("Unknown state encountered for block",s),n.push(s)}}return n}(Array.isArray(t)?t:[t],"html"),u=n?function Zt(t,e){const u=E(e,Ot);return v(v({},t),{},{block:O(t,e,"block"),list:O(t,e,"list"),listItem:O(t,e,"listItem"),marks:O(t,e,"marks"),types:O(t,e,"types")},u)}(rt,n):rt,d=Kt(u,o);return a.map((c,f)=>d({node:c,index:f,isInline:!1,renderNode:d})).join("")}(n,{components:Gt})}static \u0275fac=function(r){return new(r||t)};static \u0275pipe=i.Yjl({name:"tohtml",type:t,pure:!0,standalone:!0})}return t})();var at=m(7582),T=m(7398),ct=m(2096),Rt=m(4716),Wt=m(7915),C=m(3467),B=m(6595);const N={};function lt(t){return function(e,n,r){const o=r.value,s=t?.key||`${e.constructor.name}.${n}`;return r.value=function(...a){const u=t?.withArgs?`${s}_${JSON.stringify(a)}`:s,d=this.storageService.getItem(u);if(d)return(0,ct.of)(d).pipe((0,B.f)("Cached "+s));const l=()=>{const c=this.storageService.getItem(u);return c?(0,ct.of)(c).pipe((0,B.f)("Cached "+s)):(N[s]=!0,o.apply(this,a).pipe((0,F.b)(f=>{this.storageService.setItem(u,f,t?.expiresin)}),(0,Rt.x)(()=>{delete N[s]})))};return N[s]?(0,Wt.H)(C.D.Basic.lockTimeout).pipe((0,j.w)(l)):l()},r}}class ${static PrepList(e){return'*[_type == "content"]\n                {\n                    _id,\n                    "slug": slug.current,\n                    body[]\n                }\n                '}static NewInstance(e){return{id:e._id,slug:e.slug,content:e.body}}static NewInstances(e){return e.result.map($.NewInstance)}}var ut=m(1474),Vt=m(1374),P=m(6351),Xt=m(992),qt=m(5684);let ft=(()=>{class t{platform;configService;constructor(n,r){this.platform=n,this.configService=r,this._setResetKey()}get ourStorage(){return localStorage}getKey(n,r=!1){return`${P.E.Config.Storage.Key}${r?"."+Xt.LV.language:""}.${n}`}_setResetKey(){this.configService.config$.pipe((0,B.f)("config"),(0,Vt.P)(n=>n.isServed)).subscribe(n=>{const r=this.getKey(n.Storage.ResetKey),o=this.ourStorage.getItem(r);(!o||"true"!==o)&&(this.clear(),this.ourStorage.setItem(r,"true"))})}setItem(n,r,o=P.E.Config.Storage.Timeout,s=!1){const a={value:r,timestamp:Date.now(),expiresin:o};this.ourStorage.setItem(this.getKey(n,s),JSON.stringify(a))}getItem(n,r=!1){const o=this.getKey(n,r),s=this.ourStorage.getItem(o);if(s){const a=JSON.parse(s);return Date.now()-a.timestamp>36e5*a.expiresin?(this.removeItem(o),null):a.value}return null}removeItem(n,r=!1){this.ourStorage.removeItem(this.getKey(n,r))}setCache(n,r,o=P.E.Config.Storage.Timeout){this.setItem(n,r,o,!0)}getCache(n){return this.getItem(n,!0)}removeCache(n){this.removeItem(n,!0)}clear(){const n=[];for(let r=0;r<this.ourStorage.length;r++){const o=this.ourStorage.key(r);0===o?.indexOf(P.E.Config.Storage.Key)&&n.push(o)}n.forEach(r=>this.ourStorage.removeItem(r))}static \u0275fac=function(r){return new(r||t)(i.LFG(qt.t),i.LFG(P.E))};static \u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();class I{_http;storageService;constructor(e,n){this._http=e,this.storageService=n}GetContents(e={}){const n=$.PrepList(e);return this._http.get(n).pipe((0,T.U)(r=>$.NewInstances(r)))}GetContent(e){return this.GetContents().pipe((0,T.U)(n=>n.find(r=>r.slug===e)))}static \u0275fac=function(n){return new(n||I)(i.LFG(ut.eN),i.LFG(ft))};static \u0275prov=i.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"})}function te(t,e){if(1&t&&(i.ynx(0),i._UZ(1,"div",1),i.ALo(2,"tohtml"),i.BQk()),2&t){const n=e.ngIf;i.xp6(1),i.Q6J("innerHTML",i.lcZ(2,1,n.content),i.oJD)}}(0,at.gn)([lt({key:"list",expiresin:1})],I.prototype,"GetContents",null);let ee=(()=>{class t{contentService;id;content$;constructor(n){this.contentService=n}ngOnInit(){this.content$=this.contentService.GetContent(this.id)}static \u0275fac=function(r){return new(r||t)(i.Y36(I))};static \u0275cmp=i.Xpm({type:t,selectors:[["pof-content"]],inputs:{id:"id"},standalone:!0,features:[i.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"innerHTML"]],template:function(r,o){1&r&&(i.YNc(0,te,3,3,"ng-container",0),i.ALo(1,"async")),2&r&&i.Q6J("ngIf",i.lcZ(1,1,o.content$))},dependencies:[w.ez,w.O5,w.Ov,K.Bz,st],encapsulation:2,changeDetection:0})}return t})();var ne=m(2181),re=m(2071);function ie(t,e){if(1&t){const n=i.EpF();i.TgZ(0,"a",2),i.NdJ("click",function(o){i.CHM(n);const s=i.oxw();return i.KtG(s.page(o))}),i._uU(1,"\u{1f53b}"),i.qZA()}}let oe=(()=>{class t{loaderState;isLoadMore=!1;source;onPage=new i.vpe;loading$;constructor(n){this.loaderState=n}ngOnInit(){this.loading$=this.loaderState.stateItem$.pipe((0,ne.h)(n=>n.context===this.source),(0,T.U)(n=>!!n&&n.show))}page(n){this.onPage.emit({event:n,source:this.source})}static \u0275fac=function(r){return new(r||t)(i.Y36(re.P))};static \u0275cmp=i.Xpm({type:t,selectors:[["pof-pager"]],inputs:{isLoadMore:"isLoadMore",source:"source"},outputs:{onPage:"onPage"},standalone:!0,features:[i.jDz],decls:3,vars:5,consts:[[1,"pager"],["class","more","title","Show more",3,"click",4,"ngIf"],["title","Show more",1,"more",3,"click"]],template:function(r,o){1&r&&(i.TgZ(0,"div",0),i.ALo(1,"async"),i.YNc(2,ie,2,0,"a",1),i.qZA()),2&r&&(i.ekj("loading",i.lcZ(1,3,o.loading$)),i.xp6(2),i.Q6J("ngIf",o.isLoadMore))},dependencies:[w.ez,w.O5,w.Ov],styles:[".pager .more{display:block;text-align:center;padding:1rem}\n"],encapsulation:2})}return t})(),se=(()=>{class t{el;renderer;crLazy="";options={threshold:0,fallBack:null};io;constructor(n,r){this.el=n,this.renderer=r}setImage(n){"IMG"===this.el.nativeElement.tagName?this.renderer.setAttribute(this.el.nativeElement,"src",n):this.renderer.setAttribute(this.el.nativeElement,"style",`background-image: url(${n})`)}lazyLoad(n){if(n.isIntersecting){const r=new Image;r.addEventListener("load",()=>{this.setImage(r.src),this.renderer.removeClass(n.target,this.options.nullCss),this.io.unobserve(n.target)}),this.options.fallBack&&r.addEventListener("error",()=>{this.setImage(this.options.fallBack),this.io.unobserve(n.target)}),r.src=this.crLazy}}ngAfterViewInit(){!this.crLazy&&this.options.fallBack&&(this.crLazy=this.options.fallBack),this.options.initial&&this.setImage(this.options.initial),this.options.nullCss&&this.renderer.addClass(this.el.nativeElement,this.options.nullCss),this.io=new IntersectionObserver((n,r)=>{const o=n.find(s=>s.isIntersecting);o&&this.lazyLoad(o)},{threshold:this.options.threshold}),this.io.observe(this.el.nativeElement)}ngOnChanges(n){n.crLazy.firstChange||n.crLazy.currentValue!==n.crLazy.previousValue&&this.io.observe(this.el.nativeElement)}ngOnDestroy(){this.io?.disconnect(),this.io=null}static \u0275fac=function(r){return new(r||t)(i.Y36(i.SBq),i.Y36(i.Qsj))};static \u0275dir=i.lG2({type:t,selectors:[["","crLazy",""]],inputs:{crLazy:"crLazy",options:"options"},exportAs:["crLazy"],standalone:!0,features:[i.TTD]})}return t})();const pt="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function ht(t){return`image-${t.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/,"-$1")}const dt=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"]];function ge(t,e){let n;const r=e.width,o=e.height;if(!r||!o)return{width:r,height:o,rect:t.crop};const s=t.crop,a=t.hotspot,u=r/o;if(s.width/s.height>u){const l=s.height,c=l*u,f=s.top;let h=(a.right-a.left)/2+a.left-c/2;h<s.left?h=s.left:h+c>s.left+s.width&&(h=s.left+s.width-c),n={left:Math.round(h),top:Math.round(f),width:Math.round(c),height:Math.round(l)}}else{const l=s.width,c=l/u;let h=(a.bottom-a.top)/2+a.top-c/2;h<s.top?h=s.top:h+c>s.top+s.height&&(h=s.top+s.height-c),n={left:Math.max(0,Math.floor(s.left)),top:Math.max(0,Math.floor(h)),width:Math.round(l),height:Math.round(c)}}return{width:r,height:o,rect:n}}const ye=["clip","crop","fill","fillmax","max","scale","min"],we=["top","bottom","left","right","center","focalpoint","entropy"],ke=["format"];function Ie(t){const e=dt;for(const n of e){const[r,o]=n;if(t===r||t===o)return r}return t}class M{options;constructor(e,n){this.options=e?{...e.options||{},...n||{}}:{...n||{}}}withOptions(e){const n=e.baseUrl||"",r={baseUrl:n};for(const o in e)e.hasOwnProperty(o)&&(r[Ie(o)]=e[o]);return new M(this,{baseUrl:n,...r})}image(e){return this.withOptions({source:e})}dataset(e){return this.withOptions({dataset:e})}projectId(e){return this.withOptions({projectId:e})}bg(e){return this.withOptions({bg:e})}dpr(e){return this.withOptions({dpr:e})}width(e){return this.withOptions({width:e})}height(e){return this.withOptions({height:e})}focalPoint(e,n){return this.withOptions({focalPoint:{x:e,y:n}})}maxWidth(e){return this.withOptions({maxWidth:e})}minWidth(e){return this.withOptions({minWidth:e})}maxHeight(e){return this.withOptions({maxHeight:e})}minHeight(e){return this.withOptions({minHeight:e})}size(e,n){return this.withOptions({width:e,height:n})}blur(e){return this.withOptions({blur:e})}sharpen(e){return this.withOptions({sharpen:e})}rect(e,n,r,o){return this.withOptions({rect:{left:e,top:n,width:r,height:o}})}format(e){return this.withOptions({format:e})}invert(e){return this.withOptions({invert:e})}orientation(e){return this.withOptions({orientation:e})}quality(e){return this.withOptions({quality:e})}forceDownload(e){return this.withOptions({download:e})}flipHorizontal(){return this.withOptions({flipHorizontal:!0})}flipVertical(){return this.withOptions({flipVertical:!0})}ignoreImageParams(){return this.withOptions({ignoreImageParams:!0})}fit(e){if(-1===ye.indexOf(e))throw new Error(`Invalid fit mode "${e}"`);return this.withOptions({fit:e})}crop(e){if(-1===we.indexOf(e))throw new Error(`Invalid crop mode "${e}"`);return this.withOptions({crop:e})}saturation(e){return this.withOptions({saturation:e})}auto(e){if(-1===ke.indexOf(e))throw new Error(`Invalid auto mode "${e}"`);return this.withOptions({auto:e})}url(){return function de(t){let e={...t||{}};const n=e.source;delete e.source;const r=function fe(t){if(!t)return null;let e;if("string"==typeof t&&function pe(t){return/^https?:\/\//.test(`${t}`)}(t))e={asset:{_ref:ht(t)}};else if("string"==typeof t)e={asset:{_ref:t}};else if((t=>!!t&&"string"==typeof t._ref)(t))e={asset:t};else if((t=>!!t&&"string"==typeof t._id)(t))e={asset:{_ref:t._id||""}};else if((t=>!(!t||!t.asset)&&"string"==typeof t.asset.url)(t))e={asset:{_ref:ht(t.asset.url)}};else{if("object"!=typeof t.asset)return null;e=t}const n=t;return n.crop&&(e.crop=n.crop),n.hotspot&&(e.hotspot=n.hotspot),function he(t){if(t.crop&&t.hotspot)return t;const e={...t};return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}(e)}(n);if(!r)return null;const s=function ae(t){const[,e,n,r]=t.split("-");if(!e||!n||!r)throw new Error(`Malformed asset _ref '${t}'. Expected an id like "${pt}".`);const[o,s]=n.split("x"),a=+o,u=+s;if(!isFinite(a)||!isFinite(u))throw new Error(`Malformed asset _ref '${t}'. Expected an id like "${pt}".`);return{id:e,width:a,height:u,format:r}}(r.asset._ref||r.asset._id||""),a=Math.round(r.crop.left*s.width),u=Math.round(r.crop.top*s.height),d={left:a,top:u,width:Math.round(s.width-r.crop.right*s.width-a),height:Math.round(s.height-r.crop.bottom*s.height-u)},l=r.hotspot.height*s.height/2,c=r.hotspot.width*s.width/2,f=r.hotspot.x*s.width,p=r.hotspot.y*s.height,h={left:f-c,top:p-l,right:f+c,bottom:p+l};return e.rect||e.focalPoint||e.ignoreImageParams||e.crop||(e={...e,...ge({crop:d,hotspot:h},e)}),function me(t){const r=`${t.baseUrl||"https://cdn.sanity.io"}/images/${t.projectId}/${t.dataset}/${t.asset.id}-${t.asset.width}x${t.asset.height}.${t.asset.format}`,o=[];if(t.rect){const{left:a,top:u,width:d,height:l}=t.rect;(0!==a||0!==u||l!==t.asset.height||d!==t.asset.width)&&o.push(`rect=${a},${u},${d},${l}`)}t.bg&&o.push(`bg=${t.bg}`),t.focalPoint&&(o.push(`fp-x=${t.focalPoint.x}`),o.push(`fp-y=${t.focalPoint.y}`));const s=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return s&&o.push(`flip=${s}`),dt.forEach(a=>{const[u,d]=a;typeof t[u]<"u"?o.push(`${d}=${encodeURIComponent(t[u])}`):typeof t[d]<"u"&&o.push(`${d}=${encodeURIComponent(t[d])}`)}),0===o.length?r:`${r}?${o.join("&")}`}({...e,asset:s})}(this.options)}toString(){return this.url()}}let xe=(()=>{class t{builder;constructor(){this.builder=function be(t){const e=t;if(function ve(t){return!!t&&"object"==typeof t.clientConfig}(e)){const{apiHost:n,projectId:r,dataset:o}=e.clientConfig;return new M(null,{baseUrl:n.replace(/^https:\/\/api\./,"https://cdn."),projectId:r,dataset:o})}return new M(null,t)}({projectId:C.D.Sanity.ProjectId,dataset:C.D.Sanity.Dataset})}ImageUrlFor(n,r){let o=50;switch(r){case"Tiny":o=100;break;case"Small":o=200;break;case"Medium":o=300;break;case"Large":o=500;break;case"Original":o=1300}return this.builder.image(n).format("webp").auto("format").fit("max").width(o).url().toString()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Se=(()=>{class t{imageService;constructor(n){this.imageService=n}transform(n,r){return this.imageService.ImageUrlFor(n,r||"Original")}static \u0275fac=function(r){return new(r||t)(i.Y36(xe,16))};static \u0275pipe=i.Yjl({name:"sanityimage",type:t,pure:!0,standalone:!0})}return t})();const Oe=t=>({fallBack:t});function Pe(t,e){if(1&t&&(i.TgZ(0,"picture",4),i._UZ(1,"img",5),i.ALo(2,"sanityimage"),i.qZA()),2&t){const n=i.oxw(2);i.xp6(1),i.Q6J("src",n.defaultImage,i.LSH)("crLazy",i.xi3(2,3,n.post.image,"Medium"))("options",i.VKq(6,Oe,n.defaultImage))}}function Le(t,e){if(1&t&&(i.ynx(0),i.TgZ(1,"h6",1),i._uU(2),i.qZA(),i.YNc(3,Pe,3,8,"picture",2),i._UZ(4,"div",3),i.ALo(5,"tohtml"),i.BQk()),2&t){const n=i.oxw();i.xp6(2),i.Oqu(n.post.title),i.xp6(1),i.Q6J("ngIf",n.post.image),i.xp6(1),i.Q6J("innerHTML",i.lcZ(5,3,n.post.content),i.oJD)}}let _e=(()=>{class t{post;defaultImage=C.D.Basic.defaultImage;constructor(){}ngOnInit(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=i.Xpm({type:t,selectors:[["pof-public-card"]],inputs:{post:"post"},standalone:!0,features:[i.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"f6","spaced"],["class","image",4,"ngIf"],[3,"innerHTML"],[1,"image"],[3,"src","crLazy","options"]],template:function(r,o){1&r&&i.YNc(0,Le,6,5,"ng-container",0),2&r&&i.Q6J("ngIf",o.post)},dependencies:[w.ez,w.O5,K.Bz,st,Se,se],encapsulation:2,changeDetection:0})}return t})();var Te=m(7146);class L{static PrepList(e){let n=0,r=-1;return e.page&&(n=(e.page-1)*e.size,r=e.page*e.size),`{\n                "items": *[_type == "post"] | order(publishedAt desc)\n                {\n                    publishedAt, _id,\n                    "mainImage":mainImage.asset->url,\n                    "slug": slug.current,\n                    title,\n                    body[]\n                }\n                [${n}...${r}],\n                "total": count(*[_type == "post"])\n                }\n            `}static NewInstance(e){return{id:e._id,slug:e.slug,date:(0,Y.Gx)(e.publishedAt),title:e.title,content:e.body,image:e.mainImage}}static NewInstances(e){return e.map(L.NewInstance)}static NewList(e){const n=new Te.F;return n.mapper=L.NewInstance,n.NewDataList(e)}}class b{_http;storageService;constructor(e,n){this._http=e,this.storageService=n}GetPosts(e={}){const n=L.PrepList(e);return this._http.get(n).pipe((0,T.U)(r=>L.NewList(r)))}static \u0275fac=function(n){return new(n||b)(i.LFG(ut.eN),i.LFG(ft))};static \u0275prov=i.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"})}(0,at.gn)([lt({key:"posts",expiresin:1,withArgs:!0})],b.prototype,"GetPosts",null);let Ce=(()=>{class t extends H.C{constructor(){super()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $e(t,e){if(1&t&&(i.TgZ(0,"li"),i._UZ(1,"pof-public-card",11),i.qZA()),2&t){const n=e.$implicit;i.xp6(1),i.Q6J("post",n)}}function Me(t,e){if(1&t){const n=i.EpF();i.TgZ(0,"pof-pager",13),i.NdJ("onPage",function(){i.CHM(n);const o=i.oxw(3);return i.KtG(o.getPage())}),i.qZA()}if(2&t){const n=i.oxw().ngIf;i.Q6J("isLoadMore",n.hasMore)}}function De(t,e){if(1&t&&(i.ynx(0),i.YNc(1,Me,1,1,"pof-pager",12),i.BQk()),2&t){const n=e.ngIf;i.xp6(1),i.Q6J("ngIf",n.hasMore)}}function je(t,e){if(1&t&&(i.ynx(0),i.TgZ(1,"ul",9),i.YNc(2,$e,2,1,"li",10),i.qZA(),i.YNc(3,De,2,1,"ng-container",8),i.ALo(4,"async"),i.BQk()),2&t){const n=e.ngIf,r=i.oxw();i.xp6(2),i.Q6J("ngForOf",n)("ngForTrackBy",r.trackByFn),i.xp6(1),i.Q6J("ngIf",i.lcZ(4,3,r.extraParams$))}}const Ae=[{path:"",component:(()=>{class t{postService;postListState;paramState;extraParams;extraParams$;list$;content$;constructor(n,r,o){this.postService=n,this.postListState=r,this.paramState=o,this.extraParams=new Z}ngOnInit(){this.list$=this.paramState.stateItem$.pipe((0,j.w)(n=>this.postService.GetPosts(n)),(0,F.b)(n=>{const r=(0,Y.p$)(n.total,this.paramState.currentItem.size,this.paramState.currentItem.page);this.extraParams.SetState({total:n.total,hasMore:r})}),(0,j.w)(n=>this.postListState.appendList(n.matches))),this.paramState.SetState({page:1,size:8}),this.extraParams$=this.extraParams.stateItem$}getPage(){this.paramState.UpdateState({page:this.paramState.currentItem.page+1})}trackByFn(n,r){return r.id}static \u0275fac=function(r){return new(r||t)(i.Y36(b),i.Y36(Ce),i.Y36(Z))};static \u0275cmp=i.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[i.jDz],decls:13,vars:6,consts:[[1,"page"],[1,"container"],[1,"row-spaced","spaced"],[1,"col","md-4"],[1,"f5","weight-black","allcaps","spaced"],[3,"id"],[1,"col","md-8"],[1,"spaced"],[4,"ngIf"],[1,"row","ucol","umd-3","boxed"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"post"],[3,"isLoadMore","onPage",4,"ngIf"],[3,"isLoadMore","onPage"]],template:function(r,o){1&r&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),i._uU(5,"Israel Pants on fire"),i.qZA(),i._UZ(6,"pof-content",5),i.qZA(),i.TgZ(7,"div",6),i._UZ(8,"pof-content",5),i.qZA()(),i.TgZ(9,"div",7),i._UZ(10,"pof-content",5),i.qZA(),i.YNc(11,je,5,5,"ng-container",8),i.ALo(12,"async"),i.qZA()()),2&r&&(i.xp6(6),i.Q6J("id","pretext"),i.xp6(2),i.Q6J("id","main"),i.xp6(2),i.Q6J("id","subtext"),i.xp6(1),i.Q6J("ngIf",i.lcZ(12,4,o.list$)))},dependencies:[w.ez,w.sg,w.O5,w.Ov,ee,_e,oe],encapsulation:2})}return t})(),title:"SITE_NAME"}]}}]);