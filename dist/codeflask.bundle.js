/*! For license information please see codeflask.bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CodeFlask=t():e.CodeFlask=t()}(self,(()=>(()=>{var e={660:(e,t,n)=>{var a=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},s={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,r;switch(n=n||{},s.util.type(t)){case"Object":if(r=s.util.objId(t),n[r])return n[r];for(var i in a={},n[r]=a,t)t.hasOwnProperty(i)&&(a[i]=e(t[i],n));return a;case"Array":return r=s.util.objId(t),n[r]?n[r]:(a=[],n[r]=a,t.forEach((function(t,s){a[s]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var s=e.classList;if(s.contains(t))return!0;if(s.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=s.util.clone(s.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var r=(a=a||s.languages)[e],i={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=r[o])}var u=a[e];return a[e]=i,s.languages.DFS(s.languages,(function(t,n){n===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,a,r){r=r||{};var i=s.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],u=s.util.type(l);"Object"!==u||r[i(l)]?"Array"!==u||r[i(l)]||(r[i(l)]=!0,e(l,n,o,r)):(r[i(l)]=!0,e(l,n,null,r))}}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);for(var r,i=0;r=a.elements[i++];)s.highlightElement(r,!0===t,a.callback)},highlightElement:function(t,n,a){var r=s.util.getLanguage(t),i=s.languages[r];s.util.setLanguage(t,r);var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&s.util.setLanguage(o,r);var l={element:t,language:r,grammar:i,code:t.textContent};function u(e){l.highlightedCode=e,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),a&&a.call(l.element)}if(s.hooks.run("before-sanity-check",l),(o=l.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code)return s.hooks.run("complete",l),void(a&&a.call(l.element));if(s.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var c=new Worker(s.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(s.highlight(l.code,l.grammar,l.language));else u(s.util.encode(l.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(s.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),r.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var s=new l;return u(s,s.head,e),o(e,s,t,s.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(s)},hooks:{all:{},add:function(e,t){var n=s.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=s.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}},Token:r};function r(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var s=e.exec(n);if(s&&a&&s[1]){var r=s[1].length;s.index+=r,s[0]=s[0].slice(r)}return s}function o(e,t,n,a,l,d){for(var h in n)if(n.hasOwnProperty(h)&&n[h]){var p=n[h];p=Array.isArray(p)?p:[p];for(var g=0;g<p.length;++g){if(d&&d.cause==h+","+g)return;var f=p[g],m=f.inside,b=!!f.lookbehind,v=!!f.greedy,y=f.alias;if(v&&!f.pattern.global){var k=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,k+"g")}for(var x=f.pattern||f,w=a.next,F=l;w!==t.tail&&!(d&&F>=d.reach);F+=w.value.length,w=w.next){var A=w.value;if(t.length>e.length)return;if(!(A instanceof r)){var C,L=1;if(v){if(!(C=i(x,F,e,b))||C.index>=e.length)break;var _=C.index,E=C.index+C[0].length,S=F;for(S+=w.value.length;_>=S;)S+=(w=w.next).value.length;if(F=S-=w.value.length,w.value instanceof r)continue;for(var T=w;T!==t.tail&&(S<E||"string"==typeof T.value);T=T.next)L++,S+=T.value.length;L--,A=e.slice(F,S),C.index-=F}else if(!(C=i(x,0,A,b)))continue;_=C.index;var $=C[0],N=A.slice(0,_),j=A.slice(_+$.length),z=F+A.length;d&&z>d.reach&&(d.reach=z);var M=w.prev;if(N&&(M=u(t,M,N),F+=N.length),c(t,M,L),w=u(t,M,new r(h,m?s.tokenize($,m):$,y,$)),j&&u(t,w,j),L>1){var P={cause:h+","+g,reach:z};o(e,t,n,w.prev,F,P),d&&P.reach>d.reach&&(d.reach=P.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var a=t.next,s={value:n,prev:t,next:a};return t.next=s,a.prev=s,e.length++,s}function c(e,t,n){for(var a=t.next,s=0;s<n&&a!==e.tail;s++)a=a.next;t.next=a,a.prev=t,e.length-=s}if(e.Prism=s,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var r={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(r.classes,i):r.classes.push(i)),s.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+o+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(s.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,r=n.code,i=n.immediateClose;e.postMessage(s.highlight(r,s.languages[a],a)),i&&e.close()}),!1),s):s;var d=s.util.currentScript();function h(){s.manual||s.highlightAll()}if(d&&(s.filename=d.src,d.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==n.g&&(n.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(e,t){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:a.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(void 0!==a&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",n="loaded",s='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';a.hooks.add("before-highlightall",(function(e){e.selector+=", "+s})),a.hooks.add("before-sanity-check",(function(r){var i=r.element;if(i.matches(s)){r.code="",i.setAttribute(t,"loading");var o=i.appendChild(document.createElement("CODE"));o.textContent="Loading…";var l=i.getAttribute("data-src"),u=r.language;if("none"===u){var c=(/\.(\w+)$/.exec(l)||[,"none"])[1];u=e[c]||c}a.util.setLanguage(o,u),a.util.setLanguage(i,u);var d=a.plugins.autoloader;d&&d.loadLanguages(u),function(e,s,r){var l=new XMLHttpRequest;l.open("GET",e,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?function(e){i.setAttribute(t,n);var s=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),a=t[2],s=t[3];return a?s?[n,Number(s)]:[n,void 0]:[n,n]}}(i.getAttribute("data-range"));if(s){var r=e.split(/\r\n?|\n/g),l=s[0],u=null==s[1]?r.length:s[1];l<0&&(l+=r.length),l=Math.max(0,Math.min(l-1,r.length)),u<0&&(u+=r.length),u=Math.max(0,Math.min(u,r.length)),e=r.slice(l,u).join("\n"),i.hasAttribute("data-start")||i.setAttribute("data-start",String(l+1))}o.textContent=e,a.highlightElement(o)}(l.responseText):l.status>=400?r("✖ Error "+l.status+" while fetching file: "+l.statusText):r("✖ Error: File does not exist or is empty"))},l.send(null)}(l,0,(function(e){i.setAttribute(t,"failed"),o.textContent=e}))}})),a.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(s),r=0;t=n[r++];)a.highlightElement(t)}};var r=!1;a.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{"use strict";n.d(a,{default:()=>d});const e='"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';var t,s;const r=`\n  .codeflask {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .codeflask, .codeflask * {\n    box-sizing: border-box;\n  }\n\n  .codeflask__pre {\n    pointer-events: none;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n  .codeflask__textarea {\n    background: none;\n    border: none;\n    color: ${t="caret-color","#000",("undefined"!=typeof CSS?CSS.supports(t,"#000"):"undefined"!=typeof document&&(s=(s=t).split("-").filter((e=>!!e)).map((e=>e[0].toUpperCase()+e.substr(1))).join(""))[0].toLowerCase()+s.substr(1)in document.body.style)?"#fff":"#ccc"};\n    z-index: 1;\n    resize: none;\n    font-family: ${e};\n    -webkit-appearance: pre;\n    caret-color: #111;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n  }\n\n  .codeflask--has-line-numbers .codeflask__textarea {\n    width: calc(100% - 40px);\n  }\n\n  .codeflask__code {\n    display: block;\n    font-family: ${e};\n    overflow: hidden;\n  }\n\n  .codeflask__flatten {\n    padding: 10px;\n    font-size: 13px;\n    line-height: 20px;\n    white-space: pre;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    margin: 0 !important;\n    outline: none;\n    text-align: left;\n  }\n\n  .codeflask--has-line-numbers .codeflask__flatten {\n    width: calc(100% - 40px);\n    left: 40px;\n  }\n\n  .codeflask__line-highlight {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    background: rgba(0,0,0,0.1);\n    z-index: 1;\n  }\n\n  .codeflask__lines {\n    padding: 10px 4px;\n    font-size: 12px;\n    line-height: 20px;\n    font-family: 'Cousine', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 40px;\n    height: 100%;\n    text-align: right;\n    color: #999;\n    z-index: 2;\n  }\n\n  .codeflask__lines__line {\n    display: block;\n  }\n\n  .codeflask.codeflask--has-line-numbers {\n    padding-left: 40px;\n  }\n\n  .codeflask.codeflask--has-line-numbers:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 40px;\n    height: 100%;\n    // background: #eee;\n    background: #dcdfe6;\n    z-index: 1;\n  }\n`;function i(e,t,n){const a=t||"codeflask-style",s=n||document.head;if(!e)return!1;if(document.getElementById(a))return!0;const r=document.createElement("style");return r.innerHTML=e,r.id=a,s.appendChild(r),!0}const o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function l(e){return String(e).replace(/[&<>"'`=/]/g,(function(e){return o[e]}))}var u=n(660),c=n.n(u);class d{constructor(e,t){if(!e)throw Error("CodeFlask expects a parameter which is Element or a String selector");if(!t)throw Error("CodeFlask expects an object containing options as second parameter");if(e.nodeType)this.editorRoot=e;else{const t=document.querySelector(e);t&&(this.editorRoot=t)}this.opts=t,this.events={},this.startEditor()}startEditor(){if(!i(r,null,this.opts.styleParent))throw Error("Failed to inject CodeFlask CSS.");this.createWrapper(),this.createTextarea(),this.createPre(),this.createCode(),this.runOptions(),this.listenTextarea(),this.populateDefault(),this.updateCode(this.code)}createWrapper(){this.code=this.editorRoot.innerHTML,this.editorRoot.innerHTML="",this.elWrapper=this.createElement("div",this.editorRoot),this.elWrapper.classList.add("codeflask")}createTextarea(){this.elTextarea=this.createElement("textarea",this.elWrapper),this.elTextarea.classList.add("codeflask__textarea","codeflask__flatten")}createPre(){this.elPre=this.createElement("pre",this.elWrapper),this.elPre.classList.add("codeflask__pre","codeflask__flatten")}createCode(){this.elCode=this.createElement("code",this.elPre),this.elCode.classList.add("codeflask__code",`language-${this.opts.language||"html"}`)}createLineNumbers(){this.elLineNumbers=this.createElement("div",this.elWrapper),this.elLineNumbers.classList.add("codeflask__lines"),this.elWrapper.classList.add("codeflask--has-line-numbers"),this.setLineNumber()}destroyLineNumbers(){this.elWrapper.classList.remove("codeflask--has-line-numbers"),this.elLineNumbers.remove()}createElement(e,t){const n=document.createElement(e);return t.appendChild(n),n}runOptions(){this.opts.rtl=this.opts.rtl||!1,this.opts.tabSize=this.opts.tabSize||2,this.opts.enableAutocorrect=this.opts.enableAutocorrect||!1,this.opts.lineNumbers=this.opts.lineNumbers||!1,this.opts.defaultTheme=!1!==this.opts.defaultTheme,this.opts.areaId=this.opts.areaId||null,this.opts.ariaLabelledby=this.opts.ariaLabelledby||null,this.opts.readonly=this.opts.readonly||!1,"boolean"!=typeof this.opts.handleTabs&&(this.opts.handleTabs=!0),"boolean"!=typeof this.opts.handleSelfClosingCharacters&&(this.opts.handleSelfClosingCharacters=!0),"boolean"!=typeof this.opts.handleNewLineIndentation&&(this.opts.handleNewLineIndentation=!0),!0===this.opts.rtl&&(this.elTextarea.setAttribute("dir","rtl"),this.elPre.setAttribute("dir","rtl")),!1===this.opts.enableAutocorrect&&(this.elTextarea.setAttribute("spellcheck","false"),this.elTextarea.setAttribute("autocapitalize","off"),this.elTextarea.setAttribute("autocomplete","off"),this.elTextarea.setAttribute("autocorrect","off")),this.opts.lineNumbers&&(this.elWrapper.classList.add("codeflask--has-line-numbers"),this.createLineNumbers()),this.opts.defaultTheme&&i("\n.codeflask {\n  background: #fff;\n  color: #4f559c;\n}\n\n.codeflask .token.punctuation {\n  color: #4a4a4a;\n}\n\n.codeflask .token.keyword {\n  color: #8500ff;\n}\n\n.codeflask .token.operator {\n  color: #ff5598;\n}\n\n.codeflask .token.string {\n  color: #41ad8f;\n}\n\n.codeflask .token.comment {\n  color: #9badb7;\n}\n\n.codeflask .token.function {\n  color: #8500ff;\n}\n\n.codeflask .token.boolean {\n  color: #8500ff;\n}\n\n.codeflask .token.number {\n  color: #8500ff;\n}\n\n.codeflask .token.selector {\n  color: #8500ff;\n}\n\n.codeflask .token.property {\n  color: #8500ff;\n}\n\n.codeflask .token.tag {\n  color: #8500ff;\n}\n\n.codeflask .token.attr-value {\n  color: #8500ff;\n}\n","theme-default",this.opts.styleParent),this.opts.areaId&&this.elTextarea.setAttribute("id",this.opts.areaId),this.opts.ariaLabelledby&&this.elTextarea.setAttribute("aria-labelledby",this.opts.ariaLabelledby),this.opts.readonly&&this.enableReadonlyMode()}updateLineNumbersCount(){let e="";for(let t=1;t<=this.lineNumber;t++)e+=`<span class="codeflask__lines__line">${t}</span>`;this.elLineNumbers.innerHTML=e}listenTextarea(){this.elTextarea.addEventListener("input",this.events._input=e=>{console.log(),this.opts.readonly||(this.code=e.target.value,this.elCode.innerHTML=l(e.target.value),this.highlight(),setTimeout((()=>{this.runUpdate(),this.setLineNumber()}),1))}),this.elTextarea.addEventListener("keydown",this.events._keydown=e=>{this.opts.readonly||(this.handleTabs(e),this.handleSelfClosingCharacters(e),this.handleNewLineIndentation(e))}),this.elTextarea.addEventListener("scroll",this.events._scroll=e=>{this.elPre.style.transform=`translate3d(-${e.target.scrollLeft}px, -${e.target.scrollTop}px, 0)`,this.elLineNumbers&&(this.elLineNumbers.style.transform=`translate3d(0, -${e.target.scrollTop}px, 0)`)})}handleTabs(e){if(this.opts.handleTabs){if(9!==e.keyCode)return;e.preventDefault();var t=this.elTextarea,n=t.selectionDirection,a=t.selectionStart,s=t.selectionEnd,r=t.value,i=r.substr(0,a),o=r.substring(a,s),l=r.substring(s);const p=" ".repeat(this.opts.tabSize);if(a!==s&&o.length>=p.length){var u=a-i.split("\n").pop().length,c=p.length,d=p.length;e.shiftKey?(r.substr(u,p.length)===p?(c=-c,u>a?(o=o.substring(0,u)+o.substring(u+p.length),d=0):u===a?(c=0,d=0,o=o.substring(p.length)):(d=-d,i=i.substring(0,u)+i.substring(u+p.length))):(c=0,d=0),o=o.replace(new RegExp("\n"+p.split("").join("\\"),"g"),"\n")):(i=i.substr(0,u)+p+i.substring(u,a),o=o.replace(/\n/g,"\n"+p)),t.value=i+o+l,t.selectionStart=a+c,t.selectionEnd=a+o.length+d,t.selectionDirection=n}else t.value=i+p+l,t.selectionStart=a+p.length,t.selectionEnd=a+p.length;var h=t.value;this.updateCode(h),this.elTextarea.selectionEnd=s+this.opts.tabSize}}handleSelfClosingCharacters(e){if(!this.opts.handleSelfClosingCharacters)return;const t=e.key;if(["(","[","{","<","'",'"'].includes(t)||[")","]","}",">","'",'"'].includes(t))switch(t){case"(":case")":case"[":case"]":case"{":case"}":case"<":case">":case"'":case'"':this.closeCharacter(t)}}setLineNumber(){this.lineNumber=this.code.split("\n").length,this.opts.lineNumbers&&this.updateLineNumbersCount()}handleNewLineIndentation(e){if(this.opts.handleNewLineIndentation&&13===e.keyCode){e.preventDefault();var t=this.elTextarea,n=t.selectionStart,a=t.selectionEnd,s=t.value,r=s.substr(0,n),i=s.substring(a),o=s.lastIndexOf("\n",n-1),l=o+s.slice(o+1).search(/[^ ]|$/),u=l>o?l-o:0,c=r+"\n"+" ".repeat(u)+i;t.value=c,t.selectionStart=n+u+1,t.selectionEnd=n+u+1,this.updateCode(t.value)}}closeCharacter(e){const t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd;if(this.skipCloseChar(e)){const a=this.code.substr(n,1)===e,s=a?n+1:n,r=!a&&["'",'"'].includes(e)?e:"",i=`${this.code.substring(0,t)}${r}${this.code.substring(s)}`;this.updateCode(i),this.elTextarea.selectionEnd=++this.elTextarea.selectionStart}else{let a=e;switch(e){case"(":a=String.fromCharCode(e.charCodeAt()+1);break;case"<":case"{":case"[":a=String.fromCharCode(e.charCodeAt()+2)}const s=this.code.substring(t,n),r=`${this.code.substring(0,t)}${s}${a}${this.code.substring(n)}`;this.updateCode(r)}this.elTextarea.selectionEnd=t}skipCloseChar(e){const t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd,a=Math.abs(n-t)>0;return[")","}","]",">"].includes(e)||["'",'"'].includes(e)&&!a}updateCode(e){this.code=e,this.elTextarea.value=e,this.elCode.innerHTML=l(e),this.highlight(),this.setLineNumber(),setTimeout(this.runUpdate.bind(this),1)}updateLanguage(e){const t=this.opts.language;this.elCode.classList.remove(`language-${t}`),this.elCode.classList.add(`language-${e}`),this.opts.language=e,this.highlight()}addLanguage(e,t){c().languages[e]=t}populateDefault(){this.updateCode(this.code)}highlight(){c().highlightElement(this.elCode,!1)}onUpdate(e){if(e&&"[object Function]"!=={}.toString.call(e))throw Error("CodeFlask expects callback of type Function");this.updateCallBack=e}getCode(){return this.code}runUpdate(){this.updateCallBack&&this.updateCallBack(this.code)}enableReadonlyMode(){this.elTextarea.setAttribute("readonly",!0),this.opts.readonly=!0}disableReadonlyMode(){this.elTextarea.removeAttribute("readonly"),this.opts.readonly=!1}toggleReadonlyMode(){this.opts.readonly?this.disableReadonlyMode():this.enableReadonlyMode()}enableLineNumbers(){this.opts.lineNumbers=!0,this.createLineNumbers(),this.updateLineNumbersCount()}disableLineNumbers(){this.opts.lineNumbers=!1,this.destroyLineNumbers()}toggleLineNumbers(){this.opts.lineNumbers?this.disableLineNumbers():this.enableLineNumbers()}dispose(){this.elTextarea.removeEventListener("input",this.events._input),this.elTextarea.removeEventListener("keydown",this.events._keydown),this.elTextarea.removeEventListener("scroll",this.events._scroll),this.elWrapper.remove()}}})(),a.default})()));