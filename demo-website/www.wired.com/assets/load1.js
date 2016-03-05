/* file: jquery :  : http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js *//*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/* end file: jquery*/
/* file: cn-library :  : http://www.wired.com/js/cn-fe-common/cn.js *//*global CN, console, window, location, document, Option, jQuery, setTimeout, clearTimeout, clearInterval, setInterval */ /* for jsLint */

/*
 * Conde Nast Digital Core JavaScript
 * @copyright   2008-2010 Conde Nast Digital except where specified. All rights reserved
 */


/*
 * Sets jQuery no conflict;
 */
jQuery.noConflict();


/*
    SECTION: EXTENSIONS TO NATIVE OBJECTS
*/


/*
    Prototypal inheritance, the missing JavaScript method
    Author:    Andrea Giammarchi
    Example:   newObject = Object.make(oldObject);
    Reference: http://webreflection.blogspot.com/2008/10/big-douglas-begetobject-revisited.html
    New version recycles function constructor to cut down on memory consumption
    and is based on Doug Crockford's original prototypal inheritance function
*/
if (typeof Object.make !== 'function') {
    Object.make = function(F) {
        return function(Object) {
            F.prototype = Object;
            return new F();
        };
    }(function() {});
}


/*
    Memoizes a function - this DOES add to the Function.prototype
    @author    Keith Gaughan
    @see       http://talideon.com/weblog/2005/07/javascript-memoization.cfm
*/
Function.prototype.memoize = function() {
    var memo = {},
        that = this,
        obj  = arguments.length > 0 ? arguments[i] : null, // TODO: fails jslint, references 'i' out of scope...
        memoizedFn;

    memoizedFn = function() {
        var args = [],
            i,
            il;

        for (i = 0, il = arguments.length; i < il; i++) {
            args[i] = arguments[i];
        }

        if (!(args in memo)) {
            memo[args] = that.apply(obj, arguments);
        }

        return memo[args];
    };

    memoizedFn.unmemoize = function() {
        return that;
    };

    return memoizedFn;
};

/*
    Unmemoizes a function
*/
Function.prototype.unmemoize = function() {
    CN.debug.info('Attempted to unmemoize a function that was never memoized in the first place');
    return null;
};


/*
    Sugar Arrays (c) Creative Commons 2006
    http://creativecommons.org/licenses/by-sa/2.5/
    Author: Dustin Diaz | http://www.dustindiaz.com
    Reference: http://www.dustindiaz.com/basement/sugar-arrays.html
*/

// IF checks were added by EBS to cover for a bug in jQuery whereby jQuery
// adds bogus event bindings to Array.prototype methods.
// Ticket is here: http://dev.jquery.com/ticket/6355
// When jQuery fixes this bug, these if (!this.splice) checks can be removed.

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            i,
            j;
        scope = thisObj || window;
        for (i = 0, j = this.length; i < j; ++i) {
            fn.call(scope, this[i], i, this);
        }
    };

    Array.prototype.every = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            i,
            j;
        scope = thisObj || window;
        for (i = 0, j = this.length; i < j; ++i) {
            if (!fn.call(scope, this[i], i, this)) {
                return false;
            }
        }
        return true;
    };

    Array.prototype.some = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            i,
            j;
        scope = thisObj || window;
        for (i = 0, j = this.length; i < j; ++i) {
            if (fn.call(scope, this[i], i, this)) {
                return true;
            }
        }
        return false;
    };

    Array.prototype.map = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            a,
            i,
            j;
        scope = thisObj || window;
        a = [];
        for (i = 0, j = this.length; i < j; ++i) {
            a.push(fn.call(scope, this[i], i, this));
        }
        return a;
    };

    Array.prototype.filter = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            a,
            i,
            j;
        scope = thisObj || window;
        a = [];
        for (i = 0, j = this.length; i < j; ++i) {
            if (!fn.call(scope, this[i], i, this)) {
                continue;
            }
            a.push(this[i]);
        }
        return a;
    };

    Array.prototype.indexOf = function(el, start) {
        if (!this.splice) {
            return;
        };
        var i,
            j;
        start = start || 0;
        for (i = start, j = this.length; i < j; ++i) {
            if (this[i] === el) {
                return i;
            }
        }
        return -1;
    };

    Array.prototype.lastIndexOf = function(el, start) {
        if (!this.splice) {
            return;
        };
        var i;
        start = start || this.length;
        if (start >= this.length) {
            start = this.length;
        }
        if (start < 0) {
            start = this.length + start;
        }
        for (i = start; i >= 0; --i) {
            if (this[i] === el) {
                return i;
            }
        }
        return -1;
    };
}


/*
 * Remove items in an array. Not included in the above because it's not
 * an official part of the upcoming spec, so its implementation should be
 * checked separately.
 * @see http://ejohn.org/blog/javascript-array-remove/ (http://ejohn.org/blog/javascript-array-remove/#comment-296138)
 */
if (!Array.prototype.remove) {
    Array.prototype.remove = function(from, to) {
        if (!this.splice) {
            return;
        };
        this.splice(from, (to || from || 1) + (from < 0 ? this.length : 0));
        return this.length;
    };
}


/*
    SECTION: CN CORE METHODS
*/


if (typeof CN === 'undefined' || !CN)  {
    /**
     * CN global namespace object
     * @namespace CN global namespace object
     */
    var CN = {};
}


/*
    The following methods are located at the root of CN, because they
    deal with primitives that jQuery does not identify. No other functions
    should be placed at this level.
*/


/**
 * Determines whether or not the provided object is a boolean
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isBoolean = function(mixed) {
    return typeof mixed === 'boolean';
};

/**
 * Determines whether or not the provided object is a date
 * @param  {mixed}   mixed  The object being tested
 * @return {boolean}        the result
 */
CN.isDate = function(mixed) {
    return Object.prototype.toString.call(mixed) === '[object Date]';
};

/**
 * Determines whether or not the provided string is empty
 * @param  {string}  str    The string being tested
 * @return {boolean}        the result
 */
CN.isEmpty = function(str) {
    return !/\S/.test(str || '');
};

/**
 * Determines whether or not the provided object is null
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isNull = function(mixed) {
    return mixed === null;
};

/**
 * Determines whether or not the provided object is a legal number
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isNumber = function(mixed) {
    return typeof mixed === 'number' && isFinite(mixed);
};

/**
 * Determines whether or not the provided object is of type object
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isObject = function(mixed) {
    return typeof mixed === 'object';
};

/**
 * Determines whether or not the provided object is a string
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isString = function(mixed) {
    return typeof mixed === 'string';
};

/**
 * Determines whether or not the provided object is undefined
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isUndefined = function(mixed) {
    return typeof mixed === 'undefined';
};


/*
    SECTION: CN STATIC CLASSES
*/


/**
 * @class       CN URL Object
 * @description Contains methods for dealing with urls, query and hash params
 * @public
 * @author      Paul Bronshteyn
 * @author      Eric Shepherd
 */
CN.url = (function() {
    var
        /**
         * Path Cache Array.
         * @memberOf    CN.url
         * @private
         * @type        object
         */
        pathCache = [];

    /**
     * @scope CN.url
     */
    return {
        /**
         * Retrieves domain name from the url in the form of domain.com
         * @param   {string} [url]  Url to be parsed
         * @return  {string}        domain.com
         */
        domain : function(url) {
            var d = ((url) ? url.replace(/^https*:\/\/|(:|\/).*$/g, '') : location.hostname).split('.'),
                dl = d.length;
            return d.slice(dl - 2, dl).join('.');
        },

        /**
         * Retrieve current site section
         * @return {string} Section name
         */
        section : function() {
             return ((location.pathname.split('/')[1] || '').match(/^[^\.]*$/) || [''])[0];
        },

        /**
        * Returns url secure state
        * @return {boolean}
        */
        isSecure: function() {
            return location.protocol === 'https:';
        },

        /**
         * Get query params as object of key, value pairs or a value of a param passed in.
           If query is not provided, location.search will be used.
           Result will be caches to queryCache variable for faster access on next call.
         * @param   {string}        param     Parameter to lookup
         * @param   {string}        query     Query string to parse
         * @param   {string}        regex     String key representing regular expression in parsers object
         * @return  {object|string}
         */
        params : function(param, query, regex) {
            var result = CN.utils.parseStr((query || location.search), (regex || 'query'));
            return (param) ? result[param] || '' : result;
        },

        /**
         * Retrive current site path
         * @return {array} Path
         */
        path : function() {
            if (pathCache.length === 0) {
                pathCache = location.pathname.match(/([^\/]+)/g) || ['']; // remove leading and trailing slash.
            }
            return pathCache;
        },

        /**
         * Retrieve the URL fragment identifier
         * @return {string|boolean} fragment id
         */
        getFragment : function() {
            return location.hash.substring(1) || false;
        },

        /**
         * Sets the fragment identifier string
         */
        setFragment : function(value) {
            location.hash = value || '';
            return this;
        }
    };
})();


/**
 * @class           CN Utilities
 * @description     Collection of utility helper functions
 * @public
 * @author          Paul Bronshteyn
 * @author          Eric Shepherd
 */
CN.utils = (function() {
    var
        /**
         * Cache object.
         * @description Contains result objects for all parsed string using parseStr function.
         * @memberOf    CN.utils
         * @private
         * @type        object
         */
        cache = {},

        /**
         * Regular expression parsers
         * @memberOf    CN.utils
         * @private
         * @type        object
         */
        parsers = {
            /**
             * Query, hash parser expression.
             * @description Will parse a url string in the form of ?var=value&var1=value#hash=value&hash1=value1 into
                            key value pair object.
             * @memberOf    CN.utils
             * @private
             * @type        RegEx expression
             */
            query : /([^?=&]+)(=([^&]*))?/g,

            /**
             * Hash parser expression.
             * @description Will parse url hash string in the form of
                            ?var=value&var1=value into key value pair object.
             * @memberOf CN.utils
             * @private
             * @type RegEx expression
             */
            hash : /([^#=&]+)(=([^&]*))?/g,

            /**
             * User cookie hash parser expression.
             * @description  Will parse a cookie value in the form of var=value|var1=value|var2=value into
                             key value pair object.
             * @memberOf     CN.utils
             * @private
             * @type         RegEx expression
             */
            usercookie : /([^=|]+)(=([^|]*))?/g
        },

        /**
         * Takes an argument and a goal length and prepends or appends
           padding character to reach that length.
         * @param {string} str A number or string representing a number
         * @param {integer} total A length to make the return string
         * @param {string} padding A number or string to pad with
         * @param {string} dir Direction to pad on
         * @return {string} Padded string
         */
        pad = function(str, total, padding, dir) {
            str     = String(str || '');
            padding = String(padding || ' ');

            var strLen = str.length,
                padLen = padding.length;

            if (strLen >= total) {
                return str;
            }

            while (strLen < total) {
                str = (dir === 'left') ? padding + str : str + padding;
                strLen += padLen;
            }

            return str;
        };

    /**
     * @scope CN.utils
     */
    return {
        /**
         * Parse string using a regular expression and return object of key, value pairs.
         * @param   {string}    query   Query to be parsed
         * @param   {string}    regex   String key representing regular expression in parsers object
         * @return  {object}            Result object of key, value pairs
         */
        parseStr : function(str, regex) {
            if (cache[str+"_"+regex]) {
                return cache[str+"_"+regex];
            }
            cache[str+"_"+regex] = {};

            (str || '').replace(parsers[regex], function($0, $1, $2, $3) {
                cache[str+"_"+regex][$1] = $3;
            });

            return cache[str+"_"+regex];
        },

        /**
         * Intval - Check if variable is an integer
         * @param    {mixed}     mixed   The scalar value being converted to an integer
         * @param    {integer}   [base]  The base for the conversion, a number (from 2 to 36)
         *                               that represents the numeral system to be used (default is base 10)
         * @return   {integer}           Return a number (default is 0)
         */
        intval : function(mixed, base) {
            if (typeof mixed === 'boolean') {
                return (mixed) ? 1 : 0;
            } else if (typeof mixed === 'string') {
                mixed = parseInt(mixed * 1, (base || 10));
                return (isNaN(mixed) || !isFinite(mixed)) ? 0 : mixed;
            } else if (typeof mixed === 'number' && isFinite(mixed)) {
                return Math.floor(mixed);
            }

            return 0;
        },

        /**
         * Trim string.
         * @description  Remove leading and trailing space, tab and new lines characters
         * @param        {string}    str String to be trimmed
         * @return       {string}    Trimmed string
         * @author                   Ariel Flesler
         * @see                      http://flesler.blogspot.com/2008/11/fast-trim-function-for-javascript.html
         */
        trim : function(str) {
            var start = -1,
                end = str.length;
            while (str.charCodeAt(--end) < 33); // TODO: fails jslint - no while block
            while (++start < end && str.charCodeAt(start) < 33); // TODO: fails jslint - no while block
            return str.slice(start, end + 1);
        },

        /**
        * Transliterate string.
        * @description converts extended ascii characters to normal versions
        * @param {string} str String to be transliterated
        * @param {boolean} strip Whether or not to delete unknown characters. default: true
        * @return {string} string
        * @author Daniel Holly Wells
        */
        transliterate : function(str, strip) {
            if (typeof str == "undefined") {
                return "";
            }
            if (typeof strip == "undefined") {
                strip = true;
            }

            str = escape(str)
                       .replace(/%C[0-5]/g       ,'A')
                       .replace(/%C6/g           ,'AE')
                       .replace(/%C7/g           ,'C')
                       .replace(/%C[8-9|A-B]/g   ,'E')
                       .replace(/%C[C-F]/g       ,'I')
                       .replace(/%D[2-8]/g       ,'O')
                       .replace(/%D[9|A-C]/g     ,'U')
                       .replace(/%DD/g           ,'Y')
                       .replace(/%u0178/g        ,'Y')
                       .replace(/%u017D/g        ,'Z')
                       .replace(/%u0160/g        ,'S')
                       .replace(/%E[0-5]/g       ,'a')
                       .replace(/%E6/g           ,'ae')
                       .replace(/%E7/g           ,'c')
                       .replace(/%E[8-9|A-B]/g   ,'e')
                       .replace(/%E[C-F]/g       ,'i')
                       .replace(/%F[2-8]/g       ,'o')
                       .replace(/%F[9|A-C]/g     ,'u')
                       .replace(/%F[D-F]/g       ,'y')
                       .replace(/%u017E/g        ,'z')
                       .replace(/%u0161/g        ,'s')
                       .replace(/%u2014/g        ,'-')
                       .replace(/%u2013/g        ,'-')
                       .replace(/%u201[8-9]/g    ,"'")
                       .replace(/%u201A/g        ,',')
                       .replace(/%u2026/g        ,'...')
                       .replace(/%u201[C-D]/g    ,'"')
                       .replace(/%3F/g           ,'?')
                       .replace(/%21/g           ,'!')
                       .replace(/%26/g           ,'&')
                       .replace(/%25/g           ,'%')
                       .replace(/%24/g           ,'$')
                       .replace(/%5E/g           ,'^')
                       .replace(/%28/g           ,'(')
                       .replace(/%29/g           ,')')
                       .replace(/%7E/g           ,'~')
                       .replace(/%60/g           ,'`')
                       .replace(/%23/g           ,'#')
                       .replace(/%3D/g           ,'=')
                       .replace(/%2C/g           ,',')
                       .replace(/%3C/g           ,'<')
                       .replace(/%2E/g           ,'>')
                       .replace(/%7C/g           ,'|')
                       .replace(/%3A/g           ,':')
                       .replace(/%3B/g           ,';')
                       .replace(/%7D/g           ,'}')
                       .replace(/%7B/g           ,'{')
                       .replace(/%5B/g           ,'[')
                       .replace(/%5D/g           ,']')
                       .replace(/%20/g           ,' ');
            if (strip) {
                str = str.replace(/%u[0-9|A-F][0-9|A-F][0-9|A-F][0-9|A-F]/g, '').replace(/%u[0-9|A-F][0-9|A-F]/g, '').replace(/%[0-9|A-F][0-9|A-F]/g, '');
            } else {
                str = unescape(str);
            }
            return str;
        },

        /**
         * Takes an argument and a goal length and prepends
           padding character to reach that length.
         * @param {mixed} str A number or string representing a number
         * @param {integer} total A length to make the return string
         * @param {mixed} padding A number or string to pad with
         * @return {string} Padded string
         * @uses CN.utils.pad
         */
        padLeft : function(str, total, padding) {
            return pad(str, total, padding, 'left');
        },

        /**
         * Takes an argument and a goal length and appends
           padding character to reach that length.
         * @param {mixed} str A number or string representing a number
         * @param {integer} total A length to make the return string
         * @param {mixed} padding A number or string to pad with
         * @return {string} Padded string
         * @uses CN.utils.pad
         */
        padRight : function(str, total, padding) {
            return pad(str, total, padding, 'right');
        },

        /**
         * URI encode/decode a string
         * @private
         * @param {string} str String to encoded or decoded
         * @param {boolean} [encode] Will encode if set to true, otherwise decode
         * @return {string} Encoded or decoded string
         */
        uriencdec : function(str, encode) {
            return (encode) ? encodeURIComponent(str) : decodeURIComponent(str);
        },

        /**
         * Converts a property array to an object of values
         *
         * @param   {array|object}  arr     An array of key/value objects (or object as fallback)
         * @param   {string}        name    The name to use (defaults to 'name')
         * @param   {string}        value   The value to use (defaults to 'value')
         * @return  {object}                The resulting mapped object
         * @example mapPropertyArray([{'name':'left','value':200},{'name':'top','value':300}]);
         *          returns this object:
         *          { 'top'  : 300, 'left' : 200 }
         */
        mapPropertyArray : function(arr, name, value) {
            name  = name  || 'name';
            value = value || 'value';

            var obj = {};

            if (jQuery.isArray(arr)) {
                jQuery.each(arr, function(i) {
                    obj[arr[i][name]] = arr[i][value];
                });
            } else {
                obj[arr[name]] = arr[value];
            }

            return obj;
        }
    };
})();


/**
 * CN Debug Object
 * @requires    jQuery
 * @class       CN Debug Object
 * @public
 * @constructor
 * @author      Paul Bronshteyn
 */
CN.debug = (function() {
    var
        /**
         * Log Types (error, warn, info, user)
         * @memberOf    CN.debug
         * @private
         * @type        object
         */
        eType = {
            error : { f: 'error', msg: 'ERROR' },
            warn  : { f: 'warn',  msg: 'WARNING' },
            info  : { f: 'info',  msg: 'INFO' },
            user  : { f: 'error', msg: 'USER' }
        },

        /**
         * Log Types (DEV, STAG, PREV, PROD)
         * @memberOf    CN.debug
         * @private
         * @type        object
         */
        eEnv = {
            DEV  : 'Development',
            STAG : 'Staging',
            PREV : 'Preview',
            PROD : 'Production'
        },

        /**
         * no operation function
         */
        noop = function() {
            return;
        },

        /**
         * Shows error information in console or alert
         * @memberOf    CN.debug
         * @private
         * @param       {string}    type    Error Type
         * @param       {string}    msg     Error message
         * @param       {array}     [args]  Error details
         */
        show = function(type, msg, args) {
            var t = eType[type] || eType.debug;

            if (CN.site.env === 'PROD' && !CN.site.debug) {
                return;
            }

            msg = msg || 'NO MSG';
            args = args || [];

            if (typeof console === 'object') {
                // fallback to noop if console is defined but not console.info/warn/error
                var func = console[t.f] || console.info;

                args.unshift(t.msg, msg);

                for (var i = 0; i < args.length - 1; i += 2) {
                    var part = args.splice(0, i + 1);
                    part.push(' :: ');
                    args = part.concat(args);
                }

                if (console.firebug) {
                    func.apply(this, args);
                } else if(typeof console[t.f] === 'function'){
                    // console[t.f] should not be assigned to any variables(webkit issue)
                    // http://bit.ly/MGBR8X
                    console[t.f](args);
                }
            }
        };

        if (CN.url.params("debugOff") === 'true') {
            show = noop;
        }

    /**
     * @scope CN.debug
     */
    return {
        /**
         * Log error messages
         * @param   {string}    msg     Error message
         * @param   {array}     [args]  Error details
         */
        error : function(msg, args) {
            show('error', msg, args);
            return this;
        },

        /**
         * Log warning messages
         * @param   {string}    msg     Warning message
         * @param   {array}     [args]  Warning details
         */
        warn : function(msg, args) {
            show('warn', msg, args);
            return this;
        },

        /**
         * Log info messages
         * @param   {string}    msg     Info message
         * @param   {array}     [args]  Info details
         */
        info : function(msg, args) {
            show('info', msg, args);
            return this;
        },

        /**
         * Log Try/Catch messages
         * @param   {object}        e Error object
         * @param   {array} [args]  Error details
         */
        user : function(e, args) {
            show('user', e.message, [args, e.fileName, e.lineNumber, e.name, e.stack]);
            return this;
        },

        /**
         * Speed test your function
         * @param   {function|string}   f           Function name or it's string representation
         * @param   {array}             [args]      Arguments that will be passed to the function
         * @param   {integer}           [cycles]    How many cycles to run the test (default 10000)
         * @return  {console|alert}                 Prints time in ms in console in FF,Safari,Chrome and alert() on IE
         */
        speedtest : function(f, args, cycles) {
            var x, i;

            if (CN.isNumber(args)) {
                cycles = args;
                args = [];
            }

            if (!jQuery.isArray(args)) {
                args = [];
            }

            cycles = cycles || 10000;

            if (!jQuery.isFunction(f)) {
                CN.debug.error('Not a function', [f]);
                return this;
            }

            if (typeof console === 'object') {
                if (console.time) {
                    x = 'timer' + Math.floor(Math.random() * 1000000);
                    console.time(x);
                    for (i = 0; i < cycles; i++) {
                        f.apply(this, args);
                    }
                    console.timeEnd(x);
                } else {
                    x = new Date() - 0;
                    for (i = 0; i < cycles; i++) {
                        f.apply(this, args);
                    }
                    x = new Date() - x;
                    console.log(x);
                }
            } else {
                x = new Date() - 0;
                for (i = 0; i < cycles; i++) {
                    f.apply(this, args);
                }
                x = new Date() - x;
                alert(x);
            }

            return this;
        },

        /**
         * CN Application Debug Object
         * @class       CN Application Debug Object
         * @constructor
         * @public
         * @author      Paul Bronshteyn
         */
        app : function() {
            var
                /**
                 * Holds setLevel options
                 * @memberOf    CN.debug.app
                 * @private
                 * @type        object
                 */
                options = {},

                /**
                 * Shows error information in console or alert.
                 * @description     Uses setLevel options to display or supress error messages.
                                    Calls parent show() method if setLevel options match
                 * @memberOf        CN.debug.app
                 * @link            CN.debug.show
                 * @private
                 * @param           {string}    type    Error Type
                 * @param           {string}    msg     Error message
                 * @param           {array}     [args]  Error details
                 */
                _show = function(type, msg, args) {
                    if (options[CN.site.env][type]) {
                        show(type, msg, args);
                    }
                };

            /**
             * @scope CN.debug.app
             */
            return {
                /**
                 * Set Levels of debuging messages
                 * @param   {array}     type    Log Types (error, warn, info, debug, user)
                 * @param   {string}    [env]   Enviroment (DEV, STAG, PREV, PROD)
                 */
                setLevel : function(type, env) {
                    if (!type || !jQuery.isArray(type) || type.length === 0) {
                        return this;
                    }
                    env = (env && env in eEnv) ? env : 'DEV';
                    options[env] = type;
                    return this;
                },

                /**
                 * Get Levels of debuging messages
                 * @param   {string}        [env]   Enviroment (DEV, STAG, PREV, PROD)
                 * @return  {object|array}          If enviroment not provided returns reporting object, if provided levels array
                 */
                getLevel : function(env) {
                    return (env) ? options[env] || '' : options;
                },

                /**
                 * Log error messages
                 * @link    CN.debug.error
                 * @param   {string}    msg     Error message
                 * @param   {array}     [args]  Error details
                 */
                error : function(msg, args) {
                    _show('error', msg, args);
                    return this;
                },

                /**
                 * Log warning messages
                 * @link    CN.debug.warn
                 * @param   {string}    msg     Warning message
                 * @param   {array}     [args]  Warning details
                 */
                warn : function(msg, args) {
                    _show('warn', msg, args);
                    return this;
                },

                /**
                 * Log info messages
                 * @link    CN.debug.info
                 * @param   {string}    msg     Info message
                 * @param   {array}     [args]  Info details
                 */
                info : function(msg, args) {
                    _show('info', msg, args);
                    return this;
                },

                /**
                 * Log Try/Catch messages
                 * @link    CN.debug.user
                 * @param   {object}    e       Error object
                 * @param   {array}     [args]  Error details
                 */
                user : function(e, args) {
                    _show('user', e.message, [args, e.fileName, e.lineNumber, e.name, e.stack]);
                    return this;
                }
            };
        }
    };
})();


/**
 * Intercept window errors, log them quietly.
 * @description      The error will be intercepted on all enviroments and suppresed
                     on production enviroment (this should be optional).
 * @name    onerror
 * @event
 * @param  {string}  msg Error message
 * @param  {string}  url URL of the error
 * @param  {integer} line Line number
 * @return {boolean}
 */
if (CN.url.params("debugOff") !== 'true') {
    window.onerror = function(msg, url, line) {
        CN.debug.error(msg, [url, line]);
        return (CN.site.env === 'PROD') ? true : false;
    };
}


/**
 * CN Site Object
 * @class    CN Site Object
 * @public
 * @author   Paul Bronshteyn
 */
CN.site = (function() {
    /** @scope CN.site */
    return {
        /**
         * Site code
         * @type string
         */
        code : '',

        /**
         * Site title
         * @type string
         */
        title : '',

        /**
         * Site name - Lower cased title
         * @type string
         */
        name : '',

        /**
         * Site alias - Upper case title
         * @type string
         */
        alias: '',

        /**
         * Site environment
         * @type string
         */
        env : '',

        /**
        * Site CND Request
        * @type boolean
        */
        cnd: false,

        /**
         * Site debug.
         * @description If set will console debug messages in any enviroment.
                        Use query parameter magdebug to toggle debuger.
         * @type boolean
         */
        debug : !!CN.url.params('magdebug') && !this.cnd,

        /**
         * Site no ads.
         * @description If set will disable ad calls on the page.
         * @type boolean
         */
        noads : !!CN.url.params('magnoads') && !this.cnd,

        /**
         * Test ads.
         * @description If not empty we will use this as dart site and zone
         * @type String
         */
        testads : CN.url.params('dartAdOverride') && !this.cnd,

        /**
         * Initiate site specific object, sets document.domain
         * @param {object} settings S
         * @type function
         */
        init : function(settings) {
            settings = settings || {};
            for (var s in settings) {
                if (settings.hasOwnProperty(s)) {
                    this[s] = settings[s];
                }
            }

            /**
             * @name        CN.site#dynamicName
             * @description Dynamically generated site object based on the name of the site.
                            All site specific code will be in this object.
             * @memberOf    CN.site
             * @type        object
             * @example     CN.site.glamour
             */
            this[this.name] = {};

            this.domain = CN.url.domain();

            try {
                if (this.domain) {
                    document.domain = this.domain;
                }
                CN.debug.info('Document domain was set', [this.domain]);
            } catch(e) {
                CN.debug.error(e);
            }

            CN.debug.info('CN Started', [this.code, this.title, this.env, this.name, this.alias, this.cnd, this.debug, this.noads]);

            return this;
        }
    };
})();


/*********************************************************************************************************************
 The above namespaces need to be in the order listed
 All namespaces below will follow in alphabetical order
*********************************************************************************************************************/

/**
 * @class    CN callwhen
 * Method for evaluating call[before || back] events.
 * @description      Ensures, parses, and triggers all call[before || back] events pass
 *                   in object fincs.
 * @public
 * @author   Russell Munson
 * @example funcs={
                callbefore : [{
                    func: function(){ dosomething();},  //Function to be executed
                    params: ["string",{object}],        //Params to be passed to function
                    scope : CN.dart                     //Scope to execute function in
                    }],
                callbefore : [{
                    func: function(){ dosomething();},
                    params: ["string",{object}],
                    scope : CN.dart
                    }]
                }
 */
CN.callwhen = {

    /* Add function to the callbefore/callback queue
     *
     * @param  {object}  queue State to queue "before||after".
     * @param  {object}  func) Object containing the function, params, and scopes.
     *                   ex:  { func: function(e,str){return str;},
     *                          params:["function running"],
     *                          scope : window}
     * @param  {object}  [queue] CN.callwhen object to add function to, or {}.
     */
    add : function(state,funcO,queue){
        if(!state || !funcO || !funcO["func"]) {return;}
        queue=queue || {},
        state = (state==="after" ? "callback" : "callbefore"),
        funcO= {
            func : funcO["func"],
            params : funcO["params"] || [],
            scope : funcO["scope"] || window
        };

        if(jQuery.isFunction(funcO.func) && CN.isString(state)){
            queue[state] = queue[state] || [],
            queue[state].push(funcO);
        }
        return queue;
    },

    /* Execute the functions in all defined states function
     * @param  {object}  funcs Object containing callwhen events
     * @param  {dom el}  [target] Optional DOM element to bind event to, which defaults to window.
     * @param  {string}  [state] Optional state to execute "before||after||both".  Defaults is both.
     */
    run : function(funcs,target,state){
        if (!CN.isObject(funcs)){
            return;
        }
        if (CN.isString(target)){
            state=target,
            target=window;
        }
        var funcThis,
            funcObj;
        /* Run through the callbefore queue */
        if ((state==="before" || !state) && jQuery.isArray(funcs.callbefore)){
            for (var i=0,len=funcs.callbefore.length; i<len; i++)
            {
                if (CN.isObject(funcs.callbefore[i])){

                    funcObj=funcs.callbefore[i],
                    funcThis=funcObj.scope || window;

                    if(jQuery.isFunction(funcObj.func)){
                        funcObj.func.call(funcThis,funcObj.params || {});
                    }
                }
            }
        }
        if ((state==="after" || !state) && jQuery.isArray(funcs.callback)){
        /* Run through the callback queue */
            for (var i=0, len=funcs.callback.length; i<len; i++)
            {
                if (CN.isObject(funcs.callback[i])){
                    target=target || window,
                    funcObj=funcs.callback[i],
                    funcThis=funcObj.scope || window;

                    if(jQuery.isFunction(funcObj.func)){
                        target.bind(funcObj.event || 'load',function(){
                            funcObj.func.apply(funcThis,funcObj.params || [])
                        });
                    }
                }
            }
        }
    }
};

/**
 * @class       CN.config
 * @description A shortcut to getting and setting page config properties.
 *              Uses CN.page.config object to store and retrieve properties.
 * @public
 * @author      Eric Shepherd
 */
CN.config = (function() {
    var get,
        set,
        listProperties;

    /**
     * @method get
     * @param  {String} prop A config property to get
     * @return {String}      The config property's value
     */
    get = function(prop) {
        return CN.page.config ? CN.page.config[prop] : '';
    };

    /**
     * @method set
     * @param  {Object} Name/value pairs of properties to set
     * @return {Object} CN.config
     */
    set = function(obj) {
        CN.page.config = CN.page.config || {}; // for backwards compatibility
        var prop;

        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                CN.page.config[prop] = obj[prop];
            }
        }

        return this;
    };

    /**
     * @method      listProperties
     * @description Outputs the page's config properties to the console
     */
    listProperties = function() {
        var conf = CN.page.config ? CN.page.config : {},
            prop;

        for (prop in conf) {
            if (conf.hasOwnProperty(prop)) {
                CN.debug.info('CONFIG LIST: ' + prop + ' : ' + conf[prop]);
            }
        }
    };

    return {
        get : get,
        set : set,
        listProperties : listProperties
    };
})();


/**
 * @class    CN Cookie
 * @public
 * @author   Paul Bronshteyn
 */
CN.cookie = (function() {
    var
        /**
         * Cookie Cache Object.
         * @description     Contains all the cookies parsed on the page.
         * @memberOf        CN.cookie
         * @private
         * @type            object
         */
        cookieCache = {};

    /**
     * @scope CN.cookie
     */
    return {
        /**
         * Get the value of a cookie with the given name.
         * @param   {string}    name   Cookie name
         * @return  {string}            Cookie value
         *
         * @example
             Get the value of a cookie:
             CN.cookie.get('the_cookie');
         */
        get : function(name) {
            if (cookieCache[name]) {
                return cookieCache[name];
            }

            var cookies = document.cookie.split('; '),
                cookie  = [],
                c       = 0,
                cl      = cookies.length;

            for (; c < cl; c++) {
                cookie = cookies[c].split('=');
                cookieCache[cookie[0]] = decodeURIComponent(cookie.slice(1).join('='));
                if (cookie[0] === name) {
                    return cookieCache[cookie[0]];
                }
            }

            this.delCache(name);
            return '';
        },

        /**
        * Delete the cookie with the given name.
        * @param {string} name Cookie name
        * @param {object} [options] Cookie options
        *
        * @example
            Delete the cookie:
            CN.cookie.del('the_cookie');

            Delete the cookie set with path:
            CN.cookie.del('the_cookie', { path: '/' });
        */
        del : function(name, options) {
            options = options || {};
            options.expires = -1;
            return this.set(name, '', options);
        },

        /**
         * Create a cookie with the given name and value and other optional parameters.
         * @param   {string}    name        Cookie name
         * @param   {string}    [value]     Cookie value
         * @param   {object}    [options]   Cookie options
         *
         * @example
             Create or set the value of a cookie:
             CN.cookie.set('the_cookie', 'the_value');

             Create a cookie with all available options:
             CN.cookie.set('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'condenast.com', secure: true });

             Delete the cookie:
             CN.cookie.set('the_cookie', '', { expires: -1 });
         */
        set : function(name, value, options) {

            this.delCache(name);

            options = options || {};
            value = value || '';
            options.expires = CN.isDate(options.expires) ? options.expires.toUTCString() : CN.isNumber(options.expires) ? (new Date(+(new Date) + options.expires * 60 * 60 * 1000)).toUTCString() : ''; // TODO: fails jslint - second new Date needs ()?
               var doEncode = true,
                   cookieValue,
                cookie;

       //to encode or not to encode
            if (options.encode!==undefined) {
               doEncode=options.encode;
            }

            cookieValue = (doEncode)? encodeURIComponent(value):value;
            cookie = [name + '=' + cookieValue];

            if (options.expires) {
                cookie.push('expires=' + options.expires);
            }
            if (options.path) {
                cookie.push('path=' + options.path);
            }
            if (options.domain) {
                cookie.push('domain=' + options.domain);
            }
            if (options.secure) {
                cookie.push('secure');
            }

            return document.cookie = cookie.join('; '), cookieCache[name] = value, true; // TODO: crashes jslint with assignment operator in return
        },

        delCache: function(name) {
            delete cookieCache[name];
            return this;
        }
    };
})();


/**
 * @class   CN Date Object
 * @public
 * @author  Eric Shepherd
 * @author  Paul Bronshteyn
 */
CN.date = (function() {
    var
        /**
         * Month name list
         * @memberOf    CN.date
         * @private
         * @type        object
         */
        months = {

            /**
             * English month names
             * @memberOf     CN.date
             * @private
             * @type         array
             */
            en : {
                /**
                 * English long month names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),

                /**
                 * English short month names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _short: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')
            },

            /**
             * Spanish month names
             * @memberOf     CN.date
             * @private
             * @type         array
             */
            es : {
                /**
                 * Spanish long month names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'enero,febraro,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,deciembre'.split(',')
            }
        },

        days = {

            /**
             * English day of the week names
             * @memberOf    CN.date
             * @private
             * @type        array
             */
            en : {
                /**
                 * English day of the week long names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),

                /**
                 * English day of the week short names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _short: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(',')
            },

            /**
             * Spanish day of the week names
             * @memberOf CN.date
             * @private
             * @type object
             */
            es: {
                /**
                 * Spanish day of the week long names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'el domingo,el lines,el martes,el mi&eacute;rcoles,el jueves,el viernes,el s&aacute;bado'.split(',')
            }
        },


        /**
         * Takes an argument and a goal length, and prepends 0 digits to reach that length
         * @param   {mixed}     arg     A number or string representing a number
         * @param   {number}    len     A length to make the return string
         * @return  {string}            A string containing zero digits plus the original number
         */
        zeroPad = function(arg, len) {
            arg = arg.toString();
            var diff = len - arg.length,
                i;
            for (i = 0; i < diff; i++) {
                arg = '0' + arg.slice(0, arg.length);
            }
            return arg;
        },


        /**
         * Flags for formatting dates, parallels Java simple date format.
         * NOTE: Only works in English for now. We'll need a global language identifier probably at the CN.site level
         * @memberOf        CN.date
         * @private
         * @type            object
         */
        formatFlags = {

                    // G - Era designator, we assume AD for now
            G : function() {
                return 'AD';
            },
                    // y - Year
            y : function(d, number) {
                var y = d.getFullYear().toString();
                y = (number === 2) ? y.substring(y.length - 2, y.length) : zeroPad(y,number);
                return y;
            },

                    // M - Month in year
            M : function(d, number) {
                var m = d.getMonth(),
                    opt = {};
                if (number < 3) {
                    m = zeroPad(m + 1, number);
                } else {
                    opt.form = number === 3 ? 'short' : 'long';
                    m = CN.date.getMonthName(m, opt);
                }
                return m;
            },

                    // w - Week in year
            w : function(d, number) {
                var first = new Date(d.getFullYear(), 0, 1), // January first of the current year
                    w;
                w = Math.ceil((((d - first) / 86400000 /* ms in a day */) + first.getDay() + 1) / 7);
                w = zeroPad(w, number);
                return w;
            },

            // W - Week in month - not currently supported

                    // D - Day in year
            D : function(d, number) {
                var first = new Date(d.getFullYear(), 0, 1),
                    day;
                day = Math.ceil(((d - first) / 86400000 /* ms in a day */) + first.getDay() + 1);
                day = zeroPad(day, number);
                return day;
            },

                    // d - Day in month
            d : function(d, number) {
                return zeroPad(d.getDate(), number);
            },

            // F - Day of week in month - not currently supported

                    // E - Day in week
            E : function(d, number) {
                var opt = {};
                opt.form = number > 3 ? 'long' : 'short';
                return CN.date.getDayName(d.getDay(), opt);
            },

                    // a - AM/PM marker
            a : function(d, number) {
                return d.getHours() < 12 ? 'AM' : 'PM';
            },

                    // H - Hour in day (0-23)
            H : function(d, number) {
                return zeroPad(d.getHours(), number);
            },

                    // k - Hour in day (1-24)
            k : function(d, number) {
                return zeroPad(d.getHours() + 1, number);
            },

                    // K - Hour in am/pm (0-11)
            K : function(d, number) {
                var hours = d.getHours();
                return zeroPad(hours - 12 >= 0 ? hours - 12 : hours, number);
            },

                    // h - Hour in am/pm (1-12)
            h : function(d, number) {
                var hours = d.getHours();
                return zeroPad((hours - 13 >= 0 ? hours - 12 : hours), number);
            },

                    // m - Minute in hour
            m : function(d, number) {
                return zeroPad(d.getMinutes(), number);
            },

                    // s - Second in minute
            s : function(d, number) {
                return zeroPad(d.getSeconds(), number);
            },
                    // S - Millisecond
            S : function(d, number) {
                return zeroPad(d.getMilliseconds(), number);
            }

            // z - Time zone (general) // Not Supported
            // Z - Time Zone (RFC 822 e.g. -0800) // Not Supported
        };


    /**
     * @scope CN.date
     */
    return {

        /**
         * Determines whether or not the provided year is a leap year
         * @param   {number}    year    The year being tested
         * @return  {boolean}           Whether or not the year is a leap year
         */
        isLeapYear : function(year) {
            return !!(year && (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0));
        },

        /**
         * Get the number of days in the given month
         * @param   {number}    month   Month number (0-11) where January is 0
         * @param   {number}    year    The year
         * @return  {number}            The number of days in the month
         */
        getDaysInMonth : function(month, year) {
            return (month === 1 && this.isLeapYear(year)) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || 0;
        },

        /**
         * Get month name.
         * @description Returns month name for specified month index and language, the language will
                        default to English if not provided.
         * @param       {integer}   month   Month number (0-11) where January is 0, February is 1 and so on
         * @param       {object}    options Language, short or long form
         * @option      {string}    lang    ISO 639-1 language code (default "en")
         * @option      {string}    form    Type of form to use (default "long")
         * @return      {string}            Month name or Empty
         * @link                            http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        getMonthName : function(month, options) {
            options = options || {};
            return CN.date.getMonthNames(options)[month] || '';
        },

        /**
         * Get month names array.
         * @description Returns array of month names for specified language
         * @param       {string}    lang    ISO 639-1 language code
         * @return      {array}             Month names or Empty
         * @link                            http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        getMonthNames : function(options) {
            options = options || {};
            return months[options.lang || 'en']['_' + (options.form || 'long')] || [];
        },

        /**
         * Get day name.
         * @description Returns day name for specified month index and language; the langauge will
                        default to English if not provided.
         * @param       {number}    day     Day number (0-6) where Sunday is 0
         * @param       {object}    options Language, short or long form
         * @option      {string}    lang    ISO 639-1 language code (default "en")
         * @option      {string}    form    Type of form to use (default "long")
         * @return      {string}            Day name or empty
         * @link                            http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        getDayName : function(day, options) {
            options = options || {};
            return CN.date.getDayNames(options)[((day === 7) ? 0 : day)] || '';
        },

        /**
        * Get day of the week names array.
        * @description Returns array of day of week names for specified language
        * @param {object} [options] Language and name options
        * @option {string} lang ISO 639-1 language code (default "en")
        * @option {string} Type of form to use (default "long")
        * @return {array} Month names or Empty array
        * @link http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
        */
        getDayNames : function(options){
            options = options || {};
            return days[options.lang || 'en']['_' + (options.form || 'long')] || [];
        },

        /**
         * Format a JavaScript date to a readable format
         * For now, this is only a format method. It can be expanded to parse a string into a date later.
         * @description Returns a formatted date
         * @param   {object}    d       A JavaScript date object
         * @param   {string}    pattern A formatting string, per Java's SimpleDateFormat specification
         * @return  {string}            A formatted date string
         * @link                        http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html
         */
        format : function(d, pattern) {
                    // For now, only accepting date objects.
            if (!CN.isDate(d)) {
                CN.debug.warn('date.format() method requires a JavaScript date object to be passed');
                return d;
            }

            var str = '',
                p = function(q) { // Utility function to push into the string we will be returning
                    str += q;
                },
                i,
                il,
                current       = '',
                flagLength    = 1,
                currentToEnd,
                subPattern;
            /// END VAR BLOCK

            if (CN.isString(pattern)) {

                pattern = pattern.split(''); // pattern is now an array since IE can't do String[n]

                for (i = 0, il = pattern.length; i < il; i++) {
                    current = pattern[i];

                            // If there's a flag, call it, else parse literally while accounting for single quotes
                    if (formatFlags[current]) {
                                // Keeps increasing flagLength if letters are repeated and match a flag
                        while (pattern[i + flagLength] === pattern[i]) {
                            flagLength += 1;
                        }
                                // Calls the method for the given flag
                        p(formatFlags[current](d, flagLength));

                    } else {
                                // If we get a single quote
                        if (pattern[i] === '\'') {
                            if (pattern[i + 1] !== '\'') {
                                currentToEnd = pattern.slice(i + 1, pattern.length);
                                subPattern = currentToEnd.slice(0, currentToEnd.indexOf("'"));
                                p(subPattern.join(''));
                                flagLength += (subPattern.length + 1);
                            } else {
                                p("'");
                                flagLength += 1;
                            }

                        } else {
                            p(pattern.slice(i, i + 1).join(''));
                        }
                    }

                    i += (flagLength - 1); // jump i ahead by the number of letters
                    current = ''; // reset
                    flagLength = 1; // reset
                }
            } else { // Fallback to generic toString() representation if no format was passed in
                str = d.toString();
            }

            return str;
        },

        /**
         * Converts an ISO-8601 date (W3C subset) into a JavaScript date
         * http://www.w3.org/TR/NOTE-datetime
         *
         * @param   {String}    d   A date string in ISO-8601 format
         * @return  {Date}          A JavaScript Date object
         */
        isoToDate : function(isoDate) {
            var regex  = /([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?/, // TODO: fails jslint - unescaped - at 116
                offset = 0,
                date   = isoDate.match(regex),
                d      = new Date(date[1], 0, 1);

            if (date[3]) {
                d.setMonth(date[3] - 1);
            }
            if (date[5]) {
                d.setDate(date[5]);
            }
            if (date[7]) {
                d.setHours(date[7]);
            }
            if (date[8]) {
                d.setMinutes(date[8]);
            }
            if (date[10]) {
                d.setSeconds(date[10]);
            }
            if (date[12]) {
                d.setMilliseconds(Number('0.' + date[12]) * 1000);
            }
            if (date[14]) {
                offset = (Number(date[16]) * 60) + Number(date[17]);
                offset = offset * ((date[15] == '-') ? 1 : -1);
            }
            offset = offset - d.getTimezoneOffset();
            d.setTime(Number(Number(d) + (offset * 60 * 1000)));

            return d;
        },

        /**
         * Converts a Teamsite date into the standard ISO-8601 format
         * Using timezone offset that should at least give us the right day when the teamsite time is set to midnight.
         *
         * @param   {String}    iwDate  A date in InterWoven Teamsite format (20081204 11:23:34)
         * @return  {String}            A date in ISO-8601 format
         */
        convertIwDateToIso : function(iwDate) {
            var isoDate = '';
            if (CN.isString(iwDate)) {
                isoDate = iwDate.substr(0, 4) + '-' + iwDate.substr(4,2) + '-' + iwDate.substr(6, 2) + 'T' + iwDate.substr(9, 8) + '-05:00';
            }
            return isoDate || '';
        }
    };
})();


/**
 * @class        CN Frame
 * @description  Contains methods for dealing with iFrames.
 * @public
 * @requires     jQuery
 * @author       Paul Bronshteyn
 */
CN.frame = (function($) {
    var
        /**
         * Resize iFrame height to fit content on load.
         * @description This is a private function that is triggered by the onload
                        event of the iFrame. This will also be triggered by the
                        public resize method.
         * @memberOf    CN.frame
         * @private
         * @event
         */
        _resize = function(e) {
            var frame = (e.data && e.data.use) ? e.data.use : this,
                body;

            try {
                if(frame.contentWindow)
                    {
                        body = frame.contentWindow.document.getElementsByTagName('body')[0];

                    }else if(frame.contentDocument)
                    {
                        body = frame.contentDocument.document.getElementsByTagName('body')[0];
                    }
            } catch(e) {
                return CN.debug.user(e, [frame, frame.id]);
            }

            if (typeof e.data === 'undefined') {
                $('iframe', body).bind('load', { use: frame }, _resize);
            }

            if (!$('.textAd', body).length || !$('#adHolder a', body).eq(0).text()) {
                $('#adHolder', body).css({ 'font-size': 0, 'line-height': 0 });
            }

            $(frame).css({
                border : 'none',
                margin : 0,
                height : $(body).css({ overflow: 'hidden', margin: 0, border: 0 }).outerHeight()
            });
        };

    /**
     * @scope CN.frame
     */
    return {
        /**
         * Bind iFframe resize on iFrame load.
         * @description     Binds the load event to the element passed in.
         * @param           {string}    frame   ID or class of the iFrame in jQuery excepted format.
         * @uses            CN.frame._resize
         *
         * @example
             Using element id:
             CN.frame.bindResize('#frame_id');

             Using element class:
             CN.frame.bindResize('.frame_class');

             Using multiple and combinations:
             CN.frame.bindResize('#frame_id, .frame_class');
         */
        bindResize : function(frame) {
            $(frame).bind('load', _resize);
            return this;
        },

        /**
         * Refresh iFrame
         * @description Refreshes an iFrame with the current url or with the url if the
                        param (if provided), resizes the frame onload to fit content.
         * @param       {string,array}  frames      Array, CSV or space-delimitted list of iframe
                                                    classes or ids or mixed
         * @param       {string}        [url]       Url for the iFrame(s) to be refreshed with, defaults to
                                                    refreshing current iFrame url
         * @param       {boolean}       [resize]    Resize iFrame after refresh, default is true
         * @uses        CN.frame._resize
         *
         * @example
             Refresh iFrame:
             CN.frame.refresh('#frame_id');

             Refresh multiple iFrames (comma-separated):
             CN.frame.refresh('#frame_id,.frame1,#frame2');

             Refresh multiple iFrames (space-separated):
             CN.frame.refresh('#frame_id .frame1 #frame2');

             Refresh iFrame with url:
             CN.frame.refresh('#frame_id', 'http://www.example.com');

             Refresh iFrame with url and do not resize:
             CN.frame.refresh('#frame_id', 'http://www.example.com', false);
         */
        refresh : function(frames, url, resize, funcs) {
            frames = (CN.isString(frames)) ? frames.split(/,|\s+/) : ($.isArray(frames)) ? frames : [];
            // frames array empty? exit
            if (!frames.length) {
                return this;
            }

            // shift arguments if resize was ommited
            if(CN.isObject(resize)){
                funcs=resize,resize=true;
            }

            // shift arguments if url and resize were ommited
            if(CN.isObject(url)){
                funcs=url,url='';
            }

            // shift arguments if url was ommited
            if (CN.isBoolean(url)) {
                resize = url;
                url = '';
            }

            // NOTE: == is intentional and checks for values that are null or undefined
            resize = (resize == null) ? true : resize;

            // update each frame
            $.each(frames, function(i, v) {
                if (!/\S/.test(v)) {
                    return true;
                }

                var frame = $(v);
                if (!frame.length) {
                    return true;
                }

                // bind load event
                if (resize) {
                    frame.bind('load', _resize);
                }

                //execute callbefore, and bind callafter
                CN.callwhen.run(funcs,frame);

                url = url || frame[0].src;

                // load url provided or refresh
                // adblock extension throws error, catch it, kill it
                try {
                    frame[0].contentWindow.location.replace(url);
                    CN.debug.info('CN Frame Refresh', [v, url, resize]);
                } catch(e) {
                    CN.debug.user(e, [v, url, resize]);
                }
            });

            return this;
        },

        /**
         * Resize iFrame height to fit content.
         * @description     Binds the load event to the element passed in and then triggers it.
         * @param           {string}    frame   ID or class of the iFrame in jQuery excepted format.
         * @uses            CN.frame._resize
         *
         * @example
             Using element id:
             CN.frame.resize('#frame_id');

             Using element class:
             CN.frame.resize('.frame_class');

             Using multiple and combinations:
             CN.frame.resize('#frame_id, .frame_class');
         */
        resize : function(frame) {
            $(frame).bind('load', _resize).triggerHandler('load');
            return this;
        }
    };
})(jQuery);

/**
 * @class       CN Internal Object
 * @description Handles functionality for non-production environments.
 * @public
 * @author      Eric Shepherd
 */
CN.internal = (function() {
    return {
        getTeamsiteServer : function() {
            return 'deprecated';
        }
    };
})();


/**
 * @class       CN.media
 * @description Methods to handle various types of media
 * @public
 * @author      Eric Shepherd
 */
CN.media = (function($) {

    var embedSwf,
        embedSwfWithTimeout;

    /**
     * Makes a call to swfobject to embed a swf movie with the given
     * parameters.
     *
     * @method embedSwf
     * @private
     * @param args {Array} An array of params for the swfobject call
     */
    embedSwf = function(args) {
        swfobject.embedSWF.apply(window, args)
    };

    /**
     * Sets a timer to allow dynamically loaded swfobject.js to be parsed
     * before running code dependent on it.
     *
     * @method embedSwfWithTimeout
     * @private
     * @param args {Array} An array of params for the swfobject call
     */
    embedSwfWithTimeout = function(args) {
        setTimeout(function() {
            embedSwf(args)
        }, 200);
    };

    /**
     * @scope CN.media
     */
    return {

        /**
         * Embeds a Flash movie using swfobject.js, loading it if it's not
         * already included on the page.
         *
         * @public
         * @method swf
         * @param  args {Array} An array of params for the swfobject call
         */
        swf : function(args) {
            if (typeof swfobject === 'undefined') {
                CN.debug.info('Dynamically loading swfobject.js - consider placing the script call in the site JSP if load time/FOUC is an issue.');
                $.getScript('/js/cn-fe-common/misc/swfobject.js', function() {
                    embedSwfWithTimeout(args);
                });
            } else {
                CN.debug.info('swfobject.js already loaded or being loaded on page, using it to render mediaItem');
                embedSwf(args);
            }
        }
    };
})(jQuery);


/**
 * @class       CN.modules
 * @description Holds page module APIs and provides methods for interacting with modules
 * @public
 * @author      Eric Shepherd
 */
CN.modules = (function() {
    CN.customEvents = CN.customEvents || {};
    CN.customEvents.moduleLoaded = {};

    var register,
        loaded = [];

    register = function(moduleName) {
        CN.modules.loaded.push(moduleName);
        jQuery(window).trigger('CN.customEvents.moduleLoaded.' + moduleName);
    };

    return {
        register : register,
        loaded   : loaded
    }
})();


/**
 * @class       CN.page
 * @description Page level information
 * @public
 * @author      Paul Bronshteyn
 * @author      Eric Shepherd
 */
CN.page = (function() {
    return {
        config : {},

        /**
         * The section of the site we are in
         * @memberOf CN.page
         * @public
         * @return {String} The current site section, or empty
         */
        section : function() {
             return ((location.pathname.split('/')[1] || '').match(/^[^\.]*$/) || [''])[0];
        },

        /**
         * The subsection of the site we are in, if applicable
         * @memberOf CN.page
         * @public
         * @return {String} The subsection of the site, or empty
         */
        subsection : function() {
            return ((location.pathname.split('/')[2] || '').match(/^[^\.|(\d{4})]*$/) || [''])[0];
        },

        /**
         * The content slug of the current page, if applicable
         * @memberOf CN.page
         * @public
         * @return {String} The current page's slug, or empty
         */
        slug : function() {
            return ((location.pathname.split('/')[location.pathname.split('/').length-1] || '').match(/^[^\.]*$/) || [''])[0];
        }
    };
})();


/**
 * @description     Reg specific methods.  If your function is used on
 *                  registration, and it doesn't fit anywhere else... then it belongs here.
 * @class           CN Reg
 * @public
 * @author          Paul Bronshteyn
 * @author          Russell Munson
 */
CN.reg = (function($) {

    var form     = {},
        reqClass = "rqrd";

    function formBindings() {
        form.bind('submit', function() {
            var bdayfield = $('#bdayfield', this);
            if (bdayfield.length && $('#birthYear', this).val() != 'YYYY') {
                bdayfield.val([$('#birthMonth', this).val(), $('#birthDay', this).val(), $('#birthYear', this).val()].join('/'));
            }
        });
    }

    return {

        /**
         * Set the form context for the usage in CN.reg
         *
         * @public
         * @param {String} fid Takes jQuery formatted selector pointing to form
         * @returns {Object} Returns CN.reg for easy command chaining.
         */
        setForm : function(fid){
            form = $(fid);
            formBindings();
            return this;
        },

        /**
         * Return for jQuery object containing the form currently in context
         *
         * @public
         * @returns {Object} jQuery object conaining form currently in context
         */
        getForm : function(){
            return form;
        },

        /**
         * Concatenates values of separate birthday fields with a '/' deliminator
         *
         * @public
         */
        setBirthday : function() {
            var bdayfield = $('#bdayfield', form);
            if (bdayfield.length) {
                var fields = bdayfield.val().split('/');
                $('#birthMonth', form).val(fields[0]);
                $('#birthDay', form).val(fields[1]);
                $('#birthYear', form).val(fields[2]);
            }
        },

        /**
         * Add css class indicator for required fields. Assumes
         * standard regForm markup, with parent .row containing class defined in reqClass
         *
         * @public
         */
        setReq : function(el) {
            $(el).parents('.row').addClass(reqClass);
        },

        /**
         * Remove css class indicator for required fields. Assumes
         * standard regForm markup, with parent .row containing class defined in reqClass
         *
         * @public
         */
        removeReq : function(el) {
            $(el).parents('.row').removeClass(reqClass);
        },

        /**
         * Return class name for marking required fields in a reg form
         *
         * @public
         */
        getReqClass : function() {
            return reqClass;
        }
    };
})(jQuery);


/**
 * @class    CN Search
 * @public
 * @author   Paul Bronshteyn
 */
CN.search = (function() {
    var
        /**
         * RegEx checks to validate search string
         * @memberOf CN.search
         * @private
         */
        checks = {
            alphanum : /[^0-9a-zA-Z\s]/g,
            script   : /<script(.|\s)*?\/script>/g
        };

    /**
     * @scope CN.search
     */
    return  {
        /**
         * Generate search path.
         * @description     Sanitizes the string first, replaces all spaces with -
         * @param           {string}    keywords    Search keywords
         * @return          {string}                Sanitized search path
         * @uses            CN.search.sanitize
         */
        path : function(keywords) {
            return this.sanitize(keywords).replace(/\s+/g, '-');
        },

        /**
         * Sanitize query string.
         * @description     Remove &lt;script/&gt; tags to prevent XSS and all non-alpha numeric characters.
         * @param           {string}    keywords    Search keywords
         * @return          {string}                Sanitized keywords
         * @uses            CN.utils.trim
         */
        sanitize : function(keywords) {
            return CN.utils.trim(keywords || '').replace(checks.script, '').replace(checks.alphanum, '');
        }
    };
})();


/**
 * @class    CN User
 * @public
 * @author   Paul Bronshteyn
 */
CN.user = (function() {

    /**
     * @scope CN.user
     */
    return {

        /**
         * Determine if the user is logged in?
         * @return  {boolean}
         * @uses    CN.cookie.get
         */
        isLoggedIn : function() {
            return CN.cookie.get('amg_user_record') && CN.cookie.get('amg_user');
        },

        /**
        * Determine if user has confirmed their registration
        * @return {boolean}
        * @uses CN.utils.parseStr
        * @uses CN.cookie.get
        */
        isConfirmed : function() {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').conf === 'true';
        },

        /**
         * Get logged in username
         * @return  {string}    Username
         * @uses    CN.utils.parseStr
         * @uses    CN.cookie.get
         */
        username : function() {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').username || '';
        },

        /**
         * Get user id
         * @return  {string}    id
         * @uses    CN.utils.parseStr
         * @uses    CN.cookie.get
         */
        userid : function() {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').uid || 0;
        }
    };
})();


/**
 * @description     Methods invloving geo-location, states, provinces, countries... anything
 *                  world oriented
 * @class           CN World
 * @public
 * @author          Paul Bronshteyn
 * @author          Russell Munson
 */
CN.world = (function($) {

    var
        states = {
            msg : 'Select your',

            us : {
                desc: 'state',
                code: 'AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY,AE,AA,AP'.split(','),
                name: 'Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming,Armed Forces Europe,Armed Forces Americas,Armed Forces Pacific'.split(',')
            }
        },

        /**
         * Defaults the form context for the usage in CN.world to the form currently
         * in context for CN.reg.
         *
         * @protected
         * @returns {Object} Returns jQuery object containing a form
         * @see CN.reg.getForm
         */
        form = function() {
            return CN.reg.getForm();
        };

    return {

        /**
         * Set the form context for the usage in  CN.reg
         *
         * @public
         * @param {String} fid Takes jQuery formatted selector pointing to form
         * @returns {Object} Returns CN.reg for easy command chaining.
         */
        setForm : function(fid) {
            form = $(fid);
            return this;
        },

        /**
         * Event that handles coordination between the field containing the currently
         * selected country value, and the field #state which lists the states/provinces
         * currently supported by CN Digital reg forms.  State field is disabled for non-supported
         * nations
         *
         * @type Event
         * @public
         */
        setState : function() {
            var stateField = $('#state', form),
                zipField = $("#zip", form),
                selection = this.value.toLowerCase();

            if (!(selection in states)) {
                stateField.attr({disabled: 'true'});
                zipField.attr({disabled: 'true'}).data("val",zipField[0].value).val("");
                stateField[0][0].selected = true;
                CN.reg.removeReq("#zip, #state");
            } else {
                CN.reg.setReq("#zip, #state");
                zipField[0].value = ($(zipField).removeAttr('disabled').data("val") || zipField[0].value);
                var choice = stateField.children("[selected]").val() || false;
                stateField.empty();
                $(stateField).removeAttr('disabled')[0][0] = new Option(states.msg + ' ' + states[selection].desc, '');
                $.each(states[selection].code, function(i) {
                    stateField[0][i + 1] = new Option(states[selection].name[i], this);
                    if (choice && choice == this) { // TODO: is this == intentional?
                        stateField[0][i + 1].selected = true;
                    }
                });
            }
        }
    };
})(jQuery);


/*
    SECTION: CN INSTANTIABLE CLASSES
*/


/**
 * Interface creation and verification methods
 * @class Interface
 * @constructor
 * @author Ross Harmes and Dustin Diaz, from Pro JavaScript Design Patterns
 *
 * @param name    {String} The name of the interface. Preferable to use IName convention.
 * @param methods {Array}  The methods which need to be implemented by the child classes.
 */
CN.Interface = function(name, methods) {
    var i,
        il;
    if (arguments.length !== 2) {
        throw new Error('CN.Interface constructor called with ' + arguments.length + ' arguments, but expected exactly 2');
    }
    this.name = name;
    this.methods = [];
    for (i = 0, il = methods.length; i < il; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('CN.Interface constructor expects method names to be passed in as strings');
        }
        this.methods.push(methods[i]);
    }
};


/**
 * Verifies that a class implements a given interface.
 * @method ensureImplements
 * @static
 *
 * @param object {Object} Any object to verify
 */
CN.Interface.ensureImplements = function(object) {
    var i,
        il,
        inter,
        j,
        jl,
        method;
    if (arguments.length < 2) {
        throw new Error('Static method CN.Interface.ensureImplements called with ' + arguments.length + ' arguments, but expected at least 2');
    }
    for (i = 1, il = arguments.length; i < il; i++) {
        inter = arguments[i];
        if (inter.constructor !== CN.Interface) {
            if (jQuery.browser.safari && jQuery.browser.version < 500) {
                // do nothing - safari 2 can't handle this constructor check, this is a patch fix for now
            } else {
                throw new Error('Static method CN.Interface.ensureImplements expects arguments two and above to be instances of CN.Interface.');
            }
        }
        for (j = 1, jl = inter.methods.length; j < jl; j++) {
            method = inter.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error('Static method CN.Interface.ensureImplements: object does not implement the ' + inter.name + ' interface. Method ' + method + ' was not found.');
            }
        }
    }
};


/**
 * Creates an observable object
 * @class Observer
 * @constructor
 */
CN.Observer = function(label) {
    /**
     * @property
     * @static
     */
    this.fns = [];
    /**
     * @property
     * @static
     */
    this.label = label || null;
};

/**
 * Holds the list of fired observers which provided a label at contruction time
 * @property
 * @static
 * @memberOf CN.Observer
 */
CN.Observer.haveFired = [];

CN.Observer.prototype = {

    /**
     * Subscribes to an observable event
     * @method subscribe
     *
     * @param fn {Function} A function to execute when the subscribed event fires
     */
    subscribe : function(fn) {
        this.fns.push(fn);
    },

    /**
     * Unsubscribes to an observable event
     * @method unsubscribe
     *
     * @param fn {Function} A function to remove from those executed when the subscribed event fires
     */
    unsubscribe : function(fn) {
        this.fns = this.fns.filter(
            function(el) {
                if (el !== fn) {
                    return el;
                }
            }
        );
    },

    /**
     * Executes the functions bound to the observable
     * @method fire
     *
     * @param o     {Object} Parameters to pass to the functions when they are called
     * @param scope {Object} Optional scope to execute function within, defaults to window
     */
    fire : function(o, thisObj) {
        var scope = thisObj || window;
        this.fns.forEach(function(el) {
            el.call(scope, o);
        });
        if (this.label && CN.Observer.haveFired.indexOf(this.label) === -1) {
            CN.Observer.haveFired.push(this.label);
        }
    }
};


/**
 * Creates a timer
 * Adapted from GNU licensed JavaScript Timer
 * Original API Docs: <http://abcoder.com/wp-content/uploads/2008/05/jstimer-api.html>
 * Pass in the milliseconds to wait and the callback function to assign.
 * Timer functions are chainable, and can be started, stopped, paused, resumed and restarted.
 * @class Timer
 * @constructor
 *
 * @param millis   {Number}   Milliseconds for the timer
 * @param callback {Function} A callback to execute each time the interval is reached
 */
CN.Timer = function(millis, callback) {
    this.interval = millis;
    this.timer = null;
    this.callbacks = [];
    this.multipliers = [];
    this.tickCounts = [];
    this.canRun = [];
    this.stoppedThreads = 0;
    this.shouldRunOnce = false;
    this.startedAt = -1;
    this.pausedAt = -1;
    this.addCallback(callback);
    return this;
};

CN.Timer.prototype = {

    preset : function() { // called from start()
        this.stoppedThreads = 0;
        this.startedAt = -1;
        this.pausedAt = -1;
        for (var i = 0, il = this.callbacks.length; i < il; i++) {
            this.canRun[i] = true;
            this.tickCounts[i] = 0;
        }
    },

    ticks : function(initInterval) {
        var that = this,
            i,
            il;
        for (i = 0, il = this.callbacks.length; i < il; i++) {
            if (typeof this.callbacks[i] === 'function' && this.canRun[i]) {
                this.tickCounts[i]++;
                if (this.tickCounts[i] === this.multipliers[i]) {
                    this.tickCounts[i] = 0;
                    if (this.runOnce()) {
                        this.canRun[i] = false;
                        this.stoppedThreads++;
                    }
                    window.setTimeout(that.callbacks[i], 0);
                }
            }
        }
        if (this.runOnce() && this.stoppedThreads === this.callbacks.length) {
            this.stop();
        }
        if (typeof initInterval === 'number') {
            this.stop().start(null, true);
        }
    },

    runOnce : function(isRunOnce) {
        if (typeof isRunOnce === 'undefined') {
            return this.shouldRunOnce;
        } else if (typeof isRunOnce === 'boolean') {
            this.shouldRunOnce = isRunOnce;
        } else {
            CN.logger.getInstance().log.error('Invalid argument for runOnce');
        }
        return this;
    },

    /**
     * Resets the interval to the specified time or returns the current interval setting
     * @method getSetInterval
     *
     * @param millis {Number} Milliseconds to change the timer's interval to
     *
     * @return {Mixed} Either the current interval or the timer object itself after resetting the interval
     */
    getSetInterval : function(millis) {
        if (typeof millis === 'undefined') {
            return this.interval;
        } else if (typeof millis === 'number') {
            this.interval = Math.floor(millis);
        }
        return this;
    },

    /**
     * Stops the timer.
     * @method stop
     */
    stop : function(isPausing) {
        if (this.timer) {
            if (!isPausing) {
                this.pausedAt = -1;
            }
            try {
                window.clearInterval(this.timer);
            } catch(e) {
            }
            this.timer = null;
        }
        return this;
    },

    isStopped : function() {
        return ((this.timer === null) && !this.isPaused());
    },

    /**
     * Starts the timer
     * @method start
     */
    start : function(initialInterval, withoutPreset) { // don't use params when calling
        var tempInterval,
            that = this;

        if (this.isPaused()) {
            return this.resume();
        }
        if (!this.isStopped()) {
            return this;
        }
        if (!withoutPreset) {
            this.preset();
        }
        tempInterval = this.interval;
        if (typeof initialInterval === 'number') {
            tempInterval = initialInterval;
        }
        this.timer = window.setInterval(function() {
            that.ticks(initialInterval);
        }, tempInterval);
        this.startedAt = new Date().getTime();
        this.startedAt -= (this.interval - tempInterval);
        return this;
    },

    /**
     * Pauses the timer, without resetting. Use resume() to restart playing.
     * @method pause
     */
    pause : function() {
        if (this.timer) {
            this.pausedAt = new Date().getTime();
            this.stop(true);
        }
        return this;
    },

    isPaused : function() {
        return (this.pausedAt >= 0);
    },

    /**
     * Resumes playing a paused timer
     * @method resume
     */
    resume : function() {
        if (this.isPaused()) {
            var tempInterval = this.interval - ((this.pausedAt - this.startedAt) % this.interval);
            this.pausedAt = -1;
            this.start(tempInterval, true);
        }
        return this;
    },

    restart : function() {
        return this.stop().start();
    },

    /**
     * Adds a callback to the array to be executed at the timer's interval
     * @method addCallback
     */
    addCallback : function(callback, n) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
            if (typeof n === 'number') {
                n = Math.floor(n);
                this.multipliers.push(n < 1 ? 1 : n);
            } else {
                this.multipliers.push(1);
            }
            this.tickCounts.push(0);
            this.canRun.push(true);
        }
        return this;
    },

    clearCallbacks : function() {
        this.callbacks.length = 0;
        this.multipliers.length = 0;
        this.canRun.length = 0;
        this.tickCounts.length = 0;
        this.stoppedThreads = 0;
        return this;
    }
};


/**
 * DOM-related methods
 * @class dom
 * @static
 */
CN.dom = CN.dom || {};


/**
 * Temporary storage for DOM elements
 * @property storage
 * @static
 */
CN.dom.storage = {
    activeClass   : 'active',
    inactiveClass : 'inactive',
    innerTag      : 'span'
};


/**
 * Removes an element temporarily from the document tree ('activating' a tab, for example, by removing its link)
 * @method activateElement
 *
 * @param el      {Node}   A standard DOM element
 * @param storage {Object} A temporary storage variable
 * @param klass   {String} An optional class name to apply
 *
 * @return {Object} The storage variable, now with the element added
 */
CN.dom.storage.activateElement = function(el, storage, klass) {
    var oldLink,
        newLink,
        newEl;

            // Uses the default class name unless one is provided
    klass = klass || this.activeClass;

            // If there is a link present in the element
    if (el.getElementsByTagName('a').length > 0) {

                // Stores the link - Note that the cloning of the element is
                // because of an IE bug where the links get frozen on the hover
                // state. Creating a new element altogether fixes this bug. For
                // good browsers, we can just remove the link to storage.
        if (jQuery.browser.msie || jQuery.browser.safari) {
            oldLink = jQuery(el.getElementsByTagName('a')[0]);
            newLink = oldLink.clone(true);
            storage = jQuery(newLink).get()[0];
            oldLink.remove();
        } else {
            storage = el.removeChild(el.getElementsByTagName('a')[0]);
        }

        jQuery(el).addClass(klass);

                // Creates a new span to hold the contents and aid in styling
        newEl = document.createElement(this.innerTag);
        newEl.innerHTML = storage.innerHTML;

                // Appends the span to the element and returns the storage variable reference
        el.appendChild(newEl);
        return storage;
    }
};


/**
 * Reinserts an element temporarily from the document tree
 * @method deactivateElement
 * @static
 *
 * @param el      {Node}   A standard DOM element
 * @param storage {Object} A temporary storage variable
 * @param klass   {String} An optional class name to apply
 */
CN.dom.storage.deactivateElement = function(el, storage, klass) {

            // Uses the default class name unless one is provided
    klass = klass || this.activeClass;

            // If there is a span inside the element
    if (el.getElementsByTagName(this.innerTag).length > 0) {

                // Gets the span element, remove it and the class name, and add back what is in storage
        var children = el.getElementsByTagName(this.innerTag);
        el.removeChild(children[0]);
        el.appendChild(storage);

        jQuery(el).removeClass(klass);

    }
};

/**
 * Queues up function calls. Pass it a string of the function name along with an array of
 * args and it will execute those functions when calling the execute() method.
 * Used for Omniture on forums to overcome problems with ordering of script includes.
 * @todo Add support for multiple queues. Any way to remove the eval from this?
 * @param  {mixed}   mixed  The object being tested
 * @return {boolean}        the result
 */
CN.functionQueue = (function() {
    var q = [];

    return {

        /**
         * Add functions to a queue to execute later.
         * @param   {string} [f] Function to call
         * @param   {array} [a] Array of args to pass to function.
         * @param {string} [qId] Not implemented but would be used to support multiple queues of functions.
         */
        addToQueue : function (f, a, qId) {
            var temp = {fName:f, args:a};
            q.push(temp);
        },

        /**
         * Executes functions in the queue.
         * @param   {string} [qId] Note implemented but would execute functions in a specific queue. Would allow for multiple queues.
         */
        execute : function (qId) {
            var l = q.length,
                i,
                tempF;

            for (i=0; i<l; i++) {
                tempF = eval(q[i].fName);
                tempF.apply(tempF, q[i].args);
            }
        }
    };
})();


/*
    INTERFACE DEFINITIONS
*/
CN.IDoc = new CN.Interface('IDoc', ['getId', 'getTitle', 'getKeywords', 'getDocType', 'hasComments', 'hasRatings']);

/*
    Equalizes MAGNET and CN for backward compatibility/interoperability
*/
var MAGNET = CN;
/* end file: cn-library*/
/* file: cn-mobile :  : http://www.wired.com/js/cn-fe-common/cn.mobile.js *//**
 * @version 1.0
 * @modified by Yufang Chang
 * @project Description
 * @handlging mobile site behaviors object[id^=flashObj]:has(param[value*="brightcove"]);
 */

if (typeof CN === 'undefined' || !CN) {
    var CN = {};
}

CN.mobile = CN.mobile || {};

CN.mobile = (function($) {
    var audioPlacementInfo = {},
        uagent = navigator.userAgent.toLowerCase(),
        videoSelectors = {
           bcBlogObject : 'object[id^=flashObj]:has(param[value*="brightcove"])',
           bcBlogEmbed  : 'embed[base*="brightcove"]'
        },




       /**
        * @method formAudioTagFromInfo
        * @private
        * @update create audio tag object
       */
       formAudioTagFromInfo = function(song, config){
            return $('<audio/>').attr({controls : 'controls',src :song }).addClass("audio");
       },


        /**
        * @method embedHTML5Audio()
        * @public
        * @embed html 5 audio
        */
        embedHTML5Audio = function(data) {
            var config = (this.config) ? this.config : this.context['config'],
                id = config.index,
                song = $("file",$(data).find('song')[0]).text(),
                caption = '<div class="caption">'+$("name",$(data).find('song')[0]).text()+'</div>',
                audioScriptTag = formAudioTagFromInfo(song, config),
                nextSiblingOfAudio = audioPlacementInfo[id],
                audioTagParent = nextSiblingOfAudio.parentNode;

               if (!nextAdjacentNode.length){
                  $(audioScriptTag).appendTo(audioPlacementInfo[id]).wrap('<div class="audio-container" />').parent().prepend(caption);
               } else {
                  $(audioScriptTag).insertBefore(audioPlacementInfo[id]).wrap('<div class="audio-container" />').parent().prepend(caption);
               }


            return this;
        },




        getXML = function(config) {
           if (!config.xml) {
              return;
           }

           $.ajax({
                url: config.xml,
                cache: true,
                context: { config: config },
                success:  embedHTML5Audio
            });

         };



    return {

    /**
        * @method init()
        * @public
        * @add mobile class to body tag
    */
    init: function() {

       if (CN.mobile.detectDevicesSupported() && CN.site.mobilecompatible !== undefined) {
         $('body').addClass('mobile');
       }

       return this;
    },


   /**
        * @method createHtml5Audios()
        * @public
        * @param id of the div
    */
    createHtml5Audios: function(id,swf) {
          var audioObj =  $("#"+id),
              nextAdjacentNode = audioObj.next(),
              parentAdjacentNode = audioObj.parent(),
              config = {
                       xml : swf.flashvars.replace("xmlFile=", ""),
                       width : swf.width,
                       height : swf.height,
                       index : id
              };

              audioPlacementInfo[id] = (!nextAdjacentNode.length) ? parentAdjacentNode : nextAdjacentNode;
              getXML(config);

        return this;
    },




    /**
        * @method removeFlashContent()
        * @public
        * @removed all flash objects on the page besides brightcove
           flash video objects
    */
    removeFlashContent: function() {

       $('body.mobile embed[type="application/x-shockwave-flash"],body.mobile object[type="application/x-shockwave-flash"]').not(videoSelectors['bcBlogObject'] + "," + videoSelectors['bcBlogEmbed']).parent().remove();
       return this;
    },


     /**
        * @method removeBlogVideos()
        * @public
        * @removed all flash objects on the page besides brightcove
           flash video objects
    */
    removeSwf: function(obj,frm) {
     obj.remove();
     $(window).trigger('CN.customEvents.swfRemoved');
     CN.debug.info('swf object is removed', [frm.src])
     return this;
    },

    /**
        * @method removeIframeFlashContent()
        * @public
        * @removed all flash objects in sandbox iframe
    */
    removeIframeFlashContent: function() {

       $("body.mobile iframe[src^='/sandbox']").each(function() {
         var frame     = $(this)[0],
             frameBody = frame.contentWindow.document.body;

             $(window).bind('CN.customEvents.swfRemoved', function() {
                CN.frame.resize(frame);
                $(window).unbind('CN.customEvents.swfRemoved');
             });

             CN.mobile.removeSwf($(frameBody.getElementsByTagName("embed"),frameBody.getElementsByTagName("object")),frame);

       });

       return this;
    },






    /**
        * @method removeBlogVideos()
        * @public
        * @removed all flash objects on the page besides brightcove
           flash video objects
    */
    removeBlogVideos: function() {
     $(videoSelectors['bcBlogObject']).each(function(index) {
          var oid = jQuery(this).attr("id");
          jQuery(this).attr("id",oid+index);
          CN.brightcove.mobile.init(jQuery(this).attr("id"));
     });

     $(videoSelectors['bcBlogEmbed']).each(function(index) {
       CN.brightcove.mobile.embedBlogVideos(jQuery(this));
     });

     return this;
    },

    /**
     * @method detectIPad
     * @public
     * @return true if iphone or ipad
     */
     detectIPad: function() {
       return (uagent.search('ipad') > -1 ? true : false);

     },

     /**
      * @method detectIPhone
      * @public
      * @return true if iphone or ipad
      */
      detectIPhone: function() {
         return(uagent.search('iphone') > -1 ? true : false);
      },

      /**
      * @method detectBlackBerry
      * @public
      * @return true if on blackberry
      */
      detectBlackBerry: function() {
          return(uagent.search('blackberry') > -1 ? true : false);

      },

       /**
      * @method detectAndroid
      * @public
      * @return true if on android
      */
      detectAndroid: function() {
          return((uagent.search('android') > -1 || uagent.search('droid') > -1) ? true : false);
      },

      detectDevicesSupported: function() {
        return(CN.mobile.detectIPhone() || CN.mobile.detectIPad() || CN.mobile.detectBlackBerry() || CN.mobile.detectAndroid());
      },

      updateOrientation: function() {
          $("body").removeClass((window.orientation == 0) ? "landscape" : "portrait").addClass((window.orientation == 0) ? "portrait" : "landscape");
      }



    };
})(jQuery);

jQuery(document).ready(function() {
 CN.mobile.init().removeBlogVideos().removeFlashContent().removeIframeFlashContent();
});








/* end file: cn-mobile*/
/* file: jquery-devices :  : /cn/runtime/wired-wp/wordpress/wp-content/mu-plugins/cn-wordpress/lib/js/jquery.devices.js *//*global jQuery */ /* for jsLint */

/**
 * jQuery.devices
 * @requires jQuery
 * @author detectmobilebrowser.com
 * @author Katherine Semel
 **/

jQuery.devices = ( function( device ) {
    return {

        mobileMax : deviceviews.mobileMax,
        tabletMax : deviceviews.tabletMax,
        /**
         * Adapted from jQuery.browser.mobile (http://detectmobilebrowser.com/)
         **/
        mobile : function() {
            return ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test( device ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( device.substr(0, 4) ) ) || ( window.innerWidth <= jQuery.devices.mobileMax );
        },

        /**
         * Check for Table Devices
         **/
        tablet : function() {
            return ( /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test( device.toLowerCase() ) || ( window.innerWidth > jQuery.devices.mobileMax && window.innerWidth < jQuery.devices.tabletMax ) );
        },

        /**
         * Get the view that matches
         **/
        getDeviceView : function( view ) {
            if ( jQuery.devices.mobile() ) {
                return 'mobile';

            } else if ( jQuery.devices.tablet() ) {
                return 'tablet';

            } else if ( ! jQuery.devices.mobile() && ! jQuery.devices.tablet() ) {
                return 'desktop';

            } else {
                return '';

            }
        },

        /**
         * Does the passed view match the current view?
         **/
        checkDeviceView : function( view ) {
            switch ( view ) {
                case 'mobile':
                    if ( jQuery.devices.mobile() ) {
                        return true;
                    } else {
                        return false;
                    }
                break;

                case 'tablet':
                    if ( jQuery.devices.tablet() ) {
                        return true;
                    } else {
                        return false;
                    }
                break;

                case 'desktop':
                    if ( ! jQuery.devices.mobile() && ! jQuery.devices.tablet() ) {
                        return true;
                    } else {
                        return false;
                    }
                break;
            }

            return false;
        },

        /**
         * Display an updating device name when playing "browser-accordian"
         *
         * @author Katherine Semel
         */
        deviceDebug : function() {
            jQuery('body').append('<div id="deviceDebugDisplay" style="position:absolute;top:0;right:0;min-width:100px;background-color: rgba(0, 0, 255, 0.3);border: 2px solid rgba(0, 0, 255, 0.5);z-index:1000;"><p class="view" style="text-align:center;padding:3px 5px;margin:0"></p></div>');
            jQuery('#deviceDebugDisplay p.view').html( jQuery.devices.getDeviceView() );

            jQuery(window).on('resize', function(){
                jQuery('#deviceDebugDisplay p.view').html( jQuery.devices.getDeviceView() );
            });
        }
    };

}( navigator.userAgent || navigator.vendor || window.opera ) );
/* end file: jquery-devices*/
/* file: cn-events :  : http://result.wired.com/js/eventTracker.js */function EventList(t){this.divId=t,this.maxURLLength=2e3,this.cacheBusterLength=20,this.baseUrl="/",this.imageUrl="images/event.gif",this.jsUrl="js/event.js",this.eventList=new Array,this.addEvent=function(t){this.eventList.push(t)},this.setBaseUrl=function(t){this.baseUrl=t},this.setImageUrl=function(t){this.imageUrl=t},this.setJsUrl=function(t){this.jsUrl=t},this.writeImageTags=function(){this.clearOldTags(),this.writeTags(this.imageUrl,this.writeIndividualImageTag)},this.writeJavaScriptTags=function(){this.clearOldTags(),this.writeTags(this.jsUrl,this.writeIndividualJavaScriptTag)},this.clearOldTags=function(){for(var e=document.getElementById(t);e.firstChild;)e.removeChild(e.firstChild)},this.writeTags=function(t,e){if(0!=this.eventList.length){for(var i=this.baseUrl+t+"?"+this.eventList[0].getQueryString("e0_"),s=1;s<this.eventList.length;++s){var n=this.eventList[s].getQueryString("e"+s+"_"),r=i+n;r.length+this.cacheBusterLength<this.maxURLLength?i=r:(e(i),i=this.baseUrl+t+"?"+n)}e(i)}},this.writeIndividualImageTag=function(e){if(e.length+this.cacheBusterLength>this.maxURLLength)throw"URL for event is longer than max URL length of "+this.maxURLLength;e=e+"rnd="+1e16*Math.random();var i=document.createElement("img");i.src=e,document.getElementById(t).appendChild(i)},this.writeIndividualJavaScriptTag=function(e){if(e.length+this.cacheBusterLength>this.maxURLLength)throw"URL for event is longer than max URL length of "+this.maxURLLength;e=e+"rnd="+1e16*Math.random();var i=document.createElement("script");i.type="text/javascript",i.src=e,document.getElementById(t).appendChild(i)}}function EventObject(t,e){this.properties=new Object,this.properties.sc=t,this.properties.ec=e,this.setProperty=function(t,e){this.properties[t]=e},this.getProperty=function(t){return this.properties[t]},this.setEnvironment=function(t){this.setProperty("env",t)},this.setActionCode=function(t){this.setProperty("ac",t)},this.setContentId=function(t){this.properties.id=t},this.setContentType=function(t){this.setProperty("ct",t)},this.setFullUrl=function(t){this.setProperty("url",t)},this.setContentTitle=function(t){this.setProperty("tit",t)},this.setLocation=function(t){this.setProperty("loc",t)},this.setSearchResultCount=function(t){this.setProperty("rc",t)},this.setAssetId=function(t){this.setProperty("asid",t)},this.setApplicationId=function(t){this.setProperty("apid",t)},this.setImgUrl=function(t){this.setProperty("imgurl",t)},this.setEvTags=function(t){this.setProperty("etags",t)},this.overrideUserId=function(t){this.setProperty("uid",t)},this.setSection=function(t){this.setProperty("sctn",t)},this.getQueryString=function(t){var e="";for(var i in this.properties)e+=t+i+"="+encodeURIComponent(this.getProperty(i))+"&";return e}}
//# sourceMappingURL=eventTracker.js.map/* end file: cn-events*/
/* file: cn-fe-stats-omniture-scode :  : /cn/runtime/wired-wp/wordpress/wp-content/config/cn-fe-stats/s_code.js *//* SiteCatalyst code version: H.26.2.
Copyright 1996-2014 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

var s = s_gi( s_account );

if ( typeof SC === 'undefined' || !SC ) {
    var SC = {};
}

SC.loggedIn = SC.loggedIn || "false";

if ( "false" === SC.loggedIn ) {
    s.loadModule("Integrate")
    s.Integrate.onLoad = function(s, m) {
        s.Integrate.add("AAM")
        s.Integrate.AAM.setVars = function(s, p) {

        };
        s.Integrate.AAM.useVars = function(s, p) {
            "function" != typeof DIL && (DIL = function(c, d) {
                var a = [],
                    e, f, g, i, m, s, q;
                "object" != typeof c && (c = {});
                m = !! c.disableDestinationPublishingIframe;
                s = c.mappings;
                q = c.uuidCookie;
                (e = d) && a.push(e + "");
                f = c.partner;
                if (!f || "string" != typeof f) return e = "DIL partner is invalid or not specified in initConfig", DIL.errorModule.handleError({
                    name: "error",
                    message: e,
                    filename: "dil.js"
                }), Error(e);
                e = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
                if ((g = c.containerNSID) || "number" == typeof g) g = parseInt(g,
                    10), !isNaN(g) && 0 <= g && (e = "");
                e && (g = 0, a.push(e), e = "");
                i = DIL.getDil(f, g);
                if (i instanceof DIL && i.api.getPartner() == f && i.api.getContainerNSID() == g) return i;
                if (this instanceof DIL) DIL.registerDil(this, f, g);
                else return new DIL(c, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + f + " and containerNSID = " + g);
                var r = {
                    IS_HTTPS: "https:" == document.location.protocol,
                    POST_MESSAGE_ENABLED: !! window.postMessage
                }, x = {}, k = {}, j = {
                        firingQueue: [],
                        fired: [],
                        firing: !1,
                        errored: [],
                        reservedKeys: {
                            sids: !0,
                            pdata: !0,
                            logdata: !0,
                            callback: !0,
                            postCallbackFn: !0,
                            useImageRequest: !0
                        },
                        callbackPrefix: "demdexRequestCallback",
                        firstRequestHasFired: !1,
                        useJSONP: !0,
                        abortRequests: !1,
                        num_of_jsonp_responses: 0,
                        num_of_jsonp_errors: 0,
                        num_of_img_responses: 0,
                        num_of_img_errors: 0,
                        registerRequest: function(b) {
                            var h = this.firingQueue;
                            "object" == typeof b && h.push(b);
                            !this.firing && h.length && (b = h.shift(), w.fireRequest(b), !this.firstRequestHasFired && "script" == b.tag && (this.firstRequestHasFired = !0))
                        }
                    };
                i = function() {
                    var b = "http://fast.";
                    r.IS_HTTPS &&
                        (b = !0 === c.iframeAkamaiHTTPS ? "https://fast." : "https://");
                    return b + f + ".demdex.net/dest3.html?d_nsid=" + g + "#" + encodeURIComponent(document.location.href)
                };
                var t = {
                    THROTTLE_START: 3E4,
                    throttleTimerSet: !1,
                    id: "destination_publishing_iframe_" + f + "_" + g,
                    url: i(),
                    iframe: null,
                    iframeHasLoaded: !1,
                    sendingMessages: !1,
                    messages: [],
                    messageSendingInterval: r.POST_MESSAGE_ENABLED ? 15 : 100,
                    jsonProcessed: [],
                    attachIframe: function() {
                        var b = this,
                            h = document.createElement("iframe");
                        h.id = this.id;
                        h.style.cssText = "display: none; width: 0; height: 0;";
                        h.src = this.url;
                        l.addListener(h, "load", function() {
                            b.iframeHasLoaded = !0;
                            b.requestToProcess()
                        });
                        document.body.appendChild(h);
                        this.iframe = h
                    },
                    requestToProcess: function(b) {
                        var h = this;
                        b && !n.isEmptyObject(b) && this.process(b);
                        this.iframeHasLoaded && (this.messages.length && !this.sendingMessages) && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                            h.messageSendingInterval = r.POST_MESSAGE_ENABLED ? 15 : 150
                        }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
                    },
                    process: function(b) {
                        var h =
                            this.messages,
                            o = encodeURIComponent,
                            p, c, a, e, d;
                        if ((p = b.dests) && p instanceof Array && (c = p.length))
                            for (a = 0; a < c; a++) e = p[a], e = [o("dests"), o(e.id || ""), o(e.y || ""), o(e.c || "")], h.push(e.join("|"));
                        if ((p = b.ibs) && p instanceof Array && (c = p.length))
                            for (a = 0; a < c; a++) e = p[a], e = [o("ibs"), o(e.id || ""), o(e.tag || ""), l.encodeAndBuildRequest(e.url || [], ","), o(e.ttl || "")], h.push(e.join("|"));
                        if ((p = b.dpcalls) && p instanceof Array && (c = p.length))
                            for (a = 0; a < c; a++) e = p[a], d = e.callback || {}, d = [d.obj || "", d.fn || "", d.key || "", d.tag || "", d.url ||
                                ""
                            ], e = [o("dpm"), o(e.id || ""), o(e.tag || ""), l.encodeAndBuildRequest(e.url || [], ","), o(e.ttl || ""), l.encodeAndBuildRequest(d, ",")], h.push(e.join("|"));
                        this.jsonProcessed.push(b)
                    },
                    sendMessages: function() {
                        var b = this;
                        this.messages.length ? (DIL.xd.postMessage(b.messages.shift(), b.url, b.iframe.contentWindow), setTimeout(function() {
                            b.sendMessages()
                        }, this.messageSendingInterval)) : this.sendingMessages = !1
                    }
                }, y = {
                        traits: function(b) {
                            n.isValidPdata(b) && (k.sids instanceof Array || (k.sids = []), l.extendArray(k.sids, b));
                            return this
                        },
                        pixels: function(b) {
                            n.isValidPdata(b) && (k.pdata instanceof Array || (k.pdata = []), l.extendArray(k.pdata, b));
                            return this
                        },
                        logs: function(b) {
                            n.isValidLogdata(b) && ("object" != typeof k.logdata && (k.logdata = {}), l.extendObject(k.logdata, b));
                            return this
                        },
                        customQueryParams: function(b) {
                            n.isEmptyObject(b) || l.extendObject(k, b, j.reservedKeys);
                            return this
                        },
                        signals: function(b, h) {
                            var a, e = b;
                            if (!n.isEmptyObject(e)) {
                                if (h && "string" == typeof h)
                                    for (a in e = {}, b) b.hasOwnProperty(a) && (e[h + a] = b[a]);
                                l.extendObject(k, e, j.reservedKeys)
                            }
                            return this
                        },
                        result: function(b) {
                            "function" == typeof b && (k.callback = b);
                            return this
                        },
                        afterResult: function(b) {
                            "function" == typeof b && (k.postCallbackFn = b);
                            return this
                        },
                        useImageRequest: function() {
                            k.useImageRequest = !0;
                            return this
                        },
                        clearData: function() {
                            k = {};
                            return this
                        },
                        submit: function() {
                            w.submitRequest(k);
                            k = {};
                            return this
                        },
                        getPartner: function() {
                            return f
                        },
                        getContainerNSID: function() {
                            return g
                        },
                        getEventLog: function() {
                            return a
                        },
                        getState: function() {
                            var b = {}, h = {};
                            l.extendObject(b, j, {
                                callbackPrefix: !0,
                                useJSONP: !0,
                                registerRequest: !0
                            });
                            l.extendObject(h, t, {
                                attachIframe: !0,
                                requestToProcess: !0,
                                process: !0,
                                sendMessages: !0
                            });
                            return {
                                pendingRequest: k,
                                otherRequestInfo: b,
                                destinationPublishingInfo: h
                            }
                        }
                    }, w = {
                        submitRequest: function(b) {
                            j.registerRequest(w.createQueuedRequest(b));
                            return !0
                        },
                        createQueuedRequest: function(b) {
                            var h, e = b.callback,
                                c = "img";
                            if (!n.isEmptyObject(s)) {
                                var d, f, g;
                                for (d in s)
                                    if (s.hasOwnProperty(d) && (f = s[d], !(null == f || "" === f) && d in b && !(f in b) && !(f in j.reservedKeys))) g = b[d], null == g || "" === g || (b[f] = g)
                            }
                            n.isValidPdata(b.sids) || (a.push("requestProcs.createQueuedRequest(): sids is not valid, converting to an empty array"),
                                b.sids = []);
                            n.isValidPdata(b.pdata) || (a.push("requestProcs.createQueuedRequest(): pdata is not valid, converting to an empty array"), b.pdata = []);
                            n.isValidLogdata(b.logdata) || (a.push("requestProcs.createQueuedRequest(): logdata is not valid, converting to an empty object"), b.logdata = {});
                            b.logdataArray = l.convertObjectToKeyValuePairs(b.logdata, "=", !0);
                            b.logdataArray.push("_ts=" + (new Date).getTime());
                            "function" != typeof e && (e = this.defaultCallback);
                            if (j.useJSONP = !b.useImageRequest || "boolean" != typeof b.useImageRequest) c =
                                "script", h = j.callbackPrefix + (new Date).getTime();
                            return {
                                tag: c,
                                src: w.makeRequestSrc(b, h),
                                internalCallbackName: h,
                                callbackFn: e,
                                postCallbackFn: b.postCallbackFn,
                                useImageRequest: b.useImageRequest,
                                requestData: b
                            }
                        },
                        defaultCallback: function(b) {
                            var h, e, a, c, d, f, g, r, i;
                            if ((h = b.stuff) && h instanceof Array && (e = h.length))
                                for (a = 0; a < e; a++)
                                    if ((c = h[a]) && "object" == typeof c)
                                        if (d = c.cn, f = c.cv, g = c.ttl || 0, r = c.dmn || "." + document.domain, i = c.type, d && (f || "number" == typeof f)) "var" != i && (g = parseInt(g, 10)) && !isNaN(g) && l.setCookie(d,
                                            f, 1440 * g, "/", r, !1), x[d] = f;
                            h = b.uuid;
                            if ("string" == typeof h && h.length && !n.isEmptyObject(q)) {
                                e = q.path;
                                if ("string" != typeof e || !e.length) e = "/";
                                a = parseInt(q.days, 10);
                                isNaN(a) && (a = 100);
                                l.setCookie(q.name || "aam_did", h, 1440 * a, e, q.domain || "." + document.domain, !0 === q.secure)
                            }!m && !j.abortRequests && t.requestToProcess(b)
                        },
                        makeRequestSrc: function(b, h) {
                            b.sids = n.removeEmptyArrayValues(b.sids || []);
                            b.pdata = n.removeEmptyArrayValues(b.pdata || []);
                            var a = l.encodeAndBuildRequest(b.sids, ","),
                                e = l.encodeAndBuildRequest(b.pdata,
                                    ","),
                                c = (b.logdataArray || []).join("&");
                            delete b.logdataArray;
                            var d = r.IS_HTTPS ? "https://" : "http://",
                                i;
                            i = [];
                            var m, k;
                            for (m in b)!(m in j.reservedKeys) && b.hasOwnProperty(m) && (k = b[m], m = encodeURIComponent(m), k instanceof Array ? i.push(m + "=" + l.encodeAndBuildRequest(k, ",")) : i.push(m + "=" + encodeURIComponent(k)));
                            i = i.length ? "&" + i.join("&") : "";
                            return d + f + ".demdex.net/event?d_nsid=" + g + (a.length ? "&d_sid=" + a : "") + (e.length ? "&d_px=" + e : "") + (c.length ? "&d_ld=" + encodeURIComponent(c) : "") + i + (j.useJSONP ? "&d_rtbd=json&d_jsonv=" +
                                DIL.jsonVersion + "&d_dst=1&d_cts=1&d_cb=" + (h || "") : "")
                        },
                        fireRequest: function(b) {
                            "img" == b.tag ? this.fireImage(b) : "script" == b.tag && this.fireScript(b)
                        },
                        fireImage: function(b) {
                            var h, c;
                            j.abortRequests || (j.firing = !0, h = new Image(0, 0), h.onload = function() {
                                    j.firing = !1;
                                    j.fired.push(b);
                                    j.num_of_img_responses++;
                                    j.registerRequest()
                                }, c = function(h) {
                                    e = "imgAbortOrErrorHandler received the event of type " + h.type;
                                    a.push(e);
                                    j.abortRequests = !0;
                                    j.firing = !1;
                                    j.errored.push(b);
                                    j.num_of_img_errors++;
                                    j.registerRequest()
                                }, h.addEventListener ?
                                (h.addEventListener("error", c, !1), h.addEventListener("abort", c, !1)) : h.attachEvent && (h.attachEvent("onerror", c), h.attachEvent("onabort", c)), h.src = b.src)
                        },
                        fireScript: function(b) {
                            var h = this,
                                c, d, g = b.src,
                                i = b.postCallbackFn,
                                m = "function" == typeof i;
                            j.abortRequests || (j.firing = !0, window[b.internalCallbackName] = function(h) {
                                try {
                                    h || (h = {});
                                    var c = b.callbackFn;
                                    j.firing = !1;
                                    j.fired.push(b);
                                    j.num_of_jsonp_responses++;
                                    c(h);
                                    m && i(h)
                                } catch (d) {
                                    d.message = "DIL jsonp callback caught error with message " + d.message;
                                    e = d.message;
                                    a.push(e);
                                    d.filename = d.filename || "dil.js";
                                    d.partner = f;
                                    DIL.errorModule.handleError(d);
                                    try {
                                        c({
                                            error: d.name + "|" + d.message
                                        }), m && i({
                                            error: d.name + "|" + d.message
                                        })
                                    } catch (g) {}
                                } finally {
                                    j.registerRequest()
                                }
                            }, d = document.createElement("script"), d.addEventListener && d.addEventListener("error", function(c) {
                                e = "jsonp script tag error listener received the event of type " + c.type + " with src " + g;
                                h.handleScriptError(e, b)
                            }, !1), d.type = "text/javascript", d.src = g, c = document.getElementsByTagName("script")[0], c.parentNode.insertBefore(d,
                                c))
                        },
                        handleScriptError: function(b, h) {
                            a.push(b);
                            j.abortRequests = !0;
                            j.firing = !1;
                            j.errored.push(h);
                            j.num_of_jsonp_errors++;
                            j.registerRequest()
                        }
                    }, n = {
                        isValidPdata: function(b) {
                            return b instanceof Array && this.removeEmptyArrayValues(b).length ? !0 : !1
                        },
                        isValidLogdata: function(b) {
                            return !this.isEmptyObject(b)
                        },
                        isEmptyObject: function(b) {
                            if ("object" != typeof b) return !0;
                            for (var h in b)
                                if (b.hasOwnProperty(h)) return !1;
                            return !0
                        },
                        removeEmptyArrayValues: function(b) {
                            for (var h = 0, c = b.length, a, e = [], h = 0; h < c; h++) a = b[h], "undefined" !=
                                typeof a && null != a && e.push(a);
                            return e
                        }
                    }, u;
                u = document.addEventListener ? function(b, c, a) {
                    b.addEventListener(c, function(b) {
                        "function" == typeof a && a(b)
                    }, !1)
                } : document.attachEvent ? function(b, c, a) {
                    b.attachEvent("on" + c, function(b) {
                        "function" == typeof a && a(b)
                    })
                } : void 0;
                var l = {
                    addListener: u,
                    convertObjectToKeyValuePairs: function(b, c, a) {
                        var e = [],
                            c = c || "=",
                            d, f;
                        for (d in b) f = b[d], "undefined" != typeof f && null != f && e.push(d + c + (a ? encodeURIComponent(f) : f));
                        return e
                    },
                    encodeAndBuildRequest: function(b, c) {
                        return this.map(b,
                            function(b) {
                                return encodeURIComponent(b)
                            }).join(c)
                    },
                    map: function(b, c) {
                        if (Array.prototype.map) return b.map(c);
                        if (void 0 === b || null === b) throw new TypeError;
                        var a = Object(b),
                            e = a.length >>> 0;
                        if ("function" !== typeof c) throw new TypeError;
                        for (var d = Array(e), f = 0; f < e; f++) f in a && (d[f] = c.call(c, a[f], f, a));
                        return d
                    },
                    filter: function(b, c) {
                        if (!Array.prototype.filter) {
                            if (void 0 === b || null === b) throw new TypeError;
                            var a = Object(b),
                                e = a.length >>> 0;
                            if ("function" !== typeof c) throw new TypeError;
                            for (var d = [], f = 0; f < e; f++)
                                if (f in
                                    a) {
                                    var g = a[f];
                                    c.call(c, g, f, a) && d.push(g)
                                }
                            return d
                        }
                        return b.filter(c)
                    },
                    getCookie: function(b) {
                        var b = b + "=",
                            c = document.cookie.split(";"),
                            a, e, d;
                        a = 0;
                        for (e = c.length; a < e; a++) {
                            for (d = c[a];
                                " " == d.charAt(0);) d = d.substring(1, d.length);
                            if (0 == d.indexOf(b)) return decodeURIComponent(d.substring(b.length, d.length))
                        }
                        return null
                    },
                    setCookie: function(b, c, a, d, e, f) {
                        var g = new Date;
                        a && (a *= 6E4);
                        document.cookie = b + "=" + encodeURIComponent(c) + (a ? ";expires=" + (new Date(g.getTime() + a)).toUTCString() : "") + (d ? ";path=" + d : "") + (e ? ";domain=" +
                            e : "") + (f ? ";secure" : "")
                    },
                    extendArray: function(b, a) {
                        return b instanceof Array && a instanceof Array ? (Array.prototype.push.apply(b, a), !0) : !1
                    },
                    extendObject: function(b, a, c) {
                        var d;
                        if ("object" == typeof b && "object" == typeof a) {
                            for (d in a)
                                if (a.hasOwnProperty(d) && (n.isEmptyObject(c) || !(d in c))) b[d] = a[d];
                            return !0
                        }
                        return !1
                    }
                };
                "error" == f && 0 == g && l.addListener(window, "load", function() {
                    DIL.windowLoaded = !0
                });
                u = function() {
                    m || setTimeout(function() {
                        j.firstRequestHasFired || y.submit()
                    }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
                    !m && !j.abortRequests && t.attachIframe()
                };
                var z = document,
                    v = c.iframeAttachmentDelay;
                "error" != f && (DIL.windowLoaded ? u() : "complete" != z.readyState && "loaded" != z.readyState ? l.addListener(window, "load", u) : DIL.isAddedPostWindowLoadWasCalled ? l.addListener(window, "load", u) : (v = "number" == typeof v ? parseInt(v, 10) : 0, 0 > v && (v = 0), setTimeout(u, v || DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));
                this.api = y;
                this.getStuffedVariable = function(b) {
                    var a = x[b];
                    !a && "number" != typeof a && (a = l.getCookie(b), !a && "number" != typeof a &&
                        (a = ""));
                    return a
                };
                this.validators = n;
                this.helpers = l;
                window._unit_tests && (this.constants = r, this.pendingRequest = k, this.requestController = j, this.setDestinationPublishingUrl = i, this.destinationPublishing = t, this.requestProcs = w, this.log = a)
            }, function() {
                var c = document,
                    d;
                null == c.readyState && c.addEventListener && (c.readyState = "loading", c.addEventListener("DOMContentLoaded", d = function() {
                    c.removeEventListener("DOMContentLoaded", d, !1);
                    c.readyState = "complete"
                }, !1))
            }(), DIL.extendStaticPropertiesAndMethods = function(c) {
                var d;
                if ("object" == typeof c)
                    for (d in c) c.hasOwnProperty(d) && (this[d] = c[d])
            }, DIL.extendStaticPropertiesAndMethods({
                version: "2.6",
                jsonVersion: 1,
                constants: {
                    TIME_TO_DEFAULT_REQUEST: 50,
                    TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT: 500
                },
                windowLoaded: !1,
                dils: {},
                isAddedPostWindowLoadWasCalled: !1,
                isAddedPostWindowLoad: function(c) {
                    this.isAddedPostWindowLoadWasCalled = !0;
                    this.windowLoaded = "function" == typeof c ? !! c() : "boolean" == typeof c ? c : !0
                },
                create: function(c) {
                    try {
                        return new DIL(c)
                    } catch (d) {
                        return (new Image(0, 0)).src = "http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D" +
                            (new Date).getTime(), Error("Error in attempt to create DIL instance with DIL.create()")
                    }
                },
                registerDil: function(c, d, a) {
                    d = d + "$" + a;
                    d in this.dils || (this.dils[d] = c)
                },
                getDil: function(c, d) {
                    var a;
                    "string" != typeof c && (c = "");
                    d || (d = 0);
                    a = c + "$" + d;
                    return a in this.dils ? this.dils[a] : Error("The DIL instance with partner = " + c + " and containerNSID = " + d + " was not found")
                },
                dexGetQSVars: function(c, d, a) {
                    d = this.getDil(d, a);
                    return d instanceof this ? d.getStuffedVariable(c) : ""
                },
                xd: {
                    postMessage: function(c, d, a) {
                        var e = 1;
                        d &&
                            (window.postMessage ? a.postMessage(c, d.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : d && (a.location = d.replace(/#.*$/, "") + "#" + +new Date + e+++"&" + c))
                    }
                }
            }), DIL.errorModule = function() {
                var c = DIL.create({
                    partner: "error",
                    containerNSID: 0,
                    disableDestinationPublishingIframe: !0
                }),
                    d = {
                        harvestererror: 14138,
                        destpuberror: 14139,
                        dpmerror: 14140,
                        generalerror: 14137,
                        error: 14137,
                        noerrortypedefined: 15021,
                        evalerror: 15016,
                        rangeerror: 15017,
                        referenceerror: 15018,
                        typeerror: 15019,
                        urierror: 15020
                    };
                return {
                    handleError: function(a) {
                        var e = a.name ?
                            (new String(a.name)).toLowerCase() : "",
                            f = [],
                            a = {
                                name: e,
                                filename: a.filename ? a.filename + "" : "",
                                partner: a.partner ? a.partner + "" : "no_partner",
                                site: a.site ? a.site + "" : document.location.href,
                                message: a.message ? a.message + "" : ""
                            };
                        f.push(e in d ? d[e] : d.noerrortypedefined);
                        c.api.pixels(f).logs(a).useImageRequest().submit()
                    },
                    pixelMap: d
                }
            }());
            DIL.tools = {};
            DIL.tools.getSearchReferrer = function(c, d) {
                var a = DIL.getDil("error"),
                    e = DIL.tools.decomposeURI(c || document.referrer),
                    f = "",
                    g = "",
                    i = {
                        queryParam: "q"
                    }, f = a.helpers.filter(["object" == typeof d ? d : {}, {
                        hostPattern: /aol\./
                    }, {
                        hostPattern: /ask\./
                    }, {
                        hostPattern: /bing\./
                    }, {
                        hostPattern: /google\./
                    }, {
                        hostPattern: /yahoo\./,
                        queryParam: "p"
                    }], function(a) {
                        return !(!a.hasOwnProperty("hostPattern") || !e.hostname.match(a.hostPattern))
                    }).shift();
                return !f ? {
                    valid: !1,
                    name: "",
                    keywords: ""
                } : {
                    valid: !0,
                    name: e.hostname,
                    keywords: (a.helpers.extendObject(i,
                        f), g = i.queryPattern ? (f = ("" + e.search).match(i.queryPattern)) ? f[1] : "" : e.uriParams[i.queryParam], decodeURIComponent(g || "").replace(/\+|%20/g, " "))
                }
            };
            DIL.tools.decomposeURI = function(c) {
                var d = DIL.getDil("error"),
                    a = document.createElement("a");
                a.href = c || document.referrer;
                var c = a.hash,
                    e = a.host.split(":").shift(),
                    f = a.hostname,
                    g = a.href,
                    i = a.pathname.replace(/^\//, ""),
                    m = a.protocol,
                    s = a.search,
                    q = {}, a = a.search.replace(/^(\/|\?)?|\/$/g, "");
                d.helpers.map(a.split("&"), function(a) {
                    a = a.split("=");
                    q[a.shift()] = a.shift()
                });
                return {
                    hash: c,
                    host: e,
                    hostname: f,
                    href: g,
                    pathname: i,
                    protocol: m,
                    search: s,
                    uriParams: q
                }
            };
            DIL.tools.getMetaTags = function() {
                var c = {}, d = document.getElementsByTagName("meta"),
                    a, e, f, g, i;
                a = 0;
                for (f = arguments.length; a < f; a++)
                    if (g = arguments[a], null !== g)
                        for (e = 0; e < d.length; e++)
                            if (i = d[e], i.name == g) {
                                c[g] = i.content;
                                break
                            }
                return c
            };
            DIL.modules = {};
            DIL.modules.siteCatalyst = {
                init: function(c, d, a) {
                    try {
                        var e = {
                            name: "DIL Site Catalyst Module Error"
                        }, f;
                        if (!(d instanceof DIL)) return f = "dilInstance is not a valid instance of DIL", e.message = f, DIL.errorModule.handleError(e), f;
                        e.partner = d.api.getPartner();
                        if ("object" != typeof c) return f = "siteCatalystReportingSuite is not an object", e.message = f, DIL.errorModule.handleError(e), f;
                        if ("function" != typeof c.m_i || "function" != typeof c.loadModule) return f = "s.m_i is not a function or s.loadModule is not a function",
                        e.message = f, DIL.errorModule.handleError(e), f;
                        var g = c.m_i("DIL");
                        if ("object" != typeof g) return f = "m is not an object", e.message = f, DIL.errorModule.handleError(e), f;
                        g.trackVars = this.constructTrackVars(a);
                        g.d = 0;
                        g._t = function() {
                            var a, c, d = "," + this.trackVars + ",",
                                g = this.s,
                                i, k = [];
                            i = [];
                            var j = {}, t = !1;
                            if ("object" != typeof g || !(g.va_t instanceof Array)) return f = "Error in m._t function: s is not an object or s.va_t is not an array", e.message = f, DIL.errorModule.handleError(e), f;
                            if (this.d) {
                                if (g.lightProfileID)(a = g.lightTrackVars) &&
                                    (a = "," + a + "," + g.vl_mr + ",");
                                else if (g.pe || g.linkType) a = g.linkTrackVars, g.pe && (c = g.pe.substring(0, 1).toUpperCase() + g.pe.substring(1), g[c] && (a = g[c].trackVars)), a && (a = "," + a + "," + g.vl_l + "," + g.vl_l2 + ",");
                                if (a) {
                                    c = 0;
                                    for (k = a.split(","); c < k.length; c++) 0 <= d.indexOf("," + k[c] + ",") && i.push(k[c]);
                                    i.length && (d = "," + i.join(",") + ",")
                                }
                                i = 0;
                                for (c = g.va_t.length; i < c; i++) a = g.va_t[i], 0 <= d.indexOf("," + a + ",") && (null != g[a] && "" !== g[a]) && (j[a] = g[a], t = !0);
                                t && this.d.api.signals(j, "c_").submit()
                            }
                        };
                        g.setup = function() {
                            this.d = d
                        };
                        c.loadModule("DIL");
                        if ("object" != typeof c.DIL || "function" != typeof c.DIL.setup) return f = "s.DIL is not an object or s.DIL.setup is not a function", e.message = f, DIL.errorModule.handleError(e), f;
                        c.DIL.setup()
                    } catch (i) {
                        return i.message = "DIL Site Catalyst module caught error with message " + i.message, d instanceof DIL && (i.partner = d.api.getPartner()), DIL.errorModule.handleError(i), i.message
                    }
                },
                constructTrackVars: function(c) {
                    var d = [],
                        a, e, f, g, i;
                    if ("object" == typeof c) {
                        a = c.names;
                        if (a instanceof Array && (f = a.length))
                            for (e = 0; e < f; e++) g =
                                a[e], "string" == typeof g && g.length && d.push(g);
                        c = c.iteratedNames;
                        if (c instanceof Array && (f = c.length))
                            for (e = 0; e < f; e++)
                                if (a = c[e], "object" == typeof a && (g = a.name, i = parseInt(a.maxIndex, 10), "string" == typeof g && g.length && !isNaN(i) && 0 <= i))
                                    for (a = 0; a <= i; a++) d.push(g + a);
                        if (d.length) return d.join(",")
                    }
                    return this.constructTrackVars({
                        names: "pageName channel campaign products events pe pev1 pev2 pev3".split(" "),
                        iteratedNames: [{
                            name: "prop",
                            maxIndex: 75
                        }, {
                            name: "eVar",
                            maxIndex: 75
                        }]
                    })
                }
            };
            //v2.7
            // Get the in Site Catalyst object instance
            var _scObj = window['s'];
            // create instance of DIL
            var scDil = DIL.create({
                partner: "condenast",
                uuidCookie: {
                    name: 'aam_uuid',
                    days: 30
                }
            });
            DIL.modules.siteCatalyst.init(_scObj, scDil);
            (function() {
                if (typeof _scObj.prop52 != 'undefined' && "" !== _scObj.prop52) {
                    var getCookie = DIL.getDil('condenast').helpers.getCookie; // Save DILs getCookie function
                    var bbp = _scObj.prop52; //getting needed id
                    queryString = null;
                    if (!navigator.cookieEnabled || getCookie('_dx') || !bbp) {
                        return;
                    }
                    queryString = 'dpid=544&dpuuid=' + bbp;
                    new Image().src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//dpm.demdex.net/ibs:' + queryString;
                    document.cookie = '_dx=1;domain=' + (function() {
                        var domainSplit = document.domain.split('.'),
                            l = domainSplit.length;
                        return '.' + domainSplit[l - 2] + '.' + domainSplit[l - 1];
                    })() + ';path=/;expires=' + new Date(new Date().getTime() + 86400000).toUTCString();
                }

            })();

            (function() {
                var b = DIL.getDil("condenast").helpers.getCookie("s_vi");

                if (!b) return;
                b = b.split("|")[1].split("[")[0];
                var c = null;
                if (!navigator.cookieEnabled || DIL.getDil("condenast").helpers.getCookie("_dx_sc") || !b) {
                    return
                }
                c = "dpid=772&dpuuid=" + b;

                var img = new Image().src = (document.location.protocol == "https:" ? "https:" : "http:") + "//dpm.demdex.net/ibs:" + c;
                document.cookie = "_dx_sc=1;domain=" + (function() {
                    var d = document.domain.split("."),
                        a = d.length;
                    return "." + d[a - 2] + "." + d[a - 1]
                })() + ";path=/;expires=" + new Date(new Date().getTime() + 86400000).toUTCString();
            })();

        };





    }

    /****************************** MODULES *****************************/
    /* Module: Integrate */
    s.m_Integrate_c = "var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p" + ".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m." + "l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func" + "tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000" + "000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s." + "'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}" + "}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay" + "=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&" + "&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m" + "=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.s" + "cript=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
    s.m_i("Integrate");
} // end if SC.loggedIn

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '',
    s_objectID;

function s_gi(un, pg, ss) {
    var c = "s.version='H.26.2';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\" + "\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur" + "n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret" + "urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(" + "x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su" + "bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+" + "','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00" + "'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc" + "ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r" + ";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(" + "0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'" + ",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi" + "bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil" + "e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")" + ";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li" + "nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam" + "e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'" + ".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<" + "0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6" + "0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''" + ");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i" + ";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc" + "f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s" + ".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0" + ";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return " + "s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo" + "r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin" + "gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLow" + "erCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.vers" + "ion+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if" + "(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]" + "=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[" + "imn];if(!im)im=s.wd[imn]=new Image;im.alt=\"\";im.s_l=0;im.onload=im.onerror=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!" + "s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window" + ".s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e" + ".getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'" + "+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p," + "l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='ht" + "tps://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=" + "',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'" + "+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextDat" + "a\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(n" + "fn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){n" + "k=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLi" + "ghtData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(s" + "p=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return " + "qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe" + "=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if" + "(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv|" + "|fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>25" + "5){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(" + "k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){" + "q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';e" + "lse if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else" + " if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';el" + "se if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextDa" + "ta'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProf" + "ileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if" + "(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return " + "qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substr" + "ing(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.li" + "nkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.tra" + "ckExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new F" + "unction('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if" + "(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs," + "a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;retu" + "rn}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.t" + "agName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.targ" + "et.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEv" + "ent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e" + ".altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preven" + "tDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>" + "k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.subst" + "ring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t=''" + ";if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.pr" + "otocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');" + "x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s" + "_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un." + "indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','r" + "q',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;" + "return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object." + "prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'" + "='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.oncl" + "ick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.i" + "smac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('F" + "irefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function" + "(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))ret" + "urn 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring" + "(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCas" + "e();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa" + "=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.s" + "ubstring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd" + ".s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r" + "=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_i" + "l['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m" + "=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_" + "'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m" + "[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var " + "s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){" + "i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'ht" + "tp:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e" + "?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','va" + "r e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i" + "=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=" + "o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData" + "\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il" + "['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s." + "dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dl" + "l.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;" + "i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e)" + ")fid=0;return fid};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+se" + "d,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1," + "q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y" + "':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach" + "){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8." + "2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth" + ";bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeig" + "ht;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var " + "e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexO" + "f(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}i" + "f(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l" + ";if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!" + "n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('" + ".s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h)" + ";if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.da" + "taset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking" + "){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(o" + "cb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(" + "oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('obje" + "ctID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if" + "(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=" + "''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkNam" + "e=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lig" + "htProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t" + ".tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]" + "){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y" + "[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLower" + "Case().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape" + "6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscap" + "e');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.n" + "s6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4" + "%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet" + ",visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfile" + "s,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';" + "s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;" + "s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,jav" + "aEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingS" + "erverBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLi" + "nks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.v" + "l_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=functi" + "on(un){s_gi(un,1).t()}}",
        w = window,
        l = w.s_c_il,
        n = navigator,
        u = n.userAgent,
        v = n.appVersion,
        e = v.indexOf('MSIE '),
        m = u.indexOf('Netscape6/'),
        a, i, j, x, s;
    if (un) {
        un = un.toLowerCase();
        if (l)
            for (j = 0; j < 2; j++)
                for (i = 0; i < l.length; i++) {
                    s = l[i];
                    x = s._c;
                    if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) {
                        if (s.sa) s.sa(un);
                        if (x == 's_c') return s
                    } else s = 0
                }
    }
    w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" + "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" + "a");
    w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    c = s_d(c);
    if (e > 0) {
        a = parseInt(i = v.substring(e + 5));
        if (a > 3) a = parseFloat(i)
    } else if (m > 0) a = parseFloat(u.substring(m + 10));
    else a = parseFloat(v); if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c);
    if (!s) {
        s = new Object;
        if (!w.s_c_in) {
            w.s_c_il = new Array;
            w.s_c_in = 0
        }
        s._il = w.s_c_il;
        s._in = w.s_c_in;
        s._il[s._in] = s;
        w.s_c_in++;
    }
    s._c = 's_c';
    (new Function("s", "un", "pg", "ss", c))(s, un, pg, ss);
    return s
}

function s_giqf() {
    var w = window,
        q = w.s_giq,
        i, t, s;
    if (q)
        for (i = 0; i < q.length; i++) {
            t = q[i];
            s = s_gi(t.oun);
            s.sa(t.un);
            s.setTagContainer(t.tagContainerName)
        }
    w.s_giq = 0
}
s_giqf()
/* end file: cn-fe-stats-omniture-scode*/
/* file: cn-fe-stats-omniture :  : /cn/runtime/wired-wp/wordpress/wp-content/config/cn-fe-stats/omniture.js *//**
 IMPORTANT :

 variables "platformEnvironment, s_account, server, secureServer, internalFilters, httpStatus" declared in omnitureInfo.jsp file

 **/
/*global CN */
/**
 * @namespace Omnitures 's' object
 */
var s;

/**
 * @namespace CN object
 * @description Conde Nast Digital namespace.
 * @function
 */
if (typeof CN === 'undefined' || !CN) {
    var CN = {};
}

/**
 * @namespace CN.stats object
 * @description stats namespace
 * @function
 */
CN.stats = CN.stats || {};

/**
 * @namespace CN.stats.omniture object
 * @description Omniture tracking singleton. Sets props, evars, and events.
 * @requires cn.js, s_code.js
 * @globals s_code,s
 * @function
 * History: 1.0.0 04.12.2010 Added version number.
 1.0.1 05.11.2010 Returned this to allow chaining.
 1.0.2 05.25.2010 Added ability scrub urls.
 1.0.3 06.08.2010 Added setSearchFacets to set sprop15.
 1.0.4 06.20.2010 Updated scrub function so it also modifies hier and page section vars.
 1.0.5 03.18.2011 Updated doPlugins to only call setDirectories once, otherwise on 3rd parties, we keep
 appending the subdomain shifting.
 */

CN.stats.omniture = (function() {
    /**
     * Current path array.
     * @memberOf CN.stats.omniture
     * @private
     * @type    array
     */
    var directories = CN.url.path();

    /**
     * URL scrub rules.
     * @memberOf CN.stats.omniture
     * @private
     * @type array
     */
    var scrubRules = [];


    /**
     * Additional properties to register with custom link tracking. Added to Omniture's s.linkTrackVars.
     * @memberOf CN.stats.omniture
     * @private
     * @type array
     */
    var savedLinkTrackVars = ['events'];
    var _platformEnvironment = platformEnvironment;

    var _temp_domain_var = document.location.hostname.replace('origin.', '').replace('stag.', '').split('.');
    var _ranOnce = false; // track if this has run once.

    /**
     * If the current location is a subdomain that is not men or www then prepend that subdomain value to the directories variable
     * Used for 3rd party subdomains, ecom and forums tracking mostly
     * Sets the directories var.
     * @memberOf    CN.stats.omniture
     * @params dirs array array of directories
     * @private
     */
    function setDirectories(dirs) {
        directories = dirs;
        if ((_platformEnvironment !== 'development' || document.location.hostname.match('stag-|stag.') !== null) && _temp_domain_var.length !== 2 && _temp_domain_var[0].match(/^men$|^www$|^magazine$|^stag$|^stag-|^secure/) === null) {
            directories = new Array('sd_' + _temp_domain_var[0]).concat(dirs);
            if (directories[directories.length - 1] === '') {
                directories.pop();
            }
        }
    }

    function GoogleSSCounter() {
        /*Google Secure Search Counter*/
        var kr = document.referrer, kk = s.getQueryParam("q", "", kr), ks = s.getQueryParam("esrc", "", kr);
        if (kr.indexOf("www.google.com") && !kk && ks == "s") {
            var ksr = kr.split("q="), kq = "q=Google%20Secure%20Search";
            s.referrer = ksr[0] + kq + ksr[1]
        }
        ;
    }

    var s_account = CN.omniture.conf.s_account || '', server = CN.omniture.conf.server || '', secureServer = CN.omniture.conf.secureServer || '', internalFilters = CN.omniture.conf.internalFilters || '', httpStatus = 200;

    if (s_account !== "") {
        s = window['s']; //removed for Audience Manager code s_gi(s_account);
        s.un = s_account;  // reset the account
    }


    /**
     * Sets pageName property.
     * 2 scenarios:
     * 1- Set in js file which will capture the URL up to any parameters.
     * 2- Set explicitly where we want to force the pagename, ex: ""scrubbed"" URLs."
     * @memberOf    CN.stats.omniture
     * @private
     */
    function setPageName() {
        var tempPageName = location.href;

        // Applies site-specific scrubbing rules.
        tempPageName = applyScrubRules(tempPageName);

        if (directories[0] === "") {
            tempPageName = "homepage";
        } else if (directories[0].indexOf("search") === 0) {
            // Matches search results url and sets the page name as /search/query
            tempPageName = location.href.split('search')[0].replace(/#.*$/g, '').replace(/\/$/, '/search/query');
        } else {
            // Removes query string, trailing slash, and trailing hash mark.
            tempPageName = tempPageName.split('?')[0].replace(/#.*$/g, '').replace(/\/$/, '');
        }

        // If error page, include error code.
        if (httpStatus !== 200) {
            tempPageName = "error:" + httpStatus + ":" + tempPageName;
        }

        s.pageName = tempPageName;

    }


    /**
     * Applies site-specific URL scrubbing logic.
     * Requires that the public method CN.stats.omniture.addScrubRule() to populate
     * the scrubRules var.
     * @memberOf    CN.stats.omniture
     * @param pageName string starting pageName. Will be returned if none of the scrub rules are applied.
     * @private
     */
    function applyScrubRules(pageName) {
        var i, dirs;

        for (i = 0; i < scrubRules.length; i++) {
            if (scrubRules[i].condition) {
                pageName = scrubRules[i].rule;
                dirs = pageName.replace(/http:\/\/.*?\//, '/').match(/([^\/]+)/g) || [''];
                setDirectories(dirs);
                CN.debug.info("SCRUBBING " + pageName);
            }
        }
        return pageName;
    }

    /**
     * Sets the pageType property if the page is an error page.
     * @memberOf    CN.stats.omniture
     * @private
     */
    function setPageType() {
        if (httpStatus == 404 || httpStatus == 500) {
            s.pageType = "errorPage";
            CN.stats.omniture.setEvent("error");
        }

    }

    /**
     * Sets the s.campaign property if query string contains specific values.
     * @memberOf    CN.stats.omniture
     * @private
     */
    function setCampaign() {
        s.campaign = "";
        /* External Campaign Tracking */
        if (!s.campaign) {
            s.campaign = s.getQueryParam('mbid,nav,fb_ref', ':');
            s.campaign = s.getValOnce(s.campaign, 's_campaign', 0);
        }

    }

    /*
     * Site hierarchy. Comma separated path. Exceptions: / will be set as "homepage".
     * Any error page is set to "error".
     * @memberOf    CN.stats.omniture
     * @private
     */
    function setHierarchy() {
        if (!s.hier1) {
            if (httpStatus == 404 || httpStatus == 500) {
                s.hier1 = "error";
            } else if (directories[0] === "") {
                s.hier1 = "homepage";
            } else {
                s.hier1 = directories.join(',');
            }
        }
    }


    /**
     * An object to define valid events.
     */
    var sEvents = {
        internalSearch : "event1",
        pageView : "event2",
        siteRegistration : "event3",
        subsConversions : "event4",
        ccUpsellImpressions : "event5",
        paidCreditCard : "event6",
        error : "event9",
        loginOverlayShown : "event10",
        newsletterSignup : "event11",
        newsletterSignup2 : "event12",
        newsletterSignup3 : "event13",
        emailAFriend : "event19",
        forumPost : "event20",
        login : "event21",
        comment : "event22",
        rating : "event23",
        review : "event24",
        photo : "event25",
        commentFocus : "event29",
        commentLayer : "event30",
        lightRegistration : "event31",
        lightLogin : "event32",
        socialShare : "event34",
        socialFollow : "event35",
        sweepsSubsConfirm : "event36",
        purchasable : "event37",
        nonpurchasable : "event38",
        slideShowLength : "event40",
        shoppingCartBox : "event47",
        prodView : "prodView",
        contentUpload : "event49"
    }

    /**
     * An object to store functions to set evars. Most evars map to props, but there are
     * a handful that have their own custom logic.
     */
    var eVars = {
        /*
         * eVar2: pageName
         * where: Always set eVar2 to page name when pageName is set
         * what: s.pageName
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar2 : function () {
            return s.pageName || '';
        },

         /*
         * eVar10: Internal Campaign ID
         * where: all pages
         * what:    internal campaign ids
         * @memberOf    CN.stats.omniture
         * @private
         * TODO: this one breaks the pattern of returning a value. Instead it is setting the evar directly.
         */
        eVar10 : function () {
            if (!s.eVar10) {
                s.eVar10 = s.getQueryParam('intcid');
                s.eVar10 = s.getValOnce(s.eVar10, 's_eVar10', 0);
            }
            return s.eVar10;
        },

        /*
         * eVar15: tracking codes
         * where: all pages.
         * what: copies s.campaign into evar.
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar15 : function () {
            return s.campaign || '';
        },

        /*
         * eVar20: tracking codes  (Never Expire -original value)
         * where: all pages.
         * what: copies s.campaign into evar.
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar20 : function () {
            return s.campaign || '';
        },

        /*
         * eVar21: Promo
         * where: Set on page where a promo is first shown (e.g., ccUpsell layer).
         * what: Name of the promo.
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar21 : function () {
            return this.eVar21.data || '';
        },

        /*
         * eVar33: Marketing campaign.
         * where: Set on pages where s.campaign is set.
         * what: sets evar33 to "Marketing".
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar33 : function () {
            if (s.campaign) {
                return "Marketing";
            }
            return '';
        },

        /*
         * eVar34: Video title
         * where: Set on page where channel player is embedded
         * what: Name of the video title.
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar34 : function () {
            return this.eVar34.data || '';
        },


        /*
         * eVar43: Purchasable/Not Purchasable products
         * where: Product Description Page
         * what: Determines purchasable / not purchasable products
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar43 : function () {
            return this.eVar43.data || '';
        },

        eVar50 : function () {
            return this.eVar50.data || '';
        },

        eVar53 : function () {
            return this.eVar53.data || '';
        },

        eVar54 : function () {
            return this.eVar54.data || '';
        },

        /*
         * eVar55: AuthorName
         * where: Set on Blog and Article pages
         * what: Name of the Author.
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar55 : function () {
            return this.eVar55.data || '';
        },

        /*
         * eVar60: Slideshow Length
         * where: Set on Slideshow pages
         * what: Slideshow length
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar60 : function () {
            return this.eVar60.data || '';
        },

        eVar68 : function () {
            return this.eVar68.data || '';
        },

        /*
         * eVar74: ContentType
         * where:  Set on Blog and Article pages
         * what:  Capture a second layer of granularity beyond prop5/eVar5
         * @memberOf    CN.stats.omniture
         * @private
         */
        eVar74 : function () {
            return this.eVar74.data || '';
        }

    }

    /**
     * An object to store functions to set each prop.
     *
     */
    var sProps = {
        /*
         * prop1: Internal Search Terms
         * where: Free text result page 1.
         * what: search terms
         * Sets eVar1 and event1.
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop1 : function () {
            if (this.prop1.data === undefined) {
                return "";
            }
            var t_search;
            this.prop1.data = CN.utils.transliterate(this.prop1.data);

            s.eVar1 = this.prop1.data.toLowerCase();
            t_search = s.getValOnce(s.eVar1, 'ev1', 0);
            if (t_search) {
                CN.stats.omniture.setEvent("internalSearch");
            }
            return this.prop1.data.toLowerCase();
        },

        /*
         * prop2: # Search Results
         * where: Free text result page
         * what: Number of results returned.
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop2 : function () {
            if (this.prop2.data === 0) {
                this.prop2.data = "zero";
            }
            return this.prop2.data || '';
        },

        /*
         * prop3: Content Title
         * where: All applicable pages.
         * what: Set to title of page except on send to friend. Set to url of page sent.
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop3 : function () {
            return CN.utils.transliterate(this.prop3.data) || CN.utils.transliterate(document.title);

        },

        /*
         * prop4: Content ID
         * where: All applicable pages.
         * what: Set to content id of the page.
         * @memberOf CN.stats.omniture
         * @private
         */
        prop4: function () {
            return this.prop4.data || '';
        },

        /*
         * prop5: Content Type
         * where: All pages.
         * what: Set to content type of the page.
         * @memberOf CN.stats.omniture
         * @private
         */
        prop5: function () {
            return this.prop5.data || '';
        },

        /*
         * prop6: Site Section
         * where: All pages
         * what: First directory after /.
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop6 : function () {
            var tempSection = directories[0];

            if (directories[0] === "") {
                tempSection = "homepage";
            }

            if (httpStatus == 404 || httpStatus == 500) {
                tempSection = "error";
            }
            return tempSection;
        },

        /*
         * prop7: Site Sub-section
         * where: All applicable pages.
         * what: 2nd directory after /
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop7 : function () {
            if (directories.length >= 2 && httpStatus == 200) {
                return  directories[0] + '/' + directories[1];
            }
            return "";
        },

        /*
         * prop8: Site Sub-section 2
         * where: All applicable pages.
         * what: 3rd directory after /
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop8 : function () {
            if (directories.length >= 3 && httpStatus == 200) {
                return directories[0] + '/' + directories[1] + '/' + directories[2];
            }
            return "";
        },

        /*
         * prop9: Site Sub-section 3
         * where: All applicable pages.
         * what: 4th directory after /
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop9 : function () {
            if (directories.length >= 4 && httpStatus == 200) {
                return directories[0] + '/' + directories[1] + '/' + directories[2] + '/' + directories[3];
            }
            return "";
        },

        /*
         * prop10
         * where Search pages
         * what search terms split
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop10 : function () {
            if (s.prop1) {
                return s.prop1.replace(/ /g, ',');
            }
            return "";
        },

        /*
         * prop11:
         * where All pages.
         * what hour
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop11 : function () {
            return s.prop11 = s.TimeParting('h', '-5'); // Set hour
        },

        /*
         * prop12:
         * where All pages.
         * what day
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop12 : function () {
            return s.prop12 = s.TimeParting('d', '-5'); // Set day
        },

        /*
         * prop13:
         * where All pages.
         * what weekend/weekday
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop13 : function () {
            return s.prop13 = s.TimeParting('w', '-5'); // Set weekday v.Weekend
        },

        /*
         * prop14:
         * where All pages
         * what JSESSION cookie
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop14 : function () {
            return CN.cookie.get('JSESSIONID') || '';
        },

        /*
         * prop15: Search facets
         * where: Search pages that use facets.
         * what: colon-separated list of facets.
         * @memberOf CN.stats.omniture
         * @private
         */
        prop15: function () {
            return this.prop15.data || '';
        },

        /*
         * prop16:
         * where: All pages.
         * what: logged in status similar to prop19
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop16 : function () {
            if (CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').uid) {
                return 'Logged in';
            } else {
                return 'Not Logged in';
            }
        },

        /*
         * prop17:
         * where: All pages
         * what: monthly repeat visitors
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop17 : function () {
            return s.getVisitNumCustom('m');
        },

        /*
         * sprop18:
         * where: Pages with "threadID" in the query string.
         * what: threadID
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop18 : function () {
            return this.prop18.data || CN.url.params('threadID');
        },

        /*
         * prop19:
         * where: All pages.
         * what: logged in user ID from cookie when available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop19 : function () {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').uid || '';
        },
        /*
         * prop23
         * where: All pages.
         * what: new vs. repeat visitors
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop23 : function () {
            return s.getNewRepeat();
        },
        /*
         * prop25:
         * where: eCommerce Activity.
         * what: eCommerce opp id when available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop25 : function () {
            return this.prop25.data || '';
        },

        /*
         * prop26:
         * where: eCommerce Activity.
         * what: eCommerce Targeter Name where available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop26 : function () {
            return this.prop26.data || '';
        },

        /*
         * prop27:
         * where: eCommerce Activity.
         * what: eCommerce Placement Id where available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop27 : function () {
            return this.prop27.data || '';
        },

        /*
         * prop28:
         * where: All pages.
         * what: logged in user name from cookie when available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop28 : function () {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').username || '';
        },

        /* prop32:
         * where: All pages.
         * what: slide/pagenumber
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop32 : function () {
            var params = CN.url.params();
            return this.prop32.data || params.pageNum || params.slide || params.currentPage || params.page || '';
        },

        /* prop43:
         * where: Product Description Page.
         * what: Purchasable/Not Purchasable
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop43 : function () {
            var pstatus = eVars.eVar43.data;
            if (typeof pstatus != "undefined") {
                var productcategory = '';
                var productname = '';
                if (directories.length >= 2 && httpStatus == 200)
                    productcategory = directories[1];
                if (directories.length >= 4 && httpStatus == 200)
                    productname = directories[3];
                CN.stats.omniture.setEvent("prodView");
                s.products = productcategory + ";" + productname;
                if (pstatus == "Purchasable") {
                    s.prop43 = "Purchasable";
                    CN.stats.omniture.setEvent("purchasable");
                }
                if (pstatus == "Not Purchasable") {
                    s.prop43 = "Not Purchasable";
                    CN.stats.omniture.setEvent("nonpurchasable");
                }
            }
            return pstatus;
        },

        /*
         * prop45:
         * where: eCommerce Activity.
         * what: Transaction Id where available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop45 : function () {
            return this.prop45.data || '';
        },

        /*
         * prop46:
         * where: eCommerce Activity.
         * what: campaignID where available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop46 : function () {
            return this.prop46.data || '';
        },

        /*
         * prop47:
         * where: eCommerce Activity.
         * what: Keycode where available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop47 : function () {
            return this.prop47.data || '';
        },

        /*
         * prop48:
         * where: eCommerce Activity.
         * what: campaign Name where available
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop48 : function () {
            return this.prop48.data || '';
        },

        /*
         * prop49:
         * where: Content Upload.
         * what: When user clicks submit to upload content
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop49 : function () {
            return this.prop49.data || '';
        },

        /*
         * prop50:
         * where: Set on all pages.
         * what: keywords
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop50 : function () {
            return eVars.eVar50.data || '';
        },

         /*
         * prop51:
         * where: responsive design mobile page views.
         * what: string 'mobile'
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop51 : function () {
            return this.prop51.data || '';
        },

        prop53 : function () {
            var pstatus = eVars.eVar53.data;
             s.prop53 = pstatus;
             return pstatus;
        },

        prop54 : function () {
            var pstatus = eVars.eVar54.data;
             s.prop54 = pstatus;
             return pstatus;
        },

        /*
         * prop55:
         * where: Set on Blog and Article pages.
         * what: Name of the Author
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop55 : function () {
            return eVars.eVar55.data || '';
        },

        /*
         * prop60:
         * where: Set SlideShow pages.
         * what: Slideshow length
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop60 : function () {
            return eVars.eVar60.data || '';
        },

        /*
         * prop68:
         * where: Set on all pages.
         * what: referring URL
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop68 : function () {
            return eVars.eVar68.data || '';
        },

        /*
         * prop74:
         * where: Set on Blog and Article pages.
         * what: Capture a second layer of granularity beyond prop5/eVar5
         * @memberOf    CN.stats.omniture
         * @private
         */
        prop74 : function () {
            return eVars.eVar74.data || '';
        }

    };

    function initPlugins() {
        /************************** PLUGINS SECTION *************************/
        /* You may insert any plugins you wish to use here.                 */
        /*
         * Plugin: getAndPersistValue 0.3 - get a value on every page
         */
        s.getAndPersistValue = function (v, c, e) {
            var s = this, a = new Date;
            e = e ? e : 0;
            a.setTime(a.getTime() + (e * 1000 * 60));
            if (!v && s.c_r(c) != '') {
                v = s.c_r(c);
            }
            if (v)
                s.c_w(c, v, e ? a : 0);
            return s.c_r(c);
        }


        /*
         * Plugin Utility: apl v1.1
         */
        s.apl = new Function("L", "v", "d", "u", "" + "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
            + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
            + "e()));}}if(!m)L=L?L+d+v:v;return L");

        /*
         * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
         */
        s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

        /*
         * Plugin: getValOnce 0.2 - Modified to expire after 30 minutes since last call (Updated provided by Omniture)
         */
        s.getValOnce = new Function("v", "c", ""
            + "var s=this,k=s.c_r(c),a=new Date;a.setTime(a.getTime()+1800000);if("
            + "v){s.c_w(c,v,a);}else{s.c_w(c,k,a);}return v==k?'':v");

            /*
		/* Engaged Users Plugin - High Value Audience
		 * Added 3/22/2013 as a result of an audit and per discussions with Dan Stubbs and Don Taylor
		 */
		s.getTimeSpent = function(e1){
		    var s = this;

		    if( (typeof s.linkType === undefined || s.linkType != '') || (s.linkType == '' && s.eo == '') ){

		        s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
		        s.linkTrackEvents = s.apl(s.linkTrackEvents, e1, ',', 2);

		        previousTime = s.c_r('timeSpent');
		        currentTime = (new Date()).getTime();

		        if(s.events && s.events.indexOf(e1 + "=") > -1){
		            var list = s.split(s.events,",");
		            if(list.length > 0){
		                s.events = "";
		                for(var i=0; i<list.length; i++){
		                    if(list[i].indexOf(e1 + "=") == -1)
		                        s.events = s.events + list[i] + ",";
		                }
		                s.events = s.events.substring(0,s.events.length-1);
		            }
		        }

		       if(previousTime == ''){
		            s.c_w('timeSpent', currentTime);
		            return e1 + '=0';
		        }else{
		            var timeDiff = Math.round((currentTime - previousTime)/1000)
		            if(timeDiff > 1800 || timeDiff < 0){
		                s.c_w('timeSpent', currentTime)
		                return e1 + '=0';
		            }else{
		                s.c_w('timeSpent', currentTime);
		                return e1 + '=' + timeDiff;
		            }
		        }
		    }
		}

        /*
         * Plugin: getQueryParam 2.3
         */
        s.getQueryParam = new Function("p", "d", "u", ""
            + "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
            + "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
            + ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
            + "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
            + "=p.length?i:i+1)}return v");
        s.p_gpv = new Function("k", "u", ""
            + "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
            + "=s.pt(q,'&','p_gvf',k)}return v");
        s.p_gvf = new Function("t", "k", ""
            + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
            + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
            + "epa(v)}return ''");

        /*
         * Plugin: getNewRepeat 1.0 - Return whether user is new or repeat
         */
        s.getNewRepeat = new Function(""
            + "var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"
            + "(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("
            + "'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"
            + ".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"
            + "al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"
            + "n 'Repeat';");

        /* Plugin: TimeParting 3.0 - Set timeparting values based on time zone - valid through 2014
         * Customized to report in full hours only
         */

        s.TimeParting = new Function("t", "z", ""
            + "var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A"
            + "=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C"
            + "='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A="
            + "='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08"
            + "';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if("
            + "D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=p"
            + "arseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H"
            + "<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=n"
            + "ew Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','"
            + "Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J."
            + "getDay();O=K[N];P='AM';Q='Weekday';R='00';if(L>=12){P='PM';L=L-12};"
            + "if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R+P;if(t=='h'){re"
            + "turn T}if(t=='d'){return O}if(t=='w'){return Q}}");


        /* DynamicObjectIDs config */
        function s_getObjectID(o) {
            var ID = o.href;
            return ID;
        }

        s.getObjectID = s_getObjectID

        /*
         *  * DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
         *   */
        s.setupDynamicObjectIDs = new Function(""
            + "var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
            + ">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
            + " if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
            + "lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
            + "re=1}");
        s.setOIDs = new Function("e", ""
            + "var s=s_c_il[" + s._in + "],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
            + ",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
            + "{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
            + "=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
            + "objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
            + "pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
            + "if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
            + ")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
            + "s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
            + "]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

        /*
         * Plugin Utility: Replace v1.0
         */
        s.repl = new Function("x", "o", "n", ""
            + "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
            + "substring(i+o.length);i=x.indexOf(o,i+l)}return x");

        /*
         * Monthly Visit Number
         */
        s.dimo = new Function("m", "y", "var d=new Date(y,m+1,0); return d.getDate();");
        s.endof = new Function("x", "var t = new Date(); t.setHours(0); t.setMinutes(0);"
            + "t.setSeconds(0); if(x=='m') d=s.dimo(t.getMonth(),t.getFullYear()) - t.getDate() + 1;"
            + "else if(x=='w') d=7-t.getDay(); else d=1; t.setDate(t.getDate()+d); return t;");
        s.getVisitNumCustom = new Function("tp", ""
            + "var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum_'+tp,c2='sinvisit_'+tp,eo=s.endof(tp),"
            + "y=eo.getTime();e.setTime(y);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}"
            + "cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}"
            + "else return 'unknown visit number';}"
            + "else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}"
            + "else{s.c_w(c,y+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}"
        );

        /*
         * Plugin: Visit Depth
         */
        s.getActionDepth = new Function("c", ""
            + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
            + "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
            + "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");

        /*
         * Plugin: downloadLinkHandler 0.5 - identify and report download links
         */
        s.downloadLinkHandler = new Function("p", ""
            + "var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
            + "ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
            + "if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");

        /*
         * Plugin: linkHandler 0.5 - identify and report custom links
         */
        s.linkHandler = new Function("p", "t", ""
            + "var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
            + "ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
            + "substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
            + "e=l=='[['?'':l;s.linkType=t;return h;}return '';");
        s.p_gn = new Function("t", "h", ""
            + "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
            + "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
            + "return 0;");

        /*
         * Utility Function: p_gh
         */
        s.p_gh = new Function(""
            + "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
            + "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
            + "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
            + "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

        /*
         * Function - read combined cookies v 0.3
         */
        if (!s.__ccucr) {
            s.c_rr = s.c_r;
            s.__ccucr = true;
            s.c_r = new Function("k", ""
                + "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
                + "urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
                + "c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
                + ",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
                + "m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
                + "Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
                + "urn v;");
        }
        /*
         * Function - write combined cookies v 0.3
         */
        if (!s.__ccucw) {
            s.c_wr = s.c_w;
            s.__ccucw = true;
            s.c_w = new Function("k", "v", "e", ""
                + "this.new2 = true;"
                + "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
                + "c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
                + ".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
                + "ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
                + ".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
                + "ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
                + "{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
                + "='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
                + ".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
                + "ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
                + "Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");
        }

        /*
         *  * Plugin: exitLinkHandler 0.5 - identify and report exit links
         *   */
        s.exitLinkHandler = new Function("p", ""
            + "var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
            + "e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
            + "s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
            + "nkType='e';else h='';s[n]=t;return h;");

        /*
         *  * Plugin: getPreviousValue_v1.0 - return previous value of designated
         *   *   variable (requires split utility)
         *    */
        s.getPreviousValue = new Function("v", "c", "el", ""
            + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
            + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
            + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
            + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
            + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

        /* dedupe referrers */
        s.dedupeReferrers = new Function("c", "b", ""
            + "var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.refer"
            + "rer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.le"
            + "ngth;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.s"
            + "plit(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';i"
            + "f(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if"
            + "(a){return a}else{return k[b]}}}");

        /*
         *    Search Center Plug-in: manageQueryParam v1.2 - Manages query string parameters
         *    by either encoding, swapping, or both encoding and swapping a value.
         */

        s.manageQueryParam = new Function("p", "w", "e", "u", ""
            + "var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.lo"
            + "cation);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1"
            + "?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf("
            + "'?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring"
            + "(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.le"
            + "ngth);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1"
            + ",x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.su"
            + "bstring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp)"
            + "{y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0"
            + ";while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break"
            + ";}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.re"
            + "p(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}i"
            + "f(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='"
            + "?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if"
            + "(qp)qs='?'+qp;return u+qs;");

        /*
         * Search Center Plugin: clickThruQuality v1.0 - [one line description of plugin]
         */
        s.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", ""
            + "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.even"
            + "ts+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tct"
            + "h_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct"
            + ",0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c"
            + "_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev"
            + "+cp_ev;}}}");
        s.p_fo = new Function("n", ""
            + "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
            + "new Object;return 1;}else {return 0;}");

        /* Configure Modules and Plugins */
        s.loadModule("Media");
        s.Media.autoTrack = false;
        s.Media.trackVars = "None";
        s.Media.trackEvents = "None";


        /****************************** MODULES *****************************/
        /* Module: Media */
        s.m_Media_c = "='s_media_'+m._in+'_~=new Function(~m.ae(mn,l,\"'+p+'\",~;`H~o.'+f~o.Get~=function(~){var m=this~}^9 p');p=tcf(o)~setTimeout(~x,x!=2?p:-1,o)}~=parseInt(~m.s.d.getElementsByTagName~ersion"
            + "Info~'`z_c_il['+m._in+'],~'o','var e,p=~QuickTime~if(~}catch(e){p=~s.wd.addEventListener~m.s.rep(~=new Object~layState~||^D~m.s.wd[f1]~Media~.name~Player '+~s.wd.attachEvent~'a','b',c~;o[f1]~tm.get"
            + "Time()/1~m.s.isie~.current~,tm=new Date,~p<p2||p-p2>5)~m.e(n,1,o^F~m.close~i.lx~=v+',n,~){this.e(n,~MovieName()~);o[f~i.lo~m.ol~o.controls~load',m.as~==3)~script';x.~,t;try{t=~Version()~else~o.id~)"
            + "{mn=~1;o[f7]=~Position~);m.~(x==~)};m.~&&m.l~l[n])~var m=s~!p){tcf~xc=m.s.~Title()~();~7+'~)}};m.a~\"'+v+';~3,p,o);~5000~return~i.lt~';c2='~Change~n==~',f~);i.~==1)~{p='~4+'=n;~()/t;p~.'+n)}~~`z.m_"
            + "i('`P'`uopen`6n,l,p,b`7,i`L`Ya='',x;l`Bl)`3!l)l=1`3n&&p){`H!m.l)m.l`L;n=`Km.s.rep(`Kn,\"\\n\",''),\"\\r\",''),'--**--','')`3m.`y`b(n)`3b&&b.id)a=b.id;for (x in m.l)`Hm.l[x]`x[x].a==a)`b(m.l[x].n^Fn"
            + "=n;i.l=l;i.p=p;i.a=a;i.t=0;i.s`B`V000);`c=0;^A=0;`h=0;i.e='';m.l[n]=i}};`b`6n`e0,-1`wplay`6n,o`7,i;i=`am`1`Ei`3m.l){i=m.l[\"'+`Ki.n,'\"','\\\\\"')+'\"]`3i){`H`c^Gm.e(i.n,3,-1^Fmt=`9i.m,^8)}}'^Fm(`w"
            + "stop`6n,o`e2,o`we`6n,x,o`7,i=n`x&&m.l[n]?m.l[n]:0`Yts`B`V000),d='--**--'`3i){if `v3||(x!=`c&&(x!=2||`c^G)) {`Hx){`Ho<0&&^A>0){o=(ts-^A)+`h;o=o<i.l?o:i.l-1}o`Bo)`3`v2||x`l&&`h<o)i.t+=o-`h`3x!=3){i.e"
            + "+=`v1?'S':'E')+o;`c=x;}`p `H`c!=1)`alt=ts;`h=o;m.s.pe='media';m.s.pev3=i.n+d+i.l+d+i.p+d+i.t+d+i.s+d+i.e+`v3?'E'+o:''`us.t(0,'`P^K`p{m.e(n,2,-1`ul[n]=0;m.s.fbr('`P^K}}^9 i};m.ae`6n,l,p,x,o,b){`Hn&&"
            + "p`7`3!m.l||!m.`ym.open(n,l,p,b`ue(n,x,o^5`6o,t`7,i=`q?`q:o`Q,n=o`Q,p=0,v,c,c1,c2,^1h,x,e,f1,f2`0oc^E3`0t^E4`0s^E5`0l^E6`0m^E7`0c',tcf,w`3!i){`H!m.c)m.c=0;i`0'+m.c;m.c++}`H!`q)`q=i`3!o`Q)o`Q=n=i`3!`"
            + "i)`i`L`3`i[i])^9;`i[i]=o`3!xc)^1b;tcf`1`F0;try{`Ho.v`D&&o`X`P&&`j)p=1`I0`8`3^0`1`F0`n`5`G`o`3t)p=2`I0`8`3^0`1`F0`n`5V`D()`3t)p=3`I0`8}}v=\"`z_c_il[\"+m._in+\"],o=`i['\"+i+\"']\"`3p^G^HWindows `P `R"
            + "o.v`D;c1`dp,l,x=-1,cm,c,mn`3o){cm=o`X`P;c=`j`3cm&&c`rcm`Q?cm`Q:c.URL;l=cm.duration;p=c`X`t;n=o.p`M`3n){`H^D8)x=0`3n`lx=1`3^D1`N2`N4`N5`N6)x=2;}^B`Hx>=0)`2`A}';c=c1+c2`3`W&&xc){x=m.s.d.createElement"
            + "('script');x.language='j`mtype='text/java`mhtmlFor=i;x.event='P`M^C(NewState)';x.defer=true;x.text=c;xc.appendChild(x`g6]`1c1+'`Hn`l{x=3;'+c2+'}`9`46+',^8)'`g6]()}}`Hp==2)^H`G `R(`5Is`GRegistered()"
            + "?'Pro ':'')+`5`G`o;f1=f2;c`dx,t,l,p,p2,mn`3o`r`5`f?`5`f:`5URL^3n=`5Rate^3t=`5TimeScale^3l=`5Duration^J=`5Time^J2=`45+'`3n!=`44+'||`Z{x=2`3n!=0)x=1;`p `Hp>=l)x=0`3`Z`22,p2,o);`2`A`Hn>0&&`4^4>=10){`2"
            + "^7`4^4=0}`4^4++;`4^I`45+'=p;`9^6`42+'(0,0)\",500)}'`U`1`T`g4]=-`s0`U(0,0)}`Hp`l^HReal`R`5V`D^3f1=n+'_OnP`M^C';c1`dx=-1,l,p,mn`3o`r`5^2?`5^2:`5Source^3n=`5P`M^3l=`5Length()/1000;p=`5`t()/1000`3n!=`4"
            + "4+'){`Hn`lx=1`3^D0`N2`N4`N5)x=2`3^D0&&(p>=l||p==0))x=0`3x>=0)`2`A`H^D3&&(`4^4>=10||!`43+')){`2^7`4^4=0}`4^4++;`4^I^B`H`42+')`42+'(o,n)}'`3`O)o[f2]=`O;`O`1`T1+c2)`U`1`T1+'`9^6`41+'(0,0)\",`43+'?500:"
            + "^8);'+c2`g4]=-1`3`W)o[f3]=`s0`U(0,0^5s`1'e',`El,n`3m.autoTrack&&`C){l=`C(`W?\"OBJECT\":\"EMBED\")`3l)for(n=0;n<l.length;n++)m.a(`y;}')`3`S)`S('on`k);`p `H`J)`J('`k,false)";
        s.m_i("Media");

    }

    /**
     * Loops through the sProps object and sets properties on the
     * global s object.
     * @function
     * @private
     */
    function setProperties() {
        var i;
        for (i in sProps) {
            if (sProps.hasOwnProperty(i)) {
                s[i] = sProps[i]();
            }
        }
    }

    /**
     * Loops through the eVars object and sets evars on the global s object.
     * @function
     * @private
     */
    function setEVars() {
        var i;

        for (i in eVars) {
            if (eVars.hasOwnProperty(i)) {
                s[i] = eVars[i]();
            }
        }
    }

    /*
     * Links evars to props.
     * @function
     * @param (string) evar name of the evar to set.
     * @param (string) sprop    name of the prop to set.
     * @private
     */
    function linkProps(evar, prop) {
        if (s[prop]) {
            s[evar] = s[prop];
        }
    }

    /**
     * Loops through the all evars and links to props.
     * @function
     * @private
     */
    function linkAllProps() {
        // Exceptions to mapping
        var exceptions = [ 24, 2, 21, 40, 15, 20, 0, 24, 110, 115 ]

        for ( aprop in s ) {
            // Check if this is a prop
            if ( aprop.indexOf( 'prop' ) > -1 ) {
                // Extract prop number
                var propNum = parseInt( aprop.replace( 'prop', '' ), 10 );
                // If number not in exceptions, link it to eVar
                if ( exceptions.indexOf( propNum ) === -1 ) {
                    linkProps( 'eVar' + propNum, aprop );
                }
            }
        }
    }

    /*
     * Sets events based on information in the url or dom. Don't need to call a setter.
     * @function
     * @private
     */
    function setAutoEvents() {
        // Set newsletter event if we are on thank you page.
        if (location.href.indexOf("/services/newsletters/demographics") != -1) {
            CN.stats.omniture.setEvent("newsletterSignup");
        }
    }

    return {
        /**
         * @name CN.stats.omniture#setEvent
         * @function
         * @description  Sets an event. Need to pass it a valid event name.
         * @param {string} name Name of the event to set.
         */
        setEvent : function(name) {
            if (sEvents.hasOwnProperty(name)) {
                s.events = s.apl(s.events, sEvents[name], ",", 2);
            }
            return this;
        },

        /**
         * @name CN.stats.omniture#setEvents
         * @function
         * @description  Sets events.
         * @param {Map} events Name:Value of the event to set.
         */
        setEvents : function(events) {
            var name;
            for (name in events) {
                if (sEvents.hasOwnProperty(name)) {
                    s.events = s.apl(s.events, sEvents[name] + ':' + events[name], ",", 2);
                }
            }
            return this;

        },

        /**
         * @name CN.stats.omniture#setPageName
         * @function
         * @description  overrides pageName.
         * @param {String} pageName page name to set
         */
        setPageName : function(pageName) {
            if (pageName) {
                s.pageName = pageName;
            }
            return this;

        },


        /**
         * @name CN.stats.omniture#setSaccount
         * @function
         * @description Sets the omniture account and also initializes the global s object.
         * @param {string} sAccount Omniture sAccount value
         */
        setSaccount: function(sAccount) {
            s_account = sAccount;
            s = s_gi(s_account);
            return this;
        },

        /**
         * @name CN.stats.omniture#setStatus
         * @function
         * @description Sets the http status. Used for error pages.
         * @param   {integer}    status    http status code
         */
        setStatus: function(status) {
            httpStatus = status;
            return this;
        },

        /**
         * @name CN.stats.omniture#setSearchProps
         * @function
         * @description Sets search props "prop1" and "prop2"
         * @param   {string}    term    Search term entered by user.
         * @param   {integer}    resultCount     Number of search results returned.
         */
        setSearchProps: function(term, resultCount) {
            sProps.prop1.data = CN.utils.transliterate(term);
            sProps.prop2.data = resultCount;
            return this;
        },

        /**
         * @name CN.stats.omniture#setContentTitle
         * @function
         * @description Sets the title prop (prop3). By default prop3 is document.title.
         * @param {string} title firendly page title
         */
        setContentTitle: function(title) {
            sProps.prop3.data = title;
            return this;
        },

        /**
         * @name CN.stats.omniture#setContentId
         * @function
         * @description Sets the page content id Default: '' (prop4)
         * @param {string} id the content id
         */
        setContentId: function(id) {
            sProps.prop4.data = id;
            return this;
        },

        /**
         * @name CN.stats.omniture#setContentType
         * @function
         * @description Sets the page content type Default: '' (prop5)
         * @param {string} id the content type
         */
        setContentType: function(type) {
            sProps.prop5.data = type;
            return this;
        },

        /**
         * @name CN.stats.omniture#setContentType
         * @function
         * @description Sets the page content type Default: '' (prop74)
         * @param {string} id the content type
         */
        setContentType2: function(type) {
            sProps.prop74.data = type;
            return this;
        },

        /**
         * @name CN.stats.omniture#setInternalFilters
         * @function
         * @description Sets the internal url filter list type Default: ''
         * @param {string} filters comma separated list of urls to filter
         */
        setInternalFilters: function(filters) {
            internalFilters = filters;
            return this;
        },

        /**
         * @name CN.stats.omniture#setTrackingServers
         * @function
         * @description Set tracking servers Default: ''
         * @param {string} s  Non-secure omniture server
         * @param {string}  ss  Secure omniture server
         */
        setTrackingServers: function(s, ss) {
            server = s;
            secureServer = ss;
            return this;
        },

        /**
         * @name CN.stats.omniture#setSearchFacets
         * @function
         * @description sets search facets
         * @param {string}  value colon-separated list of facets
         */
        setSearchFacets : function(value) {
            sProps.prop15.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setThreadId
         * @function
         * @description Set forums thread Id Default: '' (prop18)
         * @param {string}  value  Forum thread id value
         */
        setThreadId : function(value) {
            sProps.prop18.data = value;
            return this;
        },


        /**
         * @name CN.stats.omniture#setDesignerName
         * @function
         * @description Brides friendly designer name found on gallery pages.  (prop21)
         * @param {string}  value Designer name
         */
        setDesignerName : function(value) {
            s.prop21 = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setEcommOppId
         * @function
         * @description eCommerce Opp ID Default: '' (prop25)
         * @param {string}  value  eComm Opp ID value
         */
        setEcommOppId : function(value) {
            sProps.prop25.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setEcommTargeterName
         * @function
         * @description Set eCommerce TargeterName Default: '' (prop26)
         * @param {string}  value  eComm Targeter value
         */
        setEcommTargeterName : function(value) {
            sProps.prop26.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setEcommPlacementId
         * @function
         * @description Set eCommerce Placement ID Default: '' (prop27)
         * @param {string}  value  eComm Placement ID
         */
        setEcommPlacementId : function (value) {
            sProps.prop27.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setMagazineOrWebExclusive
         * @function
         * @description Set content type "Magazine" or "Web Exclusive" Default: '' (prop31)
         * @param {string}  value  content type: "Magazine" or "Web Exclusive"
         */
        setMagazineOrWebExclusive : function(value) {
            sProps.prop31.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setPaginationValue
         * @function
         * @description Override Pagination Page or Slide Number (prop32)
         * @param {string}  value  page or slide number Default: '' unless param exists ?pageNum=, ?slide=, ?currentPage=, ?page=
         */
        setPaginationValue : function (value) {
            sProps.prop32.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setCommerceProps
         * @function
         * @description
         * @param {Map}
            */
        setCommerceProps : function (value) {
            if (value) {
                if (value.transid) {
                    sProps.prop45.data = value.transid;
                }
                if (value.campaignId) {
                    sProps.prop46.data = value.campaignId;
                }
                if (value.keycode) {
                    sProps.prop47.data = value.keycode;
                }
                if (value.campaignName) {
                    sProps.prop48.data = value.campaignName;
                }
            }
            return this;
        },

        /**
         * @name CN.stats.omniture#setMobileView
         * @function
         * @description Set mobile page view (51)
         * @param {string}  value passed in value or 'mobile'
         */
        setMobileView : function (value) {
            var v = value || 'mobile';
            sProps.prop51.data = v;
            return this;
        },

        /**
         * @name CN.stats.omniture#setResortName
         * @function
         * @description Set resort name from the Sandals widget on brides.com
         * @param {string}  value resort name. (prop35)
         */
        setResortName : function(value) {
            s.prop35 = value;
            savedLinkTrackVars.push('prop35');
            return this;
        },

        /**
         * @name CN.stats.omniture#setPromoConversion
         * @function
         * @description Set promo conversion variable. (evar21)
         * @param {string}  value  promo conversion variable
         */
        setPromoConversion : function (value) {
            eVars.eVar21.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#setProductStatus
         * @function
         * @description Determines if the product is purchasable or not for allure.
         * @param {string} productstatus (purchasable / not purchasable)
         */
        setProductStatus: function(productstatus) {
            if (productstatus == "Purchasable")
                eVars.eVar43.data = "Purchasable";

            else
                eVars.eVar43.data = "Not Purchasable";
            return eVars.eVar43.data;
        },

        setProductName : function(productName) {
                eVars.eVar53.data = productName;
            return eVars.eVar53.data;
        },

        setProductAvailabilityStatus : function(productStatus) {
            eVars.eVar54.data = productStatus;
            return eVars.eVar54.data;
        },

        /**
         * @name CN.stats.omniture#setVideoTitle
         * @function
         * @description Set video title variable. (evar34)
         * @param {string}  value  video title variable
         */
        setVideoTitle : function (value) {
            CN.stats.omniture.setEvent("videoPlay");
            eVars.eVar34.data = value;
            return this;
        },

        /**
         * @name CN.stats.omniture#addScrubRule
         * @function
         * @description Adds a custom
         * @param {string}  condition Conditions to match before applying url scrub.
         * @param {string}  rule    Regex to scrub the url.
         */
        addScrubRule : function (condition, rule) {
            scrubRules.push({
                condition : condition,
                rule : rule
            });
        },

         /**
         * @name CN.stats.omniture#setAuthorName
         * @function
         * @description Set author name variable. (evar55)
         * @param {string}  value authorName for Blog, contributor name for Article.
         */
        setAuthorName : function (mtAuthorName) {
            eVars.eVar55.data = mtAuthorName;
            return this;
        },

        /**
         * @name CN.stats.omniture#setKeywords
         * @function
         * @description Set keywords variable. (evar50)
         * @param {string}  Keywords
         */
        setKeywords : function (mtKeywords) {
            eVars.eVar50.data = mtKeywords;
            return this;
        },


        /**
         * @name CN.stats.omniture#setReferrer
         * @function
         * @description Set referrer URL variable. (evar68)
         * @param {string}  Referring URL
         */
        setReferrer : function (mtReferrer) {
            eVars.eVar68.data = mtReferrer;
            return this;
        },

        /**
         * @name CN.stats.omniture#trackAction
         * @function
         * @description Sets an Omniture event on a user action (onclick).
         * @param (string) eventName    Name of the event. Needs to be a valid event name defined in events object.
         * @param (object)  evtSrc  Source of the event. Is a dom node.
         * @param (object) args config object with optional params.
         */
        trackAction : function(eventName, evtSrc, args) {
            args = args || {};
            args.linkTracking = args.linkTracking || false;
            if (args.props) {
                CN.stats.omniture.setCommerceProps(args.props);
            }
            if (args.events) {
                CN.stats.omniture.setEvents(args.events);
            }
            s = s_gi(s_account);
            if (!args.linkTracking) {
                CN.stats.omniture.setEvent(eventName);
                s.linkTrackEvents = sEvents[eventName];
            }
            s.linkTrackVars = savedLinkTrackVars.join(',');
            s.tl(evtSrc, 'o', eventName);
            savedLinkTrackVars.splice(1, savedLinkTrackVars.length);
            return this;
        },

        /**
         * @name CN.stats.omniture#trackActionEvar
         * @function
         * @description Sets an Omniture event and an evar onn a user action (onclick).
         * @param (string) eventName    Name of the event. Needs to be a valid event name defined in events object.
         * @param (object)  evtSrc  Source of the event. Is a dom node.
         * @param (string) evarName Name of the evar. Needs to be a valid evar name defined in evar object.
         * @param (string) evarVal Value of the evar.
         */
        trackActionEvar : function(eventName, evtSrc, evarName, evarVal) {
            CN.stats.omniture.setEvent(eventName);
            s = s_gi(s_account);
            s.linkTrackVars = evarName + ',events';
            s.linkTrackEvents = sEvents[eventName];
            s[evarName] = evarVal;
            s.tl(evtSrc, 'o', eventName);
            return this;
        },

        /**
         * @name CN.stats.omniture#setThirdParty
         * @function
         * @description Allows third party sites without a magazine subdomain to be tracked via omniture 3rd party cookie
         */
        setThirdParty : function () {
            var _temp_thirdparty_var = document.location.hostname.replace('www.', '').split('.');
            directories = new Array(_temp_thirdparty_var[0]).concat(directories);
            if (directories[directories.length - 1] === '') {
                directories.pop();
            }
            return this;
        },

        /**
         * @name CN.stats.omniture#trackAjaxPage
         * @function
         * @description Fires an Omniture page view event for AJAX apps.
         * @param (object) args Arg obj. Not currently used.
         */
        trackAjaxPage : function (args) {
            if (s.pdvalue == 1) s.events = s.apl(s.events, 'event28', ',', 2);
            s.events = "";

            for (var i = 0; i < arguments.length; i++) {
                CN.stats.omniture.setEvent(arguments[i]);
            }

            s.pdvalue = "";
            void(s.t());
            return this;
        },

        /**
         * @name CN.stats.omniture#doPlugins
         * @function
         * @description This function sets all of the Omniture properties. Needs to be public because omniture calls this directly.
         * @params {object} s omniture global s object
         */
        doPlugins: function(s) {
        	// Engaged Visitors
		    var timeTemp =s.getTimeSpent("event82");

		    if(timeTemp){
		        s.events = s.apl(s.events,timeTemp,",",2);
		    }

            /* Add calls to plugins here */
            if (!_ranOnce) {
                setDirectories(directories);
                _ranOnce = true;
            }
            setCampaign();
            GoogleSSCounter();
            setPageName();
            setPageType();
            setHierarchy();
            setProperties();
            setEVars();
            setAutoEvents();

            /* To setup Dynamic Object IDs */
            s.setupDynamicObjectIDs();

            /* Set Page View Event */
            CN.stats.omniture.setEvent("pageView");

            // Copy props to evars
            linkAllProps();

            /* Visit Depth of 5  and New Visit Begun*/
            if (s.ActionDepthTest) {
                s.pdvalue = s.getActionDepth("s_depth");
                if (s.pdvalue == 5) s.events = s.apl(s.events, 'event26', ',', 2);
                if (s.pdvalue == 1) s.events = s.apl(s.events, 'event28', ',', 2);
                s.ActionDepthTest = false;
            }

            /* Download Event */
            s.d_url = s.downloadLinkHandler(s.linkDownloadFileTypes);
            if (s.d_url) {
                s.events = s.apl(s.events, 'event18', ',', 2);
                s.linkTrackVars = "events";
                s.linkTrackEvents = "event18,";
            }

            /* dedupe the traffic sources reports */
            s.referrer = s.dedupeReferrers();

            /*Detects if referrer is external*/
            s.isReferrer = s.referrer ? s.referrer : document.referrer;
            if (s.isReferrer) {
                s.noQReferrer = s.isReferrer.indexOf('?') > -1 ? s.isReferrer.substring(0, s.isReferrer.indexOf('?')) : s.isReferrer;//removes query params
                s.lnkIntFltArray = s.split(s.linkInternalFilters, ',');
                s.lnkIntFltArrLen = s.lnkIntFltArray.length - 1;
                for (s.qI = 0; s.qI <= s.lnkIntFltArrLen; s.qI++) {
                    if (s.lnkIntFltArray[s.qI]) {
                        s.inFilts = s.noQReferrer.indexOf(s.lnkIntFltArray[s.qI]) == -1 ? false : true; //does referrer contain int. filter?  if so, set true, else set false
                        if (s.inFilts)
                            break;
                    }
                }


                /* If referrer is external, removes 'www' if present, extracts subdomain and populates eVar30 Defaults s.eVar33 with 'Other' if not set by campaign*/
                if (!s.inFilts) {
                    s.refArr = s.split(s.noQReferrer, "/");
                    s.refSub = s.refArr[2].toLowerCase();
                    s.eVar30 = (s.refSub.substring(0, 4) == "www.") ? s.refSub.substring(4) : s.refSub;
                    if (!s.eVar33) {
                        s.eVar33 = "Other";
                    }


                    /* Checks for the actual domain
                     * If it is a google domain, grab the full value
                     */
                    var periodNum = s.eVar30.split('.').length - 1; //Find the number of periods in the string
                    if ((periodNum == 1) || (document.referrer.match('google'))) {
                        s.prop39 = s.eVar30; //if only one, leave it as it is
                    } else {
                        // Only grab 2 levels of domain.
                        var d = s.eVar30.split('.'), dl = d.length;
                        s.prop39 = d.slice(dl - 2, dl).join('.');
                    }
                }

                /* Detects if referrer is a recognized search engine */
                if (s.refSub) {
                    s.SEString = '.google.|q>.yahoo.|p>.bing.|q>.ask.|q>.aol.|query>.myway.|searchfor>.netscape.|query>.altavista.|q>.lycos.|query>.msn.|q>.live.|q';
                    s.SEArray = s.split(s.SEString, ">");
                    for (s.qI2 = 0; s.qI2 < s.SEArray.length; s.qI2++) {
                        s.ArrSEV = s.split(s.SEArray[s.qI2], '|');
                        if (s.refSub.indexOf(s.ArrSEV[0]) > -1) {
                            s.kwdP = s.getQueryParam(s.ArrSEV[1], '', s.isReferrer);
                            s.kwdP = s.kwdP.toLowerCase();
                            break;
                        }
                    }
                }

                /* Modified 8/17/11 to fix bug where mbids were ignored if s.campaign was already set. Bug caused evar33 to populate 'other' even when mbid was present */
                if (s.getQueryParam('mbid') || s.getQueryParam('nav') || s.getQueryParam('fb_ref')) {
                    s.eVar33 = "Marketing";
                } else if (s.kwdP) {
                    s.eVar33 = "Natural Search";
                }

                /* Prepends 'organic' or 'paid' depending on presence of search queries */
                s.orgString = "organic: ";
                s.paidString = "paid: "
                if (s.kwdP) {
                    s.kwdP = (s.eVar33 == "Natural Search") ? s.orgString.concat(s.kwdP) : s.paidString.concat(s.kwdP);
                    if (!s.eVar22 && s.kwdP) s.eVar22 = s.kwdP;
                }

                 /* Detects if referrer is a recognized social network  //new addition - Aug 2011 & Sept 2012*/
                var ref =s.isReferrer;
                if (ref.indexOf('facebook.com')!=-1||ref.indexOf('myspace.com')!=-1||ref.indexOf('reddit.com')!=-1||ref.indexOf('digg.com')!=-1||ref.indexOf('stumbleupon.com')!=-1||ref.indexOf('twitter.com')!=-1||ref.indexOf('friendster.com')!=-1||ref.indexOf('plus.google.com')!=-1||ref.indexOf('t.co')!=-1||ref.indexOf('pinterest.com')!=-1||ref.indexOf('tumblr.com')!=-1){
                    s.eVar33 = "Social Media";
                }else {
                    s.eVar33 = s.eVar33;
                }
            }

            if (!s.isReferrer && !s.campaign && s.pdvalue === 1) {
                s.eVar33 = ('Typed/Bookmarked');
            }

            if( s.campaign === "" ? s.campaign = s.getQueryParam('mbid') : s.campaign ) {
                s.isSynd = s.campaign.toLowerCase();
                if (s.isSynd.indexOf('synd') != -1) {
                    s.eVar33 = "Syndicated";
                } else if (s.isSynd.indexOf('social_') == 0) {
                    s.eVar33 = "Social Media"
                } else if (s.isSynd.indexOf('cm_') == 0) {
                    s.eVar33 = "Consumer Marketing"
                } else if (s.isSynd.indexOf('nl_') == 0) {
                    s.eVar33 = "Newsletters" //new addition - July 2011
                }
            }

            if (s.eVar22 && !s.prop33) s.prop33 = s.eVar22;
            if (s.eVar30 && !s.prop30) s.prop30 = s.eVar30;

            s.prop33 = s.getAndPersistValue(s.prop33, 's_c33_persist', 30);//customized to expire after 30 minutes from last call
            s.prop30 = s.getAndPersistValue(s.prop30, 's_c30_persist', 30);//customized to expire after 30 minutes from last call
            s.prop39 = s.getAndPersistValue(s.prop39, 's_c39_persist', 30);//persist referring subdomains

            /*uberEvent setting, the report suite needs to be configured to only record this event once per visit*/
            s.uberArrString = 'event3,event4,event11,event12,event19,event20,event21,event22,event23,event24,event26,event18,purchase';
            s.uberArr = s.uberArrString.split(',');
            s.eventsArr = s.events.split(',');
            for (var i = 0, il = s.eventsArr.length; i < il; i++) {
                for (var f = 0, fl = s.uberArr.length; f < fl; f++) {
                    if (s.eventsArr[i] == s.uberArr[f]) {
                        s.uberCheck = true;
                        break;
                    }
                }
                if (s.uberCheck) {
                    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event27', ',', 2);
                    s.events = s.apl(s.events, 'event27', ',', 2)
                    break
                }

            }

            /*Exit Link Previous Value*/
            s.e_url = s.exitLinkHandler();
            s.prevCont = s.getPreviousValue(s.prop5, 'gpv_p5', '');
            if (s.e_url) {
                s.prop34 = s.prevCont;
            }

            /*SearchCenter*/
            s.clickThruQuality('s_kwcid', 'event45', 'event46');
            if (s.getQueryParam('s_kwcid'))
                s.pageURL = s.manageQueryParam('s_kwcid', 1, 1);

            return this;
        },

        /**
         * @name CN.stats.omniture#init
         * @function
         * @description Does init
         */
        init: function() {

            initPlugins();
            s.trackingServer = server;
            s.trackingServerSecure = secureServer;
            s.linkInternalFilters = internalFilters;
            s.server = "";
            s.channel = "";
            s.pageType = "";
            s.currencyCode = "USD";
            s.ActionDepthTest = true

            /* WARNING: Changing any of the below variables will cause drastic
             changes to how your visitor data is collected.  Changes should only be
             made when instructed to do so by your account manager.*/
            s.visitorNamespace = "condenast";
            s.dc = 112;

            /* Link Tracking Config */
            s.trackDownloadLinks = true;
            s.trackExternalLinks = true;
            s.trackInlineStats = true;
            s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
            s.linkLeaveQueryString = false;
            s.linkTrackVars = "evar21,evar39,evar40,prop34,events";
            s.linkTrackEvents = "event3,event4,event10,event11,event12,event13,event20,event21,event22,event23,event24,event25,event29,event30,event31,event32,event37,event38,event39,event47";

            /* Plugin Config */
            s.usePlugins = true;
            s.doPlugins = CN.stats.omniture.doPlugins;

            return this;
        },

        /**
         * @name CN.stats.omniture#doPageTracking
         * @function
         * @description This function puts the omniture tracking code on the page.
         */
        doPageTracking: function () {
            if (typeof allure_product_tracking != "undefined" && allure_product_tracking && ! productlist_loaded) return false;
            //this.init();

            var s_code = s.t();
            if (s_code)document.write(s_code);
            return this;
        },

        setCustomProp: function(prop, val) {
            if (prop) {
                sProps['prop' + prop] = new function(val) {
                    return function() {
                        return val || '';
                    }
                }(val || '');
            }

            return this;
        }
    }

})()
/* end file: cn-fe-stats-omniture*/
/* file: cn-fe-ecom :  : http://www.wired.com/js/cn-fe-ecom/cn.ecom.js *//*!
* @file magnet.ecom.js
* @author Paul Bronshteyn
* @comment Built by a geek loaded on caffeine ...
* @copyright (c) Conde Nast Digital
*/

if (typeof window.CN === 'undefined') {
    window.CN = {};
}

/**
* @class CN ECommerce Interface
* @description Collection of ecommerce helper function
* @public
* @author Paul Bronshteyn
*/
CN.ecom = CN.ecom || {};

/**
* @class CN Rollover ecommerce placement.
* @description Helper functions to control rollover ecommerce placements.
* @public
* @author Paul Bronshteyn
*
* @example
    <!-- Rollover Ad Decorator Code -->
    <jsp:include page="/WEB-INF/pages/magnet-presentation/ecom/rolloverAd.jsp">
        <jsp:param name="targeter" value="header" />
    </jsp:include>

    <!-- Rollover Ad Template-->
    <div id="rolloverAd">
        <div id="rolloverAd_header">
            <a href="#">Close</a>
        </div>
        <div id="rolloverAd_content">
            <jsp:include page="/WEB-INF/pages/clearcase/xmlcontent/includes/ecomPlacement.jsp">
                <jsp:param name="name" value="${param.targeter}" />
                <jsp:param name="callback" value="func: CN.ecom.rolloverAd.init" />
            </jsp:include>
        </div>
        <div id="rolloverAd_footer"></div>
    </div>

    <!-- Rollover Ad CSS -->
    #rolloverAd {
        position: absolute;
        width: 308px;
        z-index: 9999;
        display: none;
    }

    #rolloverAd_header {
        height: 20px;
        background: #E85F1B;
        text-align: right;
    }

    #rolloverAd_header a {
        line-height: 20px;
        margin-right: 5px;
        font-size: 0.8em;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;

        <!-- Close button image if needed -->
        background: url('/images/nocount/close.gif') center right no-repeat;
        padding-right: 15px;
    }

    #rolloverAd_header a:hover {
        text-decoration: underline;
    }

    #rolloverAd_content {
        background: #fff;
        border: 1px solid #680020;
        overflow: hidden;
    }

    #rolloverAd_footer {
        height: 20px;
        background: #E85F1B;
    }

    <!-- Rollover Ad ATG Request -->
    <!-- This should be the result code for the placement on the page -->
    <script type="text/javascript">
        CN.ecom.request({ pid: 'rolloverAd_content', tgt: 'targeter_passed_by_jsp', params: {} });
    </script>
*/
CN.ecom.rolloverAd = (function($) {
    var
        /**
        * Rollover enabled flag
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type boolean
        */
        enabled = true,

        /**
        * Default id rollover ad container element
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type object
        */
        defaultId = 'rolloverAd',

        /**
        * Rollover ad container element
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type object
        */
        container = {},

        /**
        * Rollover ad trigger element
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type object
        */
        trigger = {},

        /**
        * Auto close timeout in seconds
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type integer
        * @default 10
        */
        timeout = 10,

        /**
        * Timer
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type timer
        */
        timer,

        /**
        * Showing flag
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type boolean
        * @default false
        */
        showing = { 'rolloverAd': false },

        /**
        * Container top offset
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type integer
        * @default 0
        */
        offsetTop = 0,

        /**
        * Container left offset
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @type integer
        * @default 0
        */
        offsetLeft = 0,

        /**
        * Show rollover ad and set the timer
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @event
        * @param {object} e Window event
        */
        showAd = function(e, id) {
            if (showing[id]) {
                return;
            }

            showing[id] = true;

            trigger[id] = $(e.target);
            var o = trigger[id].offset();

            container[id].css({ top: (o.top + trigger[id].height() + offsetTop), left: (o.left + offsetLeft) }).show();

            timer = setTimeout(function() {
                closeAd(e, id);
            }, timeout * 1000);

            $(window).bind('resize', { id: id }, onResize);
        },

        /**
        * On window resize
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @event
        * @param {object} e Window event
        */
        onResize = function(e) {
            var o = trigger[e.data.id].offset();
            container[e.data.id].css({ top: (o.top + trigger[e.data.id].height() + offsetTop), left: (o.left + offsetLeft) });
        },

       /**
        * Close rollover ad and clear the timer
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @event
        * @param {object} e Window event
        */
        closeAd = function(e, id) {
            var
                ad;
            if (!id && !e) {
                for (ad in container) {
                    container[ad].hide();
                    showing[ad] = false;
                }
            }
            else {
                id = id || e.data.id;
                container[id].hide();
                showing[id] = false;
            }

            onClearTimeout();
        },

        /**
        * Close event triggered by inner content click or close button click.
          Stops all other events from fireing and closes the ad.
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @event
        * @param {object} e Window event
        */
        closeEvent = function(e) {
            closeAd(e);
            if (!e.target.href || e.target.href.indexOf('#') > -1) {
                e.stopImmediatePropagation();
                return false;
            }
        },

        /**
        * On Clear Timeout event
        * @memberOf CN.ecom.rolloverAd
        * @private
        * @event
        * @param {object} e Window event
        */
        onClearTimeout = function(e) {
            clearTimeout(timer);
        }

    /**
    * @scope CN.ecom.rolloverAd
    */
    return {
        /**
        * Initiate rollover placement
        * @return {object} CN.ecom.rolloverAd
        *
        * @example
            Initiate floating ad.
            CN.ecom.rolloverAd.init();
        */
        init: function(id) {

            id = id || defaultId;

            if (enabled) {
                $('#' + id + '_show,#logo-link-a,.showForm,#global_navBar a,#header-subscribe a').live('mouseover', function(e) {
                    showAd(e, id);
                });

                container[id] = $('#' + id);
                showing[id] = false;

                var frm = container[id].bind('click mousedown keypress', onClearTimeout).find('form');

                container[id].find('#' + id + '_header,#' + id + '_footer').bind('mousedown', onClearTimeout)
                    .find('a')
                    .bind('click', { id: id }, closeEvent);

                if (frm.length) {
                    frm.bind('reset', { id: id }, closeAd);
                } else {
                    container[id].find('#' + id + '_content a').bind('click', { id: id }, closeAd);
                }
            }

            return this;
        },

        /**
        * Enable/Disable rollover ad
        * @param {boolean} setting Rollover ad enable setting
        * @return {object} CN.ecom.rolloverAd
        */
        setRollover: function(setting) {
            enabled = setting === true;
            return this;
        },

        /** Making closeAd public **/
        closeAd : closeAd,

        /**
        * Set layer offset from the element triggering the show
        * @param {integer} top Number of pixels to offset top of the element
        * @param {integer} left Number of pixels to offset left of the element
        * @return {object} CN.ecom.rolloverAd
        * @uses CN.utils.intval
        *
        * @example
            Set arrival and exiting cookie life
            CN.ecom.rolloverAd.setOffset(0, -29); <-- Glamour
            CN.ecom.rolloverAd.setOffset(0, -306); <-- New Yorker
        */
        setOffset: function(top, left) {
            offsetTop = CN.utils.intval(top);
            offsetLeft = CN.utils.intval(left);
            return this;
        },

        /**
        * Set auto close timeout in seconds
        * @param {integer} seconds Timeout
        * @return {object} CN.ecom.rolloverAd
        * @uses CN.utils.intval
        *
        * @example
            Set arrival and exiting cookie life
            CN.ecom.rolloverAd.timeout(15);
        */
        timeout: function(seconds) {
            timeout = CN.utils.intval(seconds) || timeout;
            return this;
        }
    }
})(jQuery);

/** Video Layer Form **/

CN.ecom.videoRolloverAd = (function($M) {
    var
        /**
        * Rollover enabled flag
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type boolean
        */
        enabled = true,

        /**
        * Rollover ad container element
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type object
        */
        container,

        /**
        * Rollover ad trigger element
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type object
        */
        trigger,

        /**
        * Auto close timeout in seconds
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type integer
        * @default 10
        */
        timeout = 10,

        /**
        * Timer
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type timer
        */
        timer,

        /**
        * Showing flag
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type boolean
        * @default false
        */
        showing = false,

        /**
        * Container top offset
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type integer
        * @default 0
        */
        offsetTop = 0,

        /**
        * Container left offset
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @type integer
        * @default 0
        */
        offsetLeft = 0,

        /**
        * Show rollover ad and set the timer
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @event
        */
        showAd = function() {
            if (showing) {
              return;
            }
            showing = !showing;
            trigger = jQuery(this);
            var o = trigger.offset();
            container.show('slow');
            timer = setTimeout(closeAd, timeout * 1000);
        },

        /**
        * Close rollover ad and clear the timer
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        */
        closeAd = function() {
            container.hide('slow');
            clearTimeout(timer);
            showing = !showing;
        },

        /**
        * Close event triggered by inner content click or close button click.
          Stops all other events from fireing and closes the ad.
        * @memberOf CN.ecom.videoRolloverAd
        * @private
        * @event
        * @param {object} e Window event
        */
        closeEvent = function(e) {
            closeAd();
            if (!this.href || this.href.indexOf('#') > -1) {
                e.stopImmediatePropagation();
                return false;
            }
        }

    /**
    * @scope CN.ecom.videoRolloverAd
    */
    return {
        /**
        * Initiate rollover placement
        * @return {object} CN.ecom.videoRolloverAd
        *
        * @example
            Initiate floating ad.
            CN.ecom.videoRolloverAd.init();
        */
        init: function() {
            if (enabled) {
                jQuery('#video_utilities').live('mouseover', showAd);
                container = jQuery('#videoRolloverAd');

                var frm = container.bind('click mousedown keypress', function() {
                    clearTimeout(timer);
                }).find('form');

                jQuery('#videoRolloverAd_header,#videoRolloverAd_footer', container).bind('mousedown', function() {
                    clearTimeout(timer);
                }).find('a').bind('click', closeEvent);

                if (frm.length) {
                    frm.bind('reset', closeAd);
                } else {
                    jQuery('#videoRolloverAd_content a', container).bind('click', closeEvent);
                }
            }

            return this;
        },

        /**
        * Enable/Disable rollover ad
        * @param {boolean} setting Rollover ad enable setting
        * @return {object} CN.ecom.videoRolloverAd
        */
        setRollover: function(setting) {
            enabled = setting;
            return this;
        },

        /**
        * Set layer offset from the element triggering the show
        * @param {integer} top Number of pixels to offset top of the element
        * @param {integer} left Number of pixels to offset left of the element
        * @return {object} CN.ecom.videoRolloverAd
        * @uses CN.utils.intval
        *
        * @example
            Set arrival and exiting cookie life
            CN.ecom.videoRolloverAd.setOffset(0, -29); <-- Glamour
            CN.ecom.videoRolloverAd.setOffset(0, -306); <-- New Yorker
        */
        setOffset: function(top, left) {
            offsetTop = $M.utils.intval(top);
            offsetLeft = $M.utils.intval(left);
            return this;
        },

        /**
        * Set auto close timeout in seconds
        * @param {integer} seconds Timeout
        * @return {object} CN.ecom.videoRolloverAd
        * @uses CN.utils.intval
        *
        * @example
            Set arrival and exiting cookie life
            CN.ecom.videoRolloverAd.timeout(15);
        */
        timeout: function(seconds) {
            timeout = $M.utils.intval(seconds) || timeout;
            return this;
        }
    }
})(CN);

/**
* @class Floating ecommerce placement.
* @description Helper functions to control floating ecommerce placements
* @public
* @author Paul Bronshteyn
*
* @example
    <!-- Floating Ad Decorator Code -->
    <jsp:include page="/WEB-INF/pages/magnet-presentation/ecom/floatingAd.jsp" />

    <!-- Floating Ad Template -->
    <div id="floatingAd">
        <div id="floatingAd_header">
            <a href="#">Close</a>
        </div>
        <div id="floatingAd_content">
            <jsp:include page="/WEB-INF/pages/clearcase/xmlcontent/includes/ecomPlacement.jsp">
                <jsp:param name="name" value="popUp_floatingAd" />
            </jsp:include>
        </div>
    </div>

    <!-- Floating Ad CSS -->
    #floatingAd {
        position: absolute;
        width: 308px;
        z-index: 9999;
        display: none;
        left: 50%;
        top: 95px;
        margin-left: -158px;
    }

    #floatingAd_header {
        height: 20px;
        background: #E85F1B;
        text-align: right;
    }

    #floatingAd_header a {
        line-height: 20px;
        margin-right: 5px;
        font-size: 0.8em;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;

        <!-- Close button image if needed -->
        background: url('/images/nocount/close.gif') center right no-repeat;
        padding-right: 15px;
    }

    #floatingAd_header a:hover {
        text-decoration: underline;
    }

    #floatingAd_content {
        background: #fff;
        border: 1px solid #680020;
        overflow: hidden;
    }

    <!-- Floating Ad ATG Request -->
    <!-- This should be the result code for the placement on the page -->
    <script type="text/javascript">
        CN.ecom.request({ pid: 'floatingAd_content', tgt: 'GLM_popUp_floatingAd', params: {} });
    </script>
*/
CN.ecom.floatingAd = (function($M) {
    var
        /**
        * Floating ad container
        * @memberOf CN.ecom.floatingAd
        * @private
        * @type object
        */
        container,

        /**
        * Auto close timeout in seconds
        * @memberOf CN.ecom.floatingAd
        * @private
        * @type integer
        * @default 15
        */
        timeout = 15,

        /**
        * Timer
        * @memberOf CN.ecom.floatingAd
        * @private
        * @type timer
        */
        timer,

        /**
        * Show floating ad and set the timer
        * @memberOf CN.ecom.floatingAd
        * @private
        */
        showAd = function() {
            container.show();
            timer = setTimeout(closeAd, timeout * 1000);
        },

        /**
        * Close floating ad and clear the timer
        * @memberOf CN.ecom.floatingAd
        * @private
        * @event
        */
        closeAd = function() {
            container.hide();
            clearTimeout(timer);
        },

        /**
        * Close event triggered by inner content click or close button click.
          Stops all other events from fireing and closes the ad.
        * @memberOf CN.ecom.floatingAd
        * @private
        * @event
        * @param {object} e Window event
        */
        closeEvent = function(e) {
            closeAd();
            if (!this.href || this.href.indexOf('#') > -1) {
                e.stopImmediatePropagation();
                return false;
            }
        }

    /**
    * @scope CN.ecom.floatingAd
    */
    return {
        /**
        * Initiate CN Floating Ad
        * @return {object} CN.ecom.floatingAd
        *
        * @example
            Initiate floating ad.
            CN.ecom.floatingAd.init();
        */
        init: function() {
            jQuery(function() {
                container = jQuery('#floatingAd');

                if (!container.length) {
                    return this;
                }

                var frm = container.bind('click mousedown keypress', function() {
                    clearTimeout(timer);
                }).find('form');

                jQuery('#floatingAd_header', container).bind('mousedown', function() {
                    clearTimeout(timer);
                }).find('a').bind('click', closeEvent);

                if (frm.length) {
                    frm.bind('reset', closeAd);
                } else {
                    jQuery('#floatingAd_content a', container).bind('click', function(e) {
                        e.stopImmediatePropagation();
                        closeAd();
                    });
                }

                showAd();
            });

            return this;
        },

        /**
        * Set auto close timeout in seconds
        * @param {integer} seconds Timeout
        * @return {object} CN.ecom.floatingAd
        * @uses CN.utils.intval
        *
        * @example
            Set arrival and exiting cookie life
            CN.ecom.floatingAd.timeout(15);
        */
        timeout: function(seconds) {
            timeout = $M.utils.intval(seconds) || timeout;
            return this;
        }
    }
})(CN);


/* START: InterstitialAd */
CN.ecom.interstitialAd = (function($M) {
    var
        /**
        * Interstitial ad container
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @type object
        */
        container,

        /**
        * Interstitial ad container background
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @type object
        */
        containerBg,

        /**
        * Auto close timeout in seconds
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @type integer
        */
        timeout = 10,

        /**
        * Timer
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @type timer
        */
        timer,

        /**
        * Get Current Domain
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @type currentDomain
        */
        currentDomain = CN.site.domain,

        /**
        * Get interstitial ad Cookie
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @type interstitialAdCookie
        */
        interstitialAdCookie,

        /**
        * Show Interstitial ad and set the timer
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @event
        */
        showAd = function() {
            jQuery("#interstitialAd,#interstitialAdBg").appendTo('body');
            container.centerAd();
            container.show();
            containerBg.show();
            timer = setTimeout(closeAd, timeout * 1000);
        },

        /**
        * Close Interstitial ad and clear the timer
        * @memberOf CN.ecom.interstitialAd
        * @private
        * @event
        */
        closeAd = function() {
            container.hide();
            containerBg.hide();
            clearTimeout(timer);
        }

    /**
    * @scope CN.ecom.interstitialAd
    */
    return {
        /**
        * Initiate CN Interstitial Ad
        * @return {object} CN.ecom.interstitialAd
        *
        * @example
            Initiate interstitial ad.
            CN.ecom.interstitialAd.init();
        */
        init: function() {
            jQuery(function() {
                jQuery('#interstitialAd').click(function() {
                    clearTimeout(timer);
                });

                jQuery('#interstitialAdBg,#interstitialAd #decline,#interstitialAd .int-ad-skip a').click(function() {
                    closeAd();
                    return false;
                });
                jQuery('#interstitialAd :submit, #interstitialAd .submit, #interstitialAd #submit').click(function() {
                    if(jQuery('#int_email_newslettersignup').hasClass("valid-email") == 'true'){
                        CN.cookie.set('interstitialAdSignup', 'true', { expires: signupCookieExpiry*24, path: '/', domain: currentDomain });
                        closeAd();
                    }
                });
            });

            return this;
        },

        setAdParameters: function(globalPage,homePage,otherPage,cookieAge,signupCookieAge) {
            cookieExpiry = cookieAge;
            if(cookieAge != '' || cookieAge != undefined || cookieAge != NULL){
                cookieExpiry = parseInt(cookieAge);
            }else{
                cookieExpiry = 7; // 7 days
            }

            signupCookieExpiry = signupCookieAge;
            if(signupCookieAge != '' || signupCookieAge != undefined || signupCookieAge != NULL){
                signupCookieExpiry = parseInt(signupCookieAge);
            }else{
                signupCookieExpiry = 7; // 7 days
            }

            CN.ecom.interstitialAd.init();
            container = jQuery('#interstitialAd');
            containerBg = jQuery('#interstitialAdBg');

            interstitialAdCookie = CN.cookie.get("interstitialAd");
            interstitialAdSignupCookie = CN.cookie.get("interstitialAdSignup");
            if ((globalPage == 'true') || (jQuery('body').hasClass('home') && homePage == 'true') || (!jQuery('body').hasClass('home') && otherPage == 'true') ) {
                if ( interstitialAdSignupCookie != 'true'){
                    if ( interstitialAdCookie != 'true'){
                        jQuery('#interstitialAdDefault').val("true");
                        CN.cookie.set('interstitialAd', 'true', { expires: cookieExpiry*24, path: '/', domain: currentDomain });
                        showAd();
                    }
                }
                return this;
            }else {
                return 0;
            }
        }
    }
})(CN);

        jQuery.fn.centerAd = function() {
                this.css({
                    'position': 'fixed',
                    'left': '50%',
                    'top': '50%',
                    'margin-left': -this.width() / 2 + 'px',
                    'margin-top': -this.height() / 2 + 'px'
            });
                return this;
       }


/* END: interstitialAd *//* end file: cn-fe-ecom*/
/* file: cn-fe-ecomfw :  : http://www.wired.com/js/cn-fe-ecom/ecomfw.js *//*!
* @version ecomfw.js v2.6.3:1101 01.11.2010
* @author Paul Bronshteyn
* @author Russell Munson
* @comment Built by a geek loaded on caffeine ...
* @copyright (c) Conde Nast Digital
*/

/*
* @changelog
* @082410 DP - removed ping of Offermatica.
* @012110 PB - patch for the double encoded url coming back from amg-ecommerce
* @011110 RC - added edebug & targetVer - targetVer is passed in request to ATG
* @100509 Rmunson - created helper functions for element hide/show, and child remove/append
*                   upsell iframe now uses atg-provided url.
* @091609 Rmunson - getForm() now takes empty fields as well
* @080509 Fix for the scrollbar apearing on VF
*/

if (typeof window.CNP === 'undefined' || !window.CNP) {
    /**
    * Conde Nast Publications global namespace object
    * @namespace Conde Nast Publications global namespace object
    */
    window.CNP = {};
}

/**
* @class CNP Ecommerce Framework
* @description Contains methods for working with ATG eCommerce Platform
* @public
* @author Paul Bronshteyn
* @version ecomfw.js v2.53.1457 09.16.2009
* @example
    Start:
        CNP.ecom.start({
            // required
            cnd: <%= !StringUtils.isEmpty(request.getHeader("cdn-request")) %>,
            // optional, default magazine.currentdomain.com
            host: "&lt;spring:message code='ecom.baseUrl' /&gt;",
            // optional
            pingPath: "status.jsp",
            // optional
            offerPath: "targettedOffer.jsp",
            // optional
            subPath: "embeddedForm.jsp",
            // optional
            showPath: "showOffer.jsp",
            // optional
            path: "/ecom/",
            // optional
            section: "site_section",
            // optional
            user: "user_id",
            // optional
            https: false,
            // optional
            timeout: 4,
            // optional type of javascript encoding would be used to deliver the content
            jsEnc: 'jsesc',
            // optional type of content encoding would be used, default is xml
            contentEnc: 'xml',
            // optional parameters to be sent to ATG
            params: {
                key: value
            },
            // optional, will be called if ping to ATG servers is successful
            callalive: {
                func: some_function,
                params: {
                    name: 'value'
                }
            },
            // optional, will be called if ping to ATG servers timedout or invalid
            calldead: {
                func: some_function,
                params: {
                    name: 'value'
                }
            }
        });

    Request:
        CNP.ecom.request({
            // required
            pid: 'placement_id',
            // required
            tgt: 'targeter_name',
            // optional, additional parameters to be sent to ATG
            params: {
                name: 'value'
            },
            // optional, will be called before the call to ATG
            callbefore: {
                func: some_function,
                params: {
                    name: 'value'
                }
            },
            // optional, will be called after ATG responds
            callafter: {
                func: some_function,
                params: {
                    name: 'value'
                }
            }
        });
*/
CNP.ecom = (function() {
    var
        /**
        * Internal framework name
        * @memberOf CNP.ecom
        * @private
        * @type string
        * @default ecom
        */
        fwid = 'ecom',

        /**
        * Ping Timer
        * @memberOf CNP.ecom
        * @private
        * @type null|timeout
        * @see CNP.ecom.ping
        * @see CNP.ecom.clearPing
        */
        pingTimer = null,

        /**
        * Ping Image.
        * @memberOf CNP.ecom
        * @private
        * @type object
        * @see CNP.ecom.ping
        * @see CNP.ecom.clearPing
        */
        pingImage = null,

        /**
        * Framework ready switch.
        * @description Ready is always true unless ping fails.
        * @memberOf CNP.ecom
        * @private
        * @type boolean
        * @default true
        */
        ready = true,

        /**
        * Framework live switch.
        * @description Live is set by the ping response.
        * @memberOf CNP.ecom
        * @private
        * @type boolean
        * @default false
        * @see CNP.ecom.alive
        * @see CNP.ecom.dead
        */
        live = false,

        /**
        * Ecom calls object.
        * @description Stores all the requests and responses processed.
        * @memberOf CNP.ecom
        * @private
        * @type object
        */
        requests = { idx: 0 },

        /**
        * Ecom suppressed targeters.
        * @description Stores the names of targeters to be suppressed.
        * @memberOf CNP.ecom
        * @private
        * @type string
        */
        suppressed = '',

        /**
        * Request queue.
        * @description Stores all the requests that need to be processed.
        * @memberOf CNP.ecom
        * @private
        * @type array
        */
        queue = [],

        /**
        * window.document shortcut
        * @memberOf CNP.ecom
        * @private
        * @type object
        */
        sd = document,

        /**
        * window.location shortcut
        * @memberOf CNP.ecom
        * @private
        * @type object
        */
        sl = location,

        /**
        * window.location.search shortcut
        * @memberOf CNP.ecom
        * @private
        * @type object
        */
        ss = sl.search,

        /**
        * Test cookie name.
        * @description Test cookie will be set if test url query parameter is used to
                       switch the host ecom framework uses to call ATG.
        * @memberOf CNP.ecom
        * @private
        * @type string
        * @default ecom_test
        * @see CNP.ecom.testparam
        */
        testcookie = fwid + '_test',

        /**
        * Test url query parameter name.
        * @description This parameter lets you switch the host that is being used to call ATG.
        * @memberOf CNP.ecom
        * @private
        * @type string
        * @default ecommerce_test_site
        * @example: http://www.self.com/?ecommerce_test_site=test-magazine.self.com
        */
        testparam = 'ecommerce_test_site',

        /**
        * Sets debug mode.
        * @description This parameter allows usage of debug parameters.
        * @memberOf CNP.ecom
        * @private
        * @type intiger
        * @default 0
        * @example: http://www.self.com/?edebug=1
        */
        edebug = 0,

        /**
        * Sets target version (edebug parameter used in uri).
        * @description This parameter lets you set the targeter version which is being used to call ATG.
        * @memberOf CNP.ecom
        * @private
        * @type bolean/string
        * @default ''
        * @example: http://www.self.com/?targetVer=TEST
        */
        targetVer = false,

        /**
        * Common error prefix.
        * @description This is a common error message prefix used in form validation.
        * @memberOf CNP.ecom
        * @private
        * @type string
        */
        errPrefix = 'Please enter a valid ',

        /**
        * Regular expression to test email addresses
        * @memberOf CNP.ecom
        * @private
        * @type regex
        */
        emailregx = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,

        /**
        * Regular expression to test US zipcode
        * @memberOf CNP.ecom
        * @private
        * @type regex
        */
        uszipregx = /(^\d{5}$)|(^\d{5}-\d{4}$)/,

        /**
        * Browser User Agent
        * @memberOf CNP.ecom
        * @private
        * @type string
        */
        userAgent = navigator.userAgent.toLowerCase(),

        /**
        * Browsers object.
        * @memberOf CNP.ecom
        * @private
        * @type object
        */
        browser = {
            safari: /webkit/.test(userAgent),
            opera: /opera/.test(userAgent),
            msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
            moz: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
        },

        /**
        * Sets height property depending on browser
        * @memberOf CNP.ecom
        * @private
        * @type string
        */
        heightprop = ((browser.moz || browser.safari) ? 'offset' : 'scroll') + 'Height',

       /**
        * custom callback names for open /close iframe
        * @memberOf CNP.ecom
        * @private
        * @type Array
        * @default ecom
        */
        customCallbacks = {},

         getElmHeight = function(){
            var D = document;
            return Math.max(
                Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
                Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
                Math.max(D.body.clientHeight, D.documentElement.clientHeight)
            );
        },


        /**
        * Open a layer with an iFrame
        * @memberOf CNP.ecom
        * @private
        * @param {string} url Url for the iFrame
        * @uses CNP.ecom.elmnew
        * @uses CNP.ecom.selects
        * @uses CNP.ecom.urlParam
        */
        openFrame = function(url) {
            var div,
                frame,
                win = jQuery(window);
            if(elmbyid(fwid + 'usc')){
                div = elmbyid(fwid + 'usc');
            }else{
                div = elmnew('div');
                div.id = fwid + 'usc';
            }
            if(elmbyid(fwid + 'usf')){
                frame = elmbyid(fwid + 'usf');
            }else{
                frame = elmnew('iframe');
                frame.id = fwid + 'usf';
            }

            sd.body.style.overflow = 'hidden';
            merge(div.style, {
                width: sd.body.scrollWidth + 'px',
                height: getElmHeight() + 'px',
                filter: 'alpha(opacity = 80)',
                opacity: '.80',
                zIndex: 110000000,
                position: 'absolute',
                left: '0px',
                top: '0px',
                background: '#000000'
            });

            elmchild(sd.body,div,'ap');

            // hide select boxes on the document
            selects(true);

            merge(frame, {
                name: fwid + 'usf',
                src: urlParam(uriencdec(url).replace(/^https*:\/\//g, protocol()), 'iframe', 'true'),
                width: 749,
                height: 669,
                scrolling: 'no'
            });

            merge(frame.style, {
                background: '#ffffff',
                border: '0px',
                position: 'absolute',
                zIndex: 120000000,
                left: (win.width()/2 - frame.width / 2) + 'px',
                top: (win.scrollTop() + (win.height()/7)) + 'px'
            });


            elmchild(sd.body,frame,'ap');

            bind('load', frame, function() {
                try {
                    this.height = this.contentDocument.body[heightprop] + 'px';
                } catch(e) {}
            });

            bind('resize', window, function() {
                var div = elmbyid(fwid + 'usc'),
                    frame = elmbyid(fwid + 'usf');

                div.style.width = sd.body.scrollWidth + 'px';
                div.style.height = sd.body.scrollHeight + 'px';
                frame.style.left = (win.width()/2 - frame.width / 2) + 'px';
                frame.style.top =  (win.scrollTop() + (win.height()/7)) + 'px';
            });



            div = frame = null;
        },


        /**
        * Create new element shortcut
        * @memberOf CNP.ecom
        * @private
        * @param {string} type Element type to create
        * @param {object} [context] Document in which to create an element
        * @return {object} New element
        */
        elmnew = function(type, context) {
            return (context || sd).createElement(type);
        },

        /**
        * Get element by id shortcut
        * @memberOf CNP.ecom
        * @private
        * @param {string} id Id of the element we are looking for
        * @param {object} [context] Context in which to look for the element
        * @return {object|null} Element
        */
        elmbyid = function(id, context) {
            return (context || sd).getElementById(id);
        },

        /**
        * Get element(s) by tag name shortcut
        * @memberOf CNP.ecom
        * @private
        * @param {string} tag Tag name of the element(s) we are looking for
        * @param {object} [context] Context in which to look for the element(s)
        * @return {array} Array of located elements
        */
        elmbytag = function(tag, context) {
            return (context || sd).getElementsByTagName(tag) || [];
        },

        /**
        * Remove or append Child node to Parent (or adoptive parent)
        * @memberOf CNP.ecom
        * @private
        * @param {object} parent DOM element to append to or remove from
        * @param {object} child DOM element to append or remove from parent
        * @param {String} operation Operation to perform (ap:append or rm:remove)
        */
        elmchild = function(parent, child, operation) {
           (operation === 'rm' ? parent.removeChild(child) :
                (operation === 'ap' ? parent.appendChild(child) :
                    false
                )
            );
        },

        /**
        * Show or hide element via css: display
        * @memberOf CNP.ecom
        * @private
        * @param {object} el DOM element to show/hide
        * @param {String} operation Operation to perform (default : show)
        */
        elmdisplay = function(el, operation) {
           el.style.display = (operation === "hide" ? "none" : "block");
        },

        /**
        * Edit innerHTML of an element
        * @memberOf CNP.ecom
        * @private
        * @param {object} el DOM element to show/hide
        * @param {String} html Contents to be added to el
        */
        elmhtml = function(el, html) {
           el.innerHTML = html;
        },

        /**
        * Show/hide select boxes
        * @memberOf CNP.ecom
        * @private
        * @param {boolean} [hide] If set to true will hide, otherwise show
        * @uses CNP.ecom.elmbytag
        */
        selects = function(hide) {
            var selects = elmbytag('select'),
                i = 0,
                il = selects.length;

            for (; i < il; i++) {
                selects[i].style.visibility = (hide) ? 'hidden' : '';
            }
        },

        /**
        * URI encode/decode a string
        * @memberOf CNP.ecom
        * @private
        * @param {string} str String to encoded or decoded
        * @param {boolean} [encode] Will encode if set to true, otherwise decode
        * @return {string} Encoded or decoded string
        */
        uriencdec = function(str, encode) {
            return (encode) ? encodeURIComponent(str) : decodeURIComponent(str);
        },

        /**
        * Get XML Node Value
        * @memberOf CNP.ecom
        * @private
        * @param {object} node XML document node
        * @return {string} Value of the node
        */
        xmlvalue = function(node) {
            return (node && node.firstChild) ? node.firstChild.nodeValue : '';
        },

        /**
        * Get, Set or Replace url query parameters
        * @memberOf CNP.ecom
        * @private
        * @param {string} query Query string to be parsed
        * @param {string} param Parameter name
        * @param {string} [value] Parameter value to be set
        * @return {string} Parameter value or Query string
        */
        urlParam = function(query, param, value) {
            if ((empty(query) && value == null) || empty(param)) {
                return '';
            }

            var re = new RegExp('(^|[?=&\|]+)' + param + '=([^&\|]*)(&|$)?', 'i'),
                ismatch = query.match(re);

            // not setting value, return param value
            if (value == null) {
                return (ismatch || '')[2] || '';
            }

            // replace or add param
            if (ismatch) {
                return query.replace(re, (empty(value) ? '' : '$1' + param + '=' + value));
            } else {
                return query += (query.match(/\?/) ? '&' : '?') + param + '=' + value;
            }
        },

        /**
        * Resize iFrame to fit inner content
        * @memberOf CNP.ecom
        * @private
        * @param {integer} rid Request ID
        */
        resizeiFrame = function(rid) {
            if (requests[rid].fid) {
                try {
                    requests[rid].fid.frameElement.style.height = requests[rid].doc.body[heightprop] + 'px';
                } catch(e) {}
            }
        },

        /**
        * Bind an event to DOM element
        * @memberOf CNP.ecom
        * @private
        * @param {string} type Event type
        * @param {object} elem DOM element
        * @param {function} handle Handler function for the event
        */
        bind = function(type, elem, handle) {
            if (elem.attachEvent) {
                elem.attachEvent('on' + type, handle);
            } else {
                elem.addEventListener(type, handle, false);
            }

            // prevent memory leaks in IE
            elem = null;
        },

        /**
        * unBind an event from DOM element
        * @memberOf CNP.ecom
        * @private
        * @param {string} type Event type
        * @param {object} elem DOM element
        * @param {function} handle Handler function for the event
        */
        unbind = function(type, elem, handle) {
            if (elem.detachEvent) {
                elem.detachEvent('on' + type, handle);
            } else {
                elem.removeEventListener(type, handle, false);
            }

            // prevent memory leaks in IE
            elem = null;
        },

        /**
        * Get current page protocol (http:// or https://)
        * @memberOf CNP.ecom
        * @private
        * @return {string} Current protocol
        */
        protocol = function() {
            return (location.protocol === 'https:' || settings.https) ? 'https://' : 'http://';
        },

        /**
        * Get current site domain
        * @memberOf CNP.ecom
        * @private
        * @return {string} Domain name in format: example.com
        */
        domain = function() {
            var d = location.hostname.split(':')[0].split('.'),
                dl = d.length;
            return d.slice(dl - 2, dl).join('.');
        },

        /**
        * Get user id.
        * @description Retrives used id from amg_user_record cookie
        * @memberOf CNP.ecom
        * @private
        * @return {string} User ID
        * @uses CNP.ecom.urlParam
        */
        user = function() {
            return urlParam(cookie.get('amg_user_record'), 'uid');
        },

        /**
        * Get current section
        * @memberOf CNP.ecom
        * @private
        * @return {string} Section name
        */
        section = function() {
            var uripart = sl.pathname.split('/')[1] || '';
            return ((uripart !=='' ? uripart.match(/^[^\.]*$/) : ['homepage']) || [''])[0];
        },

        /**
        * Ping ATG server.
        * @description Creates an image, assings events to the image load, error and abort. Set's the src
          to status.jsp.
        * @memberOf CNP.ecom
        * @private
        * @uses CNP.ecom.bind
        */
        ping = function() {
            pingImage = elmnew('img');
            bind('load', pingImage, alive);
            bind('error', pingImage, dead);
            bind('abort', pingImage, dead);
            pingImage.src = settings.host + settings.pingPath + '?ts=' + (new Date()).getTime() + ((settings.user) ? '&amgUserId=' + settings.user : '') + '&parent.referrer=' + uriencdec(sd.referrer, true);
            pingTimer = setTimeout(dead, settings.timeout * 1000);
        },

        /**
        * Ping cleanup.
        * @description Clear timer, unload events and set the image to null.
                       We do not really need to do this, but to be safe and to free up some
                       memory for the browser we are.
        * @memberOf CNP.ecom
        * @private
        * @uses CNP.ecom.unbind
        */
        clearPing = function() {
            clearTimeout(pingTimer);
            unbind('load', pingImage, alive);
            unbind('error', pingImage, dead);
            unbind('abort', pingImage, dead);
            pingImage = null;
        },

        /**
        * ATG server responded, ping came back.
        * @description The following actions are taken:
                    <ul>
                        <li>Set the framework live if ready.</li>
                        <li>Call ping cleanup.</li>
                        <li>Execute initial callback if one was set.</li>
                        <li>Execute all requests still in queue.</li>
                    </ul>
        * @memberOf CNP.ecom
        * @private
        * @uses CNP.ecom.clearPing
        * @uses CNP.ecom.process
        * @uses CNP.ecom.callback
        */
        alive = function() {
            if (!ready) {
                return;
            }

            // clear ping
            clearPing();

            // it's alive ..... aliiiiiveeeeeee ................
            live = true;

            // execute call back
            if (settings.callalive) {
                callback(settings.callalive);
            }

            // run queue
            for (var q; q = queue.shift();) {
                process(q);
            }
        },

        /**
        * ATG server did not respond in time, ping timeout or returned error.
        * @description The following actions are taken:
                    <ul>
                        <li>Set the framework ready and live to false.</li>
                        <li>Call ping cleanup.</li>
                        <li>Clean queue array and calls objects</li>
                    </ul>
        * @memberOf CNP.ecom
        * @private
        * @uses CNP.ecom.clearPing
        */
        dead = function() {
            clearPing();
            ready = live = false;
            queue = requests = null;
            // execute call back
            if (settings.calldead) {
                callback(settings.calldead);
            }
        },

        /**
        * Write request script tag to the placement container
        * @memberOf CNP.ecom
        * @private
        * @param {integer} rid Request ID
        * @param {string} path Path to ATG jsp page
        * @param {object} query Query parameters to be sent with the call
        * @param {string} [temp] Internal use for mbox calls
        * @uses CNP.ecom.merge
        * @uses CNP.ecom.elmnew
        * @uses CNP.ecom.elmbytag
        * @uses CNP.ecom.makeParams
        */
        writeScript = function(rid, path, query, temp) {
            query = merge(query, {
                'js.enc': (settings.jsEnc === 'jsesc' ? 'jsesc' : true),
                encType: requests[rid].enc,
                'js.callback': ((requests[rid].fid) ? 'parent.' : '') + 'CNP.ecom.response',
                'js.reqId': rid,
                tgt: requests[rid].tgt
            });

            var script = elmnew('script');
            script.type = 'text/javascript';
            script.id = fwid + rid + ((temp) ? temp : '');
            script.src = settings.host + path + '?ts=' + (new Date()).getTime() + '&' + makeParams(query);
            elmchild(requests[rid].p,script,'ap');
            script = null;
        },

        /**
        * Cleanup request script tag from head tag
        * @memberOf CNP.ecom
        * @private
        * @param {integer} rid Request ID
        * @uses CNP.ecom.elmbyid
        * @uses CNP.ecom.elmbytag
        */
        cleanScript = function(rid) {
            var elm = elmbyid(fwid + rid);
            if (elm) {
                elmchild(requests[rid].p, elm, 'rm');
            }
            elm = null;
        },

        /**
        * Process request.
        * @description Collects all the params from the request, used id (if logged in) and site section.
                       Writes script tag in the head to call ATG server.
                       Executes a 'callbefore' callback if one was set for the request.
        * @memberOf CNP.ecom
        * @private
        * @param {integer} rid Request ID
        * @uses CNP.ecom.writeScript
        * @uses CNP.ecom.callback
        */
        process = function(rid) {
            if (settings.user) {
                requests[rid].params.amgUserId = settings.user;
            }

            if (settings.section) {
                requests[rid].params.section = settings.section;
            }

            // execute callback
            if (requests[rid].callbefore) {
                callback(requests[rid].callbefore, requests[rid].fid);
            }

            // write call
            writeScript(rid, settings.offerPath, requests[rid].params);
        },

        /**
        * Execute callback function
        * @memberOf CNP.ecom
        * @private
        * @param {function} callback Function to be called
        * @param {object} params Object of parameters to be passed to the callback function
        * @param {object} [win] Window in which to call the function
        */
        callback = function(callback, win) {
            // execute call back
            callback.func = callback.func || '';
            callback.params = callback.params || {};
            win = win || window;

            if (typeof callback.func === 'function') {
                callback.func.call(this, callback.params);
            } else if (typeof win[callback.func] === 'function') {
                win[callback.func].call(this, callback.params);
            }
        },

        /**
        * Convert parameter object into url query string
        * @memberOf CNP.ecom
        * @private
        * @param {object} params Object of parameters to be converted
        * @return {string} Query string
        * @uses CNP.ecom.uriencdec
        */
        makeParams = function(params) {
            var query = [],
                i;

            for (i in params) {
                query.push(i + '=' + uriencdec(params[i], true));
            }

            return query.join('&');
        },

        /**
        * Cookie functions object
        * @memberOf CNP.ecom
        * @private
        */
        cookie = {
            /**
            * Get cookie
            * @memberOf CNP.ecom
            * @private
            * @param {string} name Cookie name
            * @return {string} Cookie value
            * @example cookie.get('the_cookie');
              Get the value of a cookie.
            */
            get: function(name) {
                var cookies = sd.cookie.split('; '),
                    cookie = [],
                    c = 0,
                    cl = cookies.length;

                for (; c < cl; c++) {
                    cookie = cookies[c].split('=');
                    if (cookie[0] === name) {
                        return uriencdec(cookie.slice(1).join('='));
                    }
                }

                return '';
            },

            /**
            * Delete the cookie with the given name.
            * @param {string} name Cookie name
            *
            * @example
                Delete the cookie:
                cookie.del('the_cookie');
            */
            del: function(name) {
                return this.set(name, '', { expires: -1 });
            },

            /**
            * Create a cookie with the given name and value and other optional parameters.
            * @memberOf CNP.ecom
            * @private
            * @param {string} name Cookie name
            * @param {string} [value] Cookie value
            * @param {object} [options] Cookie options
            *
            * @example
                Create or set the value of a cookie.
                cookie.set('the_cookie', 'the_value');

                Create a cookie with all available options.
                cookie.set('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'condenast.com', secure: true });

                Delete the cookie
                cookie.set('the_cookie', '', { expires: -1 });
            */
            set: function(name, value, options) {
                options = options || {};
                value = value || '';
                if (options.expires) options.expires=options.expires instanceof Date ? options.expires.toUTCString() : typeof options.expires === 'number' ? (new Date(+(new Date) + options.expires * 60 * 60 * 1000)).toUTCString() : '';
                options.path = '/';
                options.domain = settings.domain;

                var cookie = [name + '=' + uriencdec(value, true)];

                if (options.expires) cookie.push('expires=' + options.expires);
                if (options.path) cookie.push('path=' + options.path);
                if (options.domain) cookie.push('domain=' + options.domain);
                if (options.secure) cookie.push('secure');

                return options.secure && cookie.push('secure'), sd.cookie = cookie.join(';'), true;
            }
        },

        /**
        * Merge two objects
        * @memberOf CNP.ecom
        * @private
        * @param {object} destination Destination object
        * @param {object} source Source object
        * @return {object} Merged object
        */
        merge = function(destination, source) {
            for (var property in source) {
                destination[property] = source[property];
            }
            return destination;
        },

        /**
        * Trim string, remove leading and trailing spaces, new line and tab characters
        * @memberOf CNP.ecom
        * @private
        * @param {string} str The string being trimmed
        * @return {string} Trimmed string
        */
        trim = function(str) {
            str = str || '';
            var start = -1, end = str.length;
            while (str.charCodeAt(--end) < 33);
            while (++start < end && str.charCodeAt(start) < 33);
            return str.slice(start, end + 1);
        },

        /**
        * Determines whether or not the provided string is empty
        * @memberOf CNP.ecom
        * @private
        * @param {string} str The string being tested
        * @return {boolean} the result
        */
        empty = function(str) {
            return !/\S/.test(str || '');
        },

        /**
        * Validator methods functions
        * @memberOf CNP.ecom
        * @private
        */
        validateMethods = {
            /**
            * Validate required field
            * @memberOf CNP.ecom
            * @private
            * @param {string} value Field value
            * @return {object} Field passed requirements (boolean), Error message (string)
            * @uses CNP.ecom.empty
            */
            required: function(value) {
                return {
                    res: !empty(value),
                    msg: this.title + ' is required'
                }
            },

            /**
            * Validate email field
            * @memberOf CNP.ecom
            * @private
            * @param {string} value Field value
            * @return {object} Field passed requirements (boolean), Error message (string)
            * @uses CNP.ecom.empty
            */
            email: function(value) {
                return {
                    res: empty(value) || emailregx.test(value),
                    msg: errPrefix + 'email address'
                }
            },

            /**
            * Validate zipcode field
            * @memberOf CNP.ecom
            * @private
            * @param {string} value Field value
            * @return {object} Field passed requirements (boolean), Error message (string)
            * @uses CNP.ecom.empty
            */
            zipcode: function(value) {
                return {
                    res: empty(value) || uszipregx.test(value),
                    msg: errPrefix + 'zipcode'
                }
            }
        },

        /**
        * Validate field closure
        * @memberOf CNP.ecom
        * @private
        * @param {object} elm Element to be validated
        * @param {object} rules Object of rules for the field to be validated against
        * @param {integer} rid Request ID
        * @return {boolean} Validation passed?
        * @uses CNP.ecom.validateMethods
        * @uses CNP.ecom.resizeiFrame
        */
        validateField = function(elm, rules, rid) {
            return function() {
                var errfield = elmbyid(elm.name + '_err_' + rid),
                    result = {},
                    f = 0,
                    fl = rules.length;

                for (; f < fl; f++) {
                    result = validateMethods[rules[f]].call(elm, elm.value);
                    if (!result.res) {
                        elmhtml(errfield,result.msg);
                        elmdisplay(errfield);
                        break;
                    }
                    elmdisplay(errfield,'hide');
                }

                resizeiFrame(rid);
                return result.res;
            }
        },

        /**
        * Get form fields as object of key/value pairs
        * @memberOf CNP.ecom
        * @private
        * @param {object} form Form element
        * @return {object} Form fields
        * @uses CNP.ecom.empty
        */
        getForm = function(form) {
            if (!form) return {};

            var fields = {},
                elms = form.elements,
                elm,
                e = 0,
                el = elms.length;

            for (; e < el; e++) {
                elm = elms[e];
                if (elm.tagName !== 'FIELDSET' && elm.type !== 'submit') {
                    fields[elm.name] = elm.value;
                }
            }

            return fields;
        },

        /**
        * Initiate form validation.
        * @memberOf CNP.ecom
        * @private
        * @param {integer} rid Request ID
        * @uses CNP.ecom.elmbyid
        * @uses CNP.ecom.elmbytag
        * @uses CNP.ecom.validateField
        * @uses CNP.ecom.getForm
        * @uses CNP.ecom.bind
        * @uses CNP.ecom.writeScript
        */
        validate = function(rid) {
            var form = elmbytag('form', requests[rid].p)[0],
                elms = form.elements,
                e = 0,
                el = elms.length;

            if (!form || !el) {
                return false;
            }

            requests[rid].fh = [];

            for (; e < el; e++) {
                var rules = [],
                    elm = elms[e],
                    classes = (elm.className) ? elm.className.split(/\s/) : [],
                    c = 0,
                    cl = classes.length;

                if (!cl) {
                    continue;
                }

                if (elm.type === 'submit') {
                    requests[rid].btn = elm;
                    continue;
                }

                for (; c < cl; c++) {
                    if (classes[c] in validateMethods) {
                        rules.push(classes[c]);
                    }
                }

                if (rules.length) {
                    var handle = new validateField(elm, rules, rid);
                    requests[rid].fh.push(handle);
                    bind('blur', elm, handle);
                }
            }

            /* set submit event */
            bind('submit', form, function(e) {
                /* cancel the event, stop form submit */
                if (e.cancelable) {
                    e.preventDefault();
                }

                e.returnValue = false;

                var valid = true,
                    h = 0,
                    hl = requests[rid].fh.length;

                /* fire each validation rule */
                for (; h < hl; h++) {
                    valid &= requests[rid].fh[h]();
                }

                /* collect form inputs and submit */
                if (valid) {
                    requests[rid].btn.disabled = 'disabled';
                    requests[rid].btn.value = 'Processing';
                    writeScript(rid, settings.subPath, getForm(e.srcElement || e.target));

                    requests[rid].frmto = setTimeout(function() {
                        form.reset();
                        requests[rid].btn.disabled = '';
                        requests[rid].btn.value = 'Submit';
                        var err = elmbyid('frm_error_' + rid, requests[rid].doc);
                        elmhtml(err,'There was an error processing your order.<br />Please try again.');
                        elmdisplay(err);
                    }, 5000);
                }

                /* cancel the event, stop form submit */
                return false;
            })
        },

        /**
        * Initiate AutoSub form monitor
        * @memberOf CNP.ecom
        * @private
        * @param {integer} rid Request ID
        * @uses CNP.ecom.elmbytag
        * @uses CNP.ecom.bind
        * @uses CNP.ecom.setAutoSub
        * @uses CNP.ecom.urlParam
        */
        monitorAutoSub = function(rid) {
            var elms = elmbytag('input', requests[rid].p),
                i = 0,
                il = elms.length,
                current = urlParam(ss, 'as'),
                elm;

            for (; i < il; i++) {
                elm = elms[i];

                if (elm.value === current && !elm.checked) {
                    elm.checked =  true;
                    setAutoSub.apply(elm, [elm]);
                }

                if (elm.type !== 'hidden') {
                    bind('change', elm, setAutoSub);
                }

            }
        },

        /**
        * Set AutoSub form action
        * @memberOf CNP.ecom
        * @private
        * @param {event} e Event object
        * @uses CNP.ecom.urlParam
        */
        setAutoSub = function(e) {
            var elm = e.srcElement || e.target || e,
                furl = elm.form.action.split('?');

            furl[1] = ((!furl[1]) ? '' : '?' + furl[1]);
            elm.form.action = furl[0] + urlParam(furl[1], 'as', elm.checked?elm.value:0);
        },

        /**
        * Attach mBox request to document load event
        * @memberOf CNP.ecom
        * @private
        * @param {integer} rid Request ID
        * @param {string} js mBox javascript code
        * @uses CNP.ecom.bind
        * @uses CNP.ecom.setMbox
        */
        attachMbox = function(rid, js) {
            var code = js.match(/mboxCreate\(([^\)]*)\)/)[1];
            if (!code || typeof mbox !== 'function') {
                return;
            }
            // remove mboxDefault class
            requests[rid].p.firstChild.className = '';
            bind('load', self, function() {
                setMbox(rid, code);
            });
        },

        /**
        * Create mBox
        * @memberOf CNP.ecom
        * @private
        * @requires mbox.js
        * @param {integer} rid Request ID
        * @param {string} code mBox javascript code
        * @uses CNP.ecom.elmnew
        */
        setMbox = function(rid, code) {
            var mbd = elmnew('div'),
                params = code.replace(/'/g, '').split(','),
                q;

            // set temp div id and append
            mbd.id = 'tempmbox' + rid;
            elmdisplay(mbd,'hide');
            elmchild(requests[rid].p,mbd,'ap');
            // add div id to begining params
            params.unshift(mbd.id);
            // call mbox
            q = mboxDefine.apply(this, params);
            q.w.addParameter('rid', rid);
            q.setFetcher(new mboxAjaxFetcher());

            q.getUID = function() {
                var c = this.w.getParameters(),
                    i = 0,
                    il = c.length;

                for (; i < il; i++) {
                    if (c[i].name === 'rid') {
                        return c[i].value;
                    }
                }

                return 0;
            }

            // remove div id from params for the second call
            params.shift();
            mboxUpdate.apply(this, params);
            mbd = null;
        },

       /**
        * Base 64 Encode/Decode
        * @memberOf CNP.ecom
        * @private
        */
        base64 = {
            /**
            * Base 64 character base
            * @memberOf CNP.ecom
            * @private
            * @type string
            */
            s: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

            /**
            * Base 64 Decode
            * @memberOf CNP.ecom
            * @private
            * @param {string} str Encoded string
            * @return {string} Decoded string
            */
            d: function(str) {
                var bits,
                    decOut = '',
                    i = 0,
                    il = str.length;

                for (; i < il; i += 4) {
                    bits = (this.s.indexOf(str.charAt(i)) & 0xff) << 18 | (this.s.indexOf(str.charAt(i + 1)) & 0xff) << 12 | (this.s.indexOf(str.charAt(i + 2)) & 0xff) << 6 | this.s.indexOf(str.charAt(i + 3)) & 0xff;
                    decOut += String.fromCharCode((bits & 0xff0000) >> 16, (bits & 0xff00) >> 8, bits & 0xff);
                }

                if (str.charCodeAt(i - 2) === 61) {
                    return decOut.substring(0, decOut.length - 2);
                } else if (str.charCodeAt(i - 1) === 61) {
                    return decOut.substring(0, decOut.length - 1);
                } else {
                    return decOut;
                }
            }
        },

        /**
        * Show testing alert div
        * @memberOf CNP.ecom
        * @private
        * @uses CNP.ecom.elmnew
        * @uses CNP.ecom.merge
        * @uses CNP.ecom.cookie.set
        * @uses CNP.ecom.urlParam
        */
        showPreview = function() {
            var div = elmnew('div'),
                a = elmnew('a');

            div.id = testcookie;
            elmhtml(div,'!!! ATTENTION !!! YOU ARE USING ECOM PREVIEW SERVER !!! ATTENTION !!!<br />');

            merge(div.style, {
                zIndex: 100000000,
                backgroundColor: '#FFD700',
                color: '#809000',
                padding: '4px',
                fontWeight: 'bold',
                textAlign: 'center',
                border: '1px solid #333',
                marginBottom: '10px',
                position: 'fixed',
                width: '100%',
                top: '0px'
            });

            elmhtml(a,'[ return to normal mode ]');
            a.href = '#';
            elmchild(div,a,'ap');
            elmchild(sd.body,div,'ap');

            bind('click', a, function(e) {
                cookie.del(testcookie);
                elmchild(sd.body,(e.srcElement || e.target).parentNode,'rm');
                sl.search = urlParam(ss, testparam, '');
                return false;
            });

            div = a = null;
        },

        /**
        * Default settings
        * @memberOf CNP.ecom
        * @private
        */
        settings = {
            pingPath: 'status.jsp',
            offerPath: 'targetedOffer.jsp',
            subPath: 'embeddedForm.jsp',
            showPath: 'showOffer.jsp',
            docDomain: true,
            domain: domain(),
            host: 'magazine.' + this.domain,
            path: '/ecom/',
            user: user(),
            section: section(),
            timeout: 2,
            https: false,
            callback: null,
            params: {},
            cdn: false,
            onload: false,
            contentEnc: 'xml',
            jsEnc: 'true'
        };

    /**
    * @scope CNP.ecom
    */
    return {
        /**
        * Start Ecom
        * @param {object} [options] Options object
        * @uses CNP.ecom.urlParam
        * @example
            CNP.ecom.start({
                // required
                cnd: <%= !StringUtils.isEmpty(request.getHeader("cdn-request")) %>,
                // optional, default magazine.currentdomain.com
                host: "&lt;spring:message code='ecom.baseUrl' /&gt;",
                // optional
                pingPath: "status.jsp",
                // optional
                offerPath: "targettedOffer.jsp",
                // optional
                subPath: "embeddedForm.jsp",
                // optional
                showPath: "showOffer.jsp",
                // optional
                path: "/ecom/",
                // optional
                section: "site_section",
                // optional
                user: "user_id",
                // optional
                https: false,
                // optional
                timeout: 4,
                // load content on document load
                onload: false,
                // optional type of content encoding would be used, default is xml
                contentEnc: 'xml',
                // optional type of javascript encoding would be used to deliver the content
                jsEnc: 'true',
                // optional
                params: {
                    key: value
                },
                // optional, will be called if ping to ATG servers is successful
                callalive: {
                    func: some_function,
                    params: {
                        name: 'value'
                    }
                },
                // optional, will be called if ping to ATG servers timedout or invalid
                calldead: {
                    func: some_function,
                    params: {
                        name: 'value'
                    }
                }
            });
        */
        start: function(options) {
            if (urlParam(ss, 'nojoy') === '1') {
                return ready = live = false;
            }

            for (var set in settings) {
                settings[set] = urlParam(ss, fwid + set) || (options || {})[set] || settings[set];
            }

            if (settings.cdn === false) {
                // set preview enviroment
                var ecomtest = urlParam(ss, testparam) || cookie.get(testcookie) || '';

                if (ecomtest) {
                    cookie.set(testcookie, ecomtest);
                    bind('load', self, showPreview);
                    settings.host = ecomtest;
                } else {
                    cookie.del(testcookie);
                }
            } else {
                cookie.del(testcookie);
            }

            // set document.domain if enabled
            if (settings.docDomain && settings.domain) {
                sd.domain = settings.domain;
            }

            // set host
            settings.host = protocol() + settings.host.replace(/^https*:\/\/|\/+$/g, '') + settings.path;

            // ping server
            ping();


            // bind window load event
            bind('load', self, function() {
                // kill mboxCreate functionality after page load as it only creates errors after that
                mboxCreate = function() { return false; }

                // deliver upsell if url parameter 'ecomupsell' exists
                if (urlParam(ss, 'ecomupsell') === 'true') {
                    //openFrame(settings.host + settings.upsellPath);
                    openFrame(uriencdec(urlParam(ss,"ecomupsellurl")).replace(/^https*:\/\//g, protocol())); /*Enable this for lightbox iframed popup window*/
                }

                // if unload, bind load event
                if (settings.onload) {
                    settings.onload = false;
                    // run queue
                    for (var q; q = queue.shift();) {
                        process(q);
                    }
                }
            })

            suppressed = urlParam(ss, 'nojoytgt');

            edebug = (urlParam(ss, 'edebug')==='1')?1:0;

            // activate debug parameters
            if (edebug) {
                targetVer = urlParam(ss, 'targetVer') || false;
            }
        },

        /**
        * mBox ecom call.
        * @description Grabs placement id from mBox call and creates a call back to ATG servers
                       with thatmBox placement id.
        * @param {integer} rid Request ID
        * @param {integer} placeid mBox Placement ID
        * @uses CNP.ecom.writeScript
        */
        mbox: function(rid, placeid) {
            if (typeof rid.getUID === 'function') {
                writeScript(rid.getUID(), settings.showPath, { 'placementId': placeid }, 'mbox');
            }
        },


        /**
        * Set callbacks for open/close iframe
        * @private
        * @param {string} name open / close
        * @param {Array} callback functions
        * @usgae:CNP.ecom.setCallback({name: 'open',callback: [function(){
        *        CN.brightcove.pauseVideo();
        *    }]});
        */

        setCallback: function(options) {
           var name = options.name;

           for (var i = 0; i < options.callback.length; i++) {
            if (!customCallbacks[name]) {
              customCallbacks[name] = [];
            }
            customCallbacks[name].push(options.callback[i]);
          }
        },


        /**
        * Close iFrame for upsell offer
        * @uses CNP.ecom.elmbyid
        * @uses CNP.ecom.selects
        */
        closeiframe: function() {
            sd.body.style.overflow = 'visible';
            elmdisplay(elmbyid(fwid + 'usf'),'hide');
            elmdisplay(elmbyid(fwid + 'usc'),'hide');

            // show select boxes
            selects(false);

            setTimeout(function() {
                elmchild(sd.body,elmbyid(fwid + 'usf'),'rm');
                elmchild(sd.body,elmbyid(fwid + 'usc'),'rm');
            }, 2000);
        },

        /**
        * Open iFrame for upsell offer
        */
        openiframe: function(url) {
           if(!url){
                return;
            }
            openFrame(url);
        },

        /**
        * Process Request.
        * @description Process:
            <ul>
                <li>If we are not ready and not live, exit</li>
                <li>Locate placement element, if none exit</li>
                <li>Figure out if the calls are originating from a frame</li>
                <li>Add request to request stack</li>
                <li>If not live, add request to queue stack and exit</li>
                <li>If live, process request</li>
            </ul>
        * @param {object} params Request parameters
        * @uses CNP.ecom.elmbyid
        * @uses CNP.ecom.process
        * @example
                CNP.ecom.request({
                    // required
                    pid: 'placement_id',
                    // required
                    tgt: 'targeter_name',
                    // optional, additional parameters to be sent to ATG
                    params: {
                        name: 'value'
                    },
                    callbefore: {
                        func: some_function,
                        params: {
                            name: 'value'
                        }
                    },
                    callafter: {
                        func: some_function,
                        params: {
                            name: 'value'
                        }
                    }
                });
        */
        request: function(req) {
            if ((!ready && !live) || suppressed.indexOf(req.pid) !== -1) {
                return;
            }

            // check params
            req = req || {};
            req.doc = (req.fid) ? req.fid.document : sd;
            req.p = elmbyid(req.pid, req.doc);
            req.params = req.params || {};

            // add params
            if(targetVer) {
                req.params.targetVer = targetVer;
            }

            if (!req.p) {
                return;
            }

            req.enc = req.enc || settings.contentEnc;

            // create unique request id
            //var rid = ;
            requests[++requests.idx] = req;

            // live? no, push to queue
            if (!live || settings.onload) {
                return queue.push(requests.idx);
            }

            // live? yes, process request
            process(requests.idx);
        },

        /**
        * Process Response
        * @param {integer} rid Request ID
        * @param {string} code Base64 encoded string
        * @uses CNP.ecom.empty
        * @uses CNP.ecom.trim
        * @uses CNP.ecom.base64.d
        * @uses CNP.ecom.elmbytag
        * @uses CNP.ecom.elmbyid
        * @uses CNP.ecom.xmlvalue
        * @uses CNP.ecom.validate
        * @uses CNP.ecom.attachMbox
        * @uses CNP.ecom.monitorAutoSub
        * @uses CNP.ecom.openFrame
        * @uses CNP.ecom.resizeiFrame
        * @uses CNP.ecom.cleanScript
        * @uses CNP.ecom.callback
        */
        response: function(rid, code) {
            // verify we have something to work with
            if (typeof requests[rid] === 'undefined' || empty(code)) {
                return;
            }

            // add code to our call object
            requests[rid].code = code;

            // decode
            var xml = trim( (settings.jsEnc === 'jsesc' ? unescape(code) : base64.d(code)) ),
                xmldoc = null;

            if (empty(xml)) {
                return;
            }

            // process code
            if (requests[rid].enc === 'xml') {
                // parse xml

                if (typeof DOMParser === 'function' || typeof DOMParser === 'object') {
                    xmldoc = (new DOMParser()).parseFromString(xml, 'text/xml');
                    if (xmldoc.documentElement.nodeName === 'parsererror') {
                        return;
                    }
                } else {
                    xmldoc = new ActiveXObject('Microsoft.XMLDOM');
                    xmldoc.async = 'false';
                    xmldoc.loadXML(xml);
                    if (xmldoc.parseError.errorCode !== 0) {
                        return;
                    }
                }

                if (!xmldoc) {
                    return;
                }

                // Target Offer Response
                if (elmbytag('targetedOffer', xmldoc)[0]) {
                    // insert content
                    var html = trim(xmlvalue(elmbytag('content', xmldoc)[0])),
                        js = (html.match(/<script(?:[^>]*src=["']([^"']*)["'][^>]*|[^>]*)>([\s\S]*?)<\/script>/i) || [null, null, null]);
                        js_scr = js[1],
                        js_txt = trim(js[2]);

                    if (empty(html)) {
                        return;
                    }

                    elmhtml(requests[rid].p,html.replace(/<script(.|\s)*?\/script>/g, ''));

                    switch (xmlvalue(elmbytag('placementType', xmldoc)[0])) {
                        // if content is HTML (Link/Banner), eval any javascript
                        case 'Banner':
                        case 'Link':
                            if (!(js_scr || js_txt)) {
                                break;
                            }

                            var script = elmnew('script');
                            script.type = 'text/javascript';
                            script.id = fwid + 'js' + rid;

                            if(js_txt){
                                if (browser.msie) {
                                    script.text = js_txt;
                                } else {
                                    elmchild(script,sd.createTextNode(js_txt),'ap');
                                }
                            } else {
                                script.src=js_scr;

                            }

                            elmchild(requests[rid].p,script,'ap');
                            //elmchild(requests[rid].p,script,'rm');
                            script = null;
                        break;

                        // if content is form, set validation
                        case 'embeddedForm':
                            validate(rid);
                        break;

                        // if content is autosub, set check
                        case 'autoSub':
                            monitorAutoSub(rid);
                        break;

                        // content is mbox, eval script
                        case 'testPlacement':
                        case 'testPlacement_Banner':
                        case 'testPlacement_Link':
                            attachMbox(rid, js);
                        break;

                        // if content is autosub, set check
                        case 'testPlacement_autoSub':
                            attachMbox(rid, js);
                            monitorAutoSub(rid);
                        break;

                        // content is mbox, eval script
                        case 'testPlacement_embeddedForm':
                            attachMbox(rid, js);
                            validate(rid);
                        break;
                    }

                    // call after callback function
                    if (requests[rid].callafter) {
                        callback(requests[rid].callafter, requests[rid].fid);
                    }
                // Form Submition Response
                } else if (elmbytag('response', xmldoc)[0]) {
                    clearTimeout(requests[rid].frmto);
                    var err = elmbyid('frm_error_' + rid, requests[rid].doc);

                    // Form Error
                    if (elmbytag('errors', xmldoc)[0]) {
                        var errstr = '',
                            errors = elmbytag('error', xmldoc),
                            e = 0,
                            el = errors.length;

                        for (; e < el; e++) {
                            errstr += xmlvalue(elmbytag('errorMessage', errors[e])[0]) + '<br />';
                        }

                        elmhtml(err,errstr);
                        elmdisplay(err);

                    // Clean error, reset form, open confirmation
                    } else {
                        elmdisplay(err,'hide');
                        elmhtml(err,'');

                        if (elmbytag('ccUpsellPage', xmldoc)[0]) {
                            openFrame(xmlvalue(elmbytag('ccUpsellPage', xmldoc)[0]).replace(/^https*:\/\//g, protocol()));
                        }

                        elmbytag('form', requests[rid].p)[0].reset();
                    }

                    requests[rid].btn.disabled = '';
                    requests[rid].btn.value = 'Submit';
                }
            } else {
                elmhtml(requests[rid].p,code);
            }

            // if iframe - resize to fit content
            resizeiFrame(rid);

            // clean script tags
            cleanScript(rid);
        },

        displayCmPlacement: function(placement_id){
            if((typeof pageAds != 'undefined') && (typeof pageAds[placement_id] != 'undefined') && (CN.url.params('nojoy') !=1) ) {
                var div = document.getElementById(placement_id);
                div.innerHTML = pageAds[placement_id];
            }
            else { // If NO response from HEARST
                //var failSafeArea = "${failsafeDiv}"; var displayFailsafeDiv = document.getElementById(failSafeArea); displayFailsafeDiv.style.display = "block";
            }
       },

       displayEcomErrors: function(){

            var country = jQuery('#country').val(),
            offerId = jQuery('input[name=offer_id]:checked').val(),
            subscribe = jQuery('input[id=subscribeY]:checked').val(),
            siteMagTld = CN.site.tld,
            sweepsError =   '<div id="nonus">'+
                            '<p> We apologize for the inconvenience but we cannot automatically process subscriptions with a Canadian or International address from our registration forms.</p>'+
                            '<p> Please <a href="http://www.'+siteMagTld+'/subscribe" style="color:#000000;" target="_blank">click here</a> to have your subscription sent to a non-U.S. address.</p>'+
                            '<p> If you supplied a country other than the United States by accident, please fill out your U.S. address below and click Submit.</p></div>';

            if(offerId == 'undefined' || offerId == undefined)
                {
                    if(country != 'US' && subscribe == 'SUBSCRIBED')
                    {
                        jQuery('#nonus').show();
                        if(jQuery('#nonus').size() == 0){
                            jQuery('#sweepSignup').prepend(sweepsError);
                        }
                        jQuery('html, body').animate({scrollTop:0}, 'fast');
                        return false;
                    }
                    else
                    {
                        jQuery('#nonus').hide();
                        return true;
                    }
                }
            if(country !='US' && offerId != '0')
                {
                    jQuery('#nonus').show();
                    if(jQuery('#nonus').size() == 0){
                        jQuery('#sweepSignup').prepend(sweepsError);
                    }
                    jQuery('html, body').animate({scrollTop:0}, 'fast');
                    return false;
                }
                 else
                {
                    jQuery('#nonus').hide();
                    return true;
                }
        },

        messageHandler  :   function(e){
            if(e.data == 'closeIframe')
                CNP.ecom.closeiframe();
        }
    }
})();


/* Cross Protocol/Domain event listener for ccUpsell iframe
 * @description Listens to all cross domain messages and closes the iframe if the data property matches
 * */
if (window.addEventListener) {  // all browsers(except IE before version 9)
    window.addEventListener( "message", CNP.ecom.messageHandler, false);
} else if (window.attachEvent) {  // IE before version 9
    window.attachEvent( "onmessage", CNP.ecom.messageHandler);
}
/* end file: cn-fe-ecomfw*/
/* file: cn-fe-promotheus :  : http://www.wired.com/js/cn-fe-ecom/promotheus/promotheus.js */
/***************************************
 * Validate Registration URL
 * and Show Popup when validated success
 *
 */
CN.validateRegistration=(function(){
    var url_Param_ecomUpsellURL, url_window=window.location.href;
    return {
        checkSuccessURL : function() {
            if(CN.url.params("ecomUpsell", url_window)=="true") {
                url_Param_ecomUpsellURL=decodeURIComponent(decodeURIComponent(CN.url.params("ecomUpsellURL", url_window)));
                url_Param_ecomUpsellURL=url_Param_ecomUpsellURL.replace(/^https*:\/\//g, window.location.protocol+"//");
               var isiFrame = CN.config.get('isiFrame');
                if(isiFrame == true) {
                    CNP.ecom.openiframe(url_Param_ecomUpsellURL);
                } else {
                    window.open(url_Param_ecomUpsellURL, "PaymentPage", "menubar=1,status=0,resizable=0,toolbar=0,scrollbars=0,width=910,height=560,left="+((screen.width)/3)+",top="+((screen.height)/3));
                }

            }

        }
    };
})();


CN.hearstQue = (function() {

    var queue = [], alreadyDone = false, order = 0;

        return {

            register: function(fn) {
                if (!fn){
                    return;
                }

                queue.push(fn);

                if(alreadyDone) {
                    this.run(window.pageAds);
                }
            },

            getQue: function(){
                return queue;
            },

            run: function(pageAds) {
                while(queue.length > 0) {
                    queue[0](pageAds);
                    queue.shift();
                }
                alreadyDone  = true;
            }
    };

})();

jQuery(document).ready(function() {
    CN.validateRegistration.checkSuccessURL();
});
/* end file: cn-fe-promotheus*/
/* file: cn-fe-ads-dart-bundled :  : http://www.wired.com/ads/js/cn.dart.bun.min.js */var googletag=window.googletag=window.googletag||{};if(window.googletag.cmd=window.googletag.cmd||[],googletag.apiReady||!function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript";var t="https:"==document.location.protocol;e.src=(t?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}(),CN.ad=window.CN.ad||{},CN.ad.proximic=CN.ad.proximic||{},function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript";var t="https:"==document.location.protocol;e.src=(t?"https:":"http:")+"//segment-data.zqtk.net/conde-nast?url="+encodeURIComponent(window.location.href);var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}(),CN.dart=window.CN.dart=function(e,t,n){var i,a=e(window),r={},o=[],d=!1,s=[],l=[],c=[],f=!1,u=0,g={},p=!1,m={ad:{},params:{},charmap:{},container:"_frame",dcopt:!0,frameurl:"/ads/newad.html",embed:!1,initialized:!1,ready:!1,pvid:Math.floor(1e13*Math.random()).toString(),sov:Math.floor(20*Math.random()+1).toString(),cm:Math.floor(20*Math.random()+1).toString(),remote:"/services/dart/",retry:!1,gptCallback:void 0,gptEvent:[],googleReady:!1,contentType:"",useOneAdCall:!1,moat_isInteracting:!1,moatParam:{},contentId:"",targetGenre:"",targetProximic:"",targetCnds:"",targetAdblock:"0",targetNwslttrSubrs:"null",etfThreshold:0,adCreativeIdArr:[],adLineItemIdArr:[],triggerEFT:!1,etfCalledOnce:!1,isChildDirected:!1,version:"4.21.10",errors:[],interstitialDivCreated:!1,warnings:[],dfpRefresh:"0",maxDfpRefresh:100,adSeqTargeting:"1",adSeqCap:"1",socialRef:"",socialKey:"",trafficKey:"",mbid:"",site:"",gptAdKey:3379,tiles:[],tile:0,transparency:!0,url:location.protocol+"//ad.doubleclick.net/adj/",zone:"",configFile:"/ads/cn.dartconfig.js",configLoaded:!1,configData:{},gptAdsParams:{},oneAdCallIInit:!1,domDelay:{defaultVal:700},gptDelay:{defaultVal:300},deviceDefault:"desktop",targetMap:{kw:"kw",contentId:"ctid",contentType:"cttp",dfpRefresh:"rfsh",adSeqTargeting:"sqt",CAP:"CAP",socialRef:"sclr",socialKey:"scl",trafficKey:"tfc",mbid:"mbid",pvid:"pvid",sov:"sov",targetGenre:"gn",targetProximic:"px",targetCnds:"cnds",crid:"crid",liid:"liid",cm:"cm",targetAdblock:"abk",targetNwslttrSubrs:"nlsbd"},gptAdSlotSizes:{desktop:{"728x90_topLargeDesktop":[[728,90],[970,66],[970,418],[970,250],[1140,380],[970,90],[9,1]],"728x90_topDesktop":[[728,90],[970,66],[970,418],[970,250],[900,300],[970,90],[9,1]],"728x90_topArticle":[[728,90],[970,66],[970,418],[970,90],[9,1]],"728x90_topTablet":[[728,90],[690,230],[9,1]],"728x90_bannerTablet":[[728,90],[9,1]],"728x90_bannerDesktop":[[728,90],[9,1]],"728x90_top":[[728,90],[970,418],[970,250],[980,300],[970,90],[970,66],[62,88],[88,31],[196,31],[2048,1534],[9,1]],"728x90_bottom":[[728,91]],"728x90_nmtop":[[728,90],[865,165],[1300,250],[970,250],[970,66],[9,1]],"728x91_contentbody":[[728,91],[2048,1535]],"728x92_contentbody":[[728,92],[2048,1536]],"970x418_top":[[970,418],[970,250],[980,300],[970,90],[970,66],[728,92],[88,31],[62,88],[196,31],[1140,380],[900,300]],"970x67_pushdown":[[728,92],[970,67],[970,419],[970,251],[970,91],[62,89],[88,32],[196,32],[1140,380],[900,300]],"300x250_side":[[300,250],[300,600],[300,1050]],"300x250_sideArticle":[[300,250],[300,600]],"300x250_boxDesktop":[[300,250]],"300x250_boxTablet":[[300,250]],"300x600_fullGalleryInterstitialTablet":[[300,600],[640,900]],"300x600_inlineGalleryInterstitialTablet":[[300,250],[630,639]],"300x600_interstitial_fullGalleryInterstitialTablet":[[300,600],[640,900]],"300x600_interstitial_inlineGalleryInterstitialTablet":[[300,250],[630,639]],"300x250_top":[[300,250],[300,600],[300,1050]],"300x250_bottom":[[300,251],[300,601],[300,1051]],"300x250_sponsor":[[300,250],[300,600]],"300x250_instream":[[300,255],[300,605],[300,1055]],"300x250_interstitial_top":[[300,252],[300,602],[440,330],[620,440],[900,600],[832,380]],"300x250_interstitial_full":[[300,252],[640,480],[1280,960]],"300x250_wmag":[[300,250],[300,600],[610,730]],"300x250_spot_c":[[300,253]],"300x250_left":[[300,254],[300,604]],"300x250_infeed1":[[300,250],[610,300]],"300x250_infeed2":[[300,251],[610,301]],"300x250_infeed3":[[300,252],[610,302]],"160x600_left":[[160,600],[200,700],[300,900]],"160x600_right":[[160,601],[200,701],[300,901]],"120x60_top":[[120,60]],"120x60_bottom":[[120,61]],"220x25_top":[[220,25]],"450x266_top":[[450,266]],"220x25_top_snap":[[230,96]],"220x25":[[230,96]],"1x1_top":[[1,1]],"3x1_top":[[447,100],[3,1]],"4x1_top":[[4,1]],"948x461_top":[[948,461]],"180x150_top":[[180,150]],"300x200_top":[[300,200]],"165x31_top":[[165,31]],"460x608":[[460,608],[460,150]],"320x50_top":[[300,50],[320,50],[300,150],[320,150],[300,259],[9,1]],"320x51_bottom":[[300,58],[320,58],[300,158],[320,158],[300,258],[300,608]],"300x250_takeover_mobile":[[300,250],[320,250],[320,480]],"300x50_bannerMobile":[[300,50],[9,1]],"300x250_boxMobile":[[300,250]],"300x250_interstitial_boxMobile":[[300,250]],"300x250_fullGalleryInterstitialMobile":[[300,250],[320,480]],"300x250_interstitial_fullGalleryInterstitialMobile":[[300,250],[320,480]],"300x50_wwd_top":[[300,50],[300,250]],"1300x250_top":[[1300,250]],"1300x98_top":[[1300,98]],"980x1100_top":[[980,1100]],"88x32_top":[[88,32]]},wideDesktop:{},mobile:{"320x50_top":[[300,50],[320,50],[300,150],[320,150],[300,259],[9,1]],"320x51_bottom":[[300,58],[320,58],[300,158],[320,158],[300,258],[300,608]],"300x250_takeover_mobile":[[300,250],[320,250],[320,480]],"300x50_bannerMobile":[[300,50],[9,1]],"300x250_boxMobile":[[300,250]],"300x250_interstitial_boxMobile":[[300,250]],"300x250_fullGalleryInterstitialMobile":[[300,250],[320,480]],"300x250_interstitial_fullGalleryInterstitialMobile":[[300,250],[320,480]],"300x50_wwd_top":[[300,50],[300,250]]},tablet:{}},isURLHasKeywords:!1},h="CN Ad ",v={"true":{gen:"Success",call:"Request Fired",embed:"Set to Embedded Mode.  Operating with degraded feature-set.",queue:"Request Added to Queue",plug:"Plugin Registered",valid:"Plugin Action Passed Validation",finished:"All Plugins Finished Running.",drawing:"All Ads Have Completed Drawing",drawn:"Ad Drawn",config:"Config file found"},"false":{gen:"Error",call:"Request Aborted",embed:"Set to Iframe Mode. Good job.",queue:"Request Faled To Be Added to Queue",plug:"Plugin Skipped",valid:"Plugin Action Failed Validation",finished:"Plugins Still Running",drawing:"Ads Still Drawing",drawn:"Ad Failed To Draw",config:"Config file not found"}},y={mark:function(e){this[e]=("start"===e,(new Date).getTime())}},w=function(e,t){return h+v[(t!==!1).toString()][e||"gen"]},x=function(e){var t,n=m.params,i="";for(t in n)n.hasOwnProperty(t)&&(n[t].noKey?i=n[t].refresh&&e.kws.length!==m.ad.kws.length?n[t].refresh(e):n[t].defaultValue+i:(i+=t+"=",i+=n[t].refresh&&e.kws.length!==m.ad.kws.length?n[t].refresh(e):n[t].defaultValue));return i},b=function(n,i){var a=n+i.sz,d=a+"_frame",s=!1;if(m.initialized||O("not initialized, but ads will load with no options"),""===n)return void m.errors.push({description:"Missing ad div id in CN.dart.call()",divID:n||"undefined",adSize:i.sz||"undefined",kws:i.kws||"undefined"});if(p===!1)for(var l=0;l<o.length;l++)if(o[l].adplacement===d){s=!0;break}if(s===!1||p===!0){var c=r[a]={tile:m.tiles.push(a),el:e("#"+a+m.container),kws:Y(m.ad.kws,Z.kws(i.kws)||[]),store:i.store===!1?!1:m.ad.store,sz:i.sz,isDrawn:!1,xkws:Z.kws(i.kws)||[],zone:i.zone?Z.adzone(i.zone):!1,collapse:i.collapse===!0},f=c.sz.split("x"),u=(location.pathname&&"/"!==location.pathname?location.pathname:"",m.zone?m.zone.replace(/;/gi,"/"):""),h=m.adUnit3?m.adUnit3.replace(/;/gi,"/"):void 0,v=m.adUnit4?m.adUnit4.replace(/;/gi,"/"):void 0;u&&(u=at(u,h,v));for(var l=0;l<f.length;l++)f[l]=parseInt(f[l],10);if(p===!0){var y=!1;g.drawn===!0&&(y=!0),g={url:"/"+m.gptAdKey+"/"+m.site+u,adsize:f,adname:a,adplacement:d,tiles:c.tile,kws:c.kws,drawn:y,xkws:c.xkws},t.dart.renderGPTAds()}else o.push({url:"/"+m.gptAdKey+"/"+A(i)+u,adsize:f,adname:a,adplacement:d,tiles:c.tile,kws:c.kws,drawn:!1,xkws:c.xkws}),D(c,u,"gptAds")}return this},k=function(e){return m.initialized?(n.warn(h+"Initialization called more than once.  This should only happen once per page."),!1):(y.mark("startInit"),void L(e))},C=function(e){var i,o=m.configLoaded&&m.configData.sponsorParameter?m.configData.sponsorParameter:["kw"];Z.charmap(e.charmap),m.device=e.device?e.device:m.deviceDefault,m.initialized=!0,m.site=e.adUnits?e.adUnits.unit1:e.site,m.zone=Z.adzone(e.adUnits?e.adUnits.unit2:e.zone),m.adUnit3=e.adUnits?"undefined"==typeof e.adUnits.unit3?void 0:Z.adzone(e.adUnits.unit3):void 0,m.adUnit4=e.adUnits?"undefined"==typeof e.adUnits.unit4?void 0:Z.adzone(e.adUnits.unit4):void 0,m.contentId=e.contentId,m.contentType=e.contentType,m.targetGenre=e.genre?e.genre.toString():"",m.useOneAdCall=e.useOneAdCall||!1,m.gptCallback=e.gptCallback&&"function"==typeof e.gptCallback?e.gptCallback:function(e){n.info("Cid: "+e.creativeId+" is rendered to slot of size: "+e.size[0]+"x"+e.size[1])},i=H(o,e),m.targetAdblock=E.read("AdHt")?"1":m.targetAdblock,m.targetNwslttrSubrs=E.read("atp_newsletter")?t.cookie.get("atp_newsletter"):m.targetNwslttrSubrs,j(),m.ad={store:!0,kws:i,tile:m.tile},m.configLoaded&&m.configData.docReferrer&&R(),m.configLoaded&&m.configData&&m.configData.constellation&&z(),t.url.params("getAdLog",location.search)&&ut(),t.url.params("mbid",location.search)&&(m.mbid=t.url.params("mbid",location.search)),I(),P(),J(),Q.run(),m.configLoaded&&m.configData.refresh?("undefined"==typeof t.ad.viewableRefresh&&n.info(h+"Refresh plugin not installed",[]),m.configData.refresh.type&&"auto"===m.configData.refresh.type&&m.configData.refresh.refreshTimeMsec>0&&F(m.configData.refresh.refreshTimeMsec)):m.configLoaded&&m.configData.dartRefresh&&"undefined"!=typeof m.configData.dartRefresh.active&&m.configData.dartRefresh.dartRefreshTimeMsec>0&&F(m.configData.dartRefresh.dartRefreshTimeMsec),m.embed=e.embed||m.embed,m.embed&&n.info(w("embed",!0),[]),y.mark("init"),n.info(h+"Initialized",[r]),N(),a.trigger("CN.customEvents.dartInitialized")},A=function(e){var t;return t=m.site,"undefined"!=typeof e.isCM&&e.isCM&&(t=m.site.split(".").splice(0,1)+".cm"),t},N=function(){var e;n.info(" waiting for GoogleTag ready event ",[{}]),e=setInterval(function(){window.googletag&&googletag.apiReady&&(n.info(" GoogleTag is ready ",[{}]),m.googleReady=!0,clearInterval(e),a.trigger("CN.customEvents.googleTagReady"),_())},m.gptDelay.defaultVal)},_=function(){n.info(" Event CN.customEvents.googleTagReady flushing calls",[{}]),m.useOneAdCall?n.info(" CN dart using oneAdCall() ",[{}]):(n.info(" CN dart using call() ",[{}]),e(function(){var n=setInterval(function(){for(var i=!1,a=t.dart.getGPTAds(),r=0;r<a.length;r++){var o=e("#"+e.trim(a[r].adplacement));if("interstitial1x1_frame"!==a[r].adplacement&&o.length>0&&""===o.html()){i=!0;break}}i===!0?t.dart.renderGPTAds():(t.dart.setGPTAdsRenderStatus(!0),ft(),clearInterval(n),e(window).trigger("CN.customEvents.GPTAdsRendered"))},t.dart.getDomDelay())}))},S=function(){var n,i,a,r=0;for(n=t.dart.getGPTAds(),i=t.dart.getMoreAdsCollection(),a=e.extend(i,n);r<a.length;r++)0===e("#"+a[r].adplacement).length&&(y.mark("div_missing_"+a[r].adplacement),m.errors.push({description:"Missing ad div",divID:a[r].adplacement||"undefined"}))},T=function(t){var n,i,a;0!==e("#"+t.divId).length||t.divInDom||(n="append"===t.insertMethod||"prepend"===t.insertMethod||"after"===t.insertMethod||"before"===t.insertMethod?t.insertMethod:"append",i='<div id="'+t.divId+'_frame" class="displayAd" style="display:none;'+t.css+'" data-jivox-ad-id="'+t.dataId+'"></div>',a=t.location,e(a)[n](i),t.divInDom=!0,m.warnings.push({description:"Ad library created constellation div",divID:t.divId,adSize:t.adWidth+"x"+t.adHeight,generateAdCall:t.generateAdCall,insertMethod:n,location:a})),t.generateAdCall&&b(t.name,{sz:t.adWidth+"x"+t.adHeight,kws:t.kws})},z=function(){var n=m.configData.constellation;for(key in n)e(function(n){var i,a,r;a=10,r=1,i=setInterval(function(){var o=e(n.location);o.length>0?(clearInterval(i),t.dart.createAdDiv(n)):(r++,r==a&&(clearInterval(i),t.dart.getCommon().errors.push({description:"Constellation div injection error",locationNotFound:n.location,injectionAttempts:"Max injections reached: "+r,divID:n.divId,adSize:n.adWidth+"x"+n.adHeight})))},300)}(n[key]))},D=function(t,n,i){var a=[1,1],r=a[0]+"x"+a[1],d="interstitial"+r,s=d+"_frame";0!==e("#"+s).length||m.interstitialDivCreated||(e("body").prepend('<div id="'+s+'" class="displayAd displayAd'+r+'Js" style="width:'+a[0]+'px;height: 0px;" data-cb-ad-id="'+s+'"></div>'),m.interstitialDivCreated=!0,m.warnings.push({description:"Ad library created 1x1 interstitial div",divID:"interstitial1x1_frame",adSize:"1x1",kws:""})),"gptAds"===i&&1===o.length&&o.push({url:"/"+m.gptAdKey+"/"+m.site+n,adsize:a,adname:d,adplacement:s,tiles:t.tile,kws:t.kws,drawn:!1,xkws:t.xkws})},I=function(){var e,t=document.referrer.match(/([^\/]+)/g)||[""],n={"(^|\\.)taboola.com$":"tb","(^|\\.)taboolasyndication.com$":"tb","(^|\\.)aorpum.com$":"ap","(^|\\.)stumbleupon.com$":"su","(^|\\.)outbrain.com$":"ob"};if(e=t[1],"undefined"!=typeof e)for(var i in n)null!==e.match(i)&&(m.trafficKey=n[i])},P=function(){var e,t=document.referrer.match(/([^\/]+)/g)||[""],n={"(^|\\.)facebook.com$":"fb","(^|\\.)twitter.com$":"tw","(^|\\.)reddit.com$":"rd","(^|\\.)pinterest.com$":"pn","(^|\\.)instagram.com$":"ig","(^|\\.)plus.url.google.com$":"gpl","^t.co$":"tw","(^|\\.)tumblr.com$":"tbl","(^|\\.)qzone.qq.com$":"qq","(^|\\.)weibo.com$":"we","(^|\\.)habbo.com$":"hb","(^|\\.)vk.com$":"vk","(^|\\.)renren.com$":"rr","(^|\\.)orkut.google.com$":"or"};if(e=t[1],"undefined"!=typeof e)for(var i in n)null!==e.match(i)&&(m.socialKey=n[i],m.socialRef="any")},R=function(){var e=document.referrer.match(/([^\/]+)/g)||[""],t=e[e.length-1];t&&(t=t.replace(/\?.*$/g,"").replace(".html","","gi"),m.ad.kws[m.ad.kws.length]=""+Z.kws("rfr_"+t))},E={options:{domain:t.url.domain(),path:"/"},check:function(e){return t.cookie.get(e)},read:function(e){var t=E.check(e);return""!==t?t:!1},remove:function(e){t.cookie.del(e,E.options)},write:function(e,n,i){E.options.expires=i,t.cookie.set(e,n,E.options)}},q=function(e,t,n){var i,a,r,o={},d=E.read(e);d?(n||("cn_adsqt"===e?n="adSeqTargeting":"cn_adcap"===e?n="adSeqCap":O("There is no ads tracking cookie: "+e)),o=JSON.parse(E.check(e)),i=Number(o.expire)-(new Date).getTime(),a=i/36e5,o.count=Number(o.count)+1,m[n]=""+o.count,o=JSON.stringify(o),E.write(e,o,a)):(r=6e4*t,i=(new Date).getTime()+r,o.count=Number(m[n]),o.expire=i,a=t/60,o=JSON.stringify(o),E.write(e,o,a))},j=function(){if(q("cn_adsqt",1380,"adSeqTargeting"),q("cn_adcap",10,"adSeqCap"),E.read("cn_cm"))m.cm=E.check("cn_cm");else{var e=87600;E.write("cn_cm",m.cm,e)}},O=function(e,t){var t=t?t:[];n.warn(h+e,t),m.warnings.push(e)},M=function(e,t){var n,i=m.targetMap;if(arguments.length>1){googletag.pubads().setTargeting(e,t);for(var a in i)i[a]===e&&(m[a]=t)}else for(var a in e)n=i[a]?i[a]:a,googletag.pubads().setTargeting(n,e[a]),void 0!==m[a]&&(m[a]=e[a])},F=function(e){var a=e;if("undefined"!=typeof m.configData.overrides&&"undefined"!=typeof m.configData.overrides.refresh&&"undefined"!=typeof m.configData.overrides.refresh.zone){var r=m.zone.replace(/[^\w\s]/gi,"");for(prop in m.configData.overrides.refresh.zone)r===prop&&(a=m.configData.overrides.refresh.zone[prop].dartRefreshTimeMsec)}a&&(i=setInterval(function(){return m.configData.maxRefreshes&&"undefined"!=typeof m.configData.maxRefreshes&&Number(m.dfpRefresh)>=m.configData.maxRefreshes?(clearInterval(i),void n.info(h+"Max refreshes reached. Stopping refresh",[])):(t.dart.refresh(),void n.info(h+"Refreshed ",[]))},a),n.info(h+"Refresh Initialized to "+a+"ms",[]))},L=function(i){if(t.dart.inlineConfig)return V(t.dart.inlineConfig),C(i),void n.info(h+"inline dartConfig loaded",[]);var a=i.configFile?i.configFile:m.configFile;e.ajax({url:a,dataType:"json",async:!1,error:function(){n.info(w("config",!1),[]),m.configLoaded=!1},cache:!0,success:function(e){V(e)},complete:function(){n.info(h+"dartConfig call complete",[]),C(i)}})},V=function(e){var i=e[t.site.name];if(i){for(prop in i)if(m.configData[prop]=i[prop],"object"==typeof i[prop]&&null!==i[prop])for(prop2 in i[prop])if("object"==typeof i[prop][prop2]&&null!==i[prop][prop2])for(prop3 in i[prop][prop2])if("gptAdSlotSizes"===prop2)if("[object Array]"==Object.prototype.toString.call(i[prop][prop2][prop3])&&null!==i[prop][prop2][prop3])"undefined"==typeof m[prop2]?(m[prop2][m.deviceDefault]={},m[prop2][m.deviceDefault][prop3]=i[prop][prop2][prop3]):m[prop2][m.deviceDefault][prop3]=i[prop][prop2][prop3];else for(prop4 in i[prop][prop2][prop3])"undefined"==typeof m[prop2]?(m[prop2][prop3]={},m[prop2][prop3][prop4]=i[prop][prop2][prop3][prop4]):m[prop2][prop3][prop4]=i[prop][prop2][prop3][prop4];else"undefined"==typeof m[prop2]?(m[prop2]={},m[prop2][prop3]=i[prop][prop2][prop3]):m[prop2][prop3]=i[prop][prop2][prop3];m.configLoaded=!0,n.info(h+"config file loaded successfully",[])}else m.configLoaded=!1,O("Sitename not found in config file or refresh is disabled. Ads will not refresh"),y.mark("siteNameNotFound")},Q={queue:[],register:function(e){return e&&e.init&&void 0!==e.isFinished&&e.callbacks?(this.queue.push(e),n.info(w("plug"),[e.name||"",e]),a.unbind("CN.customEvents.dartInitialized"),!0):(n.info(w("plug",!1),[e?e.name:"",e||{}]),!1)},run:function(){for(var e,t=0,i=this.queue.length;i>t;t++)e=this.queue[t],n.info(h+"Running Plugin",[e.name]),e.init({queue:this.queue,position:t,plugin:e})},reRun:function(t){for(var i,a=this.queue.length,r=t.length,o={cnds:"CN Ad CNDS kws",proximic:"CN Ad Proximic"},d=function(t){e('script[src="'+t+'"]').remove(),e("<script>").attr("src",t).appendTo("head")},s=0;r>s;s++){"proximic"===t[s]&&d("//segment-data.zqtk.net/conde-nast?url="+encodeURIComponent(window.location.href));for(var l=0;a>l;l++)i=this.queue[l],i.name===o[t[s]]&&(n.info(h+"re-running Plugin",[i.name]),i.init({queue:this.queue,position:l,plugin:i}))}},finished:function(e,i,a){var r=0,o=e.data,d=o.queue.length,s=o.validate(a);for(n.info(w("valid",s),[i.name,a]);d>r;r++)if(o.queue[r].isFinished===!1)return n.info(w("finished",!1),[i.name]),!1;n.info(w("finished",!0)),G.call(t.dart)},validate:function(e){var t,n=!0;for(t in e)e.hasOwnProperty(t)&&(n=Z[t]&&Z[t](e[t])&&n);return n||!1}},G=function(){return m.ready=!0,y.mark("ready"),n.info(h+"Call State Set to Ready"),a.trigger("CN.customEvents.dartRequest"),this},K=function(e,t){var t=t||{};if(m.moatParam.isInteracting)return void n.info(h+"refresh skipped user interacting",[]);if(m.configData.minRefreshDurationMsec&&"undefined"!=typeof m.configData.minRefreshDurationMsec&&!t.lazyload){m.startRefreshTimer||(m.startRefreshTimer=(new Date).getTime());var i=(new Date).getTime(),a=m.configData.minRefreshDurationMsec,r=i-m.moatParam.startTime,d=i-m.startAutoRefreshTimer;if(a>r&&a>d)return void n.info(h+"refresh skipped minimum refresh not met",[])}if(t.contentType&&M("cttp",t.contentType),t.lazyload&&M("ll",t.lazyload),t.rerunPlugins&&Q.reRun(t.rerunPlugins),t.kws){m.gptAdsParams.kw=[];for(var l=0;l<t.kws.length;l++)m.gptAdsParams.kw.push(t.kws[l]);m.gptAdsParams.kw=Y(m.gptAdsParams.kw),M("kw",m.gptAdsParams.kw)}if(m.isURLHasKeywords===!1){var c=[],f=e?e.toString().split(/,|\s+/):[];if(m.embed)return this;if(e&&0!==f.length)for(var l=0;l<f.length;l++)for(var u=0;u<o.length;u++)if(o[u].adname.toString()===f[l].toString()){o[u].lazyDisplay=!0,c.push(o[u].slot);break}M("crid",m.adCreativeIdArr.toString()),M("liid",m.adLineItemIdArr.toString()),M("cm",m.cm),c&&0!==c.length?googletag.pubads().refresh(c):(Math.round(m.dfpRefresh)<m.maxDfpRefresh&&W(),q("cn_adsqt",1380,"adSeqTargeting"),M("sqt",m.adSeqTargeting),M("rfsh",m.dfpRefresh),googletag.pubads().refresh(s))}return m.startAutoRefreshTimer=(new Date).getTime(),this},U=function(e){var t=e?e.toString().split(/,|\s+/):[];if(e&&0!==t.length)for(var n=0;n<t.length;n++)for(var i=0;i<s.length;i++){var a=s[i].getSlotElementId();a.toString()===t[n].toString()+"_frame"&&s.splice(i,1)}else s=[]},$=function(t){var i=t?t.toString().split(/,|\s+/):[];if(t&&0!==i.length)for(var a=0;a<i.length;a++)for(var r=0;r<o.length;r++)o[r].adname.toString()===i[a].toString()&&(googletag.pubads().clear(o[r].slot),delete o[r],o.splice(r,1),U(i[a].toString()),e("#"+t.toString()+"_frame").empty(),n.info(h+t+" ad slot removed",[]));else googletag.pubads().clear(),o={};return this},B=function(e,t){var i,a=[];for(key in e){var r,d,l,c;l=e[key].sz.split("x"),l[0]=parseInt(l[0],10),l[1]=parseInt(l[1],10),i=key.toString(),c=key+"_frame",r=e[key].kws&&e[key].kws.length>1?"_"+e[key].kws[1]:"",d=e[key].kws&&e[key].kws.length>=1?m.gptAdSlotSizes[m.device][e[key].sz+"_"+e[key].kws[0]+r]:m.gptAdSlotSizes[m.device][e[key].sz],"undefined"==typeof d&&(d=[l[0],l[1]]),t?(googletag.cmd.push(function(){a.push(googletag.defineSlot(URIZone,d,key).addService(googletag.pubads()))}),n.info(h+key+" ad call zone changed ",[])):(googletag.cmd.push(function(){a.push(googletag.defineSlot(o[1].url,d,c).addService(googletag.pubads()).setTargeting("st",key))}),googletag.cmd.push(function(){googletag.display(c)}),n.info(h+key+" ad slot appended",[])),o.push({url:o[1].url,adsize:l,adname:key,adplacement:c,tiles:"",kws:e[key].kws,drawn:!1,xkws:r,slot:a[0]}),s.push(a[0])}return this},H=function(e,n){var i,a,r=[];if("string"==typeof e){var o=e.split();e=o}for(i=0;i<e.length;i++)t.url.params(e[i],location.search)?(r.push(Z.kws(t.url.params(e[i],location.search))),m.isURLHasKeywords=!0):(a=Z.kws(n.kws),m.isURLHasKeywords=!1);return r.length>0&&(a=Z.kws(r.join().split(","))),a},W=function(){var e=Math.round(m.dfpRefresh),e=e+1,e=""+e;m.dfpRefresh=e},J=function(){var e;for(e in r)r.hasOwnProperty(e)&&(r[e].kws=Y(m.ad.kws,r[e].kws))},Z=function(){var n=/([\?\+\\\^\$\*\.\(\)\[\]\|])/g,i=function(e){if(t.site.testads)return m.site;for(var n=e.split("."),i=m.site.split("."),a=0,r=i.length>n.length?i.length:n.length,o=[];r>a;a++)o[a]=n[a]||i[a];return o.join(".")},a=/^https?:/,r=/;$|$/,o=new RegExp(t.site.testads?"testads;$":"[\\w_;]+$"),d=function(e){var t,n=m.charmap;if(o.test(e)){for(t in n)n.hasOwnProperty(t)&&(e=e.replace(new RegExp(t,"gi"),n[t]));return e.replace(r,";")}return O("CN Dart zoneResolver",["Invalid Dart Zone",e]),e},s=function(e){var t,n=m.charmap;for(t in n)n.hasOwnProperty(t)&&(e=e.replace(new RegExp(t,"gi"),n[t]));return e};return{ad:function(t){return t.kws?(m.ad.kws=e.isArray(t.kws)?Y(t.kws):m.ad.kws,J(),!0):!1},addparam:function(e){var t,n,i;if(!e)return!1;for(n="[object Array]"===Object.prototype.toString.call(e)?e:[e],i=0;i<n.length;i+=1){if(!n[i].pKey)return!1;t={},t.defaultValue=n[i].pValue,t.refresh=n[i].refresh,t.noKey=n[i].noKey||!1,m.params[n[i].pKey]=t}return!0},charmap:function(e){var t,i=m.charmap={};for(t in e)e.hasOwnProperty(t)&&(i[t.replace(n,"\\$1")]=e[t]);return!0},dcopt:function(e){return t.isBoolean(e)?(m.dcopt=e,!0):!1},embed:function(e){return t.isBoolean(e)?(m.embed=e,!0):!1},site:function(e){return m.site=i(e),!0},url:function(e){return t.isString(e)?(m.url=e.replace(a,location.protocol),!0):!1},zone:function(e){var t=d(e);return t?(m.zone=t,!0):!1},adzone:d,kws:function(e){for(var t=e?[].concat(e):[],n=0,i=t.length;i>n;n++)t[n]=s(t[n]);return t}}}(),Y=function(){for(var e,t=0,n=[].concat.apply([],arguments).sort(),i=n.length;i>t;t++)e=n.shift(),n[0]!==e&&n.push(e);return X(n.join(",")).split(",")},X=function(e){return e.replace(/^,|\s*|,^/g,"")},et={init:function(e,i,a){return!i||m.initialized?(n.info(h+"Remote Init error.  No calls will be made.",["site : "+e]),this):(m.frameurl=e+m.frameurl,m.remoteSite=e,m.remoteInit=e+m.remote+"init/"+i+"/kw="+t.url.path().join(";kw=")+";"+a,void tt(m.remoteInit))}},tt=function(e){document.write('<script type="text/javascript" src="'+e+'"></script>')},nt=function(){var n=m.device;if(p===!1){for(var i=0;i<o.length;i++)if(o[i].drawn===!1){var a=void 0;if("interstitial1x1_frame"===o[i].adplacement)a=googletag.defineOutOfPageSlot(o[i].url,o[i].adplacement).addService(googletag.pubads());else{var r=o[i].xkws&&o[i].xkws.length>1?"_"+o[i].xkws[1]:"",d=o[i].xkws&&o[i].xkws.length>=1?m.gptAdSlotSizes[n][o[i].adsize[0]+"x"+o[i].adsize[1]+"_"+o[i].xkws[0]+r]:m.gptAdSlotSizes[n][o[i].adsize[0]+"x"+o[i].adsize[1]];a=d&&0!==d.length?googletag.defineSlot(o[i].url,d,o[i].adplacement).addService(googletag.pubads()).setTargeting("st",o[i].adname).setCollapseEmptyDiv(!0,!0):googletag.defineSlot(o[i].url,o[i].adsize,o[i].adplacement).addService(googletag.pubads()).setTargeting("st",o[i].adname).setCollapseEmptyDiv(!0,!0)}o[i].slot=a,o[i].drawn=!0,m.gptAdsParams.kw||(m.gptAdsParams.kw=[]);for(var s=0;s<o[i].kws.length;s++)m.gptAdsParams.kw.push(o[i].kws[s]);if(i===o.length-1){var l,c=x(o[0]),f=t.cookie.get("aam_uuid");if(c&&-1!==c.indexOf("=")){c.indexOf(";")&&(l=c.split(";"));for(var s=0;s<l.length;s++)if(""!==e.trim(l[s])&&-1!==l[s].indexOf("=")){var u=l[s].split("=");M(u[0],u[1])}}if(t.slideshow&&m.gptAdsParams.kw.push("slideshow"),f&&M("aamId",f),m.gptAdsParams.kw){for(var h=0;h<m.ad.kws.length;h++)m.gptAdsParams.kw.push(m.ad.kws[h]);m.gptAdsParams.kw=Y(m.gptAdsParams.kw),M("kw",m.gptAdsParams.kw)}m.isChildDirected&&googletag.pubads().setTagForChildDirectedTreatment(1),M("ctid",m.contentId),M("cttp",m.contentType),M("rfsh",m.dfpRefresh),M("sqt",m.adSeqTargeting),M("CAP",m.adSeqCap),M("sclr",m.socialRef),M("scl",m.socialKey),M("tfc",m.trafficKey),M("mbid",m.mbid),M("pvid",m.pvid),M("sov",m.sov),M("gn",m.targetGenre),M("px",m.targetProximic),M("cnds",m.targetCnds),M("cm",m.cm),M("abk",m.targetAdblock),M("nlsbd",m.targetNwslttrSubrs),M("crid",m.adCreativeIdArr.toString()),M("liid",m.adLineItemIdArr.toString()),googletag.pubads().collapseEmptyDivs(!0),googletag.pubads().disableInitialLoad(),googletag.pubads().enableSingleRequest(),googletag.pubads().enableAsyncRendering(),googletag.enableServices(),googletag.pubads().addEventListener("slotRenderEnded",m.gptCallback),googletag.pubads().addEventListener("slotRenderEnded",function(e){m.gptEvent.push(e),y.mark("GPTAdsRendered"),m.etfCalledOnce||rt(),ct()})}}}else{var l,a,c=x(g),r=g.xkws&&g.xkws.length>1?"_"+g.xkws[1]:"",d=g.xkws&&g.xkws.length>=1?m.gptAdSlotSizes[n][g.adsize[0]+"x"+g.adsize[1]+"_"+g.xkws[0]+r]:m.gptAdSlotSizes[n][g.adsize[0]+"x"+g.adsize[1]],f=t.cookie.get("aam_uuid");if(g.served=!1,a=d&&0!==d.length?googletag.defineSlot(g.url,d,g.adplacement).addService(googletag.pubads()).setCollapseEmptyDiv(!0,!0):googletag.defineSlot(g.url,g.adsize,g.adplacement).addService(googletag.pubads()).setCollapseEmptyDiv(!0,!0),g.slot=a,g.drawn=!0,f&&M("aamId",f),c&&-1!==c.indexOf("=")){c.indexOf(";")&&(l=c.split(";"));for(var s=0;s<l.length;s++)if(""!==e.trim(l[s])&&-1!==l[s].indexOf("=")){var u=l[s].split("=");M(u[0],u[1])}}}},it=function(t,n){if("undefined"==typeof t)return O("no ad parameters were passed in."),!1;if(!m.initialized)return O("ads library needs to be initialized first."),!1;if(m.oneAdCallIInit)return O("oneAdCall() should only be used once per page. Please consider using moreAds()."),y.mark("oneAddCallUsedMoreThanOnce"),!1;for(key in t){var i=key,a=t[key];b(i,a)}"undefined"==typeof googletag.defineSlot?setTimeout(function(){nt(),gt(),p=!0,n&&M(n),e(window).trigger("CN.customEvents.GPTAdsRendered")},1e3):setTimeout(function(){nt(),gt(),p=!0,n&&M(n),e(window).trigger("CN.customEvents.GPTAdsRendered")},300),m.oneAdCallIInit=!0},at=function(e,t,n){return e&&("/"!==e.charAt(0)&&(e="/"+e),"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),t&&("/"!==t.charAt(0)&&(t="/"+t),"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),e+=t),n&&("/"!==n.charAt(0)&&(n="/"+n),"/"===n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),e+=n)),e},rt=function(){function e(e,t){return Math.floor(Math.random()*(t-e+1))+e}var t,n,i;return t=!1,m.etfCalledOnce=!0,i=e(1,100),"undefined"!=typeof m.configData.etfThreshold&&parseInt(m.configData.etfThreshold,10)>0&&(n=parseInt(m.configData.etfThreshold,10),n>=i&&(m.triggerEFT=!0,S(),ot())),t},ot=function(){var i,a;i=function(){e.ajax({type:"GET",url:"//event.condenastdigital.com/images/event.gif?"+a(),error:function(){n.info("ETF track error",[])},cache:!1,success:function(){n.info("ETF track success")},complete:function(){n.info("ETF call complete")}})},a=function(){function n(){var e,t=navigator.appName,n=navigator.userAgent,i=n.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);return i&&null!=(e=n.match(/version\/([\.\d]+)/i))&&(i[2]=e[1]),i=i?[i[1],i[2]]:[t,navigator.appVersion,"-?"],i.toString()}var i,a;return a=e.param(t.dart.timer,!0),a=a.replace(/&/g,"|"),i={e0_id:m.pvid,e0_ec:"abandoned",e0_env:"dart",e0_sc:t.site.name,e0_ct:m.version.toString(),e0_tit:n(),e0_sctn:"contentType="+m.contentType+"|contentId="+m.contentId+"|useOneAdCall="+m.useOneAdCall+"|zone="+m.zone,e0_url:a},e.param(i)},i()},dt=function(){var n,i=x(o[0]),a=t.cookie.get("aam_uuid");if(i&&-1!==i.indexOf("=")){i.indexOf(";")&&(n=i.split(";"));for(var r=0;r<n.length;r++)if(""!==e.trim(n[r])&&-1!==n[r].indexOf("=")){var d=n[r].split("=");M(d[0],d[1])}}if(a&&M("aamId",a),m.gptAdsParams.kw){for(var s=0;s<m.ad.kws.length;s++)m.gptAdsParams.kw.push(m.ad.kws[s]);m.gptAdsParams.kw=Y(m.gptAdsParams.kw),M("kw",m.gptAdsParams.kw)}m.isChildDirected&&googletag.pubads().setTagForChildDirectedTreatment(1),M("ctid",m.contentId),M("cttp",m.contentType),M("rfsh",m.dfpRefresh),M("sqt",m.adSeqTargeting),M("CAP",m.adSeqCap),M("sclr",m.socialRef),M("scl",m.socialKey),M("tfc",m.trafficKey),M("mbid",m.mbid),M("pvid",m.pvid),M("sov",m.sov),M("gn",m.targetGenre),M("px",m.targetProximic),M("cnds",m.targetCnds),M("cm",m.cm),M("abk",m.targetAdblock),M("nlsbd",m.targetNwslttrSubrs),googletag.pubads().collapseEmptyDivs(!0),googletag.pubads().disableInitialLoad(),googletag.pubads().enableSingleRequest(),googletag.pubads().enableAsyncRendering(),googletag.enableServices(),googletag.pubads().addEventListener("slotRenderEnded",m.gptCallback),googletag.pubads().addEventListener("slotRenderEnded",function(e){m.gptEvent.push(e),y.mark("GPTAdsRendered"),m.etfCalledOnce||rt()})},st=function(e,t){var i,a,r=[],d=0;if(!m.initialized)return void O("ads library needs to be initialized first.");if("undefined"==typeof e)return void O("missiing ad parameters object.");m.interstitialDivCreated||dt(),M("crid",m.adCreativeIdArr.toString()),M("liid",m.adLineItemIdArr.toString()),M("cm",m.cm),t?(i="/"+m.gptAdKey+"/"+m.site+at(t.adUnit2,t.adUnit3,t.adUnit4),t.contentType&&M("cttp",t.contentType),a=Z.kws(t.targetKws)||[],M("kw",a),t.disableTracking&&"undefined"!=typeof t.disableTracking||(j(),M("sqt",m.adSeqTargeting)),t.rerunPlugins&&Q.reRun(t.rerunPlugins)):(j(),M("sqt",m.adSeqTargeting));for(key in e){var s,c,f;f=e[key].sz.split("x"),f[0]=parseInt(f[0],10),f[1]=parseInt(f[1],10),s=e[key].kws&&e[key].kws.length>1?"_"+e[key].kws[1]:"",c=e[key].kws&&e[key].kws.length>=1?m.gptAdSlotSizes[m.device][e[key].sz+"_"+e[key].kws[0]+s]:m.gptAdSlotSizes[m.device][e[key].sz],"undefined"==typeof c&&(c=[f[0],f[1]]),t?(googletag.cmd.push(function(){r.push(googletag.defineSlot(i,c,key).addService(googletag.pubads()))}),n.info(h+key+" ad call zone changed ",[])):googletag.cmd.push(function(){r.push(googletag.defineSlot(o[1].url,c,key).addService(googletag.pubads()))}),googletag.cmd.push(function(){googletag.display(key)}),n.info(h+key+" ad call requested ",[]),l.push({adplacement:key,slot:r,adsize:f,slotIndex:d}),d++,m.interstitialDivCreated||(D({},i,"moreAdSlots"),googletag.cmd.push(function(){r.push(googletag.defineOutOfPageSlot(i,"interstitial1x1_frame").addService(googletag.pubads()))}),googletag.cmd.push(function(){googletag.display("interstitial1x1_frame")}),l.push({adplacement:"interstitial1x1_frame",slot:r,adsize:[1,1],slotIndex:d}),d++,p=!0)}m.isChildDirected&&googletag.pubads().setTagForChildDirectedTreatment(1),M("cm",m.cm),M("CAP",m.adSeqCap),googletag.pubads().refresh(r)},lt=function(e,t){var i,a,t=t||{};if(i=[],a=e?e.toString().split(/,|\s+/):[],"undefined"==typeof e)return void n.warn(h+" moreAds cannot refresh. Missing ad param");
if(t.contentType&&(M("cttp",t.contentType),n.info(h+"New Content type: "+t.contentType)),t.rerunPlugins&&Q.reRun(t.rerunPlugins),t.kws){m.gptAdsParams.kw=[];for(var r=0;r<t.kws.length;r++)m.gptAdsParams.kw.push(t.kws[r]);m.gptAdsParams.kw=Y(m.gptAdsParams.kw),M("kw",m.gptAdsParams.kw)}if(e&&0!==a.length)for(var r=0;r<a.length;r++)for(var o=0;o<l.length;o++)if(l[o].adplacement.toString()===a[r].toString()){i.push(l[o].slot[l[o].slotIndex]),n.info(h+"refreshing "+l[o].adplacement+" moreAds");break}i&&0!==i.length&&(Math.round(m.dfpRefresh)<m.maxDfpRefresh&&W(),M("cm",m.cm),M("rfsh",m.dfpRefresh),googletag.pubads().refresh(i))},ct=function(){var e,t;if(e=0,t=m.gptEvent,t.length>0)for(;e<t.length;e++)t[e].isEmpty||(m.adCreativeIdArr=Y(m.adCreativeIdArr,t[e].creativeId||[]),m.adLineItemIdArr=Y(m.adLineItemIdArr,t[e].lineItemId||[]))},ft=function(){"undefined"!=typeof window.amznads&&(googletag.pubads().clearTargeting("amznslots"),n.info(" Amazon targeting keywords cleared ",[]))},ut=function(){var e,n;setTimeout(function(){e=window.open("","","_blank"),n=t.dart.getAdLog(),n.configFileData=void 0,n=JSON.stringify(n,null,4),e.document.body.innerHTML="<pre>"+n+"</pre>"},5e3)},gt=function(){var n=[],i=function(e){googletag.cmd.push(function(){googletag.display(o[e].adplacement)}),o[e].lazyDisplay=!0,n.push(o[e].slot),s.push(o[e].slot)};if(p!==!1||d)if("undefined"!=typeof g.xkws)if(q("cn_adsqt",1380,"adSeqTargeting"),Math.round(m.dfpRefresh)<m.maxDfpRefresh&&W(),M("sqt",m.adSeqTargeting),M("ctid",m.contentId),M("cttp",m.contentType),M("rfsh",m.dfpRefresh),M("sqt",m.adSeqTargeting),M("CAP",m.adSeqCap),M("sclr",m.socialRef),M("scl",m.socialKey),M("tfc",m.trafficKey),M("mbid",m.mbid),M("pvid",m.pvid),M("sov",m.sov),M("gn",m.targetGenre),M("px",m.targetProximic),M("cnds",m.targetCnds),M("cm",m.cm),M("abk",m.targetAdblock),M("nlsbd",m.targetNwslttrSubrs),M("kw",g.kws),"interstitial"===e.trim(g.xkws[0])&&g.adsize[0]+"x"+g.adsize[1]=="300x250")if(0===u){for(var a=0;a<o.length;a++)googletag.cmd.push(function(){googletag.display(o[a].adplacement)}),n.push(o[a].slot);googletag.cmd.push(function(){googletag.display(g.adplacement)}),g.served=!0,n.push(g.slot),c=n,f=!1,u+=1}else googletag.pubads().refresh(c),f=!0;else googletag.cmd.push(function(){googletag.display(g.adplacement)}),n.push(g.slot),f=!1;else"undefined"!=typeof g.xkws&&(googletag.cmd.push(function(){googletag.display(g.adplacement)}),n.push(g.slot),f=!1);else{for(var a=0;a<o.length;a++)if("undefined"!=typeof t.ad.viewableRefresh&&"undefined"!=typeof m.configData.refresh&&"undefined"!=typeof m.configData.refresh.lazyLoad&&m.configData.refresh.lazyLoad){if(t.ad.viewableRefresh.inViewportFirstLoad(e("#"+o[a].adplacement).get(0)))i(a);else if("undefined"!=typeof m.configData.refresh.inView&&m.configData.refresh.inView){var r=m.configData.refresh.inView.slotSizes,l=r.indexOf(o[a].adsize[0]+"x"+o[a].adsize[1]);-1===l&&i(a)}}else i(a);y.mark("MasterAdSize:"+o[0].adplacement),d||(d=!0)}d&&!f&&(googletag.pubads().refresh(n),f=!0,y.mark("GPT_SRA_Called"))};return a.one("CN.customEvents.dartInitialized",G),a.bind("CN.customEvents.dartPlugin",Q,Q.finished),y.mark("start"),{call:b,oneAdCall:it,moreAds:st,getMoreAdsCollection:function(){return l},moreAdsRefresh:lt,clearAmazonTargeting:ft,getGPTAds:function(){return o},getDomDelay:function(){var e=t.url.path(),n=m.domDelay.defaultVal;for(prop in m.domDelay)"defaultVal"!==prop&&prop===e.join("")&&(n=m.domDelay[prop]);return n},getGPTCustomParams:function(){var e=m.targetMap,n={aamId:t.cookie.get("aam_uuid"),kw:m.gptAdsParams.kw};for(var i in e)e.hasOwnProperty(i)&&(n[e[i]]=m[i]);return n},getAdLog:function(){function n(e){var t;return t="undefined"==typeof e?"NA":e}var i,a,r,o={},d=0,s=m.gptAdSlotSizes[m.device];for(i=t.dart.getGPTAds(),a=t.dart.getMoreAdsCollection(),r=e.extend(a,i);d<r.length;d++){if(r[d].xkws)var l=r[d].xkws,c=r[d].adsize,f=l.length>1?"_"+l[1]:"",u=l.length>=1?s[c[0]+"x"+c[1]+"_"+l[0]+f]:s[c[0]+"x"+c[1]];o[r[d].adplacement]=m.gptEvent[d]?0===e("#"+r[d].adplacement).length?{adEmpty:n(m.gptEvent[d].isEmpty),creativeID:m.gptEvent[d].creativeId||"NA",linedItem:m.gptEvent[d].lineItemId||"NA",adSize:m.gptEvent[d].size||"NA",adSlotArray:u,error:n(m.gptEvent[d].isEmpty)?"none":"DFP ad returned but page div id ["+r[d].adplacement+"] not found"}:{adEmpty:n(m.gptEvent[d].isEmpty),creativeID:m.gptEvent[d].creativeId||"NA",linedItem:m.gptEvent[d].lineItemId||"NA",adSize:m.gptEvent[d].size||"NA",adSlotArray:u,error:"none"}:"Ad not called for this placement"}return S(),{site:m.site,adLibVersion:m.version,useOneAdCall:m.useOneAdCall,errors:m.errors,ETFTriggered:m.triggerEFT,warnings:m.warnings,masterAd:r[0].adplacement,dfpParams:t.dart.getGPTCustomParams(),configFileLoaded:m.configLoaded,configFileData:m.configData,pageAdCalls:o,isChildDirected:m.isChildDirected}},getAdLogWin:ut,getSlideShowAds:function(){return g},renderGPTAds:function(){googletag.cmd.push(function(){nt()}),gt()},setGPTAdsRenderStatus:function(e){p=e},getGPTAdsRenderStatus:function(){return p},refreshDynamicAd:function(e,n){var i=t.dart.getSlideShowAds();"string"==typeof e&&"undefined"!==i&&e===i.adname&&(n&&M(n),M("cm",m.cm),googletag.pubads().refresh([i.slot]))},timer:y,refresh:K,addTarget:function(e,t){m[e]=t},get:function(e){e=[].concat(e);for(var t,n=0,i=e.length,a={};i>n;n++)t=e[n],a[t]=m[t]||m[t]===!1?m[t]:void 0;return i>1?a:a[t]},getCommon:function(){return m},buildTracking:q,trackETF:ot,createAdDiv:T,enableETF:rt,adUnitData:ct,removeAdSlot:$,appendAdSlot:B,init:k,ready:G,register:function(e){var t,n=0;if(!e)return this;for(e=[].concat(e),t=e.length;t>n;n++)Q.register(e[n]);return this},remote:et,test:Z}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN,CN.debug),CN.dart.ipad=function(e,t,n,i){var a=".ipad",r=function(){var e=0,r=o.callbacks.length,d=t.get("configData").noiPadToDartSite,s=t.get("site").split(".").indexOf("mobile"),l="undefined"==typeof d?!1:d===!0?!0:!1;if(l)return n.info(o.name+" override .ipad from site",[{}]),this;if(1===s)return n.info(o.name+" mobile site. No .ipad ext added",[{}]),this;for(o.isFinished=!0,i(window).trigger("CN.customEvents.dartPlugin",[o,{site:CN.dart.get("site")+a}]);r>e;e++)o.callbacks[e].func.apply(o.callbacks[e].scope||null,o.callbacks[e].args||[])},o={init:-1!==e.indexOf("ipad")?r:!1,name:"CN Ad User Agent Plugin",callbacks:[],isFinished:-1===e.indexOf("ipad")};return o}(navigator.userAgent.toLowerCase(),CN.dart,CN.debug,"function"==typeof CNjQuery&&CNjQuery||jQuery),CN.dart.moatListener=function(e,t,n){var i,a=t.getGPTAds(),r=t.getCommon(),o=function(){var o=t.get("configData").enableMoatRefresh,d="undefined"==typeof o?!1:o===!0?!0:!1;return d?void(window.moatCondeListener=function(t){for(var n=0;n<a.length;n++)if(t.adKeywords.zMoatST===a[n].adname){var i={};a[n].isInView=t.isInView,a[n].isInteracting=t.isInteracting,i.adname=a[n].adname,i.inView=a[n].isInView,i.isInteracting=a[n].isInteracting,i.startTime=(new Date).getTime(),e(window).on("CN.customEvents.moatInView",function(e,t){r.moat_isInteracting=t.isInteracting,r.moatParam=t}).trigger("CN.customEvents.moatInView",[i])}}):(n.info(i.name+" disbabled",[{}]),this)};return i={init:o,name:"CN Ad MOAT Listener",callbacks:[],isFinished:!1}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug),CN.dart.suppression=function(e){var t,n=CN.url.params(),i=!1,a=function(){var n=0,a=t.callbacks.length;for(t.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[t,i]);a>n;n++)t.callbacks[n].func.apply(t.callbacks[n].scope||null,t.callbacks[n].args||[])};return("1"===n.npu||n.mbid&&n.mbid.match(/yhoo|google[1-5]?$/))&&(i={dcopt:!1}),t={init:i?a:!1,name:"CN Ad Param-based Modifiers",callbacks:[],isFinished:!i}}("function"==typeof CNjQuery&&CNjQuery||jQuery),CN.dart.register([CN.dart.ipad,CN.dart.suppression,CN.dart.moatListener]),CN.dart.inlineConfig={wired:{constellation:{crown:{},parallax:{name:"parallax",divInDom:!1,insertMethod:"after",dataId:"constellation-parallax",css:"display:block;",divId:"parallax9x2",adHeight:"2",adWidth:"9",generateAdCall:!1,kws:[],noBreakOut:!1}},slideShowAdsRefresh:!0,sponsorParameter:["kw","mvi"],docReferrer:!1,enableMoatRefresh:!0,refresh:{type:"inView",lazyOffset:550,lazyLoad:!0,refreshTimeMsec:3e4,inView:{viewableThreshold:.5,slotSizes:["728x90","728x91","728x92","728x93","728x94","728x95","728x96","728x97","300x250","300x251","300x252","300x253","300x254","300x255","300x256","300x600","300x601","300x602","300x1050","300x1051","300x50","300x150","320x150","300x259","300x58","320x58","300x158","320x158","300x258","320x51","320x52","320x53","320x54","320x56","320x57","320x59","320x296","300x608","970x70","970x71","970x72","970x73","970x74","970x75","970x90","970x91","970x92","970x93","970x94","970x95","970x96","970x97","970x250","970x251","970x252","970x253","970x254","970x255","970x256","970x418","970x419","970x420","970x421","970x422","970x423","970x424","970x425","980x301","980x302","980x303","980x304","980x305","980x306","980x307","310x290","298x161","403x367","615x245","932x363","931x400","971x250","971x66","971x418","165x308","59x24","88x16","88x24","91x24","168x33","198x95","200x16","201x16","206x24","207x16","300x56","304x28","532x151","319x138"]}},overrides:{gptAdSlotSizes:{"320x51_top":[[300,51],[320,51],[300,151],[320,151],[300,251]],"320x53_wiredBox":[[300,53],[320,53],[300,153],[320,153],[300,253]],"320x51_wiredBox":[[300,51],[320,51],[300,151],[320,151],[300,251]],"320x52_wiredBox":[[300,52],[320,52],[300,152],[320,152],[300,252]],"320x58_wiredBox":[[300,58],[320,58],[300,158],[320,158],[300,258]],"728x90_top":[[728,90],[970,418],[970,250],[980,300],[970,90],[970,66],[62,88],[88,31],[196,31],[2048,1534],[932,372],[930,400],[9,1]],"931x400_middle":[[931,400],[971,250],[971,66],[971,418]],"728x93_contentbody":[[728,93],[970,421],[970,253],[980,303],[970,93],[970,68],[62,90],[88,33],[196,33],[2048,1537],[932,373],[930,403],[9,2]],"728x94_contentbody":[[728,94],[970,422],[970,254],[980,304],[970,94],[970,69],[62,91],[88,34],[196,34],[2048,1538],[932,374],[930,404],[9,2]],"728x95_contentbody":[[728,95],[970,423],[970,255],[980,305],[970,95],[970,70],[62,92],[88,35],[196,35],[2048,1539],[932,375],[930,405],[9,2]],"728x96_contentbody":[[728,96],[970,424],[970,256],[980,306],[970,96],[970,71],[62,93],[88,36],[196,36],[2048,1540],[932,376],[930,406],[9,2]],"728x97_contentbody":[[728,97],[970,425],[970,257],[980,307],[970,97],[970,72],[62,94],[88,37],[196,37],[2048,1541],[932,377],[930,407],[9,2]],"320x53_middle":[[300,53],[320,53],[300,153],[320,153],[300,253],[300,603],[9,2]],"320x54_middle":[[300,54],[320,54],[300,154],[320,154],[300,254],[300,604],[9,2]],"320x56_middle":[[300,56],[320,56],[300,156],[320,156],[300,256],[300,606],[9,2]],"320x57_middle":[[300,57],[320,57],[300,157],[320,157],[300,257],[300,607],[9,2]],"300x254_middle":[[300,254],[300,604],[300,1054]],"300x253_footer":[[300,253],[300,603],[300,1053]],"320x58_middle":[[300,58],[320,58],[300,158],[320,158],[300,258],[300,608],[9,2]],"970x418_top":[[970,418],[970,250],[980,300],[970,90],[970,66],[728,92],[88,31],[62,88],[196,31],[1140,380],[900,300],[1e3,300]],"320x53_middle2":[[300,53],[320,53],[300,153],[320,153],[300,253],[300,603],[9,2]],"320x52_middle":[[300,52],[320,52],[300,152],[320,152],[300,252],[300,602],[9,2]],"728x91_contentbody":[[728,91],[970,419],[970,251],[980,301],[970,91],[970,67],[62,89],[88,32],[196,32],[2048,1535],[932,373],[930,401],[9,2]],"320x51_bottom":[[300,51],[320,51],[300,151],[320,151],[300,251],[9,2]],"310x290_dropdownEcom":[[310,296],[310,291],[300,288],[730,90],[730,91]],"310x290_footerEcom":[[310,291]],"300x338_Ecom":[[300,338],[403,362],[615,245],[298,156],[932,363]],"300x288_boxEcom":[[300,288]],"320x52_top":[[300,52],[320,52],[300,152],[320,152],[300,252],[300,602]],"320x52_wiredWide":[[320,52],[300,52]],"320x53_footer":[[300,53],[320,53],[300,153],[320,153],[300,253],[300,603]]}}}},CN.dart.bundleInfo={builtOn:"2016-02-26T01:05:14.828Z",builtOnTS:1456448714828,site:"wired",configuredPlugins:["aam","arsaccelerator","cnds","proximic","refresh","yieldbot","amazonMatchBuy"],bundleCN:!1,bundlejQuery:!1,shouldMinify:!0,version:"default",env:{name:"cnadserve",version:"0.9.5",env:"production"}},"undefined"==typeof CN||!CN)throw"CN and/or jQuery library is missing!";if(CN.ad=CN.ad||{},CN.ad.aam=function(e,t,n){"use strict";var i=294,a="aam_uuid",r="aamconde",o={pKey:"u",pValue:null,refresh:c},d={pKey:"aamVals",pValue:null,refresh:f,noKey:!0},s=function(e){var t;return n.info(h.name+" limit reached.  Truncating",[{limit:i,length:e.length,str:e}]),e=("trunc|"+e).substr(0,i-6),t=e.lastIndexOf("|"),e.substr(0,t)+";"},l=function(){var e=t.get("params").u.defaultValue,n="";return n=CN.cookie.get(a),""!==n&&-1===e.indexOf(n)&&(e=n+"|"+e),e.length<=i?e:s(e)},c=function(){var e=CN.cookie.get(a)||"null";return e+=";",e=e.length<=i?e:s(e)},f=function(){var e="",t="";return e=CN.cookie.get(r),""!==e&&(t=e+";"),t},u=function(e){var t,i=!1;for(t=0;t<h.requires.length;t++)"CN Ad Yieldex"===h.requires[t]&&(i=!0);o.pValue=i?l(e):c(e),d.pValue=f(e),n.info(h.name+" assembled",[{uvalue:o.pValue,aamskw:d.pValue}])},g=function(e){var t=0,n=e.modifies,i=h.requires,a=null;if(n&&n.length&&i&&i.length)for(t=0;t<i.length;t+=1)if(a=i[t],-1!==n.indexOf(a)||a===e.name)return!0;return!1},p=function(t){var n=0,i=h.callbacks.length;for(h.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[h,t]),n=0;i>n;n+=1)h.callbacks[n].func.apply(h.callbacks[n].scope||null,h.callbacks[n].args||[])},m=function(e){var t=null,i=e.queue,a=i.length-1,r=function(){u(),p({addparam:[d,o]})};for(a=i.length-1;a>=0;a-=1)if(t=i[a],t!==h&&g(t)&&(n.info(h.name+" found dependency: "+t.name,["Pushing to callbacks array"]),!t.isFinished))return t.callbacks.push({func:r,args:null,scope:null});r()},h={init:m,name:"CN Ad Adobe Audience Manager",modifies:["common.params"],requires:[],callbacks:[],isFinished:!1},v=function(){t.register(h)};v(h)}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug),"undefined"==typeof CN||!CN)throw"CN and/or jQuery library is missing!";if(CN.ad=CN.ad||{},CN.ad.arsaccelerator=function(e,t,n){var i=!1,a=location.protocol||"http:",r=800,o="//dff7tx5c2qbxc.cloudfront.net/hot/",d=function(){var t,d=e('meta[name="parsely-page"]').attr("content")||e('script[type="application/ld+json"]').html()||"{}";return d=JSON.parse(d),t=d.link||d.url||e('link[rel="canonical"]').attr("href"),"string"!=typeof t?(l(!1),n.info(f.name+":  plugin disabled - metadata not found."),!1):(e.ajax({url:a+o+CN.dart.get("site")+"/"+encodeURIComponent(t),dataType:"script",timeout:r,error:function(e,t){l(!1),n.info(f.name+" plugin disabled",["script "+t,"using site code "])},cache:!0,success:function(){i=!0,c()},complete:function(){n.info(f.name+" Ars Accelerator call complete")}}),!0)},s=function(){CN.ad.arsaccelerator.kws=[],d(),setTimeout(function(){f.isFinished||i||c()},5e3)},l=function(t){var n,i=f.callbacks.length;for(f.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[f,t]),n=0;i>n;n++)f.callbacks[n].func.apply(f.callbacks[n].scope||null,f.callbacks[n].args||[])},c=function(){var e,i,a=CN.ad.arsaccelerator.kws,r=[];if(!a)return n.warn("Ars Accelerator Request Timed Out",["Setting plugin to finished to proceed to render ads"]),l(!1);for(i=a.length,e=0;i>e;e++)r.push(a[e]);l({ad:{kws:t.get("ad").kws.concat(r)}})},f={init:s,name:"CN Ad Ars Accelerator kws",modifies:["keywords"],requires:[],callbacks:[],isFinished:!1},u=function(){t.register(f)};return u(),{tags:!1}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug),"undefined"==typeof CN||!CN)throw"CN and/or jQuery library is missing!";if(CN.ad=CN.ad||{},CN.ad.cnds=function(e,t,n){var i=!1,a=location.protocol||"http:",r=800,o=window.CNDS_HOST||"//dy48bnzanqw0v.cloudfront.net/",d=location.href,s=[a+o+"?url="+encodeURIComponent(d)+"&mapping="+encodeURIComponent("4po")+"&jsonp="+encodeURIComponent("CN.ad.cnds.tags=")],l=function(){return e.ajax({url:s,dataType:"script",timeout:r,error:function(e,i){f(!1),t.timer.mark("4POAjaxError"),n.info(g.name+" plugin disabled",["script "+i,"using site code "])},cache:!0,success:function(){i=!0,u()},complete:function(){n.info(g.name+" cnds call complete")}}),!0},c=function(){t.timer.mark("4POInit"),l(),setTimeout(function(){g.isFinished||i||u()},1e3)},f=function(t){var n=0,i=g.callbacks.length;for(g.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[g,t]);i>n;n++)g.callbacks[n].func.apply(g.callbacks[n].scope||null,g.callbacks[n].args||[])},u=function(){var e,i,a=0,r=[],o=CN.ad.cnds.tags;if(!o)return n.warn("CNDS Request Timed Out",["Setting plugin to finished to procceed to render ads"]),t.timer.mark("4POTimedOut"),f(!1);if(o.tags){for(t.timer.mark("4POReturnedKeywords"),i=o.tags,e=i.length;e>a;a++)r.push(i[a]);t.timer.mark("4POSuccess")}t.addTarget("targetCnds",r.toString()),f({ad:{kws:t.get("ad").kws.concat(r)}})},g={init:c,name:"CN Ad CNDS kws",modifies:["keywords"],requires:[],callbacks:[],isFinished:!1},p=function(){t.register(g)};return t.timer.mark("4POLoaded"),p(),t.timer.mark("4PORegistered"),{tags:!1}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug),"undefined"==typeof CN||!CN)throw"CN and/or jQuery library is missing!";if(CN.ad=CN.ad||{},CN.ad.proximic=function(e,t){"use strict";var n=[],i=function(){t.timer.mark("ProximicInit"),o()},a=function(t){var n,i=s.callbacks.length;for(s.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[s,t]),n=0;i>n;n++)s.callbacks[n].func.apply(s.callbacks[n].scope||null,s.callbacks[n].args||[])},r=function(){var e,t,i=CN.ad.proximic.pxData;if("undefined"!=typeof i&&"undefined"!=typeof i.data&&(t=i.data.length),"undefined"!=typeof t){for(e=0;t>e;e++)n.push(i.data[e]);return!0}return!1},o=function(){var e=CN.ad.proximic.pxData;return"undefined"==typeof e?(t.timer.mark("ProximicDataNotReadyTryAgain"),void setTimeout(function(){t.timer.mark("ProximicSecondTry"),d()},800)):"undefined"==typeof e.data?void t.timer.mark("ProximicReturnedError999999"):void d()},d=function(){return r()?(t.timer.mark("ProximicSuccess"),t.addTarget("targetProximic",n.toString()),a({ad:{kws:t.get("ad").kws.concat(n)}}),void 0):void t.timer.mark("ProximicReturnedError999999")},s={init:i,name:"CN Ad Proximic",modifies:["common.params"],requires:[],callbacks:[],isFinished:!1},l=function(){t.register(s)};return t.timer.mark("ProximicLoaded"),l(),t.timer.mark("ProximicRegistered"),{tags:!1}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug),CN.ad=CN.ad||{},CN.ad.viewableRefresh=function(e,t,n){"use strict";var i,a,r,o,d,s,l,c,f=0,u=.5,g=250,p=0,m=!1,h=!1,v="",y=function(){},w=["1x1","1x2"],x=0,b=window,k=document.documentElement,C=[],A=[],N="",_=5e3,S=function(e,t,n,i){var a=1,r=e.getBoundingClientRect?e.getBoundingClientRect():{},o="number"==typeof t?t||1:1,d=r.height*o||n,s=r.width*o||i;return{top:(r.top||0)+(d-a),left:(r.left||0)+(s-a),bottom:(r.bottom||0)-(d+a),right:(r.right||0)-(s+a),height:r.height||n,width:r.width||i}},T=function(){var e=k.clientWidth,t=b.innerWidth;return t>e?t:e},z=function(){var e=k.clientHeight,t=b.innerHeight;return t>e?t:e},D=function(e,t,n,i){var a=S(e,t,n,i);return!!a&&a.height>0&&a.width>0&&a.bottom>=0&&a.top<=z()&&a.right>=0&&a.left<=T()},I=function(e){var t=e.getBoundingClientRect();return(t.top>=0&&t.left>=0&&t.top)<=(window.innerHeight||document.documentElement.clientHeight)+p},P=function(){return a=t.get("configData").refresh,r=t.getCommon(),"undefined"==typeof a?(n.info(B.name+" config file is too old ",[{}]),n.info(B.name+" plugin not supported ",[{}]),h=!0,this):(v="CN Ad: "+a.type+" Refresh ",i=R(),f=a.returnRefreshDelay&&"undefined"!=typeof a.returnRefreshDelay?a.returnRefreshDelay:f,_=a.firstTimeDelay&&"undefined"!=typeof a.firstTimeDelay?a.firstTimeDelay:_,p=a.lazyOffset&&"undefined"!=typeof a.lazyOffset?a.lazyOffset:p,void(a.inView&&"undefined"!=typeof a.inView&&(u=a.inView.viewableThreshold&&"undefined"!=typeof a.inView.viewableThreshold?a.inView.viewableThreshold:u)))},R=function(){var e=a.refreshTimeMsec;if("undefined"!=typeof a.overrides&&"undefined"!=typeof a.overrides.refresh&&"undefined"!=typeof a.overrides.refresh.zone){d=r.zone.replace(/[^\w\s]/gi,"");for(var t in a.overrides.refresh.zone)d===t&&(e=a.overrides.refresh.zone[t].dartRefreshTimeMsec,m=!0)}return e&&e>0&&(n.info(B.name+" initialized to "+e+"ms",[]),m&&n.info(B.name+" enabled by zone ",[])),e},E=function(e){var t;K(),e&&"undefined"!=typeof e&&(clearInterval(N),t=i,e=0,N=setInterval(function(){E(e)},t))},q=function(e){var t=e?e:i;return N||(i>0?N=a.lazyLoad===!0?setInterval(function(){E(e)},t):setInterval(function(){E(e)},t):0===i&&a.lazyLoad===!0&&j()),this},j=function(){var i;if(A=[],A=V(),i=A.length,i>0)for(var a=0;i>a;a++){var r=A[a];"undefined"!=typeof e("#"+r.adplacement).get(0)&&r&&I(e("#"+r.adplacement).get(0))&&!r.lazyDisplay&&(t.refresh(r.adname,{lazyload:r.adname}),n.info(B.name+" lazy load",[r.adname]),y(r),A.splice(a,1),i=A.length,a--)}else e(b).off("scroll",F),document.removeEventListener||document.detachEvent("onscroll",F),clearTimeout(o)},O=function(){return l=(new Date).getTime(),clearInterval(N),N=!1,this},M=function(){return document[s]?O():q(),!1},F=function(){clearTimeout(o),o=setTimeout(j,g)},L=function(){var t;"undefined"!=typeof document.hidden?(s="hidden",t="visibilitychange"):"undefined"!=typeof document.mozHidden?(s="mozHidden",t="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(s="msHidden",t="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(s="webkitHidden",t="webkitvisibilitychange"),"undefined"!=typeof document.addEventListener&&"undefined"!=typeof s&&e(document).on(t,M),e(b).on("focus",function(){var e,t,n=0;(l||f)&&(l&&(e=l-c,t=i-e,n=t),f&&(n=f)),q(n)}),"undefined"!=typeof a.lazyLoad&&a.lazyLoad&&(e(b).on("scroll",F),e(b).on("load",F)),document.addEventListener?e(b).on("blur",function(){O()}):(document.onfocusout=function(e){if(void 0===e){var t=event;null===t.toElement&&O()}},document.attachEvent("onscroll",F),document.attachEvent("onload",F)),C=V(),n.info(B.name+" initialized to refesh after "+f+"ms on focus",[])},V=function(){var e,n,i,r=t.getGPTAds(),o=[];for(e=0;e<r.length;e++)n=r[e].adsize[0]+"x"+r[e].adsize[1],"inView"===a.type?(i=a.inView.slotSizes,i&&i.length?-1!==i.indexOf(n)&&(o.push(r[e]),A.push(r[e])):(o.push(r[e]),A.push(r[e]))):-1===w.indexOf(n)&&(o.push(r[e]),A.push(r[e]));return o},Q=function(t){P(t),h||(("inView"===a.type||"active"===a.type)&&e(function(){L(),setTimeout(function(){q()},_)}),n.info(B.name+" assembled",[{}]))},G=function(){return"undefined"!=typeof s&&document[s]===!0?!1:"undefined"!=typeof document.hasFocus&&document.hasFocus()?!0:!1},K=function(){var i,o=[];if(c=(new Date).getTime(),!G())return this;if(r.configData.maxRefreshes&&"undefined"!=typeof r.configData.maxRefreshes&&(r.configData.maxRefreshes===x||x>r.configData.maxRefreshes))return O(),n.info(B.name+"Max refreshes reached. Stopping refresh",[]),this;for(0===C.length&&(C=V()),i=0;i<C.length;i+=1)"active"===a.type?o.push(C[i].adname):D(e("#"+C[i].adplacement).get(0),u,C[i].adsize[1],C[i].adsize[0])&&o.push(C[i].adname);return n.info(B.name+" refreshing placements",[o]),o.length>0&&t.refresh(o),x+=1,this},U=function(t){var n=0,i=B.callbacks.length;for(B.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[B,t]),n=0;i>n;n+=1)B.callbacks[n].func.apply(B.callbacks[n].scope||null,B.callbacks[n].args||[])},$=function(){c=(new Date).getTime();var e=function(){Q(),U({})};e()},B={init:$,name:"CN Ad Refresh",modifies:[],requires:[],callbacks:[],isFinished:!1},H=function(){t.register(B)};return H(B),{refresh:K,start:q,stop:O,isWinVisible:G,inViewportFirstLoad:I}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug),"undefined"==typeof CN||!CN)throw"CN and/or jQuery library is missing!";if(CN.ad.yieldbot=function(e,t,n){"use strict";var i={allure:"5f21",architecturaldigest:"45ce",arstechnica:"1473",bonappetit:"80a9",brides:"99b8",cntraveler:"68b4",details:"84f3",epicurious:"7caa",glamour:"6ba1",golfdigest:"16ce",gourmet:"bed3",gq:"2c20",luckymag:"cba0",newyorker:"20a1",self:"25ef",style:"73a6",teenvogue:"e23d",vanityfair:"3a67",vogue:"1d81",wired:"bc58",wmagazine:"fd2c"},a="822c",r=location.protocol||"http:",o=500,d=0,s=function(){var e=function(){c(i),yieldbot.defineSlot("leaderboard"),yieldbot.defineSlot("medrec",{sizes:[[300,250],[300,600]]}),yieldbot.enableAsync(),yieldbot.go()},t=function(){var e=yieldbot.getPageCriteria()||"n";l.pValue=e};if(window.ybotq=window.ybotq||[],window.ybotq.push(function(){e()}),window.ybotq.push(function(){t()}),"undefined"!=typeof yieldbot&&yieldbot.getPageCriteria())n.info(g.name+" keywords added",[]),u({addparam:[l]});else var a=setInterval(function(){return"undefined"!=typeof yieldbot&&yieldbot.getPageCriteria()?(n.info(g.name+" keywords added  after "+d+"ms",[]),u({addparam:[l]}),void clearInterval(a)):d===o?(n.info(g.name+" keywords not added. Taking too long",[]),void clearInterval(a)):void(d+=100)},100)},l={pKey:"ybot",pValue:null,noKey:!1},c=function(e){var t=document.location.host.split(".")||[],n="";t.length>1&&(n="www"===t[0]?t[1]:t[0]);var i=e[n]||a;yieldbot.pub(i)},f=function(){!function(){var e,t=document.getElementsByTagName("script")[0];e=document.createElement("script"),e.type="text/javascript",e.async=!0,e.src=r+"//cdn.yldbt.com/js/yieldbot.intent.js",t.parentNode.insertBefore(e,t)}()},u=function(t){var n=0,i=g.callbacks.length;for(g.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[g,t]);i>n;n++)g.callbacks[n].func.apply(g.callbacks[n].scope||null,g.callbacks[n].args||[])},g={init:s,name:"CN Ad Yieldbot",modifies:["common.params"],requires:[],callbacks:[],isFinished:!1},p=function(){t.register(g)};return p(),f(),{param:l}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug),"undefined"==typeof CN||!CN)throw"CN and/or jQuery library is missing!";CN.ad=CN.ad||{},CN.ad.amazonMatchBuy=function(e,t,n){var i=200,a="3035",r=(location.protocol||"http:",function(){var e,t=function(e){o.pValue=d(e),c({addparam:o})};amznads.tasks.push(function(){e="amznslots="+amznads.getTokens(),t(e)})}),o={pKey:"amznslots",pValue:null},d=function(e){var t;return"undefined"==typeof e&&""===e?f.isFinished=!1:(t=e.split("=").pop(),n.info(f.name+" assembled",[{ad:t}]),(t.length<=i?t:s(t))+";")},s=function(e){var t;return n.info(f.name+" limit reached.  Truncating",[{limit:i,length:e.length,str:e}]),e=("trunc|"+e).substr(0,i-6),t=e.lastIndexOf(","),e.substr(0,t)},l=function(){return"undefined"==typeof amznads&&(amznads={tasks:[],asyncParams:{id:a}}),function(){var e,t=document.getElementsByTagName("script")[0];e=document.createElement("script"),e.type="text/javascript",e.async=!0,e.src="//c.amazon-adsystem.com/aax2/amzn_ads.js",t.parentNode.insertBefore(e,t)}(),!0},c=function(t){var n=0,i=f.callbacks.length;for(f.isFinished=!0,e(window).trigger("CN.customEvents.dartPlugin",[f,t]);i>n;n++)f.callbacks[n].func.apply(f.callbacks[n].scope||null,f.callbacks[n].args||[])},f={init:r,name:"CN Ad amazonMatchBuy",modifies:["common.params"],requires:[],callbacks:[],isFinished:!1},u=function(){t.register(f)};return u(),l(),{param:o}}("function"==typeof CNjQuery&&CNjQuery||jQuery,CN.dart,CN.debug);
//# sourceMappingURL=/ads/js/cn.dart.bun.min.js.map/* end file: cn-fe-ads-dart-bundled*/
/* file: plugin-global-min :  : /cn/runtime/wired-wp/wordpress/wp-content/themes/Phoenix/assets/js/vendor/plugins.min.js */!function(a){function b(){try{return h in a&&a[h]}catch(b){return!1}}function c(a){return function(){var b=Array.prototype.slice.call(arguments,0);b.unshift(e),j.appendChild(e),e.addBehavior("#default#userData"),e.load(h);var c=a.apply(f,b);return j.removeChild(e),c}}function d(a){return a.replace(m,"___")}var e,f={},g=a.document,h="localStorage",i="script";if(f.disabled=!1,f.set=function(){},f.get=function(){},f.remove=function(){},f.clear=function(){},f.transact=function(a,b,c){var d=f.get(a);null==c&&(c=b,b=null),"undefined"==typeof d&&(d=b||{}),c(d),f.set(a,d)},f.getAll=function(){},f.forEach=function(){},f.serialize=function(a){return JSON.stringify(a)},f.deserialize=function(a){if("string"!=typeof a)return void 0;try{return JSON.parse(a)}catch(b){return a||void 0}},b())e=a[h],f.set=function(a,b){return void 0===b?f.remove(a):(e.setItem(a,f.serialize(b)),b)},f.get=function(a){return f.deserialize(e.getItem(a))},f.remove=function(a){e.removeItem(a)},f.clear=function(){e.clear()},f.getAll=function(){var a={};return f.forEach(function(b,c){a[b]=c}),a},f.forEach=function(a){for(var b=0;b<e.length;b++){var c=e.key(b);a(c,f.get(c))}};else if(g.documentElement.addBehavior){var j,k;try{k=new ActiveXObject("htmlfile"),k.open(),k.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),k.close(),j=k.w.frames[0].document,e=j.createElement("div")}catch(l){e=g.createElement("div"),j=g.body}var m=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");f.set=c(function(a,b,c){return b=d(b),void 0===c?f.remove(b):(a.setAttribute(b,f.serialize(c)),a.save(h),c)}),f.get=c(function(a,b){return b=d(b),f.deserialize(a.getAttribute(b))}),f.remove=c(function(a,b){b=d(b),a.removeAttribute(b),a.save(h)}),f.clear=c(function(a){var b=a.XMLDocument.documentElement.attributes;a.load(h);for(var c,d=0;c=b[d];d++)a.removeAttribute(c.name);a.save(h)}),f.getAll=function(){var a={};return f.forEach(function(b,c){a[b]=c}),a},f.forEach=c(function(a,b){for(var c,d=a.XMLDocument.documentElement.attributes,e=0;c=d[e];++e)b(c.name,f.deserialize(a.getAttribute(c.name)))})}try{var n="__storejs__";f.set(n,n),f.get(n)!=n&&(f.disabled=!0),f.remove(n)}catch(l){f.disabled=!0}f.enabled=!f.disabled,"undefined"!=typeof module&&module.exports?module.exports=f:"function"==typeof define&&define.amd?define(f):a.store=f}(this.window||global);/* end file: plugin-global-min*/
/* file: wired-reviews-nav :  : /cn/runtime/wired-wp/wordpress/wp-content/plugins/reviews-type/js/reviews-ui.js *//*
	Global blogs js for headers and footers.
*/

(function($) {
	$(document).ready(function() {
		/* Reviews Category Dropdown */
		$('#pnav_list_test a.primaryLink').bind('mouseenter', function() {
			// hide all the menus that may be showing already
			$('.dropdownMenu').hide();
			$(this).parentsUntil('#pnav_list_test').find('.dropdownMenu').show();
			$(this).addClass('over');
		});
		// Actions on leaving the dropdown
		$('#pnav_list_test li .dropdownMenu').bind('mouseleave', function() {
			$(this).delay(500).fadeOut(200);
			$(this).parentsUntil('#pnav_list_test').find('a.primaryLink').removeClass('over');
		});

		/* Top 3 */
		var tallestHeight = 0;
		var top3 = $('body.top-3 div.top-3-product ul.top-3-details').not('body.top-3 div.top-3-product.product-4 ul.top-3-details');
		top3.each(function() {
			if ($(this).height() > tallestHeight) {
				tallestHeight = $(this).height();
			}
		});
		top3.height(tallestHeight).children('li.rating-review-link').addClass('sticky');

		/* Reviews */
		// @todo according to jslint resizeImage and displayPosts are never called? do we need them?
		function resizeImage(img, new_width, new_height) {
			if (img.width === new_width && img.height === new_height) {
				img.className = 'prod_review_img_on';
				return;
			} else {
				var h, w;
				if ($(img).height() > $(img).width()) {
					h = new_height;
					w = Math.ceil($(img).width() / $(img).height() * new_height);
				} else {
					w = new_width;
					h = Math.ceil($(img).height() / $(img).width() * new_width);
				}
				$(img).css({
					height: h,
					width: w
				});
				img.className = 'prod_review_img_offset';
			}
		}

		// top three widget toggly oggily
		if ($('#top3-widget').length) {

			$('.toggle-nav').click(function() {
				$(this).siblings('.reviews-subnav').toggleClass('visually-hidden-only');
			});

		}

		// reviews subcategory toggly oggily
		if ($('#cat-select').length) {
			$('#cat-select').click(function(e) {
				e.preventDefault();
				$(this).find('.drop-down').toggleClass('visually-hidden-only');
			});
		}


	});
})(jQuery);/* end file: wired-reviews-nav*/
