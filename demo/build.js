!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
(function(global, factory) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  "use strict";
  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  function DOMEval(code, doc) {
    doc = doc || document;
    var script = doc.createElement("script");
    script.text = code;
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
  var version = "3.1.1",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      return ret;
    },
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      var type = jQuery.type(obj);
      return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
    },
    isPlainObject: function(obj) {
      var proto,
          Ctor;
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      DOMEval(code);
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback) {
      var length,
          i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function(list, elem) {
          var i = 0,
              len = list.length;
          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        },
        unloadHandler = function() {
          setDocument();
        },
        disabledAncestor = addCombinator(function(elem) {
          return elem.disabled === true && ("form" in elem || "label" in elem);
        }, {
          dir: "parentNode",
          next: "legend"
        });
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                if ((elem = context.getElementById(m))) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector;
            } else if (context.nodeName.toLowerCase() !== "object") {
              if ((nid = context.getAttribute("id"))) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", (nid = expando));
              }
              groups = tokenize(selector);
              i = groups.length;
              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }
            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var el = document.createElement("fieldset");
      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        el = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem) {
        if ("form" in elem) {
          if (elem.parentNode && elem.disabled === false) {
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }
            return elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
          }
          return elem.disabled === disabled;
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document);
      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false);
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      support.attributes = assert(function(el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(document.getElementsByClassName);
      support.getById = assert(function(el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);
            if (elem) {
              node = elem.getAttributeNode("id");
              if (node && node.value === id) {
                return [elem];
              }
              elems = context.getElementsByName(id);
              i = 0;
              while ((elem = elems[i++])) {
                node = elem.getAttributeNode("id");
                if (node && node.value === id) {
                  return [elem];
                }
              }
            }
            return [];
          }
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(document.querySelectorAll))) {
        assert(function(el) {
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function(el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          docElem.appendChild(el).disabled = true;
          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(el) {
          support.disconnectedMatch = matches.call(el, "*");
          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.escape = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                node = parent;
                outerCache = node[expando] || (node[expando] = {});
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
        return false;
      } : function(elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                uniqueCache[key] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context === document || context || outermost;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument !== document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(el) {
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    });
    if (!assert(function(el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  var dir = function(elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;
    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function(elem) {
        return (indexOf.call(qualifier, elem) > -1) !== not;
      });
    }
    if (risSimple.test(qualifier)) {
      return jQuery.filter(qualifier, elements, not);
    }
    qualifier = jQuery.filter(qualifier, elements);
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) > -1) !== not && elem.nodeType === 1;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }
    return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          ret,
          len = this.length,
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function(selector, context, root) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors);
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing,
        memory,
        fired,
        locked,
        list = [],
        queue = [],
        firingIndex = -1,
        fire = function() {
          locked = options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (jQuery.isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject) {
    var method;
    try {
      if (value && jQuery.isFunction((method = value.promise))) {
        method.call(value).done(resolve).fail(reject);
      } else if (value && jQuery.isFunction((method = value.then))) {
        method.call(value, resolve, reject);
      } else {
        resolve.call(undefined, value);
      }
    } catch (value) {
      reject.call(undefined, value);
    }
  }
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred, handler, special) {
                return function() {
                  var that = this,
                      args = arguments,
                      mightThrow = function() {
                        var returned,
                            then;
                        if (depth < maxDepth) {
                          return;
                        }
                        returned = handler.apply(that, args);
                        if (returned === deferred.promise()) {
                          throw new TypeError("Thenable self-resolution");
                        }
                        then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                        if (jQuery.isFunction(then)) {
                          if (special) {
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                          } else {
                            maxDepth++;
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                          }
                        } else {
                          if (handler !== Identity) {
                            that = undefined;
                            args = [returned];
                          }
                          (special || deferred.resolveWith)(that, args);
                        }
                      },
                      process = special ? mightThrow : function() {
                        try {
                          mightThrow();
                        } catch (e) {
                          if (jQuery.Deferred.exceptionHook) {
                            jQuery.Deferred.exceptionHook(e, process.stackTrace);
                          }
                          if (depth + 1 >= maxDepth) {
                            if (handler !== Thrower) {
                              that = undefined;
                              args = [e];
                            }
                            deferred.rejectWith(that, args);
                          }
                        }
                      };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }
                    window.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[3 - i][2].disable, tuples[0][2].lock);
        }
        list.add(tuple[3].fire);
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(singleValue) {
      var remaining = arguments.length,
          i = remaining,
          resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          master = jQuery.Deferred(),
          updateFunc = function(i) {
            return function(value) {
              resolveContexts[i] = this;
              resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!(--remaining)) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);
        if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      }
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }
      return master.promise();
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery.Deferred.exceptionHook = function(error, stack) {
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };
  jQuery.readyException = function(error) {
    window.setTimeout(function() {
      throw error;
    });
  };
  var readyList = jQuery.Deferred();
  jQuery.fn.ready = function(fn) {
    readyList.then(fn).catch(function(error) {
      jQuery.readyException(error);
    });
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then;
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  }
  if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    window.setTimeout(jQuery.ready);
  } else {
    document.addEventListener("DOMContentLoaded", completed);
    window.addEventListener("load", completed);
  }
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    if (chainable) {
      return elems;
    }
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  };
  var acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function(owner) {
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop,
          cache = this.cache(owner);
      if (typeof data === "string") {
        cache[jQuery.camelCase(data)] = value;
      } else {
        for (prop in data) {
          cache[jQuery.camelCase(prop)] = data[prop];
        }
      }
      return cache;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
    },
    access: function(owner, key, value) {
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        return this.get(owner, key);
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key !== undefined) {
        if (jQuery.isArray(key)) {
          key = key.map(jQuery.camelCase);
        } else {
          key = jQuery.camelCase(key);
          key = key in cache ? [key] : (key.match(rnothtmlwhite) || []);
        }
        i = key.length;
        while (i--) {
          delete cache[key[i]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  function getData(data) {
    if (data === "true") {
      return true;
    }
    if (data === "false") {
      return false;
    }
    if (data === "null") {
      return null;
    }
    if (data === +data + "") {
      return +data;
    }
    if (rbrace.test(data)) {
      return JSON.parse(data);
    }
    return data;
  }
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value) {
        var data;
        if (elem && value === undefined) {
          data = dataUser.get(elem, key);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, key);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        this.each(function() {
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHiddenWithinTree = function(elem, el) {
    elem = el || elem;
    return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
  };
  var swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale = 1,
        maxIterations = 20,
        currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3];
      valueParts = valueParts || [];
      initialInUnit = +initial || 1;
      do {
        scale = scale || ".5";
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);
    if (display === "none") {
      display = "block";
    }
    defaultDisplayMap[nodeName] = display;
    return display;
  }
  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      display = elem.style.display;
      if (show) {
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;
          if (!values[index]) {
            elem.style.display = "";
          }
        }
        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none";
          dataPriv.set(elem, "display", display);
        }
      }
    }
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  jQuery.fn.extend({
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
  var rscriptType = (/^$|\/(?:java|ecma)script/i);
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret;
    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }
    if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }
    return ret;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var documentElement = document.documentElement;
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn,
        type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(nativeEvent) {
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      }
      cur = this;
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    addProp: function(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: jQuery.isFunction(hook) ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
      this.target = (src.target && src.target.nodeType === 3) ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function(event) {
      var button = event.button;
      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      }
      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }
        if (button & 2) {
          return 3;
        }
        if (button & 4) {
          return 2;
        }
        return 0;
      }
      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      rnoInnerhtml = /<script|<style|<link/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function manipulationTarget(elem, content) {
    if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return elem.getElementsByTagName("tbody")[0] || elem;
    }
    return elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);
    if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  (function() {
    function computeStyleTests() {
      if (!div) {
        return;
      }
      div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
      div.innerHTML = "";
      documentElement.appendChild(container);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";
      reliableMarginLeftVal = divStyle.marginLeft === "2px";
      boxSizingReliableVal = divStyle.width === "4px";
      div.style.marginRight = "50%";
      pixelMarginRightVal = divStyle.marginRight === "4px";
      documentElement.removeChild(container);
      div = null;
    }
    var pixelPositionVal,
        boxSizingReliableVal,
        pixelMarginRightVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
    container.appendChild(div);
    jQuery.extend(support, {
      pixelPosition: function() {
        computeStyleTests();
        return pixelPositionVal;
      },
      boxSizingReliable: function() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelMarginRight: function() {
        computeStyleTests();
        return pixelMarginRightVal;
      },
      reliableMarginLeft: function() {
        computeStyleTests();
        return reliableMarginLeftVal;
      }
    });
  })();
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }
      if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;
  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i,
        val = 0;
    if (extra === (isBorderBox ? "border" : "content")) {
      i = 4;
    } else {
      i = name === "width" ? 1 : 0;
    }
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var val,
        valueIsBorderBox = true,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (elem.getClientRects().length) {
      val = elem.getBoundingClientRect()[name];
    }
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches,
            styles = extra && getStyles(elem),
            subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[name] = value;
          value = jQuery.css(elem, name);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }});
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
  function raf() {
    if (timerId) {
      window.requestAnimationFrame(raf);
      jQuery.fx.tick();
    }
  }
  function createFxNow() {
    window.setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    }
    propTween = !jQuery.isEmptyObject(props);
    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    }
    if (isBox && elem.nodeType === 1) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }
      display = jQuery.css(elem, "display");
      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      }
      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          if (!propTween) {
            anim.done(function() {
              style.display = restoreDisplay;
            });
            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }
          style.display = "inline-block";
        }
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    propTween = false;
    for (prop in orig) {
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
        }
        if (toggle) {
          dataShow.hidden = !hidden;
        }
        if (hidden) {
          showHide([elem], true);
        }
        anim.done(function() {
          if (!hidden) {
            showHide([elem]);
          }
          dataPriv.remove(elem, "fxshow");
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      }
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;
        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {"*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]},
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    if (jQuery.fx.off || document.hidden) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    }
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(timerId);
    } else {
      window.clearInterval(timerId);
    }
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function() {
        window.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}},
    removeAttr: function(elem, value) {
      var name,
          i = 0,
          attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          elem.removeAttribute(name);
        }
      }
    }
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();
      if (!isXML) {
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return (elem[name] = value);
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {tabIndex: {get: function(elem) {
          var tabindex = jQuery.find.attr(elem, "tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }
          return -1;
        }}},
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnothtmlwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnothtmlwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }
      return this.each(function() {
        var className,
            i,
            self,
            classNames;
        if (type === "string") {
          i = 0;
          self = jQuery(this);
          classNames = value.match(rnothtmlwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, "__className__", className);
          }
          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          }
          return ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : stripAndCollapse(jQuery.text(elem));
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;
          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          }
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  jQuery.extend(jQuery.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }});
  support.focusin = "onfocusin" in window;
  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  var location = window.location;
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, valueOrFunction) {
          var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        if (val == null) {
          return null;
        }
        if (jQuery.isArray(val)) {
          return jQuery.map(val, function(val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }
        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          urlAnchor,
          completed,
          fireGlobals,
          i,
          uncached,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (completed) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return completed ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed == null) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR);
      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (completed) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url.replace(rhash, "");
      if (!s.hasContent) {
        uncached = s.url.slice(cacheURL.length);
        if (s.data) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
        }
        s.url = cacheURL + uncached;
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (completed) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (completed) {
            throw e;
          }
          done(-1, e);
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (completed) {
          return;
        }
        completed = true;
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (this[0]) {
        if (jQuery.isFunction(html)) {
          html = html.call(this[0]);
        }
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function(selector) {
      this.parent(selector).not("body").each(function() {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  jQuery.expr.pseudos.hidden = function(elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };
  jQuery.expr.pseudos.visible = function(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
    0: 200,
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback,
        errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete(xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = callback("error");
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxPrefilter(function(s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  support.createHTMLDocument = (function() {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  })();
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var base,
        parsed,
        scripts;
    if (!context) {
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument("");
        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }
    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  jQuery.fn.load = function(url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.pseudos.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          rect,
          doc,
          elem = this[0];
      if (!elem) {
        return;
      }
      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      }
      rect = elem.getBoundingClientRect();
      if (rect.width || rect.height) {
        doc = elem.ownerDocument;
        win = getWindow(doc);
        docElem = doc.documentElement;
        return {
          top: rect.top + win.pageYOffset - docElem.clientTop,
          left: rect.left + win.pageXOffset - docElem.clientLeft
        };
      }
      return rect;
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset = {
          top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
          left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
        };
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });
  jQuery.parseJSON = JSON.parse;
  if (typeof define === "function" && define.amd) {
    define("2", [], function() {
      return jQuery;
    }) && define("jquery", ["2"], function(m) {
      return m;
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
});

})();
(function() {
var define = $__System.amdDefine;
define("3", ["2"], function(main) {
  return main;
});

})();
$__System.registerDynamic('4', [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    /*!
     * Bootstrap v3.3.7 (http://getbootstrap.com)
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under the MIT license
     */

    if (typeof jQuery === 'undefined') {
      throw new Error('Bootstrap\'s JavaScript requires jQuery');
    }

    +function ($) {
      'use strict';

      var version = $.fn.jquery.split(' ')[0].split('.');
      if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
      }
    }(jQuery);

    /* ========================================================================
     * Bootstrap: transition.js v3.3.7
     * http://getbootstrap.com/javascript/#transitions
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
      // ============================================================

      function transitionEnd() {
        var el = document.createElement('bootstrap');

        var transEndEventNames = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
          if (el.style[name] !== undefined) {
            return { end: transEndEventNames[name] };
          }
        }

        return false; // explicit for ie8 (  ._.)
      }

      // http://blog.alexmaccaw.com/css-transitions
      $.fn.emulateTransitionEnd = function (duration) {
        var called = false;
        var $el = this;
        $(this).one('bsTransitionEnd', function () {
          called = true;
        });
        var callback = function () {
          if (!called) $($el).trigger($.support.transition.end);
        };
        setTimeout(callback, duration);
        return this;
      };

      $(function () {
        $.support.transition = transitionEnd();

        if (!$.support.transition) return;

        $.event.special.bsTransitionEnd = {
          bindType: $.support.transition.end,
          delegateType: $.support.transition.end,
          handle: function (e) {
            if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
          }
        };
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: alert.js v3.3.7
     * http://getbootstrap.com/javascript/#alerts
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // ALERT CLASS DEFINITION
      // ======================

      var dismiss = '[data-dismiss="alert"]';
      var Alert = function (el) {
        $(el).on('click', dismiss, this.close);
      };

      Alert.VERSION = '3.3.7';

      Alert.TRANSITION_DURATION = 150;

      Alert.prototype.close = function (e) {
        var $this = $(this);
        var selector = $this.attr('data-target');

        if (!selector) {
          selector = $this.attr('href');
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        var $parent = $(selector === '#' ? [] : selector);

        if (e) e.preventDefault();

        if (!$parent.length) {
          $parent = $this.closest('.alert');
        }

        $parent.trigger(e = $.Event('close.bs.alert'));

        if (e.isDefaultPrevented()) return;

        $parent.removeClass('in');

        function removeElement() {
          // detach from parent, fire event then clean up data
          $parent.detach().trigger('closed.bs.alert').remove();
        }

        $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
      };

      // ALERT PLUGIN DEFINITION
      // =======================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.alert');

          if (!data) $this.data('bs.alert', data = new Alert(this));
          if (typeof option == 'string') data[option].call($this);
        });
      }

      var old = $.fn.alert;

      $.fn.alert = Plugin;
      $.fn.alert.Constructor = Alert;

      // ALERT NO CONFLICT
      // =================

      $.fn.alert.noConflict = function () {
        $.fn.alert = old;
        return this;
      };

      // ALERT DATA-API
      // ==============

      $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
    }(jQuery);

    /* ========================================================================
     * Bootstrap: button.js v3.3.7
     * http://getbootstrap.com/javascript/#buttons
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // BUTTON PUBLIC CLASS DEFINITION
      // ==============================

      var Button = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
      };

      Button.VERSION = '3.3.7';

      Button.DEFAULTS = {
        loadingText: 'loading...'
      };

      Button.prototype.setState = function (state) {
        var d = 'disabled';
        var $el = this.$element;
        var val = $el.is('input') ? 'val' : 'html';
        var data = $el.data();

        state += 'Text';

        if (data.resetText == null) $el.data('resetText', $el[val]());

        // push to event loop to allow forms to submit
        setTimeout($.proxy(function () {
          $el[val](data[state] == null ? this.options[state] : data[state]);

          if (state == 'loadingText') {
            this.isLoading = true;
            $el.addClass(d).attr(d, d).prop(d, true);
          } else if (this.isLoading) {
            this.isLoading = false;
            $el.removeClass(d).removeAttr(d).prop(d, false);
          }
        }, this), 0);
      };

      Button.prototype.toggle = function () {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');

        if ($parent.length) {
          var $input = this.$element.find('input');
          if ($input.prop('type') == 'radio') {
            if ($input.prop('checked')) changed = false;
            $parent.find('.active').removeClass('active');
            this.$element.addClass('active');
          } else if ($input.prop('type') == 'checkbox') {
            if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
            this.$element.toggleClass('active');
          }
          $input.prop('checked', this.$element.hasClass('active'));
          if (changed) $input.trigger('change');
        } else {
          this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
          this.$element.toggleClass('active');
        }
      };

      // BUTTON PLUGIN DEFINITION
      // ========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.button');
          var options = typeof option == 'object' && option;

          if (!data) $this.data('bs.button', data = new Button(this, options));

          if (option == 'toggle') data.toggle();else if (option) data.setState(option);
        });
      }

      var old = $.fn.button;

      $.fn.button = Plugin;
      $.fn.button.Constructor = Button;

      // BUTTON NO CONFLICT
      // ==================

      $.fn.button.noConflict = function () {
        $.fn.button = old;
        return this;
      };

      // BUTTON DATA-API
      // ===============

      $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        var $btn = $(e.target).closest('.btn');
        Plugin.call($btn, 'toggle');
        if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
          // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
          e.preventDefault();
          // The target component still receive the focus
          if ($btn.is('input,button')) $btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');
        }
      }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: carousel.js v3.3.7
     * http://getbootstrap.com/javascript/#carousel
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // CAROUSEL CLASS DEFINITION
      // =========================

      var Carousel = function (element, options) {
        this.$element = $(element);
        this.$indicators = this.$element.find('.carousel-indicators');
        this.options = options;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;

        this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

        this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
      };

      Carousel.VERSION = '3.3.7';

      Carousel.TRANSITION_DURATION = 600;

      Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true,
        keyboard: true
      };

      Carousel.prototype.keydown = function (e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        switch (e.which) {
          case 37:
            this.prev();break;
          case 39:
            this.next();break;
          default:
            return;
        }

        e.preventDefault();
      };

      Carousel.prototype.cycle = function (e) {
        e || (this.paused = false);

        this.interval && clearInterval(this.interval);

        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

        return this;
      };

      Carousel.prototype.getItemIndex = function (item) {
        this.$items = item.parent().children('.item');
        return this.$items.index(item || this.$active);
      };

      Carousel.prototype.getItemForDirection = function (direction, active) {
        var activeIndex = this.getItemIndex(active);
        var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap) return active;
        var delta = direction == 'prev' ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
      };

      Carousel.prototype.to = function (pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

        if (pos > this.$items.length - 1 || pos < 0) return;

        if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
          that.to(pos);
        }); // yes, "slid"
        if (activeIndex == pos) return this.pause().cycle();

        return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
      };

      Carousel.prototype.pause = function (e) {
        e || (this.paused = true);

        if (this.$element.find('.next, .prev').length && $.support.transition) {
          this.$element.trigger($.support.transition.end);
          this.cycle(true);
        }

        this.interval = clearInterval(this.interval);

        return this;
      };

      Carousel.prototype.next = function () {
        if (this.sliding) return;
        return this.slide('next');
      };

      Carousel.prototype.prev = function () {
        if (this.sliding) return;
        return this.slide('prev');
      };

      Carousel.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active');
        var $next = next || this.getItemForDirection(type, $active);
        var isCycling = this.interval;
        var direction = type == 'next' ? 'left' : 'right';
        var that = this;

        if ($next.hasClass('active')) return this.sliding = false;

        var relatedTarget = $next[0];
        var slideEvent = $.Event('slide.bs.carousel', {
          relatedTarget: relatedTarget,
          direction: direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented()) return;

        this.sliding = true;

        isCycling && this.pause();

        if (this.$indicators.length) {
          this.$indicators.find('.active').removeClass('active');
          var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
          $nextIndicator && $nextIndicator.addClass('active');
        }

        var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
        if ($.support.transition && this.$element.hasClass('slide')) {
          $next.addClass(type);
          $next[0].offsetWidth; // force reflow
          $active.addClass(direction);
          $next.addClass(direction);
          $active.one('bsTransitionEnd', function () {
            $next.removeClass([type, direction].join(' ')).addClass('active');
            $active.removeClass(['active', direction].join(' '));
            that.sliding = false;
            setTimeout(function () {
              that.$element.trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
        } else {
          $active.removeClass('active');
          $next.addClass('active');
          this.sliding = false;
          this.$element.trigger(slidEvent);
        }

        isCycling && this.cycle();

        return this;
      };

      // CAROUSEL PLUGIN DEFINITION
      // ==========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.carousel');
          var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
          var action = typeof option == 'string' ? option : options.slide;

          if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
          if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
        });
      }

      var old = $.fn.carousel;

      $.fn.carousel = Plugin;
      $.fn.carousel.Constructor = Carousel;

      // CAROUSEL NO CONFLICT
      // ====================

      $.fn.carousel.noConflict = function () {
        $.fn.carousel = old;
        return this;
      };

      // CAROUSEL DATA-API
      // =================

      var clickHandler = function (e) {
        var href;
        var $this = $(this);
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
        if (!$target.hasClass('carousel')) return;
        var options = $.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr('data-slide-to');
        if (slideIndex) options.interval = false;

        Plugin.call($target, options);

        if (slideIndex) {
          $target.data('bs.carousel').to(slideIndex);
        }

        e.preventDefault();
      };

      $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

      $(window).on('load', function () {
        $('[data-ride="carousel"]').each(function () {
          var $carousel = $(this);
          Plugin.call($carousel, $carousel.data());
        });
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: collapse.js v3.3.7
     * http://getbootstrap.com/javascript/#collapse
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    /* jshint latedef: false */

    +function ($) {
      'use strict';

      // COLLAPSE PUBLIC CLASS DEFINITION
      // ================================

      var Collapse = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;

        if (this.options.parent) {
          this.$parent = this.getParent();
        } else {
          this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }

        if (this.options.toggle) this.toggle();
      };

      Collapse.VERSION = '3.3.7';

      Collapse.TRANSITION_DURATION = 350;

      Collapse.DEFAULTS = {
        toggle: true
      };

      Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width');
        return hasWidth ? 'width' : 'height';
      };

      Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return;

        var activesData;
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

        if (actives && actives.length) {
          activesData = actives.data('bs.collapse');
          if (activesData && activesData.transitioning) return;
        }

        var startEvent = $.Event('show.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        if (actives && actives.length) {
          Plugin.call(actives, 'hide');
          activesData || actives.data('bs.collapse', null);
        }

        var dimension = this.dimension();

        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

        this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

        this.transitioning = 1;

        var complete = function () {
          this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
          this.transitioning = 0;
          this.$element.trigger('shown.bs.collapse');
        };

        if (!$.support.transition) return complete.call(this);

        var scrollSize = $.camelCase(['scroll', dimension].join('-'));

        this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
      };

      Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return;

        var startEvent = $.Event('hide.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        var dimension = this.dimension();

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

        this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

        this.$trigger.addClass('collapsed').attr('aria-expanded', false);

        this.transitioning = 1;

        var complete = function () {
          this.transitioning = 0;
          this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
        };

        if (!$.support.transition) return complete.call(this);

        this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
      };

      Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']();
      };

      Collapse.prototype.getParent = function () {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
          var $element = $(element);
          this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
      };

      Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
        var isOpen = $element.hasClass('in');

        $element.attr('aria-expanded', isOpen);
        $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
      };

      function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

        return $(target);
      }

      // COLLAPSE PLUGIN DEFINITION
      // ==========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.collapse');
          var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);

          if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
          if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.collapse;

      $.fn.collapse = Plugin;
      $.fn.collapse.Constructor = Collapse;

      // COLLAPSE NO CONFLICT
      // ====================

      $.fn.collapse.noConflict = function () {
        $.fn.collapse = old;
        return this;
      };

      // COLLAPSE DATA-API
      // =================

      $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
        var $this = $(this);

        if (!$this.attr('data-target')) e.preventDefault();

        var $target = getTargetFromTrigger($this);
        var data = $target.data('bs.collapse');
        var option = data ? 'toggle' : $this.data();

        Plugin.call($target, option);
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: dropdown.js v3.3.7
     * http://getbootstrap.com/javascript/#dropdowns
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // DROPDOWN CLASS DEFINITION
      // =========================

      var backdrop = '.dropdown-backdrop';
      var toggle = '[data-toggle="dropdown"]';
      var Dropdown = function (element) {
        $(element).on('click.bs.dropdown', this.toggle);
      };

      Dropdown.VERSION = '3.3.7';

      function getParent($this) {
        var selector = $this.attr('data-target');

        if (!selector) {
          selector = $this.attr('href');
          selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        var $parent = selector && $(selector);

        return $parent && $parent.length ? $parent : $this.parent();
      }

      function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function () {
          var $this = $(this);
          var $parent = getParent($this);
          var relatedTarget = { relatedTarget: this };

          if (!$parent.hasClass('open')) return;

          if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

          $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

          if (e.isDefaultPrevented()) return;

          $this.attr('aria-expanded', 'false');
          $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
        });
      }

      Dropdown.prototype.toggle = function (e) {
        var $this = $(this);

        if ($this.is('.disabled, :disabled')) return;

        var $parent = getParent($this);
        var isActive = $parent.hasClass('open');

        clearMenus();

        if (!isActive) {
          if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
            // if mobile we use a backdrop because click events don't delegate
            $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
          }

          var relatedTarget = { relatedTarget: this };
          $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

          if (e.isDefaultPrevented()) return;

          $this.trigger('focus').attr('aria-expanded', 'true');

          $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget));
        }

        return false;
      };

      Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

        var $this = $(this);

        e.preventDefault();
        e.stopPropagation();

        if ($this.is('.disabled, :disabled')) return;

        var $parent = getParent($this);
        var isActive = $parent.hasClass('open');

        if (!isActive && e.which != 27 || isActive && e.which == 27) {
          if (e.which == 27) $parent.find(toggle).trigger('focus');
          return $this.trigger('click');
        }

        var desc = ' li:not(.disabled):visible a';
        var $items = $parent.find('.dropdown-menu' + desc);

        if (!$items.length) return;

        var index = $items.index(e.target);

        if (e.which == 38 && index > 0) index--; // up
        if (e.which == 40 && index < $items.length - 1) index++; // down
        if (!~index) index = 0;

        $items.eq(index).trigger('focus');
      };

      // DROPDOWN PLUGIN DEFINITION
      // ==========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.dropdown');

          if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
          if (typeof option == 'string') data[option].call($this);
        });
      }

      var old = $.fn.dropdown;

      $.fn.dropdown = Plugin;
      $.fn.dropdown.Constructor = Dropdown;

      // DROPDOWN NO CONFLICT
      // ====================

      $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old;
        return this;
      };

      // APPLY TO STANDARD DROPDOWN ELEMENTS
      // ===================================

      $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
        e.stopPropagation();
      }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
    }(jQuery);

    /* ========================================================================
     * Bootstrap: modal.js v3.3.7
     * http://getbootstrap.com/javascript/#modals
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // MODAL CLASS DEFINITION
      // ======================

      var Modal = function (element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$dialog = this.$element.find('.modal-dialog');
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;

        if (this.options.remote) {
          this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
            this.$element.trigger('loaded.bs.modal');
          }, this));
        }
      };

      Modal.VERSION = '3.3.7';

      Modal.TRANSITION_DURATION = 300;
      Modal.BACKDROP_TRANSITION_DURATION = 150;

      Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
      };

      Modal.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
      };

      Modal.prototype.show = function (_relatedTarget) {
        var that = this;
        var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

        this.$element.trigger(e);

        if (this.isShown || e.isDefaultPrevented()) return;

        this.isShown = true;

        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass('modal-open');

        this.escape();
        this.resize();

        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

        this.$dialog.on('mousedown.dismiss.bs.modal', function () {
          that.$element.one('mouseup.dismiss.bs.modal', function (e) {
            if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
          });
        });

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade');

          if (!that.$element.parent().length) {
            that.$element.appendTo(that.$body); // don't move modals dom position
          }

          that.$element.show().scrollTop(0);

          that.adjustDialog();

          if (transition) {
            that.$element[0].offsetWidth; // force reflow
          }

          that.$element.addClass('in');

          that.enforceFocus();

          var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

          transition ? that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e);
          }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
        });
      };

      Modal.prototype.hide = function (e) {
        if (e) e.preventDefault();

        e = $.Event('hide.bs.modal');

        this.$element.trigger(e);

        if (!this.isShown || e.isDefaultPrevented()) return;

        this.isShown = false;

        this.escape();
        this.resize();

        $(document).off('focusin.bs.modal');

        this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

        this.$dialog.off('mousedown.dismiss.bs.modal');

        $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
      };

      Modal.prototype.enforceFocus = function () {
        $(document).off('focusin.bs.modal') // guard against infinite focus loop
        .on('focusin.bs.modal', $.proxy(function (e) {
          if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
            this.$element.trigger('focus');
          }
        }, this));
      };

      Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
            e.which == 27 && this.hide();
          }, this));
        } else if (!this.isShown) {
          this.$element.off('keydown.dismiss.bs.modal');
        }
      };

      Modal.prototype.resize = function () {
        if (this.isShown) {
          $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
        } else {
          $(window).off('resize.bs.modal');
        }
      };

      Modal.prototype.hideModal = function () {
        var that = this;
        this.$element.hide();
        this.backdrop(function () {
          that.$body.removeClass('modal-open');
          that.resetAdjustments();
          that.resetScrollbar();
          that.$element.trigger('hidden.bs.modal');
        });
      };

      Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
      };

      Modal.prototype.backdrop = function (callback) {
        var that = this;
        var animate = this.$element.hasClass('fade') ? 'fade' : '';

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate;

          this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

          this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
            if (this.ignoreBackdropClick) {
              this.ignoreBackdropClick = false;
              return;
            }
            if (e.target !== e.currentTarget) return;
            this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
          }, this));

          if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

          this.$backdrop.addClass('in');

          if (!callback) return;

          doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in');

          var callbackRemove = function () {
            that.removeBackdrop();
            callback && callback();
          };
          $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else if (callback) {
          callback();
        }
      };

      // these following methods are used to handle overflowing modals

      Modal.prototype.handleUpdate = function () {
        this.adjustDialog();
      };

      Modal.prototype.adjustDialog = function () {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
          paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        });
      };

      Modal.prototype.resetAdjustments = function () {
        this.$element.css({
          paddingLeft: '',
          paddingRight: ''
        });
      };

      Modal.prototype.checkScrollbar = function () {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
          // workaround for missing window.innerWidth in IE8
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
      };

      Modal.prototype.setScrollbar = function () {
        var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || '';
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
      };

      Modal.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', this.originalBodyPad);
      };

      Modal.prototype.measureScrollbar = function () {
        // thx walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = 'modal-scrollbar-measure';
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
      };

      // MODAL PLUGIN DEFINITION
      // =======================

      function Plugin(option, _relatedTarget) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.modal');
          var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

          if (!data) $this.data('bs.modal', data = new Modal(this, options));
          if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
        });
      }

      var old = $.fn.modal;

      $.fn.modal = Plugin;
      $.fn.modal.Constructor = Modal;

      // MODAL NO CONFLICT
      // =================

      $.fn.modal.noConflict = function () {
        $.fn.modal = old;
        return this;
      };

      // MODAL DATA-API
      // ==============

      $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this = $(this);
        var href = $this.attr('href');
        var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

        if ($this.is('a')) e.preventDefault();

        $target.one('show.bs.modal', function (showEvent) {
          if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
          $target.one('hidden.bs.modal', function () {
            $this.is(':visible') && $this.trigger('focus');
          });
        });
        Plugin.call($target, option, this);
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: tooltip.js v3.3.7
     * http://getbootstrap.com/javascript/#tooltip
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // TOOLTIP PUBLIC CLASS DEFINITION
      // ===============================

      var Tooltip = function (element, options) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;

        this.init('tooltip', element, options);
      };

      Tooltip.VERSION = '3.3.7';

      Tooltip.TRANSITION_DURATION = 150;

      Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
          selector: 'body',
          padding: 0
        }
      };

      Tooltip.prototype.init = function (type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = { click: false, hover: false, focus: false };

        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
          throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
        }

        var triggers = this.options.trigger.split(' ');

        for (var i = triggers.length; i--;) {
          var trigger = triggers[i];

          if (trigger == 'click') {
            this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
          } else if (trigger != 'manual') {
            var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
            var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

            this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
            this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
          }
        }

        this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
      };

      Tooltip.prototype.getDefaults = function () {
        return Tooltip.DEFAULTS;
      };

      Tooltip.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);

        if (options.delay && typeof options.delay == 'number') {
          options.delay = {
            show: options.delay,
            hide: options.delay
          };
        }

        return options;
      };

      Tooltip.prototype.getDelegateOptions = function () {
        var options = {};
        var defaults = this.getDefaults();

        this._options && $.each(this._options, function (key, value) {
          if (defaults[key] != value) options[key] = value;
        });

        return options;
      };

      Tooltip.prototype.enter = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
          $(obj.currentTarget).data('bs.' + this.type, self);
        }

        if (obj instanceof $.Event) {
          self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
        }

        if (self.tip().hasClass('in') || self.hoverState == 'in') {
          self.hoverState = 'in';
          return;
        }

        clearTimeout(self.timeout);

        self.hoverState = 'in';

        if (!self.options.delay || !self.options.delay.show) return self.show();

        self.timeout = setTimeout(function () {
          if (self.hoverState == 'in') self.show();
        }, self.options.delay.show);
      };

      Tooltip.prototype.isInStateTrue = function () {
        for (var key in this.inState) {
          if (this.inState[key]) return true;
        }

        return false;
      };

      Tooltip.prototype.leave = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
          $(obj.currentTarget).data('bs.' + this.type, self);
        }

        if (obj instanceof $.Event) {
          self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
        }

        if (self.isInStateTrue()) return;

        clearTimeout(self.timeout);

        self.hoverState = 'out';

        if (!self.options.delay || !self.options.delay.hide) return self.hide();

        self.timeout = setTimeout(function () {
          if (self.hoverState == 'out') self.hide();
        }, self.options.delay.hide);
      };

      Tooltip.prototype.show = function () {
        var e = $.Event('show.bs.' + this.type);

        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);

          var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (e.isDefaultPrevented() || !inDom) return;
          var that = this;

          var $tip = this.tip();

          var tipId = this.getUID(this.type);

          this.setContent();
          $tip.attr('id', tipId);
          this.$element.attr('aria-describedby', tipId);

          if (this.options.animation) $tip.addClass('fade');

          var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

          var autoToken = /\s?auto?\s?/i;
          var autoPlace = autoToken.test(placement);
          if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

          $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

          this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
          this.$element.trigger('inserted.bs.' + this.type);

          var pos = this.getPosition();
          var actualWidth = $tip[0].offsetWidth;
          var actualHeight = $tip[0].offsetHeight;

          if (autoPlace) {
            var orgPlacement = placement;
            var viewportDim = this.getPosition(this.$viewport);

            placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

            $tip.removeClass(orgPlacement).addClass(placement);
          }

          var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

          this.applyPlacement(calculatedOffset, placement);

          var complete = function () {
            var prevHoverState = that.hoverState;
            that.$element.trigger('shown.bs.' + that.type);
            that.hoverState = null;

            if (prevHoverState == 'out') that.leave(that);
          };

          $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
      };

      Tooltip.prototype.applyPlacement = function (offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;

        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10);
        var marginLeft = parseInt($tip.css('margin-left'), 10);

        // we must check for NaN for ie 8/9
        if (isNaN(marginTop)) marginTop = 0;
        if (isNaN(marginLeft)) marginLeft = 0;

        offset.top += marginTop;
        offset.left += marginLeft;

        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
          using: function (props) {
            $tip.css({
              top: Math.round(props.top),
              left: Math.round(props.left)
            });
          }
        }, offset), 0);

        $tip.addClass('in');

        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;

        if (placement == 'top' && actualHeight != height) {
          offset.top = offset.top + height - actualHeight;
        }

        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

        if (delta.left) offset.left += delta.left;else offset.top += delta.top;

        var isVertical = /top|bottom/.test(placement);
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
      };

      Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
        this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
      };

      Tooltip.prototype.setContent = function () {
        var $tip = this.tip();
        var title = this.getTitle();

        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
        $tip.removeClass('fade in top bottom left right');
      };

      Tooltip.prototype.hide = function (callback) {
        var that = this;
        var $tip = $(this.$tip);
        var e = $.Event('hide.bs.' + this.type);

        function complete() {
          if (that.hoverState != 'in') $tip.detach();
          if (that.$element) {
            // TODO: Check whether guarding this code with this `if` is really necessary.
            that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
          }
          callback && callback();
        }

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        $tip.removeClass('in');

        $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

        this.hoverState = null;

        return this;
      };

      Tooltip.prototype.fixTitle = function () {
        var $e = this.$element;
        if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
          $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
        }
      };

      Tooltip.prototype.hasContent = function () {
        return this.getTitle();
      };

      Tooltip.prototype.getPosition = function ($element) {
        $element = $element || this.$element;

        var el = $element[0];
        var isBody = el.tagName == 'BODY';

        var elRect = el.getBoundingClientRect();
        if (elRect.width == null) {
          // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
          elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
        }
        var isSvg = window.SVGElement && el instanceof window.SVGElement;
        // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
        // See https://github.com/twbs/bootstrap/issues/20280
        var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
        var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
        var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

        return $.extend({}, elRect, scroll, outerDims, elOffset);
      };

      Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
      };

      Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
        var delta = { top: 0, left: 0 };
        if (!this.$viewport) return delta;

        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);

        if (/right|left/.test(placement)) {
          var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
          var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
          if (topEdgeOffset < viewportDimensions.top) {
            // top overflow
            delta.top = viewportDimensions.top - topEdgeOffset;
          } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
            // bottom overflow
            delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
          }
        } else {
          var leftEdgeOffset = pos.left - viewportPadding;
          var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
          if (leftEdgeOffset < viewportDimensions.left) {
            // left overflow
            delta.left = viewportDimensions.left - leftEdgeOffset;
          } else if (rightEdgeOffset > viewportDimensions.right) {
            // right overflow
            delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
          }
        }

        return delta;
      };

      Tooltip.prototype.getTitle = function () {
        var title;
        var $e = this.$element;
        var o = this.options;

        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

        return title;
      };

      Tooltip.prototype.getUID = function (prefix) {
        do prefix += ~~(Math.random() * 1000000); while (document.getElementById(prefix));
        return prefix;
      };

      Tooltip.prototype.tip = function () {
        if (!this.$tip) {
          this.$tip = $(this.options.template);
          if (this.$tip.length != 1) {
            throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
          }
        }
        return this.$tip;
      };

      Tooltip.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
      };

      Tooltip.prototype.enable = function () {
        this.enabled = true;
      };

      Tooltip.prototype.disable = function () {
        this.enabled = false;
      };

      Tooltip.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      };

      Tooltip.prototype.toggle = function (e) {
        var self = this;
        if (e) {
          self = $(e.currentTarget).data('bs.' + this.type);
          if (!self) {
            self = new this.constructor(e.currentTarget, this.getDelegateOptions());
            $(e.currentTarget).data('bs.' + this.type, self);
          }
        }

        if (e) {
          self.inState.click = !self.inState.click;
          if (self.isInStateTrue()) self.enter(self);else self.leave(self);
        } else {
          self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
        }
      };

      Tooltip.prototype.destroy = function () {
        var that = this;
        clearTimeout(this.timeout);
        this.hide(function () {
          that.$element.off('.' + that.type).removeData('bs.' + that.type);
          if (that.$tip) {
            that.$tip.detach();
          }
          that.$tip = null;
          that.$arrow = null;
          that.$viewport = null;
          that.$element = null;
        });
      };

      // TOOLTIP PLUGIN DEFINITION
      // =========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.tooltip');
          var options = typeof option == 'object' && option;

          if (!data && /destroy|hide/.test(option)) return;
          if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.tooltip;

      $.fn.tooltip = Plugin;
      $.fn.tooltip.Constructor = Tooltip;

      // TOOLTIP NO CONFLICT
      // ===================

      $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old;
        return this;
      };
    }(jQuery);

    /* ========================================================================
     * Bootstrap: popover.js v3.3.7
     * http://getbootstrap.com/javascript/#popovers
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // POPOVER PUBLIC CLASS DEFINITION
      // ===============================

      var Popover = function (element, options) {
        this.init('popover', element, options);
      };

      if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

      Popover.VERSION = '3.3.7';

      Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      });

      // NOTE: POPOVER EXTENDS tooltip.js
      // ================================

      Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

      Popover.prototype.constructor = Popover;

      Popover.prototype.getDefaults = function () {
        return Popover.DEFAULTS;
      };

      Popover.prototype.setContent = function () {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
        $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
        this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

        $tip.removeClass('fade top bottom left right in');

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
      };

      Popover.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      };

      Popover.prototype.getContent = function () {
        var $e = this.$element;
        var o = this.options;

        return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
      };

      Popover.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.arrow');
      };

      // POPOVER PLUGIN DEFINITION
      // =========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.popover');
          var options = typeof option == 'object' && option;

          if (!data && /destroy|hide/.test(option)) return;
          if (!data) $this.data('bs.popover', data = new Popover(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.popover;

      $.fn.popover = Plugin;
      $.fn.popover.Constructor = Popover;

      // POPOVER NO CONFLICT
      // ===================

      $.fn.popover.noConflict = function () {
        $.fn.popover = old;
        return this;
      };
    }(jQuery);

    /* ========================================================================
     * Bootstrap: scrollspy.js v3.3.7
     * http://getbootstrap.com/javascript/#scrollspy
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // SCROLLSPY CLASS DEFINITION
      // ==========================

      function ScrollSpy(element, options) {
        this.$body = $(document.body);
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || '') + ' .nav li > a';
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;

        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
        this.refresh();
        this.process();
      }

      ScrollSpy.VERSION = '3.3.7';

      ScrollSpy.DEFAULTS = {
        offset: 10
      };

      ScrollSpy.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
      };

      ScrollSpy.prototype.refresh = function () {
        var that = this;
        var offsetMethod = 'offset';
        var offsetBase = 0;

        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();

        if (!$.isWindow(this.$scrollElement[0])) {
          offsetMethod = 'position';
          offsetBase = this.$scrollElement.scrollTop();
        }

        this.$body.find(this.selector).map(function () {
          var $el = $(this);
          var href = $el.data('target') || $el.attr('href');
          var $href = /^#./.test(href) && $(href);

          return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).each(function () {
          that.offsets.push(this[0]);
          that.targets.push(this[1]);
        });
      };

      ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;

        if (this.scrollHeight != scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }

        if (activeTarget && scrollTop < offsets[0]) {
          this.activeTarget = null;
          return this.clear();
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
        }
      };

      ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target;

        this.clear();

        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

        var active = $(selector).parents('li').addClass('active');

        if (active.parent('.dropdown-menu').length) {
          active = active.closest('li.dropdown').addClass('active');
        }

        active.trigger('activate.bs.scrollspy');
      };

      ScrollSpy.prototype.clear = function () {
        $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
      };

      // SCROLLSPY PLUGIN DEFINITION
      // ===========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.scrollspy');
          var options = typeof option == 'object' && option;

          if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.scrollspy;

      $.fn.scrollspy = Plugin;
      $.fn.scrollspy.Constructor = ScrollSpy;

      // SCROLLSPY NO CONFLICT
      // =====================

      $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old;
        return this;
      };

      // SCROLLSPY DATA-API
      // ==================

      $(window).on('load.bs.scrollspy.data-api', function () {
        $('[data-spy="scroll"]').each(function () {
          var $spy = $(this);
          Plugin.call($spy, $spy.data());
        });
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: tab.js v3.3.7
     * http://getbootstrap.com/javascript/#tabs
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // TAB CLASS DEFINITION
      // ====================

      var Tab = function (element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element);
        // jscs:enable requireDollarBeforejQueryAssignment
      };

      Tab.VERSION = '3.3.7';

      Tab.TRANSITION_DURATION = 150;

      Tab.prototype.show = function () {
        var $this = this.element;
        var $ul = $this.closest('ul:not(.dropdown-menu)');
        var selector = $this.data('target');

        if (!selector) {
          selector = $this.attr('href');
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return;

        var $previous = $ul.find('.active:last a');
        var hideEvent = $.Event('hide.bs.tab', {
          relatedTarget: $this[0]
        });
        var showEvent = $.Event('show.bs.tab', {
          relatedTarget: $previous[0]
        });

        $previous.trigger(hideEvent);
        $this.trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

        var $target = $(selector);

        this.activate($this.closest('li'), $ul);
        this.activate($target, $target.parent(), function () {
          $previous.trigger({
            type: 'hidden.bs.tab',
            relatedTarget: $this[0]
          });
          $this.trigger({
            type: 'shown.bs.tab',
            relatedTarget: $previous[0]
          });
        });
      };

      Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find('> .active');
        var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

        function next() {
          $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

          element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

          if (transition) {
            element[0].offsetWidth; // reflow for transition
            element.addClass('in');
          } else {
            element.removeClass('fade');
          }

          if (element.parent('.dropdown-menu').length) {
            element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
          }

          callback && callback();
        }

        $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

        $active.removeClass('in');
      };

      // TAB PLUGIN DEFINITION
      // =====================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.tab');

          if (!data) $this.data('bs.tab', data = new Tab(this));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.tab;

      $.fn.tab = Plugin;
      $.fn.tab.Constructor = Tab;

      // TAB NO CONFLICT
      // ===============

      $.fn.tab.noConflict = function () {
        $.fn.tab = old;
        return this;
      };

      // TAB DATA-API
      // ============

      var clickHandler = function (e) {
        e.preventDefault();
        Plugin.call($(this), 'show');
      };

      $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
    }(jQuery);

    /* ========================================================================
     * Bootstrap: affix.js v3.3.7
     * http://getbootstrap.com/javascript/#affix
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // AFFIX CLASS DEFINITION
      // ======================

      var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);

        this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

        this.$element = $(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;

        this.checkPosition();
      };

      Affix.VERSION = '3.3.7';

      Affix.RESET = 'affix affix-top affix-bottom';

      Affix.DEFAULTS = {
        offset: 0,
        target: window
      };

      Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();

        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

        if (this.affixed == 'bottom') {
          if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
          return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
        }

        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;

        if (offsetTop != null && scrollTop <= offsetTop) return 'top';
        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

        return false;
      };

      Affix.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass('affix');
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
      };

      Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1);
      };

      Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return;

        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = Math.max($(document).height(), $(document.body).height());

        if (typeof offset != 'object') offsetBottom = offsetTop = offset;
        if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

        if (this.affixed != affix) {
          if (this.unpin != null) this.$element.css('top', '');

          var affixType = 'affix' + (affix ? '-' + affix : '');
          var e = $.Event(affixType + '.bs.affix');

          this.$element.trigger(e);

          if (e.isDefaultPrevented()) return;

          this.affixed = affix;
          this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

          this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
        }

        if (affix == 'bottom') {
          this.$element.offset({
            top: scrollHeight - height - offsetBottom
          });
        }
      };

      // AFFIX PLUGIN DEFINITION
      // =======================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.affix');
          var options = typeof option == 'object' && option;

          if (!data) $this.data('bs.affix', data = new Affix(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.affix;

      $.fn.affix = Plugin;
      $.fn.affix.Constructor = Affix;

      // AFFIX NO CONFLICT
      // =================

      $.fn.affix.noConflict = function () {
        $.fn.affix = old;
        return this;
      };

      // AFFIX DATA-API
      // ==============

      $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
          var $spy = $(this);
          var data = $spy.data();

          data.offset = data.offset || {};

          if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
          if (data.offsetTop != null) data.offset.top = data.offsetTop;

          Plugin.call($spy, data);
        });
      });
    }(jQuery);
  })(this);

  return _retrieveGlobal();
});
$__System.registerDynamic("5", ["4"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("4");
  return module.exports;
});
$__System.register("6", ["7"], function (_export) {
  "use strict";

  var d3;

  _export("default", groupedBarChart);

  function groupedBarChart() {

    var width = 0;
    var height = 0;
    var classMap = {};
    var classMapFunction = function classMapFunction(d) {
      return classMap[d.name];
    };
    var x0;
    var x1;
    var y;
    var groupRangeFunction;

    function chart(svg, data) {
      window.d3 = d3;

      // group of bars
      var issuer = svg.selectAll(".issuer").data(data);

      var enterAndUpdate = issuer.enter().append("g").merge(issuer).attr("class", "issuer").attr("transform", groupRangeFunction);

      // draw each individual bar
      var sel = enterAndUpdate.selectAll("rect").data(function (d) {
        return d.groups;
      }, function (d) {
        return d.name;
      });

      sel.enter().append("rect").attr("y", height).merge(sel).data(function (d) {
        return d.groups;
      }).attr("width", x1.bandwidth()).attr("x", function (d) {
        return x1(d.name);
      }).attr("class", classMapFunction).transition().duration(1000).attr("y", function (d) {
        return y(d.value);
      }).attr("height", function (d) {
        return height - y(d.value);
      });

      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide)
      sel.exit().transition().duration(1000).attr("height", 0).attr("y", function (d) {
        return height;
      }).remove();
    }

    chart.width = function (value) {
      if (!arguments.length) return width;
      width = value;
      return chart;
    };
    chart.height = function (value) {
      if (!arguments.length) return height;
      height = value;
      return chart;
    };
    chart.classMap = function (value) {
      if (!arguments.length) return classMap;
      classMap = value;
      return chart;
    };
    chart.classMapFunction = function (value) {
      if (!arguments.length) return classMapFunction;
      classMapFunction = value;
      return chart;
    };
    chart.x0 = function (value) {
      if (!arguments.length) return x0;
      x0 = value;
      return chart;
    };
    chart.x1 = function (value) {
      if (!arguments.length) return x1;
      x1 = value;
      return chart;
    };

    chart.y = function (value) {
      if (!arguments.length) return y;
      y = value;
      return chart;
    };

    chart.groupRangeFunction = function (value) {
      if (!arguments.length) return groupRangeFunction;
      groupRangeFunction = value;
      return chart;
    };

    return chart;
  }

  return {
    setters: [function (_) {
      d3 = _;
    }],
    execute: function () {}
  };
});
$__System.register("8", ["7", "9", "a"], function (_export) {
	var d3, getInsightsData, _Object$keys;

	function getData() {
		var txnType = "sig_debit";

		function getData() {
			var insightsData = getInsightsData(txnType);
			var issuers = _Object$keys(insightsData);
			var groupedBarData = [];

			for (var i = 0; i < issuers.length; i++) {
				//map Issuer to issuer to fi for every fi
				groupedBarData[i] = {
					Issuer: issuers[i]
				};

				//map every mcc_name to fee_pc for every fi
				for (var j = 0; j < insightsData[[issuers[i]]].length; j++) {
					groupedBarData[i][insightsData[issuers[i]][j].mcc_name] = insightsData[issuers[i]][j].fee_pc;
				}
			}
			var jsonGroupNames = d3.keys(groupedBarData[0]).filter(function (key) {
				return key !== "Issuer";
			});

			groupedBarData.forEach(function (d) {
				d.groups = jsonGroupNames.map(function (name) {
					return { name: name, value: +d[name] };
				});
			});

			groupedBarData.columns = jsonGroupNames;

			return groupedBarData;
		}

		getData.txnType = function (value) {
			if (!arguments.length) return txnType;
			txnType = value;
			return getData;
		};

		return getData;
	}

	return {
		setters: [function (_2) {
			d3 = _2;
		}, function (_) {
			getInsightsData = _.getInsightsData;
		}, function (_a) {
			_Object$keys = _a["default"];
		}],
		execute: function () {
			"use strict";

			_export("default", getData);
		}
	};
});
$__System.register("b", ["7", "9"], function (_export) {
	"use strict";

	var d3, getInsightsData;

	_export("default", getData);

	function getData() {
		var txnType = "sig_debdfsit";
		var fi = "My Financial Institutionsdf";

		function getData() {
			var data = getInsightsData(txnType, fi);

			data = data.filter(function (obj) {
				return obj.mcc_name != "Total";
			});

			//console.log(data);

			return data;
		}

		getData.txnType = function (value) {
			if (!arguments.length) return txnType;
			txnType = value;
			return getData;
		};
		getData.fi = function (value) {
			if (!arguments.length) return fi;
			fi = value;
			return getData;
		};

		return getData;
	}

	return {
		setters: [function (_2) {
			d3 = _2;
		}, function (_) {
			getInsightsData = _.getInsightsData;
		}],
		execute: function () {}
	};
});
$__System.register("c", ["7"], function (_export) {
    "use strict";

    var d3;

    _export("default", tableChart);

    function tableChart() {

        function buildTable(container, data) {

            // declare variables for Table Head and Body
            var thead = container.select("thead");
            var tbody = container.select("tbody");

            /***** Add header elements ******/
            var thRowUpdate = thead.selectAll("tr").data([data.headers]);

            var thRow = thRowUpdate.enter().append("tr").merge(thRowUpdate);

            // using es6 anonymouse function notation in .data()
            var thCells = thRow.selectAll("th").data(function (d) {
                return d;
            });

            thCells.exit().remove();

            thCells.enter().append("th").merge(thCells)
            // using es6 anonymouse function notation in .text()
            .text(function (d) {
                return d;
            }).style("opacity", 0).transition().delay(1500).style("opacity", 1);

            /***** create a row for each object in the data *****/
            // mapping function from data ro td based on columns
            // row is an object with keys = data.columns
            // build array of objects for each key in row
            function rowData(row) {
                return data.columns.map(function (column) {
                    return { column: column, value: row[column] };
                });
            }

            var bodyRowsUpdate = tbody.selectAll("tr").data(data);

            var bodyRows = bodyRowsUpdate.enter().append("tr").merge(bodyRowsUpdate);

            var bodyCells = bodyRows.selectAll("td").data(rowData);

            bodyCells.exit().remove();

            bodyCells.enter().append("td").merge(bodyCells).text(function (d) {
                return d.value;
            }).style("opacity", 0).transition().delay(1500).style("opacity", 1);
        }

        return buildTable;
    }

    return {
        setters: [function (_) {
            d3 = _;
        }],
        execute: function () {}
    };
});
$__System.registerDynamic('d', [], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	/* */
	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

		var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

		var PLUS = '+'.charCodeAt(0);
		var SLASH = '/'.charCodeAt(0);
		var NUMBER = '0'.charCodeAt(0);
		var LOWER = 'a'.charCodeAt(0);
		var UPPER = 'A'.charCodeAt(0);
		var PLUS_URL_SAFE = '-'.charCodeAt(0);
		var SLASH_URL_SAFE = '_'.charCodeAt(0);

		function decode(elt) {
			var code = elt.charCodeAt(0);
			if (code === PLUS || code === PLUS_URL_SAFE) return 62; // '+'
			if (code === SLASH || code === SLASH_URL_SAFE) return 63; // '/'
			if (code < NUMBER) return -1; //no match
			if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
			if (code < UPPER + 26) return code - UPPER;
			if (code < LOWER + 26) return code - LOWER + 26;
		}

		function b64ToByteArray(b64) {
			var i, j, l, tmp, placeHolders, arr;

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4');
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length;
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders);

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length;

			var L = 0;

			function push(v) {
				arr[L++] = v;
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
				push((tmp & 0xFF0000) >> 16);
				push((tmp & 0xFF00) >> 8);
				push(tmp & 0xFF);
			}

			if (placeHolders === 2) {
				tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
				push(tmp & 0xFF);
			} else if (placeHolders === 1) {
				tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
				push(tmp >> 8 & 0xFF);
				push(tmp & 0xFF);
			}

			return arr;
		}

		function uint8ToBase64(uint8) {
			var i,
			    extraBytes = uint8.length % 3,
			    // if we have 1 byte left, pad 2 bytes
			output = "",
			    temp,
			    length;

			function encode(num) {
				return lookup.charAt(num);
			}

			function tripletToBase64(num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
				output += tripletToBase64(temp);
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1];
					output += encode(temp >> 2);
					output += encode(temp << 4 & 0x3F);
					output += '==';
					break;
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
					output += encode(temp >> 10);
					output += encode(temp >> 4 & 0x3F);
					output += encode(temp << 2 & 0x3F);
					output += '=';
					break;
			}

			return output;
		}

		exports.toByteArray = b64ToByteArray;
		exports.fromByteArray = uint8ToBase64;
	})(typeof exports === 'undefined' ? this.base64js = {} : exports);
	return module.exports;
});
$__System.registerDynamic("e", ["d"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("d");
  return module.exports;
});
$__System.registerDynamic("f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };

  exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  };
  return module.exports;
});
$__System.registerDynamic("10", ["f"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("f");
  return module.exports;
});
$__System.registerDynamic('11', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };
  return module.exports;
});
$__System.registerDynamic("12", ["11"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("11");
  return module.exports;
});
$__System.registerDynamic('13', ['e', '10', '12'], true, function ($__require, exports, module) {
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  /* eslint-disable no-proto */

  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var base64 = $__require('e');
  var ieee754 = $__require('10');
  var isArray = $__require('12');

  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.poolSize = 8192; // not used by this implementation

  var rootParent = {};

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
   *     on objects.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.
  
   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

  function typedArraySupport() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function () {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && // typed array instances can be augmented
      arr.constructor === Bar && // constructor can be set
      typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
      arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
    } catch (e) {
      return false;
    }
  }

  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }

  /**
   * Class: Buffer
   * =============
   *
   * The Buffer constructor returns instances of `Uint8Array` that are augmented
   * with function properties for all the node `Buffer` API functions. We use
   * `Uint8Array` so that square bracket notation works as expected -- it returns
   * a single octet.
   *
   * By augmenting the instances, we can avoid modifying the `Uint8Array`
   * prototype.
   */
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
      if (arguments.length > 1) return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }

    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      this.length = 0;
      this.parent = undefined;
    }

    // Common case.
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }

    // Slightly less common case.
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }

    // Unusual.
    return fromObject(this, arg);
  }

  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }

  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';

    // Assumption: byteLength() return value is always < kMaxLength.
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);

    that.write(string, encoding);
    return that;
  }

  function fromObject(that, object) {
    if (Buffer.isBuffer(object)) return fromBuffer(that, object);

    if (isArray(object)) return fromArray(that, object);

    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }

    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }

    if (object.length) return fromArrayLike(that, object);

    return fromJsonObject(that, object);
  }

  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }

  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  // Duplicate of fromArray() to keep fromArray() monomorphic.
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    // Truncating the elements is probably not what people expect from typed
    // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
    // of the old Buffer constructor.
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }

  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  // Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
  // Returns a zero-length buffer for inputs that don't conform to the spec.
  function fromJsonObject(that, object) {
    var array;
    var length = 0;

    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);

    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  } else {
    // pre-set for values that may exist in the future
    Buffer.prototype.length = undefined;
    Buffer.prototype.parent = undefined;
  }

  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that.length = length;
      that._isBuffer = true;
    }

    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool) that.parent = rootParent;

    return that;
  }

  function checked(length) {
    // Note: cannot use `length < kMaxLength` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }

  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding);

    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }

  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };

  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) return 0;

    var x = a.length;
    var y = b.length;

    var i = 0;
    var len = Math.min(x, y);
    while (i < len) {
      if (a[i] !== b[i]) break;

      ++i;
    }

    if (i !== len) {
      x = a[i];
      y = b[i];
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };

  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'raw':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };

  Buffer.concat = function concat(list, length) {
    if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.');

    if (list.length === 0) {
      return new Buffer(0);
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; i++) {
        length += list[i].length;
      }
    }

    var buf = new Buffer(length);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
      var item = list[i];
      item.copy(buf, pos);
      pos += item.length;
    }
    return buf;
  };

  function byteLength(string, encoding) {
    if (typeof string !== 'string') string = '' + string;

    var len = string.length;
    if (len === 0) return 0;

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        // Deprecated
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase) return utf8ToBytes(string).length; // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;

  function slowToString(encoding, start, end) {
    var loweredCase = false;

    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;

    if (!encoding) encoding = 'utf8';
    if (start < 0) start = 0;
    if (end > this.length) end = this.length;
    if (end <= start) return '';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);

        case 'ascii':
          return asciiSlice(this, start, end);

        case 'binary':
          return binarySlice(this, start, end);

        case 'base64':
          return base64Slice(this, start, end);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };

  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
  };

  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };

  Buffer.prototype.compare = function compare(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return 0;
    return Buffer.compare(this, b);
  };

  Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
    if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;else if (byteOffset < -0x80000000) byteOffset = -0x80000000;
    byteOffset >>= 0;

    if (this.length === 0) return -1;
    if (byteOffset >= this.length) return -1;

    // Negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0);

    if (typeof val === 'string') {
      if (val.length === 0) return -1; // special case: looking for empty string always fails
      return String.prototype.indexOf.call(this, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
      return arrayIndexOf(this, val, byteOffset);
    }
    if (typeof val === 'number') {
      if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
      }
      return arrayIndexOf(this, [val], byteOffset);
    }

    function arrayIndexOf(arr, val, byteOffset) {
      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arr.length; i++) {
        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex;
        } else {
          foundIndex = -1;
        }
      }
      return -1;
    }

    throw new TypeError('val must be string, number or Buffer');
  };

  // `get` is deprecated
  Buffer.prototype.get = function get(offset) {
    console.log('.get() is deprecated. Access using array indexes instead.');
    return this.readUInt8(offset);
  };

  // `set` is deprecated
  Buffer.prototype.set = function set(v, offset) {
    console.log('.set() is deprecated. Access using array indexes instead.');
    return this.writeUInt8(v, offset);
  };

  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new Error('Invalid hex string');

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }

  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }

  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }

  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }

  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }

  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }

  Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
      // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
      // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      var swap = encoding;
      encoding = offset;
      offset = length | 0;
      length = swap;
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);

        case 'ascii':
          return asciiWrite(this, string, offset, length);

        case 'binary':
          return binaryWrite(this, string, offset, length);

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };

  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }

  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }

  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }

  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }

  function hexSlice(buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }

  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }

  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = Buffer._augment(this.subarray(start, end));
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; i++) {
        newBuf[i] = this[i + start];
      }
    }

    if (newBuf.length) newBuf.parent = this.parent || this;

    return newBuf;
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }

  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val;
  };

  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val;
  };

  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };

  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  };

  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  };

  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };

  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };

  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };

  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };

  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };

  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };

  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };

  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('index out of range');
  }

  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = value & 0xff;
    return offset + 1;
  };

  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };

  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
    }
  }

  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };

  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };

  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };

  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };

  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };

  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };

  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min) throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('index out of range');
    if (offset < 0) throw new RangeError('index out of range');
  }

  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }

  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };

  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }

  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; i--) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; i++) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      target._set(this.subarray(start, start + len), targetStart);
    }

    return len;
  };

  // fill(value, start=0, end=buffer.length)
  Buffer.prototype.fill = function fill(value, start, end) {
    if (!value) value = 0;
    if (!start) start = 0;
    if (!end) end = this.length;

    if (end < start) throw new RangeError('end < start');

    // Fill 0 bytes; we're done
    if (end === start) return;
    if (this.length === 0) return;

    if (start < 0 || start >= this.length) throw new RangeError('start out of bounds');
    if (end < 0 || end > this.length) throw new RangeError('end out of bounds');

    var i;
    if (typeof value === 'number') {
      for (i = start; i < end; i++) {
        this[i] = value;
      }
    } else {
      var bytes = utf8ToBytes(value.toString());
      var len = bytes.length;
      for (i = start; i < end; i++) {
        this[i] = bytes[i % len];
      }
    }

    return this;
  };

  /**
   * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
   * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
   */
  Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
    if (typeof Uint8Array !== 'undefined') {
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        return new Buffer(this).buffer;
      } else {
        var buf = new Uint8Array(this.length);
        for (var i = 0, len = buf.length; i < len; i += 1) {
          buf[i] = this[i];
        }
        return buf.buffer;
      }
    } else {
      throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
  };

  // HELPER FUNCTIONS
  // ================

  var BP = Buffer.prototype;

  /**
   * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
   */
  Buffer._augment = function _augment(arr) {
    arr.constructor = Buffer;
    arr._isBuffer = true;

    // save reference to original Uint8Array set method before overwriting
    arr._set = arr.set;

    // deprecated
    arr.get = BP.get;
    arr.set = BP.set;

    arr.write = BP.write;
    arr.toString = BP.toString;
    arr.toLocaleString = BP.toString;
    arr.toJSON = BP.toJSON;
    arr.equals = BP.equals;
    arr.compare = BP.compare;
    arr.indexOf = BP.indexOf;
    arr.copy = BP.copy;
    arr.slice = BP.slice;
    arr.readUIntLE = BP.readUIntLE;
    arr.readUIntBE = BP.readUIntBE;
    arr.readUInt8 = BP.readUInt8;
    arr.readUInt16LE = BP.readUInt16LE;
    arr.readUInt16BE = BP.readUInt16BE;
    arr.readUInt32LE = BP.readUInt32LE;
    arr.readUInt32BE = BP.readUInt32BE;
    arr.readIntLE = BP.readIntLE;
    arr.readIntBE = BP.readIntBE;
    arr.readInt8 = BP.readInt8;
    arr.readInt16LE = BP.readInt16LE;
    arr.readInt16BE = BP.readInt16BE;
    arr.readInt32LE = BP.readInt32LE;
    arr.readInt32BE = BP.readInt32BE;
    arr.readFloatLE = BP.readFloatLE;
    arr.readFloatBE = BP.readFloatBE;
    arr.readDoubleLE = BP.readDoubleLE;
    arr.readDoubleBE = BP.readDoubleBE;
    arr.writeUInt8 = BP.writeUInt8;
    arr.writeUIntLE = BP.writeUIntLE;
    arr.writeUIntBE = BP.writeUIntBE;
    arr.writeUInt16LE = BP.writeUInt16LE;
    arr.writeUInt16BE = BP.writeUInt16BE;
    arr.writeUInt32LE = BP.writeUInt32LE;
    arr.writeUInt32BE = BP.writeUInt32BE;
    arr.writeIntLE = BP.writeIntLE;
    arr.writeIntBE = BP.writeIntBE;
    arr.writeInt8 = BP.writeInt8;
    arr.writeInt16LE = BP.writeInt16LE;
    arr.writeInt16BE = BP.writeInt16BE;
    arr.writeInt32LE = BP.writeInt32LE;
    arr.writeInt32BE = BP.writeInt32BE;
    arr.writeFloatLE = BP.writeFloatLE;
    arr.writeFloatBE = BP.writeFloatBE;
    arr.writeDoubleLE = BP.writeDoubleLE;
    arr.writeDoubleBE = BP.writeDoubleBE;
    arr.fill = BP.fill;
    arr.inspect = BP.inspect;
    arr.toArrayBuffer = BP.toArrayBuffer;

    return arr;
  };

  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

  function base64clean(str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }

  function stringtrim(str) {
    if (str.trim) return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }

  function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
  }

  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }

          // valid lead
          leadSurrogate = codePoint;

          continue;
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }

    return bytes;
  }

  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }

  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0) break;

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray;
  }

  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }

  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  return module.exports;
});
$__System.registerDynamic("14", ["13"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("13");
  return module.exports;
});
$__System.registerDynamic('15', ['14'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('buffer') : $__require('14');
  return module.exports;
});
$__System.registerDynamic("16", ["15"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("15");
  return module.exports;
});
$__System.registerDynamic('17', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
    return module.exports;
});
$__System.registerDynamic("18", ["17"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("17");
  return module.exports;
});
$__System.registerDynamic('19', ['18'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('18');
  return module.exports;
});
$__System.registerDynamic("1a", ["19"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("19");
  return module.exports;
});
$__System.registerDynamic('1b', ['16', '1a'], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var define,
      global = this || self,
      GLOBAL = global;
  (function (Buffer, process) {
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.d3 = global.d3 || {});
    })(this, function (exports) {
      'use strict';

      var version = "4.4.0";
      var ascending = function (a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      };
      var bisector = function (compare) {
        if (compare.length === 1) compare = ascendingComparator(compare);
        return {
          left: function (a, x, lo, hi) {
            if (lo == null) lo = 0;
            if (hi == null) hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
            }
            return lo;
          },
          right: function (a, x, lo, hi) {
            if (lo == null) lo = 0;
            if (hi == null) hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
            }
            return lo;
          }
        };
      };
      function ascendingComparator(f) {
        return function (d, x) {
          return ascending(f(d), x);
        };
      }
      var ascendingBisect = bisector(ascending);
      var bisectRight = ascendingBisect.right;
      var bisectLeft = ascendingBisect.left;
      var descending = function (a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      };
      var number = function (x) {
        return x === null ? NaN : +x;
      };
      var variance = function (array, f) {
        var n = array.length,
            m = 0,
            a,
            d,
            s = 0,
            i = -1,
            j = 0;
        if (f == null) {
          while (++i < n) {
            if (!isNaN(a = number(array[i]))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        } else {
          while (++i < n) {
            if (!isNaN(a = number(f(array[i], i, array)))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        }
        if (j > 1) return s / (j - 1);
      };
      var deviation = function (array, f) {
        var v = variance(array, f);
        return v ? Math.sqrt(v) : v;
      };
      var extent = function (array, f) {
        var i = -1,
            n = array.length,
            a,
            b,
            c;
        if (f == null) {
          while (++i < n) if ((b = array[i]) != null && b >= b) {
            a = c = b;
            break;
          }
          while (++i < n) if ((b = array[i]) != null) {
            if (a > b) a = b;
            if (c < b) c = b;
          }
        } else {
          while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) {
            a = c = b;
            break;
          }
          while (++i < n) if ((b = f(array[i], i, array)) != null) {
            if (a > b) a = b;
            if (c < b) c = b;
          }
        }
        return [a, c];
      };
      var array = Array.prototype;
      var slice = array.slice;
      var map = array.map;
      var constant$1 = function (x) {
        return function () {
          return x;
        };
      };
      var identity = function (x) {
        return x;
      };
      var range = function (start, stop, step) {
        start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
        var i = -1,
            n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
            range = new Array(n);
        while (++i < n) {
          range[i] = start + i * step;
        }
        return range;
      };
      var e10 = Math.sqrt(50);
      var e5 = Math.sqrt(10);
      var e2 = Math.sqrt(2);
      var ticks = function (start, stop, count) {
        var step = tickStep(start, stop, count);
        return range(Math.ceil(start / step) * step, Math.floor(stop / step) * step + step / 2, step);
      };
      function tickStep(start, stop, count) {
        var step0 = Math.abs(stop - start) / Math.max(0, count),
            step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
            error = step0 / step1;
        if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
        return stop < start ? -step1 : step1;
      }
      var sturges = function (values) {
        return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
      };
      var histogram = function () {
        var value = identity,
            domain = extent,
            threshold = sturges;
        function histogram(data) {
          var i,
              n = data.length,
              x,
              values = new Array(n);
          for (i = 0; i < n; ++i) {
            values[i] = value(data[i], i, data);
          }
          var xz = domain(values),
              x0 = xz[0],
              x1 = xz[1],
              tz = threshold(values, x0, x1);
          if (!Array.isArray(tz)) tz = ticks(x0, x1, tz);
          var m = tz.length;
          while (tz[0] <= x0) tz.shift(), --m;
          while (tz[m - 1] >= x1) tz.pop(), --m;
          var bins = new Array(m + 1),
              bin;
          for (i = 0; i <= m; ++i) {
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
          }
          for (i = 0; i < n; ++i) {
            x = values[i];
            if (x0 <= x && x <= x1) {
              bins[bisectRight(tz, x, 0, m)].push(data[i]);
            }
          }
          return bins;
        }
        histogram.value = function (_) {
          return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(_), histogram) : value;
        };
        histogram.domain = function (_) {
          return arguments.length ? (domain = typeof _ === "function" ? _ : constant$1([_[0], _[1]]), histogram) : domain;
        };
        histogram.thresholds = function (_) {
          return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant$1(slice.call(_)) : constant$1(_), histogram) : threshold;
        };
        return histogram;
      };
      var threshold = function (array, p, f) {
        if (f == null) f = number;
        if (!(n = array.length)) return;
        if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
        if (p >= 1) return +f(array[n - 1], n - 1, array);
        var n,
            h = (n - 1) * p,
            i = Math.floor(h),
            a = +f(array[i], i, array),
            b = +f(array[i + 1], i + 1, array);
        return a + (b - a) * (h - i);
      };
      var freedmanDiaconis = function (values, min, max) {
        values = map.call(values, number).sort(ascending);
        return Math.ceil((max - min) / (2 * (threshold(values, 0.75) - threshold(values, 0.25)) * Math.pow(values.length, -1 / 3)));
      };
      var scott = function (values, min, max) {
        return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
      };
      var max = function (array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (f == null) {
          while (++i < n) if ((b = array[i]) != null && b >= b) {
            a = b;
            break;
          }
          while (++i < n) if ((b = array[i]) != null && b > a) a = b;
        } else {
          while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) {
            a = b;
            break;
          }
          while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
        }
        return a;
      };
      var mean = function (array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1,
            j = n;
        if (f == null) {
          while (++i < n) if (!isNaN(a = number(array[i]))) s += a;else --j;
        } else {
          while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) s += a;else --j;
        }
        if (j) return s / j;
      };
      var median = function (array, f) {
        var numbers = [],
            n = array.length,
            a,
            i = -1;
        if (f == null) {
          while (++i < n) if (!isNaN(a = number(array[i]))) numbers.push(a);
        } else {
          while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) numbers.push(a);
        }
        return threshold(numbers.sort(ascending), 0.5);
      };
      var merge = function (arrays) {
        var n = arrays.length,
            m,
            i = -1,
            j = 0,
            merged,
            array;
        while (++i < n) j += arrays[i].length;
        merged = new Array(j);
        while (--n >= 0) {
          array = arrays[n];
          m = array.length;
          while (--m >= 0) {
            merged[--j] = array[m];
          }
        }
        return merged;
      };
      var min = function (array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (f == null) {
          while (++i < n) if ((b = array[i]) != null && b >= b) {
            a = b;
            break;
          }
          while (++i < n) if ((b = array[i]) != null && a > b) a = b;
        } else {
          while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) {
            a = b;
            break;
          }
          while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
        }
        return a;
      };
      var pairs = function (array) {
        var i = 0,
            n = array.length - 1,
            p = array[0],
            pairs = new Array(n < 0 ? 0 : n);
        while (i < n) pairs[i] = [p, p = array[++i]];
        return pairs;
      };
      var permute = function (array, indexes) {
        var i = indexes.length,
            permutes = new Array(i);
        while (i--) permutes[i] = array[indexes[i]];
        return permutes;
      };
      var scan = function (array, compare) {
        if (!(n = array.length)) return;
        var i = 0,
            n,
            j = 0,
            xi,
            xj = array[j];
        if (!compare) compare = ascending;
        while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;
        if (compare(xj, xj) === 0) return j;
      };
      var shuffle = function (array, i0, i1) {
        var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
            t,
            i;
        while (m) {
          i = Math.random() * m-- | 0;
          t = array[m + i0];
          array[m + i0] = array[i + i0];
          array[i + i0] = t;
        }
        return array;
      };
      var sum = function (array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1;
        if (f == null) {
          while (++i < n) if (a = +array[i]) s += a;
        } else {
          while (++i < n) if (a = +f(array[i], i, array)) s += a;
        }
        return s;
      };
      var transpose = function (matrix) {
        if (!(n = matrix.length)) return [];
        for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
          for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
            row[j] = matrix[j][i];
          }
        }
        return transpose;
      };
      function length(d) {
        return d.length;
      }
      var zip = function () {
        return transpose(arguments);
      };
      var prefix = "$";
      function Map() {}
      Map.prototype = map$1.prototype = {
        constructor: Map,
        has: function (key) {
          return prefix + key in this;
        },
        get: function (key) {
          return this[prefix + key];
        },
        set: function (key, value) {
          this[prefix + key] = value;
          return this;
        },
        remove: function (key) {
          var property = prefix + key;
          return property in this && delete this[property];
        },
        clear: function () {
          for (var property in this) if (property[0] === prefix) delete this[property];
        },
        keys: function () {
          var keys = [];
          for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
          return keys;
        },
        values: function () {
          var values = [];
          for (var property in this) if (property[0] === prefix) values.push(this[property]);
          return values;
        },
        entries: function () {
          var entries = [];
          for (var property in this) if (property[0] === prefix) entries.push({
            key: property.slice(1),
            value: this[property]
          });
          return entries;
        },
        size: function () {
          var size = 0;
          for (var property in this) if (property[0] === prefix) ++size;
          return size;
        },
        empty: function () {
          for (var property in this) if (property[0] === prefix) return false;
          return true;
        },
        each: function (f) {
          for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
        }
      };
      function map$1(object, f) {
        var map = new Map();
        if (object instanceof Map) object.each(function (value, key) {
          map.set(key, value);
        });else if (Array.isArray(object)) {
          var i = -1,
              n = object.length,
              o;
          if (f == null) while (++i < n) map.set(i, object[i]);else while (++i < n) map.set(f(o = object[i], i, object), o);
        } else if (object) for (var key in object) map.set(key, object[key]);
        return map;
      }
      var nest = function () {
        var keys = [],
            sortKeys = [],
            sortValues,
            rollup,
            nest;
        function apply(array, depth, createResult, setResult) {
          if (depth >= keys.length) return rollup != null ? rollup(array) : sortValues != null ? array.sort(sortValues) : array;
          var i = -1,
              n = array.length,
              key = keys[depth++],
              keyValue,
              value,
              valuesByKey = map$1(),
              values,
              result = createResult();
          while (++i < n) {
            if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
              values.push(value);
            } else {
              valuesByKey.set(keyValue, [value]);
            }
          }
          valuesByKey.each(function (values, key) {
            setResult(result, key, apply(values, depth, createResult, setResult));
          });
          return result;
        }
        function entries(map, depth) {
          if (++depth > keys.length) return map;
          var array,
              sortKey = sortKeys[depth - 1];
          if (rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
            array.push({
              key: k,
              values: entries(v, depth)
            });
          });
          return sortKey != null ? array.sort(function (a, b) {
            return sortKey(a.key, b.key);
          }) : array;
        }
        return nest = {
          object: function (array) {
            return apply(array, 0, createObject, setObject);
          },
          map: function (array) {
            return apply(array, 0, createMap, setMap);
          },
          entries: function (array) {
            return entries(apply(array, 0, createMap, setMap), 0);
          },
          key: function (d) {
            keys.push(d);
            return nest;
          },
          sortKeys: function (order) {
            sortKeys[keys.length - 1] = order;
            return nest;
          },
          sortValues: function (order) {
            sortValues = order;
            return nest;
          },
          rollup: function (f) {
            rollup = f;
            return nest;
          }
        };
      };
      function createObject() {
        return {};
      }
      function setObject(object, key, value) {
        object[key] = value;
      }
      function createMap() {
        return map$1();
      }
      function setMap(map, key, value) {
        map.set(key, value);
      }
      function Set() {}
      var proto = map$1.prototype;
      Set.prototype = set.prototype = {
        constructor: Set,
        has: proto.has,
        add: function (value) {
          value += "";
          this[prefix + value] = value;
          return this;
        },
        remove: proto.remove,
        clear: proto.clear,
        values: proto.keys,
        size: proto.size,
        empty: proto.empty,
        each: proto.each
      };
      function set(object, f) {
        var set = new Set();
        if (object instanceof Set) object.each(function (value) {
          set.add(value);
        });else if (object) {
          var i = -1,
              n = object.length;
          if (f == null) while (++i < n) set.add(object[i]);else while (++i < n) set.add(f(object[i], i, object));
        }
        return set;
      }
      var keys = function (map) {
        var keys = [];
        for (var key in map) keys.push(key);
        return keys;
      };
      var values = function (map) {
        var values = [];
        for (var key in map) values.push(map[key]);
        return values;
      };
      var entries = function (map) {
        var entries = [];
        for (var key in map) entries.push({
          key: key,
          value: map[key]
        });
        return entries;
      };
      var uniform = function (min, max) {
        min = min == null ? 0 : +min;
        max = max == null ? 1 : +max;
        if (arguments.length === 1) max = min, min = 0;else max -= min;
        return function () {
          return Math.random() * max + min;
        };
      };
      var normal = function (mu, sigma) {
        var x, r;
        mu = mu == null ? 0 : +mu;
        sigma = sigma == null ? 1 : +sigma;
        return function () {
          var y;
          if (x != null) y = x, x = null;else do {
            x = Math.random() * 2 - 1;
            y = Math.random() * 2 - 1;
            r = x * x + y * y;
          } while (!r || r > 1);
          return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
        };
      };
      var logNormal = function () {
        var randomNormal = normal.apply(this, arguments);
        return function () {
          return Math.exp(randomNormal());
        };
      };
      var irwinHall = function (n) {
        return function () {
          for (var sum = 0, i = 0; i < n; ++i) sum += Math.random();
          return sum;
        };
      };
      var bates = function (n) {
        var randomIrwinHall = irwinHall(n);
        return function () {
          return randomIrwinHall() / n;
        };
      };
      var exponential = function (lambda) {
        return function () {
          return -Math.log(1 - Math.random()) / lambda;
        };
      };
      function linear(t) {
        return +t;
      }
      function quadIn(t) {
        return t * t;
      }
      function quadOut(t) {
        return t * (2 - t);
      }
      function quadInOut(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }
      function cubicIn(t) {
        return t * t * t;
      }
      function cubicOut(t) {
        return --t * t * t + 1;
      }
      function cubicInOut(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      var exponent = 3;
      var polyIn = function custom(e) {
        e = +e;
        function polyIn(t) {
          return Math.pow(t, e);
        }
        polyIn.exponent = custom;
        return polyIn;
      }(exponent);
      var polyOut = function custom(e) {
        e = +e;
        function polyOut(t) {
          return 1 - Math.pow(1 - t, e);
        }
        polyOut.exponent = custom;
        return polyOut;
      }(exponent);
      var polyInOut = function custom(e) {
        e = +e;
        function polyInOut(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
        }
        polyInOut.exponent = custom;
        return polyInOut;
      }(exponent);
      var pi = Math.PI;
      var halfPi = pi / 2;
      function sinIn(t) {
        return 1 - Math.cos(t * halfPi);
      }
      function sinOut(t) {
        return Math.sin(t * halfPi);
      }
      function sinInOut(t) {
        return (1 - Math.cos(pi * t)) / 2;
      }
      function expIn(t) {
        return Math.pow(2, 10 * t - 10);
      }
      function expOut(t) {
        return 1 - Math.pow(2, -10 * t);
      }
      function expInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
      }
      function circleIn(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function circleOut(t) {
        return Math.sqrt(1 - --t * t);
      }
      function circleInOut(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
      }
      var b1 = 4 / 11;
      var b2 = 6 / 11;
      var b3 = 8 / 11;
      var b4 = 3 / 4;
      var b5 = 9 / 11;
      var b6 = 10 / 11;
      var b7 = 15 / 16;
      var b8 = 21 / 22;
      var b9 = 63 / 64;
      var b0 = 1 / b1 / b1;
      function bounceIn(t) {
        return 1 - bounceOut(1 - t);
      }
      function bounceOut(t) {
        return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
      }
      function bounceInOut(t) {
        return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
      }
      var overshoot = 1.70158;
      var backIn = function custom(s) {
        s = +s;
        function backIn(t) {
          return t * t * ((s + 1) * t - s);
        }
        backIn.overshoot = custom;
        return backIn;
      }(overshoot);
      var backOut = function custom(s) {
        s = +s;
        function backOut(t) {
          return --t * t * ((s + 1) * t + s) + 1;
        }
        backOut.overshoot = custom;
        return backOut;
      }(overshoot);
      var backInOut = function custom(s) {
        s = +s;
        function backInOut(t) {
          return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
        }
        backInOut.overshoot = custom;
        return backInOut;
      }(overshoot);
      var tau = 2 * Math.PI;
      var amplitude = 1;
      var period = 0.3;
      var elasticIn = function custom(a, p) {
        var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
        function elasticIn(t) {
          return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
        }
        elasticIn.amplitude = function (a) {
          return custom(a, p * tau);
        };
        elasticIn.period = function (p) {
          return custom(a, p);
        };
        return elasticIn;
      }(amplitude, period);
      var elasticOut = function custom(a, p) {
        var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
        function elasticOut(t) {
          return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
        }
        elasticOut.amplitude = function (a) {
          return custom(a, p * tau);
        };
        elasticOut.period = function (p) {
          return custom(a, p);
        };
        return elasticOut;
      }(amplitude, period);
      var elasticInOut = function custom(a, p) {
        var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
        function elasticInOut(t) {
          return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
        }
        elasticInOut.amplitude = function (a) {
          return custom(a, p * tau);
        };
        elasticInOut.period = function (p) {
          return custom(a, p);
        };
        return elasticInOut;
      }(amplitude, period);
      var area = function (polygon) {
        var i = -1,
            n = polygon.length,
            a,
            b = polygon[n - 1],
            area = 0;
        while (++i < n) {
          a = b;
          b = polygon[i];
          area += a[1] * b[0] - a[0] * b[1];
        }
        return area / 2;
      };
      var centroid = function (polygon) {
        var i = -1,
            n = polygon.length,
            x = 0,
            y = 0,
            a,
            b = polygon[n - 1],
            c,
            k = 0;
        while (++i < n) {
          a = b;
          b = polygon[i];
          k += c = a[0] * b[1] - b[0] * a[1];
          x += (a[0] + b[0]) * c;
          y += (a[1] + b[1]) * c;
        }
        return k *= 3, [x / k, y / k];
      };
      var cross = function (a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
      };
      function lexicographicOrder(a, b) {
        return a[0] - b[0] || a[1] - b[1];
      }
      function computeUpperHullIndexes(points) {
        var n = points.length,
            indexes = [0, 1],
            size = 2;
        for (var i = 2; i < n; ++i) {
          while (size > 1 && cross(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
          indexes[size++] = i;
        }
        return indexes.slice(0, size);
      }
      var hull = function (points) {
        if ((n = points.length) < 3) return null;
        var i,
            n,
            sortedPoints = new Array(n),
            flippedPoints = new Array(n);
        for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
        sortedPoints.sort(lexicographicOrder);
        for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
        var upperIndexes = computeUpperHullIndexes(sortedPoints),
            lowerIndexes = computeUpperHullIndexes(flippedPoints);
        var skipLeft = lowerIndexes[0] === upperIndexes[0],
            skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
            hull = [];
        for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
        for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
        return hull;
      };
      var contains = function (polygon, point) {
        var n = polygon.length,
            p = polygon[n - 1],
            x = point[0],
            y = point[1],
            x0 = p[0],
            y0 = p[1],
            x1,
            y1,
            inside = false;
        for (var i = 0; i < n; ++i) {
          p = polygon[i], x1 = p[0], y1 = p[1];
          if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
          x0 = x1, y0 = y1;
        }
        return inside;
      };
      var length$1 = function (polygon) {
        var i = -1,
            n = polygon.length,
            b = polygon[n - 1],
            xa,
            ya,
            xb = b[0],
            yb = b[1],
            perimeter = 0;
        while (++i < n) {
          xa = xb;
          ya = yb;
          b = polygon[i];
          xb = b[0];
          yb = b[1];
          xa -= xb;
          ya -= yb;
          perimeter += Math.sqrt(xa * xa + ya * ya);
        }
        return perimeter;
      };
      var pi$1 = Math.PI;
      var tau$1 = 2 * pi$1;
      var epsilon = 1e-6;
      var tauEpsilon = tau$1 - epsilon;
      function Path() {
        this._x0 = this._y0 = this._x1 = this._y1 = null;
        this._ = "";
      }
      function path() {
        return new Path();
      }
      Path.prototype = path.prototype = {
        constructor: Path,
        moveTo: function (x, y) {
          this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
        },
        closePath: function () {
          if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
          }
        },
        lineTo: function (x, y) {
          this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
        },
        quadraticCurveTo: function (x1, y1, x, y) {
          this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
        },
        bezierCurveTo: function (x1, y1, x2, y2, x, y) {
          this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
        },
        arcTo: function (x1, y1, x2, y2, r) {
          x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
          var x0 = this._x1,
              y0 = this._y1,
              x21 = x2 - x1,
              y21 = y2 - y1,
              x01 = x0 - x1,
              y01 = y0 - y1,
              l01_2 = x01 * x01 + y01 * y01;
          if (r < 0) throw new Error("negative radius: " + r);
          if (this._x1 === null) {
            this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
          } else if (!(l01_2 > epsilon)) {} else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
            this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
          } else {
            var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                t01 = l / l01,
                t21 = l / l21;
            if (Math.abs(t01 - 1) > epsilon) {
              this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
          }
        },
        arc: function (x, y, r, a0, a1, ccw) {
          x = +x, y = +y, r = +r;
          var dx = r * Math.cos(a0),
              dy = r * Math.sin(a0),
              x0 = x + dx,
              y0 = y + dy,
              cw = 1 ^ ccw,
              da = ccw ? a0 - a1 : a1 - a0;
          if (r < 0) throw new Error("negative radius: " + r);
          if (this._x1 === null) {
            this._ += "M" + x0 + "," + y0;
          } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
            this._ += "L" + x0 + "," + y0;
          }
          if (!r) return;
          if (da > tauEpsilon) {
            this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
          } else {
            if (da < 0) da = da % tau$1 + tau$1;
            this._ += "A" + r + "," + r + ",0," + +(da >= pi$1) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
          }
        },
        rect: function (x, y, w, h) {
          this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
        },
        toString: function () {
          return this._;
        }
      };
      var tree_add = function (d) {
        var x = +this._x.call(null, d),
            y = +this._y.call(null, d);
        return add(this.cover(x, y), x, y, d);
      };
      function add(tree, x, y, d) {
        if (isNaN(x) || isNaN(y)) return tree;
        var parent,
            node = tree._root,
            leaf = { data: d },
            x0 = tree._x0,
            y0 = tree._y0,
            x1 = tree._x1,
            y1 = tree._y1,
            xm,
            ym,
            xp,
            yp,
            right,
            bottom,
            i,
            j;
        if (!node) return tree._root = leaf, tree;
        while (node.length) {
          if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
          if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
          if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
        }
        xp = +tree._x.call(null, node.data);
        yp = +tree._y.call(null, node.data);
        if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
        do {
          parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
          if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
          if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
        } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
        return parent[j] = node, parent[i] = leaf, tree;
      }
      function addAll(data) {
        var d,
            i,
            n = data.length,
            x,
            y,
            xz = new Array(n),
            yz = new Array(n),
            x0 = Infinity,
            y0 = Infinity,
            x1 = -Infinity,
            y1 = -Infinity;
        for (i = 0; i < n; ++i) {
          if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
          xz[i] = x;
          yz[i] = y;
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
        if (x1 < x0) x0 = this._x0, x1 = this._x1;
        if (y1 < y0) y0 = this._y0, y1 = this._y1;
        this.cover(x0, y0).cover(x1, y1);
        for (i = 0; i < n; ++i) {
          add(this, xz[i], yz[i], data[i]);
        }
        return this;
      }
      var tree_cover = function (x, y) {
        if (isNaN(x = +x) || isNaN(y = +y)) return this;
        var x0 = this._x0,
            y0 = this._y0,
            x1 = this._x1,
            y1 = this._y1;
        if (isNaN(x0)) {
          x1 = (x0 = Math.floor(x)) + 1;
          y1 = (y0 = Math.floor(y)) + 1;
        } else if (x0 > x || x > x1 || y0 > y || y > y1) {
          var z = x1 - x0,
              node = this._root,
              parent,
              i;
          switch (i = (y < (y0 + y1) / 2) << 1 | x < (x0 + x1) / 2) {
            case 0:
              {
                do parent = new Array(4), parent[i] = node, node = parent; while ((z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1));
                break;
              }
            case 1:
              {
                do parent = new Array(4), parent[i] = node, node = parent; while ((z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1));
                break;
              }
            case 2:
              {
                do parent = new Array(4), parent[i] = node, node = parent; while ((z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y));
                break;
              }
            case 3:
              {
                do parent = new Array(4), parent[i] = node, node = parent; while ((z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y));
                break;
              }
          }
          if (this._root && this._root.length) this._root = node;
        } else return this;
        this._x0 = x0;
        this._y0 = y0;
        this._x1 = x1;
        this._y1 = y1;
        return this;
      };
      var tree_data = function () {
        var data = [];
        this.visit(function (node) {
          if (!node.length) do data.push(node.data); while (node = node.next);
        });
        return data;
      };
      var tree_extent = function (_) {
        return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
      };
      var Quad = function (node, x0, y0, x1, y1) {
        this.node = node;
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
      };
      var tree_find = function (x, y, radius) {
        var data,
            x0 = this._x0,
            y0 = this._y0,
            x1,
            y1,
            x2,
            y2,
            x3 = this._x1,
            y3 = this._y1,
            quads = [],
            node = this._root,
            q,
            i;
        if (node) quads.push(new Quad(node, x0, y0, x3, y3));
        if (radius == null) radius = Infinity;else {
          x0 = x - radius, y0 = y - radius;
          x3 = x + radius, y3 = y + radius;
          radius *= radius;
        }
        while (q = quads.pop()) {
          if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
          if (node.length) {
            var xm = (x1 + x2) / 2,
                ym = (y1 + y2) / 2;
            quads.push(new Quad(node[3], xm, ym, x2, y2), new Quad(node[2], x1, ym, xm, y2), new Quad(node[1], xm, y1, x2, ym), new Quad(node[0], x1, y1, xm, ym));
            if (i = (y >= ym) << 1 | x >= xm) {
              q = quads[quads.length - 1];
              quads[quads.length - 1] = quads[quads.length - 1 - i];
              quads[quads.length - 1 - i] = q;
            }
          } else {
            var dx = x - +this._x.call(null, node.data),
                dy = y - +this._y.call(null, node.data),
                d2 = dx * dx + dy * dy;
            if (d2 < radius) {
              var d = Math.sqrt(radius = d2);
              x0 = x - d, y0 = y - d;
              x3 = x + d, y3 = y + d;
              data = node.data;
            }
          }
        }
        return data;
      };
      var tree_remove = function (d) {
        if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this;
        var parent,
            node = this._root,
            retainer,
            previous,
            next,
            x0 = this._x0,
            y0 = this._y0,
            x1 = this._x1,
            y1 = this._y1,
            x,
            y,
            xm,
            ym,
            right,
            bottom,
            i,
            j;
        if (!node) return this;
        if (node.length) while (true) {
          if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
          if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
          if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
          if (!node.length) break;
          if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
        }
        while (node.data !== d) if (!(previous = node, node = node.next)) return this;
        if (next = node.next) delete node.next;
        if (previous) return next ? previous.next = next : delete previous.next, this;
        if (!parent) return this._root = next, this;
        next ? parent[i] = next : delete parent[i];
        if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
          if (retainer) retainer[j] = node;else this._root = node;
        }
        return this;
      };
      function removeAll(data) {
        for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
        return this;
      }
      var tree_root = function () {
        return this._root;
      };
      var tree_size = function () {
        var size = 0;
        this.visit(function (node) {
          if (!node.length) do ++size; while (node = node.next);
        });
        return size;
      };
      var tree_visit = function (callback) {
        var quads = [],
            q,
            node = this._root,
            child,
            x0,
            y0,
            x1,
            y1;
        if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
        while (q = quads.pop()) {
          if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
            var xm = (x0 + x1) / 2,
                ym = (y0 + y1) / 2;
            if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
            if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
            if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
            if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
          }
        }
        return this;
      };
      var tree_visitAfter = function (callback) {
        var quads = [],
            next = [],
            q;
        if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
        while (q = quads.pop()) {
          var node = q.node;
          if (node.length) {
            var child,
                x0 = q.x0,
                y0 = q.y0,
                x1 = q.x1,
                y1 = q.y1,
                xm = (x0 + x1) / 2,
                ym = (y0 + y1) / 2;
            if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
            if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
            if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
            if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
          }
          next.push(q);
        }
        while (q = next.pop()) {
          callback(q.node, q.x0, q.y0, q.x1, q.y1);
        }
        return this;
      };
      function defaultX(d) {
        return d[0];
      }
      var tree_x = function (_) {
        return arguments.length ? (this._x = _, this) : this._x;
      };
      function defaultY(d) {
        return d[1];
      }
      var tree_y = function (_) {
        return arguments.length ? (this._y = _, this) : this._y;
      };
      function quadtree(nodes, x, y) {
        var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
        return nodes == null ? tree : tree.addAll(nodes);
      }
      function Quadtree(x, y, x0, y0, x1, y1) {
        this._x = x;
        this._y = y;
        this._x0 = x0;
        this._y0 = y0;
        this._x1 = x1;
        this._y1 = y1;
        this._root = undefined;
      }
      function leaf_copy(leaf) {
        var copy = { data: leaf.data },
            next = copy;
        while (leaf = leaf.next) next = next.next = { data: leaf.data };
        return copy;
      }
      var treeProto = quadtree.prototype = Quadtree.prototype;
      treeProto.copy = function () {
        var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            node = this._root,
            nodes,
            child;
        if (!node) return copy;
        if (!node.length) return copy._root = leaf_copy(node), copy;
        nodes = [{
          source: node,
          target: copy._root = new Array(4)
        }];
        while (node = nodes.pop()) {
          for (var i = 0; i < 4; ++i) {
            if (child = node.source[i]) {
              if (child.length) nodes.push({
                source: child,
                target: node.target[i] = new Array(4)
              });else node.target[i] = leaf_copy(child);
            }
          }
        }
        return copy;
      };
      treeProto.add = tree_add;
      treeProto.addAll = addAll;
      treeProto.cover = tree_cover;
      treeProto.data = tree_data;
      treeProto.extent = tree_extent;
      treeProto.find = tree_find;
      treeProto.remove = tree_remove;
      treeProto.removeAll = removeAll;
      treeProto.root = tree_root;
      treeProto.size = tree_size;
      treeProto.visit = tree_visit;
      treeProto.visitAfter = tree_visitAfter;
      treeProto.x = tree_x;
      treeProto.y = tree_y;
      var slice$1 = [].slice;
      var noabort = {};
      function Queue(size) {
        if (!(size >= 1)) throw new Error();
        this._size = size;
        this._call = this._error = null;
        this._tasks = [];
        this._data = [];
        this._waiting = this._active = this._ended = this._start = 0;
      }
      Queue.prototype = queue.prototype = {
        constructor: Queue,
        defer: function (callback) {
          if (typeof callback !== "function" || this._call) throw new Error();
          if (this._error != null) return this;
          var t = slice$1.call(arguments, 1);
          t.push(callback);
          ++this._waiting, this._tasks.push(t);
          poke(this);
          return this;
        },
        abort: function () {
          if (this._error == null) abort(this, new Error("abort"));
          return this;
        },
        await: function (callback) {
          if (typeof callback !== "function" || this._call) throw new Error();
          this._call = function (error, results) {
            callback.apply(null, [error].concat(results));
          };
          maybeNotify(this);
          return this;
        },
        awaitAll: function (callback) {
          if (typeof callback !== "function" || this._call) throw new Error();
          this._call = callback;
          maybeNotify(this);
          return this;
        }
      };
      function poke(q) {
        if (!q._start) {
          try {
            start(q);
          } catch (e) {
            if (q._tasks[q._ended + q._active - 1]) abort(q, e);else if (!q._data) throw e;
          }
        }
      }
      function start(q) {
        while (q._start = q._waiting && q._active < q._size) {
          var i = q._ended + q._active,
              t = q._tasks[i],
              j = t.length - 1,
              c = t[j];
          t[j] = end(q, i);
          --q._waiting, ++q._active;
          t = c.apply(null, t);
          if (!q._tasks[i]) continue;
          q._tasks[i] = t || noabort;
        }
      }
      function end(q, i) {
        return function (e, r) {
          if (!q._tasks[i]) return;
          --q._active, ++q._ended;
          q._tasks[i] = null;
          if (q._error != null) return;
          if (e != null) {
            abort(q, e);
          } else {
            q._data[i] = r;
            if (q._waiting) poke(q);else maybeNotify(q);
          }
        };
      }
      function abort(q, e) {
        var i = q._tasks.length,
            t;
        q._error = e;
        q._data = undefined;
        q._waiting = NaN;
        while (--i >= 0) {
          if (t = q._tasks[i]) {
            q._tasks[i] = null;
            if (t.abort) {
              try {
                t.abort();
              } catch (e) {}
            }
          }
        }
        q._active = NaN;
        maybeNotify(q);
      }
      function maybeNotify(q) {
        if (!q._active && q._call) {
          var d = q._data;
          q._data = undefined;
          q._call(q._error, d);
        }
      }
      function queue(concurrency) {
        return new Queue(arguments.length ? +concurrency : Infinity);
      }
      var constant$2 = function (x) {
        return function constant() {
          return x;
        };
      };
      var epsilon$1 = 1e-12;
      var pi$2 = Math.PI;
      var halfPi$1 = pi$2 / 2;
      var tau$2 = 2 * pi$2;
      function arcInnerRadius(d) {
        return d.innerRadius;
      }
      function arcOuterRadius(d) {
        return d.outerRadius;
      }
      function arcStartAngle(d) {
        return d.startAngle;
      }
      function arcEndAngle(d) {
        return d.endAngle;
      }
      function arcPadAngle(d) {
        return d && d.padAngle;
      }
      function asin(x) {
        return x >= 1 ? halfPi$1 : x <= -1 ? -halfPi$1 : Math.asin(x);
      }
      function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
        var x10 = x1 - x0,
            y10 = y1 - y0,
            x32 = x3 - x2,
            y32 = y3 - y2,
            t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
        return [x0 + t * x10, y0 + t * y10];
      }
      function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
        var x01 = x0 - x1,
            y01 = y0 - y1,
            lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
            ox = lo * y01,
            oy = -lo * x01,
            x11 = x0 + ox,
            y11 = y0 + oy,
            x10 = x1 + ox,
            y10 = y1 + oy,
            x00 = (x11 + x10) / 2,
            y00 = (y11 + y10) / 2,
            dx = x10 - x11,
            dy = y10 - y11,
            d2 = dx * dx + dy * dy,
            r = r1 - rc,
            D = x11 * y10 - x10 * y11,
            d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
            cx0 = (D * dy - dx * d) / d2,
            cy0 = (-D * dx - dy * d) / d2,
            cx1 = (D * dy + dx * d) / d2,
            cy1 = (-D * dx + dy * d) / d2,
            dx0 = cx0 - x00,
            dy0 = cy0 - y00,
            dx1 = cx1 - x00,
            dy1 = cy1 - y00;
        if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
        return {
          cx: cx0,
          cy: cy0,
          x01: -ox,
          y01: -oy,
          x11: cx0 * (r1 / r - 1),
          y11: cy0 * (r1 / r - 1)
        };
      }
      var arc = function () {
        var innerRadius = arcInnerRadius,
            outerRadius = arcOuterRadius,
            cornerRadius = constant$2(0),
            padRadius = null,
            startAngle = arcStartAngle,
            endAngle = arcEndAngle,
            padAngle = arcPadAngle,
            context = null;
        function arc() {
          var buffer,
              r,
              r0 = +innerRadius.apply(this, arguments),
              r1 = +outerRadius.apply(this, arguments),
              a0 = startAngle.apply(this, arguments) - halfPi$1,
              a1 = endAngle.apply(this, arguments) - halfPi$1,
              da = Math.abs(a1 - a0),
              cw = a1 > a0;
          if (!context) context = buffer = path();
          if (r1 < r0) r = r1, r1 = r0, r0 = r;
          if (!(r1 > epsilon$1)) context.moveTo(0, 0);else if (da > tau$2 - epsilon$1) {
            context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > epsilon$1) {
              context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
              context.arc(0, 0, r0, a1, a0, cw);
            }
          } else {
            var a01 = a0,
                a11 = a1,
                a00 = a0,
                a10 = a1,
                da0 = da,
                da1 = da,
                ap = padAngle.apply(this, arguments) / 2,
                rp = ap > epsilon$1 && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
                rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
                rc0 = rc,
                rc1 = rc,
                t0,
                t1;
            if (rp > epsilon$1) {
              var p0 = asin(rp / r0 * Math.sin(ap)),
                  p1 = asin(rp / r1 * Math.sin(ap));
              if ((da0 -= p0 * 2) > epsilon$1) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
              if ((da1 -= p1 * 2) > epsilon$1) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * Math.cos(a01),
                y01 = r1 * Math.sin(a01),
                x10 = r0 * Math.cos(a10),
                y10 = r0 * Math.sin(a10);
            if (rc > epsilon$1) {
              var x11 = r1 * Math.cos(a11),
                  y11 = r1 * Math.sin(a11),
                  x00 = r0 * Math.cos(a00),
                  y00 = r0 * Math.sin(a00);
              if (da < pi$2) {
                var oc = da0 > epsilon$1 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
                    ax = x01 - oc[0],
                    ay = y01 - oc[1],
                    bx = x11 - oc[0],
                    by = y11 - oc[1],
                    kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
                    lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
                rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
                rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
              }
            }
            if (!(da1 > epsilon$1)) context.moveTo(x01, y01);else if (rc1 > epsilon$1) {
              t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
              t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
              context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
              if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);else {
                context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
                context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
              }
            } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            if (!(r0 > epsilon$1) || !(da0 > epsilon$1)) context.lineTo(x10, y10);else if (rc0 > epsilon$1) {
              t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
              t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
              context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
              if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);else {
                context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
                context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
              }
            } else context.arc(0, 0, r0, a10, a00, cw);
          }
          context.closePath();
          if (buffer) return context = null, buffer + "" || null;
        }
        arc.centroid = function () {
          var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
              a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$2 / 2;
          return [Math.cos(a) * r, Math.sin(a) * r];
        };
        arc.innerRadius = function (_) {
          return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$2(+_), arc) : innerRadius;
        };
        arc.outerRadius = function (_) {
          return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$2(+_), arc) : outerRadius;
        };
        arc.cornerRadius = function (_) {
          return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$2(+_), arc) : cornerRadius;
        };
        arc.padRadius = function (_) {
          return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$2(+_), arc) : padRadius;
        };
        arc.startAngle = function (_) {
          return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$2(+_), arc) : startAngle;
        };
        arc.endAngle = function (_) {
          return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$2(+_), arc) : endAngle;
        };
        arc.padAngle = function (_) {
          return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$2(+_), arc) : padAngle;
        };
        arc.context = function (_) {
          return arguments.length ? (context = _ == null ? null : _, arc) : context;
        };
        return arc;
      };
      function Linear(context) {
        this._context = context;
      }
      Linear.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(x, y);
              break;
          }
        }
      };
      var curveLinear = function (context) {
        return new Linear(context);
      };
      function x(p) {
        return p[0];
      }
      function y(p) {
        return p[1];
      }
      var line = function () {
        var x$$1 = x,
            y$$1 = y,
            defined = constant$2(true),
            context = null,
            curve = curveLinear,
            output = null;
        function line(data) {
          var i,
              n = data.length,
              d,
              defined0 = false,
              buffer;
          if (context == null) output = curve(buffer = path());
          for (i = 0; i <= n; ++i) {
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
              if (defined0 = !defined0) output.lineStart();else output.lineEnd();
            }
            if (defined0) output.point(+x$$1(d, i, data), +y$$1(d, i, data));
          }
          if (buffer) return output = null, buffer + "" || null;
        }
        line.x = function (_) {
          return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$2(+_), line) : x$$1;
        };
        line.y = function (_) {
          return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$2(+_), line) : y$$1;
        };
        line.defined = function (_) {
          return arguments.length ? (defined = typeof _ === "function" ? _ : constant$2(!!_), line) : defined;
        };
        line.curve = function (_) {
          return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
        };
        line.context = function (_) {
          return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
        };
        return line;
      };
      var area$1 = function () {
        var x0 = x,
            x1 = null,
            y0 = constant$2(0),
            y1 = y,
            defined = constant$2(true),
            context = null,
            curve = curveLinear,
            output = null;
        function area(data) {
          var i,
              j,
              k,
              n = data.length,
              d,
              defined0 = false,
              buffer,
              x0z = new Array(n),
              y0z = new Array(n);
          if (context == null) output = curve(buffer = path());
          for (i = 0; i <= n; ++i) {
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
              if (defined0 = !defined0) {
                j = i;
                output.areaStart();
                output.lineStart();
              } else {
                output.lineEnd();
                output.lineStart();
                for (k = i - 1; k >= j; --k) {
                  output.point(x0z[k], y0z[k]);
                }
                output.lineEnd();
                output.areaEnd();
              }
            }
            if (defined0) {
              x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
              output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
            }
          }
          if (buffer) return output = null, buffer + "" || null;
        }
        function arealine() {
          return line().defined(defined).curve(curve).context(context);
        }
        area.x = function (_) {
          return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$2(+_), x1 = null, area) : x0;
        };
        area.x0 = function (_) {
          return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$2(+_), area) : x0;
        };
        area.x1 = function (_) {
          return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$2(+_), area) : x1;
        };
        area.y = function (_) {
          return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$2(+_), y1 = null, area) : y0;
        };
        area.y0 = function (_) {
          return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$2(+_), area) : y0;
        };
        area.y1 = function (_) {
          return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$2(+_), area) : y1;
        };
        area.lineX0 = area.lineY0 = function () {
          return arealine().x(x0).y(y0);
        };
        area.lineY1 = function () {
          return arealine().x(x0).y(y1);
        };
        area.lineX1 = function () {
          return arealine().x(x1).y(y0);
        };
        area.defined = function (_) {
          return arguments.length ? (defined = typeof _ === "function" ? _ : constant$2(!!_), area) : defined;
        };
        area.curve = function (_) {
          return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
        };
        area.context = function (_) {
          return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
        };
        return area;
      };
      var descending$1 = function (a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      };
      var identity$1 = function (d) {
        return d;
      };
      var pie = function () {
        var value = identity$1,
            sortValues = descending$1,
            sort = null,
            startAngle = constant$2(0),
            endAngle = constant$2(tau$2),
            padAngle = constant$2(0);
        function pie(data) {
          var i,
              n = data.length,
              j,
              k,
              sum = 0,
              index = new Array(n),
              arcs = new Array(n),
              a0 = +startAngle.apply(this, arguments),
              da = Math.min(tau$2, Math.max(-tau$2, endAngle.apply(this, arguments) - a0)),
              a1,
              p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
              pa = p * (da < 0 ? -1 : 1),
              v;
          for (i = 0; i < n; ++i) {
            if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
              sum += v;
            }
          }
          if (sortValues != null) index.sort(function (i, j) {
            return sortValues(arcs[i], arcs[j]);
          });else if (sort != null) index.sort(function (i, j) {
            return sort(data[i], data[j]);
          });
          for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
            j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
              data: data[j],
              index: i,
              value: v,
              startAngle: a0,
              endAngle: a1,
              padAngle: p
            };
          }
          return arcs;
        }
        pie.value = function (_) {
          return arguments.length ? (value = typeof _ === "function" ? _ : constant$2(+_), pie) : value;
        };
        pie.sortValues = function (_) {
          return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
        };
        pie.sort = function (_) {
          return arguments.length ? (sort = _, sortValues = null, pie) : sort;
        };
        pie.startAngle = function (_) {
          return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$2(+_), pie) : startAngle;
        };
        pie.endAngle = function (_) {
          return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$2(+_), pie) : endAngle;
        };
        pie.padAngle = function (_) {
          return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$2(+_), pie) : padAngle;
        };
        return pie;
      };
      var curveRadialLinear = curveRadial(curveLinear);
      function Radial(curve) {
        this._curve = curve;
      }
      Radial.prototype = {
        areaStart: function () {
          this._curve.areaStart();
        },
        areaEnd: function () {
          this._curve.areaEnd();
        },
        lineStart: function () {
          this._curve.lineStart();
        },
        lineEnd: function () {
          this._curve.lineEnd();
        },
        point: function (a, r) {
          this._curve.point(r * Math.sin(a), r * -Math.cos(a));
        }
      };
      function curveRadial(curve) {
        function radial(context) {
          return new Radial(curve(context));
        }
        radial._curve = curve;
        return radial;
      }
      function radialLine(l) {
        var c = l.curve;
        l.angle = l.x, delete l.x;
        l.radius = l.y, delete l.y;
        l.curve = function (_) {
          return arguments.length ? c(curveRadial(_)) : c()._curve;
        };
        return l;
      }
      var radialLine$1 = function () {
        return radialLine(line().curve(curveRadialLinear));
      };
      var radialArea = function () {
        var a = area$1().curve(curveRadialLinear),
            c = a.curve,
            x0 = a.lineX0,
            x1 = a.lineX1,
            y0 = a.lineY0,
            y1 = a.lineY1;
        a.angle = a.x, delete a.x;
        a.startAngle = a.x0, delete a.x0;
        a.endAngle = a.x1, delete a.x1;
        a.radius = a.y, delete a.y;
        a.innerRadius = a.y0, delete a.y0;
        a.outerRadius = a.y1, delete a.y1;
        a.lineStartAngle = function () {
          return radialLine(x0());
        }, delete a.lineX0;
        a.lineEndAngle = function () {
          return radialLine(x1());
        }, delete a.lineX1;
        a.lineInnerRadius = function () {
          return radialLine(y0());
        }, delete a.lineY0;
        a.lineOuterRadius = function () {
          return radialLine(y1());
        }, delete a.lineY1;
        a.curve = function (_) {
          return arguments.length ? c(curveRadial(_)) : c()._curve;
        };
        return a;
      };
      var circle = { draw: function (context, size) {
          var r = Math.sqrt(size / pi$2);
          context.moveTo(r, 0);
          context.arc(0, 0, r, 0, tau$2);
        } };
      var cross$1 = { draw: function (context, size) {
          var r = Math.sqrt(size / 5) / 2;
          context.moveTo(-3 * r, -r);
          context.lineTo(-r, -r);
          context.lineTo(-r, -3 * r);
          context.lineTo(r, -3 * r);
          context.lineTo(r, -r);
          context.lineTo(3 * r, -r);
          context.lineTo(3 * r, r);
          context.lineTo(r, r);
          context.lineTo(r, 3 * r);
          context.lineTo(-r, 3 * r);
          context.lineTo(-r, r);
          context.lineTo(-3 * r, r);
          context.closePath();
        } };
      var tan30 = Math.sqrt(1 / 3);
      var tan30_2 = tan30 * 2;
      var diamond = { draw: function (context, size) {
          var y = Math.sqrt(size / tan30_2),
              x = y * tan30;
          context.moveTo(0, -y);
          context.lineTo(x, 0);
          context.lineTo(0, y);
          context.lineTo(-x, 0);
          context.closePath();
        } };
      var ka = 0.89081309152928522810;
      var kr = Math.sin(pi$2 / 10) / Math.sin(7 * pi$2 / 10);
      var kx = Math.sin(tau$2 / 10) * kr;
      var ky = -Math.cos(tau$2 / 10) * kr;
      var star = { draw: function (context, size) {
          var r = Math.sqrt(size * ka),
              x = kx * r,
              y = ky * r;
          context.moveTo(0, -r);
          context.lineTo(x, y);
          for (var i = 1; i < 5; ++i) {
            var a = tau$2 * i / 5,
                c = Math.cos(a),
                s = Math.sin(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
          }
          context.closePath();
        } };
      var square = { draw: function (context, size) {
          var w = Math.sqrt(size),
              x = -w / 2;
          context.rect(x, x, w, w);
        } };
      var sqrt3 = Math.sqrt(3);
      var triangle = { draw: function (context, size) {
          var y = -Math.sqrt(size / (sqrt3 * 3));
          context.moveTo(0, y * 2);
          context.lineTo(-sqrt3 * y, -y);
          context.lineTo(sqrt3 * y, -y);
          context.closePath();
        } };
      var c = -0.5;
      var s = Math.sqrt(3) / 2;
      var k = 1 / Math.sqrt(12);
      var a = (k / 2 + 1) * 3;
      var wye = { draw: function (context, size) {
          var r = Math.sqrt(size / a),
              x0 = r / 2,
              y0 = r * k,
              x1 = x0,
              y1 = r * k + r,
              x2 = -x1,
              y2 = y1;
          context.moveTo(x0, y0);
          context.lineTo(x1, y1);
          context.lineTo(x2, y2);
          context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
          context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
          context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
          context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
          context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
          context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
          context.closePath();
        } };
      var symbols = [circle, cross$1, diamond, square, star, triangle, wye];
      var symbol = function () {
        var type = constant$2(circle),
            size = constant$2(64),
            context = null;
        function symbol() {
          var buffer;
          if (!context) context = buffer = path();
          type.apply(this, arguments).draw(context, +size.apply(this, arguments));
          if (buffer) return context = null, buffer + "" || null;
        }
        symbol.type = function (_) {
          return arguments.length ? (type = typeof _ === "function" ? _ : constant$2(_), symbol) : type;
        };
        symbol.size = function (_) {
          return arguments.length ? (size = typeof _ === "function" ? _ : constant$2(+_), symbol) : size;
        };
        symbol.context = function (_) {
          return arguments.length ? (context = _ == null ? null : _, symbol) : context;
        };
        return symbol;
      };
      var noop = function () {};
      function point(that, x, y) {
        that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
      }
      function Basis(context) {
        this._context = context;
      }
      Basis.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              point(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
          }
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
              point(this, x, y);
              break;
          }
          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
        }
      };
      var basis = function (context) {
        return new Basis(context);
      };
      function BasisClosed(context) {
        this._context = context;
      }
      BasisClosed.prototype = {
        areaStart: noop,
        areaEnd: noop,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              {
                this._context.moveTo(this._x2, this._y2);
                this._context.closePath();
                break;
              }
            case 2:
              {
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
                this._context.closePath();
                break;
              }
            case 3:
              {
                this.point(this._x2, this._y2);
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                break;
              }
          }
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._x2 = x, this._y2 = y;
              break;
            case 1:
              this._point = 2;
              this._x3 = x, this._y3 = y;
              break;
            case 2:
              this._point = 3;
              this._x4 = x, this._y4 = y;
              this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
              break;
            default:
              point(this, x, y);
              break;
          }
          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
        }
      };
      var basisClosed = function (context) {
        return new BasisClosed(context);
      };
      function BasisOpen(context) {
        this._context = context;
      }
      BasisOpen.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var x0 = (this._x0 + 4 * this._x1 + x) / 6,
                  y0 = (this._y0 + 4 * this._y1 + y) / 6;
              this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
              break;
            case 3:
              this._point = 4;
            default:
              point(this, x, y);
              break;
          }
          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
        }
      };
      var basisOpen = function (context) {
        return new BasisOpen(context);
      };
      function Bundle(context, beta) {
        this._basis = new Basis(context);
        this._beta = beta;
      }
      Bundle.prototype = {
        lineStart: function () {
          this._x = [];
          this._y = [];
          this._basis.lineStart();
        },
        lineEnd: function () {
          var x = this._x,
              y = this._y,
              j = x.length - 1;
          if (j > 0) {
            var x0 = x[0],
                y0 = y[0],
                dx = x[j] - x0,
                dy = y[j] - y0,
                i = -1,
                t;
            while (++i <= j) {
              t = i / j;
              this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
            }
          }
          this._x = this._y = null;
          this._basis.lineEnd();
        },
        point: function (x, y) {
          this._x.push(+x);
          this._y.push(+y);
        }
      };
      var bundle = function custom(beta) {
        function bundle(context) {
          return beta === 1 ? new Basis(context) : new Bundle(context, beta);
        }
        bundle.beta = function (beta) {
          return custom(+beta);
        };
        return bundle;
      }(0.85);
      function point$1(that, x, y) {
        that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
      }
      function Cardinal(context, tension) {
        this._context = context;
        this._k = (1 - tension) / 6;
      }
      Cardinal.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              point$1(this, this._x1, this._y1);
              break;
          }
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;
            case 1:
              this._point = 2;
              this._x1 = x, this._y1 = y;
              break;
            case 2:
              this._point = 3;
            default:
              point$1(this, x, y);
              break;
          }
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      var cardinal = function custom(tension) {
        function cardinal(context) {
          return new Cardinal(context, tension);
        }
        cardinal.tension = function (tension) {
          return custom(+tension);
        };
        return cardinal;
      }(0);
      function CardinalClosed(context, tension) {
        this._context = context;
        this._k = (1 - tension) / 6;
      }
      CardinalClosed.prototype = {
        areaStart: noop,
        areaEnd: noop,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              {
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
            case 2:
              {
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
            case 3:
              {
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
              }
          }
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._x3 = x, this._y3 = y;
              break;
            case 1:
              this._point = 2;
              this._context.moveTo(this._x4 = x, this._y4 = y);
              break;
            case 2:
              this._point = 3;
              this._x5 = x, this._y5 = y;
              break;
            default:
              point$1(this, x, y);
              break;
          }
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      var cardinalClosed = function custom(tension) {
        function cardinal(context) {
          return new CardinalClosed(context, tension);
        }
        cardinal.tension = function (tension) {
          return custom(+tension);
        };
        return cardinal;
      }(0);
      function CardinalOpen(context, tension) {
        this._context = context;
        this._k = (1 - tension) / 6;
      }
      CardinalOpen.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              point$1(this, x, y);
              break;
          }
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      var cardinalOpen = function custom(tension) {
        function cardinal(context) {
          return new CardinalOpen(context, tension);
        }
        cardinal.tension = function (tension) {
          return custom(+tension);
        };
        return cardinal;
      }(0);
      function point$2(that, x, y) {
        var x1 = that._x1,
            y1 = that._y1,
            x2 = that._x2,
            y2 = that._y2;
        if (that._l01_a > epsilon$1) {
          var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
              n = 3 * that._l01_a * (that._l01_a + that._l12_a);
          x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
          y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
        }
        if (that._l23_a > epsilon$1) {
          var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
              m = 3 * that._l23_a * (that._l23_a + that._l12_a);
          x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
          y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
        }
        that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
      }
      function CatmullRom(context, alpha) {
        this._context = context;
        this._alpha = alpha;
      }
      CatmullRom.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
              break;
          }
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          if (this._point) {
            var x23 = this._x2 - x,
                y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              point$2(this, x, y);
              break;
          }
          this._l01_a = this._l12_a, this._l12_a = this._l23_a;
          this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      var catmullRom = function custom(alpha) {
        function catmullRom(context) {
          return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
        }
        catmullRom.alpha = function (alpha) {
          return custom(+alpha);
        };
        return catmullRom;
      }(0.5);
      function CatmullRomClosed(context, alpha) {
        this._context = context;
        this._alpha = alpha;
      }
      CatmullRomClosed.prototype = {
        areaStart: noop,
        areaEnd: noop,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              {
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
            case 2:
              {
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
              }
            case 3:
              {
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
              }
          }
        },
        point: function (x, y) {
          x = +x, y = +y;
          if (this._point) {
            var x23 = this._x2 - x,
                y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              this._x3 = x, this._y3 = y;
              break;
            case 1:
              this._point = 2;
              this._context.moveTo(this._x4 = x, this._y4 = y);
              break;
            case 2:
              this._point = 3;
              this._x5 = x, this._y5 = y;
              break;
            default:
              point$2(this, x, y);
              break;
          }
          this._l01_a = this._l12_a, this._l12_a = this._l23_a;
          this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      var catmullRomClosed = function custom(alpha) {
        function catmullRom(context) {
          return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
        }
        catmullRom.alpha = function (alpha) {
          return custom(+alpha);
        };
        return catmullRom;
      }(0.5);
      function CatmullRomOpen(context, alpha) {
        this._context = context;
        this._alpha = alpha;
      }
      CatmullRomOpen.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          if (this._point) {
            var x23 = this._x2 - x,
                y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              point$2(this, x, y);
              break;
          }
          this._l01_a = this._l12_a, this._l12_a = this._l23_a;
          this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
          this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
          this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
        }
      };
      var catmullRomOpen = function custom(alpha) {
        function catmullRom(context) {
          return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
        }
        catmullRom.alpha = function (alpha) {
          return custom(+alpha);
        };
        return catmullRom;
      }(0.5);
      function LinearClosed(context) {
        this._context = context;
      }
      LinearClosed.prototype = {
        areaStart: noop,
        areaEnd: noop,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._point) this._context.closePath();
        },
        point: function (x, y) {
          x = +x, y = +y;
          if (this._point) this._context.lineTo(x, y);else this._point = 1, this._context.moveTo(x, y);
        }
      };
      var linearClosed = function (context) {
        return new LinearClosed(context);
      };
      function sign(x) {
        return x < 0 ? -1 : 1;
      }
      function slope3(that, x2, y2) {
        var h0 = that._x1 - that._x0,
            h1 = x2 - that._x1,
            s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
            s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
            p = (s0 * h1 + s1 * h0) / (h0 + h1);
        return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
      }
      function slope2(that, t) {
        var h = that._x1 - that._x0;
        return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
      }
      function point$3(that, t0, t1) {
        var x0 = that._x0,
            y0 = that._y0,
            x1 = that._x1,
            y1 = that._y1,
            dx = (x1 - x0) / 3;
        that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
      }
      function MonotoneX(context) {
        this._context = context;
      }
      MonotoneX.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              point$3(this, this._t0, slope2(this, this._t0));
              break;
          }
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (x, y) {
          var t1 = NaN;
          x = +x, y = +y;
          if (x === this._x1 && y === this._y1) return;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              point$3(this, slope2(this, t1 = slope3(this, x, y)), t1);
              break;
            default:
              point$3(this, this._t0, t1 = slope3(this, x, y));
              break;
          }
          this._x0 = this._x1, this._x1 = x;
          this._y0 = this._y1, this._y1 = y;
          this._t0 = t1;
        }
      };
      function MonotoneY(context) {
        this._context = new ReflectContext(context);
      }
      (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
        MonotoneX.prototype.point.call(this, y, x);
      };
      function ReflectContext(context) {
        this._context = context;
      }
      ReflectContext.prototype = {
        moveTo: function (x, y) {
          this._context.moveTo(y, x);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (x, y) {
          this._context.lineTo(y, x);
        },
        bezierCurveTo: function (x1, y1, x2, y2, x, y) {
          this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
        }
      };
      function monotoneX(context) {
        return new MonotoneX(context);
      }
      function monotoneY(context) {
        return new MonotoneY(context);
      }
      function Natural(context) {
        this._context = context;
      }
      Natural.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x = [];
          this._y = [];
        },
        lineEnd: function () {
          var x = this._x,
              y = this._y,
              n = x.length;
          if (n) {
            this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
            if (n === 2) {
              this._context.lineTo(x[1], y[1]);
            } else {
              var px = controlPoints(x),
                  py = controlPoints(y);
              for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
                this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
              }
            }
          }
          if (this._line || this._line !== 0 && n === 1) this._context.closePath();
          this._line = 1 - this._line;
          this._x = this._y = null;
        },
        point: function (x, y) {
          this._x.push(+x);
          this._y.push(+y);
        }
      };
      function controlPoints(x) {
        var i,
            n = x.length - 1,
            m,
            a = new Array(n),
            b = new Array(n),
            r = new Array(n);
        a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
        for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
        a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
        for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
        a[n - 1] = r[n - 1] / b[n - 1];
        for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
        b[n - 1] = (x[n] + a[n - 1]) / 2;
        for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
        return [a, b];
      }
      var natural = function (context) {
        return new Natural(context);
      };
      function Step(context, t) {
        this._context = context;
        this._t = t;
      }
      Step.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x = this._y = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
          if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
          if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
        },
        point: function (x, y) {
          x = +x, y = +y;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
              break;
            case 1:
              this._point = 2;
            default:
              {
                if (this._t <= 0) {
                  this._context.lineTo(this._x, y);
                  this._context.lineTo(x, y);
                } else {
                  var x1 = this._x * (1 - this._t) + x * this._t;
                  this._context.lineTo(x1, this._y);
                  this._context.lineTo(x1, y);
                }
                break;
              }
          }
          this._x = x, this._y = y;
        }
      };
      var step = function (context) {
        return new Step(context, 0.5);
      };
      function stepBefore(context) {
        return new Step(context, 0);
      }
      function stepAfter(context) {
        return new Step(context, 1);
      }
      var slice$2 = Array.prototype.slice;
      var none = function (series, order) {
        if (!((n = series.length) > 1)) return;
        for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
          s0 = s1, s1 = series[order[i]];
          for (var j = 0; j < m; ++j) {
            s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
          }
        }
      };
      var none$1 = function (series) {
        var n = series.length,
            o = new Array(n);
        while (--n >= 0) o[n] = n;
        return o;
      };
      function stackValue(d, key) {
        return d[key];
      }
      var stack = function () {
        var keys = constant$2([]),
            order = none$1,
            offset = none,
            value = stackValue;
        function stack(data) {
          var kz = keys.apply(this, arguments),
              i,
              m = data.length,
              n = kz.length,
              sz = new Array(n),
              oz;
          for (i = 0; i < n; ++i) {
            for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
              si[j] = sij = [0, +value(data[j], ki, j, data)];
              sij.data = data[j];
            }
            si.key = ki;
          }
          for (i = 0, oz = order(sz); i < n; ++i) {
            sz[oz[i]].index = i;
          }
          offset(sz, oz);
          return sz;
        }
        stack.keys = function (_) {
          return arguments.length ? (keys = typeof _ === "function" ? _ : constant$2(slice$2.call(_)), stack) : keys;
        };
        stack.value = function (_) {
          return arguments.length ? (value = typeof _ === "function" ? _ : constant$2(+_), stack) : value;
        };
        stack.order = function (_) {
          return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant$2(slice$2.call(_)), stack) : order;
        };
        stack.offset = function (_) {
          return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
        };
        return stack;
      };
      var expand = function (series, order) {
        if (!((n = series.length) > 0)) return;
        for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
          for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
          if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
        }
        none(series, order);
      };
      var silhouette = function (series, order) {
        if (!((n = series.length) > 0)) return;
        for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
          for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
          s0[j][1] += s0[j][0] = -y / 2;
        }
        none(series, order);
      };
      var wiggle = function (series, order) {
        if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
        for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
          for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
            var si = series[order[i]],
                sij0 = si[j][1] || 0,
                sij1 = si[j - 1][1] || 0,
                s3 = (sij0 - sij1) / 2;
            for (var k = 0; k < i; ++k) {
              var sk = series[order[k]],
                  skj0 = sk[j][1] || 0,
                  skj1 = sk[j - 1][1] || 0;
              s3 += skj0 - skj1;
            }
            s1 += sij0, s2 += s3 * sij0;
          }
          s0[j - 1][1] += s0[j - 1][0] = y;
          if (s1) y -= s2 / s1;
        }
        s0[j - 1][1] += s0[j - 1][0] = y;
        none(series, order);
      };
      var ascending$1 = function (series) {
        var sums = series.map(sum$1);
        return none$1(series).sort(function (a, b) {
          return sums[a] - sums[b];
        });
      };
      function sum$1(series) {
        var s = 0,
            i = -1,
            n = series.length,
            v;
        while (++i < n) if (v = +series[i][1]) s += v;
        return s;
      }
      var descending$2 = function (series) {
        return ascending$1(series).reverse();
      };
      var insideOut = function (series) {
        var n = series.length,
            i,
            j,
            sums = series.map(sum$1),
            order = none$1(series).sort(function (a, b) {
          return sums[b] - sums[a];
        }),
            top = 0,
            bottom = 0,
            tops = [],
            bottoms = [];
        for (i = 0; i < n; ++i) {
          j = order[i];
          if (top < bottom) {
            top += sums[j];
            tops.push(j);
          } else {
            bottom += sums[j];
            bottoms.push(j);
          }
        }
        return bottoms.reverse().concat(tops);
      };
      var reverse = function (series) {
        return none$1(series).reverse();
      };
      var define = function (constructor, factory, prototype) {
        constructor.prototype = factory.prototype = prototype;
        prototype.constructor = constructor;
      };
      function extend(parent, definition) {
        var prototype = Object.create(parent.prototype);
        for (var key in definition) prototype[key] = definition[key];
        return prototype;
      }
      function Color() {}
      var darker = 0.7;
      var brighter = 1 / darker;
      var reI = "\\s*([+-]?\\d+)\\s*";
      var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
      var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
      var reHex3 = /^#([0-9a-f]{3})$/;
      var reHex6 = /^#([0-9a-f]{6})$/;
      var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
      var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
      var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
      var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
      var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
      var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
      var named = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 0x00ffff,
        aquamarine: 0x7fffd4,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0x000000,
        blanchedalmond: 0xffebcd,
        blue: 0x0000ff,
        blueviolet: 0x8a2be2,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 0x5f9ea0,
        chartreuse: 0x7fff00,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 0x6495ed,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 0x00ffff,
        darkblue: 0x00008b,
        darkcyan: 0x008b8b,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 0x006400,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 0x8b008b,
        darkolivegreen: 0x556b2f,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 0x8b0000,
        darksalmon: 0xe9967a,
        darkseagreen: 0x8fbc8f,
        darkslateblue: 0x483d8b,
        darkslategray: 0x2f4f4f,
        darkslategrey: 0x2f4f4f,
        darkturquoise: 0x00ced1,
        darkviolet: 0x9400d3,
        deeppink: 0xff1493,
        deepskyblue: 0x00bfff,
        dimgray: 0x696969,
        dimgrey: 0x696969,
        dodgerblue: 0x1e90ff,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 0x228b22,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 0x808080,
        green: 0x008000,
        greenyellow: 0xadff2f,
        grey: 0x808080,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 0x4b0082,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 0x7cfc00,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 0x90ee90,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 0x20b2aa,
        lightskyblue: 0x87cefa,
        lightslategray: 0x778899,
        lightslategrey: 0x778899,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 0x00ff00,
        limegreen: 0x32cd32,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 0x800000,
        mediumaquamarine: 0x66cdaa,
        mediumblue: 0x0000cd,
        mediumorchid: 0xba55d3,
        mediumpurple: 0x9370db,
        mediumseagreen: 0x3cb371,
        mediumslateblue: 0x7b68ee,
        mediumspringgreen: 0x00fa9a,
        mediumturquoise: 0x48d1cc,
        mediumvioletred: 0xc71585,
        midnightblue: 0x191970,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 0x000080,
        oldlace: 0xfdf5e6,
        olive: 0x808000,
        olivedrab: 0x6b8e23,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 0x800080,
        rebeccapurple: 0x663399,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 0x4169e1,
        saddlebrown: 0x8b4513,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 0x2e8b57,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 0x87ceeb,
        slateblue: 0x6a5acd,
        slategray: 0x708090,
        slategrey: 0x708090,
        snow: 0xfffafa,
        springgreen: 0x00ff7f,
        steelblue: 0x4682b4,
        tan: 0xd2b48c,
        teal: 0x008080,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 0x40e0d0,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32
      };
      define(Color, color, {
        displayable: function () {
          return this.rgb().displayable();
        },
        toString: function () {
          return this.rgb() + "";
        }
      });
      function color(format) {
        var m;
        format = (format + "").trim().toLowerCase();
        return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1)) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
      }
      function rgbn(n) {
        return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
      }
      function rgba(r, g, b, a) {
        if (a <= 0) r = g = b = NaN;
        return new Rgb(r, g, b, a);
      }
      function rgbConvert(o) {
        if (!(o instanceof Color)) o = color(o);
        if (!o) return new Rgb();
        o = o.rgb();
        return new Rgb(o.r, o.g, o.b, o.opacity);
      }
      function rgb(r, g, b, opacity) {
        return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
      }
      function Rgb(r, g, b, opacity) {
        this.r = +r;
        this.g = +g;
        this.b = +b;
        this.opacity = +opacity;
      }
      define(Rgb, rgb, extend(Color, {
        brighter: function (k) {
          k = k == null ? brighter : Math.pow(brighter, k);
          return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        darker: function (k) {
          k = k == null ? darker : Math.pow(darker, k);
          return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        rgb: function () {
          return this;
        },
        displayable: function () {
          return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
        },
        toString: function () {
          var a = this.opacity;
          a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
          return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
        }
      }));
      function hsla(h, s, l, a) {
        if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
        return new Hsl(h, s, l, a);
      }
      function hslConvert(o) {
        if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
        if (!(o instanceof Color)) o = color(o);
        if (!o) return new Hsl();
        if (o instanceof Hsl) return o;
        o = o.rgb();
        var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            h = NaN,
            s = max - min,
            l = (max + min) / 2;
        if (s) {
          if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
          s /= l < 0.5 ? max + min : 2 - max - min;
          h *= 60;
        } else {
          s = l > 0 && l < 1 ? 0 : h;
        }
        return new Hsl(h, s, l, o.opacity);
      }
      function hsl(h, s, l, opacity) {
        return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
      }
      function Hsl(h, s, l, opacity) {
        this.h = +h;
        this.s = +s;
        this.l = +l;
        this.opacity = +opacity;
      }
      define(Hsl, hsl, extend(Color, {
        brighter: function (k) {
          k = k == null ? brighter : Math.pow(brighter, k);
          return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        darker: function (k) {
          k = k == null ? darker : Math.pow(darker, k);
          return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        rgb: function () {
          var h = this.h % 360 + (this.h < 0) * 360,
              s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
              l = this.l,
              m2 = l + (l < 0.5 ? l : 1 - l) * s,
              m1 = 2 * l - m2;
          return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
        },
        displayable: function () {
          return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        }
      }));
      function hsl2rgb(h, m1, m2) {
        return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
      }
      var deg2rad = Math.PI / 180;
      var rad2deg = 180 / Math.PI;
      var Kn = 18;
      var Xn = 0.950470;
      var Yn = 1;
      var Zn = 1.088830;
      var t0 = 4 / 29;
      var t1 = 6 / 29;
      var t2 = 3 * t1 * t1;
      var t3 = t1 * t1 * t1;
      function labConvert(o) {
        if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
        if (o instanceof Hcl) {
          var h = o.h * deg2rad;
          return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
        }
        if (!(o instanceof Rgb)) o = rgbConvert(o);
        var b = rgb2xyz(o.r),
            a = rgb2xyz(o.g),
            l = rgb2xyz(o.b),
            x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
            y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
            z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
        return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
      }
      function lab(l, a, b, opacity) {
        return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
      }
      function Lab(l, a, b, opacity) {
        this.l = +l;
        this.a = +a;
        this.b = +b;
        this.opacity = +opacity;
      }
      define(Lab, lab, extend(Color, {
        brighter: function (k) {
          return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
        },
        darker: function (k) {
          return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
        },
        rgb: function () {
          var y = (this.l + 16) / 116,
              x = isNaN(this.a) ? y : y + this.a / 500,
              z = isNaN(this.b) ? y : y - this.b / 200;
          y = Yn * lab2xyz(y);
          x = Xn * lab2xyz(x);
          z = Zn * lab2xyz(z);
          return new Rgb(xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), this.opacity);
        }
      }));
      function xyz2lab(t) {
        return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
      }
      function lab2xyz(t) {
        return t > t1 ? t * t * t : t2 * (t - t0);
      }
      function xyz2rgb(x) {
        return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
      }
      function rgb2xyz(x) {
        return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
      }
      function hclConvert(o) {
        if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
        if (!(o instanceof Lab)) o = labConvert(o);
        var h = Math.atan2(o.b, o.a) * rad2deg;
        return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
      }
      function hcl(h, c, l, opacity) {
        return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
      }
      function Hcl(h, c, l, opacity) {
        this.h = +h;
        this.c = +c;
        this.l = +l;
        this.opacity = +opacity;
      }
      define(Hcl, hcl, extend(Color, {
        brighter: function (k) {
          return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
        },
        darker: function (k) {
          return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
        },
        rgb: function () {
          return labConvert(this).rgb();
        }
      }));
      var A = -0.14861;
      var B = +1.78277;
      var C = -0.29227;
      var D = -0.90649;
      var E = +1.97294;
      var ED = E * D;
      var EB = E * B;
      var BC_DA = B * C - D * A;
      function cubehelixConvert(o) {
        if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
        if (!(o instanceof Rgb)) o = rgbConvert(o);
        var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
            bl = b - l,
            k = (E * (g - l) - C * bl) / D,
            s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
            h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
        return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
      }
      function cubehelix(h, s, l, opacity) {
        return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
      }
      function Cubehelix(h, s, l, opacity) {
        this.h = +h;
        this.s = +s;
        this.l = +l;
        this.opacity = +opacity;
      }
      define(Cubehelix, cubehelix, extend(Color, {
        brighter: function (k) {
          k = k == null ? brighter : Math.pow(brighter, k);
          return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
        },
        darker: function (k) {
          k = k == null ? darker : Math.pow(darker, k);
          return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
        },
        rgb: function () {
          var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
              l = +this.l,
              a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
              cosh = Math.cos(h),
              sinh = Math.sin(h);
          return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
        }
      }));
      function basis$1(t1, v0, v1, v2, v3) {
        var t2 = t1 * t1,
            t3 = t2 * t1;
        return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
      }
      var basis$2 = function (values) {
        var n = values.length - 1;
        return function (t) {
          var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
              v1 = values[i],
              v2 = values[i + 1],
              v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
              v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
          return basis$1((t - i / n) * n, v0, v1, v2, v3);
        };
      };
      var basisClosed$1 = function (values) {
        var n = values.length;
        return function (t) {
          var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
              v0 = values[(i + n - 1) % n],
              v1 = values[i % n],
              v2 = values[(i + 1) % n],
              v3 = values[(i + 2) % n];
          return basis$1((t - i / n) * n, v0, v1, v2, v3);
        };
      };
      var constant$3 = function (x) {
        return function () {
          return x;
        };
      };
      function linear$1(a, d) {
        return function (t) {
          return a + t * d;
        };
      }
      function exponential$1(a, b, y) {
        return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
          return Math.pow(a + t * b, y);
        };
      }
      function hue(a, b) {
        var d = b - a;
        return d ? linear$1(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$3(isNaN(a) ? b : a);
      }
      function gamma(y) {
        return (y = +y) === 1 ? nogamma : function (a, b) {
          return b - a ? exponential$1(a, b, y) : constant$3(isNaN(a) ? b : a);
        };
      }
      function nogamma(a, b) {
        var d = b - a;
        return d ? linear$1(a, d) : constant$3(isNaN(a) ? b : a);
      }
      var interpolateRgb = function rgbGamma(y) {
        var color$$1 = gamma(y);
        function rgb$$1(start, end) {
          var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r),
              g = color$$1(start.g, end.g),
              b = color$$1(start.b, end.b),
              opacity = color$$1(start.opacity, end.opacity);
          return function (t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
          };
        }
        rgb$$1.gamma = rgbGamma;
        return rgb$$1;
      }(1);
      function rgbSpline(spline) {
        return function (colors) {
          var n = colors.length,
              r = new Array(n),
              g = new Array(n),
              b = new Array(n),
              i,
              color$$1;
          for (i = 0; i < n; ++i) {
            color$$1 = rgb(colors[i]);
            r[i] = color$$1.r || 0;
            g[i] = color$$1.g || 0;
            b[i] = color$$1.b || 0;
          }
          r = spline(r);
          g = spline(g);
          b = spline(b);
          color$$1.opacity = 1;
          return function (t) {
            color$$1.r = r(t);
            color$$1.g = g(t);
            color$$1.b = b(t);
            return color$$1 + "";
          };
        };
      }
      var rgbBasis = rgbSpline(basis$2);
      var rgbBasisClosed = rgbSpline(basisClosed$1);
      var array$1 = function (a, b) {
        var nb = b ? b.length : 0,
            na = a ? Math.min(nb, a.length) : 0,
            x = new Array(nb),
            c = new Array(nb),
            i;
        for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
        for (; i < nb; ++i) c[i] = b[i];
        return function (t) {
          for (i = 0; i < na; ++i) c[i] = x[i](t);
          return c;
        };
      };
      var date = function (a, b) {
        var d = new Date();
        return a = +a, b -= a, function (t) {
          return d.setTime(a + b * t), d;
        };
      };
      var interpolateNumber = function (a, b) {
        return a = +a, b -= a, function (t) {
          return a + b * t;
        };
      };
      var object = function (a, b) {
        var i = {},
            c = {},
            k;
        if (a === null || typeof a !== "object") a = {};
        if (b === null || typeof b !== "object") b = {};
        for (k in b) {
          if (k in a) {
            i[k] = interpolate(a[k], b[k]);
          } else {
            c[k] = b[k];
          }
        }
        return function (t) {
          for (k in i) c[k] = i[k](t);
          return c;
        };
      };
      var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
      var reB = new RegExp(reA.source, "g");
      function zero(b) {
        return function () {
          return b;
        };
      }
      function one(b) {
        return function (t) {
          return b(t) + "";
        };
      }
      var interpolateString = function (a, b) {
        var bi = reA.lastIndex = reB.lastIndex = 0,
            am,
            bm,
            bs,
            i = -1,
            s = [],
            q = [];
        a = a + "", b = b + "";
        while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
          if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs;else s[++i] = bs;
          }
          if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm;else s[++i] = bm;
          } else {
            s[++i] = null;
            q.push({
              i: i,
              x: interpolateNumber(am, bm)
            });
          }
          bi = reB.lastIndex;
        }
        if (bi < b.length) {
          bs = b.slice(bi);
          if (s[i]) s[i] += bs;else s[++i] = bs;
        }
        return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
      };
      var interpolate = function (a, b) {
        var t = typeof b,
            c;
        return b == null || t === "boolean" ? constant$3(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : Array.isArray(b) ? array$1 : isNaN(b) ? object : interpolateNumber)(a, b);
      };
      var interpolateRound = function (a, b) {
        return a = +a, b -= a, function (t) {
          return Math.round(a + b * t);
        };
      };
      var degrees = 180 / Math.PI;
      var identity$2 = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
      };
      var decompose = function (a, b, c, d, e, f) {
        var scaleX, scaleY, skewX;
        if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
        if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
        if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
        if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
        return {
          translateX: e,
          translateY: f,
          rotate: Math.atan2(b, a) * degrees,
          skewX: Math.atan(skewX) * degrees,
          scaleX: scaleX,
          scaleY: scaleY
        };
      };
      var cssNode;
      var cssRoot;
      var cssView;
      var svgNode;
      function parseCss(value) {
        if (value === "none") return identity$2;
        if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
        cssNode.style.transform = value;
        value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
        cssRoot.removeChild(cssNode);
        value = value.slice(7, -1).split(",");
        return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
      }
      function parseSvg(value) {
        if (value == null) return identity$2;
        if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
        svgNode.setAttribute("transform", value);
        if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
        value = value.matrix;
        return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
      }
      function interpolateTransform(parse, pxComma, pxParen, degParen) {
        function pop(s) {
          return s.length ? s.pop() + " " : "";
        }
        function translate(xa, ya, xb, yb, s, q) {
          if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
              i: i - 4,
              x: interpolateNumber(xa, xb)
            }, {
              i: i - 2,
              x: interpolateNumber(ya, yb)
            });
          } else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
          }
        }
        function rotate(a, b, s, q) {
          if (a !== b) {
            if (a - b > 180) b += 360;else if (b - a > 180) a += 360;
            q.push({
              i: s.push(pop(s) + "rotate(", null, degParen) - 2,
              x: interpolateNumber(a, b)
            });
          } else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
          }
        }
        function skewX(a, b, s, q) {
          if (a !== b) {
            q.push({
              i: s.push(pop(s) + "skewX(", null, degParen) - 2,
              x: interpolateNumber(a, b)
            });
          } else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
          }
        }
        function scale(xa, ya, xb, yb, s, q) {
          if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
              i: i - 4,
              x: interpolateNumber(xa, xb)
            }, {
              i: i - 2,
              x: interpolateNumber(ya, yb)
            });
          } else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
          }
        }
        return function (a, b) {
          var s = [],
              q = [];
          a = parse(a), b = parse(b);
          translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
          rotate(a.rotate, b.rotate, s, q);
          skewX(a.skewX, b.skewX, s, q);
          scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
          a = b = null;
          return function (t) {
            var i = -1,
                n = q.length,
                o;
            while (++i < n) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          };
        };
      }
      var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
      var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
      var rho = Math.SQRT2;
      var rho2 = 2;
      var rho4 = 4;
      var epsilon2 = 1e-12;
      function cosh(x) {
        return ((x = Math.exp(x)) + 1 / x) / 2;
      }
      function sinh(x) {
        return ((x = Math.exp(x)) - 1 / x) / 2;
      }
      function tanh(x) {
        return ((x = Math.exp(2 * x)) - 1) / (x + 1);
      }
      var interpolateZoom = function (p0, p1) {
        var ux0 = p0[0],
            uy0 = p0[1],
            w0 = p0[2],
            ux1 = p1[0],
            uy1 = p1[1],
            w1 = p1[2],
            dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            i,
            S;
        if (d2 < epsilon2) {
          S = Math.log(w1 / w0) / rho;
          i = function (t) {
            return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
          };
        } else {
          var d1 = Math.sqrt(d2),
              b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
              b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
              r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
              r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
          S = (r1 - r0) / rho;
          i = function (t) {
            var s = t * S,
                coshr0 = cosh(r0),
                u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
            return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
          };
        }
        i.duration = S * 1000;
        return i;
      };
      function hsl$1(hue$$1) {
        return function (start, end) {
          var h = hue$$1((start = hsl(start)).h, (end = hsl(end)).h),
              s = nogamma(start.s, end.s),
              l = nogamma(start.l, end.l),
              opacity = nogamma(start.opacity, end.opacity);
          return function (t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
          };
        };
      }
      var hsl$2 = hsl$1(hue);
      var hslLong = hsl$1(nogamma);
      function lab$1(start, end) {
        var l = nogamma((start = lab(start)).l, (end = lab(end)).l),
            a = nogamma(start.a, end.a),
            b = nogamma(start.b, end.b),
            opacity = nogamma(start.opacity, end.opacity);
        return function (t) {
          start.l = l(t);
          start.a = a(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }
      function hcl$1(hue$$1) {
        return function (start, end) {
          var h = hue$$1((start = hcl(start)).h, (end = hcl(end)).h),
              c = nogamma(start.c, end.c),
              l = nogamma(start.l, end.l),
              opacity = nogamma(start.opacity, end.opacity);
          return function (t) {
            start.h = h(t);
            start.c = c(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
          };
        };
      }
      var hcl$2 = hcl$1(hue);
      var hclLong = hcl$1(nogamma);
      function cubehelix$1(hue$$1) {
        return function cubehelixGamma(y) {
          y = +y;
          function cubehelix$$1(start, end) {
            var h = hue$$1((start = cubehelix(start)).h, (end = cubehelix(end)).h),
                s = nogamma(start.s, end.s),
                l = nogamma(start.l, end.l),
                opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
              start.h = h(t);
              start.s = s(t);
              start.l = l(Math.pow(t, y));
              start.opacity = opacity(t);
              return start + "";
            };
          }
          cubehelix$$1.gamma = cubehelixGamma;
          return cubehelix$$1;
        }(1);
      }
      var cubehelix$2 = cubehelix$1(hue);
      var cubehelixLong = cubehelix$1(nogamma);
      var quantize = function (interpolator, n) {
        var samples = new Array(n);
        for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
        return samples;
      };
      var noop$1 = { value: function () {} };
      function dispatch() {
        for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
          if (!(t = arguments[i] + "") || t in _) throw new Error("illegal type: " + t);
          _[t] = [];
        }
        return new Dispatch(_);
      }
      function Dispatch(_) {
        this._ = _;
      }
      function parseTypenames(typenames, types) {
        return typenames.trim().split(/^|\s+/).map(function (t) {
          var name = "",
              i = t.indexOf(".");
          if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
          if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          return {
            type: t,
            name: name
          };
        });
      }
      Dispatch.prototype = dispatch.prototype = {
        constructor: Dispatch,
        on: function (typename, callback) {
          var _ = this._,
              T = parseTypenames(typename + "", _),
              t,
              i = -1,
              n = T.length;
          if (arguments.length < 2) {
            while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
          }
          if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
          while (++i < n) {
            if (t = (typename = T[i]).type) _[t] = set$2(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set$2(_[t], typename.name, null);
          }
          return this;
        },
        copy: function () {
          var copy = {},
              _ = this._;
          for (var t in _) copy[t] = _[t].slice();
          return new Dispatch(copy);
        },
        call: function (type, that) {
          if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
          for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
        },
        apply: function (type, that, args) {
          if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
          for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
        }
      };
      function get(type, name) {
        for (var i = 0, n = type.length, c; i < n; ++i) {
          if ((c = type[i]).name === name) {
            return c.value;
          }
        }
      }
      function set$2(type, name, callback) {
        for (var i = 0, n = type.length; i < n; ++i) {
          if (type[i].name === name) {
            type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
          }
        }
        if (callback != null) type.push({
          name: name,
          value: callback
        });
        return type;
      }
      function objectConverter(columns) {
        return new Function("d", "return {" + columns.map(function (name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
      }
      function customConverter(columns, f) {
        var object = objectConverter(columns);
        return function (row, i) {
          return f(object(row), i, columns);
        };
      }
      function inferColumns(rows) {
        var columnSet = Object.create(null),
            columns = [];
        rows.forEach(function (row) {
          for (var column in row) {
            if (!(column in columnSet)) {
              columns.push(columnSet[column] = column);
            }
          }
        });
        return columns;
      }
      var dsv = function (delimiter) {
        var reFormat = new RegExp("[\"" + delimiter + "\n]"),
            delimiterCode = delimiter.charCodeAt(0);
        function parse(text, f) {
          var convert,
              columns,
              rows = parseRows(text, function (row, i) {
            if (convert) return convert(row, i - 1);
            columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
          });
          rows.columns = columns;
          return rows;
        }
        function parseRows(text, f) {
          var EOL = {},
              EOF = {},
              rows = [],
              N = text.length,
              I = 0,
              n = 0,
              t,
              eol;
          function token() {
            if (I >= N) return EOF;
            if (eol) return eol = false, EOL;
            var j = I,
                c;
            if (text.charCodeAt(j) === 34) {
              var i = j;
              while (i++ < N) {
                if (text.charCodeAt(i) === 34) {
                  if (text.charCodeAt(i + 1) !== 34) break;
                  ++i;
                }
              }
              I = i + 2;
              c = text.charCodeAt(i + 1);
              if (c === 13) {
                eol = true;
                if (text.charCodeAt(i + 2) === 10) ++I;
              } else if (c === 10) {
                eol = true;
              }
              return text.slice(j + 1, i).replace(/""/g, "\"");
            }
            while (I < N) {
              var k = 1;
              c = text.charCodeAt(I++);
              if (c === 10) eol = true;else if (c === 13) {
                eol = true;
                if (text.charCodeAt(I) === 10) ++I, ++k;
              } else if (c !== delimiterCode) continue;
              return text.slice(j, I - k);
            }
            return text.slice(j);
          }
          while ((t = token()) !== EOF) {
            var a = [];
            while (t !== EOL && t !== EOF) {
              a.push(t);
              t = token();
            }
            if (f && (a = f(a, n++)) == null) continue;
            rows.push(a);
          }
          return rows;
        }
        function format(rows, columns) {
          if (columns == null) columns = inferColumns(rows);
          return [columns.map(formatValue).join(delimiter)].concat(rows.map(function (row) {
            return columns.map(function (column) {
              return formatValue(row[column]);
            }).join(delimiter);
          })).join("\n");
        }
        function formatRows(rows) {
          return rows.map(formatRow).join("\n");
        }
        function formatRow(row) {
          return row.map(formatValue).join(delimiter);
        }
        function formatValue(text) {
          return text == null ? "" : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\"" : text;
        }
        return {
          parse: parse,
          parseRows: parseRows,
          format: format,
          formatRows: formatRows
        };
      };
      var csv = dsv(",");
      var csvParse = csv.parse;
      var csvParseRows = csv.parseRows;
      var csvFormat = csv.format;
      var csvFormatRows = csv.formatRows;
      var tsv = dsv("\t");
      var tsvParse = tsv.parse;
      var tsvParseRows = tsv.parseRows;
      var tsvFormat = tsv.format;
      var tsvFormatRows = tsv.formatRows;
      var request = function (url, callback) {
        var request,
            event = dispatch("beforesend", "progress", "load", "error"),
            mimeType,
            headers = map$1(),
            xhr = new XMLHttpRequest(),
            user = null,
            password = null,
            response,
            responseType,
            timeout = 0;
        if (typeof XDomainRequest !== "undefined" && !("withCredentials" in xhr) && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest();
        "onload" in xhr ? xhr.onload = xhr.onerror = xhr.ontimeout = respond : xhr.onreadystatechange = function (o) {
          xhr.readyState > 3 && respond(o);
        };
        function respond(o) {
          var status = xhr.status,
              result;
          if (!status && hasResponse(xhr) || status >= 200 && status < 300 || status === 304) {
            if (response) {
              try {
                result = response.call(request, xhr);
              } catch (e) {
                event.call("error", request, e);
                return;
              }
            } else {
              result = xhr;
            }
            event.call("load", request, result);
          } else {
            event.call("error", request, o);
          }
        }
        xhr.onprogress = function (e) {
          event.call("progress", request, e);
        };
        request = {
          header: function (name, value) {
            name = (name + "").toLowerCase();
            if (arguments.length < 2) return headers.get(name);
            if (value == null) headers.remove(name);else headers.set(name, value + "");
            return request;
          },
          mimeType: function (value) {
            if (!arguments.length) return mimeType;
            mimeType = value == null ? null : value + "";
            return request;
          },
          responseType: function (value) {
            if (!arguments.length) return responseType;
            responseType = value;
            return request;
          },
          timeout: function (value) {
            if (!arguments.length) return timeout;
            timeout = +value;
            return request;
          },
          user: function (value) {
            return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
          },
          password: function (value) {
            return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
          },
          response: function (value) {
            response = value;
            return request;
          },
          get: function (data, callback) {
            return request.send("GET", data, callback);
          },
          post: function (data, callback) {
            return request.send("POST", data, callback);
          },
          send: function (method, data, callback) {
            xhr.open(method, url, true, user, password);
            if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
            if (xhr.setRequestHeader) headers.each(function (value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
            if (responseType != null) xhr.responseType = responseType;
            if (timeout > 0) xhr.timeout = timeout;
            if (callback == null && typeof data === "function") callback = data, data = null;
            if (callback != null && callback.length === 1) callback = fixCallback(callback);
            if (callback != null) request.on("error", callback).on("load", function (xhr) {
              callback(null, xhr);
            });
            event.call("beforesend", request, xhr);
            xhr.send(data == null ? null : data);
            return request;
          },
          abort: function () {
            xhr.abort();
            return request;
          },
          on: function () {
            var value = event.on.apply(event, arguments);
            return value === event ? request : value;
          }
        };
        if (callback != null) {
          if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
          return request.get(callback);
        }
        return request;
      };
      function fixCallback(callback) {
        return function (error, xhr) {
          callback(error == null ? xhr : null);
        };
      }
      function hasResponse(xhr) {
        var type = xhr.responseType;
        return type && type !== "text" ? xhr.response : xhr.responseText;
      }
      var type = function (defaultMimeType, response) {
        return function (url, callback) {
          var r = request(url).mimeType(defaultMimeType).response(response);
          if (callback != null) {
            if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
            return r.get(callback);
          }
          return r;
        };
      };
      var html = type("text/html", function (xhr) {
        return document.createRange().createContextualFragment(xhr.responseText);
      });
      var json = type("application/json", function (xhr) {
        return JSON.parse(xhr.responseText);
      });
      var text = type("text/plain", function (xhr) {
        return xhr.responseText;
      });
      var xml = type("application/xml", function (xhr) {
        var xml = xhr.responseXML;
        if (!xml) throw new Error("parse error");
        return xml;
      });
      var dsv$1 = function (defaultMimeType, parse) {
        return function (url, row, callback) {
          if (arguments.length < 3) callback = row, row = null;
          var r = request(url).mimeType(defaultMimeType);
          r.row = function (_) {
            return arguments.length ? r.response(responseOf(parse, row = _)) : row;
          };
          r.row(row);
          return callback ? r.get(callback) : r;
        };
      };
      function responseOf(parse, row) {
        return function (request$$1) {
          return parse(request$$1.responseText, row);
        };
      }
      var csv$1 = dsv$1("text/csv", csvParse);
      var tsv$1 = dsv$1("text/tab-separated-values", tsvParse);
      var frame = 0;
      var timeout = 0;
      var interval = 0;
      var pokeDelay = 1000;
      var taskHead;
      var taskTail;
      var clockLast = 0;
      var clockNow = 0;
      var clockSkew = 0;
      var clock = typeof performance === "object" && performance.now ? performance : Date;
      var setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function (f) {
        setTimeout(f, 17);
      };
      function now() {
        return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
      }
      function clearNow() {
        clockNow = 0;
      }
      function Timer() {
        this._call = this._time = this._next = null;
      }
      Timer.prototype = timer.prototype = {
        constructor: Timer,
        restart: function (callback, delay, time) {
          if (typeof callback !== "function") throw new TypeError("callback is not a function");
          time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
          if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;else taskHead = this;
            taskTail = this;
          }
          this._call = callback;
          this._time = time;
          sleep();
        },
        stop: function () {
          if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
          }
        }
      };
      function timer(callback, delay, time) {
        var t = new Timer();
        t.restart(callback, delay, time);
        return t;
      }
      function timerFlush() {
        now();
        ++frame;
        var t = taskHead,
            e;
        while (t) {
          if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
          t = t._next;
        }
        --frame;
      }
      function wake() {
        clockNow = (clockLast = clock.now()) + clockSkew;
        frame = timeout = 0;
        try {
          timerFlush();
        } finally {
          frame = 0;
          nap();
          clockNow = 0;
        }
      }
      function poke$1() {
        var now = clock.now(),
            delay = now - clockLast;
        if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
      }
      function nap() {
        var t0,
            t1 = taskHead,
            t2,
            time = Infinity;
        while (t1) {
          if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
          } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
          }
        }
        taskTail = t0;
        sleep(time);
      }
      function sleep(time) {
        if (frame) return;
        if (timeout) timeout = clearTimeout(timeout);
        var delay = time - clockNow;
        if (delay > 24) {
          if (time < Infinity) timeout = setTimeout(wake, delay);
          if (interval) interval = clearInterval(interval);
        } else {
          if (!interval) interval = setInterval(poke$1, pokeDelay);
          frame = 1, setFrame(wake);
        }
      }
      var timeout$1 = function (callback, delay, time) {
        var t = new Timer();
        delay = delay == null ? 0 : +delay;
        t.restart(function (elapsed) {
          t.stop();
          callback(elapsed + delay);
        }, delay, time);
        return t;
      };
      var interval$1 = function (callback, delay, time) {
        var t = new Timer(),
            total = delay;
        if (delay == null) return t.restart(callback, delay, time), t;
        delay = +delay, time = time == null ? now() : +time;
        t.restart(function tick(elapsed) {
          elapsed += total;
          t.restart(tick, total += delay, time);
          callback(elapsed);
        }, delay, time);
        return t;
      };
      var t0$1 = new Date();
      var t1$1 = new Date();
      function newInterval(floori, offseti, count, field) {
        function interval(date) {
          return floori(date = new Date(+date)), date;
        }
        interval.floor = interval;
        interval.ceil = function (date) {
          return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
        };
        interval.round = function (date) {
          var d0 = interval(date),
              d1 = interval.ceil(date);
          return date - d0 < d1 - date ? d0 : d1;
        };
        interval.offset = function (date, step) {
          return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
        };
        interval.range = function (start, stop, step) {
          var range = [];
          start = interval.ceil(start);
          step = step == null ? 1 : Math.floor(step);
          if (!(start < stop) || !(step > 0)) return range;
          do range.push(new Date(+start)); while ((offseti(start, step), floori(start), start < stop));
          return range;
        };
        interval.filter = function (test) {
          return newInterval(function (date) {
            if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
          }, function (date, step) {
            if (date >= date) while (--step >= 0) while (offseti(date, 1), !test(date)) {}
          });
        };
        if (count) {
          interval.count = function (start, end) {
            t0$1.setTime(+start), t1$1.setTime(+end);
            floori(t0$1), floori(t1$1);
            return Math.floor(count(t0$1, t1$1));
          };
          interval.every = function (step) {
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
              return field(d) % step === 0;
            } : function (d) {
              return interval.count(0, d) % step === 0;
            });
          };
        }
        return interval;
      }
      var millisecond = newInterval(function () {}, function (date, step) {
        date.setTime(+date + step);
      }, function (start, end) {
        return end - start;
      });
      millisecond.every = function (k) {
        k = Math.floor(k);
        if (!isFinite(k) || !(k > 0)) return null;
        if (!(k > 1)) return millisecond;
        return newInterval(function (date) {
          date.setTime(Math.floor(date / k) * k);
        }, function (date, step) {
          date.setTime(+date + step * k);
        }, function (start, end) {
          return (end - start) / k;
        });
      };
      var milliseconds = millisecond.range;
      var durationSecond = 1e3;
      var durationMinute = 6e4;
      var durationHour = 36e5;
      var durationDay = 864e5;
      var durationWeek = 6048e5;
      var second = newInterval(function (date) {
        date.setTime(Math.floor(date / durationSecond) * durationSecond);
      }, function (date, step) {
        date.setTime(+date + step * durationSecond);
      }, function (start, end) {
        return (end - start) / durationSecond;
      }, function (date) {
        return date.getUTCSeconds();
      });
      var seconds = second.range;
      var minute = newInterval(function (date) {
        date.setTime(Math.floor(date / durationMinute) * durationMinute);
      }, function (date, step) {
        date.setTime(+date + step * durationMinute);
      }, function (start, end) {
        return (end - start) / durationMinute;
      }, function (date) {
        return date.getMinutes();
      });
      var minutes = minute.range;
      var hour = newInterval(function (date) {
        var offset = date.getTimezoneOffset() * durationMinute % durationHour;
        if (offset < 0) offset += durationHour;
        date.setTime(Math.floor((+date - offset) / durationHour) * durationHour + offset);
      }, function (date, step) {
        date.setTime(+date + step * durationHour);
      }, function (start, end) {
        return (end - start) / durationHour;
      }, function (date) {
        return date.getHours();
      });
      var hours = hour.range;
      var day = newInterval(function (date) {
        date.setHours(0, 0, 0, 0);
      }, function (date, step) {
        date.setDate(date.getDate() + step);
      }, function (start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
      }, function (date) {
        return date.getDate() - 1;
      });
      var days = day.range;
      function weekday(i) {
        return newInterval(function (date) {
          date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
          date.setHours(0, 0, 0, 0);
        }, function (date, step) {
          date.setDate(date.getDate() + step * 7);
        }, function (start, end) {
          return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
        });
      }
      var sunday = weekday(0);
      var monday = weekday(1);
      var tuesday = weekday(2);
      var wednesday = weekday(3);
      var thursday = weekday(4);
      var friday = weekday(5);
      var saturday = weekday(6);
      var sundays = sunday.range;
      var mondays = monday.range;
      var tuesdays = tuesday.range;
      var wednesdays = wednesday.range;
      var thursdays = thursday.range;
      var fridays = friday.range;
      var saturdays = saturday.range;
      var month = newInterval(function (date) {
        date.setDate(1);
        date.setHours(0, 0, 0, 0);
      }, function (date, step) {
        date.setMonth(date.getMonth() + step);
      }, function (start, end) {
        return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
      }, function (date) {
        return date.getMonth();
      });
      var months = month.range;
      var year = newInterval(function (date) {
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
      }, function (date, step) {
        date.setFullYear(date.getFullYear() + step);
      }, function (start, end) {
        return end.getFullYear() - start.getFullYear();
      }, function (date) {
        return date.getFullYear();
      });
      year.every = function (k) {
        return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
          date.setFullYear(Math.floor(date.getFullYear() / k) * k);
          date.setMonth(0, 1);
          date.setHours(0, 0, 0, 0);
        }, function (date, step) {
          date.setFullYear(date.getFullYear() + step * k);
        });
      };
      var years = year.range;
      var utcMinute = newInterval(function (date) {
        date.setUTCSeconds(0, 0);
      }, function (date, step) {
        date.setTime(+date + step * durationMinute);
      }, function (start, end) {
        return (end - start) / durationMinute;
      }, function (date) {
        return date.getUTCMinutes();
      });
      var utcMinutes = utcMinute.range;
      var utcHour = newInterval(function (date) {
        date.setUTCMinutes(0, 0, 0);
      }, function (date, step) {
        date.setTime(+date + step * durationHour);
      }, function (start, end) {
        return (end - start) / durationHour;
      }, function (date) {
        return date.getUTCHours();
      });
      var utcHours = utcHour.range;
      var utcDay = newInterval(function (date) {
        date.setUTCHours(0, 0, 0, 0);
      }, function (date, step) {
        date.setUTCDate(date.getUTCDate() + step);
      }, function (start, end) {
        return (end - start) / durationDay;
      }, function (date) {
        return date.getUTCDate() - 1;
      });
      var utcDays = utcDay.range;
      function utcWeekday(i) {
        return newInterval(function (date) {
          date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
          date.setUTCHours(0, 0, 0, 0);
        }, function (date, step) {
          date.setUTCDate(date.getUTCDate() + step * 7);
        }, function (start, end) {
          return (end - start) / durationWeek;
        });
      }
      var utcSunday = utcWeekday(0);
      var utcMonday = utcWeekday(1);
      var utcTuesday = utcWeekday(2);
      var utcWednesday = utcWeekday(3);
      var utcThursday = utcWeekday(4);
      var utcFriday = utcWeekday(5);
      var utcSaturday = utcWeekday(6);
      var utcSundays = utcSunday.range;
      var utcMondays = utcMonday.range;
      var utcTuesdays = utcTuesday.range;
      var utcWednesdays = utcWednesday.range;
      var utcThursdays = utcThursday.range;
      var utcFridays = utcFriday.range;
      var utcSaturdays = utcSaturday.range;
      var utcMonth = newInterval(function (date) {
        date.setUTCDate(1);
        date.setUTCHours(0, 0, 0, 0);
      }, function (date, step) {
        date.setUTCMonth(date.getUTCMonth() + step);
      }, function (start, end) {
        return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
      }, function (date) {
        return date.getUTCMonth();
      });
      var utcMonths = utcMonth.range;
      var utcYear = newInterval(function (date) {
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
      }, function (date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step);
      }, function (start, end) {
        return end.getUTCFullYear() - start.getUTCFullYear();
      }, function (date) {
        return date.getUTCFullYear();
      });
      utcYear.every = function (k) {
        return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
          date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
          date.setUTCMonth(0, 1);
          date.setUTCHours(0, 0, 0, 0);
        }, function (date, step) {
          date.setUTCFullYear(date.getUTCFullYear() + step * k);
        });
      };
      var utcYears = utcYear.range;
      var formatDecimal = function (x, p) {
        if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null;
        var i,
            coefficient = x.slice(0, i);
        return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
      };
      var exponent$1 = function (x) {
        return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
      };
      var formatGroup = function (grouping, thousands) {
        return function (value, width) {
          var i = value.length,
              t = [],
              j = 0,
              g = grouping[0],
              length = 0;
          while (i > 0 && g > 0) {
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
          }
          return t.reverse().join(thousands);
        };
      };
      var formatDefault = function (x, p) {
        x = x.toPrecision(p);
        out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
          switch (x[i]) {
            case ".":
              i0 = i1 = i;
              break;
            case "0":
              if (i0 === 0) i0 = i;
              i1 = i;
              break;
            case "e":
              break out;
            default:
              if (i0 > 0) i0 = 0;
              break;
          }
        }
        return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
      };
      var prefixExponent;
      var formatPrefixAuto = function (x, p) {
        var d = formatDecimal(x, p);
        if (!d) return x + "";
        var coefficient = d[0],
            exponent = d[1],
            i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
            n = coefficient.length;
        return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0];
      };
      var formatRounded = function (x, p) {
        var d = formatDecimal(x, p);
        if (!d) return x + "";
        var coefficient = d[0],
            exponent = d[1];
        return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
      };
      var formatTypes = {
        "": formatDefault,
        "%": function (x, p) {
          return (x * 100).toFixed(p);
        },
        "b": function (x) {
          return Math.round(x).toString(2);
        },
        "c": function (x) {
          return x + "";
        },
        "d": function (x) {
          return Math.round(x).toString(10);
        },
        "e": function (x, p) {
          return x.toExponential(p);
        },
        "f": function (x, p) {
          return x.toFixed(p);
        },
        "g": function (x, p) {
          return x.toPrecision(p);
        },
        "o": function (x) {
          return Math.round(x).toString(8);
        },
        "p": function (x, p) {
          return formatRounded(x * 100, p);
        },
        "r": formatRounded,
        "s": formatPrefixAuto,
        "X": function (x) {
          return Math.round(x).toString(16).toUpperCase();
        },
        "x": function (x) {
          return Math.round(x).toString(16);
        }
      };
      var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
      var formatSpecifier = function (specifier) {
        return new FormatSpecifier(specifier);
      };
      function FormatSpecifier(specifier) {
        if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
        var match,
            fill = match[1] || " ",
            align = match[2] || ">",
            sign = match[3] || "-",
            symbol = match[4] || "",
            zero = !!match[5],
            width = match[6] && +match[6],
            comma = !!match[7],
            precision = match[8] && +match[8].slice(1),
            type = match[9] || "";
        if (type === "n") comma = true, type = "g";else if (!formatTypes[type]) type = "";
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        this.fill = fill;
        this.align = align;
        this.sign = sign;
        this.symbol = symbol;
        this.zero = zero;
        this.width = width;
        this.comma = comma;
        this.precision = precision;
        this.type = type;
      }
      FormatSpecifier.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
      };
      var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      function identity$3(x) {
        return x;
      }
      var formatLocale = function (locale) {
        var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$3,
            currency = locale.currency,
            decimal = locale.decimal;
        function newFormat(specifier) {
          specifier = formatSpecifier(specifier);
          var fill = specifier.fill,
              align = specifier.align,
              sign = specifier.sign,
              symbol = specifier.symbol,
              zero = specifier.zero,
              width = specifier.width,
              comma = specifier.comma,
              precision = specifier.precision,
              type = specifier.type;
          var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
              suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";
          var formatType = formatTypes[type],
              maybeSuffix = !type || /[defgprs%]/.test(type);
          precision = precision == null ? type ? 6 : 12 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
          function format(value) {
            var valuePrefix = prefix,
                valueSuffix = suffix,
                i,
                n,
                c;
            if (type === "c") {
              valueSuffix = formatType(value) + valueSuffix;
              value = "";
            } else {
              value = +value;
              var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);
              value = formatType(value, precision);
              if (valueNegative) {
                i = -1, n = value.length;
                valueNegative = false;
                while (++i < n) {
                  if (c = value.charCodeAt(i), 48 < c && c < 58 || type === "x" && 96 < c && c < 103 || type === "X" && 64 < c && c < 71) {
                    valueNegative = true;
                    break;
                  }
                }
              }
              valuePrefix = (valueNegative ? sign === "(" ? sign : "-" : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
              valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");
              if (maybeSuffix) {
                i = -1, n = value.length;
                while (++i < n) {
                  if (c = value.charCodeAt(i), 48 > c || c > 57) {
                    valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                    value = value.slice(0, i);
                    break;
                  }
                }
              }
            }
            if (comma && !zero) value = group(value, Infinity);
            var length = valuePrefix.length + value.length + valueSuffix.length,
                padding = length < width ? new Array(width - length + 1).join(fill) : "";
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            switch (align) {
              case "<":
                return valuePrefix + value + valueSuffix + padding;
              case "=":
                return valuePrefix + padding + value + valueSuffix;
              case "^":
                return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            }
            return padding + valuePrefix + value + valueSuffix;
          }
          format.toString = function () {
            return specifier + "";
          };
          return format;
        }
        function formatPrefix(specifier, value) {
          var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
              e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3,
              k = Math.pow(10, -e),
              prefix = prefixes[8 + e / 3];
          return function (value) {
            return f(k * value) + prefix;
          };
        }
        return {
          format: newFormat,
          formatPrefix: formatPrefix
        };
      };
      var locale$1;
      defaultLocale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
      });
      function defaultLocale(definition) {
        locale$1 = formatLocale(definition);
        exports.format = locale$1.format;
        exports.formatPrefix = locale$1.formatPrefix;
        return locale$1;
      }
      var precisionFixed = function (step) {
        return Math.max(0, -exponent$1(Math.abs(step)));
      };
      var precisionPrefix = function (step, value) {
        return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3 - exponent$1(Math.abs(step)));
      };
      var precisionRound = function (step, max) {
        step = Math.abs(step), max = Math.abs(max) - step;
        return Math.max(0, exponent$1(max) - exponent$1(step)) + 1;
      };
      function localDate(d) {
        if (0 <= d.y && d.y < 100) {
          var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
          date.setFullYear(d.y);
          return date;
        }
        return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
      }
      function utcDate(d) {
        if (0 <= d.y && d.y < 100) {
          var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
          date.setUTCFullYear(d.y);
          return date;
        }
        return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
      }
      function newYear(y) {
        return {
          y: y,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0
        };
      }
      function formatLocale$1(locale) {
        var locale_dateTime = locale.dateTime,
            locale_date = locale.date,
            locale_time = locale.time,
            locale_periods = locale.periods,
            locale_weekdays = locale.days,
            locale_shortWeekdays = locale.shortDays,
            locale_months = locale.months,
            locale_shortMonths = locale.shortMonths;
        var periodRe = formatRe(locale_periods),
            periodLookup = formatLookup(locale_periods),
            weekdayRe = formatRe(locale_weekdays),
            weekdayLookup = formatLookup(locale_weekdays),
            shortWeekdayRe = formatRe(locale_shortWeekdays),
            shortWeekdayLookup = formatLookup(locale_shortWeekdays),
            monthRe = formatRe(locale_months),
            monthLookup = formatLookup(locale_months),
            shortMonthRe = formatRe(locale_shortMonths),
            shortMonthLookup = formatLookup(locale_shortMonths);
        var formats = {
          "a": formatShortWeekday,
          "A": formatWeekday,
          "b": formatShortMonth,
          "B": formatMonth,
          "c": null,
          "d": formatDayOfMonth,
          "e": formatDayOfMonth,
          "H": formatHour24,
          "I": formatHour12,
          "j": formatDayOfYear,
          "L": formatMilliseconds,
          "m": formatMonthNumber,
          "M": formatMinutes,
          "p": formatPeriod,
          "S": formatSeconds,
          "U": formatWeekNumberSunday,
          "w": formatWeekdayNumber,
          "W": formatWeekNumberMonday,
          "x": null,
          "X": null,
          "y": formatYear,
          "Y": formatFullYear,
          "Z": formatZone,
          "%": formatLiteralPercent
        };
        var utcFormats = {
          "a": formatUTCShortWeekday,
          "A": formatUTCWeekday,
          "b": formatUTCShortMonth,
          "B": formatUTCMonth,
          "c": null,
          "d": formatUTCDayOfMonth,
          "e": formatUTCDayOfMonth,
          "H": formatUTCHour24,
          "I": formatUTCHour12,
          "j": formatUTCDayOfYear,
          "L": formatUTCMilliseconds,
          "m": formatUTCMonthNumber,
          "M": formatUTCMinutes,
          "p": formatUTCPeriod,
          "S": formatUTCSeconds,
          "U": formatUTCWeekNumberSunday,
          "w": formatUTCWeekdayNumber,
          "W": formatUTCWeekNumberMonday,
          "x": null,
          "X": null,
          "y": formatUTCYear,
          "Y": formatUTCFullYear,
          "Z": formatUTCZone,
          "%": formatLiteralPercent
        };
        var parses = {
          "a": parseShortWeekday,
          "A": parseWeekday,
          "b": parseShortMonth,
          "B": parseMonth,
          "c": parseLocaleDateTime,
          "d": parseDayOfMonth,
          "e": parseDayOfMonth,
          "H": parseHour24,
          "I": parseHour24,
          "j": parseDayOfYear,
          "L": parseMilliseconds,
          "m": parseMonthNumber,
          "M": parseMinutes,
          "p": parsePeriod,
          "S": parseSeconds,
          "U": parseWeekNumberSunday,
          "w": parseWeekdayNumber,
          "W": parseWeekNumberMonday,
          "x": parseLocaleDate,
          "X": parseLocaleTime,
          "y": parseYear,
          "Y": parseFullYear,
          "Z": parseZone,
          "%": parseLiteralPercent
        };
        formats.x = newFormat(locale_date, formats);
        formats.X = newFormat(locale_time, formats);
        formats.c = newFormat(locale_dateTime, formats);
        utcFormats.x = newFormat(locale_date, utcFormats);
        utcFormats.X = newFormat(locale_time, utcFormats);
        utcFormats.c = newFormat(locale_dateTime, utcFormats);
        function newFormat(specifier, formats) {
          return function (date) {
            var string = [],
                i = -1,
                j = 0,
                n = specifier.length,
                c,
                pad,
                format;
            if (!(date instanceof Date)) date = new Date(+date);
            while (++i < n) {
              if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad);
                string.push(c);
                j = i + 1;
              }
            }
            string.push(specifier.slice(j, i));
            return string.join("");
          };
        }
        function newParse(specifier, newDate) {
          return function (string) {
            var d = newYear(1900),
                i = parseSpecifier(d, specifier, string += "", 0);
            if (i != string.length) return null;
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            if ("W" in d || "U" in d) {
              if (!("w" in d)) d.w = "W" in d ? 1 : 0;
              var day$$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
              d.m = 0;
              d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$$1 + 5) % 7 : d.w + d.U * 7 - (day$$1 + 6) % 7;
            }
            if ("Z" in d) {
              d.H += d.Z / 100 | 0;
              d.M += d.Z % 100;
              return utcDate(d);
            }
            return newDate(d);
          };
        }
        function parseSpecifier(d, specifier, string, j) {
          var i = 0,
              n = specifier.length,
              m = string.length,
              c,
              parse;
          while (i < n) {
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
              c = specifier.charAt(i++);
              parse = parses[c in pads ? specifier.charAt(i++) : c];
              if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) {
              return -1;
            }
          }
          return j;
        }
        function parsePeriod(d, string, i) {
          var n = periodRe.exec(string.slice(i));
          return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
        }
        function parseShortWeekday(d, string, i) {
          var n = shortWeekdayRe.exec(string.slice(i));
          return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
        }
        function parseWeekday(d, string, i) {
          var n = weekdayRe.exec(string.slice(i));
          return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
        }
        function parseShortMonth(d, string, i) {
          var n = shortMonthRe.exec(string.slice(i));
          return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
        }
        function parseMonth(d, string, i) {
          var n = monthRe.exec(string.slice(i));
          return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
        }
        function parseLocaleDateTime(d, string, i) {
          return parseSpecifier(d, locale_dateTime, string, i);
        }
        function parseLocaleDate(d, string, i) {
          return parseSpecifier(d, locale_date, string, i);
        }
        function parseLocaleTime(d, string, i) {
          return parseSpecifier(d, locale_time, string, i);
        }
        function formatShortWeekday(d) {
          return locale_shortWeekdays[d.getDay()];
        }
        function formatWeekday(d) {
          return locale_weekdays[d.getDay()];
        }
        function formatShortMonth(d) {
          return locale_shortMonths[d.getMonth()];
        }
        function formatMonth(d) {
          return locale_months[d.getMonth()];
        }
        function formatPeriod(d) {
          return locale_periods[+(d.getHours() >= 12)];
        }
        function formatUTCShortWeekday(d) {
          return locale_shortWeekdays[d.getUTCDay()];
        }
        function formatUTCWeekday(d) {
          return locale_weekdays[d.getUTCDay()];
        }
        function formatUTCShortMonth(d) {
          return locale_shortMonths[d.getUTCMonth()];
        }
        function formatUTCMonth(d) {
          return locale_months[d.getUTCMonth()];
        }
        function formatUTCPeriod(d) {
          return locale_periods[+(d.getUTCHours() >= 12)];
        }
        return {
          format: function (specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function () {
              return specifier;
            };
            return f;
          },
          parse: function (specifier) {
            var p = newParse(specifier += "", localDate);
            p.toString = function () {
              return specifier;
            };
            return p;
          },
          utcFormat: function (specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function () {
              return specifier;
            };
            return f;
          },
          utcParse: function (specifier) {
            var p = newParse(specifier, utcDate);
            p.toString = function () {
              return specifier;
            };
            return p;
          }
        };
      }
      var pads = {
        "-": "",
        "_": " ",
        "0": "0"
      };
      var numberRe = /^\s*\d+/;
      var percentRe = /^%/;
      var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
      function pad(value, fill, width) {
        var sign = value < 0 ? "-" : "",
            string = (sign ? -value : value) + "",
            length = string.length;
        return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
      }
      function requote(s) {
        return s.replace(requoteRe, "\\$&");
      }
      function formatRe(names) {
        return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
      }
      function formatLookup(names) {
        var map = {},
            i = -1,
            n = names.length;
        while (++i < n) map[names[i].toLowerCase()] = i;
        return map;
      }
      function parseWeekdayNumber(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 1));
        return n ? (d.w = +n[0], i + n[0].length) : -1;
      }
      function parseWeekNumberSunday(d, string, i) {
        var n = numberRe.exec(string.slice(i));
        return n ? (d.U = +n[0], i + n[0].length) : -1;
      }
      function parseWeekNumberMonday(d, string, i) {
        var n = numberRe.exec(string.slice(i));
        return n ? (d.W = +n[0], i + n[0].length) : -1;
      }
      function parseFullYear(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 4));
        return n ? (d.y = +n[0], i + n[0].length) : -1;
      }
      function parseYear(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 2));
        return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
      }
      function parseZone(d, string, i) {
        var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
        return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
      }
      function parseMonthNumber(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 2));
        return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
      }
      function parseDayOfMonth(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 2));
        return n ? (d.d = +n[0], i + n[0].length) : -1;
      }
      function parseDayOfYear(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 3));
        return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
      }
      function parseHour24(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 2));
        return n ? (d.H = +n[0], i + n[0].length) : -1;
      }
      function parseMinutes(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 2));
        return n ? (d.M = +n[0], i + n[0].length) : -1;
      }
      function parseSeconds(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 2));
        return n ? (d.S = +n[0], i + n[0].length) : -1;
      }
      function parseMilliseconds(d, string, i) {
        var n = numberRe.exec(string.slice(i, i + 3));
        return n ? (d.L = +n[0], i + n[0].length) : -1;
      }
      function parseLiteralPercent(d, string, i) {
        var n = percentRe.exec(string.slice(i, i + 1));
        return n ? i + n[0].length : -1;
      }
      function formatDayOfMonth(d, p) {
        return pad(d.getDate(), p, 2);
      }
      function formatHour24(d, p) {
        return pad(d.getHours(), p, 2);
      }
      function formatHour12(d, p) {
        return pad(d.getHours() % 12 || 12, p, 2);
      }
      function formatDayOfYear(d, p) {
        return pad(1 + day.count(year(d), d), p, 3);
      }
      function formatMilliseconds(d, p) {
        return pad(d.getMilliseconds(), p, 3);
      }
      function formatMonthNumber(d, p) {
        return pad(d.getMonth() + 1, p, 2);
      }
      function formatMinutes(d, p) {
        return pad(d.getMinutes(), p, 2);
      }
      function formatSeconds(d, p) {
        return pad(d.getSeconds(), p, 2);
      }
      function formatWeekNumberSunday(d, p) {
        return pad(sunday.count(year(d), d), p, 2);
      }
      function formatWeekdayNumber(d) {
        return d.getDay();
      }
      function formatWeekNumberMonday(d, p) {
        return pad(monday.count(year(d), d), p, 2);
      }
      function formatYear(d, p) {
        return pad(d.getFullYear() % 100, p, 2);
      }
      function formatFullYear(d, p) {
        return pad(d.getFullYear() % 10000, p, 4);
      }
      function formatZone(d) {
        var z = d.getTimezoneOffset();
        return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
      }
      function formatUTCDayOfMonth(d, p) {
        return pad(d.getUTCDate(), p, 2);
      }
      function formatUTCHour24(d, p) {
        return pad(d.getUTCHours(), p, 2);
      }
      function formatUTCHour12(d, p) {
        return pad(d.getUTCHours() % 12 || 12, p, 2);
      }
      function formatUTCDayOfYear(d, p) {
        return pad(1 + utcDay.count(utcYear(d), d), p, 3);
      }
      function formatUTCMilliseconds(d, p) {
        return pad(d.getUTCMilliseconds(), p, 3);
      }
      function formatUTCMonthNumber(d, p) {
        return pad(d.getUTCMonth() + 1, p, 2);
      }
      function formatUTCMinutes(d, p) {
        return pad(d.getUTCMinutes(), p, 2);
      }
      function formatUTCSeconds(d, p) {
        return pad(d.getUTCSeconds(), p, 2);
      }
      function formatUTCWeekNumberSunday(d, p) {
        return pad(utcSunday.count(utcYear(d), d), p, 2);
      }
      function formatUTCWeekdayNumber(d) {
        return d.getUTCDay();
      }
      function formatUTCWeekNumberMonday(d, p) {
        return pad(utcMonday.count(utcYear(d), d), p, 2);
      }
      function formatUTCYear(d, p) {
        return pad(d.getUTCFullYear() % 100, p, 2);
      }
      function formatUTCFullYear(d, p) {
        return pad(d.getUTCFullYear() % 10000, p, 4);
      }
      function formatUTCZone() {
        return "+0000";
      }
      function formatLiteralPercent() {
        return "%";
      }
      var locale$2;
      defaultLocale$1({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      });
      function defaultLocale$1(definition) {
        locale$2 = formatLocale$1(definition);
        exports.timeFormat = locale$2.format;
        exports.timeParse = locale$2.parse;
        exports.utcFormat = locale$2.utcFormat;
        exports.utcParse = locale$2.utcParse;
        return locale$2;
      }
      var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
      function formatIsoNative(date) {
        return date.toISOString();
      }
      var formatIso = Date.prototype.toISOString ? formatIsoNative : exports.utcFormat(isoSpecifier);
      function parseIsoNative(string) {
        var date = new Date(string);
        return isNaN(date) ? null : date;
      }
      var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : exports.utcParse(isoSpecifier);
      var array$2 = Array.prototype;
      var map$3 = array$2.map;
      var slice$3 = array$2.slice;
      var implicit = { name: "implicit" };
      function ordinal(range) {
        var index = map$1(),
            domain = [],
            unknown = implicit;
        range = range == null ? [] : slice$3.call(range);
        function scale(d) {
          var key = d + "",
              i = index.get(key);
          if (!i) {
            if (unknown !== implicit) return unknown;
            index.set(key, i = domain.push(d));
          }
          return range[(i - 1) % range.length];
        }
        scale.domain = function (_) {
          if (!arguments.length) return domain.slice();
          domain = [], index = map$1();
          var i = -1,
              n = _.length,
              d,
              key;
          while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
          return scale;
        };
        scale.range = function (_) {
          return arguments.length ? (range = slice$3.call(_), scale) : range.slice();
        };
        scale.unknown = function (_) {
          return arguments.length ? (unknown = _, scale) : unknown;
        };
        scale.copy = function () {
          return ordinal().domain(domain).range(range).unknown(unknown);
        };
        return scale;
      }
      function band() {
        var scale = ordinal().unknown(undefined),
            domain = scale.domain,
            ordinalRange = scale.range,
            range$$1 = [0, 1],
            step,
            bandwidth,
            round = false,
            paddingInner = 0,
            paddingOuter = 0,
            align = 0.5;
        delete scale.unknown;
        function rescale() {
          var n = domain().length,
              reverse = range$$1[1] < range$$1[0],
              start = range$$1[reverse - 0],
              stop = range$$1[1 - reverse];
          step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
          if (round) step = Math.floor(step);
          start += (stop - start - step * (n - paddingInner)) * align;
          bandwidth = step * (1 - paddingInner);
          if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
          var values = range(n).map(function (i) {
            return start + step * i;
          });
          return ordinalRange(reverse ? values.reverse() : values);
        }
        scale.domain = function (_) {
          return arguments.length ? (domain(_), rescale()) : domain();
        };
        scale.range = function (_) {
          return arguments.length ? (range$$1 = [+_[0], +_[1]], rescale()) : range$$1.slice();
        };
        scale.rangeRound = function (_) {
          return range$$1 = [+_[0], +_[1]], round = true, rescale();
        };
        scale.bandwidth = function () {
          return bandwidth;
        };
        scale.step = function () {
          return step;
        };
        scale.round = function (_) {
          return arguments.length ? (round = !!_, rescale()) : round;
        };
        scale.padding = function (_) {
          return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
        };
        scale.paddingInner = function (_) {
          return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
        };
        scale.paddingOuter = function (_) {
          return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
        };
        scale.align = function (_) {
          return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
        };
        scale.copy = function () {
          return band().domain(domain()).range(range$$1).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
        };
        return rescale();
      }
      function pointish(scale) {
        var copy = scale.copy;
        scale.padding = scale.paddingOuter;
        delete scale.paddingInner;
        delete scale.paddingOuter;
        scale.copy = function () {
          return pointish(copy());
        };
        return scale;
      }
      function point$4() {
        return pointish(band().paddingInner(1));
      }
      var constant$4 = function (x) {
        return function () {
          return x;
        };
      };
      var number$1 = function (x) {
        return +x;
      };
      var unit = [0, 1];
      function deinterpolateLinear(a, b) {
        return (b -= a = +a) ? function (x) {
          return (x - a) / b;
        } : constant$4(b);
      }
      function deinterpolateClamp(deinterpolate) {
        return function (a, b) {
          var d = deinterpolate(a = +a, b = +b);
          return function (x) {
            return x <= a ? 0 : x >= b ? 1 : d(x);
          };
        };
      }
      function reinterpolateClamp(reinterpolate) {
        return function (a, b) {
          var r = reinterpolate(a = +a, b = +b);
          return function (t) {
            return t <= 0 ? a : t >= 1 ? b : r(t);
          };
        };
      }
      function bimap(domain, range$$1, deinterpolate, reinterpolate) {
        var d0 = domain[0],
            d1 = domain[1],
            r0 = range$$1[0],
            r1 = range$$1[1];
        if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
        return function (x) {
          return r0(d0(x));
        };
      }
      function polymap(domain, range$$1, deinterpolate, reinterpolate) {
        var j = Math.min(domain.length, range$$1.length) - 1,
            d = new Array(j),
            r = new Array(j),
            i = -1;
        if (domain[j] < domain[0]) {
          domain = domain.slice().reverse();
          range$$1 = range$$1.slice().reverse();
        }
        while (++i < j) {
          d[i] = deinterpolate(domain[i], domain[i + 1]);
          r[i] = reinterpolate(range$$1[i], range$$1[i + 1]);
        }
        return function (x) {
          var i = bisectRight(domain, x, 1, j) - 1;
          return r[i](d[i](x));
        };
      }
      function copy(source, target) {
        return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
      }
      function continuous(deinterpolate, reinterpolate) {
        var domain = unit,
            range$$1 = unit,
            interpolate$$1 = interpolate,
            clamp = false,
            piecewise,
            output,
            input;
        function rescale() {
          piecewise = Math.min(domain.length, range$$1.length) > 2 ? polymap : bimap;
          output = input = null;
          return scale;
        }
        function scale(x) {
          return (output || (output = piecewise(domain, range$$1, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate$$1)))(+x);
        }
        scale.invert = function (y) {
          return (input || (input = piecewise(range$$1, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
        };
        scale.domain = function (_) {
          return arguments.length ? (domain = map$3.call(_, number$1), rescale()) : domain.slice();
        };
        scale.range = function (_) {
          return arguments.length ? (range$$1 = slice$3.call(_), rescale()) : range$$1.slice();
        };
        scale.rangeRound = function (_) {
          return range$$1 = slice$3.call(_), interpolate$$1 = interpolateRound, rescale();
        };
        scale.clamp = function (_) {
          return arguments.length ? (clamp = !!_, rescale()) : clamp;
        };
        scale.interpolate = function (_) {
          return arguments.length ? (interpolate$$1 = _, rescale()) : interpolate$$1;
        };
        return rescale();
      }
      var tickFormat = function (domain, count, specifier) {
        var start = domain[0],
            stop = domain[domain.length - 1],
            step = tickStep(start, stop, count == null ? 10 : count),
            precision;
        specifier = formatSpecifier(specifier == null ? ",f" : specifier);
        switch (specifier.type) {
          case "s":
            {
              var value = Math.max(Math.abs(start), Math.abs(stop));
              if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
              return exports.formatPrefix(specifier, value);
            }
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            {
              if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
              break;
            }
          case "f":
          case "%":
            {
              if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
              break;
            }
        }
        return exports.format(specifier);
      };
      function linearish(scale) {
        var domain = scale.domain;
        scale.ticks = function (count) {
          var d = domain();
          return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
        };
        scale.tickFormat = function (count, specifier) {
          return tickFormat(domain(), count, specifier);
        };
        scale.nice = function (count) {
          var d = domain(),
              i = d.length - 1,
              n = count == null ? 10 : count,
              start = d[0],
              stop = d[i],
              step = tickStep(start, stop, n);
          if (step) {
            step = tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
            d[0] = Math.floor(start / step) * step;
            d[i] = Math.ceil(stop / step) * step;
            domain(d);
          }
          return scale;
        };
        return scale;
      }
      function linear$2() {
        var scale = continuous(deinterpolateLinear, interpolateNumber);
        scale.copy = function () {
          return copy(scale, linear$2());
        };
        return linearish(scale);
      }
      function identity$4() {
        var domain = [0, 1];
        function scale(x) {
          return +x;
        }
        scale.invert = scale;
        scale.domain = scale.range = function (_) {
          return arguments.length ? (domain = map$3.call(_, number$1), scale) : domain.slice();
        };
        scale.copy = function () {
          return identity$4().domain(domain);
        };
        return linearish(scale);
      }
      var nice = function (domain, interval) {
        domain = domain.slice();
        var i0 = 0,
            i1 = domain.length - 1,
            x0 = domain[i0],
            x1 = domain[i1],
            t;
        if (x1 < x0) {
          t = i0, i0 = i1, i1 = t;
          t = x0, x0 = x1, x1 = t;
        }
        domain[i0] = interval.floor(x0);
        domain[i1] = interval.ceil(x1);
        return domain;
      };
      function deinterpolate(a, b) {
        return (b = Math.log(b / a)) ? function (x) {
          return Math.log(x / a) / b;
        } : constant$4(b);
      }
      function reinterpolate(a, b) {
        return a < 0 ? function (t) {
          return -Math.pow(-b, t) * Math.pow(-a, 1 - t);
        } : function (t) {
          return Math.pow(b, t) * Math.pow(a, 1 - t);
        };
      }
      function pow10(x) {
        return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
      }
      function powp(base) {
        return base === 10 ? pow10 : base === Math.E ? Math.exp : function (x) {
          return Math.pow(base, x);
        };
      }
      function logp(base) {
        return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function (x) {
          return Math.log(x) / base;
        });
      }
      function reflect(f) {
        return function (x) {
          return -f(-x);
        };
      }
      function log() {
        var scale = continuous(deinterpolate, reinterpolate).domain([1, 10]),
            domain = scale.domain,
            base = 10,
            logs = logp(10),
            pows = powp(10);
        function rescale() {
          logs = logp(base), pows = powp(base);
          if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
          return scale;
        }
        scale.base = function (_) {
          return arguments.length ? (base = +_, rescale()) : base;
        };
        scale.domain = function (_) {
          return arguments.length ? (domain(_), rescale()) : domain();
        };
        scale.ticks = function (count) {
          var d = domain(),
              u = d[0],
              v = d[d.length - 1],
              r;
          if (r = v < u) i = u, u = v, v = i;
          var i = logs(u),
              j = logs(v),
              p,
              k,
              t,
              n = count == null ? 10 : +count,
              z = [];
          if (!(base % 1) && j - i < n) {
            i = Math.round(i) - 1, j = Math.round(j) + 1;
            if (u > 0) for (; i < j; ++i) {
              for (k = 1, p = pows(i); k < base; ++k) {
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
              }
            } else for (; i < j; ++i) {
              for (k = base - 1, p = pows(i); k >= 1; --k) {
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
              }
            }
          } else {
            z = ticks(i, j, Math.min(j - i, n)).map(pows);
          }
          return r ? z.reverse() : z;
        };
        scale.tickFormat = function (count, specifier) {
          if (specifier == null) specifier = base === 10 ? ".0e" : ",";
          if (typeof specifier !== "function") specifier = exports.format(specifier);
          if (count === Infinity) return specifier;
          if (count == null) count = 10;
          var k = Math.max(1, base * count / scale.ticks().length);
          return function (d) {
            var i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
          };
        };
        scale.nice = function () {
          return domain(nice(domain(), {
            floor: function (x) {
              return pows(Math.floor(logs(x)));
            },
            ceil: function (x) {
              return pows(Math.ceil(logs(x)));
            }
          }));
        };
        scale.copy = function () {
          return copy(scale, log().base(base));
        };
        return scale;
      }
      function raise(x, exponent) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
      }
      function pow() {
        var exponent = 1,
            scale = continuous(deinterpolate, reinterpolate),
            domain = scale.domain;
        function deinterpolate(a, b) {
          return (b = raise(b, exponent) - (a = raise(a, exponent))) ? function (x) {
            return (raise(x, exponent) - a) / b;
          } : constant$4(b);
        }
        function reinterpolate(a, b) {
          b = raise(b, exponent) - (a = raise(a, exponent));
          return function (t) {
            return raise(a + b * t, 1 / exponent);
          };
        }
        scale.exponent = function (_) {
          return arguments.length ? (exponent = +_, domain(domain())) : exponent;
        };
        scale.copy = function () {
          return copy(scale, pow().exponent(exponent));
        };
        return linearish(scale);
      }
      function sqrt() {
        return pow().exponent(0.5);
      }
      function quantile$$1() {
        var domain = [],
            range$$1 = [],
            thresholds = [];
        function rescale() {
          var i = 0,
              n = Math.max(1, range$$1.length);
          thresholds = new Array(n - 1);
          while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
          return scale;
        }
        function scale(x) {
          if (!isNaN(x = +x)) return range$$1[bisectRight(thresholds, x)];
        }
        scale.invertExtent = function (y) {
          var i = range$$1.indexOf(y);
          return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
        };
        scale.domain = function (_) {
          if (!arguments.length) return domain.slice();
          domain = [];
          for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
          domain.sort(ascending);
          return rescale();
        };
        scale.range = function (_) {
          return arguments.length ? (range$$1 = slice$3.call(_), rescale()) : range$$1.slice();
        };
        scale.quantiles = function () {
          return thresholds.slice();
        };
        scale.copy = function () {
          return quantile$$1().domain(domain).range(range$$1);
        };
        return scale;
      }
      function quantize$1() {
        var x0 = 0,
            x1 = 1,
            n = 1,
            domain = [0.5],
            range$$1 = [0, 1];
        function scale(x) {
          if (x <= x) return range$$1[bisectRight(domain, x, 0, n)];
        }
        function rescale() {
          var i = -1;
          domain = new Array(n);
          while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
          return scale;
        }
        scale.domain = function (_) {
          return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
        };
        scale.range = function (_) {
          return arguments.length ? (n = (range$$1 = slice$3.call(_)).length - 1, rescale()) : range$$1.slice();
        };
        scale.invertExtent = function (y) {
          var i = range$$1.indexOf(y);
          return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
        };
        scale.copy = function () {
          return quantize$1().domain([x0, x1]).range(range$$1);
        };
        return linearish(scale);
      }
      function threshold$1() {
        var domain = [0.5],
            range$$1 = [0, 1],
            n = 1;
        function scale(x) {
          if (x <= x) return range$$1[bisectRight(domain, x, 0, n)];
        }
        scale.domain = function (_) {
          return arguments.length ? (domain = slice$3.call(_), n = Math.min(domain.length, range$$1.length - 1), scale) : domain.slice();
        };
        scale.range = function (_) {
          return arguments.length ? (range$$1 = slice$3.call(_), n = Math.min(domain.length, range$$1.length - 1), scale) : range$$1.slice();
        };
        scale.invertExtent = function (y) {
          var i = range$$1.indexOf(y);
          return [domain[i - 1], domain[i]];
        };
        scale.copy = function () {
          return threshold$1().domain(domain).range(range$$1);
        };
        return scale;
      }
      var durationSecond$1 = 1000;
      var durationMinute$1 = durationSecond$1 * 60;
      var durationHour$1 = durationMinute$1 * 60;
      var durationDay$1 = durationHour$1 * 24;
      var durationWeek$1 = durationDay$1 * 7;
      var durationMonth = durationDay$1 * 30;
      var durationYear = durationDay$1 * 365;
      function date$1(t) {
        return new Date(t);
      }
      function number$2(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format) {
        var scale = continuous(deinterpolateLinear, interpolateNumber),
            invert = scale.invert,
            domain = scale.domain;
        var formatMillisecond = format(".%L"),
            formatSecond = format(":%S"),
            formatMinute = format("%I:%M"),
            formatHour = format("%I %p"),
            formatDay = format("%a %d"),
            formatWeek = format("%b %d"),
            formatMonth = format("%B"),
            formatYear = format("%Y");
        var tickIntervals = [[second$$1, 1, durationSecond$1], [second$$1, 5, 5 * durationSecond$1], [second$$1, 15, 15 * durationSecond$1], [second$$1, 30, 30 * durationSecond$1], [minute$$1, 1, durationMinute$1], [minute$$1, 5, 5 * durationMinute$1], [minute$$1, 15, 15 * durationMinute$1], [minute$$1, 30, 30 * durationMinute$1], [hour$$1, 1, durationHour$1], [hour$$1, 3, 3 * durationHour$1], [hour$$1, 6, 6 * durationHour$1], [hour$$1, 12, 12 * durationHour$1], [day$$1, 1, durationDay$1], [day$$1, 2, 2 * durationDay$1], [week, 1, durationWeek$1], [month$$1, 1, durationMonth], [month$$1, 3, 3 * durationMonth], [year$$1, 1, durationYear]];
        function tickFormat(date) {
          return (second$$1(date) < date ? formatMillisecond : minute$$1(date) < date ? formatSecond : hour$$1(date) < date ? formatMinute : day$$1(date) < date ? formatHour : month$$1(date) < date ? week(date) < date ? formatDay : formatWeek : year$$1(date) < date ? formatMonth : formatYear)(date);
        }
        function tickInterval(interval, start, stop, step) {
          if (interval == null) interval = 10;
          if (typeof interval === "number") {
            var target = Math.abs(stop - start) / interval,
                i = bisector(function (i) {
              return i[2];
            }).right(tickIntervals, target);
            if (i === tickIntervals.length) {
              step = tickStep(start / durationYear, stop / durationYear, interval);
              interval = year$$1;
            } else if (i) {
              i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
              step = i[1];
              interval = i[0];
            } else {
              step = tickStep(start, stop, interval);
              interval = millisecond$$1;
            }
          }
          return step == null ? interval : interval.every(step);
        }
        scale.invert = function (y) {
          return new Date(invert(y));
        };
        scale.domain = function (_) {
          return arguments.length ? domain(map$3.call(_, number$2)) : domain().map(date$1);
        };
        scale.ticks = function (interval, step) {
          var d = domain(),
              t0 = d[0],
              t1 = d[d.length - 1],
              r = t1 < t0,
              t;
          if (r) t = t0, t0 = t1, t1 = t;
          t = tickInterval(interval, t0, t1, step);
          t = t ? t.range(t0, t1 + 1) : [];
          return r ? t.reverse() : t;
        };
        scale.tickFormat = function (count, specifier) {
          return specifier == null ? tickFormat : format(specifier);
        };
        scale.nice = function (interval, step) {
          var d = domain();
          return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain(nice(d, interval)) : scale;
        };
        scale.copy = function () {
          return copy(scale, calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format));
        };
        return scale;
      }
      var time = function () {
        return calendar(year, month, sunday, day, hour, minute, second, millisecond, exports.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
      };
      var utcTime = function () {
        return calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, exports.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
      };
      var colors = function (s) {
        return s.match(/.{6}/g).map(function (x) {
          return "#" + x;
        });
      };
      var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
      var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
      var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
      var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
      var cubehelix$3 = cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));
      var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
      var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
      var rainbow = cubehelix();
      var rainbow$1 = function (t) {
        if (t < 0 || t > 1) t -= Math.floor(t);
        var ts = Math.abs(t - 0.5);
        rainbow.h = 360 * t - 100;
        rainbow.s = 1.5 - 1.5 * ts;
        rainbow.l = 0.8 - 0.9 * ts;
        return rainbow + "";
      };
      function ramp(range) {
        var n = range.length;
        return function (t) {
          return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
        };
      }
      var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
      var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
      var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
      var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
      function sequential(interpolator) {
        var x0 = 0,
            x1 = 1,
            clamp = false;
        function scale(x) {
          var t = (x - x0) / (x1 - x0);
          return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
        }
        scale.domain = function (_) {
          return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
        };
        scale.clamp = function (_) {
          return arguments.length ? (clamp = !!_, scale) : clamp;
        };
        scale.interpolator = function (_) {
          return arguments.length ? (interpolator = _, scale) : interpolator;
        };
        scale.copy = function () {
          return sequential(interpolator).domain([x0, x1]).clamp(clamp);
        };
        return linearish(scale);
      }
      var xhtml = "http://www.w3.org/1999/xhtml";
      var namespaces = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: xhtml,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
      var namespace = function (name) {
        var prefix = name += "",
            i = prefix.indexOf(":");
        if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
        return namespaces.hasOwnProperty(prefix) ? {
          space: namespaces[prefix],
          local: name
        } : name;
      };
      function creatorInherit(name) {
        return function () {
          var document = this.ownerDocument,
              uri = this.namespaceURI;
          return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
        };
      }
      function creatorFixed(fullname) {
        return function () {
          return this.ownerDocument.createElementNS(fullname.space, fullname.local);
        };
      }
      var creator = function (name) {
        var fullname = namespace(name);
        return (fullname.local ? creatorFixed : creatorInherit)(fullname);
      };
      var nextId = 0;
      function local() {
        return new Local();
      }
      function Local() {
        this._ = "@" + (++nextId).toString(36);
      }
      Local.prototype = local.prototype = {
        constructor: Local,
        get: function (node) {
          var id = this._;
          while (!(id in node)) if (!(node = node.parentNode)) return;
          return node[id];
        },
        set: function (node, value) {
          return node[this._] = value;
        },
        remove: function (node) {
          return this._ in node && delete node[this._];
        },
        toString: function () {
          return this._;
        }
      };
      var matcher = function (selector) {
        return function () {
          return this.matches(selector);
        };
      };
      if (typeof document !== "undefined") {
        var element = document.documentElement;
        if (!element.matches) {
          var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
          matcher = function (selector) {
            return function () {
              return vendorMatches.call(this, selector);
            };
          };
        }
      }
      var matcher$1 = matcher;
      var filterEvents = {};
      exports.event = null;
      if (typeof document !== "undefined") {
        var element$1 = document.documentElement;
        if (!("onmouseenter" in element$1)) {
          filterEvents = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
          };
        }
      }
      function filterContextListener(listener, index, group) {
        listener = contextListener(listener, index, group);
        return function (event) {
          var related = event.relatedTarget;
          if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
            listener.call(this, event);
          }
        };
      }
      function contextListener(listener, index, group) {
        return function (event1) {
          var event0 = exports.event;
          exports.event = event1;
          try {
            listener.call(this, this.__data__, index, group);
          } finally {
            exports.event = event0;
          }
        };
      }
      function parseTypenames$1(typenames) {
        return typenames.trim().split(/^|\s+/).map(function (t) {
          var name = "",
              i = t.indexOf(".");
          if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
          return {
            type: t,
            name: name
          };
        });
      }
      function onRemove(typename) {
        return function () {
          var on = this.__on;
          if (!on) return;
          for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
              this.removeEventListener(o.type, o.listener, o.capture);
            } else {
              on[++i] = o;
            }
          }
          if (++i) on.length = i;else delete this.__on;
        };
      }
      function onAdd(typename, value, capture) {
        var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
        return function (d, i, group) {
          var on = this.__on,
              o,
              listener = wrap(value, i, group);
          if (on) for (var j = 0, m = on.length; j < m; ++j) {
            if ((o = on[j]).type === typename.type && o.name === typename.name) {
              this.removeEventListener(o.type, o.listener, o.capture);
              this.addEventListener(o.type, o.listener = listener, o.capture = capture);
              o.value = value;
              return;
            }
          }
          this.addEventListener(typename.type, listener, capture);
          o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            capture: capture
          };
          if (!on) this.__on = [o];else on.push(o);
        };
      }
      var selection_on = function (typename, value, capture) {
        var typenames = parseTypenames$1(typename + ""),
            i,
            n = typenames.length,
            t;
        if (arguments.length < 2) {
          var on = this.node().__on;
          if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
            for (i = 0, o = on[j]; i < n; ++i) {
              if ((t = typenames[i]).type === o.type && t.name === o.name) {
                return o.value;
              }
            }
          }
          return;
        }
        on = value ? onAdd : onRemove;
        if (capture == null) capture = false;
        for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
        return this;
      };
      function customEvent(event1, listener, that, args) {
        var event0 = exports.event;
        event1.sourceEvent = exports.event;
        exports.event = event1;
        try {
          return listener.apply(that, args);
        } finally {
          exports.event = event0;
        }
      }
      var sourceEvent = function () {
        var current = exports.event,
            source;
        while (source = current.sourceEvent) current = source;
        return current;
      };
      var point$5 = function (node, event) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          point.x = event.clientX, point.y = event.clientY;
          point = point.matrixTransform(node.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      };
      var mouse = function (node) {
        var event = sourceEvent();
        if (event.changedTouches) event = event.changedTouches[0];
        return point$5(node, event);
      };
      function none$2() {}
      var selector = function (selector) {
        return selector == null ? none$2 : function () {
          return this.querySelector(selector);
        };
      };
      var selection_select = function (select) {
        if (typeof select !== "function") select = selector(select);
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
              if ("__data__" in node) subnode.__data__ = node.__data__;
              subgroup[i] = subnode;
            }
          }
        }
        return new Selection(subgroups, this._parents);
      };
      function empty() {
        return [];
      }
      var selectorAll = function (selector) {
        return selector == null ? empty : function () {
          return this.querySelectorAll(selector);
        };
      };
      var selection_selectAll = function (select) {
        if (typeof select !== "function") select = selectorAll(select);
        for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              subgroups.push(select.call(node, node.__data__, i, group));
              parents.push(node);
            }
          }
        }
        return new Selection(subgroups, parents);
      };
      var selection_filter = function (match) {
        if (typeof match !== "function") match = matcher$1(match);
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
              subgroup.push(node);
            }
          }
        }
        return new Selection(subgroups, this._parents);
      };
      var sparse = function (update) {
        return new Array(update.length);
      };
      var selection_enter = function () {
        return new Selection(this._enter || this._groups.map(sparse), this._parents);
      };
      function EnterNode(parent, datum) {
        this.ownerDocument = parent.ownerDocument;
        this.namespaceURI = parent.namespaceURI;
        this._next = null;
        this._parent = parent;
        this.__data__ = datum;
      }
      EnterNode.prototype = {
        constructor: EnterNode,
        appendChild: function (child) {
          return this._parent.insertBefore(child, this._next);
        },
        insertBefore: function (child, next) {
          return this._parent.insertBefore(child, next);
        },
        querySelector: function (selector) {
          return this._parent.querySelector(selector);
        },
        querySelectorAll: function (selector) {
          return this._parent.querySelectorAll(selector);
        }
      };
      var constant$5 = function (x) {
        return function () {
          return x;
        };
      };
      var keyPrefix = "$";
      function bindIndex(parent, group, enter, update, exit, data) {
        var i = 0,
            node,
            groupLength = group.length,
            dataLength = data.length;
        for (; i < dataLength; ++i) {
          if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
          } else {
            enter[i] = new EnterNode(parent, data[i]);
          }
        }
        for (; i < groupLength; ++i) {
          if (node = group[i]) {
            exit[i] = node;
          }
        }
      }
      function bindKey(parent, group, enter, update, exit, data, key) {
        var i,
            node,
            nodeByKeyValue = {},
            groupLength = group.length,
            dataLength = data.length,
            keyValues = new Array(groupLength),
            keyValue;
        for (i = 0; i < groupLength; ++i) {
          if (node = group[i]) {
            keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
            if (keyValue in nodeByKeyValue) {
              exit[i] = node;
            } else {
              nodeByKeyValue[keyValue] = node;
            }
          }
        }
        for (i = 0; i < dataLength; ++i) {
          keyValue = keyPrefix + key.call(parent, data[i], i, data);
          if (node = nodeByKeyValue[keyValue]) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue[keyValue] = null;
          } else {
            enter[i] = new EnterNode(parent, data[i]);
          }
        }
        for (i = 0; i < groupLength; ++i) {
          if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
            exit[i] = node;
          }
        }
      }
      var selection_data = function (value, key) {
        if (!value) {
          data = new Array(this.size()), j = -1;
          this.each(function (d) {
            data[++j] = d;
          });
          return data;
        }
        var bind = key ? bindKey : bindIndex,
            parents = this._parents,
            groups = this._groups;
        if (typeof value !== "function") value = constant$5(value);
        for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
          var parent = parents[j],
              group = groups[j],
              groupLength = group.length,
              data = value.call(parent, parent && parent.__data__, j, parents),
              dataLength = data.length,
              enterGroup = enter[j] = new Array(dataLength),
              updateGroup = update[j] = new Array(dataLength),
              exitGroup = exit[j] = new Array(groupLength);
          bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
          for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
            if (previous = enterGroup[i0]) {
              if (i0 >= i1) i1 = i0 + 1;
              while (!(next = updateGroup[i1]) && ++i1 < dataLength);
              previous._next = next || null;
            }
          }
        }
        update = new Selection(update, parents);
        update._enter = enter;
        update._exit = exit;
        return update;
      };
      var selection_exit = function () {
        return new Selection(this._exit || this._groups.map(sparse), this._parents);
      };
      var selection_merge = function (selection) {
        for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
          for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
              merge[i] = node;
            }
          }
        }
        for (; j < m0; ++j) {
          merges[j] = groups0[j];
        }
        return new Selection(merges, this._parents);
      };
      var selection_order = function () {
        for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
          for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
            if (node = group[i]) {
              if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
              next = node;
            }
          }
        }
        return this;
      };
      var selection_sort = function (compare) {
        if (!compare) compare = ascending$2;
        function compareNode(a, b) {
          return a && b ? compare(a.__data__, b.__data__) : !a - !b;
        }
        for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              sortgroup[i] = node;
            }
          }
          sortgroup.sort(compareNode);
        }
        return new Selection(sortgroups, this._parents).order();
      };
      function ascending$2(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      }
      var selection_call = function () {
        var callback = arguments[0];
        arguments[0] = this;
        callback.apply(null, arguments);
        return this;
      };
      var selection_nodes = function () {
        var nodes = new Array(this.size()),
            i = -1;
        this.each(function () {
          nodes[++i] = this;
        });
        return nodes;
      };
      var selection_node = function () {
        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
          for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
            var node = group[i];
            if (node) return node;
          }
        }
        return null;
      };
      var selection_size = function () {
        var size = 0;
        this.each(function () {
          ++size;
        });
        return size;
      };
      var selection_empty = function () {
        return !this.node();
      };
      var selection_each = function (callback) {
        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
          for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
            if (node = group[i]) callback.call(node, node.__data__, i, group);
          }
        }
        return this;
      };
      function attrRemove(name) {
        return function () {
          this.removeAttribute(name);
        };
      }
      function attrRemoveNS(fullname) {
        return function () {
          this.removeAttributeNS(fullname.space, fullname.local);
        };
      }
      function attrConstant(name, value) {
        return function () {
          this.setAttribute(name, value);
        };
      }
      function attrConstantNS(fullname, value) {
        return function () {
          this.setAttributeNS(fullname.space, fullname.local, value);
        };
      }
      function attrFunction(name, value) {
        return function () {
          var v = value.apply(this, arguments);
          if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
        };
      }
      function attrFunctionNS(fullname, value) {
        return function () {
          var v = value.apply(this, arguments);
          if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
        };
      }
      var selection_attr = function (name, value) {
        var fullname = namespace(name);
        if (arguments.length < 2) {
          var node = this.node();
          return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
        }
        return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
      };
      var window = function (node) {
        return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
      };
      function styleRemove(name) {
        return function () {
          this.style.removeProperty(name);
        };
      }
      function styleConstant(name, value, priority) {
        return function () {
          this.style.setProperty(name, value, priority);
        };
      }
      function styleFunction(name, value, priority) {
        return function () {
          var v = value.apply(this, arguments);
          if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
        };
      }
      var selection_style = function (name, value, priority) {
        var node;
        return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : window(node = this.node()).getComputedStyle(node, null).getPropertyValue(name);
      };
      function propertyRemove(name) {
        return function () {
          delete this[name];
        };
      }
      function propertyConstant(name, value) {
        return function () {
          this[name] = value;
        };
      }
      function propertyFunction(name, value) {
        return function () {
          var v = value.apply(this, arguments);
          if (v == null) delete this[name];else this[name] = v;
        };
      }
      var selection_property = function (name, value) {
        return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
      };
      function classArray(string) {
        return string.trim().split(/^|\s+/);
      }
      function classList(node) {
        return node.classList || new ClassList(node);
      }
      function ClassList(node) {
        this._node = node;
        this._names = classArray(node.getAttribute("class") || "");
      }
      ClassList.prototype = {
        add: function (name) {
          var i = this._names.indexOf(name);
          if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
          }
        },
        remove: function (name) {
          var i = this._names.indexOf(name);
          if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
          }
        },
        contains: function (name) {
          return this._names.indexOf(name) >= 0;
        }
      };
      function classedAdd(node, names) {
        var list = classList(node),
            i = -1,
            n = names.length;
        while (++i < n) list.add(names[i]);
      }
      function classedRemove(node, names) {
        var list = classList(node),
            i = -1,
            n = names.length;
        while (++i < n) list.remove(names[i]);
      }
      function classedTrue(names) {
        return function () {
          classedAdd(this, names);
        };
      }
      function classedFalse(names) {
        return function () {
          classedRemove(this, names);
        };
      }
      function classedFunction(names, value) {
        return function () {
          (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
        };
      }
      var selection_classed = function (name, value) {
        var names = classArray(name + "");
        if (arguments.length < 2) {
          var list = classList(this.node()),
              i = -1,
              n = names.length;
          while (++i < n) if (!list.contains(names[i])) return false;
          return true;
        }
        return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
      };
      function textRemove() {
        this.textContent = "";
      }
      function textConstant(value) {
        return function () {
          this.textContent = value;
        };
      }
      function textFunction(value) {
        return function () {
          var v = value.apply(this, arguments);
          this.textContent = v == null ? "" : v;
        };
      }
      var selection_text = function (value) {
        return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
      };
      function htmlRemove() {
        this.innerHTML = "";
      }
      function htmlConstant(value) {
        return function () {
          this.innerHTML = value;
        };
      }
      function htmlFunction(value) {
        return function () {
          var v = value.apply(this, arguments);
          this.innerHTML = v == null ? "" : v;
        };
      }
      var selection_html = function (value) {
        return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
      };
      function raise$1() {
        if (this.nextSibling) this.parentNode.appendChild(this);
      }
      var selection_raise = function () {
        return this.each(raise$1);
      };
      function lower() {
        if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      var selection_lower = function () {
        return this.each(lower);
      };
      var selection_append = function (name) {
        var create = typeof name === "function" ? name : creator(name);
        return this.select(function () {
          return this.appendChild(create.apply(this, arguments));
        });
      };
      function constantNull() {
        return null;
      }
      var selection_insert = function (name, before) {
        var create = typeof name === "function" ? name : creator(name),
            select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
        return this.select(function () {
          return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
        });
      };
      function remove() {
        var parent = this.parentNode;
        if (parent) parent.removeChild(this);
      }
      var selection_remove = function () {
        return this.each(remove);
      };
      var selection_datum = function (value) {
        return arguments.length ? this.property("__data__", value) : this.node().__data__;
      };
      function dispatchEvent(node, type, params) {
        var window$$1 = window(node),
            event = window$$1.CustomEvent;
        if (event) {
          event = new event(type, params);
        } else {
          event = window$$1.document.createEvent("Event");
          if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
        }
        node.dispatchEvent(event);
      }
      function dispatchConstant(type, params) {
        return function () {
          return dispatchEvent(this, type, params);
        };
      }
      function dispatchFunction(type, params) {
        return function () {
          return dispatchEvent(this, type, params.apply(this, arguments));
        };
      }
      var selection_dispatch = function (type, params) {
        return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
      };
      var root = [null];
      function Selection(groups, parents) {
        this._groups = groups;
        this._parents = parents;
      }
      function selection() {
        return new Selection([[document.documentElement]], root);
      }
      Selection.prototype = selection.prototype = {
        constructor: Selection,
        select: selection_select,
        selectAll: selection_selectAll,
        filter: selection_filter,
        data: selection_data,
        enter: selection_enter,
        exit: selection_exit,
        merge: selection_merge,
        order: selection_order,
        sort: selection_sort,
        call: selection_call,
        nodes: selection_nodes,
        node: selection_node,
        size: selection_size,
        empty: selection_empty,
        each: selection_each,
        attr: selection_attr,
        style: selection_style,
        property: selection_property,
        classed: selection_classed,
        text: selection_text,
        html: selection_html,
        raise: selection_raise,
        lower: selection_lower,
        append: selection_append,
        insert: selection_insert,
        remove: selection_remove,
        datum: selection_datum,
        on: selection_on,
        dispatch: selection_dispatch
      };
      var select = function (selector) {
        return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
      };
      var selectAll = function (selector) {
        return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector == null ? [] : selector], root);
      };
      var touch = function (node, touches, identifier) {
        if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;
        for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
          if ((touch = touches[i]).identifier === identifier) {
            return point$5(node, touch);
          }
        }
        return null;
      };
      var touches = function (node, touches) {
        if (touches == null) touches = sourceEvent().touches;
        for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
          points[i] = point$5(node, touches[i]);
        }
        return points;
      };
      var emptyOn = dispatch("start", "end", "interrupt");
      var emptyTween = [];
      var CREATED = 0;
      var SCHEDULED = 1;
      var STARTING = 2;
      var STARTED = 3;
      var RUNNING = 4;
      var ENDING = 5;
      var ENDED = 6;
      var schedule = function (node, name, id, index, group, timing) {
        var schedules = node.__transition;
        if (!schedules) node.__transition = {};else if (id in schedules) return;
        create(node, id, {
          name: name,
          index: index,
          group: group,
          on: emptyOn,
          tween: emptyTween,
          time: timing.time,
          delay: timing.delay,
          duration: timing.duration,
          ease: timing.ease,
          timer: null,
          state: CREATED
        });
      };
      function init(node, id) {
        var schedule = node.__transition;
        if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
        return schedule;
      }
      function set$3(node, id) {
        var schedule = node.__transition;
        if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
        return schedule;
      }
      function get$1(node, id) {
        var schedule = node.__transition;
        if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
        return schedule;
      }
      function create(node, id, self) {
        var schedules = node.__transition,
            tween;
        schedules[id] = self;
        self.timer = timer(schedule, 0, self.time);
        function schedule(elapsed) {
          self.state = SCHEDULED;
          self.timer.restart(start, self.delay, self.time);
          if (self.delay <= elapsed) start(elapsed - self.delay);
        }
        function start(elapsed) {
          var i, j, n, o;
          if (self.state !== SCHEDULED) return stop();
          for (i in schedules) {
            o = schedules[i];
            if (o.name !== self.name) continue;
            if (o.state === STARTED) return timeout$1(start);
            if (o.state === RUNNING) {
              o.state = ENDED;
              o.timer.stop();
              o.on.call("interrupt", node, node.__data__, o.index, o.group);
              delete schedules[i];
            } else if (+i < id) {
              o.state = ENDED;
              o.timer.stop();
              delete schedules[i];
            }
          }
          timeout$1(function () {
            if (self.state === STARTED) {
              self.state = RUNNING;
              self.timer.restart(tick, self.delay, self.time);
              tick(elapsed);
            }
          });
          self.state = STARTING;
          self.on.call("start", node, node.__data__, self.index, self.group);
          if (self.state !== STARTING) return;
          self.state = STARTED;
          tween = new Array(n = self.tween.length);
          for (i = 0, j = -1; i < n; ++i) {
            if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
              tween[++j] = o;
            }
          }
          tween.length = j + 1;
        }
        function tick(elapsed) {
          var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
              i = -1,
              n = tween.length;
          while (++i < n) {
            tween[i].call(null, t);
          }
          if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
          }
        }
        function stop() {
          self.state = ENDED;
          self.timer.stop();
          delete schedules[id];
          for (var i in schedules) return;
          delete node.__transition;
        }
      }
      var interrupt = function (node, name) {
        var schedules = node.__transition,
            schedule,
            active,
            empty = true,
            i;
        if (!schedules) return;
        name = name == null ? null : name + "";
        for (i in schedules) {
          if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
          }
          active = schedule.state > STARTING && schedule.state < ENDING;
          schedule.state = ENDED;
          schedule.timer.stop();
          if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
          delete schedules[i];
        }
        if (empty) delete node.__transition;
      };
      var selection_interrupt = function (name) {
        return this.each(function () {
          interrupt(this, name);
        });
      };
      function tweenRemove(id, name) {
        var tween0, tween1;
        return function () {
          var schedule = set$3(this, id),
              tween = schedule.tween;
          if (tween !== tween0) {
            tween1 = tween0 = tween;
            for (var i = 0, n = tween1.length; i < n; ++i) {
              if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
              }
            }
          }
          schedule.tween = tween1;
        };
      }
      function tweenFunction(id, name, value) {
        var tween0, tween1;
        if (typeof value !== "function") throw new Error();
        return function () {
          var schedule = set$3(this, id),
              tween = schedule.tween;
          if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for (var t = {
              name: name,
              value: value
            }, i = 0, n = tween1.length; i < n; ++i) {
              if (tween1[i].name === name) {
                tween1[i] = t;
                break;
              }
            }
            if (i === n) tween1.push(t);
          }
          schedule.tween = tween1;
        };
      }
      var transition_tween = function (name, value) {
        var id = this._id;
        name += "";
        if (arguments.length < 2) {
          var tween = get$1(this.node(), id).tween;
          for (var i = 0, n = tween.length, t; i < n; ++i) {
            if ((t = tween[i]).name === name) {
              return t.value;
            }
          }
          return null;
        }
        return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
      };
      function tweenValue(transition, name, value) {
        var id = transition._id;
        transition.each(function () {
          var schedule = set$3(this, id);
          (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
        });
        return function (node) {
          return get$1(node, id).value[name];
        };
      }
      var interpolate$1 = function (a, b) {
        var c;
        return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
      };
      function attrRemove$1(name) {
        return function () {
          this.removeAttribute(name);
        };
      }
      function attrRemoveNS$1(fullname) {
        return function () {
          this.removeAttributeNS(fullname.space, fullname.local);
        };
      }
      function attrConstant$1(name, interpolate$$1, value1) {
        var value00, interpolate0;
        return function () {
          var value0 = this.getAttribute(name);
          return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
        };
      }
      function attrConstantNS$1(fullname, interpolate$$1, value1) {
        var value00, interpolate0;
        return function () {
          var value0 = this.getAttributeNS(fullname.space, fullname.local);
          return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
        };
      }
      function attrFunction$1(name, interpolate$$1, value) {
        var value00, value10, interpolate0;
        return function () {
          var value0,
              value1 = value(this);
          if (value1 == null) return void this.removeAttribute(name);
          value0 = this.getAttribute(name);
          return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
        };
      }
      function attrFunctionNS$1(fullname, interpolate$$1, value) {
        var value00, value10, interpolate0;
        return function () {
          var value0,
              value1 = value(this);
          if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
          value0 = this.getAttributeNS(fullname.space, fullname.local);
          return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
        };
      }
      var transition_attr = function (name, value) {
        var fullname = namespace(name),
            i = fullname === "transform" ? interpolateTransformSvg : interpolate$1;
        return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname) : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
      };
      function attrTweenNS(fullname, value) {
        function tween() {
          var node = this,
              i = value.apply(node, arguments);
          return i && function (t) {
            node.setAttributeNS(fullname.space, fullname.local, i(t));
          };
        }
        tween._value = value;
        return tween;
      }
      function attrTween(name, value) {
        function tween() {
          var node = this,
              i = value.apply(node, arguments);
          return i && function (t) {
            node.setAttribute(name, i(t));
          };
        }
        tween._value = value;
        return tween;
      }
      var transition_attrTween = function (name, value) {
        var key = "attr." + name;
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error();
        var fullname = namespace(name);
        return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
      };
      function delayFunction(id, value) {
        return function () {
          init(this, id).delay = +value.apply(this, arguments);
        };
      }
      function delayConstant(id, value) {
        return value = +value, function () {
          init(this, id).delay = value;
        };
      }
      var transition_delay = function (value) {
        var id = this._id;
        return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get$1(this.node(), id).delay;
      };
      function durationFunction(id, value) {
        return function () {
          set$3(this, id).duration = +value.apply(this, arguments);
        };
      }
      function durationConstant(id, value) {
        return value = +value, function () {
          set$3(this, id).duration = value;
        };
      }
      var transition_duration = function (value) {
        var id = this._id;
        return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get$1(this.node(), id).duration;
      };
      function easeConstant(id, value) {
        if (typeof value !== "function") throw new Error();
        return function () {
          set$3(this, id).ease = value;
        };
      }
      var transition_ease = function (value) {
        var id = this._id;
        return arguments.length ? this.each(easeConstant(id, value)) : get$1(this.node(), id).ease;
      };
      var transition_filter = function (match) {
        if (typeof match !== "function") match = matcher$1(match);
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
              subgroup.push(node);
            }
          }
        }
        return new Transition(subgroups, this._parents, this._name, this._id);
      };
      var transition_merge = function (transition) {
        if (transition._id !== this._id) throw new Error();
        for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
          for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
              merge[i] = node;
            }
          }
        }
        for (; j < m0; ++j) {
          merges[j] = groups0[j];
        }
        return new Transition(merges, this._parents, this._name, this._id);
      };
      function start$1(name) {
        return (name + "").trim().split(/^|\s+/).every(function (t) {
          var i = t.indexOf(".");
          if (i >= 0) t = t.slice(0, i);
          return !t || t === "start";
        });
      }
      function onFunction(id, name, listener) {
        var on0,
            on1,
            sit = start$1(name) ? init : set$3;
        return function () {
          var schedule = sit(this, id),
              on = schedule.on;
          if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
          schedule.on = on1;
        };
      }
      var transition_on = function (name, listener) {
        var id = this._id;
        return arguments.length < 2 ? get$1(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
      };
      function removeFunction(id) {
        return function () {
          var parent = this.parentNode;
          for (var i in this.__transition) if (+i !== id) return;
          if (parent) parent.removeChild(this);
        };
      }
      var transition_remove = function () {
        return this.on("end.remove", removeFunction(this._id));
      };
      var transition_select = function (select$$1) {
        var name = this._name,
            id = this._id;
        if (typeof select$$1 !== "function") select$$1 = selector(select$$1);
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select$$1.call(node, node.__data__, i, group))) {
              if ("__data__" in node) subnode.__data__ = node.__data__;
              subgroup[i] = subnode;
              schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
            }
          }
        }
        return new Transition(subgroups, this._parents, name, id);
      };
      var transition_selectAll = function (select$$1) {
        var name = this._name,
            id = this._id;
        if (typeof select$$1 !== "function") select$$1 = selectorAll(select$$1);
        for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              for (var children = select$$1.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
                if (child = children[k]) {
                  schedule(child, name, id, k, children, inherit);
                }
              }
              subgroups.push(children);
              parents.push(node);
            }
          }
        }
        return new Transition(subgroups, parents, name, id);
      };
      var Selection$1 = selection.prototype.constructor;
      var transition_selection = function () {
        return new Selection$1(this._groups, this._parents);
      };
      function styleRemove$1(name, interpolate$$1) {
        var value00, value10, interpolate0;
        return function () {
          var style = window(this).getComputedStyle(this, null),
              value0 = style.getPropertyValue(name),
              value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
          return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
        };
      }
      function styleRemoveEnd(name) {
        return function () {
          this.style.removeProperty(name);
        };
      }
      function styleConstant$1(name, interpolate$$1, value1) {
        var value00, interpolate0;
        return function () {
          var value0 = window(this).getComputedStyle(this, null).getPropertyValue(name);
          return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
        };
      }
      function styleFunction$1(name, interpolate$$1, value) {
        var value00, value10, interpolate0;
        return function () {
          var style = window(this).getComputedStyle(this, null),
              value0 = style.getPropertyValue(name),
              value1 = value(this);
          if (value1 == null) value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
          return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
        };
      }
      var transition_style = function (name, value, priority) {
        var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$1;
        return value == null ? this.styleTween(name, styleRemove$1(name, i)).on("end.style." + name, styleRemoveEnd(name)) : this.styleTween(name, typeof value === "function" ? styleFunction$1(name, i, tweenValue(this, "style." + name, value)) : styleConstant$1(name, i, value), priority);
      };
      function styleTween(name, value, priority) {
        function tween() {
          var node = this,
              i = value.apply(node, arguments);
          return i && function (t) {
            node.style.setProperty(name, i(t), priority);
          };
        }
        tween._value = value;
        return tween;
      }
      var transition_styleTween = function (name, value, priority) {
        var key = "style." + (name += "");
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error();
        return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
      };
      function textConstant$1(value) {
        return function () {
          this.textContent = value;
        };
      }
      function textFunction$1(value) {
        return function () {
          var value1 = value(this);
          this.textContent = value1 == null ? "" : value1;
        };
      }
      var transition_text = function (value) {
        return this.tween("text", typeof value === "function" ? textFunction$1(tweenValue(this, "text", value)) : textConstant$1(value == null ? "" : value + ""));
      };
      var transition_transition = function () {
        var name = this._name,
            id0 = this._id,
            id1 = newId();
        for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              var inherit = get$1(node, id0);
              schedule(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
              });
            }
          }
        }
        return new Transition(groups, this._parents, name, id1);
      };
      var id = 0;
      function Transition(groups, parents, name, id) {
        this._groups = groups;
        this._parents = parents;
        this._name = name;
        this._id = id;
      }
      function transition(name) {
        return selection().transition(name);
      }
      function newId() {
        return ++id;
      }
      var selection_prototype = selection.prototype;
      Transition.prototype = transition.prototype = {
        constructor: Transition,
        select: transition_select,
        selectAll: transition_selectAll,
        filter: transition_filter,
        merge: transition_merge,
        selection: transition_selection,
        transition: transition_transition,
        call: selection_prototype.call,
        nodes: selection_prototype.nodes,
        node: selection_prototype.node,
        size: selection_prototype.size,
        empty: selection_prototype.empty,
        each: selection_prototype.each,
        on: transition_on,
        attr: transition_attr,
        attrTween: transition_attrTween,
        style: transition_style,
        styleTween: transition_styleTween,
        text: transition_text,
        remove: transition_remove,
        tween: transition_tween,
        delay: transition_delay,
        duration: transition_duration,
        ease: transition_ease
      };
      var defaultTiming = {
        time: null,
        delay: 0,
        duration: 250,
        ease: cubicInOut
      };
      function inherit(node, id) {
        var timing;
        while (!(timing = node.__transition) || !(timing = timing[id])) {
          if (!(node = node.parentNode)) {
            return defaultTiming.time = now(), defaultTiming;
          }
        }
        return timing;
      }
      var selection_transition = function (name) {
        var id, timing;
        if (name instanceof Transition) {
          id = name._id, name = name._name;
        } else {
          id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
        }
        for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              schedule(node, name, id, i, group, timing || inherit(node, id));
            }
          }
        }
        return new Transition(groups, this._parents, name, id);
      };
      selection.prototype.interrupt = selection_interrupt;
      selection.prototype.transition = selection_transition;
      var root$1 = [null];
      var active = function (node, name) {
        var schedules = node.__transition,
            schedule,
            i;
        if (schedules) {
          name = name == null ? null : name + "";
          for (i in schedules) {
            if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
              return new Transition([[node]], root$1, name, +i);
            }
          }
        }
        return null;
      };
      var slice$4 = Array.prototype.slice;
      var identity$5 = function (x) {
        return x;
      };
      var top = 1;
      var right = 2;
      var bottom = 3;
      var left = 4;
      var epsilon$2 = 1e-6;
      function translateX(scale0, scale1, d) {
        var x = scale0(d);
        return "translate(" + (isFinite(x) ? x : scale1(d)) + ",0)";
      }
      function translateY(scale0, scale1, d) {
        var y = scale0(d);
        return "translate(0," + (isFinite(y) ? y : scale1(d)) + ")";
      }
      function center(scale) {
        var offset = scale.bandwidth() / 2;
        if (scale.round()) offset = Math.round(offset);
        return function (d) {
          return scale(d) + offset;
        };
      }
      function entering() {
        return !this.__axis;
      }
      function axis(orient, scale) {
        var tickArguments = [],
            tickValues = null,
            tickFormat = null,
            tickSizeInner = 6,
            tickSizeOuter = 6,
            tickPadding = 3;
        function axis(context) {
          var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues,
              format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$5 : tickFormat,
              spacing = Math.max(tickSizeInner, 0) + tickPadding,
              transform = orient === top || orient === bottom ? translateX : translateY,
              range = scale.range(),
              range0 = range[0] + 0.5,
              range1 = range[range.length - 1] + 0.5,
              position = (scale.bandwidth ? center : identity$5)(scale.copy()),
              selection = context.selection ? context.selection() : context,
              path = selection.selectAll(".domain").data([null]),
              tick = selection.selectAll(".tick").data(values, scale).order(),
              tickExit = tick.exit(),
              tickEnter = tick.enter().append("g").attr("class", "tick"),
              line = tick.select("line"),
              text = tick.select("text"),
              k = orient === top || orient === left ? -1 : 1,
              x,
              y = orient === left || orient === right ? (x = "x", "y") : (x = "y", "x");
          path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000"));
          tick = tick.merge(tickEnter);
          line = line.merge(tickEnter.append("line").attr("stroke", "#000").attr(x + "2", k * tickSizeInner).attr(y + "1", 0.5).attr(y + "2", 0.5));
          text = text.merge(tickEnter.append("text").attr("fill", "#000").attr(x, k * spacing).attr(y, 0.5).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
          if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);
            tickExit = tickExit.transition(context).attr("opacity", epsilon$2).attr("transform", function (d) {
              return transform(position, this.parentNode.__axis || position, d);
            });
            tickEnter.attr("opacity", epsilon$2).attr("transform", function (d) {
              return transform(this.parentNode.__axis || position, position, d);
            });
          }
          tickExit.remove();
          path.attr("d", orient === left || orient == right ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);
          tick.attr("opacity", 1).attr("transform", function (d) {
            return transform(position, position, d);
          });
          line.attr(x + "2", k * tickSizeInner);
          text.attr(x, k * spacing).text(format);
          selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
          selection.each(function () {
            this.__axis = position;
          });
        }
        axis.scale = function (_) {
          return arguments.length ? (scale = _, axis) : scale;
        };
        axis.ticks = function () {
          return tickArguments = slice$4.call(arguments), axis;
        };
        axis.tickArguments = function (_) {
          return arguments.length ? (tickArguments = _ == null ? [] : slice$4.call(_), axis) : tickArguments.slice();
        };
        axis.tickValues = function (_) {
          return arguments.length ? (tickValues = _ == null ? null : slice$4.call(_), axis) : tickValues && tickValues.slice();
        };
        axis.tickFormat = function (_) {
          return arguments.length ? (tickFormat = _, axis) : tickFormat;
        };
        axis.tickSize = function (_) {
          return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
        };
        axis.tickSizeInner = function (_) {
          return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
        };
        axis.tickSizeOuter = function (_) {
          return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
        };
        axis.tickPadding = function (_) {
          return arguments.length ? (tickPadding = +_, axis) : tickPadding;
        };
        return axis;
      }
      function axisTop(scale) {
        return axis(top, scale);
      }
      function axisRight(scale) {
        return axis(right, scale);
      }
      function axisBottom(scale) {
        return axis(bottom, scale);
      }
      function axisLeft(scale) {
        return axis(left, scale);
      }
      function defaultSeparation(a, b) {
        return a.parent === b.parent ? 1 : 2;
      }
      function meanX(children) {
        return children.reduce(meanXReduce, 0) / children.length;
      }
      function meanXReduce(x, c) {
        return x + c.x;
      }
      function maxY(children) {
        return 1 + children.reduce(maxYReduce, 0);
      }
      function maxYReduce(y, c) {
        return Math.max(y, c.y);
      }
      function leafLeft(node) {
        var children;
        while (children = node.children) node = children[0];
        return node;
      }
      function leafRight(node) {
        var children;
        while (children = node.children) node = children[children.length - 1];
        return node;
      }
      var cluster = function () {
        var separation = defaultSeparation,
            dx = 1,
            dy = 1,
            nodeSize = false;
        function cluster(root) {
          var previousNode,
              x = 0;
          root.eachAfter(function (node) {
            var children = node.children;
            if (children) {
              node.x = meanX(children);
              node.y = maxY(children);
            } else {
              node.x = previousNode ? x += separation(node, previousNode) : 0;
              node.y = 0;
              previousNode = node;
            }
          });
          var left = leafLeft(root),
              right = leafRight(root),
              x0 = left.x - separation(left, right) / 2,
              x1 = right.x + separation(right, left) / 2;
          return root.eachAfter(nodeSize ? function (node) {
            node.x = (node.x - root.x) * dx;
            node.y = (root.y - node.y) * dy;
          } : function (node) {
            node.x = (node.x - x0) / (x1 - x0) * dx;
            node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
          });
        }
        cluster.separation = function (x) {
          return arguments.length ? (separation = x, cluster) : separation;
        };
        cluster.size = function (x) {
          return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : nodeSize ? null : [dx, dy];
        };
        cluster.nodeSize = function (x) {
          return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : nodeSize ? [dx, dy] : null;
        };
        return cluster;
      };
      var node_each = function (callback) {
        var node = this,
            current,
            next = [node],
            children,
            i,
            n;
        do {
          current = next.reverse(), next = [];
          while (node = current.pop()) {
            callback(node), children = node.children;
            if (children) for (i = 0, n = children.length; i < n; ++i) {
              next.push(children[i]);
            }
          }
        } while (next.length);
        return this;
      };
      var node_eachBefore = function (callback) {
        var node = this,
            nodes = [node],
            children,
            i;
        while (node = nodes.pop()) {
          callback(node), children = node.children;
          if (children) for (i = children.length - 1; i >= 0; --i) {
            nodes.push(children[i]);
          }
        }
        return this;
      };
      var node_eachAfter = function (callback) {
        var node = this,
            nodes = [node],
            next = [],
            children,
            i,
            n;
        while (node = nodes.pop()) {
          next.push(node), children = node.children;
          if (children) for (i = 0, n = children.length; i < n; ++i) {
            nodes.push(children[i]);
          }
        }
        while (node = next.pop()) {
          callback(node);
        }
        return this;
      };
      var node_sum = function (value) {
        return this.eachAfter(function (node) {
          var sum = +value(node.data) || 0,
              children = node.children,
              i = children && children.length;
          while (--i >= 0) sum += children[i].value;
          node.value = sum;
        });
      };
      var node_sort = function (compare) {
        return this.eachBefore(function (node) {
          if (node.children) {
            node.children.sort(compare);
          }
        });
      };
      var node_path = function (end) {
        var start = this,
            ancestor = leastCommonAncestor(start, end),
            nodes = [start];
        while (start !== ancestor) {
          start = start.parent;
          nodes.push(start);
        }
        var k = nodes.length;
        while (end !== ancestor) {
          nodes.splice(k, 0, end);
          end = end.parent;
        }
        return nodes;
      };
      function leastCommonAncestor(a, b) {
        if (a === b) return a;
        var aNodes = a.ancestors(),
            bNodes = b.ancestors(),
            c = null;
        a = aNodes.pop();
        b = bNodes.pop();
        while (a === b) {
          c = a;
          a = aNodes.pop();
          b = bNodes.pop();
        }
        return c;
      }
      var node_ancestors = function () {
        var node = this,
            nodes = [node];
        while (node = node.parent) {
          nodes.push(node);
        }
        return nodes;
      };
      var node_descendants = function () {
        var nodes = [];
        this.each(function (node) {
          nodes.push(node);
        });
        return nodes;
      };
      var node_leaves = function () {
        var leaves = [];
        this.eachBefore(function (node) {
          if (!node.children) {
            leaves.push(node);
          }
        });
        return leaves;
      };
      var node_links = function () {
        var root = this,
            links = [];
        root.each(function (node) {
          if (node !== root) {
            links.push({
              source: node.parent,
              target: node
            });
          }
        });
        return links;
      };
      function hierarchy(data, children) {
        var root = new Node(data),
            valued = +data.value && (root.value = data.value),
            node,
            nodes = [root],
            child,
            childs,
            i,
            n;
        if (children == null) children = defaultChildren;
        while (node = nodes.pop()) {
          if (valued) node.value = +node.data.value;
          if ((childs = children(node.data)) && (n = childs.length)) {
            node.children = new Array(n);
            for (i = n - 1; i >= 0; --i) {
              nodes.push(child = node.children[i] = new Node(childs[i]));
              child.parent = node;
              child.depth = node.depth + 1;
            }
          }
        }
        return root.eachBefore(computeHeight);
      }
      function node_copy() {
        return hierarchy(this).eachBefore(copyData);
      }
      function defaultChildren(d) {
        return d.children;
      }
      function copyData(node) {
        node.data = node.data.data;
      }
      function computeHeight(node) {
        var height = 0;
        do node.height = height; while ((node = node.parent) && node.height < ++height);
      }
      function Node(data) {
        this.data = data;
        this.depth = this.height = 0;
        this.parent = null;
      }
      Node.prototype = hierarchy.prototype = {
        constructor: Node,
        each: node_each,
        eachAfter: node_eachAfter,
        eachBefore: node_eachBefore,
        sum: node_sum,
        sort: node_sort,
        path: node_path,
        ancestors: node_ancestors,
        descendants: node_descendants,
        leaves: node_leaves,
        links: node_links,
        copy: node_copy
      };
      function Node$2(value) {
        this._ = value;
        this.next = null;
      }
      var shuffle$1 = function (array) {
        var i,
            n = (array = array.slice()).length,
            head = null,
            node = head;
        while (n) {
          var next = new Node$2(array[n - 1]);
          if (node) node = node.next = next;else node = head = next;
          array[i] = array[--n];
        }
        return {
          head: head,
          tail: node
        };
      };
      var enclose = function (circles) {
        return encloseN(shuffle$1(circles), []);
      };
      function encloses(a, b) {
        var dx = b.x - a.x,
            dy = b.y - a.y,
            dr = a.r - b.r;
        return dr * dr + 1e-6 > dx * dx + dy * dy;
      }
      function encloseN(L, B) {
        var circle,
            l0 = null,
            l1 = L.head,
            l2,
            p1;
        switch (B.length) {
          case 1:
            circle = enclose1(B[0]);
            break;
          case 2:
            circle = enclose2(B[0], B[1]);
            break;
          case 3:
            circle = enclose3(B[0], B[1], B[2]);
            break;
        }
        while (l1) {
          p1 = l1._, l2 = l1.next;
          if (!circle || !encloses(circle, p1)) {
            if (l0) L.tail = l0, l0.next = null;else L.head = L.tail = null;
            B.push(p1);
            circle = encloseN(L, B);
            B.pop();
            if (L.head) l1.next = L.head, L.head = l1;else l1.next = null, L.head = L.tail = l1;
            l0 = L.tail, l0.next = l2;
          } else {
            l0 = l1;
          }
          l1 = l2;
        }
        L.tail = l0;
        return circle;
      }
      function enclose1(a) {
        return {
          x: a.x,
          y: a.y,
          r: a.r
        };
      }
      function enclose2(a, b) {
        var x1 = a.x,
            y1 = a.y,
            r1 = a.r,
            x2 = b.x,
            y2 = b.y,
            r2 = b.r,
            x21 = x2 - x1,
            y21 = y2 - y1,
            r21 = r2 - r1,
            l = Math.sqrt(x21 * x21 + y21 * y21);
        return {
          x: (x1 + x2 + x21 / l * r21) / 2,
          y: (y1 + y2 + y21 / l * r21) / 2,
          r: (l + r1 + r2) / 2
        };
      }
      function enclose3(a, b, c) {
        var x1 = a.x,
            y1 = a.y,
            r1 = a.r,
            x2 = b.x,
            y2 = b.y,
            r2 = b.r,
            x3 = c.x,
            y3 = c.y,
            r3 = c.r,
            a2 = 2 * (x1 - x2),
            b2 = 2 * (y1 - y2),
            c2 = 2 * (r2 - r1),
            d2 = x1 * x1 + y1 * y1 - r1 * r1 - x2 * x2 - y2 * y2 + r2 * r2,
            a3 = 2 * (x1 - x3),
            b3 = 2 * (y1 - y3),
            c3 = 2 * (r3 - r1),
            d3 = x1 * x1 + y1 * y1 - r1 * r1 - x3 * x3 - y3 * y3 + r3 * r3,
            ab = a3 * b2 - a2 * b3,
            xa = (b2 * d3 - b3 * d2) / ab - x1,
            xb = (b3 * c2 - b2 * c3) / ab,
            ya = (a3 * d2 - a2 * d3) / ab - y1,
            yb = (a2 * c3 - a3 * c2) / ab,
            A = xb * xb + yb * yb - 1,
            B = 2 * (xa * xb + ya * yb + r1),
            C = xa * xa + ya * ya - r1 * r1,
            r = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
        return {
          x: xa + xb * r + x1,
          y: ya + yb * r + y1,
          r: r
        };
      }
      function place(a, b, c) {
        var ax = a.x,
            ay = a.y,
            da = b.r + c.r,
            db = a.r + c.r,
            dx = b.x - ax,
            dy = b.y - ay,
            dc = dx * dx + dy * dy;
        if (dc) {
          var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
              y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
          c.x = ax + x * dx + y * dy;
          c.y = ay + x * dy - y * dx;
        } else {
          c.x = ax + db;
          c.y = ay;
        }
      }
      function intersects(a, b) {
        var dx = b.x - a.x,
            dy = b.y - a.y,
            dr = a.r + b.r;
        return dr * dr > dx * dx + dy * dy;
      }
      function distance2(circle, x, y) {
        var dx = circle.x - x,
            dy = circle.y - y;
        return dx * dx + dy * dy;
      }
      function Node$1(circle) {
        this._ = circle;
        this.next = null;
        this.previous = null;
      }
      function packEnclose(circles) {
        if (!(n = circles.length)) return 0;
        var a, b, c, n;
        a = circles[0], a.x = 0, a.y = 0;
        if (!(n > 1)) return a.r;
        b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
        if (!(n > 2)) return a.r + b.r;
        place(b, a, c = circles[2]);
        var aa = a.r * a.r,
            ba = b.r * b.r,
            ca = c.r * c.r,
            oa = aa + ba + ca,
            ox = aa * a.x + ba * b.x + ca * c.x,
            oy = aa * a.y + ba * b.y + ca * c.y,
            cx,
            cy,
            i,
            j,
            k,
            sj,
            sk;
        a = new Node$1(a), b = new Node$1(b), c = new Node$1(c);
        a.next = c.previous = b;
        b.next = a.previous = c;
        c.next = b.previous = a;
        pack: for (i = 3; i < n; ++i) {
          place(a._, b._, c = circles[i]), c = new Node$1(c);
          if ((k = a.previous) === (j = b.next)) {
            if (intersects(j._, c._)) {
              a = b, b = j, --i;
              continue pack;
            }
          } else {
            sj = j._.r, sk = k._.r;
            do {
              if (sj <= sk) {
                if (intersects(j._, c._)) {
                  b = j, a.next = b, b.previous = a, --i;
                  continue pack;
                }
                j = j.next, sj += j._.r;
              } else {
                if (intersects(k._, c._)) {
                  a = k, a.next = b, b.previous = a, --i;
                  continue pack;
                }
                k = k.previous, sk += k._.r;
              }
            } while (j !== k.next);
          }
          c.previous = a, c.next = b, a.next = b.previous = b = c;
          oa += ca = c._.r * c._.r;
          ox += ca * c._.x;
          oy += ca * c._.y;
          aa = distance2(a._, cx = ox / oa, cy = oy / oa);
          while ((c = c.next) !== b) {
            if ((ca = distance2(c._, cx, cy)) < aa) {
              a = c, aa = ca;
            }
          }
          b = a.next;
        }
        a = [b._], c = b;
        while ((c = c.next) !== b) a.push(c._);
        c = enclose(a);
        for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;
        return c.r;
      }
      var siblings = function (circles) {
        packEnclose(circles);
        return circles;
      };
      function optional(f) {
        return f == null ? null : required(f);
      }
      function required(f) {
        if (typeof f !== "function") throw new Error();
        return f;
      }
      function constantZero() {
        return 0;
      }
      var constant$6 = function (x) {
        return function () {
          return x;
        };
      };
      function defaultRadius(d) {
        return Math.sqrt(d.value);
      }
      var index = function () {
        var radius = null,
            dx = 1,
            dy = 1,
            padding = constantZero;
        function pack(root) {
          root.x = dx / 2, root.y = dy / 2;
          if (radius) {
            root.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
          } else {
            root.eachBefore(radiusLeaf(defaultRadius)).eachAfter(packChildren(constantZero, 1)).eachAfter(packChildren(padding, root.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
          }
          return root;
        }
        pack.radius = function (x) {
          return arguments.length ? (radius = optional(x), pack) : radius;
        };
        pack.size = function (x) {
          return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
        };
        pack.padding = function (x) {
          return arguments.length ? (padding = typeof x === "function" ? x : constant$6(+x), pack) : padding;
        };
        return pack;
      };
      function radiusLeaf(radius) {
        return function (node) {
          if (!node.children) {
            node.r = Math.max(0, +radius(node) || 0);
          }
        };
      }
      function packChildren(padding, k) {
        return function (node) {
          if (children = node.children) {
            var children,
                i,
                n = children.length,
                r = padding(node) * k || 0,
                e;
            if (r) for (i = 0; i < n; ++i) children[i].r += r;
            e = packEnclose(children);
            if (r) for (i = 0; i < n; ++i) children[i].r -= r;
            node.r = e + r;
          }
        };
      }
      function translateChild(k) {
        return function (node) {
          var parent = node.parent;
          node.r *= k;
          if (parent) {
            node.x = parent.x + k * node.x;
            node.y = parent.y + k * node.y;
          }
        };
      }
      var roundNode = function (node) {
        node.x0 = Math.round(node.x0);
        node.y0 = Math.round(node.y0);
        node.x1 = Math.round(node.x1);
        node.y1 = Math.round(node.y1);
      };
      var treemapDice = function (parent, x0, y0, x1, y1) {
        var nodes = parent.children,
            node,
            i = -1,
            n = nodes.length,
            k = parent.value && (x1 - x0) / parent.value;
        while (++i < n) {
          node = nodes[i], node.y0 = y0, node.y1 = y1;
          node.x0 = x0, node.x1 = x0 += node.value * k;
        }
      };
      var partition = function () {
        var dx = 1,
            dy = 1,
            padding = 0,
            round = false;
        function partition(root) {
          var n = root.height + 1;
          root.x0 = root.y0 = padding;
          root.x1 = dx;
          root.y1 = dy / n;
          root.eachBefore(positionNode(dy, n));
          if (round) root.eachBefore(roundNode);
          return root;
        }
        function positionNode(dy, n) {
          return function (node) {
            if (node.children) {
              treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
            }
            var x0 = node.x0,
                y0 = node.y0,
                x1 = node.x1 - padding,
                y1 = node.y1 - padding;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            node.x0 = x0;
            node.y0 = y0;
            node.x1 = x1;
            node.y1 = y1;
          };
        }
        partition.round = function (x) {
          return arguments.length ? (round = !!x, partition) : round;
        };
        partition.size = function (x) {
          return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
        };
        partition.padding = function (x) {
          return arguments.length ? (padding = +x, partition) : padding;
        };
        return partition;
      };
      var keyPrefix$1 = "$";
      var preroot = { depth: -1 };
      var ambiguous = {};
      function defaultId(d) {
        return d.id;
      }
      function defaultParentId(d) {
        return d.parentId;
      }
      var stratify = function () {
        var id = defaultId,
            parentId = defaultParentId;
        function stratify(data) {
          var d,
              i,
              n = data.length,
              root,
              parent,
              node,
              nodes = new Array(n),
              nodeId,
              nodeKey,
              nodeByKey = {};
          for (i = 0; i < n; ++i) {
            d = data[i], node = nodes[i] = new Node(d);
            if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
              nodeKey = keyPrefix$1 + (node.id = nodeId);
              nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
            }
          }
          for (i = 0; i < n; ++i) {
            node = nodes[i], nodeId = parentId(data[i], i, data);
            if (nodeId == null || !(nodeId += "")) {
              if (root) throw new Error("multiple roots");
              root = node;
            } else {
              parent = nodeByKey[keyPrefix$1 + nodeId];
              if (!parent) throw new Error("missing: " + nodeId);
              if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
              if (parent.children) parent.children.push(node);else parent.children = [node];
              node.parent = parent;
            }
          }
          if (!root) throw new Error("no root");
          root.parent = preroot;
          root.eachBefore(function (node) {
            node.depth = node.parent.depth + 1;
            --n;
          }).eachBefore(computeHeight);
          root.parent = null;
          if (n > 0) throw new Error("cycle");
          return root;
        }
        stratify.id = function (x) {
          return arguments.length ? (id = required(x), stratify) : id;
        };
        stratify.parentId = function (x) {
          return arguments.length ? (parentId = required(x), stratify) : parentId;
        };
        return stratify;
      };
      function defaultSeparation$1(a, b) {
        return a.parent === b.parent ? 1 : 2;
      }
      function nextLeft(v) {
        var children = v.children;
        return children ? children[0] : v.t;
      }
      function nextRight(v) {
        var children = v.children;
        return children ? children[children.length - 1] : v.t;
      }
      function moveSubtree(wm, wp, shift) {
        var change = shift / (wp.i - wm.i);
        wp.c -= change;
        wp.s += shift;
        wm.c += change;
        wp.z += shift;
        wp.m += shift;
      }
      function executeShifts(v) {
        var shift = 0,
            change = 0,
            children = v.children,
            i = children.length,
            w;
        while (--i >= 0) {
          w = children[i];
          w.z += shift;
          w.m += shift;
          shift += w.s + (change += w.c);
        }
      }
      function nextAncestor(vim, v, ancestor) {
        return vim.a.parent === v.parent ? vim.a : ancestor;
      }
      function TreeNode(node, i) {
        this._ = node;
        this.parent = null;
        this.children = null;
        this.A = null;
        this.a = this;
        this.z = 0;
        this.m = 0;
        this.c = 0;
        this.s = 0;
        this.t = null;
        this.i = i;
      }
      TreeNode.prototype = Object.create(Node.prototype);
      function treeRoot(root) {
        var tree = new TreeNode(root, 0),
            node,
            nodes = [tree],
            child,
            children,
            i,
            n;
        while (node = nodes.pop()) {
          if (children = node._.children) {
            node.children = new Array(n = children.length);
            for (i = n - 1; i >= 0; --i) {
              nodes.push(child = node.children[i] = new TreeNode(children[i], i));
              child.parent = node;
            }
          }
        }
        (tree.parent = new TreeNode(null, 0)).children = [tree];
        return tree;
      }
      var tree = function () {
        var separation = defaultSeparation$1,
            dx = 1,
            dy = 1,
            nodeSize = null;
        function tree(root) {
          var t = treeRoot(root);
          t.eachAfter(firstWalk), t.parent.m = -t.z;
          t.eachBefore(secondWalk);
          if (nodeSize) root.eachBefore(sizeNode);else {
            var left = root,
                right = root,
                bottom = root;
            root.eachBefore(function (node) {
              if (node.x < left.x) left = node;
              if (node.x > right.x) right = node;
              if (node.depth > bottom.depth) bottom = node;
            });
            var s = left === right ? 1 : separation(left, right) / 2,
                tx = s - left.x,
                kx = dx / (right.x + s + tx),
                ky = dy / (bottom.depth || 1);
            root.eachBefore(function (node) {
              node.x = (node.x + tx) * kx;
              node.y = node.depth * ky;
            });
          }
          return root;
        }
        function firstWalk(v) {
          var children = v.children,
              siblings = v.parent.children,
              w = v.i ? siblings[v.i - 1] : null;
          if (children) {
            executeShifts(v);
            var midpoint = (children[0].z + children[children.length - 1].z) / 2;
            if (w) {
              v.z = w.z + separation(v._, w._);
              v.m = v.z - midpoint;
            } else {
              v.z = midpoint;
            }
          } else if (w) {
            v.z = w.z + separation(v._, w._);
          }
          v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
        }
        function secondWalk(v) {
          v._.x = v.z + v.parent.m;
          v.m += v.parent.m;
        }
        function apportion(v, w, ancestor) {
          if (w) {
            var vip = v,
                vop = v,
                vim = w,
                vom = vip.parent.children[0],
                sip = vip.m,
                sop = vop.m,
                sim = vim.m,
                som = vom.m,
                shift;
            while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
              vom = nextLeft(vom);
              vop = nextRight(vop);
              vop.a = v;
              shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
              if (shift > 0) {
                moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
                sip += shift;
                sop += shift;
              }
              sim += vim.m;
              sip += vip.m;
              som += vom.m;
              sop += vop.m;
            }
            if (vim && !nextRight(vop)) {
              vop.t = vim;
              vop.m += sim - sop;
            }
            if (vip && !nextLeft(vom)) {
              vom.t = vip;
              vom.m += sip - som;
              ancestor = v;
            }
          }
          return ancestor;
        }
        function sizeNode(node) {
          node.x *= dx;
          node.y = node.depth * dy;
        }
        tree.separation = function (x) {
          return arguments.length ? (separation = x, tree) : separation;
        };
        tree.size = function (x) {
          return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [dx, dy];
        };
        tree.nodeSize = function (x) {
          return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [dx, dy] : null;
        };
        return tree;
      };
      var treemapSlice = function (parent, x0, y0, x1, y1) {
        var nodes = parent.children,
            node,
            i = -1,
            n = nodes.length,
            k = parent.value && (y1 - y0) / parent.value;
        while (++i < n) {
          node = nodes[i], node.x0 = x0, node.x1 = x1;
          node.y0 = y0, node.y1 = y0 += node.value * k;
        }
      };
      var phi = (1 + Math.sqrt(5)) / 2;
      function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
        var rows = [],
            nodes = parent.children,
            row,
            nodeValue,
            i0 = 0,
            i1 = 0,
            n = nodes.length,
            dx,
            dy,
            value = parent.value,
            sumValue,
            minValue,
            maxValue,
            newRatio,
            minRatio,
            alpha,
            beta;
        while (i0 < n) {
          dx = x1 - x0, dy = y1 - y0;
          do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
          minValue = maxValue = sumValue;
          alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
          beta = sumValue * sumValue * alpha;
          minRatio = Math.max(maxValue / beta, beta / minValue);
          for (; i1 < n; ++i1) {
            sumValue += nodeValue = nodes[i1].value;
            if (nodeValue < minValue) minValue = nodeValue;
            if (nodeValue > maxValue) maxValue = nodeValue;
            beta = sumValue * sumValue * alpha;
            newRatio = Math.max(maxValue / beta, beta / minValue);
            if (newRatio > minRatio) {
              sumValue -= nodeValue;
              break;
            }
            minRatio = newRatio;
          }
          rows.push(row = {
            value: sumValue,
            dice: dx < dy,
            children: nodes.slice(i0, i1)
          });
          if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
          value -= sumValue, i0 = i1;
        }
        return rows;
      }
      var squarify = function custom(ratio) {
        function squarify(parent, x0, y0, x1, y1) {
          squarifyRatio(ratio, parent, x0, y0, x1, y1);
        }
        squarify.ratio = function (x) {
          return custom((x = +x) > 1 ? x : 1);
        };
        return squarify;
      }(phi);
      var index$1 = function () {
        var tile = squarify,
            round = false,
            dx = 1,
            dy = 1,
            paddingStack = [0],
            paddingInner = constantZero,
            paddingTop = constantZero,
            paddingRight = constantZero,
            paddingBottom = constantZero,
            paddingLeft = constantZero;
        function treemap(root) {
          root.x0 = root.y0 = 0;
          root.x1 = dx;
          root.y1 = dy;
          root.eachBefore(positionNode);
          paddingStack = [0];
          if (round) root.eachBefore(roundNode);
          return root;
        }
        function positionNode(node) {
          var p = paddingStack[node.depth],
              x0 = node.x0 + p,
              y0 = node.y0 + p,
              x1 = node.x1 - p,
              y1 = node.y1 - p;
          if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
          if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
          node.x0 = x0;
          node.y0 = y0;
          node.x1 = x1;
          node.y1 = y1;
          if (node.children) {
            p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
            x0 += paddingLeft(node) - p;
            y0 += paddingTop(node) - p;
            x1 -= paddingRight(node) - p;
            y1 -= paddingBottom(node) - p;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            tile(node, x0, y0, x1, y1);
          }
        }
        treemap.round = function (x) {
          return arguments.length ? (round = !!x, treemap) : round;
        };
        treemap.size = function (x) {
          return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
        };
        treemap.tile = function (x) {
          return arguments.length ? (tile = required(x), treemap) : tile;
        };
        treemap.padding = function (x) {
          return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
        };
        treemap.paddingInner = function (x) {
          return arguments.length ? (paddingInner = typeof x === "function" ? x : constant$6(+x), treemap) : paddingInner;
        };
        treemap.paddingOuter = function (x) {
          return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
        };
        treemap.paddingTop = function (x) {
          return arguments.length ? (paddingTop = typeof x === "function" ? x : constant$6(+x), treemap) : paddingTop;
        };
        treemap.paddingRight = function (x) {
          return arguments.length ? (paddingRight = typeof x === "function" ? x : constant$6(+x), treemap) : paddingRight;
        };
        treemap.paddingBottom = function (x) {
          return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant$6(+x), treemap) : paddingBottom;
        };
        treemap.paddingLeft = function (x) {
          return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant$6(+x), treemap) : paddingLeft;
        };
        return treemap;
      };
      var binary = function (parent, x0, y0, x1, y1) {
        var nodes = parent.children,
            i,
            n = nodes.length,
            sum,
            sums = new Array(n + 1);
        for (sums[0] = sum = i = 0; i < n; ++i) {
          sums[i + 1] = sum += nodes[i].value;
        }
        partition(0, n, parent.value, x0, y0, x1, y1);
        function partition(i, j, value, x0, y0, x1, y1) {
          if (i >= j - 1) {
            var node = nodes[i];
            node.x0 = x0, node.y0 = y0;
            node.x1 = x1, node.y1 = y1;
            return;
          }
          var valueOffset = sums[i],
              valueTarget = value / 2 + valueOffset,
              k = i + 1,
              hi = j - 1;
          while (k < hi) {
            var mid = k + hi >>> 1;
            if (sums[mid] < valueTarget) k = mid + 1;else hi = mid;
          }
          var valueLeft = sums[k] - valueOffset,
              valueRight = value - valueLeft;
          if (y1 - y0 > x1 - x0) {
            var yk = (y0 * valueRight + y1 * valueLeft) / value;
            partition(i, k, valueLeft, x0, y0, x1, yk);
            partition(k, j, valueRight, x0, yk, x1, y1);
          } else {
            var xk = (x0 * valueRight + x1 * valueLeft) / value;
            partition(i, k, valueLeft, x0, y0, xk, y1);
            partition(k, j, valueRight, xk, y0, x1, y1);
          }
        }
      };
      var sliceDice = function (parent, x0, y0, x1, y1) {
        (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
      };
      var resquarify = function custom(ratio) {
        function resquarify(parent, x0, y0, x1, y1) {
          if ((rows = parent._squarify) && rows.ratio === ratio) {
            var rows,
                row,
                nodes,
                i,
                j = -1,
                n,
                m = rows.length,
                value = parent.value;
            while (++j < m) {
              row = rows[j], nodes = row.children;
              for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
              if (row.dice) treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);else treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
              value -= row.value;
            }
          } else {
            parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
            rows.ratio = ratio;
          }
        }
        resquarify.ratio = function (x) {
          return custom((x = +x) > 1 ? x : 1);
        };
        return resquarify;
      }(phi);
      var center$1 = function (x, y) {
        var nodes;
        if (x == null) x = 0;
        if (y == null) y = 0;
        function force() {
          var i,
              n = nodes.length,
              node,
              sx = 0,
              sy = 0;
          for (i = 0; i < n; ++i) {
            node = nodes[i], sx += node.x, sy += node.y;
          }
          for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
            node = nodes[i], node.x -= sx, node.y -= sy;
          }
        }
        force.initialize = function (_) {
          nodes = _;
        };
        force.x = function (_) {
          return arguments.length ? (x = +_, force) : x;
        };
        force.y = function (_) {
          return arguments.length ? (y = +_, force) : y;
        };
        return force;
      };
      var constant$7 = function (x) {
        return function () {
          return x;
        };
      };
      var jiggle = function () {
        return (Math.random() - 0.5) * 1e-6;
      };
      function x$1(d) {
        return d.x + d.vx;
      }
      function y$1(d) {
        return d.y + d.vy;
      }
      var collide = function (radius) {
        var nodes,
            radii,
            strength = 1,
            iterations = 1;
        if (typeof radius !== "function") radius = constant$7(radius == null ? 1 : +radius);
        function force() {
          var i,
              n = nodes.length,
              tree,
              node,
              xi,
              yi,
              ri,
              ri2;
          for (var k = 0; k < iterations; ++k) {
            tree = quadtree(nodes, x$1, y$1).visitAfter(prepare);
            for (i = 0; i < n; ++i) {
              node = nodes[i];
              ri = radii[node.index], ri2 = ri * ri;
              xi = node.x + node.vx;
              yi = node.y + node.vy;
              tree.visit(apply);
            }
          }
          function apply(quad, x0, y0, x1, y1) {
            var data = quad.data,
                rj = quad.r,
                r = ri + rj;
            if (data) {
              if (data.index > node.index) {
                var x = xi - data.x - data.vx,
                    y = yi - data.y - data.vy,
                    l = x * x + y * y;
                if (l < r * r) {
                  if (x === 0) x = jiggle(), l += x * x;
                  if (y === 0) y = jiggle(), l += y * y;
                  l = (r - (l = Math.sqrt(l))) / l * strength;
                  node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                  node.vy += (y *= l) * r;
                  data.vx -= x * (r = 1 - r);
                  data.vy -= y * r;
                }
              }
              return;
            }
            return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
          }
        }
        function prepare(quad) {
          if (quad.data) return quad.r = radii[quad.data.index];
          for (var i = quad.r = 0; i < 4; ++i) {
            if (quad[i] && quad[i].r > quad.r) {
              quad.r = quad[i].r;
            }
          }
        }
        function initialize() {
          if (!nodes) return;
          var i,
              n = nodes.length,
              node;
          radii = new Array(n);
          for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
        }
        force.initialize = function (_) {
          nodes = _;
          initialize();
        };
        force.iterations = function (_) {
          return arguments.length ? (iterations = +_, force) : iterations;
        };
        force.strength = function (_) {
          return arguments.length ? (strength = +_, force) : strength;
        };
        force.radius = function (_) {
          return arguments.length ? (radius = typeof _ === "function" ? _ : constant$7(+_), initialize(), force) : radius;
        };
        return force;
      };
      function index$2(d) {
        return d.index;
      }
      function find(nodeById, nodeId) {
        var node = nodeById.get(nodeId);
        if (!node) throw new Error("missing: " + nodeId);
        return node;
      }
      var link = function (links) {
        var id = index$2,
            strength = defaultStrength,
            strengths,
            distance = constant$7(30),
            distances,
            nodes,
            count,
            bias,
            iterations = 1;
        if (links == null) links = [];
        function defaultStrength(link) {
          return 1 / Math.min(count[link.source.index], count[link.target.index]);
        }
        function force(alpha) {
          for (var k = 0, n = links.length; k < iterations; ++k) {
            for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
              link = links[i], source = link.source, target = link.target;
              x = target.x + target.vx - source.x - source.vx || jiggle();
              y = target.y + target.vy - source.y - source.vy || jiggle();
              l = Math.sqrt(x * x + y * y);
              l = (l - distances[i]) / l * alpha * strengths[i];
              x *= l, y *= l;
              target.vx -= x * (b = bias[i]);
              target.vy -= y * b;
              source.vx += x * (b = 1 - b);
              source.vy += y * b;
            }
          }
        }
        function initialize() {
          if (!nodes) return;
          var i,
              n = nodes.length,
              m = links.length,
              nodeById = map$1(nodes, id),
              link;
          for (i = 0, count = new Array(n); i < m; ++i) {
            link = links[i], link.index = i;
            if (typeof link.source !== "object") link.source = find(nodeById, link.source);
            if (typeof link.target !== "object") link.target = find(nodeById, link.target);
            count[link.source.index] = (count[link.source.index] || 0) + 1;
            count[link.target.index] = (count[link.target.index] || 0) + 1;
          }
          for (i = 0, bias = new Array(m); i < m; ++i) {
            link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
          }
          strengths = new Array(m), initializeStrength();
          distances = new Array(m), initializeDistance();
        }
        function initializeStrength() {
          if (!nodes) return;
          for (var i = 0, n = links.length; i < n; ++i) {
            strengths[i] = +strength(links[i], i, links);
          }
        }
        function initializeDistance() {
          if (!nodes) return;
          for (var i = 0, n = links.length; i < n; ++i) {
            distances[i] = +distance(links[i], i, links);
          }
        }
        force.initialize = function (_) {
          nodes = _;
          initialize();
        };
        force.links = function (_) {
          return arguments.length ? (links = _, initialize(), force) : links;
        };
        force.id = function (_) {
          return arguments.length ? (id = _, force) : id;
        };
        force.iterations = function (_) {
          return arguments.length ? (iterations = +_, force) : iterations;
        };
        force.strength = function (_) {
          return arguments.length ? (strength = typeof _ === "function" ? _ : constant$7(+_), initializeStrength(), force) : strength;
        };
        force.distance = function (_) {
          return arguments.length ? (distance = typeof _ === "function" ? _ : constant$7(+_), initializeDistance(), force) : distance;
        };
        return force;
      };
      function x$2(d) {
        return d.x;
      }
      function y$2(d) {
        return d.y;
      }
      var initialRadius = 10;
      var initialAngle = Math.PI * (3 - Math.sqrt(5));
      var simulation = function (nodes) {
        var simulation,
            alpha = 1,
            alphaMin = 0.001,
            alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
            alphaTarget = 0,
            velocityDecay = 0.6,
            forces = map$1(),
            stepper = timer(step),
            event = dispatch("tick", "end");
        if (nodes == null) nodes = [];
        function step() {
          tick();
          event.call("tick", simulation);
          if (alpha < alphaMin) {
            stepper.stop();
            event.call("end", simulation);
          }
        }
        function tick() {
          var i,
              n = nodes.length,
              node;
          alpha += (alphaTarget - alpha) * alphaDecay;
          forces.each(function (force) {
            force(alpha);
          });
          for (i = 0; i < n; ++i) {
            node = nodes[i];
            if (node.fx == null) node.x += node.vx *= velocityDecay;else node.x = node.fx, node.vx = 0;
            if (node.fy == null) node.y += node.vy *= velocityDecay;else node.y = node.fy, node.vy = 0;
          }
        }
        function initializeNodes() {
          for (var i = 0, n = nodes.length, node; i < n; ++i) {
            node = nodes[i], node.index = i;
            if (isNaN(node.x) || isNaN(node.y)) {
              var radius = initialRadius * Math.sqrt(i),
                  angle = i * initialAngle;
              node.x = radius * Math.cos(angle);
              node.y = radius * Math.sin(angle);
            }
            if (isNaN(node.vx) || isNaN(node.vy)) {
              node.vx = node.vy = 0;
            }
          }
        }
        function initializeForce(force) {
          if (force.initialize) force.initialize(nodes);
          return force;
        }
        initializeNodes();
        return simulation = {
          tick: tick,
          restart: function () {
            return stepper.restart(step), simulation;
          },
          stop: function () {
            return stepper.stop(), simulation;
          },
          nodes: function (_) {
            return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
          },
          alpha: function (_) {
            return arguments.length ? (alpha = +_, simulation) : alpha;
          },
          alphaMin: function (_) {
            return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
          },
          alphaDecay: function (_) {
            return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
          },
          alphaTarget: function (_) {
            return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
          },
          velocityDecay: function (_) {
            return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
          },
          force: function (name, _) {
            return arguments.length > 1 ? (_ == null ? forces.remove(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
          },
          find: function (x, y, radius) {
            var i = 0,
                n = nodes.length,
                dx,
                dy,
                d2,
                node,
                closest;
            if (radius == null) radius = Infinity;else radius *= radius;
            for (i = 0; i < n; ++i) {
              node = nodes[i];
              dx = x - node.x;
              dy = y - node.y;
              d2 = dx * dx + dy * dy;
              if (d2 < radius) closest = node, radius = d2;
            }
            return closest;
          },
          on: function (name, _) {
            return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
          }
        };
      };
      var manyBody = function () {
        var nodes,
            node,
            alpha,
            strength = constant$7(-30),
            strengths,
            distanceMin2 = 1,
            distanceMax2 = Infinity,
            theta2 = 0.81;
        function force(_) {
          var i,
              n = nodes.length,
              tree = quadtree(nodes, x$2, y$2).visitAfter(accumulate);
          for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
        }
        function initialize() {
          if (!nodes) return;
          var i,
              n = nodes.length,
              node;
          strengths = new Array(n);
          for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
        }
        function accumulate(quad) {
          var strength = 0,
              q,
              c,
              x$$1,
              y$$1,
              i;
          if (quad.length) {
            for (x$$1 = y$$1 = i = 0; i < 4; ++i) {
              if ((q = quad[i]) && (c = q.value)) {
                strength += c, x$$1 += c * q.x, y$$1 += c * q.y;
              }
            }
            quad.x = x$$1 / strength;
            quad.y = y$$1 / strength;
          } else {
            q = quad;
            q.x = q.data.x;
            q.y = q.data.y;
            do strength += strengths[q.data.index]; while (q = q.next);
          }
          quad.value = strength;
        }
        function apply(quad, x1, _, x2) {
          if (!quad.value) return true;
          var x$$1 = quad.x - node.x,
              y$$1 = quad.y - node.y,
              w = x2 - x1,
              l = x$$1 * x$$1 + y$$1 * y$$1;
          if (w * w / theta2 < l) {
            if (l < distanceMax2) {
              if (x$$1 === 0) x$$1 = jiggle(), l += x$$1 * x$$1;
              if (y$$1 === 0) y$$1 = jiggle(), l += y$$1 * y$$1;
              if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
              node.vx += x$$1 * quad.value * alpha / l;
              node.vy += y$$1 * quad.value * alpha / l;
            }
            return true;
          } else if (quad.length || l >= distanceMax2) return;
          if (quad.data !== node || quad.next) {
            if (x$$1 === 0) x$$1 = jiggle(), l += x$$1 * x$$1;
            if (y$$1 === 0) y$$1 = jiggle(), l += y$$1 * y$$1;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
          }
          do if (quad.data !== node) {
            w = strengths[quad.data.index] * alpha / l;
            node.vx += x$$1 * w;
            node.vy += y$$1 * w;
          } while (quad = quad.next);
        }
        force.initialize = function (_) {
          nodes = _;
          initialize();
        };
        force.strength = function (_) {
          return arguments.length ? (strength = typeof _ === "function" ? _ : constant$7(+_), initialize(), force) : strength;
        };
        force.distanceMin = function (_) {
          return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
        };
        force.distanceMax = function (_) {
          return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
        };
        force.theta = function (_) {
          return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
        };
        return force;
      };
      var x$3 = function (x) {
        var strength = constant$7(0.1),
            nodes,
            strengths,
            xz;
        if (typeof x !== "function") x = constant$7(x == null ? 0 : +x);
        function force(alpha) {
          for (var i = 0, n = nodes.length, node; i < n; ++i) {
            node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
          }
        }
        function initialize() {
          if (!nodes) return;
          var i,
              n = nodes.length;
          strengths = new Array(n);
          xz = new Array(n);
          for (i = 0; i < n; ++i) {
            strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
          }
        }
        force.initialize = function (_) {
          nodes = _;
          initialize();
        };
        force.strength = function (_) {
          return arguments.length ? (strength = typeof _ === "function" ? _ : constant$7(+_), initialize(), force) : strength;
        };
        force.x = function (_) {
          return arguments.length ? (x = typeof _ === "function" ? _ : constant$7(+_), initialize(), force) : x;
        };
        return force;
      };
      var y$3 = function (y) {
        var strength = constant$7(0.1),
            nodes,
            strengths,
            yz;
        if (typeof y !== "function") y = constant$7(y == null ? 0 : +y);
        function force(alpha) {
          for (var i = 0, n = nodes.length, node; i < n; ++i) {
            node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
          }
        }
        function initialize() {
          if (!nodes) return;
          var i,
              n = nodes.length;
          strengths = new Array(n);
          yz = new Array(n);
          for (i = 0; i < n; ++i) {
            strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
          }
        }
        force.initialize = function (_) {
          nodes = _;
          initialize();
        };
        force.strength = function (_) {
          return arguments.length ? (strength = typeof _ === "function" ? _ : constant$7(+_), initialize(), force) : strength;
        };
        force.y = function (_) {
          return arguments.length ? (y = typeof _ === "function" ? _ : constant$7(+_), initialize(), force) : y;
        };
        return force;
      };
      function nopropagation() {
        exports.event.stopImmediatePropagation();
      }
      var noevent = function () {
        exports.event.preventDefault();
        exports.event.stopImmediatePropagation();
      };
      var dragDisable = function (view) {
        var root = view.document.documentElement,
            selection$$1 = select(view).on("dragstart.drag", noevent, true);
        if ("onselectstart" in root) {
          selection$$1.on("selectstart.drag", noevent, true);
        } else {
          root.__noselect = root.style.MozUserSelect;
          root.style.MozUserSelect = "none";
        }
      };
      function yesdrag(view, noclick) {
        var root = view.document.documentElement,
            selection$$1 = select(view).on("dragstart.drag", null);
        if (noclick) {
          selection$$1.on("click.drag", noevent, true);
          setTimeout(function () {
            selection$$1.on("click.drag", null);
          }, 0);
        }
        if ("onselectstart" in root) {
          selection$$1.on("selectstart.drag", null);
        } else {
          root.style.MozUserSelect = root.__noselect;
          delete root.__noselect;
        }
      }
      var constant$8 = function (x) {
        return function () {
          return x;
        };
      };
      function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
        this.target = target;
        this.type = type;
        this.subject = subject;
        this.identifier = id;
        this.active = active;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this._ = dispatch;
      }
      DragEvent.prototype.on = function () {
        var value = this._.on.apply(this._, arguments);
        return value === this._ ? this : value;
      };
      function defaultFilter() {
        return !exports.event.button;
      }
      function defaultContainer() {
        return this.parentNode;
      }
      function defaultSubject(d) {
        return d == null ? {
          x: exports.event.x,
          y: exports.event.y
        } : d;
      }
      var drag = function () {
        var filter = defaultFilter,
            container = defaultContainer,
            subject = defaultSubject,
            gestures = {},
            listeners = dispatch("start", "drag", "end"),
            active = 0,
            mousemoving,
            touchending;
        function drag(selection$$1) {
          selection$$1.on("mousedown.drag", mousedowned).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function mousedowned() {
          if (touchending || !filter.apply(this, arguments)) return;
          var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
          if (!gesture) return;
          select(exports.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
          dragDisable(exports.event.view);
          nopropagation();
          mousemoving = false;
          gesture("start");
        }
        function mousemoved() {
          noevent();
          mousemoving = true;
          gestures.mouse("drag");
        }
        function mouseupped() {
          select(exports.event.view).on("mousemove.drag mouseup.drag", null);
          yesdrag(exports.event.view, mousemoving);
          noevent();
          gestures.mouse("end");
        }
        function touchstarted() {
          if (!filter.apply(this, arguments)) return;
          var touches$$1 = exports.event.changedTouches,
              c = container.apply(this, arguments),
              n = touches$$1.length,
              i,
              gesture;
          for (i = 0; i < n; ++i) {
            if (gesture = beforestart(touches$$1[i].identifier, c, touch, this, arguments)) {
              nopropagation();
              gesture("start");
            }
          }
        }
        function touchmoved() {
          var touches$$1 = exports.event.changedTouches,
              n = touches$$1.length,
              i,
              gesture;
          for (i = 0; i < n; ++i) {
            if (gesture = gestures[touches$$1[i].identifier]) {
              noevent();
              gesture("drag");
            }
          }
        }
        function touchended() {
          var touches$$1 = exports.event.changedTouches,
              n = touches$$1.length,
              i,
              gesture;
          if (touchending) clearTimeout(touchending);
          touchending = setTimeout(function () {
            touchending = null;
          }, 500);
          for (i = 0; i < n; ++i) {
            if (gesture = gestures[touches$$1[i].identifier]) {
              nopropagation();
              gesture("end");
            }
          }
        }
        function beforestart(id, container, point, that, args) {
          var p = point(container, id),
              s,
              dx,
              dy,
              sublisteners = listeners.copy();
          if (!customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function () {
            if ((exports.event.subject = s = subject.apply(that, args)) == null) return false;
            dx = s.x - p[0] || 0;
            dy = s.y - p[1] || 0;
            return true;
          })) return;
          return function gesture(type) {
            var p0 = p,
                n;
            switch (type) {
              case "start":
                gestures[id] = gesture, n = active++;
                break;
              case "end":
                delete gestures[id], --active;
              case "drag":
                p = point(container, id), n = active;
                break;
            }
            customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
          };
        }
        drag.filter = function (_) {
          return arguments.length ? (filter = typeof _ === "function" ? _ : constant$8(!!_), drag) : filter;
        };
        drag.container = function (_) {
          return arguments.length ? (container = typeof _ === "function" ? _ : constant$8(_), drag) : container;
        };
        drag.subject = function (_) {
          return arguments.length ? (subject = typeof _ === "function" ? _ : constant$8(_), drag) : subject;
        };
        drag.on = function () {
          var value = listeners.on.apply(listeners, arguments);
          return value === listeners ? drag : value;
        };
        return drag;
      };
      var constant$9 = function (x) {
        return function () {
          return x;
        };
      };
      function x$4(d) {
        return d[0];
      }
      function y$4(d) {
        return d[1];
      }
      function RedBlackTree() {
        this._ = null;
      }
      function RedBlackNode(node) {
        node.U = node.C = node.L = node.R = node.P = node.N = null;
      }
      RedBlackTree.prototype = {
        constructor: RedBlackTree,
        insert: function (after, node) {
          var parent, grandpa, uncle;
          if (after) {
            node.P = after;
            node.N = after.N;
            if (after.N) after.N.P = node;
            after.N = node;
            if (after.R) {
              after = after.R;
              while (after.L) after = after.L;
              after.L = node;
            } else {
              after.R = node;
            }
            parent = after;
          } else if (this._) {
            after = RedBlackFirst(this._);
            node.P = null;
            node.N = after;
            after.P = after.L = node;
            parent = after;
          } else {
            node.P = node.N = null;
            this._ = node;
            parent = null;
          }
          node.L = node.R = null;
          node.U = parent;
          node.C = true;
          after = node;
          while (parent && parent.C) {
            grandpa = parent.U;
            if (parent === grandpa.L) {
              uncle = grandpa.R;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.R) {
                  RedBlackRotateLeft(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                RedBlackRotateRight(this, grandpa);
              }
            } else {
              uncle = grandpa.L;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.L) {
                  RedBlackRotateRight(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                RedBlackRotateLeft(this, grandpa);
              }
            }
            parent = after.U;
          }
          this._.C = false;
        },
        remove: function (node) {
          if (node.N) node.N.P = node.P;
          if (node.P) node.P.N = node.N;
          node.N = node.P = null;
          var parent = node.U,
              sibling,
              left = node.L,
              right = node.R,
              next,
              red;
          if (!left) next = right;else if (!right) next = left;else next = RedBlackFirst(right);
          if (parent) {
            if (parent.L === node) parent.L = next;else parent.R = next;
          } else {
            this._ = next;
          }
          if (left && right) {
            red = next.C;
            next.C = node.C;
            next.L = left;
            left.U = next;
            if (next !== right) {
              parent = next.U;
              next.U = node.U;
              node = next.R;
              parent.L = node;
              next.R = right;
              right.U = next;
            } else {
              next.U = parent;
              parent = next;
              node = next.R;
            }
          } else {
            red = node.C;
            node = next;
          }
          if (node) node.U = parent;
          if (red) return;
          if (node && node.C) {
            node.C = false;
            return;
          }
          do {
            if (node === this._) break;
            if (node === parent.L) {
              sibling = parent.R;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                RedBlackRotateLeft(this, parent);
                sibling = parent.R;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.R || !sibling.R.C) {
                  sibling.L.C = false;
                  sibling.C = true;
                  RedBlackRotateRight(this, sibling);
                  sibling = parent.R;
                }
                sibling.C = parent.C;
                parent.C = sibling.R.C = false;
                RedBlackRotateLeft(this, parent);
                node = this._;
                break;
              }
            } else {
              sibling = parent.L;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                RedBlackRotateRight(this, parent);
                sibling = parent.L;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.L || !sibling.L.C) {
                  sibling.R.C = false;
                  sibling.C = true;
                  RedBlackRotateLeft(this, sibling);
                  sibling = parent.L;
                }
                sibling.C = parent.C;
                parent.C = sibling.L.C = false;
                RedBlackRotateRight(this, parent);
                node = this._;
                break;
              }
            }
            sibling.C = true;
            node = parent;
            parent = parent.U;
          } while (!node.C);
          if (node) node.C = false;
        }
      };
      function RedBlackRotateLeft(tree, node) {
        var p = node,
            q = node.R,
            parent = p.U;
        if (parent) {
          if (parent.L === p) parent.L = q;else parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.R = q.L;
        if (p.R) p.R.U = p;
        q.L = p;
      }
      function RedBlackRotateRight(tree, node) {
        var p = node,
            q = node.L,
            parent = p.U;
        if (parent) {
          if (parent.L === p) parent.L = q;else parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.L = q.R;
        if (p.L) p.L.U = p;
        q.R = p;
      }
      function RedBlackFirst(node) {
        while (node.L) node = node.L;
        return node;
      }
      function createEdge(left, right, v0, v1) {
        var edge = [null, null],
            index = edges.push(edge) - 1;
        edge.left = left;
        edge.right = right;
        if (v0) setEdgeEnd(edge, left, right, v0);
        if (v1) setEdgeEnd(edge, right, left, v1);
        cells[left.index].halfedges.push(index);
        cells[right.index].halfedges.push(index);
        return edge;
      }
      function createBorderEdge(left, v0, v1) {
        var edge = [v0, v1];
        edge.left = left;
        return edge;
      }
      function setEdgeEnd(edge, left, right, vertex) {
        if (!edge[0] && !edge[1]) {
          edge[0] = vertex;
          edge.left = left;
          edge.right = right;
        } else if (edge.left === right) {
          edge[1] = vertex;
        } else {
          edge[0] = vertex;
        }
      }
      function clipEdge(edge, x0, y0, x1, y1) {
        var a = edge[0],
            b = edge[1],
            ax = a[0],
            ay = a[1],
            bx = b[0],
            by = b[1],
            t0 = 0,
            t1 = 1,
            dx = bx - ax,
            dy = by - ay,
            r;
        r = x0 - ax;
        if (!dx && r > 0) return;
        r /= dx;
        if (dx < 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        } else if (dx > 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        }
        r = x1 - ax;
        if (!dx && r < 0) return;
        r /= dx;
        if (dx < 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        } else if (dx > 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        }
        r = y0 - ay;
        if (!dy && r > 0) return;
        r /= dy;
        if (dy < 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        } else if (dy > 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        }
        r = y1 - ay;
        if (!dy && r < 0) return;
        r /= dy;
        if (dy < 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        } else if (dy > 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        }
        if (!(t0 > 0) && !(t1 < 1)) return true;
        if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
        if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
        return true;
      }
      function connectEdge(edge, x0, y0, x1, y1) {
        var v1 = edge[1];
        if (v1) return true;
        var v0 = edge[0],
            left = edge.left,
            right = edge.right,
            lx = left[0],
            ly = left[1],
            rx = right[0],
            ry = right[1],
            fx = (lx + rx) / 2,
            fy = (ly + ry) / 2,
            fm,
            fb;
        if (ry === ly) {
          if (fx < x0 || fx >= x1) return;
          if (lx > rx) {
            if (!v0) v0 = [fx, y0];else if (v0[1] >= y1) return;
            v1 = [fx, y1];
          } else {
            if (!v0) v0 = [fx, y1];else if (v0[1] < y0) return;
            v1 = [fx, y0];
          }
        } else {
          fm = (lx - rx) / (ry - ly);
          fb = fy - fm * fx;
          if (fm < -1 || fm > 1) {
            if (lx > rx) {
              if (!v0) v0 = [(y0 - fb) / fm, y0];else if (v0[1] >= y1) return;
              v1 = [(y1 - fb) / fm, y1];
            } else {
              if (!v0) v0 = [(y1 - fb) / fm, y1];else if (v0[1] < y0) return;
              v1 = [(y0 - fb) / fm, y0];
            }
          } else {
            if (ly < ry) {
              if (!v0) v0 = [x0, fm * x0 + fb];else if (v0[0] >= x1) return;
              v1 = [x1, fm * x1 + fb];
            } else {
              if (!v0) v0 = [x1, fm * x1 + fb];else if (v0[0] < x0) return;
              v1 = [x0, fm * x0 + fb];
            }
          }
        }
        edge[0] = v0;
        edge[1] = v1;
        return true;
      }
      function clipEdges(x0, y0, x1, y1) {
        var i = edges.length,
            edge;
        while (i--) {
          if (!connectEdge(edge = edges[i], x0, y0, x1, y1) || !clipEdge(edge, x0, y0, x1, y1) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon$3 || Math.abs(edge[0][1] - edge[1][1]) > epsilon$3)) {
            delete edges[i];
          }
        }
      }
      function createCell(site) {
        return cells[site.index] = {
          site: site,
          halfedges: []
        };
      }
      function cellHalfedgeAngle(cell, edge) {
        var site = cell.site,
            va = edge.left,
            vb = edge.right;
        if (site === vb) vb = va, va = site;
        if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
        if (site === va) va = edge[1], vb = edge[0];else va = edge[0], vb = edge[1];
        return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
      }
      function cellHalfedgeStart(cell, edge) {
        return edge[+(edge.left !== cell.site)];
      }
      function cellHalfedgeEnd(cell, edge) {
        return edge[+(edge.left === cell.site)];
      }
      function sortCellHalfedges() {
        for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
          if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
            var index = new Array(m),
                array = new Array(m);
            for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
            index.sort(function (i, j) {
              return array[j] - array[i];
            });
            for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
            for (j = 0; j < m; ++j) halfedges[j] = array[j];
          }
        }
      }
      function clipCells(x0, y0, x1, y1) {
        var nCells = cells.length,
            iCell,
            cell,
            site,
            iHalfedge,
            halfedges,
            nHalfedges,
            start,
            startX,
            startY,
            end,
            endX,
            endY,
            cover = true;
        for (iCell = 0; iCell < nCells; ++iCell) {
          if (cell = cells[iCell]) {
            site = cell.site;
            halfedges = cell.halfedges;
            iHalfedge = halfedges.length;
            while (iHalfedge--) {
              if (!edges[halfedges[iHalfedge]]) {
                halfedges.splice(iHalfedge, 1);
              }
            }
            iHalfedge = 0, nHalfedges = halfedges.length;
            while (iHalfedge < nHalfedges) {
              end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
              start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
              if (Math.abs(endX - startX) > epsilon$3 || Math.abs(endY - startY) > epsilon$3) {
                halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end, Math.abs(endX - x0) < epsilon$3 && y1 - endY > epsilon$3 ? [x0, Math.abs(startX - x0) < epsilon$3 ? startY : y1] : Math.abs(endY - y1) < epsilon$3 && x1 - endX > epsilon$3 ? [Math.abs(startY - y1) < epsilon$3 ? startX : x1, y1] : Math.abs(endX - x1) < epsilon$3 && endY - y0 > epsilon$3 ? [x1, Math.abs(startX - x1) < epsilon$3 ? startY : y0] : Math.abs(endY - y0) < epsilon$3 && endX - x0 > epsilon$3 ? [Math.abs(startY - y0) < epsilon$3 ? startX : x0, y0] : null)) - 1);
                ++nHalfedges;
              }
            }
            if (nHalfedges) cover = false;
          }
        }
        if (cover) {
          var dx,
              dy,
              d2,
              dc = Infinity;
          for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
            if (cell = cells[iCell]) {
              site = cell.site;
              dx = site[0] - x0;
              dy = site[1] - y0;
              d2 = dx * dx + dy * dy;
              if (d2 < dc) dc = d2, cover = cell;
            }
          }
          if (cover) {
            var v00 = [x0, y0],
                v01 = [x0, y1],
                v11 = [x1, y1],
                v10 = [x1, y0];
            cover.halfedges.push(edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1, edges.push(createBorderEdge(site, v01, v11)) - 1, edges.push(createBorderEdge(site, v11, v10)) - 1, edges.push(createBorderEdge(site, v10, v00)) - 1);
          }
        }
        for (iCell = 0; iCell < nCells; ++iCell) {
          if (cell = cells[iCell]) {
            if (!cell.halfedges.length) {
              delete cells[iCell];
            }
          }
        }
      }
      var circlePool = [];
      var firstCircle;
      function Circle() {
        RedBlackNode(this);
        this.x = this.y = this.arc = this.site = this.cy = null;
      }
      function attachCircle(arc) {
        var lArc = arc.P,
            rArc = arc.N;
        if (!lArc || !rArc) return;
        var lSite = lArc.site,
            cSite = arc.site,
            rSite = rArc.site;
        if (lSite === rSite) return;
        var bx = cSite[0],
            by = cSite[1],
            ax = lSite[0] - bx,
            ay = lSite[1] - by,
            cx = rSite[0] - bx,
            cy = rSite[1] - by;
        var d = 2 * (ax * cy - ay * cx);
        if (d >= -epsilon2$1) return;
        var ha = ax * ax + ay * ay,
            hc = cx * cx + cy * cy,
            x = (cy * ha - ay * hc) / d,
            y = (ax * hc - cx * ha) / d;
        var circle = circlePool.pop() || new Circle();
        circle.arc = arc;
        circle.site = cSite;
        circle.x = x + bx;
        circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y);
        arc.circle = circle;
        var before = null,
            node = circles._;
        while (node) {
          if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
            if (node.L) node = node.L;else {
              before = node.P;
              break;
            }
          } else {
            if (node.R) node = node.R;else {
              before = node;
              break;
            }
          }
        }
        circles.insert(before, circle);
        if (!before) firstCircle = circle;
      }
      function detachCircle(arc) {
        var circle = arc.circle;
        if (circle) {
          if (!circle.P) firstCircle = circle.N;
          circles.remove(circle);
          circlePool.push(circle);
          RedBlackNode(circle);
          arc.circle = null;
        }
      }
      var beachPool = [];
      function Beach() {
        RedBlackNode(this);
        this.edge = this.site = this.circle = null;
      }
      function createBeach(site) {
        var beach = beachPool.pop() || new Beach();
        beach.site = site;
        return beach;
      }
      function detachBeach(beach) {
        detachCircle(beach);
        beaches.remove(beach);
        beachPool.push(beach);
        RedBlackNode(beach);
      }
      function removeBeach(beach) {
        var circle = beach.circle,
            x = circle.x,
            y = circle.cy,
            vertex = [x, y],
            previous = beach.P,
            next = beach.N,
            disappearing = [beach];
        detachBeach(beach);
        var lArc = previous;
        while (lArc.circle && Math.abs(x - lArc.circle.x) < epsilon$3 && Math.abs(y - lArc.circle.cy) < epsilon$3) {
          previous = lArc.P;
          disappearing.unshift(lArc);
          detachBeach(lArc);
          lArc = previous;
        }
        disappearing.unshift(lArc);
        detachCircle(lArc);
        var rArc = next;
        while (rArc.circle && Math.abs(x - rArc.circle.x) < epsilon$3 && Math.abs(y - rArc.circle.cy) < epsilon$3) {
          next = rArc.N;
          disappearing.push(rArc);
          detachBeach(rArc);
          rArc = next;
        }
        disappearing.push(rArc);
        detachCircle(rArc);
        var nArcs = disappearing.length,
            iArc;
        for (iArc = 1; iArc < nArcs; ++iArc) {
          rArc = disappearing[iArc];
          lArc = disappearing[iArc - 1];
          setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
        }
        lArc = disappearing[0];
        rArc = disappearing[nArcs - 1];
        rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
        attachCircle(lArc);
        attachCircle(rArc);
      }
      function addBeach(site) {
        var x = site[0],
            directrix = site[1],
            lArc,
            rArc,
            dxl,
            dxr,
            node = beaches._;
        while (node) {
          dxl = leftBreakPoint(node, directrix) - x;
          if (dxl > epsilon$3) node = node.L;else {
            dxr = x - rightBreakPoint(node, directrix);
            if (dxr > epsilon$3) {
              if (!node.R) {
                lArc = node;
                break;
              }
              node = node.R;
            } else {
              if (dxl > -epsilon$3) {
                lArc = node.P;
                rArc = node;
              } else if (dxr > -epsilon$3) {
                lArc = node;
                rArc = node.N;
              } else {
                lArc = rArc = node;
              }
              break;
            }
          }
        }
        createCell(site);
        var newArc = createBeach(site);
        beaches.insert(lArc, newArc);
        if (!lArc && !rArc) return;
        if (lArc === rArc) {
          detachCircle(lArc);
          rArc = createBeach(lArc.site);
          beaches.insert(newArc, rArc);
          newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
          attachCircle(lArc);
          attachCircle(rArc);
          return;
        }
        if (!rArc) {
          newArc.edge = createEdge(lArc.site, newArc.site);
          return;
        }
        detachCircle(lArc);
        detachCircle(rArc);
        var lSite = lArc.site,
            ax = lSite[0],
            ay = lSite[1],
            bx = site[0] - ax,
            by = site[1] - ay,
            rSite = rArc.site,
            cx = rSite[0] - ax,
            cy = rSite[1] - ay,
            d = 2 * (bx * cy - by * cx),
            hb = bx * bx + by * by,
            hc = cx * cx + cy * cy,
            vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
        setEdgeEnd(rArc.edge, lSite, rSite, vertex);
        newArc.edge = createEdge(lSite, site, null, vertex);
        rArc.edge = createEdge(site, rSite, null, vertex);
        attachCircle(lArc);
        attachCircle(rArc);
      }
      function leftBreakPoint(arc, directrix) {
        var site = arc.site,
            rfocx = site[0],
            rfocy = site[1],
            pby2 = rfocy - directrix;
        if (!pby2) return rfocx;
        var lArc = arc.P;
        if (!lArc) return -Infinity;
        site = lArc.site;
        var lfocx = site[0],
            lfocy = site[1],
            plby2 = lfocy - directrix;
        if (!plby2) return lfocx;
        var hl = lfocx - rfocx,
            aby2 = 1 / pby2 - 1 / plby2,
            b = hl / plby2;
        if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
        return (rfocx + lfocx) / 2;
      }
      function rightBreakPoint(arc, directrix) {
        var rArc = arc.N;
        if (rArc) return leftBreakPoint(rArc, directrix);
        var site = arc.site;
        return site[1] === directrix ? site[0] : Infinity;
      }
      var epsilon$3 = 1e-6;
      var epsilon2$1 = 1e-12;
      var beaches;
      var cells;
      var circles;
      var edges;
      function triangleArea(a, b, c) {
        return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
      }
      function lexicographic(a, b) {
        return b[1] - a[1] || b[0] - a[0];
      }
      function Diagram(sites, extent) {
        var site = sites.sort(lexicographic).pop(),
            x,
            y,
            circle;
        edges = [];
        cells = new Array(sites.length);
        beaches = new RedBlackTree();
        circles = new RedBlackTree();
        while (true) {
          circle = firstCircle;
          if (site && (!circle || site[1] < circle.y || site[1] === circle.y && site[0] < circle.x)) {
            if (site[0] !== x || site[1] !== y) {
              addBeach(site);
              x = site[0], y = site[1];
            }
            site = sites.pop();
          } else if (circle) {
            removeBeach(circle.arc);
          } else {
            break;
          }
        }
        sortCellHalfedges();
        if (extent) {
          var x0 = +extent[0][0],
              y0 = +extent[0][1],
              x1 = +extent[1][0],
              y1 = +extent[1][1];
          clipEdges(x0, y0, x1, y1);
          clipCells(x0, y0, x1, y1);
        }
        this.edges = edges;
        this.cells = cells;
        beaches = circles = edges = cells = null;
      }
      Diagram.prototype = {
        constructor: Diagram,
        polygons: function () {
          var edges = this.edges;
          return this.cells.map(function (cell) {
            var polygon = cell.halfedges.map(function (i) {
              return cellHalfedgeStart(cell, edges[i]);
            });
            polygon.data = cell.site.data;
            return polygon;
          });
        },
        triangles: function () {
          var triangles = [],
              edges = this.edges;
          this.cells.forEach(function (cell, i) {
            var site = cell.site,
                halfedges = cell.halfedges,
                j = -1,
                m = halfedges.length,
                s0,
                e1 = edges[halfedges[m - 1]],
                s1 = e1.left === site ? e1.right : e1.left;
            while (++j < m) {
              s0 = s1;
              e1 = edges[halfedges[j]];
              s1 = e1.left === site ? e1.right : e1.left;
              if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
                triangles.push([site.data, s0.data, s1.data]);
              }
            }
          });
          return triangles;
        },
        links: function () {
          return this.edges.filter(function (edge) {
            return edge.right;
          }).map(function (edge) {
            return {
              source: edge.left.data,
              target: edge.right.data
            };
          });
        },
        find: function (x, y, radius) {
          var that = this,
              i0,
              i1 = that._found || 0,
              cell = that.cells[i1] || that.cells[i1 = 0],
              dx = x - cell.site[0],
              dy = y - cell.site[1],
              d2 = dx * dx + dy * dy;
          do {
            cell = that.cells[i0 = i1], i1 = null;
            cell.halfedges.forEach(function (e) {
              var edge = that.edges[e],
                  v = edge.left;
              if ((v === cell.site || !v) && !(v = edge.right)) return;
              var vx = x - v[0],
                  vy = y - v[1],
                  v2 = vx * vx + vy * vy;
              if (v2 < d2) d2 = v2, i1 = v.index;
            });
          } while (i1 !== null);
          that._found = i0;
          return radius == null || d2 <= radius * radius ? cell.site : null;
        }
      };
      var voronoi = function () {
        var x$$1 = x$4,
            y$$1 = y$4,
            extent = null;
        function voronoi(data) {
          return new Diagram(data.map(function (d, i) {
            var s = [Math.round(x$$1(d, i, data) / epsilon$3) * epsilon$3, Math.round(y$$1(d, i, data) / epsilon$3) * epsilon$3];
            s.index = i;
            s.data = d;
            return s;
          }), extent);
        }
        voronoi.polygons = function (data) {
          return voronoi(data).polygons();
        };
        voronoi.links = function (data) {
          return voronoi(data).links();
        };
        voronoi.triangles = function (data) {
          return voronoi(data).triangles();
        };
        voronoi.x = function (_) {
          return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$9(+_), voronoi) : x$$1;
        };
        voronoi.y = function (_) {
          return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$9(+_), voronoi) : y$$1;
        };
        voronoi.extent = function (_) {
          return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
        };
        voronoi.size = function (_) {
          return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
        };
        return voronoi;
      };
      var constant$10 = function (x) {
        return function () {
          return x;
        };
      };
      function ZoomEvent(target, type, transform) {
        this.target = target;
        this.type = type;
        this.transform = transform;
      }
      function Transform(k, x, y) {
        this.k = k;
        this.x = x;
        this.y = y;
      }
      Transform.prototype = {
        constructor: Transform,
        scale: function (k) {
          return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
        },
        translate: function (x, y) {
          return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
        },
        apply: function (point) {
          return [point[0] * this.k + this.x, point[1] * this.k + this.y];
        },
        applyX: function (x) {
          return x * this.k + this.x;
        },
        applyY: function (y) {
          return y * this.k + this.y;
        },
        invert: function (location) {
          return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
        },
        invertX: function (x) {
          return (x - this.x) / this.k;
        },
        invertY: function (y) {
          return (y - this.y) / this.k;
        },
        rescaleX: function (x) {
          return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
        },
        rescaleY: function (y) {
          return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
        },
        toString: function () {
          return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
        }
      };
      var identity$6 = new Transform(1, 0, 0);
      transform.prototype = Transform.prototype;
      function transform(node) {
        return node.__zoom || identity$6;
      }
      function nopropagation$1() {
        exports.event.stopImmediatePropagation();
      }
      var noevent$1 = function () {
        exports.event.preventDefault();
        exports.event.stopImmediatePropagation();
      };
      function defaultFilter$1() {
        return !exports.event.button;
      }
      function defaultExtent() {
        var e = this,
            w,
            h;
        if (e instanceof SVGElement) {
          e = e.ownerSVGElement || e;
          w = e.width.baseVal.value;
          h = e.height.baseVal.value;
        } else {
          w = e.clientWidth;
          h = e.clientHeight;
        }
        return [[0, 0], [w, h]];
      }
      function defaultTransform() {
        return this.__zoom || identity$6;
      }
      var zoom = function () {
        var filter = defaultFilter$1,
            extent = defaultExtent,
            k0 = 0,
            k1 = Infinity,
            x0 = -k1,
            x1 = k1,
            y0 = x0,
            y1 = x1,
            duration = 250,
            interpolate$$1 = interpolateZoom,
            gestures = [],
            listeners = dispatch("start", "zoom", "end"),
            touchstarting,
            touchending,
            touchDelay = 500,
            wheelDelay = 150;
        function zoom(selection$$1) {
          selection$$1.on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", defaultTransform);
        }
        zoom.transform = function (collection, transform) {
          var selection$$1 = collection.selection ? collection.selection() : collection;
          selection$$1.property("__zoom", defaultTransform);
          if (collection !== selection$$1) {
            schedule(collection, transform);
          } else {
            selection$$1.interrupt().each(function () {
              gesture(this, arguments).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
            });
          }
        };
        zoom.scaleBy = function (selection$$1, k) {
          zoom.scaleTo(selection$$1, function () {
            var k0 = this.__zoom.k,
                k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
          });
        };
        zoom.scaleTo = function (selection$$1, k) {
          zoom.transform(selection$$1, function () {
            var e = extent.apply(this, arguments),
                t0 = this.__zoom,
                p0 = centroid(e),
                p1 = t0.invert(p0),
                k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e);
          });
        };
        zoom.translateBy = function (selection$$1, x, y) {
          zoom.transform(selection$$1, function () {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments));
          });
        };
        function scale(transform, k) {
          k = Math.max(k0, Math.min(k1, k));
          return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
        }
        function translate(transform, p0, p1) {
          var x = p0[0] - p1[0] * transform.k,
              y = p0[1] - p1[1] * transform.k;
          return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
        }
        function constrain(transform, extent) {
          var dx0 = transform.invertX(extent[0][0]) - x0,
              dx1 = transform.invertX(extent[1][0]) - x1,
              dy0 = transform.invertY(extent[0][1]) - y0,
              dy1 = transform.invertY(extent[1][1]) - y1;
          return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
        }
        function centroid(extent) {
          return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
        }
        function schedule(transition$$1, transform, center) {
          transition$$1.on("start.zoom", function () {
            gesture(this, arguments).start();
          }).on("interrupt.zoom end.zoom", function () {
            gesture(this, arguments).end();
          }).tween("zoom", function () {
            var that = this,
                args = arguments,
                g = gesture(that, args),
                e = extent.apply(that, args),
                p = center || centroid(e),
                w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
                a = that.__zoom,
                b = typeof transform === "function" ? transform.apply(that, args) : transform,
                i = interpolate$$1(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function (t) {
              if (t === 1) t = b;else {
                var l = i(t),
                    k = w / l[2];
                t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
              }
              g.zoom(null, t);
            };
          });
        }
        function gesture(that, args) {
          for (var i = 0, n = gestures.length, g; i < n; ++i) {
            if ((g = gestures[i]).that === that) {
              return g;
            }
          }
          return new Gesture(that, args);
        }
        function Gesture(that, args) {
          this.that = that;
          this.args = args;
          this.index = -1;
          this.active = 0;
          this.extent = extent.apply(that, args);
        }
        Gesture.prototype = {
          start: function () {
            if (++this.active === 1) {
              this.index = gestures.push(this) - 1;
              this.emit("start");
            }
            return this;
          },
          zoom: function (key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
          },
          end: function () {
            if (--this.active === 0) {
              gestures.splice(this.index, 1);
              this.index = -1;
              this.emit("end");
            }
            return this;
          },
          emit: function (type) {
            customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
          }
        };
        function wheeled() {
          if (!filter.apply(this, arguments)) return;
          var g = gesture(this, arguments),
              t = this.__zoom,
              k = Math.max(k0, Math.min(k1, t.k * Math.pow(2, -exports.event.deltaY * (exports.event.deltaMode ? 120 : 1) / 500))),
              p = mouse(this);
          if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
              g.mouse[1] = t.invert(g.mouse[0] = p);
            }
            clearTimeout(g.wheel);
          } else if (t.k === k) return;else {
            g.mouse = [p, t.invert(p)];
            interrupt(this);
            g.start();
          }
          noevent$1();
          g.wheel = setTimeout(wheelidled, wheelDelay);
          g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent));
          function wheelidled() {
            g.wheel = null;
            g.end();
          }
        }
        function mousedowned() {
          if (touchending || !filter.apply(this, arguments)) return;
          var g = gesture(this, arguments),
              v = select(exports.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
              p = mouse(this);
          dragDisable(exports.event.view);
          nopropagation$1();
          g.mouse = [p, this.__zoom.invert(p)];
          interrupt(this);
          g.start();
          function mousemoved() {
            noevent$1();
            g.moved = true;
            g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent));
          }
          function mouseupped() {
            v.on("mousemove.zoom mouseup.zoom", null);
            yesdrag(exports.event.view, g.moved);
            noevent$1();
            g.end();
          }
        }
        function dblclicked() {
          if (!filter.apply(this, arguments)) return;
          var t0 = this.__zoom,
              p0 = mouse(this),
              p1 = t0.invert(p0),
              k1 = t0.k * (exports.event.shiftKey ? 0.5 : 2),
              t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments));
          noevent$1();
          if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0);else select(this).call(zoom.transform, t1);
        }
        function touchstarted() {
          if (!filter.apply(this, arguments)) return;
          var g = gesture(this, arguments),
              touches$$1 = exports.event.changedTouches,
              n = touches$$1.length,
              i,
              t,
              p;
          nopropagation$1();
          for (i = 0; i < n; ++i) {
            t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
            p = [p, this.__zoom.invert(p), t.identifier];
            if (!g.touch0) g.touch0 = p;else if (!g.touch1) g.touch1 = p;
          }
          if (touchstarting) {
            touchstarting = clearTimeout(touchstarting);
            if (!g.touch1) {
              g.end();
              p = select(this).on("dblclick.zoom");
              if (p) p.apply(this, arguments);
              return;
            }
          }
          if (exports.event.touches.length === n) {
            touchstarting = setTimeout(function () {
              touchstarting = null;
            }, touchDelay);
            interrupt(this);
            g.start();
          }
        }
        function touchmoved() {
          var g = gesture(this, arguments),
              touches$$1 = exports.event.changedTouches,
              n = touches$$1.length,
              i,
              t,
              p,
              l;
          noevent$1();
          if (touchstarting) touchstarting = clearTimeout(touchstarting);
          for (i = 0; i < n; ++i) {
            t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
          }
          t = g.that.__zoom;
          if (g.touch1) {
            var p0 = g.touch0[0],
                l0 = g.touch0[1],
                p1 = g.touch1[0],
                l1 = g.touch1[1],
                dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
                dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
            l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
          } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;
          g.zoom("touch", constrain(translate(t, p, l), g.extent));
        }
        function touchended() {
          var g = gesture(this, arguments),
              touches$$1 = exports.event.changedTouches,
              n = touches$$1.length,
              i,
              t;
          nopropagation$1();
          if (touchending) clearTimeout(touchending);
          touchending = setTimeout(function () {
            touchending = null;
          }, touchDelay);
          for (i = 0; i < n; ++i) {
            t = touches$$1[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
          }
          if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
          if (!g.touch0) g.end();
        }
        zoom.filter = function (_) {
          return arguments.length ? (filter = typeof _ === "function" ? _ : constant$10(!!_), zoom) : filter;
        };
        zoom.extent = function (_) {
          return arguments.length ? (extent = typeof _ === "function" ? _ : constant$10([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
        };
        zoom.scaleExtent = function (_) {
          return arguments.length ? (k0 = +_[0], k1 = +_[1], zoom) : [k0, k1];
        };
        zoom.translateExtent = function (_) {
          return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], zoom) : [[x0, y0], [x1, y1]];
        };
        zoom.duration = function (_) {
          return arguments.length ? (duration = +_, zoom) : duration;
        };
        zoom.interpolate = function (_) {
          return arguments.length ? (interpolate$$1 = _, zoom) : interpolate$$1;
        };
        zoom.on = function () {
          var value = listeners.on.apply(listeners, arguments);
          return value === listeners ? zoom : value;
        };
        return zoom;
      };
      var constant$11 = function (x) {
        return function () {
          return x;
        };
      };
      var BrushEvent = function (target, type, selection) {
        this.target = target;
        this.type = type;
        this.selection = selection;
      };
      function nopropagation$2() {
        exports.event.stopImmediatePropagation();
      }
      var noevent$2 = function () {
        exports.event.preventDefault();
        exports.event.stopImmediatePropagation();
      };
      var MODE_DRAG = { name: "drag" };
      var MODE_SPACE = { name: "space" };
      var MODE_HANDLE = { name: "handle" };
      var MODE_CENTER = { name: "center" };
      var X = {
        name: "x",
        handles: ["e", "w"].map(type$1),
        input: function (x, e) {
          return x && [[x[0], e[0][1]], [x[1], e[1][1]]];
        },
        output: function (xy) {
          return xy && [xy[0][0], xy[1][0]];
        }
      };
      var Y = {
        name: "y",
        handles: ["n", "s"].map(type$1),
        input: function (y, e) {
          return y && [[e[0][0], y[0]], [e[1][0], y[1]]];
        },
        output: function (xy) {
          return xy && [xy[0][1], xy[1][1]];
        }
      };
      var XY = {
        name: "xy",
        handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type$1),
        input: function (xy) {
          return xy;
        },
        output: function (xy) {
          return xy;
        }
      };
      var cursors = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
      };
      var flipX = {
        e: "w",
        w: "e",
        nw: "ne",
        ne: "nw",
        se: "sw",
        sw: "se"
      };
      var flipY = {
        n: "s",
        s: "n",
        nw: "sw",
        ne: "se",
        se: "ne",
        sw: "nw"
      };
      var signsX = {
        overlay: +1,
        selection: +1,
        n: null,
        e: +1,
        s: null,
        w: -1,
        nw: -1,
        ne: +1,
        se: +1,
        sw: -1
      };
      var signsY = {
        overlay: +1,
        selection: +1,
        n: -1,
        e: null,
        s: +1,
        w: null,
        nw: -1,
        ne: -1,
        se: +1,
        sw: +1
      };
      function type$1(t) {
        return { type: t };
      }
      function defaultFilter$2() {
        return !exports.event.button;
      }
      function defaultExtent$1() {
        var svg = this.ownerSVGElement || this;
        return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
      }
      function local$1(node) {
        while (!node.__brush) if (!(node = node.parentNode)) return;
        return node.__brush;
      }
      function empty$1(extent) {
        return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
      }
      function brushSelection(node) {
        var state = node.__brush;
        return state ? state.dim.output(state.selection) : null;
      }
      function brushX() {
        return brush$1(X);
      }
      function brushY() {
        return brush$1(Y);
      }
      var brush = function () {
        return brush$1(XY);
      };
      function brush$1(dim) {
        var extent = defaultExtent$1,
            filter = defaultFilter$2,
            listeners = dispatch(brush, "start", "brush", "end"),
            handleSize = 6,
            touchending;
        function brush(group) {
          var overlay = group.property("__brush", initialize).selectAll(".overlay").data([type$1("overlay")]);
          overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function () {
            var extent = local$1(this).extent;
            select(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
          });
          group.selectAll(".selection").data([type$1("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
          var handle = group.selectAll(".handle").data(dim.handles, function (d) {
            return d.type;
          });
          handle.exit().remove();
          handle.enter().append("rect").attr("class", function (d) {
            return "handle handle--" + d.type;
          }).attr("cursor", function (d) {
            return cursors[d.type];
          });
          group.each(redraw).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", started);
        }
        brush.move = function (group, selection$$1) {
          if (group.selection) {
            group.on("start.brush", function () {
              emitter(this, arguments).beforestart().start();
            }).on("interrupt.brush end.brush", function () {
              emitter(this, arguments).end();
            }).tween("brush", function () {
              var that = this,
                  state = that.__brush,
                  emit = emitter(that, arguments),
                  selection0 = state.selection,
                  selection1 = dim.input(typeof selection$$1 === "function" ? selection$$1.apply(this, arguments) : selection$$1, state.extent),
                  i = interpolate(selection0, selection1);
              function tween(t) {
                state.selection = t === 1 && empty$1(selection1) ? null : i(t);
                redraw.call(that);
                emit.brush();
              }
              return selection0 && selection1 ? tween : tween(1);
            });
          } else {
            group.each(function () {
              var that = this,
                  args = arguments,
                  state = that.__brush,
                  selection1 = dim.input(typeof selection$$1 === "function" ? selection$$1.apply(that, args) : selection$$1, state.extent),
                  emit = emitter(that, args).beforestart();
              interrupt(that);
              state.selection = selection1 == null || empty$1(selection1) ? null : selection1;
              redraw.call(that);
              emit.start().brush().end();
            });
          }
        };
        function redraw() {
          var group = select(this),
              selection$$1 = local$1(this).selection;
          if (selection$$1) {
            group.selectAll(".selection").style("display", null).attr("x", selection$$1[0][0]).attr("y", selection$$1[0][1]).attr("width", selection$$1[1][0] - selection$$1[0][0]).attr("height", selection$$1[1][1] - selection$$1[0][1]);
            group.selectAll(".handle").style("display", null).attr("x", function (d) {
              return d.type[d.type.length - 1] === "e" ? selection$$1[1][0] - handleSize / 2 : selection$$1[0][0] - handleSize / 2;
            }).attr("y", function (d) {
              return d.type[0] === "s" ? selection$$1[1][1] - handleSize / 2 : selection$$1[0][1] - handleSize / 2;
            }).attr("width", function (d) {
              return d.type === "n" || d.type === "s" ? selection$$1[1][0] - selection$$1[0][0] + handleSize : handleSize;
            }).attr("height", function (d) {
              return d.type === "e" || d.type === "w" ? selection$$1[1][1] - selection$$1[0][1] + handleSize : handleSize;
            });
          } else {
            group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
          }
        }
        function emitter(that, args) {
          return that.__brush.emitter || new Emitter(that, args);
        }
        function Emitter(that, args) {
          this.that = that;
          this.args = args;
          this.state = that.__brush;
          this.active = 0;
        }
        Emitter.prototype = {
          beforestart: function () {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
          },
          start: function () {
            if (this.starting) this.starting = false, this.emit("start");
            return this;
          },
          brush: function () {
            this.emit("brush");
            return this;
          },
          end: function () {
            if (--this.active === 0) delete this.state.emitter, this.emit("end");
            return this;
          },
          emit: function (type) {
            customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
          }
        };
        function started() {
          if (exports.event.touches) {
            if (exports.event.changedTouches.length < exports.event.touches.length) return noevent$2();
          } else if (touchending) return;
          if (!filter.apply(this, arguments)) return;
          var that = this,
              type = exports.event.target.__data__.type,
              mode = (exports.event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : exports.event.altKey ? MODE_CENTER : MODE_HANDLE,
              signX = dim === Y ? null : signsX[type],
              signY = dim === X ? null : signsY[type],
              state = local$1(that),
              extent = state.extent,
              selection$$1 = state.selection,
              W = extent[0][0],
              w0,
              w1,
              N = extent[0][1],
              n0,
              n1,
              E = extent[1][0],
              e0,
              e1,
              S = extent[1][1],
              s0,
              s1,
              dx,
              dy,
              moving,
              shifting = signX && signY && exports.event.shiftKey,
              lockX,
              lockY,
              point0 = mouse(that),
              point = point0,
              emit = emitter(that, arguments).beforestart();
          if (type === "overlay") {
            state.selection = selection$$1 = [[w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]], [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]];
          } else {
            w0 = selection$$1[0][0];
            n0 = selection$$1[0][1];
            e0 = selection$$1[1][0];
            s0 = selection$$1[1][1];
          }
          w1 = w0;
          n1 = n0;
          e1 = e0;
          s1 = s0;
          var group = select(that).attr("pointer-events", "none");
          var overlay = group.selectAll(".overlay").attr("cursor", cursors[type]);
          if (exports.event.touches) {
            group.on("touchmove.brush", moved, true).on("touchend.brush touchcancel.brush", ended, true);
          } else {
            var view = select(exports.event.view).on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            dragDisable(exports.event.view);
          }
          nopropagation$2();
          interrupt(that);
          redraw.call(that);
          emit.start();
          function moved() {
            var point1 = mouse(that);
            if (shifting && !lockX && !lockY) {
              if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;else lockX = true;
            }
            point = point1;
            moving = true;
            noevent$2();
            move();
          }
          function move() {
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch (mode) {
              case MODE_SPACE:
              case MODE_DRAG:
                {
                  if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                  if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                  break;
                }
              case MODE_HANDLE:
                {
                  if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                  if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                  break;
                }
              case MODE_CENTER:
                {
                  if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
                  if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
                  break;
                }
            }
            if (e1 < w1) {
              signX *= -1;
              t = w0, w0 = e0, e0 = t;
              t = w1, w1 = e1, e1 = t;
              if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
            }
            if (s1 < n1) {
              signY *= -1;
              t = n0, n0 = s0, s0 = t;
              t = n1, n1 = s1, s1 = t;
              if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
            }
            if (state.selection) selection$$1 = state.selection;
            if (lockX) w1 = selection$$1[0][0], e1 = selection$$1[1][0];
            if (lockY) n1 = selection$$1[0][1], s1 = selection$$1[1][1];
            if (selection$$1[0][0] !== w1 || selection$$1[0][1] !== n1 || selection$$1[1][0] !== e1 || selection$$1[1][1] !== s1) {
              state.selection = [[w1, n1], [e1, s1]];
              redraw.call(that);
              emit.brush();
            }
          }
          function ended() {
            nopropagation$2();
            if (exports.event.touches) {
              if (exports.event.touches.length) return;
              if (touchending) clearTimeout(touchending);
              touchending = setTimeout(function () {
                touchending = null;
              }, 500);
              group.on("touchmove.brush touchend.brush touchcancel.brush", null);
            } else {
              yesdrag(exports.event.view, moving);
              view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", cursors.overlay);
            if (state.selection) selection$$1 = state.selection;
            if (empty$1(selection$$1)) state.selection = null, redraw.call(that);
            emit.end();
          }
          function keydowned() {
            switch (exports.event.keyCode) {
              case 16:
                {
                  shifting = signX && signY;
                  break;
                }
              case 18:
                {
                  if (mode === MODE_HANDLE) {
                    if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                    if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                    mode = MODE_CENTER;
                    move();
                  }
                  break;
                }
              case 32:
                {
                  if (mode === MODE_HANDLE || mode === MODE_CENTER) {
                    if (signX < 0) e0 = e1 - dx;else if (signX > 0) w0 = w1 - dx;
                    if (signY < 0) s0 = s1 - dy;else if (signY > 0) n0 = n1 - dy;
                    mode = MODE_SPACE;
                    overlay.attr("cursor", cursors.selection);
                    move();
                  }
                  break;
                }
              default:
                return;
            }
            noevent$2();
          }
          function keyupped() {
            switch (exports.event.keyCode) {
              case 16:
                {
                  if (shifting) {
                    lockX = lockY = shifting = false;
                    move();
                  }
                  break;
                }
              case 18:
                {
                  if (mode === MODE_CENTER) {
                    if (signX < 0) e0 = e1;else if (signX > 0) w0 = w1;
                    if (signY < 0) s0 = s1;else if (signY > 0) n0 = n1;
                    mode = MODE_HANDLE;
                    move();
                  }
                  break;
                }
              case 32:
                {
                  if (mode === MODE_SPACE) {
                    if (exports.event.altKey) {
                      if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                      if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                      mode = MODE_CENTER;
                    } else {
                      if (signX < 0) e0 = e1;else if (signX > 0) w0 = w1;
                      if (signY < 0) s0 = s1;else if (signY > 0) n0 = n1;
                      mode = MODE_HANDLE;
                    }
                    overlay.attr("cursor", cursors[type]);
                    move();
                  }
                  break;
                }
              default:
                return;
            }
            noevent$2();
          }
        }
        function initialize() {
          var state = this.__brush || { selection: null };
          state.extent = extent.apply(this, arguments);
          state.dim = dim;
          return state;
        }
        brush.extent = function (_) {
          return arguments.length ? (extent = typeof _ === "function" ? _ : constant$11([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
        };
        brush.filter = function (_) {
          return arguments.length ? (filter = typeof _ === "function" ? _ : constant$11(!!_), brush) : filter;
        };
        brush.handleSize = function (_) {
          return arguments.length ? (handleSize = +_, brush) : handleSize;
        };
        brush.on = function () {
          var value = listeners.on.apply(listeners, arguments);
          return value === listeners ? brush : value;
        };
        return brush;
      }
      var cos = Math.cos;
      var sin = Math.sin;
      var pi$3 = Math.PI;
      var halfPi$2 = pi$3 / 2;
      var tau$3 = pi$3 * 2;
      var max$1 = Math.max;
      function compareValue(compare) {
        return function (a, b) {
          return compare(a.source.value + a.target.value, b.source.value + b.target.value);
        };
      }
      var chord = function () {
        var padAngle = 0,
            sortGroups = null,
            sortSubgroups = null,
            sortChords = null;
        function chord(matrix) {
          var n = matrix.length,
              groupSums = [],
              groupIndex = range(n),
              subgroupIndex = [],
              chords = [],
              groups = chords.groups = new Array(n),
              subgroups = new Array(n * n),
              k,
              x,
              x0,
              dx,
              i,
              j;
          k = 0, i = -1;
          while (++i < n) {
            x = 0, j = -1;
            while (++j < n) {
              x += matrix[i][j];
            }
            groupSums.push(x);
            subgroupIndex.push(range(n));
            k += x;
          }
          if (sortGroups) groupIndex.sort(function (a, b) {
            return sortGroups(groupSums[a], groupSums[b]);
          });
          if (sortSubgroups) subgroupIndex.forEach(function (d, i) {
            d.sort(function (a, b) {
              return sortSubgroups(matrix[i][a], matrix[i][b]);
            });
          });
          k = max$1(0, tau$3 - padAngle * n) / k;
          dx = k ? padAngle : tau$3 / n;
          x = 0, i = -1;
          while (++i < n) {
            x0 = x, j = -1;
            while (++j < n) {
              var di = groupIndex[i],
                  dj = subgroupIndex[di][j],
                  v = matrix[di][dj],
                  a0 = x,
                  a1 = x += v * k;
              subgroups[dj * n + di] = {
                index: di,
                subindex: dj,
                startAngle: a0,
                endAngle: a1,
                value: v
              };
            }
            groups[di] = {
              index: di,
              startAngle: x0,
              endAngle: x,
              value: groupSums[di]
            };
            x += dx;
          }
          i = -1;
          while (++i < n) {
            j = i - 1;
            while (++j < n) {
              var source = subgroups[j * n + i],
                  target = subgroups[i * n + j];
              if (source.value || target.value) {
                chords.push(source.value < target.value ? {
                  source: target,
                  target: source
                } : {
                  source: source,
                  target: target
                });
              }
            }
          }
          return sortChords ? chords.sort(sortChords) : chords;
        }
        chord.padAngle = function (_) {
          return arguments.length ? (padAngle = max$1(0, _), chord) : padAngle;
        };
        chord.sortGroups = function (_) {
          return arguments.length ? (sortGroups = _, chord) : sortGroups;
        };
        chord.sortSubgroups = function (_) {
          return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
        };
        chord.sortChords = function (_) {
          return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
        };
        return chord;
      };
      var slice$5 = Array.prototype.slice;
      var constant$12 = function (x) {
        return function () {
          return x;
        };
      };
      function defaultSource(d) {
        return d.source;
      }
      function defaultTarget(d) {
        return d.target;
      }
      function defaultRadius$1(d) {
        return d.radius;
      }
      function defaultStartAngle(d) {
        return d.startAngle;
      }
      function defaultEndAngle(d) {
        return d.endAngle;
      }
      var ribbon = function () {
        var source = defaultSource,
            target = defaultTarget,
            radius = defaultRadius$1,
            startAngle = defaultStartAngle,
            endAngle = defaultEndAngle,
            context = null;
        function ribbon() {
          var buffer,
              argv = slice$5.call(arguments),
              s = source.apply(this, argv),
              t = target.apply(this, argv),
              sr = +radius.apply(this, (argv[0] = s, argv)),
              sa0 = startAngle.apply(this, argv) - halfPi$2,
              sa1 = endAngle.apply(this, argv) - halfPi$2,
              sx0 = sr * cos(sa0),
              sy0 = sr * sin(sa0),
              tr = +radius.apply(this, (argv[0] = t, argv)),
              ta0 = startAngle.apply(this, argv) - halfPi$2,
              ta1 = endAngle.apply(this, argv) - halfPi$2;
          if (!context) context = buffer = path();
          context.moveTo(sx0, sy0);
          context.arc(0, 0, sr, sa0, sa1);
          if (sa0 !== ta0 || sa1 !== ta1) {
            context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
            context.arc(0, 0, tr, ta0, ta1);
          }
          context.quadraticCurveTo(0, 0, sx0, sy0);
          context.closePath();
          if (buffer) return context = null, buffer + "" || null;
        }
        ribbon.radius = function (_) {
          return arguments.length ? (radius = typeof _ === "function" ? _ : constant$12(+_), ribbon) : radius;
        };
        ribbon.startAngle = function (_) {
          return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$12(+_), ribbon) : startAngle;
        };
        ribbon.endAngle = function (_) {
          return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$12(+_), ribbon) : endAngle;
        };
        ribbon.source = function (_) {
          return arguments.length ? (source = _, ribbon) : source;
        };
        ribbon.target = function (_) {
          return arguments.length ? (target = _, ribbon) : target;
        };
        ribbon.context = function (_) {
          return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
        };
        return ribbon;
      };
      var adder = function () {
        return new Adder();
      };
      function Adder() {
        this.reset();
      }
      Adder.prototype = {
        constructor: Adder,
        reset: function () {
          this.s = this.t = 0;
        },
        add: function (y) {
          add$1(temp, y, this.t);
          add$1(this, temp.s, this.s);
          if (this.s) this.t += temp.t;else this.s = temp.t;
        },
        valueOf: function () {
          return this.s;
        }
      };
      var temp = new Adder();
      function add$1(adder, a, b) {
        var x = adder.s = a + b,
            bv = x - a,
            av = x - bv;
        adder.t = a - av + (b - bv);
      }
      var epsilon$4 = 1e-6;
      var epsilon2$2 = 1e-12;
      var pi$4 = Math.PI;
      var halfPi$3 = pi$4 / 2;
      var quarterPi = pi$4 / 4;
      var tau$4 = pi$4 * 2;
      var degrees$1 = 180 / pi$4;
      var radians = pi$4 / 180;
      var abs = Math.abs;
      var atan = Math.atan;
      var atan2 = Math.atan2;
      var cos$1 = Math.cos;
      var ceil = Math.ceil;
      var exp = Math.exp;
      var log$1 = Math.log;
      var pow$1 = Math.pow;
      var sin$1 = Math.sin;
      var sign$1 = Math.sign || function (x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
      };
      var sqrt$1 = Math.sqrt;
      var tan = Math.tan;
      function acos(x) {
        return x > 1 ? 0 : x < -1 ? pi$4 : Math.acos(x);
      }
      function asin$1(x) {
        return x > 1 ? halfPi$3 : x < -1 ? -halfPi$3 : Math.asin(x);
      }
      function haversin(x) {
        return (x = sin$1(x / 2)) * x;
      }
      function noop$2() {}
      function streamGeometry(geometry, stream) {
        if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
          streamGeometryType[geometry.type](geometry, stream);
        }
      }
      var streamObjectType = {
        Feature: function (feature, stream) {
          streamGeometry(feature.geometry, stream);
        },
        FeatureCollection: function (object, stream) {
          var features = object.features,
              i = -1,
              n = features.length;
          while (++i < n) streamGeometry(features[i].geometry, stream);
        }
      };
      var streamGeometryType = {
        Sphere: function (object, stream) {
          stream.sphere();
        },
        Point: function (object, stream) {
          object = object.coordinates;
          stream.point(object[0], object[1], object[2]);
        },
        MultiPoint: function (object, stream) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
        },
        LineString: function (object, stream) {
          streamLine(object.coordinates, stream, 0);
        },
        MultiLineString: function (object, stream) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n) streamLine(coordinates[i], stream, 0);
        },
        Polygon: function (object, stream) {
          streamPolygon(object.coordinates, stream);
        },
        MultiPolygon: function (object, stream) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n) streamPolygon(coordinates[i], stream);
        },
        GeometryCollection: function (object, stream) {
          var geometries = object.geometries,
              i = -1,
              n = geometries.length;
          while (++i < n) streamGeometry(geometries[i], stream);
        }
      };
      function streamLine(coordinates, stream, closed) {
        var i = -1,
            n = coordinates.length - closed,
            coordinate;
        stream.lineStart();
        while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
        stream.lineEnd();
      }
      function streamPolygon(coordinates, stream) {
        var i = -1,
            n = coordinates.length;
        stream.polygonStart();
        while (++i < n) streamLine(coordinates[i], stream, 1);
        stream.polygonEnd();
      }
      var geoStream = function (object, stream) {
        if (object && streamObjectType.hasOwnProperty(object.type)) {
          streamObjectType[object.type](object, stream);
        } else {
          streamGeometry(object, stream);
        }
      };
      var areaRingSum = adder();
      var areaSum = adder();
      var lambda00;
      var phi00;
      var lambda0;
      var cosPhi0;
      var sinPhi0;
      var areaStream = {
        point: noop$2,
        lineStart: noop$2,
        lineEnd: noop$2,
        polygonStart: function () {
          areaRingSum.reset();
          areaStream.lineStart = areaRingStart;
          areaStream.lineEnd = areaRingEnd;
        },
        polygonEnd: function () {
          var areaRing = +areaRingSum;
          areaSum.add(areaRing < 0 ? tau$4 + areaRing : areaRing);
          this.lineStart = this.lineEnd = this.point = noop$2;
        },
        sphere: function () {
          areaSum.add(tau$4);
        }
      };
      function areaRingStart() {
        areaStream.point = areaPointFirst;
      }
      function areaRingEnd() {
        areaPoint(lambda00, phi00);
      }
      function areaPointFirst(lambda, phi) {
        areaStream.point = areaPoint;
        lambda00 = lambda, phi00 = phi;
        lambda *= radians, phi *= radians;
        lambda0 = lambda, cosPhi0 = cos$1(phi = phi / 2 + quarterPi), sinPhi0 = sin$1(phi);
      }
      function areaPoint(lambda, phi) {
        lambda *= radians, phi *= radians;
        phi = phi / 2 + quarterPi;
        var dLambda = lambda - lambda0,
            sdLambda = dLambda >= 0 ? 1 : -1,
            adLambda = sdLambda * dLambda,
            cosPhi = cos$1(phi),
            sinPhi = sin$1(phi),
            k = sinPhi0 * sinPhi,
            u = cosPhi0 * cosPhi + k * cos$1(adLambda),
            v = k * sdLambda * sin$1(adLambda);
        areaRingSum.add(atan2(v, u));
        lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
      }
      var area$2 = function (object) {
        areaSum.reset();
        geoStream(object, areaStream);
        return areaSum * 2;
      };
      function spherical(cartesian) {
        return [atan2(cartesian[1], cartesian[0]), asin$1(cartesian[2])];
      }
      function cartesian(spherical) {
        var lambda = spherical[0],
            phi = spherical[1],
            cosPhi = cos$1(phi);
        return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
      }
      function cartesianDot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }
      function cartesianCross(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
      }
      function cartesianAddInPlace(a, b) {
        a[0] += b[0], a[1] += b[1], a[2] += b[2];
      }
      function cartesianScale(vector, k) {
        return [vector[0] * k, vector[1] * k, vector[2] * k];
      }
      function cartesianNormalizeInPlace(d) {
        var l = sqrt$1(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
        d[0] /= l, d[1] /= l, d[2] /= l;
      }
      var lambda0$1;
      var phi0;
      var lambda1;
      var phi1;
      var lambda2;
      var lambda00$1;
      var phi00$1;
      var p0;
      var deltaSum = adder();
      var ranges;
      var range$1;
      var boundsStream = {
        point: boundsPoint,
        lineStart: boundsLineStart,
        lineEnd: boundsLineEnd,
        polygonStart: function () {
          boundsStream.point = boundsRingPoint;
          boundsStream.lineStart = boundsRingStart;
          boundsStream.lineEnd = boundsRingEnd;
          deltaSum.reset();
          areaStream.polygonStart();
        },
        polygonEnd: function () {
          areaStream.polygonEnd();
          boundsStream.point = boundsPoint;
          boundsStream.lineStart = boundsLineStart;
          boundsStream.lineEnd = boundsLineEnd;
          if (areaRingSum < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);else if (deltaSum > epsilon$4) phi1 = 90;else if (deltaSum < -epsilon$4) phi0 = -90;
          range$1[0] = lambda0$1, range$1[1] = lambda1;
        }
      };
      function boundsPoint(lambda, phi) {
        ranges.push(range$1 = [lambda0$1 = lambda, lambda1 = lambda]);
        if (phi < phi0) phi0 = phi;
        if (phi > phi1) phi1 = phi;
      }
      function linePoint(lambda, phi) {
        var p = cartesian([lambda * radians, phi * radians]);
        if (p0) {
          var normal = cartesianCross(p0, p),
              equatorial = [normal[1], -normal[0], 0],
              inflection = cartesianCross(equatorial, normal);
          cartesianNormalizeInPlace(inflection);
          inflection = spherical(inflection);
          var delta = lambda - lambda2,
              sign$$1 = delta > 0 ? 1 : -1,
              lambdai = inflection[0] * degrees$1 * sign$$1,
              phii,
              antimeridian = abs(delta) > 180;
          if (antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
            phii = inflection[1] * degrees$1;
            if (phii > phi1) phi1 = phii;
          } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
            phii = -inflection[1] * degrees$1;
            if (phii < phi0) phi0 = phii;
          } else {
            if (phi < phi0) phi0 = phi;
            if (phi > phi1) phi1 = phi;
          }
          if (antimeridian) {
            if (lambda < lambda2) {
              if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
            } else {
              if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
            }
          } else {
            if (lambda1 >= lambda0$1) {
              if (lambda < lambda0$1) lambda0$1 = lambda;
              if (lambda > lambda1) lambda1 = lambda;
            } else {
              if (lambda > lambda2) {
                if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
              } else {
                if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
              }
            }
          }
        } else {
          boundsPoint(lambda, phi);
        }
        p0 = p, lambda2 = lambda;
      }
      function boundsLineStart() {
        boundsStream.point = linePoint;
      }
      function boundsLineEnd() {
        range$1[0] = lambda0$1, range$1[1] = lambda1;
        boundsStream.point = boundsPoint;
        p0 = null;
      }
      function boundsRingPoint(lambda, phi) {
        if (p0) {
          var delta = lambda - lambda2;
          deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
        } else {
          lambda00$1 = lambda, phi00$1 = phi;
        }
        areaStream.point(lambda, phi);
        linePoint(lambda, phi);
      }
      function boundsRingStart() {
        areaStream.lineStart();
      }
      function boundsRingEnd() {
        boundsRingPoint(lambda00$1, phi00$1);
        areaStream.lineEnd();
        if (abs(deltaSum) > epsilon$4) lambda0$1 = -(lambda1 = 180);
        range$1[0] = lambda0$1, range$1[1] = lambda1;
        p0 = null;
      }
      function angle(lambda0, lambda1) {
        return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
      }
      function rangeCompare(a, b) {
        return a[0] - b[0];
      }
      function rangeContains(range, x) {
        return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
      }
      var bounds = function (feature) {
        var i, n, a, b, merged, deltaMax, delta;
        phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
        ranges = [];
        geoStream(feature, boundsStream);
        if (n = ranges.length) {
          ranges.sort(rangeCompare);
          for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
            b = ranges[i];
            if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
              if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
              if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
            } else {
              merged.push(a = b);
            }
          }
          for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
            b = merged[i];
            if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
          }
        }
        ranges = range$1 = null;
        return lambda0$1 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda0$1, phi0], [lambda1, phi1]];
      };
      var W0;
      var W1;
      var X0;
      var Y0;
      var Z0;
      var X1;
      var Y1;
      var Z1;
      var X2;
      var Y2;
      var Z2;
      var lambda00$2;
      var phi00$2;
      var x0;
      var y0;
      var z0;
      var centroidStream = {
        sphere: noop$2,
        point: centroidPoint,
        lineStart: centroidLineStart,
        lineEnd: centroidLineEnd,
        polygonStart: function () {
          centroidStream.lineStart = centroidRingStart;
          centroidStream.lineEnd = centroidRingEnd;
        },
        polygonEnd: function () {
          centroidStream.lineStart = centroidLineStart;
          centroidStream.lineEnd = centroidLineEnd;
        }
      };
      function centroidPoint(lambda, phi) {
        lambda *= radians, phi *= radians;
        var cosPhi = cos$1(phi);
        centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
      }
      function centroidPointCartesian(x, y, z) {
        ++W0;
        X0 += (x - X0) / W0;
        Y0 += (y - Y0) / W0;
        Z0 += (z - Z0) / W0;
      }
      function centroidLineStart() {
        centroidStream.point = centroidLinePointFirst;
      }
      function centroidLinePointFirst(lambda, phi) {
        lambda *= radians, phi *= radians;
        var cosPhi = cos$1(phi);
        x0 = cosPhi * cos$1(lambda);
        y0 = cosPhi * sin$1(lambda);
        z0 = sin$1(phi);
        centroidStream.point = centroidLinePoint;
        centroidPointCartesian(x0, y0, z0);
      }
      function centroidLinePoint(lambda, phi) {
        lambda *= radians, phi *= radians;
        var cosPhi = cos$1(phi),
            x = cosPhi * cos$1(lambda),
            y = cosPhi * sin$1(lambda),
            z = sin$1(phi),
            w = atan2(sqrt$1((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
        W1 += w;
        X1 += w * (x0 + (x0 = x));
        Y1 += w * (y0 + (y0 = y));
        Z1 += w * (z0 + (z0 = z));
        centroidPointCartesian(x0, y0, z0);
      }
      function centroidLineEnd() {
        centroidStream.point = centroidPoint;
      }
      function centroidRingStart() {
        centroidStream.point = centroidRingPointFirst;
      }
      function centroidRingEnd() {
        centroidRingPoint(lambda00$2, phi00$2);
        centroidStream.point = centroidPoint;
      }
      function centroidRingPointFirst(lambda, phi) {
        lambda00$2 = lambda, phi00$2 = phi;
        lambda *= radians, phi *= radians;
        centroidStream.point = centroidRingPoint;
        var cosPhi = cos$1(phi);
        x0 = cosPhi * cos$1(lambda);
        y0 = cosPhi * sin$1(lambda);
        z0 = sin$1(phi);
        centroidPointCartesian(x0, y0, z0);
      }
      function centroidRingPoint(lambda, phi) {
        lambda *= radians, phi *= radians;
        var cosPhi = cos$1(phi),
            x = cosPhi * cos$1(lambda),
            y = cosPhi * sin$1(lambda),
            z = sin$1(phi),
            cx = y0 * z - z0 * y,
            cy = z0 * x - x0 * z,
            cz = x0 * y - y0 * x,
            m = sqrt$1(cx * cx + cy * cy + cz * cz),
            u = x0 * x + y0 * y + z0 * z,
            v = m && -acos(u) / m,
            w = atan2(m, u);
        X2 += v * cx;
        Y2 += v * cy;
        Z2 += v * cz;
        W1 += w;
        X1 += w * (x0 + (x0 = x));
        Y1 += w * (y0 + (y0 = y));
        Z1 += w * (z0 + (z0 = z));
        centroidPointCartesian(x0, y0, z0);
      }
      var centroid$1 = function (object) {
        W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
        geoStream(object, centroidStream);
        var x = X2,
            y = Y2,
            z = Z2,
            m = x * x + y * y + z * z;
        if (m < epsilon2$2) {
          x = X1, y = Y1, z = Z1;
          if (W1 < epsilon$4) x = X0, y = Y0, z = Z0;
          m = x * x + y * y + z * z;
          if (m < epsilon2$2) return [NaN, NaN];
        }
        return [atan2(y, x) * degrees$1, asin$1(z / sqrt$1(m)) * degrees$1];
      };
      var constant$13 = function (x) {
        return function () {
          return x;
        };
      };
      var compose = function (a, b) {
        function compose(x, y) {
          return x = a(x, y), b(x[0], x[1]);
        }
        if (a.invert && b.invert) compose.invert = function (x, y) {
          return x = b.invert(x, y), x && a.invert(x[0], x[1]);
        };
        return compose;
      };
      function rotationIdentity(lambda, phi) {
        return [lambda > pi$4 ? lambda - tau$4 : lambda < -pi$4 ? lambda + tau$4 : lambda, phi];
      }
      rotationIdentity.invert = rotationIdentity;
      function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
        return (deltaLambda %= tau$4) ? deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
      }
      function forwardRotationLambda(deltaLambda) {
        return function (lambda, phi) {
          return lambda += deltaLambda, [lambda > pi$4 ? lambda - tau$4 : lambda < -pi$4 ? lambda + tau$4 : lambda, phi];
        };
      }
      function rotationLambda(deltaLambda) {
        var rotation = forwardRotationLambda(deltaLambda);
        rotation.invert = forwardRotationLambda(-deltaLambda);
        return rotation;
      }
      function rotationPhiGamma(deltaPhi, deltaGamma) {
        var cosDeltaPhi = cos$1(deltaPhi),
            sinDeltaPhi = sin$1(deltaPhi),
            cosDeltaGamma = cos$1(deltaGamma),
            sinDeltaGamma = sin$1(deltaGamma);
        function rotation(lambda, phi) {
          var cosPhi = cos$1(phi),
              x = cos$1(lambda) * cosPhi,
              y = sin$1(lambda) * cosPhi,
              z = sin$1(phi),
              k = z * cosDeltaPhi + x * sinDeltaPhi;
          return [atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi), asin$1(k * cosDeltaGamma + y * sinDeltaGamma)];
        }
        rotation.invert = function (lambda, phi) {
          var cosPhi = cos$1(phi),
              x = cos$1(lambda) * cosPhi,
              y = sin$1(lambda) * cosPhi,
              z = sin$1(phi),
              k = z * cosDeltaGamma - y * sinDeltaGamma;
          return [atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi), asin$1(k * cosDeltaPhi - x * sinDeltaPhi)];
        };
        return rotation;
      }
      var rotation = function (rotate) {
        rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
        function forward(coordinates) {
          coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
          return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
        }
        forward.invert = function (coordinates) {
          coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
          return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
        };
        return forward;
      };
      function circleStream(stream, radius, delta, direction, t0, t1) {
        if (!delta) return;
        var cosRadius = cos$1(radius),
            sinRadius = sin$1(radius),
            step = direction * delta;
        if (t0 == null) {
          t0 = radius + direction * tau$4;
          t1 = radius - step / 2;
        } else {
          t0 = circleRadius(cosRadius, t0);
          t1 = circleRadius(cosRadius, t1);
          if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$4;
        }
        for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
          point = spherical([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
          stream.point(point[0], point[1]);
        }
      }
      function circleRadius(cosRadius, point) {
        point = cartesian(point), point[0] -= cosRadius;
        cartesianNormalizeInPlace(point);
        var radius = acos(-point[1]);
        return ((-point[2] < 0 ? -radius : radius) + tau$4 - epsilon$4) % tau$4;
      }
      var circle$1 = function () {
        var center = constant$13([0, 0]),
            radius = constant$13(90),
            precision = constant$13(6),
            ring,
            rotate,
            stream = { point: point };
        function point(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= degrees$1, x[1] *= degrees$1;
        }
        function circle() {
          var c = center.apply(this, arguments),
              r = radius.apply(this, arguments) * radians,
              p = precision.apply(this, arguments) * radians;
          ring = [];
          rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
          circleStream(stream, r, p, 1);
          c = {
            type: "Polygon",
            coordinates: [ring]
          };
          ring = rotate = null;
          return c;
        }
        circle.center = function (_) {
          return arguments.length ? (center = typeof _ === "function" ? _ : constant$13([+_[0], +_[1]]), circle) : center;
        };
        circle.radius = function (_) {
          return arguments.length ? (radius = typeof _ === "function" ? _ : constant$13(+_), circle) : radius;
        };
        circle.precision = function (_) {
          return arguments.length ? (precision = typeof _ === "function" ? _ : constant$13(+_), circle) : precision;
        };
        return circle;
      };
      var clipBuffer = function () {
        var lines = [],
            line;
        return {
          point: function (x, y) {
            line.push([x, y]);
          },
          lineStart: function () {
            lines.push(line = []);
          },
          lineEnd: noop$2,
          rejoin: function () {
            if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
          },
          result: function () {
            var result = lines;
            lines = [];
            line = null;
            return result;
          }
        };
      };
      var clipLine = function (a, b, x0, y0, x1, y1) {
        var ax = a[0],
            ay = a[1],
            bx = b[0],
            by = b[1],
            t0 = 0,
            t1 = 1,
            dx = bx - ax,
            dy = by - ay,
            r;
        r = x0 - ax;
        if (!dx && r > 0) return;
        r /= dx;
        if (dx < 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        } else if (dx > 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        }
        r = x1 - ax;
        if (!dx && r < 0) return;
        r /= dx;
        if (dx < 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        } else if (dx > 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        }
        r = y0 - ay;
        if (!dy && r > 0) return;
        r /= dy;
        if (dy < 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        } else if (dy > 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        }
        r = y1 - ay;
        if (!dy && r < 0) return;
        r /= dy;
        if (dy < 0) {
          if (r > t1) return;
          if (r > t0) t0 = r;
        } else if (dy > 0) {
          if (r < t0) return;
          if (r < t1) t1 = r;
        }
        if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
        if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
        return true;
      };
      var pointEqual = function (a, b) {
        return abs(a[0] - b[0]) < epsilon$4 && abs(a[1] - b[1]) < epsilon$4;
      };
      function Intersection(point, points, other, entry) {
        this.x = point;
        this.z = points;
        this.o = other;
        this.e = entry;
        this.v = false;
        this.n = this.p = null;
      }
      var clipPolygon = function (segments, compareIntersection, startInside, interpolate, stream) {
        var subject = [],
            clip = [],
            i,
            n;
        segments.forEach(function (segment) {
          if ((n = segment.length - 1) <= 0) return;
          var n,
              p0 = segment[0],
              p1 = segment[n],
              x;
          if (pointEqual(p0, p1)) {
            stream.lineStart();
            for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
            stream.lineEnd();
            return;
          }
          subject.push(x = new Intersection(p0, segment, null, true));
          clip.push(x.o = new Intersection(p0, null, x, false));
          subject.push(x = new Intersection(p1, segment, null, false));
          clip.push(x.o = new Intersection(p1, null, x, true));
        });
        if (!subject.length) return;
        clip.sort(compareIntersection);
        link$1(subject);
        link$1(clip);
        for (i = 0, n = clip.length; i < n; ++i) {
          clip[i].e = startInside = !startInside;
        }
        var start = subject[0],
            points,
            point;
        while (1) {
          var current = start,
              isSubject = true;
          while (current.v) if ((current = current.n) === start) return;
          points = current.z;
          stream.lineStart();
          do {
            current.v = current.o.v = true;
            if (current.e) {
              if (isSubject) {
                for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.n.x, 1, stream);
              }
              current = current.n;
            } else {
              if (isSubject) {
                points = current.p.z;
                for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.p.x, -1, stream);
              }
              current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
          } while (!current.v);
          stream.lineEnd();
        }
      };
      function link$1(array) {
        if (!(n = array.length)) return;
        var n,
            i = 0,
            a = array[0],
            b;
        while (++i < n) {
          a.n = b = array[i];
          b.p = a;
          a = b;
        }
        a.n = b = array[0];
        b.p = a;
      }
      var clipMax = 1e9;
      var clipMin = -clipMax;
      function clipExtent(x0, y0, x1, y1) {
        function visible(x, y) {
          return x0 <= x && x <= x1 && y0 <= y && y <= y1;
        }
        function interpolate(from, to, direction, stream) {
          var a = 0,
              a1 = 0;
          if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
            do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0); while ((a = (a + direction + 4) % 4) !== a1);
          } else {
            stream.point(to[0], to[1]);
          }
        }
        function corner(p, direction) {
          return abs(p[0] - x0) < epsilon$4 ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < epsilon$4 ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < epsilon$4 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
        }
        function compareIntersection(a, b) {
          return comparePoint(a.x, b.x);
        }
        function comparePoint(a, b) {
          var ca = corner(a, 1),
              cb = corner(b, 1);
          return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
        }
        return function (stream) {
          var activeStream = stream,
              bufferStream = clipBuffer(),
              segments,
              polygon,
              ring,
              x__,
              y__,
              v__,
              x_,
              y_,
              v_,
              first,
              clean;
          var clipStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
          };
          function point(x, y) {
            if (visible(x, y)) activeStream.point(x, y);
          }
          function polygonInside() {
            var winding = 0;
            for (var i = 0, n = polygon.length; i < n; ++i) {
              for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
                a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                if (a1 <= y1) {
                  if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                } else {
                  if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
                }
              }
            }
            return winding;
          }
          function polygonStart() {
            activeStream = bufferStream, segments = [], polygon = [], clean = true;
          }
          function polygonEnd() {
            var startInside = polygonInside(),
                cleanInside = clean && startInside,
                visible = (segments = merge(segments)).length;
            if (cleanInside || visible) {
              stream.polygonStart();
              if (cleanInside) {
                stream.lineStart();
                interpolate(null, null, 1, stream);
                stream.lineEnd();
              }
              if (visible) {
                clipPolygon(segments, compareIntersection, startInside, interpolate, stream);
              }
              stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring = null;
          }
          function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
          }
          function lineEnd() {
            if (segments) {
              linePoint(x__, y__);
              if (v__ && v_) bufferStream.rejoin();
              segments.push(bufferStream.result());
            }
            clipStream.point = point;
            if (v_) activeStream.lineEnd();
          }
          function linePoint(x, y) {
            var v = visible(x, y);
            if (polygon) ring.push([x, y]);
            if (first) {
              x__ = x, y__ = y, v__ = v;
              first = false;
              if (v) {
                activeStream.lineStart();
                activeStream.point(x, y);
              }
            } else {
              if (v && v_) activeStream.point(x, y);else {
                var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
                    b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
                if (clipLine(a, b, x0, y0, x1, y1)) {
                  if (!v_) {
                    activeStream.lineStart();
                    activeStream.point(a[0], a[1]);
                  }
                  activeStream.point(b[0], b[1]);
                  if (!v) activeStream.lineEnd();
                  clean = false;
                } else if (v) {
                  activeStream.lineStart();
                  activeStream.point(x, y);
                  clean = false;
                }
              }
            }
            x_ = x, y_ = y, v_ = v;
          }
          return clipStream;
        };
      }
      var extent$1 = function () {
        var x0 = 0,
            y0 = 0,
            x1 = 960,
            y1 = 500,
            cache,
            cacheStream,
            clip;
        return clip = {
          stream: function (stream) {
            return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
          },
          extent: function (_) {
            return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
          }
        };
      };
      var lengthSum = adder();
      var lambda0$2;
      var sinPhi0$1;
      var cosPhi0$1;
      var lengthStream = {
        sphere: noop$2,
        point: noop$2,
        lineStart: lengthLineStart,
        lineEnd: noop$2,
        polygonStart: noop$2,
        polygonEnd: noop$2
      };
      function lengthLineStart() {
        lengthStream.point = lengthPointFirst;
        lengthStream.lineEnd = lengthLineEnd;
      }
      function lengthLineEnd() {
        lengthStream.point = lengthStream.lineEnd = noop$2;
      }
      function lengthPointFirst(lambda, phi) {
        lambda *= radians, phi *= radians;
        lambda0$2 = lambda, sinPhi0$1 = sin$1(phi), cosPhi0$1 = cos$1(phi);
        lengthStream.point = lengthPoint;
      }
      function lengthPoint(lambda, phi) {
        lambda *= radians, phi *= radians;
        var sinPhi = sin$1(phi),
            cosPhi = cos$1(phi),
            delta = abs(lambda - lambda0$2),
            cosDelta = cos$1(delta),
            sinDelta = sin$1(delta),
            x = cosPhi * sinDelta,
            y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta,
            z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
        lengthSum.add(atan2(sqrt$1(x * x + y * y), z));
        lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
      }
      var length$2 = function (object) {
        lengthSum.reset();
        geoStream(object, lengthStream);
        return +lengthSum;
      };
      var coordinates = [null, null];
      var object$1 = {
        type: "LineString",
        coordinates: coordinates
      };
      var distance = function (a, b) {
        coordinates[0] = a;
        coordinates[1] = b;
        return length$2(object$1);
      };
      function graticuleX(y0, y1, dy) {
        var y = range(y0, y1 - epsilon$4, dy).concat(y1);
        return function (x) {
          return y.map(function (y) {
            return [x, y];
          });
        };
      }
      function graticuleY(x0, x1, dx) {
        var x = range(x0, x1 - epsilon$4, dx).concat(x1);
        return function (y) {
          return x.map(function (x) {
            return [x, y];
          });
        };
      }
      function graticule() {
        var x1,
            x0,
            X1,
            X0,
            y1,
            y0,
            Y1,
            Y0,
            dx = 10,
            dy = dx,
            DX = 90,
            DY = 360,
            x,
            y,
            X,
            Y,
            precision = 2.5;
        function graticule() {
          return {
            type: "MultiLineString",
            coordinates: lines()
          };
        }
        function lines() {
          return range(ceil(X0 / DX) * DX, X1, DX).map(X).concat(range(ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(range(ceil(x0 / dx) * dx, x1, dx).filter(function (x) {
            return abs(x % DX) > epsilon$4;
          }).map(x)).concat(range(ceil(y0 / dy) * dy, y1, dy).filter(function (y) {
            return abs(y % DY) > epsilon$4;
          }).map(y));
        }
        graticule.lines = function () {
          return lines().map(function (coordinates) {
            return {
              type: "LineString",
              coordinates: coordinates
            };
          });
        };
        graticule.outline = function () {
          return {
            type: "Polygon",
            coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
          };
        };
        graticule.extent = function (_) {
          if (!arguments.length) return graticule.extentMinor();
          return graticule.extentMajor(_).extentMinor(_);
        };
        graticule.extentMajor = function (_) {
          if (!arguments.length) return [[X0, Y0], [X1, Y1]];
          X0 = +_[0][0], X1 = +_[1][0];
          Y0 = +_[0][1], Y1 = +_[1][1];
          if (X0 > X1) _ = X0, X0 = X1, X1 = _;
          if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
          return graticule.precision(precision);
        };
        graticule.extentMinor = function (_) {
          if (!arguments.length) return [[x0, y0], [x1, y1]];
          x0 = +_[0][0], x1 = +_[1][0];
          y0 = +_[0][1], y1 = +_[1][1];
          if (x0 > x1) _ = x0, x0 = x1, x1 = _;
          if (y0 > y1) _ = y0, y0 = y1, y1 = _;
          return graticule.precision(precision);
        };
        graticule.step = function (_) {
          if (!arguments.length) return graticule.stepMinor();
          return graticule.stepMajor(_).stepMinor(_);
        };
        graticule.stepMajor = function (_) {
          if (!arguments.length) return [DX, DY];
          DX = +_[0], DY = +_[1];
          return graticule;
        };
        graticule.stepMinor = function (_) {
          if (!arguments.length) return [dx, dy];
          dx = +_[0], dy = +_[1];
          return graticule;
        };
        graticule.precision = function (_) {
          if (!arguments.length) return precision;
          precision = +_;
          x = graticuleX(y0, y1, 90);
          y = graticuleY(x0, x1, precision);
          X = graticuleX(Y0, Y1, 90);
          Y = graticuleY(X0, X1, precision);
          return graticule;
        };
        return graticule.extentMajor([[-180, -90 + epsilon$4], [180, 90 - epsilon$4]]).extentMinor([[-180, -80 - epsilon$4], [180, 80 + epsilon$4]]);
      }
      function graticule10() {
        return graticule()();
      }
      var interpolate$2 = function (a, b) {
        var x0 = a[0] * radians,
            y0 = a[1] * radians,
            x1 = b[0] * radians,
            y1 = b[1] * radians,
            cy0 = cos$1(y0),
            sy0 = sin$1(y0),
            cy1 = cos$1(y1),
            sy1 = sin$1(y1),
            kx0 = cy0 * cos$1(x0),
            ky0 = cy0 * sin$1(x0),
            kx1 = cy1 * cos$1(x1),
            ky1 = cy1 * sin$1(x1),
            d = 2 * asin$1(sqrt$1(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
            k = sin$1(d);
        var interpolate = d ? function (t) {
          var B = sin$1(t *= d) / k,
              A = sin$1(d - t) / k,
              x = A * kx0 + B * kx1,
              y = A * ky0 + B * ky1,
              z = A * sy0 + B * sy1;
          return [atan2(y, x) * degrees$1, atan2(z, sqrt$1(x * x + y * y)) * degrees$1];
        } : function () {
          return [x0 * degrees$1, y0 * degrees$1];
        };
        interpolate.distance = d;
        return interpolate;
      };
      var identity$7 = function (x) {
        return x;
      };
      var areaSum$1 = adder();
      var areaRingSum$1 = adder();
      var x00;
      var y00;
      var x0$1;
      var y0$1;
      var areaStream$1 = {
        point: noop$2,
        lineStart: noop$2,
        lineEnd: noop$2,
        polygonStart: function () {
          areaStream$1.lineStart = areaRingStart$1;
          areaStream$1.lineEnd = areaRingEnd$1;
        },
        polygonEnd: function () {
          areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$2;
          areaSum$1.add(abs(areaRingSum$1));
          areaRingSum$1.reset();
        },
        result: function () {
          var area = areaSum$1 / 2;
          areaSum$1.reset();
          return area;
        }
      };
      function areaRingStart$1() {
        areaStream$1.point = areaPointFirst$1;
      }
      function areaPointFirst$1(x, y) {
        areaStream$1.point = areaPoint$1;
        x00 = x0$1 = x, y00 = y0$1 = y;
      }
      function areaPoint$1(x, y) {
        areaRingSum$1.add(y0$1 * x - x0$1 * y);
        x0$1 = x, y0$1 = y;
      }
      function areaRingEnd$1() {
        areaPoint$1(x00, y00);
      }
      var x0$2 = Infinity;
      var y0$2 = x0$2;
      var x1 = -x0$2;
      var y1 = x1;
      var boundsStream$1 = {
        point: boundsPoint$1,
        lineStart: noop$2,
        lineEnd: noop$2,
        polygonStart: noop$2,
        polygonEnd: noop$2,
        result: function () {
          var bounds = [[x0$2, y0$2], [x1, y1]];
          x1 = y1 = -(y0$2 = x0$2 = Infinity);
          return bounds;
        }
      };
      function boundsPoint$1(x, y) {
        if (x < x0$2) x0$2 = x;
        if (x > x1) x1 = x;
        if (y < y0$2) y0$2 = y;
        if (y > y1) y1 = y;
      }
      var X0$1 = 0;
      var Y0$1 = 0;
      var Z0$1 = 0;
      var X1$1 = 0;
      var Y1$1 = 0;
      var Z1$1 = 0;
      var X2$1 = 0;
      var Y2$1 = 0;
      var Z2$1 = 0;
      var x00$1;
      var y00$1;
      var x0$3;
      var y0$3;
      var centroidStream$1 = {
        point: centroidPoint$1,
        lineStart: centroidLineStart$1,
        lineEnd: centroidLineEnd$1,
        polygonStart: function () {
          centroidStream$1.lineStart = centroidRingStart$1;
          centroidStream$1.lineEnd = centroidRingEnd$1;
        },
        polygonEnd: function () {
          centroidStream$1.point = centroidPoint$1;
          centroidStream$1.lineStart = centroidLineStart$1;
          centroidStream$1.lineEnd = centroidLineEnd$1;
        },
        result: function () {
          var centroid = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1] : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1] : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1] : [NaN, NaN];
          X0$1 = Y0$1 = Z0$1 = X1$1 = Y1$1 = Z1$1 = X2$1 = Y2$1 = Z2$1 = 0;
          return centroid;
        }
      };
      function centroidPoint$1(x, y) {
        X0$1 += x;
        Y0$1 += y;
        ++Z0$1;
      }
      function centroidLineStart$1() {
        centroidStream$1.point = centroidPointFirstLine;
      }
      function centroidPointFirstLine(x, y) {
        centroidStream$1.point = centroidPointLine;
        centroidPoint$1(x0$3 = x, y0$3 = y);
      }
      function centroidPointLine(x, y) {
        var dx = x - x0$3,
            dy = y - y0$3,
            z = sqrt$1(dx * dx + dy * dy);
        X1$1 += z * (x0$3 + x) / 2;
        Y1$1 += z * (y0$3 + y) / 2;
        Z1$1 += z;
        centroidPoint$1(x0$3 = x, y0$3 = y);
      }
      function centroidLineEnd$1() {
        centroidStream$1.point = centroidPoint$1;
      }
      function centroidRingStart$1() {
        centroidStream$1.point = centroidPointFirstRing;
      }
      function centroidRingEnd$1() {
        centroidPointRing(x00$1, y00$1);
      }
      function centroidPointFirstRing(x, y) {
        centroidStream$1.point = centroidPointRing;
        centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
      }
      function centroidPointRing(x, y) {
        var dx = x - x0$3,
            dy = y - y0$3,
            z = sqrt$1(dx * dx + dy * dy);
        X1$1 += z * (x0$3 + x) / 2;
        Y1$1 += z * (y0$3 + y) / 2;
        Z1$1 += z;
        z = y0$3 * x - x0$3 * y;
        X2$1 += z * (x0$3 + x);
        Y2$1 += z * (y0$3 + y);
        Z2$1 += z * 3;
        centroidPoint$1(x0$3 = x, y0$3 = y);
      }
      function PathContext(context) {
        this._context = context;
      }
      PathContext.prototype = {
        _radius: 4.5,
        pointRadius: function (_) {
          return this._radius = _, this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line === 0) this._context.closePath();
          this._point = NaN;
        },
        point: function (x, y) {
          switch (this._point) {
            case 0:
              {
                this._context.moveTo(x, y);
                this._point = 1;
                break;
              }
            case 1:
              {
                this._context.lineTo(x, y);
                break;
              }
            default:
              {
                this._context.moveTo(x + this._radius, y);
                this._context.arc(x, y, this._radius, 0, tau$4);
                break;
              }
          }
        },
        result: noop$2
      };
      function PathString() {
        this._string = [];
      }
      PathString.prototype = {
        _circle: circle$2(4.5),
        pointRadius: function (_) {
          return this._circle = circle$2(_), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line === 0) this._string.push("Z");
          this._point = NaN;
        },
        point: function (x, y) {
          switch (this._point) {
            case 0:
              {
                this._string.push("M", x, ",", y);
                this._point = 1;
                break;
              }
            case 1:
              {
                this._string.push("L", x, ",", y);
                break;
              }
            default:
              {
                this._string.push("M", x, ",", y, this._circle);
                break;
              }
          }
        },
        result: function () {
          if (this._string.length) {
            var result = this._string.join("");
            this._string = [];
            return result;
          }
        }
      };
      function circle$2(radius) {
        return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
      }
      var index$3 = function (projection, context) {
        var pointRadius = 4.5,
            projectionStream,
            contextStream;
        function path(object) {
          if (object) {
            if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
            geoStream(object, projectionStream(contextStream));
          }
          return contextStream.result();
        }
        path.area = function (object) {
          geoStream(object, projectionStream(areaStream$1));
          return areaStream$1.result();
        };
        path.bounds = function (object) {
          geoStream(object, projectionStream(boundsStream$1));
          return boundsStream$1.result();
        };
        path.centroid = function (object) {
          geoStream(object, projectionStream(centroidStream$1));
          return centroidStream$1.result();
        };
        path.projection = function (_) {
          return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$7) : (projection = _).stream, path) : projection;
        };
        path.context = function (_) {
          if (!arguments.length) return context;
          contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
          if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
          return path;
        };
        path.pointRadius = function (_) {
          if (!arguments.length) return pointRadius;
          pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
          return path;
        };
        return path.projection(projection).context(context);
      };
      var sum$2 = adder();
      var polygonContains = function (polygon, point) {
        var lambda = point[0],
            phi = point[1],
            normal = [sin$1(lambda), -cos$1(lambda), 0],
            angle = 0,
            winding = 0;
        sum$2.reset();
        for (var i = 0, n = polygon.length; i < n; ++i) {
          if (!(m = (ring = polygon[i]).length)) continue;
          var ring,
              m,
              point0 = ring[m - 1],
              lambda0 = point0[0],
              phi0 = point0[1] / 2 + quarterPi,
              sinPhi0 = sin$1(phi0),
              cosPhi0 = cos$1(phi0);
          for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
            var point1 = ring[j],
                lambda1 = point1[0],
                phi1 = point1[1] / 2 + quarterPi,
                sinPhi1 = sin$1(phi1),
                cosPhi1 = cos$1(phi1),
                delta = lambda1 - lambda0,
                sign$$1 = delta >= 0 ? 1 : -1,
                absDelta = sign$$1 * delta,
                antimeridian = absDelta > pi$4,
                k = sinPhi0 * sinPhi1;
            sum$2.add(atan2(k * sign$$1 * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
            angle += antimeridian ? delta + sign$$1 * tau$4 : delta;
            if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
              var arc = cartesianCross(cartesian(point0), cartesian(point1));
              cartesianNormalizeInPlace(arc);
              var intersection = cartesianCross(normal, arc);
              cartesianNormalizeInPlace(intersection);
              var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin$1(intersection[2]);
              if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
                winding += antimeridian ^ delta >= 0 ? 1 : -1;
              }
            }
          }
        }
        return (angle < -epsilon$4 || angle < epsilon$4 && sum$2 < -epsilon$4) ^ winding & 1;
      };
      var clip = function (pointVisible, clipLine, interpolate, start) {
        return function (rotate, sink) {
          var line = clipLine(sink),
              rotatedStart = rotate.invert(start[0], start[1]),
              ringBuffer = clipBuffer(),
              ringSink = clipLine(ringBuffer),
              polygonStarted = false,
              polygon,
              segments,
              ring;
          var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function () {
              clip.point = pointRing;
              clip.lineStart = ringStart;
              clip.lineEnd = ringEnd;
              segments = [];
              polygon = [];
            },
            polygonEnd: function () {
              clip.point = point;
              clip.lineStart = lineStart;
              clip.lineEnd = lineEnd;
              segments = merge(segments);
              var startInside = polygonContains(polygon, rotatedStart);
              if (segments.length) {
                if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                clipPolygon(segments, compareIntersection, startInside, interpolate, sink);
              } else if (startInside) {
                if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                sink.lineStart();
                interpolate(null, null, 1, sink);
                sink.lineEnd();
              }
              if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
              segments = polygon = null;
            },
            sphere: function () {
              sink.polygonStart();
              sink.lineStart();
              interpolate(null, null, 1, sink);
              sink.lineEnd();
              sink.polygonEnd();
            }
          };
          function point(lambda, phi) {
            var point = rotate(lambda, phi);
            if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
          }
          function pointLine(lambda, phi) {
            var point = rotate(lambda, phi);
            line.point(point[0], point[1]);
          }
          function lineStart() {
            clip.point = pointLine;
            line.lineStart();
          }
          function lineEnd() {
            clip.point = point;
            line.lineEnd();
          }
          function pointRing(lambda, phi) {
            ring.push([lambda, phi]);
            var point = rotate(lambda, phi);
            ringSink.point(point[0], point[1]);
          }
          function ringStart() {
            ringSink.lineStart();
            ring = [];
          }
          function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringSink.lineEnd();
            var clean = ringSink.clean(),
                ringSegments = ringBuffer.result(),
                i,
                n = ringSegments.length,
                m,
                segment,
                point;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n) return;
            if (clean & 1) {
              segment = ringSegments[0];
              if ((m = segment.length - 1) > 0) {
                if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                sink.lineStart();
                for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
                sink.lineEnd();
              }
              return;
            }
            if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter(validSegment));
          }
          return clip;
        };
      };
      function validSegment(segment) {
        return segment.length > 1;
      }
      function compareIntersection(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - halfPi$3 - epsilon$4 : halfPi$3 - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi$3 - epsilon$4 : halfPi$3 - b[1]);
      }
      var clipAntimeridian = clip(function () {
        return true;
      }, clipAntimeridianLine, clipAntimeridianInterpolate, [-pi$4, -halfPi$3]);
      function clipAntimeridianLine(stream) {
        var lambda0 = NaN,
            phi0 = NaN,
            sign0 = NaN,
            clean;
        return {
          lineStart: function () {
            stream.lineStart();
            clean = 1;
          },
          point: function (lambda1, phi1) {
            var sign1 = lambda1 > 0 ? pi$4 : -pi$4,
                delta = abs(lambda1 - lambda0);
            if (abs(delta - pi$4) < epsilon$4) {
              stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$3 : -halfPi$3);
              stream.point(sign0, phi0);
              stream.lineEnd();
              stream.lineStart();
              stream.point(sign1, phi0);
              stream.point(lambda1, phi0);
              clean = 0;
            } else if (sign0 !== sign1 && delta >= pi$4) {
              if (abs(lambda0 - sign0) < epsilon$4) lambda0 -= sign0 * epsilon$4;
              if (abs(lambda1 - sign1) < epsilon$4) lambda1 -= sign1 * epsilon$4;
              phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
              stream.point(sign0, phi0);
              stream.lineEnd();
              stream.lineStart();
              stream.point(sign1, phi0);
              clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
          },
          lineEnd: function () {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
          },
          clean: function () {
            return 2 - clean;
          }
        };
      }
      function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
        var cosPhi0,
            cosPhi1,
            sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
        return abs(sinLambda0Lambda1) > epsilon$4 ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1) - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
      }
      function clipAntimeridianInterpolate(from, to, direction, stream) {
        var phi;
        if (from == null) {
          phi = direction * halfPi$3;
          stream.point(-pi$4, phi);
          stream.point(0, phi);
          stream.point(pi$4, phi);
          stream.point(pi$4, 0);
          stream.point(pi$4, -phi);
          stream.point(0, -phi);
          stream.point(-pi$4, -phi);
          stream.point(-pi$4, 0);
          stream.point(-pi$4, phi);
        } else if (abs(from[0] - to[0]) > epsilon$4) {
          var lambda = from[0] < to[0] ? pi$4 : -pi$4;
          phi = direction * lambda / 2;
          stream.point(-lambda, phi);
          stream.point(0, phi);
          stream.point(lambda, phi);
        } else {
          stream.point(to[0], to[1]);
        }
      }
      var clipCircle = function (radius, delta) {
        var cr = cos$1(radius),
            smallRadius = cr > 0,
            notHemisphere = abs(cr) > epsilon$4;
        function interpolate(from, to, direction, stream) {
          circleStream(stream, radius, delta, direction, from, to);
        }
        function visible(lambda, phi) {
          return cos$1(lambda) * cos$1(phi) > cr;
        }
        function clipLine(stream) {
          var point0, c0, v0, v00, clean;
          return {
            lineStart: function () {
              v00 = v0 = false;
              clean = 1;
            },
            point: function (lambda, phi) {
              var point1 = [lambda, phi],
                  point2,
                  v = visible(lambda, phi),
                  c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi$4 : -pi$4), phi) : 0;
              if (!point0 && (v00 = v0 = v)) stream.lineStart();
              if (v !== v0) {
                point2 = intersect(point0, point1);
                if (pointEqual(point0, point2) || pointEqual(point1, point2)) {
                  point1[0] += epsilon$4;
                  point1[1] += epsilon$4;
                  v = visible(point1[0], point1[1]);
                }
              }
              if (v !== v0) {
                clean = 0;
                if (v) {
                  stream.lineStart();
                  point2 = intersect(point1, point0);
                  stream.point(point2[0], point2[1]);
                } else {
                  point2 = intersect(point0, point1);
                  stream.point(point2[0], point2[1]);
                  stream.lineEnd();
                }
                point0 = point2;
              } else if (notHemisphere && point0 && smallRadius ^ v) {
                var t;
                if (!(c & c0) && (t = intersect(point1, point0, true))) {
                  clean = 0;
                  if (smallRadius) {
                    stream.lineStart();
                    stream.point(t[0][0], t[0][1]);
                    stream.point(t[1][0], t[1][1]);
                    stream.lineEnd();
                  } else {
                    stream.point(t[1][0], t[1][1]);
                    stream.lineEnd();
                    stream.lineStart();
                    stream.point(t[0][0], t[0][1]);
                  }
                }
              }
              if (v && (!point0 || !pointEqual(point0, point1))) {
                stream.point(point1[0], point1[1]);
              }
              point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function () {
              if (v0) stream.lineEnd();
              point0 = null;
            },
            clean: function () {
              return clean | (v00 && v0) << 1;
            }
          };
        }
        function intersect(a, b, two) {
          var pa = cartesian(a),
              pb = cartesian(b);
          var n1 = [1, 0, 0],
              n2 = cartesianCross(pa, pb),
              n2n2 = cartesianDot(n2, n2),
              n1n2 = n2[0],
              determinant = n2n2 - n1n2 * n1n2;
          if (!determinant) return !two && a;
          var c1 = cr * n2n2 / determinant,
              c2 = -cr * n1n2 / determinant,
              n1xn2 = cartesianCross(n1, n2),
              A = cartesianScale(n1, c1),
              B = cartesianScale(n2, c2);
          cartesianAddInPlace(A, B);
          var u = n1xn2,
              w = cartesianDot(A, u),
              uu = cartesianDot(u, u),
              t2 = w * w - uu * (cartesianDot(A, A) - 1);
          if (t2 < 0) return;
          var t = sqrt$1(t2),
              q = cartesianScale(u, (-w - t) / uu);
          cartesianAddInPlace(q, A);
          q = spherical(q);
          if (!two) return q;
          var lambda0 = a[0],
              lambda1 = b[0],
              phi0 = a[1],
              phi1 = b[1],
              z;
          if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
          var delta = lambda1 - lambda0,
              polar = abs(delta - pi$4) < epsilon$4,
              meridian = polar || delta < epsilon$4;
          if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
          if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$4 ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > pi$4 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
            var q1 = cartesianScale(u, (-w + t) / uu);
            cartesianAddInPlace(q1, A);
            return [q, spherical(q1)];
          }
        }
        function code(lambda, phi) {
          var r = smallRadius ? radius : pi$4 - radius,
              code = 0;
          if (lambda < -r) code |= 1;else if (lambda > r) code |= 2;
          if (phi < -r) code |= 4;else if (phi > r) code |= 8;
          return code;
        }
        return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$4, radius - pi$4]);
      };
      var transform$1 = function (methods) {
        return { stream: transformer(methods) };
      };
      function transformer(methods) {
        return function (stream) {
          var s = new TransformStream();
          for (var key in methods) s[key] = methods[key];
          s.stream = stream;
          return s;
        };
      }
      function TransformStream() {}
      TransformStream.prototype = {
        constructor: TransformStream,
        point: function (x, y) {
          this.stream.point(x, y);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        }
      };
      function fitExtent(projection, extent, object) {
        var w = extent[1][0] - extent[0][0],
            h = extent[1][1] - extent[0][1],
            clip = projection.clipExtent && projection.clipExtent();
        projection.scale(150).translate([0, 0]);
        if (clip != null) projection.clipExtent(null);
        geoStream(object, projection.stream(boundsStream$1));
        var b = boundsStream$1.result(),
            k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
            x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
            y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        if (clip != null) projection.clipExtent(clip);
        return projection.scale(k * 150).translate([x, y]);
      }
      function fitSize(projection, size, object) {
        return fitExtent(projection, [[0, 0], size], object);
      }
      var maxDepth = 16;
      var cosMinDistance = cos$1(30 * radians);
      var resample = function (project, delta2) {
        return +delta2 ? resample$1(project, delta2) : resampleNone(project);
      };
      function resampleNone(project) {
        return transformer({ point: function (x, y) {
            x = project(x, y);
            this.stream.point(x[0], x[1]);
          } });
      }
      function resample$1(project, delta2) {
        function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
          var dx = x1 - x0,
              dy = y1 - y0,
              d2 = dx * dx + dy * dy;
          if (d2 > 4 * delta2 && depth--) {
            var a = a0 + a1,
                b = b0 + b1,
                c = c0 + c1,
                m = sqrt$1(a * a + b * b + c * c),
                phi2 = asin$1(c /= m),
                lambda2 = abs(abs(c) - 1) < epsilon$4 || abs(lambda0 - lambda1) < epsilon$4 ? (lambda0 + lambda1) / 2 : atan2(b, a),
                p = project(lambda2, phi2),
                x2 = p[0],
                y2 = p[1],
                dx2 = x2 - x0,
                dy2 = y2 - y0,
                dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
              resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
              stream.point(x2, y2);
              resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
            }
          }
        }
        return function (stream) {
          var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0;
          var resampleStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function () {
              stream.polygonStart();
              resampleStream.lineStart = ringStart;
            },
            polygonEnd: function () {
              stream.polygonEnd();
              resampleStream.lineStart = lineStart;
            }
          };
          function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
          }
          function lineStart() {
            x0 = NaN;
            resampleStream.point = linePoint;
            stream.lineStart();
          }
          function linePoint(lambda, phi) {
            var c = cartesian([lambda, phi]),
                p = project(lambda, phi);
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
          }
          function lineEnd() {
            resampleStream.point = point;
            stream.lineEnd();
          }
          function ringStart() {
            lineStart();
            resampleStream.point = ringPoint;
            resampleStream.lineEnd = ringEnd;
          }
          function ringPoint(lambda, phi) {
            linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resampleStream.point = linePoint;
          }
          function ringEnd() {
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
            resampleStream.lineEnd = lineEnd;
            lineEnd();
          }
          return resampleStream;
        };
      }
      var transformRadians = transformer({ point: function (x, y) {
          this.stream.point(x * radians, y * radians);
        } });
      function projection(project) {
        return projectionMutator(function () {
          return project;
        })();
      }
      function projectionMutator(projectAt) {
        var project,
            k = 150,
            x = 480,
            y = 250,
            dx,
            dy,
            lambda = 0,
            phi = 0,
            deltaLambda = 0,
            deltaPhi = 0,
            deltaGamma = 0,
            rotate,
            projectRotate,
            theta = null,
            preclip = clipAntimeridian,
            x0 = null,
            y0,
            x1,
            y1,
            postclip = identity$7,
            delta2 = 0.5,
            projectResample = resample(projectTransform, delta2),
            cache,
            cacheStream;
        function projection(point) {
          point = projectRotate(point[0] * radians, point[1] * radians);
          return [point[0] * k + dx, dy - point[1] * k];
        }
        function invert(point) {
          point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
          return point && [point[0] * degrees$1, point[1] * degrees$1];
        }
        function projectTransform(x, y) {
          return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
        }
        projection.stream = function (stream) {
          return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
        };
        projection.clipAngle = function (_) {
          return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians, 6 * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
        };
        projection.clipExtent = function (_) {
          return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$7) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
        };
        projection.scale = function (_) {
          return arguments.length ? (k = +_, recenter()) : k;
        };
        projection.translate = function (_) {
          return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
        };
        projection.center = function (_) {
          return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
        };
        projection.rotate = function (_) {
          return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
        };
        projection.precision = function (_) {
          return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt$1(delta2);
        };
        projection.fitExtent = function (extent, object) {
          return fitExtent(projection, extent, object);
        };
        projection.fitSize = function (size, object) {
          return fitSize(projection, size, object);
        };
        function recenter() {
          projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
          var center = project(lambda, phi);
          dx = x - center[0] * k;
          dy = y + center[1] * k;
          return reset();
        }
        function reset() {
          cache = cacheStream = null;
          return projection;
        }
        return function () {
          project = projectAt.apply(this, arguments);
          projection.invert = project.invert && invert;
          return recenter();
        };
      }
      function conicProjection(projectAt) {
        var phi0 = 0,
            phi1 = pi$4 / 3,
            m = projectionMutator(projectAt),
            p = m(phi0, phi1);
        p.parallels = function (_) {
          return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
        };
        return p;
      }
      function cylindricalEqualAreaRaw(phi0) {
        var cosPhi0 = cos$1(phi0);
        function forward(lambda, phi) {
          return [lambda * cosPhi0, sin$1(phi) / cosPhi0];
        }
        forward.invert = function (x, y) {
          return [x / cosPhi0, asin$1(y * cosPhi0)];
        };
        return forward;
      }
      function conicEqualAreaRaw(y0, y1) {
        var sy0 = sin$1(y0),
            n = (sy0 + sin$1(y1)) / 2;
        if (abs(n) < epsilon$4) return cylindricalEqualAreaRaw(y0);
        var c = 1 + sy0 * (2 * n - sy0),
            r0 = sqrt$1(c) / n;
        function project(x, y) {
          var r = sqrt$1(c - 2 * n * sin$1(y)) / n;
          return [r * sin$1(x *= n), r0 - r * cos$1(x)];
        }
        project.invert = function (x, y) {
          var r0y = r0 - y;
          return [atan2(x, abs(r0y)) / n * sign$1(r0y), asin$1((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
        };
        return project;
      }
      var conicEqualArea = function () {
        return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
      };
      var albers = function () {
        return conicEqualArea().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
      };
      function multiplex(streams) {
        var n = streams.length;
        return {
          point: function (x, y) {
            var i = -1;
            while (++i < n) streams[i].point(x, y);
          },
          sphere: function () {
            var i = -1;
            while (++i < n) streams[i].sphere();
          },
          lineStart: function () {
            var i = -1;
            while (++i < n) streams[i].lineStart();
          },
          lineEnd: function () {
            var i = -1;
            while (++i < n) streams[i].lineEnd();
          },
          polygonStart: function () {
            var i = -1;
            while (++i < n) streams[i].polygonStart();
          },
          polygonEnd: function () {
            var i = -1;
            while (++i < n) streams[i].polygonEnd();
          }
        };
      }
      var albersUsa = function () {
        var cache,
            cacheStream,
            lower48 = albers(),
            lower48Point,
            alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            alaskaPoint,
            hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            hawaiiPoint,
            point,
            pointStream = { point: function (x, y) {
            point = [x, y];
          } };
        function albersUsa(coordinates) {
          var x = coordinates[0],
              y = coordinates[1];
          return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
        }
        albersUsa.invert = function (coordinates) {
          var k = lower48.scale(),
              t = lower48.translate(),
              x = (coordinates[0] - t[0]) / k,
              y = (coordinates[1] - t[1]) / k;
          return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
        };
        albersUsa.stream = function (stream) {
          return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
        };
        albersUsa.precision = function (_) {
          if (!arguments.length) return lower48.precision();
          lower48.precision(_), alaska.precision(_), hawaii.precision(_);
          return reset();
        };
        albersUsa.scale = function (_) {
          if (!arguments.length) return lower48.scale();
          lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
          return albersUsa.translate(lower48.translate());
        };
        albersUsa.translate = function (_) {
          if (!arguments.length) return lower48.translate();
          var k = lower48.scale(),
              x = +_[0],
              y = +_[1];
          lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
          alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon$4, y + 0.120 * k + epsilon$4], [x - 0.214 * k - epsilon$4, y + 0.234 * k - epsilon$4]]).stream(pointStream);
          hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon$4, y + 0.166 * k + epsilon$4], [x - 0.115 * k - epsilon$4, y + 0.234 * k - epsilon$4]]).stream(pointStream);
          return reset();
        };
        albersUsa.fitExtent = function (extent, object) {
          return fitExtent(albersUsa, extent, object);
        };
        albersUsa.fitSize = function (size, object) {
          return fitSize(albersUsa, size, object);
        };
        function reset() {
          cache = cacheStream = null;
          return albersUsa;
        }
        return albersUsa.scale(1070);
      };
      function azimuthalRaw(scale) {
        return function (x, y) {
          var cx = cos$1(x),
              cy = cos$1(y),
              k = scale(cx * cy);
          return [k * cy * sin$1(x), k * sin$1(y)];
        };
      }
      function azimuthalInvert(angle) {
        return function (x, y) {
          var z = sqrt$1(x * x + y * y),
              c = angle(z),
              sc = sin$1(c),
              cc = cos$1(c);
          return [atan2(x * sc, z * cc), asin$1(z && y * sc / z)];
        };
      }
      var azimuthalEqualAreaRaw = azimuthalRaw(function (cxcy) {
        return sqrt$1(2 / (1 + cxcy));
      });
      azimuthalEqualAreaRaw.invert = azimuthalInvert(function (z) {
        return 2 * asin$1(z / 2);
      });
      var azimuthalEqualArea = function () {
        return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
      };
      var azimuthalEquidistantRaw = azimuthalRaw(function (c) {
        return (c = acos(c)) && c / sin$1(c);
      });
      azimuthalEquidistantRaw.invert = azimuthalInvert(function (z) {
        return z;
      });
      var azimuthalEquidistant = function () {
        return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
      };
      function mercatorRaw(lambda, phi) {
        return [lambda, log$1(tan((halfPi$3 + phi) / 2))];
      }
      mercatorRaw.invert = function (x, y) {
        return [x, 2 * atan(exp(y)) - halfPi$3];
      };
      var mercator = function () {
        return mercatorProjection(mercatorRaw).scale(961 / tau$4);
      };
      function mercatorProjection(project) {
        var m = projection(project),
            scale = m.scale,
            translate = m.translate,
            clipExtent = m.clipExtent,
            clipAuto;
        m.scale = function (_) {
          return arguments.length ? (scale(_), clipAuto && m.clipExtent(null), m) : scale();
        };
        m.translate = function (_) {
          return arguments.length ? (translate(_), clipAuto && m.clipExtent(null), m) : translate();
        };
        m.clipExtent = function (_) {
          if (!arguments.length) return clipAuto ? null : clipExtent();
          if (clipAuto = _ == null) {
            var k = pi$4 * scale(),
                t = translate();
            _ = [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]];
          }
          clipExtent(_);
          return m;
        };
        return m.clipExtent(null);
      }
      function tany(y) {
        return tan((halfPi$3 + y) / 2);
      }
      function conicConformalRaw(y0, y1) {
        var cy0 = cos$1(y0),
            n = y0 === y1 ? sin$1(y0) : log$1(cy0 / cos$1(y1)) / log$1(tany(y1) / tany(y0)),
            f = cy0 * pow$1(tany(y0), n) / n;
        if (!n) return mercatorRaw;
        function project(x, y) {
          if (f > 0) {
            if (y < -halfPi$3 + epsilon$4) y = -halfPi$3 + epsilon$4;
          } else {
            if (y > halfPi$3 - epsilon$4) y = halfPi$3 - epsilon$4;
          }
          var r = f / pow$1(tany(y), n);
          return [r * sin$1(n * x), f - r * cos$1(n * x)];
        }
        project.invert = function (x, y) {
          var fy = f - y,
              r = sign$1(n) * sqrt$1(x * x + fy * fy);
          return [atan2(x, abs(fy)) / n * sign$1(fy), 2 * atan(pow$1(f / r, 1 / n)) - halfPi$3];
        };
        return project;
      }
      var conicConformal = function () {
        return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
      };
      function equirectangularRaw(lambda, phi) {
        return [lambda, phi];
      }
      equirectangularRaw.invert = equirectangularRaw;
      var equirectangular = function () {
        return projection(equirectangularRaw).scale(152.63);
      };
      function conicEquidistantRaw(y0, y1) {
        var cy0 = cos$1(y0),
            n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0),
            g = cy0 / n + y0;
        if (abs(n) < epsilon$4) return equirectangularRaw;
        function project(x, y) {
          var gy = g - y,
              nx = n * x;
          return [gy * sin$1(nx), g - gy * cos$1(nx)];
        }
        project.invert = function (x, y) {
          var gy = g - y;
          return [atan2(x, abs(gy)) / n * sign$1(gy), g - sign$1(n) * sqrt$1(x * x + gy * gy)];
        };
        return project;
      }
      var conicEquidistant = function () {
        return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
      };
      function gnomonicRaw(x, y) {
        var cy = cos$1(y),
            k = cos$1(x) * cy;
        return [cy * sin$1(x) / k, sin$1(y) / k];
      }
      gnomonicRaw.invert = azimuthalInvert(atan);
      var gnomonic = function () {
        return projection(gnomonicRaw).scale(144.049).clipAngle(60);
      };
      function scaleTranslate(kx, ky, tx, ty) {
        return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? identity$7 : transformer({ point: function (x, y) {
            this.stream.point(x * kx + tx, y * ky + ty);
          } });
      }
      var identity$8 = function () {
        var k = 1,
            tx = 0,
            ty = 0,
            sx = 1,
            sy = 1,
            transform = identity$7,
            x0 = null,
            y0,
            x1,
            y1,
            clip = identity$7,
            cache,
            cacheStream,
            projection;
        function reset() {
          cache = cacheStream = null;
          return projection;
        }
        return projection = {
          stream: function (stream) {
            return cache && cacheStream === stream ? cache : cache = transform(clip(cacheStream = stream));
          },
          clipExtent: function (_) {
            return arguments.length ? (clip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$7) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
          },
          scale: function (_) {
            return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
          },
          translate: function (_) {
            return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
          },
          reflectX: function (_) {
            return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
          },
          reflectY: function (_) {
            return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
          },
          fitExtent: function (extent, object) {
            return fitExtent(projection, extent, object);
          },
          fitSize: function (size, object) {
            return fitSize(projection, size, object);
          }
        };
      };
      function orthographicRaw(x, y) {
        return [cos$1(y) * sin$1(x), sin$1(y)];
      }
      orthographicRaw.invert = azimuthalInvert(asin$1);
      var orthographic = function () {
        return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon$4);
      };
      function stereographicRaw(x, y) {
        var cy = cos$1(y),
            k = 1 + cos$1(x) * cy;
        return [cy * sin$1(x) / k, sin$1(y) / k];
      }
      stereographicRaw.invert = azimuthalInvert(function (z) {
        return 2 * atan(z);
      });
      var stereographic = function () {
        return projection(stereographicRaw).scale(250).clipAngle(142);
      };
      function transverseMercatorRaw(lambda, phi) {
        return [log$1(tan((halfPi$3 + phi) / 2)), -lambda];
      }
      transverseMercatorRaw.invert = function (x, y) {
        return [-y, 2 * atan(exp(x)) - halfPi$3];
      };
      var transverseMercator = function () {
        var m = mercatorProjection(transverseMercatorRaw),
            center = m.center,
            rotate = m.rotate;
        m.center = function (_) {
          return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
        };
        m.rotate = function (_) {
          return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
        };
        return rotate([0, 0, 90]).scale(159.155);
      };
      exports.version = version;
      exports.bisect = bisectRight;
      exports.bisectRight = bisectRight;
      exports.bisectLeft = bisectLeft;
      exports.ascending = ascending;
      exports.bisector = bisector;
      exports.descending = descending;
      exports.deviation = deviation;
      exports.extent = extent;
      exports.histogram = histogram;
      exports.thresholdFreedmanDiaconis = freedmanDiaconis;
      exports.thresholdScott = scott;
      exports.thresholdSturges = sturges;
      exports.max = max;
      exports.mean = mean;
      exports.median = median;
      exports.merge = merge;
      exports.min = min;
      exports.pairs = pairs;
      exports.permute = permute;
      exports.quantile = threshold;
      exports.range = range;
      exports.scan = scan;
      exports.shuffle = shuffle;
      exports.sum = sum;
      exports.ticks = ticks;
      exports.tickStep = tickStep;
      exports.transpose = transpose;
      exports.variance = variance;
      exports.zip = zip;
      exports.entries = entries;
      exports.keys = keys;
      exports.values = values;
      exports.map = map$1;
      exports.set = set;
      exports.nest = nest;
      exports.randomUniform = uniform;
      exports.randomNormal = normal;
      exports.randomLogNormal = logNormal;
      exports.randomBates = bates;
      exports.randomIrwinHall = irwinHall;
      exports.randomExponential = exponential;
      exports.easeLinear = linear;
      exports.easeQuad = quadInOut;
      exports.easeQuadIn = quadIn;
      exports.easeQuadOut = quadOut;
      exports.easeQuadInOut = quadInOut;
      exports.easeCubic = cubicInOut;
      exports.easeCubicIn = cubicIn;
      exports.easeCubicOut = cubicOut;
      exports.easeCubicInOut = cubicInOut;
      exports.easePoly = polyInOut;
      exports.easePolyIn = polyIn;
      exports.easePolyOut = polyOut;
      exports.easePolyInOut = polyInOut;
      exports.easeSin = sinInOut;
      exports.easeSinIn = sinIn;
      exports.easeSinOut = sinOut;
      exports.easeSinInOut = sinInOut;
      exports.easeExp = expInOut;
      exports.easeExpIn = expIn;
      exports.easeExpOut = expOut;
      exports.easeExpInOut = expInOut;
      exports.easeCircle = circleInOut;
      exports.easeCircleIn = circleIn;
      exports.easeCircleOut = circleOut;
      exports.easeCircleInOut = circleInOut;
      exports.easeBounce = bounceOut;
      exports.easeBounceIn = bounceIn;
      exports.easeBounceOut = bounceOut;
      exports.easeBounceInOut = bounceInOut;
      exports.easeBack = backInOut;
      exports.easeBackIn = backIn;
      exports.easeBackOut = backOut;
      exports.easeBackInOut = backInOut;
      exports.easeElastic = elasticOut;
      exports.easeElasticIn = elasticIn;
      exports.easeElasticOut = elasticOut;
      exports.easeElasticInOut = elasticInOut;
      exports.polygonArea = area;
      exports.polygonCentroid = centroid;
      exports.polygonHull = hull;
      exports.polygonContains = contains;
      exports.polygonLength = length$1;
      exports.path = path;
      exports.quadtree = quadtree;
      exports.queue = queue;
      exports.arc = arc;
      exports.area = area$1;
      exports.line = line;
      exports.pie = pie;
      exports.radialArea = radialArea;
      exports.radialLine = radialLine$1;
      exports.symbol = symbol;
      exports.symbols = symbols;
      exports.symbolCircle = circle;
      exports.symbolCross = cross$1;
      exports.symbolDiamond = diamond;
      exports.symbolSquare = square;
      exports.symbolStar = star;
      exports.symbolTriangle = triangle;
      exports.symbolWye = wye;
      exports.curveBasisClosed = basisClosed;
      exports.curveBasisOpen = basisOpen;
      exports.curveBasis = basis;
      exports.curveBundle = bundle;
      exports.curveCardinalClosed = cardinalClosed;
      exports.curveCardinalOpen = cardinalOpen;
      exports.curveCardinal = cardinal;
      exports.curveCatmullRomClosed = catmullRomClosed;
      exports.curveCatmullRomOpen = catmullRomOpen;
      exports.curveCatmullRom = catmullRom;
      exports.curveLinearClosed = linearClosed;
      exports.curveLinear = curveLinear;
      exports.curveMonotoneX = monotoneX;
      exports.curveMonotoneY = monotoneY;
      exports.curveNatural = natural;
      exports.curveStep = step;
      exports.curveStepAfter = stepAfter;
      exports.curveStepBefore = stepBefore;
      exports.stack = stack;
      exports.stackOffsetExpand = expand;
      exports.stackOffsetNone = none;
      exports.stackOffsetSilhouette = silhouette;
      exports.stackOffsetWiggle = wiggle;
      exports.stackOrderAscending = ascending$1;
      exports.stackOrderDescending = descending$2;
      exports.stackOrderInsideOut = insideOut;
      exports.stackOrderNone = none$1;
      exports.stackOrderReverse = reverse;
      exports.color = color;
      exports.rgb = rgb;
      exports.hsl = hsl;
      exports.lab = lab;
      exports.hcl = hcl;
      exports.cubehelix = cubehelix;
      exports.interpolate = interpolate;
      exports.interpolateArray = array$1;
      exports.interpolateDate = date;
      exports.interpolateNumber = interpolateNumber;
      exports.interpolateObject = object;
      exports.interpolateRound = interpolateRound;
      exports.interpolateString = interpolateString;
      exports.interpolateTransformCss = interpolateTransformCss;
      exports.interpolateTransformSvg = interpolateTransformSvg;
      exports.interpolateZoom = interpolateZoom;
      exports.interpolateRgb = interpolateRgb;
      exports.interpolateRgbBasis = rgbBasis;
      exports.interpolateRgbBasisClosed = rgbBasisClosed;
      exports.interpolateHsl = hsl$2;
      exports.interpolateHslLong = hslLong;
      exports.interpolateLab = lab$1;
      exports.interpolateHcl = hcl$2;
      exports.interpolateHclLong = hclLong;
      exports.interpolateCubehelix = cubehelix$2;
      exports.interpolateCubehelixLong = cubehelixLong;
      exports.interpolateBasis = basis$2;
      exports.interpolateBasisClosed = basisClosed$1;
      exports.quantize = quantize;
      exports.dispatch = dispatch;
      exports.dsvFormat = dsv;
      exports.csvParse = csvParse;
      exports.csvParseRows = csvParseRows;
      exports.csvFormat = csvFormat;
      exports.csvFormatRows = csvFormatRows;
      exports.tsvParse = tsvParse;
      exports.tsvParseRows = tsvParseRows;
      exports.tsvFormat = tsvFormat;
      exports.tsvFormatRows = tsvFormatRows;
      exports.request = request;
      exports.html = html;
      exports.json = json;
      exports.text = text;
      exports.xml = xml;
      exports.csv = csv$1;
      exports.tsv = tsv$1;
      exports.now = now;
      exports.timer = timer;
      exports.timerFlush = timerFlush;
      exports.timeout = timeout$1;
      exports.interval = interval$1;
      exports.timeInterval = newInterval;
      exports.timeMillisecond = millisecond;
      exports.timeMilliseconds = milliseconds;
      exports.timeSecond = second;
      exports.timeSeconds = seconds;
      exports.timeMinute = minute;
      exports.timeMinutes = minutes;
      exports.timeHour = hour;
      exports.timeHours = hours;
      exports.timeDay = day;
      exports.timeDays = days;
      exports.timeWeek = sunday;
      exports.timeWeeks = sundays;
      exports.timeSunday = sunday;
      exports.timeSundays = sundays;
      exports.timeMonday = monday;
      exports.timeMondays = mondays;
      exports.timeTuesday = tuesday;
      exports.timeTuesdays = tuesdays;
      exports.timeWednesday = wednesday;
      exports.timeWednesdays = wednesdays;
      exports.timeThursday = thursday;
      exports.timeThursdays = thursdays;
      exports.timeFriday = friday;
      exports.timeFridays = fridays;
      exports.timeSaturday = saturday;
      exports.timeSaturdays = saturdays;
      exports.timeMonth = month;
      exports.timeMonths = months;
      exports.timeYear = year;
      exports.timeYears = years;
      exports.utcMillisecond = millisecond;
      exports.utcMilliseconds = milliseconds;
      exports.utcSecond = second;
      exports.utcSeconds = seconds;
      exports.utcMinute = utcMinute;
      exports.utcMinutes = utcMinutes;
      exports.utcHour = utcHour;
      exports.utcHours = utcHours;
      exports.utcDay = utcDay;
      exports.utcDays = utcDays;
      exports.utcWeek = utcSunday;
      exports.utcWeeks = utcSundays;
      exports.utcSunday = utcSunday;
      exports.utcSundays = utcSundays;
      exports.utcMonday = utcMonday;
      exports.utcMondays = utcMondays;
      exports.utcTuesday = utcTuesday;
      exports.utcTuesdays = utcTuesdays;
      exports.utcWednesday = utcWednesday;
      exports.utcWednesdays = utcWednesdays;
      exports.utcThursday = utcThursday;
      exports.utcThursdays = utcThursdays;
      exports.utcFriday = utcFriday;
      exports.utcFridays = utcFridays;
      exports.utcSaturday = utcSaturday;
      exports.utcSaturdays = utcSaturdays;
      exports.utcMonth = utcMonth;
      exports.utcMonths = utcMonths;
      exports.utcYear = utcYear;
      exports.utcYears = utcYears;
      exports.formatLocale = formatLocale;
      exports.formatDefaultLocale = defaultLocale;
      exports.formatSpecifier = formatSpecifier;
      exports.precisionFixed = precisionFixed;
      exports.precisionPrefix = precisionPrefix;
      exports.precisionRound = precisionRound;
      exports.isoFormat = formatIso;
      exports.isoParse = parseIso;
      exports.timeFormatLocale = formatLocale$1;
      exports.timeFormatDefaultLocale = defaultLocale$1;
      exports.scaleBand = band;
      exports.scalePoint = point$4;
      exports.scaleIdentity = identity$4;
      exports.scaleLinear = linear$2;
      exports.scaleLog = log;
      exports.scaleOrdinal = ordinal;
      exports.scaleImplicit = implicit;
      exports.scalePow = pow;
      exports.scaleSqrt = sqrt;
      exports.scaleQuantile = quantile$$1;
      exports.scaleQuantize = quantize$1;
      exports.scaleThreshold = threshold$1;
      exports.scaleTime = time;
      exports.scaleUtc = utcTime;
      exports.schemeCategory10 = category10;
      exports.schemeCategory20b = category20b;
      exports.schemeCategory20c = category20c;
      exports.schemeCategory20 = category20;
      exports.scaleSequential = sequential;
      exports.interpolateCubehelixDefault = cubehelix$3;
      exports.interpolateRainbow = rainbow$1;
      exports.interpolateWarm = warm;
      exports.interpolateCool = cool;
      exports.interpolateViridis = viridis;
      exports.interpolateMagma = magma;
      exports.interpolateInferno = inferno;
      exports.interpolatePlasma = plasma;
      exports.creator = creator;
      exports.customEvent = customEvent;
      exports.local = local;
      exports.matcher = matcher$1;
      exports.mouse = mouse;
      exports.namespace = namespace;
      exports.namespaces = namespaces;
      exports.select = select;
      exports.selectAll = selectAll;
      exports.selection = selection;
      exports.selector = selector;
      exports.selectorAll = selectorAll;
      exports.touch = touch;
      exports.touches = touches;
      exports.window = window;
      exports.active = active;
      exports.interrupt = interrupt;
      exports.transition = transition;
      exports.axisTop = axisTop;
      exports.axisRight = axisRight;
      exports.axisBottom = axisBottom;
      exports.axisLeft = axisLeft;
      exports.cluster = cluster;
      exports.hierarchy = hierarchy;
      exports.pack = index;
      exports.packSiblings = siblings;
      exports.packEnclose = enclose;
      exports.partition = partition;
      exports.stratify = stratify;
      exports.tree = tree;
      exports.treemap = index$1;
      exports.treemapBinary = binary;
      exports.treemapDice = treemapDice;
      exports.treemapSlice = treemapSlice;
      exports.treemapSliceDice = sliceDice;
      exports.treemapSquarify = squarify;
      exports.treemapResquarify = resquarify;
      exports.forceCenter = center$1;
      exports.forceCollide = collide;
      exports.forceLink = link;
      exports.forceManyBody = manyBody;
      exports.forceSimulation = simulation;
      exports.forceX = x$3;
      exports.forceY = y$3;
      exports.drag = drag;
      exports.dragDisable = dragDisable;
      exports.dragEnable = yesdrag;
      exports.voronoi = voronoi;
      exports.zoom = zoom;
      exports.zoomIdentity = identity$6;
      exports.zoomTransform = transform;
      exports.brush = brush;
      exports.brushX = brushX;
      exports.brushY = brushY;
      exports.brushSelection = brushSelection;
      exports.chord = chord;
      exports.ribbon = ribbon;
      exports.geoAlbers = albers;
      exports.geoAlbersUsa = albersUsa;
      exports.geoArea = area$2;
      exports.geoAzimuthalEqualArea = azimuthalEqualArea;
      exports.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
      exports.geoAzimuthalEquidistant = azimuthalEquidistant;
      exports.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
      exports.geoBounds = bounds;
      exports.geoCentroid = centroid$1;
      exports.geoCircle = circle$1;
      exports.geoClipExtent = extent$1;
      exports.geoConicConformal = conicConformal;
      exports.geoConicConformalRaw = conicConformalRaw;
      exports.geoConicEqualArea = conicEqualArea;
      exports.geoConicEqualAreaRaw = conicEqualAreaRaw;
      exports.geoConicEquidistant = conicEquidistant;
      exports.geoConicEquidistantRaw = conicEquidistantRaw;
      exports.geoDistance = distance;
      exports.geoEquirectangular = equirectangular;
      exports.geoEquirectangularRaw = equirectangularRaw;
      exports.geoGnomonic = gnomonic;
      exports.geoGnomonicRaw = gnomonicRaw;
      exports.geoGraticule = graticule;
      exports.geoGraticule10 = graticule10;
      exports.geoIdentity = identity$8;
      exports.geoInterpolate = interpolate$2;
      exports.geoLength = length$2;
      exports.geoMercator = mercator;
      exports.geoMercatorRaw = mercatorRaw;
      exports.geoOrthographic = orthographic;
      exports.geoOrthographicRaw = orthographicRaw;
      exports.geoPath = index$3;
      exports.geoProjection = projection;
      exports.geoProjectionMutator = projectionMutator;
      exports.geoRotation = rotation;
      exports.geoStereographic = stereographic;
      exports.geoStereographicRaw = stereographicRaw;
      exports.geoStream = geoStream;
      exports.geoTransform = transform$1;
      exports.geoTransverseMercator = transverseMercator;
      exports.geoTransverseMercatorRaw = transverseMercatorRaw;
      Object.defineProperty(exports, '__esModule', { value: true });
    });
  })($__require('16').Buffer, $__require('1a'));
  return module.exports;
});
$__System.registerDynamic("7", ["1b"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("1b");
  return module.exports;
});
$__System.register("1c", ["7"], function (_export) {
  "use strict";

  var d3;

  _export("default", donutChart);

  function donutChart() {

    var width = 500,
        height = 500,
        innerText = "TOTAL TRANS";
    var radius = Math.min(width, height) / 2;
    var innerRad = radius / 4;
    var hoverRad = 15;
    var padAngle = 0;
    var valueFunction = function valueFunction(d) {
      return d.number;
    };
    var constancyFunction = function constancyFunction(d) {
      return d.transactionType;
    };
    var classMap = { "declines": "fill-danger", "authorizations": "fill-success", "chargebacks": "fill-warning" };
    var classMapFunction = function classMapFunction(d) {
      return classMap[d.data.transactionType];
    };

    var innerNumber = 0;

    function chart(container, dataArr) {

      //remove current number
      container.select("text.data").transition().duration(100).style("opacity", 0).remove();

      //update number
      container.append("text").attr("dy", ".95em").style("text-anchor", "middle").style("opacity", 0).attr("class", "data").text(function (d) {
        return innerNumber;
      }).transition().duration(1000).style("opacity", 1);

      //remove and add inner text
      container.selectAll("text.inside").remove();
      container.append("text").attr("dy", "-0.5em").style("text-anchor", "middle").attr("class", "inside").text(function () {
        return innerText;
      });

      var arc = d3.arc().outerRadius(radius).innerRadius(radius - innerRad);

      var hoverArc = d3.arc().outerRadius(radius - innerRad).innerRadius(radius + hoverRad);

      var pie = d3.pie().sort(null).value(valueFunction).padAngle(padAngle);

      var sel = container.selectAll("path").data(pie(dataArr), constancyFunction);

      sel.data(pie(dataArr)).enter().append("path").merge(sel).data(pie(dataArr)).on("mouseover", function (d) {
        d3.select(this).transition().duration(1000).attr("d", hoverArc);
      }).on("mouseout", function (d) {
        d3.select(this).transition().duration(1000).attr("d", arc);
      }).attr("class", classMapFunction).transition().duration(700).attrTween('d', function (d) {
        var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(interpolate(t));
        };
      });

      sel.exit().transition().duration(700).attrTween('d', function (d) {
        var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(interpolate(t));
        };
      }).style("opacity", 0).remove();

      function arcTween(a) {
        var startAngle = a.startAngle; //<-- keep reference to start angle
        var i = d3.interpolate(a.startAngle, a.endAngle, a); //<-- interpolate start to end
        return function (t) {
          return arc({ //<-- return arc at each iteration from start to interpolate end
            startAngle: startAngle,
            endAngle: i(t)
          });
        };
      }
    }

    chart.width = function (value) {
      if (!arguments.length) return width;
      width = value;
      return chart;
    };

    chart.height = function (value) {
      if (!arguments.length) return height;
      height = value;
      return chart;
    };
    chart.innerText = function (value) {
      if (!arguments.length) return innerText;
      innerText = value;
      return chart;
    };
    chart.innerRad = function (value) {
      if (!arguments.length) return innerRad;
      innerRad = value;
      return chart;
    };
    chart.hoverRad = function (value) {
      if (!arguments.length) return hoverRad;
      hoverRad = value;
      return chart;
    };
    chart.padAngle = function (value) {
      if (!arguments.length) return padAngle;
      padAngle = value;
      return chart;
    };
    chart.constancyFunction = function (value) {
      if (!arguments.length) return constancyFunction;
      constancyFunction = value;
      return chart;
    };
    chart.valueFunction = function (value) {
      if (!arguments.length) return valueFunction;
      valueFunction = value;
      return chart;
    };
    chart.classMap = function (value) {
      if (!arguments.length) return classMap;
      classMap = value;
      return chart;
    };
    chart.classMapFunction = function (value) {
      if (!arguments.length) return classMapFunction;
      classMapFunction = value;
      return chart;
    };

    chart.innerNumber = function (value) {
      if (!arguments.length) return innerNumber;
      innerNumber = value;
      return chart;
    };

    return chart;
  }

  return {
    setters: [function (_) {
      d3 = _;
    }],
    execute: function () {}
  };
});
$__System.registerDynamic("1d", ["1e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var _Array$from = $__require("1e")["default"];
  exports["default"] = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    } else {
      return _Array$from(arr);
    }
  };
  exports.__esModule = true;
  return module.exports;
});
$__System.registerDynamic('1f', ['20'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('20')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});
$__System.registerDynamic('21', ['22', '23', '24', '25', '26', '27', '28', '1f'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('22'),
      $export = $__require('23'),
      toObject = $__require('24'),
      call = $__require('25'),
      isArrayIter = $__require('26'),
      toLength = $__require('27'),
      getIterFn = $__require('28');
  $export($export.S + $export.F * !$__require('1f')(function (iter) {
    Array.from(iter);
  }), 'Array', { from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    } });
  return module.exports;
});
$__System.registerDynamic('29', ['2a', '21', '2b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('2a');
  $__require('21');
  module.exports = $__require('2b').Array.from;
  return module.exports;
});
$__System.registerDynamic("1e", ["29"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("29"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("2c", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var define,
      global = this || self,
      GLOBAL = global;
  return module.exports;
});
$__System.registerDynamic('2d', ['2e', '2f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('2e'),
      defined = $__require('2f');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});
$__System.registerDynamic('2a', ['2d', '30'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('2d')(true);
  $__require('30')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});
$__System.registerDynamic("31", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
  return module.exports;
});
$__System.registerDynamic('32', ['33'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('33');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});
$__System.registerDynamic('34', ['32', '2f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('32'),
      defined = $__require('2f');
  module.exports = function (it) {
    return IObject(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('35', ['31', '36', '37', '34', '30'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('31'),
      step = $__require('36'),
      Iterators = $__require('37'),
      toIObject = $__require('34');
  module.exports = $__require('30')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});
$__System.registerDynamic('38', ['35', '37'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('35');
  var Iterators = $__require('37');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});
$__System.registerDynamic("39", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
  return module.exports;
});
$__System.registerDynamic('3a', ['3b', '3c', '3d', '3e', '20'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('3b'),
      descriptor = $__require('3c'),
      setToStringTag = $__require('3d'),
      IteratorPrototype = {};
  $__require('3e')(IteratorPrototype, $__require('20')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});
$__System.registerDynamic('30', ['39', '23', '3f', '3e', '40', '37', '3a', '3d', '3b', '20'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('39'),
      $export = $__require('23'),
      redefine = $__require('3f'),
      hide = $__require('3e'),
      has = $__require('40'),
      Iterators = $__require('37'),
      $iterCreate = $__require('3a'),
      setToStringTag = $__require('3d'),
      getProto = $__require('3b').getProto,
      ITERATOR = $__require('20')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});
$__System.registerDynamic("36", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
  return module.exports;
});
$__System.registerDynamic('41', ['2b', '3b', '42', '20'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var core = $__require('2b'),
      $ = $__require('3b'),
      DESCRIPTORS = $__require('42'),
      SPECIES = $__require('20')('species');
  module.exports = function (KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
  return module.exports;
});
$__System.registerDynamic('43', ['3b', '3e', '44', '22', '45', '2f', '46', '30', '36', '47', '40', '48', '41', '42'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('3b'),
      hide = $__require('3e'),
      redefineAll = $__require('44'),
      ctx = $__require('22'),
      strictNew = $__require('45'),
      defined = $__require('2f'),
      forOf = $__require('46'),
      $iterDefine = $__require('30'),
      step = $__require('36'),
      ID = $__require('47')('id'),
      $has = $__require('40'),
      isObject = $__require('48'),
      setSpecies = $__require('41'),
      DESCRIPTORS = $__require('42'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function (it, create) {
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it)) return 'F';
      if (!create) return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function (that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F') return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };
  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function (key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r) entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS) $.setDesc(C.prototype, 'size', { get: function () {
          return defined(this[SIZE]);
        } });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        if (index !== 'F') that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function (iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function () {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r) entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, entry.k);
        if (kind == 'values') return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  return module.exports;
});
$__System.registerDynamic("3c", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});
$__System.registerDynamic('3e', ['3b', '3c', '42'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('3b'),
      createDesc = $__require('3c');
  module.exports = $__require('42') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});
$__System.registerDynamic('3f', ['3e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('3e');
  return module.exports;
});
$__System.registerDynamic('44', ['3f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var redefine = $__require('3f');
  module.exports = function (target, src) {
    for (var key in src) redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});
$__System.registerDynamic("45", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});
$__System.registerDynamic("40", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});
$__System.registerDynamic('3d', ['3b', '40', '20'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('3b').setDesc,
      has = $__require('40'),
      TAG = $__require('20')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
  return module.exports;
});
$__System.registerDynamic('42', ['49'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('49')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('4a', ['3b', '4b', '23', '49', '3e', '44', '46', '45', '48', '3d', '42'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('3b'),
      global = $__require('4b'),
      $export = $__require('23'),
      fails = $__require('49'),
      hide = $__require('3e'),
      redefineAll = $__require('44'),
      forOf = $__require('46'),
      strictNew = $__require('45'),
      isObject = $__require('48'),
      setToStringTag = $__require('3d'),
      DESCRIPTORS = $__require('42');
  module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function (target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base();
        if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = this._c[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      });
      if ('size' in proto) $.setDesc(C.prototype, 'size', { get: function () {
          return this._c.size;
        } });
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  return module.exports;
});
$__System.registerDynamic('4c', ['43', '4a'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var strong = $__require('43');
  $__require('4a')('Set', function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, { add: function add(value) {
      return strong.def(this, value = value === 0 ? 0 : value, value);
    } }, strong);
  return module.exports;
});
$__System.registerDynamic('25', ['4d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('4d');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});
$__System.registerDynamic('26', ['37', '20'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('37'),
        ITERATOR = $__require('20')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    return module.exports;
});
$__System.registerDynamic('48', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});
$__System.registerDynamic('4d', ['48'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('48');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic("2e", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});
$__System.registerDynamic('27', ['2e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('2e'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});
$__System.registerDynamic("37", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
  return module.exports;
});
$__System.registerDynamic('28', ['4e', '20', '37', '2b'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('4e'),
        ITERATOR = $__require('20')('iterator'),
        Iterators = $__require('37');
    module.exports = $__require('2b').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    return module.exports;
});
$__System.registerDynamic('46', ['22', '25', '26', '4d', '27', '28'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('22'),
      call = $__require('25'),
      isArrayIter = $__require('26'),
      anObject = $__require('4d'),
      toLength = $__require('27'),
      getIterFn = $__require('28');
  module.exports = function (iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      call(iterator, f, step.value, entries);
    }
  };
  return module.exports;
});
$__System.registerDynamic("33", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});
$__System.registerDynamic('4f', ['4b'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('4b'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
    return module.exports;
});
$__System.registerDynamic('47', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});
$__System.registerDynamic('20', ['4f', '47', '4b'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('4f')('wks'),
        uid = $__require('47'),
        Symbol = $__require('4b').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
    return module.exports;
});
$__System.registerDynamic('4e', ['33', '20'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('33'),
        TAG = $__require('20')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    return module.exports;
});
$__System.registerDynamic('50', ['46', '4e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var forOf = $__require('46'),
      classof = $__require('4e');
  module.exports = function (NAME) {
    return function toJSON() {
      if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  return module.exports;
});
$__System.registerDynamic('51', ['23', '50'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('23');
  $export($export.P, 'Set', { toJSON: $__require('50')('Set') });
  return module.exports;
});
$__System.registerDynamic('52', ['2c', '2a', '38', '4c', '51', '2b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('2c');
  $__require('2a');
  $__require('38');
  $__require('4c');
  $__require('51');
  module.exports = $__require('2b').Set;
  return module.exports;
});
$__System.registerDynamic("53", ["52"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("52"), __esModule: true };
  return module.exports;
});
$__System.register('54', [], function (_export) {
  'use strict';

  var dataJSON;
  return {
    setters: [],
    execute: function () {
      dataJSON = '{"sig_debit":{"All Issuers":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"Total","mcc_name":"Total","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"}],"My Financial Institution":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"Total","mcc_name":"Total","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"}],"Issuer 1":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"Total","mcc_name":"Total","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"}],"Issuer 2":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"Total","mcc_name":"Total","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"}],"Issuer CUs":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"Total","mcc_name":"Total","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"}]},"pin_debit":{"All Issuers":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"Total","mcc_name":"Total","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"}],"My Financial Institution":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"Total","mcc_name":"Total","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"}],"Issuer 1":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"Total","mcc_name":"Total","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"}],"Issuer 2":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"Total","mcc_name":"Total","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"}],"Issuer CUs":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"Total","mcc_name":"Total","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"}]},"sig_credit":{"All Issuers":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"Total","mcc_name":"Total","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"}],"My Financial Institution":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"Total","mcc_name":"Total","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"}],"Issuer 1":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"Total","mcc_name":"Total","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"}],"Issuer 2":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"Total","mcc_name":"Total","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"}],"Issuer CUs":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"Total","mcc_name":"Total","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"}]},"bin 1":{"My Financial Institution":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"Total","mcc_name":"Total","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"}]},"bin 2":{"My Financial Institution":[{"mcc":"5311","mcc_name":"Department Store","n_trans":"13500645","amt_sale":"410057046.4","amt_fee":"6841539.66","n_card":"3516257","avg_sale":"30.37","avg_fee":"0.50675","trans_pc":"3.839493245","sale_pc":"116.61","fee_pc":"1.94568"},{"mcc":"5411","mcc_name":"Grocery","n_trans":"84462","amt_sale":"2174070.81","amt_fee":"24905.26522","n_card":"15271","avg_sale":"25.74","avg_fee":"0.29486","trans_pc":"5.530875516","sale_pc":"142.36","fee_pc":"1.63088"},{"mcc":"5651","mcc_name":"Family Clothing","n_trans":"98607","amt_sale":"3534368.75","amt_fee":"24944.9153","n_card":"41206","avg_sale":"35.84","avg_fee":"0.25297","trans_pc":"2.393025288","sale_pc":"85.77","fee_pc":"0.60537"},{"mcc":"5814","mcc_name":"Fast Food","n_trans":"1740167","amt_sale":"51407298.63","amt_fee":"991155.0007","n_card":"436500","avg_sale":"29.54","avg_fee":"0.56957","trans_pc":"3.986636884","sale_pc":"117.77","fee_pc":"2.27068"},{"mcc":"5912","mcc_name":"Pharmacies","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"},{"mcc":"Total","mcc_name":"Total","n_trans":"2880427","amt_sale":"91878232.95","amt_fee":"1199707.591","n_card":"654373","avg_sale":"31.89","avg_fee":"0.4165","trans_pc":"4.401812116","sale_pc":"140.4","fee_pc":"1.83336"}]}}';

      _export('dataJSON', dataJSON);
    }
  };
});
$__System.register("9", ["54"], function (_export) {
  /**
   *@module model
   *@description model depends on a json file of insights data existing
   * the model presumes that the data is formatted as specified in
   * the csv-parser project (https://github.com/unisaurus-rex/csv-parser) 
   */

  /***** local packages *****/

  /***** model *****/
  "use strict";

  var dataJSON, insightsData;

  /**
   * reviver callback passed as second argument to JSON.parse
   * @function typeConverter
   * @param {string} key - key from a json string
   * @param {string} value - value belonging to key in json string
   * @returns {float | int}
   * @description convert a data value from a json string to the appropriate type
   */

  _export("getInsightsData", getInsightsData);

  /**
   * public interface for retrieving data
   * @function getInsightsData
   * @param {string} txn_type - transaction type you want to retrieve data for
   * @param {string} [fi] - financial instituation you want to retrieve data for  
   * @returns {Obj}
   * @description retrieve data for a specific transaction type, or optionally, a fi of a transaction type
   */

  function getInsightsData(txn_type, fi) {
    var o = insightsData[txn_type];

    if (fi) {
      return o[fi];
    }

    return o;
  }

  function typeConverter(key, value) {
    // reviver passes key as string
    switch (key) {
      case "amt_fee":
        return parseFloat(value);
        break;
      case "amt_sale":
        return parseFloat(value);
        break;
      case "avg_fee":
        return parseFloat(value);
        break;
      case "avg_sale":
        return parseFloat(value);
        break;
      case "fee_pc":
        return parseFloat(value);
        break;
      case "n_card":
        return parseInt(value);
        break;
      case "n_trans":
        return parseInt(value);
        break;
      case "sale_pc":
        return parseFloat(value);
        break;
      case "trans_pc":
        return parseFloat(value);
        break;
      default:
        return value;
        break;
    }
  }
  return {
    setters: [function (_) {
      dataJSON = _.dataJSON;
    }],
    execute: function () {
      insightsData = JSON.parse(dataJSON, typeConverter);
    }
  };
});
$__System.register("55", ["9", "53", "1d", "a", "1e"], function (_export) {
  var getInsightsData, _Set, _toConsumableArray, _Object$keys, _Array$from, testing;

  /**
   * Take data from the model for a specific transaction type and return
   * a data structure that can be used by the table drawing function
   * @function getData
   * @returns {function} - configurable function that can be used to format table data 
   */

  function getData() {
    var txnType;

    function dataBuilder(param) {
      var insightsData = getInsightsData(txnType); // result is object with keys for each fi and values of arrays of objects

      // get list of unique mcc_names
      var mccNames = uniqueMccNames(insightsData);

      // use list of names to build array of row objects
      return buildTableData(insightsData, param, mccNames);
    };

    dataBuilder.txnType = function (type) {
      if (!arguments.length) {
        return txnType;
      }

      txnType = type;
    };

    return dataBuilder;
  }

  /***** Private Functions *****/
  // this var for exporting functions to be tested only, not intended to be used in code

  /**
   * Find the unique mcc_name properties
   * @private
   * @function uniqueMccNames
   * @param {Object} data - object belonging to transaction type in the model
   * @returns {string[]}
   */
  function uniqueMccNames(data) {
    // for each fi, get all mcc_names, result is array of arrays
    var fiNames = _Object$keys(data);
    var mccArrays = fiNames.map(function (fi) {
      var arr = data[fi];
      return arr.map(function (obj) {
        return obj.mcc_name;
      });
    });

    // join arrays to form single array
    var allMccNames = mccArrays.reduce(function (res, current) {
      return res.concat(current);
    }, []);

    // remove repeated values
    return _Array$from(new _Set(allMccNames));
  }

  /**
   * Return the data structure needed by the table drawing function
   * @private
   * @function buildTableData
   * @param {Object} data - object belonging to transaction type in the model
   * @param {string} param - value to extract
   * @param {string[]} mccNames - mccNames to use for columns and headers
   * @returns {Object[]} array of objects
   */
  function buildTableData(data, param, mccNames) {
    // need to build one object per fi
    var fiNames = _Object$keys(data);
    // each object should have key/values = mcc_name: param
    // each object also needs an fi key
    var tableData = fiNames.map(function (fi) {
      // value of each fi key is an array of objects
      // table is expecting array of objects, one object per row
      // reduce array of objects to one object
      var rowObj = data[fi].reduce(function (res, obj) {
        // extract the requested param from the object
        var key = obj.mcc_name;
        res[key] = obj[param];
        return res;
      }, {});

      // add an fi key
      rowObj["fi"] = fi;

      return rowObj;
    });

    tableData.columns = ["fi"].concat(_toConsumableArray(mccNames));
    tableData.headers = ["FI"].concat(_toConsumableArray(mccNames));

    return tableData;
  }
  return {
    setters: [function (_2) {
      getInsightsData = _2.getInsightsData;
    }, function (_) {
      _Set = _["default"];
    }, function (_d) {
      _toConsumableArray = _d["default"];
    }, function (_a) {
      _Object$keys = _a["default"];
    }, function (_e) {
      _Array$from = _e["default"];
    }],
    execute: function () {
      /**
       * @module tableController
       */

      "use strict";

      _export("getData", getData);

      testing = { uniqueMccNames: uniqueMccNames,
        buildTableData: buildTableData
      };

      _export("testing", testing);
    }
  };
});
$__System.registerDynamic("3b", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});
$__System.registerDynamic('56', ['3b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('3b');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});
$__System.registerDynamic("57", ["56"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("56"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("58", ["57"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("57")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
  return module.exports;
});
$__System.registerDynamic("59", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
  return module.exports;
});
$__System.registerDynamic("2f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('24', ['2f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('2f');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('4b', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('5a', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('22', ['5a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('5a');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
$__System.registerDynamic('23', ['4b', '2b', '22'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('4b'),
      core = $__require('2b'),
      ctx = $__require('22'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});
$__System.registerDynamic("49", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
$__System.registerDynamic('5b', ['23', '2b', '49'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('23'),
        core = $__require('2b'),
        fails = $__require('49');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
    return module.exports;
});
$__System.registerDynamic('5c', ['24', '5b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('24');
  $__require('5b')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});
$__System.registerDynamic('2b', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('5d', ['5c', '2b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('5c');
  module.exports = $__require('2b').Object.keys;
  return module.exports;
});
$__System.registerDynamic("a", ["5d"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("5d"), __esModule: true };
  return module.exports;
});
$__System.register('5e', ['58', '59', 'a'], function (_export) {
  var _createClass, _classCallCheck, _Object$keys, Checkboxes;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_a) {
      _Object$keys = _a['default'];
    }],
    execute: function () {
      /**
       * @module checkboxes
       */

      /** Track a group of checkboxes and their state (checked or unchecked) */
      'use strict';

      Checkboxes = (function () {
        /**
         * Create a group of checkboxes, one for each name in namesArr. If valuesArr is not provided, each checkbox value defaults to false
         * @param {string[]} namesArr - the name of each checkbox you want to track
         * @param {bool[]} [valuesArr] - the starting value of each checkbox in nameArr, true means the checkbox is checked
         */

        function Checkboxes(namesArr, valuesArr) {
          _classCallCheck(this, Checkboxes);

          // Case 1: only namesArr passed as argument, initialize checkbox properties to false by default
          if (arguments.length == 1) {
            this.checkboxes = namesArr.reduce(function (result, val) {
              result[val] = false;
              return result;
            }, {});
          } else if (arguments.length == 2) {
            // case 2: namesArr and valuesArr provided
            // use valuesArr to set starting value of each checkbox
            this.checkboxes = namesArr.reduce(function (result, val, idx) {
              result[val] = valuesArr[idx];
              return result;
            }, {});
          } else {
            // case 3: throw an error
            throw new Error('Attempted to instantiate Checkboxes class with no parameters');
          }
        }

        /**
         * Return an object containing all checkbox names and values
         */

        _createClass(Checkboxes, [{
          key: 'getAll',
          value: function getAll() {
            return this.checkboxes;
          }

          /**
           * return an array of all properties whose value is true
           */
        }, {
          key: 'getAllChecked',
          value: function getAllChecked() {
            // get array of checkbox names
            var keys = _Object$keys(this.checkboxes);
            var c = this.checkboxes;

            // go through each checkbox name and drop any that don't have a value of true
            return keys.filter(function (key) {
              return c[key];
            });
          }

          /**
           * Return the value belonging to the checkbox associated with name
           * @param {string} name - name of the checkbox
           */
        }, {
          key: 'getValue',
          value: function getValue(name) {
            return this.checkboxes[name];
          }

          /**
           * Flip the value of the checkbox associated with name
           * @param {string} name - name of the checkbox
           * @returns {array}
           */
        }, {
          key: 'toggle',
          value: function toggle(name) {
            this.checkboxes[name] = !this.checkboxes[name];
            return this.getAllChecked();
          }
        }]);

        return Checkboxes;
      })();

      _export('default', Checkboxes);
    }
  };
});
$__System.register('5f', ['5e'], function (_export) {
  /**
   * @module checkboxObserver
   */

  /**
   * @callback changeCallback
   * @param {string[]} string values associated with the value attribute of input checkboxes
   */

  /**
   * Respond to bootstrap checkboxes being checked
   * @function addBootstrapCheckboxObservers
   * @returns {function} configurable function a la Mike Bostock style
   */
  'use strict';

  var Checkboxes;

  /**
   * Expose a way to track checkbox toggling that can be used by other functions
   * to drive their behavior
   * @function checkboxChangeBuilder 
   * @param {Object} boxes - Checkboxes class
   * @param {changeCallback} callback  
   * @returns {function} a function that accepts a single value, this function can be passed to mutationFuncBuilder  
   */

  _export('default', addBootstrapCheckboxObservers);

  function addBootstrapCheckboxObservers() {

    var elementIds, // array of strings, each string is the id of a label wrapping a checkbox (bootstrap checkbox style)
    values, // array of strings, each string is the value attribute of an input checkbox
    defaults, // array of bools, the starting state of each checkbox in values, true = checked
    callback; // changeCallback

    /**
     * Add mutation observers for each element in elementIds
     * @function observers
     * @returns {Object} Checkboxes class
     */
    function observers() {
      var boxes = new Checkboxes(values, defaults);

      // build the callback that is passed to addCheckboxObserver
      var changeCallback = checkboxChangeBuilder(boxes, callback);

      // get the DOM element tied to each id
      var domEls = elementIds.map(function (id) {
        return document.getElementById(id);
      });

      // add observers for each item
      domEls.forEach(function (el) {
        return addCheckboxObserver(el, changeCallback);
      });

      return boxes;
    }

    // configuration functions (getters and setters)
    observers.elementIds = function (arr) {
      if (!arguments.length) {
        return elementIds;
      }

      elementIds = arr;
      return observers;
    };

    observers.values = function (arr) {
      if (!arguments.length) {
        return values;
      }

      values = arr;
      return observers;
    };

    observers.defaults = function (arr) {
      if (!arguments.length) {
        return defaults;
      }

      defaults = arr;
      return observers;
    };

    observers.callback = function (func) {
      if (!arguments.length) {
        return callback;
      }

      callback = func;
      return observers;
    };

    return observers;
  }

  function checkboxChangeBuilder(boxes, callback) {
    return function (value) {
      callback(boxes.toggle(value));
    };
  }

  /*
   * @function addObserver
   * @param el {DOM Node} a dom element 
   * @param callback {function} function returned by checkboxChangeBuilder
   * @description execute a callback function when a bootstrap checkbox is checkedi or unchecked
   */
  function addCheckboxObserver(el, callback) {
    // wrap the callback so it can be used if the mutation alters the checkbox
    var mutationFunc = mutationFuncBuilder(callback);
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(mutationFunc);
    });

    // mutation observer config object, use oldValue: true so we can compare current value to old value
    // otherwise we won't be able to tell if the active value changed
    var config = { attributes: true, attributeOldValue: true, attributeFilter: ['class'] };

    // apply the observer to el
    observer.observe(el, config);
  }

  /**
   * Return a function that can be called by mutation observer
   * @function mutationFuncBuilder
   * @param {function} changeCallback - function that takes a checkbox value
   * @returns {function} function that accepts a mutation record
   */
  function mutationFuncBuilder(changeCallback) {
    return function (mutation) {
      /* mutation will track the old and new value, two cases that we care about
         1) added active class to the label
         2) removed active class from the label
         mutation will fire anytime a class is added or removed, the class may or may
         not be the active class that signals a checkbox click
         so we check to see if the active class is the class that changed betwee old and new
      */
      var newHasActive = mutation.target.classList.contains('active');
      var oldHasActive = mutation.oldValue.includes('active');
      if (newHasActive && !oldHasActive || oldHasActive && !newHasActive) {
        // get the input element nested in the label element so we can pass its value to changeCallback
        var elArr = mutation.target.getElementsByTagName('input');
        if (elArr.length) {
          var inputEl = elArr[0];
          changeCallback(inputEl.value);
        }
      }
    };
  }
  return {
    setters: [function (_e) {
      Checkboxes = _e['default'];
    }],
    execute: function () {}
  };
});
$__System.register('1', ['3', '5', '6', '7', '8', '9', '55', '5e', 'b', 'c', '1c', '5f'], function (_export) {
  /***** jspm packages *****/

  /************************************************ Grouped Bar Chart ************************************************/

  //get data from controller

  /***** local packages *****/
  'use strict';

  var jquery, bootstrap, groupedBarChart, d3, groupedBarController, getInsightsData, getTableData, Checkboxes, donutController, tableChart, donutChart, addBootstrapCheckboxObservers, getData, groupedBarData, width, height, margin, gBarSvg, classMapFunctionBar, classMapBar, formatPercent, groupRangeFunction, x0, jsonGroupNames, x1, y, xAxis, yAxis, test, ids, vals, defaults, cback, observersFunc, table, tableDataFunc, tableData, drawTable, getDonutData, myFinancialInstitution, constancyFunction, classMapFunction, classMap, svg, valueFunction, innerNumber, testDonut, idsDonutOne, valsDonutOne, defaultsDonutOne, cbackDonutOne, observersFuncDonutOne, svgTwo, valueFunctionTwo, innerNumberTwo, testTwo, idsDonutTwo, valsDonutTwo, defaultsDonutTwo, cbackDonutTwo, observersFuncDonutTwo, svgThree, valueFunctionThree, innerNumberThree, testThree, idsDonutThree, valsDonutThree, defaultsDonutThree, cbackDonutThree, observersFuncDonutThree;
  return {
    setters: [function (_) {
      jquery = _['default'];
    }, function (_2) {
      bootstrap = _2['default'];
    }, function (_5) {
      groupedBarChart = _5['default'];
    }, function (_3) {
      d3 = _3;
    }, function (_6) {
      groupedBarController = _6['default'];
    }, function (_4) {
      getInsightsData = _4.getInsightsData;
    }, function (_7) {
      getTableData = _7.getData;
    }, function (_e) {
      Checkboxes = _e['default'];
    }, function (_b) {
      donutController = _b['default'];
    }, function (_c) {
      tableChart = _c['default'];
    }, function (_c2) {
      donutChart = _c2['default'];
    }, function (_f) {
      addBootstrapCheckboxObservers = _f['default'];
    }],
    execute: function () {
      getData = groupedBarController().txnType("pin_debit");
      groupedBarData = getData();

      //chart parameters
      width = 500;
      height = 100;
      margin = { top: 20, right: 20, bottom: 0, left: 0 };

      width = width - margin.right - margin.left;
      height = height - margin.top - margin.bottom;

      //create svg
      gBarSvg = d3.select("div#chartid").append("div").classed("svg-container", true).append("svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 " + width + " " + height)
      //class to make it responsive
      .classed("svg-content-responsive", true);

      // stuff to pass to config

      classMapFunctionBar = function classMapFunctionBar(d) {
        return classMapBar[d.name];
      };

      classMapBar = { "Department Store": "fill-blue", "Grocery": "fill-red",
        "Family Clothing": "fill-gray-light", "Fast Food": "fill-orange-yellow",
        "Pharmacies": "fill-teal", "Total": "fill-gray-dark" };

      // Axes
      //formatting for y axis

      formatPercent = function formatPercent(d) {
        return d + "%";
      };

      //define function to define range for a group

      groupRangeFunction = function groupRangeFunction(d) {
        return "translate(" + x0(d.Issuer) + ",0)";
      };

      //create scales
      x0 = d3.scaleBand().rangeRound([0, width]).domain(groupedBarData.map(function (d) {
        return d.Issuer;
      }));

      // used for scales
      jsonGroupNames = groupedBarData.columns;

      // scales
      x1 = d3.scaleBand().paddingOuter(1).domain(jsonGroupNames).rangeRound([0, x0.bandwidth()]);
      y = d3.scaleLinear().range([height, 0]).domain([0, d3.max(groupedBarData, function (d) {
        return d3.max(d.groups, function (d) {
          return d.value;
        });
      })]);

      ;

      //create axes
      xAxis = d3.axisBottom().scale(x0).tickSize(0).tickPadding(10);
      yAxis = d3.axisLeft().scale(y).tickFormat(formatPercent).ticks(5).tickSizeInner(-width).tickSizeOuter(0).tickPadding(0);

      //draw axes
      gBarSvg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
      gBarSvg.append("g").attr("class", "y axis").call(yAxis);

      //chart config

      //.append("text")
      //.attr("transform", "rotate(-90)")
      //.attr("y", 6)
      //.attr("dy", ".71em")
      //.style("text-anchor", "end")
      //.text("percentage")
      test = groupedBarChart().width(width).height(height).classMap(classMapBar).classMapFunction(classMapFunctionBar).x0(x0).x1(x1).y(y).groupRangeFunction(groupRangeFunction);

      //draw chart
      test(gBarSvg, groupedBarData);

      /******* GROUPED BAR CHECKBOXES *******/

      // add observers
      ids = ['groupedCbox1', 'groupedCbox2', 'groupedCbox3', 'groupedCbox4', 'groupedCbox5', "groupedCbox6"];
      vals = ['Department Store', 'Pharmacies', 'Family Clothing', 'Fast Food', "Total", "Grocery"];
      defaults = [true, true, true, true, true, true];

      // function to execute when a change happens

      cback = function cback(arr) {
        //add issuer to object
        arr.push("Issuer");

        //filter data
        var filteredData = groupedBarData.map(function (d) {
          return arr.reduce(function (result, key) {
            result[key] = d[key];
            return result;
          }, {});
        });

        //add group attribute
        var jsonGroupNames = d3.keys(filteredData[0]).filter(function (key) {
          return key !== "Issuer";
        });
        filteredData.forEach(function (d) {
          d.groups = jsonGroupNames.map(function (name) {
            return { name: name, value: +d[name] };
          });
        });

        //redraw chart
        test(gBarSvg, filteredData);
      };

      //config
      observersFunc = addBootstrapCheckboxObservers().elementIds(ids).values(vals).defaults(defaults).callback(cback);

      observersFunc();

      /************************************************ TABLE ************************************************/

      // add table to page
      table = d3.select("#drawtable").append("table").attr("class", "table");

      // table should have a head and body
      table.append("thead");
      table.append("tbody");

      // get data for drawing the table
      tableDataFunc = getTableData();

      tableDataFunc.txnType("sig_debit");
      tableData = tableDataFunc('n_trans');

      // draw the table
      drawTable = tableChart();

      drawTable(table, tableData);

      /************************************************ DONUTS ************************************************/

      /********** USED FOR ALL DONUTS **********/
      //get data from controller
      getDonutData = donutController().txnType("pin_debit").fi("My Financial Institution");
      myFinancialInstitution = getDonutData();

      //config objects

      constancyFunction = function constancyFunction(d) {
        return d.mcc_name;
      };

      classMapFunction = function classMapFunction(d) {
        return classMap[d.data.mcc_name];
      };

      classMap = { "Department Store": "fill-blue", "Grocery": "fill-red",
        "Family Clothing": "fill-gray-light", "Fast Food": "fill-orange-yellow",
        "Pharmacies": "fill-teal" };

      /********* Donut 1 (AVG INTERCHANGE) *********/
      //draw svg

      svg = d3.select("div#donutid").classed("svg-container", true).append("svg").attr("viewBox", "0 0 " + 500 + " " + 500)
      //class for responsivenesss
      .classed("svg-content-responsive-pie", true).attr("width", 500).attr("height", 500).append("g").attr("id", "donutchart").attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")");

      valueFunction = function valueFunction(d) {
        return d.avg_fee;
      };

      innerNumber = 0;

      myFinancialInstitution.forEach(function (d, j) {
        innerNumber += d.avg_fee;
      });
      innerNumber = innerNumber / myFinancialInstitution.length;

      //config donut
      testDonut = donutChart().classMap(classMap).valueFunction(valueFunction).constancyFunction(constancyFunction).classMapFunction(classMapFunction).innerRad(90).innerNumber(innerNumber).innerText("AVG INTERCHANGE").padAngle(0.03);

      //draw donut
      testDonut(svg, myFinancialInstitution);

      /********* DONUT 1 CHECKBOXES *********/

      // add observers
      idsDonutOne = ['groupedCbox7', 'groupedCbox8', 'groupedCbox9', 'groupedCbox10', 'groupedCbox11'];
      valsDonutOne = ['Department Store', 'Pharmacies', 'Family Clothing', 'Fast Food', "Grocery"];
      defaultsDonutOne = [true, true, true, true, true];

      // function to execute when a change happens

      cbackDonutOne = function cbackDonutOne(arr) {

        //filter data
        var filteredDonutOne = myFinancialInstitution.filter(function (obj) {
          if (arr.indexOf(obj.mcc_name) == -1) {
            return false;
          }
          return true;
        });

        //update inner number
        innerNumber = 0;
        filteredDonutOne.forEach(function (d, j) {
          innerNumber += d.avg_fee;
        });
        innerNumber = innerNumber / filteredDonutOne.length;
        if (!innerNumber || innerNumber == NaN) {
          innerNumber = 0;
        }
        testDonut.innerNumber(innerNumber);

        //redraw donut
        testDonut(svg, filteredDonutOne);
      };

      //config checkboxes
      observersFuncDonutOne = addBootstrapCheckboxObservers().elementIds(idsDonutOne).values(valsDonutOne).defaults(defaultsDonutOne).callback(cbackDonutOne);

      observersFuncDonutOne();

      /********* Donut 2 (TOTAL SALES) *********/

      //draw svg
      svgTwo = d3.select("div#donuttwo").classed("svg-container", true).append("svg").attr("viewBox", "0 0 " + 500 + " " + 500)
      //class for responsivenesss
      .classed("svg-content-responsive-pie", true).attr("width", 500).attr("height", 500).append("g").attr("id", "donutchart").attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")");

      valueFunctionTwo = function valueFunctionTwo(d) {
        return d.amt_sale;
      };

      innerNumberTwo = 0;

      myFinancialInstitution.forEach(function (d, j) {
        innerNumberTwo += d.amt_sale;
      });

      //config
      testTwo = donutChart().classMap(classMap).valueFunction(valueFunctionTwo).constancyFunction(constancyFunction).classMapFunction(classMapFunction).innerRad(90).innerNumber(innerNumberTwo).innerText("TOTAL SALES").padAngle(0.03);

      //draw donut
      testTwo(svgTwo, myFinancialInstitution);

      /********* DONUT 2 CHECKBOXES *********/

      // add observers
      idsDonutTwo = ['groupedCbox12', 'groupedCbox13', 'groupedCbox14', 'groupedCbox15', 'groupedCbox16'];
      valsDonutTwo = ['Department Store', 'Pharmacies', 'Family Clothing', 'Fast Food', "Grocery"];
      defaultsDonutTwo = [true, true, true, true, true];

      // function to execute when a change happens

      cbackDonutTwo = function cbackDonutTwo(arr) {

        var filteredDonutTwo = myFinancialInstitution.filter(function (obj) {
          if (arr.indexOf(obj.mcc_name) == -1) {
            return false;
          }
          return true;
        });

        //update inner number
        innerNumberTwo = 0;
        filteredDonutTwo.forEach(function (d, j) {
          innerNumberTwo += d.amt_sale;
        });
        testTwo.innerNumber(innerNumberTwo);

        //redraw donut
        testTwo(svgTwo, filteredDonutTwo);
      };

      //config checkboxes
      observersFuncDonutTwo = addBootstrapCheckboxObservers().elementIds(idsDonutTwo).values(valsDonutTwo).defaults(defaultsDonutTwo).callback(cbackDonutTwo);

      observersFuncDonutTwo();

      /********* Donut 3 (TOTAL TRANS) *********/
      //draw svg
      svgThree = d3.select("div#donutthree").classed("svg-container", true).append("svg").attr("viewBox", "0 0 " + 500 + " " + 500)
      //class for responsivenesss
      .classed("svg-content-responsive-pie", true).attr("width", 500).attr("height", 500).append("g").attr("id", "donutchart").attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")");

      valueFunctionThree = function valueFunctionThree(d) {
        return d.n_trans;
      };

      innerNumberThree = 0;

      myFinancialInstitution.forEach(function (d, j) {
        innerNumberThree += d.n_trans;
      });

      //config
      testThree = donutChart().classMap(classMap).valueFunction(valueFunctionThree).constancyFunction(constancyFunction).classMapFunction(classMapFunction).innerRad(90).innerNumber(innerNumberThree).innerText("TOTAL TRANS").padAngle(0.03);

      //draw donut
      testThree(svgThree, myFinancialInstitution);

      /********* DONUT 3 CHECKBOXES *********/

      // add observers
      idsDonutThree = ['groupedCbox17', 'groupedCbox18', 'groupedCbox19', 'groupedCbox20', 'groupedCbox21'];
      valsDonutThree = ['Department Store', 'Pharmacies', 'Family Clothing', 'Fast Food', "Grocery"];
      defaultsDonutThree = [true, true, true, true, true];

      // function to execute when a change happens

      cbackDonutThree = function cbackDonutThree(arr) {

        //filter data
        var filteredDonutThree = myFinancialInstitution.filter(function (obj) {
          if (arr.indexOf(obj.mcc_name) == -1) {
            return false;
          }
          return true;
        });

        //update inner number
        innerNumberThree = 0;
        filteredDonutThree.forEach(function (d, j) {
          innerNumberThree += d.n_trans;
        });
        testThree.innerNumber(innerNumberThree);

        //redraw donut
        testThree(svgThree, filteredDonutThree);
      };

      //config checkboxes
      observersFuncDonutThree = addBootstrapCheckboxObservers().elementIds(idsDonutThree).values(valsDonutThree).defaults(defaultsDonutThree).callback(cbackDonutThree);

      observersFuncDonutThree();
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map