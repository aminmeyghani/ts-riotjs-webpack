!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/static/",e(0)}([function(t,e,n){"use strict";n(14)},function(t,e,n){var o;!function(r,i){"use strict";function u(t){var e=V(0),n=t.slice(e.length).match(/^\s*(\S+?)\s*(?:,\s*(\S+))?\s+in\s+(.+)$/);return n?{key:n[1],pos:n[2],val:e+n[3]}:{val:t}}function a(t,e,n){var o={};return o[t.key]=e,t.pos&&(o[t.pos]=n),o}function s(t,e,n){v(t,"each");var o,r=x(t),i=t.outerHTML,s=!!X[r],c=X[r]||{tmpl:i},f=t.parentNode,d=document.createComment("riot placeholder"),p=[],g=y(t);f.insertBefore(d,t),n=u(n),e.one("premount",function(){f.stub&&(f=e.root),t.parentNode.removeChild(t)}).on("update",function(){var i=q(n.val,e);P(i)||(o=i?JSON.stringify(i):"",i=i?Object.keys(i).map(function(t){return a(n,t,i[t])}):[]);for(var u=document.createDocumentFragment(),h=p.length,m=i.length;h>m;)p[--h].unmount(),p.splice(h,1);for(h=0;m>h;++h){var v=!o&&n.key?a(n,i[h],h):i[h];p[h]?p[h].update(v):((p[h]=new l(c,{parent:e,isLoop:!0,hasImpl:s,root:s?t.cloneNode():f,item:v},t.innerHTML)).mount(),u.appendChild(p[h].root)),p[h]._item=v}f.insertBefore(u,d),g&&(e.tags[r]=p)}).one("updated",function(){var t=Object.keys(e);w(f,function(n){1!=n.nodeType||n.isLoop||n._looped||(n._visited=!1,n._looped=!0,O(n,e,t))})})}function c(t,e,n){w(t,function(t){if(1==t.nodeType){t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||t.getAttribute("each")?1:0;var o=y(t);if(o&&!t.isLoop){for(var r,i=new l(o,{root:t,parent:e},t.innerHTML),u=x(t),a=e;!y(a.root)&&a.parent;)a=a.parent;i.parent=a,r=a.tags[u],r?(P(r)||(a.tags[u]=[r]),a.tags[u].push(i)):a.tags[u]=i,t.innerHTML="",n.push(i)}t.isLoop||O(t,e,[])}})}function f(t,e,n){function o(t,e,o){if(e.indexOf(V(0))>=0){var r={dom:t,expr:e};n.push(_(r,o))}}w(t,function(t){var n=t.nodeType;if(3==n&&"STYLE"!=t.parentNode.tagName&&o(t,t.nodeValue),1==n){var r=t.getAttribute("each");return r?(s(t,e,r),!1):(h(t.attributes,function(e){var n=e.name,r=n.split("__")[1];return o(t,e.value,{attr:r||n,bool:r}),r?(v(t,n),!1):void 0}),y(t)?!1:void 0)}})}function l(t,e,n){function o(){var t=x&&y?l:v||l;h(S.attributes,function(e){d[e.name]=q(e.value,t)}),h(Object.keys(E),function(e){d[e]=q(E[e],t)})}function r(t){for(var e in w)typeof l[e]!==D&&(l[e]=t[e])}function u(){l.parent&&y&&h(Object.keys(l.parent),function(t){var e=~H.indexOf(t);(typeof l[t]===D||e)&&(e||H.push(t),l[t]=l.parent[t])})}function a(t){if(h(k,function(e){e[t?"mount":"unmount"]()}),v){var e=t?"on":"off";y?v[e]("unmount",l.unmount):v[e]("update",l.update)[e]("unmount",l.unmount)}}var s,l=B.observable(this),d=j(e.opts)||{},p=C(t.tmpl),v=e.parent,y=e.isLoop,x=e.hasImpl,w=L(e.item),T=[],k=[],S=e.root,O=t.fn,A=S.tagName.toLowerCase(),E={},H=[],R=/([\w\-]+)\s?=\s?['"]([^'"]+)["']/gim;if(O&&S._tag&&S._tag.unmount(!0),this.isMounted=!1,S.isLoop=y,t.attrs){var U=t.attrs.match(R);h(U,function(t){var e=t.split(/\s?=\s?/);S.setAttribute(e[0],e[1].replace(/['"]/g,""))})}S._tag=this,this._id=b(~~((new Date).getTime()*Math.random())),_(this,{parent:v,root:S,opts:d,tags:{}},w),h(S.attributes,function(t){var e=t.value;V(/\{.*\}/).test(e)&&(E[t.name]=e)}),p.innerHTML&&!/select|select|optgroup|tbody|tr/.test(A)&&(p.innerHTML=N(p.innerHTML,n)),this.update=function(t){t=L(t),u(),(typeof w===$||P(w))&&(r(t),w=t),_(l,t),o(),l.trigger("update",t),g(T,l),l.trigger("updated")},this.mixin=function(){h(arguments,function(t){t=typeof t===F?B.mixin(t):t,h(Object.keys(t),function(e){"init"!=e&&(l[e]=m(t[e])?t[e].bind(l):t[e])}),t.init&&t.init.bind(l)()})},this.mount=function(){if(o(),O&&O.call(l,d),a(!0),f(p,l,T),(!l.parent||x)&&f(l.root,l,T),(!l.parent||y)&&l.update(w),l.trigger("premount"),y&&!x)l.root=S=s=p.firstChild;else{for(;p.firstChild;)S.appendChild(p.firstChild);S.stub&&(l.root=S=v.root)}!l.parent||l.parent.isMounted?(l.isMounted=!0,l.trigger("mount")):l.parent.one("mount",function(){M(l.root)||(l.parent.isMounted=l.isMounted=!0,l.trigger("mount"))})},this.unmount=function(t){var e=s||S,n=e.parentNode;if(n){if(v)P(v.tags[A])?h(v.tags[A],function(t,e){t._id==l._id&&v.tags[A].splice(e,1)}):v.tags[A]=i;else for(;e.firstChild;)e.removeChild(e.firstChild);t||n.removeChild(e)}l.trigger("unmount"),a(),l.off("*"),S._tag=null},c(p,this,k)}function d(t,e,n,o){n[t]=function(t){var i=o._item,u=o.parent;if(!i)for(;u;)i=u._item,u=i?!1:u.parent;t=t||r.event;try{t.currentTarget=n,t.target||(t.target=t.srcElement),t.which||(t.which=t.charCode||t.keyCode)}catch(a){}if(t.item=i,e.call(o,t)===!0||/radio|check/.test(n.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),!t.preventUpdate){var s=i?o.parent:o;s.update()}}}function p(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function g(t,e){h(t,function(t,n){var o=t.dom,r=t.attr,i=q(t.expr,e),u=t.dom.parentNode;if(null==i&&(i=""),u&&"TEXTAREA"==u.tagName&&(i=i.replace(/riot-/g,"")),t.value!==i){if(t.value=i,!r)return o.nodeValue=i.toString();if(v(o,r),m(i))d(r,i,o,e);else if("if"==r){var a=t.stub;i?a&&(p(a.parentNode,a,o),o.inStub=!1,M(o)||w(o,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(a=t.stub=a||document.createTextNode(""),p(o.parentNode,o,a),o.inStub=!0)}else if(/^(show|hide)$/.test(r))"hide"==r&&(i=!i),o.style.display=i?"":"none";else if("value"==r)o.value=i;else if("riot-"==r.slice(0,5)&&"riot-tag"!=r)r=r.slice(5),i?o.setAttribute(r,i):v(o,r);else{if(t.bool){if(o[r]=i,!i)return;i=r}typeof i!==$&&o.setAttribute(r,i)}}})}function h(t,e){for(var n,o=0,r=(t||[]).length;r>o;o++)n=t[o],null!=n&&e(n,o)===!1&&o--;return t}function m(t){return"function"==typeof t||!1}function v(t,e){t.removeAttribute(e)}function b(t){return(t^t>>31)-(t>>31)}function y(t){var e=t.tagName.toLowerCase();return X[t.getAttribute(Y)||e]}function x(t){var e=y(t),n=t.getAttribute("name"),o=n&&n.indexOf(V(0))<0?n:e?e.name:t.tagName.toLowerCase();return o}function _(t){for(var e,n=arguments,o=1;o<n.length;++o)if(e=n[o])for(var r in e)t[r]=e[r];return t}function L(t){if(!(t instanceof l))return t;var e={},n=["update","root","mount","unmount","mixin","isMounted","isloop","tags","parent","opts"];for(var o in t)~n.indexOf(o)||(e[o]=t[o]);return e}function C(t){var e=z&&10>z,n=/^\s*<([\w-]+)/.exec(t),o=n?n[1].toLowerCase():"",r="th"===o||"td"===o?"tr":"tr"===o?"tbody":"div",i=T(r);return i.stub=!0,e&&("optgroup"===o?H(i,t):"option"===o?E(i,t):"div"!==r?A(i,t,o):e=0),e||(i.innerHTML=t),i}function w(t,e){if(t)if(e(t)===!1)w(t.nextSibling,e);else for(t=t.firstChild;t;)w(t,e),t=t.nextSibling}function M(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function T(t){return document.createElement(t)}function N(t,e){return t.replace(/<(yield)\/?>(<\/\1>)?/gim,e||"")}function k(t,e){return(e||document).querySelectorAll(t)}function S(t,e){return(e||document).querySelector(t)}function j(t){function e(){}return e.prototype=t,new e}function O(t,e,n){h(t.attributes,function(o){if(!t._visited&&("id"===o.name||"name"===o.name)){t._visited=!0;var r,i=o.value;if(~n.indexOf(i))return;r=e[i],r?P(r)?r.push(t):e[i]=[r,t]:e[i]=t}})}function A(t,e,n){var o,r=T("div"),i=/td|th/.test(n)?3:2;for(r.innerHTML="<table>"+e+"</table>",o=r.firstChild;i--;)o=o.firstChild;t.appendChild(o)}function E(t,e){var n=T("option"),o=/value=[\"'](.+?)[\"']/,r=/selected=[\"'](.+?)[\"']/,i=/each=[\"'](.+?)[\"']/,u=/if=[\"'](.+?)[\"']/,a=/>([^<]*)</,s=e.match(o),c=e.match(r),f=e.match(a),l=e.match(i),d=e.match(u);f?n.innerHTML=f[1]:n.innerHTML=e,s&&(n.value=s[1]),c&&n.setAttribute("riot-selected",c[1]),l&&n.setAttribute("each",l[1]),d&&n.setAttribute("if",d[1]),t.appendChild(n)}function H(t,e){var n=T("optgroup"),o=/label=[\"'](.+?)[\"']/,r=/^<([^>]*)>/,i=/^<([^ \>]*)/,u=e.match(o),a=e.match(r),s=e.match(i),c=e;if(a){var f=e.slice(a[1].length+2,-s[1].length-3).trim();c=f}if(u&&n.setAttribute("riot-label",u[1]),c){var l=T("div");E(l,c),n.appendChild(l.firstChild)}t.appendChild(n)}function R(t){if(I=I||T("style"),document.head){if(I.styleSheet?I.styleSheet.cssText+=t:I.innerHTML+=t,!I._rendered)if(I.styleSheet)document.body.appendChild(I);else{var e=S("style[type=riot]");e?(e.parentNode.insertBefore(I,e),e.parentNode.removeChild(e)):document.head.appendChild(I)}I._rendered=!0}}function U(t,e,n){var o=X[e],r=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",o&&t&&(o=new l(o,{root:t,opts:n},r)),o&&o.mount?(o.mount(),J.push(o),o.on("unmount",function(){J.splice(J.indexOf(o),1)})):void 0}var B={version:"v2.2.2",settings:{}},F="string",$="object",D="undefined",P=Array.isArray||function(){var t=Object.prototype.toString;return function(e){return"[object Array]"===t.call(e)}}(),z=function(t){return 0|(r&&r.document||{}).documentMode}();B.observable=function(t){t=t||{};var e={},n=0;return t.on=function(o,r){return m(r)&&(typeof r.id===D&&(r._id=n++),o.replace(/\S+/g,function(t,n){(e[t]=e[t]||[]).push(r),r.typed=n>0})),t},t.off=function(n,o){return"*"==n?e={}:n.replace(/\S+/g,function(t){if(o)for(var n,r=e[t],i=0;n=r&&r[i];++i)n._id==o._id&&r.splice(i--,1);else e[t]=[]}),t},t.one=function(e,n){function o(){t.off(e,o),n.apply(t,arguments)}return t.on(e,o)},t.trigger=function(n){for(var o,r=[].slice.call(arguments,1),i=e[n]||[],u=0;o=i[u];++u)o.busy||(o.busy=1,o.apply(t,o.typed?[n].concat(r):r),i[u]!==o&&u--,o.busy=0);return e.all&&"all"!=n&&t.trigger.apply(t,["all",n].concat(r)),t},t},B.mixin=function(){var t={};return function(e,n){return n?void(t[e]=n):t[e]}}(),function(t,e,n){function o(){return a.href.split("#")[1]||""}function r(t){return t.split("/")}function i(t){t.type&&(t=o()),t!=u&&(s.trigger.apply(null,["H"].concat(r(t))),u=t)}if(n){var u,a=n.location,s=t.observable(),c=!1,f=t.route=function(t){t[0]?(a.hash=t,i(t)):s.on("H",t)};f.exec=function(t){t.apply(null,r(o()))},f.parser=function(t){r=t},f.stop=function(){c&&(n.removeEventListener?n.removeEventListener(e,i,!1):n.detachEvent("on"+e,i),s.off("*"),c=!1)},f.start=function(){c||(n.addEventListener?n.addEventListener(e,i,!1):n.attachEvent("on"+e,i),c=!0)},f.start()}}(B,"hashchange",r);var I,V=function(t){var e,n,o,r=/[{}]/g;return function(i){var u=B.settings.brackets||t;return e!==u&&(e=u,o=u.split(" "),n=o.map(function(t){return t.replace(/(?=.)/g,"\\")})),i instanceof RegExp?u===t?i:new RegExp(i.source.replace(r,function(t){return n[~~("}"===t)]}),i.global?"g":""):o[i]}}("{ }"),q=function(){function t(t,n){return t=(t||V(0)+V(1)).replace(V(/\\{/g),"￰").replace(V(/\\}/g),"￱"),n=o(t,i(t,V(/{/),V(/}/))),new Function("d","return "+(n[0]||n[2]||n[3]?"["+n.map(function(t,n){return n%2?e(t,!0):'"'+t.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")':e(n[1])).replace(/\uFFF0/g,V(0)).replace(/\uFFF1/g,V(1))+";")}function e(t,e){return t=t.replace(/\n/g," ").replace(V(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),""),/^\s*[\w- "']+ *:/.test(t)?"["+i(t,/["' ]*[\w- ]+["' ]*:/,/,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(t){return t.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/,function(t,e,o){return o.replace(/[^&|=!><]+/g,n)+'?"'+e+'":"",'})}).join("")+'].join(" ").trim()':n(t,e)}function n(t,e){return t=t.trim(),t?"(function(v){try{v="+(t.replace(a,function(t,e,n){return n?"(d."+n+"===undefined?"+("undefined"==typeof r?"global.":"window.")+n+":d."+n+")":t})||"x")+"}catch(e){}finally{return "+(e===!0?'!v&&v!==0?"":v':"v")+"}}).call(d)":""}function o(t,e){var n=[];return e.map(function(e,o){o=t.indexOf(e),n.push(t.slice(0,o),e),t=t.slice(o+e.length)}),n.concat(t)}function i(t,e,n){var o,r=0,i=[],u=new RegExp("("+e.source+")|("+n.source+")","g");return t.replace(u,function(e,n,u,a){!r&&n&&(o=a),r+=n?1:-1,r||null==u||i.push(t.slice(o,a+u.length))}),i}var u={},a=/(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;return function(e,n){return e&&(u[e]=u[e]||t(e))(n)}}(),J=[],X={},Y="riot-tag";B.tag=function(t,e,n,o,r){return m(o)&&(r=o,/^[\w\-]+\s?=/.test(n)?(o=n,n=""):o=""),n&&(m(n)?r=n:R(n)),X[t]={name:t,tmpl:e,attrs:o,fn:r},t},B.mount=function(t,e,n){function o(t){var e="";return h(t,function(t){e+=', *[riot-tag="'+t.trim()+'"]'}),e}function r(){var t=Object.keys(X);return t+o(t)}function i(t){if(t.tagName){e&&!t.getAttribute(Y)&&t.setAttribute(Y,e);var o=U(t,e||t.getAttribute(Y)||t.tagName.toLowerCase(),n);o&&s.push(o)}else t.length&&h(t,i)}var u,a,s=[];if(typeof e===$&&(n=e,e=0),typeof t===F?("*"===t?t=a=r():t+=o(t.split(",")),u=k(t)):u=t,"*"===e){if(e=a||r(),u.tagName)u=k(e,u);else{var c=[];h(u,function(t){c.push(k(e,t))}),u=c}e=0}return u.tagName?i(u):h(u,i),s},B.update=function(){return h(J,function(t){t.update()})},B.mountTo=B.mount,B.util={brackets:V,tmpl:q},typeof e===$?t.exports=B:(o=function(){return r.riot=B}.call(e,n,e,t),!(o!==i&&(t.exports=o)))}("undefined"!=typeof window?window:void 0)},function(t,e){"use strict";var n=["on","one","off","trigger"],o={_stores:[],addStore:function(t){this._stores.push(t)}};n.forEach(function(t){o[t]=function(){var e=[].slice.call(arguments);this._stores.forEach(function(n){n[t].apply(null,e)})}}),t.exports=o},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var u=e[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=l[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(a(o.parts[i],e))}else{for(var u=[],i=0;i<o.parts.length;i++)u.push(a(o.parts[i],e));l[o.id]={id:o.id,refs:1,parts:u}}}}function r(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],i=r[0],u=r[1],a=r[2],s=r[3],c={css:u,media:a,sourceMap:s};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function i(){var t=document.createElement("style"),e=g();return t.type="text/css",e.appendChild(t),t}function u(){var t=document.createElement("link"),e=g();return t.rel="stylesheet",e.appendChild(t),t}function a(t,e){var n,o,r;if(e.singleton){var a=m++;n=h||(h=i()),o=s.bind(null,n,a,!1),r=s.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(),o=f.bind(null,n),r=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(),o=c.bind(null,n),r=function(){n.parentNode.removeChild(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function s(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var i=document.createTextNode(r),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function c(t,e){var n=e.css,o=e.media;e.sourceMap;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,o=(e.media,e.sourceMap);o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var l={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=d(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0;t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p());var n=r(t);return o(n,e),function(t){for(var i=[],u=0;u<n.length;u++){var a=n[u],s=l[a.id];s.refs--,i.push(s)}if(t){var c=r(t);o(c,e)}for(var u=0;u<i.length;u++){var s=i[u];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete l[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){this.title="This is the best title"},t.exports=e["default"]},function(t,e,n){(function(t){"use strict";var e=n(2),o=n(11);e.addStore(o),t.tag("feat-x",n(19),n(23),n(5)),t.mount("feat-x")}).call(e,n(1))},function(t,e,n){(function(t){"use strict";t.tag("messenger",n(20),n(24),n(8))}).call(e,n(1))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e["default"]=function(t){var e=this;this.count=0,o.on("change",function(t){e.count=t.length,e.update()}),o.on("todo_add",function(t){e.count+=1,e.thing=t.title,e.update()}),o.on("todo_remove",function(){e.count-=1,e.update()}),this.send=function(t){e.message.value;o.trigger("msg_sent",{msg:e.message.value}),e.message.value=""}},t.exports=e["default"]},function(t,e,n){(function(t){"use strict";t.tag("todo",n(21),n(25),n(10))}).call(e,n(1))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e["default"]=function(t){var e=this;this.on("mount",function(){o.trigger("todo_init")}),o.on("change",function(t){e.items=t,e.update()}),this.disabled=!0,this.items=[],this.edit=function(t){e.text=t.target.value},this.add=function(t){e.text&&(o.trigger("todo_add",{title:e.text}),e.text=e.input.value="")},this.toggle=function(t){var e=t.item;return e.done=!e.done,!0},this.remove=function(t){o.trigger("todo_remove")},o.on("msg_sent",function(t){e.msg=t.msg,e.update()})},t.exports=e["default"]},function(t,e,n){(function(e){"use strict";function n(){var t=this,n=e.observable(this);return this.todos=[{title:"Task 1",done:!1},{title:"Task 2",done:!1}],this.stuff=[{title:"tt",done:!1},{title:"tt",done:!1}],this.listen=function(e,n,o,r){var i=t,u={model:o,triggerName:r?r:"change"},a=function(){i.trigger(u.triggerName,u.model)};"function"==typeof n?(i.on(e,n),a()):i.on(e,function(){a()})},this.listen("todo_init","broadcast",this.stuff),this.listen("todo_add",function(e){t.stuff.push(e)}),this.listen("todo_remove",function(){t.stuff.pop()}),n}t.exports=new n}).call(e,n(1))},function(t,e,n){(function(t){"use strict";t.tag("widget",n(22),n(26),n(13))}).call(e,n(1))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e["default"]=function(t){var e=this;o.on("msg_sent",function(t){e.msg=t.msg,e.update()})},t.exports=e["default"]},function(t,e,n){"use strict";n(12),n(9),n(7),n(6)},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,"todo-app{display:block;border:1px solid #ccc;padding:20px}",""])},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,"messenger button{background-color:#fff;border:none;border:1px solid #ccc;padding:10px 20px}messenger input{padding:10px}",""])},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,"todo button{background-color:#1fadc5;border:1px solid rgba(0,0,0,.2);font-size:100%;color:#fff;padding:.6em 1.2em;border-radius:3em;cursor:pointer;margin:0 .3em;outline:0}todo button[disabled]{background-color:#ddd;color:#aaa}todo input{font-size:100%;padding:.6em;border:1px solid #ccc;border-radius:3px}todo .completed{text-decoration:line-through;color:#ccc}",""])},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,"",""])},function(t,e){t.exports="<h2>\n<messenger></messenger>\n  <todo></todo>\n\n  <widget></widget>\n</h2>"},function(t,e){t.exports='<p>this is the observer: count: { count }, added: { thing }</p>\n\n<form onsubmit="{ send }">\n  <input name="message" onkeyup="{ edit }">\n  <button> send msg </button>\n</form>'},function(t,e){t.exports='<p>message:  { msg } </p>\n<ul>\n  <li each="{ items }">\n    <label class="{ completed: done }">\n      <input type="checkbox" __checked="{ done }" onclick="{ parent.toggle }"> { title }\n    </label>\n  </li>\n</ul>\n<form onsubmit="{ add }">\n  <input name="input" oninput="{ edit }">\n  <button __disabled="{ !text }">Add #{ items.length + 1 }</button>\n</form>\n<button __disabled="{ !items.length }" onclick="{ remove }">Remove</button>\n'},function(t,e){t.exports="  <p><strong>this is the widget and listening for messages { msg }</strong></p>\n"},function(t,e,n){var o=n(15);"string"==typeof o&&(o=[[t.id,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(16);"string"==typeof o&&(o=[[t.id,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(17);"string"==typeof o&&(o=[[t.id,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(18);"string"==typeof o&&(o=[[t.id,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)}]);
//# sourceMappingURL=main.entry.js.map