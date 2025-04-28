import { ref as $, defineComponent as Le, createElementBlock as U, openBlock as F, Fragment as at, renderList as lt, unref as ue, normalizeClass as Ee, createElementVNode as P, createCommentVNode as K, toDisplayString as ct } from "vue";
import { defineStore as ee } from "pinia";
import { useRouter as ut } from "vue-router";
const I = $([]);
function ft() {
  const e = (n, r) => {
    const s = Date.now();
    I.value.push({ id: s, type: n, message: r }), console.log("Toast : " + I.value), setTimeout(() => {
      t(s);
    }, 5e3);
  }, t = (n) => {
    I.value = I.value.filter((r) => r.id !== n);
  };
  return {
    toasts: I,
    createToast: e,
    removeToast: t
  };
}
const dt = {
  id: "toast-container",
  class: "absolute bottom-5 right-5"
}, pt = {
  key: 0,
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, ht = {
  key: 1,
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, mt = {
  key: 2,
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, gt = { class: "text-sm font-normal" }, bt = ["onClick"], or = /* @__PURE__ */ Le({
  __name: "Toast",
  setup(e) {
    const { toasts: t, removeToast: n } = ft(), r = (o) => {
      switch (o) {
        case "success":
          return "text-green-500 bg-green-100";
        case "danger":
          return "text-red-500 bg-red-100";
        case "warning":
          return "text-orange-500 bg-orange-100";
        default:
          return "";
      }
    }, s = (o) => {
      switch (o) {
        case "success":
          return "border-l-4 border-green-500 text-green-500 bg-green-100";
        case "danger":
          return "border-l-4 border-red-500 text-red-500 bg-red-100";
        case "warning":
          return "border-l-4 border-orange-500 text-orange-500 bg-orange-100";
        default:
          return "";
      }
    };
    return (o, i) => (F(), U("div", dt, [
      (F(!0), U(at, null, lt(ue(t), (l) => (F(), U("div", {
        key: l.id,
        class: Ee([s(l.type), "flex items-center gap-3 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"])
      }, [
        P("div", {
          class: Ee([r(l.type), "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"])
        }, [
          l.type === "success" ? (F(), U("svg", pt, i[0] || (i[0] = [
            P("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" }, null, -1)
          ]))) : K("", !0),
          l.type === "danger" ? (F(), U("svg", ht, i[1] || (i[1] = [
            P("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" }, null, -1)
          ]))) : K("", !0),
          l.type === "warning" ? (F(), U("svg", mt, i[2] || (i[2] = [
            P("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" }, null, -1)
          ]))) : K("", !0)
        ], 2),
        P("div", gt, ct(l.message), 1),
        P("button", {
          onClick: (p) => ue(n)(l.id),
          class: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
        }, i[3] || (i[3] = [
          P("svg", {
            class: "w-3 h-3",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 14 14"
          }, [
            P("path", {
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            })
          ], -1)
        ]), 8, bt)
      ], 2))), 128))
    ]));
  }
}), wt = ee("spinner", () => {
  const e = $(!1);
  function t() {
    e.value = !0;
  }
  function n() {
    e.value = !1;
  }
  return { isVisible: e, showSpinner: t, hideSpinner: n };
}), yt = {
  key: 0,
  class: "loader"
}, _t = /* @__PURE__ */ Le({
  __name: "Spinner",
  setup(e) {
    const t = wt();
    return (n, r) => ue(t).isVisible ? (F(), U("span", yt)) : K("", !0);
  }
}), Et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, ir = /* @__PURE__ */ Et(_t, [["__scopeId", "data-v-17414b6a"]]), St = { role: "", can_delete_user: !1, can_edit_user_role: !1, can_create_role: !1, can_see_logs: !1, can_delete_logs: !1, can_download_logs: !1, can_delete_role: !1, can_see_role_list: !1, can_edit_role: !1, can_add_user_role: !1, can_delete_user_role: !1, can_create_user: !1, can_add_user_to_intervention: !1, can_remove_user_from_intervention: !1, can_access_sav: !1, can_access_be: !1, can_generate_tia_project: !1, can_export_standard_fb_to_xml: !1, tier: 1, color: "" }, xt = { can_delete_user: !1, can_edit_user_role: !1, can_create_role: !1, can_see_logs: !1, can_delete_logs: !1, can_download_logs: !1, can_delete_role: !1, can_see_role_list: !1, can_edit_role: !1, can_add_user_role: !1, can_delete_user_role: !1, can_create_user: !1, can_add_user_to_intervention: !1, can_remove_user_from_intervention: !1, can_access_sav: !1, can_access_be: !1, can_generate_tia_project: !1, can_export_standard_fb_to_xml: !1, tier: 0 }, Rt = ["pink", "yellow", "teal", "red", "blue", "green", "indigo", "purple", "orange", "amber", "lime", "emerald", "cyan", "sky", "violet", "fuchsia", "rose", "stone", "zinc", "neutral", "slate"], Ct = { can_delete_user: "Supprimer un utilisateur", can_edit_user_role: "Editer les rôles d'un utilisateur", can_create_role: "Créer un nouveau rôle", can_see_logs: "Voir les logs", can_delete_logs: "Supprimer les logs", can_download_logs: "Télécharger les logs", can_delete_role: "Supprimer un rôle", can_see_role_list: "Voir la liste des rôles", can_edit_role: "Editer les rôles", can_add_user_role: "Ajouter un rôle à un utilisateur", can_delete_user_role: "Supprimer un rôle à un utilisateur", can_create_user: "Créer un utilisateur", can_add_user_to_intervention: "Ajouter un intervenant à une intervention", can_remove_user_from_intervention: "Supprimer un intervenant d'une intervention", can_access_sav: "Peut acceder aux applications SAV", can_access_be: "Peut acceder aux applications BE", can_generate_tia_project: "Peut Générer un Projet TIA Portal (nécessite TIA OPENESS)", can_export_standard_fb_to_xml: "Peut exporter la Bibliothèque de fonctions standards en XML" }, Be = {
  role: St,
  privilege: xt,
  colorOption: Rt,
  privilegeOption: Ct
};
function De(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Tt } = Object.prototype, { getPrototypeOf: be } = Object, te = /* @__PURE__ */ ((e) => (t) => {
  const n = Tt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => te(t) === e), ne = (e) => (t) => typeof t === e, { isArray: q } = Array, z = ne("undefined");
function At(e) {
  return e !== null && !z(e) && e.constructor !== null && !z(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const je = A("ArrayBuffer");
function Ot(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && je(e.buffer), t;
}
const Nt = ne("string"), T = ne("function"), qe = ne("number"), re = (e) => e !== null && typeof e == "object", kt = (e) => e === !0 || e === !1, X = (e) => {
  if (te(e) !== "object")
    return !1;
  const t = be(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Pt = A("Date"), vt = A("File"), Ut = A("Blob"), Ft = A("FileList"), Lt = (e) => re(e) && T(e.pipe), Bt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = te(e)) === "formdata" || // detect form-data instance
  t === "object" && T(e.toString) && e.toString() === "[object FormData]"));
}, Dt = A("URLSearchParams"), [jt, qt, Mt, It] = ["ReadableStream", "Request", "Response", "Headers"].map(A), Ht = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), q(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Me(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ie = (e) => !z(e) && e !== B;
function fe() {
  const { caseless: e } = Ie(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Me(t, s) || s;
    X(t[o]) && X(r) ? t[o] = fe(t[o], r) : X(r) ? t[o] = fe({}, r) : q(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && J(arguments[r], n);
  return t;
}
const $t = (e, t, n, { allOwnKeys: r } = {}) => (J(t, (s, o) => {
  n && T(s) ? e[o] = De(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), zt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Jt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Vt = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && be(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Wt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Kt = (e) => {
  if (!e) return null;
  if (q(e)) return e;
  let t = e.length;
  if (!qe(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Xt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && be(Uint8Array)), Zt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Gt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Qt = A("HTMLFormElement"), Yt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Se = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), en = A("RegExp"), He = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  J(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, tn = (e) => {
  He(e, (t, n) => {
    if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (T(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, nn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return q(e) ? r(e) : r(String(e).split(t)), n;
}, rn = () => {
}, sn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function on(e) {
  return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const an = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (re(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = q(r) ? [] : {};
        return J(r, (i, l) => {
          const p = n(i, s + 1);
          !z(p) && (o[l] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ln = A("AsyncFunction"), cn = (e) => e && (re(e) || T(e)) && T(e.then) && T(e.catch), $e = ((e, t) => e ? setImmediate : t ? ((n, r) => (B.addEventListener("message", ({ source: s, data: o }) => {
  s === B && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), B.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  T(B.postMessage)
), un = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || $e, a = {
  isArray: q,
  isArrayBuffer: je,
  isBuffer: At,
  isFormData: Bt,
  isArrayBufferView: Ot,
  isString: Nt,
  isNumber: qe,
  isBoolean: kt,
  isObject: re,
  isPlainObject: X,
  isReadableStream: jt,
  isRequest: qt,
  isResponse: Mt,
  isHeaders: It,
  isUndefined: z,
  isDate: Pt,
  isFile: vt,
  isBlob: Ut,
  isRegExp: en,
  isFunction: T,
  isStream: Lt,
  isURLSearchParams: Dt,
  isTypedArray: Xt,
  isFileList: Ft,
  forEach: J,
  merge: fe,
  extend: $t,
  trim: Ht,
  stripBOM: zt,
  inherits: Jt,
  toFlatObject: Vt,
  kindOf: te,
  kindOfTest: A,
  endsWith: Wt,
  toArray: Kt,
  forEachEntry: Zt,
  matchAll: Gt,
  isHTMLForm: Qt,
  hasOwnProperty: Se,
  hasOwnProp: Se,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: He,
  freezeMethods: tn,
  toObjectSet: nn,
  toCamelCase: Yt,
  noop: rn,
  toFiniteNumber: sn,
  findKey: Me,
  global: B,
  isContextDefined: Ie,
  isSpecCompliantForm: on,
  toJSONObject: an,
  isAsyncFn: ln,
  isThenable: cn,
  setImmediate: $e,
  asap: un
};
function g(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(g, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ze = g.prototype, Je = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Je[e] = { value: e };
});
Object.defineProperties(g, Je);
Object.defineProperty(ze, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, s, o) => {
  const i = Object.create(ze);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (l) => l !== "isAxiosError"), g.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const fn = null;
function de(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ve(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xe(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ve(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function dn(e) {
  return a.isArray(e) && !e.some(de);
}
const pn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function se(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, d) {
    return !a.isUndefined(d[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null) return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!p && a.isBlob(f))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, m, d) {
    let w = f;
    if (f && !d && typeof f == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && dn(f) || (a.isFileList(f) || a.endsWith(m, "[]")) && (w = a.toArray(f)))
        return m = Ve(m), w.forEach(function(S, N) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? xe([m], N, o) : i === null ? m : m + "[]",
            c(S)
          );
        }), !1;
    }
    return de(f) ? !0 : (t.append(xe(d, m, o), c(f)), !1);
  }
  const h = [], b = Object.assign(pn, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: de
  });
  function _(f, m) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(f), a.forEach(f, function(w, E) {
        (!(a.isUndefined(w) || w === null) && s.call(
          t,
          w,
          a.isString(E) ? E.trim() : E,
          m,
          b
        )) === !0 && _(w, m ? m.concat(E) : [E]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Re(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function we(e, t) {
  this._pairs = [], e && se(e, this, t);
}
const We = we.prototype;
We.append = function(t, n) {
  this._pairs.push([t, n]);
};
We.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Re);
  } : Re;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function hn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ke(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || hn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new we(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ce {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Xe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mn = typeof URLSearchParams < "u" ? URLSearchParams : we, gn = typeof FormData < "u" ? FormData : null, bn = typeof Blob < "u" ? Blob : null, wn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mn,
    FormData: gn,
    Blob: bn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ye = typeof window < "u" && typeof document < "u", pe = typeof navigator == "object" && navigator || void 0, yn = ye && (!pe || ["ReactNative", "NativeScript", "NS"].indexOf(pe.product) < 0), _n = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", En = ye && window.location.href || "http://localhost", Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ye,
  hasStandardBrowserEnv: yn,
  hasStandardBrowserWebWorkerEnv: _n,
  navigator: pe,
  origin: En
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...Sn,
  ...wn
};
function xn(e, t) {
  return se(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Rn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ze(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), p = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, p ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Cn(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Rn(r), s, n, 0);
    }), n;
  }
  return null;
}
function Tn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const V = {
  transitional: Xe,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Ze(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return xn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return se(
          l ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Tn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || V.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? g.from(l, g.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: x.classes.FormData,
    Blob: x.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  V.headers[e] = {};
});
const An = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), On = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && An[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Te = Symbol("internals");
function H(e) {
  return e && String(e).trim().toLowerCase();
}
function Z(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(Z) : String(e);
}
function Nn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const kn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ae(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Pn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function vn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let C = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, p, c) {
      const u = H(p);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, u);
      (!h || s[h] === void 0 || c === !0 || c === void 0 && s[h] !== !1) && (s[h || p] = Z(l));
    }
    const i = (l, p) => a.forEach(l, (c, u) => o(c, u, p));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !kn(t))
      i(On(t), n);
    else if (a.isHeaders(t))
      for (const [l, p] of t.entries())
        o(p, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = H(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Nn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = H(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ae(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = H(i), i) {
        const l = a.findKey(r, i);
        l && (!n || ae(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ae(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = Z(s), delete n[o];
        return;
      }
      const l = t ? Pn(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Z(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Te] = this[Te] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = H(i);
      r[l] || (vn(s, i), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
C.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(C.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(C);
function le(e, t) {
  const n = this || V, r = t || n, s = C.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ge(e) {
  return !!(e && e.__CANCEL__);
}
function M(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(M, g, {
  __CANCEL__: !0
});
function Qe(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Un(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Fn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[s] = p, r[s] = c;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const _ = u && c - u;
    return _ ? Math.round(b * 1e3 / _) : void 0;
  };
}
function Ln(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), h = u - n;
    h >= r ? i(c, u) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const Q = (e, t, n = 3) => {
  let r = 0;
  const s = Fn(50, 250);
  return Ln((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, p = i - r, c = s(p), u = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: p,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Ae = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Oe = (e) => (...t) => a.asap(() => e(...t)), Bn = x.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, x.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(x.origin),
  x.navigator && /(msie|trident)/i.test(x.navigator.userAgent)
) : () => !0, Dn = x.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function jn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ye(e, t, n) {
  let r = !jn(t);
  return e && (r || n == !1) ? qn(e, t) : t;
}
const Ne = (e) => e instanceof C ? { ...e } : e;
function j(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, h, b) {
    return a.isPlainObject(c) && a.isPlainObject(u) ? a.merge.call({ caseless: b }, c, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(c, u, h, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c, h, b);
    } else return r(c, u, h, b);
  }
  function o(c, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, h) {
    if (h in t)
      return r(c, u);
    if (h in e)
      return r(void 0, c);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u, h) => s(Ne(c), Ne(u), h, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const h = p[u] || s, b = h(e[u], t[u], u);
    a.isUndefined(b) && h !== l || (n[u] = b);
  }), n;
}
const et = (e) => {
  const t = j({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = C.from(i), t.url = Ke(Ye(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let p;
  if (a.isFormData(n)) {
    if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((p = i.getContentType()) !== !1) {
      const [c, ...u] = p ? p.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (x.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Bn(t.url))) {
    const c = s && o && Dn.read(o);
    c && i.set(s, c);
  }
  return t;
}, Mn = typeof XMLHttpRequest < "u", In = Mn && function(e) {
  return new Promise(function(n, r) {
    const s = et(e);
    let o = s.data;
    const i = C.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: p, onDownloadProgress: c } = s, u, h, b, _, f;
    function m() {
      _ && _(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let d = new XMLHttpRequest();
    d.open(s.method.toUpperCase(), s.url, !0), d.timeout = s.timeout;
    function w() {
      if (!d)
        return;
      const S = C.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), R = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: S,
        config: e,
        request: d
      };
      Qe(function(v) {
        n(v), m();
      }, function(v) {
        r(v), m();
      }, R), d = null;
    }
    "onloadend" in d ? d.onloadend = w : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, d.onabort = function() {
      d && (r(new g("Request aborted", g.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new g("Network Error", g.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const R = s.transitional || Xe;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), r(new g(
        N,
        R.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        d
      )), d = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in d && a.forEach(i.toJSON(), function(N, R) {
      d.setRequestHeader(R, N);
    }), a.isUndefined(s.withCredentials) || (d.withCredentials = !!s.withCredentials), l && l !== "json" && (d.responseType = s.responseType), c && ([b, f] = Q(c, !0), d.addEventListener("progress", b)), p && d.upload && ([h, _] = Q(p), d.upload.addEventListener("progress", h), d.upload.addEventListener("loadend", _)), (s.cancelToken || s.signal) && (u = (S) => {
      d && (r(!S || S.type ? new M(null, e, d) : S), d.abort(), d = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const E = Un(s.url);
    if (E && x.protocols.indexOf(E) === -1) {
      r(new g("Unsupported protocol " + E + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, Hn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof g ? u : new M(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new g(`timeout ${t} of ms exceeded`, g.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: p } = r;
    return p.unsubscribe = () => a.asap(l), p;
  }
}, $n = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, zn = async function* (e, t) {
  for await (const n of Jn(e))
    yield* $n(n, t);
}, Jn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, ke = (e, t, n, r) => {
  const s = zn(e, t);
  let o = 0, i, l = (p) => {
    i || (i = !0, r && r(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          l(), p.close();
          return;
        }
        let h = u.byteLength;
        if (n) {
          let b = o += h;
          n(b);
        }
        p.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(p) {
      return l(p), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, oe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", tt = oe && typeof ReadableStream == "function", Vn = oe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), nt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Wn = tt && nt(() => {
  let e = !1;
  const t = new Request(x.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Pe = 64 * 1024, he = tt && nt(() => a.isReadableStream(new Response("").body)), Y = {
  stream: he && ((e) => e.body)
};
oe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Y[t] && (Y[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new g(`Response type '${t}' is not supported`, g.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Kn = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(x.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Vn(e)).byteLength;
}, Xn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? Kn(t);
}, Zn = oe && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: p,
    responseType: c,
    headers: u,
    withCredentials: h = "same-origin",
    fetchOptions: b
  } = et(e);
  c = c ? (c + "").toLowerCase() : "text";
  let _ = Hn([s, o && o.toAbortSignal()], i), f;
  const m = _ && _.unsubscribe && (() => {
    _.unsubscribe();
  });
  let d;
  try {
    if (p && Wn && n !== "get" && n !== "head" && (d = await Xn(u, r)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (a.isFormData(r) && (k = R.headers.get("content-type")) && u.setContentType(k), R.body) {
        const [v, W] = Ae(
          d,
          Q(Oe(p))
        );
        r = ke(R.body, Pe, v, W);
      }
    }
    a.isString(h) || (h = h ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    f = new Request(t, {
      ...b,
      signal: _,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? h : void 0
    });
    let E = await fetch(f);
    const S = he && (c === "stream" || c === "response");
    if (he && (l || S && m)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((_e) => {
        R[_e] = E[_e];
      });
      const k = a.toFiniteNumber(E.headers.get("content-length")), [v, W] = l && Ae(
        k,
        Q(Oe(l), !0)
      ) || [];
      E = new Response(
        ke(E.body, Pe, v, () => {
          W && W(), m && m();
        }),
        R
      );
    }
    c = c || "text";
    let N = await Y[a.findKey(Y, c) || "text"](E, e);
    return !S && m && m(), await new Promise((R, k) => {
      Qe(R, k, {
        data: N,
        headers: C.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: e,
        request: f
      });
    });
  } catch (w) {
    throw m && m(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new g("Network Error", g.ERR_NETWORK, e, f),
      {
        cause: w.cause || w
      }
    ) : g.from(w, w && w.code, e, f);
  }
}), me = {
  http: fn,
  xhr: In,
  fetch: Zn
};
a.forEach(me, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ve = (e) => `- ${e}`, Gn = (e) => a.isFunction(e) || e === null || e === !1, rt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Gn(n) && (r = me[(i = String(n)).toLowerCase()], r === void 0))
        throw new g(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, p]) => `adapter ${l} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(ve).join(`
`) : " " + ve(o[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: me
};
function ce(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new M(null, e);
}
function Ue(e) {
  return ce(e), e.headers = C.from(e.headers), e.data = le.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), rt.getAdapter(e.adapter || V.adapter)(e).then(function(r) {
    return ce(e), r.data = le.call(
      e,
      e.transformResponse,
      r
    ), r.headers = C.from(r.headers), r;
  }, function(r) {
    return Ge(r) || (ce(e), r && r.response && (r.response.data = le.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = C.from(r.response.headers))), Promise.reject(r);
  });
}
const st = "1.8.4", ie = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ie[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fe = {};
ie.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + st + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new g(
        s(i, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !Fe[i] && (Fe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
ie.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Qn(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], p = l === void 0 || i(l, o, e);
      if (p !== !0)
        throw new g("option " + o + " must be " + p, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + o, g.ERR_BAD_OPTION);
  }
}
const G = {
  assertOptions: Qn,
  validators: ie
}, O = G.validators;
let D = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ce(),
      response: new Ce()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = j(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && G.assertOptions(r, {
      silentJSONParsing: O.transitional(O.boolean),
      forcedJSONParsing: O.transitional(O.boolean),
      clarifyTimeoutError: O.transitional(O.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : G.assertOptions(s, {
      encode: O.function,
      serialize: O.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), G.assertOptions(n, {
      baseUrl: O.spelling("baseURL"),
      withXsrfToken: O.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = C.concat(i, o);
    const l = [];
    let p = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (p = p && m.synchronous, l.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, h = 0, b;
    if (!p) {
      const f = [Ue.bind(this), void 0];
      for (f.unshift.apply(f, l), f.push.apply(f, c), b = f.length, u = Promise.resolve(n); h < b; )
        u = u.then(f[h++], f[h++]);
      return u;
    }
    b = l.length;
    let _ = n;
    for (h = 0; h < b; ) {
      const f = l[h++], m = l[h++];
      try {
        _ = f(_);
      } catch (d) {
        m.call(this, d);
        break;
      }
    }
    try {
      u = Ue.call(this, _);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, b = c.length; h < b; )
      u = u.then(c[h++], c[h++]);
    return u;
  }
  getUri(t) {
    t = j(this.defaults, t);
    const n = Ye(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ke(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  D.prototype[t] = function(n, r) {
    return this.request(j(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(j(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  D.prototype[t] = n(), D.prototype[t + "Form"] = n(!0);
});
let Yn = class ot {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new M(o, i, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ot(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function er(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function tr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ge = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ge).forEach(([e, t]) => {
  ge[t] = e;
});
function it(e) {
  const t = new D(e), n = De(D.prototype.request, t);
  return a.extend(n, D.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return it(j(e, s));
  }, n;
}
const y = it(V);
y.Axios = D;
y.CanceledError = M;
y.CancelToken = Yn;
y.isCancel = Ge;
y.VERSION = st;
y.toFormData = se;
y.AxiosError = g;
y.Cancel = y.CanceledError;
y.all = function(t) {
  return Promise.all(t);
};
y.spread = er;
y.isAxiosError = tr;
y.mergeConfig = j;
y.AxiosHeaders = C;
y.formToJSON = (e) => Ze(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = rt.getAdapter;
y.HttpStatusCode = ge;
y.default = y;
const {
  Axios: cr,
  AxiosError: ur,
  CanceledError: fr,
  isCancel: dr,
  CancelToken: pr,
  VERSION: hr,
  all: mr,
  Cancel: gr,
  isAxiosError: br,
  spread: wr,
  toFormData: yr,
  AxiosHeaders: _r,
  HttpStatusCode: Er,
  formToJSON: Sr,
  getAdapter: xr,
  mergeConfig: Rr
} = y, L = y.create({
  baseURL: "",
  withCredentials: !0
}), Cr = (e) => {
  L.defaults.baseURL = e;
}, Tr = ee("auth", () => {
  ut();
  const e = $(null), t = $(!1), n = $(!1);
  let r = "";
  const s = async (f) => {
    r = f;
  }, o = () => n.value, i = async () => {
    try {
      const f = await L.post("/login/login_by_token", {}, {
        withCredentials: !0
        // Important pour envoyer les cookies
      });
      return f.status === 200 && f.data.user_detail ? (e.value = f.data.user_detail, n.value = !0, await h(), !0) : !1;
    } catch (f) {
      return console.error("Erreur lors de la vérification par cookie:", f), !t.value && (t.value = !0, await u()) ? await i() : !1;
    }
  }, l = async (f, m) => {
    try {
      const d = new URLSearchParams();
      d.append("username", f), d.append("password", m);
      const w = await L.post("/login", d, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        withCredentials: !0
        // Important pour recevoir les cookies
      });
      return w.status === 200 ? (n.value = !0, e.value = w.data.user_detail || null, w.data.user_id && sessionStorage.setItem("user_id", w.data.user_id.toString()), !0) : !1;
    } catch (d) {
      return console.error("Erreur de connexion:", d), !1;
    }
  }, p = async () => await i(), c = async () => {
    var f;
    try {
      const m = await L.get("/user/me", {
        withCredentials: !0
        // S'assure que les cookies sont envoyés
      });
      return m != null && m.data ? (console.log("fetch current loggedin"), console.log(m.data), e.value = m.data, n.value = !0, await h(), e.value) : (console.warn("Utilisateur introuvable"), await b(), null);
    } catch (m) {
      return ((f = m.response) == null ? void 0 : f.status) === 401 && await u() ? await c() : (console.error("Erreur récupération utilisateur :", m), await b(), null);
    }
  }, u = async () => {
    try {
      return (await L.post("/login/refresh", {}, {
        withCredentials: !0
      })).status === 200;
    } catch (f) {
      return console.error("Impossible de rafraîchir le token", f), !1;
    }
  }, h = async () => {
    if (!e.value) {
      console.log("Aucun utilisateur chargé.");
      return;
    }
    try {
      const f = await L.get(
        `/role/get_highest_privilege_for_each_action_based_on_user_role/${e.value.id}`,
        { withCredentials: !0 }
      );
      e.value.privilege = f.data, sessionStorage.setItem("privileges", JSON.stringify(f.data));
    } catch (f) {
      console.error("Erreur récupération privilèges :", f);
    }
  }, b = async () => {
    try {
      e.value = null, n.value = !1, t.value = !1, sessionStorage.removeItem("privileges"), sessionStorage.removeItem("user_id"), (await L.post("/login/logout", {}, {
        withCredentials: !0
      })).status === 200 || console.warn("Logout échoué côté serveur, mais on continue le reset local."), window.location.href = r;
    } catch (f) {
      console.error("Erreur lors du logout :", f), window.location.href = r;
    }
  };
  return {
    current_user: e,
    isAuthenticated: n,
    setRootUrl: s,
    login: l,
    loginByToken: p,
    fetchCurrentLoggedInUser: c,
    refreshAccessToken: u,
    getUserHighestRolePermission: h,
    getCurrentUser: async () => o() && e.value ? (e.value.privilege || await h(), e.value) : await i() ? e.value : await c(),
    logout: b,
    checkAuthenticated: o,
    checkAuthByCookie: i
  };
}), Ar = ee("color", {
  state: () => ({}),
  actions: {
    getColorClasses(e) {
      switch (e) {
        default:
          return {
            bgClass: "bg-gray-100",
            textClass: "text-gray-800"
          };
        case "pink":
          return {
            bgClass: "bg-pink-100",
            textClass: "text-pink-800"
          };
        case "yellow":
          return {
            bgClass: "bg-yellow-100",
            textClass: "text-yellow-800"
          };
        case "teal":
          return {
            bgClass: "bg-teal-100",
            textClass: "text-teal-800"
          };
        case "red":
          return {
            bgClass: "bg-red-100",
            textClass: "text-red-800"
          };
        case "blue":
          return {
            bgClass: "bg-blue-100",
            textClass: "text-blue-800"
          };
        case "green":
          return {
            bgClass: "bg-green-100",
            textClass: "text-green-800"
          };
        case "indigo":
          return {
            bgClass: "bg-indigo-100",
            textClass: "text-indigo-800"
          };
        case "purple":
          return {
            bgClass: "bg-purple-100",
            textClass: "text-purple-800"
          };
        case "orange":
          return {
            bgClass: "bg-orange-100",
            textClass: "text-orange-800"
          };
        case "amber":
          return {
            bgClass: "bg-amber-100",
            textClass: "text-amber-800"
          };
        case "lime":
          return {
            bgClass: "bg-lime-100",
            textClass: "text-lime-800"
          };
        case "emerald":
          return {
            bgClass: "bg-emerald-100",
            textClass: "text-emerald-800"
          };
        case "cyan":
          return {
            bgClass: "bg-cyan-100",
            textClass: "text-cyan-800"
          };
        case "sky":
          return {
            bgClass: "bg-sky-100",
            textClass: "text-sky-800"
          };
        case "violet":
          return {
            bgClass: "bg-violet-100",
            textClass: "text-violet-800"
          };
        case "fuchsia":
          return {
            bgClass: "bg-fuchsia-100",
            textClass: "text-fuchsia-800"
          };
        case "rose":
          return {
            bgClass: "bg-rose-100",
            textClass: "text-rose-800"
          };
        case "stone":
          return {
            bgClass: "bg-stone-100",
            textClass: "text-stone-800"
          };
        case "zinc":
          return {
            bgClass: "bg-zinc-100",
            textClass: "text-zinc-800"
          };
        case "neutral":
          return {
            bgClass: "bg-neutral-100",
            textClass: "text-neutral-800"
          };
        case "slate":
          return {
            bgClass: "bg-slate-100",
            textClass: "text-slate-800"
          };
      }
    }
  }
}), Or = ee("dateFormatter", () => {
  function e(t) {
    const n = new Date(t);
    if (isNaN(n.getTime()))
      throw new Error("Date invalide");
    const r = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ], s = n.getDate(), o = r[n.getMonth()], i = n.getFullYear();
    return `${s} ${o} ${i}`;
  }
  return { formatDate: e };
});
function Nr() {
  return { ...Be.role };
}
function kr() {
  return { ...Be.privilege };
}
export {
  ir as Spinner,
  or as Toast,
  L as api,
  kr as createDefaultPrivilege,
  Nr as createDefaultRole,
  Be as role,
  Cr as setApiBaseURL,
  Tr as useAuthStore,
  Ar as useColorStore,
  Or as useDateFormatter,
  wt as useSpinnerStore,
  ft as useToast
};
