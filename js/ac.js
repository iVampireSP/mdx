!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/wp-content/themes/mdx/js",r(r.s=119)}([,function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(46))},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(1),o=r(29),i=r(5),s=r(34),a=r(35),u=r(48),c=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||s;t.exports=function(t){return i(c,t)||(a&&i(l,t)?c[t]=l[t]:c[t]=f("Symbol."+t)),c[t]}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(8),o=r(9),i=r(20);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(3);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(8),o=r(31),i=r(2),s=r(33),a=Object.defineProperty;e.f=n?a:function(t,e,r){if(i(t),e=s(e,!0),i(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(1),o=r(6),i=r(5),s=r(17),a=r(23),u=r(25),c=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,a){var u=!!a&&!!a.unsafe,c=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),l(r).source=f.join("string"==typeof e?e:"")),t!==n?(u?!d&&t[e]&&(c=!0):delete t[e],c?t[e]=r:o(t,e,r)):c?t[e]=r:s(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(47),o=r(10);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(51),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){var n=r(13),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(1),o=r(6);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},,function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e){t.exports={}},function(t,e,r){var n=r(30),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(8),o=r(53),i=r(20),s=r(14),a=r(33),u=r(5),c=r(31),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=s(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,r){var n,o,i,s=r(52),a=r(1),u=r(7),c=r(6),l=r(5),f=r(28),d=r(21),p=a.WeakMap;if(s){var m=new p,y=m.get,h=m.has,b=m.set;n=function(t,e){return b.call(m,t,e),e},o=function(t){return y.call(m,t)||{}},i=function(t){return h.call(m,t)}}else{var v=f("state");d[v]=!0,n=function(t,e){return c(t,v,e),e},o=function(t){return l(t,v)?t[v]:{}},i=function(t){return l(t,v)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(1),o=r(24).f,i=r(6),s=r(12),a=r(17),u=r(43),c=r(38);t.exports=function(t,e){var r,l,f,d,p,m=t.target,y=t.global,h=t.stat;if(r=y?n:h?n[m]||a(m,{}):(n[m]||{}).prototype)for(l in e){if(d=e[l],f=t.noTargetGet?(p=o(r,l))&&p.value:r[l],!c(y?l:m+(h?".":"#")+l,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),s(r,l,d,t)}}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(29),o=r(34),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,r){var n=r(19),o=r(30);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n=r(1),o=r(17),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n=r(8),o=r(3),i=r(32);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(1),o=r(7),i=n.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,r){var n=r(7);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(3);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},,,function(t,e,r){var n=r(3),o=/#|\.prototype\./,i=function(t,e){var r=a[s(t)];return r==c||r!=u&&("function"==typeof e?n(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},,,function(t,e,r){var n=r(5),o=r(14),i=r(49).indexOf,s=r(21);t.exports=function(t,e){var r,a=o(t),u=0,c=[];for(r in a)!n(s,r)&&n(a,r)&&c.push(r);for(;e.length>u;)n(a,r=e[u++])&&(~i(c,r)||c.push(r));return c}},function(t,e,r){var n=r(9).f,o=r(5),i=r(4)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(5),o=r(54),i=r(24),s=r(9);t.exports=function(t,e){for(var r=o(e),a=s.f,u=i.f,c=0;c<r.length;c++){var l=r[c];n(t,l)||a(t,l,u(e,l))}}},function(t,e,r){var n=r(41),o=r(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},,function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(3),o=r(11),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,r){var n=r(35);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){var n=r(14),o=r(16),i=r(50),s=function(t){return function(e,r,s){var a,u=n(e),c=o(u.length),l=i(s,c);if(t&&r!=r){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,r){var n=r(13),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e,r){var n=r(1);t.exports=n},function(t,e,r){var n=r(1),o=r(23),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(15),o=r(44),i=r(55),s=r(2);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(s(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(10);t.exports=function(t){return Object(n(t))}},,function(t,e,r){var n=r(15);t.exports=n("document","documentElement")},,,,,function(t,e,r){var n,o=r(2),i=r(79),s=r(27),a=r(21),u=r(58),c=r(32),l=r(28),f=l("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},m=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;m=n?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=c("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var r=s.length;r--;)delete m.prototype[s[r]];return m()};a[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(d.prototype=o(t),r=new d,d.prototype=null,r[f]=t):r=m(),void 0===e?r:i(r,e)}},function(t,e,r){"use strict";var n,o,i,s=r(65),a=r(6),u=r(5),c=r(4),l=r(19),f=c("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(n=o):d=!0),null==n&&(n={}),l||u(n,f)||a(n,f,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},function(t,e,r){var n=r(5),o=r(56),i=r(28),s=r(83),a=i("IE_PROTO"),u=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=o(t),n(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},,,function(t,e,r){var n=r(2),o=r(84);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},,,,,,,function(t,e,r){var n=r(1),o=r(76),i=r(77),s=r(6),a=r(4),u=a("iterator"),c=a("toStringTag"),l=i.values;for(var f in o){var d=n[f],p=d&&d.prototype;if(p){if(p[u]!==l)try{s(p,u,l)}catch(t){p[u]=l}if(p[c]||s(p,c,f),o[f])for(var m in i)if(p[m]!==i[m])try{s(p,m,i[m])}catch(t){p[m]=i[m]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){"use strict";var n=r(14),o=r(78),i=r(22),s=r(25),a=r(81),u=s.set,c=s.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=c(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,r){var n=r(4),o=r(63),i=r(9),s=n("unscopables"),a=Array.prototype;null==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),t.exports=function(t){a[s][t]=!0}},function(t,e,r){var n=r(8),o=r(9),i=r(2),s=r(80);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=s(e),a=n.length,u=0;a>u;)o.f(t,r=n[u++],e[r]);return t}},function(t,e,r){var n=r(41),o=r(27);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(26),o=r(82),i=r(65),s=r(68),a=r(42),u=r(6),c=r(12),l=r(4),f=r(19),d=r(22),p=r(64),m=p.IteratorPrototype,y=p.BUGGY_SAFARI_ITERATORS,h=l("iterator"),b=function(){return this};t.exports=function(t,e,r,l,p,v,g){o(r,e,l);var x,w,T,S=function(t){if(t===p&&L)return L;if(!y&&t in O)return O[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},_=e+" Iterator",E=!1,O=t.prototype,B=O[h]||O["@@iterator"]||p&&O[p],L=!y&&B||S(p),A="Array"==e&&O.entries||B;if(A&&(x=i(A.call(new t)),m!==Object.prototype&&x.next&&(f||i(x)===m||(s?s(x,m):"function"!=typeof x[h]&&u(x,h,b)),a(x,_,!0,!0),f&&(d[_]=b))),"values"==p&&B&&"values"!==B.name&&(E=!0,L=function(){return B.call(this)}),f&&!g||O[h]===L||u(O,h,L),d[e]=L,p)if(w={values:S("values"),keys:v?L:S("keys"),entries:S("entries")},g)for(T in w)(y||E||!(T in O))&&c(O,T,w[T]);else n({target:e,proto:!0,forced:y||E},w);return w}},function(t,e,r){"use strict";var n=r(64).IteratorPrototype,o=r(63),i=r(20),s=r(42),a=r(22),u=function(){return this};t.exports=function(t,e,r){var c=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),s(t,c,!1,!0),a[c]=u,t}},function(t,e,r){var n=r(3);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){"use strict";var n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,i="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function l(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function m(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function h(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&i&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,r,n=m(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=l(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},p.prototype.delete=function(t){delete this.map[l(t)]},p.prototype.get=function(t){return t=l(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(l(t))},p.prototype.set=function(t,e){this.map[l(t)]=f(e)},p.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},o&&(p.prototype[Symbol.iterator]=p.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(t,e){var r,n,o=(e=e||{}).body;if(t instanceof x){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),g.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function T(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},v.call(x.prototype),v.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},T.error=function(){var t=new T(null,{status:0,statusText:""});return t.type="error",t};var S=[301,302,303,307,308];T.redirect=function(t,e){if(-1===S.indexOf(e))throw new RangeError("Invalid status code");return new T(null,{status:e,headers:{location:t}})};var _=self.DOMException;try{new _}catch(t){(_=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function E(t,e){return new Promise((function(r,n){var o=new x(t,e);if(o.signal&&o.signal.aborted)return n(new _("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new T(o,n))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.onabort=function(){n(new _("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),o.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",a)}),s.send(void 0===o._bodyInit?null:o._bodyInit)}))}E.polyfill=!0,self.fetch||(self.fetch=E,self.Headers=p,self.Request=x,self.Response=T)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e);r(75),r(85);var n=0,o=0,i=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline").innerHTML,s=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline").getAttribute("href"),a=document.querySelector("meta[name='theme-color']"),u=!1,c="";a&&(c=document.querySelector("meta[name='mdx-main-color']").getAttribute("content"),u=!0);var l="undefined"!=typeof offlineMode&&offlineMode,f=!1;function d(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline");t>10&&0==n&&(document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),n=1),t<=10&&1==n&&(document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),n=0),t>170&&0==o&&(document.querySelector(".scrollToTop").classList.toggle("mdui-fab-hide"),e.innerHTML=acPageTitle,e.removeAttribute("href"),o=1),t<=170&&1==o&&(document.querySelector(".scrollToTop").classList.toggle("mdui-fab-hide"),e.innerHTML=i,e.setAttribute("href",s),o=0),f=!1}window.onscroll=function(){f||(requestAnimationFrame(d),f=!0)},document.getElementsByClassName("scrollToTop")[0].addEventListener("click",(function(){$("body,html").animate({scrollTop:0},500)}),!1),document.getElementById("tgns")&&document.getElementById("tgns").addEventListener("click",(function(){document.getElementsByTagName("body")[0].classList.contains("mdui-theme-layout-dark")?(sessionStorage.setItem("ns_night-styles","false"),u&&a.setAttribute("content",c)):(sessionStorage.setItem("ns_night-styles","true"),u&&a.setAttribute("content","#212121")),document.getElementsByTagName("body")[0].classList.toggle("mdui-theme-layout-dark")}),!1),document.getElementsByClassName("seai")[0].addEventListener("click",(function(){let t=document.getElementById("SearchBar");if(t.style.display="block",$(".OutOfsearchBox").fadeIn(300),t.classList.add("mdui-color-theme"),$(".fullScreen").fadeIn(300),$("#SearchBar > *").animate({opacity:"1"},200),document.getElementsByClassName("outOfSearch")[0].style.width="75%",document.getElementsByClassName("seainput")[0].focus(),document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock"),l){let t=document.getElementsByClassName("OutOfsearchBox")[0];t.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",t.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}}),!1);for(let t of document.getElementsByClassName("sea-close"))t.addEventListener("click",p,!1);function p(){document.getElementsByClassName("seainput")[0].blur(),$("#SearchBar > *").animate({opacity:"0"},200),$(".fullScreen").fadeOut(300),$(".OutOfsearchBox").fadeOut(300),document.getElementsByClassName("outOfSearch")[0].style.width="30%",window.setTimeout("hideBar()",300),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let t=document.getElementsByTagName("body")[0];t.classList.contains("mdx-search-lock")&&t.classList.toggle("mdx-search-lock"),document.getElementsByClassName("outOfSearch")[0].removeAttribute("style")},300)}function m(t){"user"!==sessionStorage.getItem("mrm_enable")?t.matches&&document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")?sessionStorage.getItem("mrm_enable")||(mdui.snackbar({message:reduce_motion_i18n_1,buttonText:reduce_motion_i18n_2,timeout:7e3,onButtonClick:function(){sessionStorage.setItem("mrm_enable","user"),document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")},position:"top"}),sessionStorage.setItem("mrm_enable","sys"),document.getElementsByTagName("body")[0].classList.add("mdx-reduce-motion")):(sessionStorage.getItem("mrm_enable")&&mdui.snackbar({message:reduce_motion_i18n_3,timeout:5e3,position:"top"}),sessionStorage.removeItem("mrm_enable")):document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")}document.getElementsByClassName("mdui-typo-headline")[0].addEventListener("click",(function(){1==mdx_tapToTop&&$("body,html").animate({scrollTop:0},500)})),$((function(){d();var t=0,e=0;for(let r of document.querySelectorAll("#mdx_menu > li")){if(r.classList.contains("menu-item-has-children")){r.classList.add("mdui-collapse-item"),r.classList.remove("mdui-list-item"),r.innerHTML='<div class="mdui-collapse-item-header mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><a class="mdx-sub-menu-a" href="'+r.getElementsByTagName("a")[0].getAttribute("href")+'">'+r.getElementsByTagName("a")[0].innerHTML+'</a></div><i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><ul class="mdui-collapse-item-body mdui-list mdui-list-dense">'+r.getElementsByTagName("ul")[0].innerHTML+"</ul>",t=1;for(let t of r.getElementsByTagName("ul"))for(let r of t.getElementsByTagName("li"))r.classList.contains("current-menu-item")&&(e=1);e&&(r.classList.remove("current-menu-item","current_page_item"),r.classList.add("mdui-collapse-item-open")),e=0}if(t){let t=document.getElementById("mdx_menu");t.classList.add("mdui-collapse"),t.setAttribute("mdui-collapse","")}}new mdui.Collapse("#mdx_menu");var r="undefined"==typeof displayCookie||displayCookie,n=document.getElementById("mdx-cookie-notice");if(r&&n&&!localStorage.getItem("mdx_cookie")&&(n.classList.add("mdx-cookie-notice-show"),n.getElementsByTagName("button")[0].addEventListener("click",(function(){localStorage.setItem("mdx_cookie","true"),document.getElementById("mdx-cookie-notice").style.bottom="-400px",setTimeout(()=>{document.getElementById("mdx-cookie-notice").classList.remove("mdx-cookie-notice-show")},400)}),!1)),document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")){var o=window.matchMedia("(prefers-reduced-motion: reduce)");o.addListener(m),m(o)}}))}]);