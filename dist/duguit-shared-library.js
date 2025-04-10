import { ref as j, defineComponent as Le, createElementBlock as U, openBlock as F, Fragment as ct, renderList as ut, unref as fe, normalizeClass as Se, createElementVNode as N, createCommentVNode as X, toDisplayString as ft } from "vue";
import { defineStore as te } from "pinia";
import { useRouter as dt, useRoute as pt } from "vue-router";
const M = j([]);
function ht() {
  const e = (n, r) => {
    const s = Date.now();
    M.value.push({ id: s, type: n, message: r }), console.log("Toast : " + M.value), setTimeout(() => {
      t(s);
    }, 5e3);
  }, t = (n) => {
    M.value = M.value.filter((r) => r.id !== n);
  };
  return {
    toasts: M,
    createToast: e,
    removeToast: t
  };
}
const mt = {
  id: "toast-container",
  class: "absolute bottom-5 right-5"
}, gt = {
  key: 0,
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, bt = {
  key: 1,
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, wt = {
  key: 2,
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, yt = { class: "text-sm font-normal" }, _t = ["onClick"], fr = /* @__PURE__ */ Le({
  __name: "Toast",
  setup(e) {
    const { toasts: t, removeToast: n } = ht(), r = (o) => {
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
    return (o, i) => (F(), U("div", mt, [
      (F(!0), U(ct, null, ut(fe(t), (l) => (F(), U("div", {
        key: l.id,
        class: Se([s(l.type), "flex items-center gap-3 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"])
      }, [
        N("div", {
          class: Se([r(l.type), "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"])
        }, [
          l.type === "success" ? (F(), U("svg", gt, i[0] || (i[0] = [
            N("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" }, null, -1)
          ]))) : X("", !0),
          l.type === "danger" ? (F(), U("svg", bt, i[1] || (i[1] = [
            N("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" }, null, -1)
          ]))) : X("", !0),
          l.type === "warning" ? (F(), U("svg", wt, i[2] || (i[2] = [
            N("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" }, null, -1)
          ]))) : X("", !0)
        ], 2),
        N("div", yt, ft(l.message), 1),
        N("button", {
          onClick: (p) => fe(n)(l.id),
          class: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
        }, i[3] || (i[3] = [
          N("svg", {
            class: "w-3 h-3",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 14 14"
          }, [
            N("path", {
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            })
          ], -1)
        ]), 8, _t)
      ], 2))), 128))
    ]));
  }
}), Et = te("spinner", () => {
  const e = j(!1);
  function t() {
    e.value = !0;
  }
  function n() {
    e.value = !1;
  }
  return { isVisible: e, showSpinner: t, hideSpinner: n };
}), St = {
  key: 0,
  class: "loader"
}, xt = /* @__PURE__ */ Le({
  __name: "Spinner",
  setup(e) {
    const t = Et();
    return (n, r) => fe(t).isVisible ? (F(), U("span", St)) : X("", !0);
  }
}), Rt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, dr = /* @__PURE__ */ Rt(xt, [["__scopeId", "data-v-17414b6a"]]), Ct = { role: "", can_delete_user: !1, can_edit_user_role: !1, can_create_role: !1, can_see_logs: !1, can_delete_logs: !1, can_download_logs: !1, can_delete_role: !1, can_see_role_list: !1, can_edit_role: !1, can_add_user_role: !1, can_delete_user_role: !1, can_create_user: !1, can_add_user_to_intervention: !1, can_remove_user_from_intervention: !1, can_access_sav: !1, can_access_be: !1, can_generate_tia_project: !1, can_export_standard_fb_to_xml: !1, tier: 1, color: "" }, Tt = { can_delete_user: !1, can_edit_user_role: !1, can_create_role: !1, can_see_logs: !1, can_delete_logs: !1, can_download_logs: !1, can_delete_role: !1, can_see_role_list: !1, can_edit_role: !1, can_add_user_role: !1, can_delete_user_role: !1, can_create_user: !1, can_add_user_to_intervention: !1, can_remove_user_from_intervention: !1, can_access_sav: !1, can_access_be: !1, can_generate_tia_project: !1, can_export_standard_fb_to_xml: !1, tier: 0 }, At = ["pink", "yellow", "teal", "red", "blue", "green", "indigo", "purple", "orange", "amber", "lime", "emerald", "cyan", "sky", "violet", "fuchsia", "rose", "stone", "zinc", "neutral", "slate"], Ot = { can_delete_user: "Supprimer un utilisateur", can_edit_user_role: "Editer les rôles d'un utilisateur", can_create_role: "Créer un nouveau rôle", can_see_logs: "Voir les logs", can_delete_logs: "Supprimer les logs", can_download_logs: "Télécharger les logs", can_delete_role: "Supprimer un rôle", can_see_role_list: "Voir la liste des rôles", can_edit_role: "Editer les rôles", can_add_user_role: "Ajouter un rôle à un utilisateur", can_delete_user_role: "Supprimer un rôle à un utilisateur", can_create_user: "Créer un utilisateur", can_add_user_to_intervention: "Ajouter un intervenant à une intervention", can_remove_user_from_intervention: "Supprimer un intervenant d'une intervention", can_access_sav: "Peut acceder aux applications SAV", can_access_be: "Peut acceder aux applications BE", can_generate_tia_project: "Peut Générer un Projet TIA Portal (nécessite TIA OPENESS)", can_export_standard_fb_to_xml: "Peut exporter la Bibliothèque de fonctions standards en XML" }, je = {
  role: Ct,
  privilege: Tt,
  colorOption: At,
  privilegeOption: Ot
};
function Ie(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: kt } = Object.prototype, { getPrototypeOf: we } = Object, ne = /* @__PURE__ */ ((e) => (t) => {
  const n = kt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => ne(t) === e), re = (e) => (t) => typeof t === e, { isArray: I } = Array, J = re("undefined");
function vt(e) {
  return e !== null && !J(e) && e.constructor !== null && !J(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qe = A("ArrayBuffer");
function Nt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qe(e.buffer), t;
}
const Pt = re("string"), T = re("function"), Me = re("number"), se = (e) => e !== null && typeof e == "object", Ut = (e) => e === !0 || e === !1, Z = (e) => {
  if (ne(e) !== "object")
    return !1;
  const t = we(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ft = A("Date"), Bt = A("File"), Dt = A("Blob"), Lt = A("FileList"), jt = (e) => se(e) && T(e.pipe), It = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = ne(e)) === "formdata" || // detect form-data instance
  t === "object" && T(e.toString) && e.toString() === "[object FormData]"));
}, qt = A("URLSearchParams"), [Mt, $t, Ht, zt] = ["ReadableStream", "Request", "Response", "Headers"].map(A), Jt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function V(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), I(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function $e(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, He = (e) => !J(e) && e !== B;
function de() {
  const { caseless: e } = He(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && $e(t, s) || s;
    Z(t[o]) && Z(r) ? t[o] = de(t[o], r) : Z(r) ? t[o] = de({}, r) : I(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && V(arguments[r], n);
  return t;
}
const Vt = (e, t, n, { allOwnKeys: r } = {}) => (V(t, (s, o) => {
  n && T(s) ? e[o] = Ie(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Wt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Kt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xt = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && we(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Zt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Gt = (e) => {
  if (!e) return null;
  if (I(e)) return e;
  let t = e.length;
  if (!Me(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Qt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && we(Uint8Array)), Yt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, en = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, tn = A("HTMLFormElement"), nn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), xe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), rn = A("RegExp"), ze = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  V(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, sn = (e) => {
  ze(e, (t, n) => {
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
}, on = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return I(e) ? r(e) : r(String(e).split(t)), n;
}, an = () => {
}, ln = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function cn(e) {
  return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const un = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (se(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = I(r) ? [] : {};
        return V(r, (i, l) => {
          const p = n(i, s + 1);
          !J(p) && (o[l] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, fn = A("AsyncFunction"), dn = (e) => e && (se(e) || T(e)) && T(e.then) && T(e.catch), Je = ((e, t) => e ? setImmediate : t ? ((n, r) => (B.addEventListener("message", ({ source: s, data: o }) => {
  s === B && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), B.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  T(B.postMessage)
), pn = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || Je, a = {
  isArray: I,
  isArrayBuffer: qe,
  isBuffer: vt,
  isFormData: It,
  isArrayBufferView: Nt,
  isString: Pt,
  isNumber: Me,
  isBoolean: Ut,
  isObject: se,
  isPlainObject: Z,
  isReadableStream: Mt,
  isRequest: $t,
  isResponse: Ht,
  isHeaders: zt,
  isUndefined: J,
  isDate: Ft,
  isFile: Bt,
  isBlob: Dt,
  isRegExp: rn,
  isFunction: T,
  isStream: jt,
  isURLSearchParams: qt,
  isTypedArray: Qt,
  isFileList: Lt,
  forEach: V,
  merge: de,
  extend: Vt,
  trim: Jt,
  stripBOM: Wt,
  inherits: Kt,
  toFlatObject: Xt,
  kindOf: ne,
  kindOfTest: A,
  endsWith: Zt,
  toArray: Gt,
  forEachEntry: Yt,
  matchAll: en,
  isHTMLForm: tn,
  hasOwnProperty: xe,
  hasOwnProp: xe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ze,
  freezeMethods: sn,
  toObjectSet: on,
  toCamelCase: nn,
  noop: an,
  toFiniteNumber: ln,
  findKey: $e,
  global: B,
  isContextDefined: He,
  isSpecCompliantForm: cn,
  toJSONObject: un,
  isAsyncFn: fn,
  isThenable: dn,
  setImmediate: Je,
  asap: pn
};
function b(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(b, Error, {
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
const Ve = b.prototype, We = {};
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
  We[e] = { value: e };
});
Object.defineProperties(b, We);
Object.defineProperty(Ve, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ve);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (l) => l !== "isAxiosError"), b.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const hn = null;
function pe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ke(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Re(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ke(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function mn(e) {
  return a.isArray(e) && !e.some(pe);
}
const gn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function oe(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, h) {
    return !a.isUndefined(h[g]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null) return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!p && a.isBlob(f))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, g, h) {
    let y = f;
    if (f && !h && typeof f == "object") {
      if (a.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && mn(f) || (a.isFileList(f) || a.endsWith(g, "[]")) && (y = a.toArray(f)))
        return g = Ke(g), y.forEach(function(S, k) {
          !(a.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Re([g], k, o) : i === null ? g : g + "[]",
            c(S)
          );
        }), !1;
    }
    return pe(f) ? !0 : (t.append(Re(h, g, o), c(f)), !1);
  }
  const d = [], w = Object.assign(gn, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: pe
  });
  function m(f, g) {
    if (!a.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(f), a.forEach(f, function(y, E) {
        (!(a.isUndefined(y) || y === null) && s.call(
          t,
          y,
          a.isString(E) ? E.trim() : E,
          g,
          w
        )) === !0 && m(y, g ? g.concat(E) : [E]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Ce(e) {
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
function ye(e, t) {
  this._pairs = [], e && oe(e, this, t);
}
const Xe = ye.prototype;
Xe.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xe.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ce);
  } : Ce;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function bn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ze(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || bn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ye(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Te {
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
const Ge = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, wn = typeof URLSearchParams < "u" ? URLSearchParams : ye, yn = typeof FormData < "u" ? FormData : null, _n = typeof Blob < "u" ? Blob : null, En = {
  isBrowser: !0,
  classes: {
    URLSearchParams: wn,
    FormData: yn,
    Blob: _n
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _e = typeof window < "u" && typeof document < "u", he = typeof navigator == "object" && navigator || void 0, Sn = _e && (!he || ["ReactNative", "NativeScript", "NS"].indexOf(he.product) < 0), xn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Rn = _e && window.location.href || "http://localhost", Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _e,
  hasStandardBrowserEnv: Sn,
  hasStandardBrowserWebWorkerEnv: xn,
  navigator: he,
  origin: Rn
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...Cn,
  ...En
};
function Tn(e, t) {
  return oe(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function An(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function On(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Qe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), p = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, p ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = On(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(An(r), s, n, 0);
    }), n;
  }
  return null;
}
function kn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const W = {
  transitional: Ge,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Qe(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return oe(
          l ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), kn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || W.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? b.from(l, b.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
  W.headers[e] = {};
});
const vn = a.toObjectSet([
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
]), Nn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && vn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ae = Symbol("internals");
function $(e) {
  return e && String(e).trim().toLowerCase();
}
function G(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(G) : String(e);
}
function Pn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Un = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function le(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Fn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Bn(e, t) {
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
      const u = $(p);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || p] = G(l));
    }
    const i = (l, p) => a.forEach(l, (c, u) => o(c, u, p));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Un(t))
      i(Nn(t), n);
    else if (a.isHeaders(t))
      for (const [l, p] of t.entries())
        o(p, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = $(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Pn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = $(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || le(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = $(i), i) {
        const l = a.findKey(r, i);
        l && (!n || le(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || le(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = G(s), delete n[o];
        return;
      }
      const l = t ? Fn(o) : String(o).trim();
      l !== o && delete n[o], n[l] = G(s), r[l] = !0;
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
    const r = (this[Ae] = this[Ae] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = $(i);
      r[l] || (Bn(s, i), r[l] = !0);
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
function ce(e, t) {
  const n = this || W, r = t || n, s = C.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ye(e) {
  return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(q, b, {
  __CANCEL__: !0
});
function et(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Dn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ln(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[s] = p, r[s] = c;
    let d = o, w = 0;
    for (; d !== s; )
      w += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const m = u && c - u;
    return m ? Math.round(w * 1e3 / m) : void 0;
  };
}
function jn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? i(c, u) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const Y = (e, t, n = 3) => {
  let r = 0;
  const s = Ln(50, 250);
  return jn((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, p = i - r, c = s(p), u = i <= l;
    r = i;
    const d = {
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
    e(d);
  }, n);
}, Oe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, ke = (e) => (...t) => a.asap(() => e(...t)), In = x.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, x.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(x.origin),
  x.navigator && /(msie|trident)/i.test(x.navigator.userAgent)
) : () => !0, qn = x.hasStandardBrowserEnv ? (
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
function Mn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $n(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function tt(e, t, n) {
  let r = !Mn(t);
  return e && (r || n == !1) ? $n(e, t) : t;
}
const ve = (e) => e instanceof C ? { ...e } : e;
function L(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d, w) {
    return a.isPlainObject(c) && a.isPlainObject(u) ? a.merge.call({ caseless: w }, c, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(c, u, d, w) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c, d, w);
    } else return r(c, u, d, w);
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
  function l(c, u, d) {
    if (d in t)
      return r(c, u);
    if (d in e)
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
    headers: (c, u, d) => s(ve(c), ve(u), d, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = p[u] || s, w = d(e[u], t[u], u);
    a.isUndefined(w) && d !== l || (n[u] = w);
  }), n;
}
const nt = (e) => {
  const t = L({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = C.from(i), t.url = Ze(tt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let p;
  if (a.isFormData(n)) {
    if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((p = i.getContentType()) !== !1) {
      const [c, ...u] = p ? p.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (x.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && In(t.url))) {
    const c = s && o && qn.read(o);
    c && i.set(s, c);
  }
  return t;
}, Hn = typeof XMLHttpRequest < "u", zn = Hn && function(e) {
  return new Promise(function(n, r) {
    const s = nt(e);
    let o = s.data;
    const i = C.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: p, onDownloadProgress: c } = s, u, d, w, m, f;
    function g() {
      m && m(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function y() {
      if (!h)
        return;
      const S = C.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), R = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: S,
        config: e,
        request: h
      };
      et(function(P) {
        n(P), g();
      }, function(P) {
        r(P), g();
      }, R), h = null;
    }
    "onloadend" in h ? h.onloadend = y : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, h.onabort = function() {
      h && (r(new b("Request aborted", b.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new b("Network Error", b.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const R = s.transitional || Ge;
      s.timeoutErrorMessage && (k = s.timeoutErrorMessage), r(new b(
        k,
        R.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(k, R) {
      h.setRequestHeader(R, k);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), l && l !== "json" && (h.responseType = s.responseType), c && ([w, f] = Y(c, !0), h.addEventListener("progress", w)), p && h.upload && ([d, m] = Y(p), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", m)), (s.cancelToken || s.signal) && (u = (S) => {
      h && (r(!S || S.type ? new q(null, e, h) : S), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const E = Dn(s.url);
    if (E && x.protocols.indexOf(E) === -1) {
      r(new b("Unsupported protocol " + E + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, Jn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof b ? u : new q(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
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
}, Vn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Wn = async function* (e, t) {
  for await (const n of Kn(e))
    yield* Vn(n, t);
}, Kn = async function* (e) {
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
}, Ne = (e, t, n, r) => {
  const s = Wn(e, t);
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
        let d = u.byteLength;
        if (n) {
          let w = o += d;
          n(w);
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
}, ie = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", rt = ie && typeof ReadableStream == "function", Xn = ie && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), st = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Zn = rt && st(() => {
  let e = !1;
  const t = new Request(x.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Pe = 64 * 1024, me = rt && st(() => a.isReadableStream(new Response("").body)), ee = {
  stream: me && ((e) => e.body)
};
ie && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ee[t] && (ee[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new b(`Response type '${t}' is not supported`, b.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Gn = async (e) => {
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
    return (await Xn(e)).byteLength;
}, Qn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? Gn(t);
}, Yn = ie && (async (e) => {
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
    withCredentials: d = "same-origin",
    fetchOptions: w
  } = nt(e);
  c = c ? (c + "").toLowerCase() : "text";
  let m = Jn([s, o && o.toAbortSignal()], i), f;
  const g = m && m.unsubscribe && (() => {
    m.unsubscribe();
  });
  let h;
  try {
    if (p && Zn && n !== "get" && n !== "head" && (h = await Qn(u, r)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), v;
      if (a.isFormData(r) && (v = R.headers.get("content-type")) && u.setContentType(v), R.body) {
        const [P, K] = Oe(
          h,
          Y(ke(p))
        );
        r = Ne(R.body, Pe, P, K);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    f = new Request(t, {
      ...w,
      signal: m,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let E = await fetch(f);
    const S = me && (c === "stream" || c === "response");
    if (me && (l || S && g)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((Ee) => {
        R[Ee] = E[Ee];
      });
      const v = a.toFiniteNumber(E.headers.get("content-length")), [P, K] = l && Oe(
        v,
        Y(ke(l), !0)
      ) || [];
      E = new Response(
        Ne(E.body, Pe, P, () => {
          K && K(), g && g();
        }),
        R
      );
    }
    c = c || "text";
    let k = await ee[a.findKey(ee, c) || "text"](E, e);
    return !S && g && g(), await new Promise((R, v) => {
      et(R, v, {
        data: k,
        headers: C.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: e,
        request: f
      });
    });
  } catch (y) {
    throw g && g(), y && y.name === "TypeError" && /fetch/i.test(y.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, f),
      {
        cause: y.cause || y
      }
    ) : b.from(y, y && y.code, e, f);
  }
}), ge = {
  http: hn,
  xhr: zn,
  fetch: Yn
};
a.forEach(ge, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ue = (e) => `- ${e}`, er = (e) => a.isFunction(e) || e === null || e === !1, ot = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !er(n) && (r = ge[(i = String(n)).toLowerCase()], r === void 0))
        throw new b(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, p]) => `adapter ${l} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ue).join(`
`) : " " + Ue(o[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ge
};
function ue(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new q(null, e);
}
function Fe(e) {
  return ue(e), e.headers = C.from(e.headers), e.data = ce.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ot.getAdapter(e.adapter || W.adapter)(e).then(function(r) {
    return ue(e), r.data = ce.call(
      e,
      e.transformResponse,
      r
    ), r.headers = C.from(r.headers), r;
  }, function(r) {
    return Ye(r) || (ue(e), r && r.response && (r.response.data = ce.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = C.from(r.response.headers))), Promise.reject(r);
  });
}
const it = "1.8.4", ae = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ae[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Be = {};
ae.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + it + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new b(
        s(i, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !Be[i] && (Be[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
ae.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function tr(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], p = l === void 0 || i(l, o, e);
      if (p !== !0)
        throw new b("option " + o + " must be " + p, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const Q = {
  assertOptions: tr,
  validators: ae
}, O = Q.validators;
let D = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Te(),
      response: new Te()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = L(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Q.assertOptions(r, {
      silentJSONParsing: O.transitional(O.boolean),
      forcedJSONParsing: O.transitional(O.boolean),
      clarifyTimeoutError: O.transitional(O.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Q.assertOptions(s, {
      encode: O.function,
      serialize: O.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Q.assertOptions(n, {
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
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (p = p && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, w;
    if (!p) {
      const f = [Fe.bind(this), void 0];
      for (f.unshift.apply(f, l), f.push.apply(f, c), w = f.length, u = Promise.resolve(n); d < w; )
        u = u.then(f[d++], f[d++]);
      return u;
    }
    w = l.length;
    let m = n;
    for (d = 0; d < w; ) {
      const f = l[d++], g = l[d++];
      try {
        m = f(m);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      u = Fe.call(this, m);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, w = c.length; d < w; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = L(this.defaults, t);
    const n = tt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ze(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  D.prototype[t] = function(n, r) {
    return this.request(L(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(L(l || {}, {
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
let nr = class at {
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
      r.reason || (r.reason = new q(o, i, l), n(r.reason));
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
      token: new at(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function rr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function sr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const be = {
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
Object.entries(be).forEach(([e, t]) => {
  be[t] = e;
});
function lt(e) {
  const t = new D(e), n = Ie(D.prototype.request, t);
  return a.extend(n, D.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return lt(L(e, s));
  }, n;
}
const _ = lt(W);
_.Axios = D;
_.CanceledError = q;
_.CancelToken = nr;
_.isCancel = Ye;
_.VERSION = it;
_.toFormData = oe;
_.AxiosError = b;
_.Cancel = _.CanceledError;
_.all = function(t) {
  return Promise.all(t);
};
_.spread = rr;
_.isAxiosError = sr;
_.mergeConfig = L;
_.AxiosHeaders = C;
_.formToJSON = (e) => Qe(a.isHTMLForm(e) ? new FormData(e) : e);
_.getAdapter = ot.getAdapter;
_.HttpStatusCode = be;
_.default = _;
const {
  Axios: mr,
  AxiosError: gr,
  CanceledError: br,
  isCancel: wr,
  CancelToken: yr,
  VERSION: _r,
  all: Er,
  Cancel: Sr,
  isAxiosError: xr,
  spread: Rr,
  toFormData: Cr,
  AxiosHeaders: Tr,
  HttpStatusCode: Ar,
  formToJSON: Or,
  getAdapter: kr,
  mergeConfig: vr
} = _, H = _.create({
  baseURL: void 0
});
H.interceptors.request.use(async (e) => {
  if (e.url !== "/login/refresh") {
    const t = ar(), n = localStorage.getItem("access_token");
    if (n && !t.isTokenExpired(n))
      e.headers.Authorization = `Bearer ${n}`;
    else if (n && t.isTokenExpired(n)) {
      const r = await t.refreshAccessToken();
      r || (console.log("Impossible de rafraîchir le token, déconnexion..."), await t.logout()), e.headers.Authorization = `Bearer ${r}`;
    } else
      await t.logout();
  }
  return e;
}, (e) => Promise.reject(e));
class z extends Error {
}
z.prototype.name = "InvalidTokenError";
function or(e) {
  return decodeURIComponent(atob(e).replace(/(.)/g, (t, n) => {
    let r = n.charCodeAt(0).toString(16).toUpperCase();
    return r.length < 2 && (r = "0" + r), "%" + r;
  }));
}
function ir(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return or(t);
  } catch {
    return atob(t);
  }
}
function De(e, t) {
  if (typeof e != "string")
    throw new z("Invalid token specified: must be a string");
  t || (t = {});
  const n = t.header === !0 ? 0 : 1, r = e.split(".")[n];
  if (typeof r != "string")
    throw new z(`Invalid token specified: missing part #${n + 1}`);
  let s;
  try {
    s = ir(r);
  } catch (o) {
    throw new z(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`);
  }
  try {
    return JSON.parse(s);
  } catch (o) {
    throw new z(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`);
  }
}
const ar = te("auth", () => {
  const e = dt();
  pt();
  const t = j(localStorage.getItem("access_token")), n = j(localStorage.getItem("refresh_token")), r = j(null), s = j(!1), o = (m, f) => {
    t.value = m, n.value = f, localStorage.setItem("access_token", m), localStorage.setItem("refresh_token", f);
  }, i = async () => {
    try {
      if (t.value && n.value)
        try {
          (await H.post("/login/login_by_token", {}, {
            headers: {
              "Content-Type": "application/json"
            }
          })).data.user_detail && (console.log(`Connexion via Token
Redirection vers /interventions`), await e.push("/interventions"));
        } catch (m) {
          if (m.response && m.response.status === 401)
            if (s.value)
              console.log("Tentative de nouvelle connexion infructueuse"), await d();
            else
              try {
                await c(), s.value = !0, await i();
              } catch (f) {
                console.log("{loginByToken} Une erreur s'est produite : " + (f.message || f));
              }
        }
      else
        throw new Error("Pas de token dans le stockage local, connexion manuelle requise");
    } catch (m) {
      console.log("Une erreur s'est produite : " + (m.message || m));
    }
  }, l = async () => {
    try {
      if ((!t.value || p(t.value)) && !await c())
        return console.log("Impossible de rafraîchir le token, déconnexion..."), await d(), null;
      if (!t.value)
        return console.log("Aucun token valide disponible, déconnexion..."), await d(), null;
      const m = De(t.value);
      if (!m || !m.user_id)
        return console.log("Token invalide, déconnexion..."), await d(), null;
      const f = await H.get("/user/show_user_ById", {
        params: { user_id: m.user_id },
        headers: { Authorization: `Bearer ${t.value}` }
      });
      return f.data ? (r.value = f.data, await u(), r.value) : (console.log("Aucune donnée utilisateur trouvée, déconnexion..."), await d(), null);
    } catch (m) {
      return console.log("Erreur lors de la récupération de l'utilisateur connecté :", m.message || m), await d(), null;
    }
  }, p = (m) => {
    try {
      const f = De(m), g = Date.now() / 1e3;
      return f.exp < g;
    } catch (f) {
      return console.log("Erreur :", f.message || f), !0;
    }
  }, c = async () => {
    s.value = !0;
    try {
      if (!n.value)
        throw new Error("Refresh token manquant");
      const m = await H.post("/login/refresh", {}, {
        headers: { Authorization: `Bearer ${n.value}` }
      });
      if (m.data.access_token) {
        const f = m.data.access_token;
        return o(f, n.value), s.value = !1, f;
      } else
        throw new Error("Aucun access token reçu");
    } catch (m) {
      return console.error("Erreur lors du rafraîchissement du token", m), await d(), !1;
    }
  }, u = async () => {
    if (!r.value)
      return console.log("Aucun utilisateur en mémoire, impossible de récupérer les privilèges."), null;
    try {
      if (r.value) {
        const m = await H.get(`/role/get_highest_privilege_for_each_action_based_on_user_role/${r.value.id}`, {
          headers: { Authorization: `Bearer ${t.value}` }
        });
        return m.data && (r.value.privilege = m.data, sessionStorage.setItem("privileges", JSON.stringify(m.data))), r.value.privilege || null;
      }
    } catch (m) {
      console.error("Erreur lors de la récupération des privilèges :", m);
    }
    return null;
  }, d = async () => {
    t.value = null, n.value = null, r.value = null, localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), sessionStorage.removeItem("privileges"), await e.push("/");
  };
  return {
    access_token: t,
    current_user: r,
    loginByToken: i,
    fetchCurrentLoggedInUser: l,
    refreshAccessToken: c,
    isTokenExpired: p,
    setTokens: o,
    getUserHighestRolePermission: u,
    getCurrentUser: async () => {
      try {
        return r.value ? (r.value.privilege || await u(), s.value = !1, r.value) : (s.value = !1, await l());
      } catch (m) {
        console.error("Erreur getCurrentUser :", m), await d();
      }
    },
    logout: d
  };
}), Nr = te("color", {
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
}), Pr = te("dateFormatter", () => {
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
function Ur() {
  return { ...je.role };
}
function Fr() {
  return { ...je.privilege };
}
export {
  dr as Spinner,
  fr as Toast,
  H as api,
  Fr as createDefaultPrivilege,
  Ur as createDefaultRole,
  je as role,
  ar as useAuthStore,
  Nr as useColorStore,
  Pr as useDateFormatter,
  Et as useSpinnerStore,
  ht as useToast
};
